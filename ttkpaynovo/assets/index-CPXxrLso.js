var cf = e => {
    throw TypeError(e)
}
;
var dl = (e, t, n) => t.has(e) || cf("Cannot " + n);
var P = (e, t, n) => (dl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , ee = (e, t, n) => t.has(e) ? cf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (dl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ae = (e, t, n) => (dl(e, t, "access private method"),
n);
var Ks = (e, t, n, r) => ({
    set _(o) {
        H(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});
function Fx(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const a of s.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function Wm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Hm = {
    exports: {}
}
  , Ni = {}
  , Km = {
    exports: {}
}
  , q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms = Symbol.for("react.element")
  , $x = Symbol.for("react.portal")
  , zx = Symbol.for("react.fragment")
  , Bx = Symbol.for("react.strict_mode")
  , Ux = Symbol.for("react.profiler")
  , Vx = Symbol.for("react.provider")
  , Wx = Symbol.for("react.context")
  , Hx = Symbol.for("react.forward_ref")
  , Kx = Symbol.for("react.suspense")
  , Gx = Symbol.for("react.memo")
  , Qx = Symbol.for("react.lazy")
  , uf = Symbol.iterator;
function qx(e) {
    return e === null || typeof e != "object" ? null : (e = uf && e[uf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Gm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Qm = Object.assign
  , qm = {};
function jo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qm,
    this.updater = n || Gm
}
jo.prototype.isReactComponent = {};
jo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
jo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ym() {}
Ym.prototype = jo.prototype;
function wu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qm,
    this.updater = n || Gm
}
var bu = wu.prototype = new Ym;
bu.constructor = wu;
Qm(bu, jo.prototype);
bu.isPureReactComponent = !0;
var df = Array.isArray
  , Xm = Object.prototype.hasOwnProperty
  , Su = {
    current: null
}
  , Jm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Zm(e, t, n) {
    var r, o = {}, s = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Xm.call(t, r) && !Jm.hasOwnProperty(r) && (o[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1)
        o.children = n;
    else if (1 < i) {
        for (var l = Array(i), u = 0; u < i; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps,
        i)
            o[r] === void 0 && (o[r] = i[r]);
    return {
        $$typeof: Ms,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: Su.current
    }
}
function Yx(e, t) {
    return {
        $$typeof: Ms,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Cu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ms
}
function Xx(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ff = /\/+/g;
function fl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Xx("" + e.key) : t.toString(36)
}
function ba(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (s) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ms:
            case $x:
                a = !0
            }
        }
    if (a)
        return a = e,
        o = o(a),
        e = r === "" ? "." + fl(a, 0) : r,
        df(o) ? (n = "",
        e != null && (n = e.replace(ff, "$&/") + "/"),
        ba(o, t, n, "", function(u) {
            return u
        })) : o != null && (Cu(o) && (o = Yx(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(ff, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    df(e))
        for (var i = 0; i < e.length; i++) {
            s = e[i];
            var l = r + fl(s, i);
            a += ba(s, t, n, l, o)
        }
    else if (l = qx(e),
    typeof l == "function")
        for (e = l.call(e),
        i = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + fl(s, i++),
            a += ba(s, t, n, l, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Gs(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return ba(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function Jx(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Be = {
    current: null
}
  , Sa = {
    transition: null
}
  , Zx = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Sa,
    ReactCurrentOwner: Su
};
function eh() {
    throw Error("act(...) is not supported in production builds of React.")
}
q.Children = {
    map: Gs,
    forEach: function(e, t, n) {
        Gs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Gs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Gs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Cu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
q.Component = jo;
q.Fragment = zx;
q.Profiler = Ux;
q.PureComponent = wu;
q.StrictMode = Bx;
q.Suspense = Kx;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zx;
q.act = eh;
q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Qm({}, e.props)
      , o = e.key
      , s = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        a = Su.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var i = e.type.defaultProps;
        for (l in t)
            Xm.call(t, l) && !Jm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && i !== void 0 ? i[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        i = Array(l);
        for (var u = 0; u < l; u++)
            i[u] = arguments[u + 2];
        r.children = i
    }
    return {
        $$typeof: Ms,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: a
    }
}
;
q.createContext = function(e) {
    return e = {
        $$typeof: Wx,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Vx,
        _context: e
    },
    e.Consumer = e
}
;
q.createElement = Zm;
q.createFactory = function(e) {
    var t = Zm.bind(null, e);
    return t.type = e,
    t
}
;
q.createRef = function() {
    return {
        current: null
    }
}
;
q.forwardRef = function(e) {
    return {
        $$typeof: Hx,
        render: e
    }
}
;
q.isValidElement = Cu;
q.lazy = function(e) {
    return {
        $$typeof: Qx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Jx
    }
}
;
q.memo = function(e, t) {
    return {
        $$typeof: Gx,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
q.startTransition = function(e) {
    var t = Sa.transition;
    Sa.transition = {};
    try {
        e()
    } finally {
        Sa.transition = t
    }
}
;
q.unstable_act = eh;
q.useCallback = function(e, t) {
    return Be.current.useCallback(e, t)
}
;
q.useContext = function(e) {
    return Be.current.useContext(e)
}
;
q.useDebugValue = function() {}
;
q.useDeferredValue = function(e) {
    return Be.current.useDeferredValue(e)
}
;
q.useEffect = function(e, t) {
    return Be.current.useEffect(e, t)
}
;
q.useId = function() {
    return Be.current.useId()
}
;
q.useImperativeHandle = function(e, t, n) {
    return Be.current.useImperativeHandle(e, t, n)
}
;
q.useInsertionEffect = function(e, t) {
    return Be.current.useInsertionEffect(e, t)
}
;
q.useLayoutEffect = function(e, t) {
    return Be.current.useLayoutEffect(e, t)
}
;
q.useMemo = function(e, t) {
    return Be.current.useMemo(e, t)
}
;
q.useReducer = function(e, t, n) {
    return Be.current.useReducer(e, t, n)
}
;
q.useRef = function(e) {
    return Be.current.useRef(e)
}
;
q.useState = function(e) {
    return Be.current.useState(e)
}
;
q.useSyncExternalStore = function(e, t, n) {
    return Be.current.useSyncExternalStore(e, t, n)
}
;
q.useTransition = function() {
    return Be.current.useTransition()
}
;
q.version = "18.3.1";
Km.exports = q;
var d = Km.exports;
const A = Wm(d)
  , Eu = Fx({
    __proto__: null,
    default: A
}, [d]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1 = d
  , t1 = Symbol.for("react.element")
  , n1 = Symbol.for("react.fragment")
  , r1 = Object.prototype.hasOwnProperty
  , o1 = e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , s1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function th(e, t, n) {
    var r, o = {}, s = null, a = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        r1.call(t, r) && !s1.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: t1,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: o1.current
    }
}
Ni.Fragment = n1;
Ni.jsx = th;
Ni.jsxs = th;
Hm.exports = Ni;
var c = Hm.exports
  , nh = {
    exports: {}
}
  , tt = {}
  , rh = {
    exports: {}
}
  , oh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, R) {
        var D = j.length;
        j.push(R);
        e: for (; 0 < D; ) {
            var K = D - 1 >>> 1
              , B = j[K];
            if (0 < o(B, R))
                j[K] = R,
                j[D] = B,
                D = K;
            else
                break e
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0]
    }
    function r(j) {
        if (j.length === 0)
            return null;
        var R = j[0]
          , D = j.pop();
        if (D !== R) {
            j[0] = D;
            e: for (var K = 0, B = j.length, Q = B >>> 1; K < Q; ) {
                var Y = 2 * (K + 1) - 1
                  , ye = j[Y]
                  , Te = Y + 1
                  , ne = j[Te];
                if (0 > o(ye, D))
                    Te < B && 0 > o(ne, ye) ? (j[K] = ne,
                    j[Te] = D,
                    K = Te) : (j[K] = ye,
                    j[Y] = D,
                    K = Y);
                else if (Te < B && 0 > o(ne, D))
                    j[K] = ne,
                    j[Te] = D,
                    K = Te;
                else
                    break e
            }
        }
        return R
    }
    function o(j, R) {
        var D = j.sortIndex - R.sortIndex;
        return D !== 0 ? D : j.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var a = Date
          , i = a.now();
        e.unstable_now = function() {
            return a.now() - i
        }
    }
    var l = []
      , u = []
      , f = 1
      , m = null
      , g = 3
      , p = !1
      , b = !1
      , v = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(j) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= j)
                r(u),
                R.sortIndex = R.expirationTime,
                t(l, R);
            else
                break;
            R = n(u)
        }
    }
    function S(j) {
        if (v = !1,
        x(j),
        !b)
            if (n(l) !== null)
                b = !0,
                L(C);
            else {
                var R = n(u);
                R !== null && z(S, R.startTime - j)
            }
    }
    function C(j, R) {
        b = !1,
        v && (v = !1,
        y(k),
        k = -1),
        p = !0;
        var D = g;
        try {
            for (x(R),
            m = n(l); m !== null && (!(m.expirationTime > R) || j && !$()); ) {
                var K = m.callback;
                if (typeof K == "function") {
                    m.callback = null,
                    g = m.priorityLevel;
                    var B = K(m.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof B == "function" ? m.callback = B : m === n(l) && r(l),
                    x(R)
                } else
                    r(l);
                m = n(l)
            }
            if (m !== null)
                var Q = !0;
            else {
                var Y = n(u);
                Y !== null && z(S, Y.startTime - R),
                Q = !1
            }
            return Q
        } finally {
            m = null,
            g = D,
            p = !1
        }
    }
    var E = !1
      , N = null
      , k = -1
      , O = 5
      , M = -1;
    function $() {
        return !(e.unstable_now() - M < O)
    }
    function I() {
        if (N !== null) {
            var j = e.unstable_now();
            M = j;
            var R = !0;
            try {
                R = N(!0, j)
            } finally {
                R ? U() : (E = !1,
                N = null)
            }
        } else
            E = !1
    }
    var U;
    if (typeof h == "function")
        U = function() {
            h(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var T = new MessageChannel
          , V = T.port2;
        T.port1.onmessage = I,
        U = function() {
            V.postMessage(null)
        }
    } else
        U = function() {
            w(I, 0)
        }
        ;
    function L(j) {
        N = j,
        E || (E = !0,
        U())
    }
    function z(j, R) {
        k = w(function() {
            j(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(j) {
        j.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        b || p || (b = !0,
        L(C))
    }
    ,
    e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < j ? Math.floor(1e3 / j) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(j) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = g
        }
        var D = g;
        g = R;
        try {
            return j()
        } finally {
            g = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(j, R) {
        switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            j = 3
        }
        var D = g;
        g = j;
        try {
            return R()
        } finally {
            g = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(j, R, D) {
        var K = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? K + D : K) : D = K,
        j) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = D + B,
        j = {
            id: f++,
            callback: R,
            priorityLevel: j,
            startTime: D,
            expirationTime: B,
            sortIndex: -1
        },
        D > K ? (j.sortIndex = D,
        t(u, j),
        n(l) === null && j === n(u) && (v ? (y(k),
        k = -1) : v = !0,
        z(S, D - K))) : (j.sortIndex = B,
        t(l, j),
        b || p || (b = !0,
        L(C))),
        j
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(j) {
        var R = g;
        return function() {
            var D = g;
            g = R;
            try {
                return j.apply(this, arguments)
            } finally {
                g = D
            }
        }
    }
}
)(oh);
rh.exports = oh;
var a1 = rh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i1 = d
  , et = a1;
function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var sh = new Set
  , is = {};
function Cr(e, t) {
    yo(e, t),
    yo(e + "Capture", t)
}
function yo(e, t) {
    for (is[e] = t,
    e = 0; e < t.length; e++)
        sh.add(t[e])
}
var nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , rc = Object.prototype.hasOwnProperty
  , l1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , pf = {}
  , mf = {};
function c1(e) {
    return rc.call(mf, e) ? !0 : rc.call(pf, e) ? !1 : l1.test(e) ? mf[e] = !0 : (pf[e] = !0,
    !1)
}
function u1(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function d1(e, t, n, r) {
    if (t === null || typeof t > "u" || u1(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ue(e, t, n, r, o, s, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = a
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Re[e] = new Ue(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Re[t] = new Ue(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Re[e] = new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Re[e] = new Ue(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Re[e] = new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Re[e] = new Ue(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Re[e] = new Ue(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Re[e] = new Ue(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Re[e] = new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Nu = /[\-:]([a-z])/g;
function ku(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Nu, ku);
    Re[t] = new Ue(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Nu, ku);
    Re[t] = new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Nu, ku);
    Re[t] = new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Re[e] = new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Re.xlinkHref = new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Re[e] = new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ju(e, t, n, r) {
    var o = Re.hasOwnProperty(t) ? Re[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (d1(t, n, o, r) && (n = null),
    r || o === null ? c1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var cn = i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Qs = Symbol.for("react.element")
  , zr = Symbol.for("react.portal")
  , Br = Symbol.for("react.fragment")
  , Pu = Symbol.for("react.strict_mode")
  , oc = Symbol.for("react.profiler")
  , ah = Symbol.for("react.provider")
  , ih = Symbol.for("react.context")
  , Ru = Symbol.for("react.forward_ref")
  , sc = Symbol.for("react.suspense")
  , ac = Symbol.for("react.suspense_list")
  , Tu = Symbol.for("react.memo")
  , Sn = Symbol.for("react.lazy")
  , lh = Symbol.for("react.offscreen")
  , hf = Symbol.iterator;
function Lo(e) {
    return e === null || typeof e != "object" ? null : (e = hf && e[hf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var pe = Object.assign, pl;
function Ko(e) {
    if (pl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            pl = t && t[1] || ""
        }
    return `
` + pl + e
}
var ml = !1;
function hl(e, t) {
    if (!e || ml)
        return "";
    ml = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), a = o.length - 1, i = s.length - 1; 1 <= a && 0 <= i && o[a] !== s[i]; )
                i--;
            for (; 1 <= a && 0 <= i; a--,
            i--)
                if (o[a] !== s[i]) {
                    if (a !== 1 || i !== 1)
                        do
                            if (a--,
                            i--,
                            0 > i || o[a] !== s[i]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= i);
                    break
                }
        }
    } finally {
        ml = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ko(e) : ""
}
function f1(e) {
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
        return e = hl(e.type, !1),
        e;
    case 11:
        return e = hl(e.type.render, !1),
        e;
    case 1:
        return e = hl(e.type, !0),
        e;
    default:
        return ""
    }
}
function ic(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Br:
        return "Fragment";
    case zr:
        return "Portal";
    case oc:
        return "Profiler";
    case Pu:
        return "StrictMode";
    case sc:
        return "Suspense";
    case ac:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case ih:
            return (e.displayName || "Context") + ".Consumer";
        case ah:
            return (e._context.displayName || "Context") + ".Provider";
        case Ru:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Tu:
            return t = e.displayName || null,
            t !== null ? t : ic(e.type) || "Memo";
        case Sn:
            t = e._payload,
            e = e._init;
            try {
                return ic(e(t))
            } catch {}
        }
    return null
}
function p1(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return ic(t);
    case 8:
        return t === Pu ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Vn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ch(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function m1(e) {
    var t = ch(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                r = "" + a,
                s.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function qs(e) {
    e._valueTracker || (e._valueTracker = m1(e))
}
function uh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ch(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function $a(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function lc(e, t) {
    var n = t.checked;
    return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function gf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Vn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function dh(e, t) {
    t = t.checked,
    t != null && ju(e, "checked", t, !1)
}
function cc(e, t) {
    dh(e, t);
    var n = Vn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? uc(e, t.type, n) : t.hasOwnProperty("defaultValue") && uc(e, t.type, Vn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function vf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function uc(e, t, n) {
    (t !== "number" || $a(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Go = Array.isArray;
function Zr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Vn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function dc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(_(91));
    return pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function yf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(_(92));
            if (Go(n)) {
                if (1 < n.length)
                    throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Vn(n)
    }
}
function fh(e, t) {
    var n = Vn(t.value)
      , r = Vn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function xf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ph(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function fc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ph(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ys, mh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ys = Ys || document.createElement("div"),
        Ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ys.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ls(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Yo = {
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
    strokeWidth: !0
}
  , h1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yo).forEach(function(e) {
    h1.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Yo[t] = Yo[e]
    })
});
function hh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Yo.hasOwnProperty(e) && Yo[e] ? ("" + t).trim() : t + "px"
}
function gh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = hh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var g1 = pe({
    menuitem: !0
}, {
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
    wbr: !0
});
function pc(e, t) {
    if (t) {
        if (g1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(_(62))
    }
}
function mc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var hc = null;
function Au(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var gc = null
  , eo = null
  , to = null;
function wf(e) {
    if (e = Ls(e)) {
        if (typeof gc != "function")
            throw Error(_(280));
        var t = e.stateNode;
        t && (t = Ti(t),
        gc(e.stateNode, e.type, t))
    }
}
function vh(e) {
    eo ? to ? to.push(e) : to = [e] : eo = e
}
function yh() {
    if (eo) {
        var e = eo
          , t = to;
        if (to = eo = null,
        wf(e),
        t)
            for (e = 0; e < t.length; e++)
                wf(t[e])
    }
}
function xh(e, t) {
    return e(t)
}
function wh() {}
var gl = !1;
function bh(e, t, n) {
    if (gl)
        return e(t, n);
    gl = !0;
    try {
        return xh(e, t, n)
    } finally {
        gl = !1,
        (eo !== null || to !== null) && (wh(),
        yh())
    }
}
function cs(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ti(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(_(231, t, typeof n));
    return n
}
var vc = !1;
if (nn)
    try {
        var Do = {};
        Object.defineProperty(Do, "passive", {
            get: function() {
                vc = !0
            }
        }),
        window.addEventListener("test", Do, Do),
        window.removeEventListener("test", Do, Do)
    } catch {
        vc = !1
    }
function v1(e, t, n, r, o, s, a, i, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var Xo = !1
  , za = null
  , Ba = !1
  , yc = null
  , y1 = {
    onError: function(e) {
        Xo = !0,
        za = e
    }
};
function x1(e, t, n, r, o, s, a, i, l) {
    Xo = !1,
    za = null,
    v1.apply(y1, arguments)
}
function w1(e, t, n, r, o, s, a, i, l) {
    if (x1.apply(this, arguments),
    Xo) {
        if (Xo) {
            var u = za;
            Xo = !1,
            za = null
        } else
            throw Error(_(198));
        Ba || (Ba = !0,
        yc = u)
    }
}
function Er(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Sh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function bf(e) {
    if (Er(e) !== e)
        throw Error(_(188))
}
function b1(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Er(e),
        t === null)
            throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return bf(o),
                    e;
                if (s === r)
                    return bf(o),
                    t;
                s = s.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var a = !1, i = o.child; i; ) {
                if (i === n) {
                    a = !0,
                    n = o,
                    r = s;
                    break
                }
                if (i === r) {
                    a = !0,
                    r = o,
                    n = s;
                    break
                }
                i = i.sibling
            }
            if (!a) {
                for (i = s.child; i; ) {
                    if (i === n) {
                        a = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (i === r) {
                        a = !0,
                        r = s,
                        n = o;
                        break
                    }
                    i = i.sibling
                }
                if (!a)
                    throw Error(_(189))
            }
        }
        if (n.alternate !== r)
            throw Error(_(190))
    }
    if (n.tag !== 3)
        throw Error(_(188));
    return n.stateNode.current === n ? e : t
}
function Ch(e) {
    return e = b1(e),
    e !== null ? Eh(e) : null
}
function Eh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Eh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Nh = et.unstable_scheduleCallback
  , Sf = et.unstable_cancelCallback
  , S1 = et.unstable_shouldYield
  , C1 = et.unstable_requestPaint
  , ge = et.unstable_now
  , E1 = et.unstable_getCurrentPriorityLevel
  , _u = et.unstable_ImmediatePriority
  , kh = et.unstable_UserBlockingPriority
  , Ua = et.unstable_NormalPriority
  , N1 = et.unstable_LowPriority
  , jh = et.unstable_IdlePriority
  , ki = null
  , Bt = null;
function k1(e) {
    if (Bt && typeof Bt.onCommitFiberRoot == "function")
        try {
            Bt.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : R1
  , j1 = Math.log
  , P1 = Math.LN2;
function R1(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (j1(e) / P1 | 0) | 0
}
var Xs = 64
  , Js = 4194304;
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
        return e
    }
}
function Va(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var i = a & ~o;
        i !== 0 ? r = Qo(i) : (s &= a,
        s !== 0 && (r = Qo(s)))
    } else
        a = n & ~o,
        a !== 0 ? r = Qo(a) : s !== 0 && (r = Qo(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ct(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function T1(e, t) {
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
        return -1
    }
}
function A1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var a = 31 - Ct(s)
          , i = 1 << a
          , l = o[a];
        l === -1 ? (!(i & n) || i & r) && (o[a] = T1(i, t)) : l <= t && (e.expiredLanes |= i),
        s &= ~i
    }
}
function xc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ph() {
    var e = Xs;
    return Xs <<= 1,
    !(Xs & 4194240) && (Xs = 64),
    e
}
function vl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Os(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ct(t),
    e[t] = n
}
function _1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Ct(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function Mu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ct(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var re = 0;
function Rh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Th, Ou, Ah, _h, Mh, wc = !1, Zs = [], On = null, In = null, Ln = null, us = new Map, ds = new Map, En = [], M1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Cf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        On = null;
        break;
    case "dragenter":
    case "dragleave":
        In = null;
        break;
    case "mouseover":
    case "mouseout":
        Ln = null;
        break;
    case "pointerover":
    case "pointerout":
        us.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ds.delete(t.pointerId)
    }
}
function Fo(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Ls(t),
    t !== null && Ou(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function O1(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return On = Fo(On, e, t, n, r, o),
        !0;
    case "dragenter":
        return In = Fo(In, e, t, n, r, o),
        !0;
    case "mouseover":
        return Ln = Fo(Ln, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return us.set(s, Fo(us.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        ds.set(s, Fo(ds.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Oh(e) {
    var t = or(e.target);
    if (t !== null) {
        var n = Er(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Sh(n),
                t !== null) {
                    e.blockedOn = t,
                    Mh(e.priority, function() {
                        Ah(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ca(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = bc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            hc = r,
            n.target.dispatchEvent(r),
            hc = null
        } else
            return t = Ls(n),
            t !== null && Ou(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ef(e, t, n) {
    Ca(e) && n.delete(t)
}
function I1() {
    wc = !1,
    On !== null && Ca(On) && (On = null),
    In !== null && Ca(In) && (In = null),
    Ln !== null && Ca(Ln) && (Ln = null),
    us.forEach(Ef),
    ds.forEach(Ef)
}
function $o(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    wc || (wc = !0,
    et.unstable_scheduleCallback(et.unstable_NormalPriority, I1)))
}
function fs(e) {
    function t(o) {
        return $o(o, e)
    }
    if (0 < Zs.length) {
        $o(Zs[0], e);
        for (var n = 1; n < Zs.length; n++) {
            var r = Zs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (On !== null && $o(On, e),
    In !== null && $o(In, e),
    Ln !== null && $o(Ln, e),
    us.forEach(t),
    ds.forEach(t),
    n = 0; n < En.length; n++)
        r = En[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < En.length && (n = En[0],
    n.blockedOn === null); )
        Oh(n),
        n.blockedOn === null && En.shift()
}
var no = cn.ReactCurrentBatchConfig
  , Wa = !0;
function L1(e, t, n, r) {
    var o = re
      , s = no.transition;
    no.transition = null;
    try {
        re = 1,
        Iu(e, t, n, r)
    } finally {
        re = o,
        no.transition = s
    }
}
function D1(e, t, n, r) {
    var o = re
      , s = no.transition;
    no.transition = null;
    try {
        re = 4,
        Iu(e, t, n, r)
    } finally {
        re = o,
        no.transition = s
    }
}
function Iu(e, t, n, r) {
    if (Wa) {
        var o = bc(e, t, n, r);
        if (o === null)
            jl(e, t, r, Ha, n),
            Cf(e, r);
        else if (O1(o, e, t, n, r))
            r.stopPropagation();
        else if (Cf(e, r),
        t & 4 && -1 < M1.indexOf(e)) {
            for (; o !== null; ) {
                var s = Ls(o);
                if (s !== null && Th(s),
                s = bc(e, t, n, r),
                s === null && jl(e, t, r, Ha, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            jl(e, t, r, null, n)
    }
}
var Ha = null;
function bc(e, t, n, r) {
    if (Ha = null,
    e = Au(r),
    e = or(e),
    e !== null)
        if (t = Er(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Sh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ha = e,
    null
}
function Ih(e) {
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
        switch (E1()) {
        case _u:
            return 1;
        case kh:
            return 4;
        case Ua:
        case N1:
            return 16;
        case jh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var An = null
  , Lu = null
  , Ea = null;
function Lh() {
    if (Ea)
        return Ea;
    var e, t = Lu, n = t.length, r, o = "value"in An ? An.value : An.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[s - r]; r++)
        ;
    return Ea = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Na(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ea() {
    return !0
}
function Nf() {
    return !1
}
function nt(e) {
    function t(n, r, o, s, a) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = a,
        this.currentTarget = null;
        for (var i in e)
            e.hasOwnProperty(i) && (n = e[i],
            this[i] = n ? n(s) : s[i]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ea : Nf,
        this.isPropagationStopped = Nf,
        this
    }
    return pe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ea)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ea)
        },
        persist: function() {},
        isPersistent: ea
    }),
    t
}
var Po = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Du = nt(Po), Is = pe({}, Po, {
    view: 0,
    detail: 0
}), F1 = nt(Is), yl, xl, zo, ji = pe({}, Is, {
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
    getModifierState: Fu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== zo && (zo && e.type === "mousemove" ? (yl = e.screenX - zo.screenX,
        xl = e.screenY - zo.screenY) : xl = yl = 0,
        zo = e),
        yl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : xl
    }
}), kf = nt(ji), $1 = pe({}, ji, {
    dataTransfer: 0
}), z1 = nt($1), B1 = pe({}, Is, {
    relatedTarget: 0
}), wl = nt(B1), U1 = pe({}, Po, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), V1 = nt(U1), W1 = pe({}, Po, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), H1 = nt(W1), K1 = pe({}, Po, {
    data: 0
}), jf = nt(K1), G1 = {
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
    MozPrintableKey: "Unidentified"
}, Q1 = {
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
    224: "Meta"
}, q1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Y1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = q1[e]) ? !!t[e] : !1
}
function Fu() {
    return Y1
}
var X1 = pe({}, Is, {
    key: function(e) {
        if (e.key) {
            var t = G1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Na(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Q1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fu,
    charCode: function(e) {
        return e.type === "keypress" ? Na(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Na(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , J1 = nt(X1)
  , Z1 = pe({}, ji, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Pf = nt(Z1)
  , ew = pe({}, Is, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fu
})
  , tw = nt(ew)
  , nw = pe({}, Po, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , rw = nt(nw)
  , ow = pe({}, ji, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , sw = nt(ow)
  , aw = [9, 13, 27, 32]
  , $u = nn && "CompositionEvent"in window
  , Jo = null;
nn && "documentMode"in document && (Jo = document.documentMode);
var iw = nn && "TextEvent"in window && !Jo
  , Dh = nn && (!$u || Jo && 8 < Jo && 11 >= Jo)
  , Rf = " "
  , Tf = !1;
function Fh(e, t) {
    switch (e) {
    case "keyup":
        return aw.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function $h(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Ur = !1;
function lw(e, t) {
    switch (e) {
    case "compositionend":
        return $h(t);
    case "keypress":
        return t.which !== 32 ? null : (Tf = !0,
        Rf);
    case "textInput":
        return e = t.data,
        e === Rf && Tf ? null : e;
    default:
        return null
    }
}
function cw(e, t) {
    if (Ur)
        return e === "compositionend" || !$u && Fh(e, t) ? (e = Lh(),
        Ea = Lu = An = null,
        Ur = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Dh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var uw = {
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
    week: !0
};
function Af(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uw[e.type] : t === "textarea"
}
function zh(e, t, n, r) {
    vh(r),
    t = Ka(t, "onChange"),
    0 < t.length && (n = new Du("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Zo = null
  , ps = null;
function dw(e) {
    Xh(e, 0)
}
function Pi(e) {
    var t = Hr(e);
    if (uh(t))
        return e
}
function fw(e, t) {
    if (e === "change")
        return t
}
var Bh = !1;
if (nn) {
    var bl;
    if (nn) {
        var Sl = "oninput"in document;
        if (!Sl) {
            var _f = document.createElement("div");
            _f.setAttribute("oninput", "return;"),
            Sl = typeof _f.oninput == "function"
        }
        bl = Sl
    } else
        bl = !1;
    Bh = bl && (!document.documentMode || 9 < document.documentMode)
}
function Mf() {
    Zo && (Zo.detachEvent("onpropertychange", Uh),
    ps = Zo = null)
}
function Uh(e) {
    if (e.propertyName === "value" && Pi(ps)) {
        var t = [];
        zh(t, ps, e, Au(e)),
        bh(dw, t)
    }
}
function pw(e, t, n) {
    e === "focusin" ? (Mf(),
    Zo = t,
    ps = n,
    Zo.attachEvent("onpropertychange", Uh)) : e === "focusout" && Mf()
}
function mw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Pi(ps)
}
function hw(e, t) {
    if (e === "click")
        return Pi(t)
}
function gw(e, t) {
    if (e === "input" || e === "change")
        return Pi(t)
}
function vw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Nt = typeof Object.is == "function" ? Object.is : vw;
function ms(e, t) {
    if (Nt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!rc.call(t, o) || !Nt(e[o], t[o]))
            return !1
    }
    return !0
}
function Of(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function If(e, t) {
    var n = Of(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Of(n)
    }
}
function Vh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Wh() {
    for (var e = window, t = $a(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = $a(e.document)
    }
    return t
}
function zu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function yw(e) {
    var t = Wh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Vh(n.ownerDocument.documentElement, n)) {
        if (r !== null && zu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = If(n, s);
                var a = If(n, r);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var xw = nn && "documentMode"in document && 11 >= document.documentMode
  , Vr = null
  , Sc = null
  , es = null
  , Cc = !1;
function Lf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Cc || Vr == null || Vr !== $a(r) || (r = Vr,
    "selectionStart"in r && zu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    es && ms(es, r) || (es = r,
    r = Ka(Sc, "onSelect"),
    0 < r.length && (t = new Du("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Vr)))
}
function ta(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Wr = {
    animationend: ta("Animation", "AnimationEnd"),
    animationiteration: ta("Animation", "AnimationIteration"),
    animationstart: ta("Animation", "AnimationStart"),
    transitionend: ta("Transition", "TransitionEnd")
}
  , Cl = {}
  , Hh = {};
nn && (Hh = document.createElement("div").style,
"AnimationEvent"in window || (delete Wr.animationend.animation,
delete Wr.animationiteration.animation,
delete Wr.animationstart.animation),
"TransitionEvent"in window || delete Wr.transitionend.transition);
function Ri(e) {
    if (Cl[e])
        return Cl[e];
    if (!Wr[e])
        return e;
    var t = Wr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Hh)
            return Cl[e] = t[n];
    return e
}
var Kh = Ri("animationend")
  , Gh = Ri("animationiteration")
  , Qh = Ri("animationstart")
  , qh = Ri("transitionend")
  , Yh = new Map
  , Df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Gn(e, t) {
    Yh.set(e, t),
    Cr(t, [e])
}
for (var El = 0; El < Df.length; El++) {
    var Nl = Df[El]
      , ww = Nl.toLowerCase()
      , bw = Nl[0].toUpperCase() + Nl.slice(1);
    Gn(ww, "on" + bw)
}
Gn(Kh, "onAnimationEnd");
Gn(Gh, "onAnimationIteration");
Gn(Qh, "onAnimationStart");
Gn("dblclick", "onDoubleClick");
Gn("focusin", "onFocus");
Gn("focusout", "onBlur");
Gn(qh, "onTransitionEnd");
yo("onMouseEnter", ["mouseout", "mouseover"]);
yo("onMouseLeave", ["mouseout", "mouseover"]);
yo("onPointerEnter", ["pointerout", "pointerover"]);
yo("onPointerLeave", ["pointerout", "pointerover"]);
Cr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Sw = new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));
function Ff(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    w1(r, t, void 0, e),
    e.currentTarget = null
}
function Xh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var i = r[a]
                      , l = i.instance
                      , u = i.currentTarget;
                    if (i = i.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    Ff(o, i, u),
                    s = l
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (i = r[a],
                    l = i.instance,
                    u = i.currentTarget,
                    i = i.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    Ff(o, i, u),
                    s = l
                }
        }
    }
    if (Ba)
        throw e = yc,
        Ba = !1,
        yc = null,
        e
}
function ie(e, t) {
    var n = t[Pc];
    n === void 0 && (n = t[Pc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Jh(t, e, 2, !1),
    n.add(r))
}
function kl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Jh(n, e, r, t)
}
var na = "_reactListening" + Math.random().toString(36).slice(2);
function hs(e) {
    if (!e[na]) {
        e[na] = !0,
        sh.forEach(function(n) {
            n !== "selectionchange" && (Sw.has(n) || kl(n, !1, e),
            kl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[na] || (t[na] = !0,
        kl("selectionchange", !1, t))
    }
}
function Jh(e, t, n, r) {
    switch (Ih(t)) {
    case 1:
        var o = L1;
        break;
    case 4:
        o = D1;
        break;
    default:
        o = Iu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !vc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function jl(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var i = r.stateNode.containerInfo;
                if (i === o || i.nodeType === 8 && i.parentNode === o)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; i !== null; ) {
                    if (a = or(i),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        r = s = a;
                        continue e
                    }
                    i = i.parentNode
                }
            }
            r = r.return
        }
    bh(function() {
        var u = s
          , f = Au(n)
          , m = [];
        e: {
            var g = Yh.get(e);
            if (g !== void 0) {
                var p = Du
                  , b = e;
                switch (e) {
                case "keypress":
                    if (Na(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = J1;
                    break;
                case "focusin":
                    b = "focus",
                    p = wl;
                    break;
                case "focusout":
                    b = "blur",
                    p = wl;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = wl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = kf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = z1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = tw;
                    break;
                case Kh:
                case Gh:
                case Qh:
                    p = V1;
                    break;
                case qh:
                    p = rw;
                    break;
                case "scroll":
                    p = F1;
                    break;
                case "wheel":
                    p = sw;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = H1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = Pf
                }
                var v = (t & 4) !== 0
                  , w = !v && e === "scroll"
                  , y = v ? g !== null ? g + "Capture" : null : g;
                v = [];
                for (var h = u, x; h !== null; ) {
                    x = h;
                    var S = x.stateNode;
                    if (x.tag === 5 && S !== null && (x = S,
                    y !== null && (S = cs(h, y),
                    S != null && v.push(gs(h, S, x)))),
                    w)
                        break;
                    h = h.return
                }
                0 < v.length && (g = new p(g,b,null,n,f),
                m.push({
                    event: g,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                g && n !== hc && (b = n.relatedTarget || n.fromElement) && (or(b) || b[rn]))
                    break e;
                if ((p || g) && (g = f.window === f ? f : (g = f.ownerDocument) ? g.defaultView || g.parentWindow : window,
                p ? (b = n.relatedTarget || n.toElement,
                p = u,
                b = b ? or(b) : null,
                b !== null && (w = Er(b),
                b !== w || b.tag !== 5 && b.tag !== 6) && (b = null)) : (p = null,
                b = u),
                p !== b)) {
                    if (v = kf,
                    S = "onMouseLeave",
                    y = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Pf,
                    S = "onPointerLeave",
                    y = "onPointerEnter",
                    h = "pointer"),
                    w = p == null ? g : Hr(p),
                    x = b == null ? g : Hr(b),
                    g = new v(S,h + "leave",p,n,f),
                    g.target = w,
                    g.relatedTarget = x,
                    S = null,
                    or(f) === u && (v = new v(y,h + "enter",b,n,f),
                    v.target = x,
                    v.relatedTarget = w,
                    S = v),
                    w = S,
                    p && b)
                        t: {
                            for (v = p,
                            y = b,
                            h = 0,
                            x = v; x; x = Ir(x))
                                h++;
                            for (x = 0,
                            S = y; S; S = Ir(S))
                                x++;
                            for (; 0 < h - x; )
                                v = Ir(v),
                                h--;
                            for (; 0 < x - h; )
                                y = Ir(y),
                                x--;
                            for (; h--; ) {
                                if (v === y || y !== null && v === y.alternate)
                                    break t;
                                v = Ir(v),
                                y = Ir(y)
                            }
                            v = null
                        }
                    else
                        v = null;
                    p !== null && $f(m, g, p, v, !1),
                    b !== null && w !== null && $f(m, w, b, v, !0)
                }
            }
            e: {
                if (g = u ? Hr(u) : window,
                p = g.nodeName && g.nodeName.toLowerCase(),
                p === "select" || p === "input" && g.type === "file")
                    var C = fw;
                else if (Af(g))
                    if (Bh)
                        C = gw;
                    else {
                        C = mw;
                        var E = pw
                    }
                else
                    (p = g.nodeName) && p.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (C = hw);
                if (C && (C = C(e, u))) {
                    zh(m, C, n, f);
                    break e
                }
                E && E(e, g, u),
                e === "focusout" && (E = g._wrapperState) && E.controlled && g.type === "number" && uc(g, "number", g.value)
            }
            switch (E = u ? Hr(u) : window,
            e) {
            case "focusin":
                (Af(E) || E.contentEditable === "true") && (Vr = E,
                Sc = u,
                es = null);
                break;
            case "focusout":
                es = Sc = Vr = null;
                break;
            case "mousedown":
                Cc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Cc = !1,
                Lf(m, n, f);
                break;
            case "selectionchange":
                if (xw)
                    break;
            case "keydown":
            case "keyup":
                Lf(m, n, f)
            }
            var N;
            if ($u)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                    }
                    k = void 0
                }
            else
                Ur ? Fh(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (Dh && n.locale !== "ko" && (Ur || k !== "onCompositionStart" ? k === "onCompositionEnd" && Ur && (N = Lh()) : (An = f,
            Lu = "value"in An ? An.value : An.textContent,
            Ur = !0)),
            E = Ka(u, k),
            0 < E.length && (k = new jf(k,e,null,n,f),
            m.push({
                event: k,
                listeners: E
            }),
            N ? k.data = N : (N = $h(n),
            N !== null && (k.data = N)))),
            (N = iw ? lw(e, n) : cw(e, n)) && (u = Ka(u, "onBeforeInput"),
            0 < u.length && (f = new jf("onBeforeInput","beforeinput",null,n,f),
            m.push({
                event: f,
                listeners: u
            }),
            f.data = N))
        }
        Xh(m, t)
    })
}
function gs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ka(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = cs(e, n),
        s != null && r.unshift(gs(e, s, o)),
        s = cs(e, t),
        s != null && r.push(gs(e, s, o))),
        e = e.return
    }
    return r
}
function Ir(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function $f(e, t, n, r, o) {
    for (var s = t._reactName, a = []; n !== null && n !== r; ) {
        var i = n
          , l = i.alternate
          , u = i.stateNode;
        if (l !== null && l === r)
            break;
        i.tag === 5 && u !== null && (i = u,
        o ? (l = cs(n, s),
        l != null && a.unshift(gs(n, l, i))) : o || (l = cs(n, s),
        l != null && a.push(gs(n, l, i)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var Cw = /\r\n?/g
  , Ew = /\u0000|\uFFFD/g;
function zf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cw, `
`).replace(Ew, "")
}
function ra(e, t, n) {
    if (t = zf(t),
    zf(e) !== t && n)
        throw Error(_(425))
}
function Ga() {}
var Ec = null
  , Nc = null;
function kc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var jc = typeof setTimeout == "function" ? setTimeout : void 0
  , Nw = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Bf = typeof Promise == "function" ? Promise : void 0
  , kw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bf < "u" ? function(e) {
    return Bf.resolve(null).then(e).catch(jw)
}
: jc;
function jw(e) {
    setTimeout(function() {
        throw e
    })
}
function Pl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    fs(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    fs(t)
}
function Dn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Uf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ro = Math.random().toString(36).slice(2)
  , Ft = "__reactFiber$" + Ro
  , vs = "__reactProps$" + Ro
  , rn = "__reactContainer$" + Ro
  , Pc = "__reactEvents$" + Ro
  , Pw = "__reactListeners$" + Ro
  , Rw = "__reactHandles$" + Ro;
function or(e) {
    var t = e[Ft];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[rn] || n[Ft]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Uf(e); e !== null; ) {
                    if (n = e[Ft])
                        return n;
                    e = Uf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ls(e) {
    return e = e[Ft] || e[rn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Hr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(_(33))
}
function Ti(e) {
    return e[vs] || null
}
var Rc = []
  , Kr = -1;
function Qn(e) {
    return {
        current: e
    }
}
function le(e) {
    0 > Kr || (e.current = Rc[Kr],
    Rc[Kr] = null,
    Kr--)
}
function se(e, t) {
    Kr++,
    Rc[Kr] = e.current,
    e.current = t
}
var Wn = {}
  , Le = Qn(Wn)
  , Ke = Qn(!1)
  , gr = Wn;
function xo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Wn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ge(e) {
    return e = e.childContextTypes,
    e != null
}
function Qa() {
    le(Ke),
    le(Le)
}
function Vf(e, t, n) {
    if (Le.current !== Wn)
        throw Error(_(168));
    se(Le, t),
    se(Ke, n)
}
function Zh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(_(108, p1(e) || "Unknown", o));
    return pe({}, n, r)
}
function qa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wn,
    gr = Le.current,
    se(Le, e),
    se(Ke, Ke.current),
    !0
}
function Wf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(_(169));
    n ? (e = Zh(e, t, gr),
    r.__reactInternalMemoizedMergedChildContext = e,
    le(Ke),
    le(Le),
    se(Le, e)) : le(Ke),
    se(Ke, n)
}
var Xt = null
  , Ai = !1
  , Rl = !1;
function eg(e) {
    Xt === null ? Xt = [e] : Xt.push(e)
}
function Tw(e) {
    Ai = !0,
    eg(e)
}
function qn() {
    if (!Rl && Xt !== null) {
        Rl = !0;
        var e = 0
          , t = re;
        try {
            var n = Xt;
            for (re = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Xt = null,
            Ai = !1
        } catch (o) {
            throw Xt !== null && (Xt = Xt.slice(e + 1)),
            Nh(_u, qn),
            o
        } finally {
            re = t,
            Rl = !1
        }
    }
    return null
}
var Gr = []
  , Qr = 0
  , Ya = null
  , Xa = 0
  , at = []
  , it = 0
  , vr = null
  , Zt = 1
  , en = "";
function nr(e, t) {
    Gr[Qr++] = Xa,
    Gr[Qr++] = Ya,
    Ya = e,
    Xa = t
}
function tg(e, t, n) {
    at[it++] = Zt,
    at[it++] = en,
    at[it++] = vr,
    vr = e;
    var r = Zt;
    e = en;
    var o = 32 - Ct(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Ct(t) + o;
    if (30 < s) {
        var a = o - o % 5;
        s = (r & (1 << a) - 1).toString(32),
        r >>= a,
        o -= a,
        Zt = 1 << 32 - Ct(t) + o | n << o | r,
        en = s + e
    } else
        Zt = 1 << s | n << o | r,
        en = e
}
function Bu(e) {
    e.return !== null && (nr(e, 1),
    tg(e, 1, 0))
}
function Uu(e) {
    for (; e === Ya; )
        Ya = Gr[--Qr],
        Gr[Qr] = null,
        Xa = Gr[--Qr],
        Gr[Qr] = null;
    for (; e === vr; )
        vr = at[--it],
        at[it] = null,
        en = at[--it],
        at[it] = null,
        Zt = at[--it],
        at[it] = null
}
var Je = null
  , Xe = null
  , ue = !1
  , St = null;
function ng(e, t) {
    var n = lt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Hf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Xe = Dn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Xe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = vr !== null ? {
            id: Zt,
            overflow: en
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = lt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Je = e,
        Xe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Tc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ac(e) {
    if (ue) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!Hf(e, t)) {
                if (Tc(e))
                    throw Error(_(418));
                t = Dn(n.nextSibling);
                var r = Je;
                t && Hf(e, t) ? ng(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                Je = e)
            }
        } else {
            if (Tc(e))
                throw Error(_(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            Je = e
        }
    }
}
function Kf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Je = e
}
function oa(e) {
    if (e !== Je)
        return !1;
    if (!ue)
        return Kf(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !kc(e.type, e.memoizedProps)),
    t && (t = Xe)) {
        if (Tc(e))
            throw rg(),
            Error(_(418));
        for (; t; )
            ng(e, t),
            t = Dn(t.nextSibling)
    }
    if (Kf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(_(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = Dn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else
        Xe = Je ? Dn(e.stateNode.nextSibling) : null;
    return !0
}
function rg() {
    for (var e = Xe; e; )
        e = Dn(e.nextSibling)
}
function wo() {
    Xe = Je = null,
    ue = !1
}
function Vu(e) {
    St === null ? St = [e] : St.push(e)
}
var Aw = cn.ReactCurrentBatchConfig;
function Bo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(_(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(_(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
                var i = o.refs;
                a === null ? delete i[s] : i[s] = a
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(_(284));
        if (!n._owner)
            throw Error(_(290, e))
    }
    return e
}
function sa(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Gf(e) {
    var t = e._init;
    return t(e._payload)
}
function og(e) {
    function t(y, h) {
        if (e) {
            var x = y.deletions;
            x === null ? (y.deletions = [h],
            y.flags |= 16) : x.push(h)
        }
    }
    function n(y, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(y, h),
            h = h.sibling;
        return null
    }
    function r(y, h) {
        for (y = new Map; h !== null; )
            h.key !== null ? y.set(h.key, h) : y.set(h.index, h),
            h = h.sibling;
        return y
    }
    function o(y, h) {
        return y = Bn(y, h),
        y.index = 0,
        y.sibling = null,
        y
    }
    function s(y, h, x) {
        return y.index = x,
        e ? (x = y.alternate,
        x !== null ? (x = x.index,
        x < h ? (y.flags |= 2,
        h) : x) : (y.flags |= 2,
        h)) : (y.flags |= 1048576,
        h)
    }
    function a(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function i(y, h, x, S) {
        return h === null || h.tag !== 6 ? (h = Ll(x, y.mode, S),
        h.return = y,
        h) : (h = o(h, x),
        h.return = y,
        h)
    }
    function l(y, h, x, S) {
        var C = x.type;
        return C === Br ? f(y, h, x.props.children, S, x.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Sn && Gf(C) === h.type) ? (S = o(h, x.props),
        S.ref = Bo(y, h, x),
        S.return = y,
        S) : (S = _a(x.type, x.key, x.props, null, y.mode, S),
        S.ref = Bo(y, h, x),
        S.return = y,
        S)
    }
    function u(y, h, x, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = Dl(x, y.mode, S),
        h.return = y,
        h) : (h = o(h, x.children || []),
        h.return = y,
        h)
    }
    function f(y, h, x, S, C) {
        return h === null || h.tag !== 7 ? (h = mr(x, y.mode, S, C),
        h.return = y,
        h) : (h = o(h, x),
        h.return = y,
        h)
    }
    function m(y, h, x) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Ll("" + h, y.mode, x),
            h.return = y,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Qs:
                return x = _a(h.type, h.key, h.props, null, y.mode, x),
                x.ref = Bo(y, null, h),
                x.return = y,
                x;
            case zr:
                return h = Dl(h, y.mode, x),
                h.return = y,
                h;
            case Sn:
                var S = h._init;
                return m(y, S(h._payload), x)
            }
            if (Go(h) || Lo(h))
                return h = mr(h, y.mode, x, null),
                h.return = y,
                h;
            sa(y, h)
        }
        return null
    }
    function g(y, h, x, S) {
        var C = h !== null ? h.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return C !== null ? null : i(y, h, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Qs:
                return x.key === C ? l(y, h, x, S) : null;
            case zr:
                return x.key === C ? u(y, h, x, S) : null;
            case Sn:
                return C = x._init,
                g(y, h, C(x._payload), S)
            }
            if (Go(x) || Lo(x))
                return C !== null ? null : f(y, h, x, S, null);
            sa(y, x)
        }
        return null
    }
    function p(y, h, x, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return y = y.get(x) || null,
            i(h, y, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Qs:
                return y = y.get(S.key === null ? x : S.key) || null,
                l(h, y, S, C);
            case zr:
                return y = y.get(S.key === null ? x : S.key) || null,
                u(h, y, S, C);
            case Sn:
                var E = S._init;
                return p(y, h, x, E(S._payload), C)
            }
            if (Go(S) || Lo(S))
                return y = y.get(x) || null,
                f(h, y, S, C, null);
            sa(h, S)
        }
        return null
    }
    function b(y, h, x, S) {
        for (var C = null, E = null, N = h, k = h = 0, O = null; N !== null && k < x.length; k++) {
            N.index > k ? (O = N,
            N = null) : O = N.sibling;
            var M = g(y, N, x[k], S);
            if (M === null) {
                N === null && (N = O);
                break
            }
            e && N && M.alternate === null && t(y, N),
            h = s(M, h, k),
            E === null ? C = M : E.sibling = M,
            E = M,
            N = O
        }
        if (k === x.length)
            return n(y, N),
            ue && nr(y, k),
            C;
        if (N === null) {
            for (; k < x.length; k++)
                N = m(y, x[k], S),
                N !== null && (h = s(N, h, k),
                E === null ? C = N : E.sibling = N,
                E = N);
            return ue && nr(y, k),
            C
        }
        for (N = r(y, N); k < x.length; k++)
            O = p(N, y, k, x[k], S),
            O !== null && (e && O.alternate !== null && N.delete(O.key === null ? k : O.key),
            h = s(O, h, k),
            E === null ? C = O : E.sibling = O,
            E = O);
        return e && N.forEach(function($) {
            return t(y, $)
        }),
        ue && nr(y, k),
        C
    }
    function v(y, h, x, S) {
        var C = Lo(x);
        if (typeof C != "function")
            throw Error(_(150));
        if (x = C.call(x),
        x == null)
            throw Error(_(151));
        for (var E = C = null, N = h, k = h = 0, O = null, M = x.next(); N !== null && !M.done; k++,
        M = x.next()) {
            N.index > k ? (O = N,
            N = null) : O = N.sibling;
            var $ = g(y, N, M.value, S);
            if ($ === null) {
                N === null && (N = O);
                break
            }
            e && N && $.alternate === null && t(y, N),
            h = s($, h, k),
            E === null ? C = $ : E.sibling = $,
            E = $,
            N = O
        }
        if (M.done)
            return n(y, N),
            ue && nr(y, k),
            C;
        if (N === null) {
            for (; !M.done; k++,
            M = x.next())
                M = m(y, M.value, S),
                M !== null && (h = s(M, h, k),
                E === null ? C = M : E.sibling = M,
                E = M);
            return ue && nr(y, k),
            C
        }
        for (N = r(y, N); !M.done; k++,
        M = x.next())
            M = p(N, y, k, M.value, S),
            M !== null && (e && M.alternate !== null && N.delete(M.key === null ? k : M.key),
            h = s(M, h, k),
            E === null ? C = M : E.sibling = M,
            E = M);
        return e && N.forEach(function(I) {
            return t(y, I)
        }),
        ue && nr(y, k),
        C
    }
    function w(y, h, x, S) {
        if (typeof x == "object" && x !== null && x.type === Br && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Qs:
                e: {
                    for (var C = x.key, E = h; E !== null; ) {
                        if (E.key === C) {
                            if (C = x.type,
                            C === Br) {
                                if (E.tag === 7) {
                                    n(y, E.sibling),
                                    h = o(E, x.props.children),
                                    h.return = y,
                                    y = h;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Sn && Gf(C) === E.type) {
                                n(y, E.sibling),
                                h = o(E, x.props),
                                h.ref = Bo(y, E, x),
                                h.return = y,
                                y = h;
                                break e
                            }
                            n(y, E);
                            break
                        } else
                            t(y, E);
                        E = E.sibling
                    }
                    x.type === Br ? (h = mr(x.props.children, y.mode, S, x.key),
                    h.return = y,
                    y = h) : (S = _a(x.type, x.key, x.props, null, y.mode, S),
                    S.ref = Bo(y, h, x),
                    S.return = y,
                    y = S)
                }
                return a(y);
            case zr:
                e: {
                    for (E = x.key; h !== null; ) {
                        if (h.key === E)
                            if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                                n(y, h.sibling),
                                h = o(h, x.children || []),
                                h.return = y,
                                y = h;
                                break e
                            } else {
                                n(y, h);
                                break
                            }
                        else
                            t(y, h);
                        h = h.sibling
                    }
                    h = Dl(x, y.mode, S),
                    h.return = y,
                    y = h
                }
                return a(y);
            case Sn:
                return E = x._init,
                w(y, h, E(x._payload), S)
            }
            if (Go(x))
                return b(y, h, x, S);
            if (Lo(x))
                return v(y, h, x, S);
            sa(y, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        h !== null && h.tag === 6 ? (n(y, h.sibling),
        h = o(h, x),
        h.return = y,
        y = h) : (n(y, h),
        h = Ll(x, y.mode, S),
        h.return = y,
        y = h),
        a(y)) : n(y, h)
    }
    return w
}
var bo = og(!0)
  , sg = og(!1)
  , Ja = Qn(null)
  , Za = null
  , qr = null
  , Wu = null;
function Hu() {
    Wu = qr = Za = null
}
function Ku(e) {
    var t = Ja.current;
    le(Ja),
    e._currentValue = t
}
function _c(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function ro(e, t) {
    Za = e,
    Wu = qr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (He = !0),
    e.firstContext = null)
}
function ut(e) {
    var t = e._currentValue;
    if (Wu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        qr === null) {
            if (Za === null)
                throw Error(_(308));
            qr = e,
            Za.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            qr = qr.next = e;
    return t
}
var sr = null;
function Gu(e) {
    sr === null ? sr = [e] : sr.push(e)
}
function ag(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Gu(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    on(e, r)
}
function on(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Cn = !1;
function Qu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ig(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function tn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Fn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        on(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Gu(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    on(e, n)
}
function ka(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Mu(e, n)
    }
}
function Qf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = a : s = s.next = a,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ei(e, t, n, r) {
    var o = e.updateQueue;
    Cn = !1;
    var s = o.firstBaseUpdate
      , a = o.lastBaseUpdate
      , i = o.shared.pending;
    if (i !== null) {
        o.shared.pending = null;
        var l = i
          , u = l.next;
        l.next = null,
        a === null ? s = u : a.next = u,
        a = l;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        i = f.lastBaseUpdate,
        i !== a && (i === null ? f.firstBaseUpdate = u : i.next = u,
        f.lastBaseUpdate = l))
    }
    if (s !== null) {
        var m = o.baseState;
        a = 0,
        f = u = l = null,
        i = s;
        do {
            var g = i.lane
              , p = i.eventTime;
            if ((r & g) === g) {
                f !== null && (f = f.next = {
                    eventTime: p,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var b = e
                      , v = i;
                    switch (g = t,
                    p = n,
                    v.tag) {
                    case 1:
                        if (b = v.payload,
                        typeof b == "function") {
                            m = b.call(p, m, g);
                            break e
                        }
                        m = b;
                        break e;
                    case 3:
                        b.flags = b.flags & -65537 | 128;
                    case 0:
                        if (b = v.payload,
                        g = typeof b == "function" ? b.call(p, m, g) : b,
                        g == null)
                            break e;
                        m = pe({}, m, g);
                        break e;
                    case 2:
                        Cn = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64,
                g = o.effects,
                g === null ? o.effects = [i] : g.push(i))
            } else
                p = {
                    eventTime: p,
                    lane: g,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                },
                f === null ? (u = f = p,
                l = m) : f = f.next = p,
                a |= g;
            if (i = i.next,
            i === null) {
                if (i = o.shared.pending,
                i === null)
                    break;
                g = i,
                i = g.next,
                g.next = null,
                o.lastBaseUpdate = g,
                o.shared.pending = null
            }
        } while (!0);
        if (f === null && (l = m),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = f,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                a |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        xr |= a,
        e.lanes = a,
        e.memoizedState = m
    }
}
function qf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(_(191, o));
                o.call(r)
            }
        }
}
var Ds = {}
  , Ut = Qn(Ds)
  , ys = Qn(Ds)
  , xs = Qn(Ds);
function ar(e) {
    if (e === Ds)
        throw Error(_(174));
    return e
}
function qu(e, t) {
    switch (se(xs, t),
    se(ys, e),
    se(Ut, Ds),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : fc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = fc(t, e)
    }
    le(Ut),
    se(Ut, t)
}
function So() {
    le(Ut),
    le(ys),
    le(xs)
}
function lg(e) {
    ar(xs.current);
    var t = ar(Ut.current)
      , n = fc(t, e.type);
    t !== n && (se(ys, e),
    se(Ut, n))
}
function Yu(e) {
    ys.current === e && (le(Ut),
    le(ys))
}
var de = Qn(0);
function ti(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Tl = [];
function Xu() {
    for (var e = 0; e < Tl.length; e++)
        Tl[e]._workInProgressVersionPrimary = null;
    Tl.length = 0
}
var ja = cn.ReactCurrentDispatcher
  , Al = cn.ReactCurrentBatchConfig
  , yr = 0
  , fe = null
  , Se = null
  , Ee = null
  , ni = !1
  , ts = !1
  , ws = 0
  , _w = 0;
function _e() {
    throw Error(_(321))
}
function Ju(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Nt(e[n], t[n]))
            return !1;
    return !0
}
function Zu(e, t, n, r, o, s) {
    if (yr = s,
    fe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ja.current = e === null || e.memoizedState === null ? Lw : Dw,
    e = n(r, o),
    ts) {
        s = 0;
        do {
            if (ts = !1,
            ws = 0,
            25 <= s)
                throw Error(_(301));
            s += 1,
            Ee = Se = null,
            t.updateQueue = null,
            ja.current = Fw,
            e = n(r, o)
        } while (ts)
    }
    if (ja.current = ri,
    t = Se !== null && Se.next !== null,
    yr = 0,
    Ee = Se = fe = null,
    ni = !1,
    t)
        throw Error(_(300));
    return e
}
function ed() {
    var e = ws !== 0;
    return ws = 0,
    e
}
function Ot() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ee === null ? fe.memoizedState = Ee = e : Ee = Ee.next = e,
    Ee
}
function dt() {
    if (Se === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Se.next;
    var t = Ee === null ? fe.memoizedState : Ee.next;
    if (t !== null)
        Ee = t,
        Se = e;
    else {
        if (e === null)
            throw Error(_(310));
        Se = e,
        e = {
            memoizedState: Se.memoizedState,
            baseState: Se.baseState,
            baseQueue: Se.baseQueue,
            queue: Se.queue,
            next: null
        },
        Ee === null ? fe.memoizedState = Ee = e : Ee = Ee.next = e
    }
    return Ee
}
function bs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function _l(e) {
    var t = dt()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = Se
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = s.next,
            s.next = a
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var i = a = null
          , l = null
          , u = s;
        do {
            var f = u.lane;
            if ((yr & f) === f)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var m = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (i = l = m,
                a = r) : l = l.next = m,
                fe.lanes |= f,
                xr |= f
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? a = r : l.next = i,
        Nt(r, t.memoizedState) || (He = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            fe.lanes |= s,
            xr |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ml(e) {
    var t = dt()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do
            s = e(s, a.action),
            a = a.next;
        while (a !== o);
        Nt(s, t.memoizedState) || (He = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function cg() {}
function ug(e, t) {
    var n = fe
      , r = dt()
      , o = t()
      , s = !Nt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    He = !0),
    r = r.queue,
    td(pg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Ee !== null && Ee.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ss(9, fg.bind(null, n, r, o, t), void 0, null),
        Ne === null)
            throw Error(_(349));
        yr & 30 || dg(n, t, o)
    }
    return o
}
function dg(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = fe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function fg(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    mg(t) && hg(e)
}
function pg(e, t, n) {
    return n(function() {
        mg(t) && hg(e)
    })
}
function mg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Nt(e, n)
    } catch {
        return !0
    }
}
function hg(e) {
    var t = on(e, 1);
    t !== null && Et(t, e, 1, -1)
}
function Yf(e) {
    var t = Ot();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Iw.bind(null, fe, e),
    [t.memoizedState, e]
}
function Ss(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = fe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function gg() {
    return dt().memoizedState
}
function Pa(e, t, n, r) {
    var o = Ot();
    fe.flags |= e,
    o.memoizedState = Ss(1 | t, n, void 0, r === void 0 ? null : r)
}
function _i(e, t, n, r) {
    var o = dt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Se !== null) {
        var a = Se.memoizedState;
        if (s = a.destroy,
        r !== null && Ju(r, a.deps)) {
            o.memoizedState = Ss(t, n, s, r);
            return
        }
    }
    fe.flags |= e,
    o.memoizedState = Ss(1 | t, n, s, r)
}
function Xf(e, t) {
    return Pa(8390656, 8, e, t)
}
function td(e, t) {
    return _i(2048, 8, e, t)
}
function vg(e, t) {
    return _i(4, 2, e, t)
}
function yg(e, t) {
    return _i(4, 4, e, t)
}
function xg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function wg(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    _i(4, 4, xg.bind(null, t, e), n)
}
function nd() {}
function bg(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ju(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Sg(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ju(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Cg(e, t, n) {
    return yr & 21 ? (Nt(n, t) || (n = Ph(),
    fe.lanes |= n,
    xr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    He = !0),
    e.memoizedState = n)
}
function Mw(e, t) {
    var n = re;
    re = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Al.transition;
    Al.transition = {};
    try {
        e(!1),
        t()
    } finally {
        re = n,
        Al.transition = r
    }
}
function Eg() {
    return dt().memoizedState
}
function Ow(e, t, n) {
    var r = zn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ng(e))
        kg(t, n);
    else if (n = ag(e, t, n, r),
    n !== null) {
        var o = ze();
        Et(n, e, r, o),
        jg(n, t, r)
    }
}
function Iw(e, t, n) {
    var r = zn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ng(e))
        kg(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var a = t.lastRenderedState
                  , i = s(a, n);
                if (o.hasEagerState = !0,
                o.eagerState = i,
                Nt(i, a)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Gu(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = ag(e, t, o, r),
        n !== null && (o = ze(),
        Et(n, e, r, o),
        jg(n, t, r))
    }
}
function Ng(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe
}
function kg(e, t) {
    ts = ni = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function jg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Mu(e, n)
    }
}
var ri = {
    readContext: ut,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1
}
  , Lw = {
    readContext: ut,
    useCallback: function(e, t) {
        return Ot().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ut,
    useEffect: Xf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Pa(4194308, 4, xg.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Pa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Pa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ot();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ot();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Ow.bind(null, fe, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ot();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Yf,
    useDebugValue: nd,
    useDeferredValue: function(e) {
        return Ot().memoizedState = e
    },
    useTransition: function() {
        var e = Yf(!1)
          , t = e[0];
        return e = Mw.bind(null, e[1]),
        Ot().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = fe
          , o = Ot();
        if (ue) {
            if (n === void 0)
                throw Error(_(407));
            n = n()
        } else {
            if (n = t(),
            Ne === null)
                throw Error(_(349));
            yr & 30 || dg(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        Xf(pg.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Ss(9, fg.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ot()
          , t = Ne.identifierPrefix;
        if (ue) {
            var n = en
              , r = Zt;
            n = (r & ~(1 << 32 - Ct(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ws++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = _w++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Dw = {
    readContext: ut,
    useCallback: bg,
    useContext: ut,
    useEffect: td,
    useImperativeHandle: wg,
    useInsertionEffect: vg,
    useLayoutEffect: yg,
    useMemo: Sg,
    useReducer: _l,
    useRef: gg,
    useState: function() {
        return _l(bs)
    },
    useDebugValue: nd,
    useDeferredValue: function(e) {
        var t = dt();
        return Cg(t, Se.memoizedState, e)
    },
    useTransition: function() {
        var e = _l(bs)[0]
          , t = dt().memoizedState;
        return [e, t]
    },
    useMutableSource: cg,
    useSyncExternalStore: ug,
    useId: Eg,
    unstable_isNewReconciler: !1
}
  , Fw = {
    readContext: ut,
    useCallback: bg,
    useContext: ut,
    useEffect: td,
    useImperativeHandle: wg,
    useInsertionEffect: vg,
    useLayoutEffect: yg,
    useMemo: Sg,
    useReducer: Ml,
    useRef: gg,
    useState: function() {
        return Ml(bs)
    },
    useDebugValue: nd,
    useDeferredValue: function(e) {
        var t = dt();
        return Se === null ? t.memoizedState = e : Cg(t, Se.memoizedState, e)
    },
    useTransition: function() {
        var e = Ml(bs)[0]
          , t = dt().memoizedState;
        return [e, t]
    },
    useMutableSource: cg,
    useSyncExternalStore: ug,
    useId: Eg,
    unstable_isNewReconciler: !1
};
function vt(e, t) {
    if (e && e.defaultProps) {
        t = pe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Mc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : pe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Mi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Er(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ze()
          , o = zn(e)
          , s = tn(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = Fn(e, s, o),
        t !== null && (Et(t, e, o, r),
        ka(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ze()
          , o = zn(e)
          , s = tn(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Fn(e, s, o),
        t !== null && (Et(t, e, o, r),
        ka(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ze()
          , r = zn(e)
          , o = tn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Fn(e, o, r),
        t !== null && (Et(t, e, r, n),
        ka(t, e, r))
    }
};
function Jf(e, t, n, r, o, s, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !ms(n, r) || !ms(o, s) : !0
}
function Pg(e, t, n) {
    var r = !1
      , o = Wn
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = ut(s) : (o = Ge(t) ? gr : Le.current,
    r = t.contextTypes,
    s = (r = r != null) ? xo(e, o) : Wn),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Mi,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Zf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mi.enqueueReplaceState(t, t.state, null)
}
function Oc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Qu(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = ut(s) : (s = Ge(t) ? gr : Le.current,
    o.context = xo(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Mc(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Mi.enqueueReplaceState(o, o.state, null),
    ei(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Co(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += f1(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Ol(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ic(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var $w = typeof WeakMap == "function" ? WeakMap : Map;
function Rg(e, t, n) {
    n = tn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        si || (si = !0,
        Hc = r),
        Ic(e, t)
    }
    ,
    n
}
function Tg(e, t, n) {
    n = tn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Ic(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Ic(e, t),
        typeof r != "function" && ($n === null ? $n = new Set([this]) : $n.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function ep(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new $w;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Zw.bind(null, e, t, n),
    t.then(e, e))
}
function tp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function np(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tn(-1, 1),
    t.tag = 2,
    Fn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var zw = cn.ReactCurrentOwner
  , He = !1;
function Fe(e, t, n, r) {
    t.child = e === null ? sg(t, null, n, r) : bo(t, e.child, n, r)
}
function rp(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return ro(t, o),
    r = Zu(e, t, n, r, s, o),
    n = ed(),
    e !== null && !He ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    sn(e, t, o)) : (ue && n && Bu(t),
    t.flags |= 1,
    Fe(e, t, r, o),
    t.child)
}
function op(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !ud(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Ag(e, t, s, r, o)) : (e = _a(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var a = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ms,
        n(a, r) && e.ref === t.ref)
            return sn(e, t, o)
    }
    return t.flags |= 1,
    e = Bn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Ag(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ms(s, r) && e.ref === t.ref)
            if (He = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (He = !0);
            else
                return t.lanes = e.lanes,
                sn(e, t, o)
    }
    return Lc(e, t, n, r, o)
}
function _g(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            se(Xr, qe),
            qe |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                se(Xr, qe),
                qe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            se(Xr, qe),
            qe |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        se(Xr, qe),
        qe |= r;
    return Fe(e, t, o, n),
    t.child
}
function Mg(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Lc(e, t, n, r, o) {
    var s = Ge(n) ? gr : Le.current;
    return s = xo(t, s),
    ro(t, o),
    n = Zu(e, t, n, r, s, o),
    r = ed(),
    e !== null && !He ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    sn(e, t, o)) : (ue && r && Bu(t),
    t.flags |= 1,
    Fe(e, t, n, o),
    t.child)
}
function sp(e, t, n, r, o) {
    if (Ge(n)) {
        var s = !0;
        qa(t)
    } else
        s = !1;
    if (ro(t, o),
    t.stateNode === null)
        Ra(e, t),
        Pg(t, n, r),
        Oc(t, n, r, o),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , i = t.memoizedProps;
        a.props = i;
        var l = a.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = ut(u) : (u = Ge(n) ? gr : Le.current,
        u = xo(t, u));
        var f = n.getDerivedStateFromProps
          , m = typeof f == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        m || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== r || l !== u) && Zf(t, a, r, u),
        Cn = !1;
        var g = t.memoizedState;
        a.state = g,
        ei(t, r, a, o),
        l = t.memoizedState,
        i !== r || g !== l || Ke.current || Cn ? (typeof f == "function" && (Mc(t, n, f, r),
        l = t.memoizedState),
        (i = Cn || Jf(t, n, i, r, g, l, u)) ? (m || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        a.props = r,
        a.state = l,
        a.context = u,
        r = i) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        ig(e, t),
        i = t.memoizedProps,
        u = t.type === t.elementType ? i : vt(t.type, i),
        a.props = u,
        m = t.pendingProps,
        g = a.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = ut(l) : (l = Ge(n) ? gr : Le.current,
        l = xo(t, l));
        var p = n.getDerivedStateFromProps;
        (f = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== m || g !== l) && Zf(t, a, r, l),
        Cn = !1,
        g = t.memoizedState,
        a.state = g,
        ei(t, r, a, o);
        var b = t.memoizedState;
        i !== m || g !== b || Ke.current || Cn ? (typeof p == "function" && (Mc(t, n, p, r),
        b = t.memoizedState),
        (u = Cn || Jf(t, n, u, r, g, b, l) || !1) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, b, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, b, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = b),
        a.props = r,
        a.state = b,
        a.context = l,
        r = u) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Dc(e, t, n, r, s, o)
}
function Dc(e, t, n, r, o, s) {
    Mg(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return o && Wf(t, n, !1),
        sn(e, t, s);
    r = t.stateNode,
    zw.current = t;
    var i = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = bo(t, e.child, null, s),
    t.child = bo(t, null, i, s)) : Fe(e, t, i, s),
    t.memoizedState = r.state,
    o && Wf(t, n, !0),
    t.child
}
function Og(e) {
    var t = e.stateNode;
    t.pendingContext ? Vf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vf(e, t.context, !1),
    qu(e, t.containerInfo)
}
function ap(e, t, n, r, o) {
    return wo(),
    Vu(o),
    t.flags |= 256,
    Fe(e, t, n, r),
    t.child
}
var Fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function $c(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ig(e, t, n) {
    var r = t.pendingProps, o = de.current, s = !1, a = (t.flags & 128) !== 0, i;
    if ((i = a) || (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    se(de, o & 1),
    e === null)
        return Ac(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = a) : s = Li(a, r, 0, null),
        e = mr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = $c(n),
        t.memoizedState = Fc,
        e) : rd(t, a));
    if (o = e.memoizedState,
    o !== null && (i = o.dehydrated,
    i !== null))
        return Bw(e, t, a, r, i, o, n);
    if (s) {
        s = r.fallback,
        a = t.mode,
        o = e.child,
        i = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Bn(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        i !== null ? s = Bn(i, s) : (s = mr(s, a, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        a = e.child.memoizedState,
        a = a === null ? $c(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        s.memoizedState = a,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Fc,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Bn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function rd(e, t) {
    return t = Li({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function aa(e, t, n, r) {
    return r !== null && Vu(r),
    bo(t, e.child, null, n),
    e = rd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Bw(e, t, n, r, o, s, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ol(Error(_(422))),
        aa(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = Li({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = mr(s, o, a, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && bo(t, e.child, null, a),
        t.child.memoizedState = $c(a),
        t.memoizedState = Fc,
        s);
    if (!(t.mode & 1))
        return aa(e, t, a, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var i = r.dgst;
        return r = i,
        s = Error(_(419)),
        r = Ol(s, r, void 0),
        aa(e, t, a, r)
    }
    if (i = (a & e.childLanes) !== 0,
    He || i) {
        if (r = Ne,
        r !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | a) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            on(e, o),
            Et(r, e, o, -1))
        }
        return cd(),
        r = Ol(Error(_(421))),
        aa(e, t, a, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = eb.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    Xe = Dn(o.nextSibling),
    Je = t,
    ue = !0,
    St = null,
    e !== null && (at[it++] = Zt,
    at[it++] = en,
    at[it++] = vr,
    Zt = e.id,
    en = e.overflow,
    vr = t),
    t = rd(t, r.children),
    t.flags |= 4096,
    t)
}
function ip(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    _c(e.return, t, n)
}
function Il(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function Lg(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (Fe(e, t, r.children, n),
    r = de.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ip(e, n, t);
                else if (e.tag === 19)
                    ip(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (se(de, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && ti(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Il(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && ti(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Il(t, !0, n, null, s);
            break;
        case "together":
            Il(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ra(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    xr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Bn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Bn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Uw(e, t, n) {
    switch (t.tag) {
    case 3:
        Og(t),
        wo();
        break;
    case 5:
        lg(t);
        break;
    case 1:
        Ge(t.type) && qa(t);
        break;
    case 4:
        qu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        se(Ja, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (se(de, de.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ig(e, t, n) : (se(de, de.current & 1),
            e = sn(e, t, n),
            e !== null ? e.sibling : null);
        se(de, de.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Lg(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        se(de, de.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        _g(e, t, n)
    }
    return sn(e, t, n)
}
var Dg, zc, Fg, $g;
Dg = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
zc = function() {}
;
Fg = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        ar(Ut.current);
        var s = null;
        switch (n) {
        case "input":
            o = lc(e, o),
            r = lc(e, r),
            s = [];
            break;
        case "select":
            o = pe({}, o, {
                value: void 0
            }),
            r = pe({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = dc(e, o),
            r = dc(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ga)
        }
        pc(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var i = o[u];
                    for (a in i)
                        i.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (is.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (i = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== i && (l != null || i != null))
                if (u === "style")
                    if (i) {
                        for (a in i)
                            !i.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && i[a] !== l[a] && (n || (n = {}),
                            n[a] = l[a])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    i = i ? i.__html : void 0,
                    l != null && i !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (is.hasOwnProperty(u) ? (l != null && u === "onScroll" && ie("scroll", e),
                    s || i === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
$g = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Uo(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Vw(e, t, n) {
    var r = t.pendingProps;
    switch (Uu(t),
    t.tag) {
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
        return Me(t),
        null;
    case 1:
        return Ge(t.type) && Qa(),
        Me(t),
        null;
    case 3:
        return r = t.stateNode,
        So(),
        le(Ke),
        le(Le),
        Xu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (oa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        St !== null && (Qc(St),
        St = null))),
        zc(e, t),
        Me(t),
        null;
    case 5:
        Yu(t);
        var o = ar(xs.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Fg(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return Me(t),
                null
            }
            if (e = ar(Ut.current),
            oa(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Ft] = t,
                r[vs] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ie("cancel", r),
                    ie("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ie("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < qo.length; o++)
                        ie(qo[o], r);
                    break;
                case "source":
                    ie("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ie("error", r),
                    ie("load", r);
                    break;
                case "details":
                    ie("toggle", r);
                    break;
                case "input":
                    gf(r, s),
                    ie("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ie("invalid", r);
                    break;
                case "textarea":
                    yf(r, s),
                    ie("invalid", r)
                }
                pc(n, s),
                o = null;
                for (var a in s)
                    if (s.hasOwnProperty(a)) {
                        var i = s[a];
                        a === "children" ? typeof i == "string" ? r.textContent !== i && (s.suppressHydrationWarning !== !0 && ra(r.textContent, i, e),
                        o = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (s.suppressHydrationWarning !== !0 && ra(r.textContent, i, e),
                        o = ["children", "" + i]) : is.hasOwnProperty(a) && i != null && a === "onScroll" && ie("scroll", r)
                    }
                switch (n) {
                case "input":
                    qs(r),
                    vf(r, s, !0);
                    break;
                case "textarea":
                    qs(r),
                    xf(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Ga)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = ph(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[Ft] = t,
                e[vs] = r,
                Dg(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = mc(n, r),
                    n) {
                    case "dialog":
                        ie("cancel", e),
                        ie("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ie("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < qo.length; o++)
                            ie(qo[o], e);
                        o = r;
                        break;
                    case "source":
                        ie("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ie("error", e),
                        ie("load", e),
                        o = r;
                        break;
                    case "details":
                        ie("toggle", e),
                        o = r;
                        break;
                    case "input":
                        gf(e, r),
                        o = lc(e, r),
                        ie("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = pe({}, r, {
                            value: void 0
                        }),
                        ie("invalid", e);
                        break;
                    case "textarea":
                        yf(e, r),
                        o = dc(e, r),
                        ie("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    pc(n, o),
                    i = o;
                    for (s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "style" ? gh(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && mh(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ls(e, l) : typeof l == "number" && ls(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (is.hasOwnProperty(s) ? l != null && s === "onScroll" && ie("scroll", e) : l != null && ju(e, s, l, a))
                        }
                    switch (n) {
                    case "input":
                        qs(e),
                        vf(e, r, !1);
                        break;
                    case "textarea":
                        qs(e),
                        xf(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Vn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Zr(e, !!r.multiple, s, !1) : r.defaultValue != null && Zr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Ga)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Me(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            $g(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = ar(xs.current),
            ar(Ut.current),
            oa(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ft] = t,
                (s = r.nodeValue !== n) && (e = Je,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ra(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ra(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ft] = t,
                t.stateNode = r
        }
        return Me(t),
        null;
    case 13:
        if (le(de),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && Xe !== null && t.mode & 1 && !(t.flags & 128))
                rg(),
                wo(),
                t.flags |= 98560,
                s = !1;
            else if (s = oa(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(_(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(_(317));
                    s[Ft] = t
                } else
                    wo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Me(t),
                s = !1
            } else
                St !== null && (Qc(St),
                St = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || de.current & 1 ? Ce === 0 && (Ce = 3) : cd())),
        t.updateQueue !== null && (t.flags |= 4),
        Me(t),
        null);
    case 4:
        return So(),
        zc(e, t),
        e === null && hs(t.stateNode.containerInfo),
        Me(t),
        null;
    case 10:
        return Ku(t.type._context),
        Me(t),
        null;
    case 17:
        return Ge(t.type) && Qa(),
        Me(t),
        null;
    case 19:
        if (le(de),
        s = t.memoizedState,
        s === null)
            return Me(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = s.rendering,
        a === null)
            if (r)
                Uo(s, !1);
            else {
                if (Ce !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = ti(e),
                        a !== null) {
                            for (t.flags |= 128,
                            Uo(s, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                a = s.alternate,
                                a === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = a.childLanes,
                                s.lanes = a.lanes,
                                s.child = a.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = a.memoizedProps,
                                s.memoizedState = a.memoizedState,
                                s.updateQueue = a.updateQueue,
                                s.type = a.type,
                                e = a.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return se(de, de.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ge() > Eo && (t.flags |= 128,
                r = !0,
                Uo(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ti(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Uo(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !a.alternate && !ue)
                        return Me(t),
                        null
                } else
                    2 * ge() - s.renderingStartTime > Eo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Uo(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = s.last,
            n !== null ? n.sibling = a : t.child = a,
            s.last = a)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ge(),
        t.sibling = null,
        n = de.current,
        se(de, r ? n & 1 | 2 : n & 1),
        t) : (Me(t),
        null);
    case 22:
    case 23:
        return ld(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? qe & 1073741824 && (Me(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(_(156, t.tag))
}
function Ww(e, t) {
    switch (Uu(t),
    t.tag) {
    case 1:
        return Ge(t.type) && Qa(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return So(),
        le(Ke),
        le(Le),
        Xu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Yu(t),
        null;
    case 13:
        if (le(de),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            wo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return le(de),
        null;
    case 4:
        return So(),
        null;
    case 10:
        return Ku(t.type._context),
        null;
    case 22:
    case 23:
        return ld(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ia = !1
  , Ie = !1
  , Hw = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function Yr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                he(e, t, r)
            }
        else
            n.current = null
}
function Bc(e, t, n) {
    try {
        n()
    } catch (r) {
        he(e, t, r)
    }
}
var lp = !1;
function Kw(e, t) {
    if (Ec = Wa,
    e = Wh(),
    zu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , i = -1
                      , l = -1
                      , u = 0
                      , f = 0
                      , m = e
                      , g = null;
                    t: for (; ; ) {
                        for (var p; m !== n || o !== 0 && m.nodeType !== 3 || (i = a + o),
                        m !== s || r !== 0 && m.nodeType !== 3 || (l = a + r),
                        m.nodeType === 3 && (a += m.nodeValue.length),
                        (p = m.firstChild) !== null; )
                            g = m,
                            m = p;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (g === n && ++u === o && (i = a),
                            g === s && ++f === r && (l = a),
                            (p = m.nextSibling) !== null)
                                break;
                            m = g,
                            g = m.parentNode
                        }
                        m = p
                    }
                    n = i === -1 || l === -1 ? null : {
                        start: i,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Nc = {
        focusedElem: e,
        selectionRange: n
    },
    Wa = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (b !== null) {
                                var v = b.memoizedProps
                                  , w = b.memoizedState
                                  , y = t.stateNode
                                  , h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vt(t.type, v), w);
                                y.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                        }
                } catch (S) {
                    he(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return b = lp,
    lp = !1,
    b
}
function ns(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && Bc(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Oi(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Uc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function zg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    zg(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ft],
    delete t[vs],
    delete t[Pc],
    delete t[Pw],
    delete t[Rw])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Bg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function cp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Bg(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Vc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ga));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Vc(e, t, n),
        e = e.sibling; e !== null; )
            Vc(e, t, n),
            e = e.sibling
}
function Wc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Wc(e, t, n),
        e = e.sibling; e !== null; )
            Wc(e, t, n),
            e = e.sibling
}
var ke = null
  , bt = !1;
function vn(e, t, n) {
    for (n = n.child; n !== null; )
        Ug(e, t, n),
        n = n.sibling
}
function Ug(e, t, n) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function")
        try {
            Bt.onCommitFiberUnmount(ki, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ie || Yr(n, t);
    case 6:
        var r = ke
          , o = bt;
        ke = null,
        vn(e, t, n),
        ke = r,
        bt = o,
        ke !== null && (bt ? (e = ke,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
        break;
    case 18:
        ke !== null && (bt ? (e = ke,
        n = n.stateNode,
        e.nodeType === 8 ? Pl(e.parentNode, n) : e.nodeType === 1 && Pl(e, n),
        fs(e)) : Pl(ke, n.stateNode));
        break;
    case 4:
        r = ke,
        o = bt,
        ke = n.stateNode.containerInfo,
        bt = !0,
        vn(e, t, n),
        ke = r,
        bt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ie && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , a = s.destroy;
                s = s.tag,
                a !== void 0 && (s & 2 || s & 4) && Bc(n, t, a),
                o = o.next
            } while (o !== r)
        }
        vn(e, t, n);
        break;
    case 1:
        if (!Ie && (Yr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (i) {
                he(n, t, i)
            }
        vn(e, t, n);
        break;
    case 21:
        vn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null,
        vn(e, t, n),
        Ie = r) : vn(e, t, n);
        break;
    default:
        vn(e, t, n)
    }
}
function up(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Hw),
        t.forEach(function(r) {
            var o = tb.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , a = t
                  , i = a;
                e: for (; i !== null; ) {
                    switch (i.tag) {
                    case 5:
                        ke = i.stateNode,
                        bt = !1;
                        break e;
                    case 3:
                        ke = i.stateNode.containerInfo,
                        bt = !0;
                        break e;
                    case 4:
                        ke = i.stateNode.containerInfo,
                        bt = !0;
                        break e
                    }
                    i = i.return
                }
                if (ke === null)
                    throw Error(_(160));
                Ug(s, a, o),
                ke = null,
                bt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                he(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Vg(t, e),
            t = t.sibling
}
function Vg(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ht(t, e),
        _t(e),
        r & 4) {
            try {
                ns(3, e, e.return),
                Oi(3, e)
            } catch (v) {
                he(e, e.return, v)
            }
            try {
                ns(5, e, e.return)
            } catch (v) {
                he(e, e.return, v)
            }
        }
        break;
    case 1:
        ht(t, e),
        _t(e),
        r & 512 && n !== null && Yr(n, n.return);
        break;
    case 5:
        if (ht(t, e),
        _t(e),
        r & 512 && n !== null && Yr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                ls(o, "")
            } catch (v) {
                he(e, e.return, v)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , a = n !== null ? n.memoizedProps : s
              , i = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    i === "input" && s.type === "radio" && s.name != null && dh(o, s),
                    mc(i, a);
                    var u = mc(i, s);
                    for (a = 0; a < l.length; a += 2) {
                        var f = l[a]
                          , m = l[a + 1];
                        f === "style" ? gh(o, m) : f === "dangerouslySetInnerHTML" ? mh(o, m) : f === "children" ? ls(o, m) : ju(o, f, m, u)
                    }
                    switch (i) {
                    case "input":
                        cc(o, s);
                        break;
                    case "textarea":
                        fh(o, s);
                        break;
                    case "select":
                        var g = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        p != null ? Zr(o, !!s.multiple, p, !1) : g !== !!s.multiple && (s.defaultValue != null ? Zr(o, !!s.multiple, s.defaultValue, !0) : Zr(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[vs] = s
                } catch (v) {
                    he(e, e.return, v)
                }
        }
        break;
    case 6:
        if (ht(t, e),
        _t(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (v) {
                he(e, e.return, v)
            }
        }
        break;
    case 3:
        if (ht(t, e),
        _t(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                fs(t.containerInfo)
            } catch (v) {
                he(e, e.return, v)
            }
        break;
    case 4:
        ht(t, e),
        _t(e);
        break;
    case 13:
        ht(t, e),
        _t(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (ad = ge())),
        r & 4 && up(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ie = (u = Ie) || f,
        ht(t, e),
        Ie = u) : ht(t, e),
        _t(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (F = e,
                f = e.child; f !== null; ) {
                    for (m = F = f; F !== null; ) {
                        switch (g = F,
                        p = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ns(4, g, g.return);
                            break;
                        case 1:
                            Yr(g, g.return);
                            var b = g.stateNode;
                            if (typeof b.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    b.props = t.memoizedProps,
                                    b.state = t.memoizedState,
                                    b.componentWillUnmount()
                                } catch (v) {
                                    he(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Yr(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                fp(m);
                                continue
                            }
                        }
                        p !== null ? (p.return = g,
                        F = p) : fp(m)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (f === null) {
                        f = m;
                        try {
                            o = m.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (i = m.stateNode,
                            l = m.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            i.style.display = hh("display", a))
                        } catch (v) {
                            he(e, e.return, v)
                        }
                    }
                } else if (m.tag === 6) {
                    if (f === null)
                        try {
                            m.stateNode.nodeValue = u ? "" : m.memoizedProps
                        } catch (v) {
                            he(e, e.return, v)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    f === m && (f = null),
                    m = m.return
                }
                f === m && (f = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        ht(t, e),
        _t(e),
        r & 4 && up(e);
        break;
    case 21:
        break;
    default:
        ht(t, e),
        _t(e)
    }
}
function _t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Bg(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (ls(o, ""),
                r.flags &= -33);
                var s = cp(e);
                Wc(e, s, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , i = cp(e);
                Vc(e, i, a);
                break;
            default:
                throw Error(_(161))
            }
        } catch (l) {
            he(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Gw(e, t, n) {
    F = e,
    Wg(e)
}
function Wg(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var o = F
          , s = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || ia;
            if (!a) {
                var i = o.alternate
                  , l = i !== null && i.memoizedState !== null || Ie;
                i = ia;
                var u = Ie;
                if (ia = a,
                (Ie = l) && !u)
                    for (F = o; F !== null; )
                        a = F,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? pp(o) : l !== null ? (l.return = a,
                        F = l) : pp(o);
                for (; s !== null; )
                    F = s,
                    Wg(s),
                    s = s.sibling;
                F = o,
                ia = i,
                Ie = u
            }
            dp(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            F = s) : dp(e)
    }
}
function dp(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ie || Oi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ie)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && qf(t, s, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            qf(t, a, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var m = f.dehydrated;
                                    m !== null && fs(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(_(163))
                    }
                Ie || t.flags & 512 && Uc(t)
            } catch (g) {
                he(t, t.return, g)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function fp(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function pp(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Oi(4, t)
                } catch (l) {
                    he(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        he(t, o, l)
                    }
                }
                var s = t.return;
                try {
                    Uc(t)
                } catch (l) {
                    he(t, s, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    Uc(t)
                } catch (l) {
                    he(t, a, l)
                }
            }
        } catch (l) {
            he(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return,
            F = i;
            break
        }
        F = t.return
    }
}
var Qw = Math.ceil
  , oi = cn.ReactCurrentDispatcher
  , od = cn.ReactCurrentOwner
  , ct = cn.ReactCurrentBatchConfig
  , Z = 0
  , Ne = null
  , xe = null
  , Pe = 0
  , qe = 0
  , Xr = Qn(0)
  , Ce = 0
  , Cs = null
  , xr = 0
  , Ii = 0
  , sd = 0
  , rs = null
  , We = null
  , ad = 0
  , Eo = 1 / 0
  , Yt = null
  , si = !1
  , Hc = null
  , $n = null
  , la = !1
  , _n = null
  , ai = 0
  , os = 0
  , Kc = null
  , Ta = -1
  , Aa = 0;
function ze() {
    return Z & 6 ? ge() : Ta !== -1 ? Ta : Ta = ge()
}
function zn(e) {
    return e.mode & 1 ? Z & 2 && Pe !== 0 ? Pe & -Pe : Aw.transition !== null ? (Aa === 0 && (Aa = Ph()),
    Aa) : (e = re,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Ih(e.type)),
    e) : 1
}
function Et(e, t, n, r) {
    if (50 < os)
        throw os = 0,
        Kc = null,
        Error(_(185));
    Os(e, n, r),
    (!(Z & 2) || e !== Ne) && (e === Ne && (!(Z & 2) && (Ii |= n),
    Ce === 4 && Nn(e, Pe)),
    Qe(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && (Eo = ge() + 500,
    Ai && qn()))
}
function Qe(e, t) {
    var n = e.callbackNode;
    A1(e, t);
    var r = Va(e, e === Ne ? Pe : 0);
    if (r === 0)
        n !== null && Sf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Sf(n),
        t === 1)
            e.tag === 0 ? Tw(mp.bind(null, e)) : eg(mp.bind(null, e)),
            kw(function() {
                !(Z & 6) && qn()
            }),
            n = null;
        else {
            switch (Rh(r)) {
            case 1:
                n = _u;
                break;
            case 4:
                n = kh;
                break;
            case 16:
                n = Ua;
                break;
            case 536870912:
                n = jh;
                break;
            default:
                n = Ua
            }
            n = Jg(n, Hg.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Hg(e, t) {
    if (Ta = -1,
    Aa = 0,
    Z & 6)
        throw Error(_(327));
    var n = e.callbackNode;
    if (oo() && e.callbackNode !== n)
        return null;
    var r = Va(e, e === Ne ? Pe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ii(e, r);
    else {
        t = r;
        var o = Z;
        Z |= 2;
        var s = Gg();
        (Ne !== e || Pe !== t) && (Yt = null,
        Eo = ge() + 500,
        pr(e, t));
        do
            try {
                Xw();
                break
            } catch (i) {
                Kg(e, i)
            }
        while (!0);
        Hu(),
        oi.current = s,
        Z = o,
        xe !== null ? t = 0 : (Ne = null,
        Pe = 0,
        t = Ce)
    }
    if (t !== 0) {
        if (t === 2 && (o = xc(e),
        o !== 0 && (r = o,
        t = Gc(e, o))),
        t === 1)
            throw n = Cs,
            pr(e, 0),
            Nn(e, r),
            Qe(e, ge()),
            n;
        if (t === 6)
            Nn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !qw(o) && (t = ii(e, r),
            t === 2 && (s = xc(e),
            s !== 0 && (r = s,
            t = Gc(e, s))),
            t === 1))
                throw n = Cs,
                pr(e, 0),
                Nn(e, r),
                Qe(e, ge()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(_(345));
            case 2:
                rr(e, We, Yt);
                break;
            case 3:
                if (Nn(e, r),
                (r & 130023424) === r && (t = ad + 500 - ge(),
                10 < t)) {
                    if (Va(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        ze(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = jc(rr.bind(null, e, We, Yt), t);
                    break
                }
                rr(e, We, Yt);
                break;
            case 4:
                if (Nn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var a = 31 - Ct(r);
                    s = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    r &= ~s
                }
                if (r = o,
                r = ge() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qw(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = jc(rr.bind(null, e, We, Yt), r);
                    break
                }
                rr(e, We, Yt);
                break;
            case 5:
                rr(e, We, Yt);
                break;
            default:
                throw Error(_(329))
            }
        }
    }
    return Qe(e, ge()),
    e.callbackNode === n ? Hg.bind(null, e) : null
}
function Gc(e, t) {
    var n = rs;
    return e.current.memoizedState.isDehydrated && (pr(e, t).flags |= 256),
    e = ii(e, t),
    e !== 2 && (t = We,
    We = n,
    t !== null && Qc(t)),
    e
}
function Qc(e) {
    We === null ? We = e : We.push.apply(We, e)
}
function qw(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Nt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Nn(e, t) {
    for (t &= ~sd,
    t &= ~Ii,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ct(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function mp(e) {
    if (Z & 6)
        throw Error(_(327));
    oo();
    var t = Va(e, 0);
    if (!(t & 1))
        return Qe(e, ge()),
        null;
    var n = ii(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = xc(e);
        r !== 0 && (t = r,
        n = Gc(e, r))
    }
    if (n === 1)
        throw n = Cs,
        pr(e, 0),
        Nn(e, t),
        Qe(e, ge()),
        n;
    if (n === 6)
        throw Error(_(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    rr(e, We, Yt),
    Qe(e, ge()),
    null
}
function id(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && (Eo = ge() + 500,
        Ai && qn())
    }
}
function wr(e) {
    _n !== null && _n.tag === 0 && !(Z & 6) && oo();
    var t = Z;
    Z |= 1;
    var n = ct.transition
      , r = re;
    try {
        if (ct.transition = null,
        re = 1,
        e)
            return e()
    } finally {
        re = r,
        ct.transition = n,
        Z = t,
        !(Z & 6) && qn()
    }
}
function ld() {
    qe = Xr.current,
    le(Xr)
}
function pr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Nw(n)),
    xe !== null)
        for (n = xe.return; n !== null; ) {
            var r = n;
            switch (Uu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Qa();
                break;
            case 3:
                So(),
                le(Ke),
                le(Le),
                Xu();
                break;
            case 5:
                Yu(r);
                break;
            case 4:
                So();
                break;
            case 13:
                le(de);
                break;
            case 19:
                le(de);
                break;
            case 10:
                Ku(r.type._context);
                break;
            case 22:
            case 23:
                ld()
            }
            n = n.return
        }
    if (Ne = e,
    xe = e = Bn(e.current, null),
    Pe = qe = t,
    Ce = 0,
    Cs = null,
    sd = Ii = xr = 0,
    We = rs = null,
    sr !== null) {
        for (t = 0; t < sr.length; t++)
            if (n = sr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var a = s.next;
                    s.next = o,
                    r.next = a
                }
                n.pending = r
            }
        sr = null
    }
    return e
}
function Kg(e, t) {
    do {
        var n = xe;
        try {
            if (Hu(),
            ja.current = ri,
            ni) {
                for (var r = fe.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                ni = !1
            }
            if (yr = 0,
            Ee = Se = fe = null,
            ts = !1,
            ws = 0,
            od.current = null,
            n === null || n.return === null) {
                Ce = 1,
                Cs = t,
                xe = null;
                break
            }
            e: {
                var s = e
                  , a = n.return
                  , i = n
                  , l = t;
                if (t = Pe,
                i.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , f = i
                      , m = f.tag;
                    if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var g = f.alternate;
                        g ? (f.updateQueue = g.updateQueue,
                        f.memoizedState = g.memoizedState,
                        f.lanes = g.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var p = tp(a);
                    if (p !== null) {
                        p.flags &= -257,
                        np(p, a, i, s, t),
                        p.mode & 1 && ep(s, u, t),
                        t = p,
                        l = u;
                        var b = t.updateQueue;
                        if (b === null) {
                            var v = new Set;
                            v.add(l),
                            t.updateQueue = v
                        } else
                            b.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ep(s, u, t),
                            cd();
                            break e
                        }
                        l = Error(_(426))
                    }
                } else if (ue && i.mode & 1) {
                    var w = tp(a);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        np(w, a, i, s, t),
                        Vu(Co(l, i));
                        break e
                    }
                }
                s = l = Co(l, i),
                Ce !== 4 && (Ce = 2),
                rs === null ? rs = [s] : rs.push(s),
                s = a;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var y = Rg(s, l, t);
                        Qf(s, y);
                        break e;
                    case 1:
                        i = l;
                        var h = s.type
                          , x = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && ($n === null || !$n.has(x)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var S = Tg(s, i, t);
                            Qf(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            qg(n)
        } catch (C) {
            t = C,
            xe === n && n !== null && (xe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Gg() {
    var e = oi.current;
    return oi.current = ri,
    e === null ? ri : e
}
function cd() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Ne === null || !(xr & 268435455) && !(Ii & 268435455) || Nn(Ne, Pe)
}
function ii(e, t) {
    var n = Z;
    Z |= 2;
    var r = Gg();
    (Ne !== e || Pe !== t) && (Yt = null,
    pr(e, t));
    do
        try {
            Yw();
            break
        } catch (o) {
            Kg(e, o)
        }
    while (!0);
    if (Hu(),
    Z = n,
    oi.current = r,
    xe !== null)
        throw Error(_(261));
    return Ne = null,
    Pe = 0,
    Ce
}
function Yw() {
    for (; xe !== null; )
        Qg(xe)
}
function Xw() {
    for (; xe !== null && !S1(); )
        Qg(xe)
}
function Qg(e) {
    var t = Xg(e.alternate, e, qe);
    e.memoizedProps = e.pendingProps,
    t === null ? qg(e) : xe = t,
    od.current = null
}
function qg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Ww(n, t),
            n !== null) {
                n.flags &= 32767,
                xe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ce = 6,
                xe = null;
                return
            }
        } else if (n = Vw(n, t, qe),
        n !== null) {
            xe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            xe = t;
            return
        }
        xe = t = e
    } while (t !== null);
    Ce === 0 && (Ce = 5)
}
function rr(e, t, n) {
    var r = re
      , o = ct.transition;
    try {
        ct.transition = null,
        re = 1,
        Jw(e, t, n, r)
    } finally {
        ct.transition = o,
        re = r
    }
    return null
}
function Jw(e, t, n, r) {
    do
        oo();
    while (_n !== null);
    if (Z & 6)
        throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(_(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (_1(e, s),
    e === Ne && (xe = Ne = null,
    Pe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || la || (la = !0,
    Jg(Ua, function() {
        return oo(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = ct.transition,
        ct.transition = null;
        var a = re;
        re = 1;
        var i = Z;
        Z |= 4,
        od.current = null,
        Kw(e, n),
        Vg(n, e),
        yw(Nc),
        Wa = !!Ec,
        Nc = Ec = null,
        e.current = n,
        Gw(n),
        C1(),
        Z = i,
        re = a,
        ct.transition = s
    } else
        e.current = n;
    if (la && (la = !1,
    _n = e,
    ai = o),
    s = e.pendingLanes,
    s === 0 && ($n = null),
    k1(n.stateNode),
    Qe(e, ge()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (si)
        throw si = !1,
        e = Hc,
        Hc = null,
        e;
    return ai & 1 && e.tag !== 0 && oo(),
    s = e.pendingLanes,
    s & 1 ? e === Kc ? os++ : (os = 0,
    Kc = e) : os = 0,
    qn(),
    null
}
function oo() {
    if (_n !== null) {
        var e = Rh(ai)
          , t = ct.transition
          , n = re;
        try {
            if (ct.transition = null,
            re = 16 > e ? 16 : e,
            _n === null)
                var r = !1;
            else {
                if (e = _n,
                _n = null,
                ai = 0,
                Z & 6)
                    throw Error(_(331));
                var o = Z;
                for (Z |= 4,
                F = e.current; F !== null; ) {
                    var s = F
                      , a = s.child;
                    if (F.flags & 16) {
                        var i = s.deletions;
                        if (i !== null) {
                            for (var l = 0; l < i.length; l++) {
                                var u = i[l];
                                for (F = u; F !== null; ) {
                                    var f = F;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ns(8, f, s)
                                    }
                                    var m = f.child;
                                    if (m !== null)
                                        m.return = f,
                                        F = m;
                                    else
                                        for (; F !== null; ) {
                                            f = F;
                                            var g = f.sibling
                                              , p = f.return;
                                            if (zg(f),
                                            f === u) {
                                                F = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = p,
                                                F = g;
                                                break
                                            }
                                            F = p
                                        }
                                }
                            }
                            var b = s.alternate;
                            if (b !== null) {
                                var v = b.child;
                                if (v !== null) {
                                    b.child = null;
                                    do {
                                        var w = v.sibling;
                                        v.sibling = null,
                                        v = w
                                    } while (v !== null)
                                }
                            }
                            F = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && a !== null)
                        a.return = s,
                        F = a;
                    else
                        e: for (; F !== null; ) {
                            if (s = F,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ns(9, s, s.return)
                                }
                            var y = s.sibling;
                            if (y !== null) {
                                y.return = s.return,
                                F = y;
                                break e
                            }
                            F = s.return
                        }
                }
                var h = e.current;
                for (F = h; F !== null; ) {
                    a = F;
                    var x = a.child;
                    if (a.subtreeFlags & 2064 && x !== null)
                        x.return = a,
                        F = x;
                    else
                        e: for (a = h; F !== null; ) {
                            if (i = F,
                            i.flags & 2048)
                                try {
                                    switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Oi(9, i)
                                    }
                                } catch (C) {
                                    he(i, i.return, C)
                                }
                            if (i === a) {
                                F = null;
                                break e
                            }
                            var S = i.sibling;
                            if (S !== null) {
                                S.return = i.return,
                                F = S;
                                break e
                            }
                            F = i.return
                        }
                }
                if (Z = o,
                qn(),
                Bt && typeof Bt.onPostCommitFiberRoot == "function")
                    try {
                        Bt.onPostCommitFiberRoot(ki, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            re = n,
            ct.transition = t
        }
    }
    return !1
}
function hp(e, t, n) {
    t = Co(n, t),
    t = Rg(e, t, 1),
    e = Fn(e, t, 1),
    t = ze(),
    e !== null && (Os(e, 1, t),
    Qe(e, t))
}
function he(e, t, n) {
    if (e.tag === 3)
        hp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                hp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($n === null || !$n.has(r))) {
                    e = Co(n, e),
                    e = Tg(t, e, 1),
                    t = Fn(t, e, 1),
                    e = ze(),
                    t !== null && (Os(t, 1, e),
                    Qe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Zw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ze(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ne === e && (Pe & n) === n && (Ce === 4 || Ce === 3 && (Pe & 130023424) === Pe && 500 > ge() - ad ? pr(e, 0) : sd |= n),
    Qe(e, t)
}
function Yg(e, t) {
    t === 0 && (e.mode & 1 ? (t = Js,
    Js <<= 1,
    !(Js & 130023424) && (Js = 4194304)) : t = 1);
    var n = ze();
    e = on(e, t),
    e !== null && (Os(e, t, n),
    Qe(e, n))
}
function eb(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Yg(e, n)
}
function tb(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(_(314))
    }
    r !== null && r.delete(t),
    Yg(e, n)
}
var Xg;
Xg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ke.current)
            He = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return He = !1,
                Uw(e, t, n);
            He = !!(e.flags & 131072)
        }
    else
        He = !1,
        ue && t.flags & 1048576 && tg(t, Xa, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ra(e, t),
        e = t.pendingProps;
        var o = xo(t, Le.current);
        ro(t, n),
        o = Zu(null, t, r, e, o, n);
        var s = ed();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ge(r) ? (s = !0,
        qa(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Qu(t),
        o.updater = Mi,
        t.stateNode = o,
        o._reactInternals = t,
        Oc(t, r, e, n),
        t = Dc(null, t, r, !0, s, n)) : (t.tag = 0,
        ue && s && Bu(t),
        Fe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ra(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = rb(r),
            e = vt(r, e),
            o) {
            case 0:
                t = Lc(null, t, r, e, n);
                break e;
            case 1:
                t = sp(null, t, r, e, n);
                break e;
            case 11:
                t = rp(null, t, r, e, n);
                break e;
            case 14:
                t = op(null, t, r, vt(r.type, e), n);
                break e
            }
            throw Error(_(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vt(r, o),
        Lc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vt(r, o),
        sp(e, t, r, o, n);
    case 3:
        e: {
            if (Og(t),
            e === null)
                throw Error(_(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            ig(e, t),
            ei(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = Co(Error(_(423)), t),
                    t = ap(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Co(Error(_(424)), t),
                    t = ap(e, t, r, n, o);
                    break e
                } else
                    for (Xe = Dn(t.stateNode.containerInfo.firstChild),
                    Je = t,
                    ue = !0,
                    St = null,
                    n = sg(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (wo(),
                r === o) {
                    t = sn(e, t, n);
                    break e
                }
                Fe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return lg(t),
        e === null && Ac(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        a = o.children,
        kc(r, o) ? a = null : s !== null && kc(r, s) && (t.flags |= 32),
        Mg(e, t),
        Fe(e, t, a, n),
        t.child;
    case 6:
        return e === null && Ac(t),
        null;
    case 13:
        return Ig(e, t, n);
    case 4:
        return qu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = bo(t, null, r, n) : Fe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vt(r, o),
        rp(e, t, r, o, n);
    case 7:
        return Fe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Fe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Fe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            a = o.value,
            se(Ja, r._currentValue),
            r._currentValue = a,
            s !== null)
                if (Nt(s.value, a)) {
                    if (s.children === o.children && !Ke.current) {
                        t = sn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var i = s.dependencies;
                        if (i !== null) {
                            a = s.child;
                            for (var l = i.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = tn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? l.next = l : (l.next = f.next,
                                            f.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    _c(s.return, n, t),
                                    i.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            a = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (a = s.return,
                            a === null)
                                throw Error(_(341));
                            a.lanes |= n,
                            i = a.alternate,
                            i !== null && (i.lanes |= n),
                            _c(a, n, t),
                            a = s.sibling
                        } else
                            a = s.child;
                        if (a !== null)
                            a.return = s;
                        else
                            for (a = s; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (s = a.sibling,
                                s !== null) {
                                    s.return = a.return,
                                    a = s;
                                    break
                                }
                                a = a.return
                            }
                        s = a
                    }
            Fe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        ro(t, n),
        o = ut(o),
        r = r(o),
        t.flags |= 1,
        Fe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = vt(r, t.pendingProps),
        o = vt(r.type, o),
        op(e, t, r, o, n);
    case 15:
        return Ag(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vt(r, o),
        Ra(e, t),
        t.tag = 1,
        Ge(r) ? (e = !0,
        qa(t)) : e = !1,
        ro(t, n),
        Pg(t, r, o),
        Oc(t, r, o, n),
        Dc(null, t, r, !0, e, n);
    case 19:
        return Lg(e, t, n);
    case 22:
        return _g(e, t, n)
    }
    throw Error(_(156, t.tag))
}
;
function Jg(e, t) {
    return Nh(e, t)
}
function nb(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function lt(e, t, n, r) {
    return new nb(e,t,n,r)
}
function ud(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function rb(e) {
    if (typeof e == "function")
        return ud(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ru)
            return 11;
        if (e === Tu)
            return 14
    }
    return 2
}
function Bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = lt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function _a(e, t, n, r, o, s) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        ud(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case Br:
            return mr(n.children, o, s, t);
        case Pu:
            a = 8,
            o |= 8;
            break;
        case oc:
            return e = lt(12, n, t, o | 2),
            e.elementType = oc,
            e.lanes = s,
            e;
        case sc:
            return e = lt(13, n, t, o),
            e.elementType = sc,
            e.lanes = s,
            e;
        case ac:
            return e = lt(19, n, t, o),
            e.elementType = ac,
            e.lanes = s,
            e;
        case lh:
            return Li(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ah:
                    a = 10;
                    break e;
                case ih:
                    a = 9;
                    break e;
                case Ru:
                    a = 11;
                    break e;
                case Tu:
                    a = 14;
                    break e;
                case Sn:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(_(130, e == null ? e : typeof e, ""))
        }
    return t = lt(a, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function mr(e, t, n, r) {
    return e = lt(7, e, r, t),
    e.lanes = n,
    e
}
function Li(e, t, n, r) {
    return e = lt(22, e, r, t),
    e.elementType = lh,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ll(e, t, n) {
    return e = lt(6, e, null, t),
    e.lanes = n,
    e
}
function Dl(e, t, n) {
    return t = lt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function ob(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = vl(0),
    this.expirationTimes = vl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = vl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function dd(e, t, n, r, o, s, a, i, l) {
    return e = new ob(e,t,n,i,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = lt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Qu(s),
    e
}
function sb(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: zr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Zg(e) {
    if (!e)
        return Wn;
    e = e._reactInternals;
    e: {
        if (Er(e) !== e || e.tag !== 1)
            throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ge(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ge(n))
            return Zh(e, n, t)
    }
    return t
}
function ev(e, t, n, r, o, s, a, i, l) {
    return e = dd(n, r, !0, e, o, s, a, i, l),
    e.context = Zg(null),
    n = e.current,
    r = ze(),
    o = zn(n),
    s = tn(r, o),
    s.callback = t ?? null,
    Fn(n, s, o),
    e.current.lanes = o,
    Os(e, o, r),
    Qe(e, r),
    e
}
function Di(e, t, n, r) {
    var o = t.current
      , s = ze()
      , a = zn(o);
    return n = Zg(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = tn(s, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Fn(o, t, a),
    e !== null && (Et(e, o, a, s),
    ka(e, o, a)),
    a
}
function li(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function gp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function fd(e, t) {
    gp(e, t),
    (e = e.alternate) && gp(e, t)
}
function ab() {
    return null
}
var tv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function pd(e) {
    this._internalRoot = e
}
Fi.prototype.render = pd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(_(409));
    Di(e, t, null, null)
}
;
Fi.prototype.unmount = pd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wr(function() {
            Di(null, e, null, null)
        }),
        t[rn] = null
    }
}
;
function Fi(e) {
    this._internalRoot = e
}
Fi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = _h();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++)
            ;
        En.splice(n, 0, e),
        n === 0 && Oh(e)
    }
}
;
function md(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function $i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function vp() {}
function ib(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = li(a);
                s.call(u)
            }
        }
        var a = ev(t, r, e, 0, null, !1, !1, "", vp);
        return e._reactRootContainer = a,
        e[rn] = a.current,
        hs(e.nodeType === 8 ? e.parentNode : e),
        wr(),
        a
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var i = r;
        r = function() {
            var u = li(l);
            i.call(u)
        }
    }
    var l = dd(e, 0, !1, null, null, !1, !1, "", vp);
    return e._reactRootContainer = l,
    e[rn] = l.current,
    hs(e.nodeType === 8 ? e.parentNode : e),
    wr(function() {
        Di(t, l, n, r)
    }),
    l
}
function zi(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var a = s;
        if (typeof o == "function") {
            var i = o;
            o = function() {
                var l = li(a);
                i.call(l)
            }
        }
        Di(t, a, e, o)
    } else
        a = ib(n, t, e, o, r);
    return li(a)
}
Th = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Qo(t.pendingLanes);
            n !== 0 && (Mu(t, n | 1),
            Qe(t, ge()),
            !(Z & 6) && (Eo = ge() + 500,
            qn()))
        }
        break;
    case 13:
        wr(function() {
            var r = on(e, 1);
            if (r !== null) {
                var o = ze();
                Et(r, e, 1, o)
            }
        }),
        fd(e, 1)
    }
}
;
Ou = function(e) {
    if (e.tag === 13) {
        var t = on(e, 134217728);
        if (t !== null) {
            var n = ze();
            Et(t, e, 134217728, n)
        }
        fd(e, 134217728)
    }
}
;
Ah = function(e) {
    if (e.tag === 13) {
        var t = zn(e)
          , n = on(e, t);
        if (n !== null) {
            var r = ze();
            Et(n, e, t, r)
        }
        fd(e, t)
    }
}
;
_h = function() {
    return re
}
;
Mh = function(e, t) {
    var n = re;
    try {
        return re = e,
        t()
    } finally {
        re = n
    }
}
;
gc = function(e, t, n) {
    switch (t) {
    case "input":
        if (cc(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Ti(r);
                    if (!o)
                        throw Error(_(90));
                    uh(r),
                    cc(r, o)
                }
            }
        }
        break;
    case "textarea":
        fh(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Zr(e, !!n.multiple, t, !1)
    }
}
;
xh = id;
wh = wr;
var lb = {
    usingClientEntryPoint: !1,
    Events: [Ls, Hr, Ti, vh, yh, id]
}
  , Vo = {
    findFiberByHostInstance: or,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , cb = {
    bundleType: Vo.bundleType,
    version: Vo.version,
    rendererPackageName: Vo.rendererPackageName,
    rendererConfig: Vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Ch(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Vo.findFiberByHostInstance || ab,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ca.isDisabled && ca.supportsFiber)
        try {
            ki = ca.inject(cb),
            Bt = ca
        } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lb;
tt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!md(t))
        throw Error(_(200));
    return sb(e, t, null, n)
}
;
tt.createRoot = function(e, t) {
    if (!md(e))
        throw Error(_(299));
    var n = !1
      , r = ""
      , o = tv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = dd(e, 1, !1, null, null, n, !1, r, o),
    e[rn] = t.current,
    hs(e.nodeType === 8 ? e.parentNode : e),
    new pd(t)
}
;
tt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","),
        Error(_(268, e)));
    return e = Ch(t),
    e = e === null ? null : e.stateNode,
    e
}
;
tt.flushSync = function(e) {
    return wr(e)
}
;
tt.hydrate = function(e, t, n) {
    if (!$i(t))
        throw Error(_(200));
    return zi(null, e, t, !0, n)
}
;
tt.hydrateRoot = function(e, t, n) {
    if (!md(e))
        throw Error(_(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , a = tv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = ev(t, null, e, 1, n ?? null, o, !1, s, a),
    e[rn] = t.current,
    hs(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Fi(t)
}
;
tt.render = function(e, t, n) {
    if (!$i(t))
        throw Error(_(200));
    return zi(null, e, t, !1, n)
}
;
tt.unmountComponentAtNode = function(e) {
    if (!$i(e))
        throw Error(_(40));
    return e._reactRootContainer ? (wr(function() {
        zi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[rn] = null
        })
    }),
    !0) : !1
}
;
tt.unstable_batchedUpdates = id;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!$i(n))
        throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(_(38));
    return zi(e, t, n, !1, r)
}
;
tt.version = "18.3.1-next-f1338f8080-20240426";
function nv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)
        } catch (e) {
            console.error(e)
        }
}
nv(),
nh.exports = tt;
var Fs = nh.exports;
const rv = Wm(Fs);
var ov, yp = Fs;
ov = yp.createRoot,
yp.hydrateRoot;
var Bi = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Ui = typeof window > "u" || "Deno"in globalThis;
function yt() {}
function ub(e, t) {
    return typeof e == "function" ? e(t) : e
}
function db(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function fb(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function qc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function pb(e, t) {
    return typeof e == "function" ? e(t) : e
}
function xp(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: a, stale: i} = e;
    if (a) {
        if (r) {
            if (t.queryHash !== hd(a, t.options))
                return !1
        } else if (!Ns(t.queryKey, a))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof i == "boolean" && t.isStale() !== i || o && o !== t.state.fetchStatus || s && !s(t))
}
function wp(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Es(t.options.mutationKey) !== Es(s))
                return !1
        } else if (!Ns(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function hd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Es)(e)
}
function Es(e) {
    return JSON.stringify(e, (t, n) => Yc(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Ns(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Ns(e[n], t[n])) : !1
}
function sv(e, t) {
    if (e === t)
        return e;
    const n = bp(e) && bp(t);
    if (n || Yc(e) && Yc(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , a = s.length
          , i = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let f = 0; f < a; f++) {
            const m = n ? f : s[f];
            (!n && l.has(m) || n) && e[m] === void 0 && t[m] === void 0 ? (i[m] = void 0,
            u++) : (i[m] = sv(e[m], t[m]),
            i[m] === e[m] && e[m] !== void 0 && u++)
        }
        return o === a && u === o ? e : i
    }
    return t
}
function bp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Yc(e) {
    if (!Sp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Sp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Sp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function mb(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function hb(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? sv(e, t) : t
}
function gb(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function vb(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var gd = Symbol();
function av(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === gd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var ir, kn, co, Lm, yb = (Lm = class extends Bi {
    constructor() {
        super();
        ee(this, ir);
        ee(this, kn);
        ee(this, co);
        H(this, co, t => {
            if (!Ui && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, kn) || this.setEventListener(P(this, co))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, kn)) == null || t.call(this),
        H(this, kn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, co, t),
        (n = P(this, kn)) == null || n.call(this),
        H(this, kn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        P(this, ir) !== t && (H(this, ir, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof P(this, ir) == "boolean" ? P(this, ir) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
ir = new WeakMap,
kn = new WeakMap,
co = new WeakMap,
Lm), iv = new yb, uo, jn, fo, Dm, xb = (Dm = class extends Bi {
    constructor() {
        super();
        ee(this, uo, !0);
        ee(this, jn);
        ee(this, fo);
        H(this, fo, t => {
            if (!Ui && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, jn) || this.setEventListener(P(this, fo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, jn)) == null || t.call(this),
        H(this, jn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, fo, t),
        (n = P(this, jn)) == null || n.call(this),
        H(this, jn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        P(this, uo) !== t && (H(this, uo, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return P(this, uo)
    }
}
,
uo = new WeakMap,
jn = new WeakMap,
fo = new WeakMap,
Dm), ci = new xb;
function wb() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function bb(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function lv(e) {
    return (e ?? "online") === "online" ? ci.isOnline() : !0
}
var cv = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Fl(e) {
    return e instanceof cv
}
function uv(e) {
    let t = !1, n = 0, r = !1, o;
    const s = wb()
      , a = v => {
        var w;
        r || (g(new cv(v)),
        (w = e.abort) == null || w.call(e))
    }
      , i = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => iv.isFocused() && (e.networkMode === "always" || ci.isOnline()) && e.canRun()
      , f = () => lv(e.networkMode) && e.canRun()
      , m = v => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, v),
        o == null || o(),
        s.resolve(v))
    }
      , g = v => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, v),
        o == null || o(),
        s.reject(v))
    }
      , p = () => new Promise(v => {
        var w;
        o = y => {
            (r || u()) && v(y)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var v;
        o = void 0,
        r || (v = e.onContinue) == null || v.call(e)
    }
    )
      , b = () => {
        if (r)
            return;
        let v;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            v = w ?? e.fn()
        } catch (y) {
            v = Promise.reject(y)
        }
        Promise.resolve(v).then(m).catch(y => {
            var E;
            if (r)
                return;
            const h = e.retry ?? (Ui ? 0 : 3)
              , x = e.retryDelay ?? bb
              , S = typeof x == "function" ? x(n, y) : x
              , C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, y);
            if (t || !C) {
                g(y);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, y),
            mb(S).then( () => u() ? void 0 : p()).then( () => {
                t ? g(y) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: a,
        continue: () => (o == null || o(),
        s),
        cancelRetry: i,
        continueRetry: l,
        canStart: f,
        start: () => (f() ? b() : p().then(b),
        s)
    }
}
var Sb = e => setTimeout(e, 0);
function Cb() {
    let e = []
      , t = 0
      , n = i => {
        i()
    }
      , r = i => {
        i()
    }
      , o = Sb;
    const s = i => {
        t ? e.push(i) : o( () => {
            n(i)
        }
        )
    }
      , a = () => {
        const i = e;
        e = [],
        i.length && o( () => {
            r( () => {
                i.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: i => {
            let l;
            t++;
            try {
                l = i()
            } finally {
                t--,
                t || a()
            }
            return l
        }
        ,
        batchCalls: i => (...l) => {
            s( () => {
                i(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: i => {
            n = i
        }
        ,
        setBatchNotifyFunction: i => {
            r = i
        }
        ,
        setScheduler: i => {
            o = i
        }
    }
}
var $e = Cb(), lr, Fm, dv = (Fm = class {
    constructor() {
        ee(this, lr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        db(this.gcTime) && H(this, lr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ui ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        P(this, lr) && (clearTimeout(P(this, lr)),
        H(this, lr, void 0))
    }
}
,
lr = new WeakMap,
Fm), po, cr, st, ur, Oe, As, dr, xt, qt, $m, Eb = ($m = class extends dv {
    constructor(t) {
        super();
        ee(this, xt);
        ee(this, po);
        ee(this, cr);
        ee(this, st);
        ee(this, ur);
        ee(this, Oe);
        ee(this, As);
        ee(this, dr);
        H(this, dr, !1),
        H(this, As, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, ur, t.client),
        H(this, st, P(this, ur).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, po, kb(this.options)),
        this.state = t.state ?? P(this, po),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = P(this, Oe)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...P(this, As),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, st).remove(this)
    }
    setData(t, n) {
        const r = hb(this.state.data, t, this.options);
        return Ae(this, xt, qt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ae(this, xt, qt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = P(this, Oe)) == null ? void 0 : r.promise;
        return (o = P(this, Oe)) == null || o.cancel(t),
        n ? n.then(yt).catch(yt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, po))
    }
    isActive() {
        return this.observers.some(t => pb(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === gd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => qc(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !fb(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, Oe)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, Oe)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        P(this, st).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (P(this, Oe) && (P(this, dr) ? P(this, Oe).cancel({
            revert: !0
        }) : P(this, Oe).cancelRetry()),
        this.scheduleGc()),
        P(this, st).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ae(this, xt, qt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, f, m;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, Oe))
                return P(this, Oe).continueRetry(),
                P(this, Oe).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const g = this.observers.find(p => p.options.queryFn);
            g && this.setOptions(g.options)
        }
        const r = new AbortController
          , o = g => {
            Object.defineProperty(g, "signal", {
                enumerable: !0,
                get: () => (H(this, dr, !0),
                r.signal)
            })
        }
          , s = () => {
            const g = av(this.options, n)
              , b = ( () => {
                const v = {
                    client: P(this, ur),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(v),
                v
            }
            )();
            return H(this, dr, !1),
            this.options.persister ? this.options.persister(g, b, this) : g(b)
        }
          , i = ( () => {
            const g = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: P(this, ur),
                state: this.state,
                fetchFn: s
            };
            return o(g),
            g
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(i, this),
        H(this, cr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((f = i.fetchOptions) == null ? void 0 : f.meta)) && Ae(this, xt, qt).call(this, {
            type: "fetch",
            meta: (m = i.fetchOptions) == null ? void 0 : m.meta
        });
        const l = g => {
            var p, b, v, w;
            Fl(g) && g.silent || Ae(this, xt, qt).call(this, {
                type: "error",
                error: g
            }),
            Fl(g) || ((b = (p = P(this, st).config).onError) == null || b.call(p, g, this),
            (w = (v = P(this, st).config).onSettled) == null || w.call(v, this.state.data, g, this)),
            this.scheduleGc()
        }
        ;
        return H(this, Oe, uv({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: g => {
                var p, b, v, w;
                if (g === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(g)
                } catch (y) {
                    l(y);
                    return
                }
                (b = (p = P(this, st).config).onSuccess) == null || b.call(p, g, this),
                (w = (v = P(this, st).config).onSettled) == null || w.call(v, g, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (g, p) => {
                Ae(this, xt, qt).call(this, {
                    type: "failed",
                    failureCount: g,
                    error: p
                })
            }
            ,
            onPause: () => {
                Ae(this, xt, qt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ae(this, xt, qt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        P(this, Oe).start()
    }
}
,
po = new WeakMap,
cr = new WeakMap,
st = new WeakMap,
ur = new WeakMap,
Oe = new WeakMap,
As = new WeakMap,
dr = new WeakMap,
xt = new WeakSet,
qt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Nb(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, cr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Fl(o) && o.revert && P(this, cr) ? {
                ...P(this, cr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    $e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        P(this, st).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
$m);
function Nb(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: lv(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function kb(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var It, zm, jb = (zm = class extends Bi {
    constructor(t={}) {
        super();
        ee(this, It);
        this.config = t,
        H(this, It, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? hd(o, n);
        let a = this.get(s);
        return a || (a = new Eb({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(a)),
        a
    }
    add(t) {
        P(this, It).has(t.queryHash) || (P(this, It).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = P(this, It).get(t.queryHash);
        n && (t.destroy(),
        n === t && P(this, It).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, It).get(t)
    }
    getAll() {
        return [...P(this, It).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => xp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => xp(t, r)) : n
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
It = new WeakMap,
zm), Lt, De, fr, Dt, wn, Bm, Pb = (Bm = class extends dv {
    constructor(t) {
        super();
        ee(this, Dt);
        ee(this, Lt);
        ee(this, De);
        ee(this, fr);
        this.mutationId = t.mutationId,
        H(this, De, t.mutationCache),
        H(this, Lt, []),
        this.state = t.state || Rb(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        P(this, Lt).includes(t) || (P(this, Lt).push(t),
        this.clearGcTimeout(),
        P(this, De).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Lt, P(this, Lt).filter(n => n !== t)),
        this.scheduleGc(),
        P(this, De).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        P(this, Lt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, De).remove(this))
    }
    continue() {
        var t;
        return ((t = P(this, fr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, a, i, l, u, f, m, g, p, b, v, w, y, h, x, S, C, E, N, k;
        const n = () => {
            Ae(this, Dt, wn).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, fr, uv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (O, M) => {
                Ae(this, Dt, wn).call(this, {
                    type: "failed",
                    failureCount: O,
                    error: M
                })
            }
            ,
            onPause: () => {
                Ae(this, Dt, wn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, De).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !P(this, fr).canStart();
        try {
            if (r)
                n();
            else {
                Ae(this, Dt, wn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((a = (s = P(this, De).config).onMutate) == null ? void 0 : a.call(s, t, this));
                const M = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
                M !== this.state.context && Ae(this, Dt, wn).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: o
                })
            }
            const O = await P(this, fr).start();
            return await ((f = (u = P(this, De).config).onSuccess) == null ? void 0 : f.call(u, O, t, this.state.context, this)),
            await ((g = (m = this.options).onSuccess) == null ? void 0 : g.call(m, O, t, this.state.context)),
            await ((b = (p = P(this, De).config).onSettled) == null ? void 0 : b.call(p, O, null, this.state.variables, this.state.context, this)),
            await ((w = (v = this.options).onSettled) == null ? void 0 : w.call(v, O, null, t, this.state.context)),
            Ae(this, Dt, wn).call(this, {
                type: "success",
                data: O
            }),
            O
        } catch (O) {
            try {
                throw await ((h = (y = P(this, De).config).onError) == null ? void 0 : h.call(y, O, t, this.state.context, this)),
                await ((S = (x = this.options).onError) == null ? void 0 : S.call(x, O, t, this.state.context)),
                await ((E = (C = P(this, De).config).onSettled) == null ? void 0 : E.call(C, void 0, O, this.state.variables, this.state.context, this)),
                await ((k = (N = this.options).onSettled) == null ? void 0 : k.call(N, void 0, O, t, this.state.context)),
                O
            } finally {
                Ae(this, Dt, wn).call(this, {
                    type: "error",
                    error: O
                })
            }
        } finally {
            P(this, De).runNext(this)
        }
    }
}
,
Lt = new WeakMap,
De = new WeakMap,
fr = new WeakMap,
Dt = new WeakSet,
wn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    $e.batch( () => {
        P(this, Lt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        P(this, De).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Bm);
function Rb() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Jt, wt, _s, Um, Tb = (Um = class extends Bi {
    constructor(t={}) {
        super();
        ee(this, Jt);
        ee(this, wt);
        ee(this, _s);
        this.config = t,
        H(this, Jt, new Set),
        H(this, wt, new Map),
        H(this, _s, 0)
    }
    build(t, n, r) {
        const o = new Pb({
            mutationCache: this,
            mutationId: ++Ks(this, _s)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        P(this, Jt).add(t);
        const n = ua(t);
        if (typeof n == "string") {
            const r = P(this, wt).get(n);
            r ? r.push(t) : P(this, wt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (P(this, Jt).delete(t)) {
            const n = ua(t);
            if (typeof n == "string") {
                const r = P(this, wt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && P(this, wt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ua(t);
        if (typeof n == "string") {
            const r = P(this, wt).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ua(t);
        if (typeof n == "string") {
            const o = (r = P(this, wt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        $e.batch( () => {
            P(this, Jt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            P(this, Jt).clear(),
            P(this, wt).clear()
        }
        )
    }
    getAll() {
        return Array.from(P(this, Jt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => wp(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => wp(t, n))
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return $e.batch( () => Promise.all(t.map(n => n.continue().catch(yt))))
    }
}
,
Jt = new WeakMap,
wt = new WeakMap,
_s = new WeakMap,
Um);
function ua(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Cp(e) {
    return {
        onFetch: (t, n) => {
            var f, m, g, p, b;
            const r = t.options
              , o = (g = (m = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : m.fetchMore) == null ? void 0 : g.direction
              , s = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , a = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let i = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let v = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = av(t.options, t.fetchOptions)
                  , h = async (x, S, C) => {
                    if (v)
                        return Promise.reject();
                    if (S == null && x.pages.length)
                        return Promise.resolve(x);
                    const N = ( () => {
                        const $ = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w($),
                        $
                    }
                    )()
                      , k = await y(N)
                      , {maxPages: O} = t.options
                      , M = C ? vb : gb;
                    return {
                        pages: M(x.pages, k, O),
                        pageParams: M(x.pageParams, S, O)
                    }
                }
                ;
                if (o && s.length) {
                    const x = o === "backward"
                      , S = x ? Ab : Ep
                      , C = {
                        pages: s,
                        pageParams: a
                    }
                      , E = S(r, C);
                    i = await h(C, E, x)
                } else {
                    const x = e ?? s.length;
                    do {
                        const S = l === 0 ? a[0] ?? r.initialPageParam : Ep(r, i);
                        if (l > 0 && S == null)
                            break;
                        i = await h(i, S),
                        l++
                    } while (l < x)
                }
                return i
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, w;
                return (w = (v = t.options).persister) == null ? void 0 : w.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Ep(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Ab(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var me, Pn, Rn, mo, ho, Tn, go, vo, Vm, _b = (Vm = class {
    constructor(e={}) {
        ee(this, me);
        ee(this, Pn);
        ee(this, Rn);
        ee(this, mo);
        ee(this, ho);
        ee(this, Tn);
        ee(this, go);
        ee(this, vo);
        H(this, me, e.queryCache || new jb),
        H(this, Pn, e.mutationCache || new Tb),
        H(this, Rn, e.defaultOptions || {}),
        H(this, mo, new Map),
        H(this, ho, new Map),
        H(this, Tn, 0)
    }
    mount() {
        Ks(this, Tn)._++,
        P(this, Tn) === 1 && (H(this, go, iv.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, me).onFocus())
        }
        )),
        H(this, vo, ci.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, me).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Ks(this, Tn)._--,
        P(this, Tn) === 0 && ((e = P(this, go)) == null || e.call(this),
        H(this, go, void 0),
        (t = P(this, vo)) == null || t.call(this),
        H(this, vo, void 0))
    }
    isFetching(e) {
        return P(this, me).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, Pn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, me).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = P(this, me).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(qc(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return P(this, me).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = P(this, me).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , a = ub(t, s);
        if (a !== void 0)
            return P(this, me).build(this, r).setData(a, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return $e.batch( () => P(this, me).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, me).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, me);
        $e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, me);
        return $e.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = $e.batch( () => P(this, me).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(yt).catch(yt)
    }
    invalidateQueries(e, t={}) {
        return $e.batch( () => (P(this, me).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = $e.batch( () => P(this, me).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(yt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(yt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, me).build(this, t);
        return n.isStaleByTime(qc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(yt).catch(yt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Cp(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(yt).catch(yt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Cp(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return ci.isOnline() ? P(this, Pn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, me)
    }
    getMutationCache() {
        return P(this, Pn)
    }
    getDefaultOptions() {
        return P(this, Rn)
    }
    setDefaultOptions(e) {
        H(this, Rn, e)
    }
    setQueryDefaults(e, t) {
        P(this, mo).set(Es(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, mo).values()]
          , n = {};
        return t.forEach(r => {
            Ns(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        P(this, ho).set(Es(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, ho).values()]
          , n = {};
        return t.forEach(r => {
            Ns(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, Rn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = hd(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === gd && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, Rn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, me).clear(),
        P(this, Pn).clear()
    }
}
,
me = new WeakMap,
Pn = new WeakMap,
Rn = new WeakMap,
mo = new WeakMap,
ho = new WeakMap,
Tn = new WeakMap,
go = new WeakMap,
vo = new WeakMap,
Vm), Mb = d.createContext(void 0), Ob = ({client: e, children: t}) => (d.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(Mb.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ks() {
    return ks = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ks.apply(this, arguments)
}
var Mn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Mn || (Mn = {}));
const Np = "popstate";
function Ib(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: a, hash: i} = r.location;
        return Xc("", {
            pathname: s,
            search: a,
            hash: i
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : ui(o)
    }
    return Db(t, n, null, e)
}
function we(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function fv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Lb() {
    return Math.random().toString(36).substr(2, 8)
}
function kp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Xc(e, t, n, r) {
    return n === void 0 && (n = null),
    ks({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? To(t) : t, {
        state: n,
        key: t && t.key || r || Lb()
    })
}
function ui(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function To(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Db(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , a = o.history
      , i = Mn.Pop
      , l = null
      , u = f();
    u == null && (u = 0,
    a.replaceState(ks({}, a.state, {
        idx: u
    }), ""));
    function f() {
        return (a.state || {
            idx: null
        }).idx
    }
    function m() {
        i = Mn.Pop;
        let w = f()
          , y = w == null ? null : w - u;
        u = w,
        l && l({
            action: i,
            location: v.location,
            delta: y
        })
    }
    function g(w, y) {
        i = Mn.Push;
        let h = Xc(v.location, w, y);
        u = f() + 1;
        let x = kp(h, u)
          , S = v.createHref(h);
        try {
            a.pushState(x, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(S)
        }
        s && l && l({
            action: i,
            location: v.location,
            delta: 1
        })
    }
    function p(w, y) {
        i = Mn.Replace;
        let h = Xc(v.location, w, y);
        u = f();
        let x = kp(h, u)
          , S = v.createHref(h);
        a.replaceState(x, "", S),
        s && l && l({
            action: i,
            location: v.location,
            delta: 0
        })
    }
    function b(w) {
        let y = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : ui(w);
        return h = h.replace(/ $/, "%20"),
        we(y, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,y)
    }
    let v = {
        get action() {
            return i
        },
        get location() {
            return e(o, a)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Np, m),
            l = w,
            () => {
                o.removeEventListener(Np, m),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: b,
        encodeLocation(w) {
            let y = b(w);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: g,
        replace: p,
        go(w) {
            return a.go(w)
        }
    };
    return v
}
var jp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(jp || (jp = {}));
function Fb(e, t, n) {
    return n === void 0 && (n = "/"),
    $b(e, t, n, !1)
}
function $b(e, t, n, r) {
    let o = typeof t == "string" ? To(t) : t
      , s = vd(o.pathname || "/", n);
    if (s == null)
        return null;
    let a = pv(e);
    zb(a);
    let i = null;
    for (let l = 0; i == null && l < a.length; ++l) {
        let u = Xb(s);
        i = qb(a[l], u, r)
    }
    return i
}
function pv(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, a, i) => {
        let l = {
            relativePath: i === void 0 ? s.path || "" : i,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: a,
            route: s
        };
        l.relativePath.startsWith("/") && (we(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Un([r, l.relativePath])
          , f = n.concat(l);
        s.children && s.children.length > 0 && (we(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        pv(s.children, t, f, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: Gb(u, s.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (s, a) => {
        var i;
        if (s.path === "" || !((i = s.path) != null && i.includes("?")))
            o(s, a);
        else
            for (let l of mv(s.path))
                o(s, a, l)
    }
    ),
    t
}
function mv(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let a = mv(r.join("/"))
      , i = [];
    return i.push(...a.map(l => l === "" ? s : [s, l].join("/"))),
    o && i.push(...a),
    i.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function zb(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Qb(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Bb = /^:[\w-]+$/
  , Ub = 3
  , Vb = 2
  , Wb = 1
  , Hb = 10
  , Kb = -2
  , Pp = e => e === "*";
function Gb(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Pp) && (r += Kb),
    t && (r += Vb),
    n.filter(o => !Pp(o)).reduce( (o, s) => o + (Bb.test(s) ? Ub : s === "" ? Wb : Hb), r)
}
function Qb(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function qb(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , a = [];
    for (let i = 0; i < r.length; ++i) {
        let l = r[i]
          , u = i === r.length - 1
          , f = s === "/" ? t : t.slice(s.length) || "/"
          , m = Rp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, f)
          , g = l.route;
        if (!m && u && n && !r[r.length - 1].route.index && (m = Rp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, f)),
        !m)
            return null;
        Object.assign(o, m.params),
        a.push({
            params: o,
            pathname: Un([s, m.pathname]),
            pathnameBase: tS(Un([s, m.pathnameBase])),
            route: g
        }),
        m.pathnameBase !== "/" && (s = Un([s, m.pathnameBase]))
    }
    return a
}
function Rp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Yb(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , a = s.replace(/(.)\/+$/, "$1")
      , i = o.slice(1);
    return {
        params: r.reduce( (u, f, m) => {
            let {paramName: g, isOptional: p} = f;
            if (g === "*") {
                let v = i[m] || "";
                a = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const b = i[m];
            return p && !b ? u[g] = void 0 : u[g] = (b || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: a,
        pattern: e
    }
}
function Yb(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fv(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, i, l) => (r.push({
        paramName: i,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function Xb(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return fv(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function vd(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Jb(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? To(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Zb(n, t) : t,
        search: nS(r),
        hash: rS(o)
    }
}
function Zb(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function $l(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function eS(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function hv(e, t) {
    let n = eS(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function gv(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = To(e) : (o = ks({}, e),
    we(!o.pathname || !o.pathname.includes("?"), $l("?", "pathname", "search", o)),
    we(!o.pathname || !o.pathname.includes("#"), $l("#", "pathname", "hash", o)),
    we(!o.search || !o.search.includes("#"), $l("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", a = s ? "/" : o.pathname, i;
    if (a == null)
        i = n;
    else {
        let m = t.length - 1;
        if (!r && a.startsWith("..")) {
            let g = a.split("/");
            for (; g[0] === ".."; )
                g.shift(),
                m -= 1;
            o.pathname = g.join("/")
        }
        i = m >= 0 ? t[m] : "/"
    }
    let l = Jb(o, i)
      , u = a && a !== "/" && a.endsWith("/")
      , f = (s || a === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"),
    l
}
const Un = e => e.join("/").replace(/\/\/+/g, "/")
  , tS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , nS = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , rS = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function oS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const vv = ["post", "put", "patch", "delete"];
new Set(vv);
const sS = ["get", ...vv];
new Set(sS);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function js() {
    return js = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    js.apply(this, arguments)
}
const yd = d.createContext(null)
  , aS = d.createContext(null)
  , Nr = d.createContext(null)
  , Vi = d.createContext(null)
  , un = d.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , yv = d.createContext(null);
function iS(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    $s() || we(!1);
    let {basename: r, navigator: o} = d.useContext(Nr)
      , {hash: s, pathname: a, search: i} = wv(e, {
        relative: n
    })
      , l = a;
    return r !== "/" && (l = a === "/" ? r : Un([r, a])),
    o.createHref({
        pathname: l,
        search: i,
        hash: s
    })
}
function $s() {
    return d.useContext(Vi) != null
}
function Kt() {
    return $s() || we(!1),
    d.useContext(Vi).location
}
function xv(e) {
    d.useContext(Nr).static || d.useLayoutEffect(e)
}
function Yn() {
    let {isDataRoute: e} = d.useContext(un);
    return e ? CS() : lS()
}
function lS() {
    $s() || we(!1);
    let e = d.useContext(yd)
      , {basename: t, future: n, navigator: r} = d.useContext(Nr)
      , {matches: o} = d.useContext(un)
      , {pathname: s} = Kt()
      , a = JSON.stringify(hv(o, n.v7_relativeSplatPath))
      , i = d.useRef(!1);
    return xv( () => {
        i.current = !0
    }
    ),
    d.useCallback(function(u, f) {
        if (f === void 0 && (f = {}),
        !i.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let m = gv(u, JSON.parse(a), s, f.relative === "path");
        e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : Un([t, m.pathname])),
        (f.replace ? r.replace : r.push)(m, f.state, f)
    }, [t, r, a, s, e])
}
const cS = d.createContext(null);
function uS(e) {
    let t = d.useContext(un).outlet;
    return t && d.createElement(cS.Provider, {
        value: e
    }, t)
}
function dS() {
    let {matches: e} = d.useContext(un)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function wv(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = d.useContext(Nr)
      , {matches: o} = d.useContext(un)
      , {pathname: s} = Kt()
      , a = JSON.stringify(hv(o, r.v7_relativeSplatPath));
    return d.useMemo( () => gv(e, JSON.parse(a), s, n === "path"), [e, a, s, n])
}
function fS(e, t) {
    return pS(e, t)
}
function pS(e, t, n, r) {
    $s() || we(!1);
    let {navigator: o} = d.useContext(Nr)
      , {matches: s} = d.useContext(un)
      , a = s[s.length - 1]
      , i = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = Kt(), f;
    if (t) {
        var m;
        let w = typeof t == "string" ? To(t) : t;
        l === "/" || (m = w.pathname) != null && m.startsWith(l) || we(!1),
        f = w
    } else
        f = u;
    let g = f.pathname || "/"
      , p = g;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let b = Fb(e, {
        pathname: p
    })
      , v = yS(b && b.map(w => Object.assign({}, w, {
        params: Object.assign({}, i, w.params),
        pathname: Un([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Un([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && v ? d.createElement(Vi.Provider, {
        value: {
            location: js({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: Mn.Pop
        }
    }, v) : v
}
function mS() {
    let e = SS()
      , t = oS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return d.createElement(d.Fragment, null, d.createElement("h2", null, "Unexpected Application Error!"), d.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? d.createElement("pre", {
        style: o
    }, n) : null, null)
}
const hS = d.createElement(mS, null);
class gS extends d.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? d.createElement(un.Provider, {
            value: this.props.routeContext
        }, d.createElement(yv.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function vS(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = d.useContext(yd);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    d.createElement(un.Provider, {
        value: t
    }, r)
}
function yS(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let a = e
      , i = (o = n) == null ? void 0 : o.errors;
    if (i != null) {
        let f = a.findIndex(m => m.route.id && (i == null ? void 0 : i[m.route.id]) !== void 0);
        f >= 0 || we(!1),
        a = a.slice(0, Math.min(a.length, f + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < a.length; f++) {
            let m = a[f];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (u = f),
            m.route.id) {
                let {loaderData: g, errors: p} = n
                  , b = m.route.loader && g[m.route.id] === void 0 && (!p || p[m.route.id] === void 0);
                if (m.route.lazy || b) {
                    l = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight( (f, m, g) => {
        let p, b = !1, v = null, w = null;
        n && (p = i && m.route.id ? i[m.route.id] : void 0,
        v = m.route.errorElement || hS,
        l && (u < 0 && g === 0 ? (b = !0,
        w = null) : u === g && (b = !0,
        w = m.route.hydrateFallbackElement || null)));
        let y = t.concat(a.slice(0, g + 1))
          , h = () => {
            let x;
            return p ? x = v : b ? x = w : m.route.Component ? x = d.createElement(m.route.Component, null) : m.route.element ? x = m.route.element : x = f,
            d.createElement(vS, {
                match: m,
                routeContext: {
                    outlet: f,
                    matches: y,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (m.route.ErrorBoundary || m.route.errorElement || g === 0) ? d.createElement(gS, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var bv = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(bv || {})
  , di = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(di || {});
function xS(e) {
    let t = d.useContext(yd);
    return t || we(!1),
    t
}
function wS(e) {
    let t = d.useContext(aS);
    return t || we(!1),
    t
}
function bS(e) {
    let t = d.useContext(un);
    return t || we(!1),
    t
}
function Sv(e) {
    let t = bS()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || we(!1),
    n.route.id
}
function SS() {
    var e;
    let t = d.useContext(yv)
      , n = wS(di.UseRouteError)
      , r = Sv(di.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function CS() {
    let {router: e} = xS(bv.UseNavigateStable)
      , t = Sv(di.UseNavigateStable)
      , n = d.useRef(!1);
    return xv( () => {
        n.current = !0
    }
    ),
    d.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, js({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function ES(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function NS(e) {
    return uS(e.context)
}
function ot(e) {
    we(!1)
}
function kS(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Mn.Pop, navigator: s, static: a=!1, future: i} = e;
    $s() && we(!1);
    let l = t.replace(/^\/*/, "/")
      , u = d.useMemo( () => ({
        basename: l,
        navigator: s,
        static: a,
        future: js({
            v7_relativeSplatPath: !1
        }, i)
    }), [l, i, s, a]);
    typeof r == "string" && (r = To(r));
    let {pathname: f="/", search: m="", hash: g="", state: p=null, key: b="default"} = r
      , v = d.useMemo( () => {
        let w = vd(f, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: m,
                hash: g,
                state: p,
                key: b
            },
            navigationType: o
        }
    }
    , [l, f, m, g, p, b, o]);
    return v == null ? null : d.createElement(Nr.Provider, {
        value: u
    }, d.createElement(Vi.Provider, {
        children: n,
        value: v
    }))
}
function jS(e) {
    let {children: t, location: n} = e;
    return fS(Jc(t), n)
}
new Promise( () => {}
);
function Jc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return d.Children.forEach(e, (r, o) => {
        if (!d.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === d.Fragment) {
            n.push.apply(n, Jc(r.props.children, s));
            return
        }
        r.type !== ot && we(!1),
        !r.props.index || !r.props.children || we(!1);
        let a = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (a.children = Jc(r.props.children, s)),
        n.push(a)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zc() {
    return Zc = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Zc.apply(this, arguments)
}
function PS(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, s;
    for (s = 0; s < r.length; s++)
        o = r[s],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function RS(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function TS(e, t) {
    return e.button === 0 && (!t || t === "_self") && !RS(e)
}
const AS = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , _S = "6";
try {
    window.__reactRouterVersion = _S
} catch {}
const MS = "startTransition"
  , Tp = Eu[MS];
function OS(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = d.useRef();
    s.current == null && (s.current = Ib({
        window: o,
        v5Compat: !0
    }));
    let a = s.current
      , [i,l] = d.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = r || {}
      , f = d.useCallback(m => {
        u && Tp ? Tp( () => l(m)) : l(m)
    }
    , [l, u]);
    return d.useLayoutEffect( () => a.listen(f), [a, f]),
    d.useEffect( () => ES(r), [r]),
    d.createElement(kS, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: a,
        future: r
    })
}
const IS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , LS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , DS = d.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: s, replace: a, state: i, target: l, to: u, preventScrollReset: f, viewTransition: m} = t, g = PS(t, AS), {basename: p} = d.useContext(Nr), b, v = !1;
    if (typeof u == "string" && LS.test(u) && (b = u,
    IS))
        try {
            let x = new URL(window.location.href)
              , S = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u)
              , C = vd(S.pathname, p);
            S.origin === x.origin && C != null ? u = C + S.search + S.hash : v = !0
        } catch {}
    let w = iS(u, {
        relative: o
    })
      , y = FS(u, {
        replace: a,
        state: i,
        target: l,
        preventScrollReset: f,
        relative: o,
        viewTransition: m
    });
    function h(x) {
        r && r(x),
        x.defaultPrevented || y(x)
    }
    return d.createElement("a", Zc({}, g, {
        href: b || w,
        onClick: v || s ? r : h,
        ref: n,
        target: l
    }))
});
var Ap;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Ap || (Ap = {}));
var _p;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(_p || (_p = {}));
function FS(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: s, relative: a, viewTransition: i} = t === void 0 ? {} : t
      , l = Yn()
      , u = Kt()
      , f = wv(e, {
        relative: a
    });
    return d.useCallback(m => {
        if (TS(m, n)) {
            m.preventDefault();
            let g = r !== void 0 ? r : ui(u) === ui(f);
            l(e, {
                replace: g,
                state: o,
                preventScrollReset: s,
                relative: a,
                viewTransition: i
            })
        }
    }
    , [u, l, f, r, o, n, e, s, a, i])
}
var Mp = ["light", "dark"]
  , $S = "(prefers-color-scheme: dark)"
  , zS = d.createContext(void 0)
  , BS = {
    setTheme: e => {}
    ,
    themes: []
}
  , US = () => {
    var e;
    return (e = d.useContext(zS)) != null ? e : BS
}
;
d.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: a, attrs: i, nonce: l}) => {
    let u = s === "system"
      , f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map(b => `'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , m = o ? Mp.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , g = (b, v=!1, w=!0) => {
        let y = a ? a[b] : b
          , h = v ? b + "|| ''" : `'${y}'`
          , x = "";
        return o && w && !v && Mp.includes(b) && (x += `d.style.colorScheme = '${b}';`),
        n === "class" ? v || y ? x += `c.add(${h})` : x += "null" : y && (x += `d[s](n,${h})`),
        x
    }
      , p = e ? `!function(){${f}${g(e)}}()` : r ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${$S}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${g(a ? "x[e]" : "e", !0)}}${u ? "" : "else{" + g(s, !1, !1) + "}"}${m}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${g(a ? "x[e]" : "e", !0)}}else{${g(s, !1, !1)};}${m}}catch(t){}}();`;
    return d.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var VS = e => {
    switch (e) {
    case "success":
        return KS;
    case "info":
        return QS;
    case "warning":
        return GS;
    case "error":
        return qS;
    default:
        return null
    }
}
  , WS = Array(12).fill(0)
  , HS = ({visible: e, className: t}) => A.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, A.createElement("div", {
    className: "sonner-spinner"
}, WS.map( (n, r) => A.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , KS = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , GS = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , QS = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , qS = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , YS = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, A.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), A.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , XS = () => {
    let[e,t] = A.useState(document.hidden);
    return A.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , eu = 1
  , JS = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : eu++
              , s = this.toasts.find(i => i.id === o)
              , a = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s ? this.toasts = this.toasts.map(i => i.id === o ? (this.publish({
                ...i,
                ...e,
                id: o,
                title: n
            }),
            {
                ...i,
                ...e,
                id: o,
                dismissible: a,
                title: n
            }) : i) : this.addToast({
                title: n,
                ...r,
                dismissible: a,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, s, a = r.then(async l => {
                if (s = ["resolve", l],
                A.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (e2(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , f = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: f
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , f = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: f
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , f = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: f
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), i = () => new Promise( (l, u) => a.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: i
            } : Object.assign(n, {
                unwrap: i
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || eu++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Ve = new JS
  , ZS = (e, t) => {
    let n = (t == null ? void 0 : t.id) || eu++;
    return Ve.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , e2 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , t2 = ZS
  , n2 = () => Ve.toasts
  , r2 = () => Ve.getActiveToasts();
Object.assign(t2, {
    success: Ve.success,
    info: Ve.info,
    warning: Ve.warning,
    error: Ve.error,
    custom: Ve.custom,
    message: Ve.message,
    promise: Ve.promise,
    dismiss: Ve.dismiss,
    loading: Ve.loading
}, {
    getHistory: n2,
    getToasts: r2
});
function o2(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
o2(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function da(e) {
    return e.label !== void 0
}
var s2 = 3
  , a2 = "32px"
  , i2 = "16px"
  , Op = 4e3
  , l2 = 356
  , c2 = 14
  , u2 = 20
  , d2 = 200;
function gt(...e) {
    return e.filter(Boolean).join(" ")
}
function f2(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var p2 = e => {
    var t, n, r, o, s, a, i, l, u, f, m;
    let {invert: g, toast: p, unstyled: b, interacting: v, setHeights: w, visibleToasts: y, heights: h, index: x, toasts: S, expanded: C, removeToast: E, defaultRichColors: N, closeButton: k, style: O, cancelButtonStyle: M, actionButtonStyle: $, className: I="", descriptionClassName: U="", duration: T, position: V, gap: L, loadingIcon: z, expandByDefault: j, classNames: R, icons: D, closeButtonAriaLabel: K="Close toast", pauseWhenPageIsHidden: B} = e
      , [Q,Y] = A.useState(null)
      , [ye,Te] = A.useState(null)
      , [ne,Rr] = A.useState(!1)
      , [dn,Jn] = A.useState(!1)
      , [fn,Tr] = A.useState(!1)
      , [pn,Vs] = A.useState(!1)
      , [il,Ws] = A.useState(!1)
      , [ll,Oo] = A.useState(0)
      , [Ar,nf] = A.useState(0)
      , Io = A.useRef(p.duration || T || Op)
      , rf = A.useRef(null)
      , Zn = A.useRef(null)
      , Rx = x === 0
      , Tx = x + 1 <= y
      , rt = p.type
      , _r = p.dismissible !== !1
      , Ax = p.className || ""
      , _x = p.descriptionClassName || ""
      , Hs = A.useMemo( () => h.findIndex(W => W.toastId === p.id) || 0, [h, p.id])
      , Mx = A.useMemo( () => {
        var W;
        return (W = p.closeButton) != null ? W : k
    }
    , [p.closeButton, k])
      , of = A.useMemo( () => p.duration || T || Op, [p.duration, T])
      , cl = A.useRef(0)
      , Mr = A.useRef(0)
      , sf = A.useRef(0)
      , Or = A.useRef(null)
      , [Ox,Ix] = V.split("-")
      , af = A.useMemo( () => h.reduce( (W, oe, ce) => ce >= Hs ? W : W + oe.height, 0), [h, Hs])
      , lf = XS()
      , Lx = p.invert || g
      , ul = rt === "loading";
    Mr.current = A.useMemo( () => Hs * L + af, [Hs, af]),
    A.useEffect( () => {
        Io.current = of
    }
    , [of]),
    A.useEffect( () => {
        Rr(!0)
    }
    , []),
    A.useEffect( () => {
        let W = Zn.current;
        if (W) {
            let oe = W.getBoundingClientRect().height;
            return nf(oe),
            w(ce => [{
                toastId: p.id,
                height: oe,
                position: p.position
            }, ...ce]),
            () => w(ce => ce.filter(ft => ft.toastId !== p.id))
        }
    }
    , [w, p.id]),
    A.useLayoutEffect( () => {
        if (!ne)
            return;
        let W = Zn.current
          , oe = W.style.height;
        W.style.height = "auto";
        let ce = W.getBoundingClientRect().height;
        W.style.height = oe,
        nf(ce),
        w(ft => ft.find(pt => pt.toastId === p.id) ? ft.map(pt => pt.toastId === p.id ? {
            ...pt,
            height: ce
        } : pt) : [{
            toastId: p.id,
            height: ce,
            position: p.position
        }, ...ft])
    }
    , [ne, p.title, p.description, w, p.id]);
    let mn = A.useCallback( () => {
        Jn(!0),
        Oo(Mr.current),
        w(W => W.filter(oe => oe.toastId !== p.id)),
        setTimeout( () => {
            E(p)
        }
        , d2)
    }
    , [p, E, w, Mr]);
    A.useEffect( () => {
        if (p.promise && rt === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let W;
        return C || v || B && lf ? ( () => {
            if (sf.current < cl.current) {
                let oe = new Date().getTime() - cl.current;
                Io.current = Io.current - oe
            }
            sf.current = new Date().getTime()
        }
        )() : Io.current !== 1 / 0 && (cl.current = new Date().getTime(),
        W = setTimeout( () => {
            var oe;
            (oe = p.onAutoClose) == null || oe.call(p, p),
            mn()
        }
        , Io.current)),
        () => clearTimeout(W)
    }
    , [C, v, p, rt, B, lf, mn]),
    A.useEffect( () => {
        p.delete && mn()
    }
    , [mn, p.delete]);
    function Dx() {
        var W, oe, ce;
        return D != null && D.loading ? A.createElement("div", {
            className: gt(R == null ? void 0 : R.loader, (W = p == null ? void 0 : p.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": rt === "loading"
        }, D.loading) : z ? A.createElement("div", {
            className: gt(R == null ? void 0 : R.loader, (oe = p == null ? void 0 : p.classNames) == null ? void 0 : oe.loader, "sonner-loader"),
            "data-visible": rt === "loading"
        }, z) : A.createElement(HS, {
            className: gt(R == null ? void 0 : R.loader, (ce = p == null ? void 0 : p.classNames) == null ? void 0 : ce.loader),
            visible: rt === "loading"
        })
    }
    return A.createElement("li", {
        tabIndex: 0,
        ref: Zn,
        className: gt(I, Ax, R == null ? void 0 : R.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[rt], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[rt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : N,
        "data-styled": !(p.jsx || p.unstyled || b),
        "data-mounted": ne,
        "data-promise": !!p.promise,
        "data-swiped": il,
        "data-removed": dn,
        "data-visible": Tx,
        "data-y-position": Ox,
        "data-x-position": Ix,
        "data-index": x,
        "data-front": Rx,
        "data-swiping": fn,
        "data-dismissible": _r,
        "data-type": rt,
        "data-invert": Lx,
        "data-swipe-out": pn,
        "data-swipe-direction": ye,
        "data-expanded": !!(C || j && ne),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": S.length - x,
            "--offset": `${dn ? ll : Mr.current}px`,
            "--initial-height": j ? "auto" : `${Ar}px`,
            ...O,
            ...p.style
        },
        onDragEnd: () => {
            Tr(!1),
            Y(null),
            Or.current = null
        }
        ,
        onPointerDown: W => {
            ul || !_r || (rf.current = new Date,
            Oo(Mr.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Tr(!0),
            Or.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, oe, ce, ft;
            if (pn || !_r)
                return;
            Or.current = null;
            let pt = Number(((W = Zn.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , hn = Number(((oe = Zn.current) == null ? void 0 : oe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , er = new Date().getTime() - ((ce = rf.current) == null ? void 0 : ce.getTime())
              , mt = Q === "x" ? pt : hn
              , gn = Math.abs(mt) / er;
            if (Math.abs(mt) >= u2 || gn > .11) {
                Oo(Mr.current),
                (ft = p.onDismiss) == null || ft.call(p, p),
                Te(Q === "x" ? pt > 0 ? "right" : "left" : hn > 0 ? "down" : "up"),
                mn(),
                Vs(!0),
                Ws(!1);
                return
            }
            Tr(!1),
            Y(null)
        }
        ,
        onPointerMove: W => {
            var oe, ce, ft, pt;
            if (!Or.current || !_r || ((oe = window.getSelection()) == null ? void 0 : oe.toString().length) > 0)
                return;
            let hn = W.clientY - Or.current.y
              , er = W.clientX - Or.current.x
              , mt = (ce = e.swipeDirections) != null ? ce : f2(V);
            !Q && (Math.abs(er) > 1 || Math.abs(hn) > 1) && Y(Math.abs(er) > Math.abs(hn) ? "x" : "y");
            let gn = {
                x: 0,
                y: 0
            };
            Q === "y" ? (mt.includes("top") || mt.includes("bottom")) && (mt.includes("top") && hn < 0 || mt.includes("bottom") && hn > 0) && (gn.y = hn) : Q === "x" && (mt.includes("left") || mt.includes("right")) && (mt.includes("left") && er < 0 || mt.includes("right") && er > 0) && (gn.x = er),
            (Math.abs(gn.x) > 0 || Math.abs(gn.y) > 0) && Ws(!0),
            (ft = Zn.current) == null || ft.style.setProperty("--swipe-amount-x", `${gn.x}px`),
            (pt = Zn.current) == null || pt.style.setProperty("--swipe-amount-y", `${gn.y}px`)
        }
    }, Mx && !p.jsx ? A.createElement("button", {
        "aria-label": K,
        "data-disabled": ul,
        "data-close-button": !0,
        onClick: ul || !_r ? () => {}
        : () => {
            var W;
            mn(),
            (W = p.onDismiss) == null || W.call(p, p)
        }
        ,
        className: gt(R == null ? void 0 : R.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (s = D == null ? void 0 : D.close) != null ? s : YS) : null, p.jsx || d.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : A.createElement(A.Fragment, null, rt || p.icon || p.promise ? A.createElement("div", {
        "data-icon": "",
        className: gt(R == null ? void 0 : R.icon, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || Dx() : null, p.type !== "loading" ? p.icon || (D == null ? void 0 : D[rt]) || VS(rt) : null) : null, A.createElement("div", {
        "data-content": "",
        className: gt(R == null ? void 0 : R.content, (i = p == null ? void 0 : p.classNames) == null ? void 0 : i.content)
    }, A.createElement("div", {
        "data-title": "",
        className: gt(R == null ? void 0 : R.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? A.createElement("div", {
        "data-description": "",
        className: gt(U, _x, R == null ? void 0 : R.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), d.isValidElement(p.cancel) ? p.cancel : p.cancel && da(p.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || M,
        onClick: W => {
            var oe, ce;
            da(p.cancel) && _r && ((ce = (oe = p.cancel).onClick) == null || ce.call(oe, W),
            mn())
        }
        ,
        className: gt(R == null ? void 0 : R.cancelButton, (f = p == null ? void 0 : p.classNames) == null ? void 0 : f.cancelButton)
    }, p.cancel.label) : null, d.isValidElement(p.action) ? p.action : p.action && da(p.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || $,
        onClick: W => {
            var oe, ce;
            da(p.action) && ((ce = (oe = p.action).onClick) == null || ce.call(oe, W),
            !W.defaultPrevented && mn())
        }
        ,
        className: gt(R == null ? void 0 : R.actionButton, (m = p == null ? void 0 : p.classNames) == null ? void 0 : m.actionButton)
    }, p.action.label) : null))
}
;
function Ip() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function m2(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let s = o === 1
          , a = s ? "--mobile-offset" : "--offset"
          , i = s ? i2 : a2;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(f => {
                n[`${a}-${f}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${a}-${u}`] = i : n[`${a}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(i)
    }
    ),
    n
}
var h2 = d.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: s, closeButton: a, className: i, offset: l, mobileOffset: u, theme: f="light", richColors: m, duration: g, style: p, visibleToasts: b=s2, toastOptions: v, dir: w=Ip(), gap: y=c2, loadingIcon: h, icons: x, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: C} = e
      , [E,N] = A.useState([])
      , k = A.useMemo( () => Array.from(new Set([r].concat(E.filter(B => B.position).map(B => B.position)))), [E, r])
      , [O,M] = A.useState([])
      , [$,I] = A.useState(!1)
      , [U,T] = A.useState(!1)
      , [V,L] = A.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , z = A.useRef(null)
      , j = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , R = A.useRef(null)
      , D = A.useRef(!1)
      , K = A.useCallback(B => {
        N(Q => {
            var Y;
            return (Y = Q.find(ye => ye.id === B.id)) != null && Y.delete || Ve.dismiss(B.id),
            Q.filter( ({id: ye}) => ye !== B.id)
        }
        )
    }
    , []);
    return A.useEffect( () => Ve.subscribe(B => {
        if (B.dismiss) {
            N(Q => Q.map(Y => Y.id === B.id ? {
                ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout( () => {
            rv.flushSync( () => {
                N(Q => {
                    let Y = Q.findIndex(ye => ye.id === B.id);
                    return Y !== -1 ? [...Q.slice(0, Y), {
                        ...Q[Y],
                        ...B
                    }, ...Q.slice(Y + 1)] : [B, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    A.useEffect( () => {
        if (f !== "system") {
            L(f);
            return
        }
        if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? L("dark") : L("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: Q}) => {
                L(Q ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: Y}) => {
                try {
                    L(Y ? "dark" : "light")
                } catch (ye) {
                    console.error(ye)
                }
            }
            )
        }
    }
    , [f]),
    A.useEffect( () => {
        E.length <= 1 && I(!1)
    }
    , [E]),
    A.useEffect( () => {
        let B = Q => {
            var Y, ye;
            o.every(Te => Q[Te] || Q.code === Te) && (I(!0),
            (Y = z.current) == null || Y.focus()),
            Q.code === "Escape" && (document.activeElement === z.current || (ye = z.current) != null && ye.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [o]),
    A.useEffect( () => {
        if (z.current)
            return () => {
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null,
                D.current = !1)
            }
    }
    , [z.current]),
    A.createElement("section", {
        ref: t,
        "aria-label": `${S} ${j}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, k.map( (B, Q) => {
        var Y;
        let[ye,Te] = B.split("-");
        return E.length ? A.createElement("ol", {
            key: B,
            dir: w === "auto" ? Ip() : w,
            tabIndex: -1,
            ref: z,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": V,
            "data-y-position": ye,
            "data-lifted": $ && E.length > 1 && !s,
            "data-x-position": Te,
            style: {
                "--front-toast-height": `${((Y = O[0]) == null ? void 0 : Y.height) || 0}px`,
                "--width": `${l2}px`,
                "--gap": `${y}px`,
                ...p,
                ...m2(l, u)
            },
            onBlur: ne => {
                D.current && !ne.currentTarget.contains(ne.relatedTarget) && (D.current = !1,
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null))
            }
            ,
            onFocus: ne => {
                ne.target instanceof HTMLElement && ne.target.dataset.dismissible === "false" || D.current || (D.current = !0,
                R.current = ne.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                U || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: ne => {
                ne.target instanceof HTMLElement && ne.target.dataset.dismissible === "false" || T(!0)
            }
            ,
            onPointerUp: () => T(!1)
        }, E.filter(ne => !ne.position && Q === 0 || ne.position === B).map( (ne, Rr) => {
            var dn, Jn;
            return A.createElement(p2, {
                key: ne.id,
                icons: x,
                index: Rr,
                toast: ne,
                defaultRichColors: m,
                duration: (dn = v == null ? void 0 : v.duration) != null ? dn : g,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: b,
                closeButton: (Jn = v == null ? void 0 : v.closeButton) != null ? Jn : a,
                interacting: U,
                position: B,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: K,
                toasts: E.filter(fn => fn.position == ne.position),
                heights: O.filter(fn => fn.position == ne.position),
                setHeights: M,
                expandByDefault: s,
                gap: y,
                loadingIcon: h,
                expanded: $,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const g2 = ({...e}) => {
    const {theme: t="system"} = US();
    return c.jsx(h2, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , v2 = 1
  , y2 = 1e6;
let zl = 0;
function x2() {
    return zl = (zl + 1) % Number.MAX_SAFE_INTEGER,
    zl.toString()
}
const Bl = new Map
  , Lp = e => {
    if (Bl.has(e))
        return;
    const t = setTimeout( () => {
        Bl.delete(e),
        ss({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , y2);
    Bl.set(e, t)
}
  , w2 = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, v2)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Lp(n) : e.toasts.forEach(r => {
                Lp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ma = [];
let Oa = {
    toasts: []
};
function ss(e) {
    Oa = w2(Oa, e),
    Ma.forEach(t => {
        t(Oa)
    }
    )
}
function b2({...e}) {
    const t = x2()
      , n = o => ss({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => ss({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return ss({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function S2() {
    const [e,t] = d.useState(Oa);
    return d.useEffect( () => (Ma.push(t),
    () => {
        const n = Ma.indexOf(t);
        n > -1 && Ma.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: b2,
        dismiss: n => ss({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function X(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Dp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Cv(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Dp(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : Dp(e[o], null)
                }
            }
    }
}
function ve(...e) {
    return d.useCallback(Cv(...e), e)
}
function C2(e, t) {
    const n = d.createContext(t)
      , r = s => {
        const {children: a, ...i} = s
          , l = d.useMemo( () => i, Object.values(i));
        return c.jsx(n.Provider, {
            value: l,
            children: a
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(s) {
        const a = d.useContext(n);
        if (a)
            return a;
        if (t !== void 0)
            return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function Rt(e, t=[]) {
    let n = [];
    function r(s, a) {
        const i = d.createContext(a)
          , l = n.length;
        n = [...n, a];
        const u = m => {
            var y;
            const {scope: g, children: p, ...b} = m
              , v = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[l]) || i
              , w = d.useMemo( () => b, Object.values(b));
            return c.jsx(v.Provider, {
                value: w,
                children: p
            })
        }
        ;
        u.displayName = s + "Provider";
        function f(m, g) {
            var v;
            const p = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[l]) || i
              , b = d.useContext(p);
            if (b)
                return b;
            if (a !== void 0)
                return a;
            throw new Error(`\`${m}\` must be used within \`${s}\``)
        }
        return [u, f]
    }
    const o = () => {
        const s = n.map(a => d.createContext(a));
        return function(i) {
            const l = (i == null ? void 0 : i[e]) || s;
            return d.useMemo( () => ({
                [`__scope${e}`]: {
                    ...i,
                    [e]: l
                }
            }), [i, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, E2(o, ...t)]
}
function E2(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const a = r.reduce( (i, {useScope: l, scopeName: u}) => {
                const m = l(s)[`__scope${u}`];
                return {
                    ...i,
                    ...m
                }
            }
            , {});
            return d.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function fi(e) {
    const t = N2(e)
      , n = d.forwardRef( (r, o) => {
        const {children: s, ...a} = r
          , i = d.Children.toArray(s)
          , l = i.find(j2);
        if (l) {
            const u = l.props.children
              , f = i.map(m => m === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : m);
            return c.jsx(t, {
                ...a,
                ref: o,
                children: d.isValidElement(u) ? d.cloneElement(u, void 0, f) : null
            })
        }
        return c.jsx(t, {
            ...a,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function N2(e) {
    const t = d.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (d.isValidElement(o)) {
            const a = R2(o)
              , i = P2(s, o.props);
            return o.type !== d.Fragment && (i.ref = r ? Cv(r, a) : a),
            d.cloneElement(o, i)
        }
        return d.Children.count(o) > 1 ? d.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Ev = Symbol("radix.slottable");
function k2(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Ev,
    t
}
function j2(e) {
    return d.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Ev
}
function P2(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
            const l = s(...i);
            return o(...i),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function R2(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function xd(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Rt(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , a = v => {
        const {scope: w, children: y} = v
          , h = A.useRef(null)
          , x = A.useRef(new Map).current;
        return c.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: h,
            children: y
        })
    }
    ;
    a.displayName = t;
    const i = e + "CollectionSlot"
      , l = fi(i)
      , u = A.forwardRef( (v, w) => {
        const {scope: y, children: h} = v
          , x = s(i, y)
          , S = ve(w, x.collectionRef);
        return c.jsx(l, {
            ref: S,
            children: h
        })
    }
    );
    u.displayName = i;
    const f = e + "CollectionItemSlot"
      , m = "data-radix-collection-item"
      , g = fi(f)
      , p = A.forwardRef( (v, w) => {
        const {scope: y, children: h, ...x} = v
          , S = A.useRef(null)
          , C = ve(w, S)
          , E = s(f, y);
        return A.useEffect( () => (E.itemMap.set(S, {
            ref: S,
            ...x
        }),
        () => void E.itemMap.delete(S))),
        c.jsx(g, {
            [m]: "",
            ref: C,
            children: h
        })
    }
    );
    p.displayName = f;
    function b(v) {
        const w = s(e + "CollectionConsumer", v);
        return A.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const x = Array.from(h.querySelectorAll(`[${m}]`));
            return Array.from(w.itemMap.values()).sort( (E, N) => x.indexOf(E.ref.current) - x.indexOf(N.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: a,
        Slot: u,
        ItemSlot: p
    }, b, r]
}
var T2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , J = T2.reduce( (e, t) => {
    const n = fi(`Primitive.${t}`)
      , r = d.forwardRef( (o, s) => {
        const {asChild: a, ...i} = o
          , l = a ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, {
            ...i,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Nv(e, t) {
    e && Fs.flushSync( () => e.dispatchEvent(t))
}
function kt(e) {
    const t = d.useRef(e);
    return d.useEffect( () => {
        t.current = e
    }
    ),
    d.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function A2(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = kt(e);
    d.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var _2 = "DismissableLayer", tu = "dismissableLayer.update", M2 = "dismissableLayer.pointerDownOutside", O2 = "dismissableLayer.focusOutside", Fp, kv = d.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Wi = d.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: a, onDismiss: i, ...l} = e
      , u = d.useContext(kv)
      , [f,m] = d.useState(null)
      , g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = d.useState({})
      , b = ve(t, N => m(N))
      , v = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = v.indexOf(w)
      , h = f ? v.indexOf(f) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = h >= y
      , C = L2(N => {
        const k = N.target
          , O = [...u.branches].some(M => M.contains(k));
        !S || O || (o == null || o(N),
        a == null || a(N),
        N.defaultPrevented || i == null || i())
    }
    , g)
      , E = D2(N => {
        const k = N.target;
        [...u.branches].some(M => M.contains(k)) || (s == null || s(N),
        a == null || a(N),
        N.defaultPrevented || i == null || i())
    }
    , g);
    return A2(N => {
        h === u.layers.size - 1 && (r == null || r(N),
        !N.defaultPrevented && i && (N.preventDefault(),
        i()))
    }
    , g),
    d.useEffect( () => {
        if (f)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Fp = g.body.style.pointerEvents,
            g.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            $p(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Fp)
            }
    }
    , [f, g, n, u]),
    d.useEffect( () => () => {
        f && (u.layers.delete(f),
        u.layersWithOutsidePointerEventsDisabled.delete(f),
        $p())
    }
    , [f, u]),
    d.useEffect( () => {
        const N = () => p({});
        return document.addEventListener(tu, N),
        () => document.removeEventListener(tu, N)
    }
    , []),
    c.jsx(J.div, {
        ...l,
        ref: b,
        style: {
            pointerEvents: x ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: X(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Wi.displayName = _2;
var I2 = "DismissableLayerBranch"
  , jv = d.forwardRef( (e, t) => {
    const n = d.useContext(kv)
      , r = d.useRef(null)
      , o = ve(t, r);
    return d.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    c.jsx(J.div, {
        ...e,
        ref: o
    })
}
);
jv.displayName = I2;
function L2(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = kt(e)
      , r = d.useRef(!1)
      , o = d.useRef( () => {}
    );
    return d.useEffect( () => {
        const s = i => {
            if (i.target && !r.current) {
                let l = function() {
                    Pv(M2, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: i
                };
                i.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , a = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(a),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function D2(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = kt(e)
      , r = d.useRef(!1);
    return d.useEffect( () => {
        const o = s => {
            s.target && !r.current && Pv(O2, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function $p() {
    const e = new CustomEvent(tu);
    document.dispatchEvent(e)
}
function Pv(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Nv(o, s) : o.dispatchEvent(s)
}
var F2 = Wi
  , $2 = jv
  , Wt = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {}
  , z2 = "Portal"
  , wd = d.forwardRef( (e, t) => {
    var i;
    const {container: n, ...r} = e
      , [o,s] = d.useState(!1);
    Wt( () => s(!0), []);
    const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
    return a ? rv.createPortal(c.jsx(J.div, {
        ...r,
        ref: t
    }), a) : null
}
);
wd.displayName = z2;
function B2(e, t) {
    return d.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Xn = e => {
    const {present: t, children: n} = e
      , r = U2(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : d.Children.only(n)
      , s = ve(r.ref, V2(o));
    return typeof n == "function" || r.isPresent ? d.cloneElement(o, {
        ref: s
    }) : null
}
;
Xn.displayName = "Presence";
function U2(e) {
    const [t,n] = d.useState()
      , r = d.useRef(null)
      , o = d.useRef(e)
      , s = d.useRef("none")
      , a = e ? "mounted" : "unmounted"
      , [i,l] = B2(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return d.useEffect( () => {
        const u = fa(r.current);
        s.current = i === "mounted" ? u : "none"
    }
    , [i]),
    Wt( () => {
        const u = r.current
          , f = o.current;
        if (f !== e) {
            const g = s.current
              , p = fa(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && g !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    Wt( () => {
        if (t) {
            let u;
            const f = t.ownerDocument.defaultView ?? window
              , m = p => {
                const v = fa(r.current).includes(p.animationName);
                if (p.target === t && v && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = f.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , g = p => {
                p.target === t && (s.current = fa(r.current))
            }
            ;
            return t.addEventListener("animationstart", g),
            t.addEventListener("animationcancel", m),
            t.addEventListener("animationend", m),
            () => {
                f.clearTimeout(u),
                t.removeEventListener("animationstart", g),
                t.removeEventListener("animationcancel", m),
                t.removeEventListener("animationend", m)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(i),
        ref: d.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function fa(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function V2(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var W2 = Eu[" useInsertionEffect ".trim().toString()] || Wt;
function kr({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,s,a] = H2({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , l = i ? e : o;
    {
        const f = d.useRef(e !== void 0);
        d.useEffect( () => {
            const m = f.current;
            m !== i && console.warn(`${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            f.current = i
        }
        , [i, r])
    }
    const u = d.useCallback(f => {
        var m;
        if (i) {
            const g = K2(f) ? f(e) : f;
            g !== e && ((m = a.current) == null || m.call(a, g))
        } else
            s(f)
    }
    , [i, e, s, a]);
    return [l, u]
}
function H2({defaultProp: e, onChange: t}) {
    const [n,r] = d.useState(e)
      , o = d.useRef(n)
      , s = d.useRef(t);
    return W2( () => {
        s.current = t
    }
    , [t]),
    d.useEffect( () => {
        var a;
        o.current !== n && ((a = s.current) == null || a.call(s, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, s]
}
function K2(e) {
    return typeof e == "function"
}
var G2 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Q2 = "VisuallyHidden"
  , Hi = d.forwardRef( (e, t) => c.jsx(J.span, {
    ...e,
    ref: t,
    style: {
        ...G2,
        ...e.style
    }
}));
Hi.displayName = Q2;
var q2 = Hi
  , bd = "ToastProvider"
  , [Sd,Y2,X2] = xd("Toast")
  , [Rv,tT] = Rt("Toast", [X2])
  , [J2,Ki] = Rv(bd)
  , Tv = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: a} = e
      , [i,l] = d.useState(null)
      , [u,f] = d.useState(0)
      , m = d.useRef(!1)
      , g = d.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${bd}\`. Expected non-empty \`string\`.`),
    c.jsx(Sd.Provider, {
        scope: t,
        children: c.jsx(J2, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: i,
            onViewportChange: l,
            onToastAdd: d.useCallback( () => f(p => p + 1), []),
            onToastRemove: d.useCallback( () => f(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: m,
            isClosePausedRef: g,
            children: a
        })
    })
}
;
Tv.displayName = bd;
var Av = "ToastViewport"
  , Z2 = ["F8"]
  , nu = "toast.viewportPause"
  , ru = "toast.viewportResume"
  , _v = d.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Z2, label: o="Notifications ({hotkey})", ...s} = e
      , a = Ki(Av, n)
      , i = Y2(n)
      , l = d.useRef(null)
      , u = d.useRef(null)
      , f = d.useRef(null)
      , m = d.useRef(null)
      , g = ve(t, m, a.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = a.toastCount > 0;
    d.useEffect( () => {
        const w = y => {
            var x;
            r.length !== 0 && r.every(S => y[S] || y.code === S) && ((x = m.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    d.useEffect( () => {
        const w = l.current
          , y = m.current;
        if (b && w && y) {
            const h = () => {
                if (!a.isClosePausedRef.current) {
                    const E = new CustomEvent(nu);
                    y.dispatchEvent(E),
                    a.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (a.isClosePausedRef.current) {
                    const E = new CustomEvent(ru);
                    y.dispatchEvent(E),
                    a.isClosePausedRef.current = !1
                }
            }
              , S = E => {
                !w.contains(E.relatedTarget) && x()
            }
              , C = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [b, a.isClosePausedRef]);
    const v = d.useCallback( ({tabbingDirection: w}) => {
        const h = i().map(x => {
            const S = x.ref.current
              , C = [S, ...fC(S)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [i]);
    return d.useEffect( () => {
        const w = m.current;
        if (w) {
            const y = h => {
                var C, E, N;
                const x = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !x) {
                    const k = document.activeElement
                      , O = h.shiftKey;
                    if (h.target === w && O) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const I = v({
                        tabbingDirection: O ? "backwards" : "forwards"
                    })
                      , U = I.findIndex(T => T === k);
                    Ul(I.slice(U + 1)) ? h.preventDefault() : O ? (E = u.current) == null || E.focus() : (N = f.current) == null || N.focus()
                }
            }
            ;
            return w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
        }
    }
    , [i, v]),
    c.jsxs($2, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: b ? void 0 : "none"
        },
        children: [b && c.jsx(ou, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "forwards"
                });
                Ul(w)
            }
        }), c.jsx(Sd.Slot, {
            scope: n,
            children: c.jsx(J.ol, {
                tabIndex: -1,
                ...s,
                ref: g
            })
        }), b && c.jsx(ou, {
            ref: f,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "backwards"
                });
                Ul(w)
            }
        })]
    })
}
);
_v.displayName = Av;
var Mv = "ToastFocusProxy"
  , ou = d.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = Ki(Mv, n);
    return c.jsx(Hi, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: a => {
            var u;
            const i = a.relatedTarget;
            !((u = s.viewport) != null && u.contains(i)) && r()
        }
    })
}
);
ou.displayName = Mv;
var zs = "Toast"
  , eC = "toast.swipeStart"
  , tC = "toast.swipeMove"
  , nC = "toast.swipeCancel"
  , rC = "toast.swipeEnd"
  , Ov = d.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a} = e
      , [i,l] = kr({
        prop: r,
        defaultProp: o ?? !0,
        onChange: s,
        caller: zs
    });
    return c.jsx(Xn, {
        present: n || i,
        children: c.jsx(aC, {
            open: i,
            ...a,
            ref: t,
            onClose: () => l(!1),
            onPause: kt(e.onPause),
            onResume: kt(e.onResume),
            onSwipeStart: X(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: X(e.onSwipeMove, u => {
                const {x: f, y: m} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`)
            }
            ),
            onSwipeCancel: X(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: X(e.onSwipeEnd, u => {
                const {x: f, y: m} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`),
                l(!1)
            }
            )
        })
    })
}
);
Ov.displayName = zs;
var [oC,sC] = Rv(zs, {
    onClose() {}
})
  , aC = d.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: a, onEscapeKeyDown: i, onPause: l, onResume: u, onSwipeStart: f, onSwipeMove: m, onSwipeCancel: g, onSwipeEnd: p, ...b} = e
      , v = Ki(zs, n)
      , [w,y] = d.useState(null)
      , h = ve(t, T => y(T))
      , x = d.useRef(null)
      , S = d.useRef(null)
      , C = o || v.duration
      , E = d.useRef(0)
      , N = d.useRef(C)
      , k = d.useRef(0)
      , {onToastAdd: O, onToastRemove: M} = v
      , $ = kt( () => {
        var V;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((V = v.viewport) == null || V.focus()),
        a()
    }
    )
      , I = d.useCallback(T => {
        !T || T === 1 / 0 || (window.clearTimeout(k.current),
        E.current = new Date().getTime(),
        k.current = window.setTimeout($, T))
    }
    , [$]);
    d.useEffect( () => {
        const T = v.viewport;
        if (T) {
            const V = () => {
                I(N.current),
                u == null || u()
            }
              , L = () => {
                const z = new Date().getTime() - E.current;
                N.current = N.current - z,
                window.clearTimeout(k.current),
                l == null || l()
            }
            ;
            return T.addEventListener(nu, L),
            T.addEventListener(ru, V),
            () => {
                T.removeEventListener(nu, L),
                T.removeEventListener(ru, V)
            }
        }
    }
    , [v.viewport, C, l, u, I]),
    d.useEffect( () => {
        s && !v.isClosePausedRef.current && I(C)
    }
    , [s, C, v.isClosePausedRef, I]),
    d.useEffect( () => (O(),
    () => M()), [O, M]);
    const U = d.useMemo( () => w ? Bv(w) : null, [w]);
    return v.viewport ? c.jsxs(c.Fragment, {
        children: [U && c.jsx(iC, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: U
        }), c.jsx(oC, {
            scope: n,
            onClose: $,
            children: Fs.createPortal(c.jsx(Sd.ItemSlot, {
                scope: n,
                children: c.jsx(F2, {
                    asChild: !0,
                    onEscapeKeyDown: X(i, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || $(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx(J.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...b,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: X(e.onKeyDown, T => {
                            T.key === "Escape" && (i == null || i(T.nativeEvent),
                            T.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: X(e.onPointerDown, T => {
                            T.button === 0 && (x.current = {
                                x: T.clientX,
                                y: T.clientY
                            })
                        }
                        ),
                        onPointerMove: X(e.onPointerMove, T => {
                            if (!x.current)
                                return;
                            const V = T.clientX - x.current.x
                              , L = T.clientY - x.current.y
                              , z = !!S.current
                              , j = ["left", "right"].includes(v.swipeDirection)
                              , R = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , D = j ? R(0, V) : 0
                              , K = j ? 0 : R(0, L)
                              , B = T.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: D,
                                y: K
                            }
                              , Y = {
                                originalEvent: T,
                                delta: Q
                            };
                            z ? (S.current = Q,
                            pa(tC, m, Y, {
                                discrete: !1
                            })) : zp(Q, v.swipeDirection, B) ? (S.current = Q,
                            pa(eC, f, Y, {
                                discrete: !1
                            }),
                            T.target.setPointerCapture(T.pointerId)) : (Math.abs(V) > B || Math.abs(L) > B) && (x.current = null)
                        }
                        ),
                        onPointerUp: X(e.onPointerUp, T => {
                            const V = S.current
                              , L = T.target;
                            if (L.hasPointerCapture(T.pointerId) && L.releasePointerCapture(T.pointerId),
                            S.current = null,
                            x.current = null,
                            V) {
                                const z = T.currentTarget
                                  , j = {
                                    originalEvent: T,
                                    delta: V
                                };
                                zp(V, v.swipeDirection, v.swipeThreshold) ? pa(rC, p, j, {
                                    discrete: !0
                                }) : pa(nC, g, j, {
                                    discrete: !0
                                }),
                                z.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , iC = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Ki(zs, t)
      , [s,a] = d.useState(!1)
      , [i,l] = d.useState(!1);
    return uC( () => a(!0)),
    d.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    i ? null : c.jsx(wd, {
        asChild: !0,
        children: c.jsx(Hi, {
            ...r,
            children: s && c.jsxs(c.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , lC = "ToastTitle"
  , Iv = d.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(J.div, {
        ...r,
        ref: t
    })
}
);
Iv.displayName = lC;
var cC = "ToastDescription"
  , Lv = d.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(J.div, {
        ...r,
        ref: t
    })
}
);
Lv.displayName = cC;
var Dv = "ToastAction"
  , Fv = d.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? c.jsx(zv, {
        altText: n,
        asChild: !0,
        children: c.jsx(Cd, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Dv}\`. Expected non-empty \`string\`.`),
    null)
}
);
Fv.displayName = Dv;
var $v = "ToastClose"
  , Cd = d.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = sC($v, n);
    return c.jsx(zv, {
        asChild: !0,
        children: c.jsx(J.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: X(e.onClick, o.onClose)
        })
    })
}
);
Cd.displayName = $v;
var zv = d.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return c.jsx(J.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Bv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        dC(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const a = r.dataset.radixToastAnnounceAlt;
                    a && t.push(a)
                } else
                    t.push(...Bv(r))
        }
    }
    ),
    t
}
function pa(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Nv(o, s) : o.dispatchEvent(s)
}
var zp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function uC(e= () => {}
) {
    const t = kt(e);
    Wt( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function dC(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function fC(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Ul(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var pC = Tv
  , Uv = _v
  , Vv = Ov
  , Wv = Iv
  , Hv = Lv
  , Kv = Fv
  , Gv = Cd;
function Qv(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Qv(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function qv() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Qv(e)) && (r && (r += " "),
        r += t);
    return r
}
const Bp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Up = qv
  , Yv = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Up(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , a = Object.keys(o).map(u => {
        const f = n == null ? void 0 : n[u]
          , m = s == null ? void 0 : s[u];
        if (f === null)
            return null;
        const g = Bp(f) || Bp(m);
        return o[u][g]
    }
    )
      , i = n && Object.entries(n).reduce( (u, f) => {
        let[m,g] = f;
        return g === void 0 || (u[m] = g),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, f) => {
        let {class: m, className: g, ...p} = f;
        return Object.entries(p).every(b => {
            let[v,w] = b;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...i
            }[v]) : {
                ...s,
                ...i
            }[v] === w
        }
        ) ? [...u, m, g] : u
    }
    , []);
    return Up(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Xv = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gC = d.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: a, ...i}, l) => d.createElement("svg", {
    ref: l,
    ...hC,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Xv("lucide", o),
    ...i
}, [...a.map( ([u,f]) => d.createElement(u, f)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = (e, t) => {
    const n = d.forwardRef( ({className: r, ...o}, s) => d.createElement(gC, {
        ref: s,
        iconNode: t,
        className: Xv(`lucide-${mC(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vC = te("Activity", [["path", {
    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
    key: "169zse"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yC = te("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xC = te("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jv = te("BadgeCheck", [["path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    key: "3c2336"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zv = te("Banknote", [["rect", {
    width: "20",
    height: "12",
    x: "2",
    y: "6",
    rx: "2",
    key: "9lu3g6"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}], ["path", {
    d: "M6 12h.01M18 12h.01",
    key: "113zkx"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wC = te("CalendarCheck", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}], ["path", {
    d: "m9 16 2 2 4-4",
    key: "19s6y9"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = te("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bC = te("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SC = te("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CC = te("CircleHelp", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EC = te("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = te("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NC = te("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = te("Flame", [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kC = te("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jC = te("ListChecks", [["path", {
    d: "m3 17 2 2 4-4",
    key: "1jhpwq"
}], ["path", {
    d: "m3 7 2 2 4-4",
    key: "1obspn"
}], ["path", {
    d: "M13 6h8",
    key: "15sg57"
}], ["path", {
    d: "M13 12h8",
    key: "h98zly"
}], ["path", {
    d: "M13 18h8",
    key: "oe0vm4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PC = te("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RC = te("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TC = te("LogOut", [["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}], ["polyline", {
    points: "16 17 21 12 16 7",
    key: "1gabdz"
}], ["line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12",
    key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AC = te("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = te("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _C = te("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const su = te("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MC = te("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OC = te("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IC = te("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LC = te("Volume2", [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["path", {
    d: "M16 9a5 5 0 0 1 0 6",
    key: "1q6k2b"
}], ["path", {
    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
    key: "ijwkga"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DC = te("VolumeX", [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["line", {
    x1: "22",
    x2: "16",
    y1: "9",
    y2: "15",
    key: "1ewh16"
}], ["line", {
    x1: "16",
    x2: "22",
    y1: "9",
    y2: "15",
    key: "5ykzw1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = te("Wallet", [["path", {
    d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
    key: "18etb6"
}], ["path", {
    d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
    key: "xoc0q4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = te("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = te("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , kd = "-"
  , FC = e => {
    const t = zC(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: a => {
            const i = a.split(kd);
            return i[0] === "" && i.length !== 1 && i.shift(),
            r0(i, t) || $C(a)
        }
        ,
        getConflictingClassGroupIds: (a, i) => {
            const l = n[a] || [];
            return i && r[a] ? [...l, ...r[a]] : l
        }
    }
}
  , r0 = (e, t) => {
    var a;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? r0(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(kd);
    return (a = t.validators.find( ({validator: i}) => i(s))) == null ? void 0 : a.classGroupId
}
  , Wp = /^\[(.+)\]$/
  , $C = e => {
    if (Wp.test(e)) {
        const t = Wp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , zC = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return UC(Object.entries(e.classGroups), n).forEach( ([s,a]) => {
        au(a, r, s, t)
    }
    ),
    r
}
  , au = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : Hp(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (BC(o)) {
                au(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,a]) => {
            au(a, Hp(t, s), n, r)
        }
        )
    }
    )
}
  , Hp = (e, t) => {
    let n = e;
    return t.split(kd).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , BC = e => e.isThemeGetter
  , UC = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([a,i]) => [t + a, i])) : s);
    return [n, o]
}
) : e
  , VC = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, a) => {
        n.set(s, a),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let a = n.get(s);
            if (a !== void 0)
                return a;
            if ((a = r.get(s)) !== void 0)
                return o(s, a),
                a
        },
        set(s, a) {
            n.has(s) ? n.set(s, a) : o(s, a)
        }
    }
}
  , o0 = "!"
  , WC = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , a = i => {
        const l = [];
        let u = 0, f = 0, m;
        for (let w = 0; w < i.length; w++) {
            let y = i[w];
            if (u === 0) {
                if (y === o && (r || i.slice(w, w + s) === t)) {
                    l.push(i.slice(f, w)),
                    f = w + s;
                    continue
                }
                if (y === "/") {
                    m = w;
                    continue
                }
            }
            y === "[" ? u++ : y === "]" && u--
        }
        const g = l.length === 0 ? i : i.substring(f)
          , p = g.startsWith(o0)
          , b = p ? g.substring(1) : g
          , v = m && m > f ? m - f : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: b,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? i => n({
        className: i,
        parseClassName: a
    }) : a
}
  , HC = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , KC = e => ({
    cache: VC(e.cacheSize),
    parseClassName: WC(e),
    ...FC(e)
})
  , GC = /\s+/
  , QC = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , a = e.trim().split(GC);
    let i = "";
    for (let l = a.length - 1; l >= 0; l -= 1) {
        const u = a[l]
          , {modifiers: f, hasImportantModifier: m, baseClassName: g, maybePostfixModifierPosition: p} = n(u);
        let b = !!p
          , v = r(b ? g.substring(0, p) : g);
        if (!v) {
            if (!b) {
                i = u + (i.length > 0 ? " " + i : i);
                continue
            }
            if (v = r(g),
            !v) {
                i = u + (i.length > 0 ? " " + i : i);
                continue
            }
            b = !1
        }
        const w = HC(f).join(":")
          , y = m ? w + o0 : w
          , h = y + v;
        if (s.includes(h))
            continue;
        s.push(h);
        const x = o(v, b);
        for (let S = 0; S < x.length; ++S) {
            const C = x[S];
            s.push(y + C)
        }
        i = u + (i.length > 0 ? " " + i : i)
    }
    return i
}
;
function qC() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = s0(t)) && (r && (r += " "),
        r += n);
    return r
}
const s0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = s0(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function YC(e, ...t) {
    let n, r, o, s = a;
    function a(l) {
        const u = t.reduce( (f, m) => m(f), e());
        return n = KC(u),
        r = n.cache.get,
        o = n.cache.set,
        s = i,
        i(l)
    }
    function i(l) {
        const u = r(l);
        if (u)
            return u;
        const f = QC(l, n);
        return o(l, f),
        f
    }
    return function() {
        return s(qC.apply(null, arguments))
    }
}
const ae = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , a0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , XC = /^\d+\/\d+$/
  , JC = new Set(["px", "full", "screen"])
  , ZC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , eE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , tE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , nE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , rE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Qt = e => so(e) || JC.has(e) || XC.test(e)
  , yn = e => Ao(e, "length", dE)
  , so = e => !!e && !Number.isNaN(Number(e))
  , Vl = e => Ao(e, "number", so)
  , Wo = e => !!e && Number.isInteger(Number(e))
  , oE = e => e.endsWith("%") && so(e.slice(0, -1))
  , G = e => a0.test(e)
  , xn = e => ZC.test(e)
  , sE = new Set(["length", "size", "percentage"])
  , aE = e => Ao(e, sE, i0)
  , iE = e => Ao(e, "position", i0)
  , lE = new Set(["image", "url"])
  , cE = e => Ao(e, lE, pE)
  , uE = e => Ao(e, "", fE)
  , Ho = () => !0
  , Ao = (e, t, n) => {
    const r = a0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , dE = e => eE.test(e) && !tE.test(e)
  , i0 = () => !1
  , fE = e => nE.test(e)
  , pE = e => rE.test(e)
  , mE = () => {
    const e = ae("colors")
      , t = ae("spacing")
      , n = ae("blur")
      , r = ae("brightness")
      , o = ae("borderColor")
      , s = ae("borderRadius")
      , a = ae("borderSpacing")
      , i = ae("borderWidth")
      , l = ae("contrast")
      , u = ae("grayscale")
      , f = ae("hueRotate")
      , m = ae("invert")
      , g = ae("gap")
      , p = ae("gradientColorStops")
      , b = ae("gradientColorStopPositions")
      , v = ae("inset")
      , w = ae("margin")
      , y = ae("opacity")
      , h = ae("padding")
      , x = ae("saturate")
      , S = ae("scale")
      , C = ae("sepia")
      , E = ae("skew")
      , N = ae("space")
      , k = ae("translate")
      , O = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", G, t]
      , I = () => [G, t]
      , U = () => ["", Qt, yn]
      , T = () => ["auto", so, G]
      , V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , L = () => ["solid", "dashed", "dotted", "double", "none"]
      , z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", G]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , K = () => [so, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ho],
            spacing: [Qt, yn],
            blur: ["none", "", xn, G],
            brightness: K(),
            borderColor: [e],
            borderRadius: ["none", "", "full", xn, G],
            borderSpacing: I(),
            borderWidth: U(),
            contrast: K(),
            grayscale: R(),
            hueRotate: K(),
            invert: R(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [oE, yn],
            inset: $(),
            margin: $(),
            opacity: K(),
            padding: I(),
            saturate: K(),
            scale: K(),
            sepia: R(),
            skew: K(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [xn]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...V(), G]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: O()
            }],
            "overscroll-x": [{
                "overscroll-x": O()
            }],
            "overscroll-y": [{
                "overscroll-y": O()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Wo, G]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", Wo, G]
            }],
            "grid-cols": [{
                "grid-cols": [Ho]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Wo, G]
                }, G]
            }],
            "col-start": [{
                "col-start": T()
            }],
            "col-end": [{
                "col-end": T()
            }],
            "grid-rows": [{
                "grid-rows": [Ho]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Wo, G]
                }, G]
            }],
            "row-start": [{
                "row-start": T()
            }],
            "row-end": [{
                "row-end": T()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [g]
            }],
            "gap-x": [{
                "gap-x": [g]
            }],
            "gap-y": [{
                "gap-y": [g]
            }],
            "justify-content": [{
                justify: ["normal", ...j()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...j(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...j(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [N]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [N]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
            }],
            "min-w": [{
                "min-w": [G, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [xn]
                }, xn]
            }],
            h: [{
                h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", xn, yn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Vl]
            }],
            "font-family": [{
                font: [Ho]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", so, Vl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qt, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...L(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Qt, yn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Qt, G]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...V(), iE]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", aE]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, cE]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [b]
            }],
            "gradient-via-pos": [{
                via: [b]
            }],
            "gradient-to-pos": [{
                to: [b]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [i]
            }],
            "border-w-x": [{
                "border-x": [i]
            }],
            "border-w-y": [{
                "border-y": [i]
            }],
            "border-w-s": [{
                "border-s": [i]
            }],
            "border-w-e": [{
                "border-e": [i]
            }],
            "border-w-t": [{
                "border-t": [i]
            }],
            "border-w-r": [{
                "border-r": [i]
            }],
            "border-w-b": [{
                "border-b": [i]
            }],
            "border-w-l": [{
                "border-l": [i]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...L(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [i]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [i]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: L()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...L()]
            }],
            "outline-offset": [{
                "outline-offset": [Qt, G]
            }],
            "outline-w": [{
                outline: [Qt, yn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: U()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [Qt, yn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", xn, uE]
            }],
            "shadow-color": [{
                shadow: [Ho]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...z(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": z()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", xn, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [f]
            }],
            invert: [{
                invert: [m]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [f]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [m]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: K()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: K()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [Wo, G]
            }],
            "translate-x": [{
                "translate-x": [k]
            }],
            "translate-y": [{
                "translate-y": [k]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Qt, yn, Vl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , hE = YC(mE);
function be(...e) {
    return hE(qv(e))
}
function je(e) {
    return e.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}
const gE = pC
  , l0 = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Uv, {
    ref: n,
    className: be("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
l0.displayName = Uv.displayName;
const vE = Yv("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , c0 = d.forwardRef( ({className: e, variant: t, ...n}, r) => c.jsx(Vv, {
    ref: r,
    className: be(vE({
        variant: t
    }), e),
    ...n
}));
c0.displayName = Vv.displayName;
const yE = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Kv, {
    ref: n,
    className: be("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
yE.displayName = Kv.displayName;
const u0 = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Gv, {
    ref: n,
    className: be("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(n0, {
        className: "h-4 w-4"
    })
}));
u0.displayName = Gv.displayName;
const d0 = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Wv, {
    ref: n,
    className: be("text-sm font-semibold", e),
    ...t
}));
d0.displayName = Wv.displayName;
const f0 = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Hv, {
    ref: n,
    className: be("text-sm opacity-90", e),
    ...t
}));
f0.displayName = Hv.displayName;
function xE() {
    const {toasts: e} = S2();
    return c.jsxs(gE, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return c.jsxs(c0, {
                ...s,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(d0, {
                        children: n
                    }), r && c.jsx(f0, {
                        children: r
                    })]
                }), o, c.jsx(u0, {})]
            }, t)
        }), c.jsx(l0, {})]
    })
}
var wE = Eu[" useId ".trim().toString()] || ( () => {}
)
  , bE = 0;
function ao(e) {
    const [t,n] = d.useState(wE());
    return Wt( () => {
        n(r => r ?? String(bE++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const SE = ["top", "right", "bottom", "left"]
  , Hn = Math.min
  , Ye = Math.max
  , pi = Math.round
  , ma = Math.floor
  , Vt = e => ({
    x: e,
    y: e
})
  , CE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , EE = {
    start: "end",
    end: "start"
};
function iu(e, t, n) {
    return Ye(e, Hn(t, n))
}
function an(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ln(e) {
    return e.split("-")[0]
}
function _o(e) {
    return e.split("-")[1]
}
function jd(e) {
    return e === "x" ? "y" : "x"
}
function Pd(e) {
    return e === "y" ? "height" : "width"
}
const NE = new Set(["top", "bottom"]);
function zt(e) {
    return NE.has(ln(e)) ? "y" : "x"
}
function Rd(e) {
    return jd(zt(e))
}
function kE(e, t, n) {
    n === void 0 && (n = !1);
    const r = _o(e)
      , o = Rd(e)
      , s = Pd(o);
    let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (a = mi(a)),
    [a, mi(a)]
}
function jE(e) {
    const t = mi(e);
    return [lu(e), t, lu(t)]
}
function lu(e) {
    return e.replace(/start|end/g, t => EE[t])
}
const Kp = ["left", "right"]
  , Gp = ["right", "left"]
  , PE = ["top", "bottom"]
  , RE = ["bottom", "top"];
function TE(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Gp : Kp : t ? Kp : Gp;
    case "left":
    case "right":
        return t ? PE : RE;
    default:
        return []
    }
}
function AE(e, t, n, r) {
    const o = _o(e);
    let s = TE(ln(e), n === "start", r);
    return o && (s = s.map(a => a + "-" + o),
    t && (s = s.concat(s.map(lu)))),
    s
}
function mi(e) {
    return e.replace(/left|right|bottom|top/g, t => CE[t])
}
function _E(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function p0(e) {
    return typeof e != "number" ? _E(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function hi(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Qp(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = zt(t)
      , a = Rd(t)
      , i = Pd(a)
      , l = ln(t)
      , u = s === "y"
      , f = r.x + r.width / 2 - o.width / 2
      , m = r.y + r.height / 2 - o.height / 2
      , g = r[i] / 2 - o[i] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: f,
            y: r.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: f,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: m
        };
        break;
    case "left":
        p = {
            x: r.x - o.width,
            y: m
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (_o(t)) {
    case "start":
        p[a] -= g * (n && u ? -1 : 1);
        break;
    case "end":
        p[a] += g * (n && u ? -1 : 1);
        break
    }
    return p
}
const ME = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: a} = n
      , i = s.filter(Boolean)
      , l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: f, y: m} = Qp(u, r, l)
      , g = r
      , p = {}
      , b = 0;
    for (let v = 0; v < i.length; v++) {
        const {name: w, fn: y} = i[v]
          , {x: h, y: x, data: S, reset: C} = await y({
            x: f,
            y: m,
            initialPlacement: r,
            placement: g,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = h ?? f,
        m = x ?? m,
        p = {
            ...p,
            [w]: {
                ...p[w],
                ...S
            }
        },
        C && b <= 50 && (b++,
        typeof C == "object" && (C.placement && (g = C.placement),
        C.rects && (u = C.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: f, y: m} = Qp(u, g, l)),
        v = -1)
    }
    return {
        x: f,
        y: m,
        placement: g,
        strategy: o,
        middlewareData: p
    }
}
;
async function Ps(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: a, elements: i, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: f="viewport", elementContext: m="floating", altBoundary: g=!1, padding: p=0} = an(t, e)
      , b = p0(p)
      , w = i[g ? m === "floating" ? "reference" : "floating" : m]
      , y = hi(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
        boundary: u,
        rootBoundary: f,
        strategy: l
    }))
      , h = m === "floating" ? {
        x: r,
        y: o,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating))
      , S = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = hi(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: i,
        rect: h,
        offsetParent: x,
        strategy: l
    }) : h);
    return {
        top: (y.top - C.top + b.top) / S.y,
        bottom: (C.bottom - y.bottom + b.bottom) / S.y,
        left: (y.left - C.left + b.left) / S.x,
        right: (C.right - y.right + b.right) / S.x
    }
}
const OE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: a, elements: i, middlewareData: l} = t
          , {element: u, padding: f=0} = an(e, t) || {};
        if (u == null)
            return {};
        const m = p0(f)
          , g = {
            x: n,
            y: r
        }
          , p = Rd(o)
          , b = Pd(p)
          , v = await a.getDimensions(u)
          , w = p === "y"
          , y = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , S = s.reference[b] + s.reference[p] - g[p] - s.floating[b]
          , C = g[p] - s.reference[p]
          , E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let N = E ? E[x] : 0;
        (!N || !await (a.isElement == null ? void 0 : a.isElement(E))) && (N = i.floating[x] || s.floating[b]);
        const k = S / 2 - C / 2
          , O = N / 2 - v[b] / 2 - 1
          , M = Hn(m[y], O)
          , $ = Hn(m[h], O)
          , I = M
          , U = N - v[b] - $
          , T = N / 2 - v[b] / 2 + k
          , V = iu(I, T, U)
          , L = !l.arrow && _o(o) != null && T !== V && s.reference[b] / 2 - (T < I ? M : $) - v[b] / 2 < 0
          , z = L ? T < I ? T - I : T - U : 0;
        return {
            [p]: g[p] + z,
            data: {
                [p]: V,
                centerOffset: T - V - z,
                ...L && {
                    alignmentOffset: z
                }
            },
            reset: L
        }
    }
})
  , IE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: a, initialPlacement: i, platform: l, elements: u} = t
              , {mainAxis: f=!0, crossAxis: m=!0, fallbackPlacements: g, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: v=!0, ...w} = an(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const y = ln(o)
              , h = zt(i)
              , x = ln(i) === i
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = g || (x || !v ? [mi(i)] : jE(i))
              , E = b !== "none";
            !g && E && C.push(...AE(i, v, b, S));
            const N = [i, ...C]
              , k = await Ps(t, w)
              , O = [];
            let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (f && O.push(k[y]),
            m) {
                const T = kE(o, a, S);
                O.push(k[T[0]], k[T[1]])
            }
            if (M = [...M, {
                placement: o,
                overflows: O
            }],
            !O.every(T => T <= 0)) {
                var $, I;
                const T = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1
                  , V = N[T];
                if (V && (!(m === "alignment" ? h !== zt(V) : !1) || M.every(j => j.overflows[0] > 0 && zt(j.placement) === h)))
                    return {
                        data: {
                            index: T,
                            overflows: M
                        },
                        reset: {
                            placement: V
                        }
                    };
                let L = (I = M.filter(z => z.overflows[0] <= 0).sort( (z, j) => z.overflows[1] - j.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!L)
                    switch (p) {
                    case "bestFit":
                        {
                            var U;
                            const z = (U = M.filter(j => {
                                if (E) {
                                    const R = zt(j.placement);
                                    return R === h || R === "y"
                                }
                                return !0
                            }
                            ).map(j => [j.placement, j.overflows.filter(R => R > 0).reduce( (R, D) => R + D, 0)]).sort( (j, R) => j[1] - R[1])[0]) == null ? void 0 : U[0];
                            z && (L = z);
                            break
                        }
                    case "initialPlacement":
                        L = i;
                        break
                    }
                if (o !== L)
                    return {
                        reset: {
                            placement: L
                        }
                    }
            }
            return {}
        }
    }
};
function qp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Yp(e) {
    return SE.some(t => e[t] >= 0)
}
const LE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = an(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await Ps(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , a = qp(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: a,
                            referenceHidden: Yp(a)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await Ps(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , a = qp(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: a,
                            escaped: Yp(a)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , m0 = new Set(["left", "top"]);
async function DE(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , a = ln(n)
      , i = _o(n)
      , l = zt(n) === "y"
      , u = m0.has(a) ? -1 : 1
      , f = s && l ? -1 : 1
      , m = an(t, e);
    let {mainAxis: g, crossAxis: p, alignmentAxis: b} = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis
    };
    return i && typeof b == "number" && (p = i === "end" ? b * -1 : b),
    l ? {
        x: p * f,
        y: g * u
    } : {
        x: g * u,
        y: p * f
    }
}
const FE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: a, middlewareData: i} = t
              , l = await DE(t, e);
            return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , $E = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: a=!1, limiter: i={
                fn: w => {
                    let {x: y, y: h} = w;
                    return {
                        x: y,
                        y: h
                    }
                }
            }, ...l} = an(e, t)
              , u = {
                x: n,
                y: r
            }
              , f = await Ps(t, l)
              , m = zt(ln(o))
              , g = jd(m);
            let p = u[g]
              , b = u[m];
            if (s) {
                const w = g === "y" ? "top" : "left"
                  , y = g === "y" ? "bottom" : "right"
                  , h = p + f[w]
                  , x = p - f[y];
                p = iu(h, p, x)
            }
            if (a) {
                const w = m === "y" ? "top" : "left"
                  , y = m === "y" ? "bottom" : "right"
                  , h = b + f[w]
                  , x = b - f[y];
                b = iu(h, b, x)
            }
            const v = i.fn({
                ...t,
                [g]: p,
                [m]: b
            });
            return {
                ...v,
                data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                        [g]: s,
                        [m]: a
                    }
                }
            }
        }
    }
}
  , zE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: a} = t
              , {offset: i=0, mainAxis: l=!0, crossAxis: u=!0} = an(e, t)
              , f = {
                x: n,
                y: r
            }
              , m = zt(o)
              , g = jd(m);
            let p = f[g]
              , b = f[m];
            const v = an(i, t)
              , w = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (l) {
                const x = g === "y" ? "height" : "width"
                  , S = s.reference[g] - s.floating[x] + w.mainAxis
                  , C = s.reference[g] + s.reference[x] - w.mainAxis;
                p < S ? p = S : p > C && (p = C)
            }
            if (u) {
                var y, h;
                const x = g === "y" ? "width" : "height"
                  , S = m0.has(ln(o))
                  , C = s.reference[m] - s.floating[x] + (S && ((y = a.offset) == null ? void 0 : y[m]) || 0) + (S ? 0 : w.crossAxis)
                  , E = s.reference[m] + s.reference[x] + (S ? 0 : ((h = a.offset) == null ? void 0 : h[m]) || 0) - (S ? w.crossAxis : 0);
                b < C ? b = C : b > E && (b = E)
            }
            return {
                [g]: p,
                [m]: b
            }
        }
    }
}
  , BE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: a, elements: i} = t
              , {apply: l= () => {}
            , ...u} = an(e, t)
              , f = await Ps(t, u)
              , m = ln(o)
              , g = _o(o)
              , p = zt(o) === "y"
              , {width: b, height: v} = s.floating;
            let w, y;
            m === "top" || m === "bottom" ? (w = m,
            y = g === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = m,
            w = g === "end" ? "top" : "bottom");
            const h = v - f.top - f.bottom
              , x = b - f.left - f.right
              , S = Hn(v - f[w], h)
              , C = Hn(b - f[y], x)
              , E = !t.middlewareData.shift;
            let N = S
              , k = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            E && !g) {
                const M = Ye(f.left, 0)
                  , $ = Ye(f.right, 0)
                  , I = Ye(f.top, 0)
                  , U = Ye(f.bottom, 0);
                p ? k = b - 2 * (M !== 0 || $ !== 0 ? M + $ : Ye(f.left, f.right)) : N = v - 2 * (I !== 0 || U !== 0 ? I + U : Ye(f.top, f.bottom))
            }
            await l({
                ...t,
                availableWidth: k,
                availableHeight: N
            });
            const O = await a.getDimensions(i.floating);
            return b !== O.width || v !== O.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Gi() {
    return typeof window < "u"
}
function Mo(e) {
    return h0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Gt(e) {
    var t;
    return (t = (h0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function h0(e) {
    return Gi() ? e instanceof Node || e instanceof Ze(e).Node : !1
}
function jt(e) {
    return Gi() ? e instanceof Element || e instanceof Ze(e).Element : !1
}
function Ht(e) {
    return Gi() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}
function Xp(e) {
    return !Gi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
const UE = new Set(["inline", "contents"]);
function Bs(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Pt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !UE.has(o)
}
const VE = new Set(["table", "td", "th"]);
function WE(e) {
    return VE.has(Mo(e))
}
const HE = [":popover-open", ":modal"];
function Qi(e) {
    return HE.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const KE = ["transform", "translate", "scale", "rotate", "perspective"]
  , GE = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , QE = ["paint", "layout", "strict", "content"];
function Td(e) {
    const t = Ad()
      , n = jt(e) ? Pt(e) : e;
    return KE.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || GE.some(r => (n.willChange || "").includes(r)) || QE.some(r => (n.contain || "").includes(r))
}
function qE(e) {
    let t = Kn(e);
    for (; Ht(t) && !No(t); ) {
        if (Td(t))
            return t;
        if (Qi(t))
            return null;
        t = Kn(t)
    }
    return null
}
function Ad() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const YE = new Set(["html", "body", "#document"]);
function No(e) {
    return YE.has(Mo(e))
}
function Pt(e) {
    return Ze(e).getComputedStyle(e)
}
function qi(e) {
    return jt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Kn(e) {
    if (Mo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Xp(e) && e.host || Gt(e);
    return Xp(t) ? t.host : t
}
function g0(e) {
    const t = Kn(e);
    return No(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ht(t) && Bs(t) ? t : g0(t)
}
function Rs(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = g0(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , a = Ze(o);
    if (s) {
        const i = cu(a);
        return t.concat(a, a.visualViewport || [], Bs(o) ? o : [], i && n ? Rs(i) : [])
    }
    return t.concat(o, Rs(o, [], n))
}
function cu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function v0(e) {
    const t = Pt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Ht(e)
      , s = o ? e.offsetWidth : n
      , a = o ? e.offsetHeight : r
      , i = pi(n) !== s || pi(r) !== a;
    return i && (n = s,
    r = a),
    {
        width: n,
        height: r,
        $: i
    }
}
function _d(e) {
    return jt(e) ? e : e.contextElement
}
function io(e) {
    const t = _d(e);
    if (!Ht(t))
        return Vt(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = v0(t);
    let a = (s ? pi(n.width) : n.width) / r
      , i = (s ? pi(n.height) : n.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    {
        x: a,
        y: i
    }
}
const XE = Vt(0);
function y0(e) {
    const t = Ze(e);
    return !Ad() || !t.visualViewport ? XE : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function JE(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ze(e) ? !1 : t
}
function br(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = _d(e);
    let a = Vt(1);
    t && (r ? jt(r) && (a = io(r)) : a = io(e));
    const i = JE(s, n, r) ? y0(s) : Vt(0);
    let l = (o.left + i.x) / a.x
      , u = (o.top + i.y) / a.y
      , f = o.width / a.x
      , m = o.height / a.y;
    if (s) {
        const g = Ze(s)
          , p = r && jt(r) ? Ze(r) : r;
        let b = g
          , v = cu(b);
        for (; v && r && p !== b; ) {
            const w = io(v)
              , y = v.getBoundingClientRect()
              , h = Pt(v)
              , x = y.left + (v.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , S = y.top + (v.clientTop + parseFloat(h.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            f *= w.x,
            m *= w.y,
            l += x,
            u += S,
            b = Ze(v),
            v = cu(b)
        }
    }
    return hi({
        width: f,
        height: m,
        x: l,
        y: u
    })
}
function Md(e, t) {
    const n = qi(e).scrollLeft;
    return t ? t.left + n : br(Gt(e)).left + n
}
function x0(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : Md(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function ZE(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , a = Gt(r)
      , i = t ? Qi(t.floating) : !1;
    if (r === a || i && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Vt(1);
    const f = Vt(0)
      , m = Ht(r);
    if ((m || !m && !s) && ((Mo(r) !== "body" || Bs(a)) && (l = qi(r)),
    Ht(r))) {
        const p = br(r);
        u = io(r),
        f.x = p.x + r.clientLeft,
        f.y = p.y + r.clientTop
    }
    const g = a && !m && !s ? x0(a, l, !0) : Vt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + f.x + g.x,
        y: n.y * u.y - l.scrollTop * u.y + f.y + g.y
    }
}
function eN(e) {
    return Array.from(e.getClientRects())
}
function tN(e) {
    const t = Gt(e)
      , n = qi(e)
      , r = e.ownerDocument.body
      , o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -n.scrollLeft + Md(e);
    const i = -n.scrollTop;
    return Pt(r).direction === "rtl" && (a += Ye(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: a,
        y: i
    }
}
function nN(e, t) {
    const n = Ze(e)
      , r = Gt(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , a = r.clientHeight
      , i = 0
      , l = 0;
    if (o) {
        s = o.width,
        a = o.height;
        const u = Ad();
        (!u || u && t === "fixed") && (i = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: s,
        height: a,
        x: i,
        y: l
    }
}
const rN = new Set(["absolute", "fixed"]);
function oN(e, t) {
    const n = br(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = Ht(e) ? io(e) : Vt(1)
      , a = e.clientWidth * s.x
      , i = e.clientHeight * s.y
      , l = o * s.x
      , u = r * s.y;
    return {
        width: a,
        height: i,
        x: l,
        y: u
    }
}
function Jp(e, t, n) {
    let r;
    if (t === "viewport")
        r = nN(e, n);
    else if (t === "document")
        r = tN(Gt(e));
    else if (jt(t))
        r = oN(t, n);
    else {
        const o = y0(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return hi(r)
}
function w0(e, t) {
    const n = Kn(e);
    return n === t || !jt(n) || No(n) ? !1 : Pt(n).position === "fixed" || w0(n, t)
}
function sN(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Rs(e, [], !1).filter(i => jt(i) && Mo(i) !== "body")
      , o = null;
    const s = Pt(e).position === "fixed";
    let a = s ? Kn(e) : e;
    for (; jt(a) && !No(a); ) {
        const i = Pt(a)
          , l = Td(a);
        !l && i.position === "fixed" && (o = null),
        (s ? !l && !o : !l && i.position === "static" && !!o && rN.has(o.position) || Bs(a) && !l && w0(e, a)) ? r = r.filter(f => f !== a) : o = i,
        a = Kn(a)
    }
    return t.set(e, r),
    r
}
function aN(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const a = [...n === "clippingAncestors" ? Qi(t) ? [] : sN(t, this._c) : [].concat(n), r]
      , i = a[0]
      , l = a.reduce( (u, f) => {
        const m = Jp(t, f, o);
        return u.top = Ye(m.top, u.top),
        u.right = Hn(m.right, u.right),
        u.bottom = Hn(m.bottom, u.bottom),
        u.left = Ye(m.left, u.left),
        u
    }
    , Jp(t, i, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function iN(e) {
    const {width: t, height: n} = v0(e);
    return {
        width: t,
        height: n
    }
}
function lN(e, t, n) {
    const r = Ht(t)
      , o = Gt(t)
      , s = n === "fixed"
      , a = br(e, !0, s, t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Vt(0);
    function u() {
        l.x = Md(o)
    }
    if (r || !r && !s)
        if ((Mo(t) !== "body" || Bs(o)) && (i = qi(t)),
        r) {
            const p = br(t, !0, s, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            o && u();
    s && !r && o && u();
    const f = o && !r && !s ? x0(o, i) : Vt(0)
      , m = a.left + i.scrollLeft - l.x - f.x
      , g = a.top + i.scrollTop - l.y - f.y;
    return {
        x: m,
        y: g,
        width: a.width,
        height: a.height
    }
}
function Wl(e) {
    return Pt(e).position === "static"
}
function Zp(e, t) {
    if (!Ht(e) || Pt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Gt(e) === n && (n = n.ownerDocument.body),
    n
}
function b0(e, t) {
    const n = Ze(e);
    if (Qi(e))
        return n;
    if (!Ht(e)) {
        let o = Kn(e);
        for (; o && !No(o); ) {
            if (jt(o) && !Wl(o))
                return o;
            o = Kn(o)
        }
        return n
    }
    let r = Zp(e, t);
    for (; r && WE(r) && Wl(r); )
        r = Zp(r, t);
    return r && No(r) && Wl(r) && !Td(r) ? n : r || qE(e) || n
}
const cN = async function(e) {
    const t = this.getOffsetParent || b0
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: lN(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function uN(e) {
    return Pt(e).direction === "rtl"
}
const dN = {
    convertOffsetParentRelativeRectToViewportRelativeRect: ZE,
    getDocumentElement: Gt,
    getClippingRect: aN,
    getOffsetParent: b0,
    getElementRects: cN,
    getClientRects: eN,
    getDimensions: iN,
    getScale: io,
    isElement: jt,
    isRTL: uN
};
function S0(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function fN(e, t) {
    let n = null, r;
    const o = Gt(e);
    function s() {
        var i;
        clearTimeout(r),
        (i = n) == null || i.disconnect(),
        n = null
    }
    function a(i, l) {
        i === void 0 && (i = !1),
        l === void 0 && (l = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: f, top: m, width: g, height: p} = u;
        if (i || t(),
        !g || !p)
            return;
        const b = ma(m)
          , v = ma(o.clientWidth - (f + g))
          , w = ma(o.clientHeight - (m + p))
          , y = ma(f)
          , x = {
            rootMargin: -b + "px " + -v + "px " + -w + "px " + -y + "px",
            threshold: Ye(0, Hn(1, l)) || 1
        };
        let S = !0;
        function C(E) {
            const N = E[0].intersectionRatio;
            if (N !== l) {
                if (!S)
                    return a();
                N ? a(!1, N) : r = setTimeout( () => {
                    a(!1, 1e-7)
                }
                , 1e3)
            }
            N === 1 && !S0(u, e.getBoundingClientRect()) && a(),
            S = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,x)
        }
        n.observe(e)
    }
    return a(!0),
    s
}
function pN(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: a=typeof ResizeObserver == "function", layoutShift: i=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = _d(e)
      , f = o || s ? [...u ? Rs(u) : [], ...Rs(t)] : [];
    f.forEach(y => {
        o && y.addEventListener("scroll", n, {
            passive: !0
        }),
        s && y.addEventListener("resize", n)
    }
    );
    const m = u && i ? fN(u, n) : null;
    let g = -1
      , p = null;
    a && (p = new ResizeObserver(y => {
        let[h] = y;
        h && h.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(g),
        g = requestAnimationFrame( () => {
            var x;
            (x = p) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && p.observe(u),
    p.observe(t));
    let b, v = l ? br(e) : null;
    l && w();
    function w() {
        const y = br(e);
        v && !S0(v, y) && n(),
        v = y,
        b = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var y;
        f.forEach(h => {
            o && h.removeEventListener("scroll", n),
            s && h.removeEventListener("resize", n)
        }
        ),
        m == null || m(),
        (y = p) == null || y.disconnect(),
        p = null,
        l && cancelAnimationFrame(b)
    }
}
const mN = FE
  , hN = $E
  , gN = IE
  , vN = BE
  , yN = LE
  , em = OE
  , xN = zE
  , wN = (e, t, n) => {
    const r = new Map
      , o = {
        platform: dN,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return ME(e, t, {
        ...o,
        platform: s
    })
}
;
var bN = typeof document < "u"
  , SN = function() {}
  , Ia = bN ? d.useLayoutEffect : SN;
function gi(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!gi(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !gi(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function C0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function tm(e, t) {
    const n = C0(e);
    return Math.round(t * n) / n
}
function Hl(e) {
    const t = d.useRef(e);
    return Ia( () => {
        t.current = e
    }
    ),
    t
}
function CN(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: a}={}, transform: i=!0, whileElementsMounted: l, open: u} = e
      , [f,m] = d.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [g,p] = d.useState(r);
    gi(g, r) || p(r);
    const [b,v] = d.useState(null)
      , [w,y] = d.useState(null)
      , h = d.useCallback(j => {
        j !== E.current && (E.current = j,
        v(j))
    }
    , [])
      , x = d.useCallback(j => {
        j !== N.current && (N.current = j,
        y(j))
    }
    , [])
      , S = s || b
      , C = a || w
      , E = d.useRef(null)
      , N = d.useRef(null)
      , k = d.useRef(f)
      , O = l != null
      , M = Hl(l)
      , $ = Hl(o)
      , I = Hl(u)
      , U = d.useCallback( () => {
        if (!E.current || !N.current)
            return;
        const j = {
            placement: t,
            strategy: n,
            middleware: g
        };
        $.current && (j.platform = $.current),
        wN(E.current, N.current, j).then(R => {
            const D = {
                ...R,
                isPositioned: I.current !== !1
            };
            T.current && !gi(k.current, D) && (k.current = D,
            Fs.flushSync( () => {
                m(D)
            }
            ))
        }
        )
    }
    , [g, t, n, $, I]);
    Ia( () => {
        u === !1 && k.current.isPositioned && (k.current.isPositioned = !1,
        m(j => ({
            ...j,
            isPositioned: !1
        })))
    }
    , [u]);
    const T = d.useRef(!1);
    Ia( () => (T.current = !0,
    () => {
        T.current = !1
    }
    ), []),
    Ia( () => {
        if (S && (E.current = S),
        C && (N.current = C),
        S && C) {
            if (M.current)
                return M.current(S, C, U);
            U()
        }
    }
    , [S, C, U, M, O]);
    const V = d.useMemo( () => ({
        reference: E,
        floating: N,
        setReference: h,
        setFloating: x
    }), [h, x])
      , L = d.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , z = d.useMemo( () => {
        const j = {
            position: n,
            left: 0,
            top: 0
        };
        if (!L.floating)
            return j;
        const R = tm(L.floating, f.x)
          , D = tm(L.floating, f.y);
        return i ? {
            ...j,
            transform: "translate(" + R + "px, " + D + "px)",
            ...C0(L.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: R,
            top: D
        }
    }
    , [n, i, L.floating, f.x, f.y]);
    return d.useMemo( () => ({
        ...f,
        update: U,
        refs: V,
        elements: L,
        floatingStyles: z
    }), [f, U, V, L, z])
}
const EN = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? em({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? em({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , NN = (e, t) => ({
    ...mN(e),
    options: [e, t]
})
  , kN = (e, t) => ({
    ...hN(e),
    options: [e, t]
})
  , jN = (e, t) => ({
    ...xN(e),
    options: [e, t]
})
  , PN = (e, t) => ({
    ...gN(e),
    options: [e, t]
})
  , RN = (e, t) => ({
    ...vN(e),
    options: [e, t]
})
  , TN = (e, t) => ({
    ...yN(e),
    options: [e, t]
})
  , AN = (e, t) => ({
    ...EN(e),
    options: [e, t]
});
var _N = "Arrow"
  , E0 = d.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return c.jsx(J.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
E0.displayName = _N;
var MN = E0;
function N0(e) {
    const [t,n] = d.useState(void 0);
    return Wt( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let a, i;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    a = u.inlineSize,
                    i = u.blockSize
                } else
                    a = e.offsetWidth,
                    i = e.offsetHeight;
                n({
                    width: a,
                    height: i
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var k0 = "Popper"
  , [j0,P0] = Rt(k0)
  , [nT,R0] = j0(k0)
  , T0 = "PopperAnchor"
  , A0 = d.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = R0(T0, n)
      , a = d.useRef(null)
      , i = ve(t, a);
    return d.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || a.current)
    }
    ),
    r ? null : c.jsx(J.div, {
        ...o,
        ref: i
    })
}
);
A0.displayName = T0;
var Od = "PopperContent"
  , [ON,IN] = j0(Od)
  , _0 = d.forwardRef( (e, t) => {
    var ne, Rr, dn, Jn, fn, Tr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: a=0, arrowPadding: i=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: f=0, sticky: m="partial", hideWhenDetached: g=!1, updatePositionStrategy: p="optimized", onPlaced: b, ...v} = e
      , w = R0(Od, n)
      , [y,h] = d.useState(null)
      , x = ve(t, pn => h(pn))
      , [S,C] = d.useState(null)
      , E = N0(S)
      , N = (E == null ? void 0 : E.width) ?? 0
      , k = (E == null ? void 0 : E.height) ?? 0
      , O = r + (s !== "center" ? "-" + s : "")
      , M = typeof f == "number" ? f : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...f
    }
      , $ = Array.isArray(u) ? u : [u]
      , I = $.length > 0
      , U = {
        padding: M,
        boundary: $.filter(DN),
        altBoundary: I
    }
      , {refs: T, floatingStyles: V, placement: L, isPositioned: z, middlewareData: j} = CN({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...pn) => pN(...pn, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [NN({
            mainAxis: o + k,
            alignmentAxis: a
        }), l && kN({
            mainAxis: !0,
            crossAxis: !1,
            limiter: m === "partial" ? jN() : void 0,
            ...U
        }), l && PN({
            ...U
        }), RN({
            ...U,
            apply: ({elements: pn, rects: Vs, availableWidth: il, availableHeight: Ws}) => {
                const {width: ll, height: Oo} = Vs.reference
                  , Ar = pn.floating.style;
                Ar.setProperty("--radix-popper-available-width", `${il}px`),
                Ar.setProperty("--radix-popper-available-height", `${Ws}px`),
                Ar.setProperty("--radix-popper-anchor-width", `${ll}px`),
                Ar.setProperty("--radix-popper-anchor-height", `${Oo}px`)
            }
        }), S && AN({
            element: S,
            padding: i
        }), FN({
            arrowWidth: N,
            arrowHeight: k
        }), g && TN({
            strategy: "referenceHidden",
            ...U
        })]
    })
      , [R,D] = I0(L)
      , K = kt(b);
    Wt( () => {
        z && (K == null || K())
    }
    , [z, K]);
    const B = (ne = j.arrow) == null ? void 0 : ne.x
      , Q = (Rr = j.arrow) == null ? void 0 : Rr.y
      , Y = ((dn = j.arrow) == null ? void 0 : dn.centerOffset) !== 0
      , [ye,Te] = d.useState();
    return Wt( () => {
        y && Te(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    c.jsx("div", {
        ref: T.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...V,
            transform: z ? V.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ye,
            "--radix-popper-transform-origin": [(Jn = j.transformOrigin) == null ? void 0 : Jn.x, (fn = j.transformOrigin) == null ? void 0 : fn.y].join(" "),
            ...((Tr = j.hide) == null ? void 0 : Tr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(ON, {
            scope: n,
            placedSide: R,
            onArrowChange: C,
            arrowX: B,
            arrowY: Q,
            shouldHideArrow: Y,
            children: c.jsx(J.div, {
                "data-side": R,
                "data-align": D,
                ...v,
                ref: x,
                style: {
                    ...v.style,
                    animation: z ? void 0 : "none"
                }
            })
        })
    })
}
);
_0.displayName = Od;
var M0 = "PopperArrow"
  , LN = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , O0 = d.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = IN(M0, r)
      , a = LN[s.placedSide];
    return c.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [a]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(MN, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
O0.displayName = M0;
function DN(e) {
    return e !== null
}
var FN = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, y, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , a = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , i = a ? 0 : e.arrowWidth
          , l = a ? 0 : e.arrowHeight
          , [u,f] = I0(n)
          , m = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f]
          , g = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2
          , p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let b = ""
          , v = "";
        return u === "bottom" ? (b = a ? m : `${g}px`,
        v = `${-l}px`) : u === "top" ? (b = a ? m : `${g}px`,
        v = `${r.floating.height + l}px`) : u === "right" ? (b = `${-l}px`,
        v = a ? m : `${p}px`) : u === "left" && (b = `${r.floating.width + l}px`,
        v = a ? m : `${p}px`),
        {
            data: {
                x: b,
                y: v
            }
        }
    }
});
function I0(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var $N = A0
  , zN = _0
  , BN = O0
  , [Yi,rT] = Rt("Tooltip", [P0])
  , Id = P0()
  , L0 = "TooltipProvider"
  , UN = 700
  , nm = "tooltip.open"
  , [VN,D0] = Yi(L0)
  , F0 = e => {
    const {__scopeTooltip: t, delayDuration: n=UN, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , a = d.useRef(!0)
      , i = d.useRef(!1)
      , l = d.useRef(0);
    return d.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(VN, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: n,
        onOpen: d.useCallback( () => {
            window.clearTimeout(l.current),
            a.current = !1
        }
        , []),
        onClose: d.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => a.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: i,
        onPointerInTransitChange: d.useCallback(u => {
            i.current = u
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
F0.displayName = L0;
var $0 = "Tooltip"
  , [oT,Xi] = Yi($0)
  , uu = "TooltipTrigger"
  , WN = d.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Xi(uu, n)
      , s = D0(uu, n)
      , a = Id(n)
      , i = d.useRef(null)
      , l = ve(t, i, o.onTriggerChange)
      , u = d.useRef(!1)
      , f = d.useRef(!1)
      , m = d.useCallback( () => u.current = !1, []);
    return d.useEffect( () => () => document.removeEventListener("pointerup", m), [m]),
    c.jsx($N, {
        asChild: !0,
        ...a,
        children: c.jsx(J.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: X(e.onPointerMove, g => {
                g.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                f.current = !0)
            }
            ),
            onPointerLeave: X(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                f.current = !1
            }
            ),
            onPointerDown: X(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", m, {
                    once: !0
                })
            }
            ),
            onFocus: X(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: X(e.onBlur, o.onClose),
            onClick: X(e.onClick, o.onClose)
        })
    })
}
);
WN.displayName = uu;
var HN = "TooltipPortal"
  , [sT,KN] = Yi(HN, {
    forceMount: void 0
})
  , ko = "TooltipContent"
  , z0 = d.forwardRef( (e, t) => {
    const n = KN(ko, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , a = Xi(ko, e.__scopeTooltip);
    return c.jsx(Xn, {
        present: r || a.open,
        children: a.disableHoverableContent ? c.jsx(B0, {
            side: o,
            ...s,
            ref: t
        }) : c.jsx(GN, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , GN = d.forwardRef( (e, t) => {
    const n = Xi(ko, e.__scopeTooltip)
      , r = D0(ko, e.__scopeTooltip)
      , o = d.useRef(null)
      , s = ve(t, o)
      , [a,i] = d.useState(null)
      , {trigger: l, onClose: u} = n
      , f = o.current
      , {onPointerInTransitChange: m} = r
      , g = d.useCallback( () => {
        i(null),
        m(!1)
    }
    , [m])
      , p = d.useCallback( (b, v) => {
        const w = b.currentTarget
          , y = {
            x: b.clientX,
            y: b.clientY
        }
          , h = JN(y, w.getBoundingClientRect())
          , x = ZN(y, h)
          , S = ek(v.getBoundingClientRect())
          , C = nk([...x, ...S]);
        i(C),
        m(!0)
    }
    , [m]);
    return d.useEffect( () => () => g(), [g]),
    d.useEffect( () => {
        if (l && f) {
            const b = w => p(w, f)
              , v = w => p(w, l);
            return l.addEventListener("pointerleave", b),
            f.addEventListener("pointerleave", v),
            () => {
                l.removeEventListener("pointerleave", b),
                f.removeEventListener("pointerleave", v)
            }
        }
    }
    , [l, f, p, g]),
    d.useEffect( () => {
        if (a) {
            const b = v => {
                const w = v.target
                  , y = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , h = (l == null ? void 0 : l.contains(w)) || (f == null ? void 0 : f.contains(w))
                  , x = !tk(y, a);
                h ? g() : x && (g(),
                u())
            }
            ;
            return document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
        }
    }
    , [l, f, a, u, g]),
    c.jsx(B0, {
        ...e,
        ref: s
    })
}
)
  , [QN,qN] = Yi($0, {
    isInside: !1
})
  , YN = k2("TooltipContent")
  , B0 = d.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: a, ...i} = e
      , l = Xi(ko, n)
      , u = Id(n)
      , {onClose: f} = l;
    return d.useEffect( () => (document.addEventListener(nm, f),
    () => document.removeEventListener(nm, f)), [f]),
    d.useEffect( () => {
        if (l.trigger) {
            const m = g => {
                const p = g.target;
                p != null && p.contains(l.trigger) && f()
            }
            ;
            return window.addEventListener("scroll", m, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", m, {
                capture: !0
            })
        }
    }
    , [l.trigger, f]),
    c.jsx(Wi, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: m => m.preventDefault(),
        onDismiss: f,
        children: c.jsxs(zN, {
            "data-state": l.stateAttribute,
            ...u,
            ...i,
            ref: t,
            style: {
                ...i.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(YN, {
                children: r
            }), c.jsx(QN, {
                scope: n,
                isInside: !0,
                children: c.jsx(q2, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
z0.displayName = ko;
var U0 = "TooltipArrow"
  , XN = d.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Id(n);
    return qN(U0, n).isInside ? null : c.jsx(BN, {
        ...o,
        ...r,
        ref: t
    })
}
);
XN.displayName = U0;
function JN(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function ZN(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function ek(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function tk(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
        const i = t[s]
          , l = t[a]
          , u = i.x
          , f = i.y
          , m = l.x
          , g = l.y;
        f > r != g > r && n < (m - u) * (r - f) / (g - f) + u && (o = !o)
    }
    return o
}
function nk(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    rk(t)
}
function rk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , a = t[t.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , a = n[n.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var ok = F0
  , V0 = z0;
const sk = ok
  , ak = d.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(V0, {
    ref: r,
    sideOffset: t,
    className: be("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
ak.displayName = V0.displayName;
const ik = "/assets/product-ringlight-tripod-C30-gU5V.jpg"
  , lk = "/assets/product-ps5-slim-CX36lsPf.jpg"
  , ck = "/assets/product-squeeze-kit-DEB9rrTz.jpg"
  , uk = "/assets/product-fone-m10-CcTpIW57.jpg"
  , dk = "/assets/product-gloss-liphoney-L4cjR5fU.jpg"
  , fk = "/assets/product-jbl-partybox-C-ywKycU.jpg"
  , pk = "/assets/product-panelas-B4YFUbfl.jpg"
  , mk = "/assets/product-tablet-CbUb9wif.jpg"
  , hk = "/assets/product-bicicleta-eletrica-BAyQwXgt.jpg"
  , gk = "/assets/product-crocs-mcqueen-KSEj6N6n.jpg"
  , as = [{
    id: 1,
    name: "Ring Light LED com Tripé Ajustável",
    category: "Eletrônicos",
    reward: 48.7,
    image: ik,
    evaluated: !1,
    rating: 4.9,
    reviews: "2.1k",
    sold: "31k",
    badge: "flash",
    official: !0
}, {
    id: 2,
    name: "PS5 Slim Digital Edition 825GB Console PlayStation 5",
    category: "Eletrônicos / Games",
    reward: 53.4,
    image: lk,
    evaluated: !1,
    rating: 4.9,
    reviews: "8.7k",
    sold: "42k",
    badge: "flash",
    official: !0
}, {
    id: 3,
    name: "Kit Garrafas Squeeze Motivacionais (1.2L, 800ml e 300ml)",
    category: "Academia / Utilidades",
    reward: 62.8,
    image: ck,
    evaluated: !1,
    rating: 4.8,
    reviews: "3.4k",
    sold: "45k",
    badge: "flash",
    official: !0
}, {
    id: 4,
    name: "Fone de Ouvido Sem Fio Bluetooth M10 com Powerbank",
    category: "Eletrônicos",
    reward: 68.5,
    image: uk,
    evaluated: !1,
    rating: 4.6,
    reviews: "1.5k",
    sold: "18k",
    badge: "new"
}, {
    id: 5,
    name: "Gloss Fran by Franciny Ehlke Liphoney Mel",
    category: "Beleza",
    reward: 74.3,
    image: dk,
    evaluated: !1,
    rating: 4.9,
    reviews: "5.2k",
    sold: "67k",
    badge: "flash",
    official: !0
}, {
    id: 6,
    name: "Caixa de Som Bluetooth JBL PartyBox Stage 320",
    category: "Eletrônicos / Áudio",
    reward: 79.6,
    image: fk,
    evaluated: !1,
    rating: 4.9,
    reviews: "6.4k",
    sold: "38k",
    badge: "flash",
    official: !0
}, {
    id: 10,
    name: "Cars x Crocs Classic Clog Lightning McQueen Relâmpago LED Vermelho",
    category: "Calçados / Infantil",
    reward: 88,
    image: gk,
    evaluated: !1,
    rating: 4.9,
    reviews: "3.7k",
    sold: "21k",
    badge: "new",
    official: !0
}, {
    id: 7,
    name: "Jogo de Panelas Antiaderente Cerâmica 18 Peças Quartz Stone",
    category: "Cozinha",
    reward: 93.9,
    image: pk,
    evaluated: !1,
    rating: 4.5,
    reviews: "978",
    sold: "9.2k",
    badge: "new"
}, {
    id: 8,
    name: 'Tablet 10.1" Android 13 com Teclado e Mouse (6GB RAM, 128GB)',
    category: "Eletrônicos",
    reward: 113.4,
    image: mk,
    evaluated: !1,
    rating: 4.9,
    reviews: "4.1k",
    sold: "52k",
    badge: "flash",
    official: !0
}, {
    id: 9,
    name: "Bicicleta Elétrica 500W Autonomia até 40km",
    category: "Mobilidade",
    reward: 136.4,
    image: hk,
    evaluated: !1,
    rating: 4.7,
    reviews: "1.8k",
    sold: "23k",
    badge: "free"
}]
  , W0 = d.createContext(null)
  , Pr = () => {
    const e = d.useContext(W0);
    if (!e)
        throw new Error("useAppState must be used within AppProvider");
    return e
}
  , vk = ({children: e}) => {
    const [t,n] = d.useState(100)
      , [r,o] = d.useState(0)
      , [s,a] = d.useState(new Set)
      , [i,l] = d.useState([])
      , [u,f] = d.useState(!1)
      , [m,g] = d.useState(!1)
      , [p,b] = d.useState(!1)
      , v = d.useCallback( (h, x, S) => {
        a(C => new Set(C).add(h)),
        n(C => C + x),
        o(C => C + 1),
        l(C => [{
            productName: S,
            reward: x
        }, ...C])
    }
    , [])
      , w = d.useCallback( (h, x="Bônus Rodada Turbo") => {
        n(S => S + h),
        l(S => [{
            productName: x,
            reward: h
        }, ...S])
    }
    , [])
      , y = d.useCallback( () => {
        f(!0)
    }
    , []);
    return c.jsx(W0.Provider, {
        value: {
            balance: t,
            evaluationsToday: r,
            evaluatedIds: s,
            earnings: i,
            turboCompleted: u,
            pendingTurbo: m,
            pendingWithdraw: p,
            markEvaluated: v,
            addTurboBonus: w,
            setTurboCompleted: y,
            setPendingTurbo: g,
            setPendingWithdraw: b
        },
        children: e
    })
}
  , yk = "/assets/turbo-suporte-celular-DJImgdzI.jpg"
  , xk = "/assets/turbo-escova-limpeza-eqhERYuR.jpg"
  , wk = "/assets/turbo-mini-liquidificador-iQDeBUrq.jpg"
  , bk = "/assets/turbo-luminaria-sensor-BZQjOP4E.jpg"
  , Sk = "/assets/turbo-massageador-corporal-C6YqEbHy.jpg"
  , H0 = [{
    id: 101,
    name: "Suporte de Celular Ajustável para Mesa",
    category: "Acessórios",
    image: yk
}, {
    id: 102,
    name: "Escova Elétrica de Limpeza Multiuso",
    category: "Casa",
    image: xk
}, {
    id: 103,
    name: "Mini Liquidificador Portátil USB",
    category: "Cozinha",
    image: wk
}, {
    id: 104,
    name: "Luminária LED Noturna com Sensor de Presença",
    category: "Casa",
    image: bk
}, {
    id: 105,
    name: "Massageador Corporal Elétrico Portátil",
    category: "Bem-estar",
    image: Sk
}];
var Ld = "Progress"
  , Dd = 100
  , [Ck,aT] = Rt(Ld)
  , [Ek,Nk] = Ck(Ld)
  , K0 = d.forwardRef( (e, t) => {
    const {__scopeProgress: n, value: r=null, max: o, getValueLabel: s=kk, ...a} = e;
    (o || o === 0) && !rm(o) && console.error(jk(`${o}`, "Progress"));
    const i = rm(o) ? o : Dd;
    r !== null && !om(r, i) && console.error(Pk(`${r}`, "Progress"));
    const l = om(r, i) ? r : null
      , u = vi(l) ? s(l, i) : void 0;
    return c.jsx(Ek, {
        scope: n,
        value: l,
        max: i,
        children: c.jsx(J.div, {
            "aria-valuemax": i,
            "aria-valuemin": 0,
            "aria-valuenow": vi(l) ? l : void 0,
            "aria-valuetext": u,
            role: "progressbar",
            "data-state": q0(l, i),
            "data-value": l ?? void 0,
            "data-max": i,
            ...a,
            ref: t
        })
    })
}
);
K0.displayName = Ld;
var G0 = "ProgressIndicator"
  , Q0 = d.forwardRef( (e, t) => {
    const {__scopeProgress: n, ...r} = e
      , o = Nk(G0, n);
    return c.jsx(J.div, {
        "data-state": q0(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
    })
}
);
Q0.displayName = G0;
function kk(e, t) {
    return `${Math.round(e / t * 100)}%`
}
function q0(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}
function vi(e) {
    return typeof e == "number"
}
function rm(e) {
    return vi(e) && !isNaN(e) && e > 0
}
function om(e, t) {
    return vi(e) && !isNaN(e) && e <= t && e >= 0
}
function jk(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Dd}\`.`
}
function Pk(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Dd} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var Y0 = K0
  , Rk = Q0;
const du = d.forwardRef( ({className: e, value: t, ...n}, r) => c.jsx(Y0, {
    ref: r,
    className: be("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...n,
    children: c.jsx(Rk, {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
}));
du.displayName = Y0.displayName;
const Fd = .35
  , Tk = 4
  , $d = {
    coin: "/sounds/sound-coin.mp3",
    whoosh: "/sounds/sound-whoosh.mp3",
    success: "/sounds/sound-success.mp3"
}
  , sm = {}
  , fu = {}
  , am = {};
let ha = null
  , im = !1
  , lm = !1;
const X0 = () => Object.keys($d)
  , Ji = () => typeof window < "u" && typeof Audio < "u"
  , zd = () => {
    if (!Ji())
        return null;
    if (ha)
        return ha;
    try {
        const e = window.AudioContext ?? window.webkitAudioContext;
        return e ? (ha = new e,
        ha) : null
    } catch {
        return null
    }
}
  , Ak = e => {
    if (!Ji())
        return null;
    try {
        const t = new Audio(e);
        return t.preload = "auto",
        t.volume = Fd,
        t.load(),
        t
    } catch {
        return null
    }
}
  , J0 = e => {
    const t = sm[e];
    if (t)
        return t;
    const n = Array.from({
        length: Tk
    }, () => Ak($d[e])).filter(Boolean);
    if (n.length === 0)
        return null;
    const r = {
        elements: n,
        nextIndex: 0
    };
    return sm[e] = r,
    r
}
  , _k = () => {
    X0().forEach(e => {
        J0(e)
    }
    )
}
  , Mk = (e, t) => new Promise( (n, r) => {
    try {
        e.decodeAudioData(t.slice(0), n, r)
    } catch (o) {
        r(o)
    }
}
)
  , Z0 = async e => {
    const t = fu[e];
    if (t)
        return t;
    const n = am[e];
    if (n)
        return n;
    const r = zd();
    if (!r)
        return null;
    const o = (async () => {
        try {
            const s = await fetch($d[e], {
                cache: "force-cache"
            });
            if (!s.ok)
                return null;
            const a = await s.arrayBuffer()
              , i = await Mk(r, a);
            return fu[e] = i,
            i
        } catch {
            return null
        }
    }
    )();
    return am[e] = o,
    o
}
  , Ok = e => {
    try {
        const t = e.createBufferSource()
          , n = e.createBuffer(1, 1, 22050)
          , r = e.createGain();
        r.gain.value = 0,
        t.buffer = n,
        t.connect(r),
        r.connect(e.destination),
        t.start(0)
    } catch {}
}
  , ey = () => {
    const e = zd();
    if (e)
        try {
            if (e.state === "suspended" && e.resume().catch( () => {}
            ),
            !lm) {
                Ok(e);
                try {
                    const t = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=");
                    t.volume = 0,
                    t.play().catch( () => {}
                    )
                } catch {}
                lm = !0
            }
        } catch {}
}
  , Ik = () => {
    X0().forEach(e => {
        Z0(e)
    }
    )
}
  , ty = () => {
    if (!Ji() || im)
        return;
    im = !0;
    const e = () => {
        ey(),
        Ik(),
        window.removeEventListener("pointerdown", e, !0),
        window.removeEventListener("touchstart", e, !0),
        window.removeEventListener("click", e, !0),
        window.removeEventListener("keydown", e, !0)
    }
    ;
    window.addEventListener("pointerdown", e, !0),
    window.addEventListener("touchstart", e, !0),
    window.addEventListener("click", e, !0),
    window.addEventListener("keydown", e, !0)
}
  , Bd = () => {
    try {
        return localStorage.getItem("sound_muted") === "true"
    } catch {
        return !1
    }
}
  , Lk = e => {
    const t = J0(e);
    if (t)
        try {
            const n = t.elements.find(r => r.paused || r.ended) ?? t.elements[t.nextIndex];
            t.nextIndex = (t.nextIndex + 1) % t.elements.length,
            n.pause(),
            n.currentTime = 0,
            n.volume = Fd,
            n.play().catch( () => {}
            )
        } catch {}
}
  , Dk = e => {
    const t = zd()
      , n = fu[e];
    if (!t || !n || t.state === "closed")
        return !1;
    try {
        const r = t.createBufferSource()
          , o = t.createGain();
        return o.gain.value = Fd,
        r.buffer = n,
        r.connect(o),
        o.connect(t.destination),
        r.start(0),
        !0
    } catch {
        return !1
    }
}
  , Ud = e => {
    Bd() || (ty(),
    ey(),
    !Dk(e) && (Z0(e),
    Lk(e)))
}
;
Ji() && (_k(),
ty());
const ny = () => Ud("coin")
  , Fk = () => Ud("whoosh")
  , ry = () => Ud("success")
  , $k = () => {
    const e = !Bd();
    try {
        localStorage.setItem("sound_muted", String(e))
    } catch {}
    return e
}
  , zk = () => Bd()
  , Zi = () => {
    try {
        return typeof navigator < "u" && typeof navigator.vibrate == "function"
    } catch {
        return !1
    }
}
  , hr = () => {
    Zi() && navigator.vibrate(10)
}
  , Vd = () => {
    Zi() && navigator.vibrate(18)
}
  , el = () => {
    Zi() && navigator.vibrate(25)
}
  , Bk = () => {
    Zi() && navigator.vibrate([15, 10, 15])
}
  , Mt = H0
  , cm = 250
  , Lr = 2e4
  , Uk = 350
  , um = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL"
})
  , Vk = () => Bk()
  , Wk = ({open: e, onAward: t, onClose: n}) => {
    const [r,o] = d.useState("intro")
      , [s,a] = d.useState(0)
      , [i,l] = d.useState(0)
      , [u,f] = d.useState(Lr)
      , [m,g] = d.useState(0)
      , [p,b] = d.useState(!1)
      , [v,w] = d.useState(0)
      , [y,h] = d.useState(!1)
      , [x,S] = d.useState(!1)
      , C = d.useRef(null)
      , E = d.useRef(0)
      , N = d.useRef(!1);
    d.useEffect( () => {
        e && Mt.forEach(L => {
            const z = new Image;
            z.src = L.image
        }
        )
    }
    , [e]),
    d.useEffect( () => {
        e && Vk()
    }
    , [e]);
    const k = d.useCallback( () => {
        C.current !== null && (window.clearTimeout(C.current),
        C.current = null)
    }
    , [])
      , O = d.useCallback( () => {
        h(!0),
        setTimeout( () => {
            h(!1),
            n()
        }
        , 200)
    }
    , [n])
      , M = d.useCallback(L => {
        if (N.current)
            return;
        N.current = !0,
        k();
        const z = Number((L / Mt.length * cm).toFixed(2));
        l(L),
        g(z),
        b(!1),
        o("processing"),
        t(z),
        setTimeout( () => {
            ry(),
            ny(),
            o("finished"),
            setTimeout( () => S(!0), 100)
        }
        , 1800)
    }
    , [k, t]);
    d.useEffect( () => {
        E.current = i
    }
    , [i]),
    d.useEffect( () => {
        e || (k(),
        o("intro"),
        a(0),
        l(0),
        f(Lr),
        g(0),
        b(!1),
        w(0),
        S(!1),
        E.current = 0,
        N.current = !1)
    }
    , [e, k]),
    d.useEffect( () => {
        if (!e || r !== "playing")
            return;
        const L = Date.now();
        f(Lr);
        const z = window.setInterval( () => {
            const j = Math.max(0, Lr - (Date.now() - L));
            f(j),
            j === 0 && (window.clearInterval(z),
            M(E.current))
        }
        , 100);
        return () => window.clearInterval(z)
    }
    , [e, r, M]),
    d.useEffect( () => () => k(), [k]);
    const $ = () => {
        el(),
        N.current = !1,
        o("playing"),
        a(0),
        l(0),
        f(Lr),
        g(0),
        w(0),
        E.current = 0
    }
      , I = d.useCallback(L => {
        if (r !== "playing" || p || u <= 0)
            return;
        w(L),
        b(!0),
        Fk(),
        hr();
        const z = E.current + 1;
        E.current = z,
        l(z),
        C.current = window.setTimeout( () => {
            z >= Mt.length ? M(z) : (a(j => j + 1),
            w(0),
            requestAnimationFrame( () => {
                requestAnimationFrame( () => {
                    b(!1)
                }
                )
            }
            )),
            C.current = null
        }
        , Uk)
    }
    , [M, r, p, u]);
    if (!e && !y)
        return null;
    const U = Mt[s]
      , T = r === "playing" ? (s + 1) / Mt.length * 100 : i / Mt.length * 100
      , V = (u / 1e3).toFixed(1);
    return c.jsxs("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center px-6",
        children: [c.jsx("div", {
            className: `absolute inset-0 bg-foreground/40 backdrop-blur-[3px] transition-opacity duration-200 ${y ? "opacity-0" : "opacity-100"}`,
            onClick: void 0
        }), c.jsxs("div", {
            className: `relative w-full max-w-[340px] rounded-2xl bg-card shadow-[0_8px_40px_-8px_rgba(0,0,0,0.2)] transition-all duration-200 ${y ? "opacity-0 scale-95" : "opacity-100 scale-100 animate-[scale-in_0.2s_ease-out]"}`,
            children: [r === "intro" && c.jsxs("div", {
                className: "px-5 py-6",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-2.5 mb-1",
                    children: [c.jsx(Vp, {
                        className: "h-5 w-5 text-[hsl(25,95%,53%)] fill-[hsl(25,95%,53%)]"
                    }), c.jsx("h2", {
                        className: "text-[17px] font-bold text-foreground",
                        children: "Rodada turbo liberada"
                    })]
                }), c.jsx("p", {
                    className: "text-[13px] text-muted-foreground ml-[30px]",
                    children: "Avalie 5 produtos em 20 segundos"
                }), c.jsxs("div", {
                    className: "mt-5 rounded-xl bg-success/8 py-4 text-center",
                    children: [c.jsx("p", {
                        className: "text-[11px] font-medium text-muted-foreground mb-1",
                        children: "Ganhe até"
                    }), c.jsx("p", {
                        className: "text-[28px] font-extrabold text-success leading-none",
                        children: um.format(cm)
                    })]
                }), c.jsx("button", {
                    onClick: $,
                    className: "mt-5 h-12 w-full rounded-xl bg-primary text-[15px] font-bold text-primary-foreground transition-all active:scale-[0.95]",
                    children: "Começar agora"
                })]
            }), r === "playing" && c.jsxs("div", {
                className: "px-5 py-5",
                children: [c.jsxs("div", {
                    className: "mb-2 flex items-center justify-between",
                    children: [c.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [c.jsxs("span", {
                            className: "text-xl font-bold tabular-nums text-foreground",
                            children: [V, "s"]
                        }), c.jsx("span", {
                            className: "text-[11px] text-muted-foreground",
                            children: "restante"
                        })]
                    }), c.jsxs("span", {
                        className: "text-[13px] font-semibold text-muted-foreground",
                        children: [s + 1, "/", Mt.length]
                    })]
                }), c.jsx(du, {
                    className: "mb-4 h-1 bg-muted",
                    value: u / Lr * 100
                }), c.jsx("div", {
                    className: `transition-all duration-150 ${p ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"}`,
                    children: c.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [c.jsx("div", {
                            className: "h-[96px] w-[96px] flex-shrink-0 overflow-hidden rounded-xl border border-border/60 bg-[hsl(0,0%,97%)] flex items-center justify-center",
                            children: c.jsx("img", {
                                src: U.image,
                                alt: U.name,
                                className: "h-full w-full object-contain p-2"
                            })
                        }), c.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [c.jsx("h3", {
                                className: "text-[14px] font-semibold text-foreground line-clamp-2 leading-snug",
                                children: U.name
                            }), c.jsx("p", {
                                className: "mt-1 text-xs text-muted-foreground",
                                children: U.category
                            })]
                        })]
                    })
                }), c.jsxs("div", {
                    className: "mt-4",
                    children: [c.jsx("p", {
                        className: "mb-2 text-center text-xs text-muted-foreground",
                        children: "Toque para avaliar"
                    }), c.jsx("div", {
                        className: "flex justify-center gap-3",
                        children: [1, 2, 3, 4, 5].map(L => c.jsx("button", {
                            onClick: () => I(L),
                            disabled: p,
                            className: "flex h-12 w-12 items-center justify-center transition-transform active:scale-90 disabled:pointer-events-none",
                            children: c.jsx(su, {
                                className: `h-9 w-9 transition-colors duration-100 ${L <= v ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`
                            })
                        }, L))
                    }), c.jsx(du, {
                        className: "mt-3 h-1 bg-muted",
                        value: T
                    })]
                })]
            }), r === "processing" && c.jsxs("div", {
                className: "flex flex-col items-center justify-center px-5 py-10",
                children: [c.jsx("div", {
                    className: "mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-[3px] border-muted border-t-primary"
                }), c.jsx("p", {
                    className: "text-[15px] font-semibold text-foreground",
                    children: "Calculando bônus..."
                }), c.jsx("p", {
                    className: "mt-1 text-[13px] text-muted-foreground",
                    children: "Processando avaliações"
                })]
            }), r === "finished" && c.jsxs("div", {
                className: "px-5 py-6 text-center",
                children: [c.jsxs("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [c.jsx(Vp, {
                        className: "h-5 w-5 text-[hsl(25,95%,53%)] fill-[hsl(25,95%,53%)]"
                    }), c.jsx("h2", {
                        className: "text-[17px] font-bold text-foreground",
                        children: i === Mt.length ? "Rodada concluída!" : "Tempo encerrado!"
                    })]
                }), c.jsx("p", {
                    className: "mt-1 text-[13px] text-muted-foreground",
                    children: i === Mt.length ? "Todas as avaliações concluídas" : `${i} de ${Mt.length} avaliações`
                }), c.jsxs("p", {
                    className: `mt-4 text-[28px] font-extrabold text-success leading-none transition-all duration-300 ${x ? "opacity-100 scale-100" : "opacity-0 scale-95"}`,
                    children: ["+", um.format(m)]
                }), c.jsx("p", {
                    className: "mt-1.5 text-[11px] text-muted-foreground",
                    children: "Adicionado ao saldo"
                }), c.jsx("button", {
                    onClick: O,
                    className: "mt-5 h-12 w-full rounded-xl bg-primary text-[15px] font-bold text-primary-foreground transition-all active:scale-[0.95]",
                    children: "Continuar"
                })]
            })]
        })]
    })
}
;
function Hk(e, t=700, n=!1) {
    const [r,o] = d.useState(0)
      , s = d.useRef(!1);
    return d.useEffect( () => {
        if (!n || s.current)
            return;
        s.current = !0;
        const a = performance.now()
          , i = l => {
            const u = Math.min((l - a) / t, 1)
              , f = 1 - Math.pow(1 - u, 3);
            o(f * e),
            u < 1 && requestAnimationFrame(i)
        }
        ;
        requestAnimationFrame(i)
    }
    , [e, t, n]),
    d.useEffect( () => {
        n || (s.current = !1,
        o(0))
    }
    , [n]),
    r
}
const Kk = ({open: e, onOpenChange: t}) => {
    const n = Yn()
      , {balance: r} = Pr()
      , [o,s] = d.useState(!1)
      , [a,i] = d.useState(!1)
      , [l,u] = d.useState(!1)
      , f = Hk(r, 700, a);
    d.useEffect( () => {
        if (e) {
            ry();
            const b = setTimeout( () => {
                i(!0)
            }
            , 300)
              , v = setTimeout( () => {
                u(!0)
            }
            , 1100)
              , w = setTimeout( () => u(!1), 2200);
            return () => {
                clearTimeout(b),
                clearTimeout(v),
                clearTimeout(w)
            }
        } else
            i(!1),
            u(!1)
    }
    , [e, r]);
    const m = () => {
        el(),
        s(!0),
        setTimeout( () => {
            s(!1),
            t(!1),
            n("/balance")
        }
        , 200)
    }
      , g = () => {
        s(!0),
        setTimeout( () => {
            s(!1),
            t(!1)
        }
        , 250)
    }
    ;
    if (!e && !o)
        return null;
    const p = f.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return c.jsxs("div", {
        className: "fixed inset-0 z-50",
        children: [c.jsx("div", {
            className: `absolute inset-0 bg-black/50 transition-opacity duration-300 ${o ? "opacity-0" : "opacity-100"}`,
            onClick: g
        }), c.jsx("div", {
            className: `absolute inset-0 flex items-center justify-center px-8 ${o ? "animate-fade-out" : "animate-fade-in"}`,
            children: c.jsxs("div", {
                className: "w-full max-w-[340px] rounded-3xl p-8 text-center shadow-2xl",
                style: {
                    background: "linear-gradient(180deg, hsl(349 99% 58%) 0%, hsl(349 99% 50%) 100%)"
                },
                children: [c.jsx("div", {
                    className: "mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20",
                    children: c.jsx("span", {
                        className: "text-5xl",
                        children: "🏆"
                    })
                }), c.jsx("h2", {
                    className: "mt-5 text-[18px] font-extrabold text-white whitespace-nowrap",
                    children: "Parabéns! Saque disponível 🎉"
                }), c.jsx("p", {
                    className: "mt-1 text-[16px] font-bold text-white/90",
                    children: "Você completou 9 avaliações"
                }), c.jsxs("p", {
                    className: `mt-4 text-[48px] font-black leading-none tracking-tight text-white transition-all duration-500 ${a ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}`,
                    children: ["R$", p]
                }), c.jsx("p", {
                    className: "mt-3 text-[14px] text-white/70",
                    children: "Via Pix • Transferência imediata"
                }), c.jsx("button", {
                    onClick: m,
                    className: "mt-6 w-full rounded-2xl bg-white py-4 text-[16px] font-extrabold text-foreground transition-all active:scale-[0.97]",
                    children: "Fazer saque agora"
                })]
            })
        })]
    })
}
  , Gk = {
    flash: {
        className: "bg-gradient-to-r from-[hsl(348,99%,58%)] to-[hsl(25,95%,53%)] text-white",
        icon: Nd,
        text: "Oferta relâmpago"
    },
    free: {
        className: "bg-[hsl(195,80%,92%)] text-[hsl(195,80%,30%)]",
        icon: OC,
        text: "Frete grátis"
    },
    new: {
        className: "bg-[hsl(145,60%,90%)] text-[hsl(145,63%,45%)]",
        icon: _C,
        text: "Nova tarefa"
    }
}
  , Qk = () => {
    const e = Yn()
      , {balance: t, evaluationsToday: n, evaluatedIds: r, addTurboBonus: o, setTurboCompleted: s, pendingTurbo: a, pendingWithdraw: i, setPendingTurbo: l, setPendingWithdraw: u} = Pr()
      , [f,m] = d.useState(!1)
      , [g,p] = d.useState(!1);
    d.useEffect( () => {
        if (a) {
            const h = setTimeout( () => {
                m(!0),
                l(!1)
            }
            , 800);
            return () => clearTimeout(h)
        }
    }
    , [a, l]),
    d.useEffect( () => {
        if (i) {
            const h = setTimeout( () => {
                p(!0),
                u(!1)
            }
            , 400);
            return () => clearTimeout(h)
        }
    }
    , [i, u]);
    const b = as.filter(h => !r.has(h.id)).length
      , v = as.filter(h => !r.has(h.id)).reduce( (h, x) => h + x.reward, 0)
      , w = [{
        icon: NC,
        label: "Saldo",
        value: `R$ ${je(t)}`,
        color: "text-primary",
        iconBg: "bg-primary/10",
        cardBg: "bg-[hsl(348,100%,97%)]",
        accent: "border-t-2 border-t-primary"
    }, {
        icon: MC,
        label: "Potencial",
        value: `R$ ${je(v)}`,
        color: "text-success",
        iconBg: "bg-success/10",
        cardBg: "bg-[hsl(145,60%,97%)]",
        accent: "border-t-2 border-t-success"
    }, {
        icon: jC,
        label: "Disponíveis",
        value: String(b),
        color: "text-foreground",
        iconBg: "bg-muted",
        cardBg: "bg-card",
        accent: ""
    }, {
        icon: wC,
        label: "Avaliações",
        value: String(n),
        color: "text-blue-600",
        iconBg: "bg-blue-50",
        cardBg: "bg-card",
        accent: ""
    }]
      , y = d.useMemo( () => [...as].sort( (h, x) => {
        const S = r.has(h.id) ? 1 : 0
          , C = r.has(x.id) ? 1 : 0;
        return S - C
    }
    ), [r]);
    return c.jsxs("div", {
        className: "px-3 py-3",
        children: [c.jsxs("h1", {
            className: "mb-1 text-lg font-bold leading-snug item-stagger-1",
            children: ["Avalie produtos do", " ", c.jsx("span", {
                className: "text-gradient whitespace-nowrap",
                children: "TikTok Shop"
            })]
        }), c.jsx("p", {
            className: "mb-3.5 text-[13px] leading-relaxed text-muted-foreground item-stagger-2",
            children: "Avalie produtos disponíveis e receba recompensas direto no seu Pix"
        }), c.jsx("div", {
            className: "mb-3.5 grid grid-cols-2 gap-2.5 item-stagger-3",
            children: w.map(h => c.jsx("div", {
                className: `overflow-hidden rounded-xl ${h.cardBg} px-3.5 py-3 sm:px-3 sm:py-2.5 shadow-[0_1px_4px_-1px_rgba(0,0,0,0.08)] ${h.accent}`,
                children: c.jsxs("div", {
                    className: "flex items-center gap-3 sm:gap-2.5",
                    children: [c.jsx("div", {
                        className: `flex h-9 w-9 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg ${h.iconBg}`,
                        children: c.jsx(h.icon, {
                            className: `h-[18px] w-[18px] sm:h-4 sm:w-4 ${h.color}`
                        })
                    }), c.jsxs("div", {
                        className: "min-w-0",
                        children: [c.jsx("p", {
                            className: "text-[10.5px] sm:text-[10px] font-medium uppercase tracking-wide text-muted-foreground",
                            children: h.label
                        }), c.jsx("p", {
                            className: `whitespace-nowrap text-[16px] sm:text-[15px] font-extrabold leading-tight ${h.color}`,
                            children: h.value
                        })]
                    })]
                })
            }, h.label))
        }), c.jsxs("div", {
            className: "grid grid-cols-2 gap-2 item-stagger-4",
            children: [y.map( (h, x) => {
                const S = r.has(h.id)
                  , C = h.badge ? Gk[h.badge] : null;
                return c.jsxs("div", {
                    className: `product-card flex flex-col overflow-hidden rounded-xl ${S ? "opacity-50" : ""}`,
                    children: [c.jsxs("div", {
                        className: "relative aspect-square overflow-hidden",
                        children: [c.jsx("img", {
                            src: h.image,
                            alt: h.name,
                            loading: x < 4 ? "eager" : "lazy",
                            width: 400,
                            height: 400,
                            className: `h-full w-full object-cover ${S ? "grayscale" : ""}`
                        }), c.jsx("div", {
                            className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"
                        }), c.jsx("div", {
                            className: "absolute left-1.5 top-1.5",
                            children: S ? c.jsx("span", {
                                className: "inline-flex items-center gap-0.5 rounded-full bg-success/90 px-2 py-0.5 text-[10px] font-medium text-white",
                                children: "✓ Avaliado"
                            }) : C ? c.jsxs("span", {
                                className: `inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-sm ${C.className}`,
                                children: [c.jsx(C.icon, {
                                    className: "h-2.5 w-2.5"
                                }), C.text]
                            }) : null
                        })]
                    }), c.jsxs("div", {
                        className: "flex flex-1 flex-col justify-between p-2.5",
                        children: [c.jsxs("div", {
                            children: [c.jsx("h3", {
                                className: "mb-0.5 line-clamp-2 text-[12px] font-semibold leading-snug text-foreground",
                                children: h.name
                            }), c.jsxs("p", {
                                className: "mb-1.5 text-[11px] text-muted-foreground",
                                children: ["⭐ ", h.rating, " · ", h.sold, " vendidos"]
                            }), c.jsxs("span", {
                                className: "inline-block text-[14px] font-extrabold text-success",
                                children: ["+R$ ", je(h.reward)]
                            })]
                        }), S ? c.jsx("button", {
                            disabled: !0,
                            className: "mt-2 w-full rounded-lg bg-muted py-2 text-[12px] font-semibold text-muted-foreground",
                            children: "Concluído"
                        }) : c.jsx("button", {
                            onClick: () => e(`/survey/${h.id}`),
                            className: "mt-2 w-full rounded-lg bg-gradient-to-b from-primary to-[hsl(348,80%,45%)] py-2.5 text-[12.5px] font-bold text-primary-foreground shadow-[0_2px_8px_-2px_hsl(348,99%,58%,0.4)] transition-all active:scale-[0.96]",
                            children: "Avaliar agora"
                        })]
                    })]
                }, h.id)
            }
            ), c.jsx("div", {
                className: "product-card flex flex-col items-center justify-center overflow-hidden rounded-xl",
                children: c.jsxs("div", {
                    className: "flex flex-1 flex-col items-center justify-center gap-2 p-4 text-center",
                    children: [c.jsx("span", {
                        className: "animate-pulse text-xl",
                        children: "⚡"
                    }), c.jsx("p", {
                        className: "text-[11px] font-medium text-muted-foreground",
                        children: "Novas tarefas sendo liberadas..."
                    }), c.jsx("div", {
                        className: "mt-0.5 h-1 w-14 overflow-hidden rounded-full bg-muted",
                        children: c.jsx("div", {
                            className: "h-full w-1/2 animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full bg-primary/50"
                        })
                    })]
                })
            })]
        }), c.jsx(Wk, {
            open: f,
            onAward: h => {
                s(),
                h > 0 && o(h)
            }
            ,
            onClose: () => {
                m(!1)
            }
        }), c.jsx(Kk, {
            open: g,
            onOpenChange: p
        })]
    })
}
  , qk = () => {
    const {id: e} = dS()
      , t = Yn()
      , {markEvaluated: n, evaluatedIds: r, evaluationsToday: o, turboCompleted: s, setPendingTurbo: a, setPendingWithdraw: i} = Pr()
      , l = as.find(T => T.id === Number(e))
      , [u,f] = d.useState(0)
      , [m,g] = d.useState(null)
      , [p,b] = d.useState("")
      , [v,w] = d.useState("form")
      , [y,h] = d.useState(!1)
      , x = o === 0
      , S = d.useRef(null)
      , C = d.useRef(null)
      , E = d.useRef(null)
      , N = d.useCallback(T => {
        setTimeout( () => {
            var V;
            (V = T.current) == null || V.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
        , 200)
    }
    , []);
    d.useEffect( () => {
        if (v === "processing") {
            const T = x ? 2200 : 1200
              , V = o + 1
              , L = setTimeout( () => {
                l && n(l.id, l.reward, l.name),
                w("done"),
                ny(),
                k.current = V === 9
            }
            , T);
            return () => clearTimeout(L)
        }
    }
    , [v, l, n, x, t, o, s]);
    const k = d.useRef(!1)
      , O = () => {
        Vd(),
        w("processing"),
        h(!0)
    }
      , M = () => {
        h(!1),
        t("/home"),
        k.current && setTimeout( () => i(!0), 400)
    }
    ;
    if (!l)
        return c.jsx("div", {
            className: "flex h-[60vh] items-center justify-center text-muted-foreground",
            children: "Produto não encontrado"
        });
    const $ = r.has(l.id)
      , I = ["Sim", "Talvez", "Não"]
      , U = u > 0 && m !== null && p !== "" && !$;
    return c.jsxs("div", {
        className: "px-3 py-3",
        children: [c.jsxs("button", {
            onClick: () => t(-1),
            className: "mb-3 flex items-center gap-1 text-[13px] text-muted-foreground active:text-foreground transition-colors item-stagger-1",
            children: [c.jsx(yC, {
                className: "h-4 w-4"
            }), " Voltar"]
        }), c.jsx("div", {
            className: "mb-3 overflow-hidden rounded-xl shadow-sm item-stagger-2 bg-[hsl(0,0%,97%)] flex items-center justify-center",
            style: {
                minHeight: "280px"
            },
            children: c.jsx("img", {
                src: l.image,
                alt: l.name,
                className: "max-h-[280px] w-full object-contain p-3"
            })
        }), c.jsxs("div", {
            className: "mb-5",
            children: [c.jsx("p", {
                className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
                children: l.category
            }), c.jsx("h2", {
                className: "mt-0.5 text-base font-bold leading-snug text-foreground",
                children: l.name
            }), c.jsxs("div", {
                className: "mt-1.5 flex items-center gap-1.5 text-[11px] text-muted-foreground",
                children: [c.jsx(su, {
                    className: "h-3 w-3 fill-amber-400 text-amber-400"
                }), c.jsx("span", {
                    className: "font-semibold text-foreground",
                    children: l.rating
                }), c.jsxs("span", {
                    children: ["(", l.reviews, ")"]
                }), c.jsx("span", {
                    className: "text-border",
                    children: "·"
                }), c.jsxs("span", {
                    children: [l.sold, " vendidos"]
                }), l.official && c.jsxs(c.Fragment, {
                    children: [c.jsx("span", {
                        className: "text-border",
                        children: "·"
                    }), c.jsxs("span", {
                        className: "inline-flex items-center gap-0.5 text-amber-500",
                        children: [c.jsx(Jv, {
                            className: "h-3 w-3"
                        }), c.jsx("span", {
                            className: "font-semibold",
                            children: "Oficial"
                        })]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-2 inline-flex items-center gap-1 rounded-lg bg-success/10 px-2.5 py-1 text-[13px] font-bold text-success",
                children: ["+R$ ", je(l.reward), " ao concluir"]
            })]
        }), $ && c.jsx("div", {
            className: "mb-4 rounded-xl bg-success/10 p-3 text-center text-[13px] font-medium text-success",
            children: "✓ Você já avaliou este produto"
        }), c.jsxs("div", {
            className: "glass-card mb-3 rounded-xl p-4",
            children: [c.jsx("h3", {
                className: "mb-2.5 text-[13px] font-semibold",
                children: "Que nota você daria? (1 a 5)"
            }), c.jsx("div", {
                className: "flex gap-3",
                children: [1, 2, 3, 4, 5].map(T => c.jsx("button", {
                    onClick: () => {
                        u !== T && (hr(),
                        f(T),
                        N(S))
                    }
                    ,
                    disabled: $,
                    className: "flex h-11 w-11 items-center justify-center transition-transform active:scale-90",
                    children: c.jsx(su, {
                        className: `h-8 w-8 transition-colors ${T <= u ? "fill-amber-400 text-amber-400" : "text-muted"}`
                    })
                }, T))
            })]
        }), c.jsxs("div", {
            ref: S,
            className: "glass-card mb-3 rounded-xl p-4",
            children: [c.jsx("h3", {
                className: "mb-2.5 text-[13px] font-semibold",
                children: "Você recomendaria este produto?"
            }), c.jsx("div", {
                className: "flex gap-2",
                children: [{
                    label: "Sim",
                    value: !0
                }, {
                    label: "Não",
                    value: !1
                }].map(T => c.jsx("button", {
                    onClick: () => {
                        m !== T.value && (hr(),
                        g(T.value),
                        N(C))
                    }
                    ,
                    disabled: $,
                    className: `flex-1 rounded-xl border py-3 text-[14px] font-semibold transition-all min-h-[44px] ${m === T.value ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground active:border-foreground"}`,
                    children: T.label
                }, T.label))
            })]
        }), c.jsxs("div", {
            ref: C,
            className: "glass-card mb-5 rounded-xl p-4",
            children: [c.jsx("h3", {
                className: "mb-2.5 text-[13px] font-semibold",
                children: "Você compraria esse produto?"
            }), c.jsx("div", {
                className: "flex gap-2",
                children: I.map(T => c.jsx("button", {
                    onClick: () => {
                        p !== T && (hr(),
                        b(T),
                        N(E))
                    }
                    ,
                    disabled: $,
                    className: `flex-1 rounded-xl border py-3 text-[14px] font-semibold transition-all min-h-[44px] ${p === T ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground active:border-foreground"}`,
                    children: T
                }, T))
            })]
        }), c.jsxs("button", {
            ref: E,
            disabled: !U,
            onClick: O,
            className: "h-12 w-full rounded-xl bg-primary text-[14px] font-bold text-primary-foreground transition-all active:scale-[0.98] disabled:opacity-40",
            children: ["Enviar respostas (+R$ ", je(l.reward), ")"]
        }), y && c.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in px-8",
            children: c.jsx("div", {
                className: "w-full max-w-[300px] rounded-3xl bg-white p-6 shadow-2xl animate-scale-in",
                children: v === "processing" ? c.jsxs("div", {
                    className: "flex flex-col items-center gap-3 py-4",
                    children: [c.jsx(PC, {
                        className: "h-7 w-7 animate-spin",
                        style: {
                            color: "hsl(145 63% 48%)"
                        }
                    }), c.jsx("p", {
                        className: "text-[13px] font-semibold text-gray-500",
                        children: x ? "Liberando pagamento..." : "Processando..."
                    })]
                }) : c.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [c.jsx("div", {
                        className: "flex h-14 w-14 items-center justify-center rounded-full",
                        style: {
                            background: "hsl(145 63% 93%)"
                        },
                        children: c.jsx("span", {
                            className: "text-2xl",
                            children: "🎁"
                        })
                    }), c.jsx("h3", {
                        className: "mt-4 text-lg font-extrabold",
                        style: {
                            color: "hsl(145 63% 48%)"
                        },
                        children: "Nova recompensa!"
                    }), c.jsx("p", {
                        className: "mt-1.5 text-[13px] text-gray-400",
                        children: "Você ganhou"
                    }), c.jsxs("p", {
                        className: "mt-3 text-[36px] font-black leading-none tracking-tight",
                        style: {
                            color: "hsl(145 63% 45%)"
                        },
                        children: ["R$ ", je(l.reward)]
                    }), c.jsxs("p", {
                        className: "mt-3 text-[12px] text-gray-400 leading-snug",
                        children: ["Avalie mais para ganhar até", " ", c.jsx("span", {
                            className: "whitespace-nowrap",
                            children: "R$831"
                        })]
                    }), c.jsx("button", {
                        onClick: M,
                        className: "mt-6 w-full rounded-2xl py-3.5 text-[15px] font-bold text-white transition-all active:scale-[0.97]",
                        style: {
                            background: "hsl(349 99% 58%)"
                        },
                        children: "Continuar avaliando"
                    })]
                })
            })
        })]
    })
}
;
var Kl = "focusScope.autoFocusOnMount"
  , Gl = "focusScope.autoFocusOnUnmount"
  , dm = {
    bubbles: !1,
    cancelable: !0
}
  , Yk = "FocusScope"
  , oy = d.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...a} = e
      , [i,l] = d.useState(null)
      , u = kt(o)
      , f = kt(s)
      , m = d.useRef(null)
      , g = ve(t, v => l(v))
      , p = d.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    d.useEffect( () => {
        if (r) {
            let v = function(x) {
                if (p.paused || !i)
                    return;
                const S = x.target;
                i.contains(S) ? m.current = S : bn(m.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (p.paused || !i)
                    return;
                const S = x.relatedTarget;
                S !== null && (i.contains(S) || bn(m.current, {
                    select: !0
                }))
            }
              , y = function(x) {
                if (document.activeElement === document.body)
                    for (const C of x)
                        C.removedNodes.length > 0 && bn(i)
            };
            document.addEventListener("focusin", v),
            document.addEventListener("focusout", w);
            const h = new MutationObserver(y);
            return i && h.observe(i, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", v),
                document.removeEventListener("focusout", w),
                h.disconnect()
            }
        }
    }
    , [r, i, p.paused]),
    d.useEffect( () => {
        if (i) {
            pm.add(p);
            const v = document.activeElement;
            if (!i.contains(v)) {
                const y = new CustomEvent(Kl,dm);
                i.addEventListener(Kl, u),
                i.dispatchEvent(y),
                y.defaultPrevented || (Xk(nj(sy(i)), {
                    select: !0
                }),
                document.activeElement === v && bn(i))
            }
            return () => {
                i.removeEventListener(Kl, u),
                setTimeout( () => {
                    const y = new CustomEvent(Gl,dm);
                    i.addEventListener(Gl, f),
                    i.dispatchEvent(y),
                    y.defaultPrevented || bn(v ?? document.body, {
                        select: !0
                    }),
                    i.removeEventListener(Gl, f),
                    pm.remove(p)
                }
                , 0)
            }
        }
    }
    , [i, u, f, p]);
    const b = d.useCallback(v => {
        if (!n && !r || p.paused)
            return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey
          , y = document.activeElement;
        if (w && y) {
            const h = v.currentTarget
              , [x,S] = Jk(h);
            x && S ? !v.shiftKey && y === S ? (v.preventDefault(),
            n && bn(x, {
                select: !0
            })) : v.shiftKey && y === x && (v.preventDefault(),
            n && bn(S, {
                select: !0
            })) : y === h && v.preventDefault()
        }
    }
    , [n, r, p.paused]);
    return c.jsx(J.div, {
        tabIndex: -1,
        ...a,
        ref: g,
        onKeyDown: b
    })
}
);
oy.displayName = Yk;
function Xk(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (bn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function Jk(e) {
    const t = sy(e)
      , n = fm(t, e)
      , r = fm(t.reverse(), e);
    return [n, r]
}
function sy(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function fm(e, t) {
    for (const n of e)
        if (!Zk(n, {
            upTo: t
        }))
            return n
}
function Zk(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function ej(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function bn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && ej(e) && t && e.select()
    }
}
var pm = tj();
function tj() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = mm(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = mm(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function mm(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function nj(e) {
    return e.filter(t => t.tagName !== "A")
}
var Ql = 0;
function rj() {
    d.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? hm()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? hm()),
        Ql++,
        () => {
            Ql === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            Ql--
        }
    }
    , [])
}
function hm() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var $t = function() {
    return $t = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    $t.apply(this, arguments)
};
function ay(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function oj(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var La = "right-scroll-bar-position"
  , Da = "width-before-scroll-bar"
  , sj = "with-scroll-bars-hidden"
  , aj = "--removed-body-scroll-bar-size";
function ql(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function ij(e, t) {
    var n = d.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var lj = typeof window < "u" ? d.useLayoutEffect : d.useEffect
  , gm = new WeakMap;
function cj(e, t) {
    var n = ij(null, function(r) {
        return e.forEach(function(o) {
            return ql(o, r)
        })
    });
    return lj(function() {
        var r = gm.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , a = n.current;
            o.forEach(function(i) {
                s.has(i) || ql(i, null)
            }),
            s.forEach(function(i) {
                o.has(i) || ql(i, a)
            })
        }
        gm.set(n, e)
    }, [e]),
    n
}
function uj(e) {
    return e
}
function dj(e, t) {
    t === void 0 && (t = uj);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var a = t(s, r);
            return n.push(a),
            function() {
                n = n.filter(function(i) {
                    return i !== a
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var a = n;
                n = [],
                a.forEach(s)
            }
            n = {
                push: function(i) {
                    return s(i)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var a = [];
            if (n.length) {
                var i = n;
                n = [],
                i.forEach(s),
                a = n
            }
            var l = function() {
                var f = a;
                a = [],
                f.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(f) {
                    a.push(f),
                    u()
                },
                filter: function(f) {
                    return a = a.filter(f),
                    n
                }
            }
        }
    };
    return o
}
function fj(e) {
    e === void 0 && (e = {});
    var t = dj(null);
    return t.options = $t({
        async: !0,
        ssr: !1
    }, e),
    t
}
var iy = function(e) {
    var t = e.sideCar
      , n = ay(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return d.createElement(r, $t({}, n))
};
iy.isSideCarExport = !0;
function pj(e, t) {
    return e.useMedium(t),
    iy
}
var ly = fj()
  , Yl = function() {}
  , tl = d.forwardRef(function(e, t) {
    var n = d.useRef(null)
      , r = d.useState({
        onScrollCapture: Yl,
        onWheelCapture: Yl,
        onTouchMoveCapture: Yl
    })
      , o = r[0]
      , s = r[1]
      , a = e.forwardProps
      , i = e.children
      , l = e.className
      , u = e.removeScrollBar
      , f = e.enabled
      , m = e.shards
      , g = e.sideCar
      , p = e.noRelative
      , b = e.noIsolation
      , v = e.inert
      , w = e.allowPinchZoom
      , y = e.as
      , h = y === void 0 ? "div" : y
      , x = e.gapMode
      , S = ay(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , C = g
      , E = cj([n, t])
      , N = $t($t({}, S), o);
    return d.createElement(d.Fragment, null, f && d.createElement(C, {
        sideCar: ly,
        removeScrollBar: u,
        shards: m,
        noRelative: p,
        noIsolation: b,
        inert: v,
        setCallbacks: s,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), a ? d.cloneElement(d.Children.only(i), $t($t({}, N), {
        ref: E
    })) : d.createElement(h, $t({}, N, {
        className: l,
        ref: E
    }), i))
});
tl.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
tl.classNames = {
    fullWidth: Da,
    zeroRight: La
};
var mj = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function hj() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = mj();
    return t && e.setAttribute("nonce", t),
    e
}
function gj(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function vj(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var yj = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = hj()) && (gj(t, n),
            vj(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , xj = function() {
    var e = yj();
    return function(t, n) {
        d.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , cy = function() {
    var e = xj()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , wj = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Xl = function(e) {
    return parseInt(e || "", 10) || 0
}
  , bj = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Xl(n), Xl(r), Xl(o)]
}
  , Sj = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return wj;
    var t = bj(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , Cj = cy()
  , lo = "data-scroll-locked"
  , Ej = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , a = e.right
      , i = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(sj, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(lo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(La, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Da, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(La, " .").concat(La, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Da, " .").concat(Da, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(lo, `] {
    `).concat(aj, ": ").concat(i, `px;
  }
`)
}
  , vm = function() {
    var e = parseInt(document.body.getAttribute(lo) || "0", 10);
    return isFinite(e) ? e : 0
}
  , Nj = function() {
    d.useEffect(function() {
        return document.body.setAttribute(lo, (vm() + 1).toString()),
        function() {
            var e = vm() - 1;
            e <= 0 ? document.body.removeAttribute(lo) : document.body.setAttribute(lo, e.toString())
        }
    }, [])
}
  , kj = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    Nj();
    var s = d.useMemo(function() {
        return Sj(o)
    }, [o]);
    return d.createElement(Cj, {
        styles: Ej(s, !t, o, n ? "" : "!important")
    })
}
  , pu = !1;
if (typeof window < "u")
    try {
        var ga = Object.defineProperty({}, "passive", {
            get: function() {
                return pu = !0,
                !0
            }
        });
        window.addEventListener("test", ga, ga),
        window.removeEventListener("test", ga, ga)
    } catch {
        pu = !1
    }
var Dr = pu ? {
    passive: !1
} : !1
  , jj = function(e) {
    return e.tagName === "TEXTAREA"
}
  , uy = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !jj(e) && n[t] === "visible")
}
  , Pj = function(e) {
    return uy(e, "overflowY")
}
  , Rj = function(e) {
    return uy(e, "overflowX")
}
  , ym = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = dy(e, r);
        if (o) {
            var s = fy(e, r)
              , a = s[1]
              , i = s[2];
            if (a > i)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , Tj = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , Aj = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , dy = function(e, t) {
    return e === "v" ? Pj(t) : Rj(t)
}
  , fy = function(e, t) {
    return e === "v" ? Tj(t) : Aj(t)
}
  , _j = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , Mj = function(e, t, n, r, o) {
    var s = _j(e, window.getComputedStyle(t).direction)
      , a = s * r
      , i = n.target
      , l = t.contains(i)
      , u = !1
      , f = a > 0
      , m = 0
      , g = 0;
    do {
        if (!i)
            break;
        var p = fy(e, i)
          , b = p[0]
          , v = p[1]
          , w = p[2]
          , y = v - w - s * b;
        (b || y) && dy(e, i) && (m += y,
        g += b);
        var h = i.parentNode;
        i = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h
    } while (!l && i !== document.body || l && (t.contains(i) || t === i));
    return (f && (Math.abs(m) < 1 || !o) || !f && (Math.abs(g) < 1 || !o)) && (u = !0),
    u
}
  , va = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , xm = function(e) {
    return [e.deltaX, e.deltaY]
}
  , wm = function(e) {
    return e && "current"in e ? e.current : e
}
  , Oj = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , Ij = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , Lj = 0
  , Fr = [];
function Dj(e) {
    var t = d.useRef([])
      , n = d.useRef([0, 0])
      , r = d.useRef()
      , o = d.useState(Lj++)[0]
      , s = d.useState(cy)[0]
      , a = d.useRef(e);
    d.useEffect(function() {
        a.current = e
    }, [e]),
    d.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var v = oj([e.lockRef.current], (e.shards || []).map(wm), !0).filter(Boolean);
            return v.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var i = d.useCallback(function(v, w) {
        if ("touches"in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
            return !a.current.allowPinchZoom;
        var y = va(v), h = n.current, x = "deltaX"in v ? v.deltaX : h[0] - y[0], S = "deltaY"in v ? v.deltaY : h[1] - y[1], C, E = v.target, N = Math.abs(x) > Math.abs(S) ? "h" : "v";
        if ("touches"in v && N === "h" && E.type === "range")
            return !1;
        var k = ym(N, E);
        if (!k)
            return !0;
        if (k ? C = N : (C = N === "v" ? "h" : "v",
        k = ym(N, E)),
        !k)
            return !1;
        if (!r.current && "changedTouches"in v && (x || S) && (r.current = C),
        !C)
            return !0;
        var O = r.current || C;
        return Mj(O, w, v, O === "h" ? x : S, !0)
    }, [])
      , l = d.useCallback(function(v) {
        var w = v;
        if (!(!Fr.length || Fr[Fr.length - 1] !== s)) {
            var y = "deltaY"in w ? xm(w) : va(w)
              , h = t.current.filter(function(C) {
                return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && Oj(C.delta, y)
            })[0];
            if (h && h.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!h) {
                var x = (a.current.shards || []).map(wm).filter(Boolean).filter(function(C) {
                    return C.contains(w.target)
                })
                  , S = x.length > 0 ? i(w, x[0]) : !a.current.noIsolation;
                S && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = d.useCallback(function(v, w, y, h) {
        var x = {
            name: v,
            delta: w,
            target: y,
            should: h,
            shadowParent: Fj(y)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(S) {
                return S !== x
            })
        }, 1)
    }, [])
      , f = d.useCallback(function(v) {
        n.current = va(v),
        r.current = void 0
    }, [])
      , m = d.useCallback(function(v) {
        u(v.type, xm(v), v.target, i(v, e.lockRef.current))
    }, [])
      , g = d.useCallback(function(v) {
        u(v.type, va(v), v.target, i(v, e.lockRef.current))
    }, []);
    d.useEffect(function() {
        return Fr.push(s),
        e.setCallbacks({
            onScrollCapture: m,
            onWheelCapture: m,
            onTouchMoveCapture: g
        }),
        document.addEventListener("wheel", l, Dr),
        document.addEventListener("touchmove", l, Dr),
        document.addEventListener("touchstart", f, Dr),
        function() {
            Fr = Fr.filter(function(v) {
                return v !== s
            }),
            document.removeEventListener("wheel", l, Dr),
            document.removeEventListener("touchmove", l, Dr),
            document.removeEventListener("touchstart", f, Dr)
        }
    }, []);
    var p = e.removeScrollBar
      , b = e.inert;
    return d.createElement(d.Fragment, null, b ? d.createElement(s, {
        styles: Ij(o)
    }) : null, p ? d.createElement(kj, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function Fj(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const $j = pj(ly, Dj);
var py = d.forwardRef(function(e, t) {
    return d.createElement(tl, $t({}, e, {
        ref: t,
        sideCar: $j
    }))
});
py.classNames = tl.classNames;
var zj = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , $r = new WeakMap
  , ya = new WeakMap
  , xa = {}
  , Jl = 0
  , my = function(e) {
    return e && (e.host || my(e.parentNode))
}
  , Bj = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = my(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , Uj = function(e, t, n, r) {
    var o = Bj(t, Array.isArray(e) ? e : [e]);
    xa[n] || (xa[n] = new WeakMap);
    var s = xa[n]
      , a = []
      , i = new Set
      , l = new Set(o)
      , u = function(m) {
        !m || i.has(m) || (i.add(m),
        u(m.parentNode))
    };
    o.forEach(u);
    var f = function(m) {
        !m || l.has(m) || Array.prototype.forEach.call(m.children, function(g) {
            if (i.has(g))
                f(g);
            else
                try {
                    var p = g.getAttribute(r)
                      , b = p !== null && p !== "false"
                      , v = ($r.get(g) || 0) + 1
                      , w = (s.get(g) || 0) + 1;
                    $r.set(g, v),
                    s.set(g, w),
                    a.push(g),
                    v === 1 && b && ya.set(g, !0),
                    w === 1 && g.setAttribute(n, "true"),
                    b || g.setAttribute(r, "true")
                } catch (y) {
                    console.error("aria-hidden: cannot operate on ", g, y)
                }
        })
    };
    return f(t),
    i.clear(),
    Jl++,
    function() {
        a.forEach(function(m) {
            var g = $r.get(m) - 1
              , p = s.get(m) - 1;
            $r.set(m, g),
            s.set(m, p),
            g || (ya.has(m) || m.removeAttribute(r),
            ya.delete(m)),
            p || m.removeAttribute(n)
        }),
        Jl--,
        Jl || ($r = new WeakMap,
        $r = new WeakMap,
        ya = new WeakMap,
        xa = {})
    }
}
  , Vj = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = zj(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    Uj(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , nl = "Dialog"
  , [hy,iT] = Rt(nl)
  , [Wj,Tt] = hy(nl)
  , gy = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: a=!0} = e
      , i = d.useRef(null)
      , l = d.useRef(null)
      , [u,f] = kr({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: nl
    });
    return c.jsx(Wj, {
        scope: t,
        triggerRef: i,
        contentRef: l,
        contentId: ao(),
        titleId: ao(),
        descriptionId: ao(),
        open: u,
        onOpenChange: f,
        onOpenToggle: d.useCallback( () => f(m => !m), [f]),
        modal: a,
        children: n
    })
}
;
gy.displayName = nl;
var vy = "DialogTrigger"
  , Hj = d.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(vy, n)
      , s = ve(t, o.triggerRef);
    return c.jsx(J.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Kd(o.open),
        ...r,
        ref: s,
        onClick: X(e.onClick, o.onOpenToggle)
    })
}
);
Hj.displayName = vy;
var Wd = "DialogPortal"
  , [Kj,yy] = hy(Wd, {
    forceMount: void 0
})
  , xy = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , s = Tt(Wd, t);
    return c.jsx(Kj, {
        scope: t,
        forceMount: n,
        children: d.Children.map(r, a => c.jsx(Xn, {
            present: n || s.open,
            children: c.jsx(wd, {
                asChild: !0,
                container: o,
                children: a
            })
        }))
    })
}
;
xy.displayName = Wd;
var yi = "DialogOverlay"
  , wy = d.forwardRef( (e, t) => {
    const n = yy(yi, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = Tt(yi, e.__scopeDialog);
    return s.modal ? c.jsx(Xn, {
        present: r || s.open,
        children: c.jsx(Qj, {
            ...o,
            ref: t
        })
    }) : null
}
);
wy.displayName = yi;
var Gj = fi("DialogOverlay.RemoveScroll")
  , Qj = d.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(yi, n);
    return c.jsx(py, {
        as: Gj,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: c.jsx(J.div, {
            "data-state": Kd(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , Sr = "DialogContent"
  , by = d.forwardRef( (e, t) => {
    const n = yy(Sr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = Tt(Sr, e.__scopeDialog);
    return c.jsx(Xn, {
        present: r || s.open,
        children: s.modal ? c.jsx(qj, {
            ...o,
            ref: t
        }) : c.jsx(Yj, {
            ...o,
            ref: t
        })
    })
}
);
by.displayName = Sr;
var qj = d.forwardRef( (e, t) => {
    const n = Tt(Sr, e.__scopeDialog)
      , r = d.useRef(null)
      , o = ve(t, n.contentRef, r);
    return d.useEffect( () => {
        const s = r.current;
        if (s)
            return Vj(s)
    }
    , []),
    c.jsx(Sy, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, s => {
            var a;
            s.preventDefault(),
            (a = n.triggerRef.current) == null || a.focus()
        }
        ),
        onPointerDownOutside: X(e.onPointerDownOutside, s => {
            const a = s.detail.originalEvent
              , i = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || i) && s.preventDefault()
        }
        ),
        onFocusOutside: X(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , Yj = d.forwardRef( (e, t) => {
    const n = Tt(Sr, e.__scopeDialog)
      , r = d.useRef(!1)
      , o = d.useRef(!1);
    return c.jsx(Sy, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var a, i;
            (a = e.onCloseAutoFocus) == null || a.call(e, s),
            s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const a = s.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , Sy = d.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a} = e
      , i = Tt(Sr, n)
      , l = d.useRef(null)
      , u = ve(t, l);
    return rj(),
    c.jsxs(c.Fragment, {
        children: [c.jsx(oy, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: c.jsx(Wi, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Kd(i.open),
                ...a,
                ref: u,
                onDismiss: () => i.onOpenChange(!1)
            })
        }), c.jsxs(c.Fragment, {
            children: [c.jsx(Xj, {
                titleId: i.titleId
            }), c.jsx(Zj, {
                contentRef: l,
                descriptionId: i.descriptionId
            })]
        })]
    })
}
)
  , Hd = "DialogTitle"
  , Cy = d.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(Hd, n);
    return c.jsx(J.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
Cy.displayName = Hd;
var Ey = "DialogDescription"
  , Ny = d.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(Ey, n);
    return c.jsx(J.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
Ny.displayName = Ey;
var ky = "DialogClose"
  , jy = d.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(ky, n);
    return c.jsx(J.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
    })
}
);
jy.displayName = ky;
function Kd(e) {
    return e ? "open" : "closed"
}
var Py = "DialogTitleWarning"
  , [lT,Ry] = C2(Py, {
    contentName: Sr,
    titleName: Hd,
    docsSlug: "dialog"
})
  , Xj = ({titleId: e}) => {
    const t = Ry(Py)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return d.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , Jj = "DialogDescriptionWarning"
  , Zj = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ry(Jj).contentName}}.`;
    return d.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , eP = gy
  , tP = xy
  , Ty = wy
  , Ay = by
  , _y = Cy
  , My = Ny
  , nP = jy;
const mu = eP
  , rP = tP
  , Oy = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Ty, {
    ref: n,
    className: be("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
Oy.displayName = Ty.displayName;
const xi = d.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(rP, {
    children: [c.jsx(Oy, {}), c.jsxs(Ay, {
        ref: r,
        className: be("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, c.jsxs(nP, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [c.jsx(n0, {
                className: "h-4 w-4"
            }), c.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
xi.displayName = Ay.displayName;
const hu = ({className: e, ...t}) => c.jsx("div", {
    className: be("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
hu.displayName = "DialogHeader";
const wi = d.forwardRef( ({className: e, ...t}, n) => c.jsx(_y, {
    ref: n,
    className: be("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
wi.displayName = _y.displayName;
const Iy = d.forwardRef( ({className: e, ...t}, n) => c.jsx(My, {
    ref: n,
    className: be("text-sm text-muted-foreground", e),
    ...t
}));
Iy.displayName = My.displayName;
const gu = d.forwardRef( ({className: e, type: t, ...n}, r) => c.jsx("input", {
    type: t,
    className: be("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
gu.displayName = "Input";
var oP = "Label"
  , Ly = d.forwardRef( (e, t) => c.jsx(J.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var o;
        n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
Ly.displayName = oP;
var Dy = Ly;
const sP = Yv("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , Fa = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Dy, {
    ref: n,
    className: be(sP(), e),
    ...t
}));
Fa.displayName = Dy.displayName;
var aP = d.createContext(void 0);
function Gd(e) {
    const t = d.useContext(aP);
    return e || t || "ltr"
}
var Zl = "rovingFocusGroup.onEntryFocus"
  , iP = {
    bubbles: !1,
    cancelable: !0
}
  , Us = "RovingFocusGroup"
  , [vu,Fy,lP] = xd(Us)
  , [cP,$y] = Rt(Us, [lP])
  , [uP,dP] = cP(Us)
  , zy = d.forwardRef( (e, t) => c.jsx(vu.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: c.jsx(vu.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: c.jsx(fP, {
            ...e,
            ref: t
        })
    })
}));
zy.displayName = Us;
var fP = d.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: s, currentTabStopId: a, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: f=!1, ...m} = e
      , g = d.useRef(null)
      , p = ve(t, g)
      , b = Gd(s)
      , [v,w] = kr({
        prop: a,
        defaultProp: i ?? null,
        onChange: l,
        caller: Us
    })
      , [y,h] = d.useState(!1)
      , x = kt(u)
      , S = Fy(n)
      , C = d.useRef(!1)
      , [E,N] = d.useState(0);
    return d.useEffect( () => {
        const k = g.current;
        if (k)
            return k.addEventListener(Zl, x),
            () => k.removeEventListener(Zl, x)
    }
    , [x]),
    c.jsx(uP, {
        scope: n,
        orientation: r,
        dir: b,
        loop: o,
        currentTabStopId: v,
        onItemFocus: d.useCallback(k => w(k), [w]),
        onItemShiftTab: d.useCallback( () => h(!0), []),
        onFocusableItemAdd: d.useCallback( () => N(k => k + 1), []),
        onFocusableItemRemove: d.useCallback( () => N(k => k - 1), []),
        children: c.jsx(J.div, {
            tabIndex: y || E === 0 ? -1 : 0,
            "data-orientation": r,
            ...m,
            ref: p,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: X(e.onMouseDown, () => {
                C.current = !0
            }
            ),
            onFocus: X(e.onFocus, k => {
                const O = !C.current;
                if (k.target === k.currentTarget && O && !y) {
                    const M = new CustomEvent(Zl,iP);
                    if (k.currentTarget.dispatchEvent(M),
                    !M.defaultPrevented) {
                        const $ = S().filter(L => L.focusable)
                          , I = $.find(L => L.active)
                          , U = $.find(L => L.id === v)
                          , V = [I, U, ...$].filter(Boolean).map(L => L.ref.current);
                        Vy(V, f)
                    }
                }
                C.current = !1
            }
            ),
            onBlur: X(e.onBlur, () => h(!1))
        })
    })
}
)
  , By = "RovingFocusGroupItem"
  , Uy = d.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: s, children: a, ...i} = e
      , l = ao()
      , u = s || l
      , f = dP(By, n)
      , m = f.currentTabStopId === u
      , g = Fy(n)
      , {onFocusableItemAdd: p, onFocusableItemRemove: b, currentTabStopId: v} = f;
    return d.useEffect( () => {
        if (r)
            return p(),
            () => b()
    }
    , [r, p, b]),
    c.jsx(vu.ItemSlot, {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: c.jsx(J.span, {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: X(e.onMouseDown, w => {
                r ? f.onItemFocus(u) : w.preventDefault()
            }
            ),
            onFocus: X(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: X(e.onKeyDown, w => {
                if (w.key === "Tab" && w.shiftKey) {
                    f.onItemShiftTab();
                    return
                }
                if (w.target !== w.currentTarget)
                    return;
                const y = hP(w, f.orientation, f.dir);
                if (y !== void 0) {
                    if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey)
                        return;
                    w.preventDefault();
                    let x = g().filter(S => S.focusable).map(S => S.ref.current);
                    if (y === "last")
                        x.reverse();
                    else if (y === "prev" || y === "next") {
                        y === "prev" && x.reverse();
                        const S = x.indexOf(w.currentTarget);
                        x = f.loop ? gP(x, S + 1) : x.slice(S + 1)
                    }
                    setTimeout( () => Vy(x))
                }
            }
            ),
            children: typeof a == "function" ? a({
                isCurrentTabStop: m,
                hasTabStop: v != null
            }) : a
        })
    })
}
);
Uy.displayName = By;
var pP = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function mP(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function hP(e, t, n) {
    const r = mP(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return pP[r]
}
function Vy(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function gP(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var vP = zy
  , yP = Uy;
function xP(e) {
    const t = d.useRef({
        value: e,
        previous: e
    });
    return d.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var Qd = "Radio"
  , [wP,Wy] = Rt(Qd)
  , [bP,SP] = wP(Qd)
  , Hy = d.forwardRef( (e, t) => {
    const {__scopeRadio: n, name: r, checked: o=!1, required: s, disabled: a, value: i="on", onCheck: l, form: u, ...f} = e
      , [m,g] = d.useState(null)
      , p = ve(t, w => g(w))
      , b = d.useRef(!1)
      , v = m ? u || !!m.closest("form") : !0;
    return c.jsxs(bP, {
        scope: n,
        checked: o,
        disabled: a,
        children: [c.jsx(J.button, {
            type: "button",
            role: "radio",
            "aria-checked": o,
            "data-state": qy(o),
            "data-disabled": a ? "" : void 0,
            disabled: a,
            value: i,
            ...f,
            ref: p,
            onClick: X(e.onClick, w => {
                o || l == null || l(),
                v && (b.current = w.isPropagationStopped(),
                b.current || w.stopPropagation())
            }
            )
        }), v && c.jsx(Qy, {
            control: m,
            bubbles: !b.current,
            name: r,
            value: i,
            checked: o,
            required: s,
            disabled: a,
            form: u,
            style: {
                transform: "translateX(-100%)"
            }
        })]
    })
}
);
Hy.displayName = Qd;
var Ky = "RadioIndicator"
  , Gy = d.forwardRef( (e, t) => {
    const {__scopeRadio: n, forceMount: r, ...o} = e
      , s = SP(Ky, n);
    return c.jsx(Xn, {
        present: r || s.checked,
        children: c.jsx(J.span, {
            "data-state": qy(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...o,
            ref: t
        })
    })
}
);
Gy.displayName = Ky;
var CP = "RadioBubbleInput"
  , Qy = d.forwardRef( ({__scopeRadio: e, control: t, checked: n, bubbles: r=!0, ...o}, s) => {
    const a = d.useRef(null)
      , i = ve(a, s)
      , l = xP(n)
      , u = N0(t);
    return d.useEffect( () => {
        const f = a.current;
        if (!f)
            return;
        const m = window.HTMLInputElement.prototype
          , p = Object.getOwnPropertyDescriptor(m, "checked").set;
        if (l !== n && p) {
            const b = new Event("click",{
                bubbles: r
            });
            p.call(f, n),
            f.dispatchEvent(b)
        }
    }
    , [l, n, r]),
    c.jsx(J.input, {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
        style: {
            ...o.style,
            ...u,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
}
);
Qy.displayName = CP;
function qy(e) {
    return e ? "checked" : "unchecked"
}
var EP = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  , rl = "RadioGroup"
  , [NP,cT] = Rt(rl, [$y, Wy])
  , Yy = $y()
  , Xy = Wy()
  , [kP,jP] = NP(rl)
  , Jy = d.forwardRef( (e, t) => {
    const {__scopeRadioGroup: n, name: r, defaultValue: o, value: s, required: a=!1, disabled: i=!1, orientation: l, dir: u, loop: f=!0, onValueChange: m, ...g} = e
      , p = Yy(n)
      , b = Gd(u)
      , [v,w] = kr({
        prop: s,
        defaultProp: o ?? null,
        onChange: m,
        caller: rl
    });
    return c.jsx(kP, {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: v,
        onValueChange: w,
        children: c.jsx(vP, {
            asChild: !0,
            ...p,
            orientation: l,
            dir: b,
            loop: f,
            children: c.jsx(J.div, {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": l,
                "data-disabled": i ? "" : void 0,
                dir: b,
                ...g,
                ref: t
            })
        })
    })
}
);
Jy.displayName = rl;
var Zy = "RadioGroupItem"
  , ex = d.forwardRef( (e, t) => {
    const {__scopeRadioGroup: n, disabled: r, ...o} = e
      , s = jP(Zy, n)
      , a = s.disabled || r
      , i = Yy(n)
      , l = Xy(n)
      , u = d.useRef(null)
      , f = ve(t, u)
      , m = s.value === o.value
      , g = d.useRef(!1);
    return d.useEffect( () => {
        const p = v => {
            EP.includes(v.key) && (g.current = !0)
        }
          , b = () => g.current = !1;
        return document.addEventListener("keydown", p),
        document.addEventListener("keyup", b),
        () => {
            document.removeEventListener("keydown", p),
            document.removeEventListener("keyup", b)
        }
    }
    , []),
    c.jsx(yP, {
        asChild: !0,
        ...i,
        focusable: !a,
        active: m,
        children: c.jsx(Hy, {
            disabled: a,
            required: s.required,
            checked: m,
            ...l,
            ...o,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: X(p => {
                p.key === "Enter" && p.preventDefault()
            }
            ),
            onFocus: X(o.onFocus, () => {
                var p;
                g.current && ((p = u.current) == null || p.click())
            }
            )
        })
    })
}
);
ex.displayName = Zy;
var PP = "RadioGroupIndicator"
  , tx = d.forwardRef( (e, t) => {
    const {__scopeRadioGroup: n, ...r} = e
      , o = Xy(n);
    return c.jsx(Gy, {
        ...o,
        ...r,
        ref: t
    })
}
);
tx.displayName = PP;
var nx = Jy
  , rx = ex
  , RP = tx;
const ox = d.forwardRef( ({className: e, ...t}, n) => c.jsx(nx, {
    className: be("grid gap-2", e),
    ...t,
    ref: n
}));
ox.displayName = nx.displayName;
const sx = d.forwardRef( ({className: e, ...t}, n) => c.jsx(rx, {
    ref: n,
    className: be("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ...t,
    children: c.jsx(RP, {
        className: "flex items-center justify-center",
        children: c.jsx(EC, {
            className: "h-2.5 w-2.5 fill-current text-current"
        })
    })
}));
sx.displayName = rx.displayName;
const bi = () => typeof window < "u" ? window.ttq : void 0
  , TP = () => `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
function Ts(e, t={}) {
    var n;
    try {
        (n = bi()) == null || n.track(e, t, {
            event_id: TP()
        })
    } catch {}
}
function AP(e) {
    var t;
    if (!(!e || !Object.keys(e).length))
        try {
            (t = bi()) == null || t.identify(e)
        } catch {}
}
function _P() {
    const e = {};
    try {
        const t = localStorage.getItem("pixData");
        if (!t)
            return e;
        const n = JSON.parse(t);
        if (n.keyType === "email" && n.pixKey) {
            const r = String(n.pixKey).trim();
            r && (e.email = r)
        }
        if (n.keyType === "phone" && n.pixKey) {
            const r = String(n.pixKey).replace(/\D/g, "");
            r.length >= 10 && (e.phone_number = "+55" + r)
        }
        if (n.fullName) {
            const r = String(n.fullName).trim();
            r && (e.external_id = r)
        }
    } catch {}
    return e
}
function MP(e) {
    var r, o;
    const t = _P()
      , n = Object.keys(t).length > 0;
    try {
        n && ((r = bi()) == null || r.identify(t))
    } catch {}
    try {
        (o = bi()) == null || o.page()
    } catch {}
    Ts("ViewContent", {
        page_path: e,
        content_id: e
    })
}
const bm = [{
    value: "cpf",
    label: "CPF"
}, {
    value: "email",
    label: "E-mail"
}, {
    value: "phone",
    label: "Celular"
}, {
    value: "random",
    label: "Chave aleatória"
}];
function OP(e) {
    const t = e.replace(/\D/g, "").slice(0, 11);
    return t.length <= 3 ? t : t.length <= 6 ? `${t.slice(0, 3)}.${t.slice(3)}` : t.length <= 9 ? `${t.slice(0, 3)}.${t.slice(3, 6)}.${t.slice(6)}` : `${t.slice(0, 3)}.${t.slice(3, 6)}.${t.slice(6, 9)}-${t.slice(9)}`
}
function IP(e) {
    const t = e.replace(/\D/g, "").slice(0, 11);
    return t.length <= 2 ? t.length ? `(${t}` : "" : t.length <= 7 ? `(${t.slice(0, 2)}) ${t.slice(2)}` : `(${t.slice(0, 2)}) ${t.slice(2, 7)}-${t.slice(7)}`
}
function LP(e) {
    const t = e.replace(/\D/g, "");
    if (t.length !== 11 || /^(\d)\1{10}$/.test(t))
        return !1;
    let n = 0;
    for (let o = 0; o < 9; o++)
        n += parseInt(t[o]) * (10 - o);
    let r = n * 10 % 11;
    if (r === 10 && (r = 0),
    r !== parseInt(t[9]))
        return !1;
    n = 0;
    for (let o = 0; o < 10; o++)
        n += parseInt(t[o]) * (11 - o);
    return r = n * 10 % 11,
    r === 10 && (r = 0),
    r === parseInt(t[10])
}
function DP(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.trim())
}
function FP(e) {
    return e.replace(/\D/g, "").length === 11
}
function $P(e) {
    return e.trim().length >= 20
}
const zP = {
    cpf: {
        placeholder: "000.000.000-00",
        mask: OP,
        validate: LP,
        error: "Digite um CPF válido",
        inputMode: "numeric"
    },
    email: {
        placeholder: "seuemail@exemplo.com",
        validate: DP,
        error: "Digite um e-mail válido",
        inputMode: "email"
    },
    phone: {
        placeholder: "(00) 00000-0000",
        mask: IP,
        validate: FP,
        error: "Digite um número de celular válido",
        inputMode: "tel"
    },
    random: {
        placeholder: "Cole sua chave aleatória",
        validate: $P,
        error: "Digite uma chave aleatória válida"
    }
}
  , BP = ({open: e, onOpenChange: t}) => {
    const n = Yn()
      , [r,o] = d.useState("")
      , [s,a] = d.useState("")
      , [i,l] = d.useState("")
      , [u,f] = d.useState(!1)
      , [m,g] = d.useState("form")
      , p = s ? zP[s] : null
      , b = d.useMemo( () => p ? p.validate(i) : !1, [p, i])
      , v = u && i.length > 0 && !b
      , w = r.trim() && s && b
      , y = d.useCallback(E => {
        const N = E.target.value;
        l(p != null && p.mask ? p.mask(N) : N)
    }
    , [p])
      , h = d.useCallback(E => {
        a(E),
        l(""),
        f(!1),
        g("form")
    }
    , [])
      , x = () => {
        if (!w)
            return;
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
        const E = {};
        s === "email" && (E.email = i.trim()),
        s === "phone" && (E.phone_number = "+55" + i.replace(/\D/g, "")),
        r.trim() && (E.external_id = r.trim()),
        AP(E),
        Ts("SubmitForm", {
            form: "pix"
        }),
        localStorage.setItem("pixData", JSON.stringify({
            fullName: r,
            keyType: s,
            pixKey: i
        })),
        t(!1),
        o(""),
        a(""),
        l(""),
        f(!1),
        g("form"),
        window.setTimeout( () => {
            n("/withdraw-processing")
        }
        , 120)
    }
      , S = () => {
        var E;
        return ((E = bm.find(N => N.value === s)) == null ? void 0 : E.label) || "Selecionar tipo"
    }
    ;
    if (m === "keyType")
        return c.jsx(mu, {
            open: e,
            onOpenChange: t,
            children: c.jsxs(xi, {
                className: "mx-auto max-w-[340px] rounded-2xl border-0 bg-card p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)]",
                children: [c.jsx(hu, {
                    children: c.jsx(wi, {
                        className: "text-center text-[15px] font-bold text-foreground",
                        children: "Tipo de chave Pix"
                    })
                }), c.jsx(ox, {
                    value: s,
                    onValueChange: h,
                    className: "mt-2 space-y-1",
                    children: bm.map(E => c.jsxs("label", {
                        className: "flex cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-3 transition-all hover:bg-secondary/50 data-[state=checked]:border-primary",
                        children: [c.jsx(sx, {
                            value: E.value
                        }), c.jsx("span", {
                            className: "text-sm font-medium text-foreground",
                            children: E.label
                        })]
                    }, E.value))
                })]
            })
        });
    const C = v ? "border-destructive focus-visible:ring-destructive/30" : b && i.length > 0 ? "border-success focus-visible:ring-success/30" : "border-border";
    return c.jsx(mu, {
        open: e,
        onOpenChange: t,
        children: c.jsxs(xi, {
            className: "mx-auto max-w-[340px] rounded-2xl border-0 bg-card p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)]",
            children: [c.jsx(hu, {
                children: c.jsx(wi, {
                    className: "text-center text-[15px] font-bold text-foreground",
                    children: "Vincular PIX"
                })
            }), c.jsxs("div", {
                className: "mt-2 space-y-4",
                children: [c.jsxs("div", {
                    className: "space-y-1.5",
                    children: [c.jsx(Fa, {
                        className: "text-xs text-muted-foreground",
                        children: "Nome completo"
                    }), c.jsx(gu, {
                        value: r,
                        onChange: E => o(E.target.value),
                        placeholder: "Seu nome completo",
                        className: "h-11 rounded-xl border-border bg-secondary/30 text-base sm:text-sm"
                    })]
                }), c.jsxs("div", {
                    className: "space-y-1.5",
                    children: [c.jsx(Fa, {
                        className: "text-xs text-muted-foreground",
                        children: "Tipo de chave Pix"
                    }), c.jsxs("button", {
                        onClick: () => g("keyType"),
                        className: "flex h-11 w-full items-center justify-between rounded-xl border border-border bg-secondary/30 px-3 text-sm transition-all hover:border-muted-foreground/30",
                        children: [c.jsx("span", {
                            className: s ? "text-foreground" : "text-muted-foreground",
                            children: S()
                        }), c.jsx("svg", {
                            className: "h-4 w-4 text-muted-foreground",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: c.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M19 9l-7 7-7-7"
                            })
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "space-y-1.5",
                    children: [c.jsx(Fa, {
                        className: "text-xs text-muted-foreground",
                        children: "Chave Pix"
                    }), c.jsxs("div", {
                        className: "relative",
                        children: [c.jsx(gu, {
                            value: i,
                            onChange: y,
                            onBlur: () => f(!0),
                            placeholder: (p == null ? void 0 : p.placeholder) || "Digite sua chave Pix",
                            inputMode: p == null ? void 0 : p.inputMode,
                            className: `h-11 rounded-xl bg-secondary/30 pr-9 text-base transition-colors sm:text-sm ${C}`
                        }), b && i.length > 0 && c.jsx(jr, {
                            className: "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-success"
                        })]
                    }), v && c.jsx("p", {
                        className: "text-[11px] text-destructive animate-fade-in",
                        children: p == null ? void 0 : p.error
                    })]
                }), c.jsx("button", {
                    onClick: x,
                    disabled: !w,
                    className: "w-full rounded-xl py-3 text-[13px] font-bold transition-all active:scale-[0.97] disabled:opacity-50 disabled:active:scale-100",
                    style: {
                        backgroundColor: w ? "hsl(348, 99%, 58%)" : "hsl(0, 0%, 80%)",
                        color: w ? "white" : "hsl(0, 0%, 50%)"
                    },
                    children: "Enviar"
                })]
            })]
        })
    })
}
  , UP = () => {
    const {balance: e, evaluationsToday: t} = Pr()
      , [n,r] = d.useState(null)
      , [o,s] = d.useState(!1)
      , a = t < 9
      , i = [1.5, 5, 10];
    return c.jsxs(c.Fragment, {
        children: [c.jsxs("div", {
            className: `mb-6 rounded-xl border border-border bg-card p-4 transition-opacity ${a ? "opacity-70" : ""}`,
            children: [c.jsxs("div", {
                className: "mb-4",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a ? c.jsx(RC, {
                        className: "h-4 w-4 text-muted-foreground"
                    }) : c.jsx(Zv, {
                        className: "h-4 w-4 text-muted-foreground"
                    }), c.jsx("h3", {
                        className: "text-sm font-semibold text-foreground",
                        children: "Sacar dinheiro"
                    })]
                }), c.jsx("p", {
                    className: "mt-0.5 text-xs text-muted-foreground",
                    children: a ? `Complete mais ${8 - t} avaliações para poder sacar` : "Transferência via Pix"
                })]
            }), c.jsx("div", {
                className: "mb-4 flex gap-2",
                children: i.map(l => c.jsxs("button", {
                    disabled: a,
                    onClick: () => {
                        hr(),
                        r(n === l ? null : l)
                    }
                    ,
                    className: `flex-1 rounded-lg py-2 text-xs font-medium transition-all ${a ? "cursor-not-allowed border border-border bg-secondary/30 text-muted-foreground" : n === l ? "border border-primary bg-primary/10 text-primary" : "border border-border bg-secondary/50 text-foreground"}`,
                    children: ["R$ ", je(l)]
                }, l))
            }), c.jsx("button", {
                type: "button",
                disabled: a,
                onClick: () => r(e),
                className: `mb-4 w-full rounded-lg px-4 py-3 text-center transition-all ${a ? "cursor-not-allowed border border-border bg-secondary/30 text-muted-foreground" : n === e || n === null ? "border-2 border-primary bg-primary/5 text-foreground" : "border border-border bg-secondary/30 text-foreground"}`,
                children: c.jsxs("span", {
                    className: `text-sm font-medium ${n === e || n === null ? "text-primary" : "text-foreground"}`,
                    children: ["R$ ", je(e)]
                })
            }), c.jsx("button", {
                disabled: a,
                onClick: () => {
                    el(),
                    s(!0)
                }
                ,
                className: `w-full rounded-xl py-3 text-[13px] font-bold transition-all active:scale-[0.97] ${a ? "cursor-not-allowed bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"}`,
                children: a ? "Bloqueado" : "Sacar dinheiro"
            }), c.jsxs("p", {
                className: "mt-3 text-center text-[10px] leading-relaxed text-muted-foreground",
                children: ["Para sacar dinheiro, você precisa de um saldo mínimo de R$1,50.", c.jsx("br", {}), "Os limites de saque podem variar conforme o país ou região."]
            })]
        }), c.jsx(BP, {
            open: o,
            onOpenChange: s
        })]
    })
}
  , Sm = ["João", "Maria", "Lucas", "Ana", "Pedro", "Juliana", "Carlos", "Fernanda", "Rafael", "Beatriz", "Gustavo", "Larissa", "Bruno", "Camila", "Thiago", "Amanda", "Felipe", "Patrícia", "Diego", "Mariana", "André", "Gabriela", "Rodrigo", "Isabela", "Vinícius", "Letícia", "Matheus", "Renata", "Daniel", "Aline", "Marcos", "Débora", "Eduardo", "Natália", "Leandro", "Priscila", "Sandra", "Alexandre"]
  , Cm = ["S.", "R.", "M.", "L.", "F.", "A.", "C.", "P.", "O.", "T.", "B.", "G.", "D.", "N.", "K.", "V."]
  , Em = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador", "Fortaleza", "Brasília", "Recife", "Porto Alegre", "Goiânia", "Manaus", "Campinas", "Florianópolis", "Belém", "Vitória", "Natal", "Santos", "Olinda", "Guarapuava", "Londrina", "Rio Verde", "Uberlândia"]
  , Si = ["agora", "há 1 min", "há 3 min", "há 8 min", "há 12 min"]
  , Nm = ["hsl(145, 65%, 42%)", "hsl(200, 70%, 50%)", "hsl(280, 60%, 55%)", "hsl(30, 80%, 55%)", "hsl(340, 65%, 50%)"];
function VP() {
    const e = Math.floor(Math.random() * 900) + 97
      , t = Math.floor(Math.random() * 100);
    return e + t / 100
}
let km = -1;
function jm(e, t) {
    let n;
    do
        n = Math.floor(Math.random() * Sm.length);
    while (n === km);
    km = n;
    const r = Sm[n]
      , o = Cm[Math.floor(Math.random() * Cm.length)];
    return {
        id: e,
        initial: r[0],
        name: `${r} ${o}`,
        city: Em[Math.floor(Math.random() * Em.length)],
        value: VP(),
        time: Si[Math.min(t, Si.length - 1)],
        color: Nm[Math.floor(Math.random() * Nm.length)]
    }
}
const WP = ({className: e=""}) => {
    const t = d.useRef(0)
      , [n,r] = d.useState( () => {
        const a = [];
        for (let i = 0; i < 4; i++)
            a.push(jm(++t.current, i));
        return a
    }
    )
      , [o,s] = d.useState(null);
    return d.useEffect( () => {
        let a;
        const i = () => {
            const l = 3e3 + Math.random() * 4e3;
            a = window.setTimeout( () => {
                const u = jm(++t.current, 0);
                s(u.id),
                r(f => [u, ...f.slice(0, 3)].map( (m, g) => ({
                    ...m,
                    time: Si[Math.min(g, Si.length - 1)]
                }))),
                setTimeout( () => s(null), 500),
                i()
            }
            , l)
        }
        ;
        return i(),
        () => clearTimeout(a)
    }
    , []),
    c.jsxs("div", {
        className: e,
        children: [c.jsxs("div", {
            className: "flex items-center gap-2 mb-3",
            children: [c.jsx(Nd, {
                className: "h-4 w-4",
                style: {
                    color: "hsl(145, 65%, 45%)"
                }
            }), c.jsx("span", {
                className: "text-sm font-bold text-foreground",
                children: "Saques recentes"
            }), c.jsxs("span", {
                className: "relative flex h-2.5 w-2.5",
                children: [c.jsx("span", {
                    className: "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                    style: {
                        backgroundColor: "hsl(145, 65%, 45%)"
                    }
                }), c.jsx("span", {
                    className: "relative inline-flex h-2.5 w-2.5 rounded-full",
                    style: {
                        backgroundColor: "hsl(145, 65%, 45%)"
                    }
                })]
            })]
        }), c.jsx("div", {
            className: "space-y-2",
            children: n.map(a => c.jsxs("div", {
                className: "flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 transition-all duration-500",
                style: {
                    animation: a.id === o ? "quizFadeUp 400ms ease-out both" : void 0
                },
                children: [c.jsx("div", {
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white",
                    style: {
                        backgroundColor: a.color
                    },
                    children: a.initial
                }), c.jsx("div", {
                    className: "min-w-0 flex-1",
                    children: c.jsxs("p", {
                        className: "truncate text-[13px] leading-snug text-foreground",
                        children: [c.jsx("span", {
                            className: "font-bold",
                            children: a.name
                        }), c.jsxs("span", {
                            className: "text-muted-foreground",
                            children: [" • ", a.city]
                        })]
                    })
                }), c.jsxs("div", {
                    className: "shrink-0 text-right",
                    children: [c.jsxs("p", {
                        className: "text-[13px] font-bold",
                        style: {
                            color: "hsl(145, 65%, 45%)"
                        },
                        children: ["R$ ", a.value.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })]
                    }), c.jsx("p", {
                        className: "text-[11px] text-muted-foreground",
                        children: a.time
                    })]
                })]
            }, a.id))
        })]
    })
}
  , HP = () => {
    const {balance: e, evaluationsToday: t, earnings: n} = Pr()
      , [r,o] = d.useState(5 * 60);
    d.useEffect( () => {
        if (r <= 0)
            return;
        const i = setInterval( () => o(l => Math.max(0, l - 1)), 1e3);
        return () => clearInterval(i)
    }
    , [r > 0]);
    const s = String(Math.floor(r / 60)).padStart(2, "0")
      , a = String(r % 60).padStart(2, "0");
    return c.jsxs("div", {
        className: "px-4 py-4",
        children: [c.jsxs("div", {
            className: "mb-4 flex items-center gap-3 rounded-xl border border-[hsl(348,90%,55%)/0.3] bg-[hsl(348,90%,96%)] px-3 py-2.5 item-stagger-1",
            children: [c.jsx(e0, {
                className: "h-5 w-5 shrink-0 text-[hsl(348,90%,55%)]"
            }), c.jsxs("div", {
                className: "min-w-0 flex-1",
                children: [c.jsx("p", {
                    className: "text-[12px] font-bold text-foreground leading-tight",
                    children: "Seu saldo está reservado por"
                }), c.jsxs("p", {
                    className: "text-[16px] font-extrabold text-foreground tabular-nums tracking-tight",
                    children: [s, ":", a]
                })]
            }), c.jsx("p", {
                className: "text-[10px] text-muted-foreground text-right leading-tight shrink-0 max-w-[90px]",
                children: "Após esse tempo, o saldo expira"
            })]
        }), c.jsx("div", {
            className: "relative mb-6 overflow-hidden rounded-2xl bg-[hsl(0,0%,12%)] p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] item-stagger-1",
            children: c.jsxs("div", {
                className: "relative z-10",
                children: [c.jsx("p", {
                    className: "text-[11px] font-semibold tracking-widest text-[hsl(0,0%,55%)] uppercase",
                    children: "Seu saldo"
                }), c.jsxs("h2", {
                    className: "mt-1 text-[28px] font-bold tracking-tight text-white",
                    children: ["R$ ", je(e)]
                }), c.jsxs("p", {
                    className: "mt-2 text-[11px] text-[hsl(0,0%,50%)]",
                    children: ["Avaliações completadas: ", c.jsxs("span", {
                        className: "text-[hsl(0,0%,85%)]",
                        children: [t, "/9"]
                    })]
                }), c.jsx("p", {
                    className: "mt-0.5 text-[11px] text-[hsl(348,99%,65%)]",
                    children: t >= 9 ? "Você já pode sacar!" : `Complete mais ${9 - t} avaliações para poder sacar`
                })]
            })
        }), c.jsx("div", {
            className: "item-stagger-2",
            children: c.jsx(UP, {})
        }), c.jsx("div", {
            className: "mb-6 item-stagger-3",
            children: c.jsx(WP, {})
        }), c.jsxs("div", {
            className: "glass-card rounded-xl p-4 item-stagger-4",
            children: [c.jsx("h3", {
                className: "mb-4 text-sm font-semibold",
                children: "Histórico de ganhos"
            }), n.length === 0 ? c.jsx("p", {
                className: "text-center text-sm text-muted-foreground py-4",
                children: "Nenhum ganho ainda. Complete avaliações para começar!"
            }) : c.jsx("div", {
                className: "space-y-3",
                children: n.map( (i, l) => c.jsxs("div", {
                    className: "flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0",
                    children: [c.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [c.jsx("div", {
                            className: "flex h-9 w-9 items-center justify-center rounded-lg bg-success/15",
                            children: c.jsx(t0, {
                                className: "h-4 w-4 text-success"
                            })
                        }), c.jsx("p", {
                            className: "text-sm font-medium truncate max-w-[180px]",
                            children: i.productName
                        })]
                    }), c.jsxs("span", {
                        className: "text-sm font-bold text-success whitespace-nowrap ml-3 tabular-nums",
                        children: ["+R$ ", je(i.reward)]
                    })]
                }, l))
            })]
        })]
    })
}
  , KP = () => {
    const e = Yn()
      , [t,n] = d.useState(zk);
    return c.jsxs("div", {
        className: "px-4 py-4",
        children: [c.jsxs("div", {
            className: "mb-6 flex flex-col items-center gap-3 pt-4 item-stagger-1",
            children: [c.jsx("div", {
                className: "flex h-20 w-20 items-center justify-center rounded-full bg-secondary",
                children: c.jsx(IC, {
                    className: "h-10 w-10 text-muted-foreground"
                })
            }), c.jsxs("div", {
                className: "text-center",
                children: [c.jsx("h2", {
                    className: "text-lg font-bold",
                    children: "Usuário TikTok Shop"
                }), c.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "usuario@email.com"
                })]
            })]
        }), c.jsxs("div", {
            className: "glass-card mb-4 rounded-xl p-4 item-stagger-2",
            children: [c.jsx("h3", {
                className: "mb-3 text-sm font-semibold",
                children: "Dados da conta"
            }), c.jsxs("div", {
                className: "space-y-3 text-sm",
                children: [c.jsxs("div", {
                    className: "flex justify-between",
                    children: [c.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Status"
                    }), c.jsx("span", {
                        className: "rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success",
                        children: "Ativo"
                    })]
                }), c.jsxs("div", {
                    className: "flex justify-between border-t border-border pt-3",
                    children: [c.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Membro desde"
                    }), c.jsx("span", {
                        className: "font-medium",
                        children: "Mar 2025"
                    })]
                }), c.jsxs("div", {
                    className: "flex justify-between border-t border-border pt-3",
                    children: [c.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Avaliações totais"
                    }), c.jsx("span", {
                        className: "font-medium",
                        children: "0"
                    })]
                }), c.jsxs("div", {
                    className: "flex justify-between border-t border-border pt-3",
                    children: [c.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Total ganho"
                    }), c.jsx("span", {
                        className: "font-bold text-primary",
                        children: "R$ 100,00"
                    })]
                })]
            })]
        }), c.jsxs("div", {
            className: "glass-card mb-4 rounded-xl item-stagger-3",
            children: [c.jsxs("button", {
                onClick: () => n($k()),
                className: "flex w-full items-center justify-between border-b border-border p-4 text-sm hover:bg-secondary/50",
                children: [c.jsxs("span", {
                    className: "flex items-center gap-3",
                    children: [t ? c.jsx(DC, {
                        className: "h-4 w-4 text-muted-foreground"
                    }) : c.jsx(LC, {
                        className: "h-4 w-4 text-muted-foreground"
                    }), "Sons do app"]
                }), c.jsx("span", {
                    className: `text-xs font-medium ${t ? "text-muted-foreground" : "text-success"}`,
                    children: t ? "Desativado" : "Ativado"
                })]
            }), c.jsxs("button", {
                className: "flex w-full items-center gap-3 border-b border-border p-4 text-sm hover:bg-secondary/50",
                children: [c.jsx(Ed, {
                    className: "h-4 w-4 text-muted-foreground"
                }), " Segurança"]
            }), c.jsxs("button", {
                className: "flex w-full items-center gap-3 border-b border-border p-4 text-sm hover:bg-secondary/50",
                children: [c.jsx(AC, {
                    className: "h-4 w-4 text-muted-foreground"
                }), " Configurações"]
            }), c.jsxs("button", {
                onClick: () => e("/"),
                className: "flex w-full items-center gap-3 p-4 text-sm text-primary hover:bg-secondary/50",
                children: [c.jsx(TC, {
                    className: "h-4 w-4"
                }), " Sair da conta"]
            })]
        })]
    })
}
;
var ol = "Collapsible"
  , [GP,ax] = Rt(ol)
  , [QP,qd] = GP(ol)
  , ix = d.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, open: r, defaultOpen: o, disabled: s, onOpenChange: a, ...i} = e
      , [l,u] = kr({
        prop: r,
        defaultProp: o ?? !1,
        onChange: a,
        caller: ol
    });
    return c.jsx(QP, {
        scope: n,
        disabled: s,
        contentId: ao(),
        open: l,
        onOpenToggle: d.useCallback( () => u(f => !f), [u]),
        children: c.jsx(J.div, {
            "data-state": Xd(l),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
        })
    })
}
);
ix.displayName = ol;
var lx = "CollapsibleTrigger"
  , cx = d.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, ...r} = e
      , o = qd(lx, n);
    return c.jsx(J.button, {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Xd(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: X(e.onClick, o.onOpenToggle)
    })
}
);
cx.displayName = lx;
var Yd = "CollapsibleContent"
  , ux = d.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , o = qd(Yd, e.__scopeCollapsible);
    return c.jsx(Xn, {
        present: n || o.open,
        children: ({present: s}) => c.jsx(qP, {
            ...r,
            ref: t,
            present: s
        })
    })
}
);
ux.displayName = Yd;
var qP = d.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, present: r, children: o, ...s} = e
      , a = qd(Yd, n)
      , [i,l] = d.useState(r)
      , u = d.useRef(null)
      , f = ve(t, u)
      , m = d.useRef(0)
      , g = m.current
      , p = d.useRef(0)
      , b = p.current
      , v = a.open || i
      , w = d.useRef(v)
      , y = d.useRef(void 0);
    return d.useEffect( () => {
        const h = requestAnimationFrame( () => w.current = !1);
        return () => cancelAnimationFrame(h)
    }
    , []),
    Wt( () => {
        const h = u.current;
        if (h) {
            y.current = y.current || {
                transitionDuration: h.style.transitionDuration,
                animationName: h.style.animationName
            },
            h.style.transitionDuration = "0s",
            h.style.animationName = "none";
            const x = h.getBoundingClientRect();
            m.current = x.height,
            p.current = x.width,
            w.current || (h.style.transitionDuration = y.current.transitionDuration,
            h.style.animationName = y.current.animationName),
            l(r)
        }
    }
    , [a.open, r]),
    c.jsx(J.div, {
        "data-state": Xd(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        id: a.contentId,
        hidden: !v,
        ...s,
        ref: f,
        style: {
            "--radix-collapsible-content-height": g ? `${g}px` : void 0,
            "--radix-collapsible-content-width": b ? `${b}px` : void 0,
            ...e.style
        },
        children: v && o
    })
}
);
function Xd(e) {
    return e ? "open" : "closed"
}
var YP = ix
  , XP = cx
  , JP = ux
  , At = "Accordion"
  , ZP = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [Jd,eR,tR] = xd(At)
  , [sl,uT] = Rt(At, [tR, ax])
  , Zd = ax()
  , dx = A.forwardRef( (e, t) => {
    const {type: n, ...r} = e
      , o = r
      , s = r;
    return c.jsx(Jd.Provider, {
        scope: e.__scopeAccordion,
        children: n === "multiple" ? c.jsx(sR, {
            ...s,
            ref: t
        }) : c.jsx(oR, {
            ...o,
            ref: t
        })
    })
}
);
dx.displayName = At;
var [fx,nR] = sl(At)
  , [px,rR] = sl(At, {
    collapsible: !1
})
  , oR = A.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: o= () => {}
    , collapsible: s=!1, ...a} = e
      , [i,l] = kr({
        prop: n,
        defaultProp: r ?? "",
        onChange: o,
        caller: At
    });
    return c.jsx(fx, {
        scope: e.__scopeAccordion,
        value: A.useMemo( () => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: A.useCallback( () => s && l(""), [s, l]),
        children: c.jsx(px, {
            scope: e.__scopeAccordion,
            collapsible: s,
            children: c.jsx(mx, {
                ...a,
                ref: t
            })
        })
    })
}
)
  , sR = A.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: o= () => {}
    , ...s} = e
      , [a,i] = kr({
        prop: n,
        defaultProp: r ?? [],
        onChange: o,
        caller: At
    })
      , l = A.useCallback(f => i( (m=[]) => [...m, f]), [i])
      , u = A.useCallback(f => i( (m=[]) => m.filter(g => g !== f)), [i]);
    return c.jsx(fx, {
        scope: e.__scopeAccordion,
        value: a,
        onItemOpen: l,
        onItemClose: u,
        children: c.jsx(px, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: c.jsx(mx, {
                ...s,
                ref: t
            })
        })
    })
}
)
  , [aR,al] = sl(At)
  , mx = A.forwardRef( (e, t) => {
    const {__scopeAccordion: n, disabled: r, dir: o, orientation: s="vertical", ...a} = e
      , i = A.useRef(null)
      , l = ve(i, t)
      , u = eR(n)
      , m = Gd(o) === "ltr"
      , g = X(e.onKeyDown, p => {
        var k;
        if (!ZP.includes(p.key))
            return;
        const b = p.target
          , v = u().filter(O => {
            var M;
            return !((M = O.ref.current) != null && M.disabled)
        }
        )
          , w = v.findIndex(O => O.ref.current === b)
          , y = v.length;
        if (w === -1)
            return;
        p.preventDefault();
        let h = w;
        const x = 0
          , S = y - 1
          , C = () => {
            h = w + 1,
            h > S && (h = x)
        }
          , E = () => {
            h = w - 1,
            h < x && (h = S)
        }
        ;
        switch (p.key) {
        case "Home":
            h = x;
            break;
        case "End":
            h = S;
            break;
        case "ArrowRight":
            s === "horizontal" && (m ? C() : E());
            break;
        case "ArrowDown":
            s === "vertical" && C();
            break;
        case "ArrowLeft":
            s === "horizontal" && (m ? E() : C());
            break;
        case "ArrowUp":
            s === "vertical" && E();
            break
        }
        const N = h % y;
        (k = v[N].ref.current) == null || k.focus()
    }
    );
    return c.jsx(aR, {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: c.jsx(Jd.Slot, {
            scope: n,
            children: c.jsx(J.div, {
                ...a,
                "data-orientation": s,
                ref: l,
                onKeyDown: r ? void 0 : g
            })
        })
    })
}
)
  , Ci = "AccordionItem"
  , [iR,ef] = sl(Ci)
  , hx = A.forwardRef( (e, t) => {
    const {__scopeAccordion: n, value: r, ...o} = e
      , s = al(Ci, n)
      , a = nR(Ci, n)
      , i = Zd(n)
      , l = ao()
      , u = r && a.value.includes(r) || !1
      , f = s.disabled || e.disabled;
    return c.jsx(iR, {
        scope: n,
        open: u,
        disabled: f,
        triggerId: l,
        children: c.jsx(YP, {
            "data-orientation": s.orientation,
            "data-state": bx(u),
            ...i,
            ...o,
            ref: t,
            disabled: f,
            open: u,
            onOpenChange: m => {
                m ? a.onItemOpen(r) : a.onItemClose(r)
            }
        })
    })
}
);
hx.displayName = Ci;
var gx = "AccordionHeader"
  , vx = A.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = al(At, n)
      , s = ef(gx, n);
    return c.jsx(J.h3, {
        "data-orientation": o.orientation,
        "data-state": bx(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
    })
}
);
vx.displayName = gx;
var yu = "AccordionTrigger"
  , yx = A.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = al(At, n)
      , s = ef(yu, n)
      , a = rR(yu, n)
      , i = Zd(n);
    return c.jsx(Jd.ItemSlot, {
        scope: n,
        children: c.jsx(XP, {
            "aria-disabled": s.open && !a.collapsible || void 0,
            "data-orientation": o.orientation,
            id: s.triggerId,
            ...i,
            ...r,
            ref: t
        })
    })
}
);
yx.displayName = yu;
var xx = "AccordionContent"
  , wx = A.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = al(At, n)
      , s = ef(xx, n)
      , a = Zd(n);
    return c.jsx(JP, {
        role: "region",
        "aria-labelledby": s.triggerId,
        "data-orientation": o.orientation,
        ...a,
        ...r,
        ref: t,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
        }
    })
}
);
wx.displayName = xx;
function bx(e) {
    return e ? "open" : "closed"
}
var lR = dx
  , cR = hx
  , uR = vx
  , Sx = yx
  , Cx = wx;
const dR = lR
  , Ex = d.forwardRef( ({className: e, ...t}, n) => c.jsx(cR, {
    ref: n,
    className: be("border-b", e),
    ...t
}));
Ex.displayName = "AccordionItem";
const Nx = d.forwardRef( ({className: e, children: t, ...n}, r) => c.jsx(uR, {
    className: "flex",
    children: c.jsxs(Sx, {
        ref: r,
        className: be("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, c.jsx(bC, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
Nx.displayName = Sx.displayName;
const kx = d.forwardRef( ({className: e, children: t, ...n}, r) => c.jsx(Cx, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: c.jsx("div", {
        className: be("pb-4 pt-0", e),
        children: t
    })
}));
kx.displayName = Cx.displayName;
const fR = [{
    q: "Como funciona o TikTok Shop?",
    a: "Você avalia produtos respondendo perguntas rápidas e recebe recompensas em dinheiro por cada avaliação concluída. Simples e rápido!"
}, {
    q: "Como faço para sacar meu saldo?",
    a: "Vá até a aba Saldo, selecione o método de saque (CPF, Telefone, Email ou Chave Aleatória) e siga as instruções. O valor é transferido via Pix."
}, {
    q: "Quantas avaliações posso fazer por dia?",
    a: "Você pode avaliar todos os produtos disponíveis no dia. Novos produtos são adicionados diariamente para você continuar ganhando."
}, {
    q: "Quanto tempo leva para receber o pagamento?",
    a: "Após atingir o mínimo de avaliações necessárias, o saque é processado em até 24 horas úteis."
}, {
    q: "É seguro usar o TikTok Shop?",
    a: "Sim! Seus dados são protegidos e as transações são realizadas via Pix, o sistema de pagamento seguro do Banco Central."
}, {
    q: "Posso usar em mais de um dispositivo?",
    a: "Sim, basta acessar com o mesmo e-mail em qualquer dispositivo."
}]
  , pR = () => c.jsxs("div", {
    className: "px-3 py-3",
    children: [c.jsxs("h2", {
        className: "mb-4 text-lg font-bold text-left item-stagger-1",
        children: ["Perguntas ", c.jsx("span", {
            className: "text-gradient",
            children: "Frequentes"
        })]
    }), c.jsx(dR, {
        type: "single",
        collapsible: !0,
        className: "space-y-2.5 item-stagger-2",
        children: fR.map( (e, t) => c.jsxs(Ex, {
            value: `faq-${t}`,
            className: "product-card rounded-xl border-none px-4 py-0.5",
            children: [c.jsx(Nx, {
                className: "text-[13px] font-semibold text-left text-foreground hover:no-underline py-3.5 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0 [&>svg]:text-muted-foreground",
                children: e.q
            }), c.jsx(kx, {
                className: "text-[13px] leading-relaxed text-muted-foreground pb-3.5 text-left",
                children: e.a
            })]
        }, t))
    })]
})
  , ec = ["Verificando dados...", "Validando chave Pix...", "Conectando ao sistema...", "Processando saque...", "Finalizando..."]
  , mR = 700
  , hR = () => {
    const e = Yn()
      , [t,n] = d.useState(0);
    d.useEffect( () => {
        window.scrollTo({
            top: 0
        }),
        Ts("InitiateCheckout", {
            source: "withdraw_processing"
        })
    }
    , []),
    d.useEffect( () => {
        if (t < ec.length) {
            const o = setTimeout( () => {
                n(s => s + 1)
            }
            , mR);
            return () => clearTimeout(o)
        } else {
            const o = setTimeout( () => {
                e("/withdraw-confirmation", {
                    replace: !0
                })
            }
            , 500);
            return () => clearTimeout(o)
        }
    }
    , [t, e]);
    const r = t / ec.length * 100;
    return c.jsxs("div", {
        className: "flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-8",
        children: [c.jsx("div", {
            className: "mb-8 flex items-center gap-2",
            children: [0, 1, 2].map(o => c.jsx("div", {
                className: "h-3 w-3 rounded-full bg-primary",
                style: {
                    animation: `dotPulse 1.4s ease-in-out infinite ${o * 160}ms`
                }
            }, o))
        }), c.jsx("div", {
            className: "mb-8 flex w-full max-w-xs flex-col gap-3",
            children: ec.map( (o, s) => {
                const a = s < t
                  , i = s === t;
                return c.jsxs("div", {
                    className: "flex items-center gap-3 transition-all duration-300",
                    style: {
                        opacity: a ? .5 : i ? 1 : .3
                    },
                    children: [a ? c.jsx(jr, {
                        className: "h-4 w-4 shrink-0 text-success"
                    }) : c.jsx("div", {
                        className: "h-4 w-4 shrink-0"
                    }), c.jsx("span", {
                        className: "text-sm font-medium text-foreground",
                        children: o
                    })]
                }, s)
            }
            )
        }), c.jsx("div", {
            className: "h-1.5 w-full max-w-xs rounded-full bg-secondary",
            children: c.jsx("div", {
                className: "h-full rounded-full bg-primary transition-all duration-500",
                style: {
                    width: `${r}%`
                }
            })
        }), c.jsx("p", {
            className: "mt-4 text-[11px] text-muted-foreground/70",
            children: "Não feche esta tela"
        })]
    })
}
  , Jr = {
    full: {
        fee: 21.67,
        url: "https://pay.tiktoksimples.site/6a0227cc1c0706a2de420c55"
    },
    simple: {
        fee: 16.9,
        url: "https://pay.tiktoksimples.site/6a0227e978ee5bf4445dee7a"
    }
}
  , xu = "trackingParams"
  , gR = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id", "ttclid", "fbclid", "gclid", "msclkid", "sub_id", "click_id"];
function vR() {
    try {
        const e = new URLSearchParams(window.location.search)
          , t = JSON.parse(localStorage.getItem(xu) || "{}");
        let n = !1;
        for (const r of gR) {
            const o = e.get(r);
            o && (t[r] = o,
            n = !0)
        }
        n && localStorage.setItem(xu, JSON.stringify(t))
    } catch {}
}
function yR() {
    try {
        return JSON.parse(localStorage.getItem(xu) || "{}")
    } catch {
        return {}
    }
}
function jx(e) {
    const t = yR();
    if (!Object.keys(t).length)
        return e;
    try {
        const n = new URL(e);
        for (const [r,o] of Object.entries(t))
            n.searchParams.has(r) || n.searchParams.set(r, o);
        return n.toString()
    } catch {
        return e
    }
}
const Pm = [{
    id: "full",
    label: "Validação completa",
    badge: "Recomendada",
    fee: Jr.full.fee,
    checkoutUrl: Jr.full.url,
    perks: [{
        icon: Nd,
        text: "Liberação mais rápida"
    }, {
        icon: Ed,
        text: "Reembolso automático"
    }]
}, {
    id: "simple",
    label: "Validação simplificada",
    badge: null,
    fee: Jr.simple.fee,
    checkoutUrl: Jr.simple.url,
    perks: [{
        icon: jr,
        text: "Mesmo resultado"
    }, {
        icon: e0,
        text: "Pode levar um pouco mais para concluir"
    }]
}]
  , xR = ({open: e, onClose: t, onContinue: n}) => {
    const [r,o] = d.useState("full");
    d.useEffect( () => {
        e && Vd()
    }
    , [e]);
    const s = i => {
        o(i),
        hr()
    }
      , a = () => {
        const i = Pm.find(l => l.id === r);
        el(),
        n(i.fee, jx(i.checkoutUrl))
    }
    ;
    return c.jsx(mu, {
        open: e,
        onOpenChange: i => {
            i || t()
        }
        ,
        children: c.jsx(xi, {
            className: "mx-auto max-w-[calc(100vw-2rem)] rounded-2xl border-border bg-card p-5 sm:max-w-md [&>button]:hidden",
            children: c.jsxs("div", {
                className: "space-y-4",
                children: [c.jsxs("div", {
                    className: "text-center",
                    children: [c.jsx(wi, {
                        className: "text-lg font-bold text-foreground",
                        children: "Quase concluído"
                    }), c.jsx(Iy, {
                        className: "mt-1.5 text-sm text-muted-foreground",
                        children: "Seu processo de verificação ainda não foi finalizado."
                    })]
                }), Pm.map(i => c.jsx("button", {
                    type: "button",
                    onClick: () => s(i.id),
                    className: `w-full rounded-xl border p-4 text-left transition-all ${r === i.id ? "border-primary/50 bg-primary/5" : "border-border bg-card"}`,
                    children: c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [c.jsx("div", {
                            className: `flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 mt-0.5 transition-colors ${r === i.id ? "border-primary bg-primary" : "border-muted-foreground/30"}`,
                            children: r === i.id && c.jsx(jr, {
                                className: "h-3 w-3 text-primary-foreground"
                            })
                        }), c.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [c.jsxs("div", {
                                className: "flex items-center justify-between gap-2",
                                children: [c.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [c.jsx("span", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: i.label
                                    }), i.badge && c.jsx("span", {
                                        className: "rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary",
                                        children: i.badge
                                    })]
                                }), c.jsxs("span", {
                                    className: `whitespace-nowrap text-sm font-bold ${r === i.id ? "text-primary" : "text-foreground"}`,
                                    children: ["R$ ", je(i.fee)]
                                })]
                            }), c.jsx("div", {
                                className: "mt-1.5 space-y-1",
                                children: i.perks.map( (l, u) => c.jsxs("div", {
                                    className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                                    children: [c.jsx(l.icon, {
                                        className: "h-3 w-3 shrink-0"
                                    }), c.jsx("span", {
                                        children: l.text
                                    })]
                                }, u))
                            })]
                        })]
                    })
                }, i.id)), c.jsx("p", {
                    className: "text-center text-[11px] leading-relaxed text-muted-foreground/80",
                    children: "A diferença é apenas no tempo de confirmação. O valor e o saque permanecem os mesmos."
                }), c.jsx("button", {
                    type: "button",
                    onClick: a,
                    className: "block w-full rounded-xl bg-primary py-3.5 text-center text-[14px] font-bold text-primary-foreground transition-all active:scale-[0.97]",
                    children: "Continuar com opção selecionada"
                })]
            })
        })
    })
}
;
function wR(e, t=1e3) {
    const [n,r] = d.useState(0)
      , o = d.useRef(!1);
    return d.useEffect( () => {
        if (o.current)
            return;
        o.current = !0;
        const s = performance.now()
          , a = i => {
            const l = Math.min((i - s) / t, 1)
              , u = 1 - Math.pow(1 - l, 3);
            r(u * e),
            l < 1 && requestAnimationFrame(a)
        }
        ;
        requestAnimationFrame(a)
    }
    , [e, t]),
    n
}
const bR = Jr.full.fee
  , SR = Jr.full.url
  , CR = () => {
    const {balance: e} = Pr()
      , t = wR(e, 1e3)
      , [n,r] = d.useState(!1)
      , [o,s] = d.useState(bR)
      , [a,i] = d.useState(SR)
      , l = d.useRef(!1)
      , u = d.useRef();
    d.useEffect( () => {
        Ts("AddToCart", {
            value: o,
            currency: "BRL"
        })
    }
    , [o]);
    const f = d.useCallback( () => {
        if (l.current)
            return;
        u.current && clearTimeout(u.current);
        const w = 8e3 + Math.random() * 2e3;
        u.current = setTimeout( () => {
            l.current || (l.current = !0,
            r(!0))
        }
        , w)
    }
    , []);
    d.useEffect( () => {
        f();
        const w = ["touchstart", "scroll", "click", "keydown"];
        return w.forEach(y => window.addEventListener(y, f, {
            passive: !0
        })),
        () => {
            u.current && clearTimeout(u.current),
            w.forEach(y => window.removeEventListener(y, f))
        }
    }
    , [f]),
    d.useEffect( () => {
        const w = y => {
            l.current || (y.preventDefault(),
            l.current = !0,
            r(!0),
            window.history.pushState(null, "", window.location.href))
        }
        ;
        return window.history.pushState(null, "", window.location.href),
        window.addEventListener("popstate", w),
        () => window.removeEventListener("popstate", w)
    }
    , []);
    const m = d.useCallback( (w, y) => {
        s(w),
        i(y),
        r(!1)
    }
    , [])
      , g = JSON.parse(localStorage.getItem("pixData") || "{}")
      , p = new Date().toLocaleDateString("pt-BR")
      , b = {
        cpf: "CPF",
        email: "E-mail",
        phone: "Celular",
        random: "Chave aleatória"
    }
      , v = [{
        number: "1",
        label: "Pagar taxa de confirmação",
        subtitle: `R$ ${je(o)} para verificação de identidade`,
        done: !1,
        highlight: !1
    }, {
        number: "✓",
        label: "Receber reembolso automático",
        subtitle: "Valor devolvido em 1 minuto",
        done: !0,
        highlight: !0
    }, {
        number: "3",
        label: "Acessar saldo completo",
        subtitle: `R$ ${je(e)} liberado para saque`,
        done: !1,
        highlight: !1
    }];
    return c.jsxs("div", {
        className: "flex w-full min-w-0 flex-1 flex-col overflow-x-hidden bg-background",
        children: [c.jsxs("div", {
            className: "mx-auto w-full max-w-lg space-y-3.5 px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-4",
            children: [c.jsxs("div", {
                className: "rounded-2xl bg-[hsl(0,0%,12%)] p-6",
                children: [c.jsx("p", {
                    className: "text-xs font-semibold uppercase tracking-widest text-[hsl(0,0%,55%)]",
                    children: "Saldo disponível"
                }), c.jsxs("h2", {
                    className: "mt-1.5 text-[32px] font-bold tracking-tight text-white transition-opacity duration-300",
                    children: ["R$ ", je(t)]
                }), c.jsx("p", {
                    className: "mt-2 text-xs text-[hsl(0,0%,45%)]",
                    children: "Aguardando confirmação para saque"
                })]
            }), c.jsxs("div", {
                className: "rounded-xl border border-border bg-card p-5",
                children: [c.jsx("h3", {
                    className: "mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
                    children: "Confirmação de identidade"
                }), c.jsxs("div", {
                    className: "mb-3 flex flex-wrap items-center gap-2.5",
                    children: [c.jsxs("span", {
                        className: "text-2xl font-bold text-primary",
                        children: ["R$ ", je(o)]
                    }), c.jsx("span", {
                        className: "rounded-md bg-success/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-success",
                        children: "Valor reembolsável"
                    })]
                }), c.jsxs("div", {
                    className: "space-y-2 text-sm leading-relaxed text-muted-foreground",
                    children: [c.jsxs("p", {
                        children: ["Seguindo as diretrizes do Banco Central do Brasil, solicitamos uma confirmação de identidade no valor de", " ", c.jsxs("span", {
                            className: "whitespace-nowrap font-semibold text-foreground",
                            children: ["R$ ", je(o)]
                        }), " ", "para garantir a autenticidade dos participantes."]
                    }), c.jsx("p", {
                        children: "Reembolso imediato em até 1 minuto, junto ao saldo."
                    })]
                })]
            }), c.jsxs("div", {
                className: "rounded-xl border border-border bg-card p-5",
                children: [c.jsx("h3", {
                    className: "mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
                    children: "Dados para reembolso"
                }), c.jsxs("div", {
                    className: "space-y-0",
                    children: [c.jsx(wa, {
                        label: "Nome",
                        value: g.fullName || "—"
                    }), c.jsx(wa, {
                        label: "Data",
                        value: p
                    }), c.jsx(wa, {
                        label: "Chave PIX",
                        value: b[g.keyType] || "—"
                    }), c.jsx(wa, {
                        label: "Valor a receber",
                        value: `R$ ${je(e)}`,
                        bold: !0,
                        last: !0
                    })]
                }), g.pixKey && c.jsx("div", {
                    className: "mt-3 rounded-lg bg-muted/50 px-3 py-3 text-center",
                    children: c.jsx("span", {
                        className: "block break-all text-sm text-muted-foreground",
                        children: g.pixKey
                    })
                })]
            }), c.jsxs("div", {
                className: "rounded-xl border border-border bg-card p-4",
                children: [c.jsx("h3", {
                    className: "mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                    children: "Processo de liberação"
                }), c.jsx("div", {
                    className: "space-y-4",
                    children: v.map( (w, y) => c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [w.done ? c.jsx("div", {
                            className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-success/15",
                            children: c.jsx(jr, {
                                className: "h-4 w-4 text-success"
                            })
                        }) : c.jsx("div", {
                            className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10",
                            children: c.jsx("span", {
                                className: "text-xs font-bold text-primary",
                                children: w.number
                            })
                        }), c.jsxs("div", {
                            className: "min-w-0",
                            children: [c.jsx("span", {
                                className: `block text-sm font-semibold leading-snug ${w.highlight ? "text-success" : "text-foreground"}`,
                                children: w.label
                            }), c.jsx("p", {
                                className: "text-[11px] leading-relaxed text-muted-foreground",
                                children: w.subtitle
                            })]
                        })]
                    }, y))
                })]
            }), c.jsx("a", {
                href: jx(a),
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => Ts("InitiateCheckout", {
                    value: o,
                    currency: "BRL"
                }),
                className: "block w-full rounded-xl bg-primary py-3.5 text-center text-[14px] font-bold text-primary-foreground transition-all active:scale-[0.97]",
                children: "Pagar taxa para Liberar Saque"
            }), c.jsxs("p", {
                className: "flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground",
                children: [c.jsx(Ed, {
                    className: "h-3.5 w-3.5"
                }), "Reembolso automático em 1 minuto"]
            })]
        }), c.jsx(xR, {
            open: n,
            onClose: () => r(!1),
            onContinue: m
        })]
    })
}
  , wa = ({label: e, value: t, last: n, bold: r}) => c.jsxs("div", {
    className: `flex items-start justify-between gap-3 py-3 ${n ? "" : "border-b border-border"}`,
    children: [c.jsx("span", {
        className: "shrink-0 text-sm text-muted-foreground",
        children: e
    }), c.jsx("span", {
        className: `min-w-0 break-words text-right text-sm ${r ? "font-bold text-primary" : "font-medium text-foreground"}`,
        children: t
    })]
})
  , tf = "/assets/tiktok-shop-logo-DuVhss4H.png"
  , ER = ({className: e=""}) => c.jsxs("svg", {
    viewBox: "0 0 64 64",
    "aria-hidden": "true",
    className: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [c.jsxs("defs", {
        children: [c.jsxs("linearGradient", {
            id: "coinOuter",
            x1: "10%",
            y1: "10%",
            x2: "90%",
            y2: "90%",
            children: [c.jsx("stop", {
                offset: "0%",
                stopColor: "hsl(45 100% 78%)"
            }), c.jsx("stop", {
                offset: "55%",
                stopColor: "hsl(41 100% 58%)"
            }), c.jsx("stop", {
                offset: "100%",
                stopColor: "hsl(35 95% 45%)"
            })]
        }), c.jsxs("linearGradient", {
            id: "coinInner",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [c.jsx("stop", {
                offset: "0%",
                stopColor: "hsl(42 100% 62%)"
            }), c.jsx("stop", {
                offset: "100%",
                stopColor: "hsl(37 100% 50%)"
            })]
        }), c.jsx("filter", {
            id: "coinShadow",
            x: "-20%",
            y: "-20%",
            width: "140%",
            height: "140%",
            children: c.jsx("feDropShadow", {
                dx: "0",
                dy: "2",
                stdDeviation: "1.5",
                floodColor: "hsl(35 95% 38%)",
                floodOpacity: "0.35"
            })
        })]
    }), c.jsxs("g", {
        filter: "url(#coinShadow)",
        children: [c.jsx("circle", {
            cx: "32",
            cy: "32",
            r: "29",
            fill: "url(#coinOuter)"
        }), c.jsx("circle", {
            cx: "32",
            cy: "32",
            r: "22.5",
            fill: "url(#coinInner)"
        }), c.jsx("ellipse", {
            cx: "23",
            cy: "18",
            rx: "12",
            ry: "6",
            fill: "hsl(0 0% 100% / 0.28)",
            transform: "rotate(-20 23 18)"
        }), c.jsx("path", {
            fill: "hsl(0 0% 100%)",
            d: "M38.6 16.5c.9 0 1.6.7 1.6 1.6v8.9c1.9 1.7 4 2.8 6.7 3.1 1 .1 1.5 1.1 1.2 2l-1.2 3.1c-.2.7-.9 1.1-1.6 1-1.9-.2-3.8-.9-5.1-1.8v10.7c0 6.7-5.1 11.4-11.8 11.4-6 0-10.8-4.5-10.8-10.2 0-5.7 4.4-9.8 10.2-9.8 1.1 0 2.1.1 3 .4v5.1a5.6 5.6 0 0 0-2.6-.7c-2.6 0-4.6 1.8-4.6 4.3s2.1 4.5 4.8 4.5 4.7-1.8 4.7-4.9V18.1c0-.9.7-1.6 1.6-1.6h3.9Z"
        })]
    })]
})
  , NR = () => {
    const {balance: e} = Pr()
      , [t,n] = d.useState(87420)
      , [r,o] = d.useState(1243)
      , [s,a] = d.useState(!1);
    d.useEffect( () => {
        let l, u;
        const f = () => {
            const m = Math.floor(Math.random() * 46) + 15;
            n(p => p + m),
            a(!0),
            l = window.setTimeout( () => a(!1), 600),
            o(p => {
                const b = Math.floor(Math.random() * 7) - 3;
                return Math.max(1180, Math.min(1320, p + b))
            }
            );
            const g = 2e3 + Math.random() * 2e3;
            u = window.setTimeout(f, g)
        }
        ;
        return u = window.setTimeout(f, 2500),
        () => {
            l && window.clearTimeout(l),
            u && window.clearTimeout(u)
        }
    }
    , []);
    const i = l => l.toLocaleString("pt-BR");
    return c.jsxs("header", {
        className: "sticky top-0 z-50 mx-2.5 mt-2 rounded-2xl bg-card shadow-[0_2px_16px_-3px_rgba(0,0,0,0.12)]",
        children: [c.jsxs("div", {
            className: "flex items-center justify-between px-5 py-3.5 sm:px-4 sm:py-2",
            children: [c.jsx("img", {
                src: tf,
                alt: "TikTok Shop",
                className: "h-12 sm:h-9 object-contain"
            }), c.jsxs("div", {
                className: "relative",
                children: [c.jsx(ER, {
                    className: "absolute -left-3 -top-3 h-6 w-6 sm:h-5 sm:w-5"
                }), c.jsxs("div", {
                    className: "gradient-primary rounded-full px-5 sm:px-3.5 py-2 sm:py-1 text-[15px] sm:text-[13px] font-bold text-primary-foreground shadow-[0_2px_8px_-2px_hsl(348_99%_58%/0.4)]",
                    children: ["R$ ", e.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })]
                })]
            })]
        }), c.jsxs("div", {
            className: "flex items-center justify-center gap-4 px-4 pb-2.5 sm:pb-2 pt-0",
            children: [c.jsxs("span", {
                className: "text-[11px] text-muted-foreground",
                children: ["💰 Pago hoje:", " ", c.jsxs("strong", {
                    className: `inline-block text-foreground transition-all duration-500 ${s ? "scale-105 text-success" : "scale-100"}`,
                    children: ["R$ ", i(t)]
                })]
            }), c.jsxs("span", {
                className: "text-[11px] text-muted-foreground",
                children: ["👥 Online: ", c.jsx("strong", {
                    className: "text-foreground transition-all duration-500",
                    children: i(r)
                })]
            })]
        })]
    })
}
  , kR = [{
    icon: kC,
    label: "Início",
    path: "/home"
}, {
    icon: t0,
    label: "Saldo",
    path: "/balance"
}, {
    icon: CC,
    label: "Ajuda",
    path: "/faq"
}]
  , jR = () => {
    const e = Kt();
    return c.jsx("nav", {
        className: "absolute bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl shadow-[0_-1px_12px_-2px_rgba(0,0,0,0.06)] rounded-b-3xl",
        children: c.jsx("div", {
            className: "mx-auto flex max-w-lg items-center justify-around py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]",
            children: kR.map(t => {
                const n = e.pathname === t.path;
                return c.jsxs(DS, {
                    to: t.path,
                    className: `flex flex-col items-center gap-0.5 px-4 py-1 text-[10px] transition-colors ${n ? "text-primary" : "text-muted-foreground active:text-foreground"}`,
                    children: [c.jsx(t.icon, {
                        className: `h-[22px] w-[22px] transition-transform ${n ? "scale-105" : ""}`,
                        strokeWidth: n ? 2.2 : 1.8
                    }), c.jsx("span", {
                        className: "font-semibold",
                        children: t.label
                    })]
                }, t.path)
            }
            )
        })
    })
}
  , PR = () => c.jsx("div", {
    className: "flex min-h-dvh w-full justify-center overflow-x-hidden p-2 sm:p-6",
    style: {
        background: "hsl(220 13% 93%)"
    },
    children: c.jsxs("div", {
        className: "relative flex min-h-[calc(100dvh-1rem)] sm:min-h-[calc(100dvh-3rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-background",
        style: {
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.25), 0 12px 24px -8px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)"
        },
        children: [c.jsx(NR, {}), c.jsx("main", {
            className: "flex w-full flex-1 flex-col pb-20 pt-1",
            children: c.jsx(NS, {})
        }), c.jsx(jR, {})]
    })
})
  , RR = () => {
    const e = Kt();
    return d.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    c.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: c.jsxs("div", {
            className: "text-center",
            children: [c.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), c.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), c.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , tc = [{
    id: 0,
    question: "Quanto tempo por dia você pode dedicar?",
    subtitle: "Qualquer tempo é suficiente para começar",
    options: [{
        label: "Menos de 1 hora",
        emoji: "⏱️",
        microMessage: "Perfeito — esse modelo foi feito pra quem tem pouco tempo",
        tag: "pouco_tempo"
    }, {
        label: "Entre 1 e 3 horas",
        emoji: "⏰",
        microMessage: "Ótimo! Com esse tempo você já consegue resultados bem expressivos",
        tag: "medio_tempo"
    }, {
        label: "Mais de 3 horas",
        emoji: "🔥",
        microMessage: "Excelente — você pode maximizar seus ganhos com mais avaliações",
        tag: "muito_tempo"
    }]
}, {
    id: 1,
    question: "Já fez avaliações online antes?",
    subtitle: "Não existe resposta errada aqui",
    options: [{
        label: "Nunca fiz",
        emoji: "🆕",
        microMessage: "Sem problema! O processo é simples e guiado passo a passo",
        tag: "iniciante"
    }, {
        label: "Já fiz algumas vezes",
        emoji: "👍",
        microMessage: "Boa — sua experiência vai acelerar seus resultados",
        tag: "intermediario"
    }, {
        label: "Tenho bastante experiência",
        emoji: "🏆",
        microMessage: "Perfeito! Vamos potencializar o que você já sabe",
        tag: "experiente"
    }]
}, {
    id: 2,
    question: "O que mais te motiva?",
    subtitle: "Isso nos ajuda a personalizar tudo pra você",
    options: [{
        label: "Uma renda extra no fim do mês",
        emoji: "💰",
        microMessage: "Entendido — vamos focar em ganhos consistentes pra você",
        tag: "renda_extra"
    }, {
        label: "Trabalhar no meu próprio horário",
        emoji: "🕐",
        microMessage: "Liberdade é tudo! Aqui você escolhe quando e onde",
        tag: "flexibilidade"
    }, {
        label: "Crescer profissionalmente",
        emoji: "🚀",
        microMessage: "Cada avaliação é uma oportunidade de desenvolvimento",
        tag: "crescimento"
    }]
}, {
    id: 3,
    question: "Qual dispositivo você mais usa?",
    subtitle: "Funciona em qualquer um — só queremos otimizar",
    options: [{
        label: "Celular",
        emoji: "📱",
        microMessage: "Tudo funciona direto no celular, sem complicação nenhuma",
        tag: "celular"
    }, {
        label: "Computador",
        emoji: "💻",
        microMessage: "No computador você pode fazer avaliações com mais conforto",
        tag: "computador"
    }, {
        label: "Uso os dois",
        emoji: "🔄",
        microMessage: "Você pode alternar entre eles quando quiser",
        tag: "ambos"
    }]
}]
  , nc = ["Analisando suas respostas...", "Ajustando a experiência...", "Verificando disponibilidade...", "Quase pronto..."]
  , tr = {
    title: "Seu acesso foi liberado",
    subtitle: "Com base nas suas respostas, preparamos a próxima etapa para você.",
    ctaText: "Continuar",
    footerText: "Vagas limitadas — sua vaga expira em breve",
    balanceLabel: "Seu saldo inicial",
    balanceSubtext: "Disponível para iniciar suas avaliações",
    balanceValue: 100
}
  , TR = {
    pouco_tempo: "Tarefas rápidas de 5 a 15 minutos",
    muito_tempo: "Acesso a tarefas premium com maior remuneração",
    medio_tempo: "Mix equilibrado de tarefas rápidas e detalhadas",
    iniciante: "Tutorial guiado incluído no seu acesso",
    experiente: "Acesso direto às avaliações avançadas",
    intermediario: "Tarefas progressivas para evoluir rápido",
    renda_extra: "Painel de ganhos em tempo real",
    flexibilidade: "Horários 100% flexíveis, sem compromisso",
    crescimento: "Certificado de participação incluso"
};
function AR(e) {
    const t = [];
    return Object.values(e).forEach(n => {
        const r = TR[n.tag];
        r && t.push(r)
    }
    ),
    t.push("Suporte dedicado por WhatsApp"),
    t
}
const Rm = ["João", "Maria", "Lucas", "Ana", "Pedro", "Juliana", "Carlos", "Fernanda", "Rafael", "Beatriz", "Gustavo", "Larissa", "Bruno", "Camila", "Thiago", "Amanda", "Felipe", "Patrícia", "Diego", "Mariana", "André", "Gabriela", "Rodrigo", "Isabela", "Vinícius", "Letícia", "Matheus", "Renata", "Daniel", "Aline", "Marcos", "Débora", "Eduardo", "Natália", "Leandro", "Priscila"]
  , Tm = ["S.", "R.", "M.", "L.", "F.", "A.", "C.", "P.", "O.", "T.", "B.", "G.", "D.", "N."]
  , Am = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador", "Fortaleza", "Brasília", "Recife", "Porto Alegre", "Goiânia", "Manaus", "Campinas", "Florianópolis", "Belém", "Vitória", "Natal", "Santos", "São Luís", "Maceió", "João Pessoa", "Uberlândia", "Ribeirão Preto"]
  , Ei = ["agora", "1 min atrás", "2 min atrás", "3 min atrás", "4 min atrás"];
let _m = -1;
function _R() {
    const e = Math.floor(Math.random() * 900) + 97
      , t = Math.floor(Math.random() * 100);
    return e + t / 100
}
function Mm(e, t) {
    let n;
    do
        n = Math.floor(Math.random() * Rm.length);
    while (n === _m);
    return _m = n,
    {
        id: e,
        name: `${Rm[n]} ${Tm[Math.floor(Math.random() * Tm.length)]}`,
        city: Am[Math.floor(Math.random() * Am.length)],
        value: _R(),
        time: Ei[Math.min(t, Ei.length - 1)]
    }
}
const Px = ({className: e=""}) => {
    const t = d.useRef(0)
      , [n,r] = d.useState( () => {
        const i = [];
        for (let l = 0; l < 4; l++)
            i.push(Mm(++t.current, l));
        return i
    }
    )
      , [o,s] = d.useState(null)
      , a = d.useRef(!0);
    return d.useEffect( () => {
        if (!a.current)
            return;
        let i;
        const l = () => {
            const u = 2e3 + Math.random() * 3e3;
            i = window.setTimeout( () => {
                const f = Mm(++t.current, 0);
                s(f.id),
                r(m => [f, ...m.slice(0, 3)].map( (p, b) => ({
                    ...p,
                    time: Ei[Math.min(b, Ei.length - 1)]
                }))),
                setTimeout( () => s(null), 500),
                l()
            }
            , u)
        }
        ;
        return l(),
        () => clearTimeout(i)
    }
    , [n.length > 0]),
    n.length === 0 ? null : c.jsx("div", {
        className: e,
        children: c.jsxs("div", {
            className: "overflow-hidden rounded-2xl border border-border/60",
            style: {
                background: "hsl(var(--card))",
                boxShadow: "0 1px 8px -2px rgba(0,0,0,0.06), 0 2px 16px -4px rgba(0,0,0,0.04)"
            },
            children: [c.jsxs("div", {
                className: "flex items-center gap-2 border-b border-border/40 px-4 py-2.5",
                children: [c.jsxs("span", {
                    className: "relative flex h-2.5 w-2.5",
                    children: [c.jsx("span", {
                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(145,63%,42%)] opacity-60"
                    }), c.jsx("span", {
                        className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(145,63%,42%)]"
                    })]
                }), c.jsx("span", {
                    className: "text-[13px] font-bold text-foreground",
                    children: "Pagamentos em tempo real"
                })]
            }), c.jsx("div", {
                className: "divide-y divide-border/30",
                children: n.map(i => c.jsxs("div", {
                    className: "flex items-center gap-3 px-4 py-3 transition-all duration-500",
                    style: {
                        animation: i.id === o ? "quizFadeUp 400ms ease-out both" : void 0
                    },
                    children: [c.jsx(Jv, {
                        className: "h-4.5 w-4.5 shrink-0",
                        style: {
                            color: "hsl(145, 63%, 48%)",
                            width: 18,
                            height: 18
                        }
                    }), c.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [c.jsxs("p", {
                            className: "truncate text-[13px] leading-snug text-foreground",
                            children: [c.jsx("span", {
                                className: "font-semibold",
                                children: i.name
                            }), c.jsxs("span", {
                                className: "text-muted-foreground",
                                children: [" · ", i.city]
                            })]
                        }), c.jsxs("p", {
                            className: "text-[12px] text-muted-foreground",
                            children: ["Recebeu", " ", c.jsxs("span", {
                                className: "font-bold",
                                style: {
                                    color: "hsl(145, 63%, 45%)"
                                },
                                children: ["R$ ", i.value.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })]
                            }), " ", "via PIX"]
                        })]
                    }), c.jsx("span", {
                        className: "shrink-0 text-[11px] text-muted-foreground/70",
                        children: i.time
                    })]
                }, i.id))
            })]
        })
    })
}
  , MR = ({question: e, totalSteps: t, onAnswer: n, isExiting: r}) => {
    const [o,s] = d.useState(null)
      , a = i => {
        o || (hr(),
        s(i.tag),
        setTimeout( () => n(i), 600))
    }
    ;
    return c.jsxs("div", {
        className: "flex flex-col px-4 pb-6 sm:px-5 transition-opacity duration-250",
        style: {
            opacity: r ? 0 : 1
        },
        children: [c.jsx("div", {
            className: "mt-4 flex justify-center",
            children: c.jsx("img", {
                src: tf,
                alt: "TikTok Shop",
                className: "h-10 object-contain"
            })
        }), c.jsxs("div", {
            className: "mb-6 mt-4",
            children: [c.jsx("div", {
                className: "h-1.5 w-full rounded-full bg-secondary",
                children: c.jsx("div", {
                    className: "h-full rounded-full transition-all duration-400",
                    style: {
                        width: `${(e.id + 1) / t * 100}%`,
                        background: "hsl(349 99% 58%)"
                    }
                })
            }), c.jsxs("p", {
                className: "mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                children: [e.id + 1, " de ", t]
            })]
        }), c.jsxs("div", {
            className: "mb-2 text-center",
            style: {
                animation: "quizFadeUp 400ms cubic-bezier(0.16,1,0.3,1) both"
            },
            children: [c.jsx("h1", {
                className: "text-2xl font-extrabold leading-tight tracking-tight text-foreground",
                children: e.question
            }), c.jsx("p", {
                className: "mt-1.5 text-sm text-muted-foreground/70",
                children: e.subtitle
            })]
        }), c.jsx("div", {
            className: "mt-5 flex flex-col gap-3",
            children: e.options.map( (i, l) => {
                const u = o === i.tag
                  , f = o && !u;
                return c.jsx("button", {
                    onClick: () => a(i),
                    disabled: !!o,
                    className: "w-full text-left rounded-xl border px-4 py-4 transition-all duration-200 active:scale-[0.98]",
                    style: {
                        animation: `quizSlideIn 350ms cubic-bezier(0.16,1,0.3,1) ${l * 60}ms both`,
                        borderColor: u ? "hsl(145 63% 48%)" : "hsl(var(--border))",
                        background: u ? "hsl(145 63% 95%)" : "hsl(var(--card))",
                        opacity: f ? .4 : 1,
                        boxShadow: u ? "0 0 0 1px hsl(145 63% 42% / 0.2)" : "none"
                    },
                    children: c.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [c.jsx("span", {
                            className: "text-2xl leading-none",
                            children: i.emoji
                        }), c.jsx("span", {
                            className: "flex-1 text-[15px] font-medium text-foreground",
                            children: i.label
                        }), c.jsx("div", {
                            className: "h-5 w-5 shrink-0 rounded border-2 flex items-center justify-center transition-colors duration-200",
                            style: {
                                borderColor: u ? "hsl(145 63% 48%)" : "hsl(var(--border))",
                                background: u ? "hsl(145 63% 48%)" : "transparent"
                            },
                            children: u && c.jsx("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                children: c.jsx("path", {
                                    d: "M2.5 6L5 8.5L9.5 3.5",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        })]
                    })
                }, i.tag)
            }
            )
        }), c.jsx(Px, {
            className: "mt-10"
        })]
    })
}
  , OR = ({onComplete: e}) => {
    const [t,n] = d.useState(0);
    d.useEffect( () => {
        window.scrollTo({
            top: 0
        })
    }
    , []),
    d.useEffect( () => {
        if (t < nc.length) {
            const o = setTimeout( () => {
                n(s => s + 1)
            }
            , 600);
            return () => clearTimeout(o)
        } else {
            const o = setTimeout(e, 500);
            return () => clearTimeout(o)
        }
    }
    , [t, e]);
    const r = t / nc.length * 100;
    return c.jsxs("div", {
        className: "flex min-h-[80vh] flex-col items-center justify-center px-5",
        style: {
            animation: "quizFadeIn 300ms ease-out both"
        },
        children: [c.jsx("div", {
            className: "mb-8 flex items-center gap-2",
            children: [0, 1, 2].map(o => c.jsx("div", {
                className: "h-3 w-3 rounded-full",
                style: {
                    background: "hsl(349 99% 58%)",
                    animation: `dotPulse 1.4s ease-in-out infinite ${o * 160}ms`
                }
            }, o))
        }), c.jsx("div", {
            className: "mb-8 flex w-full max-w-xs flex-col gap-3",
            children: nc.map( (o, s) => {
                const a = s < t
                  , i = s === t;
                return c.jsxs("div", {
                    className: "flex items-center gap-3 transition-all duration-300",
                    style: {
                        opacity: a ? .5 : i ? 1 : .3
                    },
                    children: [a ? c.jsx(jr, {
                        className: "h-4 w-4 shrink-0",
                        style: {
                            color: "hsl(145 63% 48%)"
                        }
                    }) : c.jsx("div", {
                        className: "h-4 w-4 shrink-0"
                    }), c.jsx("span", {
                        className: "text-sm font-medium text-foreground",
                        children: o
                    })]
                }, s)
            }
            )
        }), c.jsx("div", {
            className: "h-1.5 w-full max-w-xs rounded-full bg-secondary",
            children: c.jsx("div", {
                className: "h-full rounded-full transition-all duration-500",
                style: {
                    width: `${r}%`,
                    background: "hsl(349 99% 58%)"
                }
            })
        })]
    })
}
  , IR = ({target: e}) => {
    const [t,n] = d.useState(0)
      , r = d.useRef();
    return d.useEffect( () => {
        const s = performance.now()
          , a = i => {
            const l = i - s
              , u = Math.min(l / 800, 1)
              , f = 1 - Math.pow(1 - u, 3);
            n(f * e),
            u < 1 && (r.current = requestAnimationFrame(a))
        }
        ;
        return r.current = requestAnimationFrame(a),
        () => {
            r.current && cancelAnimationFrame(r.current)
        }
    }
    , [e]),
    c.jsxs("span", {
        children: ["R$ ", t.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })]
    })
}
  , LR = ({answers: e}) => {
    const t = Yn()
      , [n,r] = d.useState(!1)
      , o = AR(e);
    d.useEffect( () => {
        window.scrollTo({
            top: 0
        })
    }
    , []);
    const s = () => {
        Vd(),
        r(!0),
        setTimeout( () => t("/home"), 250)
    }
    ;
    return c.jsxs("div", {
        className: "flex min-h-[100dvh] flex-col justify-start px-5 pt-3 pb-4 transition-all duration-400",
        style: {
            opacity: n ? 0 : 1,
            transform: n ? "translateY(-20px) scale(0.98)" : "none",
            animation: n ? void 0 : "quizFadeIn 300ms ease-out both"
        },
        children: [c.jsxs("div", {
            className: "mb-3 text-center",
            children: [c.jsx("h1", {
                className: "text-2xl font-extrabold tracking-tight leading-tight text-foreground",
                children: tr.title
            }), c.jsx("p", {
                className: "mt-1 text-[13px] text-muted-foreground",
                children: tr.subtitle
            })]
        }), c.jsxs("div", {
            className: "mx-auto mb-4 w-full max-w-sm rounded-2xl border p-6 text-center",
            style: {
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
            },
            children: [c.jsx("p", {
                className: "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                children: tr.balanceLabel
            }), c.jsx("p", {
                className: "mt-2 text-4xl font-extrabold",
                style: {
                    color: "hsl(145 63% 48%)"
                },
                children: c.jsx(IR, {
                    target: tr.balanceValue
                })
            }), c.jsx("p", {
                className: "mt-1 text-[12px] text-muted-foreground",
                children: tr.balanceSubtext
            })]
        }), c.jsx("div", {
            className: "mb-4 flex flex-col gap-1.5",
            children: o.map( (a, i) => c.jsxs("div", {
                className: "flex items-center gap-2.5 rounded-xl px-3.5 py-2",
                style: {
                    background: "hsl(145 63% 95%)",
                    animation: `quizSlideIn 350ms cubic-bezier(0.16,1,0.3,1) ${i * 60}ms both`
                },
                children: [c.jsx(jr, {
                    className: "h-3.5 w-3.5 shrink-0",
                    style: {
                        color: "hsl(145 63% 48%)"
                    }
                }), c.jsx("span", {
                    className: "text-[13px] font-medium text-foreground",
                    children: a
                })]
            }, i))
        }), c.jsxs("button", {
            onClick: s,
            className: "flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-[15px] font-semibold text-primary-foreground active:scale-[0.97] transition-transform",
            style: {
                background: "hsl(349 99% 58%)"
            },
            children: [tr.ctaText, c.jsx(xC, {
                className: "h-5 w-5"
            })]
        }), c.jsx(Px, {
            className: "mt-5"
        }), c.jsx("p", {
            className: "mt-2 text-center text-[11px] text-muted-foreground",
            children: tr.footerText
        })]
    })
}
  , DR = () => {
    const [e,t] = d.useState("quiz")
      , [n,r] = d.useState(0)
      , [o,s] = d.useState({})
      , [a,i] = d.useState(!1)
      , l = d.useCallback(f => {
        s(m => ({
            ...m,
            [n]: f
        })),
        n < tc.length - 1 ? (i(!0),
        setTimeout( () => {
            r(m => m + 1),
            i(!1),
            window.scrollTo({
                top: 0
            })
        }
        , 200)) : (i(!0),
        setTimeout( () => {
            t("processing")
        }
        , 200))
    }
    , [n])
      , u = d.useCallback( () => {
        t("result")
    }
    , []);
    return e === "processing" ? c.jsx(OR, {
        onComplete: u
    }) : e === "result" ? c.jsx(LR, {
        answers: o
    }) : c.jsx(MR, {
        question: tc[n],
        totalSteps: tc.length,
        onAnswer: l,
        isExiting: a
    }, n)
}
  , Om = () => c.jsx("div", {
    className: "flex min-h-dvh w-full justify-center overflow-x-hidden p-2 sm:p-6",
    style: {
        overscrollBehavior: "none",
        WebkitTapHighlightColor: "transparent",
        background: "hsl(220 13% 93%)"
    },
    children: c.jsx("div", {
        className: "relative flex min-h-[calc(100dvh-1rem)] sm:min-h-[calc(100dvh-3rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-card",
        style: {
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.25), 0 12px 24px -8px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)"
        },
        children: c.jsx(DR, {})
    })
})
  , FR = () => {
    const {pathname: e} = Kt();
    return d.useLayoutEffect( () => {
        window.scrollTo(0, 0)
    }
    , [e]),
    d.useEffect( () => {
        const t = requestAnimationFrame( () => window.scrollTo(0, 0));
        return () => cancelAnimationFrame(t)
    }
    , [e]),
    null
}
  , $R = () => (d.useEffect( () => {
    [tf, ...as.map(t => t.image), ...H0.map(t => t.image)].forEach(t => {
        const n = new Image;
        n.fetchPriority = "high",
        n.src = t
    }
    )
}
, []),
null)
  , zR = ["Juliana Costa", "Amanda Silva", "Larissa Souza", "Camila Rocha", "Beatriz Almeida", "Mariana Lima", "Fernanda Oliveira", "Patricia Santos", "Bruna Ferreira", "Renata Barbosa", "Daniela Ribeiro", "Carla Martins", "Vanessa Araújo", "Gabriela Mendes", "Aline Pereira", "Rafaela Gomes"]
  , BR = ["Lucas Andrade", "Gabriel Nascimento", "Ricardo Teixeira", "Nicolas Moreira", "Felipe Cardoso"]
  , UR = ["/survey", "/withdraw-processing", "/withdraw-confirmation"];
let Im = -1;
function VR() {
    const t = Math.random() < .75 ? zR : BR;
    let n;
    do
        n = Math.floor(Math.random() * t.length);
    while (t.length > 1 && n === Im);
    return Im = n,
    t[n]
}
function WR(e) {
    const t = ["withdraw", "progress", "activity"][Math.floor(Math.random() * 3)]
      , n = VR();
    switch (t) {
    case "withdraw":
        {
            const r = (Math.floor(Math.random() * 60) + 25) * 10 + Math.floor(Math.random() * 100) / 100;
            return {
                id: e,
                type: t,
                name: n,
                message: `acabou de sacar R$ ${r.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                })}`
            }
        }
    case "progress":
        {
            const r = Math.floor(Math.random() * 7) + 3;
            return {
                id: e,
                type: t,
                name: n,
                message: `completou ${r} avaliações`
            }
        }
    case "activity":
        return {
            id: e,
            type: t,
            name: n,
            message: "está avaliando produtos agora"
        }
    }
}
const HR = {
    withdraw: Zv,
    progress: SC,
    activity: vC
}
  , KR = {
    withdraw: "text-success",
    progress: "text-primary",
    activity: "text-blue-500"
}
  , GR = () => {
    const {pathname: e} = Kt()
      , [t,n] = d.useState(null)
      , [r,o] = d.useState(!1)
      , s = d.useRef(null)
      , a = d.useRef(0)
      , i = UR.some(u => e.startsWith(u));
    if (d.useEffect( () => {
        if (i) {
            o(!1),
            n(null);
            return
        }
        const u = () => {
            const f = 6e3 + Math.random() * 8e3;
            s.current = window.setTimeout( () => {
                const m = WR(++a.current);
                n(m),
                o(!0),
                window.setTimeout( () => {
                    o(!1)
                }
                , 3500),
                u()
            }
            , f)
        }
        ;
        return u(),
        () => {
            s.current && window.clearTimeout(s.current)
        }
    }
    , [i]),
    !t || i)
        return null;
    const l = HR[t.type];
    return c.jsx("div", {
        className: `fixed bottom-24 left-3 right-3 z-[45] flex justify-center pointer-events-none transition-all duration-500 ${r ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`,
        children: c.jsxs("div", {
            className: "pointer-events-auto flex items-center gap-2.5 rounded-xl bg-card px-3.5 py-2.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] border border-border max-w-[340px]",
            children: [c.jsx("div", {
                className: `shrink-0 ${KR[t.type]}`,
                children: c.jsx(l, {
                    className: "h-4 w-4"
                })
            }), c.jsxs("p", {
                className: "text-[11.5px] leading-snug text-foreground",
                children: [c.jsx("span", {
                    className: "font-semibold",
                    children: t.name
                }), " ", c.jsx("span", {
                    className: "text-muted-foreground",
                    children: t.message
                })]
            })]
        })
    })
}
  , QR = new Set(["/quiz", "/home", "/balance", "/profile", "/faq", "/withdraw-processing", "/withdraw-confirmation"])
  , qR = e => e === "/" ? !1 : !!(QR.has(e) || e.startsWith("/survey/"))
  , YR = () => {
    const {pathname: e} = Kt();
    return d.useEffect( () => {
        "/".replace(/\/$/, "") || qR(e) && window.location.pathname !== "/" && window.history.replaceState(window.history.state, "", "/")
    }
    , [e]),
    null
}
  , XR = () => {
    const e = Kt();
    return d.useEffect( () => {
        MP(e.pathname)
    }
    , [e.pathname]),
    null
}
  , JR = new _b
  , ZR = () => c.jsx(Ob, {
    client: JR,
    children: c.jsx(vk, {
        children: c.jsxs(sk, {
            children: [c.jsx(xE, {}), c.jsx(g2, {}), c.jsxs(OS, {
                basename: "/".replace(/\/$/, "") || "/",
                children: [c.jsx($R, {}), c.jsx(FR, {}), c.jsx(YR, {}), c.jsx(XR, {}), c.jsx(GR, {}), c.jsxs(jS, {
                    children: [c.jsx(ot, {
                        path: "/",
                        element: c.jsx(Om, {})
                    }), c.jsx(ot, {
                        path: "/quiz",
                        element: c.jsx(Om, {})
                    }), c.jsxs(ot, {
                        element: c.jsx(PR, {}),
                        children: [c.jsx(ot, {
                            path: "/home",
                            element: c.jsx(Qk, {})
                        }), c.jsx(ot, {
                            path: "/survey/:id",
                            element: c.jsx(qk, {})
                        }), c.jsx(ot, {
                            path: "/balance",
                            element: c.jsx(HP, {})
                        }), c.jsx(ot, {
                            path: "/profile",
                            element: c.jsx(KP, {})
                        }), c.jsx(ot, {
                            path: "/faq",
                            element: c.jsx(pR, {})
                        }), c.jsx(ot, {
                            path: "/withdraw-processing",
                            element: c.jsx(hR, {})
                        }), c.jsx(ot, {
                            path: "/withdraw-confirmation",
                            element: c.jsx(CR, {})
                        })]
                    }), c.jsx(ot, {
                        path: "*",
                        element: c.jsx(RR, {})
                    })]
                })]
            })]
        })
    })
});
vR();
ov(document.getElementById("root")).render(c.jsx(ZR, {}));
