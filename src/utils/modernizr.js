/*! modernizr 3.11.8 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!(function (n, e, A, o) {
  function t(n, e) {
    return typeof n === e;
  }
  function a(n) {
    var e = u.className,
      A = Modernizr._config.classPrefix || '';
    if ((c && (e = e.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp('(^|\\s)' + A + 'no-js(\\s|$)');
      e = e.replace(o, '$1' + A + 'js$2');
    }
    Modernizr._config.enableClasses &&
      (n.length > 0 && (e += ' ' + A + n.join(' ' + A)),
      c ? (u.className.baseVal = e) : (u.className = e));
  }
  function i(n, e) {
    if ('object' == typeof n) for (var A in n) l(n, A) && i(A, n[A]);
    else {
      n = n.toLowerCase();
      var o = n.split('.'),
        t = Modernizr[o[0]];
      if ((2 === o.length && (t = t[o[1]]), void 0 !== t)) return Modernizr;
      (e = 'function' == typeof e ? e() : e),
        1 === o.length
          ? (Modernizr[o[0]] = e)
          : (!Modernizr[o[0]] ||
              Modernizr[o[0]] instanceof Boolean ||
              (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
            (Modernizr[o[0]][o[1]] = e)),
        a([(e && !1 !== e ? '' : 'no-') + o.join('-')]),
        Modernizr._trigger(n, e);
    }
    return Modernizr;
  }
  var s = [],
    r = {
      _version: '3.11.8',
      _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function (n, e) {
        var A = this;
        setTimeout(function () {
          e(A[n]);
        }, 0);
      },
      addTest: function (n, e, A) {
        s.push({ name: n, fn: e, options: A });
      },
      addAsyncTest: function (n) {
        s.push({ name: null, fn: n });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = r), (Modernizr = new Modernizr());
  var l,
    f = [],
    u = A.documentElement,
    c = 'svg' === u.nodeName.toLowerCase();
  !(function () {
    var n = {}.hasOwnProperty;
    l =
      t(n, 'undefined') || t(n.call, 'undefined')
        ? function (n, e) {
            return e in n && t(n.constructor.prototype[e], 'undefined');
          }
        : function (e, A) {
            return n.call(e, A);
          };
  })(),
    (r._l = {}),
    (r.on = function (n, e) {
      this._l[n] || (this._l[n] = []),
        this._l[n].push(e),
        Modernizr.hasOwnProperty(n) &&
          setTimeout(function () {
            Modernizr._trigger(n, Modernizr[n]);
          }, 0);
    }),
    (r._trigger = function (n, e) {
      if (this._l[n]) {
        var A = this._l[n];
        setTimeout(function () {
          var n;
          for (n = 0; n < A.length; n++) (0, A[n])(e);
        }, 0),
          delete this._l[n];
      }
    }),
    Modernizr._q.push(function () {
      r.addTest = i;
    }),
    Modernizr.addAsyncTest(function () {
      function n(n, e, A) {
        function o(e) {
          var o = !(!e || 'load' !== e.type) && 1 === t.width;
          i(n, 'webp' === n && o ? new Boolean(o) : o), A && A(e);
        }
        var t = new Image();
        (t.onerror = o), (t.onload = o), (t.src = e);
      }
      var e = [
          {
            uri: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
            name: 'webp',
          },
          {
            uri: 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
            name: 'webp.alpha',
          },
          {
            uri: 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
            name: 'webp.animation',
          },
          {
            uri: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
            name: 'webp.lossless',
          },
        ],
        A = e.shift();
      n(A.name, A.uri, function (A) {
        if (A && 'load' === A.type) for (var o = 0; o < e.length; o++) n(e[o].name, e[o].uri);
      });
    }),
    (function () {
      var n, e, A, o, a, i, r;
      for (var l in s)
        if (s.hasOwnProperty(l)) {
          if (
            ((n = []),
            (e = s[l]),
            e.name &&
              (n.push(e.name.toLowerCase()),
              e.options && e.options.aliases && e.options.aliases.length))
          )
            for (A = 0; A < e.options.aliases.length; A++)
              n.push(e.options.aliases[A].toLowerCase());
          for (o = t(e.fn, 'function') ? e.fn() : e.fn, a = 0; a < n.length; a++)
            (i = n[a]),
              (r = i.split('.')),
              1 === r.length
                ? (Modernizr[r[0]] = o)
                : ((Modernizr[r[0]] && (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean)) ||
                    (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                  (Modernizr[r[0]][r[1]] = o)),
              f.push((o ? '' : 'no-') + r.join('-'));
        }
    })(),
    a(f),
    delete r.addTest,
    delete r.addAsyncTest;
  for (var p = 0; p < Modernizr._q.length; p++) Modernizr._q[p]();
  n.Modernizr = Modernizr;
})(window, window, document);
