/* eslint-disable max-len */
/*! For license information please see sw.js.LICENSE.txt */
(() => {
  var e = {
    136: () => {
      try {
        self['workbox:core:7.0.0'] && _();
      } catch (e) {}
    },
    447: () => {
      try {
        self['workbox:precaching:7.0.0'] && _();
      } catch (e) {}
    },
    227: () => {
      try {
        self['workbox:routing:7.0.0'] && _();
      } catch (e) {}
    },
    390: () => {
      try {
        self['workbox:strategies:7.0.0'] && _();
      } catch (e) {}
    },
  };
  var t = {};
  function r(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (() => {
    r(136);
    class e extends Error {
      constructor(e, t) {
        super(
          ((e, ...t) => {
            let r = e;
            return t.length > 0 && (r += ` :: ${JSON.stringify(t)}`), r;
          })(e, t),
        ),
        (this.name = e),
        (this.details = t);
      }
    }
    const t = {
      googleAnalytics: 'googleAnalytics',
      precache: 'precache-v2',
      prefix: 'workbox',
      runtime: 'runtime',
      suffix: typeof registration != 'undefined' ? registration.scope : '',
    };
    const n = (e) => [t.prefix, e, t.suffix].filter((e) => e && e.length > 0).join('-');
    const s = (e) => e || n(t.precache);
    function a(e, t) {
      const r = t();
      return e.waitUntil(r), r;
    }
    function i(t) {
      if (!t) throw new e('add-to-cache-list-unexpected-type', { entry: t });
      if (typeof t == 'string') {
        const e = new URL(t, location.href);
        return { cacheKey: e.href, url: e.href };
      }
      const { revision: r, url: n } = t;
      if (!n) throw new e('add-to-cache-list-unexpected-type', { entry: t });
      if (!r) {
        const e = new URL(n, location.href);
        return { cacheKey: e.href, url: e.href };
      }
      const s = new URL(n, location.href);
      const a = new URL(n, location.href);
      return (
        s.searchParams.set('__WB_REVISION__', r),
        { cacheKey: s.href, url: a.href }
      );
    }
    r(447);
    class o {
      constructor() {
        (this.updatedURLs = []),
        (this.notUpdatedURLs = []),
        (this.handlerWillStart = async ({ request: e, state: t }) => {
          t && (t.originalRequest = e);
        }),
        (this.cachedResponseWillBeUsed = async ({
          event: e,
          state: t,
          cachedResponse: r,
        }) => {
          if (
            e.type === 'install'
              && t
              && t.originalRequest
              && t.originalRequest instanceof Request
          ) {
            const e = t.originalRequest.url;
            r ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e);
          }
          return r;
        });
      }
    }
    class c {
      constructor({ precacheController: e }) {
        (this.cacheKeyWillBeUsed = async ({ request: e, params: t }) => {
          const r = (t == null ? void 0 : t.cacheKey)
            || this._precacheController.getCacheKeyForURL(e.url);
          return r ? new Request(r, { headers: e.headers }) : e;
        }),
        (this._precacheController = e);
      }
    }
    let h;
    function l(e, t) {
      const r = new URL(e);
      for (const e of t) r.searchParams.delete(e);
      return r.href;
    }
    class u {
      constructor() {
        this.promise = new Promise((e, t) => {
          (this.resolve = e), (this.reject = t);
        });
      }
    }
    const f = new Set();
    function d(e) {
      return typeof e == 'string' ? new Request(e) : e;
    }
    r(390);
    class p {
      constructor(e, t) {
        (this._cacheKeys = {}),
        Object.assign(this, t),
        (this.event = t.event),
        (this._strategy = e),
        (this._handlerDeferred = new u()),
        (this._extendLifetimePromises = []),
        (this._plugins = [...e.plugins]),
        (this._pluginStateMap = new Map());
        for (const e of this._plugins) this._pluginStateMap.set(e, {});
        this.event.waitUntil(this._handlerDeferred.promise);
      }

      async fetch(t) {
        const { event: r } = this;
        let n = d(t);
        if (
          n.mode === 'navigate'
          && r instanceof FetchEvent
          && r.preloadResponse
        ) {
          const e = await r.preloadResponse;
          if (e) return e;
        }
        const s = this.hasCallback('fetchDidFail') ? n.clone() : null;
        try {
          for (const e of this.iterateCallbacks('requestWillFetch')) n = await e({ request: n.clone(), event: r });
        } catch (t) {
          if (t instanceof Error) {
            throw new e('plugin-error-request-will-fetch', {
              thrownErrorMessage: t.message,
            });
          }
        }
        const a = n.clone();
        try {
          let e;
          e = await fetch(
            n,
            n.mode === 'navigate' ? void 0 : this._strategy.fetchOptions,
          );
          for (const t of this.iterateCallbacks('fetchDidSucceed')) e = await t({ event: r, request: a, response: e });
          return e;
        } catch (e) {
          throw (
            (s
              && (await this.runCallbacks('fetchDidFail', {
                error: e,
                event: r,
                originalRequest: s.clone(),
                request: a.clone(),
              })),
            e)
          );
        }
      }

      async fetchAndCachePut(e) {
        const t = await this.fetch(e);
        const r = t.clone();
        return this.waitUntil(this.cachePut(e, r)), t;
      }

      async cacheMatch(e) {
        const t = d(e);
        let r;
        const { cacheName: n, matchOptions: s } = this._strategy;
        const a = await this.getCacheKey(t, 'read');
        const i = { ...s, cacheName: n };
        r = await caches.match(a, i);
        for (const e of this.iterateCallbacks('cachedResponseWillBeUsed')) {
          r = (await e({
            cacheName: n,
            matchOptions: s,
            cachedResponse: r,
            request: a,
            event: this.event,
          })) || void 0;
        }
        return r;
      }

      async cachePut(t, r) {
        const n = d(t);
        var s;
        await ((s = 0), new Promise((e) => setTimeout(e, s)));
        const a = await this.getCacheKey(n, 'write');
        if (!r) {
          throw new e('cache-put-with-no-response', {
            url:
              ((i = a.url),
              new URL(String(i), location.href).href.replace(
                new RegExp(`^${location.origin}`),
                '',
              )),
          });
        }
        var i;
        const o = await this._ensureResponseSafeToCache(r);
        if (!o) return !1;
        const { cacheName: c, matchOptions: h } = this._strategy;
        const u = await self.caches.open(c);
        const p = this.hasCallback('cacheDidUpdate');
        const y = p
          ? await (async function (e, t, r, n) {
            const s = l(t.url, r);
            if (t.url === s) return e.match(t, n);
            const a = { ...n, ignoreSearch: !0 };
            const i = await e.keys(t, a);
            for (const t of i) if (s === l(t.url, r)) return e.match(t, n);
          }(u, a.clone(), ['__WB_REVISION__'], h))
          : null;
        try {
          await u.put(a, p ? o.clone() : o);
        } catch (e) {
          if (e instanceof Error) {
            throw (
              (e.name === 'QuotaExceededError'
                && (await (async function () {
                  for (const e of f) await e();
                }())),
              e)
            );
          }
        }
        for (const e of this.iterateCallbacks('cacheDidUpdate')) {
          await e({
            cacheName: c,
            oldResponse: y,
            newResponse: o.clone(),
            request: a,
            event: this.event,
          });
        }
        return !0;
      }

      async getCacheKey(e, t) {
        const r = `${e.url} | ${t}`;
        if (!this._cacheKeys[r]) {
          let n = e;
          for (const e of this.iterateCallbacks('cacheKeyWillBeUsed')) {
            n = d(
              await e({
                mode: t,
                request: n,
                event: this.event,
                params: this.params,
              }),
            );
          }
          this._cacheKeys[r] = n;
        }
        return this._cacheKeys[r];
      }

      hasCallback(e) {
        for (const t of this._strategy.plugins) if (e in t) return !0;
        return !1;
      }

      async runCallbacks(e, t) {
        for (const r of this.iterateCallbacks(e)) await r(t);
      }

      * iterateCallbacks(e) {
        for (const t of this._strategy.plugins) {
          if (typeof t[e] == 'function') {
            const r = this._pluginStateMap.get(t);
            const n = (n) => {
              const s = { ...n, state: r };
              return t[e](s);
            };
            yield n;
          }
        }
      }

      waitUntil(e) {
        return this._extendLifetimePromises.push(e), e;
      }

      async doneWaiting() {
        let e;
        for (; (e = this._extendLifetimePromises.shift());) await e;
      }

      destroy() {
        this._handlerDeferred.resolve(null);
      }

      async _ensureResponseSafeToCache(e) {
        let t = e;
        let r = !1;
        for (const e of this.iterateCallbacks('cacheWillUpdate')) {
          if (
            ((t = (await e({
              request: this.request,
              response: t,
              event: this.event,
            })) || void 0),
            (r = !0),
            !t)
          ) break;
        }
        return r || (t && t.status !== 200 && (t = void 0)), t;
      }
    }
    class y {
      constructor(e = {}) {
        (this.cacheName = e.cacheName || n(t.runtime)),
        (this.plugins = e.plugins || []),
        (this.fetchOptions = e.fetchOptions),
        (this.matchOptions = e.matchOptions);
      }

      handle(e) {
        const [t] = this.handleAll(e);
        return t;
      }

      handleAll(e) {
        e instanceof FetchEvent && (e = { event: e, request: e.request });
        const t = e.event;
        const r = typeof e.request == 'string' ? new Request(e.request) : e.request;
        const n = 'params' in e ? e.params : void 0;
        const s = new p(this, { event: t, request: r, params: n });
        const a = this._getResponse(s, r, t);
        return [a, this._awaitComplete(a, s, r, t)];
      }

      async _getResponse(t, r, n) {
        let s;
        await t.runCallbacks('handlerWillStart', { event: n, request: r });
        try {
          if (((s = await this._handle(r, t)), !s || s.type === 'error')) throw new e('no-response', { url: r.url });
        } catch (e) {
          if (e instanceof Error) for (const a of t.iterateCallbacks('handlerDidError')) if (((s = await a({ error: e, event: n, request: r })), s)) break;
          if (!s) throw e;
        }
        for (const e of t.iterateCallbacks('handlerWillRespond')) s = await e({ event: n, request: r, response: s });
        return s;
      }

      async _awaitComplete(e, t, r, n) {
        let s;
        let a;
        try {
          s = await e;
        } catch (a) {}
        try {
          await t.runCallbacks('handlerDidRespond', {
            event: n,
            request: r,
            response: s,
          }),
          await t.doneWaiting();
        } catch (e) {
          e instanceof Error && (a = e);
        }
        if (
          (await t.runCallbacks('handlerDidComplete', {
            event: n,
            request: r,
            response: s,
            error: a,
          }),
          t.destroy(),
          a)
        ) throw a;
      }
    }
    class g extends y {
      constructor(e = {}) {
        (e.cacheName = s(e.cacheName)),
        super(e),
        (this._fallbackToNetwork = !1 !== e.fallbackToNetwork),
        this.plugins.push(g.copyRedirectedCacheableResponsesPlugin);
      }

      async _handle(e, t) {
        return (
          (await t.cacheMatch(e))
          || (t.event && t.event.type === 'install'
            ? await this._handleInstall(e, t)
            : await this._handleFetch(e, t))
        );
      }

      async _handleFetch(t, r) {
        let n;
        const s = r.params || {};
        if (!this._fallbackToNetwork) {
          throw new e('missing-precache-entry', {
            cacheName: this.cacheName,
            url: t.url,
          });
        }
        {
          const e = s.integrity;
          const a = t.integrity;
          const i = !a || a === e;
          (n = await r.fetch(
            new Request(t, {
              integrity: t.mode !== 'no-cors' ? a || e : void 0,
            }),
          )),
          e
              && i
              && t.mode !== 'no-cors'
              && (this._useDefaultCacheabilityPluginIfNeeded(),
              await r.cachePut(t, n.clone()));
        }
        return n;
      }

      async _handleInstall(t, r) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const n = await r.fetch(t);
        if (!(await r.cachePut(t, n.clone()))) {
          throw new e('bad-precaching-response', {
            url: t.url,
            status: n.status,
          });
        }
        return n;
      }

      _useDefaultCacheabilityPluginIfNeeded() {
        let e = null;
        let t = 0;
        for (const [r, n] of this.plugins.entries()) {
          n !== g.copyRedirectedCacheableResponsesPlugin
            && (n === g.defaultPrecacheCacheabilityPlugin && (e = r),
            n.cacheWillUpdate && t++);
        }
        t === 0
          ? this.plugins.push(g.defaultPrecacheCacheabilityPlugin)
          : t > 1 && e !== null && this.plugins.splice(e, 1);
      }
    }
    (g.defaultPrecacheCacheabilityPlugin = {
      cacheWillUpdate: async ({ response: e }) => (!e || e.status >= 400 ? null : e),
    }),
    (g.copyRedirectedCacheableResponsesPlugin = {
      cacheWillUpdate: async ({ response: t }) => (t.redirected
        ? await (async function (t, r) {
          let n = null;
          if (
            (t.url && (n = new URL(t.url).origin),
            n !== self.location.origin)
          ) throw new e('cross-origin-copy-response', { origin: n });
          const s = t.clone();
          const a = {
            headers: new Headers(s.headers),
            status: s.status,
            statusText: s.statusText,
          };
          const i = r ? r(a) : a;
          const o = (function () {
            if (void 0 === h) {
              const e = new Response('');
              if ('body' in e) {
                try {
                  new Response(e.body), (h = !0);
                } catch (e) {
                  h = !1;
                }
              }
              h = !1;
            }
            return h;
          }())
            ? s.body
            : await s.blob();
          return new Response(o, i);
        }(t))
        : t),
    });
    class w {
      constructor({
        cacheName: e,
        plugins: t = [],
        fallbackToNetwork: r = !0,
      } = {}) {
        (this._urlsToCacheKeys = new Map()),
        (this._urlsToCacheModes = new Map()),
        (this._cacheKeysToIntegrities = new Map()),
        (this._strategy = new g({
          cacheName: s(e),
          plugins: [...t, new c({ precacheController: this })],
          fallbackToNetwork: r,
        })),
        (this.install = this.install.bind(this)),
        (this.activate = this.activate.bind(this));
      }

      get strategy() {
        return this._strategy;
      }

      precache(e) {
        this.addToCacheList(e),
        this._installAndActiveListenersAdded
            || (self.addEventListener('install', this.install),
            self.addEventListener('activate', this.activate),
            (this._installAndActiveListenersAdded = !0));
      }

      addToCacheList(t) {
        const r = [];
        for (const n of t) {
          typeof n == 'string'
            ? r.push(n)
            : n && void 0 === n.revision && r.push(n.url);
          const { cacheKey: t, url: s } = i(n);
          const a = typeof n != 'string' && n.revision ? 'reload' : 'default';
          if (
            this._urlsToCacheKeys.has(s)
            && this._urlsToCacheKeys.get(s) !== t
          ) {
            throw new e('add-to-cache-list-conflicting-entries', {
              firstEntry: this._urlsToCacheKeys.get(s),
              secondEntry: t,
            });
          }
          if (typeof n != 'string' && n.integrity) {
            if (
              this._cacheKeysToIntegrities.has(t)
              && this._cacheKeysToIntegrities.get(t) !== n.integrity
            ) {
              throw new e('add-to-cache-list-conflicting-integrities', {
                url: s,
              });
            }
            this._cacheKeysToIntegrities.set(t, n.integrity);
          }
          if (
            (this._urlsToCacheKeys.set(s, t),
            this._urlsToCacheModes.set(s, a),
            r.length > 0)
          ) {
            const e = `Workbox is precaching URLs without revision info: ${r.join(
              ', ',
            )}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
            console.warn(e);
          }
        }
      }

      install(e) {
        return a(e, async () => {
          const t = new o();
          this.strategy.plugins.push(t);
          for (const [t, r] of this._urlsToCacheKeys) {
            const n = this._cacheKeysToIntegrities.get(r);
            const s = this._urlsToCacheModes.get(t);
            const a = new Request(t, {
              integrity: n,
              cache: s,
              credentials: 'same-origin',
            });
            await Promise.all(
              this.strategy.handleAll({
                params: { cacheKey: r },
                request: a,
                event: e,
              }),
            );
          }
          const { updatedURLs: r, notUpdatedURLs: n } = t;
          return { updatedURLs: r, notUpdatedURLs: n };
        });
      }

      activate(e) {
        return a(e, async () => {
          const e = await self.caches.open(this.strategy.cacheName);
          const t = await e.keys();
          const r = new Set(this._urlsToCacheKeys.values());
          const n = [];
          for (const s of t) r.has(s.url) || (await e.delete(s), n.push(s.url));
          return { deletedURLs: n };
        });
      }

      getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
      }

      getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
      }

      getCacheKeyForURL(e) {
        const t = new URL(e, location.href);
        return this._urlsToCacheKeys.get(t.href);
      }

      getIntegrityForCacheKey(e) {
        return this._cacheKeysToIntegrities.get(e);
      }

      async matchPrecache(e) {
        const t = e instanceof Request ? e.url : e;
        const r = this.getCacheKeyForURL(t);
        if (r) return (await self.caches.open(this.strategy.cacheName)).match(r);
      }

      createHandlerBoundToURL(t) {
        const r = this.getCacheKeyForURL(t);
        if (!r) throw new e('non-precached-url', { url: t });
        return (e) => (
          (e.request = new Request(t)),
          (e.params = { cacheKey: r, ...e.params }),
          this.strategy.handle(e)
        );
      }
    }
    let m;
    const v = () => (m || (m = new w()), m);
    r(227);
    const _ = (e) => (e && typeof e == 'object' ? e : { handle: e });
    class b {
      constructor(e, t, r = 'GET') {
        (this.handler = _(t)), (this.match = e), (this.method = r);
      }

      setCatchHandler(e) {
        this.catchHandler = _(e);
      }
    }
    class R extends b {
      constructor(e, t, r) {
        super(
          ({ url: t }) => {
            const r = e.exec(t.href);
            if (r && (t.origin === location.origin || r.index === 0)) return r.slice(1);
          },
          t,
          r,
        );
      }
    }
    class L {
      constructor() {
        (this._routes = new Map()), (this._defaultHandlerMap = new Map());
      }

      get routes() {
        return this._routes;
      }

      addFetchListener() {
        self.addEventListener('fetch', (e) => {
          const { request: t } = e;
          const r = this.handleRequest({ request: t, event: e });
          r && e.respondWith(r);
        });
      }

      addCacheListener() {
        self.addEventListener('message', (e) => {
          if (e.data && e.data.type === 'CACHE_URLS') {
            const { payload: t } = e.data;
            const r = Promise.all(
              t.urlsToCache.map((t) => {
                typeof t == 'string' && (t = [t]);
                const r = new Request(...t);
                return this.handleRequest({ request: r, event: e });
              }),
            );
            e.waitUntil(r),
            e.ports && e.ports[0] && r.then(() => e.ports[0].postMessage(!0));
          }
        });
      }

      handleRequest({ request: e, event: t }) {
        const r = new URL(e.url, location.href);
        if (!r.protocol.startsWith('http')) return;
        const n = r.origin === location.origin;
        const { params: s, route: a } = this.findMatchingRoute({
          event: t,
          request: e,
          sameOrigin: n,
          url: r,
        });
        let i = a && a.handler;
        const o = e.method;
        if (
          (!i
            && this._defaultHandlerMap.has(o)
            && (i = this._defaultHandlerMap.get(o)),
          !i)
        ) return;
        let c;
        try {
          c = i.handle({
            url: r,
            request: e,
            event: t,
            params: s,
          });
        } catch (e) {
          c = Promise.reject(e);
        }
        const h = a && a.catchHandler;
        return (
          c instanceof Promise
            && (this._catchHandler || h)
            && (c = c.catch(async (n) => {
              if (h) {
                try {
                  return await h.handle({
                    url: r,
                    request: e,
                    event: t,
                    params: s,
                  });
                } catch (e) {
                  e instanceof Error && (n = e);
                }
              }
              if (this._catchHandler) {
                return this._catchHandler.handle({
                  url: r,
                  request: e,
                  event: t,
                });
              }
              throw n;
            })),
          c
        );
      }

      findMatchingRoute({
        url: e, sameOrigin: t, request: r, event: n,
      }) {
        const s = this._routes.get(r.method) || [];
        for (const a of s) {
          let s;
          const i = a.match({
            url: e,
            sameOrigin: t,
            request: r,
            event: n,
          });
          if (i) {
            return (
              (s = i),
              ((Array.isArray(s) && s.length === 0)
                || (i.constructor === Object && Object.keys(i).length === 0)
                || typeof i == 'boolean')
                && (s = void 0),
              { route: a, params: s }
            );
          }
        }
        return {};
      }

      setDefaultHandler(e, t = 'GET') {
        this._defaultHandlerMap.set(t, _(e));
      }

      setCatchHandler(e) {
        this._catchHandler = _(e);
      }

      registerRoute(e) {
        this._routes.has(e.method) || this._routes.set(e.method, []),
        this._routes.get(e.method).push(e);
      }

      unregisterRoute(t) {
        if (!this._routes.has(t.method)) {
          throw new e('unregister-route-but-not-found-with-method', {
            method: t.method,
          });
        }
        const r = this._routes.get(t.method).indexOf(t);
        if (!(r > -1)) throw new e('unregister-route-route-not-registered');
        this._routes.get(t.method).splice(r, 1);
      }
    }
    let C;
    function x(t, r, n) {
      let s;
      if (typeof t == 'string') {
        const e = new URL(t, location.href);
        s = new b(({ url: t }) => t.href === e.href, r, n);
      } else if (t instanceof RegExp) s = new R(t, r, n);
      else if (typeof t == 'function') s = new b(t, r, n);
      else {
        if (!(t instanceof b)) {
          throw new e('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
          });
        }
        s = t;
      }
      return (
        (C || ((C = new L()), C.addFetchListener(), C.addCacheListener()),
        C).registerRoute(s),
        s
      );
    }
    class U extends b {
      constructor(e, t) {
        super(({ request: r }) => {
          const n = e.getURLsToCacheKeys();
          for (const s of (function* (
            e,
            {
              ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
              directoryIndex: r = 'index.html',
              cleanURLs: n = !0,
              urlManipulation: s,
            } = {},
          ) {
            const a = new URL(e, location.href);
            (a.hash = ''), yield a.href;
            const i = (function (e, t = []) {
              for (const r of [...e.searchParams.keys()]) t.some((e) => e.test(r)) && e.searchParams.delete(r);
              return e;
            }(a, t));
            if ((yield i.href, r && i.pathname.endsWith('/'))) {
              const e = new URL(i.href);
              (e.pathname += r), yield e.href;
            }
            if (n) {
              const e = new URL(i.href);
              (e.pathname += '.html'), yield e.href;
            }
            if (s) {
              const e = s({ url: a });
              for (const t of e) yield t.href;
            }
          }(r.url, t))) {
            const t = n.get(s);
            if (t) return { cacheKey: t, integrity: e.getIntegrityForCacheKey(t) };
          }
        }, e.strategy);
      }
    }
    const k = {
      cacheWillUpdate: async ({ response: e }) => (e.status === 200 || e.status === 0 ? e : null),
    };
    class q extends y {
      constructor(e = {}) {
        super(e),
        this.plugins.some((e) => 'cacheWillUpdate' in e)
            || this.plugins.unshift(k);
      }

      async _handle(t, r) {
        const n = r.fetchAndCachePut(t).catch(() => {});
        r.waitUntil(n);
        let s;
        let a = await r.cacheMatch(t);
        if (a);
        else {
          try {
            a = await n;
          } catch (e) {
            e instanceof Error && (s = e);
          }
        }
        if (!a) throw new e('no-response', { url: t.url, error: s });
        return a;
      }
    }
    function E(e) {
      return (
        (E = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (e) {
            return typeof e;
          }
          : function (e) {
            return e
                  && typeof Symbol == 'function'
                  && e.constructor === Symbol
                  && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
        E(e)
      );
    }
    function T() {
      T = function () {
        return t;
      };
      var e;
      var t = {};
      var r = Object.prototype;
      var n = r.hasOwnProperty;
      var s = Object.defineProperty
        || function (e, t, r) {
          e[t] = r.value;
        };
      var a = typeof Symbol == 'function' ? Symbol : {};
      var i = a.iterator || '@@iterator';
      var o = a.asyncIterator || '@@asyncIterator';
      var c = a.toStringTag || '@@toStringTag';
      function h(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        h({}, '');
      } catch (e) {
        h = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function l(e, t, r, n) {
        var a = t && t.prototype instanceof w ? t : w;
        var i = Object.create(a.prototype);
        var o = new P(n || []);
        return s(i, '_invoke', { value: U(e, r, o) }), i;
      }
      function u(e, t, r) {
        try {
          return { type: 'normal', arg: e.call(t, r) };
        } catch (e) {
          return { type: 'throw', arg: e };
        }
      }
      t.wrap = l;
      var f = 'suspendedStart';
      var d = 'suspendedYield';
      var p = 'executing';
      var y = 'completed';
      var g = {};
      function w() {}
      function m() {}
      function v() {}
      var _ = {};
      h(_, i, function () {
        return this;
      });
      var b = Object.getPrototypeOf;
      var R = b && b(b(K([])));
      R && R !== r && n.call(R, i) && (_ = R);
      var L = (v.prototype = w.prototype = Object.create(_));
      function C(e) {
        ['next', 'throw', 'return'].forEach((t) => {
          h(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function x(e, t) {
        function r(s, a, i, o) {
          var c = u(e[s], e, a);
          if (c.type !== 'throw') {
            var h = c.arg;
            var l = h.value;
            return l && E(l) == 'object' && n.call(l, '__await')
              ? t.resolve(l.__await).then(
                (e) => {
                  r('next', e, i, o);
                },
                (e) => {
                  r('throw', e, i, o);
                },
              )
              : t.resolve(l).then(
                (e) => {
                  (h.value = e), i(h);
                },
                (e) => r('throw', e, i, o),
              );
          }
          o(c.arg);
        }
        var a;
        s(this, '_invoke', {
          value(e, n) {
            function s() {
              return new t((t, s) => {
                r(e, n, t, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          },
        });
      }
      function U(t, r, n) {
        var s = f;
        return function (a, i) {
          if (s === p) throw Error('Generator is already running');
          if (s === y) {
            if (a === 'throw') throw i;
            return { value: e, done: !0 };
          }
          for (n.method = a, n.arg = i; ;) {
            var o = n.delegate;
            if (o) {
              var c = k(o, n);
              if (c) {
                if (c === g) continue;
                return c;
              }
            }
            if (n.method === 'next') n.sent = n._sent = n.arg;
            else if (n.method === 'throw') {
              if (s === f) throw ((s = y), n.arg);
              n.dispatchException(n.arg);
            } else n.method === 'return' && n.abrupt('return', n.arg);
            s = p;
            var h = u(t, r, n);
            if (h.type === 'normal') {
              if (((s = n.done ? y : d), h.arg === g)) continue;
              return { value: h.arg, done: n.done };
            }
            h.type === 'throw'
              && ((s = y), (n.method = 'throw'), (n.arg = h.arg));
          }
        };
      }
      function k(t, r) {
        var n = r.method;
        var s = t.iterator[n];
        if (s === e) {
          return (
            (r.delegate = null),
            (n === 'throw'
              && t.iterator.return
              && ((r.method = 'return'),
              (r.arg = e),
              k(t, r),
              r.method === 'throw'))
              || (n !== 'return'
                && ((r.method = 'throw'),
                (r.arg = new TypeError(
                  `The iterator does not provide a '${n}' method`,
                )))),
            g
          );
        }
        var a = u(s, t.iterator, r.arg);
        if (a.type === 'throw') return (r.method = 'throw'), (r.arg = a.arg), (r.delegate = null), g;
        var i = a.arg;
        return i
          ? i.done
            ? ((r[t.resultName] = i.value),
            (r.next = t.nextLoc),
            r.method !== 'return' && ((r.method = 'next'), (r.arg = e)),
            (r.delegate = null),
            g)
            : i
          : ((r.method = 'throw'),
          (r.arg = new TypeError('iterator result is not an object')),
          (r.delegate = null),
          g);
      }
      function q(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
      }
      function N(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
      }
      function P(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
        e.forEach(q, this),
        this.reset(!0);
      }
      function K(t) {
        if (t || t === '') {
          var r = t[i];
          if (r) return r.call(t);
          if (typeof t.next == 'function') return t;
          if (!isNaN(t.length)) {
            var s = -1;
            var a = function r() {
              for (; ++s < t.length;) if (n.call(t, s)) return (r.value = t[s]), (r.done = !1), r;
              return (r.value = e), (r.done = !0), r;
            };
            return (a.next = a);
          }
        }
        throw new TypeError(`${E(t)} is not iterable`);
      }
      return (
        (m.prototype = v),
        s(L, 'constructor', { value: v, configurable: !0 }),
        s(v, 'constructor', { value: m, configurable: !0 }),
        (m.displayName = h(v, c, 'GeneratorFunction')),
        (t.isGeneratorFunction = function (e) {
          var t = typeof e == 'function' && e.constructor;
          return (
            !!t
            && (t === m || (t.displayName || t.name) === 'GeneratorFunction')
          );
        }),
        (t.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, v)
              : ((e.__proto__ = v), h(e, c, 'GeneratorFunction')),
            (e.prototype = Object.create(L)),
            e
          );
        }),
        (t.awrap = function (e) {
          return { __await: e };
        }),
        C(x.prototype),
        h(x.prototype, o, function () {
          return this;
        }),
        (t.AsyncIterator = x),
        (t.async = function (e, r, n, s, a) {
          void 0 === a && (a = Promise);
          var i = new x(l(e, r, n, s), a);
          return t.isGeneratorFunction(r)
            ? i
            : i.next().then((e) => (e.done ? e.value : i.next()));
        }),
        C(L),
        h(L, c, 'Generator'),
        h(L, i, function () {
          return this;
        }),
        h(L, 'toString', () => '[object Generator]'),
        (t.keys = function (e) {
          var t = Object(e);
          var r = [];
          for (var n in t) r.push(n);
          return (
            r.reverse(),
            function e() {
              for (; r.length;) {
                var n = r.pop();
                if (n in t) return (e.value = n), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (t.values = K),
        (P.prototype = {
          constructor: P,
          reset(t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = e),
              this.tryEntries.forEach(N),
              !t)
            ) {
              for (var r in this) {
                r.charAt(0) === 't'
                  && n.call(this, r)
                  && !isNaN(+r.slice(1))
                  && (this[r] = e);
              }
            }
          },
          stop() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if (e.type === 'throw') throw e.arg;
            return this.rval;
          },
          dispatchException(t) {
            if (this.done) throw t;
            var r = this;
            function s(n, s) {
              return (
                (o.type = 'throw'),
                (o.arg = t),
                (r.next = n),
                s && ((r.method = 'next'), (r.arg = e)),
                !!s
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var i = this.tryEntries[a];
              var o = i.completion;
              if (i.tryLoc === 'root') return s('end');
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, 'catchLoc');
                var h = n.call(i, 'finallyLoc');
                if (c && h) {
                  if (this.prev < i.catchLoc) return s(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return s(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return s(i.catchLoc, !0);
                } else {
                  if (!h) throw Error('try statement without catch or finally');
                  if (this.prev < i.finallyLoc) return s(i.finallyLoc);
                }
              }
            }
          },
          abrupt(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var s = this.tryEntries[r];
              if (
                s.tryLoc <= this.prev
                && n.call(s, 'finallyLoc')
                && this.prev < s.finallyLoc
              ) {
                var a = s;
                break;
              }
            }
            a
              && (e === 'break' || e === 'continue')
              && a.tryLoc <= t
              && t <= a.finallyLoc
              && (a = null);
            var i = a ? a.completion : {};
            return (
              (i.type = e),
              (i.arg = t),
              a
                ? ((this.method = 'next'), (this.next = a.finallyLoc), g)
                : this.complete(i)
            );
          },
          complete(e, t) {
            if (e.type === 'throw') throw e.arg;
            return (
              e.type === 'break' || e.type === 'continue'
                ? (this.next = e.arg)
                : e.type === 'return'
                  ? ((this.rval = this.arg = e.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                  : e.type === 'normal' && t && (this.next = t),
              g
            );
          },
          finish(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), N(r), g;
            }
          },
          catch(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if (n.type === 'throw') {
                  var s = n.arg;
                  N(r);
                }
                return s;
              }
            }
            throw Error('illegal catch attempt');
          },
          delegateYield(t, r, n) {
            return (
              (this.delegate = { iterator: K(t), resultName: r, nextLoc: n }),
              this.method === 'next' && (this.arg = e),
              g
            );
          },
        }),
        t
      );
    }
    function N(e, t, r, n, s, a, i) {
      try {
        var o = e[a](i);
        var c = o.value;
      } catch (e) {
        return void r(e);
      }
      o.done ? t(c) : Promise.resolve(c).then(n, s);
    }
    var P;
    (P = [
      {
        revision: '4e0e34f265fae8f33b01b27ae29d9d6f',
        url: './sw.js.LICENSE.txt',
      },
      { revision: '2f6cc90acb67b69118b44ee169acbd76', url: '411.bundle.js' },
      { revision: '8ce3afda31c53fbf99810633528ead7e', url: 'app.webmanifest' },
      {
        revision: '4144ea603f5c58b1795fb5fe736dfc11',
        url: 'app~4e5ec22b.bundle.js',
      },
      {
        revision: 'bdde7d692379bca3f013332c5ef34ecf',
        url: 'app~586c4d24.bundle.js',
      },
      {
        revision: '4e0e34f265fae8f33b01b27ae29d9d6f',
        url: 'app~586c4d24.bundle.js.LICENSE.txt',
      },
      {
        revision: 'b2b9e5142ee96ba19be52275d4235f6b',
        url: 'app~a51fa3f5.bundle.js',
      },
      {
        revision: '4e0e34f265fae8f33b01b27ae29d9d6f',
        url: 'app~a51fa3f5.bundle.js.LICENSE.txt',
      },
      {
        revision: '5615f9a9fe8f175acdfed74b02f52ea6',
        url: 'app~ca0940c6.bundle.js',
      },
      {
        revision: '4e0e34f265fae8f33b01b27ae29d9d6f',
        url: 'app~ca0940c6.bundle.js.LICENSE.txt',
      },
      {
        revision: '34d9d8d646af9f294d968811da10e546',
        url: 'icons/icon-128x128.png',
      },
      {
        revision: '2dd174daa627ee198c37c9dfe8cdc34d',
        url: 'icons/icon-144x144.png',
      },
      {
        revision: '42ee3d984a8d535d697ccbb4428e8647',
        url: 'icons/icon-152x152.png',
      },
      {
        revision: '923e1610b9d68d2445eb28d6e0f54aaa',
        url: 'icons/icon-192x192.png',
      },
      {
        revision: '7f775b04df567c8d90c9bad2c89e2d81',
        url: 'icons/icon-384x384.png',
      },
      {
        revision: 'f6705cd9d5d52d8483a2bf9b47cb5f60',
        url: 'icons/icon-512x512.png',
      },
      {
        revision: '1d463ddf39f394788393e31e1f0e9dbc',
        url: 'icons/icon-72x72.png',
      },
      {
        revision: '7619371082a792ebb06768c13bf094bf',
        url: 'icons/icon-96x96.png',
      },
      {
        revision: 'bd8d31d8feb2a162a184229db533a93b',
        url: 'images/close_FILL0_wght400_GRAD0_opsz24.svg',
      },
      {
        revision: 'a2f444d9e2e43a5d0373b1a0d8cb2236',
        url: 'images/heros/hero-image_1.jpg',
      },
      {
        revision: '49f78cae81de4f48caf1c2fe0271c828',
        url: 'images/heros/hero-image_2.jpg',
      },
      {
        revision: 'b98d24ad882aaa17b4da914e2b3cbc67',
        url: 'images/heros/hero-image_2_desktop.jpg',
      },
      {
        revision: '44355e1696dd5838f45c4485b56e96a5',
        url: 'images/heros/hero-image_2_mobile.jpg',
      },
      {
        revision: 'd232e05589056e05f52cf2689f315c6c',
        url: 'images/heros/hero-image_3.jpg',
      },
      {
        revision: '4ea98fe648a0b853ab379c928b5fd0bf',
        url: 'images/heros/hero-image_4.jpg',
      },
      { revision: '776ce7d873233c14633be9236d370777', url: 'images/logo.png' },
      {
        revision: 'b236d8984b7c6957b278353b5621bb95',
        url: 'images/menu_FILL0_wght400_GRAD0_opsz24.svg',
      },
      { revision: '30bef35e9c45eea629ef91f859f980ec', url: 'index.html' },
      { revision: '776ce7d873233c14633be9236d370777', url: 'logo.png' },
    ]),
    v().precache(P),
    (function (e) {
      const t = v();
      x(new U(t, e));
    }(undefined)),
    x(
      (e) => e.url.origin === 'https://restaurant-api.dicoding.dev',
      new q({ cacheName: 'restodb-api' }),
    ),
    x((e) => {
      var t = e.url;
      return (
        t.origin === 'https://restaurant-api.dicoding.dev'
          && t.pathname.startsWith('/images/medium/')
      );
    }, new q({ cacheName: 'restodb-image-api' })),
    self.addEventListener('install', (e) => {
      console.log('Service Worker: Installed'),
      self.skipWaiting(),
      e.waitUntil(
        self.registration.requestPermission().then((e) => {
          e.state === 'granted'
            ? console.log('Notification permission granted')
            : console.log('Notification permission denied');
        }),
      );
    }),
    self.addEventListener('push', (e) => {
      console.log('Service Worker: Pushed');
      var t = e.data.json();
      var r = {
        title: t.title,
        options: {
          body: t.options.body,
          icon: t.options.icon,
          image: t.options.image,
        },
      };
      e.waitUntil(self.registration.showNotification(r.title, r.options));
    }),
    self.addEventListener('notificationclick', (e) => {
      e.notification.close();
      var t = (function () {
        var e;
        var t = ((e = T().mark(function e() {
          return T().wrap((e) => {
            for (;;) {
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    console.log('Notification has been clicked'),
                    (e.next = 3),
                    self.clients.openWindow('https://www.dicoding.com/')
                  );
                case 3:
                case 'end':
                  return e.stop();
              }
            }
          }, e);
        })),
        function () {
          var t = this;
          var r = arguments;
          return new Promise((n, s) => {
            var a = e.apply(t, r);
            function i(e) {
              N(a, n, s, i, o, 'next', e);
            }
            function o(e) {
              N(a, n, s, i, o, 'throw', e);
            }
            i(void 0);
          });
        });
        return function () {
          return t.apply(this, arguments);
        };
      }());
      e.waitUntil(t());
    });
  })();
})();
// # sourceMappingURL=sw.js.map
