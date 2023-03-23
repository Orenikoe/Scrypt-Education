var Gw = Object.defineProperty,
  Jw = Object.defineProperties;
var Zw = Object.getOwnPropertyDescriptors;
var xh = Object.getOwnPropertySymbols;
var Xw = Object.prototype.hasOwnProperty,
  eS = Object.prototype.propertyIsEnumerable;
var Eh = (e, t, n) =>
    t in e
      ? Gw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ut = (e, t) => {
    for (var n in t || (t = {})) Xw.call(t, n) && Eh(e, n, t[n]);
    if (xh) for (var n of xh(t)) eS.call(t, n) && Eh(e, n, t[n]);
    return e;
  },
  Zt = (e, t) => Jw(e, Zw(t));
function tS(e, t) {
  return (
    t.forEach(function (n) {
      n &&
        typeof n != "string" &&
        !Array.isArray(n) &&
        Object.keys(n).forEach(function (r) {
          if (r !== "default" && !(r in e)) {
            var o = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(
              e,
              r,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }
            );
          }
        });
    }),
    Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    )
  );
}
const nS = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
};
nS();
var hi =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function rS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function ug(e) {
  if (e.__esModule) return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return (
    Object.keys(e).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        t,
        n,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    t
  );
}
var T = { exports: {} },
  le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $i = Symbol.for("react.element"),
  oS = Symbol.for("react.portal"),
  iS = Symbol.for("react.fragment"),
  aS = Symbol.for("react.strict_mode"),
  sS = Symbol.for("react.profiler"),
  uS = Symbol.for("react.provider"),
  lS = Symbol.for("react.context"),
  cS = Symbol.for("react.forward_ref"),
  fS = Symbol.for("react.suspense"),
  pS = Symbol.for("react.memo"),
  dS = Symbol.for("react.lazy"),
  Ph = Symbol.iterator;
function hS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ph && e[Ph]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var lg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  cg = Object.assign,
  fg = {};
function _o(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = fg),
    (this.updater = n || lg);
}
_o.prototype.isReactComponent = {};
_o.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_o.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pg() {}
pg.prototype = _o.prototype;
function Kp(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = fg),
    (this.updater = n || lg);
}
var qp = (Kp.prototype = new pg());
qp.constructor = Kp;
cg(qp, _o.prototype);
qp.isPureReactComponent = !0;
var Oh = Array.isArray,
  dg = Object.prototype.hasOwnProperty,
  Qp = { current: null },
  hg = { key: !0, ref: !0, __self: !0, __source: !0 };
function mg(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      dg.call(t, r) && !hg.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: $i,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Qp.current,
  };
}
function mS(e, t) {
  return {
    $$typeof: $i,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $i;
}
function vS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Dh = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vS("" + e.key)
    : t.toString(36);
}
function _a(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $i:
          case oS:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + kl(a, 0) : r),
      Oh(o)
        ? ((n = ""),
          e != null && (n = e.replace(Dh, "$&/") + "/"),
          _a(o, t, n, "", function (l) {
            return l;
          }))
        : o != null &&
          (Gp(o) &&
            (o = mS(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Dh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Oh(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + kl(i, s);
      a += _a(i, t, n, u, o);
    }
  else if (((u = hS(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + kl(i, s++)), (a += _a(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function ea(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    _a(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function yS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var gt = { current: null },
  ba = { transition: null },
  gS = {
    ReactCurrentDispatcher: gt,
    ReactCurrentBatchConfig: ba,
    ReactCurrentOwner: Qp,
  };
le.Children = {
  map: ea,
  forEach: function (e, t, n) {
    ea(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ea(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ea(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
le.Component = _o;
le.Fragment = iS;
le.Profiler = sS;
le.PureComponent = Kp;
le.StrictMode = aS;
le.Suspense = fS;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gS;
le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = cg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Qp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      dg.call(t, u) &&
        !hg.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var l = 0; l < u; l++) s[l] = arguments[l + 2];
    r.children = s;
  }
  return { $$typeof: $i, type: e.type, key: o, ref: i, props: r, _owner: a };
};
le.createContext = function (e) {
  return (
    (e = {
      $$typeof: lS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: uS, _context: e }),
    (e.Consumer = e)
  );
};
le.createElement = mg;
le.createFactory = function (e) {
  var t = mg.bind(null, e);
  return (t.type = e), t;
};
le.createRef = function () {
  return { current: null };
};
le.forwardRef = function (e) {
  return { $$typeof: cS, render: e };
};
le.isValidElement = Gp;
le.lazy = function (e) {
  return { $$typeof: dS, _payload: { _status: -1, _result: e }, _init: yS };
};
le.memo = function (e, t) {
  return { $$typeof: pS, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function (e) {
  var t = ba.transition;
  ba.transition = {};
  try {
    e();
  } finally {
    ba.transition = t;
  }
};
le.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
le.useCallback = function (e, t) {
  return gt.current.useCallback(e, t);
};
le.useContext = function (e) {
  return gt.current.useContext(e);
};
le.useDebugValue = function () {};
le.useDeferredValue = function (e) {
  return gt.current.useDeferredValue(e);
};
le.useEffect = function (e, t) {
  return gt.current.useEffect(e, t);
};
le.useId = function () {
  return gt.current.useId();
};
le.useImperativeHandle = function (e, t, n) {
  return gt.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function (e, t) {
  return gt.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function (e, t) {
  return gt.current.useLayoutEffect(e, t);
};
le.useMemo = function (e, t) {
  return gt.current.useMemo(e, t);
};
le.useReducer = function (e, t, n) {
  return gt.current.useReducer(e, t, n);
};
le.useRef = function (e) {
  return gt.current.useRef(e);
};
le.useState = function (e) {
  return gt.current.useState(e);
};
le.useSyncExternalStore = function (e, t, n) {
  return gt.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function () {
  return gt.current.useTransition();
};
le.version = "18.1.0";
T.exports = le;
var B = T.exports,
  vc = tS({ __proto__: null, default: B }, [T.exports]),
  yc = {},
  ji = { exports: {} },
  Mt = {},
  vg = { exports: {} },
  yg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(K, M) {
    var N = K.length;
    K.push(M);
    e: for (; 0 < N; ) {
      var G = (N - 1) >>> 1,
        Y = K[G];
      if (0 < o(Y, M)) (K[G] = M), (K[N] = Y), (N = G);
      else break e;
    }
  }
  function n(K) {
    return K.length === 0 ? null : K[0];
  }
  function r(K) {
    if (K.length === 0) return null;
    var M = K[0],
      N = K.pop();
    if (N !== M) {
      K[0] = N;
      e: for (var G = 0, Y = K.length, ee = Y >>> 1; G < ee; ) {
        var re = 2 * (G + 1) - 1,
          ae = K[re],
          ce = re + 1,
          Ce = K[ce];
        if (0 > o(ae, N))
          ce < Y && 0 > o(Ce, ae)
            ? ((K[G] = Ce), (K[ce] = N), (G = ce))
            : ((K[G] = ae), (K[re] = N), (G = re));
        else if (ce < Y && 0 > o(Ce, N)) (K[G] = Ce), (K[ce] = N), (G = ce);
        else break e;
      }
    }
    return M;
  }
  function o(K, M) {
    var N = K.sortIndex - M.sortIndex;
    return N !== 0 ? N : K.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var u = [],
    l = [],
    c = 1,
    f = null,
    h = 3,
    m = !1,
    v = !1,
    g = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    w = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(K) {
    for (var M = n(l); M !== null; ) {
      if (M.callback === null) r(l);
      else if (M.startTime <= K)
        r(l), (M.sortIndex = M.expirationTime), t(u, M);
      else break;
      M = n(l);
    }
  }
  function E(K) {
    if (((g = !1), _(K), !v))
      if (n(u) !== null) (v = !0), J(U);
      else {
        var M = n(l);
        M !== null && ie(E, M.startTime - K);
      }
  }
  function U(K, M) {
    (v = !1), g && ((g = !1), y($), ($ = -1)), (m = !0);
    var N = h;
    try {
      for (
        _(M), f = n(u);
        f !== null && (!(f.expirationTime > M) || (K && !I()));

      ) {
        var G = f.callback;
        if (typeof G == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var Y = G(f.expirationTime <= M);
          (M = e.unstable_now()),
            typeof Y == "function" ? (f.callback = Y) : f === n(u) && r(u),
            _(M);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var ee = !0;
      else {
        var re = n(l);
        re !== null && ie(E, re.startTime - M), (ee = !1);
      }
      return ee;
    } finally {
      (f = null), (h = N), (m = !1);
    }
  }
  var L = !1,
    j = null,
    $ = -1,
    Q = 5,
    k = -1;
  function I() {
    return !(e.unstable_now() - k < Q);
  }
  function D() {
    if (j !== null) {
      var K = e.unstable_now();
      k = K;
      var M = !0;
      try {
        M = j(!0, K);
      } finally {
        M ? R() : ((L = !1), (j = null));
      }
    } else L = !1;
  }
  var R;
  if (typeof w == "function")
    R = function () {
      w(D);
    };
  else if (typeof MessageChannel != "undefined") {
    var W = new MessageChannel(),
      F = W.port2;
    (W.port1.onmessage = D),
      (R = function () {
        F.postMessage(null);
      });
  } else
    R = function () {
      O(D, 0);
    };
  function J(K) {
    (j = K), L || ((L = !0), R());
  }
  function ie(K, M) {
    $ = O(function () {
      K(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (K) {
      K.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || m || ((v = !0), J(U));
    }),
    (e.unstable_forceFrameRate = function (K) {
      0 > K || 125 < K
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < K ? Math.floor(1e3 / K) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (K) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = h;
      }
      var N = h;
      h = M;
      try {
        return K();
      } finally {
        h = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (K, M) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var N = h;
      h = K;
      try {
        return M();
      } finally {
        h = N;
      }
    }),
    (e.unstable_scheduleCallback = function (K, M, N) {
      var G = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? G + N : G))
          : (N = G),
        K)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = N + Y),
        (K = {
          id: c++,
          callback: M,
          priorityLevel: K,
          startTime: N,
          expirationTime: Y,
          sortIndex: -1,
        }),
        N > G
          ? ((K.sortIndex = N),
            t(l, K),
            n(u) === null &&
              K === n(l) &&
              (g ? (y($), ($ = -1)) : (g = !0), ie(E, N - G)))
          : ((K.sortIndex = Y), t(u, K), v || m || ((v = !0), J(U))),
        K
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (K) {
      var M = h;
      return function () {
        var N = h;
        h = M;
        try {
          return K.apply(this, arguments);
        } finally {
          h = N;
        }
      };
    });
})(yg);
vg.exports = yg;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gg = T.exports,
  Nt = vg.exports;
function q(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wg = new Set(),
  mi = {};
function Ur(e, t) {
  uo(e, t), uo(e + "Capture", t);
}
function uo(e, t) {
  for (mi[e] = t, e = 0; e < t.length; e++) wg.add(t[e]);
}
var An = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  gc = Object.prototype.hasOwnProperty,
  wS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  kh = {},
  Th = {};
function SS(e) {
  return gc.call(Th, e)
    ? !0
    : gc.call(kh, e)
    ? !1
    : wS.test(e)
    ? (Th[e] = !0)
    : ((kh[e] = !0), !1);
}
function CS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _S(e, t, n, r) {
  if (t === null || typeof t == "undefined" || CS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function wt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var at = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    at[e] = new wt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  at[t] = new wt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  at[e] = new wt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  at[e] = new wt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    at[e] = new wt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  at[e] = new wt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  at[e] = new wt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  at[e] = new wt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  at[e] = new wt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jp = /[\-:]([a-z])/g;
function Zp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Jp, Zp);
    at[t] = new wt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Jp, Zp);
    at[t] = new wt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Jp, Zp);
  at[t] = new wt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  at[e] = new wt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
at.xlinkHref = new wt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  at[e] = new wt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xp(e, t, n, r) {
  var o = at.hasOwnProperty(t) ? at[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_S(t, n, o, r) && (n = null),
    r || o === null
      ? SS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Un = gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ta = Symbol.for("react.element"),
  Yr = Symbol.for("react.portal"),
  Vr = Symbol.for("react.fragment"),
  ed = Symbol.for("react.strict_mode"),
  wc = Symbol.for("react.profiler"),
  Sg = Symbol.for("react.provider"),
  Cg = Symbol.for("react.context"),
  td = Symbol.for("react.forward_ref"),
  Sc = Symbol.for("react.suspense"),
  Cc = Symbol.for("react.suspense_list"),
  nd = Symbol.for("react.memo"),
  Hn = Symbol.for("react.lazy"),
  _g = Symbol.for("react.offscreen"),
  Ah = Symbol.iterator;
function Ro(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ah && e[Ah]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Me = Object.assign,
  Tl;
function Ko(e) {
  if (Tl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Tl = (t && t[1]) || "";
    }
  return (
    `
` +
    Tl +
    e
  );
}
var Al = !1;
function Rl(e, t) {
  if (!e || Al) return "";
  Al = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (l) {
          var r = l;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (l) {
          r = l;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      e();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (
        var o = l.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var u =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ko(e) : "";
}
function bS(e) {
  switch (e.tag) {
    case 5:
      return Ko(e.type);
    case 16:
      return Ko("Lazy");
    case 13:
      return Ko("Suspense");
    case 19:
      return Ko("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Rl(e.type, !1)), e;
    case 11:
      return (e = Rl(e.type.render, !1)), e;
    case 1:
      return (e = Rl(e.type, !0)), e;
    default:
      return "";
  }
}
function _c(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vr:
      return "Fragment";
    case Yr:
      return "Portal";
    case wc:
      return "Profiler";
    case ed:
      return "StrictMode";
    case Sc:
      return "Suspense";
    case Cc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Cg:
        return (e.displayName || "Context") + ".Consumer";
      case Sg:
        return (e._context.displayName || "Context") + ".Provider";
      case td:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case nd:
        return (
          (t = e.displayName || null), t !== null ? t : _c(e.type) || "Memo"
        );
      case Hn:
        (t = e._payload), (e = e._init);
        try {
          return _c(e(t));
        } catch {}
    }
  return null;
}
function xS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _c(t);
    case 8:
      return t === ed ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function sr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function bg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ES(e) {
  var t = bg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function na(e) {
  e._valueTracker || (e._valueTracker = ES(e));
}
function xg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = bg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ps(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bc(e, t) {
  var n = t.checked;
  return Me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Rh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = sr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Eg(e, t) {
  (t = t.checked), t != null && Xp(e, "checked", t, !1);
}
function xc(e, t) {
  Eg(e, t);
  var n = sr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ec(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ec(e, t.type, sr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ec(e, t, n) {
  (t !== "number" || Ps(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qo = Array.isArray;
function to(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(q(91));
  return Me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Mh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(q(92));
      if (qo(n)) {
        if (1 < n.length) throw Error(q(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: sr(n) };
}
function Pg(e, t) {
  var n = sr(t.value),
    r = sr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ih(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Og(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Oc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Og(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ra,
  Dg = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ra = ra || document.createElement("div"),
          ra.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ra.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  PS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xo).forEach(function (e) {
  PS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xo[t] = Xo[e]);
  });
});
function kg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xo.hasOwnProperty(e) && Xo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = kg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var OS = Me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Dc(e, t) {
  if (t) {
    if (OS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(q(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(q(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(q(62));
  }
}
function kc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Tc = null;
function rd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ac = null,
  no = null,
  ro = null;
function Uh(e) {
  if ((e = Vi(e))) {
    if (typeof Ac != "function") throw Error(q(280));
    var t = e.stateNode;
    t && ((t = Qu(t)), Ac(e.stateNode, e.type, t));
  }
}
function Ag(e) {
  no ? (ro ? ro.push(e) : (ro = [e])) : (no = e);
}
function Rg() {
  if (no) {
    var e = no,
      t = ro;
    if (((ro = no = null), Uh(e), t)) for (e = 0; e < t.length; e++) Uh(t[e]);
  }
}
function Ng(e, t) {
  return e(t);
}
function Mg() {}
var Nl = !1;
function Ig(e, t, n) {
  if (Nl) return e(t, n);
  Nl = !0;
  try {
    return Ng(e, t, n);
  } finally {
    (Nl = !1), (no !== null || ro !== null) && (Mg(), Rg());
  }
}
function yi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Qu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(q(231, t, typeof n));
  return n;
}
var Rc = !1;
if (An)
  try {
    var No = {};
    Object.defineProperty(No, "passive", {
      get: function () {
        Rc = !0;
      },
    }),
      window.addEventListener("test", No, No),
      window.removeEventListener("test", No, No);
  } catch {
    Rc = !1;
  }
function DS(e, t, n, r, o, i, a, s, u) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, l);
  } catch (c) {
    this.onError(c);
  }
}
var ei = !1,
  Os = null,
  Ds = !1,
  Nc = null,
  kS = {
    onError: function (e) {
      (ei = !0), (Os = e);
    },
  };
function TS(e, t, n, r, o, i, a, s, u) {
  (ei = !1), (Os = null), DS.apply(kS, arguments);
}
function AS(e, t, n, r, o, i, a, s, u) {
  if ((TS.apply(this, arguments), ei)) {
    if (ei) {
      var l = Os;
      (ei = !1), (Os = null);
    } else throw Error(q(198));
    Ds || ((Ds = !0), (Nc = l));
  }
}
function Lr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ug(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Lh(e) {
  if (Lr(e) !== e) throw Error(q(188));
}
function RS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lr(e)), t === null)) throw Error(q(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Lh(o), e;
        if (i === r) return Lh(o), t;
        i = i.sibling;
      }
      throw Error(q(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(q(189));
      }
    }
    if (n.alternate !== r) throw Error(q(190));
  }
  if (n.tag !== 3) throw Error(q(188));
  return n.stateNode.current === n ? e : t;
}
function Lg(e) {
  return (e = RS(e)), e !== null ? Fg(e) : null;
}
function Fg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bg = Nt.unstable_scheduleCallback,
  Fh = Nt.unstable_cancelCallback,
  NS = Nt.unstable_shouldYield,
  MS = Nt.unstable_requestPaint,
  Fe = Nt.unstable_now,
  IS = Nt.unstable_getCurrentPriorityLevel,
  od = Nt.unstable_ImmediatePriority,
  $g = Nt.unstable_UserBlockingPriority,
  ks = Nt.unstable_NormalPriority,
  US = Nt.unstable_LowPriority,
  jg = Nt.unstable_IdlePriority,
  Wu = null,
  yn = null;
function LS(e) {
  if (yn && typeof yn.onCommitFiberRoot == "function")
    try {
      yn.onCommitFiberRoot(Wu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var on = Math.clz32 ? Math.clz32 : $S,
  FS = Math.log,
  BS = Math.LN2;
function $S(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((FS(e) / BS) | 0)) | 0;
}
var oa = 64,
  ia = 4194304;
function Qo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ts(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = Qo(s)) : ((i &= a), i !== 0 && (r = Qo(i)));
  } else (a = n & ~o), a !== 0 ? (r = Qo(a)) : i !== 0 && (r = Qo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & o) === 0 &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - on(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function jS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function HS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - on(i),
      s = 1 << a,
      u = o[a];
    u === -1
      ? ((s & n) === 0 || (s & r) !== 0) && (o[a] = jS(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Mc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Hg() {
  var e = oa;
  return (oa <<= 1), (oa & 4194240) === 0 && (oa = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - on(t)),
    (e[t] = n);
}
function YS(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - on(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function id(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - on(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Se = 0;
function Yg(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Vg,
  ad,
  Wg,
  zg,
  Kg,
  Ic = !1,
  aa = [],
  Zn = null,
  Xn = null,
  er = null,
  gi = new Map(),
  wi = new Map(),
  Wn = [],
  VS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Bh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zn = null;
      break;
    case "dragenter":
    case "dragleave":
      Xn = null;
      break;
    case "mouseover":
    case "mouseout":
      er = null;
      break;
    case "pointerover":
    case "pointerout":
      gi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wi.delete(t.pointerId);
  }
}
function Mo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Vi(t)), t !== null && ad(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function WS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Zn = Mo(Zn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Xn = Mo(Xn, e, t, n, r, o)), !0;
    case "mouseover":
      return (er = Mo(er, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return gi.set(i, Mo(gi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), wi.set(i, Mo(wi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function qg(e) {
  var t = Cr(e.target);
  if (t !== null) {
    var n = Lr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ug(n)), t !== null)) {
          (e.blockedOn = t),
            Kg(e.priority, function () {
              Wg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Tc = r), n.target.dispatchEvent(r), (Tc = null);
    } else return (t = Vi(n)), t !== null && ad(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $h(e, t, n) {
  xa(e) && n.delete(t);
}
function zS() {
  (Ic = !1),
    Zn !== null && xa(Zn) && (Zn = null),
    Xn !== null && xa(Xn) && (Xn = null),
    er !== null && xa(er) && (er = null),
    gi.forEach($h),
    wi.forEach($h);
}
function Io(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ic ||
      ((Ic = !0),
      Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, zS)));
}
function Si(e) {
  function t(o) {
    return Io(o, e);
  }
  if (0 < aa.length) {
    Io(aa[0], e);
    for (var n = 1; n < aa.length; n++) {
      var r = aa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zn !== null && Io(Zn, e),
      Xn !== null && Io(Xn, e),
      er !== null && Io(er, e),
      gi.forEach(t),
      wi.forEach(t),
      n = 0;
    n < Wn.length;
    n++
  )
    (r = Wn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
    qg(n), n.blockedOn === null && Wn.shift();
}
var oo = Un.ReactCurrentBatchConfig,
  As = !0;
function KS(e, t, n, r) {
  var o = Se,
    i = oo.transition;
  oo.transition = null;
  try {
    (Se = 1), sd(e, t, n, r);
  } finally {
    (Se = o), (oo.transition = i);
  }
}
function qS(e, t, n, r) {
  var o = Se,
    i = oo.transition;
  oo.transition = null;
  try {
    (Se = 4), sd(e, t, n, r);
  } finally {
    (Se = o), (oo.transition = i);
  }
}
function sd(e, t, n, r) {
  if (As) {
    var o = Uc(e, t, n, r);
    if (o === null) Vl(e, t, r, Rs, n), Bh(e, r);
    else if (WS(o, e, t, n, r)) r.stopPropagation();
    else if ((Bh(e, r), t & 4 && -1 < VS.indexOf(e))) {
      for (; o !== null; ) {
        var i = Vi(o);
        if (
          (i !== null && Vg(i),
          (i = Uc(e, t, n, r)),
          i === null && Vl(e, t, r, Rs, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var Rs = null;
function Uc(e, t, n, r) {
  if (((Rs = null), (e = rd(r)), (e = Cr(e)), e !== null))
    if (((t = Lr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ug(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Rs = e), null;
}
function Qg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (IS()) {
        case od:
          return 1;
        case $g:
          return 4;
        case ks:
        case US:
          return 16;
        case jg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kn = null,
  ud = null,
  Ea = null;
function Gg() {
  if (Ea) return Ea;
  var e,
    t = ud,
    n = t.length,
    r,
    o = "value" in Kn ? Kn.value : Kn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Ea = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Pa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sa() {
  return !0;
}
function jh() {
  return !1;
}
function It(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? sa
        : jh),
      (this.isPropagationStopped = jh),
      this
    );
  }
  return (
    Me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = sa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = sa));
      },
      persist: function () {},
      isPersistent: sa,
    }),
    t
  );
}
var bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ld = It(bo),
  Yi = Me({}, bo, { view: 0, detail: 0 }),
  QS = It(Yi),
  Il,
  Ul,
  Uo,
  zu = Me({}, Yi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Uo &&
            (Uo && e.type === "mousemove"
              ? ((Il = e.screenX - Uo.screenX), (Ul = e.screenY - Uo.screenY))
              : (Ul = Il = 0),
            (Uo = e)),
          Il);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ul;
    },
  }),
  Hh = It(zu),
  GS = Me({}, zu, { dataTransfer: 0 }),
  JS = It(GS),
  ZS = Me({}, Yi, { relatedTarget: 0 }),
  Ll = It(ZS),
  XS = Me({}, bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eC = It(XS),
  tC = Me({}, bo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nC = It(tC),
  rC = Me({}, bo, { data: 0 }),
  Yh = It(rC),
  oC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  iC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  aC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = aC[e]) ? !!t[e] : !1;
}
function cd() {
  return sC;
}
var uC = Me({}, Yi, {
    key: function (e) {
      if (e.key) {
        var t = oC[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Pa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? iC[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cd,
    charCode: function (e) {
      return e.type === "keypress" ? Pa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Pa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  lC = It(uC),
  cC = Me({}, zu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vh = It(cC),
  fC = Me({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cd,
  }),
  pC = It(fC),
  dC = Me({}, bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hC = It(dC),
  mC = Me({}, zu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vC = It(mC),
  yC = [9, 13, 27, 32],
  fd = An && "CompositionEvent" in window,
  ti = null;
An && "documentMode" in document && (ti = document.documentMode);
var gC = An && "TextEvent" in window && !ti,
  Jg = An && (!fd || (ti && 8 < ti && 11 >= ti)),
  Wh = String.fromCharCode(32),
  zh = !1;
function Zg(e, t) {
  switch (e) {
    case "keyup":
      return yC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wr = !1;
function wC(e, t) {
  switch (e) {
    case "compositionend":
      return Xg(t);
    case "keypress":
      return t.which !== 32 ? null : ((zh = !0), Wh);
    case "textInput":
      return (e = t.data), e === Wh && zh ? null : e;
    default:
      return null;
  }
}
function SC(e, t) {
  if (Wr)
    return e === "compositionend" || (!fd && Zg(e, t))
      ? ((e = Gg()), (Ea = ud = Kn = null), (Wr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var CC = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Kh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!CC[e.type] : t === "textarea";
}
function e1(e, t, n, r) {
  Ag(r),
    (t = Ns(t, "onChange")),
    0 < t.length &&
      ((n = new ld("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ni = null,
  Ci = null;
function _C(e) {
  f1(e, 0);
}
function Ku(e) {
  var t = qr(e);
  if (xg(t)) return e;
}
function bC(e, t) {
  if (e === "change") return t;
}
var t1 = !1;
if (An) {
  var Fl;
  if (An) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var qh = document.createElement("div");
      qh.setAttribute("oninput", "return;"),
        (Bl = typeof qh.oninput == "function");
    }
    Fl = Bl;
  } else Fl = !1;
  t1 = Fl && (!document.documentMode || 9 < document.documentMode);
}
function Qh() {
  ni && (ni.detachEvent("onpropertychange", n1), (Ci = ni = null));
}
function n1(e) {
  if (e.propertyName === "value" && Ku(Ci)) {
    var t = [];
    e1(t, Ci, e, rd(e)), Ig(_C, t);
  }
}
function xC(e, t, n) {
  e === "focusin"
    ? (Qh(), (ni = t), (Ci = n), ni.attachEvent("onpropertychange", n1))
    : e === "focusout" && Qh();
}
function EC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ku(Ci);
}
function PC(e, t) {
  if (e === "click") return Ku(t);
}
function OC(e, t) {
  if (e === "input" || e === "change") return Ku(t);
}
function DC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var un = typeof Object.is == "function" ? Object.is : DC;
function _i(e, t) {
  if (un(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!gc.call(t, o) || !un(e[o], t[o])) return !1;
  }
  return !0;
}
function Gh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jh(e, t) {
  var n = Gh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gh(n);
  }
}
function r1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? r1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function o1() {
  for (var e = window, t = Ps(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ps(e.document);
  }
  return t;
}
function pd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function kC(e) {
  var t = o1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    r1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Jh(n, i));
        var a = Jh(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var TC = An && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  Lc = null,
  ri = null,
  Fc = !1;
function Zh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fc ||
    zr == null ||
    zr !== Ps(r) ||
    ((r = zr),
    "selectionStart" in r && pd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ri && _i(ri, r)) ||
      ((ri = r),
      (r = Ns(Lc, "onSelect")),
      0 < r.length &&
        ((t = new ld("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zr))));
}
function ua(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kr = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionend: ua("Transition", "TransitionEnd"),
  },
  $l = {},
  i1 = {};
An &&
  ((i1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kr.animationend.animation,
    delete Kr.animationiteration.animation,
    delete Kr.animationstart.animation),
  "TransitionEvent" in window || delete Kr.transitionend.transition);
function qu(e) {
  if ($l[e]) return $l[e];
  if (!Kr[e]) return e;
  var t = Kr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in i1) return ($l[e] = t[n]);
  return e;
}
var a1 = qu("animationend"),
  s1 = qu("animationiteration"),
  u1 = qu("animationstart"),
  l1 = qu("transitionend"),
  c1 = new Map(),
  Xh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function fr(e, t) {
  c1.set(e, t), Ur(t, [e]);
}
for (var jl = 0; jl < Xh.length; jl++) {
  var Hl = Xh[jl],
    AC = Hl.toLowerCase(),
    RC = Hl[0].toUpperCase() + Hl.slice(1);
  fr(AC, "on" + RC);
}
fr(a1, "onAnimationEnd");
fr(s1, "onAnimationIteration");
fr(u1, "onAnimationStart");
fr("dblclick", "onDoubleClick");
fr("focusin", "onFocus");
fr("focusout", "onBlur");
fr(l1, "onTransitionEnd");
uo("onMouseEnter", ["mouseout", "mouseover"]);
uo("onMouseLeave", ["mouseout", "mouseover"]);
uo("onPointerEnter", ["pointerout", "pointerover"]);
uo("onPointerLeave", ["pointerout", "pointerover"]);
Ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Go =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  NC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));
function em(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), AS(r, t, void 0, e), (e.currentTarget = null);
}
function f1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            u = s.instance,
            l = s.currentTarget;
          if (((s = s.listener), u !== i && o.isPropagationStopped())) break e;
          em(o, s, l), (i = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (u = s.instance),
            (l = s.currentTarget),
            (s = s.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          em(o, s, l), (i = u);
        }
    }
  }
  if (Ds) throw ((e = Nc), (Ds = !1), (Nc = null), e);
}
function Pe(e, t) {
  var n = t[Yc];
  n === void 0 && (n = t[Yc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (p1(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), p1(n, e, r, t);
}
var la = "_reactListening" + Math.random().toString(36).slice(2);
function bi(e) {
  if (!e[la]) {
    (e[la] = !0),
      wg.forEach(function (n) {
        n !== "selectionchange" && (NC.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[la] || ((t[la] = !0), Yl("selectionchange", !1, t));
  }
}
function p1(e, t, n, r) {
  switch (Qg(t)) {
    case 1:
      var o = KS;
      break;
    case 4:
      o = qS;
      break;
    default:
      o = sd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Rc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Vl(e, t, n, r, o) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Cr(s)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ig(function () {
    var l = i,
      c = rd(n),
      f = [];
    e: {
      var h = c1.get(e);
      if (h !== void 0) {
        var m = ld,
          v = e;
        switch (e) {
          case "keypress":
            if (Pa(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = lC;
            break;
          case "focusin":
            (v = "focus"), (m = Ll);
            break;
          case "focusout":
            (v = "blur"), (m = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            m = Ll;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Hh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = JS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = pC;
            break;
          case a1:
          case s1:
          case u1:
            m = eC;
            break;
          case l1:
            m = hC;
            break;
          case "scroll":
            m = QS;
            break;
          case "wheel":
            m = vC;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = nC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Vh;
        }
        var g = (t & 4) !== 0,
          O = !g && e === "scroll",
          y = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var w = l, _; w !== null; ) {
          _ = w;
          var E = _.stateNode;
          if (
            (_.tag === 5 &&
              E !== null &&
              ((_ = E),
              y !== null && ((E = yi(w, y)), E != null && g.push(xi(w, E, _)))),
            O)
          )
            break;
          w = w.return;
        }
        0 < g.length &&
          ((h = new m(h, v, null, n, c)), f.push({ event: h, listeners: g }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Tc &&
            (v = n.relatedTarget || n.fromElement) &&
            (Cr(v) || v[Rn]))
        )
          break e;
        if (
          (m || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          m
            ? ((v = n.relatedTarget || n.toElement),
              (m = l),
              (v = v ? Cr(v) : null),
              v !== null &&
                ((O = Lr(v)), v !== O || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((m = null), (v = l)),
          m !== v)
        ) {
          if (
            ((g = Hh),
            (E = "onMouseLeave"),
            (y = "onMouseEnter"),
            (w = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Vh),
              (E = "onPointerLeave"),
              (y = "onPointerEnter"),
              (w = "pointer")),
            (O = m == null ? h : qr(m)),
            (_ = v == null ? h : qr(v)),
            (h = new g(E, w + "leave", m, n, c)),
            (h.target = O),
            (h.relatedTarget = _),
            (E = null),
            Cr(c) === l &&
              ((g = new g(y, w + "enter", v, n, c)),
              (g.target = _),
              (g.relatedTarget = O),
              (E = g)),
            (O = E),
            m && v)
          )
            t: {
              for (g = m, y = v, w = 0, _ = g; _; _ = Br(_)) w++;
              for (_ = 0, E = y; E; E = Br(E)) _++;
              for (; 0 < w - _; ) (g = Br(g)), w--;
              for (; 0 < _ - w; ) (y = Br(y)), _--;
              for (; w--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = Br(g)), (y = Br(y));
              }
              g = null;
            }
          else g = null;
          m !== null && tm(f, h, m, g, !1),
            v !== null && O !== null && tm(f, O, v, g, !0);
        }
      }
      e: {
        if (
          ((h = l ? qr(l) : window),
          (m = h.nodeName && h.nodeName.toLowerCase()),
          m === "select" || (m === "input" && h.type === "file"))
        )
          var U = bC;
        else if (Kh(h))
          if (t1) U = OC;
          else {
            U = EC;
            var L = xC;
          }
        else
          (m = h.nodeName) &&
            m.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (U = PC);
        if (U && (U = U(e, l))) {
          e1(f, U, n, c);
          break e;
        }
        L && L(e, h, l),
          e === "focusout" &&
            (L = h._wrapperState) &&
            L.controlled &&
            h.type === "number" &&
            Ec(h, "number", h.value);
      }
      switch (((L = l ? qr(l) : window), e)) {
        case "focusin":
          (Kh(L) || L.contentEditable === "true") &&
            ((zr = L), (Lc = l), (ri = null));
          break;
        case "focusout":
          ri = Lc = zr = null;
          break;
        case "mousedown":
          Fc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Fc = !1), Zh(f, n, c);
          break;
        case "selectionchange":
          if (TC) break;
        case "keydown":
        case "keyup":
          Zh(f, n, c);
      }
      var j;
      if (fd)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Wr
          ? Zg(e, n) && ($ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (Jg &&
          n.locale !== "ko" &&
          (Wr || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && Wr && (j = Gg())
            : ((Kn = c),
              (ud = "value" in Kn ? Kn.value : Kn.textContent),
              (Wr = !0))),
        (L = Ns(l, $)),
        0 < L.length &&
          (($ = new Yh($, e, null, n, c)),
          f.push({ event: $, listeners: L }),
          j ? ($.data = j) : ((j = Xg(n)), j !== null && ($.data = j)))),
        (j = gC ? wC(e, n) : SC(e, n)) &&
          ((l = Ns(l, "onBeforeInput")),
          0 < l.length &&
            ((c = new Yh("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: l }),
            (c.data = j)));
    }
    f1(f, t);
  });
}
function xi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ns(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = yi(e, n)),
      i != null && r.unshift(xi(e, i, o)),
      (i = yi(e, t)),
      i != null && r.push(xi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Br(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tm(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      l = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      l !== null &&
      ((s = l),
      o
        ? ((u = yi(n, i)), u != null && a.unshift(xi(n, u, s)))
        : o || ((u = yi(n, i)), u != null && a.push(xi(n, u, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var MC = /\r\n?/g,
  IC = /\u0000|\uFFFD/g;
function nm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      MC,
      `
`
    )
    .replace(IC, "");
}
function ca(e, t, n) {
  if (((t = nm(t)), nm(e) !== t && n)) throw Error(q(425));
}
function Ms() {}
var Bc = null,
  $c = null;
function jc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hc = typeof setTimeout == "function" ? setTimeout : void 0,
  UC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rm = typeof Promise == "function" ? Promise : void 0,
  LC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rm != "undefined"
      ? function (e) {
          return rm.resolve(null).then(e).catch(FC);
        }
      : Hc;
function FC(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Si(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Si(t);
}
function En(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function om(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xo = Math.random().toString(36).slice(2),
  fn = "__reactFiber$" + xo,
  Ei = "__reactProps$" + xo,
  Rn = "__reactContainer$" + xo,
  Yc = "__reactEvents$" + xo,
  BC = "__reactListeners$" + xo,
  $C = "__reactHandles$" + xo;
function Cr(e) {
  var t = e[fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rn] || n[fn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = om(e); e !== null; ) {
          if ((n = e[fn])) return n;
          e = om(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Vi(e) {
  return (
    (e = e[fn] || e[Rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(q(33));
}
function Qu(e) {
  return e[Ei] || null;
}
var Vc = [],
  Qr = -1;
function pr(e) {
  return { current: e };
}
function Oe(e) {
  0 > Qr || ((e.current = Vc[Qr]), (Vc[Qr] = null), Qr--);
}
function Ee(e, t) {
  Qr++, (Vc[Qr] = e.current), (e.current = t);
}
var ur = {},
  pt = pr(ur),
  Et = pr(!1),
  Dr = ur;
function lo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ur;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Pt(e) {
  return (e = e.childContextTypes), e != null;
}
function Is() {
  Oe(Et), Oe(pt);
}
function im(e, t, n) {
  if (pt.current !== ur) throw Error(q(168));
  Ee(pt, t), Ee(Et, n);
}
function d1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(q(108, xS(e) || "Unknown", o));
  return Me({}, n, r);
}
function Us(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ur),
    (Dr = pt.current),
    Ee(pt, e),
    Ee(Et, Et.current),
    !0
  );
}
function am(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(q(169));
  n
    ? ((e = d1(e, t, Dr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Oe(Et),
      Oe(pt),
      Ee(pt, e))
    : Oe(Et),
    Ee(Et, n);
}
var bn = null,
  Gu = !1,
  zl = !1;
function h1(e) {
  bn === null ? (bn = [e]) : bn.push(e);
}
function jC(e) {
  (Gu = !0), h1(e);
}
function dr() {
  if (!zl && bn !== null) {
    zl = !0;
    var e = 0,
      t = Se;
    try {
      var n = bn;
      for (Se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (bn = null), (Gu = !1);
    } catch (o) {
      throw (bn !== null && (bn = bn.slice(e + 1)), Bg(od, dr), o);
    } finally {
      (Se = t), (zl = !1);
    }
  }
  return null;
}
var HC = Un.ReactCurrentBatchConfig;
function en(e, t) {
  if (e && e.defaultProps) {
    (t = Me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ls = pr(null),
  Fs = null,
  Gr = null,
  dd = null;
function hd() {
  dd = Gr = Fs = null;
}
function md(e) {
  var t = Ls.current;
  Oe(Ls), (e._currentValue = t);
}
function Wc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function io(e, t) {
  (Fs = e),
    (dd = Gr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (xt = !0), (e.firstContext = null));
}
function Kt(e) {
  var t = e._currentValue;
  if (dd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gr === null)) {
      if (Fs === null) throw Error(q(308));
      (Gr = e), (Fs.dependencies = { lanes: 0, firstContext: e });
    } else Gr = Gr.next = e;
  return t;
}
var rn = null,
  Yn = !1;
function vd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function m1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function kn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tr(e, t) {
  var n = e.updateQueue;
  n !== null &&
    ((n = n.shared),
    o0(e)
      ? ((e = n.interleaved),
        e === null
          ? ((t.next = t), rn === null ? (rn = [n]) : rn.push(n))
          : ((t.next = e.next), (e.next = t)),
        (n.interleaved = t))
      : ((e = n.pending),
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (n.pending = t)));
}
function Oa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), id(e, n);
  }
}
function sm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Bs(e, t, n, r) {
  var o = e.updateQueue;
  Yn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      l = u.next;
    (u.next = null), a === null ? (i = l) : (a.next = l), (a = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = l) : (s.next = l),
        (c.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var f = o.baseState;
    (a = 0), (c = l = u = null), (s = i);
    do {
      var h = s.lane,
        m = s.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            g = s;
          switch (((h = t), (m = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                f = v.call(m, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (h = typeof v == "function" ? v.call(m, f, h) : v),
                h == null)
              )
                break e;
              f = Me({}, f, h);
              break e;
            case 2:
              Yn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [s]) : h.push(s));
      } else
        (m = {
          eventTime: m,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((l = c = m), (u = f)) : (c = c.next = m),
          (a |= h);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = l),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Ar |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function um(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(q(191, o));
        o.call(r);
      }
    }
}
var v1 = new gg.Component().refs;
function zc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ju = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = mt(),
      o = rr(e),
      i = kn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      tr(e, i),
      (t = Wt(e, o, r)),
      t !== null && Oa(t, e, o);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = mt(),
      o = rr(e),
      i = kn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      tr(e, i),
      (t = Wt(e, o, r)),
      t !== null && Oa(t, e, o);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = mt(),
      r = rr(e),
      o = kn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      tr(e, o),
      (t = Wt(e, r, n)),
      t !== null && Oa(t, e, r);
  },
};
function lm(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !_i(n, r) || !_i(o, i)
      : !0
  );
}
function y1(e, t, n) {
  var r = !1,
    o = ur,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Kt(i))
      : ((o = Pt(t) ? Dr : pt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? lo(e, o) : ur)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ju),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function cm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ju.enqueueReplaceState(t, t.state, null);
}
function Kc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = v1), vd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Kt(i))
    : ((i = Pt(t) ? Dr : pt.current), (o.context = lo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (zc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ju.enqueueReplaceState(o, o.state, null),
      Bs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
var Jr = [],
  Zr = 0,
  $s = null,
  js = 0,
  Bt = [],
  $t = 0,
  kr = null,
  Pn = 1,
  On = "";
function vr(e, t) {
  (Jr[Zr++] = js), (Jr[Zr++] = $s), ($s = e), (js = t);
}
function g1(e, t, n) {
  (Bt[$t++] = Pn), (Bt[$t++] = On), (Bt[$t++] = kr), (kr = e);
  var r = Pn;
  e = On;
  var o = 32 - on(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - on(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Pn = (1 << (32 - on(t) + o)) | (n << o) | r),
      (On = i + e);
  } else (Pn = (1 << i) | (n << o) | r), (On = e);
}
function yd(e) {
  e.return !== null && (vr(e, 1), g1(e, 1, 0));
}
function gd(e) {
  for (; e === $s; )
    ($s = Jr[--Zr]), (Jr[Zr] = null), (js = Jr[--Zr]), (Jr[Zr] = null);
  for (; e === kr; )
    (kr = Bt[--$t]),
      (Bt[$t] = null),
      (On = Bt[--$t]),
      (Bt[$t] = null),
      (Pn = Bt[--$t]),
      (Bt[$t] = null);
}
var Rt = null,
  bt = null,
  De = !1,
  nn = null;
function w1(e, t) {
  var n = Ht(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Rt = e), (bt = En(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Rt = e), (bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kr !== null ? { id: Pn, overflow: On } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ht(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Rt = e),
            (bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qc(e) {
  if (De) {
    var t = bt;
    if (t) {
      var n = t;
      if (!fm(e, t)) {
        if (qc(e)) throw Error(q(418));
        t = En(n.nextSibling);
        var r = Rt;
        t && fm(e, t)
          ? w1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (De = !1), (Rt = e));
      }
    } else {
      if (qc(e)) throw Error(q(418));
      (e.flags = (e.flags & -4097) | 2), (De = !1), (Rt = e);
    }
  }
}
function pm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Rt = e;
}
function Lo(e) {
  if (e !== Rt) return !1;
  if (!De) return pm(e), (De = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !jc(e.type, e.memoizedProps))),
    t && (t = bt))
  ) {
    if (qc(e)) {
      for (e = bt; e; ) e = En(e.nextSibling);
      throw Error(q(418));
    }
    for (; t; ) w1(e, t), (t = En(t.nextSibling));
  }
  if ((pm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              bt = En(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      bt = null;
    }
  } else bt = Rt ? En(e.stateNode.nextSibling) : null;
  return !0;
}
function co() {
  (bt = Rt = null), (De = !1);
}
function wd(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Fo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(q(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(q(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === v1 && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(q(284));
    if (!n._owner) throw Error(q(290, e));
  }
  return e;
}
function fa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      q(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function dm(e) {
  var t = e._init;
  return t(e._payload);
}
function S1(e) {
  function t(y, w) {
    if (e) {
      var _ = y.deletions;
      _ === null ? ((y.deletions = [w]), (y.flags |= 16)) : _.push(w);
    }
  }
  function n(y, w) {
    if (!e) return null;
    for (; w !== null; ) t(y, w), (w = w.sibling);
    return null;
  }
  function r(y, w) {
    for (y = new Map(); w !== null; )
      w.key !== null ? y.set(w.key, w) : y.set(w.index, w), (w = w.sibling);
    return y;
  }
  function o(y, w) {
    return (y = lr(y, w)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, w, _) {
    return (
      (y.index = _),
      e
        ? ((_ = y.alternate),
          _ !== null
            ? ((_ = _.index), _ < w ? ((y.flags |= 2), w) : _)
            : ((y.flags |= 2), w))
        : ((y.flags |= 1048576), w)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, w, _, E) {
    return w === null || w.tag !== 6
      ? ((w = Zl(_, y.mode, E)), (w.return = y), w)
      : ((w = o(w, _)), (w.return = y), w);
  }
  function u(y, w, _, E) {
    var U = _.type;
    return U === Vr
      ? c(y, w, _.props.children, E, _.key)
      : w !== null &&
        (w.elementType === U ||
          (typeof U == "object" &&
            U !== null &&
            U.$$typeof === Hn &&
            dm(U) === w.type))
      ? ((E = o(w, _.props)), (E.ref = Fo(y, w, _)), (E.return = y), E)
      : ((E = Ra(_.type, _.key, _.props, null, y.mode, E)),
        (E.ref = Fo(y, w, _)),
        (E.return = y),
        E);
  }
  function l(y, w, _, E) {
    return w === null ||
      w.tag !== 4 ||
      w.stateNode.containerInfo !== _.containerInfo ||
      w.stateNode.implementation !== _.implementation
      ? ((w = Xl(_, y.mode, E)), (w.return = y), w)
      : ((w = o(w, _.children || [])), (w.return = y), w);
  }
  function c(y, w, _, E, U) {
    return w === null || w.tag !== 7
      ? ((w = xr(_, y.mode, E, U)), (w.return = y), w)
      : ((w = o(w, _)), (w.return = y), w);
  }
  function f(y, w, _) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (w = Zl("" + w, y.mode, _)), (w.return = y), w;
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ta:
          return (
            (_ = Ra(w.type, w.key, w.props, null, y.mode, _)),
            (_.ref = Fo(y, null, w)),
            (_.return = y),
            _
          );
        case Yr:
          return (w = Xl(w, y.mode, _)), (w.return = y), w;
        case Hn:
          var E = w._init;
          return f(y, E(w._payload), _);
      }
      if (qo(w) || Ro(w))
        return (w = xr(w, y.mode, _, null)), (w.return = y), w;
      fa(y, w);
    }
    return null;
  }
  function h(y, w, _, E) {
    var U = w !== null ? w.key : null;
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return U !== null ? null : s(y, w, "" + _, E);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ta:
          return _.key === U ? u(y, w, _, E) : null;
        case Yr:
          return _.key === U ? l(y, w, _, E) : null;
        case Hn:
          return (U = _._init), h(y, w, U(_._payload), E);
      }
      if (qo(_) || Ro(_)) return U !== null ? null : c(y, w, _, E, null);
      fa(y, _);
    }
    return null;
  }
  function m(y, w, _, E, U) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (y = y.get(_) || null), s(w, y, "" + E, U);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case ta:
          return (y = y.get(E.key === null ? _ : E.key) || null), u(w, y, E, U);
        case Yr:
          return (y = y.get(E.key === null ? _ : E.key) || null), l(w, y, E, U);
        case Hn:
          var L = E._init;
          return m(y, w, _, L(E._payload), U);
      }
      if (qo(E) || Ro(E)) return (y = y.get(_) || null), c(w, y, E, U, null);
      fa(w, E);
    }
    return null;
  }
  function v(y, w, _, E) {
    for (
      var U = null, L = null, j = w, $ = (w = 0), Q = null;
      j !== null && $ < _.length;
      $++
    ) {
      j.index > $ ? ((Q = j), (j = null)) : (Q = j.sibling);
      var k = h(y, j, _[$], E);
      if (k === null) {
        j === null && (j = Q);
        break;
      }
      e && j && k.alternate === null && t(y, j),
        (w = i(k, w, $)),
        L === null ? (U = k) : (L.sibling = k),
        (L = k),
        (j = Q);
    }
    if ($ === _.length) return n(y, j), De && vr(y, $), U;
    if (j === null) {
      for (; $ < _.length; $++)
        (j = f(y, _[$], E)),
          j !== null &&
            ((w = i(j, w, $)), L === null ? (U = j) : (L.sibling = j), (L = j));
      return De && vr(y, $), U;
    }
    for (j = r(y, j); $ < _.length; $++)
      (Q = m(j, y, $, _[$], E)),
        Q !== null &&
          (e && Q.alternate !== null && j.delete(Q.key === null ? $ : Q.key),
          (w = i(Q, w, $)),
          L === null ? (U = Q) : (L.sibling = Q),
          (L = Q));
    return (
      e &&
        j.forEach(function (I) {
          return t(y, I);
        }),
      De && vr(y, $),
      U
    );
  }
  function g(y, w, _, E) {
    var U = Ro(_);
    if (typeof U != "function") throw Error(q(150));
    if (((_ = U.call(_)), _ == null)) throw Error(q(151));
    for (
      var L = (U = null), j = w, $ = (w = 0), Q = null, k = _.next();
      j !== null && !k.done;
      $++, k = _.next()
    ) {
      j.index > $ ? ((Q = j), (j = null)) : (Q = j.sibling);
      var I = h(y, j, k.value, E);
      if (I === null) {
        j === null && (j = Q);
        break;
      }
      e && j && I.alternate === null && t(y, j),
        (w = i(I, w, $)),
        L === null ? (U = I) : (L.sibling = I),
        (L = I),
        (j = Q);
    }
    if (k.done) return n(y, j), De && vr(y, $), U;
    if (j === null) {
      for (; !k.done; $++, k = _.next())
        (k = f(y, k.value, E)),
          k !== null &&
            ((w = i(k, w, $)), L === null ? (U = k) : (L.sibling = k), (L = k));
      return De && vr(y, $), U;
    }
    for (j = r(y, j); !k.done; $++, k = _.next())
      (k = m(j, y, $, k.value, E)),
        k !== null &&
          (e && k.alternate !== null && j.delete(k.key === null ? $ : k.key),
          (w = i(k, w, $)),
          L === null ? (U = k) : (L.sibling = k),
          (L = k));
    return (
      e &&
        j.forEach(function (D) {
          return t(y, D);
        }),
      De && vr(y, $),
      U
    );
  }
  function O(y, w, _, E) {
    if (
      (typeof _ == "object" &&
        _ !== null &&
        _.type === Vr &&
        _.key === null &&
        (_ = _.props.children),
      typeof _ == "object" && _ !== null)
    ) {
      switch (_.$$typeof) {
        case ta:
          e: {
            for (var U = _.key, L = w; L !== null; ) {
              if (L.key === U) {
                if (((U = _.type), U === Vr)) {
                  if (L.tag === 7) {
                    n(y, L.sibling),
                      (w = o(L, _.props.children)),
                      (w.return = y),
                      (y = w);
                    break e;
                  }
                } else if (
                  L.elementType === U ||
                  (typeof U == "object" &&
                    U !== null &&
                    U.$$typeof === Hn &&
                    dm(U) === L.type)
                ) {
                  n(y, L.sibling),
                    (w = o(L, _.props)),
                    (w.ref = Fo(y, L, _)),
                    (w.return = y),
                    (y = w);
                  break e;
                }
                n(y, L);
                break;
              } else t(y, L);
              L = L.sibling;
            }
            _.type === Vr
              ? ((w = xr(_.props.children, y.mode, E, _.key)),
                (w.return = y),
                (y = w))
              : ((E = Ra(_.type, _.key, _.props, null, y.mode, E)),
                (E.ref = Fo(y, w, _)),
                (E.return = y),
                (y = E));
          }
          return a(y);
        case Yr:
          e: {
            for (L = _.key; w !== null; ) {
              if (w.key === L)
                if (
                  w.tag === 4 &&
                  w.stateNode.containerInfo === _.containerInfo &&
                  w.stateNode.implementation === _.implementation
                ) {
                  n(y, w.sibling),
                    (w = o(w, _.children || [])),
                    (w.return = y),
                    (y = w);
                  break e;
                } else {
                  n(y, w);
                  break;
                }
              else t(y, w);
              w = w.sibling;
            }
            (w = Xl(_, y.mode, E)), (w.return = y), (y = w);
          }
          return a(y);
        case Hn:
          return (L = _._init), O(y, w, L(_._payload), E);
      }
      if (qo(_)) return v(y, w, _, E);
      if (Ro(_)) return g(y, w, _, E);
      fa(y, _);
    }
    return (typeof _ == "string" && _ !== "") || typeof _ == "number"
      ? ((_ = "" + _),
        w !== null && w.tag === 6
          ? (n(y, w.sibling), (w = o(w, _)), (w.return = y), (y = w))
          : (n(y, w), (w = Zl(_, y.mode, E)), (w.return = y), (y = w)),
        a(y))
      : n(y, w);
  }
  return O;
}
var fo = S1(!0),
  C1 = S1(!1),
  Wi = {},
  gn = pr(Wi),
  Pi = pr(Wi),
  Oi = pr(Wi);
function _r(e) {
  if (e === Wi) throw Error(q(174));
  return e;
}
function Sd(e, t) {
  switch ((Ee(Oi, t), Ee(Pi, e), Ee(gn, Wi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Oc(t, e));
  }
  Oe(gn), Ee(gn, t);
}
function po() {
  Oe(gn), Oe(Pi), Oe(Oi);
}
function _1(e) {
  _r(Oi.current);
  var t = _r(gn.current),
    n = Oc(t, e.type);
  t !== n && (Ee(Pi, e), Ee(gn, n));
}
function Cd(e) {
  Pi.current === e && (Oe(gn), Oe(Pi));
}
var Ae = pr(0);
function Hs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Kl = [];
function _d() {
  for (var e = 0; e < Kl.length; e++)
    Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Da = Un.ReactCurrentDispatcher,
  ql = Un.ReactCurrentBatchConfig,
  Tr = 0,
  Ne = null,
  Ke = null,
  Je = null,
  Ys = !1,
  oi = !1,
  Di = 0,
  YC = 0;
function lt() {
  throw Error(q(321));
}
function bd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!un(e[n], t[n])) return !1;
  return !0;
}
function xd(e, t, n, r, o, i) {
  if (
    ((Tr = i),
    (Ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Da.current = e === null || e.memoizedState === null ? KC : qC),
    (e = n(r, o)),
    oi)
  ) {
    i = 0;
    do {
      if (((oi = !1), (Di = 0), 25 <= i)) throw Error(q(301));
      (i += 1),
        (Je = Ke = null),
        (t.updateQueue = null),
        (Da.current = QC),
        (e = n(r, o));
    } while (oi);
  }
  if (
    ((Da.current = Vs),
    (t = Ke !== null && Ke.next !== null),
    (Tr = 0),
    (Je = Ke = Ne = null),
    (Ys = !1),
    t)
  )
    throw Error(q(300));
  return e;
}
function Ed() {
  var e = Di !== 0;
  return (Di = 0), e;
}
function cn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Je === null ? (Ne.memoizedState = Je = e) : (Je = Je.next = e), Je;
}
function qt() {
  if (Ke === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ke.next;
  var t = Je === null ? Ne.memoizedState : Je.next;
  if (t !== null) (Je = t), (Ke = e);
  else {
    if (e === null) throw Error(q(310));
    (Ke = e),
      (e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null,
      }),
      Je === null ? (Ne.memoizedState = Je = e) : (Je = Je.next = e);
  }
  return Je;
}
function ki(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ql(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(q(311));
  n.lastRenderedReducer = e;
  var r = Ke,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      u = null,
      l = i;
    do {
      var c = l.lane;
      if ((Tr & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (r = l.hasEagerState ? l.eagerState : e(r, l.action));
      else {
        var f = {
          lane: c,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (a = r)) : (u = u.next = f),
          (Ne.lanes |= c),
          (Ar |= c);
      }
      l = l.next;
    } while (l !== null && l !== i);
    u === null ? (a = r) : (u.next = s),
      un(r, t.memoizedState) || (xt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ne.lanes |= i), (Ar |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Gl(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(q(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    un(i, t.memoizedState) || (xt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function b1() {}
function x1(e, t) {
  var n = Ne,
    r = qt(),
    o = t(),
    i = !un(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (xt = !0)),
    (r = r.queue),
    Pd(O1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Je !== null && Je.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ti(9, P1.bind(null, n, r, o, t), void 0, null),
      Qe === null)
    )
      throw Error(q(349));
    (Tr & 30) !== 0 || E1(n, t, o);
  }
  return o;
}
function E1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function P1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), D1(t) && Wt(e, 1, -1);
}
function O1(e, t, n) {
  return n(function () {
    D1(t) && Wt(e, 1, -1);
  });
}
function D1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !un(e, n);
  } catch {
    return !0;
  }
}
function hm(e) {
  var t = cn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ki,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zC.bind(null, Ne, e)),
    [t.memoizedState, e]
  );
}
function Ti(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function k1() {
  return qt().memoizedState;
}
function ka(e, t, n, r) {
  var o = cn();
  (Ne.flags |= e),
    (o.memoizedState = Ti(1 | t, n, void 0, r === void 0 ? null : r));
}
function Zu(e, t, n, r) {
  var o = qt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ke !== null) {
    var a = Ke.memoizedState;
    if (((i = a.destroy), r !== null && bd(r, a.deps))) {
      o.memoizedState = Ti(t, n, i, r);
      return;
    }
  }
  (Ne.flags |= e), (o.memoizedState = Ti(1 | t, n, i, r));
}
function mm(e, t) {
  return ka(8390656, 8, e, t);
}
function Pd(e, t) {
  return Zu(2048, 8, e, t);
}
function T1(e, t) {
  return Zu(4, 2, e, t);
}
function A1(e, t) {
  return Zu(4, 4, e, t);
}
function R1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function N1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Zu(4, 4, R1.bind(null, t, e), n)
  );
}
function Od() {}
function M1(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function I1(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function U1(e, t, n) {
  return (Tr & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (xt = !0)), (e.memoizedState = n))
    : (un(n, t) || ((n = Hg()), (Ne.lanes |= n), (Ar |= n), (e.baseState = !0)),
      t);
}
function VC(e, t) {
  var n = Se;
  (Se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (Se = n), (ql.transition = r);
  }
}
function L1() {
  return qt().memoizedState;
}
function WC(e, t, n) {
  var r = rr(e);
  (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
    F1(e)
      ? B1(t, n)
      : ($1(e, t, n), (n = mt()), (e = Wt(e, r, n)), e !== null && j1(e, t, r));
}
function zC(e, t, n) {
  var r = rr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (F1(e)) B1(t, o);
  else {
    $1(e, t, o);
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), un(s, a))) return;
      } catch {
      } finally {
      }
    (n = mt()), (e = Wt(e, r, n)), e !== null && j1(e, t, r);
  }
}
function F1(e) {
  var t = e.alternate;
  return e === Ne || (t !== null && t === Ne);
}
function B1(e, t) {
  oi = Ys = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function $1(e, t, n) {
  o0(e)
    ? ((e = t.interleaved),
      e === null
        ? ((n.next = n), rn === null ? (rn = [t]) : rn.push(t))
        : ((n.next = e.next), (e.next = n)),
      (t.interleaved = n))
    : ((e = t.pending),
      e === null ? (n.next = n) : ((n.next = e.next), (e.next = n)),
      (t.pending = n));
}
function j1(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), id(e, n);
  }
}
var Vs = {
    readContext: Kt,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  KC = {
    readContext: Kt,
    useCallback: function (e, t) {
      return (cn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Kt,
    useEffect: mm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ka(4194308, 4, R1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ka(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ka(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = cn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = cn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = WC.bind(null, Ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = cn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hm,
    useDebugValue: Od,
    useDeferredValue: function (e) {
      return (cn().memoizedState = e);
    },
    useTransition: function () {
      var e = hm(!1),
        t = e[0];
      return (e = VC.bind(null, e[1])), (cn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ne,
        o = cn();
      if (De) {
        if (n === void 0) throw Error(q(407));
        n = n();
      } else {
        if (((n = t()), Qe === null)) throw Error(q(349));
        (Tr & 30) !== 0 || E1(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        mm(O1.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ti(9, P1.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = cn(),
        t = Qe.identifierPrefix;
      if (De) {
        var n = On,
          r = Pn;
        (n = (r & ~(1 << (32 - on(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Di++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = YC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qC = {
    readContext: Kt,
    useCallback: M1,
    useContext: Kt,
    useEffect: Pd,
    useImperativeHandle: N1,
    useInsertionEffect: T1,
    useLayoutEffect: A1,
    useMemo: I1,
    useReducer: Ql,
    useRef: k1,
    useState: function () {
      return Ql(ki);
    },
    useDebugValue: Od,
    useDeferredValue: function (e) {
      var t = qt();
      return U1(t, Ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(ki)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: b1,
    useSyncExternalStore: x1,
    useId: L1,
    unstable_isNewReconciler: !1,
  },
  QC = {
    readContext: Kt,
    useCallback: M1,
    useContext: Kt,
    useEffect: Pd,
    useImperativeHandle: N1,
    useInsertionEffect: T1,
    useLayoutEffect: A1,
    useMemo: I1,
    useReducer: Gl,
    useRef: k1,
    useState: function () {
      return Gl(ki);
    },
    useDebugValue: Od,
    useDeferredValue: function (e) {
      var t = qt();
      return Ke === null ? (t.memoizedState = e) : U1(t, Ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Gl(ki)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: b1,
    useSyncExternalStore: x1,
    useId: L1,
    unstable_isNewReconciler: !1,
  };
function Dd(e, t) {
  try {
    var n = "",
      r = t;
    do (n += bS(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o };
}
function Gc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var GC = typeof WeakMap == "function" ? WeakMap : Map;
function H1(e, t, n) {
  (n = kn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zs || ((zs = !0), (af = r)), Gc(e, t);
    }),
    n
  );
}
function Y1(e, t, n) {
  (n = kn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Gc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Gc(e, t),
          typeof r != "function" &&
            (nr === null ? (nr = new Set([this])) : nr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function vm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new GC();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = l2.bind(null, e, t, n)), t.then(e, e));
}
function ym(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gm(e, t, n, r, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = kn(-1, 1)), (t.tag = 2), tr(n, t))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var V1, Jc, W1, z1;
V1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Jc = function () {};
W1 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), _r(gn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = bc(e, o)), (r = bc(e, r)), (i = []);
        break;
      case "select":
        (o = Me({}, o, { value: void 0 })),
          (r = Me({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Pc(e, o)), (r = Pc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ms);
    }
    Dc(n, r);
    var a;
    n = null;
    for (l in o)
      if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
        if (l === "style") {
          var s = o[l];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          l !== "dangerouslySetInnerHTML" &&
            l !== "children" &&
            l !== "suppressContentEditableWarning" &&
            l !== "suppressHydrationWarning" &&
            l !== "autoFocus" &&
            (mi.hasOwnProperty(l)
              ? i || (i = [])
              : (i = i || []).push(l, null));
    for (l in r) {
      var u = r[l];
      if (
        ((s = o != null ? o[l] : void 0),
        r.hasOwnProperty(l) && u !== s && (u != null || s != null))
      )
        if (l === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                s[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (i || (i = []), i.push(l, n)), (n = u);
        else
          l === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(l, u))
            : l === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(l, "" + u)
            : l !== "suppressContentEditableWarning" &&
              l !== "suppressHydrationWarning" &&
              (mi.hasOwnProperty(l)
                ? (u != null && l === "onScroll" && Pe("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(l, u));
    }
    n && (i = i || []).push("style", n);
    var l = i;
    (t.updateQueue = l) && (t.flags |= 4);
  }
};
z1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bo(e, t) {
  if (!De)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function JC(e, t, n) {
  var r = t.pendingProps;
  switch ((gd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ct(t), null;
    case 1:
      return Pt(t.type) && Is(), ct(t), null;
    case 3:
      return (
        (r = t.stateNode),
        po(),
        Oe(Et),
        Oe(pt),
        _d(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), nn !== null && (lf(nn), (nn = null)))),
        Jc(e, t),
        ct(t),
        null
      );
    case 5:
      Cd(t);
      var o = _r(Oi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        W1(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(q(166));
          return ct(t), null;
        }
        if (((e = _r(gn.current)), Lo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[fn] = t), (r[Ei] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Pe("cancel", r), Pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Pe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Go.length; o++) Pe(Go[o], r);
              break;
            case "source":
              Pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Pe("error", r), Pe("load", r);
              break;
            case "details":
              Pe("toggle", r);
              break;
            case "input":
              Rh(r, i), Pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Pe("invalid", r);
              break;
            case "textarea":
              Mh(r, i), Pe("invalid", r);
          }
          Dc(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ca(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ca(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : mi.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  Pe("scroll", r);
            }
          switch (n) {
            case "input":
              na(r), Nh(r, i, !0);
              break;
            case "textarea":
              na(r), Ih(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ms);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Og(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[fn] = t),
            (e[Ei] = r),
            V1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = kc(n, r)), n)) {
              case "dialog":
                Pe("cancel", e), Pe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Go.length; o++) Pe(Go[o], e);
                o = r;
                break;
              case "source":
                Pe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Pe("error", e), Pe("load", e), (o = r);
                break;
              case "details":
                Pe("toggle", e), (o = r);
                break;
              case "input":
                Rh(e, r), (o = bc(e, r)), Pe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Me({}, r, { value: void 0 })),
                  Pe("invalid", e);
                break;
              case "textarea":
                Mh(e, r), (o = Pc(e, r)), Pe("invalid", e);
                break;
              default:
                o = r;
            }
            Dc(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? Tg(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Dg(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && vi(e, u)
                    : typeof u == "number" && vi(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (mi.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && Pe("scroll", e)
                      : u != null && Xp(e, i, u, a));
              }
            switch (n) {
              case "input":
                na(e), Nh(e, r, !1);
                break;
              case "textarea":
                na(e), Ih(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? to(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      to(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ms);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ct(t), null;
    case 6:
      if (e && t.stateNode != null) z1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(q(166));
        if (((n = _r(Oi.current)), _r(gn.current), Lo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[fn] = t),
            (i = r.nodeValue !== n) && ((e = Rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ca(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ca(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[fn] = t),
            (t.stateNode = r);
      }
      return ct(t), null;
    case 13:
      if (
        (Oe(Ae),
        (r = t.memoizedState),
        De && bt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
      ) {
        for (r = bt; r; ) r = En(r.nextSibling);
        return co(), (t.flags |= 98560), t;
      }
      if (r !== null && r.dehydrated !== null) {
        if (((r = Lo(t)), e === null)) {
          if (!r) throw Error(q(318));
          if (
            ((r = t.memoizedState), (r = r !== null ? r.dehydrated : null), !r)
          )
            throw Error(q(317));
          r[fn] = t;
        } else
          co(),
            (t.flags & 128) === 0 && (t.memoizedState = null),
            (t.flags |= 4);
        return ct(t), null;
      }
      return (
        nn !== null && (lf(nn), (nn = null)),
        (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null ? Lo(t) : (n = e.memoizedState !== null),
            r !== n &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ae.current & 1) !== 0
                  ? qe === 0 && (qe = 3)
                  : Md())),
            t.updateQueue !== null && (t.flags |= 4),
            ct(t),
            null)
      );
    case 4:
      return (
        po(), Jc(e, t), e === null && bi(t.stateNode.containerInfo), ct(t), null
      );
    case 10:
      return md(t.type._context), ct(t), null;
    case 17:
      return Pt(t.type) && Is(), ct(t), null;
    case 19:
      if ((Oe(Ae), (i = t.memoizedState), i === null)) return ct(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Bo(i, !1);
        else {
          if (qe !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((a = Hs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Bo(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ee(Ae, (Ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Fe() > ho &&
            ((t.flags |= 128), (r = !0), Bo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Hs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !De)
            )
              return ct(t), null;
          } else
            2 * Fe() - i.renderingStartTime > ho &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Fe()),
          (t.sibling = null),
          (n = Ae.current),
          Ee(Ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (ct(t), null);
    case 22:
    case 23:
      return (
        Nd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (Tt & 1073741824) !== 0 &&
            (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(q(156, t.tag));
}
var ZC = Un.ReactCurrentOwner,
  xt = !1;
function dt(e, t, n, r) {
  t.child = e === null ? C1(t, null, n, r) : fo(t, e.child, n, r);
}
function wm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    io(t, o),
    (r = xd(e, t, n, r, i, o)),
    (n = Ed()),
    e !== null && !xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nn(e, t, o))
      : (De && n && yd(t), (t.flags |= 1), dt(e, t, r, o), t.child)
  );
}
function Sm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Id(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), K1(e, t, i, r, o))
      : ((e = Ra(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & o) === 0)) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : _i), n(a, r) && e.ref === t.ref)
    )
      return Nn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = lr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function K1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (_i(i, r) && e.ref === t.ref)
      if (((xt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (xt = !0);
      else return (t.lanes = e.lanes), Nn(e, t, o);
  }
  return Zc(e, t, n, r, o);
}
function q1(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ee(eo, Tt),
        (Tt |= n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ee(eo, Tt),
        (Tt |= r);
    else
      return (
        (e = i !== null ? i.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null,
        }),
        (t.updateQueue = null),
        Ee(eo, Tt),
        (Tt |= e),
        null
      );
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ee(eo, Tt),
      (Tt |= r);
  return dt(e, t, o, n), t.child;
}
function Q1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zc(e, t, n, r, o) {
  var i = Pt(n) ? Dr : pt.current;
  return (
    (i = lo(t, i)),
    io(t, o),
    (n = xd(e, t, n, r, i, o)),
    (r = Ed()),
    e !== null && !xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nn(e, t, o))
      : (De && r && yd(t), (t.flags |= 1), dt(e, t, n, o), t.child)
  );
}
function Cm(e, t, n, r, o) {
  if (Pt(n)) {
    var i = !0;
    Us(t);
  } else i = !1;
  if ((io(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      y1(t, n, r),
      Kc(t, n, r, o),
      (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var u = a.context,
      l = n.contextType;
    typeof l == "object" && l !== null
      ? (l = Kt(l))
      : ((l = Pt(n) ? Dr : pt.current), (l = lo(t, l)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || u !== l) && cm(t, a, r, l)),
      (Yn = !1);
    var h = t.memoizedState;
    (a.state = h),
      Bs(t, r, a, o),
      (u = t.memoizedState),
      s !== r || h !== u || Et.current || Yn
        ? (typeof c == "function" && (zc(t, n, c, r), (u = t.memoizedState)),
          (s = Yn || lm(t, n, s, r, h, u, l))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = l),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      m1(e, t),
      (s = t.memoizedProps),
      (l = t.type === t.elementType ? s : en(t.type, s)),
      (a.props = l),
      (f = t.pendingProps),
      (h = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Kt(u))
        : ((u = Pt(n) ? Dr : pt.current), (u = lo(t, u)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== f || h !== u) && cm(t, a, r, u)),
      (Yn = !1),
      (h = t.memoizedState),
      (a.state = h),
      Bs(t, r, a, o);
    var v = t.memoizedState;
    s !== f || h !== v || Et.current || Yn
      ? (typeof m == "function" && (zc(t, n, m, r), (v = t.memoizedState)),
        (l = Yn || lm(t, n, l, r, h, v, u) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = u),
        (r = l))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xc(e, t, n, r, i, o);
}
function Xc(e, t, n, r, o, i) {
  Q1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && am(t, n, !1), Nn(e, t, i);
  (r = t.stateNode), (ZC.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = fo(t, e.child, null, i)), (t.child = fo(t, null, s, i)))
      : dt(e, t, s, i),
    (t.memoizedState = r.state),
    o && am(t, n, !0),
    t.child
  );
}
function G1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? im(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && im(e, t.context, !1),
    Sd(e, t.containerInfo);
}
function _m(e, t, n, r, o) {
  return co(), wd(o), (t.flags |= 256), dt(e, t, n, r), t.child;
}
var pa = { dehydrated: null, treeContext: null, retryLane: 0 };
function da(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bm(e, t) {
  return {
    baseLanes: e.baseLanes | t,
    cachePool: null,
    transitions: e.transitions,
  };
}
function J1(e, t, n) {
  var r = t.pendingProps,
    o = Ae.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ee(Ae, o & 1),
    e === null)
  )
    return (
      Qc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Qs(o, r, 0, null)),
              (e = xr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = da(n)),
              (t.memoizedState = pa),
              e)
            : ef(t, o))
    );
  if (((o = e.memoizedState), o !== null)) {
    if (((s = o.dehydrated), s !== null)) {
      if (a)
        return t.flags & 256
          ? ((t.flags &= -257), ha(e, t, n, Error(q(422))))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (o = t.mode),
            (r = Qs({ mode: "visible", children: r.children }, o, 0, null)),
            (i = xr(i, o, n, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && fo(t, e.child, null, n),
            (t.child.memoizedState = da(n)),
            (t.memoizedState = pa),
            i);
      if ((t.mode & 1) === 0) t = ha(e, t, n, null);
      else if (s.data === "$!") t = ha(e, t, n, Error(q(419)));
      else if (((r = (n & e.childLanes) !== 0), xt || r)) {
        if (((r = Qe), r !== null)) {
          switch (n & -n) {
            case 4:
              i = 2;
              break;
            case 16:
              i = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              i = 32;
              break;
            case 536870912:
              i = 268435456;
              break;
            default:
              i = 0;
          }
          (r = (i & (r.suspendedLanes | n)) !== 0 ? 0 : i),
            r !== 0 && r !== o.retryLane && ((o.retryLane = r), Wt(e, r, -1));
        }
        Md(), (t = ha(e, t, n, Error(q(421))));
      } else
        s.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = c2.bind(null, e)),
            (s._reactRetry = t),
            (t = null))
          : ((n = o.treeContext),
            (bt = En(s.nextSibling)),
            (Rt = t),
            (De = !0),
            (nn = null),
            n !== null &&
              ((Bt[$t++] = Pn),
              (Bt[$t++] = On),
              (Bt[$t++] = kr),
              (Pn = n.id),
              (On = n.overflow),
              (kr = t)),
            (t = ef(t, t.pendingProps.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? ((r = Em(e, t, r.children, r.fallback, n)),
        (i = t.child),
        (o = e.child.memoizedState),
        (i.memoizedState = o === null ? da(n) : bm(o, n)),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = pa),
        r)
      : ((n = xm(e, t, r.children, n)), (t.memoizedState = null), n);
  }
  return i
    ? ((r = Em(e, t, r.children, r.fallback, n)),
      (i = t.child),
      (o = e.child.memoizedState),
      (i.memoizedState = o === null ? da(n) : bm(o, n)),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = pa),
      r)
    : ((n = xm(e, t, r.children, n)), (t.memoizedState = null), n);
}
function ef(e, t) {
  return (
    (t = Qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function xm(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = lr(o, { mode: "visible", children: n })),
    (t.mode & 1) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n)
  );
}
function Em(e, t, n, r, o) {
  var i = t.mode;
  e = e.child;
  var a = e.sibling,
    s = { mode: "hidden", children: n };
  return (
    (i & 1) === 0 && t.child !== e
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = s),
        (t.deletions = null))
      : ((n = lr(e, s)), (n.subtreeFlags = e.subtreeFlags & 14680064)),
    a !== null ? (r = lr(a, r)) : ((r = xr(r, i, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function ha(e, t, n, r) {
  return (
    r !== null && wd(r),
    fo(t, e.child, null, n),
    (e = ef(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wc(e.return, t, n);
}
function Jl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Z1(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((dt(e, t, r.children, n), (r = Ae.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pm(e, n, t);
        else if (e.tag === 19) Pm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ee(Ae, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Hs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Jl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Hs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Jl(t, !0, n, null, i);
        break;
      case "together":
        Jl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Nn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ar |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(q(153));
  if (t.child !== null) {
    for (
      e = t.child, n = lr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = lr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function XC(e, t, n) {
  switch (t.tag) {
    case 3:
      G1(t), co();
      break;
    case 5:
      _1(t);
      break;
    case 1:
      Pt(t.type) && Us(t);
      break;
    case 4:
      Sd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ee(Ls, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ee(Ae, Ae.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? J1(e, t, n)
          : (Ee(Ae, Ae.current & 1),
            (e = Nn(e, t, n)),
            e !== null ? e.sibling : null);
      Ee(Ae, Ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Z1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ee(Ae, Ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), q1(e, t, n);
  }
  return Nn(e, t, n);
}
function e2(e, t) {
  switch ((gd(t), t.tag)) {
    case 1:
      return (
        Pt(t.type) && Is(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        po(),
        Oe(Et),
        Oe(pt),
        _d(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Cd(t), null;
    case 13:
      if (
        (Oe(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(q(340));
        co();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Oe(Ae), null;
    case 4:
      return po(), null;
    case 10:
      return md(t.type._context), null;
    case 22:
    case 23:
      return Nd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ma = !1,
  ft = !1,
  t2 = typeof WeakSet == "function" ? WeakSet : Set,
  X = null;
function Xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ue(e, t, r);
      }
    else n.current = null;
}
function tf(e, t, n) {
  try {
    n();
  } catch (r) {
    Ue(e, t, r);
  }
}
var Om = !1;
function n2(e, t) {
  if (((Bc = As), (e = o1()), pd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            u = -1,
            l = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = a + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (u = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (h = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++l === o && (s = a),
                h === i && ++c === r && (u = a),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = m;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($c = { focusedElem: e, selectionRange: n }, As = !1, X = t; X !== null; )
    if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (X = e);
    else
      for (; X !== null; ) {
        t = X;
        try {
          var v = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    O = v.memoizedState,
                    y = t.stateNode,
                    w = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : en(t.type, g),
                      O
                    );
                  y.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var _ = t.stateNode.containerInfo;
                if (_.nodeType === 1) _.textContent = "";
                else if (_.nodeType === 9) {
                  var E = _.body;
                  E != null && (E.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(q(163));
            }
        } catch (U) {
          Ue(t, t.return, U);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (X = e);
          break;
        }
        X = t.return;
      }
  return (v = Om), (Om = !1), v;
}
function ii(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && tf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function nf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function X1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), X1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[fn], delete t[Ei], delete t[Yc], delete t[BC], delete t[$C])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function e0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Dm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || e0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function rf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ms));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rf(e, t, n), e = e.sibling; e !== null; ) rf(e, t, n), (e = e.sibling);
}
function of(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (of(e, t, n), e = e.sibling; e !== null; ) of(e, t, n), (e = e.sibling);
}
var ot = null,
  tn = !1;
function Fn(e, t, n) {
  for (n = n.child; n !== null; ) t0(e, t, n), (n = n.sibling);
}
function t0(e, t, n) {
  if (yn && typeof yn.onCommitFiberUnmount == "function")
    try {
      yn.onCommitFiberUnmount(Wu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ft || Xr(n, t);
    case 6:
      var r = ot,
        o = tn;
      (ot = null),
        Fn(e, t, n),
        (ot = r),
        (tn = o),
        ot !== null &&
          (tn
            ? ((e = ot),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ot.removeChild(n.stateNode));
      break;
    case 18:
      ot !== null &&
        (tn
          ? ((e = ot),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wl(e.parentNode, n)
              : e.nodeType === 1 && Wl(e, n),
            Si(e))
          : Wl(ot, n.stateNode));
      break;
    case 4:
      (r = ot),
        (o = tn),
        (ot = n.stateNode.containerInfo),
        (tn = !0),
        Fn(e, t, n),
        (ot = r),
        (tn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ft &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && tf(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Fn(e, t, n);
      break;
    case 1:
      if (
        !ft &&
        (Xr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Ue(n, t, s);
        }
      Fn(e, t, n);
      break;
    case 21:
      Fn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ft = (r = ft) || n.memoizedState !== null), Fn(e, t, n), (ft = r))
        : Fn(e, t, n);
      break;
    default:
      Fn(e, t, n);
  }
}
function km(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new t2()),
      t.forEach(function (r) {
        var o = f2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ot = s.stateNode), (tn = !1);
              break e;
            case 3:
              (ot = s.stateNode.containerInfo), (tn = !0);
              break e;
            case 4:
              (ot = s.stateNode.containerInfo), (tn = !0);
              break e;
          }
          s = s.return;
        }
        if (ot === null) throw Error(q(160));
        t0(i, a, o), (ot = null), (tn = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (l) {
        Ue(o, t, l);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) n0(t, e), (t = t.sibling);
}
function n0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xt(t, e), ln(e), r & 4)) {
        try {
          ii(3, e, e.return), Xu(3, e);
        } catch (v) {
          Ue(e, e.return, v);
        }
        try {
          ii(5, e, e.return);
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      break;
    case 1:
      Xt(t, e), ln(e), r & 512 && n !== null && Xr(n, n.return);
      break;
    case 5:
      if (
        (Xt(t, e),
        ln(e),
        r & 512 && n !== null && Xr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          vi(o, "");
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Eg(o, i),
              kc(s, a);
            var l = kc(s, i);
            for (a = 0; a < u.length; a += 2) {
              var c = u[a],
                f = u[a + 1];
              c === "style"
                ? Tg(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Dg(o, f)
                : c === "children"
                ? vi(o, f)
                : Xp(o, c, f, l);
            }
            switch (s) {
              case "input":
                xc(o, i);
                break;
              case "textarea":
                Pg(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? to(o, !!i.multiple, m, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? to(o, !!i.multiple, i.defaultValue, !0)
                      : to(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ei] = i;
          } catch (v) {
            Ue(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Xt(t, e), ln(e), r & 4)) {
        if (e.stateNode === null) throw Error(q(162));
        (l = e.stateNode), (c = e.memoizedProps);
        try {
          l.nodeValue = c;
        } catch (v) {
          Ue(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Xt(t, e), ln(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Si(t.containerInfo);
        } catch (v) {
          Ue(e, e.return, v);
        }
      break;
    case 4:
      Xt(t, e), ln(e);
      break;
    case 13:
      Xt(t, e),
        ln(e),
        (l = e.child),
        l.flags & 8192 &&
          l.memoizedState !== null &&
          (l.alternate === null || l.alternate.memoizedState === null) &&
          (Ad = Fe()),
        r & 4 && km(e);
      break;
    case 22:
      if (
        ((l = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ft = (c = ft) || l), Xt(t, e), (ft = c)) : Xt(t, e),
        ln(e),
        r & 8192)
      ) {
        c = e.memoizedState !== null;
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (o = h.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = kg("display", a)));
              } catch (v) {
                Ue(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (v) {
                Ue(e, e.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
        if (c && !l && (e.mode & 1) !== 0)
          for (X = e, e = e.child; e !== null; ) {
            for (l = X = e; X !== null; ) {
              switch (((c = X), (f = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ii(4, c, c.return);
                  break;
                case 1:
                  if (
                    (Xr(c, c.return),
                    (i = c.stateNode),
                    typeof i.componentWillUnmount == "function")
                  ) {
                    (h = c), (m = c.return);
                    try {
                      (o = h),
                        (i.props = o.memoizedProps),
                        (i.state = o.memoizedState),
                        i.componentWillUnmount();
                    } catch (v) {
                      Ue(h, m, v);
                    }
                  }
                  break;
                case 5:
                  Xr(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Am(l);
                    continue;
                  }
              }
              f !== null ? ((f.return = c), (X = f)) : Am(l);
            }
            e = e.sibling;
          }
      }
      break;
    case 19:
      Xt(t, e), ln(e), r & 4 && km(e);
      break;
    case 21:
      break;
    default:
      Xt(t, e), ln(e);
  }
}
function ln(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (e0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(q(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (vi(o, ""), (r.flags &= -33));
          var i = Dm(e);
          of(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Dm(e);
          rf(e, s, a);
          break;
        default:
          throw Error(q(161));
      }
    } catch (u) {
      Ue(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function r2(e, t, n) {
  (X = e), r0(e);
}
function r0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
    var o = X,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ma;
      if (!a) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || ft;
        s = ma;
        var l = ft;
        if (((ma = a), (ft = u) && !l))
          for (X = o; X !== null; )
            (a = X),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Rm(o)
                : u !== null
                ? ((u.return = a), (X = u))
                : Rm(o);
        for (; i !== null; ) (X = i), r0(i), (i = i.sibling);
        (X = o), (ma = s), (ft = l);
      }
      Tm(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = o), (X = i))
        : Tm(e);
  }
}
function Tm(e) {
  for (; X !== null; ) {
    var t = X;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ft || Xu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ft)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : en(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && um(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                um(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var l = t.alternate;
                if (l !== null) {
                  var c = l.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Si(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(q(163));
          }
        ft || (t.flags & 512 && nf(t));
      } catch (h) {
        Ue(t, t.return, h);
      }
    }
    if (t === e) {
      X = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function Am(e) {
  for (; X !== null; ) {
    var t = X;
    if (t === e) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function Rm(e) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xu(4, t);
          } catch (u) {
            Ue(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ue(t, o, u);
            }
          }
          var i = t.return;
          try {
            nf(t);
          } catch (u) {
            Ue(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            nf(t);
          } catch (u) {
            Ue(t, a, u);
          }
      }
    } catch (u) {
      Ue(t, t.return, u);
    }
    if (t === e) {
      X = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (X = s);
      break;
    }
    X = t.return;
  }
}
var o2 = Math.ceil,
  Ws = Un.ReactCurrentDispatcher,
  kd = Un.ReactCurrentOwner,
  Vt = Un.ReactCurrentBatchConfig,
  de = 0,
  Qe = null,
  He = null,
  it = 0,
  Tt = 0,
  eo = pr(0),
  qe = 0,
  Ai = null,
  Ar = 0,
  el = 0,
  Td = 0,
  ai = null,
  Ct = null,
  Ad = 0,
  ho = 1 / 0,
  _n = null,
  zs = !1,
  af = null,
  nr = null,
  va = !1,
  qn = null,
  Ks = 0,
  si = 0,
  sf = null,
  Ta = -1,
  Aa = 0;
function mt() {
  return (de & 6) !== 0 ? Fe() : Ta !== -1 ? Ta : (Ta = Fe());
}
function rr(e) {
  return (e.mode & 1) === 0
    ? 1
    : (de & 2) !== 0 && it !== 0
    ? it & -it
    : HC.transition !== null
    ? (Aa === 0 && (Aa = Hg()), Aa)
    : ((e = Se),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qg(e.type))),
      e);
}
function Wt(e, t, n) {
  if (50 < si) throw ((si = 0), (sf = null), Error(q(185)));
  var r = tl(e, t);
  return r === null
    ? null
    : (Hi(r, t, n),
      ((de & 2) === 0 || r !== Qe) &&
        (r === Qe && ((de & 2) === 0 && (el |= t), qe === 4 && zn(r, it)),
        Ot(r, n),
        t === 1 &&
          de === 0 &&
          (e.mode & 1) === 0 &&
          ((ho = Fe() + 500), Gu && dr())),
      r);
}
function tl(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function o0(e) {
  return (Qe !== null || rn !== null) && (e.mode & 1) !== 0 && (de & 2) === 0;
}
function Ot(e, t) {
  var n = e.callbackNode;
  HS(e, t);
  var r = Ts(e, e === Qe ? it : 0);
  if (r === 0)
    n !== null && Fh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fh(n), t === 1))
      e.tag === 0 ? jC(Nm.bind(null, e)) : h1(Nm.bind(null, e)),
        LC(function () {
          de === 0 && dr();
        }),
        (n = null);
    else {
      switch (Yg(r)) {
        case 1:
          n = od;
          break;
        case 4:
          n = $g;
          break;
        case 16:
          n = ks;
          break;
        case 536870912:
          n = jg;
          break;
        default:
          n = ks;
      }
      n = p0(n, i0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function i0(e, t) {
  if (((Ta = -1), (Aa = 0), (de & 6) !== 0)) throw Error(q(327));
  var n = e.callbackNode;
  if (ao() && e.callbackNode !== n) return null;
  var r = Ts(e, e === Qe ? it : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = qs(e, r);
  else {
    t = r;
    var o = de;
    de |= 2;
    var i = s0();
    (Qe !== e || it !== t) && ((_n = null), (ho = Fe() + 500), br(e, t));
    do
      try {
        s2();
        break;
      } catch (s) {
        a0(e, s);
      }
    while (1);
    hd(),
      (Ws.current = i),
      (de = o),
      He !== null ? (t = 0) : ((Qe = null), (it = 0), (t = qe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Mc(e)), o !== 0 && ((r = o), (t = uf(e, o)))), t === 1)
    )
      throw ((n = Ai), br(e, 0), zn(e, r), Ot(e, Fe()), n);
    if (t === 6) zn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        (r & 30) === 0 &&
          !i2(o) &&
          ((t = qs(e, r)),
          t === 2 && ((i = Mc(e)), i !== 0 && ((r = i), (t = uf(e, i)))),
          t === 1))
      )
        throw ((n = Ai), br(e, 0), zn(e, r), Ot(e, Fe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(q(345));
        case 2:
          yr(e, Ct, _n);
          break;
        case 3:
          if (
            (zn(e, r), (r & 130023424) === r && ((t = Ad + 500 - Fe()), 10 < t))
          ) {
            if (Ts(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              mt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Hc(yr.bind(null, e, Ct, _n), t);
            break;
          }
          yr(e, Ct, _n);
          break;
        case 4:
          if ((zn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - on(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * o2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hc(yr.bind(null, e, Ct, _n), r);
            break;
          }
          yr(e, Ct, _n);
          break;
        case 5:
          yr(e, Ct, _n);
          break;
        default:
          throw Error(q(329));
      }
    }
  }
  return Ot(e, Fe()), e.callbackNode === n ? i0.bind(null, e) : null;
}
function uf(e, t) {
  var n = ai;
  return (
    e.current.memoizedState.isDehydrated && (br(e, t).flags |= 256),
    (e = qs(e, t)),
    e !== 2 && ((t = Ct), (Ct = n), t !== null && lf(t)),
    e
  );
}
function lf(e) {
  Ct === null ? (Ct = e) : Ct.push.apply(Ct, e);
}
function i2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!un(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function zn(e, t) {
  for (
    t &= ~Td,
      t &= ~el,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - on(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Nm(e) {
  if ((de & 6) !== 0) throw Error(q(327));
  ao();
  var t = Ts(e, 0);
  if ((t & 1) === 0) return Ot(e, Fe()), null;
  var n = qs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mc(e);
    r !== 0 && ((t = r), (n = uf(e, r)));
  }
  if (n === 1) throw ((n = Ai), br(e, 0), zn(e, t), Ot(e, Fe()), n);
  if (n === 6) throw Error(q(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yr(e, Ct, _n),
    Ot(e, Fe()),
    null
  );
}
function Rd(e, t) {
  var n = de;
  de |= 1;
  try {
    return e(t);
  } finally {
    (de = n), de === 0 && ((ho = Fe() + 500), Gu && dr());
  }
}
function Rr(e) {
  qn !== null && qn.tag === 0 && (de & 6) === 0 && ao();
  var t = de;
  de |= 1;
  var n = Vt.transition,
    r = Se;
  try {
    if (((Vt.transition = null), (Se = 1), e)) return e();
  } finally {
    (Se = r), (Vt.transition = n), (de = t), (de & 6) === 0 && dr();
  }
}
function Nd() {
  (Tt = eo.current), Oe(eo);
}
function br(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), UC(n)), He !== null))
    for (n = He.return; n !== null; ) {
      var r = n;
      switch ((gd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Is();
          break;
        case 3:
          po(), Oe(Et), Oe(pt), _d();
          break;
        case 5:
          Cd(r);
          break;
        case 4:
          po();
          break;
        case 13:
          Oe(Ae);
          break;
        case 19:
          Oe(Ae);
          break;
        case 10:
          md(r.type._context);
          break;
        case 22:
        case 23:
          Nd();
      }
      n = n.return;
    }
  if (
    ((Qe = e),
    (He = e = lr(e.current, null)),
    (it = Tt = t),
    (qe = 0),
    (Ai = null),
    (Td = el = Ar = 0),
    (Ct = ai = null),
    rn !== null)
  ) {
    for (t = 0; t < rn.length; t++)
      if (((n = rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    rn = null;
  }
  return e;
}
function a0(e, t) {
  do {
    var n = He;
    try {
      if ((hd(), (Da.current = Vs), Ys)) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ys = !1;
      }
      if (
        ((Tr = 0),
        (Je = Ke = Ne = null),
        (oi = !1),
        (Di = 0),
        (kd.current = null),
        n === null || n.return === null)
      ) {
        (qe = 1), (Ai = t), (He = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          u = t;
        if (
          ((t = it),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var l = u,
            c = s,
            f = c.tag;
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = ym(a);
          if (m !== null) {
            (m.flags &= -257),
              gm(m, a, s, i, t),
              m.mode & 1 && vm(i, l, t),
              (t = m),
              (u = l);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else v.add(u);
            break e;
          } else {
            if ((t & 1) === 0) {
              vm(i, l, t), Md();
              break e;
            }
            u = Error(q(426));
          }
        } else if (De && s.mode & 1) {
          var O = ym(a);
          if (O !== null) {
            (O.flags & 65536) === 0 && (O.flags |= 256),
              gm(O, a, s, i, t),
              wd(u);
            break e;
          }
        }
        (i = u),
          qe !== 4 && (qe = 2),
          ai === null ? (ai = [i]) : ai.push(i),
          (u = Dd(u, s)),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var y = H1(s, u, t);
              sm(s, y);
              break e;
            case 1:
              i = u;
              var w = s.type,
                _ = s.stateNode;
              if (
                (s.flags & 128) === 0 &&
                (typeof w.getDerivedStateFromError == "function" ||
                  (_ !== null &&
                    typeof _.componentDidCatch == "function" &&
                    (nr === null || !nr.has(_))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var E = Y1(s, i, t);
                sm(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      l0(n);
    } catch (U) {
      (t = U), He === n && n !== null && (He = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function s0() {
  var e = Ws.current;
  return (Ws.current = Vs), e === null ? Vs : e;
}
function Md() {
  (qe === 0 || qe === 3 || qe === 2) && (qe = 4),
    Qe === null ||
      ((Ar & 268435455) === 0 && (el & 268435455) === 0) ||
      zn(Qe, it);
}
function qs(e, t) {
  var n = de;
  de |= 2;
  var r = s0();
  (Qe !== e || it !== t) && ((_n = null), br(e, t));
  do
    try {
      a2();
      break;
    } catch (o) {
      a0(e, o);
    }
  while (1);
  if ((hd(), (de = n), (Ws.current = r), He !== null)) throw Error(q(261));
  return (Qe = null), (it = 0), qe;
}
function a2() {
  for (; He !== null; ) u0(He);
}
function s2() {
  for (; He !== null && !NS(); ) u0(He);
}
function u0(e) {
  var t = f0(e.alternate, e, Tt);
  (e.memoizedProps = e.pendingProps),
    t === null ? l0(e) : (He = t),
    (kd.current = null);
}
function l0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = JC(n, t, Tt)), n !== null)) {
        He = n;
        return;
      }
    } else {
      if (((n = e2(n, t)), n !== null)) {
        (n.flags &= 32767), (He = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (qe = 6), (He = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      He = t;
      return;
    }
    He = t = e;
  } while (t !== null);
  qe === 0 && (qe = 5);
}
function yr(e, t, n) {
  var r = Se,
    o = Vt.transition;
  try {
    (Vt.transition = null), (Se = 1), u2(e, t, n, r);
  } finally {
    (Vt.transition = o), (Se = r);
  }
  return null;
}
function u2(e, t, n, r) {
  do ao();
  while (qn !== null);
  if ((de & 6) !== 0) throw Error(q(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(q(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (YS(e, i),
    e === Qe && ((He = Qe = null), (it = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      va ||
      ((va = !0),
      p0(ks, function () {
        return ao(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Vt.transition), (Vt.transition = null);
    var a = Se;
    Se = 1;
    var s = de;
    (de |= 4),
      (kd.current = null),
      n2(e, n),
      n0(n, e),
      kC($c),
      (As = !!Bc),
      ($c = Bc = null),
      (e.current = n),
      r2(n),
      MS(),
      (de = s),
      (Se = a),
      (Vt.transition = i);
  } else e.current = n;
  if (
    (va && ((va = !1), (qn = e), (Ks = o)),
    (i = e.pendingLanes),
    i === 0 && (nr = null),
    LS(n.stateNode),
    Ot(e, Fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) r(t[n]);
  if (zs) throw ((zs = !1), (e = af), (af = null), e);
  return (
    (Ks & 1) !== 0 && e.tag !== 0 && ao(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === sf ? si++ : ((si = 0), (sf = e))) : (si = 0),
    dr(),
    null
  );
}
function ao() {
  if (qn !== null) {
    var e = Yg(Ks),
      t = Vt.transition,
      n = Se;
    try {
      if (((Vt.transition = null), (Se = 16 > e ? 16 : e), qn === null))
        var r = !1;
      else {
        if (((e = qn), (qn = null), (Ks = 0), (de & 6) !== 0))
          throw Error(q(331));
        var o = de;
        for (de |= 4, X = e.current; X !== null; ) {
          var i = X,
            a = i.child;
          if ((X.flags & 16) !== 0) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var l = s[u];
                for (X = l; X !== null; ) {
                  var c = X;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (X = f);
                  else
                    for (; X !== null; ) {
                      c = X;
                      var h = c.sibling,
                        m = c.return;
                      if ((X1(c), c === l)) {
                        X = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = m), (X = h);
                        break;
                      }
                      X = m;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var O = g.sibling;
                    (g.sibling = null), (g = O);
                  } while (g !== null);
                }
              }
              X = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && a !== null)
            (a.return = i), (X = a);
          else
            e: for (; X !== null; ) {
              if (((i = X), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ii(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (X = y);
                break e;
              }
              X = i.return;
            }
        }
        var w = e.current;
        for (X = w; X !== null; ) {
          a = X;
          var _ = a.child;
          if ((a.subtreeFlags & 2064) !== 0 && _ !== null)
            (_.return = a), (X = _);
          else
            e: for (a = w; X !== null; ) {
              if (((s = X), (s.flags & 2048) !== 0))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xu(9, s);
                  }
                } catch (U) {
                  Ue(s, s.return, U);
                }
              if (s === a) {
                X = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (X = E);
                break e;
              }
              X = s.return;
            }
        }
        if (
          ((de = o), dr(), yn && typeof yn.onPostCommitFiberRoot == "function")
        )
          try {
            yn.onPostCommitFiberRoot(Wu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Se = n), (Vt.transition = t);
    }
  }
  return !1;
}
function Mm(e, t, n) {
  (t = Dd(n, t)),
    (t = H1(e, t, 1)),
    tr(e, t),
    (t = mt()),
    (e = tl(e, 1)),
    e !== null && (Hi(e, 1, t), Ot(e, t));
}
function Ue(e, t, n) {
  if (e.tag === 3) Mm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Mm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (nr === null || !nr.has(r)))
        ) {
          (e = Dd(n, e)),
            (e = Y1(t, e, 1)),
            tr(t, e),
            (e = mt()),
            (t = tl(t, 1)),
            t !== null && (Hi(t, 1, e), Ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function l2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = mt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Qe === e &&
      (it & n) === n &&
      (qe === 4 || (qe === 3 && (it & 130023424) === it && 500 > Fe() - Ad)
        ? br(e, 0)
        : (Td |= n)),
    Ot(e, t);
}
function c0(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = ia), (ia <<= 1), (ia & 130023424) === 0 && (ia = 4194304)));
  var n = mt();
  (e = tl(e, t)), e !== null && (Hi(e, t, n), Ot(e, n));
}
function c2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), c0(e, n);
}
function f2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(q(314));
  }
  r !== null && r.delete(t), c0(e, n);
}
var f0;
f0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Et.current) xt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (xt = !1), XC(e, t, n);
      xt = (e.flags & 131072) !== 0;
    }
  else (xt = !1), De && (t.flags & 1048576) !== 0 && g1(t, js, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps);
      var o = lo(t, pt.current);
      io(t, n), (o = xd(null, t, r, e, o, n));
      var i = Ed();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pt(r) ? ((i = !0), Us(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            vd(t),
            (o.updater = Ju),
            (t.stateNode = o),
            (o._reactInternals = t),
            Kc(t, r, e, n),
            (t = Xc(null, t, r, !0, i, n)))
          : ((t.tag = 0), De && i && yd(t), dt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = d2(r)),
          (e = en(r, e)),
          o)
        ) {
          case 0:
            t = Zc(null, t, r, e, n);
            break e;
          case 1:
            t = Cm(null, t, r, e, n);
            break e;
          case 11:
            t = wm(null, t, r, e, n);
            break e;
          case 14:
            t = Sm(null, t, r, en(r.type, e), n);
            break e;
        }
        throw Error(q(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : en(r, o)),
        Zc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : en(r, o)),
        Cm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((G1(t), e === null)) throw Error(q(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          m1(e, t),
          Bs(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Error(q(423))), (t = _m(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Error(q(424))), (t = _m(e, t, r, n, o));
            break e;
          } else
            for (
              bt = En(t.stateNode.containerInfo.firstChild),
                Rt = t,
                De = !0,
                nn = null,
                n = C1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((co(), r === o)) {
            t = Nn(e, t, n);
            break e;
          }
          dt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _1(t),
        e === null && Qc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        jc(r, o) ? (a = null) : i !== null && jc(r, i) && (t.flags |= 32),
        Q1(e, t),
        dt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Qc(t), null;
    case 13:
      return J1(e, t, n);
    case 4:
      return (
        Sd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fo(t, null, r, n)) : dt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : en(r, o)),
        wm(e, t, r, o, n)
      );
    case 7:
      return dt(e, t, t.pendingProps, n), t.child;
    case 8:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Ee(Ls, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (un(i.value, a)) {
            if (i.children === o.children && !Et.current) {
              t = Nn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = kn(-1, n & -n)), (u.tag = 2);
                      var l = i.updateQueue;
                      if (l !== null) {
                        l = l.shared;
                        var c = l.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (l.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Wc(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(q(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Wc(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        dt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        io(t, n),
        (o = Kt(o)),
        (r = r(o)),
        (t.flags |= 1),
        dt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = en(r, t.pendingProps)),
        (o = en(r.type, o)),
        Sm(e, t, r, o, n)
      );
    case 15:
      return K1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : en(r, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        Pt(r) ? ((e = !0), Us(t)) : (e = !1),
        io(t, n),
        y1(t, r, o),
        Kc(t, r, o, n),
        Xc(null, t, r, !0, e, n)
      );
    case 19:
      return Z1(e, t, n);
    case 22:
      return q1(e, t, n);
  }
  throw Error(q(156, t.tag));
};
function p0(e, t) {
  return Bg(e, t);
}
function p2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ht(e, t, n, r) {
  return new p2(e, t, n, r);
}
function Id(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function d2(e) {
  if (typeof e == "function") return Id(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === td)) return 11;
    if (e === nd) return 14;
  }
  return 2;
}
function lr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ht(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ra(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Id(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Vr:
        return xr(n.children, o, i, t);
      case ed:
        (a = 8), (o |= 8);
        break;
      case wc:
        return (
          (e = Ht(12, n, t, o | 2)), (e.elementType = wc), (e.lanes = i), e
        );
      case Sc:
        return (e = Ht(13, n, t, o)), (e.elementType = Sc), (e.lanes = i), e;
      case Cc:
        return (e = Ht(19, n, t, o)), (e.elementType = Cc), (e.lanes = i), e;
      case _g:
        return Qs(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Sg:
              a = 10;
              break e;
            case Cg:
              a = 9;
              break e;
            case td:
              a = 11;
              break e;
            case nd:
              a = 14;
              break e;
            case Hn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(q(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ht(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function xr(e, t, n, r) {
  return (e = Ht(7, e, r, t)), (e.lanes = n), e;
}
function Qs(e, t, n, r) {
  return (
    (e = Ht(22, e, r, t)),
    (e.elementType = _g),
    (e.lanes = n),
    (e.stateNode = {}),
    e
  );
}
function Zl(e, t, n) {
  return (e = Ht(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = Ht(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function h2(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ml(0)),
    (this.expirationTimes = Ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ud(e, t, n, r, o, i, a, s, u) {
  return (
    (e = new h2(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ht(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vd(i),
    e
  );
}
function m2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function d0(e) {
  if (!e) return ur;
  e = e._reactInternals;
  e: {
    if (Lr(e) !== e || e.tag !== 1) throw Error(q(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(q(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pt(n)) return d1(e, n, t);
  }
  return t;
}
function h0(e, t, n, r, o, i, a, s, u) {
  return (
    (e = Ud(n, r, !0, e, o, i, a, s, u)),
    (e.context = d0(null)),
    (n = e.current),
    (r = mt()),
    (o = rr(n)),
    (i = kn(r, o)),
    (i.callback = t != null ? t : null),
    tr(n, i),
    (e.current.lanes = o),
    Hi(e, o, r),
    Ot(e, r),
    e
  );
}
function nl(e, t, n, r) {
  var o = t.current,
    i = mt(),
    a = rr(o);
  return (
    (n = d0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = kn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    tr(o, t),
    (e = Wt(o, a, i)),
    e !== null && Oa(e, o, a),
    a
  );
}
function Gs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Im(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ld(e, t) {
  Im(e, t), (e = e.alternate) && Im(e, t);
}
function v2() {
  return null;
}
var m0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fd(e) {
  this._internalRoot = e;
}
rl.prototype.render = Fd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(q(409));
  nl(e, t, null, null);
};
rl.prototype.unmount = Fd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rr(function () {
      nl(null, e, null, null);
    }),
      (t[Rn] = null);
  }
};
function rl(e) {
  this._internalRoot = e;
}
rl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++);
    Wn.splice(n, 0, e), n === 0 && qg(e);
  }
};
function Bd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Um() {}
function y2(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var l = Gs(a);
        i.call(l);
      };
    }
    var a = h0(t, r, e, 0, null, !1, !1, "", Um);
    return (
      (e._reactRootContainer = a),
      (e[Rn] = a.current),
      bi(e.nodeType === 8 ? e.parentNode : e),
      Rr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var l = Gs(u);
      s.call(l);
    };
  }
  var u = Ud(e, 0, !1, null, null, !1, !1, "", Um);
  return (
    (e._reactRootContainer = u),
    (e[Rn] = u.current),
    bi(e.nodeType === 8 ? e.parentNode : e),
    Rr(function () {
      nl(t, u, n, r);
    }),
    u
  );
}
function il(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = Gs(a);
        s.call(u);
      };
    }
    nl(t, a, e, o);
  } else a = y2(n, t, e, o, r);
  return Gs(a);
}
Vg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qo(t.pendingLanes);
        n !== 0 &&
          (id(t, n | 1),
          Ot(t, Fe()),
          (de & 6) === 0 && ((ho = Fe() + 500), dr()));
      }
      break;
    case 13:
      var r = mt();
      Rr(function () {
        return Wt(e, 1, r);
      }),
        Ld(e, 1);
  }
};
ad = function (e) {
  if (e.tag === 13) {
    var t = mt();
    Wt(e, 134217728, t), Ld(e, 134217728);
  }
};
Wg = function (e) {
  if (e.tag === 13) {
    var t = mt(),
      n = rr(e);
    Wt(e, n, t), Ld(e, n);
  }
};
zg = function () {
  return Se;
};
Kg = function (e, t) {
  var n = Se;
  try {
    return (Se = e), t();
  } finally {
    Se = n;
  }
};
Ac = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Qu(r);
            if (!o) throw Error(q(90));
            xg(r), xc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Pg(e, n);
      break;
    case "select":
      (t = n.value), t != null && to(e, !!n.multiple, t, !1);
  }
};
Ng = Rd;
Mg = Rr;
var g2 = { usingClientEntryPoint: !1, Events: [Vi, qr, Qu, Ag, Rg, Rd] },
  $o = {
    findFiberByHostInstance: Cr,
    bundleType: 0,
    version: "18.1.0",
    rendererPackageName: "react-dom",
  },
  w2 = {
    bundleType: $o.bundleType,
    version: $o.version,
    rendererPackageName: $o.rendererPackageName,
    rendererConfig: $o.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $o.findFiberByHostInstance || v2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var ya = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ya.isDisabled && ya.supportsFiber)
    try {
      (Wu = ya.inject(w2)), (yn = ya);
    } catch {}
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g2;
Mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bd(t)) throw Error(q(200));
  return m2(e, t, null, n);
};
Mt.createRoot = function (e, t) {
  if (!Bd(e)) throw Error(q(299));
  var n = !1,
    r = "",
    o = m0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ud(e, 1, !1, null, null, n, !1, r, o)),
    (e[Rn] = t.current),
    bi(e.nodeType === 8 ? e.parentNode : e),
    new Fd(t)
  );
};
Mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(q(188))
      : ((e = Object.keys(e).join(",")), Error(q(268, e)));
  return (e = Lg(t)), (e = e === null ? null : e.stateNode), e;
};
Mt.flushSync = function (e) {
  return Rr(e);
};
Mt.hydrate = function (e, t, n) {
  if (!ol(t)) throw Error(q(200));
  return il(null, e, t, !0, n);
};
Mt.hydrateRoot = function (e, t, n) {
  if (!Bd(e)) throw Error(q(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = m0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = h0(t, null, e, 1, n != null ? n : null, o, !1, i, a)),
    (e[Rn] = t.current),
    bi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new rl(t);
};
Mt.render = function (e, t, n) {
  if (!ol(t)) throw Error(q(200));
  return il(null, e, t, !1, n);
};
Mt.unmountComponentAtNode = function (e) {
  if (!ol(e)) throw Error(q(40));
  return e._reactRootContainer
    ? (Rr(function () {
        il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rn] = null);
        });
      }),
      !0)
    : !1;
};
Mt.unstable_batchedUpdates = Rd;
Mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ol(n)) throw Error(q(200));
  if (e == null || e._reactInternals === void 0) throw Error(q(38));
  return il(e, t, n, !1, r);
};
Mt.version = "18.1.0-next-22edb9f77-20220426";
function v0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0);
    } catch (e) {
      console.error(e);
    }
}
v0(), (ji.exports = Mt);
var S2 = ji.exports,
  Lm = ji.exports;
(yc.createRoot = Lm.createRoot), (yc.hydrateRoot = Lm.hydrateRoot);
/**
 * @remix-run/router v1.0.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Js() {
  return (
    (Js = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Js.apply(this, arguments)
  );
}
var Qn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Qn || (Qn = {}));
const Fm = "popstate";
function C2(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: s } = r.location;
    return cf(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Ri(o);
  }
  return x2(t, n, null, e);
}
function _2() {
  return Math.random().toString(36).substr(2, 8);
}
function Bm(e) {
  return { usr: e.state, key: e.key };
}
function cf(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Js(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Eo(t) : t,
      { state: n, key: (t && t.key) || r || _2() }
    )
  );
}
function Ri(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Eo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function b2(e) {
  let t =
      typeof window != "undefined" &&
      typeof window.location != "undefined" &&
      window.location.origin !== "null"
        ? window.location.origin
        : "unknown://unknown",
    n = typeof e == "string" ? e : Ri(e);
  return new URL(n, t);
}
function x2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = Qn.Pop,
    u = null;
  function l() {
    (s = Qn.Pop), u && u({ action: s, location: h.location });
  }
  function c(m, v) {
    s = Qn.Push;
    let g = cf(h.location, m, v);
    n && n(g, m);
    let O = Bm(g),
      y = h.createHref(g);
    try {
      a.pushState(O, "", y);
    } catch {
      o.location.assign(y);
    }
    i && u && u({ action: s, location: h.location });
  }
  function f(m, v) {
    s = Qn.Replace;
    let g = cf(h.location, m, v);
    n && n(g, m);
    let O = Bm(g),
      y = h.createHref(g);
    a.replaceState(O, "", y), i && u && u({ action: s, location: h.location });
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(m) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Fm, l),
        (u = m),
        () => {
          o.removeEventListener(Fm, l), (u = null);
        }
      );
    },
    createHref(m) {
      return t(o, m);
    },
    encodeLocation(m) {
      let v = b2(typeof m == "string" ? m : Ri(m));
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: c,
    replace: f,
    go(m) {
      return a.go(m);
    },
  };
  return h;
}
var $m;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})($m || ($m = {}));
function E2(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Eo(t) : t,
    o = g0(r.pathname || "/", n);
  if (o == null) return null;
  let i = y0(e);
  P2(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) a = I2(i[s], F2(o));
  return a;
}
function y0(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((o, i) => {
      let a = {
        relativePath: o.path || "",
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: i,
        route: o,
      };
      a.relativePath.startsWith("/") &&
        (Ze(
          a.relativePath.startsWith(r),
          'Absolute route path "' +
            a.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (a.relativePath = a.relativePath.slice(r.length)));
      let s = or([r, a.relativePath]),
        u = n.concat(a);
      o.children &&
        o.children.length > 0 &&
        (Ze(
          o.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + s + '".')
        ),
        y0(o.children, t, u, s)),
        !(o.path == null && !o.index) &&
          t.push({ path: s, score: N2(s, o.index), routesMeta: u });
    }),
    t
  );
}
function P2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : M2(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const O2 = /^:\w+$/,
  D2 = 3,
  k2 = 2,
  T2 = 1,
  A2 = 10,
  R2 = -2,
  jm = (e) => e === "*";
function N2(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(jm) && (r += R2),
    t && (r += k2),
    n
      .filter((o) => !jm(o))
      .reduce((o, i) => o + (O2.test(i) ? D2 : i === "" ? T2 : A2), r)
  );
}
function M2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function I2(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      u = a === n.length - 1,
      l = o === "/" ? t : t.slice(o.length) || "/",
      c = U2(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        l
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = s.route;
    i.push({
      params: r,
      pathname: or([o, c.pathname]),
      pathnameBase: H2(or([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = or([o, c.pathnameBase]));
  }
  return i;
}
function U2(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = L2(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((l, c, f) => {
      if (c === "*") {
        let h = s[f] || "";
        a = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (l[c] = B2(s[f] || "", c)), l;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function L2(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    $d(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (a, s) => (r.push(s), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function F2(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      $d(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function B2(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      $d(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function g0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ze(e, t) {
  if (e === !1 || e === null || typeof e == "undefined") throw new Error(t);
}
function $d(e, t) {
  if (!e) {
    typeof console != "undefined" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function $2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Eo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : j2(n, t)) : t,
    search: Y2(r),
    hash: V2(o),
  };
}
function j2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ec(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function w0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function S0(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Eo(e))
    : ((o = Js({}, e)),
      Ze(
        !o.pathname || !o.pathname.includes("?"),
        ec("?", "pathname", "search", o)
      ),
      Ze(
        !o.pathname || !o.pathname.includes("#"),
        ec("#", "pathname", "hash", o)
      ),
      Ze(!o.search || !o.search.includes("#"), ec("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (r || a == null) s = n;
  else {
    let f = t.length - 1;
    if (a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      o.pathname = h.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let u = $2(o, s),
    l = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (l || c) && (u.pathname += "/"), u;
}
const or = (e) => e.join("/").replace(/\/\/+/g, "/"),
  H2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Y2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  V2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class W2 {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function z2(e) {
  return e instanceof W2;
}
const K2 = ["post", "put", "patch", "delete"];
[...K2];
/**
 * React Router v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ff() {
  return (
    (ff = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ff.apply(this, arguments)
  );
}
function q2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Q2 = typeof Object.is == "function" ? Object.is : q2,
  { useState: G2, useEffect: J2, useLayoutEffect: Z2, useDebugValue: X2 } = vc;
function e_(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = G2({ inst: { value: r, getSnapshot: t } });
  return (
    Z2(() => {
      (o.value = r), (o.getSnapshot = t), tc(o) && i({ inst: o });
    }, [e, r, t]),
    J2(
      () => (
        tc(o) && i({ inst: o }),
        e(() => {
          tc(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    X2(r),
    r
  );
}
function tc(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Q2(n, r);
  } catch {
    return !0;
  }
}
function t_(e, t, n) {
  return t();
}
const n_ =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined",
  r_ = !n_,
  o_ = r_ ? t_ : e_;
"useSyncExternalStore" in vc && ((e) => e.useSyncExternalStore)(vc);
const i_ = T.exports.createContext(null),
  a_ = T.exports.createContext(null),
  jd = T.exports.createContext(null),
  zi = T.exports.createContext(null),
  al = T.exports.createContext(null),
  Po = T.exports.createContext({ outlet: null, matches: [] }),
  C0 = T.exports.createContext(null);
function s_(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ki() || Ze(!1);
  let { basename: r, navigator: o } = T.exports.useContext(zi),
    { hash: i, pathname: a, search: s } = Hd(e, { relative: n }),
    u = a;
  return (
    r !== "/" && (u = a === "/" ? r : or([r, a])),
    o.createHref({ pathname: u, search: s, hash: i })
  );
}
function Ki() {
  return T.exports.useContext(al) != null;
}
function qi() {
  return Ki() || Ze(!1), T.exports.useContext(al).location;
}
function Oo() {
  Ki() || Ze(!1);
  let { basename: e, navigator: t } = T.exports.useContext(zi),
    { matches: n } = T.exports.useContext(Po),
    { pathname: r } = qi(),
    o = JSON.stringify(w0(n).map((s) => s.pathnameBase)),
    i = T.exports.useRef(!1);
  return (
    T.exports.useEffect(() => {
      i.current = !0;
    }),
    T.exports.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !i.current)) return;
        if (typeof s == "number") {
          t.go(s);
          return;
        }
        let l = S0(s, JSON.parse(o), r, u.relative === "path");
        e !== "/" &&
          (l.pathname = l.pathname === "/" ? e : or([e, l.pathname])),
          (u.replace ? t.replace : t.push)(l, u.state, u);
      },
      [e, t, o, r]
    )
  );
}
function u_() {
  let { matches: e } = T.exports.useContext(Po),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Hd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = T.exports.useContext(Po),
    { pathname: o } = qi(),
    i = JSON.stringify(w0(r).map((a) => a.pathnameBase));
  return T.exports.useMemo(
    () => S0(e, JSON.parse(i), o, n === "path"),
    [e, i, o, n]
  );
}
function l_(e, t) {
  Ki() || Ze(!1);
  let { navigator: n } = T.exports.useContext(zi),
    r = T.exports.useContext(jd),
    { matches: o } = T.exports.useContext(Po),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let u = qi(),
    l;
  if (t) {
    var c;
    let g = typeof t == "string" ? Eo(t) : t;
    s === "/" ||
      ((c = g.pathname) == null ? void 0 : c.startsWith(s)) ||
      Ze(!1),
      (l = g);
  } else l = u;
  let f = l.pathname || "/",
    h = s === "/" ? f : f.slice(s.length) || "/",
    m = E2(e, { pathname: h }),
    v = d_(
      m &&
        m.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, a, g.params),
            pathname: or([
              s,
              n.encodeLocation
                ? n.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? s
                : or([
                    s,
                    n.encodeLocation
                      ? n.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      r || void 0
    );
  return t && v
    ? T.exports.createElement(
        al.Provider,
        {
          value: {
            location: ff(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              l
            ),
            navigationType: Qn.Pop,
          },
        },
        v
      )
    : v;
}
function c_() {
  let e = m_(),
    t = z2(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: r },
    i = { padding: "2px 4px", backgroundColor: r };
  return T.exports.createElement(
    T.exports.Fragment,
    null,
    T.exports.createElement("h2", null, "Unhandled Thrown Error!"),
    T.exports.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? T.exports.createElement("pre", { style: o }, n) : null,
    T.exports.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"),
    T.exports.createElement(
      "p",
      null,
      "You can provide a way better UX than this when your app throws errors by providing your own\xA0",
      T.exports.createElement("code", { style: i }, "errorElement"),
      " props on\xA0",
      T.exports.createElement("code", { style: i }, "<Route>")
    )
  );
}
class f_ extends T.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? T.exports.createElement(C0.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function p_(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = T.exports.useContext(i_);
  return (
    o && n.route.errorElement && (o._deepestRenderedBoundaryId = n.route.id),
    T.exports.createElement(Po.Provider, { value: t }, r)
  );
}
function d_(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    i >= 0 || Ze(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, a, s) => {
    let u = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      l = n ? a.route.errorElement || T.exports.createElement(c_, null) : null,
      c = () =>
        T.exports.createElement(
          p_,
          {
            match: a,
            routeContext: { outlet: i, matches: t.concat(r.slice(0, s + 1)) },
          },
          u ? l : a.route.element !== void 0 ? a.route.element : i
        );
    return n && (a.route.errorElement || s === 0)
      ? T.exports.createElement(f_, {
          location: n.location,
          component: l,
          error: u,
          children: c(),
        })
      : c();
  }, null);
}
var Hm;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(Hm || (Hm = {}));
var pf;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(pf || (pf = {}));
function h_(e) {
  let t = T.exports.useContext(jd);
  return t || Ze(!1), t;
}
function m_() {
  var e;
  let t = T.exports.useContext(C0),
    n = h_(pf.UseRouteError),
    r = T.exports.useContext(Po),
    o = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || Ze(!1),
    o.route.id || Ze(!1),
    (e = n.errors) == null ? void 0 : e[o.route.id])
  );
}
function jn(e) {
  Ze(!1);
}
function v_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Qn.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  Ki() && Ze(!1);
  let s = t.replace(/^\/*/, "/"),
    u = T.exports.useMemo(
      () => ({ basename: s, navigator: i, static: a }),
      [s, i, a]
    );
  typeof r == "string" && (r = Eo(r));
  let {
      pathname: l = "/",
      search: c = "",
      hash: f = "",
      state: h = null,
      key: m = "default",
    } = r,
    v = T.exports.useMemo(() => {
      let g = g0(l, s);
      return g == null
        ? null
        : { pathname: g, search: c, hash: f, state: h, key: m };
    }, [s, l, c, f, h, m]);
  return v == null
    ? null
    : T.exports.createElement(
        zi.Provider,
        { value: u },
        T.exports.createElement(al.Provider, {
          children: n,
          value: { location: v, navigationType: o },
        })
      );
}
function y_(e) {
  let { children: t, location: n } = e,
    r = T.exports.useContext(a_),
    o = r && !t ? r.router.routes : df(t);
  return l_(o, n);
}
var Ym;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ym || (Ym = {}));
new Promise(() => {});
function df(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    T.exports.Children.forEach(e, (r, o) => {
      if (!T.exports.isValidElement(r)) return;
      if (r.type === T.exports.Fragment) {
        n.push.apply(n, df(r.props.children, t));
        return;
      }
      r.type !== jn && Ze(!1), !r.props.index || !r.props.children || Ze(!1);
      let i = [...t, o],
        a = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (a.children = df(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zs.apply(this, arguments)
  );
}
function _0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function g_(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function w_(e, t) {
  return e.button === 0 && (!t || t === "_self") && !g_(e);
}
const S_ = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  C_ = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function __(e) {
  let { basename: t, children: n, window: r } = e,
    o = T.exports.useRef();
  o.current == null && (o.current = C2({ window: r, v5Compat: !0 }));
  let i = o.current,
    [a, s] = T.exports.useState({ action: i.action, location: i.location });
  return (
    T.exports.useLayoutEffect(() => i.listen(s), [i]),
    T.exports.createElement(v_, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
const sl = T.exports.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: u,
        to: l,
        preventScrollReset: c,
      } = t,
      f = _0(t, S_),
      h = s_(l, { relative: o }),
      m = b_(l, {
        replace: a,
        state: s,
        target: u,
        preventScrollReset: c,
        relative: o,
      });
    function v(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return T.exports.createElement(
      "a",
      Zs({}, f, { href: h, onClick: i ? r : v, ref: n, target: u })
    );
  }),
  b0 = T.exports.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: a = !1,
        style: s,
        to: u,
        children: l,
      } = t,
      c = _0(t, C_),
      f = Hd(u, { relative: c.relative }),
      h = qi(),
      m = T.exports.useContext(jd),
      { navigator: v } = T.exports.useContext(zi),
      g = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname,
      O = h.pathname,
      y =
        m && m.navigation && m.navigation.location
          ? m.navigation.location.pathname
          : null;
    o ||
      ((O = O.toLowerCase()),
      (y = y ? y.toLowerCase() : null),
      (g = g.toLowerCase()));
    let w = O === g || (!a && O.startsWith(g) && O.charAt(g.length) === "/"),
      _ =
        y != null &&
        (y === g || (!a && y.startsWith(g) && y.charAt(g.length) === "/")),
      E = w ? r : void 0,
      U;
    typeof i == "function"
      ? (U = i({ isActive: w, isPending: _ }))
      : (U = [i, w ? "active" : null, _ ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let L = typeof s == "function" ? s({ isActive: w, isPending: _ }) : s;
    return T.exports.createElement(
      sl,
      Zs({}, c, { "aria-current": E, className: U, ref: n, style: L, to: u }),
      typeof l == "function" ? l({ isActive: w, isPending: _ }) : l
    );
  });
var Vm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Vm || (Vm = {}));
var Wm;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wm || (Wm = {}));
function b_(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
    } = t === void 0 ? {} : t,
    s = Oo(),
    u = qi(),
    l = Hd(e, { relative: a });
  return T.exports.useCallback(
    (c) => {
      if (w_(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : Ri(u) === Ri(l);
        s(e, { replace: f, state: o, preventScrollReset: i, relative: a });
      }
    },
    [u, s, l, r, o, n, e, i, a]
  );
}
function x0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: E0 } = Object.prototype,
  { getPrototypeOf: Yd } = Object,
  Vd = ((e) => (t) => {
    const n = E0.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ln = (e) => ((e = e.toLowerCase()), (t) => Vd(t) === e),
  ul = (e) => (t) => typeof t === e,
  { isArray: Do } = Array,
  Ni = ul("undefined");
function x_(e) {
  return (
    e !== null &&
    !Ni(e) &&
    e.constructor !== null &&
    !Ni(e.constructor) &&
    Nr(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const P0 = Ln("ArrayBuffer");
function E_(e) {
  let t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && P0(e.buffer)),
    t
  );
}
const P_ = ul("string"),
  Nr = ul("function"),
  O0 = ul("number"),
  Wd = (e) => e !== null && typeof e == "object",
  O_ = (e) => e === !0 || e === !1,
  Na = (e) => {
    if (Vd(e) !== "object") return !1;
    const t = Yd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  D_ = Ln("Date"),
  k_ = Ln("File"),
  T_ = Ln("Blob"),
  A_ = Ln("FileList"),
  R_ = (e) => Wd(e) && Nr(e.pipe),
  N_ = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        E0.call(e) === t ||
        (Nr(e.toString) && e.toString() === t))
    );
  },
  M_ = Ln("URLSearchParams"),
  I_ = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e == "undefined") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Do(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let s;
    for (r = 0; r < a; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function D0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const k0 =
    typeof self == "undefined"
      ? typeof global == "undefined"
        ? globalThis
        : global
      : self,
  T0 = (e) => !Ni(e) && e !== k0;
function hf() {
  const { caseless: e } = (T0(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && D0(t, o)) || o;
      Na(t[i]) && Na(r)
        ? (t[i] = hf(t[i], r))
        : Na(r)
        ? (t[i] = hf({}, r))
        : Do(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Qi(arguments[r], n);
  return t;
}
const U_ = (e, t, n, { allOwnKeys: r } = {}) => (
    Qi(
      t,
      (o, i) => {
        n && Nr(o) ? (e[i] = x0(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  L_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  F_ = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  B_ = (e, t, n, r) => {
    let o, i, a;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
      e = n !== !1 && Yd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  $_ = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  j_ = (e) => {
    if (!e) return null;
    if (Do(e)) return e;
    let t = e.length;
    if (!O0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  H_ = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array != "undefined" && Yd(Uint8Array)),
  Y_ = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  V_ = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  W_ = Ln("HTMLFormElement"),
  z_ = (e) =>
    e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  zm = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  K_ = Ln("RegExp"),
  A0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Qi(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  q_ = (e) => {
    A0(e, (t, n) => {
      if (Nr(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (!!Nr(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Q_ = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Do(e) ? r(e) : r(String(e).split(t)), n;
  },
  G_ = () => {},
  J_ = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Z_ = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Wd(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Do(r) ? [] : {};
            return (
              Qi(r, (a, s) => {
                const u = n(a, o + 1);
                !Ni(u) && (i[s] = u);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  };
var H = {
  isArray: Do,
  isArrayBuffer: P0,
  isBuffer: x_,
  isFormData: N_,
  isArrayBufferView: E_,
  isString: P_,
  isNumber: O0,
  isBoolean: O_,
  isObject: Wd,
  isPlainObject: Na,
  isUndefined: Ni,
  isDate: D_,
  isFile: k_,
  isBlob: T_,
  isRegExp: K_,
  isFunction: Nr,
  isStream: R_,
  isURLSearchParams: M_,
  isTypedArray: H_,
  isFileList: A_,
  forEach: Qi,
  merge: hf,
  extend: U_,
  trim: I_,
  stripBOM: L_,
  inherits: F_,
  toFlatObject: B_,
  kindOf: Vd,
  kindOfTest: Ln,
  endsWith: $_,
  toArray: j_,
  forEachEntry: Y_,
  matchAll: V_,
  isHTMLForm: W_,
  hasOwnProperty: zm,
  hasOwnProp: zm,
  reduceDescriptors: A0,
  freezeMethods: q_,
  toObjectSet: Q_,
  toCamelCase: z_,
  noop: G_,
  toFiniteNumber: J_,
  findKey: D0,
  global: k0,
  isContextDefined: T0,
  toJSONObject: Z_,
};
function pe(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
H.inherits(pe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: H.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const R0 = pe.prototype,
  N0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  N0[e] = { value: e };
});
Object.defineProperties(pe, N0);
Object.defineProperty(R0, "isAxiosError", { value: !0 });
pe.from = (e, t, n, r, o, i) => {
  const a = Object.create(R0);
  return (
    H.toFlatObject(
      e,
      a,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    pe.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
var X_ = typeof self == "object" ? self.FormData : window.FormData,
  eb = X_;
function mf(e) {
  return H.isPlainObject(e) || H.isArray(e);
}
function M0(e) {
  return H.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Km(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = M0(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function tb(e) {
  return H.isArray(e) && !e.some(mf);
}
const nb = H.toFlatObject(H, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function rb(e) {
  return (
    e &&
    H.isFunction(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
function ll(e, t, n) {
  if (!H.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new (eb || FormData)()),
    (n = H.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, O) {
        return !H.isUndefined(O[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    a = n.indexes,
    u = (n.Blob || (typeof Blob != "undefined" && Blob)) && rb(t);
  if (!H.isFunction(o)) throw new TypeError("visitor must be a function");
  function l(v) {
    if (v === null) return "";
    if (H.isDate(v)) return v.toISOString();
    if (!u && H.isBlob(v))
      throw new pe("Blob is not supported. Use a Buffer instead.");
    return H.isArrayBuffer(v) || H.isTypedArray(v)
      ? u && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, g, O) {
    let y = v;
    if (v && !O && typeof v == "object") {
      if (H.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (H.isArray(v) && tb(v)) ||
        H.isFileList(v) ||
        (H.endsWith(g, "[]") && (y = H.toArray(v)))
      )
        return (
          (g = M0(g)),
          y.forEach(function (_, E) {
            !(H.isUndefined(_) || _ === null) &&
              t.append(
                a === !0 ? Km([g], E, i) : a === null ? g : g + "[]",
                l(_)
              );
          }),
          !1
        );
    }
    return mf(v) ? !0 : (t.append(Km(O, g, i), l(v)), !1);
  }
  const f = [],
    h = Object.assign(nb, {
      defaultVisitor: c,
      convertValue: l,
      isVisitable: mf,
    });
  function m(v, g) {
    if (!H.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(v),
        H.forEach(v, function (y, w) {
          (!(H.isUndefined(y) || y === null) &&
            o.call(t, y, H.isString(w) ? w.trim() : w, g, h)) === !0 &&
            m(y, g ? g.concat(w) : [w]);
        }),
        f.pop();
    }
  }
  if (!H.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function qm(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function zd(e, t) {
  (this._pairs = []), e && ll(e, this, t);
}
const I0 = zd.prototype;
I0.append = function (t, n) {
  this._pairs.push([t, n]);
};
I0.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, qm);
      }
    : qm;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function ob(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function U0(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || ob,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = H.isURLSearchParams(t) ? t.toString() : new zd(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class ib {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    H.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
var Qm = ib,
  L0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ab = typeof URLSearchParams != "undefined" ? URLSearchParams : zd,
  sb = FormData;
const ub = (() => {
    let e;
    return typeof navigator != "undefined" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window != "undefined" && typeof document != "undefined";
  })(),
  lb = (() =>
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")();
var vn = {
  isBrowser: !0,
  classes: { URLSearchParams: ab, FormData: sb, Blob },
  isStandardBrowserEnv: ub,
  isStandardBrowserWebWorkerEnv: lb,
  protocols: ["http", "https", "file", "blob", "url", "data"],
};
function cb(e, t) {
  return ll(
    e,
    new vn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return vn.isNode && H.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function fb(e) {
  return H.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function pb(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function F0(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    const s = Number.isFinite(+a),
      u = i >= n.length;
    return (
      (a = !a && H.isArray(o) ? o.length : a),
      u
        ? (H.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !s)
        : ((!o[a] || !H.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], i) && H.isArray(o[a]) && (o[a] = pb(o[a])),
          !s)
    );
  }
  if (H.isFormData(e) && H.isFunction(e.entries)) {
    const n = {};
    return (
      H.forEachEntry(e, (r, o) => {
        t(fb(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const db = { "Content-Type": void 0 };
function hb(e, t, n) {
  if (H.isString(e))
    try {
      return (t || JSON.parse)(e), H.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const cl = {
  transitional: L0,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = H.isObject(t);
      if ((i && H.isHTMLForm(t) && (t = new FormData(t)), H.isFormData(t)))
        return o && o ? JSON.stringify(F0(t)) : t;
      if (
        H.isArrayBuffer(t) ||
        H.isBuffer(t) ||
        H.isStream(t) ||
        H.isFile(t) ||
        H.isBlob(t)
      )
        return t;
      if (H.isArrayBufferView(t)) return t.buffer;
      if (H.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return cb(t, this.formSerializer).toString();
        if ((s = H.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return ll(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), hb(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || cl.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && H.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (a)
            throw s.name === "SyntaxError"
              ? pe.from(s, pe.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vn.classes.FormData, Blob: vn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
H.forEach(["delete", "get", "head"], function (t) {
  cl.headers[t] = {};
});
H.forEach(["post", "put", "patch"], function (t) {
  cl.headers[t] = H.merge(db);
});
var Kd = cl;
const mb = H.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent",
]);
var vb = (e) => {
  const t = {};
  let n, r, o;
  return (
    e &&
      e
        .split(
          `
`
        )
        .forEach(function (a) {
          (o = a.indexOf(":")),
            (n = a.substring(0, o).trim().toLowerCase()),
            (r = a.substring(o + 1).trim()),
            !(!n || (t[n] && mb[n])) &&
              (n === "set-cookie"
                ? t[n]
                  ? t[n].push(r)
                  : (t[n] = [r])
                : (t[n] = t[n] ? t[n] + ", " + r : r));
        }),
    t
  );
};
const Gm = Symbol("internals");
function jo(e) {
  return e && String(e).trim().toLowerCase();
}
function Ma(e) {
  return e === !1 || e == null ? e : H.isArray(e) ? e.map(Ma) : String(e);
}
function yb(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function gb(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Jm(e, t, n, r) {
  if (H.isFunction(r)) return r.call(this, t, n);
  if (!!H.isString(t)) {
    if (H.isString(r)) return t.indexOf(r) !== -1;
    if (H.isRegExp(r)) return r.test(t);
  }
}
function wb(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Sb(e, t) {
  const n = H.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0,
    });
  });
}
class fl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, u, l) {
      const c = jo(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = H.findKey(o, c);
      (!f || o[f] === void 0 || l === !0 || (l === void 0 && o[f] !== !1)) &&
        (o[f || u] = Ma(s));
    }
    const a = (s, u) => H.forEach(s, (l, c) => i(l, c, u));
    return (
      H.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : H.isString(t) && (t = t.trim()) && !gb(t)
        ? a(vb(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = jo(t)), t)) {
      const r = H.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return yb(o);
        if (H.isFunction(n)) return n.call(this, o, r);
        if (H.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = jo(t)), t)) {
      const r = H.findKey(this, t);
      return !!(r && (!n || Jm(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = jo(a)), a)) {
        const s = H.findKey(r, a);
        s && (!n || Jm(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return H.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      H.forEach(this, (o, i) => {
        const a = H.findKey(r, i);
        if (a) {
          (n[a] = Ma(o)), delete n[i];
          return;
        }
        const s = t ? wb(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = Ma(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      H.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && H.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Gm] = this[Gm] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const s = jo(a);
      r[s] || (Sb(o, a), (r[s] = !0));
    }
    return H.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
fl.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
]);
H.freezeMethods(fl.prototype);
H.freezeMethods(fl);
var Tn = fl;
function nc(e, t) {
  const n = this || Kd,
    r = t || n,
    o = Tn.from(r.headers);
  let i = r.data;
  return (
    H.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function B0(e) {
  return !!(e && e.__CANCEL__);
}
function Gi(e, t, n) {
  pe.call(this, e == null ? "canceled" : e, pe.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
H.inherits(Gi, pe, { __CANCEL__: !0 });
var Cb = null;
function _b(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new pe(
          "Request failed with status code " + n.status,
          [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
var bb = vn.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, a, s) {
          const u = [];
          u.push(n + "=" + encodeURIComponent(r)),
            H.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()),
            H.isString(i) && u.push("path=" + i),
            H.isString(a) && u.push("domain=" + a),
            s === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function xb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Eb(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $0(e, t) {
  return e && !xb(t) ? Eb(e, t) : t;
}
var Pb = vn.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let a = i;
        return (
          t && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (a) {
          const s = H.isString(a) ? o(a) : a;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Ob(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Db(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const l = Date.now(),
        c = r[i];
      a || (a = l), (n[o] = u), (r[o] = l);
      let f = i,
        h = 0;
      for (; f !== o; ) (h += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), l - a < t)) return;
      const m = c && l - c;
      return m ? Math.round((h * 1e3) / m) : void 0;
    }
  );
}
function Zm(e, t) {
  let n = 0;
  const r = Db(50, 250);
  return (o) => {
    const i = o.loaded,
      a = o.lengthComputable ? o.total : void 0,
      s = i - n,
      u = r(s),
      l = i <= a;
    n = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && a && l ? (a - i) / u : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const kb = typeof XMLHttpRequest != "undefined";
var Tb =
  kb &&
  function (e) {
    return new Promise(function (n, r) {
      let o = e.data;
      const i = Tn.from(e.headers).normalize(),
        a = e.responseType;
      let s;
      function u() {
        e.cancelToken && e.cancelToken.unsubscribe(s),
          e.signal && e.signal.removeEventListener("abort", s);
      }
      H.isFormData(o) &&
        (vn.isStandardBrowserEnv || vn.isStandardBrowserWebWorkerEnv) &&
        i.setContentType(!1);
      let l = new XMLHttpRequest();
      if (e.auth) {
        const m = e.auth.username || "",
          v = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : "";
        i.set("Authorization", "Basic " + btoa(m + ":" + v));
      }
      const c = $0(e.baseURL, e.url);
      l.open(e.method.toUpperCase(), U0(c, e.params, e.paramsSerializer), !0),
        (l.timeout = e.timeout);
      function f() {
        if (!l) return;
        const m = Tn.from(
            "getAllResponseHeaders" in l && l.getAllResponseHeaders()
          ),
          g = {
            data:
              !a || a === "text" || a === "json" ? l.responseText : l.response,
            status: l.status,
            statusText: l.statusText,
            headers: m,
            config: e,
            request: l,
          };
        _b(
          function (y) {
            n(y), u();
          },
          function (y) {
            r(y), u();
          },
          g
        ),
          (l = null);
      }
      if (
        ("onloadend" in l
          ? (l.onloadend = f)
          : (l.onreadystatechange = function () {
              !l ||
                l.readyState !== 4 ||
                (l.status === 0 &&
                  !(l.responseURL && l.responseURL.indexOf("file:") === 0)) ||
                setTimeout(f);
            }),
        (l.onabort = function () {
          !l ||
            (r(new pe("Request aborted", pe.ECONNABORTED, e, l)), (l = null));
        }),
        (l.onerror = function () {
          r(new pe("Network Error", pe.ERR_NETWORK, e, l)), (l = null);
        }),
        (l.ontimeout = function () {
          let v = e.timeout
            ? "timeout of " + e.timeout + "ms exceeded"
            : "timeout exceeded";
          const g = e.transitional || L0;
          e.timeoutErrorMessage && (v = e.timeoutErrorMessage),
            r(
              new pe(
                v,
                g.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,
                e,
                l
              )
            ),
            (l = null);
        }),
        vn.isStandardBrowserEnv)
      ) {
        const m =
          (e.withCredentials || Pb(c)) &&
          e.xsrfCookieName &&
          bb.read(e.xsrfCookieName);
        m && i.set(e.xsrfHeaderName, m);
      }
      o === void 0 && i.setContentType(null),
        "setRequestHeader" in l &&
          H.forEach(i.toJSON(), function (v, g) {
            l.setRequestHeader(g, v);
          }),
        H.isUndefined(e.withCredentials) ||
          (l.withCredentials = !!e.withCredentials),
        a && a !== "json" && (l.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" &&
          l.addEventListener("progress", Zm(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" &&
          l.upload &&
          l.upload.addEventListener("progress", Zm(e.onUploadProgress)),
        (e.cancelToken || e.signal) &&
          ((s = (m) => {
            !l ||
              (r(!m || m.type ? new Gi(null, e, l) : m), l.abort(), (l = null));
          }),
          e.cancelToken && e.cancelToken.subscribe(s),
          e.signal &&
            (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
      const h = Ob(c);
      if (h && vn.protocols.indexOf(h) === -1) {
        r(new pe("Unsupported protocol " + h + ":", pe.ERR_BAD_REQUEST, e));
        return;
      }
      l.send(o || null);
    });
  };
const Ia = { http: Cb, xhr: Tb };
H.forEach(Ia, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
var Ab = {
  getAdapter: (e) => {
    e = H.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = H.isString(n) ? Ia[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new pe(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            H.hasOwnProp(Ia, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!H.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Ia,
};
function rc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Gi(null, e);
}
function Xm(e) {
  return (
    rc(e),
    (e.headers = Tn.from(e.headers)),
    (e.data = nc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ab.getAdapter(e.adapter || Kd.adapter)(e).then(
      function (r) {
        return (
          rc(e),
          (r.data = nc.call(e, e.transformResponse, r)),
          (r.headers = Tn.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          B0(r) ||
            (rc(e),
            r &&
              r.response &&
              ((r.response.data = nc.call(e, e.transformResponse, r.response)),
              (r.response.headers = Tn.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const ev = (e) => (e instanceof Tn ? e.toJSON() : e);
function mo(e, t) {
  t = t || {};
  const n = {};
  function r(l, c, f) {
    return H.isPlainObject(l) && H.isPlainObject(c)
      ? H.merge.call({ caseless: f }, l, c)
      : H.isPlainObject(c)
      ? H.merge({}, c)
      : H.isArray(c)
      ? c.slice()
      : c;
  }
  function o(l, c, f) {
    if (H.isUndefined(c)) {
      if (!H.isUndefined(l)) return r(void 0, l, f);
    } else return r(l, c, f);
  }
  function i(l, c) {
    if (!H.isUndefined(c)) return r(void 0, c);
  }
  function a(l, c) {
    if (H.isUndefined(c)) {
      if (!H.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, c);
  }
  function s(l, c, f) {
    if (f in t) return r(l, c);
    if (f in e) return r(void 0, l);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (l, c) => o(ev(l), ev(c), !0),
  };
  return (
    H.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const f = u[c] || o,
        h = f(e[c], t[c], c);
      (H.isUndefined(h) && f !== s) || (n[c] = h);
    }),
    n
  );
}
const j0 = "1.2.1",
  qd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    qd[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const tv = {};
qd.transitional = function (t, n, r) {
  function o(i, a) {
    return (
      "[Axios v" +
      j0 +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (i, a, s) => {
    if (t === !1)
      throw new pe(
        o(a, " has been removed" + (n ? " in " + n : "")),
        pe.ERR_DEPRECATED
      );
    return (
      n &&
        !tv[a] &&
        ((tv[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, a, s) : !0
    );
  };
};
function Rb(e, t, n) {
  if (typeof e != "object")
    throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = t[i];
    if (a) {
      const s = e[i],
        u = s === void 0 || a(s, i, e);
      if (u !== !0)
        throw new pe("option " + i + " must be " + u, pe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new pe("Unknown option " + i, pe.ERR_BAD_OPTION);
  }
}
var vf = { assertOptions: Rb, validators: qd };
const Bn = vf.validators;
class Xs {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Qm(), response: new Qm() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = mo(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      vf.assertOptions(
        r,
        {
          silentJSONParsing: Bn.transitional(Bn.boolean),
          forcedJSONParsing: Bn.transitional(Bn.boolean),
          clarifyTimeoutError: Bn.transitional(Bn.boolean),
        },
        !1
      ),
      o !== void 0 &&
        vf.assertOptions(
          o,
          { encode: Bn.function, serialize: Bn.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a;
    (a = i && H.merge(i.common, i[n.method])),
      a &&
        H.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (v) => {
            delete i[v];
          }
        ),
      (n.headers = Tn.concat(a, i));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((u = u && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (g) {
      l.push(g.fulfilled, g.rejected);
    });
    let c,
      f = 0,
      h;
    if (!u) {
      const v = [Xm.bind(this), void 0];
      for (
        v.unshift.apply(v, s),
          v.push.apply(v, l),
          h = v.length,
          c = Promise.resolve(n);
        f < h;

      )
        c = c.then(v[f++], v[f++]);
      return c;
    }
    h = s.length;
    let m = n;
    for (f = 0; f < h; ) {
      const v = s[f++],
        g = s[f++];
      try {
        m = v(m);
      } catch (O) {
        g.call(this, O);
        break;
      }
    }
    try {
      c = Xm.call(this, m);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, h = l.length; f < h; ) c = c.then(l[f++], l[f++]);
    return c;
  }
  getUri(t) {
    t = mo(this.defaults, t);
    const n = $0(t.baseURL, t.url);
    return U0(n, t.params, t.paramsSerializer);
  }
}
H.forEach(["delete", "get", "head", "options"], function (t) {
  Xs.prototype[t] = function (n, r) {
    return this.request(
      mo(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
H.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, a, s) {
      return this.request(
        mo(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (Xs.prototype[t] = n()), (Xs.prototype[t + "Form"] = n(!0));
});
var Ua = Xs;
class Qd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, s) {
        r.reason || ((r.reason = new Gi(i, a, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Qd(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
var Nb = Qd;
function Mb(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Ib(e) {
  return H.isObject(e) && e.isAxiosError === !0;
}
function H0(e) {
  const t = new Ua(e),
    n = x0(Ua.prototype.request, t);
  return (
    H.extend(n, Ua.prototype, t, { allOwnKeys: !0 }),
    H.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return H0(mo(e, o));
    }),
    n
  );
}
const Xe = H0(Kd);
Xe.Axios = Ua;
Xe.CanceledError = Gi;
Xe.CancelToken = Nb;
Xe.isCancel = B0;
Xe.VERSION = j0;
Xe.toFormData = ll;
Xe.AxiosError = pe;
Xe.Cancel = Xe.CanceledError;
Xe.all = function (t) {
  return Promise.all(t);
};
Xe.spread = Mb;
Xe.isAxiosError = Ib;
Xe.mergeConfig = mo;
Xe.AxiosHeaders = Tn;
Xe.formToJSON = (e) => F0(H.isHTMLForm(e) ? new FormData(e) : e);
Xe.default = Xe;
var Te = Xe,
  pl = { exports: {} },
  dl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ub = T.exports,
  Lb = Symbol.for("react.element"),
  Fb = Symbol.for("react.fragment"),
  Bb = Object.prototype.hasOwnProperty,
  $b = Ub.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jb = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y0(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Bb.call(t, r) && !jb.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Lb,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: $b.current,
  };
}
dl.Fragment = Fb;
dl.jsx = Y0;
dl.jsxs = Y0;
pl.exports = dl;
const b = pl.exports.jsx,
  oe = pl.exports.jsxs,
  Sr = pl.exports.Fragment,
  St = T.exports.createContext();
function Hb({ children: e }) {
  const [t, n] = T.exports.useState(null),
    [r, o] = T.exports.useState(!1),
    i = async (u) => {
      await Te.get(`https://scrypt-backend-node.herokuapp.com/user/${u}`)
        .then((l) => {
          n({
            id: l.data[0].id,
            username: l.data[0].username,
            email: l.data[0].email,
            role: l.data[0].role,
          });
        })
        .catch((l) => l);
    };
  T.exports.useEffect(() => {
    localStorage.getItem(
      "CognitoIdentityServiceProvider.12fkg6pe6sjq3n50bmulo8snia.LastAuthUser"
    ) === null ||
      i(
        localStorage.getItem(
          "CognitoIdentityServiceProvider.12fkg6pe6sjq3n50bmulo8snia.LastAuthUser"
        )
      );
  }, []);
  const a = async (u) => {
      Te.post("https://scrypt-backend-node.herokuapp.com/user", u)
        .then((l) => l)
        .catch((l) => l);
    },
    s = () => {
      const u = localStorage.getItem(
        "CognitoIdentityServiceProvider.12fkg6pe6sjq3n50bmulo8snia.LastAuthUser"
      );
      i(u);
    };
  return b(St.Provider, {
    value: {
      InsertToSqlDb: a,
      userDetails: t,
      setUserDetails: n,
      userNotFound: r,
      setUserNotFound: o,
      getUserId: i,
      searchUser: s,
    },
    children: e,
  });
}
const hl = T.exports.createContext();
function Yb({ children: e }) {
  const [t, n] = T.exports.useState([]),
    { userDetails: r } = T.exports.useContext(St),
    [o, i] = T.exports.useState(""),
    [a, s] = T.exports.useState(""),
    [u, l] = T.exports.useState(null),
    [c, f] = T.exports.useState(null),
    h = `${u == null ? void 0 : u.getFullYear()}-${
      (u == null ? void 0 : u.getMonth()) + 1
    }-${u == null ? void 0 : u.getDate()}`,
    m = `${c == null ? void 0 : c.getFullYear()}-${
      (c == null ? void 0 : c.getMonth()) + 1
    }-${c == null ? void 0 : c.getDate()}`,
    v = () => {
      (o === "") & (a === "") & (u === null) & (c === null)
        ? Te.post("https://scrypt-backend-node.herokuapp.com/gallery", r).then(
            (g) => n(g.data)
          )
        : o !== ""
        ? (a === "") & (u === null) & (c === null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?title=${o}`,
              r
            ).then((g) => n(g.data))
          : (a !== "") & (u === null) & (c === null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?title=${o}&status=${a}`,
              r
            ).then((g) => n(g.data))
          : (a === "") & (u !== null) & (c === null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?title=${o}&start=${h}`,
              r
            ).then((g) => n(g.data))
          : (a === "") & (u === null) & (c !== null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?title=${o}&end=${m}`,
              r
            ).then((g) => n(g.data))
          : (a !== "") & (u !== null) & (c === null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?title=${o}&status=${a}&start=${h}`,
              r
            ).then((g) => n(g.data))
          : (a !== "") & (u === null) & (c !== null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?title=${o}&status=${a}&end=${m}`,
              r
            ).then((g) => n(g.data))
          : (a === "") & (u !== null) & (c !== null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?title=${o}&start=${h}&end=${m}`,
              r
            ).then((g) => n(g.data))
          : Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?title=${o}&status=${a}&start=${h}&end=${m}`,
              r
            ).then((g) => n(g.data))
        : a !== ""
        ? (u === null) & (c === null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?status=${a}`,
              r
            ).then((g) => n(g.data))
          : (u !== null) & (c === null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?status=${a}&start=${h}`,
              r
            ).then((g) => n(g.data))
          : (u === null) & (c !== null)
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?status=${a}&end=${m}`,
              r
            ).then((g) => n(g.data))
          : Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?status=${a}&start=${h}&end=${m}`,
              r
            ).then((g) => n(g.data))
        : u !== null
        ? c === null
          ? Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?start=${h}`,
              r
            ).then((g) => n(g.data))
          : Te.post(
              `https://scrypt-backend-node.herokuapp.com/gallery?start=${h}&end=${m}`,
              r
            ).then((g) => n(g.data))
        : c !== null &&
          Te.post(
            `https://scrypt-backend-node.herokuapp.com/gallery?end=${m}`,
            r
          ).then((g) => n(g.data));
    };
  return b(hl.Provider, {
    value: {
      certificates: t,
      getCertificates: v,
      search: o,
      setSearch: i,
      status: a,
      setStatus: s,
      startDate: u,
      setStartDate: l,
      endDate: c,
      setEndDate: f,
    },
    children: e,
  });
}
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var Vb = (function () {
    function e(n) {
      var r = n || {},
        o = r.ValidationData,
        i = r.Username,
        a = r.Password,
        s = r.AuthParameters,
        u = r.ClientMetadata;
      (this.validationData = o || {}),
        (this.authParameters = s || {}),
        (this.clientMetadata = u || {}),
        (this.username = i),
        (this.password = a);
    }
    var t = e.prototype;
    return (
      (t.getUsername = function () {
        return this.username;
      }),
      (t.getPassword = function () {
        return this.password;
      }),
      (t.getValidationData = function () {
        return this.validationData;
      }),
      (t.getAuthParameters = function () {
        return this.authParameters;
      }),
      (t.getClientMetadata = function () {
        return this.clientMetadata;
      }),
      e
    );
  })(),
  xe = {},
  ml = {};
ml.byteLength = Kb;
ml.toByteArray = Qb;
ml.fromByteArray = Zb;
var pn = [],
  Ft = [],
  Wb = typeof Uint8Array != "undefined" ? Uint8Array : Array,
  oc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var $r = 0, zb = oc.length; $r < zb; ++$r)
  (pn[$r] = oc[$r]), (Ft[oc.charCodeAt($r)] = $r);
Ft["-".charCodeAt(0)] = 62;
Ft["_".charCodeAt(0)] = 63;
function V0(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - (n % 4);
  return [n, r];
}
function Kb(e) {
  var t = V0(e),
    n = t[0],
    r = t[1];
  return ((n + r) * 3) / 4 - r;
}
function qb(e, t, n) {
  return ((t + n) * 3) / 4 - n;
}
function Qb(e) {
  var t,
    n = V0(e),
    r = n[0],
    o = n[1],
    i = new Wb(qb(e, r, o)),
    a = 0,
    s = o > 0 ? r - 4 : r,
    u;
  for (u = 0; u < s; u += 4)
    (t =
      (Ft[e.charCodeAt(u)] << 18) |
      (Ft[e.charCodeAt(u + 1)] << 12) |
      (Ft[e.charCodeAt(u + 2)] << 6) |
      Ft[e.charCodeAt(u + 3)]),
      (i[a++] = (t >> 16) & 255),
      (i[a++] = (t >> 8) & 255),
      (i[a++] = t & 255);
  return (
    o === 2 &&
      ((t = (Ft[e.charCodeAt(u)] << 2) | (Ft[e.charCodeAt(u + 1)] >> 4)),
      (i[a++] = t & 255)),
    o === 1 &&
      ((t =
        (Ft[e.charCodeAt(u)] << 10) |
        (Ft[e.charCodeAt(u + 1)] << 4) |
        (Ft[e.charCodeAt(u + 2)] >> 2)),
      (i[a++] = (t >> 8) & 255),
      (i[a++] = t & 255)),
    i
  );
}
function Gb(e) {
  return (
    pn[(e >> 18) & 63] + pn[(e >> 12) & 63] + pn[(e >> 6) & 63] + pn[e & 63]
  );
}
function Jb(e, t, n) {
  for (var r, o = [], i = t; i < n; i += 3)
    (r =
      ((e[i] << 16) & 16711680) + ((e[i + 1] << 8) & 65280) + (e[i + 2] & 255)),
      o.push(Gb(r));
  return o.join("");
}
function Zb(e) {
  for (
    var t, n = e.length, r = n % 3, o = [], i = 16383, a = 0, s = n - r;
    a < s;
    a += i
  )
    o.push(Jb(e, a, a + i > s ? s : a + i));
  return (
    r === 1
      ? ((t = e[n - 1]), o.push(pn[t >> 2] + pn[(t << 4) & 63] + "=="))
      : r === 2 &&
        ((t = (e[n - 2] << 8) + e[n - 1]),
        o.push(pn[t >> 10] + pn[(t >> 4) & 63] + pn[(t << 2) & 63] + "=")),
    o.join("")
  );
}
var Gd = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ Gd.read =
  function (e, t, n, r, o) {
    var i,
      a,
      s = o * 8 - r - 1,
      u = (1 << s) - 1,
      l = u >> 1,
      c = -7,
      f = n ? o - 1 : 0,
      h = n ? -1 : 1,
      m = e[t + f];
    for (
      f += h, i = m & ((1 << -c) - 1), m >>= -c, c += s;
      c > 0;
      i = i * 256 + e[t + f], f += h, c -= 8
    );
    for (
      a = i & ((1 << -c) - 1), i >>= -c, c += r;
      c > 0;
      a = a * 256 + e[t + f], f += h, c -= 8
    );
    if (i === 0) i = 1 - l;
    else {
      if (i === u) return a ? NaN : (m ? -1 : 1) * (1 / 0);
      (a = a + Math.pow(2, r)), (i = i - l);
    }
    return (m ? -1 : 1) * a * Math.pow(2, i - r);
  };
Gd.write = function (e, t, n, r, o, i) {
  var a,
    s,
    u,
    l = i * 8 - o - 1,
    c = (1 << l) - 1,
    f = c >> 1,
    h = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    m = r ? 0 : i - 1,
    v = r ? 1 : -1,
    g = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
  for (
    t = Math.abs(t),
      isNaN(t) || t === 1 / 0
        ? ((s = isNaN(t) ? 1 : 0), (a = c))
        : ((a = Math.floor(Math.log(t) / Math.LN2)),
          t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
          a + f >= 1 ? (t += h / u) : (t += h * Math.pow(2, 1 - f)),
          t * u >= 2 && (a++, (u /= 2)),
          a + f >= c
            ? ((s = 0), (a = c))
            : a + f >= 1
            ? ((s = (t * u - 1) * Math.pow(2, o)), (a = a + f))
            : ((s = t * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
    o >= 8;
    e[n + m] = s & 255, m += v, s /= 256, o -= 8
  );
  for (
    a = (a << o) | s, l += o;
    l > 0;
    e[n + m] = a & 255, m += v, a /= 256, l -= 8
  );
  e[n + m - v] |= g * 128;
};
var Xb = {}.toString,
  ex =
    Array.isArray ||
    function (e) {
      return Xb.call(e) == "[object Array]";
    };
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */ (function (e) {
  var t = ml,
    n = Gd,
    r = ex;
  (e.Buffer = s),
    (e.SlowBuffer = y),
    (e.INSPECT_MAX_BYTES = 50),
    (s.TYPED_ARRAY_SUPPORT =
      hi.TYPED_ARRAY_SUPPORT !== void 0 ? hi.TYPED_ARRAY_SUPPORT : o()),
    (e.kMaxLength = i());
  function o() {
    try {
      var S = new Uint8Array(1);
      return (
        (S.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42;
          },
        }),
        S.foo() === 42 &&
          typeof S.subarray == "function" &&
          S.subarray(1, 1).byteLength === 0
      );
    } catch {
      return !1;
    }
  }
  function i() {
    return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function a(S, d) {
    if (i() < d) throw new RangeError("Invalid typed array length");
    return (
      s.TYPED_ARRAY_SUPPORT
        ? ((S = new Uint8Array(d)), (S.__proto__ = s.prototype))
        : (S === null && (S = new s(d)), (S.length = d)),
      S
    );
  }
  function s(S, d, p) {
    if (!s.TYPED_ARRAY_SUPPORT && !(this instanceof s)) return new s(S, d, p);
    if (typeof S == "number") {
      if (typeof d == "string")
        throw new Error(
          "If encoding is specified then the first argument must be a string"
        );
      return f(this, S);
    }
    return u(this, S, d, p);
  }
  (s.poolSize = 8192),
    (s._augment = function (S) {
      return (S.__proto__ = s.prototype), S;
    });
  function u(S, d, p, C) {
    if (typeof d == "number")
      throw new TypeError('"value" argument must not be a number');
    return typeof ArrayBuffer != "undefined" && d instanceof ArrayBuffer
      ? v(S, d, p, C)
      : typeof d == "string"
      ? h(S, d, p)
      : g(S, d);
  }
  (s.from = function (S, d, p) {
    return u(null, S, d, p);
  }),
    s.TYPED_ARRAY_SUPPORT &&
      ((s.prototype.__proto__ = Uint8Array.prototype),
      (s.__proto__ = Uint8Array),
      typeof Symbol != "undefined" &&
        Symbol.species &&
        s[Symbol.species] === s &&
        Object.defineProperty(s, Symbol.species, {
          value: null,
          configurable: !0,
        }));
  function l(S) {
    if (typeof S != "number")
      throw new TypeError('"size" argument must be a number');
    if (S < 0) throw new RangeError('"size" argument must not be negative');
  }
  function c(S, d, p, C) {
    return (
      l(d),
      d <= 0
        ? a(S, d)
        : p !== void 0
        ? typeof C == "string"
          ? a(S, d).fill(p, C)
          : a(S, d).fill(p)
        : a(S, d)
    );
  }
  s.alloc = function (S, d, p) {
    return c(null, S, d, p);
  };
  function f(S, d) {
    if ((l(d), (S = a(S, d < 0 ? 0 : O(d) | 0)), !s.TYPED_ARRAY_SUPPORT))
      for (var p = 0; p < d; ++p) S[p] = 0;
    return S;
  }
  (s.allocUnsafe = function (S) {
    return f(null, S);
  }),
    (s.allocUnsafeSlow = function (S) {
      return f(null, S);
    });
  function h(S, d, p) {
    if (((typeof p != "string" || p === "") && (p = "utf8"), !s.isEncoding(p)))
      throw new TypeError('"encoding" must be a valid string encoding');
    var C = w(d, p) | 0;
    S = a(S, C);
    var A = S.write(d, p);
    return A !== C && (S = S.slice(0, A)), S;
  }
  function m(S, d) {
    var p = d.length < 0 ? 0 : O(d.length) | 0;
    S = a(S, p);
    for (var C = 0; C < p; C += 1) S[C] = d[C] & 255;
    return S;
  }
  function v(S, d, p, C) {
    if ((d.byteLength, p < 0 || d.byteLength < p))
      throw new RangeError("'offset' is out of bounds");
    if (d.byteLength < p + (C || 0))
      throw new RangeError("'length' is out of bounds");
    return (
      p === void 0 && C === void 0
        ? (d = new Uint8Array(d))
        : C === void 0
        ? (d = new Uint8Array(d, p))
        : (d = new Uint8Array(d, p, C)),
      s.TYPED_ARRAY_SUPPORT
        ? ((S = d), (S.__proto__ = s.prototype))
        : (S = m(S, d)),
      S
    );
  }
  function g(S, d) {
    if (s.isBuffer(d)) {
      var p = O(d.length) | 0;
      return (S = a(S, p)), S.length === 0 || d.copy(S, 0, 0, p), S;
    }
    if (d) {
      if (
        (typeof ArrayBuffer != "undefined" &&
          d.buffer instanceof ArrayBuffer) ||
        "length" in d
      )
        return typeof d.length != "number" || be(d.length) ? a(S, 0) : m(S, d);
      if (d.type === "Buffer" && r(d.data)) return m(S, d.data);
    }
    throw new TypeError(
      "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
    );
  }
  function O(S) {
    if (S >= i())
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          i().toString(16) +
          " bytes"
      );
    return S | 0;
  }
  function y(S) {
    return +S != S && (S = 0), s.alloc(+S);
  }
  (s.isBuffer = function (d) {
    return !!(d != null && d._isBuffer);
  }),
    (s.compare = function (d, p) {
      if (!s.isBuffer(d) || !s.isBuffer(p))
        throw new TypeError("Arguments must be Buffers");
      if (d === p) return 0;
      for (
        var C = d.length, A = p.length, V = 0, z = Math.min(C, A);
        V < z;
        ++V
      )
        if (d[V] !== p[V]) {
          (C = d[V]), (A = p[V]);
          break;
        }
      return C < A ? -1 : A < C ? 1 : 0;
    }),
    (s.isEncoding = function (d) {
      switch (String(d).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (s.concat = function (d, p) {
      if (!r(d))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (d.length === 0) return s.alloc(0);
      var C;
      if (p === void 0) for (p = 0, C = 0; C < d.length; ++C) p += d[C].length;
      var A = s.allocUnsafe(p),
        V = 0;
      for (C = 0; C < d.length; ++C) {
        var z = d[C];
        if (!s.isBuffer(z))
          throw new TypeError('"list" argument must be an Array of Buffers');
        z.copy(A, V), (V += z.length);
      }
      return A;
    });
  function w(S, d) {
    if (s.isBuffer(S)) return S.length;
    if (
      typeof ArrayBuffer != "undefined" &&
      typeof ArrayBuffer.isView == "function" &&
      (ArrayBuffer.isView(S) || S instanceof ArrayBuffer)
    )
      return S.byteLength;
    typeof S != "string" && (S = "" + S);
    var p = S.length;
    if (p === 0) return 0;
    for (var C = !1; ; )
      switch (d) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
        case void 0:
          return Ve(S).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return ut(S).length;
        default:
          if (C) return Ve(S).length;
          (d = ("" + d).toLowerCase()), (C = !0);
      }
  }
  s.byteLength = w;
  function _(S, d, p) {
    var C = !1;
    if (
      ((d === void 0 || d < 0) && (d = 0),
      d > this.length ||
        ((p === void 0 || p > this.length) && (p = this.length), p <= 0) ||
        ((p >>>= 0), (d >>>= 0), p <= d))
    )
      return "";
    for (S || (S = "utf8"); ; )
      switch (S) {
        case "hex":
          return M(this, d, p);
        case "utf8":
        case "utf-8":
          return W(this, d, p);
        case "ascii":
          return ie(this, d, p);
        case "latin1":
        case "binary":
          return K(this, d, p);
        case "base64":
          return R(this, d, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return N(this, d, p);
        default:
          if (C) throw new TypeError("Unknown encoding: " + S);
          (S = (S + "").toLowerCase()), (C = !0);
      }
  }
  s.prototype._isBuffer = !0;
  function E(S, d, p) {
    var C = S[d];
    (S[d] = S[p]), (S[p] = C);
  }
  (s.prototype.swap16 = function () {
    var d = this.length;
    if (d % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var p = 0; p < d; p += 2) E(this, p, p + 1);
    return this;
  }),
    (s.prototype.swap32 = function () {
      var d = this.length;
      if (d % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var p = 0; p < d; p += 4) E(this, p, p + 3), E(this, p + 1, p + 2);
      return this;
    }),
    (s.prototype.swap64 = function () {
      var d = this.length;
      if (d % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var p = 0; p < d; p += 8)
        E(this, p, p + 7),
          E(this, p + 1, p + 6),
          E(this, p + 2, p + 5),
          E(this, p + 3, p + 4);
      return this;
    }),
    (s.prototype.toString = function () {
      var d = this.length | 0;
      return d === 0
        ? ""
        : arguments.length === 0
        ? W(this, 0, d)
        : _.apply(this, arguments);
    }),
    (s.prototype.equals = function (d) {
      if (!s.isBuffer(d)) throw new TypeError("Argument must be a Buffer");
      return this === d ? !0 : s.compare(this, d) === 0;
    }),
    (s.prototype.inspect = function () {
      var d = "",
        p = e.INSPECT_MAX_BYTES;
      return (
        this.length > 0 &&
          ((d = this.toString("hex", 0, p).match(/.{2}/g).join(" ")),
          this.length > p && (d += " ... ")),
        "<Buffer " + d + ">"
      );
    }),
    (s.prototype.compare = function (d, p, C, A, V) {
      if (!s.isBuffer(d)) throw new TypeError("Argument must be a Buffer");
      if (
        (p === void 0 && (p = 0),
        C === void 0 && (C = d ? d.length : 0),
        A === void 0 && (A = 0),
        V === void 0 && (V = this.length),
        p < 0 || C > d.length || A < 0 || V > this.length)
      )
        throw new RangeError("out of range index");
      if (A >= V && p >= C) return 0;
      if (A >= V) return -1;
      if (p >= C) return 1;
      if (((p >>>= 0), (C >>>= 0), (A >>>= 0), (V >>>= 0), this === d))
        return 0;
      for (
        var z = V - A,
          ue = C - p,
          ge = Math.min(z, ue),
          _e = this.slice(A, V),
          ze = d.slice(p, C),
          Ie = 0;
        Ie < ge;
        ++Ie
      )
        if (_e[Ie] !== ze[Ie]) {
          (z = _e[Ie]), (ue = ze[Ie]);
          break;
        }
      return z < ue ? -1 : ue < z ? 1 : 0;
    });
  function U(S, d, p, C, A) {
    if (S.length === 0) return -1;
    if (
      (typeof p == "string"
        ? ((C = p), (p = 0))
        : p > 2147483647
        ? (p = 2147483647)
        : p < -2147483648 && (p = -2147483648),
      (p = +p),
      isNaN(p) && (p = A ? 0 : S.length - 1),
      p < 0 && (p = S.length + p),
      p >= S.length)
    ) {
      if (A) return -1;
      p = S.length - 1;
    } else if (p < 0)
      if (A) p = 0;
      else return -1;
    if ((typeof d == "string" && (d = s.from(d, C)), s.isBuffer(d)))
      return d.length === 0 ? -1 : L(S, d, p, C, A);
    if (typeof d == "number")
      return (
        (d = d & 255),
        s.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf == "function"
          ? A
            ? Uint8Array.prototype.indexOf.call(S, d, p)
            : Uint8Array.prototype.lastIndexOf.call(S, d, p)
          : L(S, [d], p, C, A)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function L(S, d, p, C, A) {
    var V = 1,
      z = S.length,
      ue = d.length;
    if (
      C !== void 0 &&
      ((C = String(C).toLowerCase()),
      C === "ucs2" || C === "ucs-2" || C === "utf16le" || C === "utf-16le")
    ) {
      if (S.length < 2 || d.length < 2) return -1;
      (V = 2), (z /= 2), (ue /= 2), (p /= 2);
    }
    function ge(_h, bh) {
      return V === 1 ? _h[bh] : _h.readUInt16BE(bh * V);
    }
    var _e;
    if (A) {
      var ze = -1;
      for (_e = p; _e < z; _e++)
        if (ge(S, _e) === ge(d, ze === -1 ? 0 : _e - ze)) {
          if ((ze === -1 && (ze = _e), _e - ze + 1 === ue)) return ze * V;
        } else ze !== -1 && (_e -= _e - ze), (ze = -1);
    } else
      for (p + ue > z && (p = z - ue), _e = p; _e >= 0; _e--) {
        for (var Ie = !0, Xi = 0; Xi < ue; Xi++)
          if (ge(S, _e + Xi) !== ge(d, Xi)) {
            Ie = !1;
            break;
          }
        if (Ie) return _e;
      }
    return -1;
  }
  (s.prototype.includes = function (d, p, C) {
    return this.indexOf(d, p, C) !== -1;
  }),
    (s.prototype.indexOf = function (d, p, C) {
      return U(this, d, p, C, !0);
    }),
    (s.prototype.lastIndexOf = function (d, p, C) {
      return U(this, d, p, C, !1);
    });
  function j(S, d, p, C) {
    p = Number(p) || 0;
    var A = S.length - p;
    C ? ((C = Number(C)), C > A && (C = A)) : (C = A);
    var V = d.length;
    if (V % 2 !== 0) throw new TypeError("Invalid hex string");
    C > V / 2 && (C = V / 2);
    for (var z = 0; z < C; ++z) {
      var ue = parseInt(d.substr(z * 2, 2), 16);
      if (isNaN(ue)) return z;
      S[p + z] = ue;
    }
    return z;
  }
  function $(S, d, p, C) {
    return We(Ve(d, S.length - p), S, p, C);
  }
  function Q(S, d, p, C) {
    return We(st(d), S, p, C);
  }
  function k(S, d, p, C) {
    return Q(S, d, p, C);
  }
  function I(S, d, p, C) {
    return We(ut(d), S, p, C);
  }
  function D(S, d, p, C) {
    return We(ke(d, S.length - p), S, p, C);
  }
  (s.prototype.write = function (d, p, C, A) {
    if (p === void 0) (A = "utf8"), (C = this.length), (p = 0);
    else if (C === void 0 && typeof p == "string")
      (A = p), (C = this.length), (p = 0);
    else if (isFinite(p))
      (p = p | 0),
        isFinite(C)
          ? ((C = C | 0), A === void 0 && (A = "utf8"))
          : ((A = C), (C = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var V = this.length - p;
    if (
      ((C === void 0 || C > V) && (C = V),
      (d.length > 0 && (C < 0 || p < 0)) || p > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    for (var z = !1; ; )
      switch (A) {
        case "hex":
          return j(this, d, p, C);
        case "utf8":
        case "utf-8":
          return $(this, d, p, C);
        case "ascii":
          return Q(this, d, p, C);
        case "latin1":
        case "binary":
          return k(this, d, p, C);
        case "base64":
          return I(this, d, p, C);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return D(this, d, p, C);
        default:
          if (z) throw new TypeError("Unknown encoding: " + A);
          (A = ("" + A).toLowerCase()), (z = !0);
      }
  }),
    (s.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function R(S, d, p) {
    return d === 0 && p === S.length
      ? t.fromByteArray(S)
      : t.fromByteArray(S.slice(d, p));
  }
  function W(S, d, p) {
    p = Math.min(S.length, p);
    for (var C = [], A = d; A < p; ) {
      var V = S[A],
        z = null,
        ue = V > 239 ? 4 : V > 223 ? 3 : V > 191 ? 2 : 1;
      if (A + ue <= p) {
        var ge, _e, ze, Ie;
        switch (ue) {
          case 1:
            V < 128 && (z = V);
            break;
          case 2:
            (ge = S[A + 1]),
              (ge & 192) === 128 &&
                ((Ie = ((V & 31) << 6) | (ge & 63)), Ie > 127 && (z = Ie));
            break;
          case 3:
            (ge = S[A + 1]),
              (_e = S[A + 2]),
              (ge & 192) === 128 &&
                (_e & 192) === 128 &&
                ((Ie = ((V & 15) << 12) | ((ge & 63) << 6) | (_e & 63)),
                Ie > 2047 && (Ie < 55296 || Ie > 57343) && (z = Ie));
            break;
          case 4:
            (ge = S[A + 1]),
              (_e = S[A + 2]),
              (ze = S[A + 3]),
              (ge & 192) === 128 &&
                (_e & 192) === 128 &&
                (ze & 192) === 128 &&
                ((Ie =
                  ((V & 15) << 18) |
                  ((ge & 63) << 12) |
                  ((_e & 63) << 6) |
                  (ze & 63)),
                Ie > 65535 && Ie < 1114112 && (z = Ie));
        }
      }
      z === null
        ? ((z = 65533), (ue = 1))
        : z > 65535 &&
          ((z -= 65536),
          C.push(((z >>> 10) & 1023) | 55296),
          (z = 56320 | (z & 1023))),
        C.push(z),
        (A += ue);
    }
    return J(C);
  }
  var F = 4096;
  function J(S) {
    var d = S.length;
    if (d <= F) return String.fromCharCode.apply(String, S);
    for (var p = "", C = 0; C < d; )
      p += String.fromCharCode.apply(String, S.slice(C, (C += F)));
    return p;
  }
  function ie(S, d, p) {
    var C = "";
    p = Math.min(S.length, p);
    for (var A = d; A < p; ++A) C += String.fromCharCode(S[A] & 127);
    return C;
  }
  function K(S, d, p) {
    var C = "";
    p = Math.min(S.length, p);
    for (var A = d; A < p; ++A) C += String.fromCharCode(S[A]);
    return C;
  }
  function M(S, d, p) {
    var C = S.length;
    (!d || d < 0) && (d = 0), (!p || p < 0 || p > C) && (p = C);
    for (var A = "", V = d; V < p; ++V) A += Ge(S[V]);
    return A;
  }
  function N(S, d, p) {
    for (var C = S.slice(d, p), A = "", V = 0; V < C.length; V += 2)
      A += String.fromCharCode(C[V] + C[V + 1] * 256);
    return A;
  }
  s.prototype.slice = function (d, p) {
    var C = this.length;
    (d = ~~d),
      (p = p === void 0 ? C : ~~p),
      d < 0 ? ((d += C), d < 0 && (d = 0)) : d > C && (d = C),
      p < 0 ? ((p += C), p < 0 && (p = 0)) : p > C && (p = C),
      p < d && (p = d);
    var A;
    if (s.TYPED_ARRAY_SUPPORT)
      (A = this.subarray(d, p)), (A.__proto__ = s.prototype);
    else {
      var V = p - d;
      A = new s(V, void 0);
      for (var z = 0; z < V; ++z) A[z] = this[z + d];
    }
    return A;
  };
  function G(S, d, p) {
    if (S % 1 !== 0 || S < 0) throw new RangeError("offset is not uint");
    if (S + d > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (s.prototype.readUIntLE = function (d, p, C) {
    (d = d | 0), (p = p | 0), C || G(d, p, this.length);
    for (var A = this[d], V = 1, z = 0; ++z < p && (V *= 256); )
      A += this[d + z] * V;
    return A;
  }),
    (s.prototype.readUIntBE = function (d, p, C) {
      (d = d | 0), (p = p | 0), C || G(d, p, this.length);
      for (var A = this[d + --p], V = 1; p > 0 && (V *= 256); )
        A += this[d + --p] * V;
      return A;
    }),
    (s.prototype.readUInt8 = function (d, p) {
      return p || G(d, 1, this.length), this[d];
    }),
    (s.prototype.readUInt16LE = function (d, p) {
      return p || G(d, 2, this.length), this[d] | (this[d + 1] << 8);
    }),
    (s.prototype.readUInt16BE = function (d, p) {
      return p || G(d, 2, this.length), (this[d] << 8) | this[d + 1];
    }),
    (s.prototype.readUInt32LE = function (d, p) {
      return (
        p || G(d, 4, this.length),
        (this[d] | (this[d + 1] << 8) | (this[d + 2] << 16)) +
          this[d + 3] * 16777216
      );
    }),
    (s.prototype.readUInt32BE = function (d, p) {
      return (
        p || G(d, 4, this.length),
        this[d] * 16777216 +
          ((this[d + 1] << 16) | (this[d + 2] << 8) | this[d + 3])
      );
    }),
    (s.prototype.readIntLE = function (d, p, C) {
      (d = d | 0), (p = p | 0), C || G(d, p, this.length);
      for (var A = this[d], V = 1, z = 0; ++z < p && (V *= 256); )
        A += this[d + z] * V;
      return (V *= 128), A >= V && (A -= Math.pow(2, 8 * p)), A;
    }),
    (s.prototype.readIntBE = function (d, p, C) {
      (d = d | 0), (p = p | 0), C || G(d, p, this.length);
      for (var A = p, V = 1, z = this[d + --A]; A > 0 && (V *= 256); )
        z += this[d + --A] * V;
      return (V *= 128), z >= V && (z -= Math.pow(2, 8 * p)), z;
    }),
    (s.prototype.readInt8 = function (d, p) {
      return (
        p || G(d, 1, this.length),
        this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d]
      );
    }),
    (s.prototype.readInt16LE = function (d, p) {
      p || G(d, 2, this.length);
      var C = this[d] | (this[d + 1] << 8);
      return C & 32768 ? C | 4294901760 : C;
    }),
    (s.prototype.readInt16BE = function (d, p) {
      p || G(d, 2, this.length);
      var C = this[d + 1] | (this[d] << 8);
      return C & 32768 ? C | 4294901760 : C;
    }),
    (s.prototype.readInt32LE = function (d, p) {
      return (
        p || G(d, 4, this.length),
        this[d] | (this[d + 1] << 8) | (this[d + 2] << 16) | (this[d + 3] << 24)
      );
    }),
    (s.prototype.readInt32BE = function (d, p) {
      return (
        p || G(d, 4, this.length),
        (this[d] << 24) | (this[d + 1] << 16) | (this[d + 2] << 8) | this[d + 3]
      );
    }),
    (s.prototype.readFloatLE = function (d, p) {
      return p || G(d, 4, this.length), n.read(this, d, !0, 23, 4);
    }),
    (s.prototype.readFloatBE = function (d, p) {
      return p || G(d, 4, this.length), n.read(this, d, !1, 23, 4);
    }),
    (s.prototype.readDoubleLE = function (d, p) {
      return p || G(d, 8, this.length), n.read(this, d, !0, 52, 8);
    }),
    (s.prototype.readDoubleBE = function (d, p) {
      return p || G(d, 8, this.length), n.read(this, d, !1, 52, 8);
    });
  function Y(S, d, p, C, A, V) {
    if (!s.isBuffer(S))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (d > A || d < V)
      throw new RangeError('"value" argument is out of bounds');
    if (p + C > S.length) throw new RangeError("Index out of range");
  }
  (s.prototype.writeUIntLE = function (d, p, C, A) {
    if (((d = +d), (p = p | 0), (C = C | 0), !A)) {
      var V = Math.pow(2, 8 * C) - 1;
      Y(this, d, p, C, V, 0);
    }
    var z = 1,
      ue = 0;
    for (this[p] = d & 255; ++ue < C && (z *= 256); )
      this[p + ue] = (d / z) & 255;
    return p + C;
  }),
    (s.prototype.writeUIntBE = function (d, p, C, A) {
      if (((d = +d), (p = p | 0), (C = C | 0), !A)) {
        var V = Math.pow(2, 8 * C) - 1;
        Y(this, d, p, C, V, 0);
      }
      var z = C - 1,
        ue = 1;
      for (this[p + z] = d & 255; --z >= 0 && (ue *= 256); )
        this[p + z] = (d / ue) & 255;
      return p + C;
    }),
    (s.prototype.writeUInt8 = function (d, p, C) {
      return (
        (d = +d),
        (p = p | 0),
        C || Y(this, d, p, 1, 255, 0),
        s.TYPED_ARRAY_SUPPORT || (d = Math.floor(d)),
        (this[p] = d & 255),
        p + 1
      );
    });
  function ee(S, d, p, C) {
    d < 0 && (d = 65535 + d + 1);
    for (var A = 0, V = Math.min(S.length - p, 2); A < V; ++A)
      S[p + A] = (d & (255 << (8 * (C ? A : 1 - A)))) >>> ((C ? A : 1 - A) * 8);
  }
  (s.prototype.writeUInt16LE = function (d, p, C) {
    return (
      (d = +d),
      (p = p | 0),
      C || Y(this, d, p, 2, 65535, 0),
      s.TYPED_ARRAY_SUPPORT
        ? ((this[p] = d & 255), (this[p + 1] = d >>> 8))
        : ee(this, d, p, !0),
      p + 2
    );
  }),
    (s.prototype.writeUInt16BE = function (d, p, C) {
      return (
        (d = +d),
        (p = p | 0),
        C || Y(this, d, p, 2, 65535, 0),
        s.TYPED_ARRAY_SUPPORT
          ? ((this[p] = d >>> 8), (this[p + 1] = d & 255))
          : ee(this, d, p, !1),
        p + 2
      );
    });
  function re(S, d, p, C) {
    d < 0 && (d = 4294967295 + d + 1);
    for (var A = 0, V = Math.min(S.length - p, 4); A < V; ++A)
      S[p + A] = (d >>> ((C ? A : 3 - A) * 8)) & 255;
  }
  (s.prototype.writeUInt32LE = function (d, p, C) {
    return (
      (d = +d),
      (p = p | 0),
      C || Y(this, d, p, 4, 4294967295, 0),
      s.TYPED_ARRAY_SUPPORT
        ? ((this[p + 3] = d >>> 24),
          (this[p + 2] = d >>> 16),
          (this[p + 1] = d >>> 8),
          (this[p] = d & 255))
        : re(this, d, p, !0),
      p + 4
    );
  }),
    (s.prototype.writeUInt32BE = function (d, p, C) {
      return (
        (d = +d),
        (p = p | 0),
        C || Y(this, d, p, 4, 4294967295, 0),
        s.TYPED_ARRAY_SUPPORT
          ? ((this[p] = d >>> 24),
            (this[p + 1] = d >>> 16),
            (this[p + 2] = d >>> 8),
            (this[p + 3] = d & 255))
          : re(this, d, p, !1),
        p + 4
      );
    }),
    (s.prototype.writeIntLE = function (d, p, C, A) {
      if (((d = +d), (p = p | 0), !A)) {
        var V = Math.pow(2, 8 * C - 1);
        Y(this, d, p, C, V - 1, -V);
      }
      var z = 0,
        ue = 1,
        ge = 0;
      for (this[p] = d & 255; ++z < C && (ue *= 256); )
        d < 0 && ge === 0 && this[p + z - 1] !== 0 && (ge = 1),
          (this[p + z] = (((d / ue) >> 0) - ge) & 255);
      return p + C;
    }),
    (s.prototype.writeIntBE = function (d, p, C, A) {
      if (((d = +d), (p = p | 0), !A)) {
        var V = Math.pow(2, 8 * C - 1);
        Y(this, d, p, C, V - 1, -V);
      }
      var z = C - 1,
        ue = 1,
        ge = 0;
      for (this[p + z] = d & 255; --z >= 0 && (ue *= 256); )
        d < 0 && ge === 0 && this[p + z + 1] !== 0 && (ge = 1),
          (this[p + z] = (((d / ue) >> 0) - ge) & 255);
      return p + C;
    }),
    (s.prototype.writeInt8 = function (d, p, C) {
      return (
        (d = +d),
        (p = p | 0),
        C || Y(this, d, p, 1, 127, -128),
        s.TYPED_ARRAY_SUPPORT || (d = Math.floor(d)),
        d < 0 && (d = 255 + d + 1),
        (this[p] = d & 255),
        p + 1
      );
    }),
    (s.prototype.writeInt16LE = function (d, p, C) {
      return (
        (d = +d),
        (p = p | 0),
        C || Y(this, d, p, 2, 32767, -32768),
        s.TYPED_ARRAY_SUPPORT
          ? ((this[p] = d & 255), (this[p + 1] = d >>> 8))
          : ee(this, d, p, !0),
        p + 2
      );
    }),
    (s.prototype.writeInt16BE = function (d, p, C) {
      return (
        (d = +d),
        (p = p | 0),
        C || Y(this, d, p, 2, 32767, -32768),
        s.TYPED_ARRAY_SUPPORT
          ? ((this[p] = d >>> 8), (this[p + 1] = d & 255))
          : ee(this, d, p, !1),
        p + 2
      );
    }),
    (s.prototype.writeInt32LE = function (d, p, C) {
      return (
        (d = +d),
        (p = p | 0),
        C || Y(this, d, p, 4, 2147483647, -2147483648),
        s.TYPED_ARRAY_SUPPORT
          ? ((this[p] = d & 255),
            (this[p + 1] = d >>> 8),
            (this[p + 2] = d >>> 16),
            (this[p + 3] = d >>> 24))
          : re(this, d, p, !0),
        p + 4
      );
    }),
    (s.prototype.writeInt32BE = function (d, p, C) {
      return (
        (d = +d),
        (p = p | 0),
        C || Y(this, d, p, 4, 2147483647, -2147483648),
        d < 0 && (d = 4294967295 + d + 1),
        s.TYPED_ARRAY_SUPPORT
          ? ((this[p] = d >>> 24),
            (this[p + 1] = d >>> 16),
            (this[p + 2] = d >>> 8),
            (this[p + 3] = d & 255))
          : re(this, d, p, !1),
        p + 4
      );
    });
  function ae(S, d, p, C, A, V) {
    if (p + C > S.length) throw new RangeError("Index out of range");
    if (p < 0) throw new RangeError("Index out of range");
  }
  function ce(S, d, p, C, A) {
    return A || ae(S, d, p, 4), n.write(S, d, p, C, 23, 4), p + 4;
  }
  (s.prototype.writeFloatLE = function (d, p, C) {
    return ce(this, d, p, !0, C);
  }),
    (s.prototype.writeFloatBE = function (d, p, C) {
      return ce(this, d, p, !1, C);
    });
  function Ce(S, d, p, C, A) {
    return A || ae(S, d, p, 8), n.write(S, d, p, C, 52, 8), p + 8;
  }
  (s.prototype.writeDoubleLE = function (d, p, C) {
    return Ce(this, d, p, !0, C);
  }),
    (s.prototype.writeDoubleBE = function (d, p, C) {
      return Ce(this, d, p, !1, C);
    }),
    (s.prototype.copy = function (d, p, C, A) {
      if (
        (C || (C = 0),
        !A && A !== 0 && (A = this.length),
        p >= d.length && (p = d.length),
        p || (p = 0),
        A > 0 && A < C && (A = C),
        A === C || d.length === 0 || this.length === 0)
      )
        return 0;
      if (p < 0) throw new RangeError("targetStart out of bounds");
      if (C < 0 || C >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (A < 0) throw new RangeError("sourceEnd out of bounds");
      A > this.length && (A = this.length),
        d.length - p < A - C && (A = d.length - p + C);
      var V = A - C,
        z;
      if (this === d && C < p && p < A)
        for (z = V - 1; z >= 0; --z) d[z + p] = this[z + C];
      else if (V < 1e3 || !s.TYPED_ARRAY_SUPPORT)
        for (z = 0; z < V; ++z) d[z + p] = this[z + C];
      else Uint8Array.prototype.set.call(d, this.subarray(C, C + V), p);
      return V;
    }),
    (s.prototype.fill = function (d, p, C, A) {
      if (typeof d == "string") {
        if (
          (typeof p == "string"
            ? ((A = p), (p = 0), (C = this.length))
            : typeof C == "string" && ((A = C), (C = this.length)),
          d.length === 1)
        ) {
          var V = d.charCodeAt(0);
          V < 256 && (d = V);
        }
        if (A !== void 0 && typeof A != "string")
          throw new TypeError("encoding must be a string");
        if (typeof A == "string" && !s.isEncoding(A))
          throw new TypeError("Unknown encoding: " + A);
      } else typeof d == "number" && (d = d & 255);
      if (p < 0 || this.length < p || this.length < C)
        throw new RangeError("Out of range index");
      if (C <= p) return this;
      (p = p >>> 0), (C = C === void 0 ? this.length : C >>> 0), d || (d = 0);
      var z;
      if (typeof d == "number") for (z = p; z < C; ++z) this[z] = d;
      else {
        var ue = s.isBuffer(d) ? d : Ve(new s(d, A).toString()),
          ge = ue.length;
        for (z = 0; z < C - p; ++z) this[z + p] = ue[z % ge];
      }
      return this;
    });
  var fe = /[^+\/0-9A-Za-z-_]/g;
  function se(S) {
    if (((S = ye(S).replace(fe, "")), S.length < 2)) return "";
    for (; S.length % 4 !== 0; ) S = S + "=";
    return S;
  }
  function ye(S) {
    return S.trim ? S.trim() : S.replace(/^\s+|\s+$/g, "");
  }
  function Ge(S) {
    return S < 16 ? "0" + S.toString(16) : S.toString(16);
  }
  function Ve(S, d) {
    d = d || 1 / 0;
    for (var p, C = S.length, A = null, V = [], z = 0; z < C; ++z) {
      if (((p = S.charCodeAt(z)), p > 55295 && p < 57344)) {
        if (!A) {
          if (p > 56319) {
            (d -= 3) > -1 && V.push(239, 191, 189);
            continue;
          } else if (z + 1 === C) {
            (d -= 3) > -1 && V.push(239, 191, 189);
            continue;
          }
          A = p;
          continue;
        }
        if (p < 56320) {
          (d -= 3) > -1 && V.push(239, 191, 189), (A = p);
          continue;
        }
        p = (((A - 55296) << 10) | (p - 56320)) + 65536;
      } else A && (d -= 3) > -1 && V.push(239, 191, 189);
      if (((A = null), p < 128)) {
        if ((d -= 1) < 0) break;
        V.push(p);
      } else if (p < 2048) {
        if ((d -= 2) < 0) break;
        V.push((p >> 6) | 192, (p & 63) | 128);
      } else if (p < 65536) {
        if ((d -= 3) < 0) break;
        V.push((p >> 12) | 224, ((p >> 6) & 63) | 128, (p & 63) | 128);
      } else if (p < 1114112) {
        if ((d -= 4) < 0) break;
        V.push(
          (p >> 18) | 240,
          ((p >> 12) & 63) | 128,
          ((p >> 6) & 63) | 128,
          (p & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return V;
  }
  function st(S) {
    for (var d = [], p = 0; p < S.length; ++p) d.push(S.charCodeAt(p) & 255);
    return d;
  }
  function ke(S, d) {
    for (var p, C, A, V = [], z = 0; z < S.length && !((d -= 2) < 0); ++z)
      (p = S.charCodeAt(z)), (C = p >> 8), (A = p % 256), V.push(A), V.push(C);
    return V;
  }
  function ut(S) {
    return t.toByteArray(se(S));
  }
  function We(S, d, p, C) {
    for (var A = 0; A < C && !(A + p >= d.length || A >= S.length); ++A)
      d[A + p] = S[A];
    return A;
  }
  function be(S) {
    return S !== S;
  }
})(xe);
var jt;
typeof window != "undefined" && window.crypto && (jt = window.crypto);
!jt &&
  typeof window != "undefined" &&
  window.msCrypto &&
  (jt = window.msCrypto);
!jt && typeof global != "undefined" && global.crypto && (jt = global.crypto);
if (!jt && typeof require == "function")
  try {
    jt = require("crypto");
  } catch {}
function tx() {
  if (jt) {
    if (typeof jt.getRandomValues == "function")
      try {
        return jt.getRandomValues(new Uint32Array(1))[0];
      } catch {}
    if (typeof jt.randomBytes == "function")
      try {
        return jt.randomBytes(4).readInt32LE();
      } catch {}
  }
  throw new Error(
    "Native crypto module could not be used to get secure random number."
  );
}
function nx(e) {
  for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
    var i = (t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
    r.push((i >>> 4).toString(16)), r.push((i & 15).toString(16));
  }
  return r.join("");
}
var rx = (function () {
    function e(n, r) {
      (n = this.words = n || []),
        r != null ? (this.sigBytes = r) : (this.sigBytes = n.length * 4);
    }
    var t = e.prototype;
    return (
      (t.random = function (r) {
        for (var o = [], i = 0; i < r; i += 4) o.push(tx());
        return new e(o, r);
      }),
      (t.toString = function () {
        return nx(this);
      }),
      e
    );
  })(),
  so = {},
  Jd = { exports: {} };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ (function (
  e
) {
  var t, n, r, o, i, a, s, u, l, c, f, h, m, v, g, O, y, w, _, E, U, L, j;
  (function ($) {
    var Q =
      typeof hi == "object"
        ? hi
        : typeof self == "object"
        ? self
        : typeof this == "object"
        ? this
        : {};
    $(k(Q, k(e.exports)));
    function k(I, D) {
      return (
        I !== Q &&
          (typeof Object.create == "function"
            ? Object.defineProperty(I, "__esModule", { value: !0 })
            : (I.__esModule = !0)),
        function (R, W) {
          return (I[R] = D ? D(R, W) : W);
        }
      );
    }
  })(function ($) {
    var Q =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (k, I) {
          k.__proto__ = I;
        }) ||
      function (k, I) {
        for (var D in I) I.hasOwnProperty(D) && (k[D] = I[D]);
      };
    (t = function (k, I) {
      Q(k, I);
      function D() {
        this.constructor = k;
      }
      k.prototype =
        I === null ? Object.create(I) : ((D.prototype = I.prototype), new D());
    }),
      (n =
        Object.assign ||
        function (k) {
          for (var I, D = 1, R = arguments.length; D < R; D++) {
            I = arguments[D];
            for (var W in I)
              Object.prototype.hasOwnProperty.call(I, W) && (k[W] = I[W]);
          }
          return k;
        }),
      (r = function (k, I) {
        var D = {};
        for (var R in k)
          Object.prototype.hasOwnProperty.call(k, R) &&
            I.indexOf(R) < 0 &&
            (D[R] = k[R]);
        if (k != null && typeof Object.getOwnPropertySymbols == "function")
          for (
            var W = 0, R = Object.getOwnPropertySymbols(k);
            W < R.length;
            W++
          )
            I.indexOf(R[W]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(k, R[W]) &&
              (D[R[W]] = k[R[W]]);
        return D;
      }),
      (o = function (k, I, D, R) {
        var W = arguments.length,
          F =
            W < 3
              ? I
              : R === null
              ? (R = Object.getOwnPropertyDescriptor(I, D))
              : R,
          J;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          F = Reflect.decorate(k, I, D, R);
        else
          for (var ie = k.length - 1; ie >= 0; ie--)
            (J = k[ie]) &&
              (F = (W < 3 ? J(F) : W > 3 ? J(I, D, F) : J(I, D)) || F);
        return W > 3 && F && Object.defineProperty(I, D, F), F;
      }),
      (i = function (k, I) {
        return function (D, R) {
          I(D, R, k);
        };
      }),
      (a = function (k, I) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(k, I);
      }),
      (s = function (k, I, D, R) {
        function W(F) {
          return F instanceof D
            ? F
            : new D(function (J) {
                J(F);
              });
        }
        return new (D || (D = Promise))(function (F, J) {
          function ie(N) {
            try {
              M(R.next(N));
            } catch (G) {
              J(G);
            }
          }
          function K(N) {
            try {
              M(R.throw(N));
            } catch (G) {
              J(G);
            }
          }
          function M(N) {
            N.done ? F(N.value) : W(N.value).then(ie, K);
          }
          M((R = R.apply(k, I || [])).next());
        });
      }),
      (u = function (k, I) {
        var D = {
            label: 0,
            sent: function () {
              if (F[0] & 1) throw F[1];
              return F[1];
            },
            trys: [],
            ops: [],
          },
          R,
          W,
          F,
          J;
        return (
          (J = { next: ie(0), throw: ie(1), return: ie(2) }),
          typeof Symbol == "function" &&
            (J[Symbol.iterator] = function () {
              return this;
            }),
          J
        );
        function ie(M) {
          return function (N) {
            return K([M, N]);
          };
        }
        function K(M) {
          if (R) throw new TypeError("Generator is already executing.");
          for (; D; )
            try {
              if (
                ((R = 1),
                W &&
                  (F =
                    M[0] & 2
                      ? W.return
                      : M[0]
                      ? W.throw || ((F = W.return) && F.call(W), 0)
                      : W.next) &&
                  !(F = F.call(W, M[1])).done)
              )
                return F;
              switch (((W = 0), F && (M = [M[0] & 2, F.value]), M[0])) {
                case 0:
                case 1:
                  F = M;
                  break;
                case 4:
                  return D.label++, { value: M[1], done: !1 };
                case 5:
                  D.label++, (W = M[1]), (M = [0]);
                  continue;
                case 7:
                  (M = D.ops.pop()), D.trys.pop();
                  continue;
                default:
                  if (
                    ((F = D.trys),
                    !(F = F.length > 0 && F[F.length - 1]) &&
                      (M[0] === 6 || M[0] === 2))
                  ) {
                    D = 0;
                    continue;
                  }
                  if (M[0] === 3 && (!F || (M[1] > F[0] && M[1] < F[3]))) {
                    D.label = M[1];
                    break;
                  }
                  if (M[0] === 6 && D.label < F[1]) {
                    (D.label = F[1]), (F = M);
                    break;
                  }
                  if (F && D.label < F[2]) {
                    (D.label = F[2]), D.ops.push(M);
                    break;
                  }
                  F[2] && D.ops.pop(), D.trys.pop();
                  continue;
              }
              M = I.call(k, D);
            } catch (N) {
              (M = [6, N]), (W = 0);
            } finally {
              R = F = 0;
            }
          if (M[0] & 5) throw M[1];
          return { value: M[0] ? M[1] : void 0, done: !0 };
        }
      }),
      (j = function (k, I, D, R) {
        R === void 0 && (R = D), (k[R] = I[D]);
      }),
      (l = function (k, I) {
        for (var D in k)
          D !== "default" && !I.hasOwnProperty(D) && (I[D] = k[D]);
      }),
      (c = function (k) {
        var I = typeof Symbol == "function" && Symbol.iterator,
          D = I && k[I],
          R = 0;
        if (D) return D.call(k);
        if (k && typeof k.length == "number")
          return {
            next: function () {
              return (
                k && R >= k.length && (k = void 0),
                { value: k && k[R++], done: !k }
              );
            },
          };
        throw new TypeError(
          I ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }),
      (f = function (k, I) {
        var D = typeof Symbol == "function" && k[Symbol.iterator];
        if (!D) return k;
        var R = D.call(k),
          W,
          F = [],
          J;
        try {
          for (; (I === void 0 || I-- > 0) && !(W = R.next()).done; )
            F.push(W.value);
        } catch (ie) {
          J = { error: ie };
        } finally {
          try {
            W && !W.done && (D = R.return) && D.call(R);
          } finally {
            if (J) throw J.error;
          }
        }
        return F;
      }),
      (h = function () {
        for (var k = [], I = 0; I < arguments.length; I++)
          k = k.concat(f(arguments[I]));
        return k;
      }),
      (m = function () {
        for (var k = 0, I = 0, D = arguments.length; I < D; I++)
          k += arguments[I].length;
        for (var R = Array(k), W = 0, I = 0; I < D; I++)
          for (var F = arguments[I], J = 0, ie = F.length; J < ie; J++, W++)
            R[W] = F[J];
        return R;
      }),
      (v = function (k) {
        return this instanceof v ? ((this.v = k), this) : new v(k);
      }),
      (g = function (k, I, D) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var R = D.apply(k, I || []),
          W,
          F = [];
        return (
          (W = {}),
          J("next"),
          J("throw"),
          J("return"),
          (W[Symbol.asyncIterator] = function () {
            return this;
          }),
          W
        );
        function J(Y) {
          R[Y] &&
            (W[Y] = function (ee) {
              return new Promise(function (re, ae) {
                F.push([Y, ee, re, ae]) > 1 || ie(Y, ee);
              });
            });
        }
        function ie(Y, ee) {
          try {
            K(R[Y](ee));
          } catch (re) {
            G(F[0][3], re);
          }
        }
        function K(Y) {
          Y.value instanceof v
            ? Promise.resolve(Y.value.v).then(M, N)
            : G(F[0][2], Y);
        }
        function M(Y) {
          ie("next", Y);
        }
        function N(Y) {
          ie("throw", Y);
        }
        function G(Y, ee) {
          Y(ee), F.shift(), F.length && ie(F[0][0], F[0][1]);
        }
      }),
      (O = function (k) {
        var I, D;
        return (
          (I = {}),
          R("next"),
          R("throw", function (W) {
            throw W;
          }),
          R("return"),
          (I[Symbol.iterator] = function () {
            return this;
          }),
          I
        );
        function R(W, F) {
          I[W] = k[W]
            ? function (J) {
                return (D = !D)
                  ? { value: v(k[W](J)), done: W === "return" }
                  : F
                  ? F(J)
                  : J;
              }
            : F;
        }
      }),
      (y = function (k) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var I = k[Symbol.asyncIterator],
          D;
        return I
          ? I.call(k)
          : ((k = typeof c == "function" ? c(k) : k[Symbol.iterator]()),
            (D = {}),
            R("next"),
            R("throw"),
            R("return"),
            (D[Symbol.asyncIterator] = function () {
              return this;
            }),
            D);
        function R(F) {
          D[F] =
            k[F] &&
            function (J) {
              return new Promise(function (ie, K) {
                (J = k[F](J)), W(ie, K, J.done, J.value);
              });
            };
        }
        function W(F, J, ie, K) {
          Promise.resolve(K).then(function (M) {
            F({ value: M, done: ie });
          }, J);
        }
      }),
      (w = function (k, I) {
        return (
          Object.defineProperty
            ? Object.defineProperty(k, "raw", { value: I })
            : (k.raw = I),
          k
        );
      }),
      (_ = function (k) {
        if (k && k.__esModule) return k;
        var I = {};
        if (k != null)
          for (var D in k) Object.hasOwnProperty.call(k, D) && (I[D] = k[D]);
        return (I.default = k), I;
      }),
      (E = function (k) {
        return k && k.__esModule ? k : { default: k };
      }),
      (U = function (k, I) {
        if (!I.has(k))
          throw new TypeError("attempted to get private field on non-instance");
        return I.get(k);
      }),
      (L = function (k, I, D) {
        if (!I.has(k))
          throw new TypeError("attempted to set private field on non-instance");
        return I.set(k, D), D;
      }),
      $("__extends", t),
      $("__assign", n),
      $("__rest", r),
      $("__decorate", o),
      $("__param", i),
      $("__metadata", a),
      $("__awaiter", s),
      $("__generator", u),
      $("__exportStar", l),
      $("__createBinding", j),
      $("__values", c),
      $("__read", f),
      $("__spread", h),
      $("__spreadArrays", m),
      $("__await", v),
      $("__asyncGenerator", g),
      $("__asyncDelegator", O),
      $("__asyncValues", y),
      $("__makeTemplateObject", w),
      $("__importStar", _),
      $("__importDefault", E),
      $("__classPrivateFieldGet", U),
      $("__classPrivateFieldSet", L);
  });
})(Jd);
var vl = {},
  At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
At.MAX_HASHABLE_LENGTH =
  At.INIT =
  At.KEY =
  At.DIGEST_LENGTH =
  At.BLOCK_SIZE =
    void 0;
At.BLOCK_SIZE = 64;
At.DIGEST_LENGTH = 32;
At.KEY = new Uint32Array([
  1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
  2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
  1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
  264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
  2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
  113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
  1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
  3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
  430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
  1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
  2756734187, 3204031479, 3329325298,
]);
At.INIT = [
  1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
  528734635, 1541459225,
];
At.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
var yl = {};
Object.defineProperty(yl, "__esModule", { value: !0 });
yl.RawSha256 = void 0;
var Lt = At,
  ox = (function () {
    function e() {
      (this.state = Int32Array.from(Lt.INIT)),
        (this.temp = new Int32Array(64)),
        (this.buffer = new Uint8Array(64)),
        (this.bufferLength = 0),
        (this.bytesHashed = 0),
        (this.finished = !1);
    }
    return (
      (e.prototype.update = function (t) {
        if (this.finished)
          throw new Error("Attempted to update an already finished hash.");
        var n = 0,
          r = t.byteLength;
        if (
          ((this.bytesHashed += r),
          this.bytesHashed * 8 > Lt.MAX_HASHABLE_LENGTH)
        )
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        for (; r > 0; )
          (this.buffer[this.bufferLength++] = t[n++]),
            r--,
            this.bufferLength === Lt.BLOCK_SIZE &&
              (this.hashBuffer(), (this.bufferLength = 0));
      }),
      (e.prototype.digest = function () {
        if (!this.finished) {
          var t = this.bytesHashed * 8,
            n = new DataView(
              this.buffer.buffer,
              this.buffer.byteOffset,
              this.buffer.byteLength
            ),
            r = this.bufferLength;
          if (
            (n.setUint8(this.bufferLength++, 128),
            r % Lt.BLOCK_SIZE >= Lt.BLOCK_SIZE - 8)
          ) {
            for (var o = this.bufferLength; o < Lt.BLOCK_SIZE; o++)
              n.setUint8(o, 0);
            this.hashBuffer(), (this.bufferLength = 0);
          }
          for (var o = this.bufferLength; o < Lt.BLOCK_SIZE - 8; o++)
            n.setUint8(o, 0);
          n.setUint32(Lt.BLOCK_SIZE - 8, Math.floor(t / 4294967296), !0),
            n.setUint32(Lt.BLOCK_SIZE - 4, t),
            this.hashBuffer(),
            (this.finished = !0);
        }
        for (var i = new Uint8Array(Lt.DIGEST_LENGTH), o = 0; o < 8; o++)
          (i[o * 4] = (this.state[o] >>> 24) & 255),
            (i[o * 4 + 1] = (this.state[o] >>> 16) & 255),
            (i[o * 4 + 2] = (this.state[o] >>> 8) & 255),
            (i[o * 4 + 3] = (this.state[o] >>> 0) & 255);
        return i;
      }),
      (e.prototype.hashBuffer = function () {
        for (
          var t = this,
            n = t.buffer,
            r = t.state,
            o = r[0],
            i = r[1],
            a = r[2],
            s = r[3],
            u = r[4],
            l = r[5],
            c = r[6],
            f = r[7],
            h = 0;
          h < Lt.BLOCK_SIZE;
          h++
        ) {
          if (h < 16)
            this.temp[h] =
              ((n[h * 4] & 255) << 24) |
              ((n[h * 4 + 1] & 255) << 16) |
              ((n[h * 4 + 2] & 255) << 8) |
              (n[h * 4 + 3] & 255);
          else {
            var m = this.temp[h - 2],
              v =
                ((m >>> 17) | (m << 15)) ^
                ((m >>> 19) | (m << 13)) ^
                (m >>> 10);
            m = this.temp[h - 15];
            var g =
              ((m >>> 7) | (m << 25)) ^ ((m >>> 18) | (m << 14)) ^ (m >>> 3);
            this.temp[h] =
              ((v + this.temp[h - 7]) | 0) + ((g + this.temp[h - 16]) | 0);
          }
          var O =
              ((((((u >>> 6) | (u << 26)) ^
                ((u >>> 11) | (u << 21)) ^
                ((u >>> 25) | (u << 7))) +
                ((u & l) ^ (~u & c))) |
                0) +
                ((f + ((Lt.KEY[h] + this.temp[h]) | 0)) | 0)) |
              0,
            y =
              ((((o >>> 2) | (o << 30)) ^
                ((o >>> 13) | (o << 19)) ^
                ((o >>> 22) | (o << 10))) +
                ((o & i) ^ (o & a) ^ (i & a))) |
              0;
          (f = c),
            (c = l),
            (l = u),
            (u = (s + O) | 0),
            (s = a),
            (a = i),
            (i = o),
            (o = (O + y) | 0);
        }
        (r[0] += o),
          (r[1] += i),
          (r[2] += a),
          (r[3] += s),
          (r[4] += u),
          (r[5] += l),
          (r[6] += c),
          (r[7] += f);
      }),
      e
    );
  })();
yl.RawSha256 = ox;
var W0 = {},
  gl = {};
const ix = (e) => {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e.charCodeAt(n);
      if (o < 128) t.push(o);
      else if (o < 2048) t.push((o >> 6) | 192, (o & 63) | 128);
      else if (
        n + 1 < e.length &&
        (o & 64512) === 55296 &&
        (e.charCodeAt(n + 1) & 64512) === 56320
      ) {
        const i = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++n) & 1023);
        t.push(
          (i >> 18) | 240,
          ((i >> 12) & 63) | 128,
          ((i >> 6) & 63) | 128,
          (i & 63) | 128
        );
      } else t.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (o & 63) | 128);
    }
    return Uint8Array.from(t);
  },
  ax = (e) => {
    let t = "";
    for (let n = 0, r = e.length; n < r; n++) {
      const o = e[n];
      if (o < 128) t += String.fromCharCode(o);
      else if (192 <= o && o < 224) {
        const i = e[++n];
        t += String.fromCharCode(((o & 31) << 6) | (i & 63));
      } else if (240 <= o && o < 365) {
        const i = [o, e[++n], e[++n], e[++n]],
          a = "%" + i.map((s) => s.toString(16)).join("%");
        t += decodeURIComponent(a);
      } else
        t += String.fromCharCode(
          ((o & 15) << 12) | ((e[++n] & 63) << 6) | (e[++n] & 63)
        );
    }
    return t;
  };
function sx(e) {
  return new TextEncoder().encode(e);
}
function ux(e) {
  return new TextDecoder("utf-8").decode(e);
}
const lx = (e) => (typeof TextEncoder == "function" ? sx(e) : ix(e)),
  cx = (e) => (typeof TextDecoder == "function" ? ux(e) : ax(e));
var fx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, fromUtf8: lx, toUtf8: cx },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  px = ug(fx);
Object.defineProperty(gl, "__esModule", { value: !0 });
gl.convertToBuffer = void 0;
var dx = px,
  hx =
    typeof Buffer != "undefined" && Buffer.from
      ? function (e) {
          return Buffer.from(e, "utf8");
        }
      : dx.fromUtf8;
function mx(e) {
  return e instanceof Uint8Array
    ? e
    : typeof e == "string"
    ? hx(e)
    : ArrayBuffer.isView(e)
    ? new Uint8Array(
        e.buffer,
        e.byteOffset,
        e.byteLength / Uint8Array.BYTES_PER_ELEMENT
      )
    : new Uint8Array(e);
}
gl.convertToBuffer = mx;
var wl = {};
Object.defineProperty(wl, "__esModule", { value: !0 });
wl.isEmptyData = void 0;
function vx(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
wl.isEmptyData = vx;
var Sl = {};
Object.defineProperty(Sl, "__esModule", { value: !0 });
Sl.numToUint8 = void 0;
function yx(e) {
  return new Uint8Array([
    (e & 4278190080) >> 24,
    (e & 16711680) >> 16,
    (e & 65280) >> 8,
    e & 255,
  ]);
}
Sl.numToUint8 = yx;
var Cl = {};
Object.defineProperty(Cl, "__esModule", { value: !0 });
Cl.uint32ArrayFrom = void 0;
function gx(e) {
  if (!Array.from) {
    for (var t = new Uint32Array(e.length), n = 0; n < e.length; ) t[n] = e[n];
    return t;
  }
  return Uint32Array.from(e);
}
Cl.uint32ArrayFrom = gx;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.uint32ArrayFrom =
      e.numToUint8 =
      e.isEmptyData =
      e.convertToBuffer =
        void 0);
  var t = gl;
  Object.defineProperty(e, "convertToBuffer", {
    enumerable: !0,
    get: function () {
      return t.convertToBuffer;
    },
  });
  var n = wl;
  Object.defineProperty(e, "isEmptyData", {
    enumerable: !0,
    get: function () {
      return n.isEmptyData;
    },
  });
  var r = Sl;
  Object.defineProperty(e, "numToUint8", {
    enumerable: !0,
    get: function () {
      return r.numToUint8;
    },
  });
  var o = Cl;
  Object.defineProperty(e, "uint32ArrayFrom", {
    enumerable: !0,
    get: function () {
      return o.uint32ArrayFrom;
    },
  });
})(W0);
Object.defineProperty(vl, "__esModule", { value: !0 });
vl.Sha256 = void 0;
var nv = Jd.exports,
  eu = At,
  yf = yl,
  gf = W0,
  wx = (function () {
    function e(t) {
      if (((this.hash = new yf.RawSha256()), t)) {
        this.outer = new yf.RawSha256();
        var n = Sx(t),
          r = new Uint8Array(eu.BLOCK_SIZE);
        r.set(n);
        for (var o = 0; o < eu.BLOCK_SIZE; o++) (n[o] ^= 54), (r[o] ^= 92);
        this.hash.update(n), this.outer.update(r);
        for (var o = 0; o < n.byteLength; o++) n[o] = 0;
      }
    }
    return (
      (e.prototype.update = function (t) {
        if (!((0, gf.isEmptyData)(t) || this.error))
          try {
            this.hash.update((0, gf.convertToBuffer)(t));
          } catch (n) {
            this.error = n;
          }
      }),
      (e.prototype.digestSync = function () {
        if (this.error) throw this.error;
        return this.outer
          ? (this.outer.finished || this.outer.update(this.hash.digest()),
            this.outer.digest())
          : this.hash.digest();
      }),
      (e.prototype.digest = function () {
        return (0, nv.__awaiter)(this, void 0, void 0, function () {
          return (0, nv.__generator)(this, function (t) {
            return [2, this.digestSync()];
          });
        });
      }),
      e
    );
  })();
vl.Sha256 = wx;
function Sx(e) {
  var t = (0, gf.convertToBuffer)(e);
  if (t.byteLength > eu.BLOCK_SIZE) {
    var n = new yf.RawSha256();
    n.update(t), (t = n.digest());
  }
  var r = new Uint8Array(eu.BLOCK_SIZE);
  return r.set(t), r;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Jd.exports;
  (0, t.__exportStar)(vl, e);
})(so);
function te(e, t) {
  e != null && this.fromString(e, t);
}
function vt() {
  return new te(null);
}
var ir,
  Cx = 0xdeadbeefcafe,
  rv = (Cx & 16777215) == 15715070;
function _x(e, t, n, r, o, i) {
  for (; --i >= 0; ) {
    var a = t * this[e++] + n[r] + o;
    (o = Math.floor(a / 67108864)), (n[r++] = a & 67108863);
  }
  return o;
}
function bx(e, t, n, r, o, i) {
  for (var a = t & 32767, s = t >> 15; --i >= 0; ) {
    var u = this[e] & 32767,
      l = this[e++] >> 15,
      c = s * u + l * a;
    (u = a * u + ((c & 32767) << 15) + n[r] + (o & 1073741823)),
      (o = (u >>> 30) + (c >>> 15) + s * l + (o >>> 30)),
      (n[r++] = u & 1073741823);
  }
  return o;
}
function xx(e, t, n, r, o, i) {
  for (var a = t & 16383, s = t >> 14; --i >= 0; ) {
    var u = this[e] & 16383,
      l = this[e++] >> 14,
      c = s * u + l * a;
    (u = a * u + ((c & 16383) << 14) + n[r] + o),
      (o = (u >> 28) + (c >> 14) + s * l),
      (n[r++] = u & 268435455);
  }
  return o;
}
var ov = typeof navigator != "undefined";
ov && rv && navigator.appName == "Microsoft Internet Explorer"
  ? ((te.prototype.am = bx), (ir = 30))
  : ov && rv && navigator.appName != "Netscape"
  ? ((te.prototype.am = _x), (ir = 26))
  : ((te.prototype.am = xx), (ir = 28));
te.prototype.DB = ir;
te.prototype.DM = (1 << ir) - 1;
te.prototype.DV = 1 << ir;
var Zd = 52;
te.prototype.FV = Math.pow(2, Zd);
te.prototype.F1 = Zd - ir;
te.prototype.F2 = 2 * ir - Zd;
var Ex = "0123456789abcdefghijklmnopqrstuvwxyz",
  _l = new Array(),
  ko,
  Yt;
ko = "0".charCodeAt(0);
for (Yt = 0; Yt <= 9; ++Yt) _l[ko++] = Yt;
ko = "a".charCodeAt(0);
for (Yt = 10; Yt < 36; ++Yt) _l[ko++] = Yt;
ko = "A".charCodeAt(0);
for (Yt = 10; Yt < 36; ++Yt) _l[ko++] = Yt;
function iv(e) {
  return Ex.charAt(e);
}
function Px(e, t) {
  var n = _l[e.charCodeAt(t)];
  return n == null ? -1 : n;
}
function Ox(e) {
  for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
  (e.t = this.t), (e.s = this.s);
}
function Dx(e) {
  (this.t = 1),
    (this.s = e < 0 ? -1 : 0),
    e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + this.DV) : (this.t = 0);
}
function Xd(e) {
  var t = vt();
  return t.fromInt(e), t;
}
function kx(e, t) {
  var n;
  if (t == 16) n = 4;
  else if (t == 8) n = 3;
  else if (t == 2) n = 1;
  else if (t == 32) n = 5;
  else if (t == 4) n = 2;
  else throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  (this.t = 0), (this.s = 0);
  for (var r = e.length, o = !1, i = 0; --r >= 0; ) {
    var a = Px(e, r);
    if (a < 0) {
      e.charAt(r) == "-" && (o = !0);
      continue;
    }
    (o = !1),
      i == 0
        ? (this[this.t++] = a)
        : i + n > this.DB
        ? ((this[this.t - 1] |= (a & ((1 << (this.DB - i)) - 1)) << i),
          (this[this.t++] = a >> (this.DB - i)))
        : (this[this.t - 1] |= a << i),
      (i += n),
      i >= this.DB && (i -= this.DB);
  }
  this.clamp(), o && te.ZERO.subTo(this, this);
}
function Tx() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
    --this.t;
}
function Ax(e) {
  if (this.s < 0) return "-" + this.negate().toString(e);
  var t;
  if (e == 16) t = 4;
  else if (e == 8) t = 3;
  else if (e == 2) t = 1;
  else if (e == 32) t = 5;
  else if (e == 4) t = 2;
  else throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  var n = (1 << t) - 1,
    r,
    o = !1,
    i = "",
    a = this.t,
    s = this.DB - ((a * this.DB) % t);
  if (a-- > 0)
    for (
      s < this.DB && (r = this[a] >> s) > 0 && ((o = !0), (i = iv(r)));
      a >= 0;

    )
      s < t
        ? ((r = (this[a] & ((1 << s) - 1)) << (t - s)),
          (r |= this[--a] >> (s += this.DB - t)))
        : ((r = (this[a] >> (s -= t)) & n), s <= 0 && ((s += this.DB), --a)),
        r > 0 && (o = !0),
        o && (i += iv(r));
  return o ? i : "0";
}
function Rx() {
  var e = vt();
  return te.ZERO.subTo(this, e), e;
}
function Nx() {
  return this.s < 0 ? this.negate() : this;
}
function Mx(e) {
  var t = this.s - e.s;
  if (t != 0) return t;
  var n = this.t;
  if (((t = n - e.t), t != 0)) return this.s < 0 ? -t : t;
  for (; --n >= 0; ) if ((t = this[n] - e[n]) != 0) return t;
  return 0;
}
function eh(e) {
  var t = 1,
    n;
  return (
    (n = e >>> 16) != 0 && ((e = n), (t += 16)),
    (n = e >> 8) != 0 && ((e = n), (t += 8)),
    (n = e >> 4) != 0 && ((e = n), (t += 4)),
    (n = e >> 2) != 0 && ((e = n), (t += 2)),
    (n = e >> 1) != 0 && ((e = n), (t += 1)),
    t
  );
}
function Ix() {
  return this.t <= 0
    ? 0
    : this.DB * (this.t - 1) + eh(this[this.t - 1] ^ (this.s & this.DM));
}
function Ux(e, t) {
  var n;
  for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n) t[n] = 0;
  (t.t = this.t + e), (t.s = this.s);
}
function Lx(e, t) {
  for (var n = e; n < this.t; ++n) t[n - e] = this[n];
  (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
}
function Fx(e, t) {
  var n = e % this.DB,
    r = this.DB - n,
    o = (1 << r) - 1,
    i = Math.floor(e / this.DB),
    a = (this.s << n) & this.DM,
    s;
  for (s = this.t - 1; s >= 0; --s)
    (t[s + i + 1] = (this[s] >> r) | a), (a = (this[s] & o) << n);
  for (s = i - 1; s >= 0; --s) t[s] = 0;
  (t[i] = a), (t.t = this.t + i + 1), (t.s = this.s), t.clamp();
}
function Bx(e, t) {
  t.s = this.s;
  var n = Math.floor(e / this.DB);
  if (n >= this.t) {
    t.t = 0;
    return;
  }
  var r = e % this.DB,
    o = this.DB - r,
    i = (1 << r) - 1;
  t[0] = this[n] >> r;
  for (var a = n + 1; a < this.t; ++a)
    (t[a - n - 1] |= (this[a] & i) << o), (t[a - n] = this[a] >> r);
  r > 0 && (t[this.t - n - 1] |= (this.s & i) << o),
    (t.t = this.t - n),
    t.clamp();
}
function $x(e, t) {
  for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
    (r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
  if (e.t < this.t) {
    for (r -= e.s; n < this.t; )
      (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
    r += this.s;
  } else {
    for (r += this.s; n < e.t; )
      (r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
    r -= e.s;
  }
  (t.s = r < 0 ? -1 : 0),
    r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r),
    (t.t = n),
    t.clamp();
}
function jx(e, t) {
  var n = this.abs(),
    r = e.abs(),
    o = n.t;
  for (t.t = o + r.t; --o >= 0; ) t[o] = 0;
  for (o = 0; o < r.t; ++o) t[o + n.t] = n.am(0, r[o], t, o, 0, n.t);
  (t.s = 0), t.clamp(), this.s != e.s && te.ZERO.subTo(t, t);
}
function Hx(e) {
  for (var t = this.abs(), n = (e.t = 2 * t.t); --n >= 0; ) e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var r = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >=
      t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
  }
  e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
    (e.s = 0),
    e.clamp();
}
function Yx(e, t, n) {
  var r = e.abs();
  if (!(r.t <= 0)) {
    var o = this.abs();
    if (o.t < r.t) {
      t != null && t.fromInt(0), n != null && this.copyTo(n);
      return;
    }
    n == null && (n = vt());
    var i = vt(),
      a = this.s,
      s = e.s,
      u = this.DB - eh(r[r.t - 1]);
    u > 0 ? (r.lShiftTo(u, i), o.lShiftTo(u, n)) : (r.copyTo(i), o.copyTo(n));
    var l = i.t,
      c = i[l - 1];
    if (c != 0) {
      var f = c * (1 << this.F1) + (l > 1 ? i[l - 2] >> this.F2 : 0),
        h = this.FV / f,
        m = (1 << this.F1) / f,
        v = 1 << this.F2,
        g = n.t,
        O = g - l,
        y = t == null ? vt() : t;
      for (
        i.dlShiftTo(O, y),
          n.compareTo(y) >= 0 && ((n[n.t++] = 1), n.subTo(y, n)),
          te.ONE.dlShiftTo(l, y),
          y.subTo(i, i);
        i.t < l;

      )
        i[i.t++] = 0;
      for (; --O >= 0; ) {
        var w =
          n[--g] == c ? this.DM : Math.floor(n[g] * h + (n[g - 1] + v) * m);
        if ((n[g] += i.am(0, w, n, O, 0, l)) < w)
          for (i.dlShiftTo(O, y), n.subTo(y, n); n[g] < --w; ) n.subTo(y, n);
      }
      t != null && (n.drShiftTo(l, t), a != s && te.ZERO.subTo(t, t)),
        (n.t = l),
        n.clamp(),
        u > 0 && n.rShiftTo(u, n),
        a < 0 && te.ZERO.subTo(n, n);
    }
  }
}
function Vx(e) {
  var t = vt();
  return (
    this.abs().divRemTo(e, null, t),
    this.s < 0 && t.compareTo(te.ZERO) > 0 && e.subTo(t, t),
    t
  );
}
function Wx() {
  if (this.t < 1) return 0;
  var e = this[0];
  if ((e & 1) == 0) return 0;
  var t = e & 3;
  return (
    (t = (t * (2 - (e & 15) * t)) & 15),
    (t = (t * (2 - (e & 255) * t)) & 255),
    (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
    (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
    t > 0 ? this.DV - t : -t
  );
}
function zx(e) {
  return this.compareTo(e) == 0;
}
function Kx(e, t) {
  for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
    (r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
  if (e.t < this.t) {
    for (r += e.s; n < this.t; )
      (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
    r += this.s;
  } else {
    for (r += this.s; n < e.t; )
      (r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
    r += e.s;
  }
  (t.s = r < 0 ? -1 : 0),
    r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
    (t.t = n),
    t.clamp();
}
function qx(e) {
  var t = vt();
  return this.addTo(e, t), t;
}
function Qx(e) {
  var t = vt();
  return this.subTo(e, t), t;
}
function Gx(e) {
  var t = vt();
  return this.multiplyTo(e, t), t;
}
function Jx(e) {
  var t = vt();
  return this.divRemTo(e, t, null), t;
}
function To(e) {
  (this.m = e),
    (this.mp = e.invDigit()),
    (this.mpl = this.mp & 32767),
    (this.mph = this.mp >> 15),
    (this.um = (1 << (e.DB - 15)) - 1),
    (this.mt2 = 2 * e.t);
}
function Zx(e) {
  var t = vt();
  return (
    e.abs().dlShiftTo(this.m.t, t),
    t.divRemTo(this.m, null, t),
    e.s < 0 && t.compareTo(te.ZERO) > 0 && this.m.subTo(t, t),
    t
  );
}
function Xx(e) {
  var t = vt();
  return e.copyTo(t), this.reduce(t), t;
}
function e5(e) {
  for (; e.t <= this.mt2; ) e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = e[t] & 32767,
      r =
        (n * this.mpl +
          (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
        e.DM;
    for (
      n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t);
      e[n] >= e.DV;

    )
      (e[n] -= e.DV), e[++n]++;
  }
  e.clamp(),
    e.drShiftTo(this.m.t, e),
    e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
}
function t5(e, t) {
  e.squareTo(t), this.reduce(t);
}
function n5(e, t, n) {
  e.multiplyTo(t, n), this.reduce(n);
}
To.prototype.convert = Zx;
To.prototype.revert = Xx;
To.prototype.reduce = e5;
To.prototype.mulTo = n5;
To.prototype.sqrTo = t5;
function r5(e, t, n) {
  var r = e.bitLength(),
    o,
    i = Xd(1),
    a = new To(t);
  if (r <= 0) return i;
  r < 18
    ? (o = 1)
    : r < 48
    ? (o = 3)
    : r < 144
    ? (o = 4)
    : r < 768
    ? (o = 5)
    : (o = 6);
  var s = new Array(),
    u = 3,
    l = o - 1,
    c = (1 << o) - 1;
  if (((s[1] = a.convert(this)), o > 1)) {
    var f = vt();
    for (a.sqrTo(s[1], f); u <= c; )
      (s[u] = vt()), a.mulTo(f, s[u - 2], s[u]), (u += 2);
  }
  var h = e.t - 1,
    m,
    v = !0,
    g = vt(),
    O;
  for (r = eh(e[h]) - 1; h >= 0; ) {
    for (
      r >= l
        ? (m = (e[h] >> (r - l)) & c)
        : ((m = (e[h] & ((1 << (r + 1)) - 1)) << (l - r)),
          h > 0 && (m |= e[h - 1] >> (this.DB + r - l))),
        u = o;
      (m & 1) == 0;

    )
      (m >>= 1), --u;
    if (((r -= u) < 0 && ((r += this.DB), --h), v)) s[m].copyTo(i), (v = !1);
    else {
      for (; u > 1; ) a.sqrTo(i, g), a.sqrTo(g, i), (u -= 2);
      u > 0 ? a.sqrTo(i, g) : ((O = i), (i = g), (g = O)), a.mulTo(g, s[m], i);
    }
    for (; h >= 0 && (e[h] & (1 << r)) == 0; )
      a.sqrTo(i, g),
        (O = i),
        (i = g),
        (g = O),
        --r < 0 && ((r = this.DB - 1), --h);
  }
  var y = a.revert(i);
  return n(null, y), y;
}
te.prototype.copyTo = Ox;
te.prototype.fromInt = Dx;
te.prototype.fromString = kx;
te.prototype.clamp = Tx;
te.prototype.dlShiftTo = Ux;
te.prototype.drShiftTo = Lx;
te.prototype.lShiftTo = Fx;
te.prototype.rShiftTo = Bx;
te.prototype.subTo = $x;
te.prototype.multiplyTo = jx;
te.prototype.squareTo = Hx;
te.prototype.divRemTo = Yx;
te.prototype.invDigit = Wx;
te.prototype.addTo = Kx;
te.prototype.toString = Ax;
te.prototype.negate = Rx;
te.prototype.abs = Nx;
te.prototype.compareTo = Mx;
te.prototype.bitLength = Ix;
te.prototype.mod = Vx;
te.prototype.equals = zx;
te.prototype.add = qx;
te.prototype.subtract = Qx;
te.prototype.multiply = Gx;
te.prototype.divide = Jx;
te.prototype.modPow = r5;
te.ZERO = Xd(0);
te.ONE = Xd(1);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ function ic(e) {
  return xe.Buffer.from(new rx().random(e).toString(), "hex");
}
var o5 = /^[89a-f]/i,
  i5 =
    "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",
  a5 = "userAttributes.",
  jr = (function () {
    function e(n) {
      (this.N = new te(i5, 16)),
        (this.g = new te("2", 16)),
        (this.k = new te(
          this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)),
          16
        )),
        (this.smallAValue = this.generateRandomSmallA()),
        this.getLargeAValue(function () {}),
        (this.infoBits = xe.Buffer.from("Caldera Derived Key", "utf8")),
        (this.poolName = n);
    }
    var t = e.prototype;
    return (
      (t.getSmallAValue = function () {
        return this.smallAValue;
      }),
      (t.getLargeAValue = function (r) {
        var o = this;
        this.largeAValue
          ? r(null, this.largeAValue)
          : this.calculateA(this.smallAValue, function (i, a) {
              i && r(i, null), (o.largeAValue = a), r(null, o.largeAValue);
            });
      }),
      (t.generateRandomSmallA = function () {
        var r = ic(128).toString("hex"),
          o = new te(r, 16);
        return o;
      }),
      (t.generateRandomString = function () {
        return ic(40).toString("base64");
      }),
      (t.getRandomPassword = function () {
        return this.randomPassword;
      }),
      (t.getSaltDevices = function () {
        return this.SaltToHashDevices;
      }),
      (t.getVerifierDevices = function () {
        return this.verifierDevices;
      }),
      (t.generateHashDevice = function (r, o, i) {
        var a = this;
        this.randomPassword = this.generateRandomString();
        var s = "" + r + o + ":" + this.randomPassword,
          u = this.hash(s),
          l = ic(16).toString("hex");
        (this.SaltToHashDevices = this.padHex(new te(l, 16))),
          this.g.modPow(
            new te(this.hexHash(this.SaltToHashDevices + u), 16),
            this.N,
            function (c, f) {
              c && i(c, null), (a.verifierDevices = a.padHex(f)), i(null, null);
            }
          );
      }),
      (t.calculateA = function (r, o) {
        var i = this;
        this.g.modPow(r, this.N, function (a, s) {
          a && o(a, null),
            s.mod(i.N).equals(te.ZERO) &&
              o(new Error("Illegal paramater. A mod N cannot be 0."), null),
            o(null, s);
        });
      }),
      (t.calculateU = function (r, o) {
        this.UHexHash = this.hexHash(this.padHex(r) + this.padHex(o));
        var i = new te(this.UHexHash, 16);
        return i;
      }),
      (t.hash = function (r) {
        var o = new so.Sha256();
        o.update(r);
        var i = o.digestSync(),
          a = xe.Buffer.from(i).toString("hex");
        return new Array(64 - a.length).join("0") + a;
      }),
      (t.hexHash = function (r) {
        return this.hash(xe.Buffer.from(r, "hex"));
      }),
      (t.computehkdf = function (r, o) {
        var i = xe.Buffer.concat([
            this.infoBits,
            xe.Buffer.from(String.fromCharCode(1), "utf8"),
          ]),
          a = new so.Sha256(o);
        a.update(r);
        var s = a.digestSync(),
          u = new so.Sha256(s);
        u.update(i);
        var l = u.digestSync(),
          c = l,
          f = c.slice(0, 16);
        return f;
      }),
      (t.getPasswordAuthenticationKey = function (r, o, i, a, s) {
        var u = this;
        if (i.mod(this.N).equals(te.ZERO)) throw new Error("B cannot be zero.");
        if (
          ((this.UValue = this.calculateU(this.largeAValue, i)),
          this.UValue.equals(te.ZERO))
        )
          throw new Error("U cannot be zero.");
        var l = "" + this.poolName + r + ":" + o,
          c = this.hash(l),
          f = new te(this.hexHash(this.padHex(a) + c), 16);
        this.calculateS(f, i, function (h, m) {
          h && s(h, null);
          var v = u.computehkdf(
            xe.Buffer.from(u.padHex(m), "hex"),
            xe.Buffer.from(u.padHex(u.UValue), "hex")
          );
          s(null, v);
        });
      }),
      (t.calculateS = function (r, o, i) {
        var a = this;
        this.g.modPow(r, this.N, function (s, u) {
          s && i(s, null);
          var l = o.subtract(a.k.multiply(u));
          l.modPow(
            a.smallAValue.add(a.UValue.multiply(r)),
            a.N,
            function (c, f) {
              c && i(c, null), i(null, f.mod(a.N));
            }
          );
        });
      }),
      (t.getNewPasswordRequiredChallengeUserAttributePrefix = function () {
        return a5;
      }),
      (t.padHex = function (r) {
        if (!(r instanceof te)) throw new Error("Not a BigInteger");
        var o = r.compareTo(te.ZERO) < 0,
          i = r.abs().toString(16);
        if (
          ((i = i.length % 2 !== 0 ? "0" + i : i),
          (i = o5.test(i) ? "00" + i : i),
          o)
        ) {
          var a = i
              .split("")
              .map(function (u) {
                var l = ~parseInt(u, 16) & 15;
                return "0123456789ABCDEF".charAt(l);
              })
              .join(""),
            s = new te(a, 16).add(te.ONE);
          (i = s.toString(16)),
            i.toUpperCase().startsWith("FF8") && (i = i.substring(2));
        }
        return i;
      }),
      e
    );
  })();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var z0 = (function () {
  function e(n) {
    (this.jwtToken = n || ""), (this.payload = this.decodePayload());
  }
  var t = e.prototype;
  return (
    (t.getJwtToken = function () {
      return this.jwtToken;
    }),
    (t.getExpiration = function () {
      return this.payload.exp;
    }),
    (t.getIssuedAt = function () {
      return this.payload.iat;
    }),
    (t.decodePayload = function () {
      var r = this.jwtToken.split(".")[1];
      try {
        return JSON.parse(xe.Buffer.from(r, "base64").toString("utf8"));
      } catch {
        return {};
      }
    }),
    e
  );
})();
function s5(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    wf(e, t);
}
function wf(e, t) {
  return (
    (wf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    wf(e, t)
  );
}
var av = (function (e) {
  s5(t, e);
  function t(n) {
    var r = n === void 0 ? {} : n,
      o = r.AccessToken;
    return e.call(this, o || "") || this;
  }
  return t;
})(z0);
function u5(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Sf(e, t);
}
function Sf(e, t) {
  return (
    (Sf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Sf(e, t)
  );
}
var sv = (function (e) {
  u5(t, e);
  function t(n) {
    var r = n === void 0 ? {} : n,
      o = r.IdToken;
    return e.call(this, o || "") || this;
  }
  return t;
})(z0);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var uv = (function () {
  function e(n) {
    var r = n === void 0 ? {} : n,
      o = r.RefreshToken;
    this.token = o || "";
  }
  var t = e.prototype;
  return (
    (t.getToken = function () {
      return this.token;
    }),
    e
  );
})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var lv = (function () {
  function e(n) {
    var r = n === void 0 ? {} : n,
      o = r.IdToken,
      i = r.RefreshToken,
      a = r.AccessToken,
      s = r.ClockDrift;
    if (a == null || o == null)
      throw new Error("Id token and Access Token must be present.");
    (this.idToken = o),
      (this.refreshToken = i),
      (this.accessToken = a),
      (this.clockDrift = s === void 0 ? this.calculateClockDrift() : s);
  }
  var t = e.prototype;
  return (
    (t.getIdToken = function () {
      return this.idToken;
    }),
    (t.getRefreshToken = function () {
      return this.refreshToken;
    }),
    (t.getAccessToken = function () {
      return this.accessToken;
    }),
    (t.getClockDrift = function () {
      return this.clockDrift;
    }),
    (t.calculateClockDrift = function () {
      var r = Math.floor(new Date() / 1e3),
        o = Math.min(
          this.accessToken.getIssuedAt(),
          this.idToken.getIssuedAt()
        );
      return r - o;
    }),
    (t.isValid = function () {
      var r = Math.floor(new Date() / 1e3),
        o = r - this.clockDrift;
      return (
        o < this.accessToken.getExpiration() && o < this.idToken.getExpiration()
      );
    }),
    e
  );
})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var l5 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  c5 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  cv = (function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.getNowString = function () {
        var r = new Date(),
          o = c5[r.getUTCDay()],
          i = l5[r.getUTCMonth()],
          a = r.getUTCDate(),
          s = r.getUTCHours();
        s < 10 && (s = "0" + s);
        var u = r.getUTCMinutes();
        u < 10 && (u = "0" + u);
        var l = r.getUTCSeconds();
        l < 10 && (l = "0" + l);
        var c = r.getUTCFullYear(),
          f = o + " " + i + " " + a + " " + s + ":" + u + ":" + l + " UTC " + c;
        return f;
      }),
      e
    );
  })();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var f5 = (function () {
  function e(n) {
    var r = n === void 0 ? {} : n,
      o = r.Name,
      i = r.Value;
    (this.Name = o || ""), (this.Value = i || "");
  }
  var t = e.prototype;
  return (
    (t.getValue = function () {
      return this.Value;
    }),
    (t.setValue = function (r) {
      return (this.Value = r), this;
    }),
    (t.getName = function () {
      return this.Name;
    }),
    (t.setName = function (r) {
      return (this.Name = r), this;
    }),
    (t.toString = function () {
      return JSON.stringify(this);
    }),
    (t.toJSON = function () {
      return { Name: this.Name, Value: this.Value };
    }),
    e
  );
})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var mr = {},
  p5 = (function () {
    function e() {}
    return (
      (e.setItem = function (n, r) {
        return (mr[n] = r), mr[n];
      }),
      (e.getItem = function (n) {
        return Object.prototype.hasOwnProperty.call(mr, n) ? mr[n] : void 0;
      }),
      (e.removeItem = function (n) {
        return delete mr[n];
      }),
      (e.clear = function () {
        return (mr = {}), mr;
      }),
      e
    );
  })(),
  K0 = (function () {
    function e() {
      try {
        (this.storageWindow = window.localStorage),
          this.storageWindow.setItem("aws.cognito.test-ls", 1),
          this.storageWindow.removeItem("aws.cognito.test-ls");
      } catch {
        this.storageWindow = p5;
      }
    }
    var t = e.prototype;
    return (
      (t.getStorage = function () {
        return this.storageWindow;
      }),
      e
    );
  })();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var d5 = typeof navigator != "undefined",
  fv = d5 ? navigator.userAgent : "nodejs",
  Cf = (function () {
    function e(n) {
      if (n == null || n.Username == null || n.Pool == null)
        throw new Error("Username and Pool information are required.");
      (this.username = n.Username || ""),
        (this.pool = n.Pool),
        (this.Session = null),
        (this.client = n.Pool.client),
        (this.signInUserSession = null),
        (this.authenticationFlowType = "USER_SRP_AUTH"),
        (this.storage = n.Storage || new K0().getStorage()),
        (this.keyPrefix =
          "CognitoIdentityServiceProvider." + this.pool.getClientId()),
        (this.userDataKey = this.keyPrefix + "." + this.username + ".userData");
    }
    var t = e.prototype;
    return (
      (t.setSignInUserSession = function (r) {
        this.clearCachedUserData(),
          (this.signInUserSession = r),
          this.cacheTokens();
      }),
      (t.getSignInUserSession = function () {
        return this.signInUserSession;
      }),
      (t.getUsername = function () {
        return this.username;
      }),
      (t.getAuthenticationFlowType = function () {
        return this.authenticationFlowType;
      }),
      (t.setAuthenticationFlowType = function (r) {
        this.authenticationFlowType = r;
      }),
      (t.initiateAuth = function (r, o) {
        var i = this,
          a = r.getAuthParameters();
        a.USERNAME = this.username;
        var s =
            Object.keys(r.getValidationData()).length !== 0
              ? r.getValidationData()
              : r.getClientMetadata(),
          u = {
            AuthFlow: "CUSTOM_AUTH",
            ClientId: this.pool.getClientId(),
            AuthParameters: a,
            ClientMetadata: s,
          };
        this.getUserContextData() &&
          (u.UserContextData = this.getUserContextData()),
          this.client.request("InitiateAuth", u, function (l, c) {
            if (l) return o.onFailure(l);
            var f = c.ChallengeName,
              h = c.ChallengeParameters;
            return f === "CUSTOM_CHALLENGE"
              ? ((i.Session = c.Session), o.customChallenge(h))
              : ((i.signInUserSession = i.getCognitoUserSession(
                  c.AuthenticationResult
                )),
                i.cacheTokens(),
                o.onSuccess(i.signInUserSession));
          });
      }),
      (t.authenticateUser = function (r, o) {
        return this.authenticationFlowType === "USER_PASSWORD_AUTH"
          ? this.authenticateUserPlainUsernamePassword(r, o)
          : this.authenticationFlowType === "USER_SRP_AUTH" ||
            this.authenticationFlowType === "CUSTOM_AUTH"
          ? this.authenticateUserDefaultAuth(r, o)
          : o.onFailure(new Error("Authentication flow type is invalid."));
      }),
      (t.authenticateUserDefaultAuth = function (r, o) {
        var i = this,
          a = new jr(this.pool.getUserPoolName()),
          s = new cv(),
          u,
          l,
          c = {};
        this.deviceKey != null && (c.DEVICE_KEY = this.deviceKey),
          (c.USERNAME = this.username),
          a.getLargeAValue(function (f, h) {
            f && o.onFailure(f),
              (c.SRP_A = h.toString(16)),
              i.authenticationFlowType === "CUSTOM_AUTH" &&
                (c.CHALLENGE_NAME = "SRP_A");
            var m =
                Object.keys(r.getValidationData()).length !== 0
                  ? r.getValidationData()
                  : r.getClientMetadata(),
              v = {
                AuthFlow: i.authenticationFlowType,
                ClientId: i.pool.getClientId(),
                AuthParameters: c,
                ClientMetadata: m,
              };
            i.getUserContextData(i.username) &&
              (v.UserContextData = i.getUserContextData(i.username)),
              i.client.request("InitiateAuth", v, function (g, O) {
                if (g) return o.onFailure(g);
                var y = O.ChallengeParameters;
                (i.username = y.USER_ID_FOR_SRP),
                  (i.userDataKey =
                    i.keyPrefix + "." + i.username + ".userData"),
                  (u = new te(y.SRP_B, 16)),
                  (l = new te(y.SALT, 16)),
                  i.getCachedDeviceKeyAndPassword(),
                  a.getPasswordAuthenticationKey(
                    i.username,
                    r.getPassword(),
                    u,
                    l,
                    function (w, _) {
                      w && o.onFailure(w);
                      var E = s.getNowString(),
                        U = xe.Buffer.concat([
                          xe.Buffer.from(i.pool.getUserPoolName(), "utf8"),
                          xe.Buffer.from(i.username, "utf8"),
                          xe.Buffer.from(y.SECRET_BLOCK, "base64"),
                          xe.Buffer.from(E, "utf8"),
                        ]),
                        L = new so.Sha256(_);
                      L.update(U);
                      var j = L.digestSync(),
                        $ = xe.Buffer.from(j).toString("base64"),
                        Q = {};
                      (Q.USERNAME = i.username),
                        (Q.PASSWORD_CLAIM_SECRET_BLOCK = y.SECRET_BLOCK),
                        (Q.TIMESTAMP = E),
                        (Q.PASSWORD_CLAIM_SIGNATURE = $),
                        i.deviceKey != null && (Q.DEVICE_KEY = i.deviceKey);
                      var k = function D(R, W) {
                          return i.client.request(
                            "RespondToAuthChallenge",
                            R,
                            function (F, J) {
                              return F &&
                                F.code === "ResourceNotFoundException" &&
                                F.message.toLowerCase().indexOf("device") !== -1
                                ? ((Q.DEVICE_KEY = null),
                                  (i.deviceKey = null),
                                  (i.randomPassword = null),
                                  (i.deviceGroupKey = null),
                                  i.clearCachedDeviceKeyAndPassword(),
                                  D(R, W))
                                : W(F, J);
                            }
                          );
                        },
                        I = {
                          ChallengeName: "PASSWORD_VERIFIER",
                          ClientId: i.pool.getClientId(),
                          ChallengeResponses: Q,
                          Session: O.Session,
                          ClientMetadata: m,
                        };
                      i.getUserContextData() &&
                        (I.UserContextData = i.getUserContextData()),
                        k(I, function (D, R) {
                          return D
                            ? o.onFailure(D)
                            : i.authenticateUserInternal(R, a, o);
                        });
                    }
                  );
              });
          });
      }),
      (t.authenticateUserPlainUsernamePassword = function (r, o) {
        var i = this,
          a = {};
        if (
          ((a.USERNAME = this.username),
          (a.PASSWORD = r.getPassword()),
          !a.PASSWORD)
        ) {
          o.onFailure(new Error("PASSWORD parameter is required"));
          return;
        }
        var s = new jr(this.pool.getUserPoolName());
        this.getCachedDeviceKeyAndPassword(),
          this.deviceKey != null && (a.DEVICE_KEY = this.deviceKey);
        var u =
            Object.keys(r.getValidationData()).length !== 0
              ? r.getValidationData()
              : r.getClientMetadata(),
          l = {
            AuthFlow: "USER_PASSWORD_AUTH",
            ClientId: this.pool.getClientId(),
            AuthParameters: a,
            ClientMetadata: u,
          };
        this.getUserContextData(this.username) &&
          (l.UserContextData = this.getUserContextData(this.username)),
          this.client.request("InitiateAuth", l, function (c, f) {
            return c ? o.onFailure(c) : i.authenticateUserInternal(f, s, o);
          });
      }),
      (t.authenticateUserInternal = function (r, o, i) {
        var a = this,
          s = r.ChallengeName,
          u = r.ChallengeParameters;
        if (s === "SMS_MFA")
          return (this.Session = r.Session), i.mfaRequired(s, u);
        if (s === "SELECT_MFA_TYPE")
          return (this.Session = r.Session), i.selectMFAType(s, u);
        if (s === "MFA_SETUP")
          return (this.Session = r.Session), i.mfaSetup(s, u);
        if (s === "SOFTWARE_TOKEN_MFA")
          return (this.Session = r.Session), i.totpRequired(s, u);
        if (s === "CUSTOM_CHALLENGE")
          return (this.Session = r.Session), i.customChallenge(u);
        if (s === "NEW_PASSWORD_REQUIRED") {
          this.Session = r.Session;
          var l = null,
            c = null,
            f = [],
            h = o.getNewPasswordRequiredChallengeUserAttributePrefix();
          if (
            (u &&
              ((l = JSON.parse(r.ChallengeParameters.userAttributes)),
              (c = JSON.parse(r.ChallengeParameters.requiredAttributes))),
            c)
          )
            for (var m = 0; m < c.length; m++) f[m] = c[m].substr(h.length);
          return i.newPasswordRequired(l, f);
        }
        if (s === "DEVICE_SRP_AUTH") {
          (this.Session = r.Session), this.getDeviceResponse(i);
          return;
        }
        (this.signInUserSession = this.getCognitoUserSession(
          r.AuthenticationResult
        )),
          (this.challengeName = s),
          this.cacheTokens();
        var v = r.AuthenticationResult.NewDeviceMetadata;
        if (v == null) return i.onSuccess(this.signInUserSession);
        o.generateHashDevice(
          r.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
          r.AuthenticationResult.NewDeviceMetadata.DeviceKey,
          function (g) {
            if (g) return i.onFailure(g);
            var O = {
              Salt: xe.Buffer.from(o.getSaltDevices(), "hex").toString(
                "base64"
              ),
              PasswordVerifier: xe.Buffer.from(
                o.getVerifierDevices(),
                "hex"
              ).toString("base64"),
            };
            (a.verifierDevices = O.PasswordVerifier),
              (a.deviceGroupKey = v.DeviceGroupKey),
              (a.randomPassword = o.getRandomPassword()),
              a.client.request(
                "ConfirmDevice",
                {
                  DeviceKey: v.DeviceKey,
                  AccessToken: a.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceSecretVerifierConfig: O,
                  DeviceName: fv,
                },
                function (y, w) {
                  return y
                    ? i.onFailure(y)
                    : ((a.deviceKey =
                        r.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                      a.cacheDeviceKeyAndPassword(),
                      w.UserConfirmationNecessary === !0
                        ? i.onSuccess(
                            a.signInUserSession,
                            w.UserConfirmationNecessary
                          )
                        : i.onSuccess(a.signInUserSession));
                }
              );
          }
        );
      }),
      (t.completeNewPasswordChallenge = function (r, o, i, a) {
        var s = this;
        if (!r) return i.onFailure(new Error("New password is required."));
        var u = new jr(this.pool.getUserPoolName()),
          l = u.getNewPasswordRequiredChallengeUserAttributePrefix(),
          c = {};
        o &&
          Object.keys(o).forEach(function (h) {
            c[l + h] = o[h];
          }),
          (c.NEW_PASSWORD = r),
          (c.USERNAME = this.username);
        var f = {
          ChallengeName: "NEW_PASSWORD_REQUIRED",
          ClientId: this.pool.getClientId(),
          ChallengeResponses: c,
          Session: this.Session,
          ClientMetadata: a,
        };
        this.getUserContextData() &&
          (f.UserContextData = this.getUserContextData()),
          this.client.request("RespondToAuthChallenge", f, function (h, m) {
            return h ? i.onFailure(h) : s.authenticateUserInternal(m, u, i);
          });
      }),
      (t.getDeviceResponse = function (r, o) {
        var i = this,
          a = new jr(this.deviceGroupKey),
          s = new cv(),
          u = {};
        (u.USERNAME = this.username),
          (u.DEVICE_KEY = this.deviceKey),
          a.getLargeAValue(function (l, c) {
            l && r.onFailure(l), (u.SRP_A = c.toString(16));
            var f = {
              ChallengeName: "DEVICE_SRP_AUTH",
              ClientId: i.pool.getClientId(),
              ChallengeResponses: u,
              ClientMetadata: o,
              Session: i.Session,
            };
            i.getUserContextData() &&
              (f.UserContextData = i.getUserContextData()),
              i.client.request("RespondToAuthChallenge", f, function (h, m) {
                if (h) return r.onFailure(h);
                var v = m.ChallengeParameters,
                  g = new te(v.SRP_B, 16),
                  O = new te(v.SALT, 16);
                a.getPasswordAuthenticationKey(
                  i.deviceKey,
                  i.randomPassword,
                  g,
                  O,
                  function (y, w) {
                    if (y) return r.onFailure(y);
                    var _ = s.getNowString(),
                      E = xe.Buffer.concat([
                        xe.Buffer.from(i.deviceGroupKey, "utf8"),
                        xe.Buffer.from(i.deviceKey, "utf8"),
                        xe.Buffer.from(v.SECRET_BLOCK, "base64"),
                        xe.Buffer.from(_, "utf8"),
                      ]),
                      U = new so.Sha256(w);
                    U.update(E);
                    var L = U.digestSync(),
                      j = xe.Buffer.from(L).toString("base64"),
                      $ = {};
                    ($.USERNAME = i.username),
                      ($.PASSWORD_CLAIM_SECRET_BLOCK = v.SECRET_BLOCK),
                      ($.TIMESTAMP = _),
                      ($.PASSWORD_CLAIM_SIGNATURE = j),
                      ($.DEVICE_KEY = i.deviceKey);
                    var Q = {
                      ChallengeName: "DEVICE_PASSWORD_VERIFIER",
                      ClientId: i.pool.getClientId(),
                      ChallengeResponses: $,
                      Session: m.Session,
                    };
                    i.getUserContextData() &&
                      (Q.UserContextData = i.getUserContextData()),
                      i.client.request(
                        "RespondToAuthChallenge",
                        Q,
                        function (k, I) {
                          return k
                            ? r.onFailure(k)
                            : ((i.signInUserSession = i.getCognitoUserSession(
                                I.AuthenticationResult
                              )),
                              i.cacheTokens(),
                              r.onSuccess(i.signInUserSession));
                        }
                      );
                  }
                );
              });
          });
      }),
      (t.confirmRegistration = function (r, o, i, a) {
        var s = {
          ClientId: this.pool.getClientId(),
          ConfirmationCode: r,
          Username: this.username,
          ForceAliasCreation: o,
          ClientMetadata: a,
        };
        this.getUserContextData() &&
          (s.UserContextData = this.getUserContextData()),
          this.client.request("ConfirmSignUp", s, function (u) {
            return u ? i(u, null) : i(null, "SUCCESS");
          });
      }),
      (t.sendCustomChallengeAnswer = function (r, o, i) {
        var a = this,
          s = {};
        (s.USERNAME = this.username), (s.ANSWER = r);
        var u = new jr(this.pool.getUserPoolName());
        this.getCachedDeviceKeyAndPassword(),
          this.deviceKey != null && (s.DEVICE_KEY = this.deviceKey);
        var l = {
          ChallengeName: "CUSTOM_CHALLENGE",
          ChallengeResponses: s,
          ClientId: this.pool.getClientId(),
          Session: this.Session,
          ClientMetadata: i,
        };
        this.getUserContextData() &&
          (l.UserContextData = this.getUserContextData()),
          this.client.request("RespondToAuthChallenge", l, function (c, f) {
            return c ? o.onFailure(c) : a.authenticateUserInternal(f, u, o);
          });
      }),
      (t.sendMFACode = function (r, o, i, a) {
        var s = this,
          u = {};
        (u.USERNAME = this.username), (u.SMS_MFA_CODE = r);
        var l = i || "SMS_MFA";
        l === "SOFTWARE_TOKEN_MFA" && (u.SOFTWARE_TOKEN_MFA_CODE = r),
          this.deviceKey != null && (u.DEVICE_KEY = this.deviceKey);
        var c = {
          ChallengeName: l,
          ChallengeResponses: u,
          ClientId: this.pool.getClientId(),
          Session: this.Session,
          ClientMetadata: a,
        };
        this.getUserContextData() &&
          (c.UserContextData = this.getUserContextData()),
          this.client.request("RespondToAuthChallenge", c, function (f, h) {
            if (f) return o.onFailure(f);
            var m = h.ChallengeName;
            if (m === "DEVICE_SRP_AUTH") {
              s.getDeviceResponse(o);
              return;
            }
            if (
              ((s.signInUserSession = s.getCognitoUserSession(
                h.AuthenticationResult
              )),
              s.cacheTokens(),
              h.AuthenticationResult.NewDeviceMetadata == null)
            )
              return o.onSuccess(s.signInUserSession);
            var v = new jr(s.pool.getUserPoolName());
            v.generateHashDevice(
              h.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
              h.AuthenticationResult.NewDeviceMetadata.DeviceKey,
              function (g) {
                if (g) return o.onFailure(g);
                var O = {
                  Salt: xe.Buffer.from(v.getSaltDevices(), "hex").toString(
                    "base64"
                  ),
                  PasswordVerifier: xe.Buffer.from(
                    v.getVerifierDevices(),
                    "hex"
                  ).toString("base64"),
                };
                (s.verifierDevices = O.PasswordVerifier),
                  (s.deviceGroupKey =
                    h.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey),
                  (s.randomPassword = v.getRandomPassword()),
                  s.client.request(
                    "ConfirmDevice",
                    {
                      DeviceKey:
                        h.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                      AccessToken: s.signInUserSession
                        .getAccessToken()
                        .getJwtToken(),
                      DeviceSecretVerifierConfig: O,
                      DeviceName: fv,
                    },
                    function (y, w) {
                      return y
                        ? o.onFailure(y)
                        : ((s.deviceKey =
                            h.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                          s.cacheDeviceKeyAndPassword(),
                          w.UserConfirmationNecessary === !0
                            ? o.onSuccess(
                                s.signInUserSession,
                                w.UserConfirmationNecessary
                              )
                            : o.onSuccess(s.signInUserSession));
                    }
                  );
              }
            );
          });
      }),
      (t.changePassword = function (r, o, i, a) {
        if (
          !(this.signInUserSession != null && this.signInUserSession.isValid())
        )
          return i(new Error("User is not authenticated"), null);
        this.client.request(
          "ChangePassword",
          {
            PreviousPassword: r,
            ProposedPassword: o,
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            ClientMetadata: a,
          },
          function (s) {
            return s ? i(s, null) : i(null, "SUCCESS");
          }
        );
      }),
      (t.enableMFA = function (r) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return r(new Error("User is not authenticated"), null);
        var o = [],
          i = { DeliveryMedium: "SMS", AttributeName: "phone_number" };
        o.push(i),
          this.client.request(
            "SetUserSettings",
            {
              MFAOptions: o,
              AccessToken: this.signInUserSession
                .getAccessToken()
                .getJwtToken(),
            },
            function (a) {
              return a ? r(a, null) : r(null, "SUCCESS");
            }
          );
      }),
      (t.setUserMfaPreference = function (r, o, i) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return i(new Error("User is not authenticated"), null);
        this.client.request(
          "SetUserMFAPreference",
          {
            SMSMfaSettings: r,
            SoftwareTokenMfaSettings: o,
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          },
          function (a) {
            return a ? i(a, null) : i(null, "SUCCESS");
          }
        );
      }),
      (t.disableMFA = function (r) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return r(new Error("User is not authenticated"), null);
        var o = [];
        this.client.request(
          "SetUserSettings",
          {
            MFAOptions: o,
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          },
          function (i) {
            return i ? r(i, null) : r(null, "SUCCESS");
          }
        );
      }),
      (t.deleteUser = function (r, o) {
        var i = this;
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return r(new Error("User is not authenticated"), null);
        this.client.request(
          "DeleteUser",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            ClientMetadata: o,
          },
          function (a) {
            return a ? r(a, null) : (i.clearCachedUser(), r(null, "SUCCESS"));
          }
        );
      }),
      (t.updateAttributes = function (r, o, i) {
        var a = this;
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return o(new Error("User is not authenticated"), null);
        this.client.request(
          "UpdateUserAttributes",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            UserAttributes: r,
            ClientMetadata: i,
          },
          function (s) {
            return s
              ? o(s, null)
              : a.getUserData(
                  function () {
                    return o(null, "SUCCESS");
                  },
                  { bypassCache: !0 }
                );
          }
        );
      }),
      (t.getUserAttributes = function (r) {
        if (
          !(this.signInUserSession != null && this.signInUserSession.isValid())
        )
          return r(new Error("User is not authenticated"), null);
        this.client.request(
          "GetUser",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          },
          function (o, i) {
            if (o) return r(o, null);
            for (var a = [], s = 0; s < i.UserAttributes.length; s++) {
              var u = {
                  Name: i.UserAttributes[s].Name,
                  Value: i.UserAttributes[s].Value,
                },
                l = new f5(u);
              a.push(l);
            }
            return r(null, a);
          }
        );
      }),
      (t.getMFAOptions = function (r) {
        if (
          !(this.signInUserSession != null && this.signInUserSession.isValid())
        )
          return r(new Error("User is not authenticated"), null);
        this.client.request(
          "GetUser",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          },
          function (o, i) {
            return o ? r(o, null) : r(null, i.MFAOptions);
          }
        );
      }),
      (t.createGetUserRequest = function () {
        return this.client.promisifyRequest("GetUser", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
        });
      }),
      (t.refreshSessionIfPossible = function (r) {
        var o = this;
        return (
          r === void 0 && (r = {}),
          new Promise(function (i) {
            var a = o.signInUserSession.getRefreshToken();
            a && a.getToken() ? o.refreshSession(a, i, r.clientMetadata) : i();
          })
        );
      }),
      (t.getUserData = function (r, o) {
        var i = this;
        if (
          !(this.signInUserSession != null && this.signInUserSession.isValid())
        )
          return (
            this.clearCachedUserData(),
            r(new Error("User is not authenticated"), null)
          );
        var a = this.getUserDataFromCache();
        if (!a) {
          this.fetchUserData()
            .then(function (s) {
              r(null, s);
            })
            .catch(r);
          return;
        }
        if (this.isFetchUserDataAndTokenRequired(o)) {
          this.fetchUserData()
            .then(function (s) {
              return i.refreshSessionIfPossible(o).then(function () {
                return s;
              });
            })
            .then(function (s) {
              return r(null, s);
            })
            .catch(r);
          return;
        }
        try {
          r(null, JSON.parse(a));
          return;
        } catch (s) {
          this.clearCachedUserData(), r(s, null);
          return;
        }
      }),
      (t.getUserDataFromCache = function () {
        var r = this.storage.getItem(this.userDataKey);
        return r;
      }),
      (t.isFetchUserDataAndTokenRequired = function (r) {
        var o = r || {},
          i = o.bypassCache,
          a = i === void 0 ? !1 : i;
        return a;
      }),
      (t.fetchUserData = function () {
        var r = this;
        return this.createGetUserRequest().then(function (o) {
          return r.cacheUserData(o), o;
        });
      }),
      (t.deleteAttributes = function (r, o) {
        var i = this;
        if (
          !(this.signInUserSession != null && this.signInUserSession.isValid())
        )
          return o(new Error("User is not authenticated"), null);
        this.client.request(
          "DeleteUserAttributes",
          {
            UserAttributeNames: r,
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          },
          function (a) {
            return a
              ? o(a, null)
              : i.getUserData(
                  function () {
                    return o(null, "SUCCESS");
                  },
                  { bypassCache: !0 }
                );
          }
        );
      }),
      (t.resendConfirmationCode = function (r, o) {
        var i = {
          ClientId: this.pool.getClientId(),
          Username: this.username,
          ClientMetadata: o,
        };
        this.client.request("ResendConfirmationCode", i, function (a, s) {
          return a ? r(a, null) : r(null, s);
        });
      }),
      (t.getSession = function (r, o) {
        if ((o === void 0 && (o = {}), this.username == null))
          return r(
            new Error("Username is null. Cannot retrieve a new session"),
            null
          );
        if (this.signInUserSession != null && this.signInUserSession.isValid())
          return r(null, this.signInUserSession);
        var i =
            "CognitoIdentityServiceProvider." +
            this.pool.getClientId() +
            "." +
            this.username,
          a = i + ".idToken",
          s = i + ".accessToken",
          u = i + ".refreshToken",
          l = i + ".clockDrift";
        if (this.storage.getItem(a)) {
          var c = new sv({ IdToken: this.storage.getItem(a) }),
            f = new av({ AccessToken: this.storage.getItem(s) }),
            h = new uv({ RefreshToken: this.storage.getItem(u) }),
            m = parseInt(this.storage.getItem(l), 0) || 0,
            v = { IdToken: c, AccessToken: f, RefreshToken: h, ClockDrift: m },
            g = new lv(v);
          if (g.isValid())
            return (
              (this.signInUserSession = g), r(null, this.signInUserSession)
            );
          if (!h.getToken())
            return r(
              new Error("Cannot retrieve a new session. Please authenticate."),
              null
            );
          this.refreshSession(h, r, o.clientMetadata);
        } else
          r(
            new Error(
              "Local storage is missing an ID Token, Please authenticate"
            ),
            null
          );
      }),
      (t.refreshSession = function (r, o, i) {
        var a = this,
          s = this.pool.wrapRefreshSessionCallback
            ? this.pool.wrapRefreshSessionCallback(o)
            : o,
          u = {};
        u.REFRESH_TOKEN = r.getToken();
        var l = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
          c = l + ".LastAuthUser";
        if (this.storage.getItem(c)) {
          this.username = this.storage.getItem(c);
          var f = l + "." + this.username + ".deviceKey";
          (this.deviceKey = this.storage.getItem(f)),
            (u.DEVICE_KEY = this.deviceKey);
        }
        var h = {
          ClientId: this.pool.getClientId(),
          AuthFlow: "REFRESH_TOKEN_AUTH",
          AuthParameters: u,
          ClientMetadata: i,
        };
        this.getUserContextData() &&
          (h.UserContextData = this.getUserContextData()),
          this.client.request("InitiateAuth", h, function (m, v) {
            if (m)
              return (
                m.code === "NotAuthorizedException" && a.clearCachedUser(),
                s(m, null)
              );
            if (v) {
              var g = v.AuthenticationResult;
              return (
                Object.prototype.hasOwnProperty.call(g, "RefreshToken") ||
                  (g.RefreshToken = r.getToken()),
                (a.signInUserSession = a.getCognitoUserSession(g)),
                a.cacheTokens(),
                s(null, a.signInUserSession)
              );
            }
          });
      }),
      (t.cacheTokens = function () {
        var r = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
          o = r + "." + this.username + ".idToken",
          i = r + "." + this.username + ".accessToken",
          a = r + "." + this.username + ".refreshToken",
          s = r + "." + this.username + ".clockDrift",
          u = r + ".LastAuthUser";
        this.storage.setItem(
          o,
          this.signInUserSession.getIdToken().getJwtToken()
        ),
          this.storage.setItem(
            i,
            this.signInUserSession.getAccessToken().getJwtToken()
          ),
          this.storage.setItem(
            a,
            this.signInUserSession.getRefreshToken().getToken()
          ),
          this.storage.setItem(s, "" + this.signInUserSession.getClockDrift()),
          this.storage.setItem(u, this.username);
      }),
      (t.cacheUserData = function (r) {
        this.storage.setItem(this.userDataKey, JSON.stringify(r));
      }),
      (t.clearCachedUserData = function () {
        this.storage.removeItem(this.userDataKey);
      }),
      (t.clearCachedUser = function () {
        this.clearCachedTokens(), this.clearCachedUserData();
      }),
      (t.cacheDeviceKeyAndPassword = function () {
        var r =
            "CognitoIdentityServiceProvider." +
            this.pool.getClientId() +
            "." +
            this.username,
          o = r + ".deviceKey",
          i = r + ".randomPasswordKey",
          a = r + ".deviceGroupKey";
        this.storage.setItem(o, this.deviceKey),
          this.storage.setItem(i, this.randomPassword),
          this.storage.setItem(a, this.deviceGroupKey);
      }),
      (t.getCachedDeviceKeyAndPassword = function () {
        var r =
            "CognitoIdentityServiceProvider." +
            this.pool.getClientId() +
            "." +
            this.username,
          o = r + ".deviceKey",
          i = r + ".randomPasswordKey",
          a = r + ".deviceGroupKey";
        this.storage.getItem(o) &&
          ((this.deviceKey = this.storage.getItem(o)),
          (this.randomPassword = this.storage.getItem(i)),
          (this.deviceGroupKey = this.storage.getItem(a)));
      }),
      (t.clearCachedDeviceKeyAndPassword = function () {
        var r =
            "CognitoIdentityServiceProvider." +
            this.pool.getClientId() +
            "." +
            this.username,
          o = r + ".deviceKey",
          i = r + ".randomPasswordKey",
          a = r + ".deviceGroupKey";
        this.storage.removeItem(o),
          this.storage.removeItem(i),
          this.storage.removeItem(a);
      }),
      (t.clearCachedTokens = function () {
        var r = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
          o = r + "." + this.username + ".idToken",
          i = r + "." + this.username + ".accessToken",
          a = r + "." + this.username + ".refreshToken",
          s = r + ".LastAuthUser",
          u = r + "." + this.username + ".clockDrift";
        this.storage.removeItem(o),
          this.storage.removeItem(i),
          this.storage.removeItem(a),
          this.storage.removeItem(s),
          this.storage.removeItem(u);
      }),
      (t.getCognitoUserSession = function (r) {
        var o = new sv(r),
          i = new av(r),
          a = new uv(r),
          s = { IdToken: o, AccessToken: i, RefreshToken: a };
        return new lv(s);
      }),
      (t.forgotPassword = function (r, o) {
        var i = {
          ClientId: this.pool.getClientId(),
          Username: this.username,
          ClientMetadata: o,
        };
        this.getUserContextData() &&
          (i.UserContextData = this.getUserContextData()),
          this.client.request("ForgotPassword", i, function (a, s) {
            return a
              ? r.onFailure(a)
              : typeof r.inputVerificationCode == "function"
              ? r.inputVerificationCode(s)
              : r.onSuccess(s);
          });
      }),
      (t.confirmPassword = function (r, o, i, a) {
        var s = {
          ClientId: this.pool.getClientId(),
          Username: this.username,
          ConfirmationCode: r,
          Password: o,
          ClientMetadata: a,
        };
        this.getUserContextData() &&
          (s.UserContextData = this.getUserContextData()),
          this.client.request("ConfirmForgotPassword", s, function (u) {
            return u ? i.onFailure(u) : i.onSuccess("SUCCESS");
          });
      }),
      (t.getAttributeVerificationCode = function (r, o, i) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return o.onFailure(new Error("User is not authenticated"));
        this.client.request(
          "GetUserAttributeVerificationCode",
          {
            AttributeName: r,
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            ClientMetadata: i,
          },
          function (a, s) {
            return a
              ? o.onFailure(a)
              : typeof o.inputVerificationCode == "function"
              ? o.inputVerificationCode(s)
              : o.onSuccess("SUCCESS");
          }
        );
      }),
      (t.verifyAttribute = function (r, o, i) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return i.onFailure(new Error("User is not authenticated"));
        this.client.request(
          "VerifyUserAttribute",
          {
            AttributeName: r,
            Code: o,
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          },
          function (a) {
            return a ? i.onFailure(a) : i.onSuccess("SUCCESS");
          }
        );
      }),
      (t.getDevice = function (r) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return r.onFailure(new Error("User is not authenticated"));
        this.client.request(
          "GetDevice",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            DeviceKey: this.deviceKey,
          },
          function (o, i) {
            return o ? r.onFailure(o) : r.onSuccess(i);
          }
        );
      }),
      (t.forgetSpecificDevice = function (r, o) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return o.onFailure(new Error("User is not authenticated"));
        this.client.request(
          "ForgetDevice",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            DeviceKey: r,
          },
          function (i) {
            return i ? o.onFailure(i) : o.onSuccess("SUCCESS");
          }
        );
      }),
      (t.forgetDevice = function (r) {
        var o = this;
        this.forgetSpecificDevice(this.deviceKey, {
          onFailure: r.onFailure,
          onSuccess: function (a) {
            return (
              (o.deviceKey = null),
              (o.deviceGroupKey = null),
              (o.randomPassword = null),
              o.clearCachedDeviceKeyAndPassword(),
              r.onSuccess(a)
            );
          },
        });
      }),
      (t.setDeviceStatusRemembered = function (r) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return r.onFailure(new Error("User is not authenticated"));
        this.client.request(
          "UpdateDeviceStatus",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            DeviceKey: this.deviceKey,
            DeviceRememberedStatus: "remembered",
          },
          function (o) {
            return o ? r.onFailure(o) : r.onSuccess("SUCCESS");
          }
        );
      }),
      (t.setDeviceStatusNotRemembered = function (r) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return r.onFailure(new Error("User is not authenticated"));
        this.client.request(
          "UpdateDeviceStatus",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
            DeviceKey: this.deviceKey,
            DeviceRememberedStatus: "not_remembered",
          },
          function (o) {
            return o ? r.onFailure(o) : r.onSuccess("SUCCESS");
          }
        );
      }),
      (t.listDevices = function (r, o, i) {
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return i.onFailure(new Error("User is not authenticated"));
        var a = {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          Limit: r,
        };
        o && (a.PaginationToken = o),
          this.client.request("ListDevices", a, function (s, u) {
            return s ? i.onFailure(s) : i.onSuccess(u);
          });
      }),
      (t.globalSignOut = function (r) {
        var o = this;
        if (this.signInUserSession == null || !this.signInUserSession.isValid())
          return r.onFailure(new Error("User is not authenticated"));
        this.client.request(
          "GlobalSignOut",
          {
            AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          },
          function (i) {
            return i
              ? r.onFailure(i)
              : (o.clearCachedUser(), r.onSuccess("SUCCESS"));
          }
        );
      }),
      (t.signOut = function (r) {
        var o = this;
        if (!r || typeof r != "function") {
          this.cleanClientData();
          return;
        }
        this.getSession(function (i, a) {
          if (i) return r(i);
          o.revokeTokens(function (s) {
            o.cleanClientData(), r(s);
          });
        });
      }),
      (t.revokeTokens = function (r) {
        if ((r === void 0 && (r = function () {}), typeof r != "function"))
          throw new Error(
            "Invalid revokeTokenCallback. It should be a function."
          );
        if (!this.signInUserSession) {
          var o = new Error("User is not authenticated");
          return r(o);
        }
        if (!this.signInUserSession.getAccessToken()) {
          var i = new Error("No Access token available");
          return r(i);
        }
        var a = this.signInUserSession.getRefreshToken().getToken(),
          s = this.signInUserSession.getAccessToken();
        if (this.isSessionRevocable(s) && a)
          return this.revokeToken({ token: a, callback: r });
        r();
      }),
      (t.isSessionRevocable = function (r) {
        if (r && typeof r.decodePayload == "function")
          try {
            var o = r.decodePayload(),
              i = o.origin_jti;
            return !!i;
          } catch {}
        return !1;
      }),
      (t.cleanClientData = function () {
        (this.signInUserSession = null), this.clearCachedUser();
      }),
      (t.revokeToken = function (r) {
        var o = r.token,
          i = r.callback;
        this.client.requestWithRetry(
          "RevokeToken",
          { Token: o, ClientId: this.pool.getClientId() },
          function (a) {
            if (a) return i(a);
            i();
          }
        );
      }),
      (t.sendMFASelectionAnswer = function (r, o) {
        var i = this,
          a = {};
        (a.USERNAME = this.username), (a.ANSWER = r);
        var s = {
          ChallengeName: "SELECT_MFA_TYPE",
          ChallengeResponses: a,
          ClientId: this.pool.getClientId(),
          Session: this.Session,
        };
        this.getUserContextData() &&
          (s.UserContextData = this.getUserContextData()),
          this.client.request("RespondToAuthChallenge", s, function (u, l) {
            if (u) return o.onFailure(u);
            if (((i.Session = l.Session), r === "SMS_MFA"))
              return o.mfaRequired(l.ChallengeName, l.ChallengeParameters);
            if (r === "SOFTWARE_TOKEN_MFA")
              return o.totpRequired(l.ChallengeName, l.ChallengeParameters);
          });
      }),
      (t.getUserContextData = function () {
        var r = this.pool;
        return r.getUserContextData(this.username);
      }),
      (t.associateSoftwareToken = function (r) {
        var o = this;
        this.signInUserSession != null && this.signInUserSession.isValid()
          ? this.client.request(
              "AssociateSoftwareToken",
              {
                AccessToken: this.signInUserSession
                  .getAccessToken()
                  .getJwtToken(),
              },
              function (i, a) {
                return i ? r.onFailure(i) : r.associateSecretCode(a.SecretCode);
              }
            )
          : this.client.request(
              "AssociateSoftwareToken",
              { Session: this.Session },
              function (i, a) {
                return i
                  ? r.onFailure(i)
                  : ((o.Session = a.Session),
                    r.associateSecretCode(a.SecretCode));
              }
            );
      }),
      (t.verifySoftwareToken = function (r, o, i) {
        var a = this;
        this.signInUserSession != null && this.signInUserSession.isValid()
          ? this.client.request(
              "VerifySoftwareToken",
              {
                AccessToken: this.signInUserSession
                  .getAccessToken()
                  .getJwtToken(),
                UserCode: r,
                FriendlyDeviceName: o,
              },
              function (s, u) {
                return s ? i.onFailure(s) : i.onSuccess(u);
              }
            )
          : this.client.request(
              "VerifySoftwareToken",
              { Session: this.Session, UserCode: r, FriendlyDeviceName: o },
              function (s, u) {
                if (s) return i.onFailure(s);
                a.Session = u.Session;
                var l = {};
                l.USERNAME = a.username;
                var c = {
                  ChallengeName: "MFA_SETUP",
                  ClientId: a.pool.getClientId(),
                  ChallengeResponses: l,
                  Session: a.Session,
                };
                a.getUserContextData() &&
                  (c.UserContextData = a.getUserContextData()),
                  a.client.request(
                    "RespondToAuthChallenge",
                    c,
                    function (f, h) {
                      return f
                        ? i.onFailure(f)
                        : ((a.signInUserSession = a.getCognitoUserSession(
                            h.AuthenticationResult
                          )),
                          a.cacheTokens(),
                          i.onSuccess(a.signInUserSession));
                    }
                  );
              }
            );
      }),
      e
    );
  })();
function h5(e, t) {
  return (
    (t = t || {}),
    new Promise(function (n, r) {
      var o = new XMLHttpRequest(),
        i = [],
        a = [],
        s = {},
        u = function () {
          return {
            ok: ((o.status / 100) | 0) == 2,
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function () {
              return Promise.resolve(o.responseText);
            },
            json: function () {
              return Promise.resolve(o.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: u,
            headers: {
              keys: function () {
                return i;
              },
              entries: function () {
                return a;
              },
              get: function (c) {
                return s[c.toLowerCase()];
              },
              has: function (c) {
                return c.toLowerCase() in s;
              },
            },
          };
        };
      for (var l in (o.open(t.method || "get", e, !0),
      (o.onload = function () {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (c, f, h) {
            i.push((f = f.toLowerCase())),
              a.push([f, h]),
              (s[f] = s[f] ? s[f] + "," + h : h);
          }),
          n(u());
      }),
      (o.onerror = r),
      (o.withCredentials = t.credentials == "include"),
      t.headers))
        o.setRequestHeader(l, t.headers[l]);
      o.send(t.body || null);
    })
  );
}
var m5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: h5 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pv = ug(m5);
self.fetch || (self.fetch = pv.default || pv);
var v5 = "5.0.4";
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var _f = "aws-amplify/" + v5,
  gr = {
    userAgent: _f + " js",
    product: "",
    navigator: null,
    isReactNative: !1,
  };
if (typeof navigator != "undefined" && navigator.product)
  switch (
    ((gr.product = navigator.product || ""),
    (gr.navigator = navigator || null),
    navigator.product)
  ) {
    case "ReactNative":
      (gr.userAgent = _f + " react-native"), (gr.isReactNative = !0);
      break;
    default:
      (gr.userAgent = _f + " js"), (gr.isReactNative = !1);
      break;
  }
var y5 = function () {
  return gr.userAgent;
};
function q0() {}
q0.prototype.userAgent = y5();
function g5(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Mi(e, t);
}
function bf(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (bf = function (r) {
      if (r === null || !S5(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t != "undefined") {
        if (t.has(r)) return t.get(r);
        t.set(r, o);
      }
      function o() {
        return La(r, arguments, xf(this).constructor);
      }
      return (
        (o.prototype = Object.create(r.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Mi(o, r)
      );
    }),
    bf(e)
  );
}
function La(e, t, n) {
  return (
    w5()
      ? (La = Reflect.construct.bind())
      : (La = function (o, i, a) {
          var s = [null];
          s.push.apply(s, i);
          var u = Function.bind.apply(o, s),
            l = new u();
          return a && Mi(l, a.prototype), l;
        }),
    La.apply(null, arguments)
  );
}
function w5() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function S5(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Mi(e, t) {
  return (
    (Mi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Mi(e, t)
  );
}
function xf(e) {
  return (
    (xf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    xf(e)
  );
}
var C5 = (function (e) {
    g5(t, e);
    function t(n, r, o, i) {
      var a;
      return (
        (a = e.call(this, n) || this),
        (a.code = r),
        (a.name = o),
        (a.statusCode = i),
        a
      );
    }
    return t;
  })(bf(Error)),
  _5 = (function () {
    function e(n, r, o) {
      this.endpoint = r || "https://cognito-idp." + n + ".amazonaws.com/";
      var i = o || {},
        a = i.credentials;
      this.fetchOptions = a ? { credentials: a } : {};
    }
    var t = e.prototype;
    return (
      (t.promisifyRequest = function (r, o) {
        var i = this;
        return new Promise(function (a, s) {
          i.request(r, o, function (u, l) {
            u ? s(new C5(u.message, u.code, u.name, u.statusCode)) : a(l);
          });
        });
      }),
      (t.requestWithRetry = function (r, o, i) {
        var a = this,
          s = 5 * 1e3;
        P5(
          function (u) {
            return new Promise(function (l, c) {
              a.request(r, u, function (f, h) {
                f ? c(f) : l(h);
              });
            });
          },
          [o],
          s
        )
          .then(function (u) {
            return i(null, u);
          })
          .catch(function (u) {
            return i(u);
          });
      }),
      (t.request = function (r, o, i) {
        var a = {
            "Content-Type": "application/x-amz-json-1.1",
            "X-Amz-Target": "AWSCognitoIdentityProviderService." + r,
            "X-Amz-User-Agent": q0.prototype.userAgent,
          },
          s = Object.assign({}, this.fetchOptions, {
            headers: a,
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            body: JSON.stringify(o),
          }),
          u;
        fetch(this.endpoint, s)
          .then(
            function (l) {
              return (u = l), l;
            },
            function (l) {
              throw l instanceof TypeError ? new Error("Network error") : l;
            }
          )
          .then(function (l) {
            return l.json().catch(function () {
              return {};
            });
          })
          .then(function (l) {
            if (u.ok) return i(null, l);
            var c = (l.__type || l.code).split("#").pop(),
              f = new Error(l.message || l.Message || null);
            return (f.name = c), (f.code = c), i(f);
          })
          .catch(function (l) {
            if (u && u.headers && u.headers.get("x-amzn-errortype"))
              try {
                var c = u.headers.get("x-amzn-errortype").split(":")[0],
                  f = new Error(u.status ? u.status.toString() : null);
                return (
                  (f.code = c), (f.name = c), (f.statusCode = u.status), i(f)
                );
              } catch {
                return i(l);
              }
            else
              l instanceof Error &&
                l.message === "Network error" &&
                (l.code = "NetworkError");
            return i(l);
          });
      }),
      e
    );
  })(),
  ga = { debug: function () {} },
  b5 = function (t) {
    var n = "nonRetryable";
    return t && t[n];
  };
function Q0(e, t, n, r) {
  if ((r === void 0 && (r = 1), typeof e != "function"))
    throw Error("functionToRetry must be a function");
  return (
    ga.debug(e.name + " attempt #" + r + " with args: " + JSON.stringify(t)),
    e.apply(void 0, t).catch(function (o) {
      if ((ga.debug("error on " + e.name, o), b5(o)))
        throw (ga.debug(e.name + " non retryable error", o), o);
      var i = n(r, t, o);
      if ((ga.debug(e.name + " retrying in " + i + " ms"), i !== !1))
        return new Promise(function (a) {
          return setTimeout(a, i);
        }).then(function () {
          return Q0(e, t, n, r + 1);
        });
      throw o;
    })
  );
}
function x5(e) {
  var t = 100,
    n = 100;
  return function (r) {
    var o = Math.pow(2, r) * t + n * Math.random();
    return o > e ? !1 : o;
  };
}
var E5 = 5 * 60 * 1e3;
function P5(e, t, n) {
  return n === void 0 && (n = E5), Q0(e, t, x5(n));
}
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */ var O5 = 55,
  D5 = (function () {
    function e(n, r) {
      var o = n || {},
        i = o.UserPoolId,
        a = o.ClientId,
        s = o.endpoint,
        u = o.fetchOptions,
        l = o.AdvancedSecurityDataCollectionFlag;
      if (!i || !a)
        throw new Error("Both UserPoolId and ClientId are required.");
      if (i.length > O5 || !/^[\w-]+_[0-9a-zA-Z]+$/.test(i))
        throw new Error("Invalid UserPoolId format.");
      var c = i.split("_")[0];
      (this.userPoolId = i),
        (this.clientId = a),
        (this.client = new _5(c, s, u)),
        (this.advancedSecurityDataCollectionFlag = l !== !1),
        (this.storage = n.Storage || new K0().getStorage()),
        r && (this.wrapRefreshSessionCallback = r);
    }
    var t = e.prototype;
    return (
      (t.getUserPoolId = function () {
        return this.userPoolId;
      }),
      (t.getUserPoolName = function () {
        return this.getUserPoolId().split("_")[1];
      }),
      (t.getClientId = function () {
        return this.clientId;
      }),
      (t.signUp = function (r, o, i, a, s, u) {
        var l = this,
          c = {
            ClientId: this.clientId,
            Username: r,
            Password: o,
            UserAttributes: i,
            ValidationData: a,
            ClientMetadata: u,
          };
        this.getUserContextData(r) &&
          (c.UserContextData = this.getUserContextData(r)),
          this.client.request("SignUp", c, function (f, h) {
            if (f) return s(f, null);
            var m = { Username: r, Pool: l, Storage: l.storage },
              v = {
                user: new Cf(m),
                userConfirmed: h.UserConfirmed,
                userSub: h.UserSub,
                codeDeliveryDetails: h.CodeDeliveryDetails,
              };
            return s(null, v);
          });
      }),
      (t.getCurrentUser = function () {
        var r =
            "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser",
          o = this.storage.getItem(r);
        if (o) {
          var i = { Username: o, Pool: this, Storage: this.storage };
          return new Cf(i);
        }
        return null;
      }),
      (t.getUserContextData = function (r) {
        if (typeof AmazonCognitoAdvancedSecurityData != "undefined") {
          var o = AmazonCognitoAdvancedSecurityData;
          if (this.advancedSecurityDataCollectionFlag) {
            var i = o.getData(r, this.userPoolId, this.clientId);
            if (i) {
              var a = { EncodedData: i };
              return a;
            }
          }
          return {};
        }
      }),
      e
    );
  })(),
  k5 = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */ (function (e, t) {
  (function (n) {
    var r;
    if (((e.exports = n()), (r = !0), !r)) {
      var o = window.Cookies,
        i = (window.Cookies = n());
      i.noConflict = function () {
        return (window.Cookies = o), i;
      };
    }
  })(function () {
    function n() {
      for (var i = 0, a = {}; i < arguments.length; i++) {
        var s = arguments[i];
        for (var u in s) a[u] = s[u];
      }
      return a;
    }
    function r(i) {
      return i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function o(i) {
      function a() {}
      function s(l, c, f) {
        if (typeof document != "undefined") {
          (f = n({ path: "/" }, a.defaults, f)),
            typeof f.expires == "number" &&
              (f.expires = new Date(new Date() * 1 + f.expires * 864e5)),
            (f.expires = f.expires ? f.expires.toUTCString() : "");
          try {
            var h = JSON.stringify(c);
            /^[\{\[]/.test(h) && (c = h);
          } catch {}
          (c = i.write
            ? i.write(c, l)
            : encodeURIComponent(String(c)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (l = encodeURIComponent(String(l))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var m = "";
          for (var v in f)
            !f[v] ||
              ((m += "; " + v), f[v] !== !0 && (m += "=" + f[v].split(";")[0]));
          return (document.cookie = l + "=" + c + m);
        }
      }
      function u(l, c) {
        if (typeof document != "undefined") {
          for (
            var f = {},
              h = document.cookie ? document.cookie.split("; ") : [],
              m = 0;
            m < h.length;
            m++
          ) {
            var v = h[m].split("="),
              g = v.slice(1).join("=");
            !c && g.charAt(0) === '"' && (g = g.slice(1, -1));
            try {
              var O = r(v[0]);
              if (((g = (i.read || i)(g, O) || r(g)), c))
                try {
                  g = JSON.parse(g);
                } catch {}
              if (((f[O] = g), l === O)) break;
            } catch {}
          }
          return l ? f[l] : f;
        }
      }
      return (
        (a.set = s),
        (a.get = function (l) {
          return u(l, !1);
        }),
        (a.getJSON = function (l) {
          return u(l, !0);
        }),
        (a.remove = function (l, c) {
          s(l, "", n(c, { expires: -1 }));
        }),
        (a.defaults = {}),
        (a.withConverter = o),
        a
      );
    }
    return o(function () {});
  });
})(k5);
const dv = ({
  className: e,
  value: t,
  updateState: n,
  loginCredentials: r,
  setLoginCredentials: o,
}) => {
  const [i, a] = T.exports.useState(!1);
  return [
    {
      className: "email",
      label: "Email",
      type: "text",
      placeholder: "your_email@sae.edu",
      icon: null,
    },
    {
      className: "password",
      label: "Password",
      type: { default: "password", toggle: "text" },
      placeholder: "your password",
      icon: b("svg", {
        width: "22",
        height: "20",
        viewBox: "0 0 22 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M11 3.55C14.79 3.55 18.17 5.68 19.82 9.05C19.23 10.27 18.4 11.32 17.41 12.17L18.82 13.58C20.21 12.35 21.31 10.81 22 9.05C20.27 4.66 16 1.55 11 1.55C9.73 1.55 8.51 1.75 7.36 2.12L9.01 3.77C9.66 3.64 10.32 3.55 11 3.55ZM9.93 4.69L12 6.76C12.57 7.01 13.03 7.47 13.28 8.04L15.35 10.11C15.43 9.77 15.49 9.41 15.49 9.04C15.5 6.56 13.48 4.55 11 4.55C10.63 4.55 10.28 4.6 9.93 4.69ZM1.01 1.42L3.69 4.1C2.06 5.38 0.77 7.08 0 9.05C1.73 13.44 6 16.55 11 16.55C12.52 16.55 13.98 16.26 15.32 15.73L18.74 19.15L20.15 17.74L2.42 0L1.01 1.42ZM8.51 8.92L11.12 11.53C11.08 11.54 11.04 11.55 11 11.55C9.62 11.55 8.5 10.43 8.5 9.05C8.5 9 8.51 8.97 8.51 8.92ZM5.11 5.52L6.86 7.27C6.63 7.82 6.5 8.42 6.5 9.05C6.5 11.53 8.52 13.55 11 13.55C11.63 13.55 12.23 13.42 12.77 13.19L13.75 14.17C12.87 14.41 11.95 14.55 11 14.55C7.21 14.55 3.83 12.42 2.18 9.05C2.88 7.62 3.9 6.44 5.11 5.52Z",
          fill: "#b6b6b6",
        }),
      }),
      iconToggled: b("svg", {
        width: "22",
        height: "16",
        viewBox: "0 0 22 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z",
          fill: "#323232",
        }),
      }),
    },
    {
      className: "filter-title",
      label: "Document - Title",
      type: "text",
      placeholder: "search by document title",
      icon: b("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M13.7917 12.1667H12.9358L12.6325 11.8742C13.6942 10.6392 14.3333 9.03583 14.3333 7.29167C14.3333 3.4025 11.1808 0.25 7.29167 0.25C3.4025 0.25 0.25 3.4025 0.25 7.29167C0.25 11.1808 3.4025 14.3333 7.29167 14.3333C9.03583 14.3333 10.6392 13.6942 11.8742 12.6325L12.1667 12.9358V13.7917L17.5833 19.1975L19.1975 17.5833L13.7917 12.1667ZM7.29167 12.1667C4.59417 12.1667 2.41667 9.98917 2.41667 7.29167C2.41667 4.59417 4.59417 2.41667 7.29167 2.41667C9.98917 2.41667 12.1667 4.59417 12.1667 7.29167C12.1667 9.98917 9.98917 12.1667 7.29167 12.1667Z",
          fill: "#445C61",
          fillOpacity: "0.5",
        }),
      }),
      iconToggled: b("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M13.7917 12.1667H12.9358L12.6325 11.8742C13.6942 10.6392 14.3333 9.03583 14.3333 7.29167C14.3333 3.4025 11.1808 0.25 7.29167 0.25C3.4025 0.25 0.25 3.4025 0.25 7.29167C0.25 11.1808 3.4025 14.3333 7.29167 14.3333C9.03583 14.3333 10.6392 13.6942 11.8742 12.6325L12.1667 12.9358V13.7917L17.5833 19.1975L19.1975 17.5833L13.7917 12.1667ZM7.29167 12.1667C4.59417 12.1667 2.41667 9.98917 2.41667 7.29167C2.41667 4.59417 4.59417 2.41667 7.29167 2.41667C9.98917 2.41667 12.1667 4.59417 12.1667 7.29167C12.1667 9.98917 9.98917 12.1667 7.29167 12.1667Z",
          fill: "#445C61",
          fillOpacity: "0.5",
        }),
      }),
    },
    {
      className: "status",
      label: "Status",
      type: "text",
      placeholder: "Passed",
      icon: b("svg", {
        width: "20",
        height: "13",
        viewBox: "0 0 20 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M1.87003 0.489989L0.100025 2.25999L10 12.16L19.9 2.25999L18.13 0.48999L10 8.61999L1.87003 0.489989Z",
          fill: "#445C61",
          fillOpacity: "0.5",
        }),
      }),
      iconToggled: b("svg", {
        width: "20",
        height: "13",
        viewBox: "0 0 20 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M1.87003 0.489989L0.100025 2.25999L10 12.16L19.9 2.25999L18.13 0.48999L10 8.61999L1.87003 0.489989Z",
          fill: "#445C61",
          fillOpacity: "0.5",
        }),
      }),
    },
    {
      className: "date-start",
      label: "Date",
      type: "text",
      placeholder: "Start",
      icon: b("svg", {
        width: "18",
        height: "21",
        viewBox: "0 0 18 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M6.28125 11.75C6.51562 11.75 6.75 11.5547 6.75 11.2812V9.71875C6.75 9.48438 6.51562 9.25 6.28125 9.25H4.71875C4.44531 9.25 4.25 9.48438 4.25 9.71875V11.2812C4.25 11.5547 4.44531 11.75 4.71875 11.75H6.28125ZM10.5 11.2812V9.71875C10.5 9.48438 10.2656 9.25 10.0312 9.25H8.46875C8.19531 9.25 8 9.48438 8 9.71875V11.2812C8 11.5547 8.19531 11.75 8.46875 11.75H10.0312C10.2656 11.75 10.5 11.5547 10.5 11.2812ZM14.25 11.2812V9.71875C14.25 9.48438 14.0156 9.25 13.7812 9.25H12.2188C11.9453 9.25 11.75 9.48438 11.75 9.71875V11.2812C11.75 11.5547 11.9453 11.75 12.2188 11.75H13.7812C14.0156 11.75 14.25 11.5547 14.25 11.2812ZM10.5 15.0312V13.4688C10.5 13.2344 10.2656 13 10.0312 13H8.46875C8.19531 13 8 13.2344 8 13.4688V15.0312C8 15.3047 8.19531 15.5 8.46875 15.5H10.0312C10.2656 15.5 10.5 15.3047 10.5 15.0312ZM6.75 15.0312V13.4688C6.75 13.2344 6.51562 13 6.28125 13H4.71875C4.44531 13 4.25 13.2344 4.25 13.4688V15.0312C4.25 15.3047 4.44531 15.5 4.71875 15.5H6.28125C6.51562 15.5 6.75 15.3047 6.75 15.0312ZM14.25 15.0312V13.4688C14.25 13.2344 14.0156 13 13.7812 13H12.2188C11.9453 13 11.75 13.2344 11.75 13.4688V15.0312C11.75 15.3047 11.9453 15.5 12.2188 15.5H13.7812C14.0156 15.5 14.25 15.3047 14.25 15.0312ZM18 4.875C18 3.85938 17.1406 3 16.125 3H14.25V0.96875C14.25 0.734375 14.0156 0.5 13.7812 0.5H12.2188C11.9453 0.5 11.75 0.734375 11.75 0.96875V3H6.75V0.96875C6.75 0.734375 6.51562 0.5 6.28125 0.5H4.71875C4.44531 0.5 4.25 0.734375 4.25 0.96875V3H2.375C1.32031 3 0.5 3.85938 0.5 4.875V18.625C0.5 19.6797 1.32031 20.5 2.375 20.5H16.125C17.1406 20.5 18 19.6797 18 18.625V4.875ZM16.125 18.3906C16.125 18.5469 16.0078 18.625 15.8906 18.625H2.60938C2.45312 18.625 2.375 18.5469 2.375 18.3906V6.75H16.125V18.3906Z",
          fill: "#445C61",
        }),
      }),
      iconToggled: b("svg", {
        width: "18",
        height: "21",
        viewBox: "0 0 18 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M6.28125 11.75C6.51562 11.75 6.75 11.5547 6.75 11.2812V9.71875C6.75 9.48438 6.51562 9.25 6.28125 9.25H4.71875C4.44531 9.25 4.25 9.48438 4.25 9.71875V11.2812C4.25 11.5547 4.44531 11.75 4.71875 11.75H6.28125ZM10.5 11.2812V9.71875C10.5 9.48438 10.2656 9.25 10.0312 9.25H8.46875C8.19531 9.25 8 9.48438 8 9.71875V11.2812C8 11.5547 8.19531 11.75 8.46875 11.75H10.0312C10.2656 11.75 10.5 11.5547 10.5 11.2812ZM14.25 11.2812V9.71875C14.25 9.48438 14.0156 9.25 13.7812 9.25H12.2188C11.9453 9.25 11.75 9.48438 11.75 9.71875V11.2812C11.75 11.5547 11.9453 11.75 12.2188 11.75H13.7812C14.0156 11.75 14.25 11.5547 14.25 11.2812ZM10.5 15.0312V13.4688C10.5 13.2344 10.2656 13 10.0312 13H8.46875C8.19531 13 8 13.2344 8 13.4688V15.0312C8 15.3047 8.19531 15.5 8.46875 15.5H10.0312C10.2656 15.5 10.5 15.3047 10.5 15.0312ZM6.75 15.0312V13.4688C6.75 13.2344 6.51562 13 6.28125 13H4.71875C4.44531 13 4.25 13.2344 4.25 13.4688V15.0312C4.25 15.3047 4.44531 15.5 4.71875 15.5H6.28125C6.51562 15.5 6.75 15.3047 6.75 15.0312ZM14.25 15.0312V13.4688C14.25 13.2344 14.0156 13 13.7812 13H12.2188C11.9453 13 11.75 13.2344 11.75 13.4688V15.0312C11.75 15.3047 11.9453 15.5 12.2188 15.5H13.7812C14.0156 15.5 14.25 15.3047 14.25 15.0312ZM18 4.875C18 3.85938 17.1406 3 16.125 3H14.25V0.96875C14.25 0.734375 14.0156 0.5 13.7812 0.5H12.2188C11.9453 0.5 11.75 0.734375 11.75 0.96875V3H6.75V0.96875C6.75 0.734375 6.51562 0.5 6.28125 0.5H4.71875C4.44531 0.5 4.25 0.734375 4.25 0.96875V3H2.375C1.32031 3 0.5 3.85938 0.5 4.875V18.625C0.5 19.6797 1.32031 20.5 2.375 20.5H16.125C17.1406 20.5 18 19.6797 18 18.625V4.875ZM16.125 18.3906C16.125 18.5469 16.0078 18.625 15.8906 18.625H2.60938C2.45312 18.625 2.375 18.5469 2.375 18.3906V6.75H16.125V18.3906Z",
          fill: "#445C61",
        }),
      }),
    },
    {
      className: "date-end",
      label: null,
      type: "text",
      placeholder: "End",
      icon: b("svg", {
        width: "18",
        height: "21",
        viewBox: "0 0 18 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M6.28125 11.75C6.51562 11.75 6.75 11.5547 6.75 11.2812V9.71875C6.75 9.48438 6.51562 9.25 6.28125 9.25H4.71875C4.44531 9.25 4.25 9.48438 4.25 9.71875V11.2812C4.25 11.5547 4.44531 11.75 4.71875 11.75H6.28125ZM10.5 11.2812V9.71875C10.5 9.48438 10.2656 9.25 10.0312 9.25H8.46875C8.19531 9.25 8 9.48438 8 9.71875V11.2812C8 11.5547 8.19531 11.75 8.46875 11.75H10.0312C10.2656 11.75 10.5 11.5547 10.5 11.2812ZM14.25 11.2812V9.71875C14.25 9.48438 14.0156 9.25 13.7812 9.25H12.2188C11.9453 9.25 11.75 9.48438 11.75 9.71875V11.2812C11.75 11.5547 11.9453 11.75 12.2188 11.75H13.7812C14.0156 11.75 14.25 11.5547 14.25 11.2812ZM10.5 15.0312V13.4688C10.5 13.2344 10.2656 13 10.0312 13H8.46875C8.19531 13 8 13.2344 8 13.4688V15.0312C8 15.3047 8.19531 15.5 8.46875 15.5H10.0312C10.2656 15.5 10.5 15.3047 10.5 15.0312ZM6.75 15.0312V13.4688C6.75 13.2344 6.51562 13 6.28125 13H4.71875C4.44531 13 4.25 13.2344 4.25 13.4688V15.0312C4.25 15.3047 4.44531 15.5 4.71875 15.5H6.28125C6.51562 15.5 6.75 15.3047 6.75 15.0312ZM14.25 15.0312V13.4688C14.25 13.2344 14.0156 13 13.7812 13H12.2188C11.9453 13 11.75 13.2344 11.75 13.4688V15.0312C11.75 15.3047 11.9453 15.5 12.2188 15.5H13.7812C14.0156 15.5 14.25 15.3047 14.25 15.0312ZM18 4.875C18 3.85938 17.1406 3 16.125 3H14.25V0.96875C14.25 0.734375 14.0156 0.5 13.7812 0.5H12.2188C11.9453 0.5 11.75 0.734375 11.75 0.96875V3H6.75V0.96875C6.75 0.734375 6.51562 0.5 6.28125 0.5H4.71875C4.44531 0.5 4.25 0.734375 4.25 0.96875V3H2.375C1.32031 3 0.5 3.85938 0.5 4.875V18.625C0.5 19.6797 1.32031 20.5 2.375 20.5H16.125C17.1406 20.5 18 19.6797 18 18.625V4.875ZM16.125 18.3906C16.125 18.5469 16.0078 18.625 15.8906 18.625H2.60938C2.45312 18.625 2.375 18.5469 2.375 18.3906V6.75H16.125V18.3906Z",
          fill: "#445C61",
        }),
      }),
      iconToggled: b("svg", {
        width: "18",
        height: "21",
        viewBox: "0 0 18 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M6.28125 11.75C6.51562 11.75 6.75 11.5547 6.75 11.2812V9.71875C6.75 9.48438 6.51562 9.25 6.28125 9.25H4.71875C4.44531 9.25 4.25 9.48438 4.25 9.71875V11.2812C4.25 11.5547 4.44531 11.75 4.71875 11.75H6.28125ZM10.5 11.2812V9.71875C10.5 9.48438 10.2656 9.25 10.0312 9.25H8.46875C8.19531 9.25 8 9.48438 8 9.71875V11.2812C8 11.5547 8.19531 11.75 8.46875 11.75H10.0312C10.2656 11.75 10.5 11.5547 10.5 11.2812ZM14.25 11.2812V9.71875C14.25 9.48438 14.0156 9.25 13.7812 9.25H12.2188C11.9453 9.25 11.75 9.48438 11.75 9.71875V11.2812C11.75 11.5547 11.9453 11.75 12.2188 11.75H13.7812C14.0156 11.75 14.25 11.5547 14.25 11.2812ZM10.5 15.0312V13.4688C10.5 13.2344 10.2656 13 10.0312 13H8.46875C8.19531 13 8 13.2344 8 13.4688V15.0312C8 15.3047 8.19531 15.5 8.46875 15.5H10.0312C10.2656 15.5 10.5 15.3047 10.5 15.0312ZM6.75 15.0312V13.4688C6.75 13.2344 6.51562 13 6.28125 13H4.71875C4.44531 13 4.25 13.2344 4.25 13.4688V15.0312C4.25 15.3047 4.44531 15.5 4.71875 15.5H6.28125C6.51562 15.5 6.75 15.3047 6.75 15.0312ZM14.25 15.0312V13.4688C14.25 13.2344 14.0156 13 13.7812 13H12.2188C11.9453 13 11.75 13.2344 11.75 13.4688V15.0312C11.75 15.3047 11.9453 15.5 12.2188 15.5H13.7812C14.0156 15.5 14.25 15.3047 14.25 15.0312ZM18 4.875C18 3.85938 17.1406 3 16.125 3H14.25V0.96875C14.25 0.734375 14.0156 0.5 13.7812 0.5H12.2188C11.9453 0.5 11.75 0.734375 11.75 0.96875V3H6.75V0.96875C6.75 0.734375 6.51562 0.5 6.28125 0.5H4.71875C4.44531 0.5 4.25 0.734375 4.25 0.96875V3H2.375C1.32031 3 0.5 3.85938 0.5 4.875V18.625C0.5 19.6797 1.32031 20.5 2.375 20.5H16.125C17.1406 20.5 18 19.6797 18 18.625V4.875ZM16.125 18.3906C16.125 18.5469 16.0078 18.625 15.8906 18.625H2.60938C2.45312 18.625 2.375 18.5469 2.375 18.3906V6.75H16.125V18.3906Z",
          fill: "#445C61",
        }),
      }),
    },
  ]
    .filter((u) => u.className === e)
    .map((u) =>
      oe("div", {
        className: "form-input-wrapper",
        children: [
          b("h6", { className: "text", children: u.label }),
          b("input", {
            name: u.className,
            className: "input-field",
            type: i ? u.type.toggle : u.type.default,
            placeholder: u.placeholder,
            value: t,
            onChange: (l) => {
              n(l), o(Zt(Ut({}, r), { [l.target.name]: l.target.value }));
            },
          }),
          b("span", {
            className: "icon-wrapper",
            onClick: () => a((l) => !l),
            children: i ? u.iconToggled : u.icon,
          }),
        ],
      })
    );
};
var G0 = "/assets/Scrypt-Education.e7354647.png";
function J0({
  className: e,
  functionality: t,
  loginCredentials: n,
  neededResources: r,
  style: o,
}) {
  const { userDetails: i } = T.exports.useContext(St);
  return b("button", {
    type: "button",
    style: o,
    onClick: () => {
      t();
    },
    className:
      ((n == null ? void 0 : n.email) !== "") &
        ((n == null ? void 0 : n.password) !== "") &
        ((n == null ? void 0 : n.password.length) >= 8) ||
      (i === null || (i == null ? void 0 : i.role) === "student"
        ? (r == null ? void 0 : r.missing_file) === !1
        : null) ||
      ((i == null ? void 0 : i.role) === "teacher"
        ? ((r == null ? void 0 : r.missing_student) === !1) &
          ((r == null ? void 0 : r.missing_file) === !1)
        : null)
        ? "can-submit"
        : "button",
    children: e,
  });
}
const T5 = {
  UserPoolId: "us-east-1_uKLxCE07d",
  ClientId: "12fkg6pe6sjq3n50bmulo8snia",
};
var hv = new D5(T5);
function Ho() {
  const {
      setUserDetails: e,
      userDetails: t,
      InsertToSqlDb: n,
      searchUser: r,
    } = T.exports.useContext(St),
    o = Oo(),
    [i, a] = T.exports.useState({ email: "", password: "" }),
    [s, u] = T.exports.useState(null),
    [l, c] = T.exports.useState(null),
    [f, h] = T.exports.useState(null),
    [m, v] = T.exports.useState(null);
  T.exports.useEffect(() => {
    (async () => {
      await r();
    })();
  }, []);
  const g = () => {
      c(null), v(null), h(null);
      const y = new Cf({ Username: s.email, Pool: hv }),
        w = new Vb({ Username: s.email, Password: s.password });
      y.authenticateUser(w, {
        onSuccess: (_) => {
          if (
            (console.log("On Success"),
            console.log(_.accessToken),
            _.accessToken.payload["cognito:groups"] === void 0)
          ) {
            h(!0);
            return;
          }
          console.log(_.accessToken.payload["cognito:groups"][0]),
            console.log(_.idToken.payload.email),
            n({
              username: _.accessToken.payload.username,
              role: _.accessToken.payload["cognito:groups"][0],
              email: _.idToken.payload.email,
            }),
            e({
              username: _.accessToken.payload.username,
              role: _.accessToken.payload["cognito:groups"][0],
              email: _.idToken.payload.email,
            }),
            o("/gallery");
        },
        onFailure: (_) => {
          console.log("On Failure"), console.log(_), c(_);
        },
        newPasswordRequired: () => {
          v(!0),
            console.log("New password required"),
            hv.signUp(s.email, s.password, [], null, (_, E) => {
              _ && console.log(_), console.log(E);
            }),
            console.log("User Created");
        },
      });
    },
    O = (y) => {
      u(Zt(Ut({}, s), { [y.target.name]: y.target.value }));
    };
  return b("div", {
    className: "login-container",
    children: oe("div", {
      className: "form-container",
      children: [
        b("div", {
          className: "company-logo-wrapper",
          children: b("img", {
            className: "company-logo",
            src: G0,
            alt: "company-logo",
          }),
        }),
        b(dv, {
          loginCredentials: i,
          setLoginCredentials: a,
          className: "email",
          updateState: (y) => O(y),
        }),
        b("div", {
          children: b(dv, {
            loginCredentials: i,
            setLoginCredentials: a,
            className: "password",
            updateState: (y) => O(y),
          }),
        }),
        b("div", {
          className: "forgot-password-wrapper",
          children: b("a", { href: "/", children: "Forgot password?" }),
        }),
        l !== null &&
          b("p", { className: "wrong", children: "Details are wrong" }),
        f !== null &&
          b("p", {
            className: "wrong",
            children: "Your role is not assigned, please contact your admin",
          }),
        m !== null &&
          b("p", {
            className: "wrong",
            children:
              "Your new user has not been confirmed yet, please contact your admin",
          }),
        b("div", {
          className: "button-wrapper",
          children: b(J0, {
            className: "Login",
            functionality: () => g(),
            loginCredentials: i,
          }),
        }),
      ],
    }),
  });
}
var A5 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADWSURBVHgB7VKxDcIwEPw3DMAIgR6UERIJJFpaoCAbwAiMwASkCIIRKAJkhAgaurikTIvk8NhFJGMgkNByjf3/d+9767E38hJCsKACkICzG1SH0rIsI1eeKZRHqrQs2vicgDwoCSKYKm1NBckxPrc6NsqpnC/l893KX6gb6unu2DvIw/kgjsLAd/OI6SVRp4G0xuG9bS4EPIyLJskZTuw6Q+WkYdaEoKaaW8/VTBI/xRerbV8RsW88P9uv/a3Jf3KQQ/4H6XEYLF9yGfyIf4OCBvpCFS3XHet2TpOCD4eqAAAAAElFTkSuQmCC";
function R5({ setButton: e }) {
  return b("button", {
    className: "filter-button",
    type: "button",
    onClick: () => e(!1),
    children: b("img", { src: A5, alt: "filter icon" }),
  });
}
var Z0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVvSURBVHgBpVhNTFRXFD73zVAHLARaTWkhYWyqIqCdJkUgadIZSLpwAw0uS4CdhabAziamwKKxOyEpY9PNYGBrwEVtukBmB2gTB0XA0thZMGpjW4gUHeLM3J5zYfD93PfmXeZLyPDuu+/e7517fr53GBwAtfO9s/gTT/P08GrTj3G7edVzF/yapnUCh8ByY/hzUAQDRdTM9XQxxiLZaw58OsMzo0gymh2rm7sQ5MwziP8Gs2MZyAysNF4dAQUokSNLeJiGVmN+ye045/waA9aKqwYsdzlsFvgKjsU+GtkEl9BAAR7wDNkQI/jRooNSYgQGpa92Xg2CAlxbbtdqnj8hT6Q5C602/RB1MzcnOf/d/tI3k8kAZ1rEwWruwSCWzqQH9D5qP9UEEWGgBel48Jg+pUiTPVjsLYSW0jPwcckJOFvyARR7CnGsSNxbfbEOq9vrcGdrDW48WwAHRDGgFjnjUZ7hMXPkG8jtRdms02pEquOdEHSUB5FEAmY2FuHWxn3YSr+ArdTL3RcsqoSThyug7UgjvHfoLUEwnLgJuWA+cq/+ZgojzuPwMG0UOdUHj3f+hfNL30MCf2UQlsM/IlWBz3xZcQ5+DQxD98qoeNYeqbj+yhCtvqTPNsyriyrget1FmHwaFZskHDd5DZp36dEkTPw1C9dPfyOsagefz7i/xedq53o3KOz1Y2QxIkak6CgPCiIWqemD9vuXpRZ80Dhm4GPNc4xbrEdHGU78khcxAh31WOJnsR75rglx84CVHGcGcj2V5+DO8zWYeOoYJ64x+SQqrEZBpUyOa9wwqfVIA1x1EWkquPRoAjreDcmsZ0+ubqFnkHHWBjpi9JZund8OX5SHhN9mQetRHmzGPKlDsAb3l5Krm+/p45wN6W/WlxyH6b/nIR+QW1ysaoeWsg8N4zMb93D9E4YxNMxQ7UJvp4GcSL7ALHKGouvh9sGDgIj1YI4Lr9+0+OwtTN71WFks4DBePfdVUJCjcoV6Y0q2ePXhShFh+RKTVQeqJiV75c4MD/Ap4uVFpRHhYMxr+SIXMUEu/VLUYykwz6I8i2gotbtJCEoXwLeTRVS2jOmdXIVYTiAf4qWREkD1KtX3VMyLPVbTUxqvOPS2haAKMRIGD7flLsPTPES8REAsoRJAid1tnnQbk29L2RnLw5QKuldGkCTbJ6hqserCSliR+/PA8ifhGP2zn0qWm8LjGMrD+lm/IblmCTkzQaq7qkfZdrRR6D09MJUNY33dzxqGJIwWHMKfaPaachGlE5lv6QlupZNKxGg9cgu9EEWxeWN5d3+QkjODIoqkznfvd9jOIYLtS5eVnJ+sPP3MmNxRdVeZ50nIcb/+auLJrHjLjvIQ2CGrgN2AStlZrAyWl2HWdCYhx/yGjdF6dHT0tk5C0Q1IsPbiOrSeBTwHucBsvzQZ7/rWqIhMJws6gSwWOdUviEmFBFoucNe4v+EbIulLUmaWLk5l7Dz6Fm1wEi1Ax/LYhVoh5yefJdeg550UTjKZJHKbUnJ44ecOG9HCn8W+FTltHEkmdv4RqoXEQbYGU0WhxN1cdlooEXIFCqqv135y4ZteP+hEp/S7tUDzBtI8E8QcRjonaLdU69EGqC8+LgiQSCAQAaost5//gXnyd5jZvCcnRSUTP7DpuxX7L9GtN7zRuKmP4qodUYcSBhe5YtsHUQCeTFzjrPs/nzcWz9HUcd0rEQQZz/tDAgv6Maeenh6uu0xUf1mGjUJ+GHdLjKDUAvPueIfs5JXwH86H8fjjstt8rxMKClDubGLLtR9/ruiGoiQYlnQ9jj0f7cLVO3U7dT1oGLsGClAmR8CvpCktoy2mIDWeqycsGo4MqlBtKGfv/wFXPoBbrAGHWwAAAABJRU5ErkJggg==",
  X0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXhSURBVHgBpVhNbBtFFH6zu3ZMiINNLilISSoBtcsB59DeKpIUDu2F0ErcIDEhSFAE5EoPcQ5whUr8HEprJz0ikfTSHqo0Eb01EiQSTQxUwq3U0kviEKexY69n+t6kdvbfu+knrRLPzs588/7nMTgASpeTC0ywQq3Kp+Kf5Atu84rZRJ8GyghwkYqOrb0LAcEgILYuJUYZsKxhaE7n4kJ8PL/YJHUxMaCpbBIEDDTGOMDEC2Nr30EABCJHkghxtiAA+hwWKtS5mFZU5R0QIuXw+aaulA/H04VN8AkFAkCts4wTMQKNKwpJy5EYIRaC5ychAHxLTtoPZ//Cs4KLwajBBLzQklwx2xcDPZIKKSzrJrVAYLCs18VE3AdBG7niT4k+CMOAJlgKlf4m6stRTSzcCWrPEKiHjoHWfRygrRPHovIdX89DfWMN6o+WQP9nDjx2X0RPWdGhvgg1Zdnq+SZy0ssUtgBep0FSodffx+cD4EhAL8yDfn8eoLoNorol5ygvJuQTem0YWMfLkmD1jx+gJSwq10wvNSiQz7sSw43aT+eAbz+AnbkzIPCv4x4befnod+fkN+H+c9D+3g0oXxt1/Yag67i/ARZvjbi6OUmiffhXqN650nITI2je7q2voPbnjPye1nFFpGLa32ZzpUtHi7hkzDSJJIYLl6+NSIkcFETsudPTrlLHLGLio1knCBCbOMNEjlRJNkPE1O5j0tAJpC7W8RK4gW/8BbU7M4bfeaj+/j0SzEF57mzTRgkUxK3f24IwY8wkWiKg/7ckNyFidHIakwfZ3QKt5y3QDh23PzTeO2RdHmqrV0CUHkinMglF2Mlp9uOKAh6jGT5Crw7DDtoYgSRGEmyQo/9pzEnVkRPfAIs6S7Vy67w0kxrab1N6DrnKNFTKJiaR2HCTORIjzzTaBxFqEKTnIDZI6/H1NVCNksUioZQ9OulIrpRNfgGcZYwvSY21v+1B1ErQChmgMTh7gWKjSsHbCC4y25cTIyZyFHwxvtnKGbUrKY3aCW4EiRgZPNoQVH47D67k7t10PIAQLFciPghtL6Ers7KusIBcn7KAGxpR32iDlNIgFIXy9RaxEG2NDuIIhc1iGu3XMIdmrXEtCIgQ5VSTk9y/aQoTThDVUjMXOyCmtbGsojORRmVsui/QCV6gAK31npThoaHiVsRaQSAffVeklXgaKwHOnet72sT9dM1cK3ZLsHP1rKeTWCFNZt3Z0+t1GKQKRToEVQKYGdK2SRh8SSpuiJz4Whq+tC88SCsvNpHrSmBZZSfHOEzEP15dlnMag51jeSw3xJRxov7oNkb6Ic9NKAgb1eiXYOiVYTz8bfMgZ1Md4/uXIFMQRglmZAHY2PjePJ4wKdUXBEROx29d4yCuJ+u8u/sxFDVwNTq+mjHO07w2IYegnErqI9U5gdSudd+wv8DKmGzR6MUNhPs/NRGThBXWa1vbRkhAn7FuIXKkAqp8jRUGgaK88tg9lonSw6dkzkkVkglQwqfMsPPL22Zywh7ObOSY5RJD0ttBqVGipg2MuZQStx80iJGHhlOfoWefsc0RljLtKZd9FLOpmMZ3i04bNApFUo9Vgn5AEiNi5evuBSteuuPGS7dFcpWY222RFqQKtv1UDokeQZI/+irVyfDJZukvSczzm0qEpOdCTkeVevQAaOHHaCvywnJq76JTQ8OmYNqQhswo4Y49R+k5iQdJYoE5g9L+vGXm0DRpUoXmwawTqBDAtkMKXwzgzzdwxoDrYugoKla9aleieXEhD4XaloyR9YdLrnmWUhQTHIMtW0F7W6yr5UVrH8VXO0KWMKryrUcfxDeQSIFxkda1ynKrpo7vXokk2OLC7Qd6VRz26ukZ4bvLJG/iAi7AM4CByPklRgjUAtPVtoxbeYXElznmZuFwxdt7DdgJhSkIgMCdzf8vHvlSUdD+mrsKkuiUscdBJiAYG2UMmvcBxsRox4f5aQiAwOTk5j8nZ5HUCvY2cq16wtRwRHX2Rj/KD0JAPAElHu2B7+hYZwAAAABJRU5ErkJggg==",
  ew =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVGSURBVHgBtVhLTBtHGP5n12BoeZhEVdIUNXYx19a9NIciWG4JqGqRcsgtIOXecOsNc8st5B4pzq0HJFpVBW5sWnrozUmPQOxG6YNGbSCQ8rJ3Ot+YXXbXs+NdaD7J8u48v/3nfw6jU2Bk8ekKcV5lh8asPZGrRo2zlipZh+gm407h0djABCUEo4Swvl+f5Iw98DV9w+rOPfuzQdsb892axU1zhohbbpsgOf3j2MAcJUAicpAE586KeMwququi7yEj83NivKDo32IHr3L2xMdbFBMGJYDD68UIYkCWMWMmghiQcdI9M5QAsSV3LLUKnRFCBUb9KqAd22qAtVDJUKpW4KYBPcvSWcF5mTl8Og5BpiCTpfYjyyGjIDpHiDHlMXWlDBq68DYVzndQ4VwndbUZsg1Yf3VA6zuHVP57n5Z/2yHN9rY4jcdGnWyqm+Ww5QfINazMWNGsJglcz/XS9WyvIHFIq5uv5W/3yKHdmiPH5HvaKd+dpqv93XSxMyUJltZeUiuEjzwV6E2lqsSdyMnYaO7KJfpzr0a3Vp/LfxVAGj+QwpzJfB99bb1Pt3/+PXIOsF8T+/sQtNZ9ijRzSOP+UD/NV7dbbuIHxt355YWcd//TfiHR9sixHbQV2L9J50YWNyD/jL8NXw9iIAWJnBb4wLlPLtGtn9RSF1EkwCelWGMrTA5HCZ0JEyucaxiDDuV/9sRvXz5jfmn9pVwPauHq6DGq4bnN5DjfEhbqvU4O9gmr25PHEgaIoV+H0hp55ACsM3ThLWlQIHoCVm1NjslBnvu4+l63PE4drKWnynb72gfK9jtPXkj9A9GQ9AIIGMTw0gbCyxd+YtCNuMofF1hvfedA+skTcGt4qTKjJDe8XPmScSr6O+Fgl5/rnGgDrvP1A0akw+rmv1Jn/RCpVXF4sXIzQA7OlzlOUzqT70lLbx8F+DFIYe7KuwGCfn8YFSHguAvnm42JkVMCH0lOBnTTWFAtAJ+EMBQFbA597GozPYIuMUDnD6FrKokD4IMwanBeR0DP0CkRJhiHmCQnwh3icQQyPM0fGIyZU0TqyKD7ujcMkZiyKcO+lquKgKvM71t8nYR7jLtHdSGtPzy3gzadUSBaROkz48YoMhS5MzIBxvlUeBCcb9Dc9cQgafeYWxFE1qIKhcIgpu3xXBnPnljs8XxJmPJsgJzw7PDmUYAfxOYuMRcuQfRhjHJuf1cgckhinGbtsUHPawTOzB4fLApbsd331b9eS3fSymepvLzOGLDexc62gJvhjH9rjw8U/eO0CgWdm69s01cfvkP/JxCPw85dSO1yeJxCJCzrf5v/dVtmtAjUquAPRMVQFbAOEoYbT56F983EIBcsYiA96A/yORiI3ykjHULWoQPGuICFQmpIlxRoIhesIUSlxdOOMtmXieJxXhclQR0gMRDTJayi6O7zF91ByXUI9ly9OBbEF4MgiIJknGwFyg+dhQHo6g5gnzKQXgS5Wi1LZrSNYOEb9jNZsDQC+5FQ7F2vFAQQUeC44R/hhmDtMKr56qY2dwM6UmJ/X0bcXLeKRICO6gXHJEskxB+JIVbUYvBhSHvyvWmvcAEB6KlMz0XdKstGNSkhIV7mnNy61RZRQV/gqCDrWcO8q7kHSQKEyymqpcphMmHEvyuJUXDHATswcro7PT9ipxyIv5zze3QWcCrFJQYkyoeMQ7NIEekVLmh4IzZXI6bLm1BKgOQ3m4sbt4W3uXvSwm1W57Phm03HZJOMmFcPcDImfxjLPaQESEwOELcCCyKDeUyHqVLLO2Fx4Sg2ufxoLD9KCfEfSdu1jtaS6JcAAAAASUVORK5CYII=",
  tw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUSSURBVHgBvVhPaBxVGP/e2802NgU3kCz01N2TSANGQXN006uNmaYg3pJeBEHUQI/FZMGbQmxRBC9Nb1UwmZh6bfbaekkhStFDxpOQPyTa1Mbs7Dy/30unfTM783YmIf3BS3bevD+/+d739wk6ArbGL60QCa8ggka/63pp43YcpxoEclIJGh5YWrhEOSEoJzbGJqakpJtGl6vawfXBO24z7Nh0nLpQYoaXr4d9QUDTleWFrygHcpGDJHwlV3hSNf5OEXn855YQapyXHU6YvsuSrrGkdykjJOVAKxCzScQA9AtBMynEgDIf8QzlQGbJQWptJdfpmGAVGDVVwIau5JhU2ScaJiVvpkktH9SqaqvpLAQ7yP3FEuppy3og1LAU9HbaMYm+PiqNvEnFoSEqDZ3Xz2hAe32d/HWPWmu/0n93V8hCtBkoeiAD1SwUaTVu+RFyh1YmV6xfwwR6xy7SS2PvaAIH9+7rph4/1g0o1GpUrFXp1IU6FSoV2r/bpCe3v6duiB950XzJx+f1WCZL3ujlzxvU3tik3emrFGxsJI6D5NAgNcw5/f571P/dt/T3tZnUOXr/Ilu8uZ/50MvmnjYR0ijPfUn7y3fon2ufWTcxgXF7N76mJ8s/6/mQaBri+3fo3Nb4xA7/K5t9+HosjC+HRI4KfCAknyZ1jiIRPh1+TiRIDwtCZ45DDMD8f2//oNcTfafj+3rx8cV4h4qRg77A6nAsNpy6MKobAF1Ls1KoBay8d2wsYiSKlBcfmxQhvPim+NpukJVB6mGXgobfNuzd+EZbe1x6VnLbzgTCi2MSg2VmVf6swHo+H3FpZMToFfXtdydmEsltO5c/UYpmzZeQgt2JHh0H935hB34+0sep1eyWc3kyQg7OVynVkc7Auvz1Y4fTFHL3dWTpgFLzmxeduiaHgM5RYTFpAfikNkeBkwCiSRju4hAFuQhesq0EEscyvWDYyDHK4CVbQl2hlMhwuIDdok4Iu+Alz3ImoESQmN8fkjtDJwHoc5pTD0QwCl4FPHzx8KF39dVX/hQknPgCkiXn//4HdUPALqfFSg7rbq399ixDSUPpjddJlEraMKLEuNZwF138fuZKKq47z6bcMAf6a2sxX2Qjt6F9Yla/iHQKkccEu7JGxX1eBEWc8KC7MIsEMHzWvqhW1YG/G+ATkRahFZNchAGshzzP9KHsypYGf8L+xjjbIjgaxMIzH39E3QAVCGFLiwDEaySgJrg4Ohcfl5CViKr5jIBf4FiJ7NeGMNjv6//N1HFYB1KOZ8a8b4c7S8pKqpFnlh7yOORz0EE/xSljHJJKGyBdSA35XMK+HeQiyR0qLS7/dtIWRh6GDAVHnReQGIjZElYuuvvNojsiuX1mn1ZDYEF8MQhCp0Ayi1VC+aGzUA1b3RHuT0ZAiJArdqlLsfDOBx9qCYSFDvTM1wWNp8eEJWJp5C3d8CGQ9CPW3W6+r+jr/b3wOblu5SI6CESd69bXzMuYOJDvQbnDUhAIS8QD9mHQUbijFFK7KLB13SpV8xFRsxa7R8l0HfH01mjOcg+SGfrCRwRX9ohWa10udTLflWQpuLOgxTdNZy13eiYy3zINum6Tvfh1Oh7msxIDcl2BFaWapdTCmy9oODaqhBJPv+V+llqDciD/zaYz8alUNGds21RCNSDZsEen/YGYkkJMPt9JTA24P96iHMhNDuBbgUXOYB74FFiPCZZf4AtHtvpzA0uLo5QT/wPtKm7hqIDsigAAAABJRU5ErkJggg==",
  nw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU7SURBVHgBtVhNSF1HFD5z3/NpNNAnqJBVfKsiEWoKravQp9vGemOgzU6lUCiUtkK6C1Whi0ILNqGl0E2SXVqoPmu6jW+bdmPAQmgXvq4K/qBtNLF6352eb3SaefPu3J+YfHD13bkz53xz5pwzc0bQM2Bz9NIykajlRDjbWanUXP22fb83DL1xKWiga3H+EmWEoIxYHxmb8Dy6aTRVZD283n23UtUNG75fFlJMs/iybgtDmupZmv+KMiATOVgikN4yD+q1v0miGv+5LYQcZbEDEcN32NIltvQOpYRHGXAYipkoYgDahaBpBzGgyEs8TRmQ2nKwWl16a3RCsAsMmS4Qh0RyTKoYEA2Q9G66rJYNckXW5VQagk3k/mILtdS9cijkgCfoDdcyiY4OKgy+Rvn+fir0n1PveID62hoFazU6XP2N/r23TDFEq6GkB14oq7k8rdiR30DuKMq85djZMIG2kYt0auRNReDg/i/qkXt76gFypRLlS73UOlymXE8P7d+r0pM731MS7CXPmx95+WotMYM9VvTSZ7NUX9+gnamrFK6vR/aD5fDAahjTfuVt6vzuW/r72rRzjNKf54g39ZkvbRzuroGwRnHuS9pfukv/XPs0VokJ9Nu98TU9WfpZjYdFXbD1N/nc5ujYNv8rmm2YPQRj5rDIswIThOVdVuddpIFPU54TEdaDQPjMSYgBGP/4zg9Knuhot/XW7P5N5KRFDv6CqMOyPA/ALepstbaREUuvrFESObJm0Do8pGYbBZ064hDVZ/fGNyrabevFktvyx7C9+CYxRGaUf0Ap/PDUlXfIBVgdfWwSkBfwEhcGB02J5a23xqYjyW35lz+SkmbMjy2cXF1JFDkN30AgiqBuR46Te4+bvh/c/5UT+LlGmYJmNv3L4w3kkHyllE3HGURXEBMEWG4Eik1Qv+vvUUDiLljkjhjKWxsX/TJ+5o839IUoAchJdd4F4qD9sf2YnGDXTiKmOLDlXT4rct4C8zqfr0uBg2ORTgCbYBKxJHLgA17eoZCT5NgZjgTER9QLwg54eWf4JCBFGHm+PyJ3OlGS7WOuIDEBf3Yl9VCEQ+CVw8sXDx/Wrva9/Kcg4dsCPLZc8PsflJYYErYgvcSCAn6PQuHV8yQKBRUYjcS41qgsVJR+3cgEVz7p6+OTNpV1G4i1XrjgTCeuqExDsOPdSZVOzIDjVDbbszj/+f/6zQHdlfkZHAD1u8pFpV618duAM+vdI8r5dXvbcLnJbyEP5zxz0pzKFrt/gn6jH8UAPoe98PSHH0R+w+kiLipBEH3sJAyLIzmb4CU7a4+POJWIXvMdG36up1udfqMIJsHuAznYeexJsd5iIjlpFTEQjnMcZht3UEwDBBjkQF6E3iZyDYc7VFq8W2y7BOMchqXCUmcFLKaJuVIIF92dZtHdUEPsM3tXDQGB8B8QhAVBMs1RHc4Pn4VrxNUdWj8ZG0IDuXxCXQrB2++9ryygCx1EXKAKmprqo0vEwuDr6sFEYOlH7LtJPpoPlP6afo+uW7mIDkNR5rr1FfMyxgZSCZxbl4KALhEPOLcFq6sqHTlI7aDAVnWrJ6uPiKol6x4l1XXE8a3RXMw9SGqoCx8RTu4SrZQSLnVS35WkKbjT4JBvms7E3OmZSH3L1F2pVDmLX6eT4VZaYkCmK7C8J2fIWXjzBQ3vjTKixFNfuZ2tNksZkP1m0x/72JM0Z6itSiFnYVndoo79oZjwhBh/qklMdFV+vE0ZkJkcwLcCC1yMPAgojF0mRH6OLxw56s92LS4MUUb8B92ip9vRg5oUAAAAAElFTkSuQmCC";
function N5({ certificate: e }) {
  const { status: t } = e;
  return oe("div", {
    className: "badge-container",
    children: [
      t === "valid" && b("img", { src: Z0, alt: "valid certificate badge" }),
      t === "expired" &&
        b("img", { src: X0, alt: "expired certificate badge" }),
      t === "pending" &&
        b("img", { src: ew, alt: "pending certificate badge" }),
      t === "failed" && b("img", { src: tw, alt: "failed certificate badge" }),
      t === "revoked" &&
        b("img", { src: nw, alt: "revoked certificate badge" }),
    ],
  });
}
function M5({ certificate: e }) {
  const { userDetails: t } = T.exports.useContext(St),
    { title: n, image_url: r, student_id: o, creation_date: i } = e,
    [a, s] = T.exports.useState(null),
    u = () => {
      Te.get(`https://scrypt-backend-node.herokuapp.com/student/${o}`)
        .then((l) => s(l.data[0].email))
        .catch((l) => console.error(l));
    };
  return (
    T.exports.useEffect(() => {
      u();
    }, [o]),
    oe("div", {
      className: "certificate-card",
      children: [
        oe("div", {
          className: "certificate-container",
          children: [
            b("iframe", {
              title: "PDF of the certificate",
              src: r,
              scrolling: "no",
            }),
            b(N5, { certificate: e }),
          ],
        }),
        oe("div", {
          className: "certificate-information",
          children: [
            b("h3", {
              className: "certificate-title",
              children:
                n == null
                  ? void 0
                  : n.replace(".pdf", "").replace(/_/g, " ").replace(/-/g, " "),
            }),
            (t == null ? void 0 : t.role) === "teacher"
              ? oe("p", {
                  className: "issued-to",
                  children: [b("span", { children: "Issued to:" }), " ", a],
                })
              : null,
            oe("p", {
              className: "uploaded-data",
              children: [i.slice(0, 10), " - ", i.slice(11, 19)],
            }),
          ],
        }),
      ],
    })
  );
}
var rw = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(T.exports);
  })(hi, (n) =>
    (() => {
      var r = {
          703: (s, u, l) => {
            var c = l(414);
            function f() {}
            function h() {}
            (h.resetWarningCache = f),
              (s.exports = function () {
                function m(O, y, w, _, E, U) {
                  if (U !== c) {
                    var L = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((L.name = "Invariant Violation"), L);
                  }
                }
                function v() {
                  return m;
                }
                m.isRequired = m;
                var g = {
                  array: m,
                  bigint: m,
                  bool: m,
                  func: m,
                  number: m,
                  object: m,
                  string: m,
                  symbol: m,
                  any: m,
                  arrayOf: v,
                  element: m,
                  elementType: m,
                  instanceOf: v,
                  node: m,
                  objectOf: v,
                  oneOf: v,
                  oneOfType: v,
                  shape: v,
                  exact: v,
                  checkPropTypes: h,
                  resetWarningCache: f,
                };
                return (g.PropTypes = g), g;
              });
          },
          697: (s, u, l) => {
            s.exports = l(703)();
          },
          414: (s) => {
            s.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          98: (s) => {
            s.exports = n;
          },
        },
        o = {};
      function i(s) {
        var u = o[s];
        if (u !== void 0) return u.exports;
        var l = (o[s] = { exports: {} });
        return r[s](l, l.exports, i), l.exports;
      }
      (i.n = (s) => {
        var u = s && s.__esModule ? () => s.default : () => s;
        return i.d(u, { a: u }), u;
      }),
        (i.d = (s, u) => {
          for (var l in u)
            i.o(u, l) &&
              !i.o(s, l) &&
              Object.defineProperty(s, l, { enumerable: !0, get: u[l] });
        }),
        (i.o = (s, u) => Object.prototype.hasOwnProperty.call(s, u)),
        (i.r = (s) => {
          typeof Symbol != "undefined" &&
            Symbol.toStringTag &&
            Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(s, "__esModule", { value: !0 });
        });
      var a = {};
      return (
        (() => {
          i.r(a), i.d(a, { default: () => I });
          var s = i(98),
            u = i.n(s),
            l = i(697),
            c = i.n(l);
          function f() {
            return (
              (f = Object.assign
                ? Object.assign.bind()
                : function (D) {
                    for (var R = 1; R < arguments.length; R++) {
                      var W = arguments[R];
                      for (var F in W)
                        Object.prototype.hasOwnProperty.call(W, F) &&
                          (D[F] = W[F]);
                    }
                    return D;
                  }),
              f.apply(this, arguments)
            );
          }
          var h = function (D) {
            var R = D.pageClassName,
              W = D.pageLinkClassName,
              F = D.page,
              J = D.selected,
              ie = D.activeClassName,
              K = D.activeLinkClassName,
              M = D.getEventListener,
              N = D.pageSelectedHandler,
              G = D.href,
              Y = D.extraAriaContext,
              ee = D.pageLabelBuilder,
              re = D.rel,
              ae = D.ariaLabel || "Page " + F + (Y ? " " + Y : ""),
              ce = null;
            return (
              J &&
                ((ce = "page"),
                (ae = D.ariaLabel || "Page " + F + " is your current page"),
                (R = R !== void 0 ? R + " " + ie : ie),
                W !== void 0 ? K !== void 0 && (W = W + " " + K) : (W = K)),
              u().createElement(
                "li",
                { className: R },
                u().createElement(
                  "a",
                  f(
                    {
                      rel: re,
                      role: G ? void 0 : "button",
                      className: W,
                      href: G,
                      tabIndex: J ? "-1" : "0",
                      "aria-label": ae,
                      "aria-current": ce,
                      onKeyPress: N,
                    },
                    M(N)
                  ),
                  ee(F)
                )
              )
            );
          };
          h.propTypes = {
            pageSelectedHandler: c().func.isRequired,
            selected: c().bool.isRequired,
            pageClassName: c().string,
            pageLinkClassName: c().string,
            activeClassName: c().string,
            activeLinkClassName: c().string,
            extraAriaContext: c().string,
            href: c().string,
            ariaLabel: c().string,
            page: c().number.isRequired,
            getEventListener: c().func.isRequired,
            pageLabelBuilder: c().func.isRequired,
            rel: c().string,
          };
          const m = h;
          function v() {
            return (
              (v = Object.assign
                ? Object.assign.bind()
                : function (D) {
                    for (var R = 1; R < arguments.length; R++) {
                      var W = arguments[R];
                      for (var F in W)
                        Object.prototype.hasOwnProperty.call(W, F) &&
                          (D[F] = W[F]);
                    }
                    return D;
                  }),
              v.apply(this, arguments)
            );
          }
          var g = function (D) {
            var R = D.breakLabel,
              W = D.breakClassName,
              F = D.breakLinkClassName,
              J = D.breakHandler,
              ie = D.getEventListener,
              K = W || "break";
            return u().createElement(
              "li",
              { className: K },
              u().createElement(
                "a",
                v(
                  {
                    className: F,
                    role: "button",
                    tabIndex: "0",
                    onKeyPress: J,
                  },
                  ie(J)
                ),
                R
              )
            );
          };
          g.propTypes = {
            breakLabel: c().oneOfType([c().string, c().node]),
            breakClassName: c().string,
            breakLinkClassName: c().string,
            breakHandler: c().func.isRequired,
            getEventListener: c().func.isRequired,
          };
          const O = g;
          function y(D) {
            var R =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "";
            return D != null ? D : R;
          }
          function w(D) {
            return (
              (w =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (R) {
                      return typeof R;
                    }
                  : function (R) {
                      return R &&
                        typeof Symbol == "function" &&
                        R.constructor === Symbol &&
                        R !== Symbol.prototype
                        ? "symbol"
                        : typeof R;
                    }),
              w(D)
            );
          }
          function _() {
            return (
              (_ = Object.assign
                ? Object.assign.bind()
                : function (D) {
                    for (var R = 1; R < arguments.length; R++) {
                      var W = arguments[R];
                      for (var F in W)
                        Object.prototype.hasOwnProperty.call(W, F) &&
                          (D[F] = W[F]);
                    }
                    return D;
                  }),
              _.apply(this, arguments)
            );
          }
          function E(D, R) {
            for (var W = 0; W < R.length; W++) {
              var F = R[W];
              (F.enumerable = F.enumerable || !1),
                (F.configurable = !0),
                "value" in F && (F.writable = !0),
                Object.defineProperty(D, F.key, F);
            }
          }
          function U(D, R) {
            return (
              (U = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (W, F) {
                    return (W.__proto__ = F), W;
                  }),
              U(D, R)
            );
          }
          function L(D, R) {
            if (R && (w(R) === "object" || typeof R == "function")) return R;
            if (R !== void 0)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return j(D);
          }
          function j(D) {
            if (D === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return D;
          }
          function $(D) {
            return (
              ($ = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (R) {
                    return R.__proto__ || Object.getPrototypeOf(R);
                  }),
              $(D)
            );
          }
          function Q(D, R, W) {
            return (
              R in D
                ? Object.defineProperty(D, R, {
                    value: W,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (D[R] = W),
              D
            );
          }
          var k = (function (D) {
            (function (M, N) {
              if (typeof N != "function" && N !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (M.prototype = Object.create(N && N.prototype, {
                constructor: { value: M, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(M, "prototype", { writable: !1 }),
                N && U(M, N);
            })(K, D);
            var R,
              W,
              F,
              J,
              ie =
                ((F = K),
                (J = (function () {
                  if (
                    typeof Reflect == "undefined" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var M,
                    N = $(F);
                  if (J) {
                    var G = $(this).constructor;
                    M = Reflect.construct(N, arguments, G);
                  } else M = N.apply(this, arguments);
                  return L(this, M);
                });
            function K(M) {
              var N, G;
              return (
                (function (Y, ee) {
                  if (!(Y instanceof ee))
                    throw new TypeError("Cannot call a class as a function");
                })(this, K),
                Q(
                  j((N = ie.call(this, M))),
                  "handlePreviousPage",
                  function (Y) {
                    var ee = N.state.selected;
                    N.handleClick(Y, null, ee > 0 ? ee - 1 : void 0, {
                      isPrevious: !0,
                    });
                  }
                ),
                Q(j(N), "handleNextPage", function (Y) {
                  var ee = N.state.selected,
                    re = N.props.pageCount;
                  N.handleClick(Y, null, ee < re - 1 ? ee + 1 : void 0, {
                    isNext: !0,
                  });
                }),
                Q(j(N), "handlePageSelected", function (Y, ee) {
                  if (N.state.selected === Y)
                    return (
                      N.callActiveCallback(Y),
                      void N.handleClick(ee, null, void 0, { isActive: !0 })
                    );
                  N.handleClick(ee, null, Y);
                }),
                Q(j(N), "handlePageChange", function (Y) {
                  N.state.selected !== Y &&
                    (N.setState({ selected: Y }), N.callCallback(Y));
                }),
                Q(j(N), "getEventListener", function (Y) {
                  return Q({}, N.props.eventListener, Y);
                }),
                Q(j(N), "handleClick", function (Y, ee, re) {
                  var ae =
                      arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : {},
                    ce = ae.isPrevious,
                    Ce = ce !== void 0 && ce,
                    fe = ae.isNext,
                    se = fe !== void 0 && fe,
                    ye = ae.isBreak,
                    Ge = ye !== void 0 && ye,
                    Ve = ae.isActive,
                    st = Ve !== void 0 && Ve;
                  Y.preventDefault ? Y.preventDefault() : (Y.returnValue = !1);
                  var ke = N.state.selected,
                    ut = N.props.onClick,
                    We = re;
                  if (ut) {
                    var be = ut({
                      index: ee,
                      selected: ke,
                      nextSelectedPage: re,
                      event: Y,
                      isPrevious: Ce,
                      isNext: se,
                      isBreak: Ge,
                      isActive: st,
                    });
                    if (be === !1) return;
                    Number.isInteger(be) && (We = be);
                  }
                  We !== void 0 && N.handlePageChange(We);
                }),
                Q(j(N), "handleBreakClick", function (Y, ee) {
                  var re = N.state.selected;
                  N.handleClick(
                    ee,
                    Y,
                    re < Y ? N.getForwardJump() : N.getBackwardJump(),
                    { isBreak: !0 }
                  );
                }),
                Q(j(N), "callCallback", function (Y) {
                  N.props.onPageChange !== void 0 &&
                    typeof N.props.onPageChange == "function" &&
                    N.props.onPageChange({ selected: Y });
                }),
                Q(j(N), "callActiveCallback", function (Y) {
                  N.props.onPageActive !== void 0 &&
                    typeof N.props.onPageActive == "function" &&
                    N.props.onPageActive({ selected: Y });
                }),
                Q(j(N), "getElementPageRel", function (Y) {
                  var ee = N.state.selected,
                    re = N.props,
                    ae = re.nextPageRel,
                    ce = re.prevPageRel,
                    Ce = re.selectedPageRel;
                  return ee - 1 === Y
                    ? ce
                    : ee === Y
                    ? Ce
                    : ee + 1 === Y
                    ? ae
                    : void 0;
                }),
                Q(j(N), "pagination", function () {
                  var Y = [],
                    ee = N.props,
                    re = ee.pageRangeDisplayed,
                    ae = ee.pageCount,
                    ce = ee.marginPagesDisplayed,
                    Ce = ee.breakLabel,
                    fe = ee.breakClassName,
                    se = ee.breakLinkClassName,
                    ye = N.state.selected;
                  if (ae <= re)
                    for (var Ge = 0; Ge < ae; Ge++)
                      Y.push(N.getPageElement(Ge));
                  else {
                    var Ve = re / 2,
                      st = re - Ve;
                    ye > ae - re / 2
                      ? (Ve = re - (st = ae - ye))
                      : ye < re / 2 && (st = re - (Ve = ye));
                    var ke,
                      ut,
                      We = function (d) {
                        return N.getPageElement(d);
                      },
                      be = [];
                    for (ke = 0; ke < ae; ke++) {
                      var S = ke + 1;
                      S <= ce ||
                      S > ae - ce ||
                      (ke >= ye - Ve &&
                        ke <= ye + (ye === 0 && re > 1 ? st - 1 : st))
                        ? be.push({ type: "page", index: ke, display: We(ke) })
                        : Ce &&
                          be.length > 0 &&
                          be[be.length - 1].display !== ut &&
                          (re > 0 || ce > 0) &&
                          ((ut = u().createElement(O, {
                            key: ke,
                            breakLabel: Ce,
                            breakClassName: fe,
                            breakLinkClassName: se,
                            breakHandler: N.handleBreakClick.bind(null, ke),
                            getEventListener: N.getEventListener,
                          })),
                          be.push({ type: "break", index: ke, display: ut }));
                    }
                    be.forEach(function (d, p) {
                      var C = d;
                      d.type === "break" &&
                        be[p - 1] &&
                        be[p - 1].type === "page" &&
                        be[p + 1] &&
                        be[p + 1].type === "page" &&
                        be[p + 1].index - be[p - 1].index <= 2 &&
                        (C = {
                          type: "page",
                          index: d.index,
                          display: We(d.index),
                        }),
                        Y.push(C.display);
                    });
                  }
                  return Y;
                }),
                M.initialPage !== void 0 &&
                  M.forcePage !== void 0 &&
                  console.warn(
                    "(react-paginate): Both initialPage ("
                      .concat(M.initialPage, ") and forcePage (")
                      .concat(
                        M.forcePage,
                        ") props are provided, which is discouraged."
                      ) +
                      ` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`
                  ),
                (G = M.initialPage
                  ? M.initialPage
                  : M.forcePage
                  ? M.forcePage
                  : 0),
                (N.state = { selected: G }),
                N
              );
            }
            return (
              (R = K),
              (W = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var M = this.props,
                      N = M.initialPage,
                      G = M.disableInitialCallback,
                      Y = M.extraAriaContext,
                      ee = M.pageCount,
                      re = M.forcePage;
                    N === void 0 || G || this.callCallback(N),
                      Y &&
                        console.warn(
                          "DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."
                        ),
                      Number.isInteger(ee) ||
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            ee,
                            "). Did you forget a Math.ceil()?"
                          )
                        ),
                      N !== void 0 &&
                        N > ee - 1 &&
                        console.warn(
                          "(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(N, " > ")
                            .concat(ee - 1, ").")
                        ),
                      re !== void 0 &&
                        re > ee - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(re, " > ")
                            .concat(ee - 1, ").")
                        );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (M) {
                    this.props.forcePage !== void 0 &&
                      this.props.forcePage !== M.forcePage &&
                      (this.props.forcePage > this.props.pageCount - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(this.props.forcePage, " > ")
                            .concat(this.props.pageCount - 1, ").")
                        ),
                      this.setState({ selected: this.props.forcePage })),
                      Number.isInteger(M.pageCount) &&
                        !Number.isInteger(this.props.pageCount) &&
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            this.props.pageCount,
                            "). Did you forget a Math.ceil()?"
                          )
                        );
                  },
                },
                {
                  key: "getForwardJump",
                  value: function () {
                    var M = this.state.selected,
                      N = this.props,
                      G = N.pageCount,
                      Y = M + N.pageRangeDisplayed;
                    return Y >= G ? G - 1 : Y;
                  },
                },
                {
                  key: "getBackwardJump",
                  value: function () {
                    var M = this.state.selected - this.props.pageRangeDisplayed;
                    return M < 0 ? 0 : M;
                  },
                },
                {
                  key: "getElementHref",
                  value: function (M) {
                    var N = this.props,
                      G = N.hrefBuilder,
                      Y = N.pageCount,
                      ee = N.hrefAllControls;
                    if (G)
                      return ee || (M >= 0 && M < Y)
                        ? G(M + 1, Y, this.state.selected)
                        : void 0;
                  },
                },
                {
                  key: "ariaLabelBuilder",
                  value: function (M) {
                    var N = M === this.state.selected;
                    if (
                      this.props.ariaLabelBuilder &&
                      M >= 0 &&
                      M < this.props.pageCount
                    ) {
                      var G = this.props.ariaLabelBuilder(M + 1, N);
                      return (
                        this.props.extraAriaContext &&
                          !N &&
                          (G = G + " " + this.props.extraAriaContext),
                        G
                      );
                    }
                  },
                },
                {
                  key: "getPageElement",
                  value: function (M) {
                    var N = this.state.selected,
                      G = this.props,
                      Y = G.pageClassName,
                      ee = G.pageLinkClassName,
                      re = G.activeClassName,
                      ae = G.activeLinkClassName,
                      ce = G.extraAriaContext,
                      Ce = G.pageLabelBuilder;
                    return u().createElement(m, {
                      key: M,
                      pageSelectedHandler: this.handlePageSelected.bind(
                        null,
                        M
                      ),
                      selected: N === M,
                      rel: this.getElementPageRel(M),
                      pageClassName: Y,
                      pageLinkClassName: ee,
                      activeClassName: re,
                      activeLinkClassName: ae,
                      extraAriaContext: ce,
                      href: this.getElementHref(M),
                      ariaLabel: this.ariaLabelBuilder(M),
                      page: M + 1,
                      pageLabelBuilder: Ce,
                      getEventListener: this.getEventListener,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var M = this.props.renderOnZeroPageCount;
                    if (this.props.pageCount === 0 && M !== void 0)
                      return M && M(this.props);
                    var N = this.props,
                      G = N.disabledClassName,
                      Y = N.disabledLinkClassName,
                      ee = N.pageCount,
                      re = N.className,
                      ae = N.containerClassName,
                      ce = N.previousLabel,
                      Ce = N.previousClassName,
                      fe = N.previousLinkClassName,
                      se = N.previousAriaLabel,
                      ye = N.prevRel,
                      Ge = N.nextLabel,
                      Ve = N.nextClassName,
                      st = N.nextLinkClassName,
                      ke = N.nextAriaLabel,
                      ut = N.nextRel,
                      We = this.state.selected,
                      be = We === 0,
                      S = We === ee - 1,
                      d = "".concat(y(Ce)).concat(be ? " ".concat(y(G)) : ""),
                      p = "".concat(y(Ve)).concat(S ? " ".concat(y(G)) : ""),
                      C = "".concat(y(fe)).concat(be ? " ".concat(y(Y)) : ""),
                      A = "".concat(y(st)).concat(S ? " ".concat(y(Y)) : ""),
                      V = be ? "true" : "false",
                      z = S ? "true" : "false";
                    return u().createElement(
                      "ul",
                      {
                        className: re || ae,
                        role: "navigation",
                        "aria-label": "Pagination",
                      },
                      u().createElement(
                        "li",
                        { className: d },
                        u().createElement(
                          "a",
                          _(
                            {
                              className: C,
                              href: this.getElementHref(We - 1),
                              tabIndex: be ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handlePreviousPage,
                              "aria-disabled": V,
                              "aria-label": se,
                              rel: ye,
                            },
                            this.getEventListener(this.handlePreviousPage)
                          ),
                          ce
                        )
                      ),
                      this.pagination(),
                      u().createElement(
                        "li",
                        { className: p },
                        u().createElement(
                          "a",
                          _(
                            {
                              className: A,
                              href: this.getElementHref(We + 1),
                              tabIndex: S ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handleNextPage,
                              "aria-disabled": z,
                              "aria-label": ke,
                              rel: ut,
                            },
                            this.getEventListener(this.handleNextPage)
                          ),
                          Ge
                        )
                      )
                    );
                  },
                },
              ]) && E(R.prototype, W),
              Object.defineProperty(R, "prototype", { writable: !1 }),
              K
            );
          })(s.Component);
          Q(k, "propTypes", {
            pageCount: c().number.isRequired,
            pageRangeDisplayed: c().number,
            marginPagesDisplayed: c().number,
            previousLabel: c().node,
            previousAriaLabel: c().string,
            prevPageRel: c().string,
            prevRel: c().string,
            nextLabel: c().node,
            nextAriaLabel: c().string,
            nextPageRel: c().string,
            nextRel: c().string,
            breakLabel: c().oneOfType([c().string, c().node]),
            hrefBuilder: c().func,
            hrefAllControls: c().bool,
            onPageChange: c().func,
            onPageActive: c().func,
            onClick: c().func,
            initialPage: c().number,
            forcePage: c().number,
            disableInitialCallback: c().bool,
            containerClassName: c().string,
            className: c().string,
            pageClassName: c().string,
            pageLinkClassName: c().string,
            pageLabelBuilder: c().func,
            activeClassName: c().string,
            activeLinkClassName: c().string,
            previousClassName: c().string,
            nextClassName: c().string,
            previousLinkClassName: c().string,
            nextLinkClassName: c().string,
            disabledClassName: c().string,
            disabledLinkClassName: c().string,
            breakClassName: c().string,
            breakLinkClassName: c().string,
            extraAriaContext: c().string,
            ariaLabelBuilder: c().func,
            eventListener: c().string,
            renderOnZeroPageCount: c().func,
            selectedPageRel: c().string,
          }),
            Q(k, "defaultProps", {
              pageRangeDisplayed: 2,
              marginPagesDisplayed: 3,
              activeClassName: "selected",
              previousLabel: "Previous",
              previousClassName: "previous",
              previousAriaLabel: "Previous page",
              prevPageRel: "prev",
              prevRel: "prev",
              nextLabel: "Next",
              nextClassName: "next",
              nextAriaLabel: "Next page",
              nextPageRel: "next",
              nextRel: "next",
              breakLabel: "...",
              disabledClassName: "disabled",
              disableInitialCallback: !1,
              pageLabelBuilder: function (D) {
                return D;
              },
              eventListener: "onClick",
              renderOnZeroPageCount: void 0,
              selectedPageRel: "canonical",
              hrefAllControls: !1,
            });
          const I = k;
        })(),
        a
      );
    })()
  );
})(rw);
var I5 = rS(rw.exports);
function U5({ setPageNumber: e, CertificatesPerPage: t }) {
  const { certificates: n } = T.exports.useContext(hl),
    r = Math.ceil(n.length / t);
  return b(I5, {
    previousLabel: "<",
    nextLabel: ">",
    breakLabel: "...",
    pageCount: r,
    onPageChange: ({ selected: i }) => {
      e(i);
    },
    marginPagesDisplayed: 1,
    pageRangeDisplayed: 2,
    containerClassName: "pagination-buttons",
    pageLinkClassName: "pages-buttons",
    previousLinkClassName: "previous-button",
    nextLinkClassName: "next-button",
    breakLinkClassName: "break-pagination",
    disabledLinkClassName: "disabled-button",
    activeLinkClassName: "active-link",
  });
}
function L5() {
  const {
      search: e,
      status: t,
      certificates: n,
      getCertificates: r,
      startDate: o,
      endDate: i,
      userDetails: a,
    } = T.exports.useContext(hl),
    [s, u] = T.exports.useState(0),
    l = 6,
    c = s * l,
    f = n.slice(c, c + l),
    h = (v) => {
      Te.post(`http://localhost:5000/verifybyuid/${v}`, a).catch((g) => {
        console.error(g);
      });
    },
    m = () => {
      n.forEach((v) => {
        h(v.proof_file);
      });
    };
  return (
    T.exports.useEffect(() => {
      m();
    }, []),
    T.exports.useEffect(() => {
      r();
    }, [e, t, o, i]),
    oe("div", {
      className: "paginated-certificates",
      children: [
        b("div", {
          className: "certificates-list",
          children:
            n.length > 0
              ? f == null
                ? void 0
                : f.map((v) =>
                    b(
                      sl,
                      {
                        className: "certificate-link",
                        to: `/gallery/${v.id}`,
                        children: b(M5, { certificate: v }, v.id),
                      },
                      v.id
                    )
                  )
              : b("p", {
                  className: "no-certification",
                  children:
                    "You don't have a certificate yet or any of the certificates match the filters in use.",
                }),
        }),
        n.length > 6
          ? b(U5, { CertificatesPerPage: l, setPageNumber: u })
          : null,
      ],
    })
  );
}
var F5 = "/assets/Logo2.6b2dc0d4.svg";
function ow() {
  const { userDetails: e, searchUser: t } = T.exports.useContext(St),
    [n, r] = T.exports.useState({ icon: null, isSelected: null });
  console.log(n),
    T.exports.useEffect(() => {
      t();
    }, []);
  const o = [
    {
      label: "Dashboard",
      pathTo: "/dashboard",
      icon: b("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z",
          fill: n.icon === "Dashboard" ? "#FFFFFF" : "#979797",
        }),
      }),
    },
    {
      label: "Certificates",
      pathTo: "/gallery",
      icon: b("svg", {
        width: "22",
        height: "18",
        viewBox: "0 0 22 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M19.667 2.50065H11.0003L8.83366 0.333984H2.33366C1.14199 0.333984 0.177826 1.30898 0.177826 2.50065L0.166992 15.5007C0.166992 16.6923 1.14199 17.6673 2.33366 17.6673H19.667C20.8587 17.6673 21.8337 16.6923 21.8337 15.5007V4.66732C21.8337 3.47565 20.8587 2.50065 19.667 2.50065ZM13.167 13.334H4.50033V11.1673H13.167V13.334ZM17.5003 9.00065H4.50033V6.83398H17.5003V9.00065Z",
          fill: n.icon === "Certificates" ? "#FFFFFF" : "#979797",
        }),
      }),
    },
    {
      label: e && e.role === "teacher" ? "Issue certificate" : "Verify",
      pathTo: "/verify",
      icon: b("svg", {
        width: "22",
        height: "18",
        viewBox: "0 0 22 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: b("path", {
          d: "M10.4587 5.75065C8.96366 5.75065 7.75033 6.96398 7.75033 8.45898C7.75033 9.95398 8.96366 11.1673 10.4587 11.1673C11.9537 11.1673 13.167 9.95398 13.167 8.45898C13.167 6.96398 11.9537 5.75065 10.4587 5.75065ZM19.667 0.333984H2.33366C1.14199 0.333984 0.166992 1.30898 0.166992 2.50065V15.5007C0.166992 16.6923 1.14199 17.6673 2.33366 17.6673H19.667C20.8587 17.6673 21.8337 16.6923 21.8337 15.5007V2.50065C21.8337 1.30898 20.8587 0.333984 19.667 0.333984ZM16.1895 15.7282L13.037 12.5757C12.2895 13.0523 11.4012 13.334 10.4478 13.334C7.76116 13.334 5.58366 11.1565 5.58366 8.45898C5.58366 5.76148 7.76116 3.58398 10.4587 3.58398C13.1562 3.58398 15.3337 5.76148 15.3337 8.45898C15.3337 9.41232 15.052 10.2898 14.5753 11.0482L17.7278 14.1898L16.1895 15.7282Z",
          fill:
            n.icon === "Verify" || n.icon === "Issue certificate"
              ? "#FFFFFF"
              : "#979797",
        }),
      }),
    },
  ];
  return oe("div", {
    className: "sidebar",
    children: [
      b("img", { src: F5, alt: "logo", className: "logo-menu" }),
      b("div", {
        className: "list-wrapper",
        children: b("ul", {
          className: "list",
          children: o.map((i, a) =>
            b(
              "li",
              {
                className: "li-item",
                onClick: () => r({ icon: i.label, isSelected: !0 }),
                children: oe(
                  b0,
                  {
                    style: ({ isActive: s }) => ({
                      backgroundColor: s ? "#f15d22" : "",
                      fontWeight: s ? 700 : "",
                      color: s ? "white" : "",
                    }),
                    className: "nav-link",
                    to: i.pathTo,
                    children: [
                      b("div", { className: "navbar-icon", children: i.icon }),
                      i.label,
                    ],
                  },
                  a
                ),
              },
              a
            )
          ),
        }),
      }),
    ],
  });
}
function iw() {
  const [e, t] = T.exports.useState(null),
    n = Oo(),
    r = () => {
      localStorage.clear(), n("/login"), window.location.reload();
    };
  return b("div", {
    className: "profile-bar",
    children: oe("div", {
      className: "icons-wrapper",
      children: [
        b("svg", {
          width: "16",
          height: "22",
          viewBox: "0 0 16 22",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: b("path", {
            d: "M15.125 17H14.5625V9.03125C14.5625 5.72422 12.118 2.99141 8.9375 2.53672V1.625C8.9375 1.10703 8.51797 0.6875 8 0.6875C7.48203 0.6875 7.0625 1.10703 7.0625 1.625V2.53672C3.88203 2.99141 1.4375 5.72422 1.4375 9.03125V17H0.875C0.460156 17 0.125 17.3352 0.125 17.75V18.5C0.125 18.6031 0.209375 18.6875 0.3125 18.6875H5.375C5.375 20.1359 6.55156 21.3125 8 21.3125C9.44844 21.3125 10.625 20.1359 10.625 18.6875H15.6875C15.7906 18.6875 15.875 18.6031 15.875 18.5V17.75C15.875 17.3352 15.5398 17 15.125 17ZM8 19.8125C7.37891 19.8125 6.875 19.3086 6.875 18.6875H9.125C9.125 19.3086 8.62109 19.8125 8 19.8125ZM3.125 17V9.03125C3.125 7.72813 3.63125 6.50469 4.55234 5.58359C5.47344 4.6625 6.69688 4.15625 8 4.15625C9.30313 4.15625 10.5266 4.6625 11.4477 5.58359C12.3687 6.50469 12.875 7.72813 12.875 9.03125V17H3.125Z",
            fill: "#445C61",
            fillOpacity: "0.5",
          }),
        }),
        b("svg", {
          width: "1",
          height: "30",
          viewBox: "0 0 1 30",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: b("line", {
            x1: "0.5",
            y1: "-2.18557e-08",
            x2: "0.500001",
            y2: "30",
            stroke: "#445C61",
            strokeOpacity: "0.5",
          }),
        }),
        b("svg", {
          className: "user-logo",
          width: "30",
          height: "30",
          viewBox: "0 0 30 30",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          onClick: () => t((o) => !o),
          children: b("path", {
            d: "M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 4.5C17.49 4.5 19.5 6.51 19.5 9C19.5 11.49 17.49 13.5 15 13.5C12.51 13.5 10.5 11.49 10.5 9C10.5 6.51 12.51 4.5 15 4.5ZM15 25.8C11.25 25.8 7.935 23.88 6 20.97C6.045 17.985 12 16.35 15 16.35C17.985 16.35 23.955 17.985 24 20.97C22.065 23.88 18.75 25.8 15 25.8Z",
            fill: "#445C61",
            fillOpacity: "0.5",
          }),
        }),
        e &&
          b("div", {
            className: "drop-down-menu",
            children: b("h5", { onClick: () => r(), children: "Logout" }),
          }),
      ],
    }),
  });
}
function aw() {
  const { userDetails: e } = T.exports.useContext(St);
  return (
    T.exports.useState(null),
    Oo(),
    b("div", {
      className: "profile-bar",
      children: oe("div", {
        className: "icons-wrapper",
        style: e
          ? { display: "flex", justifyContent: "flex-end", height: "30px" }
          : { display: "flex", justifyContent: "space-between" },
        children: [
          b(sl, {
            to: "/login",
            children: b("img", { src: G0, alt: "Scrypt Education logo" }),
          }),
          b("svg", {
            width: "27",
            height: "27",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: b("path", {
              d: "M14.985 0C6.705 0 0 6.72 0 15C0 23.28 6.705 30 14.985 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 14.985 0ZM25.38 9H20.955C20.475 7.125 19.785 5.325 18.885 3.66C21.645 4.605 23.94 6.525 25.38 9ZM15 3.06C16.245 4.86 17.22 6.855 17.865 9H12.135C12.78 6.855 13.755 4.86 15 3.06ZM3.39 18C3.15 17.04 3 16.035 3 15C3 13.965 3.15 12.96 3.39 12H8.46C8.34 12.99 8.25 13.98 8.25 15C8.25 16.02 8.34 17.01 8.46 18H3.39ZM4.62 21H9.045C9.525 22.875 10.215 24.675 11.115 26.34C8.355 25.395 6.06 23.49 4.62 21ZM9.045 9H4.62C6.06 6.51 8.355 4.605 11.115 3.66C10.215 5.325 9.525 7.125 9.045 9ZM15 26.94C13.755 25.14 12.78 23.145 12.135 21H17.865C17.22 23.145 16.245 25.14 15 26.94ZM18.51 18H11.49C11.355 17.01 11.25 16.02 11.25 15C11.25 13.98 11.355 12.975 11.49 12H18.51C18.645 12.975 18.75 13.98 18.75 15C18.75 16.02 18.645 17.01 18.51 18ZM18.885 26.34C19.785 24.675 20.475 22.875 20.955 21H25.38C23.94 23.475 21.645 25.395 18.885 26.34ZM21.54 18C21.66 17.01 21.75 16.02 21.75 15C21.75 13.98 21.66 12.99 21.54 12H26.61C26.85 12.96 27 13.965 27 15C27 16.035 26.85 17.04 26.61 18H21.54Z",
              fill: "#323232",
            }),
          }),
        ],
      }),
    })
  );
}
function B5({ children: e }) {
  const { userDetails: t } = T.exports.useContext(St);
  return oe("div", {
    className: "main",
    children: [
      b("div", { className: "first", children: t === null ? null : b(ow, {}) }),
      oe("div", {
        className: "second",
        children: [
          t === null ? b(aw, {}) : b(iw, {}),
          b("div", { children: e }),
        ],
      }),
    ],
  });
}
var sw = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (!!i) {
          var a = typeof i;
          if (a === "string" || a === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (a === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              r.push(i.toString());
              continue;
            }
            for (var u in i) t.call(i, u) && i[u] && r.push(u);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(sw);
var yt = sw.exports;
function Z(e, t) {
  if (t.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        t.length +
        " present"
    );
}
function Fa(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Fa = function (n) {
          return typeof n;
        })
      : (Fa = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Fa(e)
  );
}
function th(e) {
  return (
    Z(1, arguments),
    e instanceof Date ||
      (Fa(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Ba(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ba = function (n) {
          return typeof n;
        })
      : (Ba = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ba(e)
  );
}
function ne(e) {
  Z(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (Ba(e) === "object" && t === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || t === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || t === "[object String]") &&
        typeof console != "undefined" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function uw(e) {
  if ((Z(1, arguments), !th(e) && typeof e != "number")) return !1;
  var t = ne(e);
  return !isNaN(Number(t));
}
function he(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function nh(e, t) {
  Z(2, arguments);
  var n = ne(e).getTime(),
    r = he(t);
  return new Date(n + r);
}
function lw(e, t) {
  Z(2, arguments);
  var n = he(t);
  return nh(e, -n);
}
var $5 = 864e5;
function j5(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(),
    o = n - r;
  return Math.floor(o / $5) + 1;
}
function vo(e) {
  Z(1, arguments);
  var t = 1,
    n = ne(e),
    r = n.getUTCDay(),
    o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function cw(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getUTCFullYear(),
    r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = vo(r),
    i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = vo(i);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= a.getTime()
    ? n
    : n - 1;
}
function H5(e) {
  Z(1, arguments);
  var t = cw(e),
    n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = vo(n);
  return r;
}
var Y5 = 6048e5;
function fw(e) {
  Z(1, arguments);
  var t = ne(e),
    n = vo(t).getTime() - H5(t).getTime();
  return Math.round(n / Y5) + 1;
}
var V5 = {};
function Fr() {
  return V5;
}
function Mr(e, t) {
  var n, r, o, i, a, s, u, l;
  Z(1, arguments);
  var c = Fr(),
    f = he(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0
              ? i
              : t == null ||
                (a = t.locale) === null ||
                a === void 0 ||
                (s = a.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : c.weekStartsOn) !== null && r !== void 0
          ? r
          : (u = c.locale) === null ||
            u === void 0 ||
            (l = u.options) === null ||
            l === void 0
          ? void 0
          : l.weekStartsOn) !== null && n !== void 0
        ? n
        : 0
    );
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = ne(e),
    m = h.getUTCDay(),
    v = (m < f ? 7 : 0) + m - f;
  return h.setUTCDate(h.getUTCDate() - v), h.setUTCHours(0, 0, 0, 0), h;
}
function rh(e, t) {
  var n, r, o, i, a, s, u, l;
  Z(1, arguments);
  var c = ne(e),
    f = c.getUTCFullYear(),
    h = Fr(),
    m = he(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            i !== void 0
              ? i
              : t == null ||
                (a = t.locale) === null ||
                a === void 0 ||
                (s = a.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : h.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (u = h.locale) === null ||
            u === void 0 ||
            (l = u.options) === null ||
            l === void 0
          ? void 0
          : l.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1
    );
  if (!(m >= 1 && m <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var v = new Date(0);
  v.setUTCFullYear(f + 1, 0, m), v.setUTCHours(0, 0, 0, 0);
  var g = Mr(v, t),
    O = new Date(0);
  O.setUTCFullYear(f, 0, m), O.setUTCHours(0, 0, 0, 0);
  var y = Mr(O, t);
  return c.getTime() >= g.getTime()
    ? f + 1
    : c.getTime() >= y.getTime()
    ? f
    : f - 1;
}
function W5(e, t) {
  var n, r, o, i, a, s, u, l;
  Z(1, arguments);
  var c = Fr(),
    f = he(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            i !== void 0
              ? i
              : t == null ||
                (a = t.locale) === null ||
                a === void 0 ||
                (s = a.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : c.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (u = c.locale) === null ||
            u === void 0 ||
            (l = u.options) === null ||
            l === void 0
          ? void 0
          : l.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1
    ),
    h = rh(e, t),
    m = new Date(0);
  m.setUTCFullYear(h, 0, f), m.setUTCHours(0, 0, 0, 0);
  var v = Mr(m, t);
  return v;
}
var z5 = 6048e5;
function pw(e, t) {
  Z(1, arguments);
  var n = ne(e),
    r = Mr(n, t).getTime() - W5(n, t).getTime();
  return Math.round(r / z5) + 1;
}
function we(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var K5 = {
    y: function (t, n) {
      var r = t.getUTCFullYear(),
        o = r > 0 ? r : 1 - r;
      return we(n === "yy" ? o % 100 : o, n.length);
    },
    M: function (t, n) {
      var r = t.getUTCMonth();
      return n === "M" ? String(r + 1) : we(r + 1, 2);
    },
    d: function (t, n) {
      return we(t.getUTCDate(), n.length);
    },
    a: function (t, n) {
      var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (n) {
        case "a":
        case "aa":
          return r.toUpperCase();
        case "aaa":
          return r;
        case "aaaaa":
          return r[0];
        case "aaaa":
        default:
          return r === "am" ? "a.m." : "p.m.";
      }
    },
    h: function (t, n) {
      return we(t.getUTCHours() % 12 || 12, n.length);
    },
    H: function (t, n) {
      return we(t.getUTCHours(), n.length);
    },
    m: function (t, n) {
      return we(t.getUTCMinutes(), n.length);
    },
    s: function (t, n) {
      return we(t.getUTCSeconds(), n.length);
    },
    S: function (t, n) {
      var r = n.length,
        o = t.getUTCMilliseconds(),
        i = Math.floor(o * Math.pow(10, r - 3));
      return we(i, n.length);
    },
  },
  $n = K5,
  Hr = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  q5 = {
    G: function (t, n, r) {
      var o = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (n) {
        case "G":
        case "GG":
        case "GGG":
          return r.era(o, { width: "abbreviated" });
        case "GGGGG":
          return r.era(o, { width: "narrow" });
        case "GGGG":
        default:
          return r.era(o, { width: "wide" });
      }
    },
    y: function (t, n, r) {
      if (n === "yo") {
        var o = t.getUTCFullYear(),
          i = o > 0 ? o : 1 - o;
        return r.ordinalNumber(i, { unit: "year" });
      }
      return $n.y(t, n);
    },
    Y: function (t, n, r, o) {
      var i = rh(t, o),
        a = i > 0 ? i : 1 - i;
      if (n === "YY") {
        var s = a % 100;
        return we(s, 2);
      }
      return n === "Yo"
        ? r.ordinalNumber(a, { unit: "year" })
        : we(a, n.length);
    },
    R: function (t, n) {
      var r = cw(t);
      return we(r, n.length);
    },
    u: function (t, n) {
      var r = t.getUTCFullYear();
      return we(r, n.length);
    },
    Q: function (t, n, r) {
      var o = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case "Q":
          return String(o);
        case "QQ":
          return we(o, 2);
        case "Qo":
          return r.ordinalNumber(o, { unit: "quarter" });
        case "QQQ":
          return r.quarter(o, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return r.quarter(o, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return r.quarter(o, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, n, r) {
      var o = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case "q":
          return String(o);
        case "qq":
          return we(o, 2);
        case "qo":
          return r.ordinalNumber(o, { unit: "quarter" });
        case "qqq":
          return r.quarter(o, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return r.quarter(o, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return r.quarter(o, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, n, r) {
      var o = t.getUTCMonth();
      switch (n) {
        case "M":
        case "MM":
          return $n.M(t, n);
        case "Mo":
          return r.ordinalNumber(o + 1, { unit: "month" });
        case "MMM":
          return r.month(o, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return r.month(o, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return r.month(o, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, n, r) {
      var o = t.getUTCMonth();
      switch (n) {
        case "L":
          return String(o + 1);
        case "LL":
          return we(o + 1, 2);
        case "Lo":
          return r.ordinalNumber(o + 1, { unit: "month" });
        case "LLL":
          return r.month(o, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return r.month(o, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return r.month(o, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, n, r, o) {
      var i = pw(t, o);
      return n === "wo"
        ? r.ordinalNumber(i, { unit: "week" })
        : we(i, n.length);
    },
    I: function (t, n, r) {
      var o = fw(t);
      return n === "Io"
        ? r.ordinalNumber(o, { unit: "week" })
        : we(o, n.length);
    },
    d: function (t, n, r) {
      return n === "do"
        ? r.ordinalNumber(t.getUTCDate(), { unit: "date" })
        : $n.d(t, n);
    },
    D: function (t, n, r) {
      var o = j5(t);
      return n === "Do"
        ? r.ordinalNumber(o, { unit: "dayOfYear" })
        : we(o, n.length);
    },
    E: function (t, n, r) {
      var o = t.getUTCDay();
      switch (n) {
        case "E":
        case "EE":
        case "EEE":
          return r.day(o, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return r.day(o, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return r.day(o, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return r.day(o, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, n, r, o) {
      var i = t.getUTCDay(),
        a = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "e":
          return String(a);
        case "ee":
          return we(a, 2);
        case "eo":
          return r.ordinalNumber(a, { unit: "day" });
        case "eee":
          return r.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return r.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return r.day(i, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return r.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, n, r, o) {
      var i = t.getUTCDay(),
        a = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "c":
          return String(a);
        case "cc":
          return we(a, n.length);
        case "co":
          return r.ordinalNumber(a, { unit: "day" });
        case "ccc":
          return r.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return r.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return r.day(i, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return r.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, n, r) {
      var o = t.getUTCDay(),
        i = o === 0 ? 7 : o;
      switch (n) {
        case "i":
          return String(i);
        case "ii":
          return we(i, n.length);
        case "io":
          return r.ordinalNumber(i, { unit: "day" });
        case "iii":
          return r.day(o, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return r.day(o, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return r.day(o, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return r.day(o, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, n, r) {
      var o = t.getUTCHours(),
        i = o / 12 >= 1 ? "pm" : "am";
      switch (n) {
        case "a":
        case "aa":
          return r.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return r
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return r.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return r.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, n, r) {
      var o = t.getUTCHours(),
        i;
      switch (
        (o === 12
          ? (i = Hr.noon)
          : o === 0
          ? (i = Hr.midnight)
          : (i = o / 12 >= 1 ? "pm" : "am"),
        n)
      ) {
        case "b":
        case "bb":
          return r.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return r
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return r.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return r.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, n, r) {
      var o = t.getUTCHours(),
        i;
      switch (
        (o >= 17
          ? (i = Hr.evening)
          : o >= 12
          ? (i = Hr.afternoon)
          : o >= 4
          ? (i = Hr.morning)
          : (i = Hr.night),
        n)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return r.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return r.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return r.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, n, r) {
      if (n === "ho") {
        var o = t.getUTCHours() % 12;
        return o === 0 && (o = 12), r.ordinalNumber(o, { unit: "hour" });
      }
      return $n.h(t, n);
    },
    H: function (t, n, r) {
      return n === "Ho"
        ? r.ordinalNumber(t.getUTCHours(), { unit: "hour" })
        : $n.H(t, n);
    },
    K: function (t, n, r) {
      var o = t.getUTCHours() % 12;
      return n === "Ko"
        ? r.ordinalNumber(o, { unit: "hour" })
        : we(o, n.length);
    },
    k: function (t, n, r) {
      var o = t.getUTCHours();
      return (
        o === 0 && (o = 24),
        n === "ko" ? r.ordinalNumber(o, { unit: "hour" }) : we(o, n.length)
      );
    },
    m: function (t, n, r) {
      return n === "mo"
        ? r.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
        : $n.m(t, n);
    },
    s: function (t, n, r) {
      return n === "so"
        ? r.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
        : $n.s(t, n);
    },
    S: function (t, n) {
      return $n.S(t, n);
    },
    X: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTimezoneOffset();
      if (a === 0) return "Z";
      switch (n) {
        case "X":
          return vv(a);
        case "XXXX":
        case "XX":
          return wr(a);
        case "XXXXX":
        case "XXX":
        default:
          return wr(a, ":");
      }
    },
    x: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTimezoneOffset();
      switch (n) {
        case "x":
          return vv(a);
        case "xxxx":
        case "xx":
          return wr(a);
        case "xxxxx":
        case "xxx":
        default:
          return wr(a, ":");
      }
    },
    O: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTimezoneOffset();
      switch (n) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + mv(a, ":");
        case "OOOO":
        default:
          return "GMT" + wr(a, ":");
      }
    },
    z: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTimezoneOffset();
      switch (n) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + mv(a, ":");
        case "zzzz":
        default:
          return "GMT" + wr(a, ":");
      }
    },
    t: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = Math.floor(i.getTime() / 1e3);
      return we(a, n.length);
    },
    T: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTime();
      return we(a, n.length);
    },
  };
function mv(e, t) {
  var n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.floor(r / 60),
    i = r % 60;
  if (i === 0) return n + String(o);
  var a = t || "";
  return n + String(o) + a + we(i, 2);
}
function vv(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + we(Math.abs(e) / 60, 2);
  }
  return wr(e, t);
}
function wr(e, t) {
  var n = t || "",
    r = e > 0 ? "-" : "+",
    o = Math.abs(e),
    i = we(Math.floor(o / 60), 2),
    a = we(o % 60, 2);
  return r + i + n + a;
}
var Q5 = q5,
  yv = function (t, n) {
    switch (t) {
      case "P":
        return n.date({ width: "short" });
      case "PP":
        return n.date({ width: "medium" });
      case "PPP":
        return n.date({ width: "long" });
      case "PPPP":
      default:
        return n.date({ width: "full" });
    }
  },
  dw = function (t, n) {
    switch (t) {
      case "p":
        return n.time({ width: "short" });
      case "pp":
        return n.time({ width: "medium" });
      case "ppp":
        return n.time({ width: "long" });
      case "pppp":
      default:
        return n.time({ width: "full" });
    }
  },
  G5 = function (t, n) {
    var r = t.match(/(P+)(p+)?/) || [],
      o = r[1],
      i = r[2];
    if (!i) return yv(t, n);
    var a;
    switch (o) {
      case "P":
        a = n.dateTime({ width: "short" });
        break;
      case "PP":
        a = n.dateTime({ width: "medium" });
        break;
      case "PPP":
        a = n.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        a = n.dateTime({ width: "full" });
        break;
    }
    return a.replace("{{date}}", yv(o, n)).replace("{{time}}", dw(i, n));
  },
  J5 = { p: dw, P: G5 },
  Ef = J5;
function tu(e) {
  var t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var Z5 = ["D", "DD"],
  X5 = ["YY", "YYYY"];
function hw(e) {
  return Z5.indexOf(e) !== -1;
}
function mw(e) {
  return X5.indexOf(e) !== -1;
}
function nu(e, t, n) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var eE = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  tE = function (t, n, r) {
    var o,
      i = eE[t];
    return (
      typeof i == "string"
        ? (o = i)
        : n === 1
        ? (o = i.one)
        : (o = i.other.replace("{{count}}", n.toString())),
      r != null && r.addSuffix
        ? r.comparison && r.comparison > 0
          ? "in " + o
          : o + " ago"
        : o
    );
  },
  nE = tE;
function ac(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth,
      r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var rE = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  oE = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  iE = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  aE = {
    date: ac({ formats: rE, defaultWidth: "full" }),
    time: ac({ formats: oE, defaultWidth: "full" }),
    dateTime: ac({ formats: iE, defaultWidth: "full" }),
  },
  sE = aE,
  uE = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  lE = function (t, n, r, o) {
    return uE[t];
  },
  cE = lE;
function Yo(e) {
  return function (t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone",
      o;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        a = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[a] || e.formattingValues[i];
    } else {
      var s = e.defaultWidth,
        u = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[u] || e.values[s];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
var fE = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  pE = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  dE = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  hE = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  mE = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  vE = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  yE = function (t, n) {
    var r = Number(t),
      o = r % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return r + "st";
        case 2:
          return r + "nd";
        case 3:
          return r + "rd";
      }
    return r + "th";
  },
  gE = {
    ordinalNumber: yE,
    era: Yo({ values: fE, defaultWidth: "wide" }),
    quarter: Yo({
      values: pE,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: Yo({ values: dE, defaultWidth: "wide" }),
    day: Yo({ values: hE, defaultWidth: "wide" }),
    dayPeriod: Yo({
      values: mE,
      defaultWidth: "wide",
      formattingValues: vE,
      defaultFormattingWidth: "wide",
    }),
  },
  wE = gE;
function Vo(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(o);
    if (!i) return null;
    var a = i[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      u = Array.isArray(s)
        ? CE(s, function (f) {
            return f.test(a);
          })
        : SE(s, function (f) {
            return f.test(a);
          }),
      l;
    (l = e.valueCallback ? e.valueCallback(u) : u),
      (l = n.valueCallback ? n.valueCallback(l) : l);
    var c = t.slice(a.length);
    return { value: l, rest: c };
  };
}
function SE(e, t) {
  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function CE(e, t) {
  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function _E(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.match(e.matchPattern);
    if (!r) return null;
    var o = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    var a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    var s = t.slice(o.length);
    return { value: a, rest: s };
  };
}
var bE = /^(\d+)(th|st|nd|rd)?/i,
  xE = /\d+/i,
  EE = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  PE = { any: [/^b/i, /^(a|c)/i] },
  OE = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  DE = { any: [/1/i, /2/i, /3/i, /4/i] },
  kE = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  TE = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  AE = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  RE = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  NE = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  ME = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  IE = {
    ordinalNumber: _E({
      matchPattern: bE,
      parsePattern: xE,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: Vo({
      matchPatterns: EE,
      defaultMatchWidth: "wide",
      parsePatterns: PE,
      defaultParseWidth: "any",
    }),
    quarter: Vo({
      matchPatterns: OE,
      defaultMatchWidth: "wide",
      parsePatterns: DE,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: Vo({
      matchPatterns: kE,
      defaultMatchWidth: "wide",
      parsePatterns: TE,
      defaultParseWidth: "any",
    }),
    day: Vo({
      matchPatterns: AE,
      defaultMatchWidth: "wide",
      parsePatterns: RE,
      defaultParseWidth: "any",
    }),
    dayPeriod: Vo({
      matchPatterns: NE,
      defaultMatchWidth: "any",
      parsePatterns: ME,
      defaultParseWidth: "any",
    }),
  },
  UE = IE,
  LE = {
    code: "en-US",
    formatDistance: nE,
    formatLong: sE,
    formatRelative: cE,
    localize: wE,
    match: UE,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  vw = LE,
  FE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  BE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  $E = /^'([^]*?)'?$/,
  jE = /''/g,
  HE = /[a-zA-Z]/;
function gv(e, t, n) {
  var r, o, i, a, s, u, l, c, f, h, m, v, g, O, y, w, _, E;
  Z(2, arguments);
  var U = String(t),
    L = Fr(),
    j =
      (r =
        (o = n == null ? void 0 : n.locale) !== null && o !== void 0
          ? o
          : L.locale) !== null && r !== void 0
        ? r
        : vw,
    $ = he(
      (i =
        (a =
          (s =
            (u = n == null ? void 0 : n.firstWeekContainsDate) !== null &&
            u !== void 0
              ? u
              : n == null ||
                (l = n.locale) === null ||
                l === void 0 ||
                (c = l.options) === null ||
                c === void 0
              ? void 0
              : c.firstWeekContainsDate) !== null && s !== void 0
            ? s
            : L.firstWeekContainsDate) !== null && a !== void 0
          ? a
          : (f = L.locale) === null ||
            f === void 0 ||
            (h = f.options) === null ||
            h === void 0
          ? void 0
          : h.firstWeekContainsDate) !== null && i !== void 0
        ? i
        : 1
    );
  if (!($ >= 1 && $ <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var Q = he(
    (m =
      (v =
        (g =
          (O = n == null ? void 0 : n.weekStartsOn) !== null && O !== void 0
            ? O
            : n == null ||
              (y = n.locale) === null ||
              y === void 0 ||
              (w = y.options) === null ||
              w === void 0
            ? void 0
            : w.weekStartsOn) !== null && g !== void 0
          ? g
          : L.weekStartsOn) !== null && v !== void 0
        ? v
        : (_ = L.locale) === null ||
          _ === void 0 ||
          (E = _.options) === null ||
          E === void 0
        ? void 0
        : E.weekStartsOn) !== null && m !== void 0
      ? m
      : 0
  );
  if (!(Q >= 0 && Q <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!j.localize)
    throw new RangeError("locale must contain localize property");
  if (!j.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var k = ne(e);
  if (!uw(k)) throw new RangeError("Invalid time value");
  var I = tu(k),
    D = lw(k, I),
    R = {
      firstWeekContainsDate: $,
      weekStartsOn: Q,
      locale: j,
      _originalDate: k,
    },
    W = U.match(BE)
      .map(function (F) {
        var J = F[0];
        if (J === "p" || J === "P") {
          var ie = Ef[J];
          return ie(F, j.formatLong);
        }
        return F;
      })
      .join("")
      .match(FE)
      .map(function (F) {
        if (F === "''") return "'";
        var J = F[0];
        if (J === "'") return YE(F);
        var ie = Q5[J];
        if (ie)
          return (
            !(n != null && n.useAdditionalWeekYearTokens) &&
              mw(F) &&
              nu(F, t, String(e)),
            !(n != null && n.useAdditionalDayOfYearTokens) &&
              hw(F) &&
              nu(F, t, String(e)),
            ie(D, F, j.localize, R)
          );
        if (J.match(HE))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              J +
              "`"
          );
        return F;
      })
      .join("");
  return W;
}
function YE(e) {
  var t = e.match($E);
  return t ? t[1].replace(jE, "'") : e;
}
var VE = 6e4;
function Pf(e, t) {
  Z(2, arguments);
  var n = he(t);
  return nh(e, n * VE);
}
var WE = 36e5;
function zE(e, t) {
  Z(2, arguments);
  var n = he(t);
  return nh(e, n * WE);
}
function Ao(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function oh(e, t) {
  Z(2, arguments);
  var n = he(t),
    r = n * 7;
  return Ao(e, r);
}
function Mn(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t);
  if (isNaN(r)) return new Date(NaN);
  if (!r) return n;
  var o = n.getDate(),
    i = new Date(n.getTime());
  i.setMonth(n.getMonth() + r + 1, 0);
  var a = i.getDate();
  return o >= a ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), o), n);
}
function yo(e, t) {
  Z(2, arguments);
  var n = he(t);
  return Mn(e, n * 12);
}
function KE(e, t) {
  Z(2, arguments);
  var n = he(t);
  return Ao(e, -n);
}
function qE(e, t) {
  Z(2, arguments);
  var n = he(t);
  return oh(e, -n);
}
function Ii(e, t) {
  Z(2, arguments);
  var n = he(t);
  return Mn(e, -n);
}
function Ui(e, t) {
  Z(2, arguments);
  var n = he(t);
  return yo(e, -n);
}
function QE(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getSeconds();
  return n;
}
function an(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getMinutes();
  return n;
}
function sn(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getHours();
  return n;
}
function GE(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getDay();
  return n;
}
function wv(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getDate();
  return n;
}
function yw(e, t) {
  var n, r, o, i, a, s, u, l;
  Z(1, arguments);
  var c = Fr(),
    f = he(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0
              ? i
              : t == null ||
                (a = t.locale) === null ||
                a === void 0 ||
                (s = a.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : c.weekStartsOn) !== null && r !== void 0
          ? r
          : (u = c.locale) === null ||
            u === void 0 ||
            (l = u.options) === null ||
            l === void 0
          ? void 0
          : l.weekStartsOn) !== null && n !== void 0
        ? n
        : 0
    );
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = ne(e),
    m = h.getDay(),
    v = (m < f ? 7 : 0) + m - f;
  return h.setDate(h.getDate() - v), h.setHours(0, 0, 0, 0), h;
}
function ru(e) {
  return Z(1, arguments), yw(e, { weekStartsOn: 1 });
}
function JE(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getFullYear(),
    r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = ru(r),
    i = new Date(0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  var a = ru(i);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= a.getTime()
    ? n
    : n - 1;
}
function ZE(e) {
  Z(1, arguments);
  var t = JE(e),
    n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = ru(n);
  return r;
}
var XE = 6048e5;
function e3(e) {
  Z(1, arguments);
  var t = ne(e),
    n = ru(t).getTime() - ZE(t).getTime();
  return Math.round(n / XE) + 1;
}
function ht(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getMonth();
  return n;
}
function Of(e) {
  Z(1, arguments);
  var t = ne(e),
    n = Math.floor(t.getMonth() / 3) + 1;
  return n;
}
function me(e) {
  return Z(1, arguments), ne(e).getFullYear();
}
function Df(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getTime();
  return n;
}
function t3(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t);
  return n.setSeconds(r), n;
}
function ui(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t);
  return n.setMinutes(r), n;
}
function li(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t);
  return n.setHours(r), n;
}
function n3(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getFullYear(),
    r = t.getMonth(),
    o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function dn(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t),
    o = n.getFullYear(),
    i = n.getDate(),
    a = new Date(0);
  a.setFullYear(o, r, 15), a.setHours(0, 0, 0, 0);
  var s = n3(a);
  return n.setMonth(r, Math.min(i, s)), n;
}
function Jo(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t),
    o = Math.floor(n.getMonth() / 3) + 1,
    i = r - o;
  return dn(n, n.getMonth() + i * 3);
}
function ou(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
function $a(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? ($a = function (n) {
          return typeof n;
        })
      : ($a = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    $a(e)
  );
}
function Sv(e) {
  Z(1, arguments);
  var t;
  if (e && typeof e.forEach == "function") t = e;
  else if ($a(e) === "object" && e !== null) t = Array.prototype.slice.call(e);
  else return new Date(NaN);
  var n;
  return (
    t.forEach(function (r) {
      var o = ne(r);
      (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
    }),
    n || new Date(NaN)
  );
}
function ja(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ja = function (n) {
          return typeof n;
        })
      : (ja = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ja(e)
  );
}
function Cv(e) {
  Z(1, arguments);
  var t;
  if (e && typeof e.forEach == "function") t = e;
  else if (ja(e) === "object" && e !== null) t = Array.prototype.slice.call(e);
  else return new Date(NaN);
  var n;
  return (
    t.forEach(function (r) {
      var o = ne(r);
      (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
    }),
    n || new Date(NaN)
  );
}
function wn(e) {
  Z(1, arguments);
  var t = ne(e);
  return t.setHours(0, 0, 0, 0), t;
}
var r3 = 864e5;
function iu(e, t) {
  Z(2, arguments);
  var n = wn(e),
    r = wn(t),
    o = n.getTime() - tu(n),
    i = r.getTime() - tu(r);
  return Math.round((o - i) / r3);
}
function au(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = ne(t),
    o = n.getFullYear() - r.getFullYear(),
    i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function su(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = ne(t);
  return n.getFullYear() - r.getFullYear();
}
function o3(e) {
  Z(1, arguments);
  var t = ne(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function kf(e) {
  Z(1, arguments);
  var t = ne(e),
    n = t.getMonth(),
    r = n - (n % 3);
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function i3(e) {
  Z(1, arguments);
  var t = ne(e),
    n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Tf(e) {
  Z(1, arguments);
  var t = ne(e);
  return t.setHours(23, 59, 59, 999), t;
}
function a3(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = ne(t);
  return n.getTime() === r.getTime();
}
function s3(e, t) {
  Z(2, arguments);
  var n = wn(e),
    r = wn(t);
  return n.getTime() === r.getTime();
}
function u3(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = ne(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function l3(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = ne(t);
  return n.getFullYear() === r.getFullYear();
}
function c3(e, t) {
  Z(2, arguments);
  var n = kf(e),
    r = kf(t);
  return n.getTime() === r.getTime();
}
function cr(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = ne(t);
  return n.getTime() > r.getTime();
}
function Dn(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = ne(t);
  return n.getTime() < r.getTime();
}
function Li(e, t) {
  Z(2, arguments);
  var n = ne(e).getTime(),
    r = ne(t.start).getTime(),
    o = ne(t.end).getTime();
  if (!(r <= o)) throw new RangeError("Invalid interval");
  return n >= r && n <= o;
}
function f3(e, t) {
  if (e == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined"
    );
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function Ha(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ha = function (n) {
          return typeof n;
        })
      : (Ha = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ha(e)
  );
}
function gw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Af(e, t);
}
function Af(e, t) {
  return (
    (Af =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Af(e, t)
  );
}
function ww(e) {
  var t = d3();
  return function () {
    var r = uu(e),
      o;
    if (t) {
      var i = uu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return p3(this, o);
  };
}
function p3(e, t) {
  return t && (Ha(t) === "object" || typeof t == "function") ? t : Rf(e);
}
function Rf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function d3() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function uu(e) {
  return (
    (uu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    uu(e)
  );
}
function ih(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _v(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function ah(e, t, n) {
  return t && _v(e.prototype, t), n && _v(e, n), e;
}
function Nf(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var h3 = 10,
  Sw = (function () {
    function e() {
      ih(this, e), Nf(this, "subPriority", 0);
    }
    return (
      ah(e, [
        {
          key: "validate",
          value: function (n, r) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  m3 = (function (e) {
    gw(n, e);
    var t = ww(n);
    function n(r, o, i, a, s) {
      var u;
      return (
        ih(this, n),
        (u = t.call(this)),
        (u.value = r),
        (u.validateValue = o),
        (u.setValue = i),
        (u.priority = a),
        s && (u.subPriority = s),
        u
      );
    }
    return (
      ah(n, [
        {
          key: "validate",
          value: function (o, i) {
            return this.validateValue(o, this.value, i);
          },
        },
        {
          key: "set",
          value: function (o, i, a) {
            return this.setValue(o, i, this.value, a);
          },
        },
      ]),
      n
    );
  })(Sw),
  v3 = (function (e) {
    gw(n, e);
    var t = ww(n);
    function n() {
      var r;
      ih(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (r = t.call.apply(t, [this].concat(i))),
        Nf(Rf(r), "priority", h3),
        Nf(Rf(r), "subPriority", -1),
        r
      );
    }
    return (
      ah(n, [
        {
          key: "set",
          value: function (o, i) {
            if (i.timestampIsSet) return o;
            var a = new Date(0);
            return (
              a.setFullYear(
                o.getUTCFullYear(),
                o.getUTCMonth(),
                o.getUTCDate()
              ),
              a.setHours(
                o.getUTCHours(),
                o.getUTCMinutes(),
                o.getUTCSeconds(),
                o.getUTCMilliseconds()
              ),
              a
            );
          },
        },
      ]),
      n
    );
  })(Sw);
function y3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function g3(e, t, n) {
  return t && bv(e.prototype, t), n && bv(e, n), e;
}
var ve = (function () {
  function e() {
    y3(this, e);
  }
  return (
    g3(e, [
      {
        key: "run",
        value: function (n, r, o, i) {
          var a = this.parse(n, r, o, i);
          return a
            ? {
                setter: new m3(
                  a.value,
                  this.validate,
                  this.set,
                  this.priority,
                  this.subPriority
                ),
                rest: a.rest,
              }
            : null;
        },
      },
      {
        key: "validate",
        value: function (n, r, o) {
          return !0;
        },
      },
    ]),
    e
  );
})();
function Ya(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ya = function (n) {
          return typeof n;
        })
      : (Ya = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ya(e)
  );
}
function w3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function S3(e, t, n) {
  return t && xv(e.prototype, t), n && xv(e, n), e;
}
function C3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Mf(e, t);
}
function Mf(e, t) {
  return (
    (Mf =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Mf(e, t)
  );
}
function _3(e) {
  var t = x3();
  return function () {
    var r = lu(e),
      o;
    if (t) {
      var i = lu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return b3(this, o);
  };
}
function b3(e, t) {
  return t && (Ya(t) === "object" || typeof t == "function") ? t : If(e);
}
function If(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function x3() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function lu(e) {
  return (
    (lu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    lu(e)
  );
}
function Ev(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var E3 = (function (e) {
    C3(n, e);
    var t = _3(n);
    function n() {
      var r;
      w3(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (r = t.call.apply(t, [this].concat(i))),
        Ev(If(r), "priority", 140),
        Ev(If(r), "incompatibleTokens", ["R", "u", "t", "T"]),
        r
      );
    }
    return (
      S3(n, [
        {
          key: "parse",
          value: function (o, i, a) {
            switch (i) {
              case "G":
              case "GG":
              case "GGG":
                return (
                  a.era(o, { width: "abbreviated" }) ||
                  a.era(o, { width: "narrow" })
                );
              case "GGGGG":
                return a.era(o, { width: "narrow" });
              case "GGGG":
              default:
                return (
                  a.era(o, { width: "wide" }) ||
                  a.era(o, { width: "abbreviated" }) ||
                  a.era(o, { width: "narrow" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, a) {
            return (
              (i.era = a),
              o.setUTCFullYear(a, 0, 1),
              o.setUTCHours(0, 0, 0, 0),
              o
            );
          },
        },
      ]),
      n
    );
  })(ve),
  sh = 6e4,
  uh = 36e5,
  P3 = 1e3,
  Be = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  hn = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function $e(e, t) {
  return e && { value: t(e.value), rest: e.rest };
}
function Re(e, t) {
  var n = t.match(e);
  return n ? { value: parseInt(n[0], 10), rest: t.slice(n[0].length) } : null;
}
function mn(e, t) {
  var n = t.match(e);
  if (!n) return null;
  if (n[0] === "Z") return { value: 0, rest: t.slice(1) };
  var r = n[1] === "+" ? 1 : -1,
    o = n[2] ? parseInt(n[2], 10) : 0,
    i = n[3] ? parseInt(n[3], 10) : 0,
    a = n[5] ? parseInt(n[5], 10) : 0;
  return { value: r * (o * uh + i * sh + a * P3), rest: t.slice(n[0].length) };
}
function Cw(e) {
  return Re(Be.anyDigitsSigned, e);
}
function Le(e, t) {
  switch (e) {
    case 1:
      return Re(Be.singleDigit, t);
    case 2:
      return Re(Be.twoDigits, t);
    case 3:
      return Re(Be.threeDigits, t);
    case 4:
      return Re(Be.fourDigits, t);
    default:
      return Re(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function cu(e, t) {
  switch (e) {
    case 1:
      return Re(Be.singleDigitSigned, t);
    case 2:
      return Re(Be.twoDigitsSigned, t);
    case 3:
      return Re(Be.threeDigitsSigned, t);
    case 4:
      return Re(Be.fourDigitsSigned, t);
    default:
      return Re(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function lh(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function _w(e, t) {
  var n = t > 0,
    r = n ? t : 1 - t,
    o;
  if (r <= 50) o = e || 100;
  else {
    var i = r + 50,
      a = Math.floor(i / 100) * 100,
      s = e >= i % 100;
    o = e + a - (s ? 100 : 0);
  }
  return n ? o : 1 - o;
}
function bw(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Va(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Va = function (n) {
          return typeof n;
        })
      : (Va = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Va(e)
  );
}
function O3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function D3(e, t, n) {
  return t && Pv(e.prototype, t), n && Pv(e, n), e;
}
function k3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Uf(e, t);
}
function Uf(e, t) {
  return (
    (Uf =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Uf(e, t)
  );
}
function T3(e) {
  var t = R3();
  return function () {
    var r = fu(e),
      o;
    if (t) {
      var i = fu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return A3(this, o);
  };
}
function A3(e, t) {
  return t && (Va(t) === "object" || typeof t == "function") ? t : Lf(e);
}
function Lf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function R3() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function fu(e) {
  return (
    (fu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    fu(e)
  );
}
function Ov(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var N3 = (function (e) {
  k3(n, e);
  var t = T3(n);
  function n() {
    var r;
    O3(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Ov(Lf(r), "priority", 130),
      Ov(Lf(r), "incompatibleTokens", [
        "Y",
        "R",
        "u",
        "w",
        "I",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    D3(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          var s = function (l) {
            return { year: l, isTwoDigitYear: i === "yy" };
          };
          switch (i) {
            case "y":
              return $e(Le(4, o), s);
            case "yo":
              return $e(a.ordinalNumber(o, { unit: "year" }), s);
            default:
              return $e(Le(i.length, o), s);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i.isTwoDigitYear || i.year > 0;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          var s = o.getUTCFullYear();
          if (a.isTwoDigitYear) {
            var u = _w(a.year, s);
            return o.setUTCFullYear(u, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          }
          var l = !("era" in i) || i.era === 1 ? a.year : 1 - a.year;
          return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function Wa(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Wa = function (n) {
          return typeof n;
        })
      : (Wa = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Wa(e)
  );
}
function M3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function I3(e, t, n) {
  return t && Dv(e.prototype, t), n && Dv(e, n), e;
}
function U3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ff(e, t);
}
function Ff(e, t) {
  return (
    (Ff =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Ff(e, t)
  );
}
function L3(e) {
  var t = B3();
  return function () {
    var r = pu(e),
      o;
    if (t) {
      var i = pu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return F3(this, o);
  };
}
function F3(e, t) {
  return t && (Wa(t) === "object" || typeof t == "function") ? t : Bf(e);
}
function Bf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function B3() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function pu(e) {
  return (
    (pu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    pu(e)
  );
}
function kv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var $3 = (function (e) {
  U3(n, e);
  var t = L3(n);
  function n() {
    var r;
    M3(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      kv(Bf(r), "priority", 130),
      kv(Bf(r), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "Q",
        "q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    I3(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          var s = function (l) {
            return { year: l, isTwoDigitYear: i === "YY" };
          };
          switch (i) {
            case "Y":
              return $e(Le(4, o), s);
            case "Yo":
              return $e(a.ordinalNumber(o, { unit: "year" }), s);
            default:
              return $e(Le(i.length, o), s);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i.isTwoDigitYear || i.year > 0;
        },
      },
      {
        key: "set",
        value: function (o, i, a, s) {
          var u = rh(o, s);
          if (a.isTwoDigitYear) {
            var l = _w(a.year, u);
            return (
              o.setUTCFullYear(l, 0, s.firstWeekContainsDate),
              o.setUTCHours(0, 0, 0, 0),
              Mr(o, s)
            );
          }
          var c = !("era" in i) || i.era === 1 ? a.year : 1 - a.year;
          return (
            o.setUTCFullYear(c, 0, s.firstWeekContainsDate),
            o.setUTCHours(0, 0, 0, 0),
            Mr(o, s)
          );
        },
      },
    ]),
    n
  );
})(ve);
function za(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (za = function (n) {
          return typeof n;
        })
      : (za = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    za(e)
  );
}
function j3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function H3(e, t, n) {
  return t && Tv(e.prototype, t), n && Tv(e, n), e;
}
function Y3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && $f(e, t);
}
function $f(e, t) {
  return (
    ($f =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    $f(e, t)
  );
}
function V3(e) {
  var t = z3();
  return function () {
    var r = du(e),
      o;
    if (t) {
      var i = du(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return W3(this, o);
  };
}
function W3(e, t) {
  return t && (za(t) === "object" || typeof t == "function") ? t : jf(e);
}
function jf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function z3() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function du(e) {
  return (
    (du = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    du(e)
  );
}
function Av(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var K3 = (function (e) {
  Y3(n, e);
  var t = V3(n);
  function n() {
    var r;
    j3(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Av(jf(r), "priority", 130),
      Av(jf(r), "incompatibleTokens", [
        "G",
        "y",
        "Y",
        "u",
        "Q",
        "q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    H3(n, [
      {
        key: "parse",
        value: function (o, i) {
          return cu(i === "R" ? 4 : i.length, o);
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          var s = new Date(0);
          return s.setUTCFullYear(a, 0, 4), s.setUTCHours(0, 0, 0, 0), vo(s);
        },
      },
    ]),
    n
  );
})(ve);
function Ka(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ka = function (n) {
          return typeof n;
        })
      : (Ka = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ka(e)
  );
}
function q3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Q3(e, t, n) {
  return t && Rv(e.prototype, t), n && Rv(e, n), e;
}
function G3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Hf(e, t);
}
function Hf(e, t) {
  return (
    (Hf =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Hf(e, t)
  );
}
function J3(e) {
  var t = X3();
  return function () {
    var r = hu(e),
      o;
    if (t) {
      var i = hu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Z3(this, o);
  };
}
function Z3(e, t) {
  return t && (Ka(t) === "object" || typeof t == "function") ? t : Yf(e);
}
function Yf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function X3() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function hu(e) {
  return (
    (hu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    hu(e)
  );
}
function Nv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var eP = (function (e) {
  G3(n, e);
  var t = J3(n);
  function n() {
    var r;
    q3(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Nv(Yf(r), "priority", 130),
      Nv(Yf(r), "incompatibleTokens", [
        "G",
        "y",
        "Y",
        "R",
        "w",
        "I",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    Q3(n, [
      {
        key: "parse",
        value: function (o, i) {
          return cu(i === "u" ? 4 : i.length, o);
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCFullYear(a, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function qa(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (qa = function (n) {
          return typeof n;
        })
      : (qa = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    qa(e)
  );
}
function tP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function nP(e, t, n) {
  return t && Mv(e.prototype, t), n && Mv(e, n), e;
}
function rP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Vf(e, t);
}
function Vf(e, t) {
  return (
    (Vf =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Vf(e, t)
  );
}
function oP(e) {
  var t = aP();
  return function () {
    var r = mu(e),
      o;
    if (t) {
      var i = mu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return iP(this, o);
  };
}
function iP(e, t) {
  return t && (qa(t) === "object" || typeof t == "function") ? t : Wf(e);
}
function Wf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function aP() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function mu(e) {
  return (
    (mu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    mu(e)
  );
}
function Iv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var sP = (function (e) {
  rP(n, e);
  var t = oP(n);
  function n() {
    var r;
    tP(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Iv(Wf(r), "priority", 120),
      Iv(Wf(r), "incompatibleTokens", [
        "Y",
        "R",
        "q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    nP(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "Q":
            case "QQ":
              return Le(i.length, o);
            case "Qo":
              return a.ordinalNumber(o, { unit: "quarter" });
            case "QQQ":
              return (
                a.quarter(o, { width: "abbreviated", context: "formatting" }) ||
                a.quarter(o, { width: "narrow", context: "formatting" })
              );
            case "QQQQQ":
              return a.quarter(o, { width: "narrow", context: "formatting" });
            case "QQQQ":
            default:
              return (
                a.quarter(o, { width: "wide", context: "formatting" }) ||
                a.quarter(o, { width: "abbreviated", context: "formatting" }) ||
                a.quarter(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 4;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCMonth((a - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function Qa(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Qa = function (n) {
          return typeof n;
        })
      : (Qa = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Qa(e)
  );
}
function uP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Uv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function lP(e, t, n) {
  return t && Uv(e.prototype, t), n && Uv(e, n), e;
}
function cP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && zf(e, t);
}
function zf(e, t) {
  return (
    (zf =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    zf(e, t)
  );
}
function fP(e) {
  var t = dP();
  return function () {
    var r = vu(e),
      o;
    if (t) {
      var i = vu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return pP(this, o);
  };
}
function pP(e, t) {
  return t && (Qa(t) === "object" || typeof t == "function") ? t : Kf(e);
}
function Kf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function dP() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function vu(e) {
  return (
    (vu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    vu(e)
  );
}
function Lv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var hP = (function (e) {
  cP(n, e);
  var t = fP(n);
  function n() {
    var r;
    uP(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Lv(Kf(r), "priority", 120),
      Lv(Kf(r), "incompatibleTokens", [
        "Y",
        "R",
        "Q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    lP(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "q":
            case "qq":
              return Le(i.length, o);
            case "qo":
              return a.ordinalNumber(o, { unit: "quarter" });
            case "qqq":
              return (
                a.quarter(o, { width: "abbreviated", context: "standalone" }) ||
                a.quarter(o, { width: "narrow", context: "standalone" })
              );
            case "qqqqq":
              return a.quarter(o, { width: "narrow", context: "standalone" });
            case "qqqq":
            default:
              return (
                a.quarter(o, { width: "wide", context: "standalone" }) ||
                a.quarter(o, { width: "abbreviated", context: "standalone" }) ||
                a.quarter(o, { width: "narrow", context: "standalone" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 4;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCMonth((a - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function Ga(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ga = function (n) {
          return typeof n;
        })
      : (Ga = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ga(e)
  );
}
function mP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function vP(e, t, n) {
  return t && Fv(e.prototype, t), n && Fv(e, n), e;
}
function yP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && qf(e, t);
}
function qf(e, t) {
  return (
    (qf =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    qf(e, t)
  );
}
function gP(e) {
  var t = SP();
  return function () {
    var r = yu(e),
      o;
    if (t) {
      var i = yu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return wP(this, o);
  };
}
function wP(e, t) {
  return t && (Ga(t) === "object" || typeof t == "function") ? t : Qf(e);
}
function Qf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function SP() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function yu(e) {
  return (
    (yu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    yu(e)
  );
}
function Bv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var CP = (function (e) {
  yP(n, e);
  var t = gP(n);
  function n() {
    var r;
    mP(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Bv(Qf(r), "incompatibleTokens", [
        "Y",
        "R",
        "q",
        "Q",
        "L",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      Bv(Qf(r), "priority", 110),
      r
    );
  }
  return (
    vP(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          var s = function (l) {
            return l - 1;
          };
          switch (i) {
            case "M":
              return $e(Re(Be.month, o), s);
            case "MM":
              return $e(Le(2, o), s);
            case "Mo":
              return $e(a.ordinalNumber(o, { unit: "month" }), s);
            case "MMM":
              return (
                a.month(o, { width: "abbreviated", context: "formatting" }) ||
                a.month(o, { width: "narrow", context: "formatting" })
              );
            case "MMMMM":
              return a.month(o, { width: "narrow", context: "formatting" });
            case "MMMM":
            default:
              return (
                a.month(o, { width: "wide", context: "formatting" }) ||
                a.month(o, { width: "abbreviated", context: "formatting" }) ||
                a.month(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 11;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCMonth(a, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function Ja(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ja = function (n) {
          return typeof n;
        })
      : (Ja = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ja(e)
  );
}
function _P(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $v(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function bP(e, t, n) {
  return t && $v(e.prototype, t), n && $v(e, n), e;
}
function xP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Gf(e, t);
}
function Gf(e, t) {
  return (
    (Gf =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Gf(e, t)
  );
}
function EP(e) {
  var t = OP();
  return function () {
    var r = gu(e),
      o;
    if (t) {
      var i = gu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return PP(this, o);
  };
}
function PP(e, t) {
  return t && (Ja(t) === "object" || typeof t == "function") ? t : Jf(e);
}
function Jf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function OP() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function gu(e) {
  return (
    (gu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    gu(e)
  );
}
function jv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var DP = (function (e) {
  xP(n, e);
  var t = EP(n);
  function n() {
    var r;
    _P(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      jv(Jf(r), "priority", 110),
      jv(Jf(r), "incompatibleTokens", [
        "Y",
        "R",
        "q",
        "Q",
        "M",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    bP(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          var s = function (l) {
            return l - 1;
          };
          switch (i) {
            case "L":
              return $e(Re(Be.month, o), s);
            case "LL":
              return $e(Le(2, o), s);
            case "Lo":
              return $e(a.ordinalNumber(o, { unit: "month" }), s);
            case "LLL":
              return (
                a.month(o, { width: "abbreviated", context: "standalone" }) ||
                a.month(o, { width: "narrow", context: "standalone" })
              );
            case "LLLLL":
              return a.month(o, { width: "narrow", context: "standalone" });
            case "LLLL":
            default:
              return (
                a.month(o, { width: "wide", context: "standalone" }) ||
                a.month(o, { width: "abbreviated", context: "standalone" }) ||
                a.month(o, { width: "narrow", context: "standalone" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 11;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCMonth(a, 1), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function kP(e, t, n) {
  Z(2, arguments);
  var r = ne(e),
    o = he(t),
    i = pw(r, n) - o;
  return r.setUTCDate(r.getUTCDate() - i * 7), r;
}
function Za(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Za = function (n) {
          return typeof n;
        })
      : (Za = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Za(e)
  );
}
function TP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function AP(e, t, n) {
  return t && Hv(e.prototype, t), n && Hv(e, n), e;
}
function RP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Zf(e, t);
}
function Zf(e, t) {
  return (
    (Zf =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Zf(e, t)
  );
}
function NP(e) {
  var t = IP();
  return function () {
    var r = wu(e),
      o;
    if (t) {
      var i = wu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return MP(this, o);
  };
}
function MP(e, t) {
  return t && (Za(t) === "object" || typeof t == "function") ? t : Xf(e);
}
function Xf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function IP() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function wu(e) {
  return (
    (wu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    wu(e)
  );
}
function Yv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var UP = (function (e) {
  RP(n, e);
  var t = NP(n);
  function n() {
    var r;
    TP(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Yv(Xf(r), "priority", 100),
      Yv(Xf(r), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    AP(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "w":
              return Re(Be.week, o);
            case "wo":
              return a.ordinalNumber(o, { unit: "week" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 53;
        },
      },
      {
        key: "set",
        value: function (o, i, a, s) {
          return Mr(kP(o, a, s), s);
        },
      },
    ]),
    n
  );
})(ve);
function LP(e, t) {
  Z(2, arguments);
  var n = ne(e),
    r = he(t),
    o = fw(n) - r;
  return n.setUTCDate(n.getUTCDate() - o * 7), n;
}
function Xa(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Xa = function (n) {
          return typeof n;
        })
      : (Xa = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Xa(e)
  );
}
function FP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function BP(e, t, n) {
  return t && Vv(e.prototype, t), n && Vv(e, n), e;
}
function $P(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && ep(e, t);
}
function ep(e, t) {
  return (
    (ep =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    ep(e, t)
  );
}
function jP(e) {
  var t = YP();
  return function () {
    var r = Su(e),
      o;
    if (t) {
      var i = Su(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return HP(this, o);
  };
}
function HP(e, t) {
  return t && (Xa(t) === "object" || typeof t == "function") ? t : tp(e);
}
function tp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function YP() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Su(e) {
  return (
    (Su = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Su(e)
  );
}
function Wv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var VP = (function (e) {
  $P(n, e);
  var t = jP(n);
  function n() {
    var r;
    FP(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Wv(tp(r), "priority", 100),
      Wv(tp(r), "incompatibleTokens", [
        "y",
        "Y",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    BP(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "I":
              return Re(Be.week, o);
            case "Io":
              return a.ordinalNumber(o, { unit: "week" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 53;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return vo(LP(o, a));
        },
      },
    ]),
    n
  );
})(ve);
function es(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (es = function (n) {
          return typeof n;
        })
      : (es = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    es(e)
  );
}
function WP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function zP(e, t, n) {
  return t && zv(e.prototype, t), n && zv(e, n), e;
}
function KP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && np(e, t);
}
function np(e, t) {
  return (
    (np =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    np(e, t)
  );
}
function qP(e) {
  var t = GP();
  return function () {
    var r = Cu(e),
      o;
    if (t) {
      var i = Cu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return QP(this, o);
  };
}
function QP(e, t) {
  return t && (es(t) === "object" || typeof t == "function") ? t : ts(e);
}
function ts(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function GP() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Cu(e) {
  return (
    (Cu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Cu(e)
  );
}
function sc(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var JP = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  ZP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  XP = (function (e) {
    KP(n, e);
    var t = qP(n);
    function n() {
      var r;
      WP(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (r = t.call.apply(t, [this].concat(i))),
        sc(ts(r), "priority", 90),
        sc(ts(r), "subPriority", 1),
        sc(ts(r), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        r
      );
    }
    return (
      zP(n, [
        {
          key: "parse",
          value: function (o, i, a) {
            switch (i) {
              case "d":
                return Re(Be.date, o);
              case "do":
                return a.ordinalNumber(o, { unit: "date" });
              default:
                return Le(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var a = o.getUTCFullYear(),
              s = bw(a),
              u = o.getUTCMonth();
            return s ? i >= 1 && i <= ZP[u] : i >= 1 && i <= JP[u];
          },
        },
        {
          key: "set",
          value: function (o, i, a) {
            return o.setUTCDate(a), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      n
    );
  })(ve);
function ns(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ns = function (n) {
          return typeof n;
        })
      : (ns = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ns(e)
  );
}
function eO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function tO(e, t, n) {
  return t && Kv(e.prototype, t), n && Kv(e, n), e;
}
function nO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && rp(e, t);
}
function rp(e, t) {
  return (
    (rp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    rp(e, t)
  );
}
function rO(e) {
  var t = iO();
  return function () {
    var r = _u(e),
      o;
    if (t) {
      var i = _u(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return oO(this, o);
  };
}
function oO(e, t) {
  return t && (ns(t) === "object" || typeof t == "function") ? t : rs(e);
}
function rs(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function iO() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function _u(e) {
  return (
    (_u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    _u(e)
  );
}
function uc(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var aO = (function (e) {
  nO(n, e);
  var t = rO(n);
  function n() {
    var r;
    eO(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      uc(rs(r), "priority", 90),
      uc(rs(r), "subpriority", 1),
      uc(rs(r), "incompatibleTokens", [
        "Y",
        "R",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "E",
        "i",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    tO(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "D":
            case "DD":
              return Re(Be.dayOfYear, o);
            case "Do":
              return a.ordinalNumber(o, { unit: "date" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          var a = o.getUTCFullYear(),
            s = bw(a);
          return s ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCMonth(0, a), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function ch(e, t, n) {
  var r, o, i, a, s, u, l, c;
  Z(2, arguments);
  var f = Fr(),
    h = he(
      (r =
        (o =
          (i =
            (a = n == null ? void 0 : n.weekStartsOn) !== null && a !== void 0
              ? a
              : n == null ||
                (s = n.locale) === null ||
                s === void 0 ||
                (u = s.options) === null ||
                u === void 0
              ? void 0
              : u.weekStartsOn) !== null && i !== void 0
            ? i
            : f.weekStartsOn) !== null && o !== void 0
          ? o
          : (l = f.locale) === null ||
            l === void 0 ||
            (c = l.options) === null ||
            c === void 0
          ? void 0
          : c.weekStartsOn) !== null && r !== void 0
        ? r
        : 0
    );
  if (!(h >= 0 && h <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = ne(e),
    v = he(t),
    g = m.getUTCDay(),
    O = v % 7,
    y = (O + 7) % 7,
    w = (y < h ? 7 : 0) + v - g;
  return m.setUTCDate(m.getUTCDate() + w), m;
}
function os(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (os = function (n) {
          return typeof n;
        })
      : (os = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    os(e)
  );
}
function sO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function uO(e, t, n) {
  return t && qv(e.prototype, t), n && qv(e, n), e;
}
function lO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && op(e, t);
}
function op(e, t) {
  return (
    (op =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    op(e, t)
  );
}
function cO(e) {
  var t = pO();
  return function () {
    var r = bu(e),
      o;
    if (t) {
      var i = bu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return fO(this, o);
  };
}
function fO(e, t) {
  return t && (os(t) === "object" || typeof t == "function") ? t : ip(e);
}
function ip(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function pO() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function bu(e) {
  return (
    (bu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    bu(e)
  );
}
function Qv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var dO = (function (e) {
  lO(n, e);
  var t = cO(n);
  function n() {
    var r;
    sO(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Qv(ip(r), "priority", 90),
      Qv(ip(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
      r
    );
  }
  return (
    uO(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "E":
            case "EE":
            case "EEE":
              return (
                a.day(o, { width: "abbreviated", context: "formatting" }) ||
                a.day(o, { width: "short", context: "formatting" }) ||
                a.day(o, { width: "narrow", context: "formatting" })
              );
            case "EEEEE":
              return a.day(o, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return (
                a.day(o, { width: "short", context: "formatting" }) ||
                a.day(o, { width: "narrow", context: "formatting" })
              );
            case "EEEE":
            default:
              return (
                a.day(o, { width: "wide", context: "formatting" }) ||
                a.day(o, { width: "abbreviated", context: "formatting" }) ||
                a.day(o, { width: "short", context: "formatting" }) ||
                a.day(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 6;
        },
      },
      {
        key: "set",
        value: function (o, i, a, s) {
          return (o = ch(o, a, s)), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function is(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (is = function (n) {
          return typeof n;
        })
      : (is = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    is(e)
  );
}
function hO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function mO(e, t, n) {
  return t && Gv(e.prototype, t), n && Gv(e, n), e;
}
function vO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && ap(e, t);
}
function ap(e, t) {
  return (
    (ap =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    ap(e, t)
  );
}
function yO(e) {
  var t = wO();
  return function () {
    var r = xu(e),
      o;
    if (t) {
      var i = xu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return gO(this, o);
  };
}
function gO(e, t) {
  return t && (is(t) === "object" || typeof t == "function") ? t : sp(e);
}
function sp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function wO() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function xu(e) {
  return (
    (xu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    xu(e)
  );
}
function Jv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var SO = (function (e) {
  vO(n, e);
  var t = yO(n);
  function n() {
    var r;
    hO(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Jv(sp(r), "priority", 90),
      Jv(sp(r), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "E",
        "i",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    mO(n, [
      {
        key: "parse",
        value: function (o, i, a, s) {
          var u = function (c) {
            var f = Math.floor((c - 1) / 7) * 7;
            return ((c + s.weekStartsOn + 6) % 7) + f;
          };
          switch (i) {
            case "e":
            case "ee":
              return $e(Le(i.length, o), u);
            case "eo":
              return $e(a.ordinalNumber(o, { unit: "day" }), u);
            case "eee":
              return (
                a.day(o, { width: "abbreviated", context: "formatting" }) ||
                a.day(o, { width: "short", context: "formatting" }) ||
                a.day(o, { width: "narrow", context: "formatting" })
              );
            case "eeeee":
              return a.day(o, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return (
                a.day(o, { width: "short", context: "formatting" }) ||
                a.day(o, { width: "narrow", context: "formatting" })
              );
            case "eeee":
            default:
              return (
                a.day(o, { width: "wide", context: "formatting" }) ||
                a.day(o, { width: "abbreviated", context: "formatting" }) ||
                a.day(o, { width: "short", context: "formatting" }) ||
                a.day(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 6;
        },
      },
      {
        key: "set",
        value: function (o, i, a, s) {
          return (o = ch(o, a, s)), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function as(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (as = function (n) {
          return typeof n;
        })
      : (as = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    as(e)
  );
}
function CO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _O(e, t, n) {
  return t && Zv(e.prototype, t), n && Zv(e, n), e;
}
function bO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && up(e, t);
}
function up(e, t) {
  return (
    (up =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    up(e, t)
  );
}
function xO(e) {
  var t = PO();
  return function () {
    var r = Eu(e),
      o;
    if (t) {
      var i = Eu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return EO(this, o);
  };
}
function EO(e, t) {
  return t && (as(t) === "object" || typeof t == "function") ? t : lp(e);
}
function lp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function PO() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Eu(e) {
  return (
    (Eu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Eu(e)
  );
}
function Xv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var OO = (function (e) {
  bO(n, e);
  var t = xO(n);
  function n() {
    var r;
    CO(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Xv(lp(r), "priority", 90),
      Xv(lp(r), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "E",
        "i",
        "e",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    _O(n, [
      {
        key: "parse",
        value: function (o, i, a, s) {
          var u = function (c) {
            var f = Math.floor((c - 1) / 7) * 7;
            return ((c + s.weekStartsOn + 6) % 7) + f;
          };
          switch (i) {
            case "c":
            case "cc":
              return $e(Le(i.length, o), u);
            case "co":
              return $e(a.ordinalNumber(o, { unit: "day" }), u);
            case "ccc":
              return (
                a.day(o, { width: "abbreviated", context: "standalone" }) ||
                a.day(o, { width: "short", context: "standalone" }) ||
                a.day(o, { width: "narrow", context: "standalone" })
              );
            case "ccccc":
              return a.day(o, { width: "narrow", context: "standalone" });
            case "cccccc":
              return (
                a.day(o, { width: "short", context: "standalone" }) ||
                a.day(o, { width: "narrow", context: "standalone" })
              );
            case "cccc":
            default:
              return (
                a.day(o, { width: "wide", context: "standalone" }) ||
                a.day(o, { width: "abbreviated", context: "standalone" }) ||
                a.day(o, { width: "short", context: "standalone" }) ||
                a.day(o, { width: "narrow", context: "standalone" })
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 6;
        },
      },
      {
        key: "set",
        value: function (o, i, a, s) {
          return (o = ch(o, a, s)), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function DO(e, t) {
  Z(2, arguments);
  var n = he(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1,
    o = ne(e),
    i = o.getUTCDay(),
    a = n % 7,
    s = (a + 7) % 7,
    u = (s < r ? 7 : 0) + n - i;
  return o.setUTCDate(o.getUTCDate() + u), o;
}
function ss(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ss = function (n) {
          return typeof n;
        })
      : (ss = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ss(e)
  );
}
function kO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ey(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function TO(e, t, n) {
  return t && ey(e.prototype, t), n && ey(e, n), e;
}
function AO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && cp(e, t);
}
function cp(e, t) {
  return (
    (cp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    cp(e, t)
  );
}
function RO(e) {
  var t = MO();
  return function () {
    var r = Pu(e),
      o;
    if (t) {
      var i = Pu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return NO(this, o);
  };
}
function NO(e, t) {
  return t && (ss(t) === "object" || typeof t == "function") ? t : fp(e);
}
function fp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function MO() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Pu(e) {
  return (
    (Pu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Pu(e)
  );
}
function ty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var IO = (function (e) {
  AO(n, e);
  var t = RO(n);
  function n() {
    var r;
    kO(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      ty(fp(r), "priority", 90),
      ty(fp(r), "incompatibleTokens", [
        "y",
        "Y",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "E",
        "e",
        "c",
        "t",
        "T",
      ]),
      r
    );
  }
  return (
    TO(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          var s = function (l) {
            return l === 0 ? 7 : l;
          };
          switch (i) {
            case "i":
            case "ii":
              return Le(i.length, o);
            case "io":
              return a.ordinalNumber(o, { unit: "day" });
            case "iii":
              return $e(
                a.day(o, { width: "abbreviated", context: "formatting" }) ||
                  a.day(o, { width: "short", context: "formatting" }) ||
                  a.day(o, { width: "narrow", context: "formatting" }),
                s
              );
            case "iiiii":
              return $e(
                a.day(o, { width: "narrow", context: "formatting" }),
                s
              );
            case "iiiiii":
              return $e(
                a.day(o, { width: "short", context: "formatting" }) ||
                  a.day(o, { width: "narrow", context: "formatting" }),
                s
              );
            case "iiii":
            default:
              return $e(
                a.day(o, { width: "wide", context: "formatting" }) ||
                  a.day(o, { width: "abbreviated", context: "formatting" }) ||
                  a.day(o, { width: "short", context: "formatting" }) ||
                  a.day(o, { width: "narrow", context: "formatting" }),
                s
              );
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 7;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return (o = DO(o, a)), o.setUTCHours(0, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function us(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (us = function (n) {
          return typeof n;
        })
      : (us = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    us(e)
  );
}
function UO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ny(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function LO(e, t, n) {
  return t && ny(e.prototype, t), n && ny(e, n), e;
}
function FO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && pp(e, t);
}
function pp(e, t) {
  return (
    (pp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    pp(e, t)
  );
}
function BO(e) {
  var t = jO();
  return function () {
    var r = Ou(e),
      o;
    if (t) {
      var i = Ou(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return $O(this, o);
  };
}
function $O(e, t) {
  return t && (us(t) === "object" || typeof t == "function") ? t : dp(e);
}
function dp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function jO() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ou(e) {
  return (
    (Ou = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ou(e)
  );
}
function ry(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var HO = (function (e) {
  FO(n, e);
  var t = BO(n);
  function n() {
    var r;
    UO(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      ry(dp(r), "priority", 80),
      ry(dp(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
      r
    );
  }
  return (
    LO(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "a":
            case "aa":
            case "aaa":
              return (
                a.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) || a.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
            case "aaaaa":
              return a.dayPeriod(o, { width: "narrow", context: "formatting" });
            case "aaaa":
            default:
              return (
                a.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                a.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                a.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCHours(lh(a), 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function ls(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ls = function (n) {
          return typeof n;
        })
      : (ls = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ls(e)
  );
}
function YO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function VO(e, t, n) {
  return t && oy(e.prototype, t), n && oy(e, n), e;
}
function WO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && hp(e, t);
}
function hp(e, t) {
  return (
    (hp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    hp(e, t)
  );
}
function zO(e) {
  var t = qO();
  return function () {
    var r = Du(e),
      o;
    if (t) {
      var i = Du(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return KO(this, o);
  };
}
function KO(e, t) {
  return t && (ls(t) === "object" || typeof t == "function") ? t : mp(e);
}
function mp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function qO() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Du(e) {
  return (
    (Du = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Du(e)
  );
}
function iy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var QO = (function (e) {
  WO(n, e);
  var t = zO(n);
  function n() {
    var r;
    YO(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      iy(mp(r), "priority", 80),
      iy(mp(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
      r
    );
  }
  return (
    VO(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "b":
            case "bb":
            case "bbb":
              return (
                a.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) || a.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
            case "bbbbb":
              return a.dayPeriod(o, { width: "narrow", context: "formatting" });
            case "bbbb":
            default:
              return (
                a.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                a.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                a.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCHours(lh(a), 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function cs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (cs = function (n) {
          return typeof n;
        })
      : (cs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    cs(e)
  );
}
function GO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ay(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function JO(e, t, n) {
  return t && ay(e.prototype, t), n && ay(e, n), e;
}
function ZO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && vp(e, t);
}
function vp(e, t) {
  return (
    (vp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    vp(e, t)
  );
}
function XO(e) {
  var t = tD();
  return function () {
    var r = ku(e),
      o;
    if (t) {
      var i = ku(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return eD(this, o);
  };
}
function eD(e, t) {
  return t && (cs(t) === "object" || typeof t == "function") ? t : yp(e);
}
function yp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function tD() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ku(e) {
  return (
    (ku = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ku(e)
  );
}
function sy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var nD = (function (e) {
  ZO(n, e);
  var t = XO(n);
  function n() {
    var r;
    GO(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      sy(yp(r), "priority", 80),
      sy(yp(r), "incompatibleTokens", ["a", "b", "t", "T"]),
      r
    );
  }
  return (
    JO(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "B":
            case "BB":
            case "BBB":
              return (
                a.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) || a.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
            case "BBBBB":
              return a.dayPeriod(o, { width: "narrow", context: "formatting" });
            case "BBBB":
            default:
              return (
                a.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                a.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                a.dayPeriod(o, { width: "narrow", context: "formatting" })
              );
          }
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCHours(lh(a), 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function fs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (fs = function (n) {
          return typeof n;
        })
      : (fs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    fs(e)
  );
}
function rD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function oD(e, t, n) {
  return t && uy(e.prototype, t), n && uy(e, n), e;
}
function iD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && gp(e, t);
}
function gp(e, t) {
  return (
    (gp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    gp(e, t)
  );
}
function aD(e) {
  var t = uD();
  return function () {
    var r = Tu(e),
      o;
    if (t) {
      var i = Tu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return sD(this, o);
  };
}
function sD(e, t) {
  return t && (fs(t) === "object" || typeof t == "function") ? t : wp(e);
}
function wp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function uD() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Tu(e) {
  return (
    (Tu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Tu(e)
  );
}
function ly(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var lD = (function (e) {
  iD(n, e);
  var t = aD(n);
  function n() {
    var r;
    rD(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      ly(wp(r), "priority", 70),
      ly(wp(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
      r
    );
  }
  return (
    oD(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "h":
              return Re(Be.hour12h, o);
            case "ho":
              return a.ordinalNumber(o, { unit: "hour" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 12;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          var s = o.getUTCHours() >= 12;
          return (
            s && a < 12
              ? o.setUTCHours(a + 12, 0, 0, 0)
              : !s && a === 12
              ? o.setUTCHours(0, 0, 0, 0)
              : o.setUTCHours(a, 0, 0, 0),
            o
          );
        },
      },
    ]),
    n
  );
})(ve);
function ps(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ps = function (n) {
          return typeof n;
        })
      : (ps = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ps(e)
  );
}
function cD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function fD(e, t, n) {
  return t && cy(e.prototype, t), n && cy(e, n), e;
}
function pD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Sp(e, t);
}
function Sp(e, t) {
  return (
    (Sp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Sp(e, t)
  );
}
function dD(e) {
  var t = mD();
  return function () {
    var r = Au(e),
      o;
    if (t) {
      var i = Au(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return hD(this, o);
  };
}
function hD(e, t) {
  return t && (ps(t) === "object" || typeof t == "function") ? t : Cp(e);
}
function Cp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function mD() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Au(e) {
  return (
    (Au = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Au(e)
  );
}
function fy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var vD = (function (e) {
  pD(n, e);
  var t = dD(n);
  function n() {
    var r;
    cD(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      fy(Cp(r), "priority", 70),
      fy(Cp(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
      r
    );
  }
  return (
    fD(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "H":
              return Re(Be.hour23h, o);
            case "Ho":
              return a.ordinalNumber(o, { unit: "hour" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 23;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCHours(a, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function ds(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ds = function (n) {
          return typeof n;
        })
      : (ds = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ds(e)
  );
}
function yD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function py(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function gD(e, t, n) {
  return t && py(e.prototype, t), n && py(e, n), e;
}
function wD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _p(e, t);
}
function _p(e, t) {
  return (
    (_p =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    _p(e, t)
  );
}
function SD(e) {
  var t = _D();
  return function () {
    var r = Ru(e),
      o;
    if (t) {
      var i = Ru(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return CD(this, o);
  };
}
function CD(e, t) {
  return t && (ds(t) === "object" || typeof t == "function") ? t : bp(e);
}
function bp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _D() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ru(e) {
  return (
    (Ru = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ru(e)
  );
}
function dy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var bD = (function (e) {
  wD(n, e);
  var t = SD(n);
  function n() {
    var r;
    yD(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      dy(bp(r), "priority", 70),
      dy(bp(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
      r
    );
  }
  return (
    gD(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "K":
              return Re(Be.hour11h, o);
            case "Ko":
              return a.ordinalNumber(o, { unit: "hour" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 11;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          var s = o.getUTCHours() >= 12;
          return (
            s && a < 12
              ? o.setUTCHours(a + 12, 0, 0, 0)
              : o.setUTCHours(a, 0, 0, 0),
            o
          );
        },
      },
    ]),
    n
  );
})(ve);
function hs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (hs = function (n) {
          return typeof n;
        })
      : (hs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    hs(e)
  );
}
function xD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function ED(e, t, n) {
  return t && hy(e.prototype, t), n && hy(e, n), e;
}
function PD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && xp(e, t);
}
function xp(e, t) {
  return (
    (xp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    xp(e, t)
  );
}
function OD(e) {
  var t = kD();
  return function () {
    var r = Nu(e),
      o;
    if (t) {
      var i = Nu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return DD(this, o);
  };
}
function DD(e, t) {
  return t && (hs(t) === "object" || typeof t == "function") ? t : Ep(e);
}
function Ep(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function kD() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Nu(e) {
  return (
    (Nu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Nu(e)
  );
}
function my(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var TD = (function (e) {
  PD(n, e);
  var t = OD(n);
  function n() {
    var r;
    xD(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      my(Ep(r), "priority", 70),
      my(Ep(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
      r
    );
  }
  return (
    ED(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "k":
              return Re(Be.hour24h, o);
            case "ko":
              return a.ordinalNumber(o, { unit: "hour" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 24;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          var s = a <= 24 ? a % 24 : a;
          return o.setUTCHours(s, 0, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function ms(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ms = function (n) {
          return typeof n;
        })
      : (ms = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ms(e)
  );
}
function AD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function RD(e, t, n) {
  return t && vy(e.prototype, t), n && vy(e, n), e;
}
function ND(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Pp(e, t);
}
function Pp(e, t) {
  return (
    (Pp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Pp(e, t)
  );
}
function MD(e) {
  var t = UD();
  return function () {
    var r = Mu(e),
      o;
    if (t) {
      var i = Mu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return ID(this, o);
  };
}
function ID(e, t) {
  return t && (ms(t) === "object" || typeof t == "function") ? t : Op(e);
}
function Op(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function UD() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Mu(e) {
  return (
    (Mu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Mu(e)
  );
}
function yy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var LD = (function (e) {
  ND(n, e);
  var t = MD(n);
  function n() {
    var r;
    AD(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      yy(Op(r), "priority", 60),
      yy(Op(r), "incompatibleTokens", ["t", "T"]),
      r
    );
  }
  return (
    RD(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "m":
              return Re(Be.minute, o);
            case "mo":
              return a.ordinalNumber(o, { unit: "minute" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 59;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCMinutes(a, 0, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function vs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (vs = function (n) {
          return typeof n;
        })
      : (vs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    vs(e)
  );
}
function FD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function BD(e, t, n) {
  return t && gy(e.prototype, t), n && gy(e, n), e;
}
function $D(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Dp(e, t);
}
function Dp(e, t) {
  return (
    (Dp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Dp(e, t)
  );
}
function jD(e) {
  var t = YD();
  return function () {
    var r = Iu(e),
      o;
    if (t) {
      var i = Iu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return HD(this, o);
  };
}
function HD(e, t) {
  return t && (vs(t) === "object" || typeof t == "function") ? t : kp(e);
}
function kp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function YD() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Iu(e) {
  return (
    (Iu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Iu(e)
  );
}
function wy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var VD = (function (e) {
  $D(n, e);
  var t = jD(n);
  function n() {
    var r;
    FD(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      wy(kp(r), "priority", 50),
      wy(kp(r), "incompatibleTokens", ["t", "T"]),
      r
    );
  }
  return (
    BD(n, [
      {
        key: "parse",
        value: function (o, i, a) {
          switch (i) {
            case "s":
              return Re(Be.second, o);
            case "so":
              return a.ordinalNumber(o, { unit: "second" });
            default:
              return Le(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 0 && i <= 59;
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCSeconds(a, 0), o;
        },
      },
    ]),
    n
  );
})(ve);
function ys(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ys = function (n) {
          return typeof n;
        })
      : (ys = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ys(e)
  );
}
function WD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function zD(e, t, n) {
  return t && Sy(e.prototype, t), n && Sy(e, n), e;
}
function KD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Tp(e, t);
}
function Tp(e, t) {
  return (
    (Tp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Tp(e, t)
  );
}
function qD(e) {
  var t = GD();
  return function () {
    var r = Uu(e),
      o;
    if (t) {
      var i = Uu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return QD(this, o);
  };
}
function QD(e, t) {
  return t && (ys(t) === "object" || typeof t == "function") ? t : Ap(e);
}
function Ap(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function GD() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Uu(e) {
  return (
    (Uu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Uu(e)
  );
}
function Cy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var JD = (function (e) {
  KD(n, e);
  var t = qD(n);
  function n() {
    var r;
    WD(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Cy(Ap(r), "priority", 30),
      Cy(Ap(r), "incompatibleTokens", ["t", "T"]),
      r
    );
  }
  return (
    zD(n, [
      {
        key: "parse",
        value: function (o, i) {
          var a = function (u) {
            return Math.floor(u * Math.pow(10, -i.length + 3));
          };
          return $e(Le(i.length, o), a);
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return o.setUTCMilliseconds(a), o;
        },
      },
    ]),
    n
  );
})(ve);
function gs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (gs = function (n) {
          return typeof n;
        })
      : (gs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    gs(e)
  );
}
function ZD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _y(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function XD(e, t, n) {
  return t && _y(e.prototype, t), n && _y(e, n), e;
}
function ek(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Rp(e, t);
}
function Rp(e, t) {
  return (
    (Rp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Rp(e, t)
  );
}
function tk(e) {
  var t = rk();
  return function () {
    var r = Lu(e),
      o;
    if (t) {
      var i = Lu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return nk(this, o);
  };
}
function nk(e, t) {
  return t && (gs(t) === "object" || typeof t == "function") ? t : Np(e);
}
function Np(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function rk() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Lu(e) {
  return (
    (Lu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Lu(e)
  );
}
function by(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var ok = (function (e) {
  ek(n, e);
  var t = tk(n);
  function n() {
    var r;
    ZD(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      by(Np(r), "priority", 10),
      by(Np(r), "incompatibleTokens", ["t", "T", "x"]),
      r
    );
  }
  return (
    XD(n, [
      {
        key: "parse",
        value: function (o, i) {
          switch (i) {
            case "X":
              return mn(hn.basicOptionalMinutes, o);
            case "XX":
              return mn(hn.basic, o);
            case "XXXX":
              return mn(hn.basicOptionalSeconds, o);
            case "XXXXX":
              return mn(hn.extendedOptionalSeconds, o);
            case "XXX":
            default:
              return mn(hn.extended, o);
          }
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return i.timestampIsSet ? o : new Date(o.getTime() - a);
        },
      },
    ]),
    n
  );
})(ve);
function ws(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ws = function (n) {
          return typeof n;
        })
      : (ws = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ws(e)
  );
}
function ik(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function ak(e, t, n) {
  return t && xy(e.prototype, t), n && xy(e, n), e;
}
function sk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Mp(e, t);
}
function Mp(e, t) {
  return (
    (Mp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Mp(e, t)
  );
}
function uk(e) {
  var t = ck();
  return function () {
    var r = Fu(e),
      o;
    if (t) {
      var i = Fu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return lk(this, o);
  };
}
function lk(e, t) {
  return t && (ws(t) === "object" || typeof t == "function") ? t : Ip(e);
}
function Ip(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ck() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Fu(e) {
  return (
    (Fu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Fu(e)
  );
}
function Ey(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var fk = (function (e) {
  sk(n, e);
  var t = uk(n);
  function n() {
    var r;
    ik(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Ey(Ip(r), "priority", 10),
      Ey(Ip(r), "incompatibleTokens", ["t", "T", "X"]),
      r
    );
  }
  return (
    ak(n, [
      {
        key: "parse",
        value: function (o, i) {
          switch (i) {
            case "x":
              return mn(hn.basicOptionalMinutes, o);
            case "xx":
              return mn(hn.basic, o);
            case "xxxx":
              return mn(hn.basicOptionalSeconds, o);
            case "xxxxx":
              return mn(hn.extendedOptionalSeconds, o);
            case "xxx":
            default:
              return mn(hn.extended, o);
          }
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return i.timestampIsSet ? o : new Date(o.getTime() - a);
        },
      },
    ]),
    n
  );
})(ve);
function Ss(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ss = function (n) {
          return typeof n;
        })
      : (Ss = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ss(e)
  );
}
function pk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Py(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function dk(e, t, n) {
  return t && Py(e.prototype, t), n && Py(e, n), e;
}
function hk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Up(e, t);
}
function Up(e, t) {
  return (
    (Up =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Up(e, t)
  );
}
function mk(e) {
  var t = yk();
  return function () {
    var r = Bu(e),
      o;
    if (t) {
      var i = Bu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return vk(this, o);
  };
}
function vk(e, t) {
  return t && (Ss(t) === "object" || typeof t == "function") ? t : Lp(e);
}
function Lp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function yk() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Bu(e) {
  return (
    (Bu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Bu(e)
  );
}
function Oy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var gk = (function (e) {
  hk(n, e);
  var t = mk(n);
  function n() {
    var r;
    pk(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      Oy(Lp(r), "priority", 40),
      Oy(Lp(r), "incompatibleTokens", "*"),
      r
    );
  }
  return (
    dk(n, [
      {
        key: "parse",
        value: function (o) {
          return Cw(o);
        },
      },
      {
        key: "set",
        value: function (o, i, a) {
          return [new Date(a * 1e3), { timestampIsSet: !0 }];
        },
      },
    ]),
    n
  );
})(ve);
function Cs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Cs = function (n) {
          return typeof n;
        })
      : (Cs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Cs(e)
  );
}
function wk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Sk(e, t, n) {
  return t && Dy(e.prototype, t), n && Dy(e, n), e;
}
function Ck(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Fp(e, t);
}
function Fp(e, t) {
  return (
    (Fp =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Fp(e, t)
  );
}
function _k(e) {
  var t = xk();
  return function () {
    var r = $u(e),
      o;
    if (t) {
      var i = $u(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return bk(this, o);
  };
}
function bk(e, t) {
  return t && (Cs(t) === "object" || typeof t == "function") ? t : Bp(e);
}
function Bp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function xk() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function $u(e) {
  return (
    ($u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    $u(e)
  );
}
function ky(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ek = (function (e) {
    Ck(n, e);
    var t = _k(n);
    function n() {
      var r;
      wk(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (r = t.call.apply(t, [this].concat(i))),
        ky(Bp(r), "priority", 20),
        ky(Bp(r), "incompatibleTokens", "*"),
        r
      );
    }
    return (
      Sk(n, [
        {
          key: "parse",
          value: function (o) {
            return Cw(o);
          },
        },
        {
          key: "set",
          value: function (o, i, a) {
            return [new Date(a), { timestampIsSet: !0 }];
          },
        },
      ]),
      n
    );
  })(ve),
  Pk = {
    G: new E3(),
    y: new N3(),
    Y: new $3(),
    R: new K3(),
    u: new eP(),
    Q: new sP(),
    q: new hP(),
    M: new CP(),
    L: new DP(),
    w: new UP(),
    I: new VP(),
    d: new XP(),
    D: new aO(),
    E: new dO(),
    e: new SO(),
    c: new OO(),
    i: new IO(),
    a: new HO(),
    b: new QO(),
    B: new nD(),
    h: new lD(),
    H: new vD(),
    K: new bD(),
    k: new TD(),
    m: new LD(),
    s: new VD(),
    S: new JD(),
    X: new ok(),
    x: new fk(),
    t: new gk(),
    T: new Ek(),
  };
function _s(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (_s = function (n) {
          return typeof n;
        })
      : (_s = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    _s(e)
  );
}
function Ty(e, t) {
  var n;
  if (typeof Symbol == "undefined" || e[Symbol.iterator] == null) {
    if (
      Array.isArray(e) ||
      (n = Ok(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      n && (e = n);
      var r = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (l) {
          throw l;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0,
    a = !1,
    s;
  return {
    s: function () {
      n = e[Symbol.iterator]();
    },
    n: function () {
      var l = n.next();
      return (i = l.done), l;
    },
    e: function (l) {
      (a = !0), (s = l);
    },
    f: function () {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    },
  };
}
function Ok(e, t) {
  if (!!e) {
    if (typeof e == "string") return Ay(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ay(e, t);
  }
}
function Ay(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Dk = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  kk = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Tk = /^'([^]*?)'?$/,
  Ak = /''/g,
  Rk = /\S/,
  Nk = /[a-zA-Z]/;
function lc(e, t, n, r) {
  var o, i, a, s, u, l, c, f, h, m, v, g, O, y, w, _, E, U;
  Z(3, arguments);
  var L = String(e),
    j = String(t),
    $ = Fr(),
    Q =
      (o =
        (i = r == null ? void 0 : r.locale) !== null && i !== void 0
          ? i
          : $.locale) !== null && o !== void 0
        ? o
        : vw;
  if (!Q.match) throw new RangeError("locale must contain match property");
  var k = he(
    (a =
      (s =
        (u =
          (l = r == null ? void 0 : r.firstWeekContainsDate) !== null &&
          l !== void 0
            ? l
            : r == null ||
              (c = r.locale) === null ||
              c === void 0 ||
              (f = c.options) === null ||
              f === void 0
            ? void 0
            : f.firstWeekContainsDate) !== null && u !== void 0
          ? u
          : $.firstWeekContainsDate) !== null && s !== void 0
        ? s
        : (h = $.locale) === null ||
          h === void 0 ||
          (m = h.options) === null ||
          m === void 0
        ? void 0
        : m.firstWeekContainsDate) !== null && a !== void 0
      ? a
      : 1
  );
  if (!(k >= 1 && k <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var I = he(
    (v =
      (g =
        (O =
          (y = r == null ? void 0 : r.weekStartsOn) !== null && y !== void 0
            ? y
            : r == null ||
              (w = r.locale) === null ||
              w === void 0 ||
              (_ = w.options) === null ||
              _ === void 0
            ? void 0
            : _.weekStartsOn) !== null && O !== void 0
          ? O
          : $.weekStartsOn) !== null && g !== void 0
        ? g
        : (E = $.locale) === null ||
          E === void 0 ||
          (U = E.options) === null ||
          U === void 0
        ? void 0
        : U.weekStartsOn) !== null && v !== void 0
      ? v
      : 0
  );
  if (!(I >= 0 && I <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (j === "") return L === "" ? ne(n) : new Date(NaN);
  var D = { firstWeekContainsDate: k, weekStartsOn: I, locale: Q },
    R = [new v3()],
    W = j
      .match(kk)
      .map(function (fe) {
        var se = fe[0];
        if (se in Ef) {
          var ye = Ef[se];
          return ye(fe, Q.formatLong);
        }
        return fe;
      })
      .join("")
      .match(Dk),
    F = [],
    J = Ty(W),
    ie;
  try {
    var K = function () {
      var se = ie.value;
      !(r != null && r.useAdditionalWeekYearTokens) && mw(se) && nu(se, j, e),
        !(r != null && r.useAdditionalDayOfYearTokens) &&
          hw(se) &&
          nu(se, j, e);
      var ye = se[0],
        Ge = Pk[ye];
      if (Ge) {
        var Ve = Ge.incompatibleTokens;
        if (Array.isArray(Ve)) {
          var st = F.find(function (ut) {
            return Ve.includes(ut.token) || ut.token === ye;
          });
          if (st)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(st.fullToken, "` and `")
                .concat(se, "` at the same time")
            );
        } else if (Ge.incompatibleTokens === "*" && F.length > 0)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              se,
              "` and any other token at the same time"
            )
          );
        F.push({ token: ye, fullToken: se });
        var ke = Ge.run(L, se, Q.match, D);
        if (!ke) return { v: new Date(NaN) };
        R.push(ke.setter), (L = ke.rest);
      } else {
        if (ye.match(Nk))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              ye +
              "`"
          );
        if (
          (se === "''" ? (se = "'") : ye === "'" && (se = Mk(se)),
          L.indexOf(se) === 0)
        )
          L = L.slice(se.length);
        else return { v: new Date(NaN) };
      }
    };
    for (J.s(); !(ie = J.n()).done; ) {
      var M = K();
      if (_s(M) === "object") return M.v;
    }
  } catch (fe) {
    J.e(fe);
  } finally {
    J.f();
  }
  if (L.length > 0 && Rk.test(L)) return new Date(NaN);
  var N = R.map(function (fe) {
      return fe.priority;
    })
      .sort(function (fe, se) {
        return se - fe;
      })
      .filter(function (fe, se, ye) {
        return ye.indexOf(fe) === se;
      })
      .map(function (fe) {
        return R.filter(function (se) {
          return se.priority === fe;
        }).sort(function (se, ye) {
          return ye.subPriority - se.subPriority;
        });
      })
      .map(function (fe) {
        return fe[0];
      }),
    G = ne(n);
  if (isNaN(G.getTime())) return new Date(NaN);
  var Y = lw(G, tu(G)),
    ee = {},
    re = Ty(N),
    ae;
  try {
    for (re.s(); !(ae = re.n()).done; ) {
      var ce = ae.value;
      if (!ce.validate(Y, D)) return new Date(NaN);
      var Ce = ce.set(Y, ee, D);
      Array.isArray(Ce) ? ((Y = Ce[0]), f3(ee, Ce[1])) : (Y = Ce);
    }
  } catch (fe) {
    re.e(fe);
  } finally {
    re.f();
  }
  return Y;
}
function Mk(e) {
  return e.match(Tk)[1].replace(Ak, "'");
}
function Ik(e, t) {
  var n;
  Z(1, arguments);
  var r = he(
    (n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0
      ? n
      : 2
  );
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var o = Bk(e),
    i;
  if (o.date) {
    var a = $k(o.date, r);
    i = jk(a.restDateString, a.year);
  }
  if (!i || isNaN(i.getTime())) return new Date(NaN);
  var s = i.getTime(),
    u = 0,
    l;
  if (o.time && ((u = Hk(o.time)), isNaN(u))) return new Date(NaN);
  if (o.timezone) {
    if (((l = Yk(o.timezone)), isNaN(l))) return new Date(NaN);
  } else {
    var c = new Date(s + u),
      f = new Date(0);
    return (
      f.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()),
      f.setHours(
        c.getUTCHours(),
        c.getUTCMinutes(),
        c.getUTCSeconds(),
        c.getUTCMilliseconds()
      ),
      f
    );
  }
  return new Date(s + u + l);
}
var wa = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  Uk = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  Lk =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Fk = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Bk(e) {
  var t = {},
    n = e.split(wa.dateTimeDelimiter),
    r;
  if (n.length > 2) return t;
  if (
    (/:/.test(n[0])
      ? (r = n[0])
      : ((t.date = n[0]),
        (r = n[1]),
        wa.timeZoneDelimiter.test(t.date) &&
          ((t.date = e.split(wa.timeZoneDelimiter)[0]),
          (r = e.substr(t.date.length, e.length)))),
    r)
  ) {
    var o = wa.timezone.exec(r);
    o ? ((t.time = r.replace(o[1], "")), (t.timezone = o[1])) : (t.time = r);
  }
  return t;
}
function $k(e, t) {
  var n = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + t) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + t) +
        "})$)"
    ),
    r = e.match(n);
  if (!r) return { year: NaN, restDateString: "" };
  var o = r[1] ? parseInt(r[1]) : null,
    i = r[2] ? parseInt(r[2]) : null;
  return {
    year: i === null ? o : i * 100,
    restDateString: e.slice((r[1] || r[2]).length),
  };
}
function jk(e, t) {
  if (t === null) return new Date(NaN);
  var n = e.match(Uk);
  if (!n) return new Date(NaN);
  var r = !!n[4],
    o = Wo(n[1]),
    i = Wo(n[2]) - 1,
    a = Wo(n[3]),
    s = Wo(n[4]),
    u = Wo(n[5]) - 1;
  if (r) return qk(t, s, u) ? Vk(t, s, u) : new Date(NaN);
  var l = new Date(0);
  return !zk(t, i, a) || !Kk(t, o)
    ? new Date(NaN)
    : (l.setUTCFullYear(t, i, Math.max(o, a)), l);
}
function Wo(e) {
  return e ? parseInt(e) : 1;
}
function Hk(e) {
  var t = e.match(Lk);
  if (!t) return NaN;
  var n = cc(t[1]),
    r = cc(t[2]),
    o = cc(t[3]);
  return Qk(n, r, o) ? n * uh + r * sh + o * 1e3 : NaN;
}
function cc(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function Yk(e) {
  if (e === "Z") return 0;
  var t = e.match(Fk);
  if (!t) return 0;
  var n = t[1] === "+" ? -1 : 1,
    r = parseInt(t[2]),
    o = (t[3] && parseInt(t[3])) || 0;
  return Gk(r, o) ? n * (r * uh + o * sh) : NaN;
}
function Vk(e, t, n) {
  var r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var o = r.getUTCDay() || 7,
    i = (t - 1) * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
var Wk = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function xw(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function zk(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (Wk[t] || (xw(e) ? 29 : 28));
}
function Kk(e, t) {
  return t >= 1 && t <= (xw(e) ? 366 : 365);
}
function qk(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Qk(e, t, n) {
  return e === 24
    ? t === 0 && n === 0
    : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Gk(e, t) {
  return t >= 0 && t <= 59;
}
function Jk(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    $p(e, t);
}
function $p(e, t) {
  return (
    ($p =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    $p(e, t)
  );
}
function Zk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ry(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Xk(e, t, n) {
  return e === t
    ? !0
    : e.correspondingElement
    ? e.correspondingElement.classList.contains(n)
    : e.classList.contains(n);
}
function eT(e, t, n) {
  if (e === t) return !0;
  for (; e.parentNode || e.host; ) {
    if (e.parentNode && Xk(e, t, n)) return !0;
    e = e.parentNode || e.host;
  }
  return e;
}
function tT(e) {
  return (
    document.documentElement.clientWidth <= e.clientX ||
    document.documentElement.clientHeight <= e.clientY
  );
}
var nT = function () {
  if (
    !(
      typeof window == "undefined" ||
      typeof window.addEventListener != "function"
    )
  ) {
    var t = !1,
      n = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        },
      }),
      r = function () {};
    return (
      window.addEventListener("testPassiveEventSupport", r, n),
      window.removeEventListener("testPassiveEventSupport", r, n),
      t
    );
  }
};
function rT(e) {
  return (
    e === void 0 && (e = 0),
    function () {
      return ++e;
    }
  );
}
var oT = rT(),
  jp,
  Sa = {},
  fc = {},
  iT = ["touchstart", "touchmove"],
  aT = "ignore-react-onclickoutside";
function Ny(e, t) {
  var n = null,
    r = iT.indexOf(t) !== -1;
  return r && jp && (n = { passive: !e.props.preventDefault }), n;
}
function bl(e, t) {
  var n,
    r,
    o = e.displayName || e.name || "Component";
  return (
    (r = n =
      (function (i) {
        Jk(a, i);
        function a(u) {
          var l;
          return (
            (l = i.call(this, u) || this),
            (l.__outsideClickHandler = function (c) {
              if (typeof l.__clickOutsideHandlerProp == "function") {
                l.__clickOutsideHandlerProp(c);
                return;
              }
              var f = l.getInstance();
              if (typeof f.props.handleClickOutside == "function") {
                f.props.handleClickOutside(c);
                return;
              }
              if (typeof f.handleClickOutside == "function") {
                f.handleClickOutside(c);
                return;
              }
              throw new Error(
                "WrappedComponent: " +
                  o +
                  " lacks a handleClickOutside(event) function for processing outside click events."
              );
            }),
            (l.__getComponentNode = function () {
              var c = l.getInstance();
              return t && typeof t.setClickOutsideRef == "function"
                ? t.setClickOutsideRef()(c)
                : typeof c.setClickOutsideRef == "function"
                ? c.setClickOutsideRef()
                : ji.exports.findDOMNode(c);
            }),
            (l.enableOnClickOutside = function () {
              if (!(typeof document == "undefined" || fc[l._uid])) {
                typeof jp == "undefined" && (jp = nT()), (fc[l._uid] = !0);
                var c = l.props.eventTypes;
                c.forEach || (c = [c]),
                  (Sa[l._uid] = function (f) {
                    if (
                      l.componentNode !== null &&
                      (l.props.preventDefault && f.preventDefault(),
                      l.props.stopPropagation && f.stopPropagation(),
                      !(l.props.excludeScrollbar && tT(f)))
                    ) {
                      var h =
                        (f.composed &&
                          f.composedPath &&
                          f.composedPath().shift()) ||
                        f.target;
                      eT(
                        h,
                        l.componentNode,
                        l.props.outsideClickIgnoreClass
                      ) === document && l.__outsideClickHandler(f);
                    }
                  }),
                  c.forEach(function (f) {
                    document.addEventListener(f, Sa[l._uid], Ny(Ry(l), f));
                  });
              }
            }),
            (l.disableOnClickOutside = function () {
              delete fc[l._uid];
              var c = Sa[l._uid];
              if (c && typeof document != "undefined") {
                var f = l.props.eventTypes;
                f.forEach || (f = [f]),
                  f.forEach(function (h) {
                    return document.removeEventListener(h, c, Ny(Ry(l), h));
                  }),
                  delete Sa[l._uid];
              }
            }),
            (l.getRef = function (c) {
              return (l.instanceRef = c);
            }),
            (l._uid = oT()),
            l
          );
        }
        var s = a.prototype;
        return (
          (s.getInstance = function () {
            if (e.prototype && !e.prototype.isReactComponent) return this;
            var l = this.instanceRef;
            return l.getInstance ? l.getInstance() : l;
          }),
          (s.componentDidMount = function () {
            if (!(typeof document == "undefined" || !document.createElement)) {
              var l = this.getInstance();
              if (
                t &&
                typeof t.handleClickOutside == "function" &&
                ((this.__clickOutsideHandlerProp = t.handleClickOutside(l)),
                typeof this.__clickOutsideHandlerProp != "function")
              )
                throw new Error(
                  "WrappedComponent: " +
                    o +
                    " lacks a function for processing outside click events specified by the handleClickOutside config option."
                );
              (this.componentNode = this.__getComponentNode()),
                !this.props.disableOnClickOutside &&
                  this.enableOnClickOutside();
            }
          }),
          (s.componentDidUpdate = function () {
            this.componentNode = this.__getComponentNode();
          }),
          (s.componentWillUnmount = function () {
            this.disableOnClickOutside();
          }),
          (s.render = function () {
            var l = this.props;
            l.excludeScrollbar;
            var c = Zk(l, ["excludeScrollbar"]);
            return (
              e.prototype && e.prototype.isReactComponent
                ? (c.ref = this.getRef)
                : (c.wrappedRef = this.getRef),
              (c.disableOnClickOutside = this.disableOnClickOutside),
              (c.enableOnClickOutside = this.enableOnClickOutside),
              T.exports.createElement(e, c)
            );
          }),
          a
        );
      })(T.exports.Component)),
    (n.displayName = "OnClickOutside(" + o + ")"),
    (n.defaultProps = {
      eventTypes: ["mousedown", "touchstart"],
      excludeScrollbar: (t && t.excludeScrollbar) || !1,
      outsideClickIgnoreClass: aT,
      preventDefault: !1,
      stopPropagation: !1,
    }),
    (n.getClass = function () {
      return e.getClass ? e.getClass() : e;
    }),
    r
  );
}
var Ew = T.exports.createContext(),
  Pw = T.exports.createContext();
function sT(e) {
  var t = e.children,
    n = T.exports.useState(null),
    r = n[0],
    o = n[1],
    i = T.exports.useRef(!1);
  T.exports.useEffect(function () {
    return function () {
      i.current = !0;
    };
  }, []);
  var a = T.exports.useCallback(function (s) {
    i.current || o(s);
  }, []);
  return T.exports.createElement(
    Ew.Provider,
    { value: r },
    T.exports.createElement(Pw.Provider, { value: a }, t)
  );
}
var Ow = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  Dw = function (t) {
    if (typeof t == "function") {
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return t.apply(void 0, r);
    }
  },
  Hp = function (t, n) {
    if (typeof t == "function") return Dw(t, n);
    t != null && (t.current = n);
  },
  My = function (t) {
    return t.reduce(function (n, r) {
      var o = r[0],
        i = r[1];
      return (n[o] = i), n;
    }, {});
  },
  Iy =
    typeof window != "undefined" &&
    window.document &&
    window.document.createElement
      ? T.exports.useLayoutEffect
      : T.exports.useEffect,
  Dt = "top",
  Qt = "bottom",
  Gt = "right",
  kt = "left",
  fh = "auto",
  Ji = [Dt, Qt, Gt, kt],
  go = "start",
  Fi = "end",
  uT = "clippingParents",
  kw = "viewport",
  zo = "popper",
  lT = "reference",
  Uy = Ji.reduce(function (e, t) {
    return e.concat([t + "-" + go, t + "-" + Fi]);
  }, []),
  Tw = [].concat(Ji, [fh]).reduce(function (e, t) {
    return e.concat([t, t + "-" + go, t + "-" + Fi]);
  }, []),
  cT = "beforeRead",
  fT = "read",
  pT = "afterRead",
  dT = "beforeMain",
  hT = "main",
  mT = "afterMain",
  vT = "beforeWrite",
  yT = "write",
  gT = "afterWrite",
  wT = [cT, fT, pT, dT, hT, mT, vT, yT, gT];
function Cn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Ir(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function zt(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ph(e) {
  if (typeof ShadowRoot == "undefined") return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ST(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !zt(i) ||
      !Cn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (a) {
        var s = o[a];
        s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function CT(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          s = a.reduce(function (u, l) {
            return (u[l] = ""), u;
          }, {});
        !zt(o) ||
          !Cn(o) ||
          (Object.assign(o.style, s),
          Object.keys(i).forEach(function (u) {
            o.removeAttribute(u);
          }));
      });
    }
  );
}
var _T = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ST,
  effect: CT,
  requires: ["computeStyles"],
};
function Sn(e) {
  return e.split("-")[0];
}
var Er = Math.max,
  ju = Math.min,
  wo = Math.round;
function Yp() {
  var e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Aw() {
  return !/^((?!chrome|android).)*safari/i.test(Yp());
}
function So(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    zt(e) &&
    ((o = (e.offsetWidth > 0 && wo(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && wo(r.height) / e.offsetHeight) || 1));
  var a = Ir(e) ? Jt(e) : window,
    s = a.visualViewport,
    u = !Aw() && n,
    l = (r.left + (u && s ? s.offsetLeft : 0)) / o,
    c = (r.top + (u && s ? s.offsetTop : 0)) / i,
    f = r.width / o,
    h = r.height / i;
  return {
    width: f,
    height: h,
    top: c,
    right: l + f,
    bottom: c + h,
    left: l,
    x: l,
    y: c,
  };
}
function dh(e) {
  var t = So(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Rw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ph(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function In(e) {
  return Jt(e).getComputedStyle(e);
}
function bT(e) {
  return ["table", "td", "th"].indexOf(Cn(e)) >= 0;
}
function hr(e) {
  return ((Ir(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function xl(e) {
  return Cn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (ph(e) ? e.host : null) || hr(e);
}
function Ly(e) {
  return !zt(e) || In(e).position === "fixed" ? null : e.offsetParent;
}
function xT(e) {
  var t = /firefox/i.test(Yp()),
    n = /Trident/i.test(Yp());
  if (n && zt(e)) {
    var r = In(e);
    if (r.position === "fixed") return null;
  }
  var o = xl(e);
  for (ph(o) && (o = o.host); zt(o) && ["html", "body"].indexOf(Cn(o)) < 0; ) {
    var i = In(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function Zi(e) {
  for (var t = Jt(e), n = Ly(e); n && bT(n) && In(n).position === "static"; )
    n = Ly(n);
  return n &&
    (Cn(n) === "html" || (Cn(n) === "body" && In(n).position === "static"))
    ? t
    : n || xT(e) || t;
}
function hh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ci(e, t, n) {
  return Er(e, ju(t, n));
}
function ET(e, t, n) {
  var r = ci(e, t, n);
  return r > n ? n : r;
}
function Nw() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Mw(e) {
  return Object.assign({}, Nw(), e);
}
function Iw(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var PT = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    Mw(typeof t != "number" ? t : Iw(t, Ji))
  );
};
function OT(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    s = Sn(n.placement),
    u = hh(s),
    l = [kt, Gt].indexOf(s) >= 0,
    c = l ? "height" : "width";
  if (!(!i || !a)) {
    var f = PT(o.padding, n),
      h = dh(i),
      m = u === "y" ? Dt : kt,
      v = u === "y" ? Qt : Gt,
      g =
        n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c],
      O = a[u] - n.rects.reference[u],
      y = Zi(i),
      w = y ? (u === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      _ = g / 2 - O / 2,
      E = f[m],
      U = w - h[c] - f[v],
      L = w / 2 - h[c] / 2 + _,
      j = ci(E, L, U),
      $ = u;
    n.modifiersData[r] = ((t = {}), (t[$] = j), (t.centerOffset = j - L), t);
  }
}
function DT(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      !Rw(t.elements.popper, o) ||
      (t.elements.arrow = o));
}
var kT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: OT,
  effect: DT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Co(e) {
  return e.split("-")[1];
}
var TT = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function AT(e) {
  var t = e.x,
    n = e.y,
    r = window,
    o = r.devicePixelRatio || 1;
  return { x: wo(t * o) / o || 0, y: wo(n * o) / o || 0 };
}
function Fy(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    u = e.gpuAcceleration,
    l = e.adaptive,
    c = e.roundOffsets,
    f = e.isFixed,
    h = a.x,
    m = h === void 0 ? 0 : h,
    v = a.y,
    g = v === void 0 ? 0 : v,
    O = typeof c == "function" ? c({ x: m, y: g }) : { x: m, y: g };
  (m = O.x), (g = O.y);
  var y = a.hasOwnProperty("x"),
    w = a.hasOwnProperty("y"),
    _ = kt,
    E = Dt,
    U = window;
  if (l) {
    var L = Zi(n),
      j = "clientHeight",
      $ = "clientWidth";
    if (
      (L === Jt(n) &&
        ((L = hr(n)),
        In(L).position !== "static" &&
          s === "absolute" &&
          ((j = "scrollHeight"), ($ = "scrollWidth"))),
      (L = L),
      o === Dt || ((o === kt || o === Gt) && i === Fi))
    ) {
      E = Qt;
      var Q = f && L === U && U.visualViewport ? U.visualViewport.height : L[j];
      (g -= Q - r.height), (g *= u ? 1 : -1);
    }
    if (o === kt || ((o === Dt || o === Qt) && i === Fi)) {
      _ = Gt;
      var k = f && L === U && U.visualViewport ? U.visualViewport.width : L[$];
      (m -= k - r.width), (m *= u ? 1 : -1);
    }
  }
  var I = Object.assign({ position: s }, l && TT),
    D = c === !0 ? AT({ x: m, y: g }) : { x: m, y: g };
  if (((m = D.x), (g = D.y), u)) {
    var R;
    return Object.assign(
      {},
      I,
      ((R = {}),
      (R[E] = w ? "0" : ""),
      (R[_] = y ? "0" : ""),
      (R.transform =
        (U.devicePixelRatio || 1) <= 1
          ? "translate(" + m + "px, " + g + "px)"
          : "translate3d(" + m + "px, " + g + "px, 0)"),
      R)
    );
  }
  return Object.assign(
    {},
    I,
    ((t = {}),
    (t[E] = w ? g + "px" : ""),
    (t[_] = y ? m + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function RT(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    s = n.roundOffsets,
    u = s === void 0 ? !0 : s,
    l = {
      placement: Sn(t.placement),
      variation: Co(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Fy(
        Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: u,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Fy(
          Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: u,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
var NT = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: RT,
    data: {},
  },
  Ca = { passive: !0 };
function MT(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    s = a === void 0 ? !0 : a,
    u = Jt(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      l.forEach(function (c) {
        c.addEventListener("scroll", n.update, Ca);
      }),
    s && u.addEventListener("resize", n.update, Ca),
    function () {
      i &&
        l.forEach(function (c) {
          c.removeEventListener("scroll", n.update, Ca);
        }),
        s && u.removeEventListener("resize", n.update, Ca);
    }
  );
}
var IT = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: MT,
    data: {},
  },
  UT = { left: "right", right: "left", bottom: "top", top: "bottom" };
function bs(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return UT[t];
  });
}
var LT = { start: "end", end: "start" };
function By(e) {
  return e.replace(/start|end/g, function (t) {
    return LT[t];
  });
}
function mh(e) {
  var t = Jt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function vh(e) {
  return So(hr(e)).left + mh(e).scrollLeft;
}
function FT(e, t) {
  var n = Jt(e),
    r = hr(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    s = 0,
    u = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var l = Aw();
    (l || (!l && t === "fixed")) && ((s = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: i, height: a, x: s + vh(e), y: u };
}
function BT(e) {
  var t,
    n = hr(e),
    r = mh(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Er(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Er(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -r.scrollLeft + vh(e),
    u = -r.scrollTop;
  return (
    In(o || n).direction === "rtl" &&
      (s += Er(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: u }
  );
}
function yh(e) {
  var t = In(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Uw(e) {
  return ["html", "body", "#document"].indexOf(Cn(e)) >= 0
    ? e.ownerDocument.body
    : zt(e) && yh(e)
    ? e
    : Uw(xl(e));
}
function fi(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Uw(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Jt(r),
    a = o ? [i].concat(i.visualViewport || [], yh(r) ? r : []) : r,
    s = t.concat(a);
  return o ? s : s.concat(fi(xl(a)));
}
function Vp(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function $T(e, t) {
  var n = So(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function $y(e, t, n) {
  return t === kw ? Vp(FT(e, n)) : Ir(t) ? $T(t, n) : Vp(BT(hr(e)));
}
function jT(e) {
  var t = fi(xl(e)),
    n = ["absolute", "fixed"].indexOf(In(e).position) >= 0,
    r = n && zt(e) ? Zi(e) : e;
  return Ir(r)
    ? t.filter(function (o) {
        return Ir(o) && Rw(o, r) && Cn(o) !== "body";
      })
    : [];
}
function HT(e, t, n, r) {
  var o = t === "clippingParents" ? jT(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    s = i.reduce(function (u, l) {
      var c = $y(e, l, r);
      return (
        (u.top = Er(c.top, u.top)),
        (u.right = ju(c.right, u.right)),
        (u.bottom = ju(c.bottom, u.bottom)),
        (u.left = Er(c.left, u.left)),
        u
      );
    }, $y(e, a, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Lw(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Sn(r) : null,
    i = r ? Co(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    u;
  switch (o) {
    case Dt:
      u = { x: a, y: t.y - n.height };
      break;
    case Qt:
      u = { x: a, y: t.y + t.height };
      break;
    case Gt:
      u = { x: t.x + t.width, y: s };
      break;
    case kt:
      u = { x: t.x - n.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var l = o ? hh(o) : null;
  if (l != null) {
    var c = l === "y" ? "height" : "width";
    switch (i) {
      case go:
        u[l] = u[l] - (t[c] / 2 - n[c] / 2);
        break;
      case Fi:
        u[l] = u[l] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function Bi(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    s = n.boundary,
    u = s === void 0 ? uT : s,
    l = n.rootBoundary,
    c = l === void 0 ? kw : l,
    f = n.elementContext,
    h = f === void 0 ? zo : f,
    m = n.altBoundary,
    v = m === void 0 ? !1 : m,
    g = n.padding,
    O = g === void 0 ? 0 : g,
    y = Mw(typeof O != "number" ? O : Iw(O, Ji)),
    w = h === zo ? lT : zo,
    _ = e.rects.popper,
    E = e.elements[v ? w : h],
    U = HT(Ir(E) ? E : E.contextElement || hr(e.elements.popper), u, c, a),
    L = So(e.elements.reference),
    j = Lw({ reference: L, element: _, strategy: "absolute", placement: o }),
    $ = Vp(Object.assign({}, _, j)),
    Q = h === zo ? $ : L,
    k = {
      top: U.top - Q.top + y.top,
      bottom: Q.bottom - U.bottom + y.bottom,
      left: U.left - Q.left + y.left,
      right: Q.right - U.right + y.right,
    },
    I = e.modifiersData.offset;
  if (h === zo && I) {
    var D = I[o];
    Object.keys(k).forEach(function (R) {
      var W = [Gt, Qt].indexOf(R) >= 0 ? 1 : -1,
        F = [Dt, Qt].indexOf(R) >= 0 ? "y" : "x";
      k[R] += D[F] * W;
    });
  }
  return k;
}
function YT(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    s = n.flipVariations,
    u = n.allowedAutoPlacements,
    l = u === void 0 ? Tw : u,
    c = Co(r),
    f = c
      ? s
        ? Uy
        : Uy.filter(function (v) {
            return Co(v) === c;
          })
      : Ji,
    h = f.filter(function (v) {
      return l.indexOf(v) >= 0;
    });
  h.length === 0 && (h = f);
  var m = h.reduce(function (v, g) {
    return (
      (v[g] = Bi(e, { placement: g, boundary: o, rootBoundary: i, padding: a })[
        Sn(g)
      ]),
      v
    );
  }, {});
  return Object.keys(m).sort(function (v, g) {
    return m[v] - m[g];
  });
}
function VT(e) {
  if (Sn(e) === fh) return [];
  var t = bs(e);
  return [By(e), t, By(t)];
}
function WT(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        s = a === void 0 ? !0 : a,
        u = n.fallbackPlacements,
        l = n.padding,
        c = n.boundary,
        f = n.rootBoundary,
        h = n.altBoundary,
        m = n.flipVariations,
        v = m === void 0 ? !0 : m,
        g = n.allowedAutoPlacements,
        O = t.options.placement,
        y = Sn(O),
        w = y === O,
        _ = u || (w || !v ? [bs(O)] : VT(O)),
        E = [O].concat(_).reduce(function (re, ae) {
          return re.concat(
            Sn(ae) === fh
              ? YT(t, {
                  placement: ae,
                  boundary: c,
                  rootBoundary: f,
                  padding: l,
                  flipVariations: v,
                  allowedAutoPlacements: g,
                })
              : ae
          );
        }, []),
        U = t.rects.reference,
        L = t.rects.popper,
        j = new Map(),
        $ = !0,
        Q = E[0],
        k = 0;
      k < E.length;
      k++
    ) {
      var I = E[k],
        D = Sn(I),
        R = Co(I) === go,
        W = [Dt, Qt].indexOf(D) >= 0,
        F = W ? "width" : "height",
        J = Bi(t, {
          placement: I,
          boundary: c,
          rootBoundary: f,
          altBoundary: h,
          padding: l,
        }),
        ie = W ? (R ? Gt : kt) : R ? Qt : Dt;
      U[F] > L[F] && (ie = bs(ie));
      var K = bs(ie),
        M = [];
      if (
        (i && M.push(J[D] <= 0),
        s && M.push(J[ie] <= 0, J[K] <= 0),
        M.every(function (re) {
          return re;
        }))
      ) {
        (Q = I), ($ = !1);
        break;
      }
      j.set(I, M);
    }
    if ($)
      for (
        var N = v ? 3 : 1,
          G = function (ae) {
            var ce = E.find(function (Ce) {
              var fe = j.get(Ce);
              if (fe)
                return fe.slice(0, ae).every(function (se) {
                  return se;
                });
            });
            if (ce) return (Q = ce), "break";
          },
          Y = N;
        Y > 0;
        Y--
      ) {
        var ee = G(Y);
        if (ee === "break") break;
      }
    t.placement !== Q &&
      ((t.modifiersData[r]._skip = !0), (t.placement = Q), (t.reset = !0));
  }
}
var zT = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: WT,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function jy(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Hy(e) {
  return [Dt, Gt, Qt, kt].some(function (t) {
    return e[t] >= 0;
  });
}
function KT(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = Bi(t, { elementContext: "reference" }),
    s = Bi(t, { altBoundary: !0 }),
    u = jy(a, r),
    l = jy(s, o, i),
    c = Hy(u),
    f = Hy(l);
  (t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: l,
    isReferenceHidden: c,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": f,
    }));
}
var qT = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: KT,
};
function QT(e, t, n) {
  var r = Sn(e),
    o = [kt, Dt].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    s = i[1];
  return (
    (a = a || 0),
    (s = (s || 0) * o),
    [kt, Gt].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
  );
}
function GT(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = Tw.reduce(function (c, f) {
      return (c[f] = QT(f, t.rects, i)), c;
    }, {}),
    s = a[t.placement],
    u = s.x,
    l = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[r] = a);
}
var JT = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: GT,
};
function ZT(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Lw({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var XT = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ZT,
  data: {},
};
function eA(e) {
  return e === "x" ? "y" : "x";
}
function tA(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    s = a === void 0 ? !1 : a,
    u = n.boundary,
    l = n.rootBoundary,
    c = n.altBoundary,
    f = n.padding,
    h = n.tether,
    m = h === void 0 ? !0 : h,
    v = n.tetherOffset,
    g = v === void 0 ? 0 : v,
    O = Bi(t, { boundary: u, rootBoundary: l, padding: f, altBoundary: c }),
    y = Sn(t.placement),
    w = Co(t.placement),
    _ = !w,
    E = hh(y),
    U = eA(E),
    L = t.modifiersData.popperOffsets,
    j = t.rects.reference,
    $ = t.rects.popper,
    Q =
      typeof g == "function"
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    k =
      typeof Q == "number"
        ? { mainAxis: Q, altAxis: Q }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, Q),
    I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    D = { x: 0, y: 0 };
  if (!!L) {
    if (i) {
      var R,
        W = E === "y" ? Dt : kt,
        F = E === "y" ? Qt : Gt,
        J = E === "y" ? "height" : "width",
        ie = L[E],
        K = ie + O[W],
        M = ie - O[F],
        N = m ? -$[J] / 2 : 0,
        G = w === go ? j[J] : $[J],
        Y = w === go ? -$[J] : -j[J],
        ee = t.elements.arrow,
        re = m && ee ? dh(ee) : { width: 0, height: 0 },
        ae = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Nw(),
        ce = ae[W],
        Ce = ae[F],
        fe = ci(0, j[J], re[J]),
        se = _ ? j[J] / 2 - N - fe - ce - k.mainAxis : G - fe - ce - k.mainAxis,
        ye = _
          ? -j[J] / 2 + N + fe + Ce + k.mainAxis
          : Y + fe + Ce + k.mainAxis,
        Ge = t.elements.arrow && Zi(t.elements.arrow),
        Ve = Ge ? (E === "y" ? Ge.clientTop || 0 : Ge.clientLeft || 0) : 0,
        st = (R = I == null ? void 0 : I[E]) != null ? R : 0,
        ke = ie + se - st - Ve,
        ut = ie + ye - st,
        We = ci(m ? ju(K, ke) : K, ie, m ? Er(M, ut) : M);
      (L[E] = We), (D[E] = We - ie);
    }
    if (s) {
      var be,
        S = E === "x" ? Dt : kt,
        d = E === "x" ? Qt : Gt,
        p = L[U],
        C = U === "y" ? "height" : "width",
        A = p + O[S],
        V = p - O[d],
        z = [Dt, kt].indexOf(y) !== -1,
        ue = (be = I == null ? void 0 : I[U]) != null ? be : 0,
        ge = z ? A : p - j[C] - $[C] - ue + k.altAxis,
        _e = z ? p + j[C] + $[C] - ue - k.altAxis : V,
        ze = m && z ? ET(ge, p, _e) : ci(m ? ge : A, p, m ? _e : V);
      (L[U] = ze), (D[U] = ze - p);
    }
    t.modifiersData[r] = D;
  }
}
var nA = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: tA,
  requiresIfExists: ["offset"],
};
function rA(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function oA(e) {
  return e === Jt(e) || !zt(e) ? mh(e) : rA(e);
}
function iA(e) {
  var t = e.getBoundingClientRect(),
    n = wo(t.width) / e.offsetWidth || 1,
    r = wo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function aA(e, t, n) {
  n === void 0 && (n = !1);
  var r = zt(t),
    o = zt(t) && iA(t),
    i = hr(t),
    a = So(e, o, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Cn(t) !== "body" || yh(i)) && (s = oA(t)),
      zt(t)
        ? ((u = So(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : i && (u.x = vh(i))),
    {
      x: a.left + s.scrollLeft - u.x,
      y: a.top + s.scrollTop - u.y,
      width: a.width,
      height: a.height,
    }
  );
}
function sA(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!n.has(s)) {
        var u = t.get(s);
        u && o(u);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function uA(e) {
  var t = sA(e);
  return wT.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function lA(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function cA(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Yy = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Vy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function fA(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? Yy : o;
  return function (s, u, l) {
    l === void 0 && (l = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Yy, i),
        modifiersData: {},
        elements: { reference: s, popper: u },
        attributes: {},
        styles: {},
      },
      f = [],
      h = !1,
      m = {
        state: c,
        setOptions: function (y) {
          var w = typeof y == "function" ? y(c.options) : y;
          g(),
            (c.options = Object.assign({}, i, c.options, w)),
            (c.scrollParents = {
              reference: Ir(s)
                ? fi(s)
                : s.contextElement
                ? fi(s.contextElement)
                : [],
              popper: fi(u),
            });
          var _ = uA(cA([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = _.filter(function (E) {
              return E.enabled;
            })),
            v(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var y = c.elements,
              w = y.reference,
              _ = y.popper;
            if (!!Vy(w, _)) {
              (c.rects = {
                reference: aA(w, Zi(_), c.options.strategy === "fixed"),
                popper: dh(_),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (k) {
                  return (c.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var E = 0; E < c.orderedModifiers.length; E++) {
                if (c.reset === !0) {
                  (c.reset = !1), (E = -1);
                  continue;
                }
                var U = c.orderedModifiers[E],
                  L = U.fn,
                  j = U.options,
                  $ = j === void 0 ? {} : j,
                  Q = U.name;
                typeof L == "function" &&
                  (c = L({ state: c, options: $, name: Q, instance: m }) || c);
              }
            }
          }
        },
        update: lA(function () {
          return new Promise(function (O) {
            m.forceUpdate(), O(c);
          });
        }),
        destroy: function () {
          g(), (h = !0);
        },
      };
    if (!Vy(s, u)) return m;
    m.setOptions(l).then(function (O) {
      !h && l.onFirstUpdate && l.onFirstUpdate(O);
    });
    function v() {
      c.orderedModifiers.forEach(function (O) {
        var y = O.name,
          w = O.options,
          _ = w === void 0 ? {} : w,
          E = O.effect;
        if (typeof E == "function") {
          var U = E({ state: c, name: y, instance: m, options: _ }),
            L = function () {};
          f.push(U || L);
        }
      });
    }
    function g() {
      f.forEach(function (O) {
        return O();
      }),
        (f = []);
    }
    return m;
  };
}
var pA = [IT, XT, NT, _T, JT, zT, nA, kT, qT],
  dA = fA({ defaultModifiers: pA }),
  hA = typeof Element != "undefined",
  mA = typeof Map == "function",
  vA = typeof Set == "function",
  yA = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function xs(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!xs(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (mA && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!xs(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (vA && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (yA && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (hA && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !xs(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var gA = function (t, n) {
    try {
      return xs(t, n);
    } catch (r) {
      if ((r.message || "").match(/stack|recursion/i))
        return (
          console.warn("react-fast-compare cannot handle circular refs"), !1
        );
      throw r;
    }
  },
  wA = [],
  SA = function (t, n, r) {
    r === void 0 && (r = {});
    var o = T.exports.useRef(null),
      i = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || "bottom",
        strategy: r.strategy || "absolute",
        modifiers: r.modifiers || wA,
      },
      a = T.exports.useState({
        styles: {
          popper: { position: i.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = a[0],
      u = a[1],
      l = T.exports.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (m) {
            var v = m.state,
              g = Object.keys(v.elements);
            ji.exports.flushSync(function () {
              u({
                styles: My(
                  g.map(function (O) {
                    return [O, v.styles[O] || {}];
                  })
                ),
                attributes: My(
                  g.map(function (O) {
                    return [O, v.attributes[O]];
                  })
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      c = T.exports.useMemo(
        function () {
          var h = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [
              l,
              { name: "applyStyles", enabled: !1 },
            ]),
          };
          return gA(o.current, h) ? o.current || h : ((o.current = h), h);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, l]
      ),
      f = T.exports.useRef();
    return (
      Iy(
        function () {
          f.current && f.current.setOptions(c);
        },
        [c]
      ),
      Iy(
        function () {
          if (!(t == null || n == null)) {
            var h = r.createPopper || dA,
              m = h(t, n, c);
            return (
              (f.current = m),
              function () {
                m.destroy(), (f.current = null);
              }
            );
          }
        },
        [t, n, r.createPopper]
      ),
      {
        state: f.current ? f.current.state : null,
        styles: s.styles,
        attributes: s.attributes,
        update: f.current ? f.current.update : null,
        forceUpdate: f.current ? f.current.forceUpdate : null,
      }
    );
  },
  CA = function () {},
  _A = function () {
    return Promise.resolve(null);
  },
  bA = [];
function xA(e) {
  var t = e.placement,
    n = t === void 0 ? "bottom" : t,
    r = e.strategy,
    o = r === void 0 ? "absolute" : r,
    i = e.modifiers,
    a = i === void 0 ? bA : i,
    s = e.referenceElement,
    u = e.onFirstUpdate,
    l = e.innerRef,
    c = e.children,
    f = T.exports.useContext(Ew),
    h = T.exports.useState(null),
    m = h[0],
    v = h[1],
    g = T.exports.useState(null),
    O = g[0],
    y = g[1];
  T.exports.useEffect(
    function () {
      Hp(l, m);
    },
    [l, m]
  );
  var w = T.exports.useMemo(
      function () {
        return {
          placement: n,
          strategy: o,
          onFirstUpdate: u,
          modifiers: [].concat(a, [
            { name: "arrow", enabled: O != null, options: { element: O } },
          ]),
        };
      },
      [n, o, u, a, O]
    ),
    _ = SA(s || f, m, w),
    E = _.state,
    U = _.styles,
    L = _.forceUpdate,
    j = _.update,
    $ = T.exports.useMemo(
      function () {
        return {
          ref: v,
          style: U.popper,
          placement: E ? E.placement : n,
          hasPopperEscaped:
            E && E.modifiersData.hide
              ? E.modifiersData.hide.hasPopperEscaped
              : null,
          isReferenceHidden:
            E && E.modifiersData.hide
              ? E.modifiersData.hide.isReferenceHidden
              : null,
          arrowProps: { style: U.arrow, ref: y },
          forceUpdate: L || CA,
          update: j || _A,
        };
      },
      [v, y, n, E, U, j, L]
    );
  return Ow(c)($);
}
function EA(e) {
  var t = e.children,
    n = e.innerRef,
    r = T.exports.useContext(Pw),
    o = T.exports.useCallback(
      function (i) {
        Hp(n, i), Dw(r, i);
      },
      [n, r]
    );
  return (
    T.exports.useEffect(function () {
      return function () {
        return Hp(n, null);
      };
    }, []),
    T.exports.useEffect(function () {}, [r]),
    Ow(t)({ ref: o })
  );
}
function Wy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function zy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wy(Object(n), !0).forEach(function (r) {
          x(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Wy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Fw(e) {
  return (Fw =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(e);
}
function et(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ky(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function tt(e, t, n) {
  return (
    t && Ky(e.prototype, t),
    n && Ky(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function x(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function El() {
  return (El =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function nt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  Object.defineProperty(e, "prototype", {
    value: Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    }),
    writable: !1,
  }),
    t && Bw(e, t);
}
function Wp(e) {
  return (Wp = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(e);
}
function Bw(e, t) {
  return (Bw =
    Object.setPrototypeOf ||
    function (n, r) {
      return (n.__proto__ = r), n;
    })(e, t);
}
function P(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function PA(e, t) {
  if (t && (typeof t == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return P(e);
}
function rt(e) {
  var t = (function () {
    if (
      typeof Reflect == "undefined" ||
      !Reflect.construct ||
      Reflect.construct.sham
    )
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  })();
  return function () {
    var n,
      r = Wp(e);
    if (t) {
      var o = Wp(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return PA(this, n);
  };
}
function $w(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return pc(t);
    })(e) ||
    (function (t) {
      if (
        (typeof Symbol != "undefined" && t[Symbol.iterator] != null) ||
        t["@@iterator"] != null
      )
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (!!t) {
        if (typeof t == "string") return pc(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === "Object" && t.constructor && (r = t.constructor.name),
          r === "Map" || r === "Set")
        )
          return Array.from(t);
        if (
          r === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return pc(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function pc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qy(e, t) {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}
function Qy(e, t) {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}
var OA = {
    p: Qy,
    P: function (e, t) {
      var n,
        r = e.match(/(P+)(p+)?/) || [],
        o = r[1],
        i = r[2];
      if (!i) return qy(e, t);
      switch (o) {
        case "P":
          n = t.dateTime({ width: "short" });
          break;
        case "PP":
          n = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          n = t.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          n = t.dateTime({ width: "full" });
      }
      return n.replace("{{date}}", qy(o, t)).replace("{{time}}", Qy(i, t));
    },
  },
  DA = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function Ye(e) {
  var t = e
    ? typeof e == "string" || e instanceof String
      ? Ik(e)
      : ne(e)
    : new Date();
  return Vn(t) ? t : null;
}
function kA(e, t, n, r, o) {
  var i = null,
    a = ar(n) || ar(Or()),
    s = !0;
  return Array.isArray(t)
    ? (t.forEach(function (u) {
        var l = lc(e, u, new Date(), { locale: a });
        r && (s = Vn(l, o) && e === je(l, u, n)), Vn(l, o) && s && (i = l);
      }),
      i)
    : ((i = lc(e, t, new Date(), { locale: a })),
      r
        ? (s = Vn(i) && e === je(i, t, n))
        : Vn(i) ||
          ((t = t
            .match(DA)
            .map(function (u) {
              var l = u[0];
              return l === "p" || l === "P"
                ? a
                  ? (0, OA[l])(u, a.formatLong)
                  : l
                : u;
            })
            .join("")),
          e.length > 0 && (i = lc(e, t.slice(0, e.length), new Date())),
          Vn(i) || (i = new Date(e))),
      Vn(i) && s ? i : null);
}
function Vn(e, t) {
  return (t = t || new Date("1/1/1000")), uw(e) && !Dn(e, t);
}
function je(e, t, n) {
  if (n === "en") return gv(e, t, { awareOfUnicodeTokens: !0 });
  var r = ar(n);
  return (
    n &&
      !r &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          n,
          '"].'
        )
      ),
    !r && Or() && ar(Or()) && (r = ar(Or())),
    gv(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
  );
}
function dc(e, t) {
  var n = t.dateFormat,
    r = t.locale;
  return (e && je(e, Array.isArray(n) ? n[0] : n, r)) || "";
}
function Gy(e, t) {
  var n = t.hour,
    r = n === void 0 ? 0 : n,
    o = t.minute,
    i = o === void 0 ? 0 : o,
    a = t.second;
  return li(ui(t3(e, a === void 0 ? 0 : a), i), r);
}
function TA(e, t) {
  var n = (t && ar(t)) || (Or() && ar(Or()));
  return e3(e, n ? { locale: n } : null);
}
function AA(e, t) {
  return je(e, "ddd", t);
}
function RA(e) {
  return wn(e);
}
function gh(e, t, n) {
  var r = ar(t || Or());
  return yw(e, { locale: r, weekStartsOn: n });
}
function Pr(e) {
  return o3(e);
}
function Zo(e) {
  return i3(e);
}
function NA(e) {
  return kf(e);
}
function jw(e, t) {
  return e && t ? l3(e, t) : !e && !t;
}
function Gn(e, t) {
  return e && t ? u3(e, t) : !e && !t;
}
function Hu(e, t) {
  return e && t ? c3(e, t) : !e && !t;
}
function _t(e, t) {
  return e && t ? s3(e, t) : !e && !t;
}
function Jn(e, t) {
  return e && t ? a3(e, t) : !e && !t;
}
function Es(e, t, n) {
  var r,
    o = wn(t),
    i = Tf(n);
  try {
    r = Li(e, { start: o, end: i });
  } catch {
    r = !1;
  }
  return r;
}
function Or() {
  return (typeof window != "undefined" ? window : globalThis).__localeId__;
}
function ar(e) {
  if (typeof e == "string") {
    var t = typeof window != "undefined" ? window : globalThis;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Hw(e, t) {
  return je(dn(Ye(), e), "LLLL", t);
}
function Yw(e, t) {
  return je(dn(Ye(), e), "LLL", t);
}
function MA(e, t) {
  return je(Jo(Ye(), e), "QQQ", t);
}
function Pl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate,
    o = t.excludeDates,
    i = t.excludeDateIntervals,
    a = t.includeDates,
    s = t.includeDateIntervals,
    u = t.filterDate;
  return (
    Ol(e, { minDate: n, maxDate: r }) ||
    (o &&
      o.some(function (l) {
        return _t(e, l);
      })) ||
    (i &&
      i.some(function (l) {
        var c = l.start,
          f = l.end;
        return Li(e, { start: c, end: f });
      })) ||
    (a &&
      !a.some(function (l) {
        return _t(e, l);
      })) ||
    (s &&
      !s.some(function (l) {
        var c = l.start,
          f = l.end;
        return Li(e, { start: c, end: f });
      })) ||
    (u && !u(Ye(e))) ||
    !1
  );
}
function wh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.excludeDates,
    r = t.excludeDateIntervals;
  return r && r.length > 0
    ? r.some(function (o) {
        var i = o.start,
          a = o.end;
        return Li(e, { start: i, end: a });
      })
    : (n &&
        n.some(function (o) {
          return _t(e, o);
        })) ||
        !1;
}
function IA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate,
    o = t.excludeDates,
    i = t.includeDates,
    a = t.filterDate;
  return (
    Ol(e, { minDate: n, maxDate: r }) ||
    (o &&
      o.some(function (s) {
        return Gn(e, s);
      })) ||
    (i &&
      !i.some(function (s) {
        return Gn(e, s);
      })) ||
    (a && !a(Ye(e))) ||
    !1
  );
}
function UA(e, t, n, r) {
  var o = me(e),
    i = ht(e),
    a = me(t),
    s = ht(t),
    u = me(r);
  return o === a && o === u
    ? i <= n && n <= s
    : o < a
    ? (u === o && i <= n) || (u === a && s >= n) || (u < a && u > o)
    : void 0;
}
function LA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate,
    o = t.excludeDates,
    i = t.includeDates,
    a = t.filterDate;
  return (
    Ol(e, { minDate: n, maxDate: r }) ||
    (o &&
      o.some(function (s) {
        return Hu(e, s);
      })) ||
    (i &&
      !i.some(function (s) {
        return Hu(e, s);
      })) ||
    (a && !a(Ye(e))) ||
    !1
  );
}
function FA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate,
    o = new Date(e, 0, 1);
  return Ol(o, { minDate: n, maxDate: r }) || !1;
}
function BA(e, t, n, r) {
  var o = me(e),
    i = Of(e),
    a = me(t),
    s = Of(t),
    u = me(r);
  return o === a && o === u
    ? i <= n && n <= s
    : o < a
    ? (u === o && i <= n) || (u === a && s >= n) || (u < a && u > o)
    : void 0;
}
function Ol(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.minDate,
    r = t.maxDate;
  return (n && iu(e, n) < 0) || (r && iu(e, r) > 0);
}
function Jy(e, t) {
  return t.some(function (n) {
    return sn(n) === sn(e) && an(n) === an(e);
  });
}
function Zy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.excludeTimes,
    r = t.includeTimes,
    o = t.filterTime;
  return (n && Jy(e, n)) || (r && !Jy(e, r)) || (o && !o(e)) || !1;
}
function Xy(e, t) {
  var n = t.minTime,
    r = t.maxTime;
  if (!n || !r) throw new Error("Both minTime and maxTime props required");
  var o,
    i = Ye(),
    a = li(ui(i, an(e)), sn(e)),
    s = li(ui(i, an(n)), sn(n)),
    u = li(ui(i, an(r)), sn(r));
  try {
    o = !Li(a, { start: s, end: u });
  } catch {
    o = !1;
  }
  return o;
}
function eg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.minDate,
    r = t.includeDates,
    o = Ii(e, 1);
  return (
    (n && au(n, o) > 0) ||
    (r &&
      r.every(function (i) {
        return au(i, o) > 0;
      })) ||
    !1
  );
}
function tg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.maxDate,
    r = t.includeDates,
    o = Mn(e, 1);
  return (
    (n && au(o, n) > 0) ||
    (r &&
      r.every(function (i) {
        return au(o, i) > 0;
      })) ||
    !1
  );
}
function ng(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.minDate,
    r = t.includeDates,
    o = Ui(e, 1);
  return (
    (n && su(n, o) > 0) ||
    (r &&
      r.every(function (i) {
        return su(i, o) > 0;
      })) ||
    !1
  );
}
function rg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.maxDate,
    r = t.includeDates,
    o = yo(e, 1);
  return (
    (n && su(o, n) > 0) ||
    (r &&
      r.every(function (i) {
        return su(o, i) > 0;
      })) ||
    !1
  );
}
function Vw(e) {
  var t = e.minDate,
    n = e.includeDates;
  if (n && t) {
    var r = n.filter(function (o) {
      return iu(o, t) >= 0;
    });
    return Sv(r);
  }
  return n ? Sv(n) : t;
}
function Ww(e) {
  var t = e.maxDate,
    n = e.includeDates;
  if (n && t) {
    var r = n.filter(function (o) {
      return iu(o, t) <= 0;
    });
    return Cv(r);
  }
  return n ? Cv(n) : t;
}
function og() {
  for (
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      n = new Map(),
      r = 0,
      o = e.length;
    r < o;
    r++
  ) {
    var i = e[r];
    if (th(i)) {
      var a = je(i, "MM.dd.yyyy"),
        s = n.get(a) || [];
      s.includes(t) || (s.push(t), n.set(a, s));
    } else if (Fw(i) === "object") {
      var u = Object.keys(i),
        l = u[0],
        c = i[u[0]];
      if (typeof l == "string" && c.constructor === Array)
        for (var f = 0, h = c.length; f < h; f++) {
          var m = je(c[f], "MM.dd.yyyy"),
            v = n.get(m) || [];
          v.includes(l) || (v.push(l), n.set(m, v));
        }
    }
  }
  return n;
}
function $A(e, t, n, r, o) {
  for (var i = o.length, a = [], s = 0; s < i; s++) {
    var u = Pf(zE(e, sn(o[s])), an(o[s])),
      l = Pf(e, (n + 1) * r);
    cr(u, t) && Dn(u, l) && a.push(o[s]);
  }
  return a;
}
function ig(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function pi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12,
    n = Math.ceil(me(e) / t) * t,
    r = n - (t - 1);
  return { startPeriod: r, endPeriod: n };
}
function jA(e, t, n, r) {
  for (var o = [], i = 0; i < 2 * t + 1; i++) {
    var a = e + t - i,
      s = !0;
    n && (s = me(n) <= a), r && s && (s = me(r) >= a), s && o.push(a);
  }
  return o;
}
var HA = bl(
    (function (e) {
      nt(n, B.Component);
      var t = rt(n);
      function n(r) {
        var o;
        et(this, n),
          x(P((o = t.call(this, r))), "renderOptions", function () {
            var u = o.props.year,
              l = o.state.yearsList.map(function (h) {
                return B.createElement(
                  "div",
                  {
                    className:
                      u === h
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: h,
                    onClick: o.onChange.bind(P(o), h),
                    "aria-selected": u === h ? "true" : void 0,
                  },
                  u === h
                    ? B.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected",
                        },
                        "\u2713"
                      )
                    : "",
                  h
                );
              }),
              c = o.props.minDate ? me(o.props.minDate) : null,
              f = o.props.maxDate ? me(o.props.maxDate) : null;
            return (
              (f &&
                o.state.yearsList.find(function (h) {
                  return h === f;
                })) ||
                l.unshift(
                  B.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "upcoming",
                      onClick: o.incrementYears,
                    },
                    B.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                    })
                  )
                ),
              (c &&
                o.state.yearsList.find(function (h) {
                  return h === c;
                })) ||
                l.push(
                  B.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "previous",
                      onClick: o.decrementYears,
                    },
                    B.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                    })
                  )
                ),
              l
            );
          }),
          x(P(o), "onChange", function (u) {
            o.props.onChange(u);
          }),
          x(P(o), "handleClickOutside", function () {
            o.props.onCancel();
          }),
          x(P(o), "shiftYears", function (u) {
            var l = o.state.yearsList.map(function (c) {
              return c + u;
            });
            o.setState({ yearsList: l });
          }),
          x(P(o), "incrementYears", function () {
            return o.shiftYears(1);
          }),
          x(P(o), "decrementYears", function () {
            return o.shiftYears(-1);
          });
        var i = r.yearDropdownItemNumber,
          a = r.scrollableYearDropdown,
          s = i || (a ? 10 : 5);
        return (
          (o.state = {
            yearsList: jA(o.props.year, s, o.props.minDate, o.props.maxDate),
          }),
          (o.dropdownRef = T.exports.createRef()),
          o
        );
      }
      return (
        tt(n, [
          {
            key: "componentDidMount",
            value: function () {
              var r = this.dropdownRef.current;
              r && (r.scrollTop = r.scrollHeight / 2 - r.clientHeight / 2);
            },
          },
          {
            key: "render",
            value: function () {
              var r = yt({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable":
                  this.props.scrollableYearDropdown,
              });
              return B.createElement(
                "div",
                { className: r, ref: this.dropdownRef },
                this.renderOptions()
              );
            },
          },
        ]),
        n
      );
    })()
  ),
  YA = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      var r;
      et(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        x(P((r = t.call.apply(t, [this].concat(i)))), "state", {
          dropdownVisible: !1,
        }),
        x(P(r), "renderSelectOptions", function () {
          for (
            var s = r.props.minDate ? me(r.props.minDate) : 1900,
              u = r.props.maxDate ? me(r.props.maxDate) : 2100,
              l = [],
              c = s;
            c <= u;
            c++
          )
            l.push(B.createElement("option", { key: c, value: c }, c));
          return l;
        }),
        x(P(r), "onSelectChange", function (s) {
          r.onChange(s.target.value);
        }),
        x(P(r), "renderSelectMode", function () {
          return B.createElement(
            "select",
            {
              value: r.props.year,
              className: "react-datepicker__year-select",
              onChange: r.onSelectChange,
            },
            r.renderSelectOptions()
          );
        }),
        x(P(r), "renderReadView", function (s) {
          return B.createElement(
            "div",
            {
              key: "read",
              style: { visibility: s ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (u) {
                return r.toggleDropdown(u);
              },
            },
            B.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            B.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              r.props.year
            )
          );
        }),
        x(P(r), "renderDropdown", function () {
          return B.createElement(HA, {
            key: "dropdown",
            year: r.props.year,
            onChange: r.onChange,
            onCancel: r.toggleDropdown,
            minDate: r.props.minDate,
            maxDate: r.props.maxDate,
            scrollableYearDropdown: r.props.scrollableYearDropdown,
            yearDropdownItemNumber: r.props.yearDropdownItemNumber,
          });
        }),
        x(P(r), "renderScrollMode", function () {
          var s = r.state.dropdownVisible,
            u = [r.renderReadView(!s)];
          return s && u.unshift(r.renderDropdown()), u;
        }),
        x(P(r), "onChange", function (s) {
          r.toggleDropdown(), s !== r.props.year && r.props.onChange(s);
        }),
        x(P(r), "toggleDropdown", function (s) {
          r.setState(
            { dropdownVisible: !r.state.dropdownVisible },
            function () {
              r.props.adjustDateOnChange && r.handleYearChange(r.props.date, s);
            }
          );
        }),
        x(P(r), "handleYearChange", function (s, u) {
          r.onSelect(s, u), r.setOpen();
        }),
        x(P(r), "onSelect", function (s, u) {
          r.props.onSelect && r.props.onSelect(s, u);
        }),
        x(P(r), "setOpen", function () {
          r.props.setOpen && r.props.setOpen(!0);
        }),
        r
      );
    }
    return (
      tt(n, [
        {
          key: "render",
          value: function () {
            var r;
            switch (this.props.dropdownMode) {
              case "scroll":
                r = this.renderScrollMode();
                break;
              case "select":
                r = this.renderSelectMode();
            }
            return B.createElement(
              "div",
              {
                className:
                  "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              r
            );
          },
        },
      ]),
      n
    );
  })(),
  VA = bl(
    (function (e) {
      nt(n, B.Component);
      var t = rt(n);
      function n() {
        var r;
        et(this, n);
        for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
          i[a] = arguments[a];
        return (
          x(
            P((r = t.call.apply(t, [this].concat(i)))),
            "isSelectedMonth",
            function (s) {
              return r.props.month === s;
            }
          ),
          x(P(r), "renderOptions", function () {
            return r.props.monthNames.map(function (s, u) {
              return B.createElement(
                "div",
                {
                  className: r.isSelectedMonth(u)
                    ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                    : "react-datepicker__month-option",
                  key: s,
                  onClick: r.onChange.bind(P(r), u),
                  "aria-selected": r.isSelectedMonth(u) ? "true" : void 0,
                },
                r.isSelectedMonth(u)
                  ? B.createElement(
                      "span",
                      { className: "react-datepicker__month-option--selected" },
                      "\u2713"
                    )
                  : "",
                s
              );
            });
          }),
          x(P(r), "onChange", function (s) {
            return r.props.onChange(s);
          }),
          x(P(r), "handleClickOutside", function () {
            return r.props.onCancel();
          }),
          r
        );
      }
      return (
        tt(n, [
          {
            key: "render",
            value: function () {
              return B.createElement(
                "div",
                { className: "react-datepicker__month-dropdown" },
                this.renderOptions()
              );
            },
          },
        ]),
        n
      );
    })()
  ),
  WA = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      var r;
      et(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        x(P((r = t.call.apply(t, [this].concat(i)))), "state", {
          dropdownVisible: !1,
        }),
        x(P(r), "renderSelectOptions", function (s) {
          return s.map(function (u, l) {
            return B.createElement("option", { key: l, value: l }, u);
          });
        }),
        x(P(r), "renderSelectMode", function (s) {
          return B.createElement(
            "select",
            {
              value: r.props.month,
              className: "react-datepicker__month-select",
              onChange: function (u) {
                return r.onChange(u.target.value);
              },
            },
            r.renderSelectOptions(s)
          );
        }),
        x(P(r), "renderReadView", function (s, u) {
          return B.createElement(
            "div",
            {
              key: "read",
              style: { visibility: s ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: r.toggleDropdown,
            },
            B.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            B.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              u[r.props.month]
            )
          );
        }),
        x(P(r), "renderDropdown", function (s) {
          return B.createElement(VA, {
            key: "dropdown",
            month: r.props.month,
            monthNames: s,
            onChange: r.onChange,
            onCancel: r.toggleDropdown,
          });
        }),
        x(P(r), "renderScrollMode", function (s) {
          var u = r.state.dropdownVisible,
            l = [r.renderReadView(!u, s)];
          return u && l.unshift(r.renderDropdown(s)), l;
        }),
        x(P(r), "onChange", function (s) {
          r.toggleDropdown(), s !== r.props.month && r.props.onChange(s);
        }),
        x(P(r), "toggleDropdown", function () {
          return r.setState({ dropdownVisible: !r.state.dropdownVisible });
        }),
        r
      );
    }
    return (
      tt(n, [
        {
          key: "render",
          value: function () {
            var r,
              o = this,
              i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function (a) {
                      return Yw(a, o.props.locale);
                    }
                  : function (a) {
                      return Hw(a, o.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                r = this.renderScrollMode(i);
                break;
              case "select":
                r = this.renderSelectMode(i);
            }
            return B.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              r
            );
          },
        },
      ]),
      n
    );
  })();
function zA(e, t) {
  for (var n = [], r = Pr(e), o = Pr(t); !cr(r, o); )
    n.push(Ye(r)), (r = Mn(r, 1));
  return n;
}
var KA = bl(
    (function (e) {
      nt(n, B.Component);
      var t = rt(n);
      function n(r) {
        var o;
        return (
          et(this, n),
          x(P((o = t.call(this, r))), "renderOptions", function () {
            return o.state.monthYearsList.map(function (i) {
              var a = Df(i),
                s = jw(o.props.date, i) && Gn(o.props.date, i);
              return B.createElement(
                "div",
                {
                  className: s
                    ? "react-datepicker__month-year-option--selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: a,
                  onClick: o.onChange.bind(P(o), a),
                  "aria-selected": s ? "true" : void 0,
                },
                s
                  ? B.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected",
                      },
                      "\u2713"
                    )
                  : "",
                je(i, o.props.dateFormat, o.props.locale)
              );
            });
          }),
          x(P(o), "onChange", function (i) {
            return o.props.onChange(i);
          }),
          x(P(o), "handleClickOutside", function () {
            o.props.onCancel();
          }),
          (o.state = { monthYearsList: zA(o.props.minDate, o.props.maxDate) }),
          o
        );
      }
      return (
        tt(n, [
          {
            key: "render",
            value: function () {
              var r = yt({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable":
                  this.props.scrollableMonthYearDropdown,
              });
              return B.createElement(
                "div",
                { className: r },
                this.renderOptions()
              );
            },
          },
        ]),
        n
      );
    })()
  ),
  qA = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      var r;
      et(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        x(P((r = t.call.apply(t, [this].concat(i)))), "state", {
          dropdownVisible: !1,
        }),
        x(P(r), "renderSelectOptions", function () {
          for (
            var s = Pr(r.props.minDate), u = Pr(r.props.maxDate), l = [];
            !cr(s, u);

          ) {
            var c = Df(s);
            l.push(
              B.createElement(
                "option",
                { key: c, value: c },
                je(s, r.props.dateFormat, r.props.locale)
              )
            ),
              (s = Mn(s, 1));
          }
          return l;
        }),
        x(P(r), "onSelectChange", function (s) {
          r.onChange(s.target.value);
        }),
        x(P(r), "renderSelectMode", function () {
          return B.createElement(
            "select",
            {
              value: Df(Pr(r.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: r.onSelectChange,
            },
            r.renderSelectOptions()
          );
        }),
        x(P(r), "renderReadView", function (s) {
          var u = je(r.props.date, r.props.dateFormat, r.props.locale);
          return B.createElement(
            "div",
            {
              key: "read",
              style: { visibility: s ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function (l) {
                return r.toggleDropdown(l);
              },
            },
            B.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            B.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              u
            )
          );
        }),
        x(P(r), "renderDropdown", function () {
          return B.createElement(KA, {
            key: "dropdown",
            date: r.props.date,
            dateFormat: r.props.dateFormat,
            onChange: r.onChange,
            onCancel: r.toggleDropdown,
            minDate: r.props.minDate,
            maxDate: r.props.maxDate,
            scrollableMonthYearDropdown: r.props.scrollableMonthYearDropdown,
            locale: r.props.locale,
          });
        }),
        x(P(r), "renderScrollMode", function () {
          var s = r.state.dropdownVisible,
            u = [r.renderReadView(!s)];
          return s && u.unshift(r.renderDropdown()), u;
        }),
        x(P(r), "onChange", function (s) {
          r.toggleDropdown();
          var u = Ye(parseInt(s));
          (jw(r.props.date, u) && Gn(r.props.date, u)) || r.props.onChange(u);
        }),
        x(P(r), "toggleDropdown", function () {
          return r.setState({ dropdownVisible: !r.state.dropdownVisible });
        }),
        r
      );
    }
    return (
      tt(n, [
        {
          key: "render",
          value: function () {
            var r;
            switch (this.props.dropdownMode) {
              case "scroll":
                r = this.renderScrollMode();
                break;
              case "select":
                r = this.renderSelectMode();
            }
            return B.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              r
            );
          },
        },
      ]),
      n
    );
  })(),
  QA = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      var r;
      et(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        x(P((r = t.call.apply(t, [this].concat(i)))), "dayEl", B.createRef()),
        x(P(r), "handleClick", function (s) {
          !r.isDisabled() && r.props.onClick && r.props.onClick(s);
        }),
        x(P(r), "handleMouseEnter", function (s) {
          !r.isDisabled() && r.props.onMouseEnter && r.props.onMouseEnter(s);
        }),
        x(P(r), "handleOnKeyDown", function (s) {
          s.key === " " && (s.preventDefault(), (s.key = "Enter")),
            r.props.handleOnKeyDown(s);
        }),
        x(P(r), "isSameDay", function (s) {
          return _t(r.props.day, s);
        }),
        x(P(r), "isKeyboardSelected", function () {
          return (
            !r.props.disabledKeyboardNavigation &&
            !r.isSameDay(r.props.selected) &&
            r.isSameDay(r.props.preSelection)
          );
        }),
        x(P(r), "isDisabled", function () {
          return Pl(r.props.day, r.props);
        }),
        x(P(r), "isExcluded", function () {
          return wh(r.props.day, r.props);
        }),
        x(P(r), "getHighLightedClass", function (s) {
          var u = r.props,
            l = u.day,
            c = u.highlightDates;
          if (!c) return !1;
          var f = je(l, "MM.dd.yyyy");
          return c.get(f);
        }),
        x(P(r), "isInRange", function () {
          var s = r.props,
            u = s.day,
            l = s.startDate,
            c = s.endDate;
          return !(!l || !c) && Es(u, l, c);
        }),
        x(P(r), "isInSelectingRange", function () {
          var s,
            u = r.props,
            l = u.day,
            c = u.selectsStart,
            f = u.selectsEnd,
            h = u.selectsRange,
            m = u.selectsDisabledDaysInRange,
            v = u.startDate,
            g = u.endDate,
            O =
              (s = r.props.selectingDate) !== null && s !== void 0
                ? s
                : r.props.preSelection;
          return (
            !(!(c || f || h) || !O || (!m && r.isDisabled())) &&
            (c && g && (Dn(O, g) || Jn(O, g))
              ? Es(l, O, g)
              : ((f && v && (cr(O, v) || Jn(O, v))) ||
                  !(!h || !v || g || (!cr(O, v) && !Jn(O, v)))) &&
                Es(l, v, O))
          );
        }),
        x(P(r), "isSelectingRangeStart", function () {
          var s;
          if (!r.isInSelectingRange()) return !1;
          var u = r.props,
            l = u.day,
            c = u.startDate,
            f = u.selectsStart,
            h =
              (s = r.props.selectingDate) !== null && s !== void 0
                ? s
                : r.props.preSelection;
          return _t(l, f ? h : c);
        }),
        x(P(r), "isSelectingRangeEnd", function () {
          var s;
          if (!r.isInSelectingRange()) return !1;
          var u = r.props,
            l = u.day,
            c = u.endDate,
            f = u.selectsEnd,
            h =
              (s = r.props.selectingDate) !== null && s !== void 0
                ? s
                : r.props.preSelection;
          return _t(l, f ? h : c);
        }),
        x(P(r), "isRangeStart", function () {
          var s = r.props,
            u = s.day,
            l = s.startDate,
            c = s.endDate;
          return !(!l || !c) && _t(l, u);
        }),
        x(P(r), "isRangeEnd", function () {
          var s = r.props,
            u = s.day,
            l = s.startDate,
            c = s.endDate;
          return !(!l || !c) && _t(c, u);
        }),
        x(P(r), "isWeekend", function () {
          var s = GE(r.props.day);
          return s === 0 || s === 6;
        }),
        x(P(r), "isAfterMonth", function () {
          return (
            r.props.month !== void 0 &&
            (r.props.month + 1) % 12 === ht(r.props.day)
          );
        }),
        x(P(r), "isBeforeMonth", function () {
          return (
            r.props.month !== void 0 &&
            (ht(r.props.day) + 1) % 12 === r.props.month
          );
        }),
        x(P(r), "isCurrentDay", function () {
          return r.isSameDay(Ye());
        }),
        x(P(r), "isSelected", function () {
          return r.isSameDay(r.props.selected);
        }),
        x(P(r), "getClassNames", function (s) {
          var u = r.props.dayClassName ? r.props.dayClassName(s) : void 0;
          return yt(
            "react-datepicker__day",
            u,
            "react-datepicker__day--" + AA(r.props.day),
            {
              "react-datepicker__day--disabled": r.isDisabled(),
              "react-datepicker__day--excluded": r.isExcluded(),
              "react-datepicker__day--selected": r.isSelected(),
              "react-datepicker__day--keyboard-selected":
                r.isKeyboardSelected(),
              "react-datepicker__day--range-start": r.isRangeStart(),
              "react-datepicker__day--range-end": r.isRangeEnd(),
              "react-datepicker__day--in-range": r.isInRange(),
              "react-datepicker__day--in-selecting-range":
                r.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start":
                r.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end":
                r.isSelectingRangeEnd(),
              "react-datepicker__day--today": r.isCurrentDay(),
              "react-datepicker__day--weekend": r.isWeekend(),
              "react-datepicker__day--outside-month":
                r.isAfterMonth() || r.isBeforeMonth(),
            },
            r.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        x(P(r), "getAriaLabel", function () {
          var s = r.props,
            u = s.day,
            l = s.ariaLabelPrefixWhenEnabled,
            c = l === void 0 ? "Choose" : l,
            f = s.ariaLabelPrefixWhenDisabled,
            h = f === void 0 ? "Not available" : f,
            m = r.isDisabled() || r.isExcluded() ? h : c;
          return "".concat(m, " ").concat(je(u, "PPPP", r.props.locale));
        }),
        x(P(r), "getTabIndex", function (s, u) {
          var l = s || r.props.selected,
            c = u || r.props.preSelection;
          return r.isKeyboardSelected() || (r.isSameDay(l) && _t(c, l))
            ? 0
            : -1;
        }),
        x(P(r), "handleFocusDay", function () {
          var s =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            u = !1;
          r.getTabIndex() === 0 &&
            !s.isInputFocused &&
            r.isSameDay(r.props.preSelection) &&
            ((document.activeElement &&
              document.activeElement !== document.body) ||
              (u = !0),
            r.props.inline && !r.props.shouldFocusDayInline && (u = !1),
            r.props.containerRef &&
              r.props.containerRef.current &&
              r.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement.classList.contains(
                "react-datepicker__day"
              ) &&
              (u = !0)),
            u && r.dayEl.current.focus({ preventScroll: !0 });
        }),
        x(P(r), "renderDayContents", function () {
          return (r.props.monthShowsDuplicateDaysEnd && r.isAfterMonth()) ||
            (r.props.monthShowsDuplicateDaysStart && r.isBeforeMonth())
            ? null
            : r.props.renderDayContents
            ? r.props.renderDayContents(wv(r.props.day), r.props.day)
            : wv(r.props.day);
        }),
        x(P(r), "render", function () {
          return B.createElement(
            "div",
            {
              ref: r.dayEl,
              className: r.getClassNames(r.props.day),
              onKeyDown: r.handleOnKeyDown,
              onClick: r.handleClick,
              onMouseEnter: r.handleMouseEnter,
              tabIndex: r.getTabIndex(),
              "aria-label": r.getAriaLabel(),
              role: "option",
              "aria-disabled": r.isDisabled(),
              "aria-current": r.isCurrentDay() ? "date" : void 0,
              "aria-selected": r.isSelected(),
            },
            r.renderDayContents()
          );
        }),
        r
      );
    }
    return (
      tt(n, [
        {
          key: "componentDidMount",
          value: function () {
            this.handleFocusDay();
          },
        },
        {
          key: "componentDidUpdate",
          value: function (r) {
            this.handleFocusDay(r);
          },
        },
      ]),
      n
    );
  })(),
  GA = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      var r;
      et(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        x(
          P((r = t.call.apply(t, [this].concat(i)))),
          "handleClick",
          function (s) {
            r.props.onClick && r.props.onClick(s);
          }
        ),
        r
      );
    }
    return (
      tt(n, [
        {
          key: "render",
          value: function () {
            var r = this.props,
              o = r.weekNumber,
              i = r.ariaLabelPrefix,
              a = i === void 0 ? "week " : i,
              s = {
                "react-datepicker__week-number": !0,
                "react-datepicker__week-number--clickable": !!r.onClick,
              };
            return B.createElement(
              "div",
              {
                className: yt(s),
                "aria-label": "".concat(a, " ").concat(this.props.weekNumber),
                onClick: this.handleClick,
              },
              o
            );
          },
        },
      ]),
      n
    );
  })(),
  JA = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      var r;
      et(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        x(
          P((r = t.call.apply(t, [this].concat(i)))),
          "handleDayClick",
          function (s, u) {
            r.props.onDayClick && r.props.onDayClick(s, u);
          }
        ),
        x(P(r), "handleDayMouseEnter", function (s) {
          r.props.onDayMouseEnter && r.props.onDayMouseEnter(s);
        }),
        x(P(r), "handleWeekClick", function (s, u, l) {
          typeof r.props.onWeekSelect == "function" &&
            r.props.onWeekSelect(s, u, l),
            r.props.shouldCloseOnSelect && r.props.setOpen(!1);
        }),
        x(P(r), "formatWeekNumber", function (s) {
          return r.props.formatWeekNumber ? r.props.formatWeekNumber(s) : TA(s);
        }),
        x(P(r), "renderDays", function () {
          var s = gh(r.props.day, r.props.locale, r.props.calendarStartDay),
            u = [],
            l = r.formatWeekNumber(s);
          if (r.props.showWeekNumber) {
            var c = r.props.onWeekSelect
              ? r.handleWeekClick.bind(P(r), s, l)
              : void 0;
            u.push(
              B.createElement(GA, {
                key: "W",
                weekNumber: l,
                onClick: c,
                ariaLabelPrefix: r.props.ariaLabelPrefix,
              })
            );
          }
          return u.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (f) {
              var h = Ao(s, f);
              return B.createElement(QA, {
                ariaLabelPrefixWhenEnabled: r.props.chooseDayAriaLabelPrefix,
                ariaLabelPrefixWhenDisabled: r.props.disabledDayAriaLabelPrefix,
                key: h.valueOf(),
                day: h,
                month: r.props.month,
                onClick: r.handleDayClick.bind(P(r), h),
                onMouseEnter: r.handleDayMouseEnter.bind(P(r), h),
                minDate: r.props.minDate,
                maxDate: r.props.maxDate,
                excludeDates: r.props.excludeDates,
                excludeDateIntervals: r.props.excludeDateIntervals,
                includeDates: r.props.includeDates,
                includeDateIntervals: r.props.includeDateIntervals,
                highlightDates: r.props.highlightDates,
                selectingDate: r.props.selectingDate,
                filterDate: r.props.filterDate,
                preSelection: r.props.preSelection,
                selected: r.props.selected,
                selectsStart: r.props.selectsStart,
                selectsEnd: r.props.selectsEnd,
                selectsRange: r.props.selectsRange,
                selectsDisabledDaysInRange: r.props.selectsDisabledDaysInRange,
                startDate: r.props.startDate,
                endDate: r.props.endDate,
                dayClassName: r.props.dayClassName,
                renderDayContents: r.props.renderDayContents,
                disabledKeyboardNavigation: r.props.disabledKeyboardNavigation,
                handleOnKeyDown: r.props.handleOnKeyDown,
                isInputFocused: r.props.isInputFocused,
                containerRef: r.props.containerRef,
                inline: r.props.inline,
                shouldFocusDayInline: r.props.shouldFocusDayInline,
                monthShowsDuplicateDaysEnd: r.props.monthShowsDuplicateDaysEnd,
                monthShowsDuplicateDaysStart:
                  r.props.monthShowsDuplicateDaysStart,
                locale: r.props.locale,
              });
            })
          );
        }),
        r
      );
    }
    return (
      tt(
        n,
        [
          {
            key: "render",
            value: function () {
              return B.createElement(
                "div",
                { className: "react-datepicker__week" },
                this.renderDays()
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return { shouldCloseOnSelect: !0 };
            },
          },
        ]
      ),
      n
    );
  })(),
  ZA = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      var r;
      et(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        x(
          P((r = t.call.apply(t, [this].concat(i)))),
          "MONTH_REFS",
          $w(Array(12)).map(function () {
            return B.createRef();
          })
        ),
        x(P(r), "isDisabled", function (s) {
          return Pl(s, r.props);
        }),
        x(P(r), "isExcluded", function (s) {
          return wh(s, r.props);
        }),
        x(P(r), "handleDayClick", function (s, u) {
          r.props.onDayClick &&
            r.props.onDayClick(s, u, r.props.orderInDisplay);
        }),
        x(P(r), "handleDayMouseEnter", function (s) {
          r.props.onDayMouseEnter && r.props.onDayMouseEnter(s);
        }),
        x(P(r), "handleMouseLeave", function () {
          r.props.onMouseLeave && r.props.onMouseLeave();
        }),
        x(P(r), "isRangeStartMonth", function (s) {
          var u = r.props,
            l = u.day,
            c = u.startDate,
            f = u.endDate;
          return !(!c || !f) && Gn(dn(l, s), c);
        }),
        x(P(r), "isRangeStartQuarter", function (s) {
          var u = r.props,
            l = u.day,
            c = u.startDate,
            f = u.endDate;
          return !(!c || !f) && Hu(Jo(l, s), c);
        }),
        x(P(r), "isRangeEndMonth", function (s) {
          var u = r.props,
            l = u.day,
            c = u.startDate,
            f = u.endDate;
          return !(!c || !f) && Gn(dn(l, s), f);
        }),
        x(P(r), "isRangeEndQuarter", function (s) {
          var u = r.props,
            l = u.day,
            c = u.startDate,
            f = u.endDate;
          return !(!c || !f) && Hu(Jo(l, s), f);
        }),
        x(P(r), "isWeekInMonth", function (s) {
          var u = r.props.day,
            l = Ao(s, 6);
          return Gn(s, u) || Gn(l, u);
        }),
        x(P(r), "isCurrentMonth", function (s, u) {
          return me(s) === me(Ye()) && u === ht(Ye());
        }),
        x(P(r), "isSelectedMonth", function (s, u, l) {
          return ht(s) === u && me(s) === me(l);
        }),
        x(P(r), "isSelectedQuarter", function (s, u, l) {
          return Of(s) === u && me(s) === me(l);
        }),
        x(P(r), "renderWeeks", function () {
          for (
            var s = [],
              u = r.props.fixedHeight,
              l = 0,
              c = !1,
              f = gh(Pr(r.props.day), r.props.locale, r.props.calendarStartDay);
            s.push(
              B.createElement(JA, {
                ariaLabelPrefix: r.props.weekAriaLabelPrefix,
                chooseDayAriaLabelPrefix: r.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: r.props.disabledDayAriaLabelPrefix,
                key: l,
                day: f,
                month: ht(r.props.day),
                onDayClick: r.handleDayClick,
                onDayMouseEnter: r.handleDayMouseEnter,
                onWeekSelect: r.props.onWeekSelect,
                formatWeekNumber: r.props.formatWeekNumber,
                locale: r.props.locale,
                minDate: r.props.minDate,
                maxDate: r.props.maxDate,
                excludeDates: r.props.excludeDates,
                excludeDateIntervals: r.props.excludeDateIntervals,
                includeDates: r.props.includeDates,
                includeDateIntervals: r.props.includeDateIntervals,
                inline: r.props.inline,
                shouldFocusDayInline: r.props.shouldFocusDayInline,
                highlightDates: r.props.highlightDates,
                selectingDate: r.props.selectingDate,
                filterDate: r.props.filterDate,
                preSelection: r.props.preSelection,
                selected: r.props.selected,
                selectsStart: r.props.selectsStart,
                selectsEnd: r.props.selectsEnd,
                selectsRange: r.props.selectsRange,
                selectsDisabledDaysInRange: r.props.selectsDisabledDaysInRange,
                showWeekNumber: r.props.showWeekNumbers,
                startDate: r.props.startDate,
                endDate: r.props.endDate,
                dayClassName: r.props.dayClassName,
                setOpen: r.props.setOpen,
                shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                disabledKeyboardNavigation: r.props.disabledKeyboardNavigation,
                renderDayContents: r.props.renderDayContents,
                handleOnKeyDown: r.props.handleOnKeyDown,
                isInputFocused: r.props.isInputFocused,
                containerRef: r.props.containerRef,
                calendarStartDay: r.props.calendarStartDay,
                monthShowsDuplicateDaysEnd: r.props.monthShowsDuplicateDaysEnd,
                monthShowsDuplicateDaysStart:
                  r.props.monthShowsDuplicateDaysStart,
              })
            ),
              !c;

          ) {
            l++, (f = oh(f, 1));
            var h = u && l >= 6,
              m = !u && !r.isWeekInMonth(f);
            if (h || m) {
              if (!r.props.peekNextMonth) break;
              c = !0;
            }
          }
          return s;
        }),
        x(P(r), "onMonthClick", function (s, u) {
          r.handleDayClick(Pr(dn(r.props.day, u)), s);
        }),
        x(P(r), "handleMonthNavigation", function (s, u) {
          r.isDisabled(u) ||
            r.isExcluded(u) ||
            (r.props.setPreSelection(u),
            r.MONTH_REFS[s].current && r.MONTH_REFS[s].current.focus());
        }),
        x(P(r), "onMonthKeyDown", function (s, u) {
          var l = s.key;
          if (!r.props.disabledKeyboardNavigation)
            switch (l) {
              case "Enter":
                r.onMonthClick(s, u), r.props.setPreSelection(r.props.selected);
                break;
              case "ArrowRight":
                r.handleMonthNavigation(
                  u === 11 ? 0 : u + 1,
                  Mn(r.props.preSelection, 1)
                );
                break;
              case "ArrowLeft":
                r.handleMonthNavigation(
                  u === 0 ? 11 : u - 1,
                  Ii(r.props.preSelection, 1)
                );
            }
        }),
        x(P(r), "onQuarterClick", function (s, u) {
          r.handleDayClick(NA(Jo(r.props.day, u)), s);
        }),
        x(P(r), "getMonthClassNames", function (s) {
          var u = r.props,
            l = u.day,
            c = u.startDate,
            f = u.endDate,
            h = u.selected,
            m = u.minDate,
            v = u.maxDate,
            g = u.preSelection,
            O = u.monthClassName,
            y = O ? O(l) : void 0;
          return yt(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(s),
            y,
            {
              "react-datepicker__month--disabled":
                (m || v) && IA(dn(l, s), r.props),
              "react-datepicker__month--selected": r.isSelectedMonth(l, s, h),
              "react-datepicker__month-text--keyboard-selected": ht(g) === s,
              "react-datepicker__month--in-range": UA(c, f, s, l),
              "react-datepicker__month--range-start": r.isRangeStartMonth(s),
              "react-datepicker__month--range-end": r.isRangeEndMonth(s),
              "react-datepicker__month-text--today": r.isCurrentMonth(l, s),
            }
          );
        }),
        x(P(r), "getTabIndex", function (s) {
          var u = ht(r.props.preSelection);
          return r.props.disabledKeyboardNavigation || s !== u ? "-1" : "0";
        }),
        x(P(r), "getAriaLabel", function (s) {
          var u = r.props,
            l = u.chooseDayAriaLabelPrefix,
            c = l === void 0 ? "Choose" : l,
            f = u.disabledDayAriaLabelPrefix,
            h = f === void 0 ? "Not available" : f,
            m = u.day,
            v = dn(m, s),
            g = r.isDisabled(v) || r.isExcluded(v) ? h : c;
          return "".concat(g, " ").concat(je(v, "MMMM yyyy"));
        }),
        x(P(r), "getQuarterClassNames", function (s) {
          var u = r.props,
            l = u.day,
            c = u.startDate,
            f = u.endDate,
            h = u.selected,
            m = u.minDate,
            v = u.maxDate;
          return yt(
            "react-datepicker__quarter-text",
            "react-datepicker__quarter-".concat(s),
            {
              "react-datepicker__quarter--disabled":
                (m || v) && LA(Jo(l, s), r.props),
              "react-datepicker__quarter--selected": r.isSelectedQuarter(
                l,
                s,
                h
              ),
              "react-datepicker__quarter--in-range": BA(c, f, s, l),
              "react-datepicker__quarter--range-start":
                r.isRangeStartQuarter(s),
              "react-datepicker__quarter--range-end": r.isRangeEndQuarter(s),
            }
          );
        }),
        x(P(r), "renderMonths", function () {
          var s = r.props,
            u = s.showFullMonthYearPicker,
            l = s.showTwoColumnMonthYearPicker,
            c = s.showFourColumnMonthYearPicker,
            f = s.locale,
            h = s.day,
            m = s.selected;
          return (
            c
              ? [
                  [0, 1, 2, 3],
                  [4, 5, 6, 7],
                  [8, 9, 10, 11],
                ]
              : l
              ? [
                  [0, 1],
                  [2, 3],
                  [4, 5],
                  [6, 7],
                  [8, 9],
                  [10, 11],
                ]
              : [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [9, 10, 11],
                ]
          ).map(function (v, g) {
            return B.createElement(
              "div",
              { className: "react-datepicker__month-wrapper", key: g },
              v.map(function (O, y) {
                return B.createElement(
                  "div",
                  {
                    ref: r.MONTH_REFS[O],
                    key: y,
                    onClick: function (w) {
                      r.onMonthClick(w, O);
                    },
                    onKeyDown: function (w) {
                      r.onMonthKeyDown(w, O);
                    },
                    tabIndex: r.getTabIndex(O),
                    className: r.getMonthClassNames(O),
                    role: "option",
                    "aria-label": r.getAriaLabel(O),
                    "aria-current": r.isCurrentMonth(h, O) ? "date" : void 0,
                    "aria-selected": r.isSelectedMonth(h, O, m),
                  },
                  u ? Hw(O, f) : Yw(O, f)
                );
              })
            );
          });
        }),
        x(P(r), "renderQuarters", function () {
          var s = r.props,
            u = s.day,
            l = s.selected;
          return B.createElement(
            "div",
            { className: "react-datepicker__quarter-wrapper" },
            [1, 2, 3, 4].map(function (c, f) {
              return B.createElement(
                "div",
                {
                  key: f,
                  role: "option",
                  onClick: function (h) {
                    r.onQuarterClick(h, c);
                  },
                  className: r.getQuarterClassNames(c),
                  "aria-selected": r.isSelectedQuarter(u, c, l),
                },
                MA(c, r.props.locale)
              );
            })
          );
        }),
        x(P(r), "getClassNames", function () {
          var s = r.props;
          s.day;
          var u = s.selectingDate,
            l = s.selectsStart,
            c = s.selectsEnd,
            f = s.showMonthYearPicker,
            h = s.showQuarterYearPicker;
          return yt(
            "react-datepicker__month",
            { "react-datepicker__month--selecting-range": u && (l || c) },
            { "react-datepicker__monthPicker": f },
            { "react-datepicker__quarterPicker": h }
          );
        }),
        r
      );
    }
    return (
      tt(n, [
        {
          key: "render",
          value: function () {
            var r = this.props,
              o = r.showMonthYearPicker,
              i = r.showQuarterYearPicker,
              a = r.day,
              s = r.ariaLabelPrefix,
              u = s === void 0 ? "month " : s;
            return B.createElement(
              "div",
              {
                className: this.getClassNames(),
                onMouseLeave: this.handleMouseLeave,
                "aria-label": "".concat(u, " ").concat(je(a, "yyyy-MM")),
                role: "listbox",
              },
              o
                ? this.renderMonths()
                : i
                ? this.renderQuarters()
                : this.renderWeeks()
            );
          },
        },
      ]),
      n
    );
  })(),
  zw = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      var r;
      et(this, n);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        x(P((r = t.call.apply(t, [this].concat(i)))), "state", {
          height: null,
        }),
        x(P(r), "handleClick", function (s) {
          ((r.props.minTime || r.props.maxTime) && Xy(s, r.props)) ||
            ((r.props.excludeTimes ||
              r.props.includeTimes ||
              r.props.filterTime) &&
              Zy(s, r.props)) ||
            r.props.onChange(s);
        }),
        x(P(r), "isSelectedTime", function (s, u, l) {
          return r.props.selected && u === sn(s) && l === an(s);
        }),
        x(P(r), "liClasses", function (s, u, l) {
          var c = [
            "react-datepicker__time-list-item",
            r.props.timeClassName ? r.props.timeClassName(s, u, l) : void 0,
          ];
          return (
            r.isSelectedTime(s, u, l) &&
              c.push("react-datepicker__time-list-item--selected"),
            (((r.props.minTime || r.props.maxTime) && Xy(s, r.props)) ||
              ((r.props.excludeTimes ||
                r.props.includeTimes ||
                r.props.filterTime) &&
                Zy(s, r.props))) &&
              c.push("react-datepicker__time-list-item--disabled"),
            r.props.injectTimes &&
              (60 * sn(s) + an(s)) % r.props.intervals != 0 &&
              c.push("react-datepicker__time-list-item--injected"),
            c.join(" ")
          );
        }),
        x(P(r), "handleOnKeyDown", function (s, u) {
          s.key === " " && (s.preventDefault(), (s.key = "Enter")),
            s.key === "Enter" && r.handleClick(u),
            r.props.handleOnKeyDown(s);
        }),
        x(P(r), "renderTimes", function () {
          for (
            var s = [],
              u = r.props.format ? r.props.format : "p",
              l = r.props.intervals,
              c = RA(Ye(r.props.selected)),
              f = 1440 / l,
              h =
                r.props.injectTimes &&
                r.props.injectTimes.sort(function (E, U) {
                  return E - U;
                }),
              m = r.props.selected || r.props.openToDate || Ye(),
              v = sn(m),
              g = an(m),
              O = li(ui(c, g), v),
              y = 0;
            y < f;
            y++
          ) {
            var w = Pf(c, y * l);
            if ((s.push(w), h)) {
              var _ = $A(c, w, y, l, h);
              s = s.concat(_);
            }
          }
          return s.map(function (E, U) {
            return B.createElement(
              "li",
              {
                key: U,
                onClick: r.handleClick.bind(P(r), E),
                className: r.liClasses(E, v, g),
                ref: function (L) {
                  (Dn(E, O) || Jn(E, O)) && (r.centerLi = L);
                },
                onKeyDown: function (L) {
                  r.handleOnKeyDown(L, E);
                },
                tabIndex: "0",
                "aria-selected": r.isSelectedTime(E, v, g) ? "true" : void 0,
              },
              je(E, u, r.props.locale)
            );
          });
        }),
        r
      );
    }
    return (
      tt(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              (this.list.scrollTop = n.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
                  : this.list.clientHeight,
                this.centerLi
              )),
                this.props.monthRef &&
                  this.header &&
                  this.setState({
                    height:
                      this.props.monthRef.clientHeight -
                      this.header.clientHeight,
                  });
            },
          },
          {
            key: "render",
            value: function () {
              var r = this,
                o = this.state.height;
              return B.createElement(
                "div",
                {
                  className: "react-datepicker__time-container ".concat(
                    this.props.todayButton
                      ? "react-datepicker__time-container--with-today-button"
                      : ""
                  ),
                },
                B.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header react-datepicker__header--time ".concat(
                        this.props.showTimeSelectOnly
                          ? "react-datepicker__header--time--only"
                          : ""
                      ),
                    ref: function (i) {
                      r.header = i;
                    },
                  },
                  B.createElement(
                    "div",
                    { className: "react-datepicker-time__header" },
                    this.props.timeCaption
                  )
                ),
                B.createElement(
                  "div",
                  { className: "react-datepicker__time" },
                  B.createElement(
                    "div",
                    { className: "react-datepicker__time-box" },
                    B.createElement(
                      "ul",
                      {
                        className: "react-datepicker__time-list",
                        ref: function (i) {
                          r.list = i;
                        },
                        style: o ? { height: o } : {},
                        tabIndex: "0",
                      },
                      this.renderTimes()
                    )
                  )
                )
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                intervals: 30,
                onTimeChange: function () {},
                todayButton: null,
                timeCaption: "Time",
              };
            },
          },
        ]
      ),
      n
    );
  })();
x(zw, "calcCenterPosition", function (e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
});
var XA = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n(r) {
      var o;
      return (
        et(this, n),
        x(
          P((o = t.call(this, r))),
          "YEAR_REFS",
          $w(Array(o.props.yearItemNumber)).map(function () {
            return B.createRef();
          })
        ),
        x(P(o), "isDisabled", function (i) {
          return Pl(i, o.props);
        }),
        x(P(o), "isExcluded", function (i) {
          return wh(i, o.props);
        }),
        x(P(o), "updateFocusOnPaginate", function (i) {
          var a = function () {
            this.YEAR_REFS[i].current.focus();
          }.bind(P(o));
          window.requestAnimationFrame(a);
        }),
        x(P(o), "handleYearClick", function (i, a) {
          o.props.onDayClick && o.props.onDayClick(i, a);
        }),
        x(P(o), "handleYearNavigation", function (i, a) {
          var s = o.props,
            u = s.date,
            l = s.yearItemNumber,
            c = pi(u, l).startPeriod;
          o.isDisabled(a) ||
            o.isExcluded(a) ||
            (o.props.setPreSelection(a),
            i - c == -1
              ? o.updateFocusOnPaginate(l - 1)
              : i - c === l
              ? o.updateFocusOnPaginate(0)
              : o.YEAR_REFS[i - c].current.focus());
        }),
        x(P(o), "isSameDay", function (i, a) {
          return _t(i, a);
        }),
        x(P(o), "isCurrentYear", function (i) {
          return i === me(Ye());
        }),
        x(P(o), "isKeyboardSelected", function (i) {
          var a = Zo(ou(o.props.date, i));
          return (
            !o.props.disabledKeyboardNavigation &&
            !o.props.inline &&
            !_t(a, Zo(o.props.selected)) &&
            _t(a, Zo(o.props.preSelection))
          );
        }),
        x(P(o), "onYearClick", function (i, a) {
          var s = o.props.date;
          o.handleYearClick(Zo(ou(s, a)), i);
        }),
        x(P(o), "onYearKeyDown", function (i, a) {
          var s = i.key;
          if (!o.props.disabledKeyboardNavigation)
            switch (s) {
              case "Enter":
                o.onYearClick(i, a), o.props.setPreSelection(o.props.selected);
                break;
              case "ArrowRight":
                o.handleYearNavigation(a + 1, yo(o.props.preSelection, 1));
                break;
              case "ArrowLeft":
                o.handleYearNavigation(a - 1, Ui(o.props.preSelection, 1));
            }
        }),
        x(P(o), "getYearClassNames", function (i) {
          var a = o.props,
            s = a.minDate,
            u = a.maxDate,
            l = a.selected;
          return yt("react-datepicker__year-text", {
            "react-datepicker__year-text--selected": i === me(l),
            "react-datepicker__year-text--disabled": (s || u) && FA(i, o.props),
            "react-datepicker__year-text--keyboard-selected":
              o.isKeyboardSelected(i),
            "react-datepicker__year-text--today": o.isCurrentYear(i),
          });
        }),
        x(P(o), "getYearTabIndex", function (i) {
          return o.props.disabledKeyboardNavigation
            ? "-1"
            : i === me(o.props.preSelection)
            ? "0"
            : "-1";
        }),
        o
      );
    }
    return (
      tt(n, [
        {
          key: "render",
          value: function () {
            for (
              var r = this,
                o = [],
                i = this.props,
                a = pi(i.date, i.yearItemNumber),
                s = a.startPeriod,
                u = a.endPeriod,
                l = function (f) {
                  o.push(
                    B.createElement(
                      "div",
                      {
                        ref: r.YEAR_REFS[f - s],
                        onClick: function (h) {
                          r.onYearClick(h, f);
                        },
                        onKeyDown: function (h) {
                          r.onYearKeyDown(h, f);
                        },
                        tabIndex: r.getYearTabIndex(f),
                        className: r.getYearClassNames(f),
                        key: f,
                        "aria-current": r.isCurrentYear(f) ? "date" : void 0,
                      },
                      f
                    )
                  );
                },
                c = s;
              c <= u;
              c++
            )
              l(c);
            return B.createElement(
              "div",
              { className: "react-datepicker__year" },
              B.createElement(
                "div",
                { className: "react-datepicker__year-wrapper" },
                o
              )
            );
          },
        },
      ]),
      n
    );
  })(),
  e6 = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n(r) {
      var o;
      return (
        et(this, n),
        x(P((o = t.call(this, r))), "onTimeChange", function (i) {
          o.setState({ time: i });
          var a = new Date();
          a.setHours(i.split(":")[0]),
            a.setMinutes(i.split(":")[1]),
            o.props.onChange(a);
        }),
        x(P(o), "renderTimeInput", function () {
          var i = o.state.time,
            a = o.props,
            s = a.date,
            u = a.timeString,
            l = a.customTimeInput;
          return l
            ? B.cloneElement(l, { date: s, value: i, onChange: o.onTimeChange })
            : B.createElement("input", {
                type: "time",
                className: "react-datepicker-time__input",
                placeholder: "Time",
                name: "time-input",
                required: !0,
                value: i,
                onChange: function (c) {
                  o.onTimeChange(c.target.value || u);
                },
              });
        }),
        (o.state = { time: o.props.timeString }),
        o
      );
    }
    return (
      tt(
        n,
        [
          {
            key: "render",
            value: function () {
              return B.createElement(
                "div",
                { className: "react-datepicker__input-time-container" },
                B.createElement(
                  "div",
                  { className: "react-datepicker-time__caption" },
                  this.props.timeInputLabel
                ),
                B.createElement(
                  "div",
                  { className: "react-datepicker-time__input-container" },
                  B.createElement(
                    "div",
                    { className: "react-datepicker-time__input" },
                    this.renderTimeInput()
                  )
                )
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (r, o) {
              return r.timeString !== o.time ? { time: r.timeString } : null;
            },
          },
        ]
      ),
      n
    );
  })();
function t6(e) {
  var t = e.className,
    n = e.children,
    r = e.showPopperArrow,
    o = e.arrowProps,
    i = o === void 0 ? {} : o;
  return B.createElement(
    "div",
    { className: t },
    r &&
      B.createElement(
        "div",
        El({ className: "react-datepicker__triangle" }, i)
      ),
    n
  );
}
var n6 = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  r6 = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n(r) {
      var o;
      return (
        et(this, n),
        x(P((o = t.call(this, r))), "handleClickOutside", function (i) {
          o.props.onClickOutside(i);
        }),
        x(P(o), "setClickOutsideRef", function () {
          return o.containerRef.current;
        }),
        x(P(o), "handleDropdownFocus", function (i) {
          (function () {
            var a = (
              (arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {}
              ).className || ""
            ).split(/\s+/);
            return n6.some(function (s) {
              return a.indexOf(s) >= 0;
            });
          })(i.target) && o.props.onDropdownFocus();
        }),
        x(P(o), "getDateInView", function () {
          var i = o.props,
            a = i.preSelection,
            s = i.selected,
            u = i.openToDate,
            l = Vw(o.props),
            c = Ww(o.props),
            f = Ye(),
            h = u || s || a;
          return h || (l && Dn(f, l) ? l : c && cr(f, c) ? c : f);
        }),
        x(P(o), "increaseMonth", function () {
          o.setState(
            function (i) {
              var a = i.date;
              return { date: Mn(a, 1) };
            },
            function () {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        x(P(o), "decreaseMonth", function () {
          o.setState(
            function (i) {
              var a = i.date;
              return { date: Ii(a, 1) };
            },
            function () {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        x(P(o), "handleDayClick", function (i, a, s) {
          o.props.onSelect(i, a, s),
            o.props.setPreSelection && o.props.setPreSelection(i);
        }),
        x(P(o), "handleDayMouseEnter", function (i) {
          o.setState({ selectingDate: i }),
            o.props.onDayMouseEnter && o.props.onDayMouseEnter(i);
        }),
        x(P(o), "handleMonthMouseLeave", function () {
          o.setState({ selectingDate: null }),
            o.props.onMonthMouseLeave && o.props.onMonthMouseLeave();
        }),
        x(P(o), "handleYearChange", function (i) {
          o.props.onYearChange && o.props.onYearChange(i),
            o.props.adjustDateOnChange &&
              (o.props.onSelect && o.props.onSelect(i),
              o.props.setOpen && o.props.setOpen(!0)),
            o.props.setPreSelection && o.props.setPreSelection(i);
        }),
        x(P(o), "handleMonthChange", function (i) {
          o.props.onMonthChange && o.props.onMonthChange(i),
            o.props.adjustDateOnChange &&
              (o.props.onSelect && o.props.onSelect(i),
              o.props.setOpen && o.props.setOpen(!0)),
            o.props.setPreSelection && o.props.setPreSelection(i);
        }),
        x(P(o), "handleMonthYearChange", function (i) {
          o.handleYearChange(i), o.handleMonthChange(i);
        }),
        x(P(o), "changeYear", function (i) {
          o.setState(
            function (a) {
              var s = a.date;
              return { date: ou(s, i) };
            },
            function () {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        x(P(o), "changeMonth", function (i) {
          o.setState(
            function (a) {
              var s = a.date;
              return { date: dn(s, i) };
            },
            function () {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        x(P(o), "changeMonthYear", function (i) {
          o.setState(
            function (a) {
              var s = a.date;
              return { date: ou(dn(s, ht(i)), me(i)) };
            },
            function () {
              return o.handleMonthYearChange(o.state.date);
            }
          );
        }),
        x(P(o), "header", function () {
          var i =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : o.state.date,
            a = gh(i, o.props.locale, o.props.calendarStartDay),
            s = [];
          return (
            o.props.showWeekNumbers &&
              s.push(
                B.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  o.props.weekLabel || "#"
                )
              ),
            s.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (u) {
                var l = Ao(a, u),
                  c = o.formatWeekday(l, o.props.locale),
                  f = o.props.weekDayClassName
                    ? o.props.weekDayClassName(l)
                    : void 0;
                return B.createElement(
                  "div",
                  { key: u, className: yt("react-datepicker__day-name", f) },
                  c
                );
              })
            )
          );
        }),
        x(P(o), "formatWeekday", function (i, a) {
          return o.props.formatWeekDay
            ? (function (s, u, l) {
                return u(je(s, "EEEE", l));
              })(i, o.props.formatWeekDay, a)
            : o.props.useWeekdaysShort
            ? (function (s, u) {
                return je(s, "EEE", u);
              })(i, a)
            : (function (s, u) {
                return je(s, "EEEEEE", u);
              })(i, a);
        }),
        x(P(o), "decreaseYear", function () {
          o.setState(
            function (i) {
              var a = i.date;
              return {
                date: Ui(
                  a,
                  o.props.showYearPicker ? o.props.yearItemNumber : 1
                ),
              };
            },
            function () {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        x(P(o), "renderPreviousButton", function () {
          if (!o.props.renderCustomHeader) {
            var i;
            switch (!0) {
              case o.props.showMonthYearPicker:
                i = ng(o.state.date, o.props);
                break;
              case o.props.showYearPicker:
                i = (function (y) {
                  var w =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                    _ = w.minDate,
                    E = w.yearItemNumber,
                    U = E === void 0 ? 12 : E,
                    L = pi(Zo(Ui(y, U)), U).endPeriod,
                    j = _ && me(_);
                  return (j && j > L) || !1;
                })(o.state.date, o.props);
                break;
              default:
                i = eg(o.state.date, o.props);
            }
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !i) &&
              !o.props.showTimeSelectOnly
            ) {
              var a = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous",
                ],
                s = o.decreaseMonth;
              (o.props.showMonthYearPicker ||
                o.props.showQuarterYearPicker ||
                o.props.showYearPicker) &&
                (s = o.decreaseYear),
                i &&
                  o.props.showDisabledMonthNavigation &&
                  (a.push("react-datepicker__navigation--previous--disabled"),
                  (s = null));
              var u =
                  o.props.showMonthYearPicker ||
                  o.props.showQuarterYearPicker ||
                  o.props.showYearPicker,
                l = o.props,
                c = l.previousMonthButtonLabel,
                f = l.previousYearButtonLabel,
                h = o.props,
                m = h.previousMonthAriaLabel,
                v =
                  m === void 0
                    ? typeof c == "string"
                      ? c
                      : "Previous Month"
                    : m,
                g = h.previousYearAriaLabel,
                O =
                  g === void 0
                    ? typeof f == "string"
                      ? f
                      : "Previous Year"
                    : g;
              return B.createElement(
                "button",
                {
                  type: "button",
                  className: a.join(" "),
                  onClick: s,
                  onKeyDown: o.props.handleOnKeyDown,
                  "aria-label": u ? O : v,
                },
                B.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--previous",
                    ].join(" "),
                  },
                  u
                    ? o.props.previousYearButtonLabel
                    : o.props.previousMonthButtonLabel
                )
              );
            }
          }
        }),
        x(P(o), "increaseYear", function () {
          o.setState(
            function (i) {
              var a = i.date;
              return {
                date: yo(
                  a,
                  o.props.showYearPicker ? o.props.yearItemNumber : 1
                ),
              };
            },
            function () {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        x(P(o), "renderNextButton", function () {
          if (!o.props.renderCustomHeader) {
            var i;
            switch (!0) {
              case o.props.showMonthYearPicker:
                i = rg(o.state.date, o.props);
                break;
              case o.props.showYearPicker:
                i = (function (y) {
                  var w =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                    _ = w.maxDate,
                    E = w.yearItemNumber,
                    U = E === void 0 ? 12 : E,
                    L = pi(yo(y, U), U).startPeriod,
                    j = _ && me(_);
                  return (j && j < L) || !1;
                })(o.state.date, o.props);
                break;
              default:
                i = tg(o.state.date, o.props);
            }
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !i) &&
              !o.props.showTimeSelectOnly
            ) {
              var a = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next",
              ];
              o.props.showTimeSelect &&
                a.push("react-datepicker__navigation--next--with-time"),
                o.props.todayButton &&
                  a.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var s = o.increaseMonth;
              (o.props.showMonthYearPicker ||
                o.props.showQuarterYearPicker ||
                o.props.showYearPicker) &&
                (s = o.increaseYear),
                i &&
                  o.props.showDisabledMonthNavigation &&
                  (a.push("react-datepicker__navigation--next--disabled"),
                  (s = null));
              var u =
                  o.props.showMonthYearPicker ||
                  o.props.showQuarterYearPicker ||
                  o.props.showYearPicker,
                l = o.props,
                c = l.nextMonthButtonLabel,
                f = l.nextYearButtonLabel,
                h = o.props,
                m = h.nextMonthAriaLabel,
                v =
                  m === void 0 ? (typeof c == "string" ? c : "Next Month") : m,
                g = h.nextYearAriaLabel,
                O = g === void 0 ? (typeof f == "string" ? f : "Next Year") : g;
              return B.createElement(
                "button",
                {
                  type: "button",
                  className: a.join(" "),
                  onClick: s,
                  onKeyDown: o.props.handleOnKeyDown,
                  "aria-label": u ? O : v,
                },
                B.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--next",
                    ].join(" "),
                  },
                  u ? o.props.nextYearButtonLabel : o.props.nextMonthButtonLabel
                )
              );
            }
          }
        }),
        x(P(o), "renderCurrentMonth", function () {
          var i =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : o.state.date,
            a = ["react-datepicker__current-month"];
          return (
            o.props.showYearDropdown &&
              a.push("react-datepicker__current-month--hasYearDropdown"),
            o.props.showMonthDropdown &&
              a.push("react-datepicker__current-month--hasMonthDropdown"),
            o.props.showMonthYearDropdown &&
              a.push("react-datepicker__current-month--hasMonthYearDropdown"),
            B.createElement(
              "div",
              { className: a.join(" ") },
              je(i, o.props.dateFormat, o.props.locale)
            )
          );
        }),
        x(P(o), "renderYearDropdown", function () {
          var i =
            arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (o.props.showYearDropdown && !i)
            return B.createElement(YA, {
              adjustDateOnChange: o.props.adjustDateOnChange,
              date: o.state.date,
              onSelect: o.props.onSelect,
              setOpen: o.props.setOpen,
              dropdownMode: o.props.dropdownMode,
              onChange: o.changeYear,
              minDate: o.props.minDate,
              maxDate: o.props.maxDate,
              year: me(o.state.date),
              scrollableYearDropdown: o.props.scrollableYearDropdown,
              yearDropdownItemNumber: o.props.yearDropdownItemNumber,
            });
        }),
        x(P(o), "renderMonthDropdown", function () {
          var i =
            arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (o.props.showMonthDropdown && !i)
            return B.createElement(WA, {
              dropdownMode: o.props.dropdownMode,
              locale: o.props.locale,
              onChange: o.changeMonth,
              month: ht(o.state.date),
              useShortMonthInDropdown: o.props.useShortMonthInDropdown,
            });
        }),
        x(P(o), "renderMonthYearDropdown", function () {
          var i =
            arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (o.props.showMonthYearDropdown && !i)
            return B.createElement(qA, {
              dropdownMode: o.props.dropdownMode,
              locale: o.props.locale,
              dateFormat: o.props.dateFormat,
              onChange: o.changeMonthYear,
              minDate: o.props.minDate,
              maxDate: o.props.maxDate,
              date: o.state.date,
              scrollableMonthYearDropdown: o.props.scrollableMonthYearDropdown,
            });
        }),
        x(P(o), "renderTodayButton", function () {
          if (o.props.todayButton && !o.props.showTimeSelectOnly)
            return B.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function (i) {
                  return o.props.onSelect(wn(Ye()), i);
                },
              },
              o.props.todayButton
            );
        }),
        x(P(o), "renderDefaultHeader", function (i) {
          var a = i.monthDate,
            s = i.i;
          return B.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                o.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : ""
              ),
            },
            o.renderCurrentMonth(a),
            B.createElement(
              "div",
              {
                className:
                  "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                    o.props.dropdownMode
                  ),
                onFocus: o.handleDropdownFocus,
              },
              o.renderMonthDropdown(s !== 0),
              o.renderMonthYearDropdown(s !== 0),
              o.renderYearDropdown(s !== 0)
            ),
            B.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              o.header(a)
            )
          );
        }),
        x(P(o), "renderCustomHeader", function () {
          var i =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            a = i.monthDate,
            s = i.i;
          if (
            (o.props.showTimeSelect && !o.state.monthContainer) ||
            o.props.showTimeSelectOnly
          )
            return null;
          var u = eg(o.state.date, o.props),
            l = tg(o.state.date, o.props),
            c = ng(o.state.date, o.props),
            f = rg(o.state.date, o.props),
            h =
              !o.props.showMonthYearPicker &&
              !o.props.showQuarterYearPicker &&
              !o.props.showYearPicker;
          return B.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: o.props.onDropdownFocus,
            },
            o.props.renderCustomHeader(
              zy(
                zy({}, o.state),
                {},
                {
                  customHeaderCount: s,
                  monthDate: a,
                  changeMonth: o.changeMonth,
                  changeYear: o.changeYear,
                  decreaseMonth: o.decreaseMonth,
                  increaseMonth: o.increaseMonth,
                  decreaseYear: o.decreaseYear,
                  increaseYear: o.increaseYear,
                  prevMonthButtonDisabled: u,
                  nextMonthButtonDisabled: l,
                  prevYearButtonDisabled: c,
                  nextYearButtonDisabled: f,
                }
              )
            ),
            h &&
              B.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                o.header(a)
              )
          );
        }),
        x(P(o), "renderYearHeader", function () {
          var i = o.state.date,
            a = o.props,
            s = a.showYearPicker,
            u = pi(i, a.yearItemNumber),
            l = u.startPeriod,
            c = u.endPeriod;
          return B.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            s ? "".concat(l, " - ").concat(c) : me(i)
          );
        }),
        x(P(o), "renderHeader", function (i) {
          switch (!0) {
            case o.props.renderCustomHeader !== void 0:
              return o.renderCustomHeader(i);
            case o.props.showMonthYearPicker ||
              o.props.showQuarterYearPicker ||
              o.props.showYearPicker:
              return o.renderYearHeader(i);
            default:
              return o.renderDefaultHeader(i);
          }
        }),
        x(P(o), "renderMonths", function () {
          if (!o.props.showTimeSelectOnly && !o.props.showYearPicker) {
            for (
              var i = [],
                a = o.props.showPreviousMonths ? o.props.monthsShown - 1 : 0,
                s = Ii(o.state.date, a),
                u = 0;
              u < o.props.monthsShown;
              ++u
            ) {
              var l = u - o.props.monthSelectedIn,
                c = Mn(s, l),
                f = "month-".concat(u),
                h = u < o.props.monthsShown - 1,
                m = u > 0;
              i.push(
                B.createElement(
                  "div",
                  {
                    key: f,
                    ref: function (v) {
                      o.monthContainer = v;
                    },
                    className: "react-datepicker__month-container",
                  },
                  o.renderHeader({ monthDate: c, i: u }),
                  B.createElement(ZA, {
                    chooseDayAriaLabelPrefix: o.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      o.props.disabledDayAriaLabelPrefix,
                    weekAriaLabelPrefix: o.props.weekAriaLabelPrefix,
                    ariaLabelPrefix: o.props.monthAriaLabelPrefix,
                    onChange: o.changeMonthYear,
                    day: c,
                    dayClassName: o.props.dayClassName,
                    calendarStartDay: o.props.calendarStartDay,
                    monthClassName: o.props.monthClassName,
                    onDayClick: o.handleDayClick,
                    handleOnKeyDown: o.props.handleOnDayKeyDown,
                    onDayMouseEnter: o.handleDayMouseEnter,
                    onMouseLeave: o.handleMonthMouseLeave,
                    onWeekSelect: o.props.onWeekSelect,
                    orderInDisplay: u,
                    formatWeekNumber: o.props.formatWeekNumber,
                    locale: o.props.locale,
                    minDate: o.props.minDate,
                    maxDate: o.props.maxDate,
                    excludeDates: o.props.excludeDates,
                    excludeDateIntervals: o.props.excludeDateIntervals,
                    highlightDates: o.props.highlightDates,
                    selectingDate: o.state.selectingDate,
                    includeDates: o.props.includeDates,
                    includeDateIntervals: o.props.includeDateIntervals,
                    inline: o.props.inline,
                    shouldFocusDayInline: o.props.shouldFocusDayInline,
                    fixedHeight: o.props.fixedHeight,
                    filterDate: o.props.filterDate,
                    preSelection: o.props.preSelection,
                    setPreSelection: o.props.setPreSelection,
                    selected: o.props.selected,
                    selectsStart: o.props.selectsStart,
                    selectsEnd: o.props.selectsEnd,
                    selectsRange: o.props.selectsRange,
                    selectsDisabledDaysInRange:
                      o.props.selectsDisabledDaysInRange,
                    showWeekNumbers: o.props.showWeekNumbers,
                    startDate: o.props.startDate,
                    endDate: o.props.endDate,
                    peekNextMonth: o.props.peekNextMonth,
                    setOpen: o.props.setOpen,
                    shouldCloseOnSelect: o.props.shouldCloseOnSelect,
                    renderDayContents: o.props.renderDayContents,
                    disabledKeyboardNavigation:
                      o.props.disabledKeyboardNavigation,
                    showMonthYearPicker: o.props.showMonthYearPicker,
                    showFullMonthYearPicker: o.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      o.props.showTwoColumnMonthYearPicker,
                    showFourColumnMonthYearPicker:
                      o.props.showFourColumnMonthYearPicker,
                    showYearPicker: o.props.showYearPicker,
                    showQuarterYearPicker: o.props.showQuarterYearPicker,
                    isInputFocused: o.props.isInputFocused,
                    containerRef: o.containerRef,
                    monthShowsDuplicateDaysEnd: h,
                    monthShowsDuplicateDaysStart: m,
                  })
                )
              );
            }
            return i;
          }
        }),
        x(P(o), "renderYears", function () {
          if (!o.props.showTimeSelectOnly)
            return o.props.showYearPicker
              ? B.createElement(
                  "div",
                  { className: "react-datepicker__year--container" },
                  o.renderHeader(),
                  B.createElement(
                    XA,
                    El(
                      { onDayClick: o.handleDayClick, date: o.state.date },
                      o.props
                    )
                  )
                )
              : void 0;
        }),
        x(P(o), "renderTimeSection", function () {
          if (
            o.props.showTimeSelect &&
            (o.state.monthContainer || o.props.showTimeSelectOnly)
          )
            return B.createElement(zw, {
              selected: o.props.selected,
              openToDate: o.props.openToDate,
              onChange: o.props.onTimeChange,
              timeClassName: o.props.timeClassName,
              format: o.props.timeFormat,
              includeTimes: o.props.includeTimes,
              intervals: o.props.timeIntervals,
              minTime: o.props.minTime,
              maxTime: o.props.maxTime,
              excludeTimes: o.props.excludeTimes,
              filterTime: o.props.filterTime,
              timeCaption: o.props.timeCaption,
              todayButton: o.props.todayButton,
              showMonthDropdown: o.props.showMonthDropdown,
              showMonthYearDropdown: o.props.showMonthYearDropdown,
              showYearDropdown: o.props.showYearDropdown,
              withPortal: o.props.withPortal,
              monthRef: o.state.monthContainer,
              injectTimes: o.props.injectTimes,
              locale: o.props.locale,
              handleOnKeyDown: o.props.handleOnKeyDown,
              showTimeSelectOnly: o.props.showTimeSelectOnly,
            });
        }),
        x(P(o), "renderInputTimeSection", function () {
          var i = new Date(o.props.selected),
            a =
              Vn(i) && Boolean(o.props.selected)
                ? "".concat(ig(i.getHours()), ":").concat(ig(i.getMinutes()))
                : "";
          if (o.props.showTimeInput)
            return B.createElement(e6, {
              date: i,
              timeString: a,
              timeInputLabel: o.props.timeInputLabel,
              onChange: o.props.onTimeChange,
              customTimeInput: o.props.customTimeInput,
            });
        }),
        (o.containerRef = B.createRef()),
        (o.state = {
          date: o.getDateInView(),
          selectingDate: null,
          monthContainer: null,
        }),
        o
      );
    }
    return (
      tt(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              var r = this;
              this.props.showTimeSelect &&
                (this.assignMonthContainer = void r.setState({
                  monthContainer: r.monthContainer,
                }));
            },
          },
          {
            key: "componentDidUpdate",
            value: function (r) {
              this.props.preSelection &&
              !_t(this.props.preSelection, r.preSelection)
                ? this.setState({ date: this.props.preSelection })
                : this.props.openToDate &&
                  !_t(this.props.openToDate, r.openToDate) &&
                  this.setState({ date: this.props.openToDate });
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props.container || t6;
              return B.createElement(
                "div",
                { ref: this.containerRef },
                B.createElement(
                  r,
                  {
                    className: yt("react-datepicker", this.props.className, {
                      "react-datepicker--time-only":
                        this.props.showTimeSelectOnly,
                    }),
                    showPopperArrow: this.props.showPopperArrow,
                    arrowProps: this.props.arrowProps,
                  },
                  this.renderPreviousButton(),
                  this.renderNextButton(),
                  this.renderMonths(),
                  this.renderYears(),
                  this.renderTodayButton(),
                  this.renderTimeSection(),
                  this.renderInputTimeSection(),
                  this.props.children
                )
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                onDropdownFocus: function () {},
                monthsShown: 1,
                monthSelectedIn: 0,
                forceShowMonthNavigation: !1,
                timeCaption: "Time",
                previousYearButtonLabel: "Previous Year",
                nextYearButtonLabel: "Next Year",
                previousMonthButtonLabel: "Previous Month",
                nextMonthButtonLabel: "Next Month",
                customTimeInput: null,
                yearItemNumber: 12,
              };
            },
          },
        ]
      ),
      n
    );
  })(),
  Kw = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n(r) {
      var o;
      return (
        et(this, n),
        ((o = t.call(this, r)).el = document.createElement("div")),
        o
      );
    }
    return (
      tt(n, [
        {
          key: "componentDidMount",
          value: function () {
            (this.portalRoot = (
              this.props.portalHost || document
            ).getElementById(this.props.portalId)),
              this.portalRoot ||
                ((this.portalRoot = document.createElement("div")),
                this.portalRoot.setAttribute("id", this.props.portalId),
                (this.props.portalHost || document.body).appendChild(
                  this.portalRoot
                )),
              this.portalRoot.appendChild(this.el);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.portalRoot.removeChild(this.el);
          },
        },
        {
          key: "render",
          value: function () {
            return S2.createPortal(this.props.children, this.el);
          },
        },
      ]),
      n
    );
  })(),
  o6 = function (e) {
    return !e.disabled && e.tabIndex !== -1;
  },
  i6 = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n(r) {
      var o;
      return (
        et(this, n),
        x(P((o = t.call(this, r))), "getTabChildren", function () {
          return Array.prototype.slice
            .call(
              o.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(o6);
        }),
        x(P(o), "handleFocusStart", function (i) {
          var a = o.getTabChildren();
          a && a.length > 1 && a[a.length - 1].focus();
        }),
        x(P(o), "handleFocusEnd", function (i) {
          var a = o.getTabChildren();
          a && a.length > 1 && a[0].focus();
        }),
        (o.tabLoopRef = B.createRef()),
        o
      );
    }
    return (
      tt(
        n,
        [
          {
            key: "render",
            value: function () {
              return this.props.enableTabLoop
                ? B.createElement(
                    "div",
                    {
                      className: "react-datepicker__tab-loop",
                      ref: this.tabLoopRef,
                    },
                    B.createElement("div", {
                      className: "react-datepicker__tab-loop__start",
                      tabIndex: "0",
                      onFocus: this.handleFocusStart,
                    }),
                    this.props.children,
                    B.createElement("div", {
                      className: "react-datepicker__tab-loop__end",
                      tabIndex: "0",
                      onFocus: this.handleFocusEnd,
                    })
                  )
                : this.props.children;
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return { enableTabLoop: !0 };
            },
          },
        ]
      ),
      n
    );
  })(),
  a6 = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n() {
      return et(this, n), t.apply(this, arguments);
    }
    return (
      tt(
        n,
        [
          {
            key: "render",
            value: function () {
              var r,
                o = this.props,
                i = o.className,
                a = o.wrapperClassName,
                s = o.hidePopper,
                u = o.popperComponent,
                l = o.popperModifiers,
                c = o.popperPlacement,
                f = o.popperProps,
                h = o.targetComponent,
                m = o.enableTabLoop,
                v = o.popperOnKeyDown,
                g = o.portalId,
                O = o.portalHost;
              if (!s) {
                var y = yt("react-datepicker-popper", i);
                r = B.createElement(
                  xA,
                  El({ modifiers: l, placement: c }, f),
                  function (_) {
                    var E = _.ref,
                      U = _.style,
                      L = _.placement,
                      j = _.arrowProps;
                    return B.createElement(
                      i6,
                      { enableTabLoop: m },
                      B.createElement(
                        "div",
                        {
                          ref: E,
                          style: U,
                          className: y,
                          "data-placement": L,
                          onKeyDown: v,
                        },
                        B.cloneElement(u, { arrowProps: j })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (r = B.createElement(this.props.popperContainer, {}, r)),
                g &&
                  !s &&
                  (r = B.createElement(Kw, { portalId: g, portalHost: O }, r));
              var w = yt("react-datepicker-wrapper", a);
              return B.createElement(
                sT,
                { className: "react-datepicker-manager" },
                B.createElement(EA, null, function (_) {
                  var E = _.ref;
                  return B.createElement("div", { ref: E, className: w }, h);
                }),
                r
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                hidePopper: !0,
                popperModifiers: [],
                popperProps: {},
                popperPlacement: "bottom-start",
              };
            },
          },
        ]
      ),
      n
    );
  })(),
  s6 = bl(r6),
  zp = (function (e) {
    nt(n, B.Component);
    var t = rt(n);
    function n(r) {
      var o;
      return (
        et(this, n),
        x(P((o = t.call(this, r))), "getPreSelection", function () {
          return o.props.openToDate
            ? o.props.openToDate
            : o.props.selectsEnd && o.props.startDate
            ? o.props.startDate
            : o.props.selectsStart && o.props.endDate
            ? o.props.endDate
            : Ye();
        }),
        x(P(o), "calcInitialState", function () {
          var i,
            a = o.getPreSelection(),
            s = Vw(o.props),
            u = Ww(o.props),
            l = s && Dn(a, wn(s)) ? s : u && cr(a, Tf(u)) ? u : a;
          return {
            open: o.props.startOpen || !1,
            preventFocus: !1,
            preSelection:
              (i = o.props.selectsRange
                ? o.props.startDate
                : o.props.selected) !== null && i !== void 0
                ? i
                : l,
            highlightDates: og(o.props.highlightDates),
            focused: !1,
            shouldFocusDayInline: !1,
          };
        }),
        x(P(o), "clearPreventFocusTimeout", function () {
          o.preventFocusTimeout && clearTimeout(o.preventFocusTimeout);
        }),
        x(P(o), "setFocus", function () {
          o.input && o.input.focus && o.input.focus({ preventScroll: !0 });
        }),
        x(P(o), "setBlur", function () {
          o.input && o.input.blur && o.input.blur(), o.cancelFocusInput();
        }),
        x(P(o), "setOpen", function (i) {
          var a =
            arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          o.setState(
            {
              open: i,
              preSelection:
                i && o.state.open
                  ? o.state.preSelection
                  : o.calcInitialState().preSelection,
              lastPreSelectChange: hc,
            },
            function () {
              i ||
                o.setState(
                  function (s) {
                    return { focused: !!a && s.focused };
                  },
                  function () {
                    !a && o.setBlur(), o.setState({ inputValue: null });
                  }
                );
            }
          );
        }),
        x(P(o), "inputOk", function () {
          return th(o.state.preSelection);
        }),
        x(P(o), "isCalendarOpen", function () {
          return o.props.open === void 0
            ? o.state.open && !o.props.disabled && !o.props.readOnly
            : o.props.open;
        }),
        x(P(o), "handleFocus", function (i) {
          o.state.preventFocus ||
            (o.props.onFocus(i),
            o.props.preventOpenOnFocus || o.props.readOnly || o.setOpen(!0)),
            o.setState({ focused: !0 });
        }),
        x(P(o), "cancelFocusInput", function () {
          clearTimeout(o.inputFocusTimeout), (o.inputFocusTimeout = null);
        }),
        x(P(o), "deferFocusInput", function () {
          o.cancelFocusInput(),
            (o.inputFocusTimeout = setTimeout(function () {
              return o.setFocus();
            }, 1));
        }),
        x(P(o), "handleDropdownFocus", function () {
          o.cancelFocusInput();
        }),
        x(P(o), "handleBlur", function (i) {
          (!o.state.open || o.props.withPortal || o.props.showTimeInput) &&
            o.props.onBlur(i),
            o.setState({ focused: !1 });
        }),
        x(P(o), "handleCalendarClickOutside", function (i) {
          o.props.inline || o.setOpen(!1),
            o.props.onClickOutside(i),
            o.props.withPortal && i.preventDefault();
        }),
        x(P(o), "handleChange", function () {
          for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
            a[s] = arguments[s];
          var u = a[0];
          if (
            !o.props.onChangeRaw ||
            (o.props.onChangeRaw.apply(P(o), a),
            typeof u.isDefaultPrevented == "function" &&
              !u.isDefaultPrevented())
          ) {
            o.setState({ inputValue: u.target.value, lastPreSelectChange: u6 });
            var l = kA(
              u.target.value,
              o.props.dateFormat,
              o.props.locale,
              o.props.strictParsing,
              o.props.minDate
            );
            (!l && u.target.value) || o.setSelected(l, u, !0);
          }
        }),
        x(P(o), "handleSelect", function (i, a, s) {
          if (
            (o.setState({ preventFocus: !0 }, function () {
              return (
                (o.preventFocusTimeout = setTimeout(function () {
                  return o.setState({ preventFocus: !1 });
                }, 50)),
                o.preventFocusTimeout
              );
            }),
            o.props.onChangeRaw && o.props.onChangeRaw(a),
            o.setSelected(i, a, !1, s),
            !o.props.shouldCloseOnSelect || o.props.showTimeSelect)
          )
            o.setPreSelection(i);
          else if (!o.props.inline) {
            o.props.selectsRange || o.setOpen(!1);
            var u = o.props,
              l = u.startDate,
              c = u.endDate;
            !l || c || Dn(i, l) || o.setOpen(!1);
          }
        }),
        x(P(o), "setSelected", function (i, a, s, u) {
          var l = i;
          if (l === null || !Pl(l, o.props)) {
            var c = o.props,
              f = c.onChange,
              h = c.selectsRange,
              m = c.startDate,
              v = c.endDate;
            if (!Jn(o.props.selected, l) || o.props.allowSameDay || h)
              if (
                (l !== null &&
                  (!o.props.selected ||
                    (s &&
                      (o.props.showTimeSelect ||
                        o.props.showTimeSelectOnly ||
                        o.props.showTimeInput)) ||
                    (l = Gy(l, {
                      hour: sn(o.props.selected),
                      minute: an(o.props.selected),
                      second: QE(o.props.selected),
                    })),
                  o.props.inline || o.setState({ preSelection: l }),
                  o.props.focusSelectedMonth ||
                    o.setState({ monthSelectedIn: u })),
                h)
              ) {
                var g = m && !v,
                  O = m && v;
                !m && !v
                  ? f([l, null], a)
                  : g && (Dn(l, m) ? f([l, null], a) : f([m, l], a)),
                  O && f([l, null], a);
              } else f(l, a);
            s || (o.props.onSelect(l, a), o.setState({ inputValue: null }));
          }
        }),
        x(P(o), "setPreSelection", function (i) {
          var a = o.props.minDate !== void 0,
            s = o.props.maxDate !== void 0,
            u = !0;
          if (i) {
            var l = wn(i);
            if (a && s) u = Es(i, o.props.minDate, o.props.maxDate);
            else if (a) {
              var c = wn(o.props.minDate);
              u = cr(i, c) || Jn(l, c);
            } else if (s) {
              var f = Tf(o.props.maxDate);
              u = Dn(i, f) || Jn(l, f);
            }
          }
          u && o.setState({ preSelection: i });
        }),
        x(P(o), "handleTimeChange", function (i) {
          var a = Gy(
            o.props.selected ? o.props.selected : o.getPreSelection(),
            { hour: sn(i), minute: an(i) }
          );
          o.setState({ preSelection: a }),
            o.props.onChange(a),
            o.props.shouldCloseOnSelect && o.setOpen(!1),
            o.props.showTimeInput && o.setOpen(!0),
            o.setState({ inputValue: null });
        }),
        x(P(o), "onInputClick", function () {
          o.props.disabled || o.props.readOnly || o.setOpen(!0),
            o.props.onInputClick();
        }),
        x(P(o), "onInputKeyDown", function (i) {
          o.props.onKeyDown(i);
          var a = i.key;
          if (o.state.open || o.props.inline || o.props.preventOpenOnFocus) {
            if (o.state.open) {
              if (a === "ArrowDown" || a === "ArrowUp") {
                i.preventDefault();
                var s =
                  o.calendar.componentNode &&
                  o.calendar.componentNode.querySelector(
                    '.react-datepicker__day[tabindex="0"]'
                  );
                return void (s && s.focus({ preventScroll: !0 }));
              }
              var u = Ye(o.state.preSelection);
              a === "Enter"
                ? (i.preventDefault(),
                  o.inputOk() && o.state.lastPreSelectChange === hc
                    ? (o.handleSelect(u, i),
                      !o.props.shouldCloseOnSelect && o.setPreSelection(u))
                    : o.setOpen(!1))
                : a === "Escape" && (i.preventDefault(), o.setOpen(!1)),
                o.inputOk() ||
                  o.props.onInputError({
                    code: 1,
                    msg: "Date input not valid.",
                  });
            }
          } else (a !== "ArrowDown" && a !== "ArrowUp" && a !== "Enter") || o.onInputClick();
        }),
        x(P(o), "onDayKeyDown", function (i) {
          o.props.onKeyDown(i);
          var a = i.key,
            s = Ye(o.state.preSelection);
          if (a === "Enter")
            i.preventDefault(),
              o.handleSelect(s, i),
              !o.props.shouldCloseOnSelect && o.setPreSelection(s);
          else if (a === "Escape")
            i.preventDefault(),
              o.setOpen(!1),
              o.inputOk() ||
                o.props.onInputError({ code: 1, msg: "Date input not valid." });
          else if (!o.props.disabledKeyboardNavigation) {
            var u;
            switch (a) {
              case "ArrowLeft":
                u = KE(s, 1);
                break;
              case "ArrowRight":
                u = Ao(s, 1);
                break;
              case "ArrowUp":
                u = qE(s, 1);
                break;
              case "ArrowDown":
                u = oh(s, 1);
                break;
              case "PageUp":
                u = Ii(s, 1);
                break;
              case "PageDown":
                u = Mn(s, 1);
                break;
              case "Home":
                u = Ui(s, 1);
                break;
              case "End":
                u = yo(s, 1);
            }
            if (!u)
              return void (
                o.props.onInputError &&
                o.props.onInputError({ code: 1, msg: "Date input not valid." })
              );
            if (
              (i.preventDefault(),
              o.setState({ lastPreSelectChange: hc }),
              o.props.adjustDateOnChange && o.setSelected(u),
              o.setPreSelection(u),
              o.props.inline)
            ) {
              var l = ht(s),
                c = ht(u),
                f = me(s),
                h = me(u);
              l !== c || f !== h
                ? o.setState({ shouldFocusDayInline: !0 })
                : o.setState({ shouldFocusDayInline: !1 });
            }
          }
        }),
        x(P(o), "onPopperKeyDown", function (i) {
          i.key === "Escape" &&
            (i.preventDefault(),
            o.setState({ preventFocus: !0 }, function () {
              o.setOpen(!1),
                setTimeout(function () {
                  o.setFocus(), o.setState({ preventFocus: !1 });
                });
            }));
        }),
        x(P(o), "onClearClick", function (i) {
          i && i.preventDefault && i.preventDefault(),
            o.props.selectsRange
              ? o.props.onChange([null, null], i)
              : o.props.onChange(null, i),
            o.setState({ inputValue: null });
        }),
        x(P(o), "clear", function () {
          o.onClearClick();
        }),
        x(P(o), "onScroll", function (i) {
          typeof o.props.closeOnScroll == "boolean" && o.props.closeOnScroll
            ? (i.target !== document &&
                i.target !== document.documentElement &&
                i.target !== document.body) ||
              o.setOpen(!1)
            : typeof o.props.closeOnScroll == "function" &&
              o.props.closeOnScroll(i) &&
              o.setOpen(!1);
        }),
        x(P(o), "renderCalendar", function () {
          return o.props.inline || o.isCalendarOpen()
            ? B.createElement(
                s6,
                {
                  ref: function (i) {
                    o.calendar = i;
                  },
                  locale: o.props.locale,
                  calendarStartDay: o.props.calendarStartDay,
                  chooseDayAriaLabelPrefix: o.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    o.props.disabledDayAriaLabelPrefix,
                  weekAriaLabelPrefix: o.props.weekAriaLabelPrefix,
                  monthAriaLabelPrefix: o.props.monthAriaLabelPrefix,
                  adjustDateOnChange: o.props.adjustDateOnChange,
                  setOpen: o.setOpen,
                  shouldCloseOnSelect: o.props.shouldCloseOnSelect,
                  dateFormat: o.props.dateFormatCalendar,
                  useWeekdaysShort: o.props.useWeekdaysShort,
                  formatWeekDay: o.props.formatWeekDay,
                  dropdownMode: o.props.dropdownMode,
                  selected: o.props.selected,
                  preSelection: o.state.preSelection,
                  onSelect: o.handleSelect,
                  onWeekSelect: o.props.onWeekSelect,
                  openToDate: o.props.openToDate,
                  minDate: o.props.minDate,
                  maxDate: o.props.maxDate,
                  selectsStart: o.props.selectsStart,
                  selectsEnd: o.props.selectsEnd,
                  selectsRange: o.props.selectsRange,
                  startDate: o.props.startDate,
                  endDate: o.props.endDate,
                  excludeDates: o.props.excludeDates,
                  excludeDateIntervals: o.props.excludeDateIntervals,
                  filterDate: o.props.filterDate,
                  onClickOutside: o.handleCalendarClickOutside,
                  formatWeekNumber: o.props.formatWeekNumber,
                  highlightDates: o.state.highlightDates,
                  includeDates: o.props.includeDates,
                  includeDateIntervals: o.props.includeDateIntervals,
                  includeTimes: o.props.includeTimes,
                  injectTimes: o.props.injectTimes,
                  inline: o.props.inline,
                  shouldFocusDayInline: o.state.shouldFocusDayInline,
                  peekNextMonth: o.props.peekNextMonth,
                  showMonthDropdown: o.props.showMonthDropdown,
                  showPreviousMonths: o.props.showPreviousMonths,
                  useShortMonthInDropdown: o.props.useShortMonthInDropdown,
                  showMonthYearDropdown: o.props.showMonthYearDropdown,
                  showWeekNumbers: o.props.showWeekNumbers,
                  showYearDropdown: o.props.showYearDropdown,
                  withPortal: o.props.withPortal,
                  forceShowMonthNavigation: o.props.forceShowMonthNavigation,
                  showDisabledMonthNavigation:
                    o.props.showDisabledMonthNavigation,
                  scrollableYearDropdown: o.props.scrollableYearDropdown,
                  scrollableMonthYearDropdown:
                    o.props.scrollableMonthYearDropdown,
                  todayButton: o.props.todayButton,
                  weekLabel: o.props.weekLabel,
                  outsideClickIgnoreClass:
                    "react-datepicker-ignore-onclickoutside",
                  fixedHeight: o.props.fixedHeight,
                  monthsShown: o.props.monthsShown,
                  monthSelectedIn: o.state.monthSelectedIn,
                  onDropdownFocus: o.handleDropdownFocus,
                  onMonthChange: o.props.onMonthChange,
                  onYearChange: o.props.onYearChange,
                  dayClassName: o.props.dayClassName,
                  weekDayClassName: o.props.weekDayClassName,
                  monthClassName: o.props.monthClassName,
                  timeClassName: o.props.timeClassName,
                  showTimeSelect: o.props.showTimeSelect,
                  showTimeSelectOnly: o.props.showTimeSelectOnly,
                  onTimeChange: o.handleTimeChange,
                  timeFormat: o.props.timeFormat,
                  timeIntervals: o.props.timeIntervals,
                  minTime: o.props.minTime,
                  maxTime: o.props.maxTime,
                  excludeTimes: o.props.excludeTimes,
                  filterTime: o.props.filterTime,
                  timeCaption: o.props.timeCaption,
                  className: o.props.calendarClassName,
                  container: o.props.calendarContainer,
                  yearItemNumber: o.props.yearItemNumber,
                  yearDropdownItemNumber: o.props.yearDropdownItemNumber,
                  previousMonthAriaLabel: o.props.previousMonthAriaLabel,
                  previousMonthButtonLabel: o.props.previousMonthButtonLabel,
                  nextMonthAriaLabel: o.props.nextMonthAriaLabel,
                  nextMonthButtonLabel: o.props.nextMonthButtonLabel,
                  previousYearAriaLabel: o.props.previousYearAriaLabel,
                  previousYearButtonLabel: o.props.previousYearButtonLabel,
                  nextYearAriaLabel: o.props.nextYearAriaLabel,
                  nextYearButtonLabel: o.props.nextYearButtonLabel,
                  timeInputLabel: o.props.timeInputLabel,
                  disabledKeyboardNavigation:
                    o.props.disabledKeyboardNavigation,
                  renderCustomHeader: o.props.renderCustomHeader,
                  popperProps: o.props.popperProps,
                  renderDayContents: o.props.renderDayContents,
                  onDayMouseEnter: o.props.onDayMouseEnter,
                  onMonthMouseLeave: o.props.onMonthMouseLeave,
                  selectsDisabledDaysInRange:
                    o.props.selectsDisabledDaysInRange,
                  showTimeInput: o.props.showTimeInput,
                  showMonthYearPicker: o.props.showMonthYearPicker,
                  showFullMonthYearPicker: o.props.showFullMonthYearPicker,
                  showTwoColumnMonthYearPicker:
                    o.props.showTwoColumnMonthYearPicker,
                  showFourColumnMonthYearPicker:
                    o.props.showFourColumnMonthYearPicker,
                  showYearPicker: o.props.showYearPicker,
                  showQuarterYearPicker: o.props.showQuarterYearPicker,
                  showPopperArrow: o.props.showPopperArrow,
                  excludeScrollbar: o.props.excludeScrollbar,
                  handleOnKeyDown: o.props.onKeyDown,
                  handleOnDayKeyDown: o.onDayKeyDown,
                  isInputFocused: o.state.focused,
                  customTimeInput: o.props.customTimeInput,
                  setPreSelection: o.setPreSelection,
                },
                o.props.children
              )
            : null;
        }),
        x(P(o), "renderDateInput", function () {
          var i,
            a = yt(
              o.props.className,
              x({}, "react-datepicker-ignore-onclickoutside", o.state.open)
            ),
            s =
              o.props.customInput || B.createElement("input", { type: "text" }),
            u = o.props.customInputRef || "ref",
            l =
              typeof o.props.value == "string"
                ? o.props.value
                : typeof o.state.inputValue == "string"
                ? o.state.inputValue
                : o.props.selectsRange
                ? (function (c, f, h) {
                    if (!c) return "";
                    var m = dc(c, h),
                      v = f ? dc(f, h) : "";
                    return "".concat(m, " - ").concat(v);
                  })(o.props.startDate, o.props.endDate, o.props)
                : dc(o.props.selected, o.props);
          return B.cloneElement(
            s,
            (x((i = {}), u, function (c) {
              o.input = c;
            }),
            x(i, "value", l),
            x(i, "onBlur", o.handleBlur),
            x(i, "onChange", o.handleChange),
            x(i, "onClick", o.onInputClick),
            x(i, "onFocus", o.handleFocus),
            x(i, "onKeyDown", o.onInputKeyDown),
            x(i, "id", o.props.id),
            x(i, "name", o.props.name),
            x(i, "autoFocus", o.props.autoFocus),
            x(i, "placeholder", o.props.placeholderText),
            x(i, "disabled", o.props.disabled),
            x(i, "autoComplete", o.props.autoComplete),
            x(i, "className", yt(s.props.className, a)),
            x(i, "title", o.props.title),
            x(i, "readOnly", o.props.readOnly),
            x(i, "required", o.props.required),
            x(i, "tabIndex", o.props.tabIndex),
            x(i, "aria-describedby", o.props.ariaDescribedBy),
            x(i, "aria-invalid", o.props.ariaInvalid),
            x(i, "aria-labelledby", o.props.ariaLabelledBy),
            x(i, "aria-required", o.props.ariaRequired),
            i)
          );
        }),
        x(P(o), "renderClearButton", function () {
          var i = o.props,
            a = i.isClearable,
            s = i.selected,
            u = i.startDate,
            l = i.endDate,
            c = i.clearButtonTitle,
            f = i.clearButtonClassName,
            h = f === void 0 ? "" : f,
            m = i.ariaLabelClose,
            v = m === void 0 ? "Close" : m;
          return !a || (s == null && u == null && l == null)
            ? null
            : B.createElement("button", {
                type: "button",
                className: "react-datepicker__close-icon ".concat(h).trim(),
                "aria-label": v,
                onClick: o.onClearClick,
                title: c,
                tabIndex: -1,
              });
        }),
        (o.state = o.calcInitialState()),
        o
      );
    }
    return (
      tt(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              window.addEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (r, o) {
              var i, a;
              r.inline &&
                ((i = r.selected),
                (a = this.props.selected),
                i && a ? ht(i) !== ht(a) || me(i) !== me(a) : i !== a) &&
                this.setPreSelection(this.props.selected),
                this.state.monthSelectedIn !== void 0 &&
                  r.monthsShown !== this.props.monthsShown &&
                  this.setState({ monthSelectedIn: 0 }),
                r.highlightDates !== this.props.highlightDates &&
                  this.setState({
                    highlightDates: og(this.props.highlightDates),
                  }),
                o.focused ||
                  Jn(r.selected, this.props.selected) ||
                  this.setState({ inputValue: null }),
                o.open !== this.state.open &&
                  (o.open === !1 &&
                    this.state.open === !0 &&
                    this.props.onCalendarOpen(),
                  o.open === !0 &&
                    this.state.open === !1 &&
                    this.props.onCalendarClose());
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.clearPreventFocusTimeout(),
                window.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "renderInputContainer",
            value: function () {
              return B.createElement(
                "div",
                { className: "react-datepicker__input-container" },
                this.renderDateInput(),
                this.renderClearButton()
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.renderCalendar();
              if (this.props.inline) return r;
              if (this.props.withPortal) {
                var o = this.state.open
                  ? B.createElement(
                      "div",
                      { className: "react-datepicker__portal" },
                      r
                    )
                  : null;
                return (
                  this.state.open &&
                    this.props.portalId &&
                    (o = B.createElement(
                      Kw,
                      {
                        portalId: this.props.portalId,
                        portalHost: this.props.portalHost,
                      },
                      o
                    )),
                  B.createElement("div", null, this.renderInputContainer(), o)
                );
              }
              return B.createElement(a6, {
                className: this.props.popperClassName,
                wrapperClassName: this.props.wrapperClassName,
                hidePopper: !this.isCalendarOpen(),
                portalId: this.props.portalId,
                portalHost: this.props.portalHost,
                popperModifiers: this.props.popperModifiers,
                targetComponent: this.renderInputContainer(),
                popperContainer: this.props.popperContainer,
                popperComponent: r,
                popperPlacement: this.props.popperPlacement,
                popperProps: this.props.popperProps,
                popperOnKeyDown: this.onPopperKeyDown,
                enableTabLoop: this.props.enableTabLoop,
              });
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                allowSameDay: !1,
                dateFormat: "MM/dd/yyyy",
                dateFormatCalendar: "LLLL yyyy",
                onChange: function () {},
                disabled: !1,
                disabledKeyboardNavigation: !1,
                dropdownMode: "scroll",
                onFocus: function () {},
                onBlur: function () {},
                onKeyDown: function () {},
                onInputClick: function () {},
                onSelect: function () {},
                onClickOutside: function () {},
                onMonthChange: function () {},
                onCalendarOpen: function () {},
                onCalendarClose: function () {},
                preventOpenOnFocus: !1,
                onYearChange: function () {},
                onInputError: function () {},
                monthsShown: 1,
                readOnly: !1,
                withPortal: !1,
                selectsDisabledDaysInRange: !1,
                shouldCloseOnSelect: !0,
                showTimeSelect: !1,
                showTimeInput: !1,
                showPreviousMonths: !1,
                showMonthYearPicker: !1,
                showFullMonthYearPicker: !1,
                showTwoColumnMonthYearPicker: !1,
                showFourColumnMonthYearPicker: !1,
                showYearPicker: !1,
                showQuarterYearPicker: !1,
                strictParsing: !1,
                timeIntervals: 30,
                timeCaption: "Time",
                previousMonthAriaLabel: "Previous Month",
                previousMonthButtonLabel: "Previous Month",
                nextMonthAriaLabel: "Next Month",
                nextMonthButtonLabel: "Next Month",
                previousYearAriaLabel: "Previous Year",
                previousYearButtonLabel: "Previous Year",
                nextYearAriaLabel: "Next Year",
                nextYearButtonLabel: "Next Year",
                timeInputLabel: "Time",
                enableTabLoop: !0,
                yearItemNumber: 12,
                renderDayContents: function (r) {
                  return r;
                },
                focusSelectedMonth: !1,
                showPopperArrow: !0,
                excludeScrollbar: !0,
                customTimeInput: null,
                calendarStartDay: void 0,
              };
            },
          },
        ]
      ),
      n
    );
  })(),
  u6 = "input",
  hc = "navigate";
var l6 = "/assets/cancel.38822f1b.svg";
function c6({ setButton: e }) {
  const {
      search: t,
      setSearch: n,
      status: r,
      setStatus: o,
      startDate: i,
      setStartDate: a,
      endDate: s,
      setEndDate: u,
    } = T.exports.useContext(hl),
    [l, c] = T.exports.useState(!1);
  return oe("div", {
    className: l ? "close-filter-container" : "filter-container",
    children: [
      oe("div", {
        children: [
          b("h2", { className: "filter-title", children: "Document title" }),
          b("input", {
            className: "filter-by-title",
            type: "text",
            name: "search",
            id: "search",
            placeholder: "Search by document title",
            required: !0,
            value: t,
            onChange: (h) => {
              n(h.target.value);
            },
          }),
        ],
      }),
      oe("div", {
        children: [
          b("h2", { className: "filter-title", children: "Status" }),
          oe("select", {
            value: r,
            className: "toggle-status",
            onChange: (h) => o(h.target.value),
            children: [
              b("option", { value: "", children: "---" }),
              ["valid", "expired", "pending", "failed", "revoked"].map((h) =>
                b("option", { value: h, children: h })
              ),
            ],
          }),
        ],
      }),
      oe("div", {
        children: [
          b("h2", { className: "filter-title", children: "Date" }),
          oe("div", {
            className: "calendars-container",
            children: [
              b(zp, {
                selected: i,
                className: i ? "without-calendar" : "with-calendar",
                placeholderText: "Start",
                dateFormat: "yyyy-MM-dd",
                closeOnScroll: (h) => h.target === document,
                onChange: (h) => a(h),
                showYearDropdown: !0,
                scrollableMonthYearDropdown: !0,
                showDisabledMonthNavigation: !0,
              }),
              b("p", { className: "to-word", children: "To" }),
              b(zp, {
                selected: s,
                className: s ? "without-calendar" : "with-calendar",
                placeholderText: "Finish",
                dateFormat: "yyyy-MM-dd",
                closeOnScroll: (h) => h.target === document,
                onChange: (h) => u(h),
                showYearDropdown: !0,
                scrollableMonthYearDropdown: !0,
                showDisabledMonthNavigation: !0,
              }),
            ],
          }),
        ],
      }),
      b("div", {
        className: "clear-button-container",
        children: b("button", {
          className: "clear-filters-button",
          type: "button",
          onClick: () => {
            n(""), o(""), a(null), u(null);
          },
          children: "Clear",
        }),
      }),
      b("button", {
        onClick: () => {
          c(!0);
          const h = setInterval(() => {
            e(!0), c(!1);
          }, 1300);
          setInterval(() => {
            clearInterval(h);
          }, 1350);
        },
        type: "button",
        className: "closing-button",
        children: b("img", { src: l6, alt: "cancel icon" }),
      }),
    ],
  });
}
function f6() {
  const { searchUser: e } = T.exports.useContext(St),
    [t, n] = T.exports.useState(!0);
  return (
    T.exports.useEffect(() => {
      e();
    }, []),
    b(B5, {
      children: b("div", {
        className: "certificate-page-container",
        children: oe("div", {
          className: "certificates-gallery",
          children: [
            b("h1", {
              className: "certificates-gallery-title",
              children: "Certificates",
            }),
            b("hr", { className: "separation-line" }),
            t ? b(R5, { setButton: n }) : b(c6, { setButton: n }),
            b(L5, {}),
          ],
        }),
      }),
    })
  );
}
var p6 = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0,
};
function d6(e) {
  if (typeof e == "number") return { value: e, unit: "px" };
  var t,
    n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? (t = parseFloat(n)) : (t = parseInt(n, 10));
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return p6[r]
    ? { value: t, unit: r }
    : (console.warn(
        "React Spinners: "
          .concat(e, " is not a valid css value. Defaulting to ")
          .concat(t, "px.")
      ),
      { value: t, unit: "px" });
}
function mc(e) {
  var t = d6(e);
  return "".concat(t.value).concat(t.unit);
}
var h6 = function (e, t, n) {
    var r = "react-spinners-".concat(e, "-").concat(n);
    if (typeof window == "undefined" || !window.document) return r;
    var o = document.createElement("style");
    document.head.appendChild(o);
    var i = o.sheet,
      a = `
    @keyframes `
        .concat(
          r,
          ` {
      `
        )
        .concat(
          t,
          `
    }
  `
        );
    return i && i.insertRule(a, 0), r;
  },
  Yu =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Yu =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        Yu.apply(this, arguments)
      );
    },
  m6 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    },
  v6 = h6(
    "BeatLoader",
    "50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}",
    "beat"
  );
function y6(e) {
  var t = e.loading,
    n = t === void 0 ? !0 : t,
    r = e.color,
    o = r === void 0 ? "#000000" : r,
    i = e.speedMultiplier,
    a = i === void 0 ? 1 : i,
    s = e.cssOverride,
    u = s === void 0 ? {} : s,
    l = e.size,
    c = l === void 0 ? 15 : l,
    f = e.margin,
    h = f === void 0 ? 2 : f,
    m = m6(e, [
      "loading",
      "color",
      "speedMultiplier",
      "cssOverride",
      "size",
      "margin",
    ]),
    v = Yu({ display: "inherit" }, u),
    g = function (O) {
      return {
        display: "inline-block",
        backgroundColor: o,
        width: mc(c),
        height: mc(c),
        margin: mc(h),
        borderRadius: "100%",
        animation: ""
          .concat(v6, " ")
          .concat(0.7 / a, "s ")
          .concat(O % 2 ? "0s" : "".concat(0.35 / a, "s"), " infinite linear"),
        animationFillMode: "both",
      };
    };
  return n
    ? T.exports.createElement(
        "span",
        Yu({ style: v }, m),
        T.exports.createElement("span", { style: g(1) }),
        T.exports.createElement("span", { style: g(2) }),
        T.exports.createElement("span", { style: g(3) })
      )
    : null;
}
function Dl({ children: e }) {
  const { userDetails: t } = T.exports.useContext(St);
  return oe("div", {
    className: "main",
    children: [
      b("div", { className: "first", children: t === null ? null : b(ow, {}) }),
      oe("div", {
        className: "second",
        children: [
          t === null ? b(aw, {}) : b(iw, {}),
          b("div", { children: e }),
        ],
      }),
    ],
  });
}
var g6 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACqSURBVHgBpZLBDcMgDEVxGAIxRpmgI3SEdpJmlPbWazdoF4Bkg9xgChQ7hyhBxCHkS9hg+T9ZMkIwMsY86XA9wJkxtXSPMV46VK6v2TOjHlvm7ASp2Vr7EozgjHkFqDHPgFrzBEjMh9UIZpVFE1DAKVpM04fBnd9xa+9SgKTgvf9prQl2BYCbUmoIIfTFgDMQuXzUQGRaOAqRuWIG8kVIKAYkkL9z7rPVNwLes2GdSfzfHgAAAABJRU5ErkJggg==";
function Sh(e) {
  var t = Object.entries(e)
    .filter(function (n) {
      var r = n[1];
      return r != null;
    })
    .map(function (n) {
      var r = n[0],
        o = n[1];
      return ""
        .concat(encodeURIComponent(r), "=")
        .concat(encodeURIComponent(String(o)));
    });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var w6 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  xn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (xn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        xn.apply(this, arguments)
      );
    },
  S6 =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, n, r) {
      function o(i) {
        return i instanceof n
          ? i
          : new n(function (a) {
              a(i);
            });
      }
      return new (n || (n = Promise))(function (i, a) {
        function s(c) {
          try {
            l(r.next(c));
          } catch (f) {
            a(f);
          }
        }
        function u(c) {
          try {
            l(r.throw(c));
          } catch (f) {
            a(f);
          }
        }
        function l(c) {
          c.done ? i(c.value) : o(c.value).then(s, u);
        }
        l((r = r.apply(e, t || [])).next());
      });
    },
  C6 =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        a;
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(l) {
        return function (c) {
          return u([l, c]);
        };
      }
      function u(l) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  l[0] & 2
                    ? o.return
                    : l[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, l[1])).done)
            )
              return i;
            switch (((o = 0), i && (l = [l[0] & 2, i.value]), l[0])) {
              case 0:
              case 1:
                i = l;
                break;
              case 4:
                return n.label++, { value: l[1], done: !1 };
              case 5:
                n.label++, (o = l[1]), (l = [0]);
                continue;
              case 7:
                (l = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (l[0] === 6 || l[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (l[0] === 3 && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                  n.label = l[1];
                  break;
                }
                if (l[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = l);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(l);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            l = t.call(e, n);
          } catch (c) {
            (l = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (l[0] & 5) throw l[1];
        return { value: l[0] ? l[1] : void 0, done: !0 };
      }
    },
  qw =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    },
  _6 = function (e) {
    return (
      !!e &&
      (typeof e == "object" || typeof e == "function") &&
      typeof e.then == "function"
    );
  },
  b6 = function (e, t) {
    return {
      left:
        window.outerWidth / 2 +
        (window.screenX || window.screenLeft || 0) -
        e / 2,
      top:
        window.outerHeight / 2 +
        (window.screenY || window.screenTop || 0) -
        t / 2,
    };
  },
  x6 = function (e, t) {
    return {
      top: (window.screen.height - t) / 2,
      left: (window.screen.width - e) / 2,
    };
  };
function E6(e, t, n) {
  var r = t.height,
    o = t.width,
    i = qw(t, ["height", "width"]),
    a = xn(
      {
        height: r,
        width: o,
        location: "no",
        toolbar: "no",
        status: "no",
        directories: "no",
        menubar: "no",
        scrollbars: "yes",
        resizable: "no",
        centerscreen: "yes",
        chrome: "yes",
      },
      i
    ),
    s = window.open(
      e,
      "",
      Object.keys(a)
        .map(function (l) {
          return "".concat(l, "=").concat(a[l]);
        })
        .join(", ")
    );
  if (n)
    var u = window.setInterval(function () {
      try {
        (s === null || s.closed) && (window.clearInterval(u), n(s));
      } catch (l) {
        console.error(l);
      }
    }, 1e3);
  return s;
}
var P6 = (function (e) {
    w6(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n.openShareDialog = function (r) {
          var o = n.props,
            i = o.onShareWindowClose,
            a = o.windowHeight,
            s = a === void 0 ? 400 : a,
            u = o.windowPosition,
            l = u === void 0 ? "windowCenter" : u,
            c = o.windowWidth,
            f = c === void 0 ? 550 : c,
            h = xn(
              { height: s, width: f },
              l === "windowCenter" ? b6(f, s) : x6(f, s)
            );
          E6(r, h, i);
        }),
        (n.handleClick = function (r) {
          return S6(n, void 0, void 0, function () {
            var o, i, a, s, u, l, c, f, h, m;
            return C6(this, function (v) {
              switch (v.label) {
                case 0:
                  return (
                    (o = this.props),
                    (i = o.beforeOnClick),
                    (a = o.disabled),
                    (s = o.networkLink),
                    (u = o.onClick),
                    (l = o.url),
                    (c = o.openShareDialogOnClick),
                    (f = o.opts),
                    (h = s(l, f)),
                    a
                      ? [2]
                      : (r.preventDefault(),
                        i ? ((m = i()), _6(m) ? [4, m] : [3, 2]) : [3, 2])
                  );
                case 1:
                  v.sent(), (v.label = 2);
                case 2:
                  return c && this.openShareDialog(h), u && u(r, h), [2];
              }
            });
          });
        }),
        n
      );
    }
    return (
      (t.prototype.render = function () {
        var n = this.props;
        n.beforeOnClick;
        var r = n.children,
          o = n.className,
          i = n.disabled,
          a = n.disabledStyle,
          s = n.forwardedRef;
        n.networkLink;
        var u = n.networkName;
        n.onShareWindowClose, n.openShareDialogOnClick, n.opts;
        var l = n.resetButtonStyle,
          c = n.style;
        n.url, n.windowHeight, n.windowPosition, n.windowWidth;
        var f = qw(n, [
            "beforeOnClick",
            "children",
            "className",
            "disabled",
            "disabledStyle",
            "forwardedRef",
            "networkLink",
            "networkName",
            "onShareWindowClose",
            "openShareDialogOnClick",
            "opts",
            "resetButtonStyle",
            "style",
            "url",
            "windowHeight",
            "windowPosition",
            "windowWidth",
          ]),
          h = yt(
            "react-share__ShareButton",
            { "react-share__ShareButton--disabled": !!i, disabled: !!i },
            o
          ),
          m = xn(
            xn(
              l
                ? {
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                    cursor: "pointer",
                  }
                : {},
              c
            ),
            i && a
          );
        return b(
          "button",
          Zt(
            Ut(
              {},
              xn({}, f, {
                "aria-label": f["aria-label"] || u,
                className: h,
                onClick: this.handleClick,
                ref: s,
                style: m,
              })
            ),
            { children: r }
          )
        );
      }),
      (t.defaultProps = {
        disabledStyle: { opacity: 0.6 },
        openShareDialogOnClick: !0,
        resetButtonStyle: !0,
      }),
      t
    );
  })(T.exports.Component),
  O6 = P6,
  Vu =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Vu =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        Vu.apply(this, arguments)
      );
    };
function Ch(e, t, n, r) {
  function o(i, a) {
    var s = n(i),
      u = Vu({}, i),
      l = Object.keys(s);
    return (
      l.forEach(function (c) {
        delete u[c];
      }),
      b(
        O6,
        Ut(
          {},
          Vu({}, r, u, {
            forwardedRef: a,
            networkName: e,
            networkLink: t,
            opts: n(i),
          })
        )
      )
    );
  }
  return (o.displayName = "ShareButton-".concat(e)), T.exports.forwardRef(o);
}
var D6 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  k6 = (function (e) {
    D6(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return (r.name = "AssertionError"), r;
    }
    return t;
  })(Error);
function di(e, t) {
  if (!e) throw new k6(t);
}
function T6(e, t) {
  var n = t.quote,
    r = t.hashtag;
  return (
    di(e, "facebook.url"),
    "https://www.facebook.com/sharer/sharer.php" +
      Sh({ u: e, quote: n, hashtag: r })
  );
}
var A6 = Ch(
    "facebook",
    T6,
    function (e) {
      return { quote: e.quote, hashtag: e.hashtag };
    },
    { windowWidth: 550, windowHeight: 400 }
  ),
  R6 = A6;
function N6(e, t) {
  var n = t.title,
    r = t.summary,
    o = t.source;
  return (
    di(e, "linkedin.url"),
    "https://linkedin.com/shareArticle" +
      Sh({ url: e, mini: "true", title: n, summary: r, source: o })
  );
}
var M6 = Ch(
    "linkedin",
    N6,
    function (e) {
      var t = e.title,
        n = e.summary,
        r = e.source;
      return { title: t, summary: n, source: r };
    },
    { windowWidth: 750, windowHeight: 600 }
  ),
  I6 = M6;
function U6(e, t) {
  var n = t.title,
    r = t.via,
    o = t.hashtags,
    i = o === void 0 ? [] : o,
    a = t.related,
    s = a === void 0 ? [] : a;
  return (
    di(e, "twitter.url"),
    di(Array.isArray(i), "twitter.hashtags is not an array"),
    di(Array.isArray(s), "twitter.related is not an array"),
    "https://twitter.com/share" +
      Sh({
        url: e,
        text: n,
        via: r,
        hashtags: i.length > 0 ? i.join(",") : void 0,
        related: s.length > 0 ? s.join(",") : void 0,
      })
  );
}
var L6 = Ch(
    "twitter",
    U6,
    function (e) {
      return {
        hashtags: e.hashtags,
        title: e.title,
        via: e.via,
        related: e.related,
      };
    },
    { windowWidth: 550, windowHeight: 400 }
  ),
  F6 = L6,
  B6 = "/assets/Facebook logo.d242a98d.png",
  $6 = "/assets/TwitterIcon.20c8c2dd.png",
  j6 = "/assets/LinkedInIcon.92b59474.png";
function H6(e) {
  const { file: t, title: n, status: r } = e,
    o = t;
  return oe("div", {
    className: "social-share",
    children: [
      b("h3", { className: "information-label", children: "Share" }),
      b(R6, {
        url: o,
        quote: `${n}, ${r}`,
        children: b("img", {
          className: "icon-social-facebook",
          src: B6,
          alt: "IconFacebook",
        }),
      }),
      b(F6, {
        url: o,
        title: `${n}, ${r}`,
        children: b("img", {
          className: "icon-social-twitter",
          src: $6,
          alt: "TwitterIcon",
        }),
      }),
      b(I6, {
        url: o,
        title: n,
        summary: r,
        children: b("img", {
          className: "icon-social-linkedin",
          src: j6,
          alt: "LinkedInIcon",
        }),
      }),
    ],
  });
}
var ag =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEwSURBVHgB7ZRBTsJAFIb/N46JS45QT2CPUBNKUjbiVmTBCZATyBG8gSaGuqxuGLQk9Ah4Aq7AVlP6fGOEGErjhJjogj9NXvLem6+vnZmfhi9TH3l+C4IPZ9FdO6p3S9mhmcwB9gjIHChgRs2+WGL/shnefK/pFegiCk9dYA/GeAX0nIhONmt624J7kwYSgm21nKmmiO2IvvQNvtJZJwqzEiwePbekNUGVLOgzwldY/+freDTulycj1bOhYDqXhQs4SBEShu7pqoZOs/4IR8VmsrDzKvyi9rA/hmkwZqzgx+M0YSa7xZ4cb+wiDc1dLO2ho9aukDWs3WjMJB6vErFJp1xxL3/Sf96ADS2ZXsViAvu5cJA1SxZPFGt4KsHyt4PB4dG7FNWZC0ysyD4Zobj6AIqcZFSOEYRWAAAAAElFTkSuQmCC",
  sg = "/assets/check-sign.e368293e.svg";
function Qw(e) {
  const { selectedCertificate: t } = e,
    { userDetails: n } = T.exports.useContext(St),
    {
      file: r,
      title: o,
      status: i,
      creation_date: a,
      expiration_date: s,
      proof_file: u,
      file_hash: l,
      image_url: c,
    } = t,
    [f, h] = T.exports.useState(!1),
    [m, v] = T.exports.useState(!1),
    [g, O] = T.exports.useState(!1),
    y = Oo(),
    w = () => {
      Te.post(
        "https://scrypt-backend-node.herokuapp.com/revoke",
        Zt(Ut({}, n), { uid: u, engine: "ethereum" })
      )
        .then(y("/gallery"))
        .catch((_) => {
          console.error(_.message);
        });
    };
  return b("div", {
    className: "body-container",
    children: oe("div", {
      className: "certificate-details-container",
      children: [
        b("div", {
          className: "certificate-container-display",
          children: c
            ? b("iframe", {
                title: "PDF of the certificate",
                className: "certificate-image-display",
                src: c,
              })
            : null,
        }),
        oe("div", {
          className: "details-container",
          children: [
            b("div", {
              children: b("h1", {
                className: "title-certificate",
                children:
                  o == null
                    ? void 0
                    : o
                        .replace(".pdf", "")
                        .replace(/_/g, " ")
                        .replace(/-/g, " "),
              }),
            }),
            oe("div", {
              className: "status-container",
              children: [
                b("h3", { className: "status-label", children: "Status:" }),
                f
                  ? null
                  : oe("p", {
                      className: "verify-below",
                      children: [
                        "Verify below ",
                        b("span", { children: "\u2193" }),
                      ],
                    }),
                oe("div", {
                  className: f ? "status-show" : "status-hidden",
                  children: [
                    b("p", {
                      className: "actual-status",
                      style: {
                        color:
                          (i === "valid" && "#2BC86B") ||
                          (i === "expired" && "#F39D29") ||
                          (i === "pending" && "#3FB6DD") ||
                          (i === "failed" && "#EC4F52") ||
                          (i === "revoked" && "#EC4F52"),
                      },
                      children: i.charAt(0).toUpperCase() + i.substring(1),
                    }),
                    i === "valid" &&
                      b("img", {
                        className: "status-icon",
                        src: Z0,
                        alt: "valid certificate badge",
                      }),
                    i === "expired" &&
                      b("img", {
                        className: "status-icon",
                        src: X0,
                        alt: "expired certificate badge",
                      }),
                    i === "pending" &&
                      b("img", {
                        className: "status-icon",
                        src: ew,
                        alt: "pending certificate badge",
                      }),
                    i === "failed" &&
                      b("img", {
                        className: "status-icon",
                        src: tw,
                        alt: "failed certificate badge",
                      }),
                    i === "revoked" &&
                      b("img", {
                        className: "status-icon",
                        src: nw,
                        alt: "revoked certificate badge",
                      }),
                  ],
                }),
              ],
            }),
            oe("div", {
              className: "information",
              children: [
                b("h3", {
                  className: "information-label",
                  children: "Uploaded on:",
                }),
                b("p", {
                  className: "certificate-info",
                  children: `${a.slice(0, 10)} - ${a.slice(11, 19)}`,
                }),
                b("h3", {
                  className: "information-label",
                  children: "Expires on:",
                }),
                b("p", {
                  className: "certificate-info",
                  children: s
                    ? `${s == null ? void 0 : s.slice(0, 10)} - ${
                        s == null ? void 0 : s.slice(11, 19)
                      }`
                    : "No expiration date",
                }),
                b("h3", {
                  className: "information-label hash-label",
                  children: "Transaction Hash",
                }),
                b("img", {
                  className: "copy-button",
                  src: ag,
                  alt: "Copy icon",
                  onClick: () => {
                    navigator.clipboard.writeText(l),
                      v(!0),
                      setTimeout(() => v(!1), 2e3);
                  },
                }),
                m
                  ? oe(Sr, {
                      children: [
                        b("img", {
                          className: "checkmark",
                          src: sg,
                          alt: "Green checkmark",
                        }),
                        b("h5", { className: "copy-box", children: "Copied" }),
                      ],
                    })
                  : null,
                b("p", {
                  className: "certificate-info certificate-hash",
                  children:
                    l.length > 40
                      ? `${l.slice(0, 20)}(...)${l.slice(
                          l.length - 20,
                          l.length
                        )}`
                      : `${l}`,
                }),
                b("h3", {
                  className: "information-label hash-label",
                  children: "Proof File",
                }),
                b("img", {
                  className: "copy-button",
                  src: ag,
                  alt: "Copy icon",
                  onClick: () => {
                    navigator.clipboard.writeText(u),
                      O(!0),
                      setTimeout(() => O(!1), 2e3);
                  },
                }),
                g
                  ? oe(Sr, {
                      children: [
                        b("img", {
                          className: "checkmark",
                          src: sg,
                          alt: "Green checkmark",
                        }),
                        b("h5", { className: "copy-box", children: "Copied" }),
                      ],
                    })
                  : null,
                b("p", {
                  className: "certificate-info certificate-hash",
                  children:
                    u.length > 40
                      ? `${u.slice(0, 20)}(...)${u.slice(
                          u.length - 20,
                          u.length - 1
                        )}`
                      : `${u}`,
                }),
              ],
            }),
            b(H6, { file: r, title: o, status: i }),
            oe("div", {
              className: "verify-certificate",
              children: [
                b("button", {
                  type: "button",
                  className: "view-transaction-button",
                  children: "View transaction page",
                }),
                b("button", {
                  type: "button",
                  className: "verify-button",
                  onClick: () => h(!0),
                  children: "Verify",
                }),
                ((n == null ? void 0 : n.role) === "teacher") &
                (i !== "pending") &
                (i !== "revoked")
                  ? b("button", {
                      type: "button",
                      className: "verify-button",
                      onClick: () => w(),
                      children: "Revoke",
                    })
                  : null,
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Y6() {
  const { userDetails: e } = T.exports.useContext(St),
    [t, n] = T.exports.useState([]),
    [r, o] = T.exports.useState(!1),
    { certificateID: i } = u_(),
    a = (u) => {
      Te.post(
        `https://scrypt-backend-node.herokuapp.com/verifybyuid/${u}`,
        e
      ).catch((l) => {
        console.error(l.message);
      });
    },
    s = async () => {
      await Te.get(
        `https://scrypt-backend-node.herokuapp.com/gallery/${i}`
      ).then((u) => {
        n(u.data), a(u.data.proof_file), o(!0);
      });
    };
  return (
    T.exports.useEffect(() => {
      s();
    }, [i]),
    b(Dl, {
      children: oe("div", {
        className: "main-container-details",
        children: [
          oe("div", {
            className: "back-container-details",
            children: [
              b(b0, {
                to: "/gallery",
                className: "button-back-details",
                children: b("img", {
                  src: g6,
                  alt: "Arrow to go back to the certificates gallery",
                }),
              }),
              b("h1", {
                className: "certificate-details-title",
                children: "Certificate details",
              }),
            ],
          }),
          b("hr", { className: "break-line" }),
          r
            ? b(Qw, { selectedCertificate: t })
            : b("div", {
                className: "loading-points",
                children: b(y6, { color: "#F15D22", size: "25px" }),
              }),
        ],
      }),
    })
  );
}
function V6(e) {
  const {
    exitCertificate: t,
    setIsVerified: n,
    file: r,
    verifiedCertificate: o,
  } = e;
  return oe("div", {
    className: "main-container",
    children: [
      oe("div", {
        className: "back-container-details",
        children: [
          b("svg", {
            onClick: () => {
              t(null), n(null);
            },
            className: "button-back-details",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: b("path", {
              d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
              fill: "#323232",
            }),
          }),
          b("h1", {
            className: "certificate-details-title",
            children: "Certificate Details",
          }),
        ],
      }),
      b("hr", { className: "break-line" }),
      b(Qw, { file: r, selectedCertificate: o }),
    ],
  });
}
function W6(e) {
  const {
      setSelectedStudent: t,
      onSelect: n,
      errors: r,
      selectedStudent: o,
    } = e,
    [i, a] = T.exports.useState(null);
  T.exports.useEffect(() => {
    fetch("https://scrypt-backend-node.herokuapp.com/all")
      .then((u) => u.json())
      .then((u) => a(u))
      .catch((u) => console.error(u));
  }, []);
  const s = (u) => {
    n(
      u !== "Choose student"
        ? Zt(Ut({}, r), { missing_student: !1 })
        : Zt(Ut({}, r), { missing_student: null })
    );
  };
  return oe("select", {
    value: o,
    onChange: (u) => {
      t(u.target.value), s(u.target.value);
    },
    className: "dropdown-container",
    name: "students",
    children: [
      b("option", { value: "Choose student", children: "Choose student" }, 0),
      i && i.map((u) => b("option", { value: u.id, children: u.email }, u.id)),
    ],
  });
}
var z6 = "/assets/warning-icon.a0020d25.png";
function K6(e) {
  const { setDuplicatedCertificate: t } = e;
  return oe("div", {
    className: "warning-container",
    children: [
      oe("div", {
        className: "warning-header",
        children: [
          b("svg", {
            onClick: () => t(!1),
            width: "20",
            height: "20",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: b("path", {
              d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
              fill: "#FFF",
            }),
          }),
          b("img", { className: "warning-icon", src: z6, alt: "Warning icon" }),
          b("h1", { children: "WARNING!" }),
        ],
      }),
      oe("div", {
        className: "warning-info",
        children: [
          b("p", {
            className: "paragraph",
            children: "This certificate was already issued in the past.",
          }),
          b("p", {
            className: "paragraph",
            children: "Choose a different file, please.",
          }),
        ],
      }),
    ],
  });
}
function q6() {
  const e = Oo(),
    [t, n] = T.exports.useState(null),
    [r, o] = T.exports.useState({ missing_file: null, missing_student: null }),
    [i, a] = T.exports.useState(null),
    [s, u] = T.exports.useState(null),
    [l, c] = T.exports.useState(null),
    [f, h] = T.exports.useState(null),
    [m, v] = T.exports.useState(""),
    [g, O] = T.exports.useState(!1),
    { userDetails: y, searchUser: w } = T.exports.useContext(St),
    _ = T.exports.useRef(null),
    [E, U] = T.exports.useState(null),
    L = `${E == null ? void 0 : E.getFullYear()}-${
      (E == null ? void 0 : E.getMonth()) + 1
    }-${E == null ? void 0 : E.getDate()} 00:00:00`;
  T.exports.useEffect(() => {
    w();
  }, []);
  const j = (I) => {
      fetch(`https://scrypt-backend-node.herokuapp.com/gallery/${I}`)
        .then((D) => D.json())
        .then((D) => {
          h(() => D), c(!0);
        })
        .catch((D) => console.log(D));
    },
    $ = () => {
      const I = new FormData();
      I.append("file", t, i),
        I.append("user", JSON.stringify(y)),
        I.append("path", JSON.stringify(i)),
        I.append("student_id", m),
        I.append("image", s),
        L.includes("NaN") || I.append("expiration_date", L);
      const D = {
        method: "POST",
        body: I,
        headers: { Accept: "application/json" },
      };
      y !== null && y.role === "teacher"
        ? fetch("https://scrypt-backend-node.herokuapp.com/issuecertificate", D)
            .then((R) => (R.status === 409 ? O(!0) : R.json()))
            .then((R) => {
              j(R.certificate_id),
                o({ missing_student: null, missing_file: null }),
                v("Choose student"),
                U(null);
            })
            .catch((R) => console.error(R))
        : fetch("https://scrypt-backend-node.herokuapp.com/verifybyfile", D)
            .then((R) => R.json())
            .then((R) => {
              R.length > 0
                ? (c(!0),
                  h(R[0]),
                  o({ missing_student: null, missing_file: null }))
                : (c(!1), o({ missing_student: null, missing_file: null }));
            })
            .catch((R) => console.error(R));
    },
    Q = () => {
      t === null
        ? o(Zt(Ut({}, r), { missing_file: !0 }))
        : m === ""
        ? o(Zt(Ut({}, r), { missing_student: !0 }))
        : r.missing_file === !1 && r.missing_student === !1 && $();
    },
    k = () => {
      _.current.click();
    };
  return b(Dl, {
    children: oe("div", {
      className: "verify-page-container",
      children: [
        (y && l === null) || (y && l === !1)
          ? oe(Sr, {
              children: [
                b("h1", {
                  className: "certificates-gallery-title",
                  children:
                    y && y.role === "teacher"
                      ? "Issue a certificate"
                      : "Verify a certificate",
                }),
                b("hr", { className: "separation-line" }),
              ],
            })
          : null,
        oe("div", {
          className: "verify-form-container",
          children: [
            y &&
              y.role === "teacher" &&
              !l &&
              oe(Sr, {
                children: [
                  oe("div", {
                    className: "inputs-container",
                    children: [
                      b("h4", {
                        className: "inputs-title",
                        children: "Pick a student to issue the certificate:",
                      }),
                      b(W6, {
                        selectedStudent: m,
                        setSelectedStudent: v,
                        errors: r,
                        onSelect: o,
                      }),
                      b("h4", {
                        className: "inputs-title",
                        children: "Set expiration date if needed:",
                      }),
                      b(zp, {
                        selected: E,
                        className: E ? "without-calendar" : "with-calendar",
                        placeholderText: "Date",
                        dateFormat: "yyyy-MM-dd",
                        closeOnScroll: (I) => I.target === document,
                        onChange: (I) => U(I),
                        showYearDropdown: !0,
                        scrollableMonthYearDropdown: !0,
                      }),
                      b("button", {
                        className: "clear-filters-button-issue",
                        type: "button",
                        onClick: () => {
                          U(null), v("Choose student");
                        },
                        children: "Clean",
                      }),
                    ],
                  }),
                  g ? b(K6, { setDuplicatedCertificate: O }) : null,
                ],
              }),
            l &&
              b(V6, {
                file: t,
                exitCertificate: n,
                verifiedCertificate: f,
                setIsVerified: c,
              }),
            l === !1 && e("/file_not_found"),
            l === null &&
              oe("div", {
                style: {
                  height:
                    (y == null ? void 0 : y.role) === "teacher"
                      ? "640px"
                      : (y == null ? void 0 : y.role) === "student"
                      ? "570px"
                      : "590px",
                },
                className: "verify-window-wrapper",
                children: [
                  b("div", {
                    className: "verify-window-exit",
                    children: y
                      ? null
                      : b("svg", {
                          onClick: () => e("/login"),
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: b("path", {
                            d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                            fill: "#445C61",
                          }),
                        }),
                  }),
                  oe("div", {
                    style: { padding: "0 4rem" },
                    children: [
                      b("div", {
                        className: "title-wrapper",
                        children: b("h2", {
                          children:
                            y && y.role === "teacher"
                              ? "Submit certificate"
                              : "Verify certificate",
                        }),
                      }),
                      b("div", {
                        className: "dnd-window",
                        onClick: () => k(),
                        children:
                          t === null
                            ? oe(Sr, {
                                children: [
                                  " ",
                                  b("svg", {
                                    width: "32",
                                    height: "40",
                                    viewBox: "0 0 32 40",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: b("path", {
                                      d: "M19.8332 0.833313H4.49984C2.3915 0.833313 0.685671 2.55831 0.685671 4.66665L0.666504 35.3333C0.666504 37.4416 2.37234 39.1666 4.48067 39.1666H27.4998C29.6082 39.1666 31.3332 37.4416 31.3332 35.3333V12.3333L19.8332 0.833313ZM23.6665 27.6666H17.9165V33.4166H14.0832V27.6666H8.33317V23.8333H14.0832V18.0833H17.9165V23.8333H23.6665V27.6666ZM17.9165 14.25V3.70831L28.4582 14.25H17.9165Z",
                                      fill: "#445C61",
                                      fillOpacity: "0.5",
                                    }),
                                  }),
                                  b("p", {
                                    className: "dnd-p-select",
                                    style: {
                                      padding:
                                        r.missing_file === !1
                                          ? "0 4rem"
                                          : "0 2rem",
                                    },
                                    children:
                                      y && y.role === "teacher"
                                        ? "Select a file to upload"
                                        : "Select a file to upload and verify",
                                  }),
                                  b("p", {
                                    className: "dnd-p-drag",
                                    style: {
                                      padding:
                                        r.missing_file === !1
                                          ? "0 4rem"
                                          : "0 2rem",
                                    },
                                    children: "Or drag and drop it here",
                                  }),
                                ],
                              })
                            : oe(Sr, {
                                children: [
                                  b("svg", {
                                    width: "22",
                                    height: "17",
                                    viewBox: "0 0 22 17",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: b("path", {
                                      d: "M7.49989 12.9L2.59989 7.99999L0.966553 9.63333L7.49989 16.1667L21.4999 2.16666L19.8666 0.533325L7.49989 12.9Z",
                                      fill: "#15CF74",
                                    }),
                                  }),
                                  b("p", {
                                    className: "dnd-p-select",
                                    style: {
                                      padding:
                                        r.missing_file === !1
                                          ? "0 4rem"
                                          : "0 2rem",
                                    },
                                    children: "File upload successfully",
                                  }),
                                ],
                              }),
                      }),
                      t &&
                        oe(Sr, {
                          children: [
                            b("svg", {
                              width: "14",
                              height: "18",
                              viewBox: "0 0 14 18",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: b("path", {
                                d: "M9.49992 0.666656H1.99992C1.08325 0.666656 0.333252 1.41666 0.333252 2.33332V15.6667C0.333252 16.5833 1.08325 17.3333 1.99992 17.3333H11.9999C12.9166 17.3333 13.6666 16.5833 13.6666 15.6667V4.83332L9.49992 0.666656ZM1.99992 15.6667V2.33332H8.66658V5.66666H11.9999V15.6667H1.99992ZM10.3333 7.33332V11.5C10.3333 13.3417 8.84159 14.8333 6.99992 14.8333C5.15825 14.8333 3.66659 13.3417 3.66659 11.5V6.08332C3.66659 4.85832 4.71659 3.88332 5.96659 4.00832C7.04992 4.11666 7.83325 5.10832 7.83325 6.19999V11.5H6.16658V6.08332C6.16658 5.84999 5.98325 5.66666 5.74992 5.66666C5.51659 5.66666 5.33325 5.84999 5.33325 6.08332V11.5C5.33325 12.4167 6.08325 13.1667 6.99992 13.1667C7.91658 13.1667 8.66658 12.4167 8.66658 11.5V7.33332H10.3333Z",
                                fill: "#445C61",
                                fillOpacity: "0.5",
                              }),
                            }),
                            b("span", { children: t.name }),
                            b("svg", {
                              onClick: () => {
                                o(Zt(Ut({}, r), { missing_file: null })),
                                  n(null);
                              },
                              style: { cursor: "pointer" },
                              width: "10",
                              height: "10",
                              viewBox: "0 0 10 10",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: b("path", {
                                d: "M9.66659 1.27334L8.72659 0.333344L4.99992 4.06001L1.27325 0.333344L0.333252 1.27334L4.05992 5.00001L0.333252 8.72668L1.27325 9.66668L4.99992 5.94001L8.72659 9.66668L9.66659 8.72668L5.93992 5.00001L9.66659 1.27334Z",
                                fill: "#FF576B",
                              }),
                            }),
                          ],
                        }),
                      oe("div", {
                        className: "error-line",
                        children: [
                          (y &&
                            y.role === "teacher" &&
                            r.missing_file === null) ||
                          r.missing_file === !0
                            ? b("p", { children: "The file is missing" })
                            : null,
                          y &&
                          y.role === "teacher" &&
                          r.missing_student === null
                            ? b("p", {
                                children:
                                  "Choose a student to complete the issuing process",
                              })
                            : null,
                        ],
                      }),
                      oe("div", {
                        className: "btn-wrapper",
                        children: [
                          b("input", {
                            type: "file",
                            ref: _,
                            style: { display: "none" },
                            onChange: (I) => {
                              o(Zt(Ut({}, r), { missing_file: !1 })),
                                a(I.target.value),
                                n(I.target.files[0]);
                              const D = new FileReader();
                              D.readAsDataURL(I.target.files[0]),
                                (D.onloadend = (R) => {
                                  u(R.target.result);
                                });
                            },
                          }),
                          b(J0, {
                            style:
                              ((y == null ? void 0 : y.role) === "teacher") &
                              ((r == null ? void 0 : r.missing_file) === !1) &
                              ((r == null ? void 0 : r.missing_student) === !1)
                                ? { marginTop: "40px" }
                                : null,
                            className:
                              y === null || y.role === "student"
                                ? "Upload And Verify"
                                : "Issue certificate",
                            functionality: () =>
                              y === null
                                ? $()
                                : y.role === "teacher"
                                ? Q()
                                : $(),
                            neededResources: r,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
function Q6() {
  const { searchUser: e } = T.exports.useContext(St);
  return (
    T.exports.useEffect(() => {
      e();
    }, []),
    b(Dl, { children: b("p", { children: "Dashboard" }) })
  );
}
var G6 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAC3CAYAAACystTmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAqgSURBVHhe7d1LiBRJHsfxKLu129dpBPUwJx9zU9ejgl52FZHdwQfoggrLehAvKujuSRQ8+bq2CoqgwupFmV28uOxBoT0qelqfh92DCnqyHcV+bf+yI3bKmuyMyKqMjPhH/j5Q05WlqNN+K4zMjMpsff36dVIRCTVLfyUSiQGTaM5TiImJCfX582c1ORn3jKPVamWPVAwMDGT/P7NmcazJ4xzwyMhI9PGmaO7cudng0d/fz4hzOH9HGG84CHdsbIx/Bzn4lhYCEY+OjjLiDgxYEESM6QT9ggELgxEY0wmaxoCFGh8f18+ajQELhZEYc+KmY8DCNT1iBiyYOWHT5IgZsHAm4qbu2DHgBCBizImbeIiNAScCEePIRNMiZsAJaWLEDDgxTYuYASeoSREz4EQh4iasYGPACWvCCjYGnDgTcaoYcAMg4lQX/zDghsA0IsWIGXCDpBgxA26Y1CJmwA2EiFPZsWPADZbCSBx3wO8/qMl//ktv+JX9Pv/5r95KH0504Eyd9GWY8QaMeE+fU+pvN9XkT//QL/qR/fr4fc5M/X4NixjTCcmnnOMM2MT74f309k9/9xZx9utO/fqZn39uZMSYSkiNOMqAJ69c/SVew0PE38RrmIinvjaFmU5gNJYmyoBbf/6TUt8t0lttKow4N16t9cddSs2bp7eaA/NhaSNxnFOIRd+p1l+Peou4MF68edav01vNInE6Ee9OnKeIGW8xRCxpGWa8AUPFETNeN1j8IyXiuAOGiiJmvOWY6UTs4g8YeoyY8XYv9ohlBAxdRsx4e4NpRMwRywkYSkbMeKsR89k6WQGDY8SMt1oIOMaR2PkmLx8/ftTPItF5urndDz8o9eyZ3viWtHhxk5eYYOeur69Pb4UnbwQ2ikbiROKNUWwjsdyAoSjiDoy3GmbdRCxzYtkBg4m4YO0C461WTKec5c6B2xTtsGV+/INq/fh7vSELbnAYs9BzdPEBW+M1BEccs4ULF+pnYYieQjjHC22H2CgdYgMuPM6L9bwlz9iRTCIDLowXO2y/+22pM3Ykl7iArfGaow0lTzuTTKICdo7XYMTJExNw6XgNRpw0EQF3Ha/BiJMVfcA9x2sw4iRFHXBl8RqMODnRBlx5vAYjTkqUAXuL12DEyYgvYFzS6dFjvfGtSuI1iiIeHm7UpaUkiy/gefOmw/r+e/3CtErjNfIixmt/mXqtgZeWkijOOXBHxF7iNdojNvEuyhmVKUpxL6fEP+P/fqbU2t/oFzx6/2HqP1PfCsZbSujllEksaKdwuB6YqAcMmERjwCQaAybRGDCJxoBJNAZMojFgEo0Bk2gMmERjwCQaAybRGDCJxoBJNAZMojFgEo0Bk2gMmERjwCQaAybRGDCJxoBJNAZMojFgEo0Bk2gMmERjwCQaAybRGDCJxoBJNAZMojFgEo0Bk2gMmERjwCRa8HtkzJ49Ww0MDKhWq6VfoSqMjY2pL1++qMlJp7/erjX6HhmIdnBwkPF60N/fnw0OqQseMPkza1b6M0TOgUk0BkyiMWASjQGTaAyYRGPAJBoDJtGCBjwxMZE9yI/x8XH9LF3BTyXjYPucOXN4UqNCOH2MeEdHR/Ur/oQ+lRw8YJKt0WshiHrFgEk0BkyicQ7cECMjI+rVq1fZ4927d9kDr7VbvHhx9li2bFn2WLJkif6RmXEnjrxBoPfu3VMPHz5UT5480a+6Q8yrV69W27dvz4LOw4Cpcoj1+vXrXUU7E8S8b98+tWnTJv3KNAZMlXn79q06d+5cpeF26gyZAVMlbt++ra5du6Y+ffqkX/ELAe/du1etWLFCvxIGAxaujlF3JhiNT5w4odauXatfqR8DFgzxHj16NDuiENL+/fuzRwg8DizUy5cvo4gXLl++nD1CCD4C87oQ5b1580YdPHgw+1rGqlWr1PLly///dcGCBWr+/PnZj+GNgBEdx4kxHcGht7JCjMTBA8Y3sAkf/65K2Xjx/cVx3M2bN2dzVlfYGRweHs52DMuM8qdPn1YbN27UW/4FDRjhmhGA3CDeR48e6a1iO3fuVHv27On5e4yTIa4h47Aafu7SpUv1K35x6BME80yXeBHP0NCQOnToUCUDBA6ZnT9/Ppt62GCgO3XqlN7yjwELgSnDrVu39NbMTLxVH9rC9AMR49ivDd5kN2/e1Ft+MWAhMPrapnEmXp//fOMsnEvEV65c8bbf1I4BC4DR9+7du3orXx3xGoh43bp1eisf4nX5F6NXDFgAl2OsOHxVR7zGsWPHrEc1ELDvUZgBR85l9N26dWv2qBOOISPiIojX9mfvFQOOnMtRh1CncbFW2Laz+ODBA/3Mj6AB87oQdi6j70xThzquC2F78+AN6HMaEfxMHK8LUWzLli2F3/urV6/mLmnELQbqui4EduqeP3+uX/m1M2fOqA0bNuitanE1WsSwJgELdmaCnagbN27orTAQsG0xz65du9SRI0f0VrU4B44YFtcUWb9+vX4Wlm0e7LpuoxsMOGK2tQcup3brsHLlSv0s34sXL/Sz6jHgiNkCxqGsGODPUXQMmiNwQ9mmEC7XbahLqA93MmCqRKh/DRhwxGKZIsSMAUfMFnDnpaFCCvVnYcARsy1Gxwc7Y1F0IsPnIiMGHDHbTtrr16/1s7CK4gUG3FAzXVDPwCeIY/D48WP9LJ/Pq/cw4IjZAsap5hjmwffv39fP8tlOdPSCAUcMO3G2s2137tzRz8LASQrbkk+fl55iwJHDmtsiuKhfyFHY9mkRjL6cAzcYLkpSBPGGGoVxptC2Xhkr0XxiwJFzmUZgFLaddvahaKmn4fvKlQxYACwYL4JR+OTJk7VOJVyu1FP0aZGqMGABMA+2jcI4pHbhwgW95RdGfNzCwKaOz+oxYCFsozDgGmZnz57VW34gXpc3Sl0f82fAQmAU3rZtm96aGSI+cOCAlzkxwnWJF+H63nkz+Jk4QTDHRZwuV4nE5+UwanfeVagbOGFS5q5H+Ll13TuDAQuDeBGx6w5bLyEjWIzoeLjC1KHO61QwYIFw4WkcdSgDIWMagmua4WveUk28KbAz+PTp0yxe1xG33fHjx2u9ShADFqrXHTYs1eyM2GVq4qJ95w0x+xyRGbBgdRx1qILPaQWPQgiGee3FixetV4n06fDhw9lOW9GHOm0XPukFAxYOSy5x5fQqjjaUgTcNbrC4e/fu7IiD7aiDr4gZcAIQEy516nLN3l5h7owrtF+6dMm6Uq6Tj4g5B04Q5sZlb49lg3CxMm7Hjh3ffFbPTB3K3D2pyjkxA04YDrfhhoX42u1NwLEGA9dgw33m8j5kagLGssoydyeqKmIG3BA4pmvuwonjvRid20doc1gNc2p8mBThrlmzJjfadu07byEiZsDUk86jD3VHzJ04qhROXOBsnKted+wYMFWuzoidA+YtAKiMuiLum/pNnFaFIOA6bhpCMqCHwcFB1dfXp1/5NfOJZNc7FZnDcGU+R+e8E0fULZ87ds4jMFG3fI7EDJhq4StiBky18RExA6ZaVR0xA6baVRkxT2RQEN0cJ867DhsDpmDKRIwF83n3W2bAFJRLxIh3aGgo92NLDJiCK4q4KF5gwBSFvIht8QIDpmi0R+wSL3AtBEUHN43BITNbvEop9T/AIcCSOSPJzwAAAABJRU5ErkJggg==";
function J6() {
  return b(Dl, {
    children: oe("div", {
      className: "missing-file-container",
      children: [
        b("img", {
          className: "missing-file-image",
          src: G6,
          alt: "File not found",
        }),
        b("h1", { children: "File Not Found" }),
        b("p", {
          children: "The uploaded file doesn't exist, please try again",
        }),
        b(sl, {
          to: "/verify",
          children: b("button", {
            type: "button",
            children: "Verify other document",
          }),
        }),
      ],
    }),
  });
}
function Z6() {
  const { userDetails: e } = T.exports.useContext(St);
  return (
    T.exports.useEffect(() => {}, [e]),
    b("div", {
      children: b(Yb, {
        children: oe(y_, {
          children: [
            b(jn, { path: "/login", element: b(Ho, {}) }),
            b(jn, { path: "/", element: b(Ho, {}) }),
            b(jn, { path: "/dashboard", element: e ? b(Q6, {}) : b(Ho, {}) }),
            b(jn, { path: "/gallery", element: e ? b(f6, {}) : b(Ho, {}) }),
            b(jn, {
              path: "/gallery/:certificateID",
              element: e ? b(Y6, {}) : b(Ho, {}),
            }),
            b(jn, { path: "/verify", element: b(q6, {}) }),
            b(jn, { path: "/file_not_found", element: b(J6, {}) }),
          ],
        }),
      }),
    })
  );
}
const X6 = yc.createRoot(document.getElementById("root"));
X6.render(
  b(B.StrictMode, {
    children: b(__, { children: b(Hb, { children: b(Z6, {}) }) }),
  })
);
