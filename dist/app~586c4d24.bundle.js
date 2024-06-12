/* eslint-disable max-len */
/*! For license information please see app~586c4d24.bundle.js.LICENSE.txt */

(self.webpackChunkrestaurant_apps_middle_project = self.webpackChunkrestaurant_apps_middle_project || []).push([
  [646],
  {
    777: (t, r, e) => {
      e.d(r, { A: () => n });
      const n = {
        init(t) {
          var r = this;
          var e = t.button;
          var n = t.drawer;
          var o = t.content;
          e.addEventListener('click', (t) => {
            r._toggleDrawer(t, n);
          }),
          o.addEventListener('click', (t) => {
            r._closeDrawer(t, n);
          });
        },
        _toggleDrawer(t, r) {
          t.stopPropagation(), r.classList.toggle('open');
        },
        _closeDrawer(t, r) {
          t.stopPropagation(), r.classList.remove('open');
        },
      };
    },
    71: (t, r, e) => {
      e.d(r, { A: () => s });
      var n = e(448);
      var o = e(733);
      function i(t) {
        return (
          (i = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
              return typeof t;
            }
            : function (t) {
              return t
                    && typeof Symbol == 'function'
                    && t.constructor === Symbol
                    && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
          i(t)
        );
      }
      function a() {
        a = function () {
          return r;
        };
        var t;
        var r = {};
        var e = Object.prototype;
        var n = e.hasOwnProperty;
        var o = Object.defineProperty
          || function (t, r, e) {
            t[r] = e.value;
          };
        var c = typeof Symbol == 'function' ? Symbol : {};
        var u = c.iterator || '@@iterator';
        var s = c.asyncIterator || '@@asyncIterator';
        var f = c.toStringTag || '@@toStringTag';
        function l(t, r, e) {
          return (
            Object.defineProperty(t, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[r]
          );
        }
        try {
          l({}, '');
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function h(t, r, e, n) {
          var i = r && r.prototype instanceof m ? r : m;
          var a = Object.create(i.prototype);
          var c = new B(n || []);
          return o(a, '_invoke', { value: P(t, e, c) }), a;
        }
        function p(t, r, e) {
          try {
            return { type: 'normal', arg: t.call(r, e) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        r.wrap = h;
        var v = 'suspendedStart';
        var y = 'suspendedYield';
        var d = 'executing';
        var g = 'completed';
        var b = {};
        function m() {}
        function w() {}
        function x() {}
        var _ = {};
        l(_, u, function () {
          return this;
        });
        var L = Object.getPrototypeOf;
        var k = L && L(L(G([])));
        k && k !== e && n.call(k, u) && (_ = k);
        var E = (x.prototype = m.prototype = Object.create(_));
        function S(t) {
          ['next', 'throw', 'return'].forEach((r) => {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function O(t, r) {
          function e(o, a, c, u) {
            var s = p(t[o], t, a);
            if (s.type !== 'throw') {
              var f = s.arg;
              var l = f.value;
              return l && i(l) == 'object' && n.call(l, '__await')
                ? r.resolve(l.__await).then(
                  (t) => {
                    e('next', t, c, u);
                  },
                  (t) => {
                    e('throw', t, c, u);
                  },
                )
                : r.resolve(l).then(
                  (t) => {
                    (f.value = t), c(f);
                  },
                  (t) => e('throw', t, c, u),
                );
            }
            u(s.arg);
          }
          var a;
          o(this, '_invoke', {
            value(t, n) {
              function o() {
                return new r((r, o) => {
                  e(t, n, r, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function P(r, e, n) {
          var o = v;
          return function (i, a) {
            if (o === d) throw Error('Generator is already running');
            if (o === g) {
              if (i === 'throw') throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ;) {
              var c = n.delegate;
              if (c) {
                var u = j(c, n);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (o === v) throw ((o = g), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              o = d;
              var s = p(r, e, n);
              if (s.type === 'normal') {
                if (((o = n.done ? g : y), s.arg === b)) continue;
                return { value: s.arg, done: n.done };
              }
              s.type === 'throw'
                && ((o = g), (n.method = 'throw'), (n.arg = s.arg));
            }
          };
        }
        function j(r, e) {
          var n = e.method;
          var o = r.iterator[n];
          if (o === t) {
            return (
              (e.delegate = null),
              (n === 'throw'
                && r.iterator.return
                && ((e.method = 'return'),
                (e.arg = t),
                j(r, e),
                e.method === 'throw'))
                || (n !== 'return'
                  && ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    `The iterator does not provide a '${n}' method`,
                  )))),
              b
            );
          }
          var i = p(o, r.iterator, e.arg);
          if (i.type === 'throw') {
            return (
              (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), b
            );
          }
          var a = i.arg;
          return a
            ? a.done
              ? ((e[r.resultName] = a.value),
              (e.next = r.nextLoc),
              e.method !== 'return' && ((e.method = 'next'), (e.arg = t)),
              (e.delegate = null),
              b)
              : a
            : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            b);
        }
        function N(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]),
          2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
          this.tryEntries.push(r);
        }
        function A(t) {
          var r = t.completion || {};
          (r.type = 'normal'), delete r.arg, (t.completion = r);
        }
        function B(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(N, this),
          this.reset(!0);
        }
        function G(r) {
          if (r || r === '') {
            var e = r[u];
            if (e) return e.call(r);
            if (typeof r.next == 'function') return r;
            if (!isNaN(r.length)) {
              var o = -1;
              var a = function e() {
                for (; ++o < r.length;) if (n.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
                return (e.value = t), (e.done = !0), e;
              };
              return (a.next = a);
            }
          }
          throw new TypeError(`${i(r)} is not iterable`);
        }
        return (
          (w.prototype = x),
          o(E, 'constructor', { value: x, configurable: !0 }),
          o(x, 'constructor', { value: w, configurable: !0 }),
          (w.displayName = l(x, f, 'GeneratorFunction')),
          (r.isGeneratorFunction = function (t) {
            var r = typeof t == 'function' && t.constructor;
            return (
              !!r
              && (r === w || (r.displayName || r.name) === 'GeneratorFunction')
            );
          }),
          (r.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), l(t, f, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (r.awrap = function (t) {
            return { __await: t };
          }),
          S(O.prototype),
          l(O.prototype, s, function () {
            return this;
          }),
          (r.AsyncIterator = O),
          (r.async = function (t, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new O(h(t, e, n, o), i);
            return r.isGeneratorFunction(e)
              ? a
              : a.next().then((t) => (t.done ? t.value : a.next()));
          }),
          S(E),
          l(E, f, 'Generator'),
          l(E, u, function () {
            return this;
          }),
          l(E, 'toString', () => '[object Generator]'),
          (r.keys = function (t) {
            var r = Object(t);
            var e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length;) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (r.values = G),
          (B.prototype = {
            constructor: B,
            reset(r) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !r)
              ) {
                for (var e in this) {
                  e.charAt(0) === 't'
                    && n.call(this, e)
                    && !isNaN(+e.slice(1))
                    && (this[e] = t);
                }
              }
            },
            stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if (t.type === 'throw') throw t.arg;
              return this.rval;
            },
            dispatchException(r) {
              if (this.done) throw r;
              var e = this;
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = r),
                  (e.next = n),
                  o && ((e.method = 'next'), (e.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i];
                var c = a.completion;
                if (a.tryLoc === 'root') return o('end');
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc');
                  var s = n.call(a, 'finallyLoc');
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt(t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev
                  && n.call(o, 'finallyLoc')
                  && this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i
                && (t === 'break' || t === 'continue')
                && i.tryLoc <= r
                && r <= i.finallyLoc
                && (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = r),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete(t, r) {
              if (t.type === 'throw') throw t.arg;
              return (
                t.type === 'break' || t.type === 'continue'
                  ? (this.next = t.arg)
                  : t.type === 'return'
                    ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                    : t.type === 'normal' && r && (this.next = r),
                b
              );
            },
            finish(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), A(e), b;
              }
            },
            catch(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if (n.type === 'throw') {
                    var o = n.arg;
                    A(e);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield(r, e, n) {
              return (
                (this.delegate = { iterator: G(r), resultName: e, nextLoc: n }),
                this.method === 'next' && (this.arg = t),
                b
              );
            },
          }),
          r
        );
      }
      function c(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a);
          var u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function u(t) {
        return function () {
          var r = this;
          var e = arguments;
          return new Promise((n, o) => {
            var i = t.apply(r, e);
            function a(t) {
              c(i, n, o, a, u, 'next', t);
            }
            function u(t) {
              c(i, n, o, a, u, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      const s = {
        _subscribeButton: null,
        _unsubscribeButton: null,
        _registrationServiceWorker: null,
        init(t) {
          var r = this;
          return u(
            a().mark(function e() {
              var n;
              var o;
              return a().wrap((e) => {
                for (;;) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.subscribeButton),
                        (o = t.unsubscribeButton),
                        (r._subscribeButton = n),
                        (r._unsubscribeButton = o),
                        !('serviceWorker' in navigator))
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 6), navigator.serviceWorker.ready;
                    case 6:
                      r._registrationServiceWorker = e.sent;
                    case 7:
                      r._initialListener(), r._showSubscribeButton();
                    case 9:
                    case 'end':
                      return e.stop();
                  }
                }
              }, e);
            }),
          )();
        },
        _initialListener() {
          var t = this;
          this._subscribeButton.addEventListener(
            'click',
            (function () {
              var r = u(
                a().mark(function r(e) {
                  return a().wrap((r) => {
                    for (;;) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            e.stopPropagation(),
                            (r.next = 3),
                            t._subscribePushMessage()
                          );
                        case 3:
                        case 'end':
                          return r.stop();
                      }
                    }
                  }, r);
                }),
              );
              return function (t) {
                return r.apply(this, arguments);
              };
            }()),
          ),
          this._unsubscribeButton.addEventListener(
            'click',
            (function () {
              var r = u(
                a().mark(function r(e) {
                  return a().wrap((r) => {
                    for (;;) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            e.stopPropagation(),
                            (r.next = 3),
                            t._unsubscribePushMessage()
                          );
                        case 3:
                        case 'end':
                          return r.stop();
                      }
                    }
                  }, r);
                }),
              );
              return function (t) {
                return r.apply(this, arguments);
              };
            }()),
          );
        },
        _subscribePushMessage() {
          var t = this;
          return u(
            a().mark(function r() {
              var e;
              return a().wrap(
                (r) => {
                  for (;;) {
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2), t._isCurrentSubscriptionAvailable()
                        );
                      case 2:
                        if (!r.sent) {
                          r.next = 5;
                          break;
                        }
                        return (
                          console.log('Already subscribed to push message'),
                          r.abrupt('return')
                        );
                      case 5:
                        return (r.next = 7), t._isNotificationReady();
                      case 7:
                        if (r.sent) {
                          r.next = 10;
                          break;
                        }
                        return (
                          console.log("Notification isn't available"),
                          r.abrupt('return')
                        );
                      case 10:
                        return (
                          (r.prev = 10),
                          console.log(
                            '_subscribePushMessage: Subscribing to push message...',
                          ),
                          (r.next = 14),
                          t._registrationServiceWorker.pushManager.subscribe(
                            t._generateSubscribeOptions(),
                          )
                        );
                      case 14:
                        return (
                          (e = r.sent),
                          (r.next = 17),
                          t._sendPostToServer(o.A.PUSH_MSG_SUBSCRIBE_URL, e)
                        );
                      case 17:
                        console.log('Push message has been subscribed'),
                        (r.next = 23);
                        break;
                      case 20:
                        (r.prev = 20),
                        (r.t0 = r.catch(10)),
                        console.error(
                          'Failed to subscribe push message:',
                          r.t0,
                        );
                      case 23:
                        t._showSubscribeButton();
                      case 24:
                      case 'end':
                        return r.stop();
                    }
                  }
                },
                r,
                null,
                [[10, 20]],
              );
            }),
          )();
        },
        _unsubscribePushMessage() {
          var t = this;
          return u(
            a().mark(function r() {
              var e;
              return a().wrap(
                (r) => {
                  for (;;) {
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          t._registrationServiceWorker.pushManager.getSubscription()
                        );
                      case 2:
                        if ((e = r.sent)) {
                          r.next = 6;
                          break;
                        }
                        return (
                          console.log("Haven't subscribed to push message"),
                          r.abrupt('return')
                        );
                      case 6:
                        return (
                          (r.prev = 6),
                          (r.next = 9),
                          t._sendPostToServer(o.A.PUSH_MSG_UNSUBSCRIBE_URL, e)
                        );
                      case 9:
                        return (r.next = 11), e.unsubscribe();
                      case 11:
                        console.log('Push message has been unsubscribed'),
                        (r.next = 17);
                        break;
                      case 14:
                        (r.prev = 14),
                        (r.t0 = r.catch(6)),
                        console.error(
                          'Failed to unsubscribe push message:',
                          r.t0,
                        );
                      case 17:
                        t._showSubscribeButton();
                      case 18:
                      case 'end':
                        return r.stop();
                    }
                  }
                },
                r,
                null,
                [[6, 14]],
              );
            }),
          )();
        },
        _generateSubscribeOptions() {
          return {
            userVisibleOnly: !0,
            applicationServerKey: this._urlB64ToUint8Array(
              o.A.PUSH_MSG_VAPID_PUBLIC_KEY,
            ),
          };
        },
        _sendPostToServer(t, r) {
          return u(
            a().mark(function e() {
              var n;
              return a().wrap((e) => {
                for (;;) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch(t, {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(r),
                        })
                      );
                    case 2:
                      return (n = e.sent), e.abrupt('return', n.json());
                    case 4:
                    case 'end':
                      return e.stop();
                  }
                }
              }, e);
            }),
          )();
        },
        _isSubscribedToServerForHiddenSubscribeButton() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (this._subscribeButton.style.display = t ? 'none' : 'inline-block'),
          (this._unsubscribeButton.style.display = t
            ? 'inline-block'
            : 'none');
        },
        _isCurrentSubscriptionAvailable() {
          var t = this;
          return u(
            a().mark(function r() {
              var e;
              return a().wrap((r) => {
                for (;;) {
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.next = 2),
                        t._registrationServiceWorker.pushManager.getSubscription()
                      );
                    case 2:
                      return (e = r.sent), r.abrupt('return', Boolean(e));
                    case 4:
                    case 'end':
                      return r.stop();
                  }
                }
              }, r);
            }),
          )();
        },
        _isNotificationReady() {
          return u(
            a().mark(function t() {
              return a().wrap((t) => {
                for (;;) {
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (n.A._checkAvailability()) {
                        t.next = 3;
                        break;
                      }
                      return (
                        console.log(
                          'Notification not supported in this browser',
                        ),
                        t.abrupt('return', !1)
                      );
                    case 3:
                      return (t.next = 5), Notification.requestPermission();
                    case 5:
                      if (t.sent === 'granted') {
                        t.next = 10;
                        break;
                      }
                      return (
                        console.log('Notification permission not granted'),
                        console.log(
                          'Please grant notification permission to subscribe to push message',
                        ),
                        t.abrupt('return', !1)
                      );
                    case 10:
                      return t.abrupt('return', !0);
                    case 11:
                    case 'end':
                      return t.stop();
                  }
                }
              }, t);
            }),
          )();
        },
        _urlB64ToUint8Array(t) {
          for (
            var r = (t + '='.repeat((4 - (t.length % 4)) % 4))
                .replace(/-/g, '+')
                .replace(/_/g, '/'),
              e = window.atob(r),
              n = new Uint8Array(e.length),
              o = 0;
            o < e.length;
            o += 1
          ) n[o] = e.charCodeAt(o);
          return n;
        },
        _showSubscribeButton() {
          var t = this;
          return u(
            a().mark(function r() {
              var e;
              return a().wrap((r) => {
                for (;;) {
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (r.next = 2), t._isCurrentSubscriptionAvailable();
                    case 2:
                      (e = r.sent),
                      t._isSubscribedToServerForHiddenSubscribeButton(e);
                    case 4:
                    case 'end':
                      return r.stop();
                  }
                }
              }, r);
            }),
          )();
        },
      };
    },
    784: (t, r, e) => {
      e.d(r, { A: () => s });
      var n = e(480);
      var o = e(538);
      function i(t) {
        return (
          (i = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
              return typeof t;
            }
            : function (t) {
              return t
                    && typeof Symbol == 'function'
                    && t.constructor === Symbol
                    && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
          i(t)
        );
      }
      function a() {
        a = function () {
          return r;
        };
        var t;
        var r = {};
        var e = Object.prototype;
        var n = e.hasOwnProperty;
        var o = Object.defineProperty
          || function (t, r, e) {
            t[r] = e.value;
          };
        var c = typeof Symbol == 'function' ? Symbol : {};
        var u = c.iterator || '@@iterator';
        var s = c.asyncIterator || '@@asyncIterator';
        var f = c.toStringTag || '@@toStringTag';
        function l(t, r, e) {
          return (
            Object.defineProperty(t, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[r]
          );
        }
        try {
          l({}, '');
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function h(t, r, e, n) {
          var i = r && r.prototype instanceof m ? r : m;
          var a = Object.create(i.prototype);
          var c = new B(n || []);
          return o(a, '_invoke', { value: P(t, e, c) }), a;
        }
        function p(t, r, e) {
          try {
            return { type: 'normal', arg: t.call(r, e) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        r.wrap = h;
        var v = 'suspendedStart';
        var y = 'suspendedYield';
        var d = 'executing';
        var g = 'completed';
        var b = {};
        function m() {}
        function w() {}
        function x() {}
        var _ = {};
        l(_, u, function () {
          return this;
        });
        var L = Object.getPrototypeOf;
        var k = L && L(L(G([])));
        k && k !== e && n.call(k, u) && (_ = k);
        var E = (x.prototype = m.prototype = Object.create(_));
        function S(t) {
          ['next', 'throw', 'return'].forEach((r) => {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function O(t, r) {
          function e(o, a, c, u) {
            var s = p(t[o], t, a);
            if (s.type !== 'throw') {
              var f = s.arg;
              var l = f.value;
              return l && i(l) == 'object' && n.call(l, '__await')
                ? r.resolve(l.__await).then(
                  (t) => {
                    e('next', t, c, u);
                  },
                  (t) => {
                    e('throw', t, c, u);
                  },
                )
                : r.resolve(l).then(
                  (t) => {
                    (f.value = t), c(f);
                  },
                  (t) => e('throw', t, c, u),
                );
            }
            u(s.arg);
          }
          var a;
          o(this, '_invoke', {
            value(t, n) {
              function o() {
                return new r((r, o) => {
                  e(t, n, r, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function P(r, e, n) {
          var o = v;
          return function (i, a) {
            if (o === d) throw Error('Generator is already running');
            if (o === g) {
              if (i === 'throw') throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ;) {
              var c = n.delegate;
              if (c) {
                var u = j(c, n);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (o === v) throw ((o = g), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              o = d;
              var s = p(r, e, n);
              if (s.type === 'normal') {
                if (((o = n.done ? g : y), s.arg === b)) continue;
                return { value: s.arg, done: n.done };
              }
              s.type === 'throw'
                && ((o = g), (n.method = 'throw'), (n.arg = s.arg));
            }
          };
        }
        function j(r, e) {
          var n = e.method;
          var o = r.iterator[n];
          if (o === t) {
            return (
              (e.delegate = null),
              (n === 'throw'
                && r.iterator.return
                && ((e.method = 'return'),
                (e.arg = t),
                j(r, e),
                e.method === 'throw'))
                || (n !== 'return'
                  && ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    `The iterator does not provide a '${n}' method`,
                  )))),
              b
            );
          }
          var i = p(o, r.iterator, e.arg);
          if (i.type === 'throw') {
            return (
              (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), b
            );
          }
          var a = i.arg;
          return a
            ? a.done
              ? ((e[r.resultName] = a.value),
              (e.next = r.nextLoc),
              e.method !== 'return' && ((e.method = 'next'), (e.arg = t)),
              (e.delegate = null),
              b)
              : a
            : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            b);
        }
        function N(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]),
          2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
          this.tryEntries.push(r);
        }
        function A(t) {
          var r = t.completion || {};
          (r.type = 'normal'), delete r.arg, (t.completion = r);
        }
        function B(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(N, this),
          this.reset(!0);
        }
        function G(r) {
          if (r || r === '') {
            var e = r[u];
            if (e) return e.call(r);
            if (typeof r.next == 'function') return r;
            if (!isNaN(r.length)) {
              var o = -1;
              var a = function e() {
                for (; ++o < r.length;) if (n.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
                return (e.value = t), (e.done = !0), e;
              };
              return (a.next = a);
            }
          }
          throw new TypeError(`${i(r)} is not iterable`);
        }
        return (
          (w.prototype = x),
          o(E, 'constructor', { value: x, configurable: !0 }),
          o(x, 'constructor', { value: w, configurable: !0 }),
          (w.displayName = l(x, f, 'GeneratorFunction')),
          (r.isGeneratorFunction = function (t) {
            var r = typeof t == 'function' && t.constructor;
            return (
              !!r
              && (r === w || (r.displayName || r.name) === 'GeneratorFunction')
            );
          }),
          (r.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), l(t, f, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (r.awrap = function (t) {
            return { __await: t };
          }),
          S(O.prototype),
          l(O.prototype, s, function () {
            return this;
          }),
          (r.AsyncIterator = O),
          (r.async = function (t, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new O(h(t, e, n, o), i);
            return r.isGeneratorFunction(e)
              ? a
              : a.next().then((t) => (t.done ? t.value : a.next()));
          }),
          S(E),
          l(E, f, 'Generator'),
          l(E, u, function () {
            return this;
          }),
          l(E, 'toString', () => '[object Generator]'),
          (r.keys = function (t) {
            var r = Object(t);
            var e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length;) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (r.values = G),
          (B.prototype = {
            constructor: B,
            reset(r) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !r)
              ) {
                for (var e in this) {
                  e.charAt(0) === 't'
                    && n.call(this, e)
                    && !isNaN(+e.slice(1))
                    && (this[e] = t);
                }
              }
            },
            stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if (t.type === 'throw') throw t.arg;
              return this.rval;
            },
            dispatchException(r) {
              if (this.done) throw r;
              var e = this;
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = r),
                  (e.next = n),
                  o && ((e.method = 'next'), (e.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i];
                var c = a.completion;
                if (a.tryLoc === 'root') return o('end');
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc');
                  var s = n.call(a, 'finallyLoc');
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt(t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev
                  && n.call(o, 'finallyLoc')
                  && this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i
                && (t === 'break' || t === 'continue')
                && i.tryLoc <= r
                && r <= i.finallyLoc
                && (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = r),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete(t, r) {
              if (t.type === 'throw') throw t.arg;
              return (
                t.type === 'break' || t.type === 'continue'
                  ? (this.next = t.arg)
                  : t.type === 'return'
                    ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                    : t.type === 'normal' && r && (this.next = r),
                b
              );
            },
            finish(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), A(e), b;
              }
            },
            catch(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if (n.type === 'throw') {
                    var o = n.arg;
                    A(e);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield(r, e, n) {
              return (
                (this.delegate = { iterator: G(r), resultName: e, nextLoc: n }),
                this.method === 'next' && (this.arg = t),
                b
              );
            },
          }),
          r
        );
      }
      function c(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a);
          var u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function u(t) {
        return function () {
          var r = this;
          var e = arguments;
          return new Promise((n, o) => {
            var i = t.apply(r, e);
            function a(t) {
              c(i, n, o, a, u, 'next', t);
            }
            function u(t) {
              c(i, n, o, a, u, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      const s = {
        init(t) {
          var r = this;
          return u(
            a().mark(function e() {
              var n;
              var o;
              var i;
              return a().wrap((e) => {
                for (;;) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.likeButtonContainer),
                        (o = t.favoriteRestaurants),
                        (i = t.resto),
                        (r._likeButtonContainer = n),
                        (r._resto = i),
                        (r._favoriteRestaurants = o),
                        (e.next = 6),
                        r._renderButton()
                      );
                    case 6:
                    case 'end':
                      return e.stop();
                  }
                }
              }, e);
            }),
          )();
        },
        _renderButton() {
          var t = this;
          return u(
            a().mark(function r() {
              var e;
              return a().wrap((r) => {
                for (;;) {
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (e = t._resto.id), (r.next = 3), t._isRestoExist(e)
                      );
                    case 3:
                      if (!r.sent) {
                        r.next = 7;
                        break;
                      }
                      t._renderLiked(), (r.next = 8);
                      break;
                    case 7:
                      t._renderLike();
                    case 8:
                    case 'end':
                      return r.stop();
                  }
                }
              }, r);
            }),
          )();
        },
        _isRestoExist(t) {
          return u(
            a().mark(function r() {
              var e;
              return a().wrap((r) => {
                for (;;) {
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (r.next = 2), n.A.getResto(t);
                    case 2:
                      return (e = r.sent), r.abrupt('return', !!e);
                    case 4:
                    case 'end':
                      return r.stop();
                  }
                }
              }, r);
            }),
          )();
        },
        _renderLike() {
          var t = this;
          this._likeButtonContainer.innerHTML = (0, o.OK)();
          var r = this._likeButtonContainer.querySelector('#likeButton');
          r
            && r.addEventListener(
              'click',
              u(
                a().mark(function r() {
                  return a().wrap((r) => {
                    for (;;) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), n.A.putResto(t._resto);
                        case 2:
                          return (r.next = 4), t._renderButton();
                        case 4:
                        case 'end':
                          return r.stop();
                      }
                    }
                  }, r);
                }),
              ),
            );
        },
        _renderLiked() {
          var t = this;
          this._likeButtonContainer.innerHTML = (0, o.s9)();
          var r = this._likeButtonContainer.querySelector('#likedButton');
          r
            && r.addEventListener(
              'click',
              u(
                a().mark(function r() {
                  return a().wrap((r) => {
                    for (;;) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), n.A.deleteResto(t._resto.id);
                        case 2:
                          return (r.next = 4), t._renderButton();
                        case 4:
                        case 'end':
                          return r.stop();
                      }
                    }
                  }, r);
                }),
              ),
            );
        },
      };
    },
    448: (t, r, e) => {
      function n(t) {
        return (
          (n = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
              return typeof t;
            }
            : function (t) {
              return t
                    && typeof Symbol == 'function'
                    && t.constructor === Symbol
                    && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
          n(t)
        );
      }
      function o() {
        o = function () {
          return r;
        };
        var t;
        var r = {};
        var e = Object.prototype;
        var i = e.hasOwnProperty;
        var a = Object.defineProperty
          || function (t, r, e) {
            t[r] = e.value;
          };
        var c = typeof Symbol == 'function' ? Symbol : {};
        var u = c.iterator || '@@iterator';
        var s = c.asyncIterator || '@@asyncIterator';
        var f = c.toStringTag || '@@toStringTag';
        function l(t, r, e) {
          return (
            Object.defineProperty(t, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[r]
          );
        }
        try {
          l({}, '');
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function h(t, r, e, n) {
          var o = r && r.prototype instanceof m ? r : m;
          var i = Object.create(o.prototype);
          var c = new B(n || []);
          return a(i, '_invoke', { value: P(t, e, c) }), i;
        }
        function p(t, r, e) {
          try {
            return { type: 'normal', arg: t.call(r, e) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        r.wrap = h;
        var v = 'suspendedStart';
        var y = 'suspendedYield';
        var d = 'executing';
        var g = 'completed';
        var b = {};
        function m() {}
        function w() {}
        function x() {}
        var _ = {};
        l(_, u, function () {
          return this;
        });
        var L = Object.getPrototypeOf;
        var k = L && L(L(G([])));
        k && k !== e && i.call(k, u) && (_ = k);
        var E = (x.prototype = m.prototype = Object.create(_));
        function S(t) {
          ['next', 'throw', 'return'].forEach((r) => {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function O(t, r) {
          function e(o, a, c, u) {
            var s = p(t[o], t, a);
            if (s.type !== 'throw') {
              var f = s.arg;
              var l = f.value;
              return l && n(l) == 'object' && i.call(l, '__await')
                ? r.resolve(l.__await).then(
                  (t) => {
                    e('next', t, c, u);
                  },
                  (t) => {
                    e('throw', t, c, u);
                  },
                )
                : r.resolve(l).then(
                  (t) => {
                    (f.value = t), c(f);
                  },
                  (t) => e('throw', t, c, u),
                );
            }
            u(s.arg);
          }
          var o;
          a(this, '_invoke', {
            value(t, n) {
              function i() {
                return new r((r, o) => {
                  e(t, n, r, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function P(r, e, n) {
          var o = v;
          return function (i, a) {
            if (o === d) throw Error('Generator is already running');
            if (o === g) {
              if (i === 'throw') throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ;) {
              var c = n.delegate;
              if (c) {
                var u = j(c, n);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (o === v) throw ((o = g), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              o = d;
              var s = p(r, e, n);
              if (s.type === 'normal') {
                if (((o = n.done ? g : y), s.arg === b)) continue;
                return { value: s.arg, done: n.done };
              }
              s.type === 'throw'
                && ((o = g), (n.method = 'throw'), (n.arg = s.arg));
            }
          };
        }
        function j(r, e) {
          var n = e.method;
          var o = r.iterator[n];
          if (o === t) {
            return (
              (e.delegate = null),
              (n === 'throw'
                && r.iterator.return
                && ((e.method = 'return'),
                (e.arg = t),
                j(r, e),
                e.method === 'throw'))
                || (n !== 'return'
                  && ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    `The iterator does not provide a '${n}' method`,
                  )))),
              b
            );
          }
          var i = p(o, r.iterator, e.arg);
          if (i.type === 'throw') {
            return (
              (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), b
            );
          }
          var a = i.arg;
          return a
            ? a.done
              ? ((e[r.resultName] = a.value),
              (e.next = r.nextLoc),
              e.method !== 'return' && ((e.method = 'next'), (e.arg = t)),
              (e.delegate = null),
              b)
              : a
            : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            b);
        }
        function N(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]),
          2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
          this.tryEntries.push(r);
        }
        function A(t) {
          var r = t.completion || {};
          (r.type = 'normal'), delete r.arg, (t.completion = r);
        }
        function B(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(N, this),
          this.reset(!0);
        }
        function G(r) {
          if (r || r === '') {
            var e = r[u];
            if (e) return e.call(r);
            if (typeof r.next == 'function') return r;
            if (!isNaN(r.length)) {
              var o = -1;
              var a = function e() {
                for (; ++o < r.length;) if (i.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
                return (e.value = t), (e.done = !0), e;
              };
              return (a.next = a);
            }
          }
          throw new TypeError(`${n(r)} is not iterable`);
        }
        return (
          (w.prototype = x),
          a(E, 'constructor', { value: x, configurable: !0 }),
          a(x, 'constructor', { value: w, configurable: !0 }),
          (w.displayName = l(x, f, 'GeneratorFunction')),
          (r.isGeneratorFunction = function (t) {
            var r = typeof t == 'function' && t.constructor;
            return (
              !!r
              && (r === w || (r.displayName || r.name) === 'GeneratorFunction')
            );
          }),
          (r.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), l(t, f, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (r.awrap = function (t) {
            return { __await: t };
          }),
          S(O.prototype),
          l(O.prototype, s, function () {
            return this;
          }),
          (r.AsyncIterator = O),
          (r.async = function (t, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new O(h(t, e, n, o), i);
            return r.isGeneratorFunction(e)
              ? a
              : a.next().then((t) => (t.done ? t.value : a.next()));
          }),
          S(E),
          l(E, f, 'Generator'),
          l(E, u, function () {
            return this;
          }),
          l(E, 'toString', () => '[object Generator]'),
          (r.keys = function (t) {
            var r = Object(t);
            var e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length;) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (r.values = G),
          (B.prototype = {
            constructor: B,
            reset(r) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !r)
              ) {
                for (var e in this) {
                  e.charAt(0) === 't'
                    && i.call(this, e)
                    && !isNaN(+e.slice(1))
                    && (this[e] = t);
                }
              }
            },
            stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if (t.type === 'throw') throw t.arg;
              return this.rval;
            },
            dispatchException(r) {
              if (this.done) throw r;
              var e = this;
              function n(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = r),
                  (e.next = n),
                  o && ((e.method = 'next'), (e.arg = t)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o];
                var c = a.completion;
                if (a.tryLoc === 'root') return n('end');
                if (a.tryLoc <= this.prev) {
                  var u = i.call(a, 'catchLoc');
                  var s = i.call(a, 'finallyLoc');
                  if (u && s) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!s) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt(t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (
                  n.tryLoc <= this.prev
                  && i.call(n, 'finallyLoc')
                  && this.prev < n.finallyLoc
                ) {
                  var o = n;
                  break;
                }
              }
              o
                && (t === 'break' || t === 'continue')
                && o.tryLoc <= r
                && r <= o.finallyLoc
                && (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = r),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete(t, r) {
              if (t.type === 'throw') throw t.arg;
              return (
                t.type === 'break' || t.type === 'continue'
                  ? (this.next = t.arg)
                  : t.type === 'return'
                    ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                    : t.type === 'normal' && r && (this.next = r),
                b
              );
            },
            finish(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), A(e), b;
              }
            },
            catch(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if (n.type === 'throw') {
                    var o = n.arg;
                    A(e);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield(r, e, n) {
              return (
                (this.delegate = { iterator: G(r), resultName: e, nextLoc: n }),
                this.method === 'next' && (this.arg = t),
                b
              );
            },
          }),
          r
        );
      }
      function i(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a);
          var u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function a(t) {
        return function () {
          var r = this;
          var e = arguments;
          return new Promise((n, o) => {
            var a = t.apply(r, e);
            function c(t) {
              i(a, n, o, c, u, 'next', t);
            }
            function u(t) {
              i(a, n, o, c, u, 'throw', t);
            }
            c(void 0);
          });
        };
      }
      e.d(r, { A: () => c });
      const c = {
        sendNotification(t) {
          var r = this;
          return a(
            o().mark(function e() {
              var n;
              var i;
              return o().wrap((e) => {
                for (;;) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.title), (i = t.options), r._checkAvailability())
                      ) {
                        e.next = 4;
                        break;
                      }
                      return (
                        console.log(
                          'Notification not supported in this browser',
                        ),
                        e.abrupt('return')
                      );
                    case 4:
                      if (r._checkPermission()) {
                        e.next = 9;
                        break;
                      }
                      return (
                        console.log('User did not yet grant permission'),
                        (e.next = 8),
                        r._requestPermission()
                      );
                    case 8:
                      return e.abrupt('return');
                    case 9:
                      return (
                        (e.next = 11),
                        r._showNotification({ title: n, options: i })
                      );
                    case 11:
                    case 'end':
                      return e.stop();
                  }
                }
              }, e);
            }),
          )();
        },
        _checkAvailability() {
          return 'Notification' in window;
        },
        _checkPermission() {
          return Notification.permission === 'granted';
        },
        _requestPermission() {
          return a(
            o().mark(function t() {
              var r;
              return o().wrap((t) => {
                for (;;) {
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Notification.requestPermission();
                    case 2:
                      (r = t.sent) === 'denied'
                        && console.log('Notification Denied'),
                      r === 'default' && console.log('Permission closed');
                    case 5:
                    case 'end':
                      return t.stop();
                  }
                }
              }, t);
            }),
          )();
        },
        _showNotification(t) {
          return a(
            o().mark(function r() {
              var e;
              var n;
              return o().wrap((r) => {
                for (;;) {
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (e = t.title),
                        (n = t.options),
                        (r.next = 3),
                        navigator.serviceWorker.ready
                      );
                    case 3:
                      r.sent.showNotification(e, n);
                    case 5:
                    case 'end':
                      return r.stop();
                  }
                }
              }, r);
            }),
          )();
        },
      };
    },
    238: (t, r, e) => {
      e.d(r, { A: () => c });
      var n = e(730);
      function o(t) {
        return (
          (o = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
              return typeof t;
            }
            : function (t) {
              return t
                    && typeof Symbol == 'function'
                    && t.constructor === Symbol
                    && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
          o(t)
        );
      }
      function i() {
        i = function () {
          return r;
        };
        var t;
        var r = {};
        var e = Object.prototype;
        var n = e.hasOwnProperty;
        var a = Object.defineProperty
          || function (t, r, e) {
            t[r] = e.value;
          };
        var c = typeof Symbol == 'function' ? Symbol : {};
        var u = c.iterator || '@@iterator';
        var s = c.asyncIterator || '@@asyncIterator';
        var f = c.toStringTag || '@@toStringTag';
        function l(t, r, e) {
          return (
            Object.defineProperty(t, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[r]
          );
        }
        try {
          l({}, '');
        } catch (t) {
          l = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function h(t, r, e, n) {
          var o = r && r.prototype instanceof m ? r : m;
          var i = Object.create(o.prototype);
          var c = new B(n || []);
          return a(i, '_invoke', { value: P(t, e, c) }), i;
        }
        function p(t, r, e) {
          try {
            return { type: 'normal', arg: t.call(r, e) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        r.wrap = h;
        var v = 'suspendedStart';
        var y = 'suspendedYield';
        var d = 'executing';
        var g = 'completed';
        var b = {};
        function m() {}
        function w() {}
        function x() {}
        var _ = {};
        l(_, u, function () {
          return this;
        });
        var L = Object.getPrototypeOf;
        var k = L && L(L(G([])));
        k && k !== e && n.call(k, u) && (_ = k);
        var E = (x.prototype = m.prototype = Object.create(_));
        function S(t) {
          ['next', 'throw', 'return'].forEach((r) => {
            l(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function O(t, r) {
          function e(i, a, c, u) {
            var s = p(t[i], t, a);
            if (s.type !== 'throw') {
              var f = s.arg;
              var l = f.value;
              return l && o(l) == 'object' && n.call(l, '__await')
                ? r.resolve(l.__await).then(
                  (t) => {
                    e('next', t, c, u);
                  },
                  (t) => {
                    e('throw', t, c, u);
                  },
                )
                : r.resolve(l).then(
                  (t) => {
                    (f.value = t), c(f);
                  },
                  (t) => e('throw', t, c, u),
                );
            }
            u(s.arg);
          }
          var i;
          a(this, '_invoke', {
            value(t, n) {
              function o() {
                return new r((r, o) => {
                  e(t, n, r, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function P(r, e, n) {
          var o = v;
          return function (i, a) {
            if (o === d) throw Error('Generator is already running');
            if (o === g) {
              if (i === 'throw') throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ;) {
              var c = n.delegate;
              if (c) {
                var u = j(c, n);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if (n.method === 'next') n.sent = n._sent = n.arg;
              else if (n.method === 'throw') {
                if (o === v) throw ((o = g), n.arg);
                n.dispatchException(n.arg);
              } else n.method === 'return' && n.abrupt('return', n.arg);
              o = d;
              var s = p(r, e, n);
              if (s.type === 'normal') {
                if (((o = n.done ? g : y), s.arg === b)) continue;
                return { value: s.arg, done: n.done };
              }
              s.type === 'throw'
                && ((o = g), (n.method = 'throw'), (n.arg = s.arg));
            }
          };
        }
        function j(r, e) {
          var n = e.method;
          var o = r.iterator[n];
          if (o === t) {
            return (
              (e.delegate = null),
              (n === 'throw'
                && r.iterator.return
                && ((e.method = 'return'),
                (e.arg = t),
                j(r, e),
                e.method === 'throw'))
                || (n !== 'return'
                  && ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    `The iterator does not provide a '${n}' method`,
                  )))),
              b
            );
          }
          var i = p(o, r.iterator, e.arg);
          if (i.type === 'throw') {
            return (
              (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), b
            );
          }
          var a = i.arg;
          return a
            ? a.done
              ? ((e[r.resultName] = a.value),
              (e.next = r.nextLoc),
              e.method !== 'return' && ((e.method = 'next'), (e.arg = t)),
              (e.delegate = null),
              b)
              : a
            : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            b);
        }
        function N(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]),
          2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
          this.tryEntries.push(r);
        }
        function A(t) {
          var r = t.completion || {};
          (r.type = 'normal'), delete r.arg, (t.completion = r);
        }
        function B(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(N, this),
          this.reset(!0);
        }
        function G(r) {
          if (r || r === '') {
            var e = r[u];
            if (e) return e.call(r);
            if (typeof r.next == 'function') return r;
            if (!isNaN(r.length)) {
              var i = -1;
              var a = function e() {
                for (; ++i < r.length;) if (n.call(r, i)) return (e.value = r[i]), (e.done = !1), e;
                return (e.value = t), (e.done = !0), e;
              };
              return (a.next = a);
            }
          }
          throw new TypeError(`${o(r)} is not iterable`);
        }
        return (
          (w.prototype = x),
          a(E, 'constructor', { value: x, configurable: !0 }),
          a(x, 'constructor', { value: w, configurable: !0 }),
          (w.displayName = l(x, f, 'GeneratorFunction')),
          (r.isGeneratorFunction = function (t) {
            var r = typeof t == 'function' && t.constructor;
            return (
              !!r
              && (r === w || (r.displayName || r.name) === 'GeneratorFunction')
            );
          }),
          (r.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), l(t, f, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (r.awrap = function (t) {
            return { __await: t };
          }),
          S(O.prototype),
          l(O.prototype, s, function () {
            return this;
          }),
          (r.AsyncIterator = O),
          (r.async = function (t, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new O(h(t, e, n, o), i);
            return r.isGeneratorFunction(e)
              ? a
              : a.next().then((t) => (t.done ? t.value : a.next()));
          }),
          S(E),
          l(E, f, 'Generator'),
          l(E, u, function () {
            return this;
          }),
          l(E, 'toString', () => '[object Generator]'),
          (r.keys = function (t) {
            var r = Object(t);
            var e = [];
            for (var n in r) e.push(n);
            return (
              e.reverse(),
              function t() {
                for (; e.length;) {
                  var n = e.pop();
                  if (n in r) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (r.values = G),
          (B.prototype = {
            constructor: B,
            reset(r) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !r)
              ) {
                for (var e in this) {
                  e.charAt(0) === 't'
                    && n.call(this, e)
                    && !isNaN(+e.slice(1))
                    && (this[e] = t);
                }
              }
            },
            stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if (t.type === 'throw') throw t.arg;
              return this.rval;
            },
            dispatchException(r) {
              if (this.done) throw r;
              var e = this;
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = r),
                  (e.next = n),
                  o && ((e.method = 'next'), (e.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i];
                var c = a.completion;
                if (a.tryLoc === 'root') return o('end');
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc');
                  var s = n.call(a, 'finallyLoc');
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt(t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev
                  && n.call(o, 'finallyLoc')
                  && this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i
                && (t === 'break' || t === 'continue')
                && i.tryLoc <= r
                && r <= i.finallyLoc
                && (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = r),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete(t, r) {
              if (t.type === 'throw') throw t.arg;
              return (
                t.type === 'break' || t.type === 'continue'
                  ? (this.next = t.arg)
                  : t.type === 'return'
                    ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                    : t.type === 'normal' && r && (this.next = r),
                b
              );
            },
            finish(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), A(e), b;
              }
            },
            catch(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if (n.type === 'throw') {
                    var o = n.arg;
                    A(e);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield(r, e, n) {
              return (
                (this.delegate = { iterator: G(r), resultName: e, nextLoc: n }),
                this.method === 'next' && (this.arg = t),
                b
              );
            },
          }),
          r
        );
      }
      function a(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a);
          var u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      const c = (function () {
        var t;
        var r = ((t = i().mark(function t() {
          var r;
          return i().wrap(
            (t) => {
              for (;;) {
                switch ((t.prev = t.next)) {
                  case 0:
                    if ('serviceWorker' in navigator) {
                      t.next = 3;
                      break;
                    }
                    return (
                      console.log(
                        'Service Worker not supported in the browser',
                      ),
                      t.abrupt('return')
                    );
                  case 3:
                    return (
                      (r = new n.JK('./sw.js')),
                      (t.prev = 4),
                      (t.next = 7),
                      r.register()
                    );
                  case 7:
                    console.log('Service worker registered'), (t.next = 13);
                    break;
                  case 10:
                    (t.prev = 10),
                    (t.t0 = t.catch(4)),
                    console.log('Failed to register service worker', t.t0);
                  case 13:
                  case 'end':
                    return t.stop();
                }
              }
            },
            t,
            null,
            [[4, 10]],
          );
        })),
        function () {
          var r = this;
          var e = arguments;
          return new Promise((n, o) => {
            var i = t.apply(r, e);
            function c(t) {
              a(i, n, o, c, u, 'next', t);
            }
            function u(t) {
              a(i, n, o, c, u, 'throw', t);
            }
            c(void 0);
          });
        });
        return function () {
          return r.apply(this, arguments);
        };
      }());
    },
    121: (t, r, e) => {
      e.d(r, { A: () => i });
      var n = e(448);
      var o = e(733);
      const i = {
        _webSocket: null,
        init() {
          (this._webSocket = new WebSocket(o.A.WEB_SOCKET_SERVER)),
          (this._webSocket.onopen = function () {
            console.log('WebSocket connection established');
          }),
          (this._webSocket.onerror = function (t) {
            console.error('WebSocket error:', t);
          }),
          (this._webSocket.onmessage = function (t) {
            console.log('WebSocket message received:', t.data);
            var r = JSON.parse(t.data);
            if (r && r.id) {
              var e = r.name;
              var i = r.description;
              n.A.sendNotification({
                title: ''.concat(e, ' is on the list!'),
                options: {
                  body: i,
                  icon: '/favicon.png',
                  image: o.A.BASE_IMAGE_URL.MEDIUM(r.id),
                },
              });
            }
          }),
          (this._webSocket.onclose = function () {
            console.log('WebSocket connection closed');
          });
        },
      };
    },
  },
]);
// # sourceMappingURL=app~586c4d24.bundle.js.map
