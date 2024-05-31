function At(n, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, i.key, i);
  }
}
var n, t;
(n = this),
  (t = function () {
    "use strict";
    var n = "splide",
      t = "data-" + n,
      e = 10;
    function i(n) {
      n.length = 0;
    }
    function o(n) {
      return !c(n) && "object" == typeof n;
    }
    function r(n) {
      return Array.isArray(n);
    }
    function u(n) {
      return "string" == typeof n;
    }
    function s(n) {
      return void 0 === n;
    }
    function c(n) {
      return null === n;
    }
    function a(n) {
      return n instanceof HTMLElement;
    }
    function f(n) {
      return r(n) ? n : [n];
    }
    function l(n, t) {
      f(n).forEach(t);
    }
    function d(n, t) {
      return -1 < n.indexOf(t);
    }
    function h(n, t) {
      return n.push.apply(n, f(t)), n;
    }
    var p = Array.prototype;
    function g(n, t, e) {
      return p.slice.call(n, t, e);
    }
    function v(n, t, e) {
      n &&
        l(t, function (t) {
          t && n.classList[e ? "add" : "remove"](t);
        });
    }
    function m(n, t) {
      v(n, u(t) ? t.split(" ") : t, !0);
    }
    function y(n, t) {
      l(t, n.appendChild.bind(n));
    }
    function b(n, t) {
      l(n, function (n) {
        var e = t.parentNode;
        e && e.insertBefore(n, t);
      });
    }
    function w(n, t) {
      return a(n) && (n.msMatchesSelector || n.matches).call(n, t);
    }
    function x(n, t) {
      return n
        ? g(n.children).filter(function (n) {
            return w(n, t);
          })
        : [];
    }
    function E(n, t) {
      return t ? x(n, t)[0] : n.firstElementChild;
    }
    function S(n, t, e) {
      if (n)
        for (
          var i = Object.keys(n), o = ((i = e ? i.reverse() : i), 0);
          o < i.length;
          o++
        ) {
          var r = i[o];
          if ("__proto__" !== r && !1 === t(n[r], r)) break;
        }
      return n;
    }
    function P(n) {
      return (
        g(arguments, 1).forEach(function (t) {
          S(t, function (e, i) {
            n[i] = t[i];
          });
        }),
        n
      );
    }
    function k(n, t) {
      return (
        S(t, function (t, e) {
          r(t)
            ? (n[e] = t.slice())
            : o(t)
            ? (n[e] = k(o(n[e]) ? n[e] : {}, t))
            : (n[e] = t);
        }),
        n
      );
    }
    function _(n, t) {
      n &&
        l(t, function (t) {
          n.removeAttribute(t);
        });
    }
    function A(n, t, e) {
      o(t)
        ? S(t, function (t, e) {
            A(n, e, t);
          })
        : c(e)
        ? _(n, t)
        : n.setAttribute(t, String(e));
    }
    function L(n, t, e) {
      return (
        (n = document.createElement(n)),
        t && (u(t) ? m : A)(n, t),
        e && y(e, n),
        n
      );
    }
    function C(n, t, e) {
      if (s(e)) return getComputedStyle(n)[t];
      c(e) || ((n = n.style)[t] !== (e = "" + e) && (n[t] = e));
    }
    function z(n, t) {
      C(n, "display", t);
    }
    function D(n, t) {
      return n.getAttribute(t);
    }
    function M(n, t) {
      return n && n.classList.contains(t);
    }
    function I(n) {
      return n.getBoundingClientRect();
    }
    function N(n) {
      l(n, function (n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      });
    }
    function T(n) {
      return E(new DOMParser().parseFromString(n, "text/html").body);
    }
    function O(n, t) {
      n.preventDefault(),
        t && (n.stopPropagation(), n.stopImmediatePropagation());
    }
    function R(n, t) {
      return n && n.querySelector(t);
    }
    function F(n, t) {
      return g(n.querySelectorAll(t));
    }
    function j(n, t) {
      v(n, t, !1);
    }
    function W(n) {
      return u(n) ? n : n ? n + "px" : "";
    }
    function B(t, e) {
      if ((void 0 === e && (e = ""), !t)) throw new Error("[" + n + "] " + e);
    }
    function X(n) {
      setTimeout(n);
    }
    function H() {}
    function G(n) {
      return requestAnimationFrame(n);
    }
    var Y = Math.min,
      q = Math.max,
      U = Math.floor,
      J = Math.ceil,
      K = Math.abs;
    function Q(n, t, e, i) {
      var o = Y(t, e);
      e = q(t, e);
      return i ? o < n && n < e : o <= n && n <= e;
    }
    function V(n, t, e) {
      var i = Y(t, e);
      e = q(t, e);
      return Y(q(i, n), e);
    }
    function Z(n) {
      return (0 < n) - (n < 0);
    }
    function $(n, t) {
      return (
        l(t, function (t) {
          n = n.replace("%s", "" + t);
        }),
        n
      );
    }
    function nn(n) {
      return n < 10 ? "0" + n : "" + n;
    }
    var tn = {};
    var en = "mounted",
      on = "move",
      rn = "moved",
      un = "shifted",
      sn = "click",
      cn = "active",
      an = "inactive",
      fn = "visible",
      ln = "hidden",
      dn = "slide:keydown",
      hn = "refresh",
      pn = "updated",
      gn = "resize",
      vn = "resized",
      mn = "repositioned",
      yn = "scrolled",
      bn = "destroy",
      wn = "navigation:mounted",
      xn = "lazyload:loaded";
    function En(n) {
      var t = n.event,
        e = {},
        i = [];
      function o(n, t, e) {
        r(n, t, function (n, t) {
          i = i.filter(function (i) {
            return (
              !!(i[0] !== n || i[1] !== t || (e && i[2] !== e)) ||
              (n.removeEventListener(t, i[2], i[3]), !1)
            );
          });
        });
      }
      function r(n, t, e) {
        l(n, function (n) {
          n && t.split(" ").forEach(e.bind(null, n));
        });
      }
      function u() {
        (i = i.filter(function (n) {
          return o(n[0], n[1]);
        })),
          t.offBy(e);
      }
      return (
        t.on(bn, u, e),
        {
          on: function (n, i, o) {
            t.on(n, i, e, o);
          },
          off: function (n) {
            t.off(n, e);
          },
          emit: t.emit,
          bind: function (n, t, e, o) {
            r(n, t, function (n, t) {
              i.push([n, t, e, o]), n.addEventListener(t, e, o);
            });
          },
          unbind: o,
          destroy: u,
        }
      );
    }
    function Sn(n, t, e, i) {
      var o,
        r,
        u = Date.now,
        s = 0,
        c = !0,
        a = 0;
      function f() {
        if (!c) {
          var r = u() - o;
          if (
            (n <= r ? ((s = 1), (o = u())) : (s = r / n),
            e && e(s),
            1 === s && (t(), i && ++a >= i))
          )
            return l();
          G(f);
        }
      }
      function l() {
        c = !0;
      }
      function d() {
        cancelAnimationFrame(r), (c = !(r = s = 0));
      }
      return {
        start: function (t) {
          t || d(), (o = u() - (t ? s * n : 0)), (c = !1), G(f);
        },
        rewind: function () {
          (o = u()), (s = 0), e && e(s);
        },
        pause: l,
        cancel: d,
        set: function (t) {
          n = t;
        },
        isPaused: function () {
          return c;
        },
      };
    }
    function Pn(n, t) {
      var e;
      return function () {
        var i = arguments,
          o = this;
        e ||
          (e = Sn(
            t || 0,
            function () {
              n.apply(o, i), (e = null);
            },
            null,
            1
          )).start();
      };
    }
    var kn = {
        marginRight: ["marginBottom", "marginLeft"],
        autoWidth: ["autoHeight"],
        fixedWidth: ["fixedHeight"],
        paddingLeft: ["paddingTop", "paddingRight"],
        paddingRight: ["paddingBottom", "paddingLeft"],
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: ["ArrowUp", "ArrowRight"],
        ArrowRight: ["ArrowDown", "ArrowLeft"],
      },
      _n = n,
      An = n + "__slider",
      Ln = n + "__track",
      Cn = n + "__list",
      zn = n + "__slide",
      Dn = zn + "--clone",
      Mn = zn + "__container",
      In = n + "__arrows",
      Nn = n + "__arrow",
      Tn = Nn + "--prev",
      On = Nn + "--next",
      Rn = n + "__pagination",
      Fn = n + "__progress",
      jn = Fn + "__bar",
      Wn = n + "__autoplay",
      Bn = n + "__play",
      Xn = n + "__pause",
      Hn = "is-active",
      Gn = "is-prev",
      Yn = "is-next",
      qn = "is-visible",
      Un = "is-loading",
      Jn = [Hn, qn, Gn, Yn, Un],
      Kn = "role",
      Qn = "aria-controls",
      Vn = "aria-current",
      Zn = "aria-label",
      $n = "aria-hidden",
      nt = "tabindex",
      tt = "aria-orientation",
      et = [Kn, Qn, Vn, Zn, $n, tt, nt, "disabled"],
      it = "slide",
      ot = "loop",
      rt = "fade";
    var ut = t + "-interval",
      st = { passive: !1, capture: !0 },
      ct = "touchmove mousemove",
      at = "touchend touchcancel mouseup",
      ft = ["Left", "Right", "Up", "Down"],
      lt = "keydown",
      dt = t + "-lazy",
      ht = dt + "-srcset",
      pt = "[" + dt + "], [" + ht + "]",
      gt = [" ", "Enter", "Spacebar"],
      vt = Object.freeze({
        __proto__: null,
        Options: function (n, e, i) {
          var o,
            r,
            u,
            s = Pn(a);
          function c(n) {
            n && removeEventListener("resize", s);
          }
          function a() {
            var t;
            (t =
              ((t = function (n) {
                return n[1].matches;
              }),
              g(r).filter(t)[0] || []))[0] !== u &&
              (function (t) {
                (t = i.breakpoints[t] || o).destroy
                  ? ((n.options = o), n.destroy("completely" === t.destroy))
                  : (n.state.is(5) && (c(!0), n.mount()), (n.options = t));
              })((u = t[0]));
          }
          return {
            setup: function () {
              try {
                k(i, JSON.parse(D(n.root, t)));
              } catch (u) {
                B(!1, u.message);
              }
              o = k({}, i);
              var e,
                u = i.breakpoints;
              u &&
                ((e = "min" === i.mediaQuery),
                (r = Object.keys(u)
                  .sort(function (n, t) {
                    return e ? +t - +n : +n - +t;
                  })
                  .map(function (n) {
                    return [
                      n,
                      matchMedia(
                        "(" + (e ? "min" : "max") + "-width:" + n + "px)"
                      ),
                    ];
                  })),
                a());
            },
            mount: function () {
              r && addEventListener("resize", s);
            },
            destroy: c,
          };
        },
        Direction: function (n, t, e) {
          return {
            resolve: function (n, t) {
              var i = e.direction;
              return kn[n]["rtl" !== i || t ? ("ttb" === i ? 0 : -1) : 1] || n;
            },
            orient: function (n) {
              return n * ("rtl" === e.direction ? 1 : -1);
            },
          };
        },
        Elements: function (t, o, r) {
          var u,
            s,
            c,
            a,
            f = En(t).on,
            l = t.root,
            d = {},
            p = [];
          function g() {
            var t;
            !(function () {
              (s = E(l, "." + An)),
                (c = R(l, "." + Ln)),
                (a = E(c, "." + Cn)),
                B(c && a, "A track/list element is missing."),
                h(p, x(a, "." + zn + ":not(." + Dn + ")"));
              var n = w("." + Wn),
                t = w("." + In);
              P(d, {
                root: l,
                slider: s,
                track: c,
                list: a,
                slides: p,
                arrows: t,
                autoplay: n,
                prev: R(t, "." + Tn),
                next: R(t, "." + On),
                bar: R(w("." + Fn), "." + jn),
                play: R(n, "." + Bn),
                pause: R(n, "." + Xn),
              });
            })(),
              (t =
                l.id ||
                (function (n) {
                  return "" + n + nn((tn[n] = (tn[n] || 0) + 1));
                })(n)),
              (l.id = t),
              (c.id = c.id || t + "-track"),
              (a.id = a.id || t + "-list"),
              m(l, (u = S()));
          }
          function v() {
            [l, c, a].forEach(function (n) {
              _(n, "style");
            }),
              i(p),
              j(l, u);
          }
          function y() {
            v(), g();
          }
          function b() {
            j(l, u), m(l, (u = S()));
          }
          function w(n) {
            return E(l, n) || E(s, n);
          }
          function S() {
            return [
              _n + "--" + r.type,
              _n + "--" + r.direction,
              r.drag && _n + "--draggable",
              r.isNavigation && _n + "--nav",
              Hn,
            ];
          }
          return P(d, {
            setup: g,
            mount: function () {
              f(hn, y, e - 2), f(pn, b);
            },
            destroy: v,
          });
        },
        Slides: function (n, t, e) {
          var o = En(n),
            r = o.on,
            s = o.emit,
            c = o.bind,
            h = (o = t.Elements).slides,
            p = o.list,
            g = [];
          function x() {
            h.forEach(function (n, t) {
              k(n, t, -1);
            });
          }
          function S() {
            z(function (n) {
              n.destroy();
            }),
              i(g);
          }
          function P() {
            S(), x();
          }
          function k(t, e, i) {
            (t = (function (n, t, e, i) {
              var o,
                r = En(n),
                u = r.on,
                s = r.emit,
                c = r.bind,
                a = r.destroy,
                f = n.Components,
                l = n.root,
                d = n.options,
                h = d.isNavigation,
                p = d.updateOnMove,
                g = f.Direction.resolve,
                m = D(i, "style"),
                y = -1 < e,
                b = E(i, "." + Mn),
                w = d.focusableNodes && F(i, d.focusableNodes);
              function x() {
                var o = y ? e : t,
                  r = $(d.i18n.slideX, o + 1);
                (o = n.splides
                  .map(function (n) {
                    return n.splide.root.id;
                  })
                  .join(" ")),
                  A(i, Zn, r),
                  A(i, Qn, o),
                  A(i, Kn, "menuitem"),
                  k(L());
              }
              function S() {
                o || P();
              }
              function P() {
                var e;
                o ||
                  ((e = n.index),
                  k(L()),
                  (function (n) {
                    var t = !n && (!L() || y);
                    A(i, $n, t || null),
                      A(i, nt, !t && d.slideFocus ? 0 : null),
                      w &&
                        w.forEach(function (n) {
                          A(n, nt, t ? -1 : null);
                        }),
                      n !== M(i, qn) && (v(i, qn, n), s(n ? fn : ln, z));
                  })(
                    (function () {
                      if (n.is(rt)) return L();
                      var t = I(f.Elements.track),
                        e = I(i),
                        o = g("left"),
                        r = g("right");
                      return U(t[o]) <= J(e[o]) && U(e[r]) <= J(t[r]);
                    })()
                  ),
                  v(i, Gn, t === e - 1),
                  v(i, Yn, t === e + 1));
              }
              function k(n) {
                n !== M(i, Hn) &&
                  (v(i, Hn, n), h && A(i, Vn, n || null), s(n ? cn : an, z));
              }
              function L() {
                var i = n.index;
                return i === t || (d.cloneStatus && i === e);
              }
              var z = {
                index: t,
                slideIndex: e,
                slide: i,
                container: b,
                isClone: y,
                mount: function () {
                  y || (i.id = l.id + "-slide" + nn(t + 1)),
                    c(i, "click keydown", function (n) {
                      s("click" === n.type ? sn : dn, z, n);
                    }),
                    u([hn, mn, un, rn, yn], P),
                    u(wn, x),
                    p && u(on, S);
                },
                destroy: function () {
                  (o = !0), a(), j(i, Jn), _(i, et), A(i, "style", m);
                },
                update: P,
                style: function (n, t, e) {
                  C((e && b) || i, n, t);
                },
                isWithin: function (e, i) {
                  return (
                    (e = K(e - t)),
                    (e =
                      y || (!d.rewind && !n.is(ot)) ? e : Y(e, n.length - e)) <=
                      i
                  );
                },
              };
              return z;
            })(n, e, i, t)).mount(),
              g.push(t);
          }
          function L(n) {
            return n
              ? O(function (n) {
                  return !n.isClone;
                })
              : g;
          }
          function z(n, t) {
            L(t).forEach(n);
          }
          function O(n) {
            return g.filter(
              "function" == typeof n
                ? n
                : function (t) {
                    return u(n) ? w(t.slide, n) : d(f(n), t.index);
                  }
            );
          }
          return {
            mount: function () {
              x(),
                r(hn, P),
                r([en, hn], function () {
                  g.sort(function (n, t) {
                    return n.index - t.index;
                  });
                });
            },
            destroy: S,
            update: function () {
              z(function (n) {
                n.update();
              });
            },
            register: k,
            get: L,
            getIn: function (n) {
              var i = t.Controller,
                o = i.toIndex(n),
                r = i.hasFocus() ? 1 : e.perPage;
              return O(function (n) {
                return Q(n.index, o, o + r - 1);
              });
            },
            getAt: function (n) {
              return O(n)[0];
            },
            add: function (n, t) {
              l(n, function (n) {
                var i, o, r;
                a((n = u(n) ? T(n) : n)) &&
                  ((i = h[t]) ? b(n, i) : y(p, n),
                  m(n, e.classes.slide),
                  (n = n),
                  (o = s.bind(null, gn)),
                  (n = F(n, "img")),
                  (r = n.length)
                    ? n.forEach(function (n) {
                        c(n, "load error", function () {
                          --r || o();
                        });
                      })
                    : o());
              }),
                s(hn);
            },
            remove: function (n) {
              N(
                O(n).map(function (n) {
                  return n.slide;
                })
              ),
                s(hn);
            },
            forEach: z,
            filter: O,
            style: function (n, t, e) {
              z(function (i) {
                i.style(n, t, e);
              });
            },
            getLength: function (n) {
              return (n ? h : g).length;
            },
            isEnough: function () {
              return g.length > e.perPage;
            },
          };
        },
        Layout: function (n, t, e) {
          var i,
            r,
            u = En(n),
            s = u.on,
            c = u.bind,
            a = u.emit,
            f = t.Slides,
            l = t.Direction.resolve,
            d = (t = t.Elements).root,
            h = t.track,
            p = t.list,
            g = f.getAt;
          function v() {
            (r = null),
              (i = "ttb" === e.direction),
              C(d, "maxWidth", W(e.width)),
              C(h, l("paddingLeft"), y(!1)),
              C(h, l("paddingRight"), y(!0)),
              m();
          }
          function m() {
            var n = I(d);
            (r && r.width === n.width && r.height === n.height) ||
              (C(
                h,
                "height",
                (function () {
                  var n = "";
                  return (
                    i &&
                      (B((n = b()), "height or heightRatio is missing."),
                      (n = "calc(" + n + " - " + y(!1) + " - " + y(!0) + ")")),
                    n
                  );
                })()
              ),
              f.style(l("marginRight"), W(e.gap)),
              f.style(
                "width",
                (e.autoWidth ? "" : W(e.fixedWidth) || (i ? "" : w())) || null
              ),
              f.style(
                "height",
                W(e.fixedHeight) ||
                  (i ? (e.autoHeight ? "" : w()) : b()) ||
                  null,
                !0
              ),
              (r = n),
              a(vn));
          }
          function y(n) {
            var t = e.padding;
            n = l(n ? "right" : "left");
            return (t && W(t[n] || (o(t) ? 0 : t))) || "0px";
          }
          function b() {
            return W(e.height || I(p).width * e.heightRatio);
          }
          function w() {
            var n = W(e.gap);
            return (
              "calc((100%" +
              (n && " + " + n) +
              ")/" +
              (e.perPage || 1) +
              (n && " - " + n) +
              ")"
            );
          }
          function x(n, t) {
            var e = g(n);
            return e
              ? ((n = I(e.slide)[l("right")]),
                (e = I(p)[l("left")]),
                K(n - e) + (t ? 0 : E()))
              : 0;
          }
          function E() {
            var n = g(0);
            return (n && parseFloat(C(n.slide, l("marginRight")))) || 0;
          }
          return {
            mount: function () {
              v(),
                c(window, "resize load", Pn(a.bind(this, gn))),
                s([pn, hn], v),
                s(gn, m);
            },
            listSize: function () {
              return I(p)[l("width")];
            },
            slideSize: function (n, t) {
              return (n = g(n || 0))
                ? I(n.slide)[l("width")] + (t ? 0 : E())
                : 0;
            },
            sliderSize: function () {
              return x(n.length - 1, !0) - x(-1, !0);
            },
            totalSize: x,
            getPadding: function (n) {
              return (
                parseFloat(C(h, l("padding" + (n ? "Right" : "Left")))) || 0
              );
            },
          };
        },
        Clones: function (n, t, e) {
          var o,
            r = En(n),
            s = r.on,
            c = r.emit,
            a = t.Elements,
            f = t.Slides,
            l = t.Direction.resolve,
            d = [];
          function p() {
            (o = x()) &&
              ((function (t) {
                var i = f.get().slice(),
                  o = i.length;
                if (o) {
                  for (; i.length < t; ) h(i, i);
                  h(i.slice(-t), i.slice(0, t)).forEach(function (r, u) {
                    var s = u < t,
                      c = (function (t, i) {
                        return (
                          m((t = t.cloneNode(!0)), e.classes.clone),
                          (t.id = n.root.id + "-clone" + nn(i + 1)),
                          t
                        );
                      })(r.slide, u);
                    s ? b(c, i[0].slide) : y(a.list, c),
                      h(d, c),
                      f.register(c, u - t + (s ? 0 : o), r.index);
                  });
                }
              })(o),
              c(gn));
          }
          function g() {
            N(d), i(d);
          }
          function v() {
            g(), p();
          }
          function w() {
            o < x() && c(hn);
          }
          function x() {
            var t,
              i,
              o = e.clones;
            return (
              n.is(ot)
                ? o ||
                  ((t = a.list),
                  u((i = e[l("fixedWidth")])) &&
                    ((i = I(
                      (t = L(
                        "div",
                        { style: "width: " + i + "; position: absolute;" },
                        t
                      ))
                    ).width),
                    N(t)),
                  (o =
                    (((i = i) && J(I(a.track)[l("width")] / i)) ||
                      (e[l("autoWidth")] && n.length) ||
                      e.perPage) * (e.drag ? (e.flickMaxPages || 1) + 1 : 2)))
                : (o = 0),
              o
            );
          }
          return {
            mount: function () {
              p(), s(hn, v), s([pn, gn], w);
            },
            destroy: g,
          };
        },
        Move: function (n, t, e) {
          var i,
            o = En(n),
            r = o.on,
            u = o.emit,
            c = (o = t.Layout).slideSize,
            a = o.getPadding,
            f = o.totalSize,
            l = o.listSize,
            d = o.sliderSize,
            h = (o = t.Direction).resolve,
            p = o.orient,
            g = (o = t.Elements).list,
            v = o.track;
          function m() {
            P() || (t.Scroll.cancel(), y(n.index), u(mn));
          }
          function y(n) {
            b(x(n, !0));
          }
          function b(t, e) {
            n.is(rt) ||
              ((e = e
                ? t
                : (function (t) {
                    var e, i;
                    return (
                      n.is(ot) &&
                        ((i = p(t - E())),
                        (e = k(!1, t) && i < 0),
                        (i = k(!0, t) && 0 < i),
                        (e || i) && (t = w(t, i))),
                      t
                    );
                  })(t)),
              (g.style.transform = "translate" + h("X") + "(" + e + "px)"),
              t !== e && u(un));
          }
          function w(n, t) {
            var e = n - S(t),
              i = d();
            return n - p(i * (J(K(e) / i) || 1)) * (t ? 1 : -1);
          }
          function x(t, i) {
            var o = p(
              f(t - 1) -
                ((o = t),
                "center" === (t = e.focus)
                  ? (l() - c(o, !0)) / 2
                  : +t * c(o) || 0)
            );
            return i
              ? (function (t) {
                  return (
                    e.trimSpace && n.is(it) && (t = V(t, 0, p(d() - l()))), t
                  );
                })(o)
              : o;
          }
          function E() {
            var n = h("left");
            return I(g)[n] - I(v)[n] + p(a(!1));
          }
          function S(n) {
            return x(n ? t.Controller.getEnd() : 0, !!e.trimSpace);
          }
          function P() {
            return n.state.is(4) && e.waitForTransition;
          }
          function k(n, t) {
            t = s(t) ? E() : t;
            var e = !0 !== n && p(t) < p(S(!1));
            t = !1 !== n && p(t) > p(S(!0));
            return e || t;
          }
          return {
            mount: function () {
              (i = t.Transition), r([en, vn, pn, hn], m);
            },
            destroy: function () {
              _(g, "style");
            },
            move: function (o, r, s, c) {
              var a, f;
              P() ||
                ((a = n.state.set),
                (f = E()),
                o !== r && (i.cancel(), b(w(f, r < o), !0)),
                a(4),
                u(on, r, s, o),
                i.start(r, function () {
                  a(3),
                    u(rn, r, s, o),
                    "move" === e.trimSpace && o !== s && f === E()
                      ? t.Controller.go(s < o ? ">" : "<", !1, c)
                      : c && c();
                }));
            },
            jump: y,
            translate: b,
            shift: w,
            cancel: function () {
              b(E()), i.cancel();
            },
            toIndex: function (n) {
              for (
                var e = t.Slides.get(), i = 0, o = 1 / 0, r = 0;
                r < e.length;
                r++
              ) {
                var u = e[r].index,
                  s = K(x(u, !0) - n);
                if (!(s <= o)) break;
                (o = s), (i = u);
              }
              return i;
            },
            toPosition: x,
            getPosition: E,
            getLimit: S,
            isBusy: P,
            exceededLimit: k,
          };
        },
        Controller: function (n, t, i) {
          var o,
            r,
            c,
            a = En(n).on,
            f = t.Move,
            l = f.getPosition,
            d = f.getLimit,
            h = t.Slides,
            p = h.isEnough,
            g = h.getLength,
            v = n.is(ot),
            m = n.is(it),
            y = i.start || 0,
            b = y;
          function w() {
            (o = g(!0)), (r = i.perMove), (c = i.perPage), (y = V(y, 0, o - 1));
          }
          function x(n, e, i, o, r) {
            var u = e ? n : z(n);
            t.Scroll.scroll(e || i ? f.toPosition(u, !0) : n, o, function () {
              D(f.toIndex(f.getPosition())), r && r();
            });
          }
          function E(n) {
            return P(!1, n);
          }
          function S(n) {
            return P(!0, n);
          }
          function P(n, t) {
            var e,
              i,
              o = r || (M() ? 1 : c),
              u = k(y + o * (n ? -1 : 1), y);
            return -1 !== u ||
              !m ||
              ((e = l()), (i = d(!n)), (o = 1), K(e - i) < o)
              ? t
                ? u
                : A(u)
              : n
              ? 0
              : _();
          }
          function k(n, t, e) {
            var u;
            return (
              p()
                ? ((u = _()),
                  n < 0 || u < n
                    ? (n =
                        Q(0, n, t, !0) || Q(u, t, n, !0)
                          ? L(C(n))
                          : v
                          ? r || M()
                            ? n
                            : n < 0
                            ? -(o % c || c)
                            : o
                          : i.rewind
                          ? n < 0
                            ? u
                            : 0
                          : -1)
                    : e || n === t || (n = r ? n : L(C(t) + (n < t ? -1 : 1))))
                : (n = -1),
              n
            );
          }
          function _() {
            var n = o - c;
            return (M() || (v && r)) && (n = o - 1), q(n, 0);
          }
          function A(n) {
            return v ? (p() ? (n % o) + (n < 0 ? o : 0) : -1) : n;
          }
          function L(n) {
            return V(M() ? n : c * n, 0, _());
          }
          function C(n) {
            return (
              M() || ((n = Q(n, o - c, o - 1) ? o - 1 : n), (n = U(n / c))), n
            );
          }
          function z(n) {
            return (n = f.toIndex(n)), m ? V(n, 0, _()) : n;
          }
          function D(n) {
            n !== y && ((b = y), (y = n));
          }
          function M() {
            return !s(i.focus) || i.isNavigation;
          }
          return {
            mount: function () {
              w(), a([pn, hn], w, e - 1);
            },
            go: function (n, t, e) {
              var o = (function (n) {
                var t,
                  e,
                  i = y;
                return (
                  u(n)
                    ? ((t = (e = n.match(/([+\-<>])(\d+)?/) || [])[1]),
                      (e = e[2]),
                      "+" === t || "-" === t
                        ? (i = k(y + +("" + t + (+e || 1)), y, !0))
                        : ">" === t
                        ? (i = e ? L(+e) : E(!0))
                        : "<" === t && (i = S(!0)))
                    : (i = v ? n : V(n, 0, _())),
                  i
                );
              })(n);
              i.useScroll
                ? x(o, !0, !0, i.speed, e)
                : -1 < (n = A(o)) &&
                  !f.isBusy() &&
                  (t || n !== y) &&
                  (D(n), f.move(o, n, b, e));
            },
            scroll: x,
            getNext: E,
            getPrev: S,
            getAdjacent: P,
            getEnd: _,
            setIndex: D,
            getIndex: function (n) {
              return n ? b : y;
            },
            toIndex: L,
            toPage: C,
            toDest: z,
            hasFocus: M,
          };
        },
        Arrows: function (n, t, e) {
          var i,
            o = En(n),
            r = o.on,
            u = o.bind,
            s = o.emit,
            c = e.classes,
            a = e.i18n,
            f = t.Elements,
            l = t.Controller,
            d = f.arrows,
            h = f.prev,
            p = f.next,
            g = {};
          function v() {
            var t, o;
            e.arrows &&
              ((h && p) ||
                ((d = L("div", c.arrows)),
                (h = m(!0)),
                (p = m(!1)),
                (i = !0),
                y(d, [h, p]),
                b(d, E(("slider" === e.arrows && f.slider) || n.root)))),
              h &&
                p &&
                (g.prev
                  ? z(d, !1 === e.arrows ? "none" : "")
                  : ((t = f.track.id),
                    A(h, Qn, t),
                    A(p, Qn, t),
                    (g.prev = h),
                    (g.next = p),
                    (o = l.go),
                    r([en, rn, pn, hn, yn], w),
                    u(p, "click", function () {
                      o(">", !0);
                    }),
                    u(h, "click", function () {
                      o("<", !0);
                    }),
                    s("arrows:mounted", h, p)));
          }
          function m(n) {
            return T(
              '<button class="' +
                c.arrow +
                " " +
                (n ? c.prev : c.next) +
                '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="' +
                (e.arrowPath ||
                  "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                '" />'
            );
          }
          function w() {
            var t = n.index,
              e = l.getPrev(),
              i = l.getNext(),
              o = -1 < e && t < e ? a.last : a.prev;
            t = -1 < i && i < t ? a.first : a.next;
            (h.disabled = e < 0),
              (p.disabled = i < 0),
              A(h, Zn, o),
              A(p, Zn, t),
              s("arrows:updated", h, p, e, i);
          }
          return {
            arrows: g,
            mount: function () {
              v(), r(pn, v);
            },
            destroy: function () {
              i ? N(d) : (_(h, et), _(p, et));
            },
          };
        },
        Autoplay: function (n, t, e) {
          var i,
            o,
            r,
            u = En(n),
            s = u.on,
            c = u.bind,
            a = u.emit,
            f = Sn(e.interval, n.go.bind(n, ">"), function (n) {
              var t = d.bar;
              t && C(t, "width", 100 * n + "%"), a("autoplay:playing", n);
            }),
            l = f.isPaused,
            d = t.Elements;
          function h(n) {
            var t = n ? "pause" : "play",
              i = d[t];
            i &&
              (A(i, Qn, d.track.id),
              A(i, Zn, e.i18n[t]),
              c(i, "click", n ? g : p));
          }
          function p() {
            l() &&
              t.Slides.isEnough() &&
              (f.start(!e.resetProgress), (o = i = r = !1), a("autoplay:play"));
          }
          function g(n) {
            void 0 === n && (n = !0),
              l() || (f.pause(), a("autoplay:pause")),
              (r = n);
          }
          function v() {
            r || (i || o ? g(!1) : p());
          }
          function m() {
            var i = t.Slides.getAt(n.index);
            f.set((i && +D(i.slide, ut)) || e.interval);
          }
          return {
            mount: function () {
              var n = e.autoplay;
              n &&
                (h(!0),
                h(!1),
                (function () {
                  var n = d.root;
                  e.pauseOnHover &&
                    c(n, "mouseenter mouseleave", function (n) {
                      (i = "mouseenter" === n.type), v();
                    }),
                    e.pauseOnFocus &&
                      c(n, "focusin focusout", function (n) {
                        (o = "focusin" === n.type), v();
                      }),
                    s([on, "scroll", hn], f.rewind),
                    s(on, m);
                })(),
                "pause" !== n && p());
            },
            destroy: f.cancel,
            play: p,
            pause: g,
            isPaused: l,
          };
        },
        Cover: function (n, t, e) {
          var i = En(n).on;
          function o(n) {
            t.Slides.forEach(function (t) {
              var e = E(t.container || t.slide, "img");
              e && e.src && r(n, e, t);
            });
          }
          function r(n, t, e) {
            e.style(
              "background",
              n ? 'center/cover no-repeat url("' + t.src + '")' : "",
              !0
            ),
              z(t, n ? "none" : "");
          }
          return {
            mount: function () {
              e.cover &&
                (i(xn, function (n, t) {
                  r(!0, n, t);
                }),
                i([en, pn, hn], o.bind(null, !0)));
            },
            destroy: function () {
              o(!1);
            },
          };
        },
        Scroll: function (n, t, e) {
          var i,
            o,
            r = En(n),
            u = r.on,
            s = r.emit,
            c = t.Move,
            a = c.getPosition,
            f = c.getLimit,
            l = c.exceededLimit;
          function d() {
            var t = a(),
              e = c.toIndex(t);
            Q(e, 0, n.length - 1) || c.translate(c.shift(t, 0 < e), !0),
              o && o(),
              s(yn);
          }
          function h() {
            i && i.cancel();
          }
          function p() {
            i && !i.isPaused() && (h(), d());
          }
          return {
            mount: function () {
              u(on, h), u([pn, hn], p);
            },
            destroy: h,
            scroll: function t(r, u, p, g) {
              var v,
                m = a(),
                y = 1;
              (u = u || ((v = K(r - m)), q(v / 1.5, 800))),
                (o = p),
                h(),
                (i = Sn(
                  u,
                  d,
                  function (i) {
                    var o = a(),
                      u =
                        (m +
                          (r - m) *
                            ((u = i),
                            (i = e.easingFunc)
                              ? i(u)
                              : 1 - Math.pow(1 - u, 4)) -
                          a()) *
                        y;
                    c.translate(o + u),
                      n.is(it) &&
                        !g &&
                        l() &&
                        ((y *= 0.6),
                        K(u) < 10 && ((u = l(!1)), t(f(!u), 600, null, !0)));
                  },
                  1
                )),
                s("scroll"),
                i.start();
            },
            cancel: p,
          };
        },
        Drag: function (n, t, e) {
          var i,
            r,
            u,
            s,
            c,
            a,
            f,
            l,
            d,
            h = En(n),
            p = h.on,
            g = h.emit,
            v = h.bind,
            m = h.unbind,
            y = t.Move,
            b = t.Scroll,
            x = t.Controller,
            E = t.Elements.track,
            S = (h = t.Direction).resolve,
            P = h.orient,
            k = y.getPosition,
            _ = y.exceededLimit,
            A = !1;
          function L() {
            var n = e.drag;
            j(!n), (c = "free" === n);
          }
          function C(n) {
            var t, i;
            l ||
              ((i = e.noDrag),
              (t = F(n)),
              (i = !i || !w(n.target, i)),
              (f = !1),
              !i ||
                (!t && n.button) ||
                (y.isBusy()
                  ? O(n, !0)
                  : ((d = t ? E : window),
                    (s = u = null),
                    v(d, ct, z, st),
                    v(d, at, D, st),
                    y.cancel(),
                    b.cancel(),
                    M(n))));
          }
          function z(t) {
            var u, c, l;
            s || g("drag"),
              (s = t).cancelable &&
                ((u = T(t) - T(r)),
                a
                  ? (y.translate(i + u / (A && n.is(it) ? 5 : 1)),
                    (c = 200 < R(t) - R(r)),
                    (l = A !== (A = _())),
                    (c || l) && M(t),
                    g("dragging"),
                    (f = !0),
                    O(t))
                  : ((l = o((l = e.dragMinThreshold))
                      ? l
                      : { mouse: 0, touch: +l || 10 }),
                    (a = K(u) > (F(t) ? l.touch : l.mouse)),
                    N() && O(t)));
          }
          function D(i) {
            m(d, ct, z), m(d, at, D);
            var o,
              f,
              l = n.index;
            s
              ? ((a || (i.cancelable && N())) &&
                  ((f = o =
                    (function (t) {
                      if (n.is(ot) || !A) {
                        var e = (r === s && u) || r,
                          i = T(s) - T(e);
                        (e = R(t) - R(e)), (t = R(t) - R(s) < 200);
                        if (e && t) return i / e;
                      }
                      return 0;
                    })(i)),
                  (f =
                    k() +
                    Z(f) *
                      Y(
                        K(f) * (e.flickPower || 600),
                        c ? 1 / 0 : t.Layout.listSize() * (e.flickMaxPages || 1)
                      )),
                  c
                    ? x.scroll(f)
                    : n.is(rt)
                    ? x.go(l + P(Z(o)))
                    : x.go(x.toDest(f), !0),
                  O(i)),
                g("dragged"))
              : c || k() === y.toPosition(l) || x.go(l, !0),
              (a = !1);
          }
          function M(n) {
            (u = r), (r = n), (i = k());
          }
          function I(n) {
            !l && f && O(n, !0);
          }
          function N() {
            var n = K(T(s) - T(r));
            return K(T(s, !0) - T(r, !0)) < n;
          }
          function T(n, t) {
            return (F(n) ? n.touches[0] : n)["page" + S(t ? "Y" : "X")];
          }
          function R(n) {
            return n.timeStamp;
          }
          function F(n) {
            return "undefined" != typeof TouchEvent && n instanceof TouchEvent;
          }
          function j(n) {
            l = n;
          }
          return {
            mount: function () {
              v(E, ct, H, st),
                v(E, at, H, st),
                v(E, "touchstart mousedown", C, st),
                v(E, "click", I, { capture: !0 }),
                v(E, "dragstart", O),
                p([en, pn], L);
            },
            disable: j,
            isDragging: function () {
              return a;
            },
          };
        },
        Keyboard: function (n, t, e) {
          var i,
            o,
            r = En(n),
            u = r.on,
            s = r.bind,
            c = r.unbind,
            f = n.root,
            l = t.Direction.resolve;
          function h() {
            var n = e.keyboard;
            n &&
              ("focused" === n ? A((i = f), nt, 0) : (i = window), s(i, lt, m));
          }
          function p() {
            c(i, lt), a(i) && _(i, nt);
          }
          function g() {
            var n = o;
            (o = !0),
              X(function () {
                o = n;
              });
          }
          function v() {
            p(), h();
          }
          function m(t) {
            o ||
              ((t = t.key),
              (t = d(ft, t) ? "Arrow" + t : t) === l("ArrowLeft")
                ? n.go("<")
                : t === l("ArrowRight") && n.go(">"));
          }
          return {
            mount: function () {
              h(), u(pn, v), u(on, g);
            },
            destroy: p,
            disable: function (n) {
              o = n;
            },
          };
        },
        LazyLoad: function (n, t, e) {
          var i = En(n),
            o = i.on,
            r = i.off,
            u = i.bind,
            s = i.emit,
            c = "sequential" === e.lazyLoad,
            a = [],
            f = 0;
          function l() {
            h(), d();
          }
          function d() {
            t.Slides.forEach(function (n) {
              F(n.slide, pt).forEach(function (t) {
                var i,
                  o,
                  r = D(t, dt),
                  u = D(t, ht);
                (r === t.src && u === t.srcset) ||
                  ((i = e.classes.spinner),
                  A(
                    (o = E((o = t.parentElement), "." + i) || L("span", i, o)),
                    Kn,
                    "presentation"
                  ),
                  a.push({ o: t, e: n, src: r, srcset: u, c: o }),
                  t.src || z(t, "none"));
              });
            }),
              c && v();
          }
          function h() {
            (f = 0), (a = []);
          }
          function p() {
            (a = a.filter(function (t) {
              var i = e.perPage * ((e.preloadPages || 1) + 1) - 1;
              return !t.e.isWithin(n.index, i) || g(t);
            })).length || r(rn);
          }
          function g(n) {
            var t = n.o;
            m(n.e.slide, Un),
              u(t, "load error", function (t) {
                !(function (n, t) {
                  var e = n.e;
                  j(e.slide, Un),
                    t || (N(n.c), z(n.o, ""), s(xn, n.o, e), s(gn)),
                    c && v();
                })(n, "error" === t.type);
              }),
              ["src", "srcset"].forEach(function (e) {
                n[e] && (A(t, e, n[e]), _(t, "src" === e ? dt : ht));
              });
          }
          function v() {
            f < a.length && g(a[f++]);
          }
          return {
            mount: function () {
              e.lazyLoad && (d(), o(hn, l), c || o([en, hn, rn, yn], p));
            },
            destroy: h,
          };
        },
        Pagination: function (n, t, e) {
          var o,
            r = En(n),
            u = r.on,
            s = r.emit,
            c = r.bind,
            a = r.unbind,
            f = t.Slides,
            l = t.Elements,
            d = t.Controller,
            h = d.hasFocus,
            p = d.getIndex,
            g = [];
          function v() {
            y(),
              e.pagination &&
                f.isEnough() &&
                ((function () {
                  var t = n.length,
                    i = e.classes,
                    r = e.i18n,
                    u = e.perPage,
                    s = ("slider" === e.pagination && l.slider) || l.root,
                    a = h() ? t : J(t / u);
                  o = L("ul", i.pagination, s);
                  for (var d = 0; d < a; d++) {
                    var p = L("li", null, o),
                      v = L("button", { class: i.page, type: "button" }, p),
                      m = f.getIn(d).map(function (n) {
                        return n.slide.id;
                      }),
                      y = !h() && 1 < u ? r.pageX : r.slideX;
                    c(v, "click", b.bind(null, d)),
                      A(v, Qn, m.join(" ")),
                      A(v, Zn, $(y, d + 1)),
                      g.push({ li: p, button: v, page: d });
                  }
                })(),
                s("pagination:mounted", { list: o, items: g }, w(n.index)),
                x());
          }
          function y() {
            o &&
              (N(o),
              g.forEach(function (n) {
                a(n.button, "click");
              }),
              i(g),
              (o = null));
          }
          function b(n) {
            d.go(">" + n, !0, function () {
              var t = f.getAt(d.toIndex(n));
              t &&
                (((t = t.slide).setActive && t.setActive()) ||
                  t.focus({ preventScroll: !0 }));
            });
          }
          function w(n) {
            return g[d.toPage(n)];
          }
          function x() {
            var n = w(p(!0)),
              t = w(p());
            n && (j(n.button, Hn), _(n.button, Vn)),
              t && (m(t.button, Hn), A(t.button, Vn, !0)),
              s("pagination:updated", { list: o, items: g }, n, t);
          }
          return {
            items: g,
            mount: function () {
              v(), u([pn, hn], v), u([on, yn], x);
            },
            destroy: y,
            getAt: w,
            update: x,
          };
        },
        Sync: function (n, t, e) {
          var o = t.Elements.list,
            r = [];
          function u() {
            var t, i;
            n.splides.forEach(function (t) {
              var e;
              t.isParent ||
                ((e = t.splide),
                [n, e].forEach(function (t) {
                  var i = En(t),
                    o = t === n ? e : n;
                  i.on(on, function (n, t, e) {
                    o.go(o.is(ot) ? e : n);
                  }),
                    r.push(i);
                }));
            }),
              e.isNavigation &&
                ((i = (t = En(n)).on)(sn, a),
                i(dn, f),
                i([en, pn], c),
                A(o, Kn, "menu"),
                r.push(t),
                t.emit(wn, n.splides));
          }
          function s() {
            _(o, et),
              r.forEach(function (n) {
                n.destroy();
              }),
              i(r);
          }
          function c() {
            A(o, tt, "ttb" !== e.direction ? "horizontal" : null);
          }
          function a(t) {
            n.go(t.index);
          }
          function f(n, t) {
            d(gt, t.key) && (a(n), O(t));
          }
          return {
            mount: u,
            destroy: s,
            remount: function () {
              s(), u();
            },
          };
        },
        Wheel: function (n, t, e) {
          var i = En(n).bind;
          function o(i) {
            var o;
            !i.cancelable ||
              ((o = i.deltaY) &&
                (n.go((o = o < 0) ? "<" : ">"),
                (o = o),
                (e.releaseWheel &&
                  !n.state.is(4) &&
                  -1 === t.Controller.getAdjacent(o)) ||
                  O(i)));
          }
          return {
            mount: function () {
              e.wheel && i(t.Elements.track, "wheel", o, st);
            },
          };
        },
      }),
      mt = {
        type: "slide",
        speed: 400,
        waitForTransition: !0,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        keyboard: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        slideFocus: !0,
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        classes: {
          slide: zn,
          clone: Dn,
          arrows: In,
          arrow: Nn,
          prev: Tn,
          next: On,
          pagination: Rn,
          page: Rn + "__page",
          spinner: n + "__spinner",
        },
        i18n: {
          prev: "Previous slide",
          next: "Next slide",
          first: "Go to first slide",
          last: "Go to last slide",
          slideX: "Go to slide %s",
          pageX: "Go to page %s",
          play: "Start autoplay",
          pause: "Pause autoplay",
        },
      };
    function yt(n, t, e) {
      var i = En(n).on;
      return {
        mount: function () {
          i([en, hn], function () {
            X(function () {
              t.Slides.style(
                "transition",
                "opacity " + e.speed + "ms " + e.easing
              );
            });
          });
        },
        start: function (n, e) {
          var i = t.Elements.track;
          C(i, "height", W(I(i).height)),
            X(function () {
              e(), C(i, "height", "");
            });
        },
        cancel: H,
      };
    }
    function bt(n, t, e) {
      var i,
        o = En(n).bind,
        r = t.Move,
        u = t.Controller,
        s = t.Elements.list;
      function c() {
        a("");
      }
      function a(n) {
        C(s, "transition", n);
      }
      return {
        mount: function () {
          o(s, "transitionend", function (n) {
            n.target === s && i && (c(), i());
          });
        },
        start: function (t, o) {
          var s = r.toPosition(t, !0),
            c = r.getPosition(),
            f = (function (t) {
              var i = e.rewindSpeed;
              if (n.is(it) && i) {
                var o = u.getIndex(!0),
                  r = u.getEnd();
                if ((0 === o && r <= t) || (r <= o && 0 === t)) return i;
              }
              return e.speed;
            })(t);
          1 <= K(s - c) && 1 <= f
            ? (a("transform " + f + "ms " + e.easing),
              r.translate(s, !0),
              (i = o))
            : (r.jump(t), o());
        },
        cancel: c,
      };
    }
    return (
      ((Rn = (function () {
        function n(t, i) {
          (this.event = (function () {
            var n = {};
            function t(t, e) {
              i(t, function (t, i) {
                var o = n[t];
                n[t] =
                  o &&
                  o.filter(function (n) {
                    return n.n ? n.n !== e : e || n.t !== i;
                  });
              });
            }
            function i(n, t) {
              f(n)
                .join(" ")
                .split(" ")
                .forEach(function (n) {
                  (n = n.split(".")), t(n[0], n[1]);
                });
            }
            return {
              on: function (t, o, r, u) {
                void 0 === u && (u = e),
                  i(t, function (t, e) {
                    (n[t] = n[t] || []),
                      h(n[t], { i: t, r: o, t: e, u: u, n: r }).sort(function (
                        n,
                        t
                      ) {
                        return n.u - t.u;
                      });
                  });
              },
              off: t,
              offBy: function (e) {
                S(n, function (n, i) {
                  t(i, e);
                });
              },
              emit: function (t) {
                var e = arguments;
                (n[t] || []).forEach(function (n) {
                  n.r.apply(n, g(e, 1));
                });
              },
              destroy: function () {
                n = {};
              },
            };
          })()),
            (this.Components = {}),
            (this.state = (function (n) {
              var t = n;
              return {
                set: function (n) {
                  t = n;
                },
                is: function (n) {
                  return d(f(n), t);
                },
              };
            })(1)),
            (this.splides = []),
            (this.f = {}),
            (this.a = {}),
            B((t = u(t) ? R(document, t) : t), t + " is invalid."),
            (this.root = t),
            k(mt, n.defaults),
            k(k(this.f, mt), i || {});
        }
        var t,
          o = n.prototype;
        return (
          (o.mount = function (n, t) {
            var e = this,
              i = this.state,
              o = this.Components;
            return (
              B(i.is([1, 5]), "Already mounted!"),
              i.set(1),
              (this.s = o),
              (this.l = t || this.l || (this.is(rt) ? yt : bt)),
              (this.a = n || this.a),
              S(P({}, vt, this.a, { Transition: this.l }), function (n, t) {
                (n = n(e, o, e.f)), (o[t] = n).setup && n.setup();
              }),
              S(o, function (n) {
                n.mount && n.mount();
              }),
              this.emit(en),
              m(this.root, "is-initialized"),
              i.set(3),
              this.emit("ready"),
              this
            );
          }),
          (o.sync = function (n) {
            return (
              this.splides.push({ splide: n }),
              n.splides.push({ splide: this, isParent: !0 }),
              this.state.is(3) &&
                (this.s.Sync.remount(), n.Components.Sync.remount()),
              this
            );
          }),
          (o.go = function (n) {
            return this.s.Controller.go(n), this;
          }),
          (o.on = function (n, t) {
            return this.event.on(n, t, null, 20), this;
          }),
          (o.off = function (n) {
            return this.event.off(n), this;
          }),
          (o.emit = function (n) {
            var t;
            return (
              (t = this.event).emit.apply(t, [n].concat(g(arguments, 1))), this
            );
          }),
          (o.add = function (n, t) {
            return this.s.Slides.add(n, t), this;
          }),
          (o.remove = function (n) {
            return this.s.Slides.remove(n), this;
          }),
          (o.is = function (n) {
            return this.f.type === n;
          }),
          (o.refresh = function () {
            return this.emit(hn), this;
          }),
          (o.destroy = function (n) {
            void 0 === n && (n = !0);
            var t = this.event,
              e = this.state;
            return (
              e.is(1)
                ? t.on("ready", this.destroy.bind(this, n), this)
                : (S(
                    this.s,
                    function (t) {
                      t.destroy && t.destroy(n);
                    },
                    !0
                  ),
                  t.emit(bn),
                  t.destroy(),
                  n && i(this.splides),
                  e.set(5)),
              this
            );
          }),
          (t = n),
          (o = [
            {
              key: "options",
              get: function () {
                return this.f;
              },
              set: function (n) {
                var t = this.f;
                k(t, n), this.state.is(1) || this.emit(pn, t);
              },
            },
            {
              key: "length",
              get: function () {
                return this.s.Slides.getLength(!0);
              },
            },
            {
              key: "index",
              get: function () {
                return this.s.Controller.getIndex();
              },
            },
          ]) && At(t.prototype, o),
          n
        );
      })()).defaults = {}),
      (Rn.STATES = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: 4,
        DESTROYED: 5,
      }),
      Rn
    );
  }),
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self).Splide =
        t());
