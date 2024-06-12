/* eslint-disable max-len */
(self.webpackChunkrestaurant_apps_middle_project = self.webpackChunkrestaurant_apps_middle_project || []).push([
  [411],
  {
    314: (t) => {
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map((e) => {
              var n = '';
              var r = void 0 !== e[5];
              return (
                e[4] && (n += '@supports ('.concat(e[4], ') {')),
                e[2] && (n += '@media '.concat(e[2], ' {')),
                r
                  && (n += '@layer'.concat(
                    e[5].length > 0 ? ' '.concat(e[5]) : '',
                    ' {',
                  )),
                (n += t(e)),
                r && (n += '}'),
                e[2] && (n += '}'),
                e[4] && (n += '}'),
                n
              );
            }).join('');
          }),
          (e.i = function (t, n, r, o, i) {
            typeof t == 'string' && (t = [[null, t, void 0]]);
            var a = {};
            if (r) {
              for (var c = 0; c < this.length; c++) {
                var s = this[c][0];
                s != null && (a[s] = !0);
              }
            }
            for (var u = 0; u < t.length; u++) {
              var f = [].concat(t[u]);
              (r && a[f[0]])
                || (void 0 !== i
                  && (void 0 === f[5]
                    || (f[1] = '@layer'
                      .concat(f[5].length > 0 ? ' '.concat(f[5]) : '', ' {')
                      .concat(f[1], '}')),
                  (f[5] = i)),
                n
                  && (f[2]
                    ? ((f[1] = '@media '.concat(f[2], ' {').concat(f[1], '}')),
                    (f[2] = n))
                    : (f[2] = n)),
                o
                  && (f[4]
                    ? ((f[1] = '@supports ('
                      .concat(f[4], ') {')
                      .concat(f[1], '}')),
                    (f[4] = o))
                    : (f[4] = ''.concat(o))),
                e.push(f));
            }
          }),
          e
        );
      };
    },
    354: (t) => {
      t.exports = function (t) {
        var e = t[1];
        var n = t[3];
        if (!n) return e;
        if (typeof btoa == 'function') {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n))));
          var o = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            r,
          );
          var i = '/*# '.concat(o, ' */');
          return [e].concat([i]).join('\n');
        }
        return [e].join('\n');
      };
    },
    452: (t) => {
      var e = (function (t) {
        var e;
        var n = Object.prototype;
        var r = n.hasOwnProperty;
        var o = Object.defineProperty
          || function (t, e, n) {
            t[e] = n.value;
          };
        var i = typeof Symbol == 'function' ? Symbol : {};
        var a = i.iterator || '@@iterator';
        var c = i.asyncIterator || '@@asyncIterator';
        var s = i.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function f(t, e, n, r) {
          var i = e && e.prototype instanceof g ? e : g;
          var a = Object.create(i.prototype);
          var c = new D(r || []);
          return o(a, '_invoke', { value: j(t, n, c) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = f;
        var h = 'suspendedStart';
        var p = 'suspendedYield';
        var d = 'executing';
        var v = 'completed';
        var y = {};
        function g() {}
        function m() {}
        function w() {}
        var b = {};
        u(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf;
        var L = E && E(E(O([])));
        L && L !== n && r.call(L, a) && (b = L);
        var x = (w.prototype = g.prototype = Object.create(b));
        function S(t) {
          ['next', 'throw', 'return'].forEach((e) => {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function I(t, e) {
          function n(o, i, a, c) {
            var s = l(t[o], t, i);
            if (s.type !== 'throw') {
              var u = s.arg;
              var f = u.value;
              return f && typeof f == 'object' && r.call(f, '__await')
                ? e.resolve(f.__await).then(
                  (t) => {
                    n('next', t, a, c);
                  },
                  (t) => {
                    n('throw', t, a, c);
                  },
                )
                : e.resolve(f).then(
                  (t) => {
                    (u.value = t), a(u);
                  },
                  (t) => n('throw', t, a, c),
                );
            }
            c(s.arg);
          }
          var i;
          o(this, '_invoke', {
            value(t, r) {
              function o() {
                return new e((e, o) => {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(t, n, r) {
          var o = h;
          return function (i, a) {
            if (o === d) throw new Error('Generator is already running');
            if (o === v) {
              if (i === 'throw') throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ;) {
              var c = r.delegate;
              if (c) {
                var s = P(c, r);
                if (s) {
                  if (s === y) continue;
                  return s;
                }
              }
              if (r.method === 'next') r.sent = r._sent = r.arg;
              else if (r.method === 'throw') {
                if (o === h) throw ((o = v), r.arg);
                r.dispatchException(r.arg);
              } else r.method === 'return' && r.abrupt('return', r.arg);
              o = d;
              var u = l(t, n, r);
              if (u.type === 'normal') {
                if (((o = r.done ? v : p), u.arg === y)) continue;
                return { value: u.arg, done: r.done };
              }
              u.type === 'throw'
                && ((o = v), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function P(t, n) {
          var r = n.method;
          var o = t.iterator[r];
          if (o === e) {
            return (
              (n.delegate = null),
              (r === 'throw'
                && t.iterator.return
                && ((n.method = 'return'),
                (n.arg = e),
                P(t, n),
                n.method === 'throw'))
                || (r !== 'return'
                  && ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    `The iterator does not provide a '${r}' method`,
                  )))),
              y
            );
          }
          var i = l(o, t.iterator, n.arg);
          if (i.type === 'throw') {
            return (
              (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), y
            );
          }
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
              (n.next = t.nextLoc),
              n.method !== 'return' && ((n.method = 'next'), (n.arg = e)),
              (n.delegate = null),
              y)
              : a
            : ((n.method = 'throw'),
            (n.arg = new TypeError('iterator result is not an object')),
            (n.delegate = null),
            y);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
        }
        function _(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function D(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(k, this),
          this.reset(!0);
        }
        function O(t) {
          if (t != null) {
            var n = t[a];
            if (n) return n.call(t);
            if (typeof t.next == 'function') return t;
            if (!isNaN(t.length)) {
              var o = -1;
              var i = function n() {
                for (; ++o < t.length;) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                return (n.value = e), (n.done = !0), n;
              };
              return (i.next = i);
            }
          }
          throw new TypeError(`${typeof t} is not iterable`);
        }
        return (
          (m.prototype = w),
          o(x, 'constructor', { value: w, configurable: !0 }),
          o(w, 'constructor', { value: m, configurable: !0 }),
          (m.displayName = u(w, s, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = typeof t == 'function' && t.constructor;
            return (
              !!e
              && (e === m || (e.displayName || e.name) === 'GeneratorFunction')
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), u(t, s, 'GeneratorFunction')),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          S(I.prototype),
          u(I.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = I),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new I(f(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then((t) => (t.done ? t.value : a.next()));
          }),
          S(x),
          u(x, s, 'Generator'),
          u(x, a, function () {
            return this;
          }),
          u(x, 'toString', () => '[object Generator]'),
          (t.keys = function (t) {
            var e = Object(t);
            var n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length;) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = O),
          (D.prototype = {
            constructor: D,
            reset(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(_),
                !t)
              ) {
                for (var n in this) {
                  n.charAt(0) === 't'
                    && r.call(this, n)
                    && !isNaN(+n.slice(1))
                    && (this[n] = e);
                }
              }
            },
            stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if (t.type === 'throw') throw t.arg;
              return this.rval;
            },
            dispatchException(t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = t),
                  (n.next = r),
                  o && ((n.method = 'next'), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i];
                var c = a.completion;
                if (a.tryLoc === 'root') return o('end');
                if (a.tryLoc <= this.prev) {
                  var s = r.call(a, 'catchLoc');
                  var u = r.call(a, 'finallyLoc');
                  if (s && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u) throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt(t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev
                  && r.call(o, 'finallyLoc')
                  && this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i
                && (t === 'break' || t === 'continue')
                && i.tryLoc <= e
                && e <= i.finallyLoc
                && (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
                  : this.complete(a)
              );
            },
            complete(t, e) {
              if (t.type === 'throw') throw t.arg;
              return (
                t.type === 'break' || t.type === 'continue'
                  ? (this.next = t.arg)
                  : t.type === 'return'
                    ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                    : t.type === 'normal' && e && (this.next = e),
                y
              );
            },
            finish(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), _(n), y;
              }
            },
            catch(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if (r.type === 'throw') {
                    var o = r.arg;
                    _(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield(t, n, r) {
              return (
                (this.delegate = { iterator: O(t), resultName: n, nextLoc: r }),
                this.method === 'next' && (this.arg = e),
                y
              );
            },
          }),
          t
        );
      }(t.exports));
      try {
        regeneratorRuntime = e;
      } catch (t) {
        typeof globalThis == 'object'
          ? (globalThis.regeneratorRuntime = e)
          : Function('r', 'regeneratorRuntime = r')(e);
      }
    },
    72: (t) => {
      var e = [];
      function n(t) {
        for (var n = -1, r = 0; r < e.length; r++) {
          if (e[r].identifier === t) {
            n = r;
            break;
          }
        }
        return n;
      }
      function r(t, r) {
        for (var i = {}, a = [], c = 0; c < t.length; c++) {
          var s = t[c];
          var u = r.base ? s[0] + r.base : s[0];
          var f = i[u] || 0;
          var l = ''.concat(u, ' ').concat(f);
          i[u] = f + 1;
          var h = n(l);
          var p = {
            css: s[1],
            media: s[2],
            sourceMap: s[3],
            supports: s[4],
            layer: s[5],
          };
          if (h !== -1) e[h].references++, e[h].updater(p);
          else {
            var d = o(p, r);
            (r.byIndex = c),
            e.splice(c, 0, { identifier: l, updater: d, references: 1 });
          }
          a.push(l);
        }
        return a;
      }
      function o(t, e) {
        var n = e.domAPI(e);
        return (
          n.update(t),
          function (e) {
            if (e) {
              if (
                e.css === t.css
                && e.media === t.media
                && e.sourceMap === t.sourceMap
                && e.supports === t.supports
                && e.layer === t.layer
              ) return;
              n.update((t = e));
            } else n.remove();
          }
        );
      }
      t.exports = function (t, o) {
        var i = r((t = t || []), (o = o || {}));
        return function (t) {
          t = t || [];
          for (var a = 0; a < i.length; a++) {
            var c = n(i[a]);
            e[c].references--;
          }
          for (var s = r(t, o), u = 0; u < i.length; u++) {
            var f = n(i[u]);
            e[f].references === 0 && (e[f].updater(), e.splice(f, 1));
          }
          i = s;
        };
      };
    },
    659: (t) => {
      var e = {};
      t.exports = function (t, n) {
        var r = (function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement
              && n instanceof window.HTMLIFrameElement
            ) {
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            }
            e[t] = n;
          }
          return e[t];
        }(t));
        if (!r) {
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        }
        r.appendChild(n);
      };
    },
    540: (t) => {
      t.exports = function (t) {
        var e = document.createElement('style');
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
      };
    },
    56: (t, e, n) => {
      t.exports = function (t) {
        var e = n.nc;
        e && t.setAttribute('nonce', e);
      };
    },
    825: (t) => {
      t.exports = function (t) {
        if (typeof document == 'undefined') return { update() {}, remove() {} };
        var e = t.insertStyleElement(t);
        return {
          update(n) {
            !(function (t, e, n) {
              var r = '';
              n.supports && (r += '@supports ('.concat(n.supports, ') {')),
              n.media && (r += '@media '.concat(n.media, ' {'));
              var o = void 0 !== n.layer;
              o
                && (r += '@layer'.concat(
                  n.layer.length > 0 ? ' '.concat(n.layer) : '',
                  ' {',
                )),
              (r += n.css),
              o && (r += '}'),
              n.media && (r += '}'),
              n.supports && (r += '}');
              var i = n.sourceMap;
              i
                && typeof btoa != 'undefined'
                && (r
                  += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    ' */',
                  )),
              e.styleTagTransform(r, t, e.options);
            }(e, t, n));
          },
          remove() {
            !(function (t) {
              if (t.parentNode === null) return !1;
              t.parentNode.removeChild(t);
            }(e));
          },
        };
      };
    },
    113: (t) => {
      t.exports = function (t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t;
        else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t));
        }
      };
    },
    602: (t, e, n) => {
      n.d(e, { P2: () => d });
      const r = (t, e) => e.some((e) => t instanceof e);
      let o;
      let i;
      const a = new WeakMap();
      const c = new WeakMap();
      const s = new WeakMap();
      let u = {
        get(t, e, n) {
          if (t instanceof IDBTransaction) {
            if (e === 'done') return a.get(t);
            if (e === 'store') {
              return n.objectStoreNames[1]
                ? void 0
                : n.objectStore(n.objectStoreNames[0]);
            }
          }
          return h(t[e]);
        },
        set: (t, e, n) => ((t[e] = n), !0),
        has: (t, e) => (t instanceof IDBTransaction && (e === 'done' || e === 'store'))
          || e in t,
      };
      function f(t) {
        u = t(u);
      }
      function l(t) {
        return typeof t == 'function'
          ? ((e = t),
          (
            i
              || (i = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
          ).includes(e)
            ? function (...t) {
              return e.apply(p(this), t), h(this.request);
            }
            : function (...t) {
              return h(e.apply(p(this), t));
            })
          : (t instanceof IDBTransaction
              && (function (t) {
                if (a.has(t)) return;
                const e = new Promise((e, n) => {
                  const r = () => {
                    t.removeEventListener('complete', o),
                    t.removeEventListener('error', i),
                    t.removeEventListener('abort', i);
                  };
                  const o = () => {
                    e(), r();
                  };
                  const i = () => {
                    n(t.error || new DOMException('AbortError', 'AbortError')),
                    r();
                  };
                  t.addEventListener('complete', o),
                  t.addEventListener('error', i),
                  t.addEventListener('abort', i);
                });
                a.set(t, e);
              }(t)),
          r(
            t,
            o
                || (o = [
                  IDBDatabase,
                  IDBObjectStore,
                  IDBIndex,
                  IDBCursor,
                  IDBTransaction,
                ]),
          )
            ? new Proxy(t, u)
            : t);
        var e;
      }
      function h(t) {
        if (t instanceof IDBRequest) {
          return (function (t) {
            const e = new Promise((e, n) => {
              const r = () => {
                t.removeEventListener('success', o),
                t.removeEventListener('error', i);
              };
              const o = () => {
                e(h(t.result)), r();
              };
              const i = () => {
                n(t.error), r();
              };
              t.addEventListener('success', o), t.addEventListener('error', i);
            });
            return s.set(e, t), e;
          }(t));
        }
        if (c.has(t)) return c.get(t);
        const e = l(t);
        return e !== t && (c.set(t, e), s.set(e, t)), e;
      }
      const p = (t) => s.get(t);
      function d(
        t,
        e,
        {
          blocked: n, upgrade: r, blocking: o, terminated: i,
        } = {},
      ) {
        const a = indexedDB.open(t, e);
        const c = h(a);
        return (
          r
            && a.addEventListener('upgradeneeded', (t) => {
              r(h(a.result), t.oldVersion, t.newVersion, h(a.transaction), t);
            }),
          n
            && a.addEventListener('blocked', (t) => n(t.oldVersion, t.newVersion, t)),
          c
            .then((t) => {
              i && t.addEventListener('close', () => i()),
              o
                  && t.addEventListener('versionchange', (t) => o(t.oldVersion, t.newVersion, t));
            })
            .catch(() => {}),
          c
        );
      }
      const v = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
      const y = ['put', 'add', 'delete', 'clear'];
      const g = new Map();
      function m(t, e) {
        if (!(t instanceof IDBDatabase) || e in t || typeof e != 'string') return;
        if (g.get(e)) return g.get(e);
        const n = e.replace(/FromIndex$/, '');
        const r = e !== n;
        const o = y.includes(n);
        if (
          !(n in (r ? IDBIndex : IDBObjectStore).prototype)
          || (!o && !v.includes(n))
        ) return;
        const i = async function (t, ...e) {
          const i = this.transaction(t, o ? 'readwrite' : 'readonly');
          let a = i.store;
          return (
            r && (a = a.index(e.shift())),
            (await Promise.all([a[n](...e), o && i.done]))[0]
          );
        };
        return g.set(e, i), i;
      }
      f((t) => ({
        ...t,
        get: (e, n, r) => m(e, n) || t.get(e, n, r),
        has: (e, n) => !!m(e, n) || t.has(e, n),
      }));
      const w = ['continue', 'continuePrimaryKey', 'advance'];
      const b = {};
      const E = new WeakMap();
      const L = new WeakMap();
      const x = {
        get(t, e) {
          if (!w.includes(e)) return t[e];
          let n = b[e];
          return (
            n
              || (n = b[e] = function (...t) {
                E.set(this, L.get(this)[e](...t));
              }),
            n
          );
        },
      };
      async function* S(...t) {
        let e = this;
        if ((e instanceof IDBCursor || (e = await e.openCursor(...t)), !e)) return;
        const n = new Proxy(e, x);
        for (L.set(n, e), s.set(n, p(e)); e;) yield n, (e = await (E.get(n) || e.continue())), E.delete(n);
      }
      function I(t, e) {
        return (
          (e === Symbol.asyncIterator
            && r(t, [IDBIndex, IDBObjectStore, IDBCursor]))
          || (e === 'iterate' && r(t, [IDBIndex, IDBObjectStore]))
        );
      }
      f((t) => ({
        ...t,
        get: (e, n, r) => (I(e, n) ? S : t.get(e, n, r)),
        has: (e, n) => I(e, n) || t.has(e, n),
      }));
    },
    730: (t, e, n) => {
      n.d(e, { JK: () => p });
      try {
        self['workbox:window:7.0.0'] && _();
      } catch (r) {}
      function r(t, e) {
        return new Promise((n) => {
          var r = new MessageChannel();
          (r.port1.onmessage = function (t) {
            n(t.data);
          }),
          t.postMessage(e, [r.port2]);
        });
      }
      function o(t, e) {
        (e == null || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t, e) {
        var n;
        if (typeof Symbol == 'undefined' || t[Symbol.iterator] == null) {
          if (
            Array.isArray(t)
            || (n = (function (t, e) {
              if (t) {
                if (typeof t == 'string') return o(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  n === 'Object' && t.constructor && (n = t.constructor.name),
                  n === 'Map' || n === 'Set'
                    ? Array.from(t)
                    : n === 'Arguments'
                      || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? o(t, e)
                      : void 0
                );
              }
            }(t)))
            || (e && t && typeof t.length == 'number')
          ) {
            n && (t = n);
            var r = 0;
            return function () {
              return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        return (n = t[Symbol.iterator]()).next.bind(n);
      }
      try {
        self['workbox:core:7.0.0'] && _();
      } catch (r) {}
      var a = function () {
        var t = this;
        this.promise = new Promise((e, n) => {
          (t.resolve = e), (t.reject = n);
        });
      };
      function c(t, e) {
        var n = location.href;
        return new URL(t, n).href === new URL(e, n).href;
      }
      var s = function (t, e) {
        (this.type = t), Object.assign(this, e);
      };
      function u(t, e, n) {
        return n
          ? e
            ? e(t)
            : t
          : ((t && t.then) || (t = Promise.resolve(t)), e ? t.then(e) : t);
      }
      function f() {}
      var l = { type: 'SKIP_WAITING' };
      function h(t, e) {
        if (!e) return t && t.then ? t.then(f) : Promise.resolve();
      }
      var p = (function (t) {
        var e;
        var n;
        function o(e, n) {
          var r;
          var o;
          return (
            void 0 === n && (n = {}),
            ((r = t.call(this) || this).nn = {}),
            (r.tn = 0),
            (r.rn = new a()),
            (r.en = new a()),
            (r.on = new a()),
            (r.un = 0),
            (r.an = new Set()),
            (r.cn = function () {
              var t = r.fn;
              var e = t.installing;
              r.tn > 0
              || !c(e.scriptURL, r.sn.toString())
              || performance.now() > r.un + 6e4
                ? ((r.vn = e), t.removeEventListener('updatefound', r.cn))
                : ((r.hn = e), r.an.add(e), r.rn.resolve(e)),
              ++r.tn,
              e.addEventListener('statechange', r.ln);
            }),
            (r.ln = function (t) {
              var e = r.fn;
              var n = t.target;
              var o = n.state;
              var i = n === r.vn;
              var a = { sw: n, isExternal: i, originalEvent: t };
              !i && r.mn && (a.isUpdate = !0),
              r.dispatchEvent(new s(o, a)),
              o === 'installed'
                ? (r.wn = self.setTimeout(() => {
                  o === 'installed'
                        && e.waiting === n
                        && r.dispatchEvent(new s('waiting', a));
                }, 200))
                : o === 'activating'
                    && (clearTimeout(r.wn), i || r.en.resolve(n));
            }),
            (r.dn = function (t) {
              var e = r.hn;
              var n = e !== navigator.serviceWorker.controller;
              r.dispatchEvent(
                new s('controlling', {
                  isExternal: n,
                  originalEvent: t,
                  sw: e,
                  isUpdate: r.mn,
                }),
              ),
              n || r.on.resolve(e);
            }),
            (r.gn = ((o = function (t) {
              var e = t.data;
              var n = t.ports;
              var o = t.source;
              return u(r.getSW(), () => {
                r.an.has(o)
                    && r.dispatchEvent(
                      new s('message', {
                        data: e,
                        originalEvent: t,
                        ports: n,
                        sw: o,
                      }),
                    );
              });
            }),
            function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              try {
                return Promise.resolve(o.apply(this, t));
              } catch (t) {
                return Promise.reject(t);
              }
            })),
            (r.sn = e),
            (r.nn = n),
            navigator.serviceWorker.addEventListener('message', r.gn),
            r
          );
        }
        (n = t),
        ((e = o).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n);
        var i;
        var f = o.prototype;
        return (
          (f.register = function (t) {
            var e = (void 0 === t ? {} : t).immediate;
            var n = void 0 !== e && e;
            try {
              var r = this;
              return (function (t, e) {
                var n = t();
                return n && n.then ? n.then(e) : e();
              }(
                () => {
                  if (!n && document.readyState !== 'complete') {
                    return h(
                      new Promise((t) => window.addEventListener('load', t)),
                    );
                  }
                },
                () => (
                  (r.mn = Boolean(navigator.serviceWorker.controller)),
                  (r.yn = r.pn()),
                  u(r.bn(), (t) => {
                    (r.fn = t),
                    r.yn
                        && ((r.hn = r.yn),
                        r.en.resolve(r.yn),
                        r.on.resolve(r.yn),
                        r.yn.addEventListener('statechange', r.ln, {
                          once: !0,
                        }));
                    var e = r.fn.waiting;
                    return (
                      e
                        && c(e.scriptURL, r.sn.toString())
                        && ((r.hn = e),
                        Promise.resolve()
                          .then(() => {
                            r.dispatchEvent(
                              new s('waiting', {
                                sw: e,
                                wasWaitingBeforeRegister: !0,
                              }),
                            );
                          })
                          .then(() => {})),
                      r.hn && (r.rn.resolve(r.hn), r.an.add(r.hn)),
                      r.fn.addEventListener('updatefound', r.cn),
                      navigator.serviceWorker.addEventListener(
                        'controllerchange',
                        r.dn,
                      ),
                      r.fn
                    );
                  })
                ),
              ));
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (f.update = function () {
            try {
              return this.fn ? h(this.fn.update()) : void 0;
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (f.getSW = function () {
            return void 0 !== this.hn
              ? Promise.resolve(this.hn)
              : this.rn.promise;
          }),
          (f.messageSW = function (t) {
            try {
              return u(this.getSW(), (e) => r(e, t));
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (f.messageSkipWaiting = function () {
            this.fn && this.fn.waiting && r(this.fn.waiting, l);
          }),
          (f.pn = function () {
            var t = navigator.serviceWorker.controller;
            return t && c(t.scriptURL, this.sn.toString()) ? t : void 0;
          }),
          (f.bn = function () {
            try {
              var t = this;
              return (function (t, e) {
                try {
                  var n = t();
                } catch (t) {
                  return e(t);
                }
                return n && n.then ? n.then(void 0, e) : n;
              }(
                () => u(
                  navigator.serviceWorker.register(t.sn, t.nn),
                  (e) => ((t.un = performance.now()), e),
                ),
                (t) => {
                  throw t;
                },
              ));
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (i = [
            {
              key: 'active',
              get() {
                return this.en.promise;
              },
            },
            {
              key: 'controlling',
              get() {
                return this.on.promise;
              },
            },
          ])
            && (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
              }
            }(o.prototype, i)),
          o
        );
      }(
        (function () {
          function t() {
            this.Pn = new Map();
          }
          var e = t.prototype;
          return (
            (e.addEventListener = function (t, e) {
              this.Sn(t).add(e);
            }),
            (e.removeEventListener = function (t, e) {
              this.Sn(t).delete(e);
            }),
            (e.dispatchEvent = function (t) {
              t.target = this;
              for (var e, n = i(this.Sn(t.type)); !(e = n()).done;) (0, e.value)(t);
            }),
            (e.Sn = function (t) {
              return (
                this.Pn.has(t) || this.Pn.set(t, new Set()), this.Pn.get(t)
              );
            }),
            t
          );
        }()),
      ));
    },
  },
]);
// # sourceMappingURL=411.bundle.js.map
