!function(n) {
    var i = {};
    function r(t) {
        if (i[t])
            return i[t].exports;
        var e = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, r),
        e.l = !0,
        e.exports
    }
    r.m = n,
    r.c = i,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "",
    r(r.s = 0)
}([function(t, e, n) {
    "use strict";
    function i() {}
    n.r(e),
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
    void 0 === Number.isInteger && (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }
    ),
    void 0 === Math.sign && (Math.sign = function(t) {
        return t < 0 ? -1 : 0 < t ? 1 : +t
    }
    ),
    "name"in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }),
    void 0 === Object.assign && (Object.assign = function(t) {
        if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (null != i)
                for (var r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
        }
        return e
    }
    ),
    Object.assign(i.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners)
                return !1;
            var n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        },
        removeEventListener: function(t, e) {
            if (void 0 !== this._listeners) {
                var n = this._listeners[t];
                if (void 0 !== n) {
                    var i = n.indexOf(e);
                    -1 !== i && n.splice(i, 1)
                }
            }
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    for (var n = e.slice(0), i = 0, r = n.length; i < r; i++)
                        n[i].call(this, t)
                }
            }
        }
    });
    var r, a, o, s, c, l, h, u, p, d, yt = "103", q = 0, X = 1, Y = 2, N = 1, D = 2, z = 0, xt = 1, J = 2, f = 0, v = 2, Z = 0, Q = 1, K = 2, $ = 3, tt = 4, et = 5, nt = 100, m = 101, g = 102, y = 103, x = 104, b = 200, w = 201, _ = 202, M = 203, S = 204, T = 205, E = 206, A = 207, L = 208, P = 209, R = 210, it = 0, rt = 1, at = 2, ot = 3, st = 4, ct = 5, lt = 6, ht = 7, B = 0, U = 1, G = 2, F = 0, bt = 1, k = 2, H = 3, V = 4, j = 5, W = 301, ut = 302, pt = 303, dt = 304, ft = 305, mt = 306, gt = 307, C = 1e3, I = 1001, O = 1002, vt = 1003, wt = 1004, _t = 1005, Mt = 1006, St = 1007, Tt = 1008, Et = 1009, At = 1010, Lt = 1011, Pt = 1012, Rt = 1013, Ct = 1014, Ot = 1015, It = 1016, Dt = 1017, Nt = 1018, zt = 1019, Bt = 1020, Ut = 1021, Gt = 1022, Ft = 1023, kt = 1024, Ht = 1025, Vt = 1026, jt = 1027, Wt = 1028, qt = 33776, Xt = 33777, Yt = 33778, Jt = 33779, Zt = 35840, Qt = 35841, Kt = 35842, $t = 35843, te = 36196, ee = 37808, ne = 37809, ie = 37810, re = 37811, ae = 37812, oe = 37813, se = 37814, ce = 37815, le = 37816, he = 37817, ue = 37818, pe = 37819, de = 37820, fe = 37821, me = 2400, ge = 2401, ve = 0, ye = 1, xe = 2, be = 3e3, we = 3001, _e = 3007, Me = 3002, Se = 3004, Te = 3005, Ee = 3006, Ae = 3200, Le = 3201, Pe = 0, Re = 1, Ce = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            for (var r = [], t = 0; t < 256; t++)
                r[t] = (t < 16 ? "0" : "") + t.toString(16);
            return function() {
                var t = 4294967295 * Math.random() | 0
                  , e = 4294967295 * Math.random() | 0
                  , n = 4294967295 * Math.random() | 0
                  , i = 4294967295 * Math.random() | 0;
                return (r[255 & t] + r[t >> 8 & 255] + r[t >> 16 & 255] + r[t >> 24 & 255] + "-" + r[255 & e] + r[e >> 8 & 255] + "-" + r[e >> 16 & 15 | 64] + r[e >> 24 & 255] + "-" + r[63 & n | 128] + r[n >> 8 & 255] + "-" + r[n >> 16 & 255] + r[n >> 24 & 255] + r[255 & i] + r[i >> 8 & 255] + r[i >> 16 & 255] + r[i >> 24 & 255]).toUpperCase()
            }
        }(),
        clamp: function(t, e, n) {
            return Math.max(e, Math.min(n, t))
        },
        euclideanModulo: function(t, e) {
            return (t % e + e) % e
        },
        mapLinear: function(t, e, n, i, r) {
            return i + (t - e) * (r - i) / (n - e)
        },
        lerp: function(t, e, n) {
            return (1 - n) * t + n * e
        },
        smoothstep: function(t, e, n) {
            return t <= e ? 0 : n <= t ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, n) {
            return t <= e ? 0 : n <= t ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        degToRad: function(t) {
            return t * Ce.DEG2RAD
        },
        radToDeg: function(t) {
            return t * Ce.RAD2DEG
        },
        isPowerOfTwo: function(t) {
            return 0 == (t & t - 1) && 0 !== t
        },
        ceilPowerOfTwo: function(t) {
            return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
        },
        floorPowerOfTwo: function(t) {
            return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
        }
    };
    function Oe(t, e) {
        this.x = t || 0,
        this.y = e || 0
    }
    function Ie(t, e, n, i) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = n || 0,
        this._w = void 0 !== i ? i : 1
    }
    function De(t, e, n) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = n || 0
    }
    function Ne() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    Object.defineProperties(Oe.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(t) {
                this.x = t
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(t) {
                this.y = t
            }
        }
    }),
    Object.assign(Oe.prototype, {
        isVector2: !0,
        set: function(t, e) {
            return this.x = t,
            this.y = e,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this
        },
        multiply: function(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        applyMatrix3: function(t) {
            var e = this.x
              , n = this.y
              , i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6],
            this.y = i[1] * e + i[4] * n + i[7],
            this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this
        },
        clampScalar: (r = new Oe,
        a = new Oe,
        function(t, e) {
            return r.set(t, t),
            a.set(e, e),
            this.clamp(r, a)
        }
        ),
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        cross: function(t) {
            return this.x * t.y - this.y * t.x
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        angle: function() {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI),
            t
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , n = this.y - t.y;
            return e * e + n * n
        },
        manhattanDistanceTo: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this
        },
        rotateAround: function(t, e) {
            var n = Math.cos(e)
              , i = Math.sin(e)
              , r = this.x - t.x
              , a = this.y - t.y;
            return this.x = r * n - a * i + t.x,
            this.y = r * i + a * n + t.y,
            this
        }
    }),
    Object.assign(Ie, {
        slerp: function(t, e, n, i) {
            return n.copy(t).slerp(e, i)
        },
        slerpFlat: function(t, e, n, i, r, a, o) {
            var s = n[i + 0]
              , c = n[i + 1]
              , l = n[i + 2]
              , h = n[i + 3]
              , u = r[a + 0]
              , p = r[a + 1]
              , d = r[a + 2]
              , f = r[a + 3];
            if (h !== f || s !== u || c !== p || l !== d) {
                var m = 1 - o
                  , g = s * u + c * p + l * d + h * f
                  , v = 0 <= g ? 1 : -1
                  , y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y)
                      , b = Math.atan2(x, g * v);
                    m = Math.sin(m * b) / x,
                    o = Math.sin(o * b) / x
                }
                var w = o * v;
                if (s = s * m + u * w,
                c = c * m + p * w,
                l = l * m + d * w,
                h = h * m + f * w,
                m === 1 - o) {
                    var _ = 1 / Math.sqrt(s * s + c * c + l * l + h * h);
                    s *= _,
                    c *= _,
                    l *= _,
                    h *= _
                }
            }
            t[e] = s,
            t[e + 1] = c,
            t[e + 2] = l,
            t[e + 3] = h
        }
    }),
    Object.defineProperties(Ie.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t,
                this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t,
                this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t,
                this.onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(t) {
                this._w = t,
                this.onChangeCallback()
            }
        }
    }),
    Object.assign(Ie.prototype, {
        isQuaternion: !0,
        set: function(t, e, n, i) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._w = i,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        },
        copy: function(t) {
            return this._x = t.x,
            this._y = t.y,
            this._z = t.z,
            this._w = t.w,
            this.onChangeCallback(),
            this
        },
        setFromEuler: function(t, e) {
            if (!t || !t.isEuler)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var n = t._x
              , i = t._y
              , r = t._z
              , a = t.order
              , o = Math.cos
              , s = Math.sin
              , c = o(n / 2)
              , l = o(i / 2)
              , h = o(r / 2)
              , u = s(n / 2)
              , p = s(i / 2)
              , d = s(r / 2);
            return "XYZ" === a ? (this._x = u * l * h + c * p * d,
            this._y = c * p * h - u * l * d,
            this._z = c * l * d + u * p * h,
            this._w = c * l * h - u * p * d) : "YXZ" === a ? (this._x = u * l * h + c * p * d,
            this._y = c * p * h - u * l * d,
            this._z = c * l * d - u * p * h,
            this._w = c * l * h + u * p * d) : "ZXY" === a ? (this._x = u * l * h - c * p * d,
            this._y = c * p * h + u * l * d,
            this._z = c * l * d + u * p * h,
            this._w = c * l * h - u * p * d) : "ZYX" === a ? (this._x = u * l * h - c * p * d,
            this._y = c * p * h + u * l * d,
            this._z = c * l * d - u * p * h,
            this._w = c * l * h + u * p * d) : "YZX" === a ? (this._x = u * l * h + c * p * d,
            this._y = c * p * h + u * l * d,
            this._z = c * l * d - u * p * h,
            this._w = c * l * h - u * p * d) : "XZY" === a && (this._x = u * l * h - c * p * d,
            this._y = c * p * h - u * l * d,
            this._z = c * l * d + u * p * h,
            this._w = c * l * h + u * p * d),
            !1 !== e && this.onChangeCallback(),
            this
        },
        setFromAxisAngle: function(t, e) {
            var n = e / 2
              , i = Math.sin(n);
            return this._x = t.x * i,
            this._y = t.y * i,
            this._z = t.z * i,
            this._w = Math.cos(n),
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t) {
            var e, n = t.elements, i = n[0], r = n[4], a = n[8], o = n[1], s = n[5], c = n[9], l = n[2], h = n[6], u = n[10], p = i + s + u;
            return 0 < p ? (e = .5 / Math.sqrt(p + 1),
            this._w = .25 / e,
            this._x = (h - c) * e,
            this._y = (a - l) * e,
            this._z = (o - r) * e) : s < i && u < i ? (e = 2 * Math.sqrt(1 + i - s - u),
            this._w = (h - c) / e,
            this._x = .25 * e,
            this._y = (r + o) / e,
            this._z = (a + l) / e) : u < s ? (e = 2 * Math.sqrt(1 + s - i - u),
            this._w = (a - l) / e,
            this._x = (r + o) / e,
            this._y = .25 * e,
            this._z = (c + h) / e) : (e = 2 * Math.sqrt(1 + u - i - s),
            this._w = (o - r) / e,
            this._x = (a + l) / e,
            this._y = (c + h) / e,
            this._z = .25 * e),
            this.onChangeCallback(),
            this
        },
        setFromUnitVectors: function(t, e) {
            var n = t.dot(e) + 1;
            return n < 1e-6 ? (n = 0,
            Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
            this._y = t.x,
            this._z = 0) : (this._x = 0,
            this._y = -t.z,
            this._z = t.y)) : (this._x = t.y * e.z - t.z * e.y,
            this._y = t.z * e.x - t.x * e.z,
            this._z = t.x * e.y - t.y * e.x),
            this._w = n,
            this.normalize()
        },
        angleTo: function(t) {
            return 2 * Math.acos(Math.abs(Ce.clamp(this.dot(t), -1, 1)))
        },
        rotateTowards: function(t, e) {
            var n = this.angleTo(t);
            if (0 === n)
                return this;
            var i = Math.min(1, e / n);
            return this.slerp(t, i),
            this
        },
        inverse: function() {
            return this.conjugate()
        },
        conjugate: function() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this.onChangeCallback(),
            this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (t = 1 / t,
            this._x = this._x * t,
            this._y = this._y * t,
            this._z = this._z * t,
            this._w = this._w * t),
            this.onChangeCallback(),
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function(t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function(t, e) {
            var n = t._x
              , i = t._y
              , r = t._z
              , a = t._w
              , o = e._x
              , s = e._y
              , c = e._z
              , l = e._w;
            return this._x = n * l + a * o + i * c - r * s,
            this._y = i * l + a * s + r * o - n * c,
            this._z = r * l + a * c + n * s - i * o,
            this._w = a * l - n * o - i * s - r * c,
            this.onChangeCallback(),
            this
        },
        slerp: function(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            var n = this._x
              , i = this._y
              , r = this._z
              , a = this._w
              , o = a * t._w + n * t._x + i * t._y + r * t._z;
            if (o < 0 ? (this._w = -t._w,
            this._x = -t._x,
            this._y = -t._y,
            this._z = -t._z,
            o = -o) : this.copy(t),
            1 <= o)
                return this._w = a,
                this._x = n,
                this._y = i,
                this._z = r,
                this;
            var s = 1 - o * o;
            if (s <= Number.EPSILON) {
                var c = 1 - e;
                return this._w = c * a + e * this._w,
                this._x = c * n + e * this._x,
                this._y = c * i + e * this._y,
                this._z = c * r + e * this._z,
                this.normalize()
            }
            var l = Math.sqrt(s)
              , h = Math.atan2(l, o)
              , u = Math.sin((1 - e) * h) / l
              , p = Math.sin(e * h) / l;
            return this._w = a * u + this._w * p,
            this._x = n * u + this._x * p,
            this._y = i * u + this._y * p,
            this._z = r * u + this._z * p,
            this.onChangeCallback(),
            this
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this._x = t[e],
            this._y = t[e + 1],
            this._z = t[e + 2],
            this._w = t[e + 3],
            this.onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._w,
            t
        },
        onChange: function(t) {
            return this.onChangeCallback = t,
            this
        },
        onChangeCallback: function() {}
    }),
    Object.assign(De.prototype, {
        isVector3: !0,
        set: function(t, e, n) {
            return this.x = t,
            this.y = e,
            this.z = n,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(t, e)) : (this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this)
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x,
            this.y = t.y * e.y,
            this.z = t.z * e.z,
            this
        },
        applyEuler: (u = new Ie,
        function(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            this.applyQuaternion(u.setFromEuler(t))
        }
        ),
        applyAxisAngle: (h = new Ie,
        function(t, e) {
            return this.applyQuaternion(h.setFromAxisAngle(t, e))
        }
        ),
        applyMatrix3: function(t) {
            var e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i,
            this.y = r[1] * e + r[4] * n + r[7] * i,
            this.z = r[2] * e + r[5] * n + r[8] * i,
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements
              , a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a,
            this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a,
            this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a,
            this
        },
        applyQuaternion: function(t) {
            var e = this.x
              , n = this.y
              , i = this.z
              , r = t.x
              , a = t.y
              , o = t.z
              , s = t.w
              , c = s * e + a * i - o * n
              , l = s * n + o * e - r * i
              , h = s * i + r * n - a * e
              , u = -r * e - a * n - o * i;
            return this.x = c * s + u * -r + l * -o - h * -a,
            this.y = l * s + u * -a + h * -r - c * -o,
            this.z = h * s + u * -o + c * -a - l * -r,
            this
        },
        project: function(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        },
        unproject: function(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
        },
        transformDirection: function(t) {
            var e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i,
            this.y = r[1] * e + r[5] * n + r[9] * i,
            this.z = r[2] * e + r[6] * n + r[10] * i,
            this.normalize()
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this.z /= t.z,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this
        },
        clampScalar: (c = new De,
        l = new De,
        function(t, e) {
            return c.set(t, t, t),
            l.set(e, e, e),
            this.clamp(c, l)
        }
        ),
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        cross: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(t, e)) : this.crossVectors(this, t)
        },
        crossVectors: function(t, e) {
            var n = t.x
              , i = t.y
              , r = t.z
              , a = e.x
              , o = e.y
              , s = e.z;
            return this.x = i * s - r * o,
            this.y = r * a - n * s,
            this.z = n * o - i * a,
            this
        },
        projectOnVector: function(t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: (s = new De,
        function(t) {
            return s.copy(this).projectOnVector(t),
            this.sub(s)
        }
        ),
        reflect: (o = new De,
        function(t) {
            return this.sub(o.copy(t).multiplyScalar(2 * this.dot(t)))
        }
        ),
        angleTo: function(t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos(Ce.clamp(e, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , n = this.y - t.y
              , i = this.z - t.z;
            return e * e + n * n + i * i
        },
        manhattanDistanceTo: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        },
        setFromSphericalCoords: function(t, e, n) {
            var i = Math.sin(e) * t;
            return this.x = i * Math.sin(n),
            this.y = Math.cos(e) * t,
            this.z = i * Math.cos(n),
            this
        },
        setFromCylindrical: function(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        },
        setFromCylindricalCoords: function(t, e, n) {
            return this.x = t * Math.sin(e),
            this.y = n,
            this.z = t * Math.cos(e),
            this
        },
        setFromMatrixPosition: function(t) {
            var e = t.elements;
            return this.x = e[12],
            this.y = e[13],
            this.z = e[14],
            this
        },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length()
              , n = this.setFromMatrixColumn(t, 1).length()
              , i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e,
            this.y = n,
            this.z = i,
            this
        },
        setFromMatrixColumn: function(t, e) {
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this
        }
    }),
    Object.assign(Ne.prototype, {
        isMatrix3: !0,
        set: function(t, e, n, i, r, a, o, s, c) {
            var l = this.elements;
            return l[0] = t,
            l[1] = i,
            l[2] = o,
            l[3] = e,
            l[4] = r,
            l[5] = s,
            l[6] = n,
            l[7] = a,
            l[8] = c,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            this
        },
        setFromMatrix4: function(t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
        },
        applyToBufferAttribute: (p = new De,
        function(t) {
            for (var e = 0, n = t.count; e < n; e++)
                p.x = t.getX(e),
                p.y = t.getY(e),
                p.z = t.getZ(e),
                p.applyMatrix3(this),
                t.setXYZ(e, p.x, p.y, p.z);
            return t
        }
        ),
        multiply: function(t) {
            return this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var n = t.elements
              , i = e.elements
              , r = this.elements
              , a = n[0]
              , o = n[3]
              , s = n[6]
              , c = n[1]
              , l = n[4]
              , h = n[7]
              , u = n[2]
              , p = n[5]
              , d = n[8]
              , f = i[0]
              , m = i[3]
              , g = i[6]
              , v = i[1]
              , y = i[4]
              , x = i[7]
              , b = i[2]
              , w = i[5]
              , _ = i[8];
            return r[0] = a * f + o * v + s * b,
            r[3] = a * m + o * y + s * w,
            r[6] = a * g + o * x + s * _,
            r[1] = c * f + l * v + h * b,
            r[4] = c * m + l * y + h * w,
            r[7] = c * g + l * x + h * _,
            r[2] = u * f + p * v + d * b,
            r[5] = u * m + p * y + d * w,
            r[8] = u * g + p * x + d * _,
            this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[3] *= t,
            e[6] *= t,
            e[1] *= t,
            e[4] *= t,
            e[7] *= t,
            e[2] *= t,
            e[5] *= t,
            e[8] *= t,
            this
        },
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , a = t[4]
              , o = t[5]
              , s = t[6]
              , c = t[7]
              , l = t[8];
            return e * a * l - e * o * c - n * r * l + n * o * s + i * r * c - i * a * s
        },
        getInverse: function(t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var n = t.elements
              , i = this.elements
              , r = n[0]
              , a = n[1]
              , o = n[2]
              , s = n[3]
              , c = n[4]
              , l = n[5]
              , h = n[6]
              , u = n[7]
              , p = n[8]
              , d = p * c - l * u
              , f = l * h - p * s
              , m = u * s - c * h
              , g = r * d + a * f + o * m;
            if (0 == g) {
                var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e)
                    throw new Error(v);
                return console.warn(v),
                this.identity()
            }
            var y = 1 / g;
            return i[0] = d * y,
            i[1] = (o * u - p * a) * y,
            i[2] = (l * a - o * c) * y,
            i[3] = f * y,
            i[4] = (p * r - o * h) * y,
            i[5] = (o * s - l * r) * y,
            i[6] = m * y,
            i[7] = (a * h - u * r) * y,
            i[8] = (c * r - a * s) * y,
            this
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1],
            e[1] = e[3],
            e[3] = t,
            t = e[2],
            e[2] = e[6],
            e[6] = t,
            t = e[5],
            e[5] = e[7],
            e[7] = t,
            this
        },
        getNormalMatrix: function(t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8],
            this
        },
        setUvTransform: function(t, e, n, i, r, a, o) {
            var s = Math.cos(r)
              , c = Math.sin(r);
            this.set(n * s, n * c, -n * (s * a + c * o) + a + t, -i * c, i * s, -i * (-c * a + s * o) + o + e, 0, 0, 1)
        },
        scale: function(t, e) {
            var n = this.elements;
            return n[0] *= t,
            n[3] *= t,
            n[6] *= t,
            n[1] *= e,
            n[4] *= e,
            n[7] *= e,
            this
        },
        rotate: function(t) {
            var e = Math.cos(t)
              , n = Math.sin(t)
              , i = this.elements
              , r = i[0]
              , a = i[3]
              , o = i[6]
              , s = i[1]
              , c = i[4]
              , l = i[7];
            return i[0] = e * r + n * s,
            i[3] = e * a + n * c,
            i[6] = e * o + n * l,
            i[1] = -n * r + e * s,
            i[4] = -n * a + e * c,
            i[7] = -n * o + e * l,
            this
        },
        translate: function(t, e) {
            var n = this.elements;
            return n[0] += t * n[2],
            n[3] += t * n[5],
            n[6] += t * n[8],
            n[1] += e * n[2],
            n[4] += e * n[5],
            n[7] += e * n[8],
            this
        },
        equals: function(t) {
            for (var e = this.elements, n = t.elements, i = 0; i < 9; i++)
                if (e[i] !== n[i])
                    return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 9; n++)
                this.elements[n] = t[n + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t
        }
    });
    var ze, Be, Ue, Ge, Fe, ke, He, Ve, je, We, qe, Xe, Ye, Je, Ze, Qe, Ke, $e, tn, en, nn, rn, an, on, sn, cn = {
        getDataURL: function(t) {
            var e;
            if ("undefined" == typeof HTMLCanvasElement)
                return t.src;
            if (t instanceof HTMLCanvasElement)
                e = t;
            else {
                void 0 === d && (d = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")),
                d.width = t.width,
                d.height = t.height;
                var n = d.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
                e = d
            }
            return 2048 < e.width || 2048 < e.height ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
        }
    }, ln = 0;
    function hn(t, e, n, i, r, a, o, s, c, l) {
        Object.defineProperty(this, "id", {
            value: ln++
        }),
        this.uuid = Ce.generateUUID(),
        this.name = "",
        this.image = void 0 !== t ? t : hn.DEFAULT_IMAGE,
        this.mipmaps = [],
        this.mapping = void 0 !== e ? e : hn.DEFAULT_MAPPING,
        this.wrapS = void 0 !== n ? n : I,
        this.wrapT = void 0 !== i ? i : I,
        this.magFilter = void 0 !== r ? r : Mt,
        this.minFilter = void 0 !== a ? a : Tt,
        this.anisotropy = void 0 !== c ? c : 1,
        this.format = void 0 !== o ? o : Ft,
        this.type = void 0 !== s ? s : Et,
        this.offset = new Oe(0,0),
        this.repeat = new Oe(1,1),
        this.center = new Oe(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new Ne,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = void 0 !== l ? l : be,
        this.version = 0,
        this.onUpdate = null
    }
    function un(t, e, n, i) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = n || 0,
        this.w = void 0 !== i ? i : 1
    }
    function pn(t, e, n) {
        this.width = t,
        this.height = e,
        this.scissor = new un(0,0,t,e),
        this.scissorTest = !1,
        this.viewport = new un(0,0,t,e),
        n = n || {},
        this.texture = new hn(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
        this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
        this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : Mt,
        this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
        this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer,
        this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }
    function dn(t, e, n) {
        pn.call(this, t, e, n),
        this.samples = 4
    }
    function fn(t, e, n) {
        pn.call(this, t, e, n)
    }
    function mn(t, e, n, i, r, a, o, s, c, l, h, u) {
        hn.call(this, null, a, o, s, c, l, i, r, h, u),
        this.image = {
            data: t,
            width: e,
            height: n
        },
        this.magFilter = void 0 !== c ? c : vt,
        this.minFilter = void 0 !== l ? l : vt,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
    function gn(t, e) {
        this.min = void 0 !== t ? t : new De(1 / 0,1 / 0,1 / 0),
        this.max = void 0 !== e ? e : new De(-1 / 0,-1 / 0,-1 / 0)
    }
    function vn(t, e) {
        this.center = void 0 !== t ? t : new De,
        this.radius = void 0 !== e ? e : 0
    }
    function yn(t, e) {
        this.normal = void 0 !== t ? t : new De(1,0,0),
        this.constant = void 0 !== e ? e : 0
    }
    function xn(t, e, n, i, r, a) {
        this.planes = [void 0 !== t ? t : new yn, void 0 !== e ? e : new yn, void 0 !== n ? n : new yn, void 0 !== i ? i : new yn, void 0 !== r ? r : new yn, void 0 !== a ? a : new yn]
    }
    function bn() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    hn.DEFAULT_IMAGE = void 0,
    hn.DEFAULT_MAPPING = 300,
    hn.prototype = Object.assign(Object.create(i.prototype), {
        constructor: hn,
        isTexture: !0,
        updateMatrix: function() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.name = t.name,
            this.image = t.image,
            this.mipmaps = t.mipmaps.slice(0),
            this.mapping = t.mapping,
            this.wrapS = t.wrapS,
            this.wrapT = t.wrapT,
            this.magFilter = t.magFilter,
            this.minFilter = t.minFilter,
            this.anisotropy = t.anisotropy,
            this.format = t.format,
            this.type = t.type,
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            this.rotation = t.rotation,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrix.copy(t.matrix),
            this.generateMipmaps = t.generateMipmaps,
            this.premultiplyAlpha = t.premultiplyAlpha,
            this.flipY = t.flipY,
            this.unpackAlignment = t.unpackAlignment,
            this.encoding = t.encoding,
            this
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid])
                return t.textures[this.uuid];
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                var i = this.image;
                if (void 0 === i.uuid && (i.uuid = Ce.generateUUID()),
                !e && void 0 === t.images[i.uuid]) {
                    var r;
                    if (Array.isArray(i)) {
                        r = [];
                        for (var a = 0, o = i.length; a < o; a++)
                            r.push(cn.getDataURL(i[a]))
                    } else
                        r = cn.getDataURL(i);
                    t.images[i.uuid] = {
                        uuid: i.uuid,
                        url: r
                    }
                }
                n.image = i.uuid
            }
            return e || (t.textures[this.uuid] = n),
            n
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(t) {
            if (300 !== this.mapping)
                return t;
            if (t.applyMatrix3(this.matrix),
            t.x < 0 || 1 < t.x)
                switch (this.wrapS) {
                case C:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case I:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case O:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
            if (t.y < 0 || 1 < t.y)
                switch (this.wrapT) {
                case C:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case I:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case O:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
            return this.flipY && (t.y = 1 - t.y),
            t
        }
    }),
    Object.defineProperty(hn.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(un.prototype, {
        isVector4: !0,
        set: function(t, e, n, i) {
            return this.x = t,
            this.y = e,
            this.z = n,
            this.w = i,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this.w = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setW: function(t) {
            return this.w = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this.w = void 0 !== t.w ? t.w : 1,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this.w += t.w,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this.w += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this.w = t.w + e.w,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this.w += t.w * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this.w -= t.w,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this.w -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this.w = t.w - e.w,
            this
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t,
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , n = this.y
              , i = this.z
              , r = this.w
              , a = t.elements;
            return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r,
            this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r,
            this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r,
            this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = t.x / e,
            this.y = t.y / e,
            this.z = t.z / e),
            this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e, n, i, r, a = t.elements, o = a[0], s = a[4], c = a[8], l = a[1], h = a[5], u = a[9], p = a[2], d = a[6], f = a[10];
            if (Math.abs(s - l) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
                if (Math.abs(s + l) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + h + f - 3) < .1)
                    return this.set(1, 0, 0, 0),
                    this;
                e = Math.PI;
                var m = (o + 1) / 2
                  , g = (h + 1) / 2
                  , v = (f + 1) / 2
                  , y = (s + l) / 4
                  , x = (c + p) / 4
                  , b = (u + d) / 4;
                return g < m && v < m ? r = m < .01 ? (n = 0,
                i = .707106781) : (i = y / (n = Math.sqrt(m)),
                x / n) : v < g ? r = g < .01 ? (i = 0,
                n = .707106781) : (n = y / (i = Math.sqrt(g)),
                b / i) : v < .01 ? (i = n = .707106781,
                r = 0) : (n = x / (r = Math.sqrt(v)),
                i = b / r),
                this.set(n, i, r, e),
                this
            }
            var w = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (l - s) * (l - s));
            return Math.abs(w) < .001 && (w = 1),
            this.x = (d - u) / w,
            this.y = (c - p) / w,
            this.z = (l - s) / w,
            this.w = Math.acos((o + h + f - 1) / 2),
            this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this.w = Math.min(this.w, t.w),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this.w = Math.max(this.w, t.w),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this.w = Math.max(t.w, Math.min(e.w, this.w)),
            this
        },
        clampScalar: function(t, e) {
            return void 0 === ze && (ze = new un,
            Be = new un),
            ze.set(t, t, t, t),
            Be.set(e, e, e, e),
            this.clamp(ze, Be)
        },
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this.w += (t.w - this.w) * e,
            this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this.w = t[e + 3],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t[e + 3] = this.w,
            t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this.w = t.getW(e),
            this
        }
    }),
    pn.prototype = Object.assign(Object.create(i.prototype), {
        constructor: pn,
        isWebGLRenderTarget: !0,
        setSize: function(t, e) {
            this.width === t && this.height === e || (this.width = t,
            this.height = e,
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.width = t.width,
            this.height = t.height,
            this.viewport.copy(t.viewport),
            this.texture = t.texture.clone(),
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    dn.prototype = Object.assign(Object.create(pn.prototype), {
        constructor: dn,
        isWebGLMultisampleRenderTarget: !0,
        copy: function(t) {
            return pn.prototype.copy.call(this, t),
            this.samples = t.samples,
            this
        }
    }),
    ((fn.prototype = Object.create(pn.prototype)).constructor = fn).prototype.isWebGLRenderTargetCube = !0,
    ((mn.prototype = Object.create(hn.prototype)).constructor = mn).prototype.isDataTexture = !0,
    Object.assign(gn.prototype, {
        isBox3: !0,
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromArray: function(t) {
            for (var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var l = t[s]
                  , h = t[s + 1]
                  , u = t[s + 2];
                l < e && (e = l),
                h < n && (n = h),
                u < i && (i = u),
                r < l && (r = l),
                a < h && (a = h),
                o < u && (o = u)
            }
            return this.min.set(e, n, i),
            this.max.set(r, a, o),
            this
        },
        setFromBufferAttribute: function(t) {
            for (var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var l = t.getX(s)
                  , h = t.getY(s)
                  , u = t.getZ(s);
                l < e && (e = l),
                h < n && (n = h),
                u < i && (i = u),
                r < l && (r = l),
                a < h && (a = h),
                o < u && (o = u)
            }
            return this.min.set(e, n, i),
            this.max.set(r, a, o),
            this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: (He = new De,
        function(t, e) {
            var n = He.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n),
            this.max.copy(t).add(n),
            this
        }
        ),
        setFromObject: function(t) {
            return this.makeEmpty(),
            this.expandByObject(t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0,
            this.max.x = this.max.y = this.max.z = -1 / 0,
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"),
            t = new De),
            this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"),
            t = new De),
            this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        expandByObject: function() {
            var r, a, o, s = new De;
            function e(t) {
                var e = t.geometry;
                if (void 0 !== e)
                    if (e.isGeometry) {
                        var n = e.vertices;
                        for (a = 0,
                        o = n.length; a < o; a++)
                            s.copy(n[a]),
                            s.applyMatrix4(t.matrixWorld),
                            r.expandByPoint(s)
                    } else if (e.isBufferGeometry) {
                        var i = e.attributes.position;
                        if (void 0 !== i)
                            for (a = 0,
                            o = i.count; a < o; a++)
                                s.fromBufferAttribute(i, a).applyMatrix4(t.matrixWorld),
                                r.expandByPoint(s)
                    }
            }
            return function(t) {
                return r = this,
                t.updateMatrixWorld(!0),
                t.traverse(e),
                this
            }
        }(),
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"),
            e = new De),
            e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: (ke = new De,
        function(t) {
            return this.clampPoint(t.center, ke),
            ke.distanceToSquared(t.center) <= t.radius * t.radius
        }
        ),
        intersectsPlane: function(t) {
            var e, n;
            return n = 0 < t.normal.x ? (e = t.normal.x * this.min.x,
            t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
            t.normal.x * this.min.x),
            0 < t.normal.y ? (e += t.normal.y * this.min.y,
            n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
            n += t.normal.y * this.min.y),
            0 < t.normal.z ? (e += t.normal.z * this.min.z,
            n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
            n += t.normal.z * this.min.z),
            e <= -t.constant && n >= -t.constant
        },
        intersectsTriangle: function() {
            var s = new De
              , c = new De
              , l = new De
              , n = new De
              , i = new De
              , r = new De
              , h = new De
              , a = new De
              , u = new De
              , o = new De;
            function p(t) {
                var e, n;
                for (e = 0,
                n = t.length - 3; e <= n; e += 3) {
                    h.fromArray(t, e);
                    var i = u.x * Math.abs(h.x) + u.y * Math.abs(h.y) + u.z * Math.abs(h.z)
                      , r = s.dot(h)
                      , a = c.dot(h)
                      , o = l.dot(h);
                    if (Math.max(-Math.max(r, a, o), Math.min(r, a, o)) > i)
                        return !1
                }
                return !0
            }
            return function(t) {
                if (this.isEmpty())
                    return !1;
                this.getCenter(a),
                u.subVectors(this.max, a),
                s.subVectors(t.a, a),
                c.subVectors(t.b, a),
                l.subVectors(t.c, a),
                n.subVectors(c, s),
                i.subVectors(l, c),
                r.subVectors(s, l);
                var e = [0, -n.z, n.y, 0, -i.z, i.y, 0, -r.z, r.y, n.z, 0, -n.x, i.z, 0, -i.x, r.z, 0, -r.x, -n.y, n.x, 0, -i.y, i.x, 0, -r.y, r.x, 0];
                return !!p(e) && (!!p(e = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (o.crossVectors(n, i),
                p(e = [o.x, o.y, o.z])))
            }
        }(),
        clampPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"),
            e = new De),
            e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: (Fe = new De,
        function(t) {
            return Fe.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        ),
        getBoundingSphere: (Ge = new De,
        function(t) {
            return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"),
            this.getCenter(t.center),
            t.radius = .5 * this.getSize(Ge).length(),
            t
        }
        ),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        applyMatrix4: (Ue = [new De, new De, new De, new De, new De, new De, new De, new De],
        function(t) {
            return this.isEmpty() || (Ue[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            Ue[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            Ue[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            Ue[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            Ue[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            Ue[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            Ue[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            Ue[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.setFromPoints(Ue)),
            this
        }
        ),
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }),
    Object.assign(vn.prototype, {
        set: function(t, e) {
            return this.center.copy(t),
            this.radius = e,
            this
        },
        setFromPoints: (Ve = new gn,
        function(t, e) {
            var n = this.center;
            void 0 !== e ? n.copy(e) : Ve.setFromPoints(t).getCenter(n);
            for (var i = 0, r = 0, a = t.length; r < a; r++)
                i = Math.max(i, n.distanceToSquared(t[r]));
            return this.radius = Math.sqrt(i),
            this
        }
        ),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.center.copy(t.center),
            this.radius = t.radius,
            this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function(t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function(t, e) {
            var n = this.center.distanceToSquared(t);
            return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
            e = new De),
            e.copy(t),
            n > this.radius * this.radius && (e.sub(this.center).normalize(),
            e.multiplyScalar(this.radius).add(this.center)),
            e
        },
        getBoundingBox: function(t) {
            return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
            t = new gn),
            t.set(this.center, this.center),
            t.expandByScalar(this.radius),
            t
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t),
            this.radius = this.radius * t.getMaxScaleOnAxis(),
            this
        },
        translate: function(t) {
            return this.center.add(t),
            this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }),
    Object.assign(yn.prototype, {
        set: function(t, e) {
            return this.normal.copy(t),
            this.constant = e,
            this
        },
        setComponents: function(t, e, n, i) {
            return this.normal.set(t, e, n),
            this.constant = i,
            this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t),
            this.constant = -e.dot(this.normal),
            this
        },
        setFromCoplanarPoints: (Xe = new De,
        Ye = new De,
        function(t, e, n) {
            var i = Xe.subVectors(n, e).cross(Ye.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t),
            this
        }
        ),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.normal.copy(t.normal),
            this.constant = t.constant,
            this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t),
            this.constant *= t,
            this
        },
        negate: function() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"),
            e = new De),
            e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        },
        intersectLine: (qe = new De,
        function(t, e) {
            void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"),
            e = new De);
            var n = t.delta(qe)
              , i = this.normal.dot(n);
            if (0 === i)
                return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
            var r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || 1 < r ? void 0 : e.copy(n).multiplyScalar(r).add(t.start)
        }
        ),
        intersectsLine: function(t) {
            var e = this.distanceToPoint(t.start)
              , n = this.distanceToPoint(t.end);
            return e < 0 && 0 < n || n < 0 && 0 < e
        },
        intersectsBox: function(t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function(t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function(t) {
            return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
            t = new De),
            t.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: (je = new De,
        We = new Ne,
        function(t, e) {
            var n = e || We.getNormalMatrix(t)
              , i = this.coplanarPoint(je).applyMatrix4(t)
              , r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r),
            this
        }
        ),
        translate: function(t) {
            return this.constant -= t.dot(this.normal),
            this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }),
    Object.assign(xn.prototype, {
        set: function(t, e, n, i, r, a) {
            var o = this.planes;
            return o[0].copy(t),
            o[1].copy(e),
            o[2].copy(n),
            o[3].copy(i),
            o[4].copy(r),
            o[5].copy(a),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++)
                e[n].copy(t.planes[n]);
            return this
        },
        setFromMatrix: function(t) {
            var e = this.planes
              , n = t.elements
              , i = n[0]
              , r = n[1]
              , a = n[2]
              , o = n[3]
              , s = n[4]
              , c = n[5]
              , l = n[6]
              , h = n[7]
              , u = n[8]
              , p = n[9]
              , d = n[10]
              , f = n[11]
              , m = n[12]
              , g = n[13]
              , v = n[14]
              , y = n[15];
            return e[0].setComponents(o - i, h - s, f - u, y - m).normalize(),
            e[1].setComponents(o + i, h + s, f + u, y + m).normalize(),
            e[2].setComponents(o + r, h + c, f + p, y + g).normalize(),
            e[3].setComponents(o - r, h - c, f - p, y - g).normalize(),
            e[4].setComponents(o - a, h - l, f - d, y - v).normalize(),
            e[5].setComponents(o + a, h + l, f + d, y + v).normalize(),
            this
        },
        intersectsObject: (Qe = new vn,
        function(t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(),
            Qe.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Qe)
        }
        ),
        intersectsSprite: (Ze = new vn,
        function(t) {
            return Ze.center.set(0, 0, 0),
            Ze.radius = .7071067811865476,
            Ze.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Ze)
        }
        ),
        intersectsSphere: function(t) {
            for (var e = this.planes, n = t.center, i = -t.radius, r = 0; r < 6; r++) {
                if (e[r].distanceToPoint(n) < i)
                    return !1
            }
            return !0
        },
        intersectsBox: (Je = new De,
        function(t) {
            for (var e = this.planes, n = 0; n < 6; n++) {
                var i = e[n];
                if (Je.x = 0 < i.normal.x ? t.max.x : t.min.x,
                Je.y = 0 < i.normal.y ? t.max.y : t.min.y,
                Je.z = 0 < i.normal.z ? t.max.z : t.min.z,
                i.distanceToPoint(Je) < 0)
                    return !1
            }
            return !0
        }
        ),
        containsPoint: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++)
                if (e[n].distanceToPoint(t) < 0)
                    return !1;
            return !0
        }
    }),
    Object.assign(bn.prototype, {
        isMatrix4: !0,
        set: function(t, e, n, i, r, a, o, s, c, l, h, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = t,
            g[4] = e,
            g[8] = n,
            g[12] = i,
            g[1] = r,
            g[5] = a,
            g[9] = o,
            g[13] = s,
            g[2] = c,
            g[6] = l,
            g[10] = h,
            g[14] = u,
            g[3] = p,
            g[7] = d,
            g[11] = f,
            g[15] = m,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new bn).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            e[9] = n[9],
            e[10] = n[10],
            e[11] = n[11],
            e[12] = n[12],
            e[13] = n[13],
            e[14] = n[14],
            e[15] = n[15],
            this
        },
        copyPosition: function(t) {
            var e = this.elements
              , n = t.elements;
            return e[12] = n[12],
            e[13] = n[13],
            e[14] = n[14],
            this
        },
        extractBasis: function(t, e, n) {
            return t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
        },
        makeBasis: function(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
            this
        },
        extractRotation: (sn = new De,
        function(t) {
            var e = this.elements
              , n = t.elements
              , i = 1 / sn.setFromMatrixColumn(t, 0).length()
              , r = 1 / sn.setFromMatrixColumn(t, 1).length()
              , a = 1 / sn.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * i,
            e[1] = n[1] * i,
            e[2] = n[2] * i,
            e[3] = 0,
            e[4] = n[4] * r,
            e[5] = n[5] * r,
            e[6] = n[6] * r,
            e[7] = 0,
            e[8] = n[8] * a,
            e[9] = n[9] * a,
            e[10] = n[10] * a,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        }
        ),
        makeRotationFromEuler: function(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements
              , n = t.x
              , i = t.y
              , r = t.z
              , a = Math.cos(n)
              , o = Math.sin(n)
              , s = Math.cos(i)
              , c = Math.sin(i)
              , l = Math.cos(r)
              , h = Math.sin(r);
            if ("XYZ" === t.order) {
                var u = a * l
                  , p = a * h
                  , d = o * l
                  , f = o * h;
                e[0] = s * l,
                e[4] = -s * h,
                e[8] = c,
                e[1] = p + d * c,
                e[5] = u - f * c,
                e[9] = -o * s,
                e[2] = f - u * c,
                e[6] = d + p * c,
                e[10] = a * s
            } else if ("YXZ" === t.order) {
                var m = s * l
                  , g = s * h
                  , v = c * l
                  , y = c * h;
                e[0] = m + y * o,
                e[4] = v * o - g,
                e[8] = a * c,
                e[1] = a * h,
                e[5] = a * l,
                e[9] = -o,
                e[2] = g * o - v,
                e[6] = y + m * o,
                e[10] = a * s
            } else if ("ZXY" === t.order) {
                m = s * l,
                g = s * h,
                v = c * l,
                y = c * h;
                e[0] = m - y * o,
                e[4] = -a * h,
                e[8] = v + g * o,
                e[1] = g + v * o,
                e[5] = a * l,
                e[9] = y - m * o,
                e[2] = -a * c,
                e[6] = o,
                e[10] = a * s
            } else if ("ZYX" === t.order) {
                u = a * l,
                p = a * h,
                d = o * l,
                f = o * h;
                e[0] = s * l,
                e[4] = d * c - p,
                e[8] = u * c + f,
                e[1] = s * h,
                e[5] = f * c + u,
                e[9] = p * c - d,
                e[2] = -c,
                e[6] = o * s,
                e[10] = a * s
            } else if ("YZX" === t.order) {
                var x = a * s
                  , b = a * c
                  , w = o * s
                  , _ = o * c;
                e[0] = s * l,
                e[4] = _ - x * h,
                e[8] = w * h + b,
                e[1] = h,
                e[5] = a * l,
                e[9] = -o * l,
                e[2] = -c * l,
                e[6] = b * h + w,
                e[10] = x - _ * h
            } else if ("XZY" === t.order) {
                x = a * s,
                b = a * c,
                w = o * s,
                _ = o * c;
                e[0] = s * l,
                e[4] = -h,
                e[8] = c * l,
                e[1] = x * h + _,
                e[5] = a * l,
                e[9] = b * h - w,
                e[2] = w * h - b,
                e[6] = o * l,
                e[10] = _ * h + x
            }
            return e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        },
        makeRotationFromQuaternion: (an = new De(0,0,0),
        on = new De(1,1,1),
        function(t) {
            return this.compose(an, t, on)
        }
        ),
        lookAt: (en = new De,
        nn = new De,
        rn = new De,
        function(t, e, n) {
            var i = this.elements;
            return rn.subVectors(t, e),
            0 === rn.lengthSq() && (rn.z = 1),
            rn.normalize(),
            en.crossVectors(n, rn),
            0 === en.lengthSq() && (1 === Math.abs(n.z) ? rn.x += 1e-4 : rn.z += 1e-4,
            rn.normalize(),
            en.crossVectors(n, rn)),
            en.normalize(),
            nn.crossVectors(rn, en),
            i[0] = en.x,
            i[4] = nn.x,
            i[8] = rn.x,
            i[1] = en.y,
            i[5] = nn.y,
            i[9] = rn.y,
            i[2] = en.z,
            i[6] = nn.z,
            i[10] = rn.z,
            this
        }
        ),
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var n = t.elements
              , i = e.elements
              , r = this.elements
              , a = n[0]
              , o = n[4]
              , s = n[8]
              , c = n[12]
              , l = n[1]
              , h = n[5]
              , u = n[9]
              , p = n[13]
              , d = n[2]
              , f = n[6]
              , m = n[10]
              , g = n[14]
              , v = n[3]
              , y = n[7]
              , x = n[11]
              , b = n[15]
              , w = i[0]
              , _ = i[4]
              , M = i[8]
              , S = i[12]
              , T = i[1]
              , E = i[5]
              , A = i[9]
              , L = i[13]
              , P = i[2]
              , R = i[6]
              , C = i[10]
              , O = i[14]
              , I = i[3]
              , D = i[7]
              , N = i[11]
              , z = i[15];
            return r[0] = a * w + o * T + s * P + c * I,
            r[4] = a * _ + o * E + s * R + c * D,
            r[8] = a * M + o * A + s * C + c * N,
            r[12] = a * S + o * L + s * O + c * z,
            r[1] = l * w + h * T + u * P + p * I,
            r[5] = l * _ + h * E + u * R + p * D,
            r[9] = l * M + h * A + u * C + p * N,
            r[13] = l * S + h * L + u * O + p * z,
            r[2] = d * w + f * T + m * P + g * I,
            r[6] = d * _ + f * E + m * R + g * D,
            r[10] = d * M + f * A + m * C + g * N,
            r[14] = d * S + f * L + m * O + g * z,
            r[3] = v * w + y * T + x * P + b * I,
            r[7] = v * _ + y * E + x * R + b * D,
            r[11] = v * M + y * A + x * C + b * N,
            r[15] = v * S + y * L + x * O + b * z,
            this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[4] *= t,
            e[8] *= t,
            e[12] *= t,
            e[1] *= t,
            e[5] *= t,
            e[9] *= t,
            e[13] *= t,
            e[2] *= t,
            e[6] *= t,
            e[10] *= t,
            e[14] *= t,
            e[3] *= t,
            e[7] *= t,
            e[11] *= t,
            e[15] *= t,
            this
        },
        applyToBufferAttribute: (tn = new De,
        function(t) {
            for (var e = 0, n = t.count; e < n; e++)
                tn.x = t.getX(e),
                tn.y = t.getY(e),
                tn.z = t.getZ(e),
                tn.applyMatrix4(this),
                t.setXYZ(e, tn.x, tn.y, tn.z);
            return t
        }
        ),
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , n = t[4]
              , i = t[8]
              , r = t[12]
              , a = t[1]
              , o = t[5]
              , s = t[9]
              , c = t[13]
              , l = t[2]
              , h = t[6]
              , u = t[10]
              , p = t[14];
            return t[3] * (+r * s * h - i * c * h - r * o * u + n * c * u + i * o * p - n * s * p) + t[7] * (+e * s * p - e * c * u + r * a * u - i * a * p + i * c * l - r * s * l) + t[11] * (+e * c * h - e * o * p - r * a * h + n * a * p + r * o * l - n * c * l) + t[15] * (-i * o * l - e * s * h + e * o * u + i * a * h - n * a * u + n * s * l)
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1],
            e[1] = e[4],
            e[4] = t,
            t = e[2],
            e[2] = e[8],
            e[8] = t,
            t = e[6],
            e[6] = e[9],
            e[9] = t,
            t = e[3],
            e[3] = e[12],
            e[12] = t,
            t = e[7],
            e[7] = e[13],
            e[13] = t,
            t = e[11],
            e[11] = e[14],
            e[14] = t,
            this
        },
        setPosition: function(t) {
            var e = this.elements;
            return e[12] = t.x,
            e[13] = t.y,
            e[14] = t.z,
            this
        },
        getInverse: function(t, e) {
            var n = this.elements
              , i = t.elements
              , r = i[0]
              , a = i[1]
              , o = i[2]
              , s = i[3]
              , c = i[4]
              , l = i[5]
              , h = i[6]
              , u = i[7]
              , p = i[8]
              , d = i[9]
              , f = i[10]
              , m = i[11]
              , g = i[12]
              , v = i[13]
              , y = i[14]
              , x = i[15]
              , b = d * y * u - v * f * u + v * h * m - l * y * m - d * h * x + l * f * x
              , w = g * f * u - p * y * u - g * h * m + c * y * m + p * h * x - c * f * x
              , _ = p * v * u - g * d * u + g * l * m - c * v * m - p * l * x + c * d * x
              , M = g * d * h - p * v * h - g * l * f + c * v * f + p * l * y - c * d * y
              , S = r * b + a * w + o * _ + s * M;
            if (0 == S) {
                var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e)
                    throw new Error(T);
                return console.warn(T),
                this.identity()
            }
            var E = 1 / S;
            return n[0] = b * E,
            n[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a * f * x) * E,
            n[2] = (l * y * s - v * h * s + v * o * u - a * y * u - l * o * x + a * h * x) * E,
            n[3] = (d * h * s - l * f * s - d * o * u + a * f * u + l * o * m - a * h * m) * E,
            n[4] = w * E,
            n[5] = (p * y * s - g * f * s + g * o * m - r * y * m - p * o * x + r * f * x) * E,
            n[6] = (g * h * s - c * y * s - g * o * u + r * y * u + c * o * x - r * h * x) * E,
            n[7] = (c * f * s - p * h * s + p * o * u - r * f * u - c * o * m + r * h * m) * E,
            n[8] = _ * E,
            n[9] = (g * d * s - p * v * s - g * a * m + r * v * m + p * a * x - r * d * x) * E,
            n[10] = (c * v * s - g * l * s + g * a * u - r * v * u - c * a * x + r * l * x) * E,
            n[11] = (p * l * s - c * d * s - p * a * u + r * d * u + c * a * m - r * l * m) * E,
            n[12] = M * E,
            n[13] = (p * v * o - g * d * o + g * a * f - r * v * f - p * a * y + r * d * y) * E,
            n[14] = (g * l * o - c * v * o - g * a * h + r * v * h + c * a * y - r * l * y) * E,
            n[15] = (c * d * o - p * l * o + p * a * h - r * d * h - c * a * f + r * l * f) * E,
            this
        },
        scale: function(t) {
            var e = this.elements
              , n = t.x
              , i = t.y
              , r = t.z;
            return e[0] *= n,
            e[4] *= i,
            e[8] *= r,
            e[1] *= n,
            e[5] *= i,
            e[9] *= r,
            e[2] *= n,
            e[6] *= i,
            e[10] *= r,
            e[3] *= n,
            e[7] *= i,
            e[11] *= r,
            this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements
              , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
              , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
              , i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i))
        },
        makeTranslation: function(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
            this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        makeRotationAxis: function(t, e) {
            var n = Math.cos(e)
              , i = Math.sin(e)
              , r = 1 - n
              , a = t.x
              , o = t.y
              , s = t.z
              , c = r * a
              , l = r * o;
            return this.set(c * a + n, c * o - i * s, c * s + i * o, 0, c * o + i * s, l * o + n, l * s - i * a, 0, c * s - i * o, l * s + i * a, r * s * s + n, 0, 0, 0, 0, 1),
            this
        },
        makeScale: function(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
            this
        },
        makeShear: function(t, e, n) {
            return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1),
            this
        },
        compose: function(t, e, n) {
            var i = this.elements
              , r = e._x
              , a = e._y
              , o = e._z
              , s = e._w
              , c = r + r
              , l = a + a
              , h = o + o
              , u = r * c
              , p = r * l
              , d = r * h
              , f = a * l
              , m = a * h
              , g = o * h
              , v = s * c
              , y = s * l
              , x = s * h
              , b = n.x
              , w = n.y
              , _ = n.z;
            return i[0] = (1 - (f + g)) * b,
            i[1] = (p + x) * b,
            i[2] = (d - y) * b,
            i[3] = 0,
            i[4] = (p - x) * w,
            i[5] = (1 - (u + g)) * w,
            i[6] = (m + v) * w,
            i[7] = 0,
            i[8] = (d + y) * _,
            i[9] = (m - v) * _,
            i[10] = (1 - (u + f)) * _,
            i[11] = 0,
            i[12] = t.x,
            i[13] = t.y,
            i[14] = t.z,
            i[15] = 1,
            this
        },
        decompose: (Ke = new De,
        $e = new bn,
        function(t, e, n) {
            var i = this.elements
              , r = Ke.set(i[0], i[1], i[2]).length()
              , a = Ke.set(i[4], i[5], i[6]).length()
              , o = Ke.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r),
            t.x = i[12],
            t.y = i[13],
            t.z = i[14],
            $e.copy(this);
            var s = 1 / r
              , c = 1 / a
              , l = 1 / o;
            return $e.elements[0] *= s,
            $e.elements[1] *= s,
            $e.elements[2] *= s,
            $e.elements[4] *= c,
            $e.elements[5] *= c,
            $e.elements[6] *= c,
            $e.elements[8] *= l,
            $e.elements[9] *= l,
            $e.elements[10] *= l,
            e.setFromRotationMatrix($e),
            n.x = r,
            n.y = a,
            n.z = o,
            this
        }
        ),
        makePerspective: function(t, e, n, i, r, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var o = this.elements
              , s = 2 * r / (e - t)
              , c = 2 * r / (n - i)
              , l = (e + t) / (e - t)
              , h = (n + i) / (n - i)
              , u = -(a + r) / (a - r)
              , p = -2 * a * r / (a - r);
            return o[0] = s,
            o[4] = 0,
            o[8] = l,
            o[12] = 0,
            o[1] = 0,
            o[5] = c,
            o[9] = h,
            o[13] = 0,
            o[2] = 0,
            o[6] = 0,
            o[10] = u,
            o[14] = p,
            o[3] = 0,
            o[7] = 0,
            o[11] = -1,
            o[15] = 0,
            this
        },
        makeOrthographic: function(t, e, n, i, r, a) {
            var o = this.elements
              , s = 1 / (e - t)
              , c = 1 / (n - i)
              , l = 1 / (a - r)
              , h = (e + t) * s
              , u = (n + i) * c
              , p = (a + r) * l;
            return o[0] = 2 * s,
            o[4] = 0,
            o[8] = 0,
            o[12] = -h,
            o[1] = 0,
            o[5] = 2 * c,
            o[9] = 0,
            o[13] = -u,
            o[2] = 0,
            o[6] = 0,
            o[10] = -2 * l,
            o[14] = -p,
            o[3] = 0,
            o[7] = 0,
            o[11] = 0,
            o[15] = 1,
            this
        },
        equals: function(t) {
            for (var e = this.elements, n = t.elements, i = 0; i < 16; i++)
                if (e[i] !== n[i])
                    return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 16; n++)
                this.elements[n] = t[n + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t[e + 9] = n[9],
            t[e + 10] = n[10],
            t[e + 11] = n[11],
            t[e + 12] = n[12],
            t[e + 13] = n[13],
            t[e + 14] = n[14],
            t[e + 15] = n[15],
            t
        }
    });
    var wn = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick( specularColor, dotNV );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
        lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#endif\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\tfloat clearCoatInv = 1.0 - clearCoatDHR;\n\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec3 singleScattering = vec3( 0.0 );\n\t\tvec3 multiScattering = vec3( 0.0 );\n\t\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\t\tvec3 diffuse = material.diffuseColor;\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * singleScattering;\n\t\treflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;\n\t\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\t#else\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#endif\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, irradiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",
        map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif",
        normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\t#ifdef USE_TANGENT\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy = normalScale * mapN.xy;\n\t\t\tnormal = normalize( vTBN * mapN );\n\t\t#else\n\t\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t\t#endif\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#if defined( DITHERING )\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
        uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",
        uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
    };
    function _n(t) {
        var e = {};
        for (var n in t)
            for (var i in e[n] = {},
            t[n]) {
                var r = t[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
            }
        return e
    }
    function Mn(t) {
        for (var e = {}, n = 0; n < t.length; n++) {
            var i = _n(t[n]);
            for (var r in i)
                e[r] = i[r]
        }
        return e
    }
    var Sn, Tn, En, An = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function Ln(t, e, n) {
        return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }
    Object.assign(Ln.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
            this
        },
        setScalar: function(t) {
            return this.r = t,
            this.g = t,
            this.b = t,
            this
        },
        setHex: function(t) {
            return t = Math.floor(t),
            this.r = (t >> 16 & 255) / 255,
            this.g = (t >> 8 & 255) / 255,
            this.b = (255 & t) / 255,
            this
        },
        setRGB: function(t, e, n) {
            return this.r = t,
            this.g = e,
            this.b = n,
            this
        },
        setHSL: function() {
            function a(t, e, n) {
                return n < 0 && (n += 1),
                1 < n && (n -= 1),
                n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
            }
            return function(t, e, n) {
                if (t = Ce.euclideanModulo(t, 1),
                e = Ce.clamp(e, 0, 1),
                n = Ce.clamp(n, 0, 1),
                0 === e)
                    this.r = this.g = this.b = n;
                else {
                    var i = n <= .5 ? n * (1 + e) : n + e - n * e
                      , r = 2 * n - i;
                    this.r = a(r, i, t + 1 / 3),
                    this.g = a(r, i, t),
                    this.b = a(r, i, t - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function(e) {
            function t(t) {
                void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                var i, r = n[1], a = n[2];
                switch (r) {
                case "rgb":
                case "rgba":
                    if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                        return this.r = Math.min(255, parseInt(i[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(i[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(i[3], 10)) / 255,
                        t(i[5]),
                        this;
                    if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                        return this.r = Math.min(100, parseInt(i[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(i[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(i[3], 10)) / 100,
                        t(i[5]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                        var o = parseFloat(i[1]) / 360
                          , s = parseInt(i[2], 10) / 100
                          , c = parseInt(i[3], 10) / 100;
                        return t(i[5]),
                        this.setHSL(o, s, c)
                    }
                }
            } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
                var l, h = (l = n[1]).length;
                if (3 === h)
                    return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255,
                    this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255,
                    this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255,
                    this;
                if (6 === h)
                    return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255,
                    this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255,
                    this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255,
                    this
            }
            e && 0 < e.length && (void 0 !== (l = An[e]) ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + e));
            return this
        },
        clone: function() {
            return new this.constructor(this.r,this.g,this.b)
        },
        copy: function(t) {
            return this.r = t.r,
            this.g = t.g,
            this.b = t.b,
            this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2),
            this.r = Math.pow(t.r, e),
            this.g = Math.pow(t.g, e),
            this.b = Math.pow(t.b, e),
            this
        },
        copyLinearToGamma: function(t, e) {
            void 0 === e && (e = 2);
            var n = 0 < e ? 1 / e : 1;
            return this.r = Math.pow(t.r, n),
            this.g = Math.pow(t.g, n),
            this.b = Math.pow(t.b, n),
            this
        },
        convertGammaToLinear: function(t) {
            return this.copyGammaToLinear(this, t),
            this
        },
        convertLinearToGamma: function(t) {
            return this.copyLinearToGamma(this, t),
            this
        },
        copySRGBToLinear: function() {
            function e(t) {
                return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
            }
            return function(t) {
                return this.r = e(t.r),
                this.g = e(t.g),
                this.b = e(t.b),
                this
            }
        }(),
        copyLinearToSRGB: function() {
            function e(t) {
                return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
            }
            return function(t) {
                return this.r = e(t.r),
                this.g = e(t.g),
                this.b = e(t.b),
                this
            }
        }(),
        convertSRGBToLinear: function() {
            return this.copySRGBToLinear(this),
            this
        },
        convertLinearToSRGB: function() {
            return this.copyLinearToSRGB(this),
            this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"),
            t = {
                h: 0,
                s: 0,
                l: 0
            });
            var e, n, i = this.r, r = this.g, a = this.b, o = Math.max(i, r, a), s = Math.min(i, r, a), c = (s + o) / 2;
            if (s === o)
                n = e = 0;
            else {
                var l = o - s;
                switch (n = c <= .5 ? l / (o + s) : l / (2 - o - s),
                o) {
                case i:
                    e = (r - a) / l + (r < a ? 6 : 0);
                    break;
                case r:
                    e = (a - i) / l + 2;
                    break;
                case a:
                    e = (i - r) / l + 4
                }
                e /= 6
            }
            return t.h = e,
            t.s = n,
            t.l = c,
            t
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: (En = {},
        function(t, e, n) {
            return this.getHSL(En),
            En.h += t,
            En.s += e,
            En.l += n,
            this.setHSL(En.h, En.s, En.l),
            this
        }
        ),
        add: function(t) {
            return this.r += t.r,
            this.g += t.g,
            this.b += t.b,
            this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r,
            this.g = t.g + e.g,
            this.b = t.b + e.b,
            this
        },
        addScalar: function(t) {
            return this.r += t,
            this.g += t,
            this.b += t,
            this
        },
        sub: function(t) {
            return this.r = Math.max(0, this.r - t.r),
            this.g = Math.max(0, this.g - t.g),
            this.b = Math.max(0, this.b - t.b),
            this
        },
        multiply: function(t) {
            return this.r *= t.r,
            this.g *= t.g,
            this.b *= t.b,
            this
        },
        multiplyScalar: function(t) {
            return this.r *= t,
            this.g *= t,
            this.b *= t,
            this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e,
            this.g += (t.g - this.g) * e,
            this.b += (t.b - this.b) * e,
            this
        },
        lerpHSL: (Sn = {
            h: 0,
            s: 0,
            l: 0
        },
        Tn = {
            h: 0,
            s: 0,
            l: 0
        },
        function(t, e) {
            this.getHSL(Sn),
            t.getHSL(Tn);
            var n = Ce.lerp(Sn.h, Tn.h, e)
              , i = Ce.lerp(Sn.s, Tn.s, e)
              , r = Ce.lerp(Sn.l, Tn.l, e);
            return this.setHSL(n, i, r),
            this
        }
        ),
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.r = t[e],
            this.g = t[e + 1],
            this.b = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.r,
            t[e + 1] = this.g,
            t[e + 2] = this.b,
            t
        },
        toJSON: function() {
            return this.getHex()
        }
    });
    var Pn, Rn, Cn = {
        common: {
            diffuse: {
                value: new Ln(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Ne
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new Oe(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Ln(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new Ln(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Ne
            }
        },
        sprite: {
            diffuse: {
                value: new Ln(15658734)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new Oe(.5,.5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Ne
            }
        }
    }, On = {
        basic: {
            uniforms: Mn([Cn.common, Cn.specularmap, Cn.envmap, Cn.aomap, Cn.lightmap, Cn.fog]),
            vertexShader: wn.meshbasic_vert,
            fragmentShader: wn.meshbasic_frag
        },
        lambert: {
            uniforms: Mn([Cn.common, Cn.specularmap, Cn.envmap, Cn.aomap, Cn.lightmap, Cn.emissivemap, Cn.fog, Cn.lights, {
                emissive: {
                    value: new Ln(0)
                }
            }]),
            vertexShader: wn.meshlambert_vert,
            fragmentShader: wn.meshlambert_frag
        },
        phong: {
            uniforms: Mn([Cn.common, Cn.specularmap, Cn.envmap, Cn.aomap, Cn.lightmap, Cn.emissivemap, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, Cn.gradientmap, Cn.fog, Cn.lights, {
                emissive: {
                    value: new Ln(0)
                },
                specular: {
                    value: new Ln(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: wn.meshphong_vert,
            fragmentShader: wn.meshphong_frag
        },
        standard: {
            uniforms: Mn([Cn.common, Cn.envmap, Cn.aomap, Cn.lightmap, Cn.emissivemap, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, Cn.roughnessmap, Cn.metalnessmap, Cn.fog, Cn.lights, {
                emissive: {
                    value: new Ln(0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: .5
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: wn.meshphysical_vert,
            fragmentShader: wn.meshphysical_frag
        },
        matcap: {
            uniforms: Mn([Cn.common, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, Cn.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: wn.meshmatcap_vert,
            fragmentShader: wn.meshmatcap_frag
        },
        points: {
            uniforms: Mn([Cn.points, Cn.fog]),
            vertexShader: wn.points_vert,
            fragmentShader: wn.points_frag
        },
        dashed: {
            uniforms: Mn([Cn.common, Cn.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: wn.linedashed_vert,
            fragmentShader: wn.linedashed_frag
        },
        depth: {
            uniforms: Mn([Cn.common, Cn.displacementmap]),
            vertexShader: wn.depth_vert,
            fragmentShader: wn.depth_frag
        },
        normal: {
            uniforms: Mn([Cn.common, Cn.bumpmap, Cn.normalmap, Cn.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: wn.normal_vert,
            fragmentShader: wn.normal_frag
        },
        sprite: {
            uniforms: Mn([Cn.sprite, Cn.fog]),
            vertexShader: wn.sprite_vert,
            fragmentShader: wn.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Ne
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: wn.background_vert,
            fragmentShader: wn.background_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: wn.cube_vert,
            fragmentShader: wn.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: wn.equirect_vert,
            fragmentShader: wn.equirect_frag
        },
        distanceRGBA: {
            uniforms: Mn([Cn.common, Cn.displacementmap, {
                referencePosition: {
                    value: new De
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: wn.distanceRGBA_vert,
            fragmentShader: wn.distanceRGBA_frag
        },
        shadow: {
            uniforms: Mn([Cn.lights, Cn.fog, {
                color: {
                    value: new Ln(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: wn.shadow_vert,
            fragmentShader: wn.shadow_frag
        }
    };
    function In() {
        var n = null
          , i = !1
          , r = null;
        function a(t, e) {
            !1 !== i && (r(t, e),
            n.requestAnimationFrame(a))
        }
        return {
            start: function() {
                !0 !== i && null !== r && (n.requestAnimationFrame(a),
                i = !0)
            },
            stop: function() {
                i = !1
            },
            setAnimationLoop: function(t) {
                r = t
            },
            setContext: function(t) {
                n = t
            }
        }
    }
    function Dn(o) {
        var i = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data),
                i.get(t)
            },
            remove: function(t) {
                t.isInterleavedBufferAttribute && (t = t.data);
                var e = i.get(t);
                e && (o.deleteBuffer(e.buffer),
                i.delete(t))
            },
            update: function(t, e) {
                t.isInterleavedBufferAttribute && (t = t.data);
                var n = i.get(t);
                void 0 === n ? i.set(t, function(t, e) {
                    var n = t.array
                      , i = t.dynamic ? 35048 : 35044
                      , r = o.createBuffer();
                    o.bindBuffer(e, r),
                    o.bufferData(e, n, i),
                    t.onUploadCallback();
                    var a = 5126;
                    return n instanceof Float32Array ? a = 5126 : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? a = 5123 : n instanceof Int16Array ? a = 5122 : n instanceof Uint32Array ? a = 5125 : n instanceof Int32Array ? a = 5124 : n instanceof Int8Array ? a = 5120 : n instanceof Uint8Array && (a = 5121),
                    {
                        buffer: r,
                        type: a,
                        bytesPerElement: n.BYTES_PER_ELEMENT,
                        version: t.version
                    }
                }(t, e)) : n.version < t.version && (function(t, e, n) {
                    var i = e.array
                      , r = e.updateRange;
                    o.bindBuffer(n, t),
                    !1 === e.dynamic ? o.bufferData(n, i, 35044) : -1 === r.count ? o.bufferSubData(n, 0, i) : 0 === r.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (o.bufferSubData(n, r.offset * i.BYTES_PER_ELEMENT, i.subarray(r.offset, r.offset + r.count)),
                    r.count = -1)
                }(n.buffer, t, e),
                n.version = t.version)
            }
        }
    }
    function Nn(t, e, n, i, r, a) {
        this.a = t,
        this.b = e,
        this.c = n,
        this.normal = i && i.isVector3 ? i : new De,
        this.vertexNormals = Array.isArray(i) ? i : [],
        this.color = r && r.isColor ? r : new Ln,
        this.vertexColors = Array.isArray(r) ? r : [],
        this.materialIndex = void 0 !== a ? a : 0
    }
    function zn(t, e, n, i) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = n || 0,
        this._order = i || zn.DefaultOrder
    }
    function Bn() {
        this.mask = 1
    }
    On.physical = {
        uniforms: Mn([On.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: wn.meshphysical_vert,
        fragmentShader: wn.meshphysical_frag
    },
    Object.assign(Nn.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.a = t.a,
            this.b = t.b,
            this.c = t.c,
            this.normal.copy(t.normal),
            this.color.copy(t.color),
            this.materialIndex = t.materialIndex;
            for (var e = 0, n = t.vertexNormals.length; e < n; e++)
                this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0,
            n = t.vertexColors.length; e < n; e++)
                this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    }),
    zn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
    zn.DefaultOrder = "XYZ",
    Object.defineProperties(zn.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t,
                this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t,
                this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t,
                this.onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(t) {
                this._order = t,
                this.onChangeCallback()
            }
        }
    }),
    Object.assign(zn.prototype, {
        isEuler: !0,
        set: function(t, e, n, i) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._order = i || this._order,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        },
        copy: function(t) {
            return this._x = t._x,
            this._y = t._y,
            this._z = t._z,
            this._order = t._order,
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t, e, n) {
            var i = Ce.clamp
              , r = t.elements
              , a = r[0]
              , o = r[4]
              , s = r[8]
              , c = r[1]
              , l = r[5]
              , h = r[9]
              , u = r[2]
              , p = r[6]
              , d = r[10];
            return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(i(s, -1, 1)),
            Math.abs(s) < .99999 ? (this._x = Math.atan2(-h, d),
            this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, l),
            this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-i(h, -1, 1)),
            Math.abs(h) < .99999 ? (this._y = Math.atan2(s, d),
            this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, a),
            this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(i(p, -1, 1)),
            Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d),
            this._z = Math.atan2(-o, l)) : (this._y = 0,
            this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-i(u, -1, 1)),
            Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d),
            this._z = Math.atan2(c, a)) : (this._x = 0,
            this._z = Math.atan2(-o, l))) : "YZX" === e ? (this._z = Math.asin(i(c, -1, 1)),
            Math.abs(c) < .99999 ? (this._x = Math.atan2(-h, l),
            this._y = Math.atan2(-u, a)) : (this._x = 0,
            this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-i(o, -1, 1)),
            Math.abs(o) < .99999 ? (this._x = Math.atan2(p, l),
            this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-h, d),
            this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e),
            this._order = e,
            !1 !== n && this.onChangeCallback(),
            this
        },
        setFromQuaternion: (Rn = new bn,
        function(t, e, n) {
            return Rn.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(Rn, e, n)
        }
        ),
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: (Pn = new Ie,
        function(t) {
            return Pn.setFromEuler(this),
            this.setFromQuaternion(Pn, t)
        }
        ),
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0],
            this._y = t[1],
            this._z = t[2],
            void 0 !== t[3] && (this._order = t[3]),
            this.onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._order,
            t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new De(this._x,this._y,this._z)
        },
        onChange: function(t) {
            return this.onChangeCallback = t,
            this
        },
        onChangeCallback: function() {}
    }),
    Object.assign(Bn.prototype, {
        set: function(t) {
            this.mask = 1 << t | 0
        },
        enable: function(t) {
            this.mask |= 1 << t | 0
        },
        toggle: function(t) {
            this.mask ^= 1 << t | 0
        },
        disable: function(t) {
            this.mask &= ~(1 << t | 0)
        },
        test: function(t) {
            return 0 != (this.mask & t.mask)
        }
    });
    var Un, Gn, Fn, kn, Hn, Vn, jn, Wn, qn, Xn, Yn, Jn, Zn, Qn, Kn, $n, ti, ei, ni = 0;
    function ii() {
        Object.defineProperty(this, "id", {
            value: ni++
        }),
        this.uuid = Ce.generateUUID(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = ii.DefaultUp.clone();
        var t = new De
          , e = new zn
          , n = new Ie
          , i = new De(1,1,1);
        e.onChange(function() {
            n.setFromEuler(e, !1)
        }),
        n.onChange(function() {
            e.setFromQuaternion(n, void 0, !1)
        }),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new bn
            },
            normalMatrix: {
                value: new Ne
            }
        }),
        this.matrix = new bn,
        this.matrixWorld = new bn,
        this.matrixAutoUpdate = ii.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new Bn,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.userData = {}
    }
    ii.DefaultUp = new De(0,1,0),
    ii.DefaultMatrixAutoUpdate = !0,
    ii.prototype = Object.assign(Object.create(i.prototype), {
        constructor: ii,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(t) {
            this.matrix.multiplyMatrices(t, this.matrix),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(t) {
            return this.quaternion.premultiply(t),
            this
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: (ei = new Ie,
        function(t, e) {
            return ei.setFromAxisAngle(t, e),
            this.quaternion.multiply(ei),
            this
        }
        ),
        rotateOnWorldAxis: (ti = new Ie,
        function(t, e) {
            return ti.setFromAxisAngle(t, e),
            this.quaternion.premultiply(ti),
            this
        }
        ),
        rotateX: ($n = new De(1,0,0),
        function(t) {
            return this.rotateOnAxis($n, t)
        }
        ),
        rotateY: (Kn = new De(0,1,0),
        function(t) {
            return this.rotateOnAxis(Kn, t)
        }
        ),
        rotateZ: (Qn = new De(0,0,1),
        function(t) {
            return this.rotateOnAxis(Qn, t)
        }
        ),
        translateOnAxis: (Zn = new De,
        function(t, e) {
            return Zn.copy(t).applyQuaternion(this.quaternion),
            this.position.add(Zn.multiplyScalar(e)),
            this
        }
        ),
        translateX: (Jn = new De(1,0,0),
        function(t) {
            return this.translateOnAxis(Jn, t)
        }
        ),
        translateY: (Yn = new De(0,1,0),
        function(t) {
            return this.translateOnAxis(Yn, t)
        }
        ),
        translateZ: (Xn = new De(0,0,1),
        function(t) {
            return this.translateOnAxis(Xn, t)
        }
        ),
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: (qn = new bn,
        function(t) {
            return t.applyMatrix4(qn.getInverse(this.matrixWorld))
        }
        ),
        lookAt: (Hn = new Ie,
        Vn = new bn,
        jn = new De,
        Wn = new De,
        function(t, e, n) {
            t.isVector3 ? jn.copy(t) : jn.set(t, e, n);
            var i = this.parent;
            this.updateWorldMatrix(!0, !1),
            Wn.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight ? Vn.lookAt(Wn, jn, this.up) : Vn.lookAt(jn, Wn, this.up),
            this.quaternion.setFromRotationMatrix(Vn),
            i && (Vn.extractRotation(i.matrixWorld),
            Hn.setFromRotationMatrix(Vn),
            this.quaternion.premultiply(Hn.inverse()))
        }
        ),
        add: function(t) {
            if (1 < arguments.length) {
                for (var e = 0; e < arguments.length; e++)
                    this.add(arguments[e]);
                return this
            }
            return t === this ? console.error("THREE.Object3D.add: object can't be added as a child of itself.", t) : t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
            t.parent = this,
            t.dispatchEvent({
                type: "added"
            }),
            this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
            this
        },
        remove: function(t) {
            if (1 < arguments.length) {
                for (var e = 0; e < arguments.length; e++)
                    this.remove(arguments[e]);
                return this
            }
            var n = this.children.indexOf(t);
            return -1 !== n && (t.parent = null,
            t.dispatchEvent({
                type: "removed"
            }),
            this.children.splice(n, 1)),
            this
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e)
                return this;
            for (var n = 0, i = this.children.length; n < i; n++) {
                var r = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== r)
                    return r
            }
        },
        getWorldPosition: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
            t = new De),
            this.updateMatrixWorld(!0),
            t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: (Fn = new De,
        kn = new De,
        function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
            t = new Ie),
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(Fn, t, kn),
            t
        }
        ),
        getWorldScale: (Un = new De,
        Gn = new Ie,
        function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
            t = new De),
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(Un, Gn, t),
            t
        }
        ),
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
            t = new De),
            this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
        },
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = this.children, n = 0, i = e.length; n < i; n++)
                e[n].traverse(t)
        },
        traverseVisible: function(t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, n = 0, i = e.length; n < i; n++)
                    e[n].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e),
            e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            t = !(this.matrixWorldNeedsUpdate = !1));
            for (var e = this.children, n = 0, i = e.length; n < i; n++)
                e[n].updateMatrixWorld(t)
        },
        updateWorldMatrix: function(t, e) {
            var n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            !0 === e)
                for (var i = this.children, r = 0, a = i.length; r < a; r++)
                    i[r].updateWorldMatrix(!1, !0)
        },
        toJSON: function(n) {
            var t = void 0 === n || "string" == typeof n
              , e = {};
            t && (n = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            },
            e.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var i = {};
            function r(t, e) {
                return void 0 === t[e.uuid] && (t[e.uuid] = e.toJSON(n)),
                e.uuid
            }
            if (i.uuid = this.uuid,
            i.type = this.type,
            "" !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.frustumCulled && (i.frustumCulled = !1),
            0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
            "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
            i.layers = this.layers.mask,
            i.matrix = this.matrix.toArray(),
            !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
            this.isMesh && this.drawMode !== ve && (i.drawMode = this.drawMode),
            this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(n.geometries, this.geometry);
                var a = this.geometry.parameters;
                if (void 0 !== a && void 0 !== a.shapes) {
                    var o = a.shapes;
                    if (Array.isArray(o))
                        for (var s = 0, c = o.length; s < c; s++) {
                            var l = o[s];
                            r(n.shapes, l)
                        }
                    else
                        r(n.shapes, o)
                }
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    var h = [];
                    for (s = 0,
                    c = this.material.length; s < c; s++)
                        h.push(r(n.materials, this.material[s]));
                    i.material = h
                } else
                    i.material = r(n.materials, this.material);
            if (0 < this.children.length) {
                i.children = [];
                for (s = 0; s < this.children.length; s++)
                    i.children.push(this.children[s].toJSON(n).object)
            }
            if (t) {
                var u = m(n.geometries)
                  , p = m(n.materials)
                  , d = m(n.textures)
                  , f = m(n.images);
                o = m(n.shapes);
                0 < u.length && (e.geometries = u),
                0 < p.length && (e.materials = p),
                0 < d.length && (e.textures = d),
                0 < f.length && (e.images = f),
                0 < o.length && (e.shapes = o)
            }
            return e.object = i,
            e;
            function m(t) {
                var e = [];
                for (var n in t) {
                    var i = t[n];
                    delete i.metadata,
                    e.push(i)
                }
                return e
            }
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e) {
            if (void 0 === e && (e = !0),
            this.name = t.name,
            this.up.copy(t.up),
            this.position.copy(t.position),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
            this.layers.mask = t.layers.mask,
            this.visible = t.visible,
            this.castShadow = t.castShadow,
            this.receiveShadow = t.receiveShadow,
            this.frustumCulled = t.frustumCulled,
            this.renderOrder = t.renderOrder,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            !0 === e)
                for (var n = 0; n < t.children.length; n++) {
                    var i = t.children[n];
                    this.add(i.clone())
                }
            return this
        }
    });
    var ri, ai, oi, si, ci, li, hi, ui = 0;
    function pi() {
        Object.defineProperty(this, "id", {
            value: ui += 2
        }),
        this.uuid = Ce.generateUUID(),
        this.name = "",
        this.type = "Geometry",
        this.vertices = [],
        this.colors = [],
        this.faces = [],
        this.faceVertexUvs = [[]],
        this.morphTargets = [],
        this.morphNormals = [],
        this.skinWeights = [],
        this.skinIndices = [],
        this.lineDistances = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.elementsNeedUpdate = !1,
        this.verticesNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.lineDistancesNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    function di(t, e, n) {
        if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "",
        this.array = t,
        this.itemSize = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.normalized = !0 === n,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function fi(t, e, n) {
        di.call(this, new Int8Array(t), e, n)
    }
    function mi(t, e, n) {
        di.call(this, new Uint8Array(t), e, n)
    }
    function gi(t, e, n) {
        di.call(this, new Uint8ClampedArray(t), e, n)
    }
    function vi(t, e, n) {
        di.call(this, new Int16Array(t), e, n)
    }
    function yi(t, e, n) {
        di.call(this, new Uint16Array(t), e, n)
    }
    function xi(t, e, n) {
        di.call(this, new Int32Array(t), e, n)
    }
    function bi(t, e, n) {
        di.call(this, new Uint32Array(t), e, n)
    }
    function wi(t, e, n) {
        di.call(this, new Float32Array(t), e, n)
    }
    function _i(t, e, n) {
        di.call(this, new Float64Array(t), e, n)
    }
    function Mi() {
        this.vertices = [],
        this.normals = [],
        this.colors = [],
        this.uvs = [],
        this.uvs2 = [],
        this.groups = [],
        this.morphTargets = {},
        this.skinWeights = [],
        this.skinIndices = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.verticesNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    function Si(t) {
        if (0 === t.length)
            return -1 / 0;
        for (var e = t[0], n = 1, i = t.length; n < i; ++n)
            t[n] > e && (e = t[n]);
        return e
    }
    pi.prototype = Object.assign(Object.create(i.prototype), {
        constructor: pi,
        isGeometry: !0,
        applyMatrix: function(t) {
            for (var e = (new Ne).getNormalMatrix(t), n = 0, i = this.vertices.length; n < i; n++) {
                this.vertices[n].applyMatrix4(t)
            }
            for (n = 0,
            i = this.faces.length; n < i; n++) {
                var r = this.faces[n];
                r.normal.applyMatrix3(e).normalize();
                for (var a = 0, o = r.vertexNormals.length; a < o; a++)
                    r.vertexNormals[a].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this.verticesNeedUpdate = !0,
            this.normalsNeedUpdate = !0,
            this
        },
        rotateX: (hi = new bn,
        function(t) {
            return hi.makeRotationX(t),
            this.applyMatrix(hi),
            this
        }
        ),
        rotateY: (li = new bn,
        function(t) {
            return li.makeRotationY(t),
            this.applyMatrix(li),
            this
        }
        ),
        rotateZ: (ci = new bn,
        function(t) {
            return ci.makeRotationZ(t),
            this.applyMatrix(ci),
            this
        }
        ),
        translate: (si = new bn,
        function(t, e, n) {
            return si.makeTranslation(t, e, n),
            this.applyMatrix(si),
            this
        }
        ),
        scale: (oi = new bn,
        function(t, e, n) {
            return oi.makeScale(t, e, n),
            this.applyMatrix(oi),
            this
        }
        ),
        lookAt: (ai = new ii,
        function(t) {
            ai.lookAt(t),
            ai.updateMatrix(),
            this.applyMatrix(ai.matrix)
        }
        ),
        fromBufferGeometry: function(t) {
            var o = this
              , e = null !== t.index ? t.index.array : void 0
              , n = t.attributes
              , i = n.position.array
              , s = void 0 !== n.normal ? n.normal.array : void 0
              , c = void 0 !== n.color ? n.color.array : void 0
              , l = void 0 !== n.uv ? n.uv.array : void 0
              , h = void 0 !== n.uv2 ? n.uv2.array : void 0;
            void 0 !== h && (this.faceVertexUvs[1] = []);
            for (var r = 0, a = 0; r < i.length; r += 3,
            a += 2)
                o.vertices.push((new De).fromArray(i, r)),
                void 0 !== c && o.colors.push((new Ln).fromArray(c, r));
            function u(t, e, n, i) {
                var r = void 0 === c ? [] : [o.colors[t].clone(), o.colors[e].clone(), o.colors[n].clone()]
                  , a = new Nn(t,e,n,void 0 === s ? [] : [(new De).fromArray(s, 3 * t), (new De).fromArray(s, 3 * e), (new De).fromArray(s, 3 * n)],r,i);
                o.faces.push(a),
                void 0 !== l && o.faceVertexUvs[0].push([(new Oe).fromArray(l, 2 * t), (new Oe).fromArray(l, 2 * e), (new Oe).fromArray(l, 2 * n)]),
                void 0 !== h && o.faceVertexUvs[1].push([(new Oe).fromArray(h, 2 * t), (new Oe).fromArray(h, 2 * e), (new Oe).fromArray(h, 2 * n)])
            }
            var p = t.groups;
            if (0 < p.length)
                for (r = 0; r < p.length; r++)
                    for (var d = p[r], f = d.start, m = (a = f,
                    f + d.count); a < m; a += 3)
                        void 0 !== e ? u(e[a], e[a + 1], e[a + 2], d.materialIndex) : u(a, a + 1, a + 2, d.materialIndex);
            else if (void 0 !== e)
                for (r = 0; r < e.length; r += 3)
                    u(e[r], e[r + 1], e[r + 2]);
            else
                for (r = 0; r < i.length / 3; r += 3)
                    u(r, r + 1, r + 2);
            return this.computeFaceNormals(),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            this
        },
        center: (ri = new De,
        function() {
            return this.computeBoundingBox(),
            this.boundingBox.getCenter(ri).negate(),
            this.translate(ri.x, ri.y, ri.z),
            this
        }
        ),
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center
              , e = this.boundingSphere.radius
              , n = 0 === e ? 1 : 1 / e
              , i = new bn;
            return i.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1),
            this.applyMatrix(i),
            this
        },
        computeFaceNormals: function() {
            for (var t = new De, e = new De, n = 0, i = this.faces.length; n < i; n++) {
                var r = this.faces[n]
                  , a = this.vertices[r.a]
                  , o = this.vertices[r.b]
                  , s = this.vertices[r.c];
                t.subVectors(s, o),
                e.subVectors(a, o),
                t.cross(e),
                t.normalize(),
                r.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            var e, n, i, r, a, o;
            for (void 0 === t && (t = !0),
            o = new Array(this.vertices.length),
            e = 0,
            n = this.vertices.length; e < n; e++)
                o[e] = new De;
            if (t) {
                var s, c, l, h = new De, u = new De;
                for (i = 0,
                r = this.faces.length; i < r; i++)
                    a = this.faces[i],
                    s = this.vertices[a.a],
                    c = this.vertices[a.b],
                    l = this.vertices[a.c],
                    h.subVectors(l, c),
                    u.subVectors(s, c),
                    h.cross(u),
                    o[a.a].add(h),
                    o[a.b].add(h),
                    o[a.c].add(h)
            } else
                for (this.computeFaceNormals(),
                i = 0,
                r = this.faces.length; i < r; i++)
                    o[(a = this.faces[i]).a].add(a.normal),
                    o[a.b].add(a.normal),
                    o[a.c].add(a.normal);
            for (e = 0,
            n = this.vertices.length; e < n; e++)
                o[e].normalize();
            for (i = 0,
            r = this.faces.length; i < r; i++) {
                var p = (a = this.faces[i]).vertexNormals;
                3 === p.length ? (p[0].copy(o[a.a]),
                p[1].copy(o[a.b]),
                p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(),
                p[1] = o[a.b].clone(),
                p[2] = o[a.c].clone())
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var t, e, n;
            for (this.computeFaceNormals(),
            t = 0,
            e = this.faces.length; t < e; t++) {
                var i = (n = this.faces[t]).vertexNormals;
                3 === i.length ? (i[0].copy(n.normal),
                i[1].copy(n.normal),
                i[2].copy(n.normal)) : (i[0] = n.normal.clone(),
                i[1] = n.normal.clone(),
                i[2] = n.normal.clone())
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, n, i, r;
            for (n = 0,
            i = this.faces.length; n < i; n++)
                for ((r = this.faces[n]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(),
                r.__originalVertexNormals || (r.__originalVertexNormals = []),
                t = 0,
                e = r.vertexNormals.length; t < e; t++)
                    r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
            var a = new pi;
            for (a.faces = this.faces,
            t = 0,
            e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {},
                    this.morphNormals[t].faceNormals = [],
                    this.morphNormals[t].vertexNormals = [];
                    var o = this.morphNormals[t].faceNormals
                      , s = this.morphNormals[t].vertexNormals;
                    for (n = 0,
                    i = this.faces.length; n < i; n++)
                        c = new De,
                        l = {
                            a: new De,
                            b: new De,
                            c: new De
                        },
                        o.push(c),
                        s.push(l)
                }
                var c, l, h = this.morphNormals[t];
                for (a.vertices = this.morphTargets[t].vertices,
                a.computeFaceNormals(),
                a.computeVertexNormals(),
                n = 0,
                i = this.faces.length; n < i; n++)
                    r = this.faces[n],
                    c = h.faceNormals[n],
                    l = h.vertexNormals[n],
                    c.copy(r.normal),
                    l.a.copy(r.vertexNormals[0]),
                    l.b.copy(r.vertexNormals[1]),
                    l.c.copy(r.vertexNormals[2])
            }
            for (n = 0,
            i = this.faces.length; n < i; n++)
                (r = this.faces[n]).normal = r.__originalFaceNormal,
                r.vertexNormals = r.__originalVertexNormals
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new gn),
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new vn),
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, n) {
            if (t && t.isGeometry) {
                var i, r = this.vertices.length, a = this.vertices, o = t.vertices, s = this.faces, c = t.faces, l = this.faceVertexUvs[0], h = t.faceVertexUvs[0], u = this.colors, p = t.colors;
                void 0 === n && (n = 0),
                void 0 !== e && (i = (new Ne).getNormalMatrix(e));
                for (var d = 0, f = o.length; d < f; d++) {
                    var m = o[d].clone();
                    void 0 !== e && m.applyMatrix4(e),
                    a.push(m)
                }
                for (d = 0,
                f = p.length; d < f; d++)
                    u.push(p[d].clone());
                for (d = 0,
                f = c.length; d < f; d++) {
                    var g, v, y, x = c[d], b = x.vertexNormals, w = x.vertexColors;
                    (g = new Nn(x.a + r,x.b + r,x.c + r)).normal.copy(x.normal),
                    void 0 !== i && g.normal.applyMatrix3(i).normalize();
                    for (var _ = 0, M = b.length; _ < M; _++)
                        v = b[_].clone(),
                        void 0 !== i && v.applyMatrix3(i).normalize(),
                        g.vertexNormals.push(v);
                    g.color.copy(x.color);
                    for (_ = 0,
                    M = w.length; _ < M; _++)
                        y = w[_],
                        g.vertexColors.push(y.clone());
                    g.materialIndex = x.materialIndex + n,
                    s.push(g)
                }
                for (d = 0,
                f = h.length; d < f; d++) {
                    var S = h[d]
                      , T = [];
                    if (void 0 !== S) {
                        for (_ = 0,
                        M = S.length; _ < M; _++)
                            T.push(S[_].clone());
                        l.push(T)
                    }
                }
            } else
                console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
        },
        mergeMesh: function(t) {
            t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(),
            this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
        },
        mergeVertices: function() {
            var t, e, n, i, r, a, o, s, c = {}, l = [], h = [], u = Math.pow(10, 4);
            for (n = 0,
            i = this.vertices.length; n < i; n++)
                t = this.vertices[n],
                void 0 === c[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (c[e] = n,
                l.push(this.vertices[n]),
                h[n] = l.length - 1) : h[n] = h[c[e]];
            var p = [];
            for (n = 0,
            i = this.faces.length; n < i; n++) {
                (r = this.faces[n]).a = h[r.a],
                r.b = h[r.b],
                r.c = h[r.c],
                a = [r.a, r.b, r.c];
                for (var d = 0; d < 3; d++)
                    if (a[d] === a[(d + 1) % 3]) {
                        p.push(n);
                        break
                    }
            }
            for (n = p.length - 1; 0 <= n; n--) {
                var f = p[n];
                for (this.faces.splice(f, 1),
                o = 0,
                s = this.faceVertexUvs.length; o < s; o++)
                    this.faceVertexUvs[o].splice(f, 1)
            }
            var m = this.vertices.length - l.length;
            return this.vertices = l,
            m
        },
        setFromPoints: function(t) {
            this.vertices = [];
            for (var e = 0, n = t.length; e < n; e++) {
                var i = t[e];
                this.vertices.push(new De(i.x,i.y,i.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function() {
            for (var t = this.faces, e = t.length, n = 0; n < e; n++)
                t[n]._id = n;
            t.sort(function(t, e) {
                return t.materialIndex - e.materialIndex
            });
            var i, r, a = this.faceVertexUvs[0], o = this.faceVertexUvs[1];
            a && a.length === e && (i = []),
            o && o.length === e && (r = []);
            for (n = 0; n < e; n++) {
                var s = t[n]._id;
                i && i.push(a[s]),
                r && r.push(o[s])
            }
            i && (this.faceVertexUvs[0] = i),
            r && (this.faceVertexUvs[1] = r)
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e)
                    void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            for (var i = [], r = 0; r < this.vertices.length; r++) {
                var a = this.vertices[r];
                i.push(a.x, a.y, a.z)
            }
            var o = []
              , s = []
              , c = {}
              , l = []
              , h = {}
              , u = []
              , p = {};
            for (r = 0; r < this.faces.length; r++) {
                var d = this.faces[r]
                  , f = void 0 !== this.faceVertexUvs[0][r]
                  , m = 0 < d.normal.length()
                  , g = 0 < d.vertexNormals.length
                  , v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b
                  , y = 0 < d.vertexColors.length
                  , x = 0;
                if (x = M(x = M(x = M(x = M(x = M(x = M(x = M(x = M(x, 0, 0), 1, !0), 2, !1), 3, f), 4, m), 5, g), 6, v), 7, y),
                o.push(x),
                o.push(d.a, d.b, d.c),
                o.push(d.materialIndex),
                f) {
                    var b = this.faceVertexUvs[0][r];
                    o.push(E(b[0]), E(b[1]), E(b[2]))
                }
                if (m && o.push(S(d.normal)),
                g) {
                    var w = d.vertexNormals;
                    o.push(S(w[0]), S(w[1]), S(w[2]))
                }
                if (v && o.push(T(d.color)),
                y) {
                    var _ = d.vertexColors;
                    o.push(T(_[0]), T(_[1]), T(_[2]))
                }
            }
            function M(t, e, n) {
                return n ? t | 1 << e : t & ~(1 << e)
            }
            function S(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== c[e] || (c[e] = s.length / 3,
                s.push(t.x, t.y, t.z)),
                c[e]
            }
            function T(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== h[e] || (h[e] = l.length,
                l.push(t.getHex())),
                h[e]
            }
            function E(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== p[e] || (p[e] = u.length / 2,
                u.push(t.x, t.y)),
                p[e]
            }
            return t.data = {},
            t.data.vertices = i,
            t.data.normals = s,
            0 < l.length && (t.data.colors = l),
            0 < u.length && (t.data.uvs = [u]),
            t.data.faces = o,
            t
        },
        clone: function() {
            return (new pi).copy(this)
        },
        copy: function(t) {
            var e, n, i, r, a, o;
            this.vertices = [],
            this.colors = [],
            this.faces = [],
            this.faceVertexUvs = [[]],
            this.morphTargets = [],
            this.morphNormals = [],
            this.skinWeights = [],
            this.skinIndices = [],
            this.lineDistances = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.name = t.name;
            var s = t.vertices;
            for (e = 0,
            n = s.length; e < n; e++)
                this.vertices.push(s[e].clone());
            var c = t.colors;
            for (e = 0,
            n = c.length; e < n; e++)
                this.colors.push(c[e].clone());
            var l = t.faces;
            for (e = 0,
            n = l.length; e < n; e++)
                this.faces.push(l[e].clone());
            for (e = 0,
            n = t.faceVertexUvs.length; e < n; e++) {
                var h = t.faceVertexUvs[e];
                for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []),
                i = 0,
                r = h.length; i < r; i++) {
                    var u = h[i]
                      , p = [];
                    for (a = 0,
                    o = u.length; a < o; a++) {
                        var d = u[a];
                        p.push(d.clone())
                    }
                    this.faceVertexUvs[e].push(p)
                }
            }
            var f = t.morphTargets;
            for (e = 0,
            n = f.length; e < n; e++) {
                var m = {};
                if (m.name = f[e].name,
                void 0 !== f[e].vertices)
                    for (m.vertices = [],
                    i = 0,
                    r = f[e].vertices.length; i < r; i++)
                        m.vertices.push(f[e].vertices[i].clone());
                if (void 0 !== f[e].normals)
                    for (m.normals = [],
                    i = 0,
                    r = f[e].normals.length; i < r; i++)
                        m.normals.push(f[e].normals[i].clone());
                this.morphTargets.push(m)
            }
            var g = t.morphNormals;
            for (e = 0,
            n = g.length; e < n; e++) {
                var v = {};
                if (void 0 !== g[e].vertexNormals)
                    for (v.vertexNormals = [],
                    i = 0,
                    r = g[e].vertexNormals.length; i < r; i++) {
                        var y = g[e].vertexNormals[i]
                          , x = {};
                        x.a = y.a.clone(),
                        x.b = y.b.clone(),
                        x.c = y.c.clone(),
                        v.vertexNormals.push(x)
                    }
                if (void 0 !== g[e].faceNormals)
                    for (v.faceNormals = [],
                    i = 0,
                    r = g[e].faceNormals.length; i < r; i++)
                        v.faceNormals.push(g[e].faceNormals[i].clone());
                this.morphNormals.push(v)
            }
            var b = t.skinWeights;
            for (e = 0,
            n = b.length; e < n; e++)
                this.skinWeights.push(b[e].clone());
            var w = t.skinIndices;
            for (e = 0,
            n = w.length; e < n; e++)
                this.skinIndices.push(w[e].clone());
            var _ = t.lineDistances;
            for (e = 0,
            n = _.length; e < n; e++)
                this.lineDistances.push(_[e]);
            var M = t.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var S = t.boundingSphere;
            return null !== S && (this.boundingSphere = S.clone()),
            this.elementsNeedUpdate = t.elementsNeedUpdate,
            this.verticesNeedUpdate = t.verticesNeedUpdate,
            this.uvsNeedUpdate = t.uvsNeedUpdate,
            this.normalsNeedUpdate = t.normalsNeedUpdate,
            this.colorsNeedUpdate = t.colorsNeedUpdate,
            this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate,
            this.groupsNeedUpdate = t.groupsNeedUpdate,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Object.defineProperty(di.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(di.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setArray: function(t) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== t ? t.length / this.itemSize : 0,
            this.array = t,
            this
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.name = t.name,
            this.array = new t.array.constructor(t.array),
            this.itemSize = t.itemSize,
            this.count = t.count,
            this.normalized = t.normalized,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, n) {
            t *= this.itemSize,
            n *= e.itemSize;
            for (var i = 0, r = this.itemSize; i < r; i++)
                this.array[t + i] = e.array[n + i];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t),
            this
        },
        copyColorsArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
                a = new Ln),
                e[n++] = a.r,
                e[n++] = a.g,
                e[n++] = a.b
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                a = new Oe),
                e[n++] = a.x,
                e[n++] = a.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
                a = new De),
                e[n++] = a.x,
                e[n++] = a.y,
                e[n++] = a.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
                a = new un),
                e[n++] = a.x,
                e[n++] = a.y,
                e[n++] = a.z,
                e[n++] = a.w
            }
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e,
            this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e,
            this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e,
            this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e,
            this
        },
        setXY: function(t, e, n) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this
        },
        setXYZ: function(t, e, n, i) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this.array[t + 2] = i,
            this
        },
        setXYZW: function(t, e, n, i, r) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this.array[t + 2] = i,
            this.array[t + 3] = r,
            this
        },
        onUpload: function(t) {
            return this.onUploadCallback = t,
            this
        },
        clone: function() {
            return new this.constructor(this.array,this.itemSize).copy(this)
        }
    }),
    (fi.prototype = Object.create(di.prototype)).constructor = fi,
    (mi.prototype = Object.create(di.prototype)).constructor = mi,
    (gi.prototype = Object.create(di.prototype)).constructor = gi,
    (vi.prototype = Object.create(di.prototype)).constructor = vi,
    (yi.prototype = Object.create(di.prototype)).constructor = yi,
    (xi.prototype = Object.create(di.prototype)).constructor = xi,
    (bi.prototype = Object.create(di.prototype)).constructor = bi,
    (wi.prototype = Object.create(di.prototype)).constructor = wi,
    (_i.prototype = Object.create(di.prototype)).constructor = _i,
    Object.assign(Mi.prototype, {
        computeGroups: function(t) {
            for (var e, n = [], i = void 0, r = t.faces, a = 0; a < r.length; a++) {
                var o = r[a];
                o.materialIndex !== i && (i = o.materialIndex,
                void 0 !== e && (e.count = 3 * a - e.start,
                n.push(e)),
                e = {
                    start: 3 * a,
                    materialIndex: i
                })
            }
            void 0 !== e && (e.count = 3 * a - e.start,
            n.push(e)),
            this.groups = n
        },
        fromGeometry: function(t) {
            var e, n = t.faces, i = t.vertices, r = t.faceVertexUvs, a = r[0] && 0 < r[0].length, o = r[1] && 0 < r[1].length, s = t.morphTargets, c = s.length;
            if (0 < c) {
                e = [];
                for (var l = 0; l < c; l++)
                    e[l] = {
                        name: s[l].name,
                        data: []
                    };
                this.morphTargets.position = e
            }
            var h, u = t.morphNormals, p = u.length;
            if (0 < p) {
                h = [];
                for (l = 0; l < p; l++)
                    h[l] = {
                        name: u[l].name,
                        data: []
                    };
                this.morphTargets.normal = h
            }
            var d = t.skinIndices
              , f = t.skinWeights
              , m = d.length === i.length
              , g = f.length === i.length;
            0 < i.length && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
            for (l = 0; l < n.length; l++) {
                var v = n[l];
                this.vertices.push(i[v.a], i[v.b], i[v.c]);
                var y = v.vertexNormals;
                if (3 === y.length)
                    this.normals.push(y[0], y[1], y[2]);
                else {
                    var x = v.normal;
                    this.normals.push(x, x, x)
                }
                var b, w = v.vertexColors;
                if (3 === w.length)
                    this.colors.push(w[0], w[1], w[2]);
                else {
                    var _ = v.color;
                    this.colors.push(_, _, _)
                }
                if (!0 === a)
                    void 0 !== (b = r[0][l]) ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l),
                    this.uvs.push(new Oe, new Oe, new Oe));
                if (!0 === o)
                    void 0 !== (b = r[1][l]) ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l),
                    this.uvs2.push(new Oe, new Oe, new Oe));
                for (var M = 0; M < c; M++) {
                    var S = s[M].vertices;
                    e[M].data.push(S[v.a], S[v.b], S[v.c])
                }
                for (M = 0; M < p; M++) {
                    var T = u[M].vertexNormals[l];
                    h[M].data.push(T.a, T.b, T.c)
                }
                m && this.skinIndices.push(d[v.a], d[v.b], d[v.c]),
                g && this.skinWeights.push(f[v.a], f[v.b], f[v.c])
            }
            return this.computeGroups(t),
            this.verticesNeedUpdate = t.verticesNeedUpdate,
            this.normalsNeedUpdate = t.normalsNeedUpdate,
            this.colorsNeedUpdate = t.colorsNeedUpdate,
            this.uvsNeedUpdate = t.uvsNeedUpdate,
            this.groupsNeedUpdate = t.groupsNeedUpdate,
            this
        }
    });
    var Ti, Ei, Ai, Li, Pi, Ri, Ci, Oi, Ii, Di, Ni, zi, Bi = 1;
    function Ui() {
        Object.defineProperty(this, "id", {
            value: Bi += 2
        }),
        this.uuid = Ce.generateUUID(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    function Gi(t, e, n, i, r, a) {
        pi.call(this),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: a
        },
        this.fromBufferGeometry(new Fi(t,e,n,i,r,a)),
        this.mergeVertices()
    }
    function Fi(t, e, n, i, r, a) {
        Ui.call(this),
        this.type = "BoxBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: a
        };
        var P = this;
        t = t || 1,
        e = e || 1,
        n = n || 1,
        i = Math.floor(i) || 1,
        r = Math.floor(r) || 1,
        a = Math.floor(a) || 1;
        var R = []
          , C = []
          , O = []
          , I = []
          , D = 0
          , N = 0;
        function o(t, e, n, i, r, a, o, s, c, l, h) {
            var u, p, d = a / c, f = o / l, m = a / 2, g = o / 2, v = s / 2, y = c + 1, x = l + 1, b = 0, w = 0, _ = new De;
            for (p = 0; p < x; p++) {
                var M = p * f - g;
                for (u = 0; u < y; u++) {
                    var S = u * d - m;
                    _[t] = S * i,
                    _[e] = M * r,
                    _[n] = v,
                    C.push(_.x, _.y, _.z),
                    _[t] = 0,
                    _[e] = 0,
                    _[n] = 0 < s ? 1 : -1,
                    O.push(_.x, _.y, _.z),
                    I.push(u / c),
                    I.push(1 - p / l),
                    b += 1
                }
            }
            for (p = 0; p < l; p++)
                for (u = 0; u < c; u++) {
                    var T = D + u + y * p
                      , E = D + u + y * (p + 1)
                      , A = D + (u + 1) + y * (p + 1)
                      , L = D + (u + 1) + y * p;
                    R.push(T, E, L),
                    R.push(E, A, L),
                    w += 6
                }
            P.addGroup(N, w, h),
            N += w,
            D += b
        }
        o("z", "y", "x", -1, -1, n, e, t, a, r, 0),
        o("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
        o("x", "z", "y", 1, 1, t, n, e, i, a, 2),
        o("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
        o("x", "y", "z", 1, -1, t, e, n, i, r, 4),
        o("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
        this.setIndex(R),
        this.addAttribute("position", new wi(C,3)),
        this.addAttribute("normal", new wi(O,3)),
        this.addAttribute("uv", new wi(I,2))
    }
    function ki(t, e, n, i) {
        pi.call(this),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
        },
        this.fromBufferGeometry(new Hi(t,e,n,i)),
        this.mergeVertices()
    }
    function Hi(t, e, n, i) {
        Ui.call(this),
        this.type = "PlaneBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
        };
        var r, a, o = (t = t || 1) / 2, s = (e = e || 1) / 2, c = Math.floor(n) || 1, l = Math.floor(i) || 1, h = c + 1, u = l + 1, p = t / c, d = e / l, f = [], m = [], g = [], v = [];
        for (a = 0; a < u; a++) {
            var y = a * d - s;
            for (r = 0; r < h; r++) {
                var x = r * p - o;
                m.push(x, -y, 0),
                g.push(0, 0, 1),
                v.push(r / c),
                v.push(1 - a / l)
            }
        }
        for (a = 0; a < l; a++)
            for (r = 0; r < c; r++) {
                var b = r + h * a
                  , w = r + h * (a + 1)
                  , _ = r + 1 + h * (a + 1)
                  , M = r + 1 + h * a;
                f.push(b, w, M),
                f.push(w, _, M)
            }
        this.setIndex(f),
        this.addAttribute("position", new wi(m,3)),
        this.addAttribute("normal", new wi(g,3)),
        this.addAttribute("uv", new wi(v,2))
    }
    Ui.prototype = Object.assign(Object.create(i.prototype), {
        constructor: Ui,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            Array.isArray(t) ? this.index = new (65535 < Si(t) ? bi : yi)(t,1) : this.index = t
        },
        addAttribute: function(t, e) {
            return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? ("index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            this.setIndex(e)) : this.attributes[t] = e,
            this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            this.addAttribute(t, new di(e,arguments[2])))
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        removeAttribute: function(t) {
            return delete this.attributes[t],
            this
        },
        addGroup: function(t, e, n) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== n ? n : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t,
            this.drawRange.count = e
        },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToBufferAttribute(e),
            e.needsUpdate = !0);
            var n = this.attributes.normal;
            void 0 !== n && ((new Ne).getNormalMatrix(t).applyToBufferAttribute(n),
            n.needsUpdate = !0);
            var i = this.attributes.tangent;
            void 0 !== i && ((new Ne).getNormalMatrix(t).applyToBufferAttribute(i),
            i.needsUpdate = !0);
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
        },
        rotateX: (zi = new bn,
        function(t) {
            return zi.makeRotationX(t),
            this.applyMatrix(zi),
            this
        }
        ),
        rotateY: (Ni = new bn,
        function(t) {
            return Ni.makeRotationY(t),
            this.applyMatrix(Ni),
            this
        }
        ),
        rotateZ: (Di = new bn,
        function(t) {
            return Di.makeRotationZ(t),
            this.applyMatrix(Di),
            this
        }
        ),
        translate: (Ii = new bn,
        function(t, e, n) {
            return Ii.makeTranslation(t, e, n),
            this.applyMatrix(Ii),
            this
        }
        ),
        scale: (Oi = new bn,
        function(t, e, n) {
            return Oi.makeScale(t, e, n),
            this.applyMatrix(Oi),
            this
        }
        ),
        lookAt: (Ci = new ii,
        function(t) {
            Ci.lookAt(t),
            Ci.updateMatrix(),
            this.applyMatrix(Ci.matrix)
        }
        ),
        center: (Ri = new De,
        function() {
            return this.computeBoundingBox(),
            this.boundingBox.getCenter(Ri).negate(),
            this.translate(Ri.x, Ri.y, Ri.z),
            this
        }
        ),
        setFromObject: function(t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                var n = new wi(3 * e.vertices.length,3)
                  , i = new wi(3 * e.colors.length,3);
                if (this.addAttribute("position", n.copyVector3sArray(e.vertices)),
                this.addAttribute("color", i.copyColorsArray(e.colors)),
                e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var r = new wi(e.lineDistances.length,1);
                    this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
                null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else
                t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        setFromPoints: function(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.push(r.x, r.y, r.z || 0)
            }
            return this.addAttribute("position", new wi(e,3)),
            this
        },
        updateFromObject: function(t) {
            var e, n = t.geometry;
            if (t.isMesh) {
                var i = n.__directGeometry;
                if (!0 === n.elementsNeedUpdate && (i = void 0,
                n.elementsNeedUpdate = !1),
                void 0 === i)
                    return this.fromGeometry(n);
                i.verticesNeedUpdate = n.verticesNeedUpdate,
                i.normalsNeedUpdate = n.normalsNeedUpdate,
                i.colorsNeedUpdate = n.colorsNeedUpdate,
                i.uvsNeedUpdate = n.uvsNeedUpdate,
                i.groupsNeedUpdate = n.groupsNeedUpdate,
                n.verticesNeedUpdate = !1,
                n.normalsNeedUpdate = !1,
                n.colorsNeedUpdate = !1,
                n.uvsNeedUpdate = !1,
                n.groupsNeedUpdate = !1,
                n = i
            }
            return !0 === n.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(n.vertices),
            e.needsUpdate = !0),
            n.verticesNeedUpdate = !1),
            !0 === n.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(n.normals),
            e.needsUpdate = !0),
            n.normalsNeedUpdate = !1),
            !0 === n.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(n.colors),
            e.needsUpdate = !0),
            n.colorsNeedUpdate = !1),
            n.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(n.uvs),
            e.needsUpdate = !0),
            n.uvsNeedUpdate = !1),
            n.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(n.lineDistances),
            e.needsUpdate = !0),
            n.lineDistancesNeedUpdate = !1),
            n.groupsNeedUpdate && (n.computeGroups(t.geometry),
            this.groups = n.groups,
            n.groupsNeedUpdate = !1),
            this
        },
        fromGeometry: function(t) {
            return t.__directGeometry = (new Mi).fromGeometry(t),
            this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new di(e,3).copyVector3sArray(t.vertices)),
            0 < t.normals.length) {
                var n = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new di(n,3).copyVector3sArray(t.normals))
            }
            if (0 < t.colors.length) {
                var i = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new di(i,3).copyColorsArray(t.colors))
            }
            if (0 < t.uvs.length) {
                var r = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new di(r,2).copyVector2sArray(t.uvs))
            }
            if (0 < t.uvs2.length) {
                var a = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new di(a,2).copyVector2sArray(t.uvs2))
            }
            for (var o in this.groups = t.groups,
            t.morphTargets) {
                for (var s = [], c = t.morphTargets[o], l = 0, h = c.length; l < h; l++) {
                    var u = c[l]
                      , p = new wi(3 * u.data.length,3);
                    p.name = u.name,
                    s.push(p.copyVector3sArray(u.data))
                }
                this.morphAttributes[o] = s
            }
            if (0 < t.skinIndices.length) {
                var d = new wi(4 * t.skinIndices.length,4);
                this.addAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
            }
            if (0 < t.skinWeights.length) {
                var f = new wi(4 * t.skinWeights.length,4);
                this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            this
        },
        computeBoundingBox: (Pi = new gn,
        function() {
            null === this.boundingBox && (this.boundingBox = new gn);
            var t = this.attributes.position
              , e = this.morphAttributes.position;
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t),
                e)
                    for (var n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        Pi.setFromBufferAttribute(r),
                        this.boundingBox.expandByPoint(Pi.min),
                        this.boundingBox.expandByPoint(Pi.max)
                    }
            } else
                this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        ),
        computeBoundingSphere: (Ei = new gn,
        Ai = new gn,
        Li = new De,
        function() {
            null === this.boundingSphere && (this.boundingSphere = new vn);
            var t = this.attributes.position
              , e = this.morphAttributes.position;
            if (t) {
                var n = this.boundingSphere.center;
                if (Ei.setFromBufferAttribute(t),
                e)
                    for (var i = 0, r = e.length; i < r; i++) {
                        var a = e[i];
                        Ai.setFromBufferAttribute(a),
                        Ei.expandByPoint(Ai.min),
                        Ei.expandByPoint(Ai.max)
                    }
                Ei.getCenter(n);
                var o = 0;
                for (i = 0,
                r = t.count; i < r; i++)
                    Li.fromBufferAttribute(t, i),
                    o = Math.max(o, n.distanceToSquared(Li));
                if (e)
                    for (i = 0,
                    r = e.length; i < r; i++)
                        for (var s = 0, c = (a = e[i]).count; s < c; s++)
                            Li.fromBufferAttribute(a, i),
                            o = Math.max(o, n.distanceToSquared(Li));
                this.boundingSphere.radius = Math.sqrt(o),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
        ),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index
              , e = this.attributes;
            if (e.position) {
                var n = e.position.array;
                if (void 0 === e.normal)
                    this.addAttribute("normal", new di(new Float32Array(n.length),3));
                else
                    for (var i = e.normal.array, r = 0, a = i.length; r < a; r++)
                        i[r] = 0;
                var o, s, c, l = e.normal.array, h = new De, u = new De, p = new De, d = new De, f = new De;
                if (t) {
                    var m = t.array;
                    for (r = 0,
                    a = t.count; r < a; r += 3)
                        o = 3 * m[r + 0],
                        s = 3 * m[r + 1],
                        c = 3 * m[r + 2],
                        h.fromArray(n, o),
                        u.fromArray(n, s),
                        p.fromArray(n, c),
                        d.subVectors(p, u),
                        f.subVectors(h, u),
                        d.cross(f),
                        l[o] += d.x,
                        l[1 + o] += d.y,
                        l[2 + o] += d.z,
                        l[s] += d.x,
                        l[1 + s] += d.y,
                        l[2 + s] += d.z,
                        l[c] += d.x,
                        l[1 + c] += d.y,
                        l[2 + c] += d.z
                } else
                    for (r = 0,
                    a = n.length; r < a; r += 9)
                        h.fromArray(n, r),
                        u.fromArray(n, r + 3),
                        p.fromArray(n, r + 6),
                        d.subVectors(p, u),
                        f.subVectors(h, u),
                        d.cross(f),
                        l[r] = d.x,
                        l[r + 1] = d.y,
                        l[r + 2] = d.z,
                        l[r + 3] = d.x,
                        l[r + 4] = d.y,
                        l[r + 5] = d.z,
                        l[r + 6] = d.x,
                        l[r + 7] = d.y,
                        l[r + 8] = d.z;
                this.normalizeNormals(),
                e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0,
                console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var n = this.attributes;
                for (var i in n)
                    if (void 0 !== t.attributes[i])
                        for (var r = n[i].array, a = t.attributes[i], o = a.array, s = 0, c = a.itemSize * e; s < o.length; s++,
                        c++)
                            r[c] = o[s];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: (Ti = new De,
        function() {
            for (var t = this.attributes.normal, e = 0, n = t.count; e < n; e++)
                Ti.x = t.getX(e),
                Ti.y = t.getY(e),
                Ti.z = t.getZ(e),
                Ti.normalize(),
                t.setXYZ(e, Ti.x, Ti.y, Ti.z)
        }
        ),
        toNonIndexed: function() {
            function t(t, e) {
                for (var n = t.array, i = t.itemSize, r = new n.constructor(e.length * i), a = 0, o = 0, s = 0, c = e.length; s < c; s++) {
                    a = e[s] * i;
                    for (var l = 0; l < i; l++)
                        r[o++] = n[a++]
                }
                return new di(r,i)
            }
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                this;
            var e = new Ui
              , n = this.index.array
              , i = this.attributes;
            for (var r in i) {
                var a = t(i[r], n);
                e.addAttribute(r, a)
            }
            var o = this.morphAttributes;
            for (r in o) {
                for (var s = [], c = o[r], l = 0, h = c.length; l < h; l++) {
                    a = t(c[l], n);
                    s.push(a)
                }
                e.morphAttributes[r] = s
            }
            for (var u = this.groups, p = (l = 0,
            u.length); l < p; l++) {
                var d = u[l];
                e.addGroup(d.start, d.count, d.materialIndex)
            }
            return e
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            0 < Object.keys(this.userData).length && (t.userData = this.userData),
            void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e)
                    void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var i = this.index;
            null !== i && (t.data.index = {
                type: i.array.constructor.name,
                array: Array.prototype.slice.call(i.array)
            });
            var r = this.attributes;
            for (var n in r) {
                var a = {
                    itemSize: (p = r[n]).itemSize,
                    type: p.array.constructor.name,
                    array: Array.prototype.slice.call(p.array),
                    normalized: p.normalized
                };
                "" !== p.name && (a.name = p.name),
                t.data.attributes[n] = a
            }
            var o = {}
              , s = !1;
            for (var n in this.morphAttributes) {
                for (var c = this.morphAttributes[n], l = [], h = 0, u = c.length; h < u; h++) {
                    var p;
                    a = {
                        itemSize: (p = c[h]).itemSize,
                        type: p.array.constructor.name,
                        array: Array.prototype.slice.call(p.array),
                        normalized: p.normalized
                    };
                    "" !== p.name && (a.name = p.name),
                    l.push(a)
                }
                0 < l.length && (o[n] = l,
                s = !0)
            }
            s && (t.data.morphAttributes = o);
            var d = this.groups;
            0 < d.length && (t.data.groups = JSON.parse(JSON.stringify(d)));
            var f = this.boundingSphere;
            return null !== f && (t.data.boundingSphere = {
                center: f.center.toArray(),
                radius: f.radius
            }),
            t
        },
        clone: function() {
            return (new Ui).copy(this)
        },
        copy: function(t) {
            var e, n, i;
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.name = t.name;
            var r = t.index;
            null !== r && this.setIndex(r.clone());
            var a = t.attributes;
            for (e in a) {
                var o = a[e];
                this.addAttribute(e, o.clone())
            }
            var s = t.morphAttributes;
            for (e in s) {
                var c = []
                  , l = s[e];
                for (n = 0,
                i = l.length; n < i; n++)
                    c.push(l[n].clone());
                this.morphAttributes[e] = c
            }
            var h = t.groups;
            for (n = 0,
            i = h.length; n < i; n++) {
                var u = h[n];
                this.addGroup(u.start, u.count, u.materialIndex)
            }
            var p = t.boundingBox;
            null !== p && (this.boundingBox = p.clone());
            var d = t.boundingSphere;
            return null !== d && (this.boundingSphere = d.clone()),
            this.drawRange.start = t.drawRange.start,
            this.drawRange.count = t.drawRange.count,
            this.userData = t.userData,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    (Gi.prototype = Object.create(pi.prototype)).constructor = Gi,
    (Fi.prototype = Object.create(Ui.prototype)).constructor = Fi,
    (ki.prototype = Object.create(pi.prototype)).constructor = ki,
    (Hi.prototype = Object.create(Ui.prototype)).constructor = Hi;
    var Vi = 0;
    function ji() {
        Object.defineProperty(this, "id", {
            value: Vi++
        }),
        this.uuid = Ce.generateUUID(),
        this.name = "",
        this.type = "Material",
        this.fog = !0,
        this.lights = !0,
        this.blending = Q,
        this.side = z,
        this.flatShading = !1,
        this.vertexTangents = !1,
        this.vertexColors = f,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = S,
        this.blendDst = T,
        this.blendEquation = nt,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = ot,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaTest = 0,
        this.premultipliedAlpha = !1,
        this.visible = !0,
        this.userData = {},
        this.needsUpdate = !0
    }
    ji.prototype = Object.assign(Object.create(i.prototype), {
        constructor: ji,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var n = t[e];
                    if (void 0 !== n)
                        if ("shading" !== e) {
                            var i = this[e];
                            void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                        } else
                            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                            this.flatShading = 1 === n;
                    else
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                }
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t;
            e && (t = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function i(t) {
                var e = [];
                for (var n in t) {
                    var i = t[n];
                    delete i.metadata,
                    e.push(i)
                }
                return e
            }
            if (n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat),
            void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid),
            this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
            n.aoMapIntensity = this.aoMapIntensity),
            this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
            n.bumpScale = this.bumpScale),
            this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
            n.normalMapType = this.normalMapType,
            n.normalScale = this.normalScale.toArray()),
            this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
            n.displacementScale = this.displacementScale,
            n.displacementBias = this.displacementBias),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
            n.reflectivity = this.reflectivity,
            void 0 !== this.combine && (n.combine = this.combine),
            void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)),
            this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.size && (n.size = this.size),
            void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
            this.blending !== Q && (n.blending = this.blending),
            !0 === this.flatShading && (n.flatShading = this.flatShading),
            this.side !== z && (n.side = this.side),
            this.vertexColors !== f && (n.vertexColors = this.vertexColors),
            this.opacity < 1 && (n.opacity = this.opacity),
            !0 === this.transparent && (n.transparent = this.transparent),
            n.depthFunc = this.depthFunc,
            n.depthTest = this.depthTest,
            n.depthWrite = this.depthWrite,
            0 !== this.rotation && (n.rotation = this.rotation),
            !0 === this.polygonOffset && (n.polygonOffset = !0),
            0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
            1 !== this.linewidth && (n.linewidth = this.linewidth),
            void 0 !== this.dashSize && (n.dashSize = this.dashSize),
            void 0 !== this.gapSize && (n.gapSize = this.gapSize),
            void 0 !== this.scale && (n.scale = this.scale),
            !0 === this.dithering && (n.dithering = !0),
            0 < this.alphaTest && (n.alphaTest = this.alphaTest),
            !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (n.wireframe = this.wireframe),
            1 < this.wireframeLinewidth && (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.morphTargets && (n.morphTargets = !0),
            !0 === this.skinning && (n.skinning = !0),
            !1 === this.visible && (n.visible = !1),
            "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
            e) {
                var r = i(t.textures)
                  , a = i(t.images);
                0 < r.length && (n.textures = r),
                0 < a.length && (n.images = a)
            }
            return n
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name,
            this.fog = t.fog,
            this.lights = t.lights,
            this.blending = t.blending,
            this.side = t.side,
            this.flatShading = t.flatShading,
            this.vertexColors = t.vertexColors,
            this.opacity = t.opacity,
            this.transparent = t.transparent,
            this.blendSrc = t.blendSrc,
            this.blendDst = t.blendDst,
            this.blendEquation = t.blendEquation,
            this.blendSrcAlpha = t.blendSrcAlpha,
            this.blendDstAlpha = t.blendDstAlpha,
            this.blendEquationAlpha = t.blendEquationAlpha,
            this.depthFunc = t.depthFunc,
            this.depthTest = t.depthTest,
            this.depthWrite = t.depthWrite,
            this.colorWrite = t.colorWrite,
            this.precision = t.precision,
            this.polygonOffset = t.polygonOffset,
            this.polygonOffsetFactor = t.polygonOffsetFactor,
            this.polygonOffsetUnits = t.polygonOffsetUnits,
            this.dithering = t.dithering,
            this.alphaTest = t.alphaTest,
            this.premultipliedAlpha = t.premultipliedAlpha,
            this.visible = t.visible,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            this.clipShadows = t.clipShadows,
            this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes
              , n = null;
            if (null !== e) {
                var i = e.length;
                n = new Array(i);
                for (var r = 0; r !== i; ++r)
                    n[r] = e[r].clone()
            }
            return this.clippingPlanes = n,
            this.shadowSide = t.shadowSide,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    var Wi, qi, Xi, Yi, Ji, Zi, Qi, Ki, $i, tr, er, nr, ir, rr, ar, or, sr, cr, lr, hr, ur, pr, dr, fr, mr, gr = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", vr = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    function yr(t) {
        ji.call(this),
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = gr,
        this.fragmentShader = vr,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(t))
    }
    function xr(t, e) {
        this.origin = void 0 !== t ? t : new De,
        this.direction = void 0 !== e ? e : new De
    }
    function br(t, e, n) {
        this.a = void 0 !== t ? t : new De,
        this.b = void 0 !== e ? e : new De,
        this.c = void 0 !== n ? n : new De
    }
    function wr(t) {
        ji.call(this),
        this.type = "MeshBasicMaterial",
        this.color = new Ln(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = B,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function _r(t, e) {
        ii.call(this),
        this.type = "Mesh",
        this.geometry = void 0 !== t ? t : new Ui,
        this.material = void 0 !== e ? e : new wr({
            color: 16777215 * Math.random()
        }),
        this.drawMode = ve,
        this.updateMorphTargets()
    }
    function Mr(c, n, l, i) {
        var h, u, p = new Ln(0), d = 0, f = null, m = 0;
        function g(t, e) {
            n.buffers.color.setClear(t.r, t.g, t.b, e, i)
        }
        return {
            getClearColor: function() {
                return p
            },
            setClearColor: function(t, e) {
                p.set(t),
                g(p, d = void 0 !== e ? e : 1)
            },
            getClearAlpha: function() {
                return d
            },
            setClearAlpha: function(t) {
                g(p, d = t)
            },
            render: function(t, e, n, i) {
                var r = e.background
                  , a = c.vr
                  , o = a.getSession && a.getSession();
                if (o && "additive" === o.environmentBlendMode && (r = null),
                null === r ? (g(p, d),
                f = null,
                m = 0) : r && r.isColor && (g(r, 1),
                i = !0,
                f = null,
                m = 0),
                (c.autoClear || i) && c.clear(c.autoClearColor, c.autoClearDepth, c.autoClearStencil),
                r && (r.isCubeTexture || r.isWebGLRenderTargetCube)) {
                    void 0 === u && ((u = new _r(new Fi(1,1,1),new yr({
                        type: "BackgroundCubeMaterial",
                        uniforms: _n(On.cube.uniforms),
                        vertexShader: On.cube.vertexShader,
                        fragmentShader: On.cube.fragmentShader,
                        side: xt,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.removeAttribute("normal"),
                    u.geometry.removeAttribute("uv"),
                    u.onBeforeRender = function(t, e, n) {
                        this.matrixWorld.copyPosition(n.matrixWorld)
                    }
                    ,
                    Object.defineProperty(u.material, "map", {
                        get: function() {
                            return this.uniforms.tCube.value
                        }
                    }),
                    l.update(u));
                    var s = r.isWebGLRenderTargetCube ? r.texture : r;
                    u.material.uniforms.tCube.value = s,
                    u.material.uniforms.tFlip.value = r.isWebGLRenderTargetCube ? 1 : -1,
                    f === r && m === s.version || (u.material.needsUpdate = !0,
                    f = r,
                    m = s.version),
                    t.unshift(u, u.geometry, u.material, 0, 0, null)
                } else
                    r && r.isTexture && (void 0 === h && ((h = new _r(new Hi(2,2),new yr({
                        type: "BackgroundMaterial",
                        uniforms: _n(On.background.uniforms),
                        vertexShader: On.background.vertexShader,
                        fragmentShader: On.background.fragmentShader,
                        side: z,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.removeAttribute("normal"),
                    Object.defineProperty(h.material, "map", {
                        get: function() {
                            return this.uniforms.t2D.value
                        }
                    }),
                    l.update(h)),
                    !0 === (h.material.uniforms.t2D.value = r).matrixAutoUpdate && r.updateMatrix(),
                    h.material.uniforms.uvTransform.value.copy(r.matrix),
                    f === r && m === r.version || (h.material.needsUpdate = !0,
                    m = (f = r).version),
                    t.unshift(h, h.geometry, h.material, 0, 0, null))
            }
        }
    }
    function Sr(r, a, o, s) {
        var c;
        this.setMode = function(t) {
            c = t
        }
        ,
        this.render = function(t, e) {
            r.drawArrays(c, t, e),
            o.update(e, c)
        }
        ,
        this.renderInstances = function(t, e, n) {
            var i;
            if (s.isWebGL2)
                i = r;
            else if (null === (i = a.get("ANGLE_instanced_arrays")))
                return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            i[s.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](c, e, n, t.maxInstancedCount),
            o.update(n, c, t.maxInstancedCount)
        }
    }
    function Tr(e, n, t) {
        var i;
        function r(t) {
            if ("highp" === t) {
                if (0 < e.getShaderPrecisionFormat(35633, 36338).precision && 0 < e.getShaderPrecisionFormat(35632, 36338).precision)
                    return "highp";
                t = "mediump"
            }
            return "mediump" === t && 0 < e.getShaderPrecisionFormat(35633, 36337).precision && 0 < e.getShaderPrecisionFormat(35632, 36337).precision ? "mediump" : "lowp"
        }
        var a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext
          , o = void 0 !== t.precision ? t.precision : "highp"
          , s = r(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."),
        o = s);
        var c = !0 === t.logarithmicDepthBuffer
          , l = e.getParameter(34930)
          , h = e.getParameter(35660)
          , u = e.getParameter(3379)
          , p = e.getParameter(34076)
          , d = e.getParameter(34921)
          , f = e.getParameter(36347)
          , m = e.getParameter(36348)
          , g = e.getParameter(36349)
          , v = 0 < h
          , y = a || !!n.get("OES_texture_float");
        return {
            isWebGL2: a,
            getMaxAnisotropy: function() {
                if (void 0 !== i)
                    return i;
                var t = n.get("EXT_texture_filter_anisotropic");
                return i = null !== t ? e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: r,
            precision: o,
            logarithmicDepthBuffer: c,
            maxTextures: l,
            maxVertexTextures: h,
            maxTextureSize: u,
            maxCubemapSize: p,
            maxAttributes: d,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: v && y,
            maxSamples: a ? e.getParameter(36183) : 0
        }
    }
    function Er() {
        var h = this
          , u = null
          , p = 0
          , d = !1
          , f = !1
          , m = new yn
          , g = new Ne
          , v = {
            value: null,
            needsUpdate: !1
        };
        function y() {
            v.value !== u && (v.value = u,
            v.needsUpdate = 0 < p),
            h.numPlanes = p,
            h.numIntersection = 0
        }
        function x(t, e, n, i) {
            var r = null !== t ? t.length : 0
              , a = null;
            if (0 !== r) {
                if (a = v.value,
                !0 !== i || null === a) {
                    var o = n + 4 * r
                      , s = e.matrixWorldInverse;
                    g.getNormalMatrix(s),
                    (null === a || a.length < o) && (a = new Float32Array(o));
                    for (var c = 0, l = n; c !== r; ++c,
                    l += 4)
                        m.copy(t[c]).applyMatrix4(s, g),
                        m.normal.toArray(a, l),
                        a[l + 3] = m.constant
                }
                v.value = a,
                v.needsUpdate = !0
            }
            return h.numPlanes = r,
            a
        }
        this.uniform = v,
        this.numPlanes = 0,
        this.numIntersection = 0,
        this.init = function(t, e, n) {
            var i = 0 !== t.length || e || 0 !== p || d;
            return d = e,
            u = x(t, n, 0),
            p = t.length,
            i
        }
        ,
        this.beginShadows = function() {
            f = !0,
            x(null)
        }
        ,
        this.endShadows = function() {
            f = !1,
            y()
        }
        ,
        this.setState = function(t, e, n, i, r, a) {
            if (!d || null === t || 0 === t.length || f && !n)
                f ? x(null) : y();
            else {
                var o = f ? 0 : p
                  , s = 4 * o
                  , c = r.clippingState || null;
                v.value = c,
                c = x(t, i, s, a);
                for (var l = 0; l !== s; ++l)
                    c[l] = u[l];
                r.clippingState = c,
                this.numIntersection = e ? this.numPlanes : 0,
                this.numPlanes += o
            }
        }
    }
    function Ar(n) {
        var i = {};
        return {
            get: function(t) {
                if (void 0 !== i[t])
                    return i[t];
                var e;
                switch (t) {
                case "WEBGL_depth_texture":
                    e = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    e = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    e = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    e = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    e = n.getExtension(t)
                }
                return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."),
                i[t] = e
            }
        }
    }
    function Lr(t, u, a) {
        var o = {}
          , p = {};
        function s(t) {
            var e = t.target
              , n = o[e.id];
            for (var i in null !== n.index && u.remove(n.index),
            n.attributes)
                u.remove(n.attributes[i]);
            e.removeEventListener("dispose", s),
            delete o[e.id];
            var r = p[n.id];
            r && (u.remove(r),
            delete p[n.id]),
            a.memory.geometries--
        }
        return {
            get: function(t, e) {
                var n = o[e.id];
                return n || (e.addEventListener("dispose", s),
                e.isBufferGeometry ? n = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new Ui).setFromObject(t)),
                n = e._bufferGeometry),
                o[e.id] = n,
                a.memory.geometries++,
                n)
            },
            update: function(t) {
                var e = t.index
                  , n = t.attributes;
                for (var i in null !== e && u.update(e, 34963),
                n)
                    u.update(n[i], 34962);
                var r = t.morphAttributes;
                for (var i in r)
                    for (var a = r[i], o = 0, s = a.length; o < s; o++)
                        u.update(a[o], 34962)
            },
            getWireframeAttribute: function(t) {
                var e = p[t.id];
                if (e)
                    return e;
                var n, i = [], r = t.index, a = t.attributes;
                if (null !== r)
                    for (var o = 0, s = (n = r.array).length; o < s; o += 3) {
                        var c = n[o + 0]
                          , l = n[o + 1]
                          , h = n[o + 2];
                        i.push(c, l, l, h, h, c)
                    }
                else
                    for (o = 0,
                    s = (n = a.position.array).length / 3 - 1; o < s; o += 3)
                        c = o + 0,
                        l = o + 1,
                        h = o + 2,
                        i.push(c, l, l, h, h, c);
                return e = new (65535 < Si(i) ? bi : yi)(i,1),
                u.update(e, 34963),
                p[t.id] = e
            }
        }
    }
    function Pr(r, a, o, s) {
        var c, l, h;
        this.setMode = function(t) {
            c = t
        }
        ,
        this.setIndex = function(t) {
            l = t.type,
            h = t.bytesPerElement
        }
        ,
        this.render = function(t, e) {
            r.drawElements(c, e, l, t * h),
            o.update(e, c)
        }
        ,
        this.renderInstances = function(t, e, n) {
            var i;
            if (s.isWebGL2)
                i = r;
            else if (null === (i = a.get("ANGLE_instanced_arrays")))
                return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            i[s.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](c, n, l, e * h, t.maxInstancedCount),
            o.update(n, c, t.maxInstancedCount)
        }
    }
    function Rr(t) {
        var i = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: i,
            programs: null,
            autoReset: !0,
            reset: function() {
                i.frame++,
                i.calls = 0,
                i.triangles = 0,
                i.points = 0,
                i.lines = 0
            },
            update: function(t, e, n) {
                switch (n = n || 1,
                i.calls++,
                e) {
                case 4:
                    i.triangles += n * (t / 3);
                    break;
                case 5:
                case 6:
                    i.triangles += n * (t - 2);
                    break;
                case 1:
                    i.lines += n * (t / 2);
                    break;
                case 3:
                    i.lines += n * (t - 1);
                    break;
                case 2:
                    i.lines += n * t;
                    break;
                case 0:
                    i.points += n * t;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", e)
                }
            }
        }
    }
    function Cr(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }
    function Or(d) {
        var f = {}
          , m = new Float32Array(8);
        return {
            update: function(t, e, n, i) {
                var r = t.morphTargetInfluences
                  , a = r.length
                  , o = f[e.id];
                if (void 0 === o) {
                    o = [];
                    for (var s = 0; s < a; s++)
                        o[s] = [s, 0];
                    f[e.id] = o
                }
                var c = n.morphTargets && e.morphAttributes.position
                  , l = n.morphNormals && e.morphAttributes.normal;
                for (s = 0; s < a; s++)
                    0 !== (h = o[s])[1] && (c && e.removeAttribute("morphTarget" + s),
                    l && e.removeAttribute("morphNormal" + s));
                for (s = 0; s < a; s++)
                    (h = o[s])[0] = s,
                    h[1] = r[s];
                for (o.sort(Cr),
                s = 0; s < 8; s++) {
                    var h;
                    if (h = o[s]) {
                        var u = h[0]
                          , p = h[1];
                        if (p) {
                            c && e.addAttribute("morphTarget" + s, c[u]),
                            l && e.addAttribute("morphNormal" + s, l[u]),
                            m[s] = p;
                            continue
                        }
                    }
                    m[s] = 0
                }
                i.getUniforms().setValue(d, "morphTargetInfluences", m)
            }
        }
    }
    function Ir(r, a) {
        var o = {};
        return {
            update: function(t) {
                var e = a.render.frame
                  , n = t.geometry
                  , i = r.get(t, n);
                return o[i.id] !== e && (n.isGeometry && i.updateFromObject(t),
                r.update(i),
                o[i.id] = e),
                i
            },
            dispose: function() {
                o = {}
            }
        }
    }
    function Dr(t, e, n, i, r, a, o, s, c, l) {
        hn.call(this, t = void 0 !== t ? t : [], e = void 0 !== e ? e : W, n, i, r, a, o = void 0 !== o ? o : Gt, s, c, l),
        this.flipY = !1
    }
    function Nr(t, e, n, i) {
        hn.call(this, null),
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
        },
        this.magFilter = vt,
        this.minFilter = vt,
        this.wrapR = I,
        this.generateMipmaps = !1,
        this.flipY = !1
    }
    function zr(t, e, n, i) {
        hn.call(this, null),
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
        },
        this.magFilter = vt,
        this.minFilter = vt,
        this.wrapR = I,
        this.generateMipmaps = !1,
        this.flipY = !1
    }
    ((yr.prototype = Object.create(ji.prototype)).constructor = yr).prototype.isShaderMaterial = !0,
    yr.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.fragmentShader = t.fragmentShader,
        this.vertexShader = t.vertexShader,
        this.uniforms = _n(t.uniforms),
        this.defines = Object.assign({}, t.defines),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.lights = t.lights,
        this.clipping = t.clipping,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.extensions = t.extensions,
        this
    }
    ,
    yr.prototype.toJSON = function(t) {
        var e = ji.prototype.toJSON.call(this, t);
        for (var n in e.uniforms = {},
        this.uniforms) {
            var i = this.uniforms[n].value;
            i && i.isTexture ? e.uniforms[n] = {
                type: "t",
                value: i.toJSON(t).uuid
            } : i && i.isColor ? e.uniforms[n] = {
                type: "c",
                value: i.getHex()
            } : i && i.isVector2 ? e.uniforms[n] = {
                type: "v2",
                value: i.toArray()
            } : i && i.isVector3 ? e.uniforms[n] = {
                type: "v3",
                value: i.toArray()
            } : i && i.isVector4 ? e.uniforms[n] = {
                type: "v4",
                value: i.toArray()
            } : i && i.isMatrix3 ? e.uniforms[n] = {
                type: "m3",
                value: i.toArray()
            } : i && i.isMatrix4 ? e.uniforms[n] = {
                type: "m4",
                value: i.toArray()
            } : e.uniforms[n] = {
                value: i
            }
        }
        0 < Object.keys(this.defines).length && (e.defines = this.defines),
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader;
        var r = {};
        for (var a in this.extensions)
            !0 === this.extensions[a] && (r[a] = !0);
        return 0 < Object.keys(r).length && (e.extensions = r),
        e
    }
    ,
    Object.assign(xr.prototype, {
        set: function(t, e) {
            return this.origin.copy(t),
            this.direction.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.origin.copy(t.origin),
            this.direction.copy(t.direction),
            this
        },
        at: function(t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"),
            e = new De),
            e.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function(t) {
            return this.direction.copy(t).sub(this.origin).normalize(),
            this
        },
        recast: (er = new De,
        function(t) {
            return this.origin.copy(this.at(t, er)),
            this
        }
        ),
        closestPointToPoint: function(t, e) {
            void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
            e = new De),
            e.subVectors(t, this.origin);
            var n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: (tr = new De,
        function(t) {
            var e = tr.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (tr.copy(this.direction).multiplyScalar(e).add(this.origin),
            tr.distanceToSquared(t))
        }
        ),
        distanceSqToSegment: (Qi = new De,
        Ki = new De,
        $i = new De,
        function(t, e, n, i) {
            Qi.copy(t).add(e).multiplyScalar(.5),
            Ki.copy(e).sub(t).normalize(),
            $i.copy(this.origin).sub(Qi);
            var r, a, o, s, c = .5 * t.distanceTo(e), l = -this.direction.dot(Ki), h = $i.dot(this.direction), u = -$i.dot(Ki), p = $i.lengthSq(), d = Math.abs(1 - l * l);
            if (0 < d)
                if (a = l * h - u,
                s = c * d,
                0 <= (r = l * u - h))
                    if (-s <= a)
                        if (a <= s) {
                            var f = 1 / d;
                            o = (r *= f) * (r + l * (a *= f) + 2 * h) + a * (l * r + a + 2 * u) + p
                        } else
                            a = c,
                            o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
                    else
                        a = -c,
                        o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
                else
                    o = a <= -s ? -(r = Math.max(0, -(-l * c + h))) * r + (a = 0 < r ? -c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p : a <= s ? (r = 0,
                    (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p) : -(r = Math.max(0, -(l * c + h))) * r + (a = 0 < r ? c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p;
            else
                a = 0 < l ? -c : c,
                o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
            return n && n.copy(this.direction).multiplyScalar(r).add(this.origin),
            i && i.copy(Ki).multiplyScalar(a).add(Qi),
            o
        }
        ),
        intersectSphere: (Zi = new De,
        function(t, e) {
            Zi.subVectors(t.center, this.origin);
            var n = Zi.dot(this.direction)
              , i = Zi.dot(Zi) - n * n
              , r = t.radius * t.radius;
            if (r < i)
                return null;
            var a = Math.sqrt(r - i)
              , o = n - a
              , s = n + a;
            return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e)
        }
        ),
        intersectsSphere: function(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            if (0 === e)
                return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var n = -(this.origin.dot(t.normal) + t.constant) / e;
            return 0 <= n ? n : null
        },
        intersectPlane: function(t, e) {
            var n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        },
        intersectsPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || t.normal.dot(this.direction) * e < 0
        },
        intersectBox: function(t, e) {
            var n, i, r, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
            return i = 0 <= c ? (n = (t.min.x - u.x) * c,
            (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c,
            (t.min.x - u.x) * c),
            (a = 0 <= l ? (r = (t.min.y - u.y) * l,
            (t.max.y - u.y) * l) : (r = (t.max.y - u.y) * l,
            (t.min.y - u.y) * l)) < n || i < r ? null : ((n < r || n != n) && (n = r),
            (a < i || i != i) && (i = a),
            (s = 0 <= h ? (o = (t.min.z - u.z) * h,
            (t.max.z - u.z) * h) : (o = (t.max.z - u.z) * h,
            (t.min.z - u.z) * h)) < n || i < o ? null : ((n < o || n != n) && (n = o),
            (s < i || i != i) && (i = s),
            i < 0 ? null : this.at(0 <= n ? n : i, e)))
        },
        intersectsBox: (Ji = new De,
        function(t) {
            return null !== this.intersectBox(t, Ji)
        }
        ),
        intersectTriangle: (Wi = new De,
        qi = new De,
        Xi = new De,
        Yi = new De,
        function(t, e, n, i, r) {
            qi.subVectors(e, t),
            Xi.subVectors(n, t),
            Yi.crossVectors(qi, Xi);
            var a, o = this.direction.dot(Yi);
            if (0 < o) {
                if (i)
                    return null;
                a = 1
            } else {
                if (!(o < 0))
                    return null;
                a = -1,
                o = -o
            }
            Wi.subVectors(this.origin, t);
            var s = a * this.direction.dot(Xi.crossVectors(Wi, Xi));
            if (s < 0)
                return null;
            var c = a * this.direction.dot(qi.cross(Wi));
            if (c < 0)
                return null;
            if (o < s + c)
                return null;
            var l = -a * Wi.dot(Yi);
            return l < 0 ? null : this.at(l / o, r)
        }
        ),
        applyMatrix4: function(t) {
            return this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }),
    Object.assign(br, {
        getNormal: (sr = new De,
        function(t, e, n, i) {
            void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"),
            i = new De),
            i.subVectors(n, e),
            sr.subVectors(t, e),
            i.cross(sr);
            var r = i.lengthSq();
            return 0 < r ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
        }
        ),
        getBarycoord: (rr = new De,
        ar = new De,
        or = new De,
        function(t, e, n, i, r) {
            rr.subVectors(i, e),
            ar.subVectors(n, e),
            or.subVectors(t, e);
            var a = rr.dot(rr)
              , o = rr.dot(ar)
              , s = rr.dot(or)
              , c = ar.dot(ar)
              , l = ar.dot(or)
              , h = a * c - o * o;
            if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
            r = new De),
            0 == h)
                return r.set(-2, -1, -1);
            var u = 1 / h
              , p = (c * s - o * l) * u
              , d = (a * l - o * s) * u;
            return r.set(1 - p - d, d, p)
        }
        ),
        containsPoint: (ir = new De,
        function(t, e, n, i) {
            return br.getBarycoord(t, e, n, i, ir),
            0 <= ir.x && 0 <= ir.y && ir.x + ir.y <= 1
        }
        ),
        getUV: (nr = new De,
        function(t, e, n, i, r, a, o, s) {
            return this.getBarycoord(t, e, n, i, nr),
            s.set(0, 0),
            s.addScaledVector(r, nr.x),
            s.addScaledVector(a, nr.y),
            s.addScaledVector(o, nr.z),
            s
        }
        )
    }),
    Object.assign(br.prototype, {
        set: function(t, e, n) {
            return this.a.copy(t),
            this.b.copy(e),
            this.c.copy(n),
            this
        },
        setFromPointsAndIndices: function(t, e, n, i) {
            return this.a.copy(t[e]),
            this.b.copy(t[n]),
            this.c.copy(t[i]),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.a.copy(t.a),
            this.b.copy(t.b),
            this.c.copy(t.c),
            this
        },
        getArea: (fr = new De,
        mr = new De,
        function() {
            return fr.subVectors(this.c, this.b),
            mr.subVectors(this.a, this.b),
            .5 * fr.cross(mr).length()
        }
        ),
        getMidpoint: function(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
            t = new De),
            t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        getNormal: function(t) {
            return br.getNormal(this.a, this.b, this.c, t)
        },
        getPlane: function(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"),
            t = new De),
            t.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        getBarycoord: function(t, e) {
            return br.getBarycoord(t, this.a, this.b, this.c, e)
        },
        containsPoint: function(t) {
            return br.containsPoint(t, this.a, this.b, this.c)
        },
        getUV: function(t, e, n, i, r) {
            return br.getUV(t, this.a, this.b, this.c, e, n, i, r)
        },
        intersectsBox: function(t) {
            return t.intersectsTriangle(this)
        },
        closestPointToPoint: (cr = new De,
        lr = new De,
        hr = new De,
        ur = new De,
        pr = new De,
        dr = new De,
        function(t, e) {
            void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
            e = new De);
            var n, i, r = this.a, a = this.b, o = this.c;
            cr.subVectors(a, r),
            lr.subVectors(o, r),
            ur.subVectors(t, r);
            var s = cr.dot(ur)
              , c = lr.dot(ur);
            if (s <= 0 && c <= 0)
                return e.copy(r);
            pr.subVectors(t, a);
            var l = cr.dot(pr)
              , h = lr.dot(pr);
            if (0 <= l && h <= l)
                return e.copy(a);
            var u = s * h - l * c;
            if (u <= 0 && 0 <= s && l <= 0)
                return n = s / (s - l),
                e.copy(r).addScaledVector(cr, n);
            dr.subVectors(t, o);
            var p = cr.dot(dr)
              , d = lr.dot(dr);
            if (0 <= d && p <= d)
                return e.copy(o);
            var f = p * c - s * d;
            if (f <= 0 && 0 <= c && d <= 0)
                return i = c / (c - d),
                e.copy(r).addScaledVector(lr, i);
            var m = l * d - p * h;
            if (m <= 0 && 0 <= h - l && 0 <= p - d)
                return hr.subVectors(o, a),
                i = (h - l) / (h - l + (p - d)),
                e.copy(a).addScaledVector(hr, i);
            var g = 1 / (m + f + u);
            return n = f * g,
            i = u * g,
            e.copy(r).addScaledVector(cr, n).addScaledVector(lr, i)
        }
        ),
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }),
    ((wr.prototype = Object.create(ji.prototype)).constructor = wr).prototype.isMeshBasicMaterial = !0,
    wr.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this
    }
    ,
    _r.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: _r,
        isMesh: !0,
        setDrawMode: function(t) {
            this.drawMode = t
        },
        copy: function(t) {
            return ii.prototype.copy.call(this, t),
            this.drawMode = t.drawMode,
            void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
            this
        },
        updateMorphTargets: function() {
            var t, e, n, i = this.geometry;
            if (i.isBufferGeometry) {
                var r = i.morphAttributes
                  , a = Object.keys(r);
                if (0 < a.length) {
                    var o = r[a[0]];
                    if (void 0 !== o)
                        for (this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {},
                        t = 0,
                        e = o.length; t < e; t++)
                            n = o[t].name || String(t),
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = t
                }
            } else {
                var s = i.morphTargets;
                void 0 !== s && 0 < s.length && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        },
        raycast: function() {
            var D = new bn
              , N = new xr
              , z = new vn
              , v = new De
              , y = new De
              , x = new De
              , b = new De
              , w = new De
              , _ = new De
              , M = new De
              , S = new De
              , T = new De
              , B = new Oe
              , U = new Oe
              , G = new Oe
              , F = new De
              , l = new De;
            function k(t, e, n, i, r, a, o, s) {
                if (null === (e.side === xt ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, e.side !== J, s)))
                    return null;
                l.copy(s),
                l.applyMatrix4(t.matrixWorld);
                var c = n.ray.origin.distanceTo(l);
                return c < n.near || c > n.far ? null : {
                    distance: c,
                    point: l.clone(),
                    object: t
                }
            }
            function H(t, e, n, i, r, a, o, s, c, l) {
                v.fromBufferAttribute(r, s),
                y.fromBufferAttribute(r, c),
                x.fromBufferAttribute(r, l);
                var h = t.morphTargetInfluences;
                if (e.morphTargets && a && h) {
                    M.set(0, 0, 0),
                    S.set(0, 0, 0),
                    T.set(0, 0, 0);
                    for (var u = 0, p = a.length; u < p; u++) {
                        var d = h[u]
                          , f = a[u];
                        0 !== d && (b.fromBufferAttribute(f, s),
                        w.fromBufferAttribute(f, c),
                        _.fromBufferAttribute(f, l),
                        M.addScaledVector(b.sub(v), d),
                        S.addScaledVector(w.sub(y), d),
                        T.addScaledVector(_.sub(x), d))
                    }
                    v.add(M),
                    y.add(S),
                    x.add(T)
                }
                var m = k(t, e, n, i, v, y, x, F);
                if (m) {
                    o && (B.fromBufferAttribute(o, s),
                    U.fromBufferAttribute(o, c),
                    G.fromBufferAttribute(o, l),
                    m.uv = br.getUV(F, v, y, x, B, U, G, new Oe));
                    var g = new Nn(s,c,l);
                    br.getNormal(v, y, x, g.normal),
                    m.face = g
                }
                return m
            }
            return function(t, e) {
                var n, i = this.geometry, r = this.material, a = this.matrixWorld;
                if (void 0 !== r && (null === i.boundingSphere && i.computeBoundingSphere(),
                z.copy(i.boundingSphere),
                z.applyMatrix4(a),
                !1 !== t.ray.intersectsSphere(z) && (D.getInverse(a),
                N.copy(t.ray).applyMatrix4(D),
                null === i.boundingBox || !1 !== N.intersectsBox(i.boundingBox))))
                    if (i.isBufferGeometry) {
                        var o, s, c, l, h, u, p, d, f, m = i.index, g = i.attributes.position, v = i.morphAttributes.position, y = i.attributes.uv, x = i.groups, b = i.drawRange;
                        if (null !== m)
                            if (Array.isArray(r))
                                for (l = 0,
                                u = x.length; l < u; l++)
                                    for (f = r[(d = x[l]).materialIndex],
                                    h = Math.max(d.start, b.start),
                                    p = Math.min(d.start + d.count, b.start + b.count); h < p; h += 3)
                                        o = m.getX(h),
                                        s = m.getX(h + 1),
                                        c = m.getX(h + 2),
                                        (n = H(this, f, t, N, g, v, y, o, s, c)) && (n.faceIndex = Math.floor(h / 3),
                                        n.face.materialIndex = d.materialIndex,
                                        e.push(n));
                            else
                                for (l = Math.max(0, b.start),
                                u = Math.min(m.count, b.start + b.count); l < u; l += 3)
                                    o = m.getX(l),
                                    s = m.getX(l + 1),
                                    c = m.getX(l + 2),
                                    (n = H(this, r, t, N, g, v, y, o, s, c)) && (n.faceIndex = Math.floor(l / 3),
                                    e.push(n));
                        else if (void 0 !== g)
                            if (Array.isArray(r))
                                for (l = 0,
                                u = x.length; l < u; l++)
                                    for (f = r[(d = x[l]).materialIndex],
                                    h = Math.max(d.start, b.start),
                                    p = Math.min(d.start + d.count, b.start + b.count); h < p; h += 3)
                                        (n = H(this, f, t, N, g, v, y, o = h, s = h + 1, c = h + 2)) && (n.faceIndex = Math.floor(h / 3),
                                        n.face.materialIndex = d.materialIndex,
                                        e.push(n));
                            else
                                for (l = Math.max(0, b.start),
                                u = Math.min(g.count, b.start + b.count); l < u; l += 3)
                                    (n = H(this, r, t, N, g, v, y, o = l, s = l + 1, c = l + 2)) && (n.faceIndex = Math.floor(l / 3),
                                    e.push(n))
                    } else if (i.isGeometry) {
                        var w, _, M, S, T = Array.isArray(r), E = i.vertices, A = i.faces, L = i.faceVertexUvs[0];
                        0 < L.length && (S = L);
                        for (var P = 0, R = A.length; P < R; P++) {
                            var C = A[P]
                              , O = T ? r[C.materialIndex] : r;
                            if (void 0 !== O && (w = E[C.a],
                            _ = E[C.b],
                            M = E[C.c],
                            n = k(this, O, t, N, w, _, M, F))) {
                                if (S && S[P]) {
                                    var I = S[P];
                                    B.copy(I[0]),
                                    U.copy(I[1]),
                                    G.copy(I[2]),
                                    n.uv = br.getUV(F, w, _, M, B, U, G, new Oe)
                                }
                                n.face = C,
                                n.faceIndex = P,
                                e.push(n)
                            }
                        }
                    }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    ((Dr.prototype = Object.create(hn.prototype)).constructor = Dr).prototype.isCubeTexture = !0,
    Object.defineProperty(Dr.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(t) {
            this.image = t
        }
    }),
    ((Nr.prototype = Object.create(hn.prototype)).constructor = Nr).prototype.isDataTexture2DArray = !0,
    ((zr.prototype = Object.create(hn.prototype)).constructor = zr).prototype.isDataTexture3D = !0;
    var Br = new hn
      , Ur = new Nr
      , Gr = new zr
      , Fr = new Dr
      , kr = []
      , Hr = []
      , Vr = new Float32Array(16)
      , jr = new Float32Array(9)
      , Wr = new Float32Array(4);
    function qr(t, e, n) {
        var i = t[0];
        if (i <= 0 || 0 < i)
            return t;
        var r = e * n
          , a = kr[r];
        if (void 0 === a && (a = new Float32Array(r),
        kr[r] = a),
        0 !== e) {
            i.toArray(a, 0);
            for (var o = 1, s = 0; o !== e; ++o)
                s += n,
                t[o].toArray(a, s)
        }
        return a
    }
    function Xr(t, e) {
        if (t.length !== e.length)
            return !1;
        for (var n = 0, i = t.length; n < i; n++)
            if (t[n] !== e[n])
                return !1;
        return !0
    }
    function Yr(t, e) {
        for (var n = 0, i = e.length; n < i; n++)
            t[n] = e[n]
    }
    function Jr(t, e) {
        var n = Hr[e];
        void 0 === n && (n = new Int32Array(e),
        Hr[e] = n);
        for (var i = 0; i !== e; ++i)
            n[i] = t.allocateTextureUnit();
        return n
    }
    function Zr(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e),
        n[0] = e)
    }
    function Qr(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e),
        n[0] = e)
    }
    function Kr(t, e) {
        var n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y),
            n[0] = e.x,
            n[1] = e.y);
        else {
            if (Xr(n, e))
                return;
            t.uniform2fv(this.addr, e),
            Yr(n, e)
        }
    }
    function $r(t, e) {
        var n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z),
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z);
        else if (void 0 !== e.r)
            n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b),
            n[0] = e.r,
            n[1] = e.g,
            n[2] = e.b);
        else {
            if (Xr(n, e))
                return;
            t.uniform3fv(this.addr, e),
            Yr(n, e)
        }
    }
    function ta(t, e) {
        var n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z,
            n[3] = e.w);
        else {
            if (Xr(n, e))
                return;
            t.uniform4fv(this.addr, e),
            Yr(n, e)
        }
    }
    function ea(t, e) {
        var n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Xr(n, e))
                return;
            t.uniformMatrix2fv(this.addr, !1, e),
            Yr(n, e)
        } else {
            if (Xr(n, i))
                return;
            Wr.set(i),
            t.uniformMatrix2fv(this.addr, !1, Wr),
            Yr(n, i)
        }
    }
    function na(t, e) {
        var n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Xr(n, e))
                return;
            t.uniformMatrix3fv(this.addr, !1, e),
            Yr(n, e)
        } else {
            if (Xr(n, i))
                return;
            jr.set(i),
            t.uniformMatrix3fv(this.addr, !1, jr),
            Yr(n, i)
        }
    }
    function ia(t, e) {
        var n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Xr(n, e))
                return;
            t.uniformMatrix4fv(this.addr, !1, e),
            Yr(n, e)
        } else {
            if (Xr(n, i))
                return;
            Vr.set(i),
            t.uniformMatrix4fv(this.addr, !1, Vr),
            Yr(n, i)
        }
    }
    function ra(t, e, n) {
        var i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.safeSetTexture2D(e || Br, r)
    }
    function aa(t, e, n) {
        var i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.setTexture2DArray(e || Ur, r)
    }
    function oa(t, e, n) {
        var i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.setTexture3D(e || Gr, r)
    }
    function sa(t, e, n) {
        var i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.safeSetTextureCube(e || Fr, r)
    }
    function ca(t, e) {
        var n = this.cache;
        Xr(n, e) || (t.uniform2iv(this.addr, e),
        Yr(n, e))
    }
    function la(t, e) {
        var n = this.cache;
        Xr(n, e) || (t.uniform3iv(this.addr, e),
        Yr(n, e))
    }
    function ha(t, e) {
        var n = this.cache;
        Xr(n, e) || (t.uniform4iv(this.addr, e),
        Yr(n, e))
    }
    function ua(t, e) {
        var n = this.cache;
        Xr(n, e) || (t.uniform1fv(this.addr, e),
        Yr(n, e))
    }
    function pa(t, e) {
        var n = this.cache;
        Xr(n, e) || (t.uniform1iv(this.addr, e),
        Yr(n, e))
    }
    function da(t, e) {
        var n = this.cache
          , i = qr(e, this.size, 2);
        Xr(n, i) || (t.uniform2fv(this.addr, i),
        this.updateCache(i))
    }
    function fa(t, e) {
        var n = this.cache
          , i = qr(e, this.size, 3);
        Xr(n, i) || (t.uniform3fv(this.addr, i),
        this.updateCache(i))
    }
    function ma(t, e) {
        var n = this.cache
          , i = qr(e, this.size, 4);
        Xr(n, i) || (t.uniform4fv(this.addr, i),
        this.updateCache(i))
    }
    function ga(t, e) {
        var n = this.cache
          , i = qr(e, this.size, 4);
        Xr(n, i) || (t.uniformMatrix2fv(this.addr, !1, i),
        this.updateCache(i))
    }
    function va(t, e) {
        var n = this.cache
          , i = qr(e, this.size, 9);
        Xr(n, i) || (t.uniformMatrix3fv(this.addr, !1, i),
        this.updateCache(i))
    }
    function ya(t, e) {
        var n = this.cache
          , i = qr(e, this.size, 16);
        Xr(n, i) || (t.uniformMatrix4fv(this.addr, !1, i),
        this.updateCache(i))
    }
    function xa(t, e, n) {
        var i = this.cache
          , r = e.length
          , a = Jr(n, r);
        !1 === Xr(i, a) && (t.uniform1iv(this.addr, a),
        Yr(i, a));
        for (var o = 0; o !== r; ++o)
            n.safeSetTexture2D(e[o] || Br, a[o])
    }
    function ba(t, e, n) {
        var i = this.cache
          , r = e.length
          , a = Jr(n, r);
        !1 === Xr(i, a) && (t.uniform1iv(this.addr, a),
        Yr(i, a));
        for (var o = 0; o !== r; ++o)
            n.safeSetTextureCube(e[o] || Fr, a[o])
    }
    function wa(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return Zr;
            case 35664:
                return Kr;
            case 35665:
                return $r;
            case 35666:
                return ta;
            case 35674:
                return ea;
            case 35675:
                return na;
            case 35676:
                return ia;
            case 35678:
            case 36198:
                return ra;
            case 35679:
                return oa;
            case 35680:
                return sa;
            case 36289:
                return aa;
            case 5124:
            case 35670:
                return Qr;
            case 35667:
            case 35671:
                return ca;
            case 35668:
            case 35672:
                return la;
            case 35669:
            case 35673:
                return ha
            }
        }(e.type)
    }
    function _a(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.size = e.size,
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return ua;
            case 35664:
                return da;
            case 35665:
                return fa;
            case 35666:
                return ma;
            case 35674:
                return ga;
            case 35675:
                return va;
            case 35676:
                return ya;
            case 35678:
                return xa;
            case 35680:
                return ba;
            case 5124:
            case 35670:
                return pa;
            case 35667:
            case 35671:
                return ca;
            case 35668:
            case 35672:
                return la;
            case 35669:
            case 35673:
                return ha
            }
        }(e.type)
    }
    function Ma(t) {
        this.id = t,
        this.seq = [],
        this.map = {}
    }
    _a.prototype.updateCache = function(t) {
        var e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)),
        Yr(e, t)
    }
    ,
    Ma.prototype.setValue = function(t, e, n) {
        for (var i = this.seq, r = 0, a = i.length; r !== a; ++r) {
            var o = i[r];
            o.setValue(t, e[o.id], n)
        }
    }
    ;
    var Sa = /([\w\d_]+)(\])?(\[|\.)?/g;
    function Ta(t, e) {
        t.seq.push(e),
        t.map[e.id] = e
    }
    function Ea(t, e, n) {
        var i = t.name
          , r = i.length;
        for (Sa.lastIndex = 0; ; ) {
            var a = Sa.exec(i)
              , o = Sa.lastIndex
              , s = a[1]
              , c = "]" === a[2]
              , l = a[3];
            if (c && (s |= 0),
            void 0 === l || "[" === l && o + 2 === r) {
                Ta(n, void 0 === l ? new wa(s,t,e) : new _a(s,t,e));
                break
            }
            var h = n.map[s];
            void 0 === h && Ta(n, h = new Ma(s)),
            n = h
        }
    }
    function Aa(t, e) {
        this.seq = [],
        this.map = {};
        for (var n = t.getProgramParameter(e, 35718), i = 0; i < n; ++i) {
            var r = t.getActiveUniform(e, i);
            Ea(r, t.getUniformLocation(e, r.name), this)
        }
    }
    function La(t, e, n) {
        var i = t.createShader(e);
        return t.shaderSource(i, n),
        t.compileShader(i),
        !1 === t.getShaderParameter(i, 35713) && console.error("THREE.WebGLShader: Shader couldn't compile."),
        "" !== t.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", 35633 === e ? "vertex" : "fragment", t.getShaderInfoLog(i), function(t) {
            for (var e = t.split("\n"), n = 0; n < e.length; n++)
                e[n] = n + 1 + ": " + e[n];
            return e.join("\n")
        }(n)),
        i
    }
    Aa.prototype.setValue = function(t, e, n, i) {
        var r = this.map[e];
        void 0 !== r && r.setValue(t, n, i)
    }
    ,
    Aa.prototype.setOptional = function(t, e, n) {
        var i = e[n];
        void 0 !== i && this.setValue(t, n, i)
    }
    ,
    Aa.upload = function(t, e, n, i) {
        for (var r = 0, a = e.length; r !== a; ++r) {
            var o = e[r]
              , s = n[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, i)
        }
    }
    ,
    Aa.seqWithValue = function(t, e) {
        for (var n = [], i = 0, r = t.length; i !== r; ++i) {
            var a = t[i];
            a.id in e && n.push(a)
        }
        return n
    }
    ;
    var Pa = 0;
    function Ra(t) {
        switch (t) {
        case be:
            return ["Linear", "( value )"];
        case we:
            return ["sRGB", "( value )"];
        case Me:
            return ["RGBE", "( value )"];
        case Se:
            return ["RGBM", "( value, 7.0 )"];
        case Te:
            return ["RGBM", "( value, 16.0 )"];
        case Ee:
            return ["RGBD", "( value, 256.0 )"];
        case _e:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw new Error("unsupported encoding: " + t)
        }
    }
    function Ca(t, e) {
        var n = Ra(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }
    function Oa(t) {
        return "" !== t
    }
    function Ia(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }
    function Da(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    function Na(t) {
        return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function(t, e) {
            var n = wn[e];
            if (void 0 === n)
                throw new Error("Can not resolve #include <" + e + ">");
            return Na(n)
        })
    }
    function za(t) {
        return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, n, i) {
            for (var r = "", a = parseInt(e); a < parseInt(n); a++)
                r += i.replace(/\[ i \]/g, "[ " + a + " ]");
            return r
        })
    }
    function Ba(t, e, n, i, r, a, o, s) {
        var c = t.context
          , l = i.defines
          , h = r.vertexShader
          , u = r.fragmentShader
          , p = "SHADOWMAP_TYPE_BASIC";
        a.shadowMapType === N ? p = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === D && (p = "SHADOWMAP_TYPE_PCF_SOFT");
        var d = "ENVMAP_TYPE_CUBE"
          , f = "ENVMAP_MODE_REFLECTION"
          , m = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (i.envMap.mapping) {
            case W:
            case ut:
                d = "ENVMAP_TYPE_CUBE";
                break;
            case mt:
            case gt:
                d = "ENVMAP_TYPE_CUBE_UV";
                break;
            case pt:
            case dt:
                d = "ENVMAP_TYPE_EQUIREC";
                break;
            case ft:
                d = "ENVMAP_TYPE_SPHERE"
            }
            switch (i.envMap.mapping) {
            case ut:
            case dt:
                f = "ENVMAP_MODE_REFRACTION"
            }
            switch (i.combine) {
            case B:
                m = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case U:
                m = "ENVMAP_BLENDING_MIX";
                break;
            case G:
                m = "ENVMAP_BLENDING_ADD"
            }
        }
        var g, v, y = 0 < t.gammaFactor ? t.gammaFactor : 1, x = o.isWebGL2 ? "" : function(t, e, n) {
            return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Oa).join("\n")
        }(i.extensions, a, e), b = function(t) {
            var e = [];
            for (var n in t) {
                var i = t[n];
                !1 !== i && e.push("#define " + n + " " + i)
            }
            return e.join("\n")
        }(l), w = c.createProgram();
        if (i.isRawShaderMaterial ? (0 < (g = [b].filter(Oa).join("\n")).length && (g += "\n"),
        0 < (v = [x, b].filter(Oa).join("\n")).length && (v += "\n")) : (g = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, b, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + y, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + p : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Oa).join("\n"),
        v = [x, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, b, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + y, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.envMap ? "#define " + m : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + p : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== F ? "#define TONE_MAPPING" : "", a.toneMapping !== F ? wn.tonemapping_pars_fragment : "", a.toneMapping !== F ? function(t, e) {
            var n;
            switch (e) {
            case bt:
                n = "Linear";
                break;
            case k:
                n = "Reinhard";
                break;
            case H:
                n = "Uncharted2";
                break;
            case V:
                n = "OptimizedCineon";
                break;
            case j:
                n = "ACESFilmic";
                break;
            default:
                throw new Error("unsupported toneMapping: " + e)
            }
            return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
        }("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? wn.encodings_pars_fragment : "", a.mapEncoding ? Ca("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? Ca("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? Ca("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? Ca("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? function(t, e) {
            var n = Ra(e);
            return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
        }("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(Oa).join("\n")),
        h = Da(h = Ia(h = Na(h), a), a),
        u = Da(u = Ia(u = Na(u), a), a),
        h = za(h),
        u = za(u),
        o.isWebGL2 && !i.isRawShaderMaterial) {
            var _ = !1
              , M = /^\s*#version\s+300\s+es\s*\n/;
            i.isShaderMaterial && null !== h.match(M) && null !== u.match(M) && (_ = !0,
            h = h.replace(M, ""),
            u = u.replace(M, "")),
            g = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g,
            v = ["#version 300 es\n", "#define varying in", _ ? "" : "out highp vec4 pc_fragColor;", _ ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v
        }
        var S = v + u
          , T = La(c, 35633, g + h)
          , E = La(c, 35632, S);
        c.attachShader(w, T),
        c.attachShader(w, E),
        void 0 !== i.index0AttributeName ? c.bindAttribLocation(w, 0, i.index0AttributeName) : !0 === a.morphTargets && c.bindAttribLocation(w, 0, "position"),
        c.linkProgram(w);
        var A, L, P = c.getProgramInfoLog(w).trim(), R = c.getShaderInfoLog(T).trim(), C = c.getShaderInfoLog(E).trim(), O = !0, I = !0;
        return !1 === c.getProgramParameter(w, 35714) ? (O = !1,
        console.error("THREE.WebGLProgram: shader error: ", c.getError(), "35715", c.getProgramParameter(w, 35715), "gl.getProgramInfoLog", P, R, C)) : "" !== P ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", P) : "" !== R && "" !== C || (I = !1),
        I && (this.diagnostics = {
            runnable: O,
            material: i,
            programLog: P,
            vertexShader: {
                log: R,
                prefix: g
            },
            fragmentShader: {
                log: C,
                prefix: v
            }
        }),
        c.deleteShader(T),
        c.deleteShader(E),
        this.getUniforms = function() {
            return void 0 === A && (A = new Aa(c,w,s)),
            A
        }
        ,
        this.getAttributes = function() {
            return void 0 === L && (L = function(t, e) {
                for (var n = {}, i = t.getProgramParameter(e, 35721), r = 0; r < i; r++) {
                    var a = t.getActiveAttrib(e, r).name;
                    n[a] = t.getAttribLocation(e, a)
                }
                return n
            }(c, w)),
            L
        }
        ,
        this.destroy = function() {
            c.deleteProgram(w),
            this.program = void 0
        }
        ,
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                    this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                    this.getAttributes()
                }
            }
        }),
        this.name = r.name,
        this.id = Pa++,
        this.code = n,
        this.usedTimes = 1,
        this.program = w,
        this.vertexShader = T,
        this.fragmentShader = E,
        this
    }
    function Ua(u, c, p, l) {
        var h = []
          , d = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        }
          , a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
        function f(t, e) {
            var n;
            return t ? t.isTexture ? n = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
            n = t.texture.encoding) : n = be,
            n === be && e && (n = _e),
            n
        }
        this.getParameters = function(t, e, n, i, r, a, o) {
            var s = d[t.type]
              , c = o.isSkinnedMesh ? function(t) {
                var e = t.skeleton.bones;
                if (p.floatVertexTextures)
                    return 1024;
                var n = p.maxVertexUniforms
                  , i = Math.floor((n - 20) / 4)
                  , r = Math.min(i, e.length);
                return r < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + r + "."),
                0) : r
            }(o) : 0
              , l = p.precision;
            null !== t.precision && (l = p.getMaxPrecision(t.precision)) !== t.precision && console.warn("THREE.WebGLProgram.getParameters:", t.precision, "not supported, using", l, "instead.");
            var h = u.getRenderTarget();
            return {
                shaderID: s,
                precision: l,
                supportsVertexTextures: p.vertexTextures,
                outputEncoding: f(h ? h.texture : null, u.gammaOutput),
                map: !!t.map,
                mapEncoding: f(t.map, u.gammaInput),
                matcap: !!t.matcap,
                matcapEncoding: f(t.matcap, u.gammaInput),
                envMap: !!t.envMap,
                envMapMode: t.envMap && t.envMap.mapping,
                envMapEncoding: f(t.envMap, u.gammaInput),
                envMapCubeUV: !!t.envMap && (t.envMap.mapping === mt || t.envMap.mapping === gt),
                lightMap: !!t.lightMap,
                aoMap: !!t.aoMap,
                emissiveMap: !!t.emissiveMap,
                emissiveMapEncoding: f(t.emissiveMap, u.gammaInput),
                bumpMap: !!t.bumpMap,
                normalMap: !!t.normalMap,
                objectSpaceNormalMap: t.normalMapType === Re,
                displacementMap: !!t.displacementMap,
                roughnessMap: !!t.roughnessMap,
                metalnessMap: !!t.metalnessMap,
                specularMap: !!t.specularMap,
                alphaMap: !!t.alphaMap,
                gradientMap: !!t.gradientMap,
                combine: t.combine,
                vertexTangents: t.normalMap && t.vertexTangents,
                vertexColors: t.vertexColors,
                fog: !!i,
                useFog: t.fog,
                fogExp: i && i.isFogExp2,
                flatShading: t.flatShading,
                sizeAttenuation: t.sizeAttenuation,
                logarithmicDepthBuffer: p.logarithmicDepthBuffer,
                skinning: t.skinning && 0 < c,
                maxBones: c,
                useVertexTexture: p.floatVertexTextures,
                morphTargets: t.morphTargets,
                morphNormals: t.morphNormals,
                maxMorphTargets: u.maxMorphTargets,
                maxMorphNormals: u.maxMorphNormals,
                numDirLights: e.directional.length,
                numPointLights: e.point.length,
                numSpotLights: e.spot.length,
                numRectAreaLights: e.rectArea.length,
                numHemiLights: e.hemi.length,
                numClippingPlanes: r,
                numClipIntersection: a,
                dithering: t.dithering,
                shadowMapEnabled: u.shadowMap.enabled && o.receiveShadow && 0 < n.length,
                shadowMapType: u.shadowMap.type,
                toneMapping: u.toneMapping,
                physicallyCorrectLights: u.physicallyCorrectLights,
                premultipliedAlpha: t.premultipliedAlpha,
                alphaTest: t.alphaTest,
                doubleSided: t.side === J,
                flipSided: t.side === xt,
                depthPacking: void 0 !== t.depthPacking && t.depthPacking
            }
        }
        ,
        this.getProgramCode = function(t, e) {
            var n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(t.fragmentShader),
            n.push(t.vertexShader)),
            void 0 !== t.defines)
                for (var i in t.defines)
                    n.push(i),
                    n.push(t.defines[i]);
            for (var r = 0; r < a.length; r++)
                n.push(e[a[r]]);
            return n.push(t.onBeforeCompile.toString()),
            n.push(u.gammaOutput),
            n.push(u.gammaFactor),
            n.join()
        }
        ,
        this.acquireProgram = function(t, e, n, i) {
            for (var r, a = 0, o = h.length; a < o; a++) {
                var s = h[a];
                if (s.code === i) {
                    ++(r = s).usedTimes;
                    break
                }
            }
            return void 0 === r && (r = new Ba(u,c,i,t,e,n,p,l),
            h.push(r)),
            r
        }
        ,
        this.releaseProgram = function(t) {
            if (0 == --t.usedTimes) {
                var e = h.indexOf(t);
                h[e] = h[h.length - 1],
                h.pop(),
                t.destroy()
            }
        }
        ,
        this.programs = h
    }
    function Ga() {
        var i = new WeakMap;
        return {
            get: function(t) {
                var e = i.get(t);
                return void 0 === e && (e = {},
                i.set(t, e)),
                e
            },
            remove: function(t) {
                i.delete(t)
            },
            update: function(t, e, n) {
                i.get(t)[e] = n
            },
            dispose: function() {
                i = new WeakMap
            }
        }
    }
    function Fa(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }
    function ka(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }
    function Ha() {
        var s = []
          , c = 0
          , l = []
          , h = []
          , u = {
            id: -1
        };
        function p(t, e, n, i, r, a) {
            var o = s[c];
            return void 0 === o ? (o = {
                id: t.id,
                object: t,
                geometry: e,
                material: n,
                program: n.program || u,
                groupOrder: i,
                renderOrder: t.renderOrder,
                z: r,
                group: a
            },
            s[c] = o) : (o.id = t.id,
            o.object = t,
            o.geometry = e,
            o.material = n,
            o.program = n.program || u,
            o.groupOrder = i,
            o.renderOrder = t.renderOrder,
            o.z = r,
            o.group = a),
            c++,
            o
        }
        return {
            opaque: l,
            transparent: h,
            init: function() {
                c = 0,
                l.length = 0,
                h.length = 0
            },
            push: function(t, e, n, i, r, a) {
                var o = p(t, e, n, i, r, a);
                (!0 === n.transparent ? h : l).push(o)
            },
            unshift: function(t, e, n, i, r, a) {
                var o = p(t, e, n, i, r, a);
                (!0 === n.transparent ? h : l).unshift(o)
            },
            sort: function() {
                1 < l.length && l.sort(Fa),
                1 < h.length && h.sort(ka)
            }
        }
    }
    function Va() {
        var r = {};
        function a(t) {
            var e = t.target;
            e.removeEventListener("dispose", a),
            delete r[e.id]
        }
        return {
            get: function(t, e) {
                var n, i = r[t.id];
                return void 0 === i ? (n = new Ha,
                r[t.id] = {},
                r[t.id][e.id] = n,
                t.addEventListener("dispose", a)) : void 0 === (n = i[e.id]) && (n = new Ha,
                i[e.id] = n),
                n
            },
            dispose: function() {
                r = {}
            }
        }
    }
    function ja() {
        var n = {};
        return {
            get: function(t) {
                if (void 0 !== n[t.id])
                    return n[t.id];
                var e;
                switch (t.type) {
                case "DirectionalLight":
                    e = {
                        direction: new De,
                        color: new Ln,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Oe
                    };
                    break;
                case "SpotLight":
                    e = {
                        position: new De,
                        direction: new De,
                        color: new Ln,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Oe
                    };
                    break;
                case "PointLight":
                    e = {
                        position: new De,
                        color: new Ln,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Oe,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break;
                case "HemisphereLight":
                    e = {
                        direction: new De,
                        skyColor: new Ln,
                        groundColor: new Ln
                    };
                    break;
                case "RectAreaLight":
                    e = {
                        color: new Ln,
                        position: new De,
                        halfWidth: new De,
                        halfHeight: new De
                    }
                }
                return n[t.id] = e
            }
        }
    }
    var Wa = 0;
    function qa() {
        var w = new ja
          , _ = {
            id: Wa++,
            hash: {
                stateID: -1,
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                shadowsLength: -1
            },
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        }
          , M = new De
          , S = new bn
          , T = new bn;
        return {
            setup: function(t, e, n) {
                for (var i = 0, r = 0, a = 0, o = 0, s = 0, c = 0, l = 0, h = 0, u = n.matrixWorldInverse, p = 0, d = t.length; p < d; p++) {
                    var f = t[p]
                      , m = f.color
                      , g = f.intensity
                      , v = f.distance
                      , y = f.shadow && f.shadow.map ? f.shadow.map.texture : null;
                    if (f.isAmbientLight)
                        i += m.r * g,
                        r += m.g * g,
                        a += m.b * g;
                    else if (f.isDirectionalLight) {
                        if ((b = w.get(f)).color.copy(f.color).multiplyScalar(f.intensity),
                        b.direction.setFromMatrixPosition(f.matrixWorld),
                        M.setFromMatrixPosition(f.target.matrixWorld),
                        b.direction.sub(M),
                        b.direction.transformDirection(u),
                        b.shadow = f.castShadow,
                        f.castShadow) {
                            var x = f.shadow;
                            b.shadowBias = x.bias,
                            b.shadowRadius = x.radius,
                            b.shadowMapSize = x.mapSize
                        }
                        _.directionalShadowMap[o] = y,
                        _.directionalShadowMatrix[o] = f.shadow.matrix,
                        _.directional[o] = b,
                        o++
                    } else if (f.isSpotLight)
                        (b = w.get(f)).position.setFromMatrixPosition(f.matrixWorld),
                        b.position.applyMatrix4(u),
                        b.color.copy(m).multiplyScalar(g),
                        b.distance = v,
                        b.direction.setFromMatrixPosition(f.matrixWorld),
                        M.setFromMatrixPosition(f.target.matrixWorld),
                        b.direction.sub(M),
                        b.direction.transformDirection(u),
                        b.coneCos = Math.cos(f.angle),
                        b.penumbraCos = Math.cos(f.angle * (1 - f.penumbra)),
                        b.decay = f.decay,
                        b.shadow = f.castShadow,
                        f.castShadow && (x = f.shadow,
                        b.shadowBias = x.bias,
                        b.shadowRadius = x.radius,
                        b.shadowMapSize = x.mapSize),
                        _.spotShadowMap[c] = y,
                        _.spotShadowMatrix[c] = f.shadow.matrix,
                        _.spot[c] = b,
                        c++;
                    else if (f.isRectAreaLight)
                        (b = w.get(f)).color.copy(m).multiplyScalar(g),
                        b.position.setFromMatrixPosition(f.matrixWorld),
                        b.position.applyMatrix4(u),
                        T.identity(),
                        S.copy(f.matrixWorld),
                        S.premultiply(u),
                        T.extractRotation(S),
                        b.halfWidth.set(.5 * f.width, 0, 0),
                        b.halfHeight.set(0, .5 * f.height, 0),
                        b.halfWidth.applyMatrix4(T),
                        b.halfHeight.applyMatrix4(T),
                        _.rectArea[l] = b,
                        l++;
                    else if (f.isPointLight)
                        (b = w.get(f)).position.setFromMatrixPosition(f.matrixWorld),
                        b.position.applyMatrix4(u),
                        b.color.copy(f.color).multiplyScalar(f.intensity),
                        b.distance = f.distance,
                        b.decay = f.decay,
                        b.shadow = f.castShadow,
                        f.castShadow && (x = f.shadow,
                        b.shadowBias = x.bias,
                        b.shadowRadius = x.radius,
                        b.shadowMapSize = x.mapSize,
                        b.shadowCameraNear = x.camera.near,
                        b.shadowCameraFar = x.camera.far),
                        _.pointShadowMap[s] = y,
                        _.pointShadowMatrix[s] = f.shadow.matrix,
                        _.point[s] = b,
                        s++;
                    else if (f.isHemisphereLight) {
                        var b;
                        (b = w.get(f)).direction.setFromMatrixPosition(f.matrixWorld),
                        b.direction.transformDirection(u),
                        b.direction.normalize(),
                        b.skyColor.copy(f.color).multiplyScalar(g),
                        b.groundColor.copy(f.groundColor).multiplyScalar(g),
                        _.hemi[h] = b,
                        h++
                    }
                }
                _.ambient[0] = i,
                _.ambient[1] = r,
                _.ambient[2] = a,
                _.directional.length = o,
                _.spot.length = c,
                _.rectArea.length = l,
                _.point.length = s,
                _.hemi.length = h,
                _.hash.stateID = _.id,
                _.hash.directionalLength = o,
                _.hash.pointLength = s,
                _.hash.spotLength = c,
                _.hash.rectAreaLength = l,
                _.hash.hemiLength = h,
                _.hash.shadowsLength = e.length
            },
            state: _
        }
    }
    function Xa() {
        var e = new qa
          , n = []
          , i = [];
        return {
            init: function() {
                n.length = 0,
                i.length = 0
            },
            state: {
                lightsArray: n,
                shadowsArray: i,
                lights: e
            },
            setupLights: function(t) {
                e.setup(n, i, t)
            },
            pushLight: function(t) {
                n.push(t)
            },
            pushShadow: function(t) {
                i.push(t)
            }
        }
    }
    function Ya() {
        var i = {};
        function r(t) {
            var e = t.target;
            e.removeEventListener("dispose", r),
            delete i[e.id]
        }
        return {
            get: function(t, e) {
                var n;
                return void 0 === i[t.id] ? (n = new Xa,
                i[t.id] = {},
                i[t.id][e.id] = n,
                t.addEventListener("dispose", r)) : void 0 === i[t.id][e.id] ? (n = new Xa,
                i[t.id][e.id] = n) : n = i[t.id][e.id],
                n
            },
            dispose: function() {
                i = {}
            }
        }
    }
    function Ja(t) {
        ji.call(this),
        this.type = "MeshDepthMaterial",
        this.depthPacking = Ae,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function Za(t) {
        ji.call(this),
        this.type = "MeshDistanceMaterial",
        this.referencePosition = new De,
        this.nearDistance = 1,
        this.farDistance = 1e3,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.fog = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function Qa(x, m, t) {
        for (var b = new xn, w = new bn, _ = new Oe, M = new Oe(t,t), S = new De, T = new De, v = 1, y = 2, e = 1 + (v | y), E = new Array(e), A = new Array(e), L = {}, P = {
            0: xt,
            1: z,
            2: J
        }, R = [new De(1,0,0), new De(-1,0,0), new De(0,0,1), new De(0,0,-1), new De(0,1,0), new De(0,-1,0)], C = [new De(0,1,0), new De(0,1,0), new De(0,1,0), new De(0,1,0), new De(0,0,1), new De(0,0,-1)], O = [new un, new un, new un, new un, new un, new un], n = 0; n !== e; ++n) {
            var i = 0 != (n & v)
              , r = 0 != (n & y)
              , a = new Ja({
                depthPacking: Le,
                morphTargets: i,
                skinning: r
            });
            E[n] = a;
            var o = new Za({
                morphTargets: i,
                skinning: r
            });
            A[n] = o
        }
        var I = this;
        function g(t, e, n, i, r, a) {
            var o = t.geometry
              , s = null
              , c = E
              , l = t.customDepthMaterial;
            if (n && (c = A,
            l = t.customDistanceMaterial),
            l)
                s = l;
            else {
                var h = !1;
                e.morphTargets && (o && o.isBufferGeometry ? h = o.morphAttributes && o.morphAttributes.position && 0 < o.morphAttributes.position.length : o && o.isGeometry && (h = o.morphTargets && 0 < o.morphTargets.length)),
                t.isSkinnedMesh && !1 === e.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t);
                var u = t.isSkinnedMesh && e.skinning
                  , p = 0;
                h && (p |= v),
                u && (p |= y),
                s = c[p]
            }
            if (x.localClippingEnabled && !0 === e.clipShadows && 0 !== e.clippingPlanes.length) {
                var d = s.uuid
                  , f = e.uuid
                  , m = L[d];
                void 0 === m && (m = {},
                L[d] = m);
                var g = m[f];
                void 0 === g && (g = s.clone(),
                m[f] = g),
                s = g
            }
            return s.visible = e.visible,
            s.wireframe = e.wireframe,
            s.side = null != e.shadowSide ? e.shadowSide : P[e.side],
            s.clipShadows = e.clipShadows,
            s.clippingPlanes = e.clippingPlanes,
            s.clipIntersection = e.clipIntersection,
            s.wireframeLinewidth = e.wireframeLinewidth,
            s.linewidth = e.linewidth,
            n && s.isMeshDistanceMaterial && (s.referencePosition.copy(i),
            s.nearDistance = r,
            s.farDistance = a),
            s
        }
        function D(t, e, n, i) {
            if (!1 !== t.visible) {
                if (t.layers.test(e.layers) && (t.isMesh || t.isLine || t.isPoints) && t.castShadow && (!t.frustumCulled || b.intersectsObject(t))) {
                    t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld);
                    var r = m.update(t)
                      , a = t.material;
                    if (Array.isArray(a))
                        for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                            var l = o[s]
                              , h = a[l.materialIndex];
                            if (h && h.visible) {
                                var u = g(t, h, i, T, n.near, n.far);
                                x.renderBufferDirect(n, null, r, u, t, l)
                            }
                        }
                    else if (a.visible) {
                        u = g(t, a, i, T, n.near, n.far);
                        x.renderBufferDirect(n, null, r, u, t, null)
                    }
                }
                for (var p = t.children, d = 0, f = p.length; d < f; d++)
                    D(p[d], e, n, i)
            }
        }
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = N,
        this.render = function(t, e, n) {
            if (!1 !== I.enabled && (!1 !== I.autoUpdate || !1 !== I.needsUpdate) && 0 !== t.length) {
                var i, r = x.getRenderTarget(), a = x.state;
                a.setBlending(Z),
                a.buffers.color.setClear(1, 1, 1, 1),
                a.buffers.depth.setTest(!0),
                a.setScissorTest(!1);
                for (var o = 0, s = t.length; o < s; o++) {
                    var c = t[o]
                      , l = c.shadow
                      , h = c && c.isPointLight;
                    if (void 0 !== l) {
                        var u = l.camera;
                        if (_.copy(l.mapSize),
                        _.min(M),
                        h) {
                            var p = _.x
                              , d = _.y;
                            O[0].set(2 * p, d, p, d),
                            O[1].set(0, d, p, d),
                            O[2].set(3 * p, d, p, d),
                            O[3].set(p, d, p, d),
                            O[4].set(3 * p, 0, p, d),
                            O[5].set(p, 0, p, d),
                            _.x *= 4,
                            _.y *= 2
                        }
                        if (null === l.map) {
                            var f = {
                                minFilter: vt,
                                magFilter: vt,
                                format: Ft
                            };
                            l.map = new pn(_.x,_.y,f),
                            l.map.texture.name = c.name + ".shadowMap",
                            u.updateProjectionMatrix()
                        }
                        l.isSpotLightShadow && l.update(c);
                        var m = l.map
                          , g = l.matrix;
                        T.setFromMatrixPosition(c.matrixWorld),
                        u.position.copy(T),
                        h ? (i = 6,
                        g.makeTranslation(-T.x, -T.y, -T.z)) : (i = 1,
                        S.setFromMatrixPosition(c.target.matrixWorld),
                        u.lookAt(S),
                        u.updateMatrixWorld(),
                        g.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                        g.multiply(u.projectionMatrix),
                        g.multiply(u.matrixWorldInverse)),
                        x.setRenderTarget(m),
                        x.clear();
                        for (var v = 0; v < i; v++) {
                            if (h) {
                                S.copy(u.position),
                                S.add(R[v]),
                                u.up.copy(C[v]),
                                u.lookAt(S),
                                u.updateMatrixWorld();
                                var y = O[v];
                                a.viewport(y)
                            }
                            w.multiplyMatrices(u.projectionMatrix, u.matrixWorldInverse),
                            b.setFromMatrix(w),
                            D(e, n, u, h)
                        }
                    } else
                        console.warn("THREE.WebGLShadowMap:", c, "has no shadow.")
                }
                I.needsUpdate = !1,
                x.setRenderTarget(r)
            }
        }
    }
    function Ka(h, n, c, i) {
        var r = new function() {
            var e = !1
              , a = new un
              , n = null
              , o = new un(0,0,0,0);
            return {
                setMask: function(t) {
                    n === t || e || (h.colorMask(t, t, t, t),
                    n = t)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(t, e, n, i, r) {
                    !0 === r && (t *= i,
                    e *= i,
                    n *= i),
                    a.set(t, e, n, i),
                    !1 === o.equals(a) && (h.clearColor(t, e, n, i),
                    o.copy(a))
                },
                reset: function() {
                    e = !1,
                    n = null,
                    o.set(-1, 0, 0, 0)
                }
            }
        }
          , a = new function() {
            var e = !1
              , n = null
              , i = null
              , r = null;
            return {
                setTest: function(t) {
                    t ? G(2929) : F(2929)
                },
                setMask: function(t) {
                    n === t || e || (h.depthMask(t),
                    n = t)
                },
                setFunc: function(t) {
                    if (i !== t) {
                        if (t)
                            switch (t) {
                            case it:
                                h.depthFunc(512);
                                break;
                            case rt:
                                h.depthFunc(519);
                                break;
                            case at:
                                h.depthFunc(513);
                                break;
                            case ot:
                                h.depthFunc(515);
                                break;
                            case st:
                                h.depthFunc(514);
                                break;
                            case ct:
                                h.depthFunc(518);
                                break;
                            case lt:
                                h.depthFunc(516);
                                break;
                            case ht:
                                h.depthFunc(517);
                                break;
                            default:
                                h.depthFunc(515)
                            }
                        else
                            h.depthFunc(515);
                        i = t
                    }
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(t) {
                    r !== t && (h.clearDepth(t),
                    r = t)
                },
                reset: function() {
                    e = !1,
                    r = i = n = null
                }
            }
        }
          , e = new function() {
            var e = !1
              , n = null
              , i = null
              , r = null
              , a = null
              , o = null
              , s = null
              , c = null
              , l = null;
            return {
                setTest: function(t) {
                    t ? G(2960) : F(2960)
                },
                setMask: function(t) {
                    n === t || e || (h.stencilMask(t),
                    n = t)
                },
                setFunc: function(t, e, n) {
                    i === t && r === e && a === n || (h.stencilFunc(t, e, n),
                    i = t,
                    r = e,
                    a = n)
                },
                setOp: function(t, e, n) {
                    o === t && s === e && c === n || (h.stencilOp(t, e, n),
                    o = t,
                    s = e,
                    c = n)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(t) {
                    l !== t && (h.clearStencil(t),
                    l = t)
                },
                reset: function() {
                    e = !1,
                    l = c = s = o = a = r = i = n = null
                }
            }
        }
          , t = h.getParameter(34921)
          , o = new Uint8Array(t)
          , s = new Uint8Array(t)
          , l = new Uint8Array(t)
          , u = {}
          , p = null
          , d = null
          , f = null
          , m = null
          , g = null
          , v = null
          , y = null
          , x = null
          , b = null
          , w = null
          , _ = !1
          , M = null
          , S = null
          , T = null
          , E = null
          , A = null
          , L = h.getParameter(35661)
          , P = !1
          , R = 0
          , C = h.getParameter(7938);
        -1 !== C.indexOf("WebGL") ? (R = parseFloat(/^WebGL\ ([0-9])/.exec(C)[1]),
        P = 1 <= R) : -1 !== C.indexOf("OpenGL ES") && (R = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(C)[1]),
        P = 2 <= R);
        var O = null
          , I = {}
          , D = new un
          , N = new un;
        function z(t, e, n) {
            var i = new Uint8Array(4)
              , r = h.createTexture();
            h.bindTexture(t, r),
            h.texParameteri(t, 10241, 9728),
            h.texParameteri(t, 10240, 9728);
            for (var a = 0; a < n; a++)
                h.texImage2D(e + a, 0, 6408, 1, 1, 0, 6408, 5121, i);
            return r
        }
        var B = {};
        function U(t, e) {
            (o[t] = 1,
            0 === s[t] && (h.enableVertexAttribArray(t),
            s[t] = 1),
            l[t] !== e) && ((i.isWebGL2 ? h : n.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](t, e),
            l[t] = e)
        }
        function G(t) {
            !0 !== u[t] && (h.enable(t),
            u[t] = !0)
        }
        function F(t) {
            !1 !== u[t] && (h.disable(t),
            u[t] = !1)
        }
        function k(t, e, n, i, r, a, o, s) {
            if (t !== Z) {
                if (f || (G(3042),
                f = !0),
                t === et)
                    r = r || e,
                    a = a || n,
                    o = o || i,
                    e === g && r === x || (h.blendEquationSeparate(c.convert(e), c.convert(r)),
                    g = e,
                    x = r),
                    n === v && i === y && a === b && o === w || (h.blendFuncSeparate(c.convert(n), c.convert(i), c.convert(a), c.convert(o)),
                    v = n,
                    y = i,
                    b = a,
                    w = o),
                    m = t,
                    _ = null;
                else if (t !== m || s !== _) {
                    if (g === nt && x === nt || (h.blendEquation(32774),
                    x = g = nt),
                    s)
                        switch (t) {
                        case Q:
                            h.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case K:
                            h.blendFunc(1, 1);
                            break;
                        case $:
                            h.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case tt:
                            h.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", t)
                        }
                    else
                        switch (t) {
                        case Q:
                            h.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case K:
                            h.blendFunc(770, 1);
                            break;
                        case $:
                            h.blendFunc(0, 769);
                            break;
                        case tt:
                            h.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", t)
                        }
                    w = b = y = v = null,
                    m = t,
                    _ = s
                }
            } else
                f && (F(3042),
                f = !1)
        }
        function H(t) {
            M !== t && (t ? h.frontFace(2304) : h.frontFace(2305),
            M = t)
        }
        function V(t) {
            t !== q ? (G(2884),
            t !== S && (t === X ? h.cullFace(1029) : t === Y ? h.cullFace(1028) : h.cullFace(1032))) : F(2884),
            S = t
        }
        function j(t, e, n) {
            t ? (G(32823),
            E === e && A === n || (h.polygonOffset(e, n),
            E = e,
            A = n)) : F(32823)
        }
        function W(t) {
            void 0 === t && (t = 33984 + L - 1),
            O !== t && (h.activeTexture(t),
            O = t)
        }
        return B[3553] = z(3553, 3553, 1),
        B[34067] = z(34067, 34069, 6),
        r.setClear(0, 0, 0, 1),
        a.setClear(1),
        e.setClear(0),
        G(2929),
        a.setFunc(ot),
        H(!1),
        V(X),
        G(2884),
        k(Z),
        {
            buffers: {
                color: r,
                depth: a,
                stencil: e
            },
            initAttributes: function() {
                for (var t = 0, e = o.length; t < e; t++)
                    o[t] = 0
            },
            enableAttribute: function(t) {
                U(t, 0)
            },
            enableAttributeAndDivisor: U,
            disableUnusedAttributes: function() {
                for (var t = 0, e = s.length; t !== e; ++t)
                    s[t] !== o[t] && (h.disableVertexAttribArray(t),
                    s[t] = 0)
            },
            enable: G,
            disable: F,
            getCompressedTextureFormats: function() {
                if (null === p && (p = [],
                n.get("WEBGL_compressed_texture_pvrtc") || n.get("WEBGL_compressed_texture_s3tc") || n.get("WEBGL_compressed_texture_etc1") || n.get("WEBGL_compressed_texture_astc")))
                    for (var t = h.getParameter(34467), e = 0; e < t.length; e++)
                        p.push(t[e]);
                return p
            },
            useProgram: function(t) {
                return d !== t && (h.useProgram(t),
                d = t,
                !0)
            },
            setBlending: k,
            setMaterial: function(t, e) {
                t.side === J ? F(2884) : G(2884);
                var n = t.side === xt;
                e && (n = !n),
                H(n),
                t.blending === Q && !1 === t.transparent ? k(Z) : k(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha),
                a.setFunc(t.depthFunc),
                a.setTest(t.depthTest),
                a.setMask(t.depthWrite),
                r.setMask(t.colorWrite),
                j(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            },
            setFlipSided: H,
            setCullFace: V,
            setLineWidth: function(t) {
                t !== T && (P && h.lineWidth(t),
                T = t)
            },
            setPolygonOffset: j,
            setScissorTest: function(t) {
                t ? G(3089) : F(3089)
            },
            activeTexture: W,
            bindTexture: function(t, e) {
                null === O && W();
                var n = I[O];
                void 0 === n && (n = {
                    type: void 0,
                    texture: void 0
                },
                I[O] = n),
                n.type === t && n.texture === e || (h.bindTexture(t, e || B[t]),
                n.type = t,
                n.texture = e)
            },
            compressedTexImage2D: function() {
                try {
                    h.compressedTexImage2D.apply(h, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage2D: function() {
                try {
                    h.texImage2D.apply(h, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage3D: function() {
                try {
                    h.texImage3D.apply(h, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            scissor: function(t) {
                !1 === D.equals(t) && (h.scissor(t.x, t.y, t.z, t.w),
                D.copy(t))
            },
            viewport: function(t) {
                !1 === N.equals(t) && (h.viewport(t.x, t.y, t.z, t.w),
                N.copy(t))
            },
            reset: function() {
                for (var t = 0; t < s.length; t++)
                    1 === s[t] && (h.disableVertexAttribArray(t),
                    s[t] = 0);
                u = {},
                I = {},
                S = M = m = d = O = p = null,
                r.reset(),
                a.reset(),
                e.reset()
            }
        }
    }
    function $a(g, r, v, y, x, b, l) {
        var h, a = {}, n = "undefined" != typeof OffscreenCanvas;
        function u(t, e) {
            return n ? new OffscreenCanvas(t,e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
        }
        function w(t, e, n, i) {
            var r = 1;
            if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
            r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                    var a = e ? Ce.floorPowerOfTwo : Math.floor
                      , o = a(r * t.width)
                      , s = a(r * t.height);
                    void 0 === h && (h = u(o, s));
                    var c = n ? u(o, s) : h;
                    return c.width = o,
                    c.height = s,
                    c.getContext("2d").drawImage(t, 0, 0, o, s),
                    console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + o + "x" + s + ")."),
                    c
                }
                return "data"in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."),
                t
            }
            return t
        }
        function _(t) {
            return Ce.isPowerOfTwo(t.width) && Ce.isPowerOfTwo(t.height)
        }
        function M(t, e) {
            return t.generateMipmaps && e && t.minFilter !== vt && t.minFilter !== Mt
        }
        function S(t, e, n, i) {
            g.generateMipmap(t),
            y.get(e).__maxMipLevel = Math.log(Math.max(n, i)) * Math.LOG2E
        }
        function T(t, e) {
            if (!x.isWebGL2)
                return t;
            var n = t;
            return 6403 === t && (5126 === e && (n = 33326),
            5131 === e && (n = 33325),
            5121 === e && (n = 33321)),
            6407 === t && (5126 === e && (n = 34837),
            5131 === e && (n = 34843),
            5121 === e && (n = 32849)),
            6408 === t && (5126 === e && (n = 34836),
            5131 === e && (n = 34842),
            5121 === e && (n = 32856)),
            33325 === n || 33326 === n || 34842 === n || 34836 === n ? r.get("EXT_color_buffer_float") : 34843 !== n && 34837 !== n || console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."),
            n
        }
        function o(t) {
            return t === vt || t === wt || t === _t ? 9728 : 9729
        }
        function i(t) {
            var e = t.target;
            e.removeEventListener("dispose", i),
            function(t) {
                var e = y.get(t);
                if (void 0 === e.__webglInit)
                    return;
                g.deleteTexture(e.__webglTexture),
                y.remove(t)
            }(e),
            e.isVideoTexture && delete a[e.id],
            l.memory.textures--
        }
        function p(t) {
            var e = t.target;
            e.removeEventListener("dispose", p),
            function(t) {
                var e = y.get(t)
                  , n = y.get(t.texture);
                if (!t)
                    return;
                void 0 !== n.__webglTexture && g.deleteTexture(n.__webglTexture);
                t.depthTexture && t.depthTexture.dispose();
                if (t.isWebGLRenderTargetCube)
                    for (var i = 0; i < 6; i++)
                        g.deleteFramebuffer(e.__webglFramebuffer[i]),
                        e.__webglDepthbuffer && g.deleteRenderbuffer(e.__webglDepthbuffer[i]);
                else
                    g.deleteFramebuffer(e.__webglFramebuffer),
                    e.__webglDepthbuffer && g.deleteRenderbuffer(e.__webglDepthbuffer);
                y.remove(t.texture),
                y.remove(t)
            }(e),
            l.memory.textures--
        }
        var e = 0;
        function s(t, e) {
            var n = y.get(t);
            if (t.isVideoTexture && function(t) {
                var e = t.id
                  , n = l.render.frame;
                a[e] !== n && (a[e] = n,
                t.update())
            }(t),
            0 < t.version && n.__version !== t.version) {
                var i = t.image;
                if (void 0 === i)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== i.complete)
                        return void f(n, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            }
            v.activeTexture(33984 + e),
            v.bindTexture(3553, n.__webglTexture)
        }
        function c(t, e) {
            var n = y.get(t);
            if (6 === t.image.length)
                if (0 < t.version && n.__version !== t.version) {
                    A(n, t),
                    v.activeTexture(33984 + e),
                    v.bindTexture(34067, n.__webglTexture),
                    g.pixelStorei(37440, t.flipY);
                    for (var i = t && t.isCompressedTexture, r = t.image[0] && t.image[0].isDataTexture, a = [], o = 0; o < 6; o++)
                        a[o] = i || r ? r ? t.image[o].image : t.image[o] : w(t.image[o], !1, !0, x.maxCubemapSize);
                    var s = a[0]
                      , c = _(s) || x.isWebGL2
                      , l = b.convert(t.format)
                      , h = b.convert(t.type)
                      , u = T(l, h);
                    E(34067, t, c);
                    for (o = 0; o < 6; o++)
                        if (i)
                            for (var p, d = a[o].mipmaps, f = 0, m = d.length; f < m; f++)
                                p = d[f],
                                t.format !== Ft && t.format !== Gt ? -1 < v.getCompressedTextureFormats().indexOf(l) ? v.compressedTexImage2D(34069 + o, f, u, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : v.texImage2D(34069 + o, f, u, p.width, p.height, 0, l, h, p.data);
                        else
                            r ? v.texImage2D(34069 + o, 0, u, a[o].width, a[o].height, 0, l, h, a[o].data) : v.texImage2D(34069 + o, 0, u, l, h, a[o]);
                    n.__maxMipLevel = i ? d.length - 1 : 0,
                    M(t, c) && S(34067, t, s.width, s.height),
                    n.__version = t.version,
                    t.onUpdate && t.onUpdate(t)
                } else
                    v.activeTexture(33984 + e),
                    v.bindTexture(34067, n.__webglTexture)
        }
        function d(t, e) {
            v.activeTexture(33984 + e),
            v.bindTexture(34067, y.get(t).__webglTexture)
        }
        function E(t, e, n) {
            var i;
            if (n ? (g.texParameteri(t, 10242, b.convert(e.wrapS)),
            g.texParameteri(t, 10243, b.convert(e.wrapT)),
            32879 !== t && 35866 !== t || g.texParameteri(t, 32882, b.convert(e.wrapR)),
            g.texParameteri(t, 10240, b.convert(e.magFilter)),
            g.texParameteri(t, 10241, b.convert(e.minFilter))) : (g.texParameteri(t, 10242, 33071),
            g.texParameteri(t, 10243, 33071),
            32879 !== t && 35866 !== t || g.texParameteri(t, 32882, 33071),
            e.wrapS === I && e.wrapT === I || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
            g.texParameteri(t, 10240, o(e.magFilter)),
            g.texParameteri(t, 10241, o(e.minFilter)),
            e.minFilter !== vt && e.minFilter !== Mt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
            i = r.get("EXT_texture_filter_anisotropic")) {
                if (e.type === Ot && null === r.get("OES_texture_float_linear"))
                    return;
                if (e.type === It && null === (x.isWebGL2 || r.get("OES_texture_half_float_linear")))
                    return;
                (1 < e.anisotropy || y.get(e).__currentAnisotropy) && (g.texParameterf(t, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e.anisotropy, x.getMaxAnisotropy())),
                y.get(e).__currentAnisotropy = e.anisotropy)
            }
        }
        function A(t, e) {
            void 0 === t.__webglInit && (t.__webglInit = !0,
            e.addEventListener("dispose", i),
            t.__webglTexture = g.createTexture(),
            l.memory.textures++)
        }
        function f(t, e, n) {
            var i = 3553;
            e.isDataTexture2DArray && (i = 35866),
            e.isDataTexture3D && (i = 32879),
            A(t, e),
            v.activeTexture(33984 + n),
            v.bindTexture(i, t.__webglTexture),
            g.pixelStorei(37440, e.flipY),
            g.pixelStorei(37441, e.premultiplyAlpha),
            g.pixelStorei(3317, e.unpackAlignment);
            var r = function(t) {
                return !x.isWebGL2 && (t.wrapS !== I || t.wrapT !== I || t.minFilter !== vt && t.minFilter !== Mt)
            }(e) && !1 === _(e.image)
              , a = w(e.image, r, !1, x.maxTextureSize)
              , o = _(a) || x.isWebGL2
              , s = b.convert(e.format)
              , c = b.convert(e.type)
              , l = T(s, c);
            E(i, e, o);
            var h, u = e.mipmaps;
            if (e.isDepthTexture) {
                if (l = 6402,
                e.type === Ot) {
                    if (!x.isWebGL2)
                        throw new Error("Float Depth Texture only supported in WebGL2.0");
                    l = 36012
                } else
                    x.isWebGL2 && (l = 33189);
                e.format === Vt && 6402 === l && e.type !== Pt && e.type !== Ct && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                e.type = Pt,
                c = b.convert(e.type)),
                e.format === jt && (l = 34041,
                e.type !== Bt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                e.type = Bt,
                c = b.convert(e.type))),
                v.texImage2D(3553, 0, l, a.width, a.height, 0, s, c, null)
            } else if (e.isDataTexture)
                if (0 < u.length && o) {
                    for (var p = 0, d = u.length; p < d; p++)
                        h = u[p],
                        v.texImage2D(3553, p, l, h.width, h.height, 0, s, c, h.data);
                    e.generateMipmaps = !1,
                    t.__maxMipLevel = u.length - 1
                } else
                    v.texImage2D(3553, 0, l, a.width, a.height, 0, s, c, a.data),
                    t.__maxMipLevel = 0;
            else if (e.isCompressedTexture) {
                for (p = 0,
                d = u.length; p < d; p++)
                    h = u[p],
                    e.format !== Ft && e.format !== Gt ? -1 < v.getCompressedTextureFormats().indexOf(s) ? v.compressedTexImage2D(3553, p, l, h.width, h.height, 0, h.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v.texImage2D(3553, p, l, h.width, h.height, 0, s, c, h.data);
                t.__maxMipLevel = u.length - 1
            } else if (e.isDataTexture2DArray)
                v.texImage3D(35866, 0, l, a.width, a.height, a.depth, 0, s, c, a.data),
                t.__maxMipLevel = 0;
            else if (e.isDataTexture3D)
                v.texImage3D(32879, 0, l, a.width, a.height, a.depth, 0, s, c, a.data),
                t.__maxMipLevel = 0;
            else if (0 < u.length && o) {
                for (p = 0,
                d = u.length; p < d; p++)
                    h = u[p],
                    v.texImage2D(3553, p, l, s, c, h);
                e.generateMipmaps = !1,
                t.__maxMipLevel = u.length - 1
            } else
                v.texImage2D(3553, 0, l, s, c, a),
                t.__maxMipLevel = 0;
            M(e, o) && S(3553, e, a.width, a.height),
            t.__version = e.version,
            e.onUpdate && e.onUpdate(e)
        }
        function m(t, e, n, i) {
            var r = b.convert(e.texture.format)
              , a = b.convert(e.texture.type)
              , o = T(r, a);
            v.texImage2D(i, 0, o, e.width, e.height, 0, r, a, null),
            g.bindFramebuffer(36160, t),
            g.framebufferTexture2D(36160, n, i, y.get(e.texture).__webglTexture, 0),
            g.bindFramebuffer(36160, null)
        }
        function L(t, e, n) {
            if (g.bindRenderbuffer(36161, t),
            e.depthBuffer && !e.stencilBuffer) {
                if (n) {
                    var i = R(e);
                    g.renderbufferStorageMultisample(36161, i, 33189, e.width, e.height)
                } else
                    g.renderbufferStorage(36161, 33189, e.width, e.height);
                g.framebufferRenderbuffer(36160, 36096, 36161, t)
            } else if (e.depthBuffer && e.stencilBuffer) {
                if (n) {
                    i = R(e);
                    g.renderbufferStorageMultisample(36161, i, 34041, e.width, e.height)
                } else
                    g.renderbufferStorage(36161, 34041, e.width, e.height);
                g.framebufferRenderbuffer(36160, 33306, 36161, t)
            } else {
                var r = T(b.convert(e.texture.format), b.convert(e.texture.type));
                if (n) {
                    i = R(e);
                    g.renderbufferStorageMultisample(36161, i, r, e.width, e.height)
                } else
                    g.renderbufferStorage(36161, r, e.width, e.height)
            }
            g.bindRenderbuffer(36161, null)
        }
        function P(t) {
            var e = y.get(t)
              , n = !0 === t.isWebGLRenderTargetCube;
            if (t.depthTexture) {
                if (n)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                !function(t, e) {
                    if (e && e.isWebGLRenderTargetCube)
                        throw new Error("Depth Texture with cube render targets is not supported");
                    if (g.bindFramebuffer(36160, t),
                    !e.depthTexture || !e.depthTexture.isDepthTexture)
                        throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    y.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width,
                    e.depthTexture.image.height = e.height,
                    e.depthTexture.needsUpdate = !0),
                    s(e.depthTexture, 0);
                    var n = y.get(e.depthTexture).__webglTexture;
                    if (e.depthTexture.format === Vt)
                        g.framebufferTexture2D(36160, 36096, 3553, n, 0);
                    else {
                        if (e.depthTexture.format !== jt)
                            throw new Error("Unknown depthTexture format");
                        g.framebufferTexture2D(36160, 33306, 3553, n, 0)
                    }
                }(e.__webglFramebuffer, t)
            } else if (n) {
                e.__webglDepthbuffer = [];
                for (var i = 0; i < 6; i++)
                    g.bindFramebuffer(36160, e.__webglFramebuffer[i]),
                    e.__webglDepthbuffer[i] = g.createRenderbuffer(),
                    L(e.__webglDepthbuffer[i], t)
            } else
                g.bindFramebuffer(36160, e.__webglFramebuffer),
                e.__webglDepthbuffer = g.createRenderbuffer(),
                L(e.__webglDepthbuffer, t);
            g.bindFramebuffer(36160, null)
        }
        function R(t) {
            return x.isWebGL2 && t.isWebGLMultisampleRenderTarget ? Math.min(x.maxSamples, t.samples) : 0
        }
        var C = !1
          , O = !1;
        this.allocateTextureUnit = function() {
            var t = e;
            return t >= x.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + x.maxTextures),
            e += 1,
            t
        }
        ,
        this.resetTextureUnits = function() {
            e = 0
        }
        ,
        this.setTexture2D = s,
        this.setTexture2DArray = function(t, e) {
            var n = y.get(t);
            0 < t.version && n.__version !== t.version ? f(n, t, e) : (v.activeTexture(33984 + e),
            v.bindTexture(35866, n.__webglTexture))
        }
        ,
        this.setTexture3D = function(t, e) {
            var n = y.get(t);
            0 < t.version && n.__version !== t.version ? f(n, t, e) : (v.activeTexture(33984 + e),
            v.bindTexture(32879, n.__webglTexture))
        }
        ,
        this.setTextureCube = c,
        this.setTextureCubeDynamic = d,
        this.setupRenderTarget = function(t) {
            var e = y.get(t)
              , n = y.get(t.texture);
            t.addEventListener("dispose", p),
            n.__webglTexture = g.createTexture(),
            l.memory.textures++;
            var i = !0 === t.isWebGLRenderTargetCube
              , r = !0 === t.isWebGLMultisampleRenderTarget
              , a = _(t) || x.isWebGL2;
            if (i) {
                e.__webglFramebuffer = [];
                for (var o = 0; o < 6; o++)
                    e.__webglFramebuffer[o] = g.createFramebuffer()
            } else if (e.__webglFramebuffer = g.createFramebuffer(),
            r)
                if (x.isWebGL2) {
                    e.__webglMultisampledFramebuffer = g.createFramebuffer(),
                    e.__webglColorRenderbuffer = g.createRenderbuffer(),
                    g.bindRenderbuffer(36161, e.__webglColorRenderbuffer);
                    var s = T(b.convert(t.texture.format), b.convert(t.texture.type))
                      , c = R(t);
                    g.renderbufferStorageMultisample(36161, c, s, t.width, t.height),
                    g.bindFramebuffer(36160, e.__webglMultisampledFramebuffer),
                    g.framebufferRenderbuffer(36160, 36064, 36161, e.__webglColorRenderbuffer),
                    g.bindRenderbuffer(36161, null),
                    t.depthBuffer && (e.__webglDepthRenderbuffer = g.createRenderbuffer(),
                    L(e.__webglDepthRenderbuffer, t, !0)),
                    g.bindFramebuffer(36160, null)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            if (i) {
                for (v.bindTexture(34067, n.__webglTexture),
                E(34067, t.texture, a),
                o = 0; o < 6; o++)
                    m(e.__webglFramebuffer[o], t, 36064, 34069 + o);
                M(t.texture, a) && S(34067, t.texture, t.width, t.height),
                v.bindTexture(34067, null)
            } else
                v.bindTexture(3553, n.__webglTexture),
                E(3553, t.texture, a),
                m(e.__webglFramebuffer, t, 36064, 3553),
                M(t.texture, a) && S(3553, t.texture, t.width, t.height),
                v.bindTexture(3553, null);
            t.depthBuffer && P(t)
        }
        ,
        this.updateRenderTargetMipmap = function(t) {
            var e = t.texture;
            if (M(e, _(t) || x.isWebGL2)) {
                var n = t.isWebGLRenderTargetCube ? 34067 : 3553
                  , i = y.get(e).__webglTexture;
                v.bindTexture(n, i),
                S(n, e, t.width, t.height),
                v.bindTexture(n, null)
            }
        }
        ,
        this.updateMultisampleRenderTarget = function(t) {
            if (t.isWebGLMultisampleRenderTarget)
                if (x.isWebGL2) {
                    var e = y.get(t);
                    g.bindFramebuffer(36008, e.__webglMultisampledFramebuffer),
                    g.bindFramebuffer(36009, e.__webglFramebuffer);
                    var n = t.width
                      , i = t.height
                      , r = 16384;
                    t.depthBuffer && (r |= 256),
                    t.stencilBuffer && (r |= 1024),
                    g.blitFramebuffer(0, 0, n, i, 0, 0, n, i, r, 9728)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
        }
        ,
        this.safeSetTexture2D = function(t, e) {
            t && t.isWebGLRenderTarget && (!1 === C && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
            C = !0),
            t = t.texture),
            s(t, e)
        }
        ,
        this.safeSetTextureCube = function(t, e) {
            t && t.isWebGLRenderTargetCube && (!1 === O && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
            O = !0),
            t = t.texture),
            t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? c(t, e) : d(t, e)
        }
    }
    function to(t, n, i) {
        return {
            convert: function(t) {
                var e;
                if (t === C)
                    return 10497;
                if (t === I)
                    return 33071;
                if (t === O)
                    return 33648;
                if (t === vt)
                    return 9728;
                if (t === wt)
                    return 9984;
                if (t === _t)
                    return 9986;
                if (t === Mt)
                    return 9729;
                if (t === St)
                    return 9985;
                if (t === Tt)
                    return 9987;
                if (t === Et)
                    return 5121;
                if (t === Dt)
                    return 32819;
                if (t === Nt)
                    return 32820;
                if (t === zt)
                    return 33635;
                if (t === At)
                    return 5120;
                if (t === Lt)
                    return 5122;
                if (t === Pt)
                    return 5123;
                if (t === Rt)
                    return 5124;
                if (t === Ct)
                    return 5125;
                if (t === Ot)
                    return 5126;
                if (t === It) {
                    if (i.isWebGL2)
                        return 5131;
                    if (null !== (e = n.get("OES_texture_half_float")))
                        return e.HALF_FLOAT_OES
                }
                if (t === Ut)
                    return 6406;
                if (t === Gt)
                    return 6407;
                if (t === Ft)
                    return 6408;
                if (t === kt)
                    return 6409;
                if (t === Ht)
                    return 6410;
                if (t === Vt)
                    return 6402;
                if (t === jt)
                    return 34041;
                if (t === Wt)
                    return 6403;
                if (t === nt)
                    return 32774;
                if (t === m)
                    return 32778;
                if (t === g)
                    return 32779;
                if (t === b)
                    return 0;
                if (t === w)
                    return 1;
                if (t === _)
                    return 768;
                if (t === M)
                    return 769;
                if (t === S)
                    return 770;
                if (t === T)
                    return 771;
                if (t === E)
                    return 772;
                if (t === A)
                    return 773;
                if (t === L)
                    return 774;
                if (t === P)
                    return 775;
                if (t === R)
                    return 776;
                if ((t === qt || t === Xt || t === Yt || t === Jt) && null !== (e = n.get("WEBGL_compressed_texture_s3tc"))) {
                    if (t === qt)
                        return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (t === Xt)
                        return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (t === Yt)
                        return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (t === Jt)
                        return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if ((t === Zt || t === Qt || t === Kt || t === $t) && null !== (e = n.get("WEBGL_compressed_texture_pvrtc"))) {
                    if (t === Zt)
                        return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (t === Qt)
                        return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (t === Kt)
                        return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (t === $t)
                        return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (t === te && null !== (e = n.get("WEBGL_compressed_texture_etc1")))
                    return e.COMPRESSED_RGB_ETC1_WEBGL;
                if ((t === ee || t === ne || t === ie || t === re || t === ae || t === oe || t === se || t === ce || t === le || t === he || t === ue || t === pe || t === de || t === fe) && null !== (e = n.get("WEBGL_compressed_texture_astc")))
                    return t;
                if (t === y || t === x) {
                    if (i.isWebGL2) {
                        if (t === y)
                            return 32775;
                        if (t === x)
                            return 32776
                    }
                    if (null !== (e = n.get("EXT_blend_minmax"))) {
                        if (t === y)
                            return e.MIN_EXT;
                        if (t === x)
                            return e.MAX_EXT
                    }
                }
                if (t === Bt) {
                    if (i.isWebGL2)
                        return 34042;
                    if (null !== (e = n.get("WEBGL_depth_texture")))
                        return e.UNSIGNED_INT_24_8_WEBGL
                }
                return 0
            }
        }
    }
    function eo() {
        ii.call(this),
        this.type = "Group"
    }
    function no() {
        ii.call(this),
        this.type = "Camera",
        this.matrixWorldInverse = new bn,
        this.projectionMatrix = new bn,
        this.projectionMatrixInverse = new bn
    }
    function io(t, e, n, i) {
        no.call(this),
        this.type = "PerspectiveCamera",
        this.fov = void 0 !== t ? t : 50,
        this.zoom = 1,
        this.near = void 0 !== n ? n : .1,
        this.far = void 0 !== i ? i : 2e3,
        this.focus = 10,
        this.aspect = void 0 !== e ? e : 1,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    function ro(t) {
        io.call(this),
        this.cameras = t || []
    }
    ((Ja.prototype = Object.create(ji.prototype)).constructor = Ja).prototype.isMeshDepthMaterial = !0,
    Ja.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.depthPacking = t.depthPacking,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
    ,
    ((Za.prototype = Object.create(ji.prototype)).constructor = Za).prototype.isMeshDistanceMaterial = !0,
    Za.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.referencePosition.copy(t.referencePosition),
        this.nearDistance = t.nearDistance,
        this.farDistance = t.farDistance,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this
    }
    ,
    eo.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: eo,
        isGroup: !0
    }),
    no.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: no,
        isCamera: !0,
        copy: function(t, e) {
            return ii.prototype.copy.call(this, t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            this
        },
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
            t = new De),
            this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
        },
        updateMatrixWorld: function(t) {
            ii.prototype.updateMatrixWorld.call(this, t),
            this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    io.prototype = Object.assign(Object.create(no.prototype), {
        constructor: io,
        isPerspectiveCamera: !0,
        copy: function(t, e) {
            return no.prototype.copy.call(this, t, e),
            this.fov = t.fov,
            this.zoom = t.zoom,
            this.near = t.near,
            this.far = t.far,
            this.focus = t.focus,
            this.aspect = t.aspect,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this.filmGauge = t.filmGauge,
            this.filmOffset = t.filmOffset,
            this
        },
        setFocalLength: function(t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * Ce.RAD2DEG * Math.atan(e),
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var t = Math.tan(.5 * Ce.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function() {
            return 2 * Ce.RAD2DEG * Math.atan(Math.tan(.5 * Ce.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, n, i, r, a) {
            this.aspect = t / e,
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = n,
            this.view.offsetY = i,
            this.view.width = r,
            this.view.height = a,
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = this.near
              , e = t * Math.tan(.5 * Ce.DEG2RAD * this.fov) / this.zoom
              , n = 2 * e
              , i = this.aspect * n
              , r = -.5 * i
              , a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth
                  , s = a.fullHeight;
                r += a.offsetX * i / o,
                e -= a.offsetY * n / s,
                i *= a.width / o,
                n *= a.height / s
            }
            var c = this.filmOffset;
            0 !== c && (r += t * c / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) {
            var e = ii.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov,
            e.object.zoom = this.zoom,
            e.object.near = this.near,
            e.object.far = this.far,
            e.object.focus = this.focus,
            e.object.aspect = this.aspect,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e.object.filmGauge = this.filmGauge,
            e.object.filmOffset = this.filmOffset,
            e
        }
    }),
    ro.prototype = Object.assign(Object.create(io.prototype), {
        constructor: ro,
        isArrayCamera: !0
    });
    var ao, oo, so, co, lo, ho, uo, po, fo, mo, go, vo, yo, xo, bo, wo, _o = new De, Mo = new De;
    function So(t, e, n) {
        _o.setFromMatrixPosition(e.matrixWorld),
        Mo.setFromMatrixPosition(n.matrixWorld);
        var i = _o.distanceTo(Mo)
          , r = e.projectionMatrix.elements
          , a = n.projectionMatrix.elements
          , o = r[14] / (r[10] - 1)
          , s = r[14] / (r[10] + 1)
          , c = (r[9] + 1) / r[5]
          , l = (r[9] - 1) / r[5]
          , h = (r[8] - 1) / r[0]
          , u = (a[8] + 1) / a[0]
          , p = o * h
          , d = o * u
          , f = i / (u - h)
          , m = f * -h;
        e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
        t.translateX(m),
        t.translateZ(f),
        t.matrixWorld.compose(t.position, t.quaternion, t.scale),
        t.matrixWorldInverse.getInverse(t.matrixWorld);
        var g = o + f
          , v = s + f
          , y = p - m
          , x = i - m + d
          , b = c * s / v * g
          , w = l * s / v * g;
        t.projectionMatrix.makePerspective(y, x, b, w, g, v)
    }
    function To(i) {
        var r = this
          , c = null
          , l = null
          , h = null
          , u = []
          , p = new bn
          , d = new bn
          , a = 1
          , f = "stage";
        "undefined" != typeof window && "VRFrameData"in window && (l = new window.VRFrameData,
        window.addEventListener("vrdisplaypresentchange", t, !1));
        var m = new bn
          , g = new Ie
          , v = new De
          , y = new io;
        y.bounds = new un(0,0,.5,1),
        y.layers.enable(1);
        var x = new io;
        x.bounds = new un(.5,0,.5,1),
        x.layers.enable(2);
        var b = new ro([y, x]);
        function w() {
            return null !== c && !0 === c.isPresenting
        }
        b.layers.enable(1),
        b.layers.enable(2);
        var o, s = new Oe;
        function t() {
            if (w()) {
                var t = c.getEyeParameters("left")
                  , e = t.renderWidth * a
                  , n = t.renderHeight * a;
                o = i.getPixelRatio(),
                i.getSize(s),
                i.setDrawingBufferSize(2 * e, n, 1),
                S.start()
            } else
                r.enabled && i.setDrawingBufferSize(s.width, s.height, o),
                S.stop()
        }
        var _ = [];
        function M(t) {
            for (var e = navigator.getGamepads && navigator.getGamepads(), n = 0, i = 0, r = e.length; n < r; n++) {
                var a = e[n];
                if (a && ("Daydream Controller" === a.id || "Gear VR Controller" === a.id || "Oculus Go Controller" === a.id || "OpenVR Gamepad" === a.id || a.id.startsWith("Oculus Touch") || a.id.startsWith("Spatial Controller"))) {
                    if (i === t)
                        return a;
                    i++
                }
            }
        }
        this.enabled = !1,
        this.getController = function(t) {
            var e = u[t];
            return void 0 === e && ((e = new eo).matrixAutoUpdate = !1,
            e.visible = !1,
            u[t] = e),
            e
        }
        ,
        this.getDevice = function() {
            return c
        }
        ,
        this.setDevice = function(t) {
            void 0 !== t && (c = t),
            S.setContext(t)
        }
        ,
        this.setFramebufferScaleFactor = function(t) {
            a = t
        }
        ,
        this.setFrameOfReferenceType = function(t) {
            f = t
        }
        ,
        this.setPoseTarget = function(t) {
            void 0 !== t && (h = t)
        }
        ,
        this.getCamera = function(t) {
            var e = "stage" === f ? 1.6 : 0;
            if (!1 === w())
                return t.position.set(0, e, 0),
                t.rotation.set(0, 0, 0),
                t;
            if (c.depthNear = t.near,
            c.depthFar = t.far,
            c.getFrameData(l),
            "stage" === f) {
                var n = c.stageParameters;
                n ? p.fromArray(n.sittingToStandingTransform) : p.makeTranslation(0, e, 0)
            }
            var i = l.pose
              , r = null !== h ? h : t;
            r.matrix.copy(p),
            r.matrix.decompose(r.position, r.quaternion, r.scale),
            null !== i.orientation && (g.fromArray(i.orientation),
            r.quaternion.multiply(g)),
            null !== i.position && (g.setFromRotationMatrix(p),
            v.fromArray(i.position),
            v.applyQuaternion(g),
            r.position.add(v)),
            r.updateMatrixWorld(),
            y.near = t.near,
            x.near = t.near,
            y.far = t.far,
            x.far = t.far,
            y.matrixWorldInverse.fromArray(l.leftViewMatrix),
            x.matrixWorldInverse.fromArray(l.rightViewMatrix),
            d.getInverse(p),
            "stage" === f && (y.matrixWorldInverse.multiply(d),
            x.matrixWorldInverse.multiply(d));
            var a = r.parent;
            null !== a && (m.getInverse(a.matrixWorld),
            y.matrixWorldInverse.multiply(m),
            x.matrixWorldInverse.multiply(m)),
            y.matrixWorld.getInverse(y.matrixWorldInverse),
            x.matrixWorld.getInverse(x.matrixWorldInverse),
            y.projectionMatrix.fromArray(l.leftProjectionMatrix),
            x.projectionMatrix.fromArray(l.rightProjectionMatrix),
            So(b, y, x);
            var o = c.getLayers();
            if (o.length) {
                var s = o[0];
                null !== s.leftBounds && 4 === s.leftBounds.length && y.bounds.fromArray(s.leftBounds),
                null !== s.rightBounds && 4 === s.rightBounds.length && x.bounds.fromArray(s.rightBounds)
            }
            return function() {
                for (var t = 0; t < u.length; t++) {
                    var e = u[t]
                      , n = M(t);
                    if (void 0 !== n && void 0 !== n.pose) {
                        if (null === n.pose)
                            return;
                        var i = n.pose;
                        !1 === i.hasPosition && e.position.set(.2, -.6, -.05),
                        null !== i.position && e.position.fromArray(i.position),
                        null !== i.orientation && e.quaternion.fromArray(i.orientation),
                        e.matrix.compose(e.position, e.quaternion, e.scale),
                        e.matrix.premultiply(p),
                        e.matrix.decompose(e.position, e.quaternion, e.scale),
                        e.matrixWorldNeedsUpdate = !0,
                        e.visible = !0;
                        var r = "Daydream Controller" === n.id ? 0 : 1;
                        _[t] !== n.buttons[r].pressed && (_[t] = n.buttons[r].pressed,
                        !0 === _[t] ? e.dispatchEvent({
                            type: "selectstart"
                        }) : (e.dispatchEvent({
                            type: "selectend"
                        }),
                        e.dispatchEvent({
                            type: "select"
                        })))
                    } else
                        e.visible = !1
                }
            }(),
            b
        }
        ,
        this.getStandingMatrix = function() {
            return p
        }
        ,
        this.isPresenting = w;
        var S = new In;
        this.setAnimationLoop = function(t) {
            S.setAnimationLoop(t),
            w() && S.start()
        }
        ,
        this.submitFrame = function() {
            w() && c.submitFrame()
        }
        ,
        this.dispose = function() {
            "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", t)
        }
    }
    function Eo(e) {
        var n = e.context
          , i = null
          , p = null
          , r = 1
          , d = null
          , a = "stage"
          , f = null
          , m = []
          , g = [];
        function o() {
            return null !== p && null !== d
        }
        var s = new io;
        s.layers.enable(1),
        s.viewport = new un;
        var c = new io;
        c.layers.enable(2),
        c.viewport = new un;
        var v = new ro([s, c]);
        function l(t) {
            var e = m[g.indexOf(t.inputSource)];
            e && e.dispatchEvent({
                type: t.type
            })
        }
        function h() {
            e.setFramebuffer(null),
            e.setRenderTarget(e.getRenderTarget()),
            x.stop()
        }
        function u(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
            t.matrixWorldInverse.getInverse(t.matrixWorld)
        }
        v.layers.enable(1),
        v.layers.enable(2),
        this.enabled = !1,
        this.getController = function(t) {
            var e = m[t];
            return void 0 === e && ((e = new eo).matrixAutoUpdate = !1,
            e.visible = !1,
            m[t] = e),
            e
        }
        ,
        this.getDevice = function() {
            return i
        }
        ,
        this.setDevice = function(t) {
            void 0 !== t && (i = t),
            t instanceof XRDevice && n.setCompatibleXRDevice(t)
        }
        ,
        this.setFramebufferScaleFactor = function(t) {
            r = t
        }
        ,
        this.setFrameOfReferenceType = function(t) {
            a = t
        }
        ,
        this.setSession = function(t) {
            null !== (p = t) && (p.addEventListener("select", l),
            p.addEventListener("selectstart", l),
            p.addEventListener("selectend", l),
            p.addEventListener("end", h),
            p.baseLayer = new XRWebGLLayer(p,n,{
                framebufferScaleFactor: r
            }),
            p.requestFrameOfReference(a).then(function(t) {
                d = t,
                e.setFramebuffer(p.baseLayer.framebuffer),
                x.setContext(p),
                x.start()
            }),
            g = p.getInputSources(),
            p.addEventListener("inputsourceschange", function() {
                g = p.getInputSources(),
                console.log(g);
                for (var t = 0; t < m.length; t++) {
                    m[t].userData.inputSource = g[t]
                }
            }))
        }
        ,
        this.getCamera = function(t) {
            if (o()) {
                var e = t.parent
                  , n = v.cameras;
                u(v, e);
                for (var i = 0; i < n.length; i++)
                    u(n[i], e);
                t.matrixWorld.copy(v.matrixWorld);
                for (var r = t.children, a = (i = 0,
                r.length); i < a; i++)
                    r[i].updateMatrixWorld(!0);
                return So(v, s, c),
                v
            }
            return t
        }
        ,
        this.isPresenting = o;
        var y = null;
        var x = new In;
        x.setAnimationLoop(function(t, e) {
            if (null !== (f = e.getDevicePose(d)))
                for (var n = p.baseLayer, i = e.views, r = 0; r < i.length; r++) {
                    var a = i[r]
                      , o = n.getViewport(a)
                      , s = f.getViewMatrix(a)
                      , c = v.cameras[r];
                    c.matrix.fromArray(s).getInverse(c.matrix),
                    c.projectionMatrix.fromArray(a.projectionMatrix),
                    c.viewport.set(o.x, o.y, o.width, o.height),
                    0 === r && v.matrix.copy(c.matrix)
                }
            for (r = 0; r < m.length; r++) {
                var l = m[r]
                  , h = g[r];
                if (h) {
                    var u = e.getInputPose(h, d);
                    if (null !== u) {
                        "targetRay"in u ? l.matrix.elements = u.targetRay.transformMatrix : "pointerMatrix"in u && (l.matrix.elements = u.pointerMatrix),
                        l.matrix.decompose(l.position, l.rotation, l.scale),
                        l.visible = !0;
                        continue
                    }
                }
                l.visible = !1
            }
            y && y(t)
        }),
        this.setAnimationLoop = function(t) {
            y = t
        }
        ,
        this.dispose = function() {}
        ,
        this.getStandingMatrix = function() {
            return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."),
            new bn
        }
        ,
        this.submitFrame = function() {}
    }
    function Ao(t) {
        console.log("THREE.WebGLRenderer", yt);
        var i = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
          , e = void 0 !== t.context ? t.context : null
          , n = void 0 !== t.alpha && t.alpha
          , r = void 0 === t.depth || t.depth
          , a = void 0 === t.stencil || t.stencil
          , o = void 0 !== t.antialias && t.antialias
          , s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
          , c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
          , l = void 0 !== t.powerPreference ? t.powerPreference : "default"
          , f = null
          , w = null;
        this.domElement = i,
        this.context = null,
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.gammaInput = !1,
        this.gammaOutput = !1,
        this.physicallyCorrectLights = !1,
        this.toneMapping = bt,
        this.toneMappingExposure = 1,
        this.toneMappingWhitePoint = 1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4;
        var M, S, T, E, h, _, A, L, P, m, y, u, p, d, R, C, O, g, I = this, v = !1, x = null, b = null, D = null, N = -1, z = {
            geometry: null,
            program: null,
            wireframe: !1
        }, B = null, U = null, G = new un, F = new un, k = null, H = i.width, V = i.height, j = 1, W = new un(0,0,H,V), q = new un(0,0,H,V), X = !1, Y = new xn, J = new Er, Z = !1, Q = !1, K = new bn, $ = new De;
        function tt() {
            return null === b ? j : 1
        }
        try {
            var et = {
                alpha: n,
                depth: r,
                stencil: a,
                antialias: o,
                premultipliedAlpha: s,
                preserveDrawingBuffer: c,
                powerPreference: l
            };
            if (i.addEventListener("webglcontextlost", at, !1),
            i.addEventListener("webglcontextrestored", ot, !1),
            null === (M = e || i.getContext("webgl", et) || i.getContext("experimental-webgl", et)))
                throw null !== i.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === M.getShaderPrecisionFormat && (M.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            )
        } catch (t) {
            throw console.error("THREE.WebGLRenderer: " + t.message),
            t
        }
        function nt() {
            S = new Ar(M),
            (T = new Tr(M,S,t)).isWebGL2 || (S.get("WEBGL_depth_texture"),
            S.get("OES_texture_float"),
            S.get("OES_texture_half_float"),
            S.get("OES_texture_half_float_linear"),
            S.get("OES_standard_derivatives"),
            S.get("OES_element_index_uint"),
            S.get("ANGLE_instanced_arrays")),
            S.get("OES_texture_float_linear"),
            g = new to(M,S,T),
            (E = new Ka(M,S,g,T)).scissor(F.copy(q).multiplyScalar(j)),
            E.viewport(G.copy(W).multiplyScalar(j)),
            h = new Rr(M),
            _ = new Ga,
            A = new $a(M,S,E,_,T,g,h),
            L = new Dn(M),
            P = new Lr(M,L,h),
            m = new Ir(P,h),
            R = new Or(M),
            y = new Ua(I,S,T,A),
            u = new Va,
            p = new Ya,
            d = new Mr(I,E,m,s),
            C = new Sr(M,S,h,T),
            O = new Pr(M,S,h,T),
            h.programs = y.programs,
            I.context = M,
            I.capabilities = T,
            I.extensions = S,
            I.properties = _,
            I.renderLists = u,
            I.state = E,
            I.info = h
        }
        nt();
        var it = null;
        "undefined" != typeof navigator && (it = "xr"in navigator ? new Eo(I) : new To(I)),
        this.vr = it;
        var rt = new Qa(I,m,T.maxTextureSize);
        function at(t) {
            t.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            v = !0
        }
        function ot() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            v = !1,
            nt()
        }
        function st(t) {
            var e = t.target;
            e.removeEventListener("dispose", st),
            function(t) {
                ct(t),
                _.remove(t)
            }(e)
        }
        function ct(t) {
            var e = _.get(t).program;
            (t.program = void 0) !== e && y.releaseProgram(e)
        }
        this.shadowMap = rt,
        this.getContext = function() {
            return M
        }
        ,
        this.getContextAttributes = function() {
            return M.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            var t = S.get("WEBGL_lose_context");
            t && t.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            var t = S.get("WEBGL_lose_context");
            t && t.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return j
        }
        ,
        this.setPixelRatio = function(t) {
            void 0 !== t && (j = t,
            this.setSize(H, V, !1))
        }
        ,
        this.getSize = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),
            t = new Oe),
            t.set(H, V)
        }
        ,
        this.setSize = function(t, e, n) {
            it.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (H = t,
            V = e,
            i.width = t * j,
            i.height = e * j,
            !1 !== n && (i.style.width = t + "px",
            i.style.height = e + "px"),
            this.setViewport(0, 0, t, e))
        }
        ,
        this.getDrawingBufferSize = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),
            t = new Oe),
            t.set(H * j, V * j)
        }
        ,
        this.setDrawingBufferSize = function(t, e, n) {
            H = t,
            V = e,
            j = n,
            i.width = t * n,
            i.height = e * n,
            this.setViewport(0, 0, t, e)
        }
        ,
        this.getCurrentViewport = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),
            t = new un),
            t.copy(G)
        }
        ,
        this.getViewport = function(t) {
            return t.copy(W)
        }
        ,
        this.setViewport = function(t, e, n, i) {
            t.isVector4 ? W.set(t.x, t.y, t.z, t.w) : W.set(t, e, n, i),
            E.viewport(G.copy(W).multiplyScalar(j))
        }
        ,
        this.getScissor = function(t) {
            return t.copy(q)
        }
        ,
        this.setScissor = function(t, e, n, i) {
            t.isVector4 ? q.set(t.x, t.y, t.z, t.w) : q.set(t, e, n, i),
            E.scissor(F.copy(q).multiplyScalar(j))
        }
        ,
        this.getScissorTest = function() {
            return X
        }
        ,
        this.setScissorTest = function(t) {
            E.setScissorTest(X = t)
        }
        ,
        this.getClearColor = function() {
            return d.getClearColor()
        }
        ,
        this.setClearColor = function() {
            d.setClearColor.apply(d, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return d.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            d.setClearAlpha.apply(d, arguments)
        }
        ,
        this.clear = function(t, e, n) {
            var i = 0;
            (void 0 === t || t) && (i |= 16384),
            (void 0 === e || e) && (i |= 256),
            (void 0 === n || n) && (i |= 1024),
            M.clear(i)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            i.removeEventListener("webglcontextlost", at, !1),
            i.removeEventListener("webglcontextrestored", ot, !1),
            u.dispose(),
            p.dispose(),
            _.dispose(),
            m.dispose(),
            it.dispose(),
            ht.stop()
        }
        ,
        this.renderBufferImmediate = function(t, e) {
            E.initAttributes();
            var n = _.get(t);
            t.hasPositions && !n.position && (n.position = M.createBuffer()),
            t.hasNormals && !n.normal && (n.normal = M.createBuffer()),
            t.hasUvs && !n.uv && (n.uv = M.createBuffer()),
            t.hasColors && !n.color && (n.color = M.createBuffer());
            var i = e.getAttributes();
            t.hasPositions && (M.bindBuffer(34962, n.position),
            M.bufferData(34962, t.positionArray, 35048),
            E.enableAttribute(i.position),
            M.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)),
            t.hasNormals && (M.bindBuffer(34962, n.normal),
            M.bufferData(34962, t.normalArray, 35048),
            E.enableAttribute(i.normal),
            M.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)),
            t.hasUvs && (M.bindBuffer(34962, n.uv),
            M.bufferData(34962, t.uvArray, 35048),
            E.enableAttribute(i.uv),
            M.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)),
            t.hasColors && (M.bindBuffer(34962, n.color),
            M.bufferData(34962, t.colorArray, 35048),
            E.enableAttribute(i.color),
            M.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)),
            E.disableUnusedAttributes(),
            M.drawArrays(4, 0, t.count),
            t.count = 0
        }
        ,
        this.renderBufferDirect = function(t, e, n, i, r, a) {
            var o = r.isMesh && r.matrixWorld.determinant() < 0;
            E.setMaterial(i, o);
            var s = ft(t, e, i, r)
              , c = !1;
            z.geometry === n.id && z.program === s.id && z.wireframe === (!0 === i.wireframe) || (z.geometry = n.id,
            z.program = s.id,
            z.wireframe = !0 === i.wireframe,
            c = !0),
            r.morphTargetInfluences && (R.update(r, n, i, s),
            c = !0);
            var l, h = n.index, u = n.attributes.position, p = 1;
            !0 === i.wireframe && (h = P.getWireframeAttribute(n),
            p = 2);
            var d = C;
            null !== h && (l = L.get(h),
            (d = O).setIndex(l)),
            c && (function(t, e, n) {
                if (n && n.isInstancedBufferGeometry && !T.isWebGL2 && null === S.get("ANGLE_instanced_arrays"))
                    return console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                E.initAttributes();
                var i = n.attributes
                  , r = e.getAttributes()
                  , a = t.defaultAttributeValues;
                for (var o in r) {
                    var s = r[o];
                    if (0 <= s) {
                        var c = i[o];
                        if (void 0 !== c) {
                            var l = c.normalized
                              , h = c.itemSize
                              , u = L.get(c);
                            if (void 0 === u)
                                continue;
                            var p = u.buffer
                              , d = u.type
                              , f = u.bytesPerElement;
                            if (c.isInterleavedBufferAttribute) {
                                var m = c.data
                                  , g = m.stride
                                  , v = c.offset;
                                m && m.isInstancedInterleavedBuffer ? (E.enableAttributeAndDivisor(s, m.meshPerAttribute),
                                void 0 === n.maxInstancedCount && (n.maxInstancedCount = m.meshPerAttribute * m.count)) : E.enableAttribute(s),
                                M.bindBuffer(34962, p),
                                M.vertexAttribPointer(s, h, d, l, g * f, v * f)
                            } else
                                c.isInstancedBufferAttribute ? (E.enableAttributeAndDivisor(s, c.meshPerAttribute),
                                void 0 === n.maxInstancedCount && (n.maxInstancedCount = c.meshPerAttribute * c.count)) : E.enableAttribute(s),
                                M.bindBuffer(34962, p),
                                M.vertexAttribPointer(s, h, d, l, 0, 0)
                        } else if (void 0 !== a) {
                            var y = a[o];
                            if (void 0 !== y)
                                switch (y.length) {
                                case 2:
                                    M.vertexAttrib2fv(s, y);
                                    break;
                                case 3:
                                    M.vertexAttrib3fv(s, y);
                                    break;
                                case 4:
                                    M.vertexAttrib4fv(s, y);
                                    break;
                                default:
                                    M.vertexAttrib1fv(s, y)
                                }
                        }
                    }
                }
                E.disableUnusedAttributes()
            }(i, s, n),
            null !== h && M.bindBuffer(34963, l.buffer));
            var f = 1 / 0;
            null !== h ? f = h.count : void 0 !== u && (f = u.count);
            var m = n.drawRange.start * p
              , g = n.drawRange.count * p
              , v = null !== a ? a.start * p : 0
              , y = null !== a ? a.count * p : 1 / 0
              , x = Math.max(m, v)
              , b = Math.min(f, m + g, v + y) - 1
              , w = Math.max(0, b - x + 1);
            if (0 !== w) {
                if (r.isMesh)
                    if (!0 === i.wireframe)
                        E.setLineWidth(i.wireframeLinewidth * tt()),
                        d.setMode(1);
                    else
                        switch (r.drawMode) {
                        case ve:
                            d.setMode(4);
                            break;
                        case ye:
                            d.setMode(5);
                            break;
                        case xe:
                            d.setMode(6)
                        }
                else if (r.isLine) {
                    var _ = i.linewidth;
                    void 0 === _ && (_ = 1),
                    E.setLineWidth(_ * tt()),
                    r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
                } else
                    r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
                n && n.isInstancedBufferGeometry ? 0 < n.maxInstancedCount && d.renderInstances(n, x, w) : d.render(x, w)
            }
        }
        ,
        this.compile = function(n, t) {
            (w = p.get(n, t)).init(),
            n.traverse(function(t) {
                t.isLight && (w.pushLight(t),
                t.castShadow && w.pushShadow(t))
            }),
            w.setupLights(t),
            n.traverse(function(t) {
                if (t.material)
                    if (Array.isArray(t.material))
                        for (var e = 0; e < t.material.length; e++)
                            dt(t.material[e], n.fog, t);
                    else
                        dt(t.material, n.fog, t)
            })
        }
        ;
        var lt = null;
        var ht = new In;
        function ut(t, e, n, i) {
            for (var r = 0, a = t.length; r < a; r++) {
                var o = t[r]
                  , s = o.object
                  , c = o.geometry
                  , l = void 0 === i ? o.material : i
                  , h = o.group;
                if (n.isArrayCamera)
                    for (var u = (U = n).cameras, p = 0, d = u.length; p < d; p++) {
                        var f = u[p];
                        if (s.layers.test(f.layers)) {
                            if ("viewport"in f)
                                E.viewport(G.copy(f.viewport));
                            else {
                                var m = f.bounds
                                  , g = m.x * H
                                  , v = m.y * V
                                  , y = m.z * H
                                  , x = m.w * V;
                                E.viewport(G.set(g, v, y, x).multiplyScalar(j))
                            }
                            w.setupLights(f),
                            pt(s, e, f, c, l, h)
                        }
                    }
                else
                    U = null,
                    pt(s, e, n, c, l, h)
            }
        }
        function pt(t, e, n, i, r, a) {
            if (t.onBeforeRender(I, e, n, i, r, a),
            w = p.get(e, U || n),
            t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            t.isImmediateRenderObject) {
                E.setMaterial(r);
                var o = ft(n, e.fog, r, t);
                z.geometry = null,
                z.program = null,
                z.wireframe = !1,
                function(t, e) {
                    t.render(function(t) {
                        I.renderBufferImmediate(t, e)
                    })
                }(t, o)
            } else
                I.renderBufferDirect(n, e.fog, i, r, t, a);
            t.onAfterRender(I, e, n, i, r, a),
            w = p.get(e, U || n)
        }
        function dt(t, e, n) {
            var i = _.get(t)
              , r = w.state.lights
              , a = w.state.shadowsArray
              , o = i.lightsHash
              , s = r.state.hash
              , c = y.getParameters(t, r.state, a, e, J.numPlanes, J.numIntersection, n)
              , l = y.getProgramCode(t, c)
              , h = i.program
              , u = !0;
            if (void 0 === h)
                t.addEventListener("dispose", st);
            else if (h.code !== l)
                ct(t);
            else if (o.stateID !== s.stateID || o.directionalLength !== s.directionalLength || o.pointLength !== s.pointLength || o.spotLength !== s.spotLength || o.rectAreaLength !== s.rectAreaLength || o.hemiLength !== s.hemiLength || o.shadowsLength !== s.shadowsLength)
                o.stateID = s.stateID,
                o.directionalLength = s.directionalLength,
                o.pointLength = s.pointLength,
                o.spotLength = s.spotLength,
                o.rectAreaLength = s.rectAreaLength,
                o.hemiLength = s.hemiLength,
                o.shadowsLength = s.shadowsLength,
                u = !1;
            else {
                if (void 0 !== c.shaderID)
                    return;
                u = !1
            }
            if (u) {
                if (c.shaderID) {
                    var p = On[c.shaderID];
                    i.shader = {
                        name: t.type,
                        uniforms: _n(p.uniforms),
                        vertexShader: p.vertexShader,
                        fragmentShader: p.fragmentShader
                    }
                } else
                    i.shader = {
                        name: t.type,
                        uniforms: t.uniforms,
                        vertexShader: t.vertexShader,
                        fragmentShader: t.fragmentShader
                    };
                t.onBeforeCompile(i.shader, I),
                l = y.getProgramCode(t, c),
                h = y.acquireProgram(t, i.shader, c, l),
                i.program = h,
                t.program = h
            }
            var d = h.getAttributes();
            if (t.morphTargets)
                for (var f = t.numSupportedMorphTargets = 0; f < I.maxMorphTargets; f++)
                    0 <= d["morphTarget" + f] && t.numSupportedMorphTargets++;
            if (t.morphNormals)
                for (f = t.numSupportedMorphNormals = 0; f < I.maxMorphNormals; f++)
                    0 <= d["morphNormal" + f] && t.numSupportedMorphNormals++;
            var m = i.shader.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = J.numPlanes,
            i.numIntersection = J.numIntersection,
            m.clippingPlanes = J.uniform),
            i.fog = e,
            void 0 === o && (i.lightsHash = o = {}),
            o.stateID = s.stateID,
            o.directionalLength = s.directionalLength,
            o.pointLength = s.pointLength,
            o.spotLength = s.spotLength,
            o.rectAreaLength = s.rectAreaLength,
            o.hemiLength = s.hemiLength,
            o.shadowsLength = s.shadowsLength,
            t.lights && (m.ambientLightColor.value = r.state.ambient,
            m.directionalLights.value = r.state.directional,
            m.spotLights.value = r.state.spot,
            m.rectAreaLights.value = r.state.rectArea,
            m.pointLights.value = r.state.point,
            m.hemisphereLights.value = r.state.hemi,
            m.directionalShadowMap.value = r.state.directionalShadowMap,
            m.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
            m.spotShadowMap.value = r.state.spotShadowMap,
            m.spotShadowMatrix.value = r.state.spotShadowMatrix,
            m.pointShadowMap.value = r.state.pointShadowMap,
            m.pointShadowMatrix.value = r.state.pointShadowMatrix);
            var g = i.program.getUniforms()
              , v = Aa.seqWithValue(g.seq, m);
            i.uniformsList = v
        }
        function ft(t, e, n, i) {
            A.resetTextureUnits();
            var r = _.get(n)
              , a = w.state.lights
              , o = r.lightsHash
              , s = a.state.hash;
            if (Z && (Q || t !== B)) {
                var c = t === B && n.id === N;
                J.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, r, c)
            }
            !1 === n.needsUpdate && (void 0 === r.program ? n.needsUpdate = !0 : n.fog && r.fog !== e ? n.needsUpdate = !0 : (!n.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === J.numPlanes && r.numIntersection === J.numIntersection) || (n.needsUpdate = !0)),
            n.needsUpdate && (dt(n, e, i),
            n.needsUpdate = !1);
            var l = !1
              , h = !1
              , u = !1
              , p = r.program
              , d = p.getUniforms()
              , f = r.shader.uniforms;
            if (E.useProgram(p.program) && (u = h = l = !0),
            n.id !== N && (N = n.id,
            h = !0),
            l || B !== t) {
                if (d.setValue(M, "projectionMatrix", t.projectionMatrix),
                T.logarithmicDepthBuffer && d.setValue(M, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                B !== t && (B = t,
                u = h = !0),
                n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
                    var m = d.map.cameraPosition;
                    void 0 !== m && m.setValue(M, $.setFromMatrixPosition(t.matrixWorld))
                }
                (n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && d.setValue(M, "viewMatrix", t.matrixWorldInverse)
            }
            if (n.skinning) {
                d.setOptional(M, i, "bindMatrix"),
                d.setOptional(M, i, "bindMatrixInverse");
                var g = i.skeleton;
                if (g) {
                    var v = g.bones;
                    if (T.floatVertexTextures) {
                        if (void 0 === g.boneTexture) {
                            var y = Math.sqrt(4 * v.length);
                            y = Ce.ceilPowerOfTwo(y),
                            y = Math.max(y, 4);
                            var x = new Float32Array(y * y * 4);
                            x.set(g.boneMatrices);
                            var b = new mn(x,y,y,Ft,Ot);
                            b.needsUpdate = !0,
                            g.boneMatrices = x,
                            g.boneTexture = b,
                            g.boneTextureSize = y
                        }
                        d.setValue(M, "boneTexture", g.boneTexture, A),
                        d.setValue(M, "boneTextureSize", g.boneTextureSize)
                    } else
                        d.setOptional(M, g, "boneMatrices")
                }
            }
            return h && (d.setValue(M, "toneMappingExposure", I.toneMappingExposure),
            d.setValue(M, "toneMappingWhitePoint", I.toneMappingWhitePoint),
            n.lights && function(t, e) {
                t.ambientLightColor.needsUpdate = e,
                t.directionalLights.needsUpdate = e,
                t.pointLights.needsUpdate = e,
                t.spotLights.needsUpdate = e,
                t.rectAreaLights.needsUpdate = e,
                t.hemisphereLights.needsUpdate = e
            }(f, u),
            e && n.fog && function(t, e) {
                t.fogColor.value = e.color,
                e.isFog ? (t.fogNear.value = e.near,
                t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
            }(f, e),
            n.isMeshBasicMaterial ? mt(f, n) : n.isMeshLambertMaterial ? (mt(f, n),
            function(t, e) {
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
            }(f, n)) : n.isMeshPhongMaterial ? (mt(f, n),
            n.isMeshToonMaterial ? function(t, e) {
                gt(t, e),
                e.gradientMap && (t.gradientMap.value = e.gradientMap)
            }(f, n) : gt(f, n)) : n.isMeshStandardMaterial ? (mt(f, n),
            n.isMeshPhysicalMaterial ? function(t, e) {
                vt(t, e),
                t.reflectivity.value = e.reflectivity,
                t.clearCoat.value = e.clearCoat,
                t.clearCoatRoughness.value = e.clearCoatRoughness
            }(f, n) : vt(f, n)) : n.isMeshMatcapMaterial ? (mt(f, n),
            function(t, e) {
                e.matcap && (t.matcap.value = e.matcap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale,
                e.side === xt && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale),
                e.side === xt && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(f, n)) : n.isMeshDepthMaterial ? (mt(f, n),
            function(t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(f, n)) : n.isMeshDistanceMaterial ? (mt(f, n),
            function(t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias);
                t.referencePosition.value.copy(e.referencePosition),
                t.nearDistance.value = e.nearDistance,
                t.farDistance.value = e.farDistance
            }(f, n)) : n.isMeshNormalMaterial ? (mt(f, n),
            function(t, e) {
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale,
                e.side === xt && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale),
                e.side === xt && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(f, n)) : n.isLineBasicMaterial ? (function(t, e) {
                t.diffuse.value = e.color,
                t.opacity.value = e.opacity
            }(f, n),
            n.isLineDashedMaterial && function(t, e) {
                t.dashSize.value = e.dashSize,
                t.totalSize.value = e.dashSize + e.gapSize,
                t.scale.value = e.scale
            }(f, n)) : n.isPointsMaterial ? function(t, e) {
                t.diffuse.value = e.color,
                t.opacity.value = e.opacity,
                t.size.value = e.size * j,
                t.scale.value = .5 * V,
                t.map.value = e.map,
                null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(),
                t.uvTransform.value.copy(e.map.matrix))
            }(f, n) : n.isSpriteMaterial ? function(t, e) {
                t.diffuse.value = e.color,
                t.opacity.value = e.opacity,
                t.rotation.value = e.rotation,
                t.map.value = e.map,
                null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(),
                t.uvTransform.value.copy(e.map.matrix))
            }(f, n) : n.isShadowMaterial && (f.color.value = n.color,
            f.opacity.value = n.opacity),
            void 0 !== f.ltc_1 && (f.ltc_1.value = Cn.LTC_1),
            void 0 !== f.ltc_2 && (f.ltc_2.value = Cn.LTC_2),
            Aa.upload(M, r.uniformsList, f, A)),
            n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Aa.upload(M, r.uniformsList, f, A),
            n.uniformsNeedUpdate = !1),
            n.isSpriteMaterial && d.setValue(M, "center", i.center),
            d.setValue(M, "modelViewMatrix", i.modelViewMatrix),
            d.setValue(M, "normalMatrix", i.normalMatrix),
            d.setValue(M, "modelMatrix", i.matrixWorld),
            p
        }
        function mt(t, e) {
            var n;
            t.opacity.value = e.opacity,
            e.color && (t.diffuse.value = e.color),
            e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),
            e.map && (t.map.value = e.map),
            e.alphaMap && (t.alphaMap.value = e.alphaMap),
            e.specularMap && (t.specularMap.value = e.specularMap),
            e.envMap && (t.envMap.value = e.envMap,
            t.flipEnvMap.value = e.envMap.isCubeTexture ? -1 : 1,
            t.reflectivity.value = e.reflectivity,
            t.refractionRatio.value = e.refractionRatio,
            t.maxMipLevel.value = _.get(e.envMap).__maxMipLevel),
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.aoMap && (t.aoMap.value = e.aoMap,
            t.aoMapIntensity.value = e.aoMapIntensity),
            e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap),
            void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture),
            !0 === n.matrixAutoUpdate && n.updateMatrix(),
            t.uvTransform.value.copy(n.matrix))
        }
        function gt(t, e) {
            t.specular.value = e.specular,
            t.shininess.value = Math.max(e.shininess, 1e-4),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale,
            e.side === xt && (t.bumpScale.value *= -1)),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale),
            e.side === xt && t.normalScale.value.negate()),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias)
        }
        function vt(t, e) {
            t.roughness.value = e.roughness,
            t.metalness.value = e.metalness,
            e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
            e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale,
            e.side === xt && (t.bumpScale.value *= -1)),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale),
            e.side === xt && t.normalScale.value.negate()),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias),
            e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }
        ht.setAnimationLoop(function(t) {
            it.isPresenting() || lt && lt(t)
        }),
        "undefined" != typeof window && ht.setContext(window),
        this.setAnimationLoop = function(t) {
            lt = t,
            it.setAnimationLoop(t),
            ht.start()
        }
        ,
        this.render = function(t, e) {
            var n, i;
            if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),
            n = arguments[2]),
            void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),
            i = arguments[3]),
            e && e.isCamera) {
                if (!v) {
                    z.geometry = null,
                    z.program = null,
                    z.wireframe = !1,
                    N = -1,
                    !(B = null) === t.autoUpdate && t.updateMatrixWorld(),
                    null === e.parent && e.updateMatrixWorld(),
                    it.enabled && (e = it.getCamera(e)),
                    (w = p.get(t, e)).init(),
                    t.onBeforeRender(I, t, e, n || b),
                    K.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                    Y.setFromMatrix(K),
                    Q = this.localClippingEnabled,
                    Z = J.init(this.clippingPlanes, Q, e),
                    (f = u.get(t, e)).init(),
                    function t(e, n, i, r) {
                        if (!1 === e.visible)
                            return;
                        var a = e.layers.test(n.layers);
                        if (a)
                            if (e.isGroup)
                                i = e.renderOrder;
                            else if (e.isLight)
                                w.pushLight(e),
                                e.castShadow && w.pushShadow(e);
                            else if (e.isSprite) {
                                if (!e.frustumCulled || Y.intersectsSprite(e)) {
                                    r && $.setFromMatrixPosition(e.matrixWorld).applyMatrix4(K);
                                    var o = m.update(e)
                                      , s = e.material;
                                    s.visible && f.push(e, o, s, i, $.z, null)
                                }
                            } else if (e.isImmediateRenderObject)
                                r && $.setFromMatrixPosition(e.matrixWorld).applyMatrix4(K),
                                f.push(e, null, e.material, i, $.z, null);
                            else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(),
                            !e.frustumCulled || Y.intersectsObject(e))) {
                                r && $.setFromMatrixPosition(e.matrixWorld).applyMatrix4(K);
                                var o = m.update(e)
                                  , s = e.material;
                                if (Array.isArray(s))
                                    for (var c = o.groups, l = 0, h = c.length; l < h; l++) {
                                        var u = c[l]
                                          , p = s[u.materialIndex];
                                        p && p.visible && f.push(e, o, p, i, $.z, u)
                                    }
                                else
                                    s.visible && f.push(e, o, s, i, $.z, null)
                            }
                        var d = e.children;
                        for (var l = 0, h = d.length; l < h; l++)
                            t(d[l], n, i, r)
                    }(t, e, 0, I.sortObjects),
                    !0 === I.sortObjects && f.sort(),
                    Z && J.beginShadows();
                    var r = w.state.shadowsArray;
                    rt.render(r, t, e),
                    w.setupLights(e),
                    Z && J.endShadows(),
                    this.info.autoReset && this.info.reset(),
                    void 0 !== n && this.setRenderTarget(n),
                    d.render(f, t, e, i);
                    var a = f.opaque
                      , o = f.transparent;
                    if (t.overrideMaterial) {
                        var s = t.overrideMaterial;
                        a.length && ut(a, t, e, s),
                        o.length && ut(o, t, e, s)
                    } else
                        a.length && ut(a, t, e),
                        o.length && ut(o, t, e);
                    t.onAfterRender(I, t, e),
                    null !== b && (A.updateRenderTargetMipmap(b),
                    A.updateMultisampleRenderTarget(b)),
                    E.buffers.depth.setTest(!0),
                    E.buffers.depth.setMask(!0),
                    E.buffers.color.setMask(!0),
                    E.setPolygonOffset(!1),
                    it.enabled && it.submitFrame(),
                    w = f = null
                }
            } else
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }
        ,
        this.setFramebuffer = function(t) {
            x = t
        }
        ,
        this.getRenderTarget = function() {
            return b
        }
        ,
        this.setRenderTarget = function(t, e, n) {
            (b = t) && void 0 === _.get(t).__webglFramebuffer && A.setupRenderTarget(t);
            var i = x
              , r = !1;
            if (t) {
                var a = _.get(t).__webglFramebuffer;
                t.isWebGLRenderTargetCube ? (i = a[e || 0],
                r = !0) : i = t.isWebGLMultisampleRenderTarget ? _.get(t).__webglMultisampledFramebuffer : a,
                G.copy(t.viewport),
                F.copy(t.scissor),
                k = t.scissorTest
            } else
                G.copy(W).multiplyScalar(j),
                F.copy(q).multiplyScalar(j),
                k = X;
            if (D !== i && (M.bindFramebuffer(36160, i),
            D = i),
            E.viewport(G),
            E.scissor(F),
            E.setScissorTest(k),
            r) {
                var o = _.get(t.texture);
                M.framebufferTexture2D(36160, 36064, 34069 + (e || 0), o.__webglTexture, n || 0)
            }
        }
        ,
        this.readRenderTargetPixels = function(t, e, n, i, r, a) {
            if (t && t.isWebGLRenderTarget) {
                var o = _.get(t).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== D && (M.bindFramebuffer(36160, o),
                    s = !0);
                    try {
                        var c = t.texture
                          , l = c.format
                          , h = c.type;
                        if (l !== Ft && g.convert(l) !== M.getParameter(35739))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(h === Et || g.convert(h) === M.getParameter(35738) || h === Ot && (T.isWebGL2 || S.get("OES_texture_float") || S.get("WEBGL_color_buffer_float")) || h === It && (T.isWebGL2 ? S.get("EXT_color_buffer_float") : S.get("EXT_color_buffer_half_float"))))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        36053 === M.checkFramebufferStatus(36160) ? 0 <= e && e <= t.width - i && 0 <= n && n <= t.height - r && M.readPixels(e, n, i, r, g.convert(l), g.convert(h), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        s && M.bindFramebuffer(36160, D)
                    }
                }
            } else
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }
        ,
        this.copyFramebufferToTexture = function(t, e, n) {
            var i = e.image.width
              , r = e.image.height
              , a = g.convert(e.format);
            A.setTexture2D(e, 0),
            M.copyTexImage2D(3553, n || 0, a, t.x, t.y, i, r, 0)
        }
        ,
        this.copyTextureToTexture = function(t, e, n, i) {
            var r = e.image.width
              , a = e.image.height
              , o = g.convert(n.format)
              , s = g.convert(n.type);
            A.setTexture2D(n, 0),
            e.isDataTexture ? M.texSubImage2D(3553, i || 0, t.x, t.y, r, a, o, s, e.image.data) : M.texSubImage2D(3553, i || 0, t.x, t.y, o, s, e.image)
        }
    }
    function Lo(t, e) {
        this.name = "",
        this.color = new Ln(t),
        this.density = void 0 !== e ? e : 25e-5
    }
    function Po(t, e, n) {
        this.name = "",
        this.color = new Ln(t),
        this.near = void 0 !== e ? e : 1,
        this.far = void 0 !== n ? n : 1e3
    }
    function Ro() {
        ii.call(this),
        this.type = "Scene",
        this.background = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0
    }
    function Co(t, e) {
        this.array = t,
        this.stride = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function Oo(t, e, n, i) {
        this.data = t,
        this.itemSize = e,
        this.offset = n,
        this.normalized = !0 === i
    }
    function Io(t) {
        ji.call(this),
        this.type = "SpriteMaterial",
        this.color = new Ln(16777215),
        this.map = null,
        this.rotation = 0,
        this.sizeAttenuation = !0,
        this.lights = !1,
        this.transparent = !0,
        this.setValues(t)
    }
    function Do(t) {
        if (ii.call(this),
        this.type = "Sprite",
        void 0 === ao) {
            ao = new Ui;
            var e = new Co(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),5);
            ao.setIndex([0, 1, 2, 0, 2, 3]),
            ao.addAttribute("position", new Oo(e,3,0,!1)),
            ao.addAttribute("uv", new Oo(e,2,3,!1))
        }
        this.geometry = ao,
        this.material = void 0 !== t ? t : new Io,
        this.center = new Oe(.5,.5)
    }
    function No() {
        ii.call(this),
        this.type = "LOD",
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }
    function zo(t, e) {
        t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),
        _r.call(this, t, e),
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new bn,
        this.bindMatrixInverse = new bn
    }
    function Bo(t, e) {
        if (t = t || [],
        this.bones = t.slice(0),
        this.boneMatrices = new Float32Array(16 * this.bones.length),
        void 0 === e)
            this.calculateInverses();
        else if (this.bones.length === e.length)
            this.boneInverses = e.slice(0);
        else {
            console.warn("THREE.Skeleton boneInverses is the wrong length."),
            this.boneInverses = [];
            for (var n = 0, i = this.bones.length; n < i; n++)
                this.boneInverses.push(new bn)
        }
    }
    function Uo() {
        ii.call(this),
        this.type = "Bone"
    }
    function Go(t) {
        ji.call(this),
        this.type = "LineBasicMaterial",
        this.color = new Ln(16777215),
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.lights = !1,
        this.setValues(t)
    }
    function Fo(t, e, n) {
        1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),
        ii.call(this),
        this.type = "Line",
        this.geometry = void 0 !== t ? t : new Ui,
        this.material = void 0 !== e ? e : new Go({
            color: 16777215 * Math.random()
        })
    }
    function ko(t, e) {
        Fo.call(this, t, e),
        this.type = "LineSegments"
    }
    function Ho(t, e) {
        Fo.call(this, t, e),
        this.type = "LineLoop"
    }
    function Vo(t) {
        ji.call(this),
        this.type = "PointsMaterial",
        this.color = new Ln(16777215),
        this.map = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.morphTargets = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function jo(t, e) {
        ii.call(this),
        this.type = "Points",
        this.geometry = void 0 !== t ? t : new Ui,
        this.material = void 0 !== e ? e : new Vo({
            color: 16777215 * Math.random()
        })
    }
    function Wo(t, e, n, i, r, a, o, s, c) {
        hn.call(this, t, e, n, i, r, a, o, s, c),
        this.format = void 0 !== o ? o : Gt,
        this.minFilter = void 0 !== a ? a : Mt,
        this.magFilter = void 0 !== r ? r : Mt,
        this.generateMipmaps = !1
    }
    function qo(t, e, n, i, r, a, o, s, c, l, h, u) {
        hn.call(this, null, a, o, s, c, l, i, r, h, u),
        this.image = {
            width: e,
            height: n
        },
        this.mipmaps = t,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function Xo(t, e, n, i, r, a, o, s, c) {
        hn.call(this, t, e, n, i, r, a, o, s, c),
        this.needsUpdate = !0
    }
    function Yo(t, e, n, i, r, a, o, s, c, l) {
        if ((l = void 0 !== l ? l : Vt) !== Vt && l !== jt)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && l === Vt && (n = Pt),
        void 0 === n && l === jt && (n = Bt),
        hn.call(this, null, i, r, a, o, s, l, n, c),
        this.image = {
            width: t,
            height: e
        },
        this.magFilter = void 0 !== o ? o : vt,
        this.minFilter = void 0 !== s ? s : vt,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function Jo(t) {
        Ui.call(this),
        this.type = "WireframeGeometry";
        var e, n, i, r, a, o, s, c, l, h, u = [], p = [0, 0], d = {}, f = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var m = t.faces;
            for (e = 0,
            i = m.length; e < i; e++) {
                var g = m[e];
                for (n = 0; n < 3; n++)
                    s = g[f[n]],
                    c = g[f[(n + 1) % 3]],
                    p[0] = Math.min(s, c),
                    p[1] = Math.max(s, c),
                    void 0 === d[l = p[0] + "," + p[1]] && (d[l] = {
                        index1: p[0],
                        index2: p[1]
                    })
            }
            for (l in d)
                o = d[l],
                h = t.vertices[o.index1],
                u.push(h.x, h.y, h.z),
                h = t.vertices[o.index2],
                u.push(h.x, h.y, h.z)
        } else if (t && t.isBufferGeometry) {
            var v, y, x, b, w, _;
            if (h = new De,
            null !== t.index) {
                for (v = t.attributes.position,
                y = t.index,
                0 === (x = t.groups).length && (x = [{
                    start: 0,
                    count: y.count,
                    materialIndex: 0
                }]),
                r = 0,
                a = x.length; r < a; ++r)
                    for (i = (e = (b = x[r]).start) + b.count; e < i; e += 3)
                        for (n = 0; n < 3; n++)
                            s = y.getX(e + n),
                            c = y.getX(e + (n + 1) % 3),
                            p[0] = Math.min(s, c),
                            p[1] = Math.max(s, c),
                            void 0 === d[l = p[0] + "," + p[1]] && (d[l] = {
                                index1: p[0],
                                index2: p[1]
                            });
                for (l in d)
                    o = d[l],
                    h.fromBufferAttribute(v, o.index1),
                    u.push(h.x, h.y, h.z),
                    h.fromBufferAttribute(v, o.index2),
                    u.push(h.x, h.y, h.z)
            } else
                for (e = 0,
                i = (v = t.attributes.position).count / 3; e < i; e++)
                    for (n = 0; n < 3; n++)
                        w = 3 * e + n,
                        h.fromBufferAttribute(v, w),
                        u.push(h.x, h.y, h.z),
                        _ = 3 * e + (n + 1) % 3,
                        h.fromBufferAttribute(v, _),
                        u.push(h.x, h.y, h.z)
        }
        this.addAttribute("position", new wi(u,3))
    }
    function Zo(t, e, n) {
        pi.call(this),
        this.type = "ParametricGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: n
        },
        this.fromBufferGeometry(new Qo(t,e,n)),
        this.mergeVertices()
    }
    function Qo(t, e, n) {
        Ui.call(this),
        this.type = "ParametricBufferGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: n
        };
        var i, r, a = [], o = [], s = [], c = [], l = new De, h = new De, u = new De, p = new De, d = new De;
        t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var f = e + 1;
        for (i = 0; i <= n; i++) {
            var m = i / n;
            for (r = 0; r <= e; r++) {
                var g = r / e;
                t(g, m, h),
                o.push(h.x, h.y, h.z),
                0 <= g - 1e-5 ? (t(g - 1e-5, m, u),
                p.subVectors(h, u)) : (t(1e-5 + g, m, u),
                p.subVectors(u, h)),
                0 <= m - 1e-5 ? (t(g, m - 1e-5, u),
                d.subVectors(h, u)) : (t(g, 1e-5 + m, u),
                d.subVectors(u, h)),
                l.crossVectors(p, d).normalize(),
                s.push(l.x, l.y, l.z),
                c.push(g, m)
            }
        }
        for (i = 0; i < n; i++)
            for (r = 0; r < e; r++) {
                var v = i * f + r
                  , y = i * f + r + 1
                  , x = (i + 1) * f + r + 1
                  , b = (i + 1) * f + r;
                a.push(v, y, b),
                a.push(y, x, b)
            }
        this.setIndex(a),
        this.addAttribute("position", new wi(o,3)),
        this.addAttribute("normal", new wi(s,3)),
        this.addAttribute("uv", new wi(c,2))
    }
    function Ko(t, e, n, i) {
        pi.call(this),
        this.type = "PolyhedronGeometry",
        this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: i
        },
        this.fromBufferGeometry(new $o(t,e,n,i)),
        this.mergeVertices()
    }
    function $o(i, a, t, e) {
        Ui.call(this),
        this.type = "PolyhedronBufferGeometry",
        this.parameters = {
            vertices: i,
            indices: a,
            radius: t,
            detail: e
        },
        t = t || 1;
        var h = []
          , u = [];
        function o(t, e, n, i) {
            var r, a, o = Math.pow(2, i), s = [];
            for (r = 0; r <= o; r++) {
                s[r] = [];
                var c = t.clone().lerp(n, r / o)
                  , l = e.clone().lerp(n, r / o)
                  , h = o - r;
                for (a = 0; a <= h; a++)
                    s[r][a] = 0 === a && r === o ? c : c.clone().lerp(l, a / h)
            }
            for (r = 0; r < o; r++)
                for (a = 0; a < 2 * (o - r) - 1; a++) {
                    var u = Math.floor(a / 2);
                    a % 2 == 0 ? (p(s[r][u + 1]),
                    p(s[r + 1][u]),
                    p(s[r][u])) : (p(s[r][u + 1]),
                    p(s[r + 1][u + 1]),
                    p(s[r + 1][u]))
                }
        }
        function p(t) {
            h.push(t.x, t.y, t.z)
        }
        function s(t, e) {
            var n = 3 * t;
            e.x = i[0 + n],
            e.y = i[1 + n],
            e.z = i[2 + n]
        }
        function d(t, e, n, i) {
            i < 0 && 1 === t.x && (u[e] = t.x - 1),
            0 === n.x && 0 === n.z && (u[e] = i / 2 / Math.PI + .5)
        }
        function f(t) {
            return Math.atan2(t.z, -t.x)
        }
        !function(t) {
            for (var e = new De, n = new De, i = new De, r = 0; r < a.length; r += 3)
                s(a[r + 0], e),
                s(a[r + 1], n),
                s(a[r + 2], i),
                o(e, n, i, t)
        }(e = e || 0),
        function(t) {
            for (var e = new De, n = 0; n < h.length; n += 3)
                e.x = h[n + 0],
                e.y = h[n + 1],
                e.z = h[n + 2],
                e.normalize().multiplyScalar(t),
                h[n + 0] = e.x,
                h[n + 1] = e.y,
                h[n + 2] = e.z
        }(t),
        function() {
            for (var t = new De, e = 0; e < h.length; e += 3) {
                t.x = h[e + 0],
                t.y = h[e + 1],
                t.z = h[e + 2];
                var n = f(t) / 2 / Math.PI + .5
                  , i = (r = t,
                Math.atan2(-r.y, Math.sqrt(r.x * r.x + r.z * r.z)) / Math.PI + .5);
                u.push(n, 1 - i)
            }
            var r;
            (function() {
                for (var t = new De, e = new De, n = new De, i = new De, r = new Oe, a = new Oe, o = new Oe, s = 0, c = 0; s < h.length; s += 9,
                c += 6) {
                    t.set(h[s + 0], h[s + 1], h[s + 2]),
                    e.set(h[s + 3], h[s + 4], h[s + 5]),
                    n.set(h[s + 6], h[s + 7], h[s + 8]),
                    r.set(u[c + 0], u[c + 1]),
                    a.set(u[c + 2], u[c + 3]),
                    o.set(u[c + 4], u[c + 5]),
                    i.copy(t).add(e).add(n).divideScalar(3);
                    var l = f(i);
                    d(r, c + 0, t, l),
                    d(a, c + 2, e, l),
                    d(o, c + 4, n, l)
                }
            }
            )(),
            function() {
                for (var t = 0; t < u.length; t += 6) {
                    var e = u[t + 0]
                      , n = u[t + 2]
                      , i = u[t + 4]
                      , r = Math.max(e, n, i)
                      , a = Math.min(e, n, i);
                    .9 < r && a < .1 && (e < .2 && (u[t + 0] += 1),
                    n < .2 && (u[t + 2] += 1),
                    i < .2 && (u[t + 4] += 1))
                }
            }()
        }(),
        this.addAttribute("position", new wi(h,3)),
        this.addAttribute("normal", new wi(h.slice(),3)),
        this.addAttribute("uv", new wi(u,2)),
        0 === e ? this.computeVertexNormals() : this.normalizeNormals()
    }
    function ts(t, e) {
        pi.call(this),
        this.type = "TetrahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new es(t,e)),
        this.mergeVertices()
    }
    function es(t, e) {
        $o.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e),
        this.type = "TetrahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function ns(t, e) {
        pi.call(this),
        this.type = "OctahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new is(t,e)),
        this.mergeVertices()
    }
    function is(t, e) {
        $o.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e),
        this.type = "OctahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function rs(t, e) {
        pi.call(this),
        this.type = "IcosahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new as(t,e)),
        this.mergeVertices()
    }
    function as(t, e) {
        var n = (1 + Math.sqrt(5)) / 2;
        $o.call(this, [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e),
        this.type = "IcosahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function os(t, e) {
        pi.call(this),
        this.type = "DodecahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new ss(t,e)),
        this.mergeVertices()
    }
    function ss(t, e) {
        var n = (1 + Math.sqrt(5)) / 2
          , i = 1 / n;
        $o.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e),
        this.type = "DodecahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function cs(t, e, n, i, r, a) {
        pi.call(this),
        this.type = "TubeGeometry",
        this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: i,
            closed: r
        },
        void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
        var o = new ls(t,e,n,i,r);
        this.tangents = o.tangents,
        this.normals = o.normals,
        this.binormals = o.binormals,
        this.fromBufferGeometry(o),
        this.mergeVertices()
    }
    function ls(o, s, c, l, t) {
        Ui.call(this),
        this.type = "TubeBufferGeometry",
        this.parameters = {
            path: o,
            tubularSegments: s,
            radius: c,
            radialSegments: l,
            closed: t
        },
        s = s || 64,
        c = c || 1,
        l = l || 8,
        t = t || !1;
        var h = o.computeFrenetFrames(s, t);
        this.tangents = h.tangents,
        this.normals = h.normals,
        this.binormals = h.binormals;
        var r, u, p = new De, d = new De, e = new Oe, f = new De, m = [], g = [], n = [], a = [];
        function i(t) {
            f = o.getPointAt(t / s, f);
            var e = h.normals[t]
              , n = h.binormals[t];
            for (u = 0; u <= l; u++) {
                var i = u / l * Math.PI * 2
                  , r = Math.sin(i)
                  , a = -Math.cos(i);
                d.x = a * e.x + r * n.x,
                d.y = a * e.y + r * n.y,
                d.z = a * e.z + r * n.z,
                d.normalize(),
                g.push(d.x, d.y, d.z),
                p.x = f.x + c * d.x,
                p.y = f.y + c * d.y,
                p.z = f.z + c * d.z,
                m.push(p.x, p.y, p.z)
            }
        }
        !function() {
            for (r = 0; r < s; r++)
                i(r);
            i(!1 === t ? s : 0),
            function() {
                for (r = 0; r <= s; r++)
                    for (u = 0; u <= l; u++)
                        e.x = r / s,
                        e.y = u / l,
                        n.push(e.x, e.y)
            }(),
            function() {
                for (u = 1; u <= s; u++)
                    for (r = 1; r <= l; r++) {
                        var t = (l + 1) * (u - 1) + (r - 1)
                          , e = (l + 1) * u + (r - 1)
                          , n = (l + 1) * u + r
                          , i = (l + 1) * (u - 1) + r;
                        a.push(t, e, i),
                        a.push(e, n, i)
                    }
            }()
        }(),
        this.setIndex(a),
        this.addAttribute("position", new wi(m,3)),
        this.addAttribute("normal", new wi(g,3)),
        this.addAttribute("uv", new wi(n,2))
    }
    function hs(t, e, n, i, r, a, o) {
        pi.call(this),
        this.type = "TorusKnotGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: a
        },
        void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
        this.fromBufferGeometry(new us(t,e,n,i,r,a)),
        this.mergeVertices()
    }
    function us(t, e, n, i, r, a) {
        Ui.call(this),
        this.type = "TorusKnotBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: a
        },
        t = t || 1,
        e = e || .4,
        n = Math.floor(n) || 64,
        i = Math.floor(i) || 8,
        r = r || 2,
        a = a || 3;
        var o, s, c = [], l = [], h = [], u = [], p = new De, d = new De, f = new De, m = new De, g = new De, v = new De, y = new De;
        for (o = 0; o <= n; ++o) {
            var x = o / n * r * Math.PI * 2;
            for (A(x, r, a, t, f),
            A(.01 + x, r, a, t, m),
            v.subVectors(m, f),
            y.addVectors(m, f),
            g.crossVectors(v, y),
            y.crossVectors(g, v),
            g.normalize(),
            y.normalize(),
            s = 0; s <= i; ++s) {
                var b = s / i * Math.PI * 2
                  , w = -e * Math.cos(b)
                  , _ = e * Math.sin(b);
                p.x = f.x + (w * y.x + _ * g.x),
                p.y = f.y + (w * y.y + _ * g.y),
                p.z = f.z + (w * y.z + _ * g.z),
                l.push(p.x, p.y, p.z),
                d.subVectors(p, f).normalize(),
                h.push(d.x, d.y, d.z),
                u.push(o / n),
                u.push(s / i)
            }
        }
        for (s = 1; s <= n; s++)
            for (o = 1; o <= i; o++) {
                var M = (i + 1) * (s - 1) + (o - 1)
                  , S = (i + 1) * s + (o - 1)
                  , T = (i + 1) * s + o
                  , E = (i + 1) * (s - 1) + o;
                c.push(M, S, E),
                c.push(S, T, E)
            }
        function A(t, e, n, i, r) {
            var a = Math.cos(t)
              , o = Math.sin(t)
              , s = n / e * t
              , c = Math.cos(s);
            r.x = i * (2 + c) * .5 * a,
            r.y = i * (2 + c) * o * .5,
            r.z = i * Math.sin(s) * .5
        }
        this.setIndex(c),
        this.addAttribute("position", new wi(l,3)),
        this.addAttribute("normal", new wi(h,3)),
        this.addAttribute("uv", new wi(u,2))
    }
    function ps(t, e, n, i, r) {
        pi.call(this),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        },
        this.fromBufferGeometry(new ds(t,e,n,i,r)),
        this.mergeVertices()
    }
    function ds(t, e, n, i, r) {
        Ui.call(this),
        this.type = "TorusBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        },
        t = t || 1,
        e = e || .4,
        n = Math.floor(n) || 8,
        i = Math.floor(i) || 6,
        r = r || 2 * Math.PI;
        var a, o, s = [], c = [], l = [], h = [], u = new De, p = new De, d = new De;
        for (a = 0; a <= n; a++)
            for (o = 0; o <= i; o++) {
                var f = o / i * r
                  , m = a / n * Math.PI * 2;
                p.x = (t + e * Math.cos(m)) * Math.cos(f),
                p.y = (t + e * Math.cos(m)) * Math.sin(f),
                p.z = e * Math.sin(m),
                c.push(p.x, p.y, p.z),
                u.x = t * Math.cos(f),
                u.y = t * Math.sin(f),
                d.subVectors(p, u).normalize(),
                l.push(d.x, d.y, d.z),
                h.push(o / i),
                h.push(a / n)
            }
        for (a = 1; a <= n; a++)
            for (o = 1; o <= i; o++) {
                var g = (i + 1) * a + o - 1
                  , v = (i + 1) * (a - 1) + o - 1
                  , y = (i + 1) * (a - 1) + o
                  , x = (i + 1) * a + o;
                s.push(g, v, x),
                s.push(v, y, x)
            }
        this.setIndex(s),
        this.addAttribute("position", new wi(c,3)),
        this.addAttribute("normal", new wi(l,3)),
        this.addAttribute("uv", new wi(h,2))
    }
    Object.assign(Lo.prototype, {
        isFogExp2: !0,
        clone: function() {
            return new Lo(this.color,this.density)
        },
        toJSON: function() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            }
        }
    }),
    Object.assign(Po.prototype, {
        isFog: !0,
        clone: function() {
            return new Po(this.color,this.near,this.far)
        },
        toJSON: function() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            }
        }
    }),
    Ro.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: Ro,
        isScene: !0,
        copy: function(t, e) {
            return ii.prototype.copy.call(this, t, e),
            null !== t.background && (this.background = t.background.clone()),
            null !== t.fog && (this.fog = t.fog.clone()),
            null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
            this.autoUpdate = t.autoUpdate,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this
        },
        toJSON: function(t) {
            var e = ii.prototype.toJSON.call(this, t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)),
            null !== this.fog && (e.object.fog = this.fog.toJSON()),
            e
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Object.defineProperty(Co.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(Co.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function() {},
        setArray: function(t) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== t ? t.length / this.stride : 0,
            this.array = t,
            this
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array),
            this.count = t.count,
            this.stride = t.stride,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, n) {
            t *= this.stride,
            n *= e.stride;
            for (var i = 0, r = this.stride; i < r; i++)
                this.array[t + i] = e.array[n + i];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(t) {
            return this.onUploadCallback = t,
            this
        }
    }),
    Object.defineProperties(Oo.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    }),
    Object.assign(Oo.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e,
            this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e,
            this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e,
            this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e,
            this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, n) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this
        },
        setXYZ: function(t, e, n, i) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this.data.array[t + 2] = i,
            this
        },
        setXYZW: function(t, e, n, i, r) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this.data.array[t + 2] = i,
            this.data.array[t + 3] = r,
            this
        }
    }),
    ((Io.prototype = Object.create(ji.prototype)).constructor = Io).prototype.isSpriteMaterial = !0,
    Io.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.rotation = t.rotation,
        this.sizeAttenuation = t.sizeAttenuation,
        this
    }
    ,
    Do.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: Do,
        isSprite: !0,
        raycast: function() {
            var c = new De
              , l = new De
              , h = new De
              , o = new Oe
              , s = new Oe
              , u = new bn
              , p = new De
              , d = new De
              , f = new De
              , m = new Oe
              , g = new Oe
              , v = new Oe;
            function y(t, e, n, i, r, a) {
                o.subVectors(t, n).addScalar(.5).multiply(i),
                void 0 !== r ? (s.x = a * o.x - r * o.y,
                s.y = r * o.x + a * o.y) : s.copy(o),
                t.copy(e),
                t.x += s.x,
                t.y += s.y,
                t.applyMatrix4(u)
            }
            return function(t, e) {
                l.setFromMatrixScale(this.matrixWorld),
                u.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld),
                h.setFromMatrixPosition(this.modelViewMatrix);
                var n, i, r = this.material.rotation;
                0 !== r && (i = Math.cos(r),
                n = Math.sin(r));
                var a = this.center;
                y(p.set(-.5, -.5, 0), h, a, l, n, i),
                y(d.set(.5, -.5, 0), h, a, l, n, i),
                y(f.set(.5, .5, 0), h, a, l, n, i),
                m.set(0, 0),
                g.set(1, 0),
                v.set(1, 1);
                var o = t.ray.intersectTriangle(p, d, f, !1, c);
                if (null !== o || (y(d.set(-.5, .5, 0), h, a, l, n, i),
                g.set(0, 1),
                null !== (o = t.ray.intersectTriangle(p, f, d, !1, c)))) {
                    var s = t.ray.origin.distanceTo(c);
                    s < t.near || s > t.far || e.push({
                        distance: s,
                        point: c.clone(),
                        uv: br.getUV(c, p, d, f, m, g, v, new Oe),
                        face: null,
                        object: this
                    })
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        },
        copy: function(t) {
            return ii.prototype.copy.call(this, t),
            void 0 !== t.center && this.center.copy(t.center),
            this
        }
    }),
    No.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: No,
        copy: function(t) {
            ii.prototype.copy.call(this, t, !1);
            for (var e = t.levels, n = 0, i = e.length; n < i; n++) {
                var r = e[n];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0),
            e = Math.abs(e);
            for (var n = this.levels, i = 0; i < n.length && !(e < n[i].distance); i++)
                ;
            n.splice(i, 0, {
                distance: e,
                object: t
            }),
            this.add(t)
        },
        getObjectForDistance: function(t) {
            for (var e = this.levels, n = 1, i = e.length; n < i && !(t < e[n].distance); n++)
                ;
            return e[n - 1].object
        },
        raycast: (co = new De,
        function(t, e) {
            co.setFromMatrixPosition(this.matrixWorld);
            var n = t.ray.origin.distanceTo(co);
            this.getObjectForDistance(n).raycast(t, e)
        }
        ),
        update: (oo = new De,
        so = new De,
        function(t) {
            var e = this.levels;
            if (1 < e.length) {
                oo.setFromMatrixPosition(t.matrixWorld),
                so.setFromMatrixPosition(this.matrixWorld);
                var n = oo.distanceTo(so);
                e[0].object.visible = !0;
                for (var i = 1, r = e.length; i < r && n >= e[i].distance; i++)
                    e[i - 1].object.visible = !1,
                    e[i].object.visible = !0;
                for (; i < r; i++)
                    e[i].object.visible = !1
            }
        }
        ),
        toJSON: function(t) {
            var e = ii.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var n = this.levels, i = 0, r = n.length; i < r; i++) {
                var a = n[i];
                e.object.levels.push({
                    object: a.object.uuid,
                    distance: a.distance
                })
            }
            return e
        }
    }),
    zo.prototype = Object.assign(Object.create(_r.prototype), {
        constructor: zo,
        isSkinnedMesh: !0,
        bind: function(t, e) {
            this.skeleton = t,
            void 0 === e && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            e = this.matrixWorld),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.getInverse(e)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            for (var t = new un, e = this.geometry.attributes.skinWeight, n = 0, i = e.count; n < i; n++) {
                t.x = e.getX(n),
                t.y = e.getY(n),
                t.z = e.getZ(n),
                t.w = e.getW(n);
                var r = 1 / t.manhattanLength();
                r != 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0),
                e.setXYZW(n, t.x, t.y, t.z, t.w)
            }
        },
        updateMatrixWorld: function(t) {
            _r.prototype.updateMatrixWorld.call(this, t),
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Object.assign(Bo.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var n = new bn;
                this.bones[t] && n.getInverse(this.bones[t].matrixWorld),
                this.boneInverses.push(n)
            }
        },
        pose: function() {
            var t, e, n;
            for (e = 0,
            n = this.bones.length; e < n; e++)
                (t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (e = 0,
            n = this.bones.length; e < n; e++)
                (t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld),
                t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld),
                t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: (lo = new bn,
        ho = new bn,
        function() {
            for (var t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture, r = 0, a = t.length; r < a; r++) {
                var o = t[r] ? t[r].matrixWorld : ho;
                lo.multiplyMatrices(o, e[r]),
                lo.toArray(n, 16 * r)
            }
            void 0 !== i && (i.needsUpdate = !0)
        }
        ),
        clone: function() {
            return new Bo(this.bones,this.boneInverses)
        },
        getBoneByName: function(t) {
            for (var e = 0, n = this.bones.length; e < n; e++) {
                var i = this.bones[e];
                if (i.name === t)
                    return i
            }
        }
    }),
    Uo.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: Uo,
        isBone: !0
    }),
    ((Go.prototype = Object.create(ji.prototype)).constructor = Go).prototype.isLineBasicMaterial = !0,
    Go.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.linewidth = t.linewidth,
        this.linecap = t.linecap,
        this.linejoin = t.linejoin,
        this
    }
    ,
    Fo.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: Fo,
        isLine: !0,
        computeLineDistances: (mo = new De,
        go = new De,
        function() {
            var t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    for (var e = t.attributes.position, n = [0], i = 1, r = e.count; i < r; i++)
                        mo.fromBufferAttribute(e, i - 1),
                        go.fromBufferAttribute(e, i),
                        n[i] = n[i - 1],
                        n[i] += mo.distanceTo(go);
                    t.addAttribute("lineDistance", new wi(n,1))
                } else
                    console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry) {
                var a = t.vertices;
                for ((n = t.lineDistances)[0] = 0,
                i = 1,
                r = a.length; i < r; i++)
                    n[i] = n[i - 1],
                    n[i] += a[i - 1].distanceTo(a[i])
            }
            return this
        }
        ),
        raycast: (uo = new bn,
        po = new xr,
        fo = new vn,
        function(t, e) {
            var n = t.linePrecision
              , i = this.geometry
              , r = this.matrixWorld;
            if (null === i.boundingSphere && i.computeBoundingSphere(),
            fo.copy(i.boundingSphere),
            fo.applyMatrix4(r),
            fo.radius += n,
            !1 !== t.ray.intersectsSphere(fo)) {
                uo.getInverse(r),
                po.copy(t.ray).applyMatrix4(uo);
                var a = n / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                  , o = a * a
                  , s = new De
                  , c = new De
                  , l = new De
                  , h = new De
                  , u = this && this.isLineSegments ? 2 : 1;
                if (i.isBufferGeometry) {
                    var p = i.index
                      , d = i.attributes.position.array;
                    if (null !== p)
                        for (var f = p.array, m = 0, g = f.length - 1; m < g; m += u) {
                            var v = f[m]
                              , y = f[m + 1];
                            s.fromArray(d, 3 * v),
                            c.fromArray(d, 3 * y),
                            o < po.distanceSqToSegment(s, c, h, l) || (h.applyMatrix4(this.matrixWorld),
                            (w = t.ray.origin.distanceTo(h)) < t.near || w > t.far || e.push({
                                distance: w,
                                point: l.clone().applyMatrix4(this.matrixWorld),
                                index: m,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                        }
                    else
                        for (m = 0,
                        g = d.length / 3 - 1; m < g; m += u)
                            s.fromArray(d, 3 * m),
                            c.fromArray(d, 3 * m + 3),
                            o < po.distanceSqToSegment(s, c, h, l) || (h.applyMatrix4(this.matrixWorld),
                            (w = t.ray.origin.distanceTo(h)) < t.near || w > t.far || e.push({
                                distance: w,
                                point: l.clone().applyMatrix4(this.matrixWorld),
                                index: m,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                } else if (i.isGeometry) {
                    var x = i.vertices
                      , b = x.length;
                    for (m = 0; m < b - 1; m += u) {
                        var w;
                        o < po.distanceSqToSegment(x[m], x[m + 1], h, l) || (h.applyMatrix4(this.matrixWorld),
                        (w = t.ray.origin.distanceTo(h)) < t.near || w > t.far || e.push({
                            distance: w,
                            point: l.clone().applyMatrix4(this.matrixWorld),
                            index: m,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
                    }
                }
            }
        }
        ),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    ko.prototype = Object.assign(Object.create(Fo.prototype), {
        constructor: ko,
        isLineSegments: !0,
        computeLineDistances: (vo = new De,
        yo = new De,
        function() {
            var t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    for (var e = t.attributes.position, n = [], i = 0, r = e.count; i < r; i += 2)
                        vo.fromBufferAttribute(e, i),
                        yo.fromBufferAttribute(e, i + 1),
                        n[i] = 0 === i ? 0 : n[i - 1],
                        n[i + 1] = n[i] + vo.distanceTo(yo);
                    t.addAttribute("lineDistance", new wi(n,1))
                } else
                    console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry) {
                var a = t.vertices;
                for (n = t.lineDistances,
                i = 0,
                r = a.length; i < r; i += 2)
                    vo.copy(a[i]),
                    yo.copy(a[i + 1]),
                    n[i] = 0 === i ? 0 : n[i - 1],
                    n[i + 1] = n[i] + vo.distanceTo(yo)
            }
            return this
        }
        )
    }),
    Ho.prototype = Object.assign(Object.create(Fo.prototype), {
        constructor: Ho,
        isLineLoop: !0
    }),
    ((Vo.prototype = Object.create(ji.prototype)).constructor = Vo).prototype.isPointsMaterial = !0,
    Vo.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.size = t.size,
        this.sizeAttenuation = t.sizeAttenuation,
        this.morphTargets = t.morphTargets,
        this
    }
    ,
    jo.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: jo,
        isPoints: !0,
        raycast: (xo = new bn,
        bo = new xr,
        wo = new vn,
        function(r, a) {
            var o = this
              , t = this.geometry
              , s = this.matrixWorld
              , e = r.params.Points.threshold;
            if (null === t.boundingSphere && t.computeBoundingSphere(),
            wo.copy(t.boundingSphere),
            wo.applyMatrix4(s),
            wo.radius += e,
            !1 !== r.ray.intersectsSphere(wo)) {
                xo.getInverse(s),
                bo.copy(r.ray).applyMatrix4(xo);
                var n = e / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                  , c = n * n
                  , i = new De
                  , l = new De;
                if (t.isBufferGeometry) {
                    var h = t.index
                      , u = t.attributes.position.array;
                    if (null !== h)
                        for (var p = h.array, d = 0, f = p.length; d < f; d++) {
                            var m = p[d];
                            i.fromArray(u, 3 * m),
                            y(i, m)
                        }
                    else {
                        d = 0;
                        for (var g = u.length / 3; d < g; d++)
                            i.fromArray(u, 3 * d),
                            y(i, d)
                    }
                } else {
                    var v = t.vertices;
                    for (d = 0,
                    g = v.length; d < g; d++)
                        y(v[d], d)
                }
            }
            function y(t, e) {
                var n = bo.distanceSqToPoint(t);
                if (n < c) {
                    bo.closestPointToPoint(t, l),
                    l.applyMatrix4(s);
                    var i = r.ray.origin.distanceTo(l);
                    if (i < r.near || i > r.far)
                        return;
                    a.push({
                        distance: i,
                        distanceToRay: Math.sqrt(n),
                        point: l.clone(),
                        index: e,
                        face: null,
                        object: o
                    })
                }
            }
        }
        ),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Wo.prototype = Object.assign(Object.create(hn.prototype), {
        constructor: Wo,
        isVideoTexture: !0,
        update: function() {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }),
    ((qo.prototype = Object.create(hn.prototype)).constructor = qo).prototype.isCompressedTexture = !0,
    ((Xo.prototype = Object.create(hn.prototype)).constructor = Xo).prototype.isCanvasTexture = !0,
    ((Yo.prototype = Object.create(hn.prototype)).constructor = Yo).prototype.isDepthTexture = !0,
    (Jo.prototype = Object.create(Ui.prototype)).constructor = Jo,
    (Zo.prototype = Object.create(pi.prototype)).constructor = Zo,
    (Qo.prototype = Object.create(Ui.prototype)).constructor = Qo,
    (Ko.prototype = Object.create(pi.prototype)).constructor = Ko,
    ($o.prototype = Object.create(Ui.prototype)).constructor = $o,
    (ts.prototype = Object.create(pi.prototype)).constructor = ts,
    (es.prototype = Object.create($o.prototype)).constructor = es,
    (ns.prototype = Object.create(pi.prototype)).constructor = ns,
    (is.prototype = Object.create($o.prototype)).constructor = is,
    (rs.prototype = Object.create(pi.prototype)).constructor = rs,
    (as.prototype = Object.create($o.prototype)).constructor = as,
    (os.prototype = Object.create(pi.prototype)).constructor = os,
    (ss.prototype = Object.create($o.prototype)).constructor = ss,
    (cs.prototype = Object.create(pi.prototype)).constructor = cs,
    ((ls.prototype = Object.create(Ui.prototype)).constructor = ls).prototype.toJSON = function() {
        var t = Ui.prototype.toJSON.call(this);
        return t.path = this.parameters.path.toJSON(),
        t
    }
    ,
    (hs.prototype = Object.create(pi.prototype)).constructor = hs,
    (us.prototype = Object.create(Ui.prototype)).constructor = us,
    (ps.prototype = Object.create(pi.prototype)).constructor = ps,
    (ds.prototype = Object.create(Ui.prototype)).constructor = ds;
    var fs = function(t, e, n) {
        n = n || 2;
        var i, r, a, o, s, c, l, h = e && e.length, u = h ? e[0] * n : t.length, p = ms(t, 0, u, n, !0), d = [];
        if (!p)
            return d;
        if (h && (p = function(t, e, n, i) {
            var r, a, o, s, c, l = [];
            for (r = 0,
            a = e.length; r < a; r++)
                o = e[r] * i,
                s = r < a - 1 ? e[r + 1] * i : t.length,
                (c = ms(t, o, s, i, !1)) === c.next && (c.steiner = !0),
                l.push(Ts(c));
            for (l.sort(_s),
            r = 0; r < l.length; r++)
                Ms(l[r], n),
                n = gs(n, n.next);
            return n
        }(t, e, p, n)),
        t.length > 80 * n) {
            i = a = t[0],
            r = o = t[1];
            for (var f = n; f < u; f += n)
                (s = t[f]) < i && (i = s),
                (c = t[f + 1]) < r && (r = c),
                a < s && (a = s),
                o < c && (o = c);
            l = 0 !== (l = Math.max(a - i, o - r)) ? 1 / l : 0
        }
        return vs(p, d, n, i, r, l),
        d
    };
    function ms(t, e, n, i, r) {
        var a, o;
        if (r === 0 < function(t, e, n, i) {
            for (var r = 0, a = e, o = n - i; a < n; a += i)
                r += (t[o] - t[a]) * (t[a + 1] + t[o + 1]),
                o = a;
            return r
        }(t, e, n, i))
            for (a = e; a < n; a += i)
                o = Os(a, t[a], t[a + 1], o);
        else
            for (a = n - i; e <= a; a -= i)
                o = Os(a, t[a], t[a + 1], o);
        return o && Ls(o, o.next) && (Is(o),
        o = o.next),
        o
    }
    function gs(t, e) {
        if (!t)
            return t;
        e || (e = t);
        var n, i = t;
        do {
            if (n = !1,
            i.steiner || !Ls(i, i.next) && 0 !== As(i.prev, i, i.next))
                i = i.next;
            else {
                if (Is(i),
                (i = e = i.prev) === i.next)
                    break;
                n = !0
            }
        } while (n || i !== e);return e
    }
    function vs(t, e, n, i, r, a, o) {
        if (t) {
            !o && a && function(t, e, n, i) {
                var r = t;
                for (; null === r.z && (r.z = Ss(r.x, r.y, e, n, i)),
                r.prevZ = r.prev,
                r.nextZ = r.next,
                r = r.next,
                r !== t; )
                    ;
                r.prevZ.nextZ = null,
                r.prevZ = null,
                function(t) {
                    var e, n, i, r, a, o, s, c, l = 1;
                    do {
                        for (n = t,
                        a = t = null,
                        o = 0; n; ) {
                            for (o++,
                            i = n,
                            e = s = 0; e < l && (s++,
                            i = i.nextZ); e++)
                                ;
                            for (c = l; 0 < s || 0 < c && i; )
                                0 !== s && (0 === c || !i || n.z <= i.z) ? (n = (r = n).nextZ,
                                s--) : (i = (r = i).nextZ,
                                c--),
                                a ? a.nextZ = r : t = r,
                                r.prevZ = a,
                                a = r;
                            n = i
                        }
                        a.nextZ = null,
                        l *= 2
                    } while (1 < o)
                }(r)
            }(t, i, r, a);
            for (var s, c, l = t; t.prev !== t.next; )
                if (s = t.prev,
                c = t.next,
                a ? xs(t, i, r, a) : ys(t))
                    e.push(s.i / n),
                    e.push(t.i / n),
                    e.push(c.i / n),
                    Is(t),
                    t = c.next,
                    l = c.next;
                else if ((t = c) === l) {
                    o ? 1 === o ? vs(t = bs(t, e, n), e, n, i, r, a, 2) : 2 === o && ws(t, e, n, i, r, a) : vs(gs(t), e, n, i, r, a, 1);
                    break
                }
        }
    }
    function ys(t) {
        var e = t.prev
          , n = t
          , i = t.next;
        if (0 <= As(e, n, i))
            return !1;
        for (var r = t.next.next; r !== t.prev; ) {
            if (Es(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && 0 <= As(r.prev, r, r.next))
                return !1;
            r = r.next
        }
        return !0
    }
    function xs(t, e, n, i) {
        var r = t.prev
          , a = t
          , o = t.next;
        if (0 <= As(r, a, o))
            return !1;
        for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, l = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, h = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = Ss(s, c, e, n, i), p = Ss(l, h, e, n, i), d = t.nextZ; d && d.z <= p; ) {
            if (d !== t.prev && d !== t.next && Es(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && 0 <= As(d.prev, d, d.next))
                return !1;
            d = d.nextZ
        }
        for (d = t.prevZ; d && d.z >= u; ) {
            if (d !== t.prev && d !== t.next && Es(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && 0 <= As(d.prev, d, d.next))
                return !1;
            d = d.prevZ
        }
        return !0
    }
    function bs(t, e, n) {
        var i = t;
        do {
            var r = i.prev
              , a = i.next.next;
            !Ls(r, a) && Ps(r, i, i.next, a) && Rs(r, a) && Rs(a, r) && (e.push(r.i / n),
            e.push(i.i / n),
            e.push(a.i / n),
            Is(i),
            Is(i.next),
            i = t = a),
            i = i.next
        } while (i !== t);return i
    }
    function ws(t, e, n, i, r, a) {
        var o, s, c = t;
        do {
            for (var l = c.next.next; l !== c.prev; ) {
                if (c.i !== l.i && (s = l,
                (o = c).next.i !== s.i && o.prev.i !== s.i && !function(t, e) {
                    var n = t;
                    do {
                        if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Ps(n, n.next, t, e))
                            return !0;
                        n = n.next
                    } while (n !== t);return !1
                }(o, s) && Rs(o, s) && Rs(s, o) && function(t, e) {
                    var n = t
                      , i = !1
                      , r = (t.x + e.x) / 2
                      , a = (t.y + e.y) / 2;
                    for (; n.y > a != n.next.y > a && n.next.y !== n.y && r < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i),
                    n = n.next,
                    n !== t; )
                        ;
                    return i
                }(o, s))) {
                    var h = Cs(c, l);
                    return c = gs(c, c.next),
                    h = gs(h, h.next),
                    vs(c, e, n, i, r, a),
                    void vs(h, e, n, i, r, a)
                }
                l = l.next
            }
            c = c.next
        } while (c !== t)
    }
    function _s(t, e) {
        return t.x - e.x
    }
    function Ms(t, e) {
        if (e = function(t, e) {
            var n, i = e, r = t.x, a = t.y, o = -1 / 0;
            do {
                if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
                    var s = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                    if (s <= r && o < s) {
                        if ((o = s) === r) {
                            if (a === i.y)
                                return i;
                            if (a === i.next.y)
                                return i.next
                        }
                        n = i.x < i.next.x ? i : i.next
                    }
                }
                i = i.next
            } while (i !== e);if (!n)
                return null;
            if (r === o)
                return n.prev;
            var c, l = n, h = n.x, u = n.y, p = 1 / 0;
            i = n.next;
            for (; i !== l; )
                r >= i.x && i.x >= h && r !== i.x && Es(a < u ? r : o, a, h, u, a < u ? o : r, a, i.x, i.y) && ((c = Math.abs(a - i.y) / (r - i.x)) < p || c === p && i.x > n.x) && Rs(i, t) && (n = i,
                p = c),
                i = i.next;
            return n
        }(t, e)) {
            var n = Cs(e, t);
            gs(n, n.next)
        }
    }
    function Ss(t, e, n, i, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }
    function Ts(t) {
        for (var e = t, n = t; e.x < n.x && (n = e),
        (e = e.next) !== t; )
            ;
        return n
    }
    function Es(t, e, n, i, r, a, o, s) {
        return 0 <= (r - o) * (e - s) - (t - o) * (a - s) && 0 <= (t - o) * (i - s) - (n - o) * (e - s) && 0 <= (n - o) * (a - s) - (r - o) * (i - s)
    }
    function As(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
    }
    function Ls(t, e) {
        return t.x === e.x && t.y === e.y
    }
    function Ps(t, e, n, i) {
        return !!(Ls(t, e) && Ls(n, i) || Ls(t, i) && Ls(n, e)) || 0 < As(t, e, n) != 0 < As(t, e, i) && 0 < As(n, i, t) != 0 < As(n, i, e)
    }
    function Rs(t, e) {
        return As(t.prev, t, t.next) < 0 ? 0 <= As(t, e, t.next) && 0 <= As(t, t.prev, e) : As(t, e, t.prev) < 0 || As(t, t.next, e) < 0
    }
    function Cs(t, e) {
        var n = new Ds(t.i,t.x,t.y)
          , i = new Ds(e.i,e.x,e.y)
          , r = t.next
          , a = e.prev;
        return (t.next = e).prev = t,
        (n.next = r).prev = n,
        (i.next = n).prev = i,
        (a.next = i).prev = a,
        i
    }
    function Os(t, e, n, i) {
        var r = new Ds(t,e,n);
        return i ? (r.next = i.next,
        (r.prev = i).next.prev = r,
        i.next = r) : (r.prev = r).next = r,
        r
    }
    function Is(t) {
        t.next.prev = t.prev,
        t.prev.next = t.next,
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }
    function Ds(t, e, n) {
        this.i = t,
        this.x = e,
        this.y = n,
        this.prev = null,
        this.next = null,
        this.z = null,
        this.prevZ = null,
        this.nextZ = null,
        this.steiner = !1
    }
    var Ns = {
        area: function(t) {
            for (var e = t.length, n = 0, i = e - 1, r = 0; r < e; i = r++)
                n += t[i].x * t[r].y - t[r].x * t[i].y;
            return .5 * n
        },
        isClockWise: function(t) {
            return Ns.area(t) < 0
        },
        triangulateShape: function(t, e) {
            var n = []
              , i = []
              , r = [];
            zs(t),
            Bs(n, t);
            var a = t.length;
            e.forEach(zs);
            for (var o = 0; o < e.length; o++)
                i.push(a),
                a += e[o].length,
                Bs(n, e[o]);
            var s = fs(n, i);
            for (o = 0; o < s.length; o += 3)
                r.push(s.slice(o, o + 3));
            return r
        }
    };
    function zs(t) {
        var e = t.length;
        2 < e && t[e - 1].equals(t[0]) && t.pop()
    }
    function Bs(t, e) {
        for (var n = 0; n < e.length; n++)
            t.push(e[n].x),
            t.push(e[n].y)
    }
    function Us(t, e) {
        pi.call(this),
        this.type = "ExtrudeGeometry",
        this.parameters = {
            shapes: t,
            options: e
        },
        this.fromBufferGeometry(new Gs(t,e)),
        this.mergeVertices()
    }
    function Gs(t, Z) {
        Ui.call(this),
        this.type = "ExtrudeBufferGeometry",
        this.parameters = {
            shapes: t,
            options: Z
        },
        t = Array.isArray(t) ? t : [t];
        for (var Q = this, K = [], $ = [], e = 0, n = t.length; e < n; e++) {
            i(t[e])
        }
        function i(t) {
            var i = []
              , e = void 0 !== Z.curveSegments ? Z.curveSegments : 12
              , c = void 0 !== Z.steps ? Z.steps : 1
              , n = void 0 !== Z.depth ? Z.depth : 100
              , r = void 0 === Z.bevelEnabled || Z.bevelEnabled
              , a = void 0 !== Z.bevelThickness ? Z.bevelThickness : 6
              , o = void 0 !== Z.bevelSize ? Z.bevelSize : a - 2
              , l = void 0 !== Z.bevelSegments ? Z.bevelSegments : 3
              , s = Z.extrudePath
              , h = void 0 !== Z.UVGenerator ? Z.UVGenerator : Fs;
            void 0 !== Z.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
            n = Z.amount);
            var u, p, d, f, m, g, v, y, x = !1;
            s && (u = s.getSpacedPoints(c),
            r = !(x = !0),
            p = s.computeFrenetFrames(c, !1),
            d = new De,
            f = new De,
            m = new De),
            r || (o = a = l = 0);
            var b = t.extractPoints(e)
              , w = b.shape
              , _ = b.holes;
            if (!Ns.isClockWise(w))
                for (w = w.reverse(),
                v = 0,
                y = _.length; v < y; v++)
                    g = _[v],
                    Ns.isClockWise(g) && (_[v] = g.reverse());
            var M = Ns.triangulateShape(w, _)
              , S = w;
            for (v = 0,
            y = _.length; v < y; v++)
                g = _[v],
                w = w.concat(g);
            function T(t, e, n) {
                return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                e.clone().multiplyScalar(n).add(t)
            }
            var E, A, L, P, R, C, O = w.length, I = M.length;
            function D(t, e, n) {
                var i, r, a, o = t.x - e.x, s = t.y - e.y, c = n.x - t.x, l = n.y - t.y, h = o * o + s * s, u = o * l - s * c;
                if (Math.abs(u) > Number.EPSILON) {
                    var p = Math.sqrt(h)
                      , d = Math.sqrt(c * c + l * l)
                      , f = e.x - s / p
                      , m = e.y + o / p
                      , g = ((n.x - l / d - f) * l - (n.y + c / d - m) * c) / (o * l - s * c)
                      , v = (i = f + o * g - t.x) * i + (r = m + s * g - t.y) * r;
                    if (v <= 2)
                        return new Oe(i,r);
                    a = Math.sqrt(v / 2)
                } else {
                    var y = !1;
                    o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(l) && (y = !0),
                    a = y ? (i = -s,
                    r = o,
                    Math.sqrt(h)) : (i = o,
                    r = s,
                    Math.sqrt(h / 2))
                }
                return new Oe(i / a,r / a)
            }
            for (var N = [], z = 0, B = S.length, U = B - 1, G = z + 1; z < B; z++,
            U++,
            G++)
                U === B && (U = 0),
                G === B && (G = 0),
                N[z] = D(S[z], S[U], S[G]);
            var F, k, H = [], V = N.concat();
            for (v = 0,
            y = _.length; v < y; v++) {
                for (g = _[v],
                F = [],
                z = 0,
                U = (B = g.length) - 1,
                G = z + 1; z < B; z++,
                U++,
                G++)
                    U === B && (U = 0),
                    G === B && (G = 0),
                    F[z] = D(g[z], g[U], g[G]);
                H.push(F),
                V = V.concat(F)
            }
            for (E = 0; E < l; E++) {
                for (L = E / l,
                P = a * Math.cos(L * Math.PI / 2),
                A = o * Math.sin(L * Math.PI / 2),
                z = 0,
                B = S.length; z < B; z++)
                    W((R = T(S[z], N[z], A)).x, R.y, -P);
                for (v = 0,
                y = _.length; v < y; v++)
                    for (g = _[v],
                    F = H[v],
                    z = 0,
                    B = g.length; z < B; z++)
                        W((R = T(g[z], F[z], A)).x, R.y, -P)
            }
            for (A = o,
            z = 0; z < O; z++)
                R = r ? T(w[z], V[z], A) : w[z],
                x ? (f.copy(p.normals[0]).multiplyScalar(R.x),
                d.copy(p.binormals[0]).multiplyScalar(R.y),
                m.copy(u[0]).add(f).add(d),
                W(m.x, m.y, m.z)) : W(R.x, R.y, 0);
            for (k = 1; k <= c; k++)
                for (z = 0; z < O; z++)
                    R = r ? T(w[z], V[z], A) : w[z],
                    x ? (f.copy(p.normals[k]).multiplyScalar(R.x),
                    d.copy(p.binormals[k]).multiplyScalar(R.y),
                    m.copy(u[k]).add(f).add(d),
                    W(m.x, m.y, m.z)) : W(R.x, R.y, n / c * k);
            for (E = l - 1; 0 <= E; E--) {
                for (L = E / l,
                P = a * Math.cos(L * Math.PI / 2),
                A = o * Math.sin(L * Math.PI / 2),
                z = 0,
                B = S.length; z < B; z++)
                    W((R = T(S[z], N[z], A)).x, R.y, n + P);
                for (v = 0,
                y = _.length; v < y; v++)
                    for (g = _[v],
                    F = H[v],
                    z = 0,
                    B = g.length; z < B; z++)
                        R = T(g[z], F[z], A),
                        x ? W(R.x, R.y + u[c - 1].y, u[c - 1].x + P) : W(R.x, R.y, n + P)
            }
            function j(t, e) {
                var n, i;
                for (z = t.length; 0 <= --z; ) {
                    (i = (n = z) - 1) < 0 && (i = t.length - 1);
                    var r = 0
                      , a = c + 2 * l;
                    for (r = 0; r < a; r++) {
                        var o = O * r
                          , s = O * (r + 1);
                        X(e + n + o, e + i + o, e + i + s, e + n + s)
                    }
                }
            }
            function W(t, e, n) {
                i.push(t),
                i.push(e),
                i.push(n)
            }
            function q(t, e, n) {
                Y(t),
                Y(e),
                Y(n);
                var i = K.length / 3
                  , r = h.generateTopUV(Q, K, i - 3, i - 2, i - 1);
                J(r[0]),
                J(r[1]),
                J(r[2])
            }
            function X(t, e, n, i) {
                Y(t),
                Y(e),
                Y(i),
                Y(e),
                Y(n),
                Y(i);
                var r = K.length / 3
                  , a = h.generateSideWallUV(Q, K, r - 6, r - 3, r - 2, r - 1);
                J(a[0]),
                J(a[1]),
                J(a[3]),
                J(a[1]),
                J(a[2]),
                J(a[3])
            }
            function Y(t) {
                K.push(i[3 * t + 0]),
                K.push(i[3 * t + 1]),
                K.push(i[3 * t + 2])
            }
            function J(t) {
                $.push(t.x),
                $.push(t.y)
            }
            !function() {
                var t = K.length / 3;
                if (r) {
                    var e = 0
                      , n = O * e;
                    for (z = 0; z < I; z++)
                        q((C = M[z])[2] + n, C[1] + n, C[0] + n);
                    for (n = O * (e = c + 2 * l),
                    z = 0; z < I; z++)
                        q((C = M[z])[0] + n, C[1] + n, C[2] + n)
                } else {
                    for (z = 0; z < I; z++)
                        q((C = M[z])[2], C[1], C[0]);
                    for (z = 0; z < I; z++)
                        q((C = M[z])[0] + O * c, C[1] + O * c, C[2] + O * c)
                }
                Q.addGroup(t, K.length / 3 - t, 0)
            }(),
            function() {
                var t = K.length / 3
                  , e = 0;
                for (j(S, e),
                e += S.length,
                v = 0,
                y = _.length; v < y; v++)
                    j(g = _[v], e),
                    e += g.length;
                Q.addGroup(t, K.length / 3 - t, 1)
            }()
        }
        this.addAttribute("position", new wi(K,3)),
        this.addAttribute("uv", new wi($,2)),
        this.computeVertexNormals()
    }
    ((Us.prototype = Object.create(pi.prototype)).constructor = Us).prototype.toJSON = function() {
        var t = pi.prototype.toJSON.call(this);
        return ks(this.parameters.shapes, this.parameters.options, t)
    }
    ,
    ((Gs.prototype = Object.create(Ui.prototype)).constructor = Gs).prototype.toJSON = function() {
        var t = Ui.prototype.toJSON.call(this);
        return ks(this.parameters.shapes, this.parameters.options, t)
    }
    ;
    var Fs = {
        generateTopUV: function(t, e, n, i, r) {
            var a = e[3 * n]
              , o = e[3 * n + 1]
              , s = e[3 * i]
              , c = e[3 * i + 1]
              , l = e[3 * r]
              , h = e[3 * r + 1];
            return [new Oe(a,o), new Oe(s,c), new Oe(l,h)]
        },
        generateSideWallUV: function(t, e, n, i, r, a) {
            var o = e[3 * n]
              , s = e[3 * n + 1]
              , c = e[3 * n + 2]
              , l = e[3 * i]
              , h = e[3 * i + 1]
              , u = e[3 * i + 2]
              , p = e[3 * r]
              , d = e[3 * r + 1]
              , f = e[3 * r + 2]
              , m = e[3 * a]
              , g = e[3 * a + 1]
              , v = e[3 * a + 2];
            return Math.abs(s - h) < .01 ? [new Oe(o,1 - c), new Oe(l,1 - u), new Oe(p,1 - f), new Oe(m,1 - v)] : [new Oe(s,1 - c), new Oe(h,1 - u), new Oe(d,1 - f), new Oe(g,1 - v)]
        }
    };
    function ks(t, e, n) {
        if (n.shapes = [],
        Array.isArray(t))
            for (var i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                n.shapes.push(a.uuid)
            }
        else
            n.shapes.push(t.uuid);
        return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()),
        n
    }
    function Hs(t, e) {
        pi.call(this),
        this.type = "TextGeometry",
        this.parameters = {
            text: t,
            parameters: e
        },
        this.fromBufferGeometry(new Vs(t,e)),
        this.mergeVertices()
    }
    function Vs(t, e) {
        var n = (e = e || {}).font;
        if (!n || !n.isFont)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new pi;
        var i = n.generateShapes(t, e.size);
        e.depth = void 0 !== e.height ? e.height : 50,
        void 0 === e.bevelThickness && (e.bevelThickness = 10),
        void 0 === e.bevelSize && (e.bevelSize = 8),
        void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
        Gs.call(this, i, e),
        this.type = "TextBufferGeometry"
    }
    function js(t, e, n, i, r, a, o) {
        pi.call(this),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        },
        this.fromBufferGeometry(new Ws(t,e,n,i,r,a,o)),
        this.mergeVertices()
    }
    function Ws(t, e, n, i, r, a, o) {
        Ui.call(this),
        this.type = "SphereBufferGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        },
        t = t || 1,
        e = Math.max(3, Math.floor(e) || 8),
        n = Math.max(2, Math.floor(n) || 6),
        i = void 0 !== i ? i : 0,
        r = void 0 !== r ? r : 2 * Math.PI;
        var s, c, l = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI), h = 0, u = [], p = new De, d = new De, f = [], m = [], g = [], v = [];
        for (c = 0; c <= n; c++) {
            var y = []
              , x = c / n
              , b = 0 == c ? .5 / e : c == n ? -.5 / e : 0;
            for (s = 0; s <= e; s++) {
                var w = s / e;
                p.x = -t * Math.cos(i + w * r) * Math.sin(a + x * o),
                p.y = t * Math.cos(a + x * o),
                p.z = t * Math.sin(i + w * r) * Math.sin(a + x * o),
                m.push(p.x, p.y, p.z),
                d.copy(p).normalize(),
                g.push(d.x, d.y, d.z),
                v.push(w + b, 1 - x),
                y.push(h++)
            }
            u.push(y)
        }
        for (c = 0; c < n; c++)
            for (s = 0; s < e; s++) {
                var _ = u[c][s + 1]
                  , M = u[c][s]
                  , S = u[c + 1][s]
                  , T = u[c + 1][s + 1];
                (0 !== c || 0 < a) && f.push(_, M, T),
                (c !== n - 1 || l < Math.PI) && f.push(M, S, T)
            }
        this.setIndex(f),
        this.addAttribute("position", new wi(m,3)),
        this.addAttribute("normal", new wi(g,3)),
        this.addAttribute("uv", new wi(v,2))
    }
    function qs(t, e, n, i, r, a) {
        pi.call(this),
        this.type = "RingGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: a
        },
        this.fromBufferGeometry(new Xs(t,e,n,i,r,a)),
        this.mergeVertices()
    }
    function Xs(t, e, n, i, r, a) {
        Ui.call(this),
        this.type = "RingBufferGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: a
        },
        t = t || .5,
        e = e || 1,
        r = void 0 !== r ? r : 0,
        a = void 0 !== a ? a : 2 * Math.PI,
        n = void 0 !== n ? Math.max(3, n) : 8;
        var o, s, c, l = [], h = [], u = [], p = [], d = t, f = (e - t) / (i = void 0 !== i ? Math.max(1, i) : 1), m = new De, g = new Oe;
        for (s = 0; s <= i; s++) {
            for (c = 0; c <= n; c++)
                o = r + c / n * a,
                m.x = d * Math.cos(o),
                m.y = d * Math.sin(o),
                h.push(m.x, m.y, m.z),
                u.push(0, 0, 1),
                g.x = (m.x / e + 1) / 2,
                g.y = (m.y / e + 1) / 2,
                p.push(g.x, g.y);
            d += f
        }
        for (s = 0; s < i; s++) {
            var v = s * (n + 1);
            for (c = 0; c < n; c++) {
                var y = o = c + v
                  , x = o + n + 1
                  , b = o + n + 2
                  , w = o + 1;
                l.push(y, x, w),
                l.push(x, b, w)
            }
        }
        this.setIndex(l),
        this.addAttribute("position", new wi(h,3)),
        this.addAttribute("normal", new wi(u,3)),
        this.addAttribute("uv", new wi(p,2))
    }
    function Ys(t, e, n, i) {
        pi.call(this),
        this.type = "LatheGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: i
        },
        this.fromBufferGeometry(new Js(t,e,n,i)),
        this.mergeVertices()
    }
    function Js(t, e, n, i) {
        Ui.call(this),
        this.type = "LatheBufferGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: i
        },
        e = Math.floor(e) || 12,
        n = n || 0,
        i = i || 2 * Math.PI,
        i = Ce.clamp(i, 0, 2 * Math.PI);
        var r, a, o, s = [], c = [], l = [], h = 1 / e, u = new De, p = new Oe;
        for (a = 0; a <= e; a++) {
            var d = n + a * h * i
              , f = Math.sin(d)
              , m = Math.cos(d);
            for (o = 0; o <= t.length - 1; o++)
                u.x = t[o].x * f,
                u.y = t[o].y,
                u.z = t[o].x * m,
                c.push(u.x, u.y, u.z),
                p.x = a / e,
                p.y = o / (t.length - 1),
                l.push(p.x, p.y)
        }
        for (a = 0; a < e; a++)
            for (o = 0; o < t.length - 1; o++) {
                var g = r = o + a * t.length
                  , v = r + t.length
                  , y = r + t.length + 1
                  , x = r + 1;
                s.push(g, v, x),
                s.push(v, y, x)
            }
        if (this.setIndex(s),
        this.addAttribute("position", new wi(c,3)),
        this.addAttribute("uv", new wi(l,2)),
        this.computeVertexNormals(),
        i === 2 * Math.PI) {
            var b = this.attributes.normal.array
              , w = new De
              , _ = new De
              , M = new De;
            for (r = e * t.length * 3,
            o = a = 0; a < t.length; a++,
            o += 3)
                w.x = b[o + 0],
                w.y = b[o + 1],
                w.z = b[o + 2],
                _.x = b[r + o + 0],
                _.y = b[r + o + 1],
                _.z = b[r + o + 2],
                M.addVectors(w, _).normalize(),
                b[o + 0] = b[r + o + 0] = M.x,
                b[o + 1] = b[r + o + 1] = M.y,
                b[o + 2] = b[r + o + 2] = M.z
        }
    }
    function Zs(t, e) {
        pi.call(this),
        this.type = "ShapeGeometry",
        "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
        e = e.curveSegments),
        this.parameters = {
            shapes: t,
            curveSegments: e
        },
        this.fromBufferGeometry(new Qs(t,e)),
        this.mergeVertices()
    }
    function Qs(t, f) {
        Ui.call(this),
        this.type = "ShapeBufferGeometry",
        this.parameters = {
            shapes: t,
            curveSegments: f
        },
        f = f || 12;
        var m = []
          , g = []
          , v = []
          , y = []
          , e = 0
          , x = 0;
        if (!1 === Array.isArray(t))
            i(t);
        else
            for (var n = 0; n < t.length; n++)
                i(t[n]),
                this.addGroup(e, x, n),
                e += x,
                x = 0;
        function i(t) {
            var e, n, i, r = g.length / 3, a = t.extractPoints(f), o = a.shape, s = a.holes;
            for (!1 === Ns.isClockWise(o) && (o = o.reverse()),
            e = 0,
            n = s.length; e < n; e++)
                i = s[e],
                !0 === Ns.isClockWise(i) && (s[e] = i.reverse());
            var c = Ns.triangulateShape(o, s);
            for (e = 0,
            n = s.length; e < n; e++)
                i = s[e],
                o = o.concat(i);
            for (e = 0,
            n = o.length; e < n; e++) {
                var l = o[e];
                g.push(l.x, l.y, 0),
                v.push(0, 0, 1),
                y.push(l.x, l.y)
            }
            for (e = 0,
            n = c.length; e < n; e++) {
                var h = c[e]
                  , u = h[0] + r
                  , p = h[1] + r
                  , d = h[2] + r;
                m.push(u, p, d),
                x += 3
            }
        }
        this.setIndex(m),
        this.addAttribute("position", new wi(g,3)),
        this.addAttribute("normal", new wi(v,3)),
        this.addAttribute("uv", new wi(y,2))
    }
    function Ks(t, e) {
        if (e.shapes = [],
        Array.isArray(t))
            for (var n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.shapes.push(r.uuid)
            }
        else
            e.shapes.push(t.uuid);
        return e
    }
    function $s(t, e) {
        Ui.call(this),
        this.type = "EdgesGeometry",
        this.parameters = {
            thresholdAngle: e
        },
        e = void 0 !== e ? e : 1;
        var n, i, r, a, o = [], s = Math.cos(Ce.DEG2RAD * e), c = [0, 0], l = {}, h = ["a", "b", "c"];
        t.isBufferGeometry ? (a = new pi).fromBufferGeometry(t) : a = t.clone(),
        a.mergeVertices(),
        a.computeFaceNormals();
        for (var u = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
            for (var m = p[d], g = 0; g < 3; g++)
                n = m[h[g]],
                i = m[h[(g + 1) % 3]],
                c[0] = Math.min(n, i),
                c[1] = Math.max(n, i),
                void 0 === l[r = c[0] + "," + c[1]] ? l[r] = {
                    index1: c[0],
                    index2: c[1],
                    face1: d,
                    face2: void 0
                } : l[r].face2 = d;
        for (r in l) {
            var v = l[r];
            if (void 0 === v.face2 || p[v.face1].normal.dot(p[v.face2].normal) <= s) {
                var y = u[v.index1];
                o.push(y.x, y.y, y.z),
                y = u[v.index2],
                o.push(y.x, y.y, y.z)
            }
        }
        this.addAttribute("position", new wi(o,3))
    }
    function tc(t, e, n, i, r, a, o, s) {
        pi.call(this),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: i,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        },
        this.fromBufferGeometry(new ec(t,e,n,i,r,a,o,s)),
        this.mergeVertices()
    }
    function ec(v, y, x, b, w, t, _, M) {
        Ui.call(this),
        this.type = "CylinderBufferGeometry",
        this.parameters = {
            radiusTop: v,
            radiusBottom: y,
            height: x,
            radialSegments: b,
            heightSegments: w,
            openEnded: t,
            thetaStart: _,
            thetaLength: M
        };
        var S = this;
        v = void 0 !== v ? v : 1,
        y = void 0 !== y ? y : 1,
        x = x || 1,
        b = Math.floor(b) || 8,
        w = Math.floor(w) || 1,
        t = void 0 !== t && t,
        _ = void 0 !== _ ? _ : 0,
        M = void 0 !== M ? M : 2 * Math.PI;
        var T = []
          , E = []
          , A = []
          , L = []
          , P = 0
          , R = []
          , C = x / 2
          , O = 0;
        function e(t) {
            var e, n, i, r = new Oe, a = new De, o = 0, s = !0 === t ? v : y, c = !0 === t ? 1 : -1;
            for (n = P,
            e = 1; e <= b; e++)
                E.push(0, C * c, 0),
                A.push(0, c, 0),
                L.push(.5, .5),
                P++;
            for (i = P,
            e = 0; e <= b; e++) {
                var l = e / b * M + _
                  , h = Math.cos(l)
                  , u = Math.sin(l);
                a.x = s * u,
                a.y = C * c,
                a.z = s * h,
                E.push(a.x, a.y, a.z),
                A.push(0, c, 0),
                r.x = .5 * h + .5,
                r.y = .5 * u * c + .5,
                L.push(r.x, r.y),
                P++
            }
            for (e = 0; e < b; e++) {
                var p = n + e
                  , d = i + e;
                !0 === t ? T.push(d, d + 1, p) : T.push(d + 1, d, p),
                o += 3
            }
            S.addGroup(O, o, !0 === t ? 1 : 2),
            O += o
        }
        !function() {
            var t, e, n = new De, i = new De, r = 0, a = (y - v) / x;
            for (e = 0; e <= w; e++) {
                var o = []
                  , s = e / w
                  , c = s * (y - v) + v;
                for (t = 0; t <= b; t++) {
                    var l = t / b
                      , h = l * M + _
                      , u = Math.sin(h)
                      , p = Math.cos(h);
                    i.x = c * u,
                    i.y = -s * x + C,
                    i.z = c * p,
                    E.push(i.x, i.y, i.z),
                    n.set(u, a, p).normalize(),
                    A.push(n.x, n.y, n.z),
                    L.push(l, 1 - s),
                    o.push(P++)
                }
                R.push(o)
            }
            for (t = 0; t < b; t++)
                for (e = 0; e < w; e++) {
                    var d = R[e][t]
                      , f = R[e + 1][t]
                      , m = R[e + 1][t + 1]
                      , g = R[e][t + 1];
                    T.push(d, f, g),
                    T.push(f, m, g),
                    r += 6
                }
            S.addGroup(O, r, 0),
            O += r
        }(),
        !1 === t && (0 < v && e(!0),
        0 < y && e(!1)),
        this.setIndex(T),
        this.addAttribute("position", new wi(E,3)),
        this.addAttribute("normal", new wi(A,3)),
        this.addAttribute("uv", new wi(L,2))
    }
    function nc(t, e, n, i, r, a, o) {
        tc.call(this, 0, t, e, n, i, r, a, o),
        this.type = "ConeGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }
    function ic(t, e, n, i, r, a, o) {
        ec.call(this, 0, t, e, n, i, r, a, o),
        this.type = "ConeBufferGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }
    function rc(t, e, n, i) {
        pi.call(this),
        this.type = "CircleGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: i
        },
        this.fromBufferGeometry(new ac(t,e,n,i)),
        this.mergeVertices()
    }
    function ac(t, e, n, i) {
        Ui.call(this),
        this.type = "CircleBufferGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: i
        },
        t = t || 1,
        e = void 0 !== e ? Math.max(3, e) : 8,
        n = void 0 !== n ? n : 0,
        i = void 0 !== i ? i : 2 * Math.PI;
        var r, a, o = [], s = [], c = [], l = [], h = new De, u = new Oe;
        for (s.push(0, 0, 0),
        c.push(0, 0, 1),
        l.push(.5, .5),
        a = 0,
        r = 3; a <= e; a++,
        r += 3) {
            var p = n + a / e * i;
            h.x = t * Math.cos(p),
            h.y = t * Math.sin(p),
            s.push(h.x, h.y, h.z),
            c.push(0, 0, 1),
            u.x = (s[r] / t + 1) / 2,
            u.y = (s[r + 1] / t + 1) / 2,
            l.push(u.x, u.y)
        }
        for (r = 1; r <= e; r++)
            o.push(r, r + 1, 0);
        this.setIndex(o),
        this.addAttribute("position", new wi(s,3)),
        this.addAttribute("normal", new wi(c,3)),
        this.addAttribute("uv", new wi(l,2))
    }
    (Hs.prototype = Object.create(pi.prototype)).constructor = Hs,
    (Vs.prototype = Object.create(Gs.prototype)).constructor = Vs,
    (js.prototype = Object.create(pi.prototype)).constructor = js,
    (Ws.prototype = Object.create(Ui.prototype)).constructor = Ws,
    (qs.prototype = Object.create(pi.prototype)).constructor = qs,
    (Xs.prototype = Object.create(Ui.prototype)).constructor = Xs,
    (Ys.prototype = Object.create(pi.prototype)).constructor = Ys,
    (Js.prototype = Object.create(Ui.prototype)).constructor = Js,
    ((Zs.prototype = Object.create(pi.prototype)).constructor = Zs).prototype.toJSON = function() {
        var t = pi.prototype.toJSON.call(this);
        return Ks(this.parameters.shapes, t)
    }
    ,
    ((Qs.prototype = Object.create(Ui.prototype)).constructor = Qs).prototype.toJSON = function() {
        var t = Ui.prototype.toJSON.call(this);
        return Ks(this.parameters.shapes, t)
    }
    ,
    ($s.prototype = Object.create(Ui.prototype)).constructor = $s,
    (tc.prototype = Object.create(pi.prototype)).constructor = tc,
    (ec.prototype = Object.create(Ui.prototype)).constructor = ec,
    (nc.prototype = Object.create(tc.prototype)).constructor = nc,
    (ic.prototype = Object.create(ec.prototype)).constructor = ic,
    (rc.prototype = Object.create(pi.prototype)).constructor = rc,
    (ac.prototype = Object.create(Ui.prototype)).constructor = ac;
    var oc = Object.freeze({
        WireframeGeometry: Jo,
        ParametricGeometry: Zo,
        ParametricBufferGeometry: Qo,
        TetrahedronGeometry: ts,
        TetrahedronBufferGeometry: es,
        OctahedronGeometry: ns,
        OctahedronBufferGeometry: is,
        IcosahedronGeometry: rs,
        IcosahedronBufferGeometry: as,
        DodecahedronGeometry: os,
        DodecahedronBufferGeometry: ss,
        PolyhedronGeometry: Ko,
        PolyhedronBufferGeometry: $o,
        TubeGeometry: cs,
        TubeBufferGeometry: ls,
        TorusKnotGeometry: hs,
        TorusKnotBufferGeometry: us,
        TorusGeometry: ps,
        TorusBufferGeometry: ds,
        TextGeometry: Hs,
        TextBufferGeometry: Vs,
        SphereGeometry: js,
        SphereBufferGeometry: Ws,
        RingGeometry: qs,
        RingBufferGeometry: Xs,
        PlaneGeometry: ki,
        PlaneBufferGeometry: Hi,
        LatheGeometry: Ys,
        LatheBufferGeometry: Js,
        ShapeGeometry: Zs,
        ShapeBufferGeometry: Qs,
        ExtrudeGeometry: Us,
        ExtrudeBufferGeometry: Gs,
        EdgesGeometry: $s,
        ConeGeometry: nc,
        ConeBufferGeometry: ic,
        CylinderGeometry: tc,
        CylinderBufferGeometry: ec,
        CircleGeometry: rc,
        CircleBufferGeometry: ac,
        BoxGeometry: Gi,
        BoxBufferGeometry: Fi
    });
    function sc(t) {
        ji.call(this),
        this.type = "ShadowMaterial",
        this.color = new Ln(0),
        this.transparent = !0,
        this.setValues(t)
    }
    function cc(t) {
        yr.call(this, t),
        this.type = "RawShaderMaterial"
    }
    function lc(t) {
        ji.call(this),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new Ln(16777215),
        this.roughness = .5,
        this.metalness = .5,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Ln(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Pe,
        this.normalScale = new Oe(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function hc(t) {
        lc.call(this),
        this.defines = {
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.reflectivity = .5,
        this.clearCoat = 0,
        this.clearCoatRoughness = 0,
        this.setValues(t)
    }
    function uc(t) {
        ji.call(this),
        this.type = "MeshPhongMaterial",
        this.color = new Ln(16777215),
        this.specular = new Ln(1118481),
        this.shininess = 30,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Ln(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Pe,
        this.normalScale = new Oe(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = B,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function pc(t) {
        uc.call(this),
        this.defines = {
            TOON: ""
        },
        this.type = "MeshToonMaterial",
        this.gradientMap = null,
        this.setValues(t)
    }
    function dc(t) {
        ji.call(this),
        this.type = "MeshNormalMaterial",
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Pe,
        this.normalScale = new Oe(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function fc(t) {
        ji.call(this),
        this.type = "MeshLambertMaterial",
        this.color = new Ln(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Ln(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = B,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function mc(t) {
        ji.call(this),
        this.defines = {
            MATCAP: ""
        },
        this.type = "MeshMatcapMaterial",
        this.color = new Ln(16777215),
        this.matcap = null,
        this.map = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Pe,
        this.normalScale = new Oe(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.alphaMap = null,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function gc(t) {
        Go.call(this),
        this.type = "LineDashedMaterial",
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.setValues(t)
    }
    ((sc.prototype = Object.create(ji.prototype)).constructor = sc).prototype.isShadowMaterial = !0,
    sc.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this
    }
    ,
    ((cc.prototype = Object.create(yr.prototype)).constructor = cc).prototype.isRawShaderMaterial = !0,
    ((lc.prototype = Object.create(ji.prototype)).constructor = lc).prototype.isMeshStandardMaterial = !0,
    lc.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(t.color),
        this.roughness = t.roughness,
        this.metalness = t.metalness,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.roughnessMap = t.roughnessMap,
        this.metalnessMap = t.metalnessMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapIntensity = t.envMapIntensity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((hc.prototype = Object.create(lc.prototype)).constructor = hc).prototype.isMeshPhysicalMaterial = !0,
    hc.prototype.copy = function(t) {
        return lc.prototype.copy.call(this, t),
        this.defines = {
            PHYSICAL: ""
        },
        this.reflectivity = t.reflectivity,
        this.clearCoat = t.clearCoat,
        this.clearCoatRoughness = t.clearCoatRoughness,
        this
    }
    ,
    ((uc.prototype = Object.create(ji.prototype)).constructor = uc).prototype.isMeshPhongMaterial = !0,
    uc.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        this.shininess = t.shininess,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((pc.prototype = Object.create(uc.prototype)).constructor = pc).prototype.isMeshToonMaterial = !0,
    pc.prototype.copy = function(t) {
        return uc.prototype.copy.call(this, t),
        this.gradientMap = t.gradientMap,
        this
    }
    ,
    ((dc.prototype = Object.create(ji.prototype)).constructor = dc).prototype.isMeshNormalMaterial = !0,
    dc.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((fc.prototype = Object.create(ji.prototype)).constructor = fc).prototype.isMeshLambertMaterial = !0,
    fc.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((mc.prototype = Object.create(ji.prototype)).constructor = mc).prototype.isMeshMatcapMaterial = !0,
    mc.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.defines = {
            MATCAP: ""
        },
        this.color.copy(t.color),
        this.matcap = t.matcap,
        this.map = t.map,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.alphaMap = t.alphaMap,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((gc.prototype = Object.create(Go.prototype)).constructor = gc).prototype.isLineDashedMaterial = !0,
    gc.prototype.copy = function(t) {
        return Go.prototype.copy.call(this, t),
        this.scale = t.scale,
        this.dashSize = t.dashSize,
        this.gapSize = t.gapSize,
        this
    }
    ;
    var vc = Object.freeze({
        ShadowMaterial: sc,
        SpriteMaterial: Io,
        RawShaderMaterial: cc,
        ShaderMaterial: yr,
        PointsMaterial: Vo,
        MeshPhysicalMaterial: hc,
        MeshStandardMaterial: lc,
        MeshPhongMaterial: uc,
        MeshToonMaterial: pc,
        MeshNormalMaterial: dc,
        MeshLambertMaterial: fc,
        MeshDepthMaterial: Ja,
        MeshDistanceMaterial: Za,
        MeshBasicMaterial: wr,
        MeshMatcapMaterial: mc,
        LineDashedMaterial: gc,
        LineBasicMaterial: Go,
        Material: ji
    })
      , yc = {
        arraySlice: function(t, e, n) {
            return yc.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
        },
        convertArray: function(t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(n) {
            for (var t = n.length, e = new Array(t), i = 0; i !== t; ++i)
                e[i] = i;
            return e.sort(function(t, e) {
                return n[t] - n[e]
            }),
            e
        },
        sortedArray: function(t, e, n) {
            for (var i = t.length, r = new t.constructor(i), a = 0, o = 0; o !== i; ++a)
                for (var s = n[a] * e, c = 0; c !== e; ++c)
                    r[o++] = t[s + c];
            return r
        },
        flattenJSON: function(t, e, n, i) {
            for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[i]; )
                a = t[r++];
            if (void 0 !== a) {
                var o = a[i];
                if (void 0 !== o)
                    if (Array.isArray(o))
                        for (; void 0 !== (o = a[i]) && (e.push(a.time),
                        n.push.apply(n, o)),
                        void 0 !== (a = t[r++]); )
                            ;
                    else if (void 0 !== o.toArray)
                        for (; void 0 !== (o = a[i]) && (e.push(a.time),
                        o.toArray(n, n.length)),
                        void 0 !== (a = t[r++]); )
                            ;
                    else
                        for (; void 0 !== (o = a[i]) && (e.push(a.time),
                        n.push(o)),
                        void 0 !== (a = t[r++]); )
                            ;
            }
        }
    };
    function xc(t, e, n, i) {
        this.parameterPositions = t,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== i ? i : new e.constructor(n),
        this.sampleValues = e,
        this.valueSize = n
    }
    function bc(t, e, n, i) {
        xc.call(this, t, e, n, i),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0
    }
    function wc(t, e, n, i) {
        xc.call(this, t, e, n, i)
    }
    function _c(t, e, n, i) {
        xc.call(this, t, e, n, i)
    }
    function Mc(t, e, n, i) {
        if (void 0 === t)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t,
        this.times = yc.convertArray(e, this.TimeBufferType),
        this.values = yc.convertArray(n, this.ValueBufferType),
        this.setInterpolation(i || this.DefaultInterpolation)
    }
    function Sc(t, e, n) {
        Mc.call(this, t, e, n)
    }
    function Tc(t, e, n, i) {
        Mc.call(this, t, e, n, i)
    }
    function Ec(t, e, n, i) {
        Mc.call(this, t, e, n, i)
    }
    function Ac(t, e, n, i) {
        xc.call(this, t, e, n, i)
    }
    function Lc(t, e, n, i) {
        Mc.call(this, t, e, n, i)
    }
    function Pc(t, e, n, i) {
        Mc.call(this, t, e, n, i)
    }
    function Rc(t, e, n, i) {
        Mc.call(this, t, e, n, i)
    }
    function Cc(t, e, n) {
        this.name = t,
        this.tracks = n,
        this.duration = void 0 !== e ? e : -1,
        this.uuid = Ce.generateUUID(),
        this.duration < 0 && this.resetDuration()
    }
    function Oc(t) {
        if (void 0 === t.type)
            throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var e = function(t) {
            switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return Ec;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return Rc;
            case "color":
                return Tc;
            case "quaternion":
                return Lc;
            case "bool":
            case "boolean":
                return Sc;
            case "string":
                return Pc
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }(t.type);
        if (void 0 === t.times) {
            var n = []
              , i = [];
            yc.flattenJSON(t.keys, n, i, "value"),
            t.times = n,
            t.values = i
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name,t.times,t.values,t.interpolation)
    }
    Object.assign(xc.prototype, {
        evaluate: function(t) {
            var e = this.parameterPositions
              , n = this._cachedIndex
              , i = e[n]
              , r = e[n - 1];
            t: {
                e: {
                    var a;
                    n: {
                        i: if (!(t < i)) {
                            for (var o = n + 2; ; ) {
                                if (void 0 === i) {
                                    if (t < r)
                                        break i;
                                    return n = e.length,
                                    this._cachedIndex = n,
                                    this.afterEnd_(n - 1, t, r)
                                }
                                if (n === o)
                                    break;
                                if (r = i,
                                t < (i = e[++n]))
                                    break e
                            }
                            a = e.length;
                            break n
                        }
                        if (r <= t)
                            break t;
                        var s = e[1];
                        t < s && (n = 2,
                        r = s);
                        for (o = n - 2; ; ) {
                            if (void 0 === r)
                                return this._cachedIndex = 0,
                                this.beforeStart_(0, t, i);
                            if (n === o)
                                break;
                            if (i = r,
                            (r = e[--n - 1]) <= t)
                                break e
                        }
                        a = n,
                        n = 0
                    }
                    for (; n < a; ) {
                        var c = n + a >>> 1;
                        t < e[c] ? a = c : n = 1 + c
                    }
                    if (i = e[n],
                    void 0 === (r = e[n - 1]))
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, t, i);
                    if (void 0 === i)
                        return n = e.length,
                        this._cachedIndex = n,
                        this.afterEnd_(n - 1, r, t)
                }
                this._cachedIndex = n,
                this.intervalChanged_(n, r, i)
            }
            return this.interpolate_(n, r, t, i)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            for (var e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i, a = 0; a !== i; ++a)
                e[a] = n[r + a];
            return e
        },
        interpolate_: function() {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function() {}
    }),
    //!\ DECLARE ALIAS AFTER assign prototype !
    Object.assign(xc.prototype, {
        beforeStart_: xc.prototype.copySampleValue_,
        afterEnd_: xc.prototype.copySampleValue_
    }),
    bc.prototype = Object.assign(Object.create(xc.prototype), {
        constructor: bc,
        DefaultSettings_: {
            endingStart: me,
            endingEnd: me
        },
        intervalChanged_: function(t, e, n) {
            var i = this.parameterPositions
              , r = t - 2
              , a = t + 1
              , o = i[r]
              , s = i[a];
            if (void 0 === o)
                switch (this.getSettings_().endingStart) {
                case ge:
                    r = t,
                    o = 2 * e - n;
                    break;
                case 2402:
                    o = e + i[r = i.length - 2] - i[r + 1];
                    break;
                default:
                    r = t,
                    o = n
                }
            if (void 0 === s)
                switch (this.getSettings_().endingEnd) {
                case ge:
                    a = t,
                    s = 2 * n - e;
                    break;
                case 2402:
                    s = n + i[a = 1] - i[0];
                    break;
                default:
                    a = t - 1,
                    s = e
                }
            var c = .5 * (n - e)
              , l = this.valueSize;
            this._weightPrev = c / (e - o),
            this._weightNext = c / (s - n),
            this._offsetPrev = r * l,
            this._offsetNext = a * l
        },
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, l = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (n - e) / (i - e), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b)
                r[b] = g * a[l + b] + v * a[c + b] + y * a[s + b] + x * a[h + b];
            return r
        }
    }),
    wc.prototype = Object.assign(Object.create(xc.prototype), {
        constructor: wc,
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, l = (n - e) / (i - e), h = 1 - l, u = 0; u !== o; ++u)
                r[u] = a[c + u] * h + a[s + u] * l;
            return r
        }
    }),
    _c.prototype = Object.assign(Object.create(xc.prototype), {
        constructor: _c,
        interpolate_: function(t) {
            return this.copySampleValue_(t - 1)
        }
    }),
    Object.assign(Mc, {
        toJSON: function(t) {
            var e, n = t.constructor;
            if (void 0 !== n.toJSON)
                e = n.toJSON(t);
            else {
                e = {
                    name: t.name,
                    times: yc.convertArray(t.times, Array),
                    values: yc.convertArray(t.values, Array)
                };
                var i = t.getInterpolation();
                i !== t.DefaultInterpolation && (e.interpolation = i)
            }
            return e.type = t.ValueTypeName,
            e
        }
    }),
    Object.assign(Mc.prototype, {
        constructor: Mc,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(t) {
            return new _c(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodLinear: function(t) {
            return new wc(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: function(t) {
            return new bc(this.times,this.values,this.getValueSize(),t)
        },
        setInterpolation: function(t) {
            var e;
            switch (t) {
            case 2300:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case 2301:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case 2302:
                e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 !== e)
                return this.createInterpolant = e,
                this;
            var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation)
                    throw new Error(n);
                this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn("THREE.KeyframeTrack:", n),
            this
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return 2300;
            case this.InterpolantFactoryMethodLinear:
                return 2301;
            case this.InterpolantFactoryMethodSmooth:
                return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, n = 0, i = e.length; n !== i; ++n)
                    e[n] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, n = 0, i = e.length; n !== i; ++n)
                    e[n] *= t;
            return this
        },
        trim: function(t, e) {
            for (var n = this.times, i = n.length, r = 0, a = i - 1; r !== i && n[r] < t; )
                ++r;
            for (; -1 !== a && n[a] > e; )
                --a;
            if (++a,
            0 !== r || a !== i) {
                a <= r && (r = (a = Math.max(a, 1)) - 1);
                var o = this.getValueSize();
                this.times = yc.arraySlice(n, r, a),
                this.values = yc.arraySlice(this.values, r * o, a * o)
            }
            return this
        },
        validate: function() {
            var t = !0
              , e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
            t = !1);
            var n = this.times
              , i = this.values
              , r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this),
            t = !1);
            for (var a = null, o = 0; o !== r; o++) {
                var s = n[o];
                if ("number" == typeof s && isNaN(s)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s),
                    t = !1;
                    break
                }
                if (null !== a && s < a) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a),
                    t = !1;
                    break
                }
                a = s
            }
            if (void 0 !== i && yc.isTypedArray(i)) {
                o = 0;
                for (var c = i.length; o !== c; ++o) {
                    var l = i[o];
                    if (isNaN(l)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l),
                        t = !1;
                        break
                    }
                }
            }
            return t
        },
        optimize: function() {
            for (var t = this.times, e = this.values, n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
                var s = !1
                  , c = t[o];
                if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                    if (i)
                        s = !0;
                    else
                        for (var l = o * n, h = l - n, u = l + n, p = 0; p !== n; ++p) {
                            var d = e[l + p];
                            if (d !== e[h + p] || d !== e[u + p]) {
                                s = !0;
                                break
                            }
                        }
                if (s) {
                    if (o !== r) {
                        t[r] = t[o];
                        var f = o * n
                          , m = r * n;
                        for (p = 0; p !== n; ++p)
                            e[m + p] = e[f + p]
                    }
                    ++r
                }
            }
            if (0 < a) {
                t[r] = t[a];
                for (f = a * n,
                m = r * n,
                p = 0; p !== n; ++p)
                    e[m + p] = e[f + p];
                ++r
            }
            return r !== t.length && (this.times = yc.arraySlice(t, 0, r),
            this.values = yc.arraySlice(e, 0, r * n)),
            this
        },
        clone: function() {
            var t = yc.arraySlice(this.times, 0)
              , e = yc.arraySlice(this.values, 0)
              , n = new this.constructor(this.name,t,e);
            return n.createInterpolant = this.createInterpolant,
            n
        }
    }),
    Sc.prototype = Object.assign(Object.create(Mc.prototype), {
        constructor: Sc,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    Tc.prototype = Object.assign(Object.create(Mc.prototype), {
        constructor: Tc,
        ValueTypeName: "color"
    }),
    Ec.prototype = Object.assign(Object.create(Mc.prototype), {
        constructor: Ec,
        ValueTypeName: "number"
    }),
    Ac.prototype = Object.assign(Object.create(xc.prototype), {
        constructor: Ac,
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (n - e) / (i - e), l = s + o; s !== l; s += 4)
                Ie.slerpFlat(r, 0, a, s - o, a, s, c);
            return r
        }
    }),
    Lc.prototype = Object.assign(Object.create(Mc.prototype), {
        constructor: Lc,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(t) {
            return new Ac(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }),
    Pc.prototype = Object.assign(Object.create(Mc.prototype), {
        constructor: Pc,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    Rc.prototype = Object.assign(Object.create(Mc.prototype), {
        constructor: Rc,
        ValueTypeName: "vector"
    }),
    Object.assign(Cc, {
        parse: function(t) {
            for (var e = [], n = t.tracks, i = 1 / (t.fps || 1), r = 0, a = n.length; r !== a; ++r)
                e.push(Oc(n[r]).scale(i));
            return new Cc(t.name,t.duration,e)
        },
        toJSON: function(t) {
            for (var e = [], n = t.tracks, i = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid
            }, r = 0, a = n.length; r !== a; ++r)
                e.push(Mc.toJSON(n[r]));
            return i
        },
        CreateFromMorphTargetSequence: function(t, e, n, i) {
            for (var r = e.length, a = [], o = 0; o < r; o++) {
                var s = []
                  , c = [];
                s.push((o + r - 1) % r, o, (o + 1) % r),
                c.push(0, 1, 0);
                var l = yc.getKeyframeOrder(s);
                s = yc.sortedArray(s, 1, l),
                c = yc.sortedArray(c, 1, l),
                i || 0 !== s[0] || (s.push(r),
                c.push(c[0])),
                a.push(new Ec(".morphTargetInfluences[" + e[o].name + "]",s,c).scale(1 / n))
            }
            return new Cc(t,-1,a)
        },
        findByName: function(t, e) {
            var n = t;
            if (!Array.isArray(t)) {
                var i = t;
                n = i.geometry && i.geometry.animations || i.animations
            }
            for (var r = 0; r < n.length; r++)
                if (n[r].name === e)
                    return n[r];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, n) {
            for (var i = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                var s = t[a]
                  , c = s.name.match(r);
                if (c && 1 < c.length) {
                    var l = i[u = c[1]];
                    l || (i[u] = l = []),
                    l.push(s)
                }
            }
            var h = [];
            for (var u in i)
                h.push(Cc.CreateFromMorphTargetSequence(u, i[u], e, n));
            return h
        },
        parseAnimation: function(t, e) {
            if (!t)
                return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
                null;
            for (var n = function(t, e, n, i, r) {
                if (0 !== n.length) {
                    var a = []
                      , o = [];
                    yc.flattenJSON(n, a, o, i),
                    0 !== a.length && r.push(new t(e,a,o))
                }
            }, i = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                var l = s[c].keys;
                if (l && 0 !== l.length)
                    if (l[0].morphTargets) {
                        for (var h = {}, u = 0; u < l.length; u++)
                            if (l[u].morphTargets)
                                for (var p = 0; p < l[u].morphTargets.length; p++)
                                    h[l[u].morphTargets[p]] = -1;
                        for (var d in h) {
                            var f = []
                              , m = [];
                            for (p = 0; p !== l[u].morphTargets.length; ++p) {
                                var g = l[u];
                                f.push(g.time),
                                m.push(g.morphTarget === d ? 1 : 0)
                            }
                            i.push(new Ec(".morphTargetInfluence[" + d + "]",f,m))
                        }
                        a = h.length * (o || 1)
                    } else {
                        var v = ".bones[" + e[c].name + "]";
                        n(Rc, v + ".position", l, "pos", i),
                        n(Lc, v + ".quaternion", l, "rot", i),
                        n(Rc, v + ".scale", l, "scl", i)
                    }
            }
            return 0 === i.length ? null : new Cc(r,a,i)
        }
    }),
    Object.assign(Cc.prototype, {
        resetDuration: function() {
            for (var t = 0, e = 0, n = this.tracks.length; e !== n; ++e) {
                var i = this.tracks[e];
                t = Math.max(t, i.times[i.times.length - 1])
            }
            return this.duration = t,
            this
        },
        trim: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].trim(0, this.duration);
            return this
        },
        validate: function() {
            for (var t = !0, e = 0; e < this.tracks.length; e++)
                t = t && this.tracks[e].validate();
            return t
        },
        optimize: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].optimize();
            return this
        },
        clone: function() {
            for (var t = [], e = 0; e < this.tracks.length; e++)
                t.push(this.tracks[e].clone());
            return new Cc(this.name,this.duration,t)
        }
    });
    var Ic = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e)
        },
        get: function(t) {
            if (!1 !== this.enabled)
                return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    };
    function Dc(t, e, n) {
        var i = this
          , r = !1
          , a = 0
          , o = 0
          , s = void 0;
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = n,
        this.itemStart = function(t) {
            o++,
            !1 === r && void 0 !== i.onStart && i.onStart(t, a, o),
            r = !0
        }
        ,
        this.itemEnd = function(t) {
            a++,
            void 0 !== i.onProgress && i.onProgress(t, a, o),
            a === o && (r = !1,
            void 0 !== i.onLoad && i.onLoad())
        }
        ,
        this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t)
        }
        ,
        this.resolveURL = function(t) {
            return s ? s(t) : t
        }
        ,
        this.setURLModifier = function(t) {
            return s = t,
            this
        }
    }
    var Nc = new Dc
      , zc = {};
    function Bc(t) {
        this.manager = void 0 !== t ? t : Nc
    }
    function Uc(t) {
        this.manager = void 0 !== t ? t : Nc,
        this._parser = null
    }
    function Gc(t) {
        this.manager = void 0 !== t ? t : Nc
    }
    function Fc(t) {
        this.manager = void 0 !== t ? t : Nc
    }
    function kc(t) {
        this.manager = void 0 !== t ? t : Nc
    }
    function Hc() {
        this.type = "Curve",
        this.arcLengthDivisions = 200
    }
    function Vc(t, e, n, i, r, a, o, s) {
        Hc.call(this),
        this.type = "EllipseCurve",
        this.aX = t || 0,
        this.aY = e || 0,
        this.xRadius = n || 1,
        this.yRadius = i || 1,
        this.aStartAngle = r || 0,
        this.aEndAngle = a || 2 * Math.PI,
        this.aClockwise = o || !1,
        this.aRotation = s || 0
    }
    function jc(t, e, n, i, r, a) {
        Vc.call(this, t, e, n, n, i, r, a),
        this.type = "ArcCurve"
    }
    function Wc() {
        var r = 0
          , a = 0
          , o = 0
          , s = 0;
        function l(t, e, n, i) {
            o = -3 * (r = t) + 3 * e - 2 * (a = n) - i,
            s = 2 * t - 2 * e + n + i
        }
        return {
            initCatmullRom: function(t, e, n, i, r) {
                l(e, n, r * (n - t), r * (i - e))
            },
            initNonuniformCatmullRom: function(t, e, n, i, r, a, o) {
                var s = (e - t) / r - (n - t) / (r + a) + (n - e) / a
                  , c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
                l(e, n, s *= a, c *= a)
            },
            calc: function(t) {
                var e = t * t;
                return r + a * t + o * e + s * (e * t)
            }
        }
    }
    Object.assign(Bc.prototype, {
        load: function(o, t, e, n) {
            void 0 === o && (o = ""),
            void 0 !== this.path && (o = this.path + o),
            o = this.manager.resolveURL(o);
            var s = this
              , i = Ic.get(o);
            if (void 0 !== i)
                return s.manager.itemStart(o),
                setTimeout(function() {
                    t && t(i),
                    s.manager.itemEnd(o)
                }, 0),
                i;
            if (void 0 === zc[o]) {
                var r = o.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (r) {
                    var a = r[1]
                      , c = !!r[2]
                      , l = r[3];
                    l = decodeURIComponent(l),
                    c && (l = atob(l));
                    try {
                        var h, u = (this.responseType || "").toLowerCase();
                        switch (u) {
                        case "arraybuffer":
                        case "blob":
                            for (var p = new Uint8Array(l.length), d = 0; d < l.length; d++)
                                p[d] = l.charCodeAt(d);
                            h = "blob" === u ? new Blob([p.buffer],{
                                type: a
                            }) : p.buffer;
                            break;
                        case "document":
                            var f = new DOMParser;
                            h = f.parseFromString(l, a);
                            break;
                        case "json":
                            h = JSON.parse(l);
                            break;
                        default:
                            h = l
                        }
                        setTimeout(function() {
                            t && t(h),
                            s.manager.itemEnd(o)
                        }, 0)
                    } catch (t) {
                        setTimeout(function() {
                            n && n(t),
                            s.manager.itemError(o),
                            s.manager.itemEnd(o)
                        }, 0)
                    }
                } else {
                    zc[o] = [],
                    zc[o].push({
                        onLoad: t,
                        onProgress: e,
                        onError: n
                    });
                    var m = new XMLHttpRequest;
                    for (var g in m.open("GET", o, !0),
                    m.addEventListener("load", function(t) {
                        var e = this.response;
                        Ic.add(o, e);
                        var n = zc[o];
                        if (delete zc[o],
                        200 === this.status || 0 === this.status) {
                            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                            for (var i = 0, r = n.length; i < r; i++) {
                                (a = n[i]).onLoad && a.onLoad(e)
                            }
                            s.manager.itemEnd(o)
                        } else {
                            for (i = 0,
                            r = n.length; i < r; i++) {
                                var a;
                                (a = n[i]).onError && a.onError(t)
                            }
                            s.manager.itemError(o),
                            s.manager.itemEnd(o)
                        }
                    }, !1),
                    m.addEventListener("progress", function(t) {
                        for (var e = zc[o], n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            r.onProgress && r.onProgress(t)
                        }
                    }, !1),
                    m.addEventListener("error", function(t) {
                        var e = zc[o];
                        delete zc[o];
                        for (var n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            r.onError && r.onError(t)
                        }
                        s.manager.itemError(o),
                        s.manager.itemEnd(o)
                    }, !1),
                    m.addEventListener("abort", function(t) {
                        var e = zc[o];
                        delete zc[o];
                        for (var n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            r.onError && r.onError(t)
                        }
                        s.manager.itemError(o),
                        s.manager.itemEnd(o)
                    }, !1),
                    void 0 !== this.responseType && (m.responseType = this.responseType),
                    void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials),
                    m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"),
                    this.requestHeader)
                        m.setRequestHeader(g, this.requestHeader[g]);
                    m.send(null)
                }
                return s.manager.itemStart(o),
                m
            }
            zc[o].push({
                onLoad: t,
                onProgress: e,
                onError: n
            })
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResponseType: function(t) {
            return this.responseType = t,
            this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t,
            this
        },
        setMimeType: function(t) {
            return this.mimeType = t,
            this
        },
        setRequestHeader: function(t) {
            return this.requestHeader = t,
            this
        }
    }),
    Object.assign(function(t) {
        this.manager = void 0 !== t ? t : Nc
    }
    .prototype, {
        load: function(t, e, n, i) {
            var r = this
              , a = new Bc(r.manager);
            a.setPath(r.path),
            a.load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, n, i)
        },
        parse: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i = Cc.parse(t[n]);
                e.push(i)
            }
            return e
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(function(t) {
        this.manager = void 0 !== t ? t : Nc,
        this._parser = null
    }
    .prototype, {
        load: function(t, a, e, i) {
            var o = this
              , s = []
              , c = new qo;
            c.image = s;
            var r = new Bc(this.manager);
            function n(n) {
                r.load(t[n], function(t) {
                    var e = o._parser(t, !0);
                    s[n] = {
                        width: e.width,
                        height: e.height,
                        format: e.format,
                        mipmaps: e.mipmaps
                    },
                    6 === (l += 1) && (1 === e.mipmapCount && (c.minFilter = Mt),
                    c.format = e.format,
                    c.needsUpdate = !0,
                    a && a(c))
                }, e, i)
            }
            if (r.setPath(this.path),
            r.setResponseType("arraybuffer"),
            Array.isArray(t))
                for (var l = 0, h = 0, u = t.length; h < u; ++h)
                    n(h);
            else
                r.load(t, function(t) {
                    var e = o._parser(t, !0);
                    if (e.isCubemap)
                        for (var n = e.mipmaps.length / e.mipmapCount, i = 0; i < n; i++) {
                            s[i] = {
                                mipmaps: []
                            };
                            for (var r = 0; r < e.mipmapCount; r++)
                                s[i].mipmaps.push(e.mipmaps[i * e.mipmapCount + r]),
                                s[i].format = e.format,
                                s[i].width = e.width,
                                s[i].height = e.height
                        }
                    else
                        c.image.width = e.width,
                        c.image.height = e.height,
                        c.mipmaps = e.mipmaps;
                    1 === e.mipmapCount && (c.minFilter = Mt),
                    c.format = e.format,
                    c.needsUpdate = !0,
                    a && a(c)
                }, e, i);
            return c
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(Uc.prototype, {
        load: function(t, n, e, i) {
            var r = this
              , a = new mn
              , o = new Bc(this.manager);
            return o.setResponseType("arraybuffer"),
            o.setPath(this.path),
            o.load(t, function(t) {
                var e = r._parser(t);
                e && (void 0 !== e.image ? a.image = e.image : void 0 !== e.data && (a.image.width = e.width,
                a.image.height = e.height,
                a.image.data = e.data),
                a.wrapS = void 0 !== e.wrapS ? e.wrapS : I,
                a.wrapT = void 0 !== e.wrapT ? e.wrapT : I,
                a.magFilter = void 0 !== e.magFilter ? e.magFilter : Mt,
                a.minFilter = void 0 !== e.minFilter ? e.minFilter : Tt,
                a.anisotropy = void 0 !== e.anisotropy ? e.anisotropy : 1,
                void 0 !== e.format && (a.format = e.format),
                void 0 !== e.type && (a.type = e.type),
                void 0 !== e.mipmaps && (a.mipmaps = e.mipmaps),
                1 === e.mipmapCount && (a.minFilter = Mt),
                a.needsUpdate = !0,
                n && n(a, e))
            }, e, i),
            a
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(Gc.prototype, {
        crossOrigin: "anonymous",
        load: function(e, t, n, i) {
            void 0 === e && (e = ""),
            void 0 !== this.path && (e = this.path + e),
            e = this.manager.resolveURL(e);
            var r = this
              , a = Ic.get(e);
            if (void 0 !== a)
                return r.manager.itemStart(e),
                setTimeout(function() {
                    t && t(a),
                    r.manager.itemEnd(e)
                }, 0),
                a;
            var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            function s() {
                o.removeEventListener("load", s, !1),
                o.removeEventListener("error", c, !1),
                Ic.add(e, this),
                t && t(this),
                r.manager.itemEnd(e)
            }
            function c(t) {
                o.removeEventListener("load", s, !1),
                o.removeEventListener("error", c, !1),
                i && i(t),
                r.manager.itemError(e),
                r.manager.itemEnd(e)
            }
            return o.addEventListener("load", s, !1),
            o.addEventListener("error", c, !1),
            "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin),
            r.manager.itemStart(e),
            o.src = e,
            o
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(Fc.prototype, {
        crossOrigin: "anonymous",
        load: function(t, n, e, i) {
            var r = new Dr
              , a = new Gc(this.manager);
            a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path);
            var o = 0;
            function s(e) {
                a.load(t[e], function(t) {
                    r.images[e] = t,
                    6 === ++o && (r.needsUpdate = !0,
                    n && n(r))
                }, void 0, i)
            }
            for (var c = 0; c < t.length; ++c)
                s(c);
            return r
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(kc.prototype, {
        crossOrigin: "anonymous",
        load: function(n, i, t, e) {
            var r = new hn
              , a = new Gc(this.manager);
            return a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path),
            a.load(n, function(t) {
                r.image = t;
                var e = 0 < n.search(/\.jpe?g($|\?)/i) || 0 === n.search(/^data\:image\/jpeg/);
                r.format = e ? Gt : Ft,
                r.needsUpdate = !0,
                void 0 !== i && i(r)
            }, t, e),
            r
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(Hc.prototype, {
        getPoint: function() {
            return console.warn("THREE.Curve: .getPoint() not implemented."),
            null
        },
        getPointAt: function(t, e) {
            var n = this.getUtoTmapping(t);
            return this.getPoint(n, e)
        },
        getPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], n = 0; n <= t; n++)
                e.push(this.getPoint(n / t));
            return e
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], n = 0; n <= t; n++)
                e.push(this.getPointAt(n / t));
            return e
        },
        getLength: function() {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (void 0 === t && (t = this.arcLengthDivisions),
            this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, n, i = [], r = this.getPoint(0), a = 0;
            for (i.push(0),
            n = 1; n <= t; n++)
                a += (e = this.getPoint(n / t)).distanceTo(r),
                i.push(a),
                r = e;
            return this.cacheArcLengths = i
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            var n, i = this.getLengths(), r = 0, a = i.length;
            n = e || t * i[a - 1];
            for (var o, s = 0, c = a - 1; s <= c; )
                if ((o = i[r = Math.floor(s + (c - s) / 2)] - n) < 0)
                    s = r + 1;
                else {
                    if (!(0 < o)) {
                        c = r;
                        break
                    }
                    c = r - 1
                }
            if (i[r = c] === n)
                return r / (a - 1);
            var l = i[r];
            return (r + (n - l) / (i[r + 1] - l)) / (a - 1)
        },
        getTangent: function(t) {
            var e = t - 1e-4
              , n = t + 1e-4;
            e < 0 && (e = 0),
            1 < n && (n = 1);
            var i = this.getPoint(e);
            return this.getPoint(n).clone().sub(i).normalize()
        },
        getTangentAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        },
        computeFrenetFrames: function(t, e) {
            var n, i, r, a = new De, o = [], s = [], c = [], l = new De, h = new bn;
            for (n = 0; n <= t; n++)
                i = n / t,
                o[n] = this.getTangentAt(i),
                o[n].normalize();
            s[0] = new De,
            c[0] = new De;
            var u = Number.MAX_VALUE
              , p = Math.abs(o[0].x)
              , d = Math.abs(o[0].y)
              , f = Math.abs(o[0].z);
            for (p <= u && (u = p,
            a.set(1, 0, 0)),
            d <= u && (u = d,
            a.set(0, 1, 0)),
            f <= u && a.set(0, 0, 1),
            l.crossVectors(o[0], a).normalize(),
            s[0].crossVectors(o[0], l),
            c[0].crossVectors(o[0], s[0]),
            n = 1; n <= t; n++)
                s[n] = s[n - 1].clone(),
                c[n] = c[n - 1].clone(),
                l.crossVectors(o[n - 1], o[n]),
                l.length() > Number.EPSILON && (l.normalize(),
                r = Math.acos(Ce.clamp(o[n - 1].dot(o[n]), -1, 1)),
                s[n].applyMatrix4(h.makeRotationAxis(l, r))),
                c[n].crossVectors(o[n], s[n]);
            if (!0 === e)
                for (r = Math.acos(Ce.clamp(s[0].dot(s[t]), -1, 1)),
                r /= t,
                0 < o[0].dot(l.crossVectors(s[0], s[t])) && (r = -r),
                n = 1; n <= t; n++)
                    s[n].applyMatrix4(h.makeRotationAxis(o[n], r * n)),
                    c[n].crossVectors(o[n], s[n]);
            return {
                tangents: o,
                normals: s,
                binormals: c
            }
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions,
            t.type = this.type,
            t
        },
        fromJSON: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        }
    }),
    ((Vc.prototype = Object.create(Hc.prototype)).constructor = Vc).prototype.isEllipseCurve = !0,
    Vc.prototype.getPoint = function(t, e) {
        for (var n = e || new Oe, i = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0; )
            r += i;
        for (; i < r; )
            r -= i;
        r < Number.EPSILON && (r = a ? 0 : i),
        !0 !== this.aClockwise || a || (r === i ? r = -i : r -= i);
        var o = this.aStartAngle + t * r
          , s = this.aX + this.xRadius * Math.cos(o)
          , c = this.aY + this.yRadius * Math.sin(o);
        if (0 !== this.aRotation) {
            var l = Math.cos(this.aRotation)
              , h = Math.sin(this.aRotation)
              , u = s - this.aX
              , p = c - this.aY;
            s = u * l - p * h + this.aX,
            c = u * h + p * l + this.aY
        }
        return n.set(s, c)
    }
    ,
    Vc.prototype.copy = function(t) {
        return Hc.prototype.copy.call(this, t),
        this.aX = t.aX,
        this.aY = t.aY,
        this.xRadius = t.xRadius,
        this.yRadius = t.yRadius,
        this.aStartAngle = t.aStartAngle,
        this.aEndAngle = t.aEndAngle,
        this.aClockwise = t.aClockwise,
        this.aRotation = t.aRotation,
        this
    }
    ,
    Vc.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        return t.aX = this.aX,
        t.aY = this.aY,
        t.xRadius = this.xRadius,
        t.yRadius = this.yRadius,
        t.aStartAngle = this.aStartAngle,
        t.aEndAngle = this.aEndAngle,
        t.aClockwise = this.aClockwise,
        t.aRotation = this.aRotation,
        t
    }
    ,
    Vc.prototype.fromJSON = function(t) {
        return Hc.prototype.fromJSON.call(this, t),
        this.aX = t.aX,
        this.aY = t.aY,
        this.xRadius = t.xRadius,
        this.yRadius = t.yRadius,
        this.aStartAngle = t.aStartAngle,
        this.aEndAngle = t.aEndAngle,
        this.aClockwise = t.aClockwise,
        this.aRotation = t.aRotation,
        this
    }
    ,
    ((jc.prototype = Object.create(Vc.prototype)).constructor = jc).prototype.isArcCurve = !0;
    var qc = new De
      , Xc = new Wc
      , Yc = new Wc
      , Jc = new Wc;
    function Zc(t, e, n, i) {
        Hc.call(this),
        this.type = "CatmullRomCurve3",
        this.points = t || [],
        this.closed = e || !1,
        this.curveType = n || "centripetal",
        this.tension = i || .5
    }
    function Qc(t, e, n, i, r) {
        var a = .5 * (i - e)
          , o = .5 * (r - n)
          , s = t * t;
        return (2 * n - 2 * i + a + o) * (t * s) + (-3 * n + 3 * i - 2 * a - o) * s + a * t + n
    }
    function Kc(t, e, n, i) {
        return function(t, e) {
            var n = 1 - t;
            return n * n * e
        }(t, e) + function(t, e) {
            return 2 * (1 - t) * t * e
        }(t, n) + function(t, e) {
            return t * t * e
        }(t, i)
    }
    function $c(t, e, n, i, r) {
        return function(t, e) {
            var n = 1 - t;
            return n * n * n * e
        }(t, e) + function(t, e) {
            var n = 1 - t;
            return 3 * n * n * t * e
        }(t, n) + function(t, e) {
            return 3 * (1 - t) * t * t * e
        }(t, i) + function(t, e) {
            return t * t * t * e
        }(t, r)
    }
    function tl(t, e, n, i) {
        Hc.call(this),
        this.type = "CubicBezierCurve",
        this.v0 = t || new Oe,
        this.v1 = e || new Oe,
        this.v2 = n || new Oe,
        this.v3 = i || new Oe
    }
    function el(t, e, n, i) {
        Hc.call(this),
        this.type = "CubicBezierCurve3",
        this.v0 = t || new De,
        this.v1 = e || new De,
        this.v2 = n || new De,
        this.v3 = i || new De
    }
    function nl(t, e) {
        Hc.call(this),
        this.type = "LineCurve",
        this.v1 = t || new Oe,
        this.v2 = e || new Oe
    }
    function il(t, e) {
        Hc.call(this),
        this.type = "LineCurve3",
        this.v1 = t || new De,
        this.v2 = e || new De
    }
    function rl(t, e, n) {
        Hc.call(this),
        this.type = "QuadraticBezierCurve",
        this.v0 = t || new Oe,
        this.v1 = e || new Oe,
        this.v2 = n || new Oe
    }
    function al(t, e, n) {
        Hc.call(this),
        this.type = "QuadraticBezierCurve3",
        this.v0 = t || new De,
        this.v1 = e || new De,
        this.v2 = n || new De
    }
    function ol(t) {
        Hc.call(this),
        this.type = "SplineCurve",
        this.points = t || []
    }
    ((Zc.prototype = Object.create(Hc.prototype)).constructor = Zc).prototype.isCatmullRomCurve3 = !0,
    Zc.prototype.getPoint = function(t, e) {
        var n, i, r, a, o = e || new De, s = this.points, c = s.length, l = (c - (this.closed ? 0 : 1)) * t, h = Math.floor(l), u = l - h;
        if (this.closed ? h += 0 < h ? 0 : (Math.floor(Math.abs(h) / c) + 1) * c : 0 === u && h === c - 1 && (h = c - 2,
        u = 1),
        n = this.closed || 0 < h ? s[(h - 1) % c] : (qc.subVectors(s[0], s[1]).add(s[0]),
        qc),
        i = s[h % c],
        r = s[(h + 1) % c],
        a = this.closed || h + 2 < c ? s[(h + 2) % c] : (qc.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]),
        qc),
        "centripetal" === this.curveType || "chordal" === this.curveType) {
            var p = "chordal" === this.curveType ? .5 : .25
              , d = Math.pow(n.distanceToSquared(i), p)
              , f = Math.pow(i.distanceToSquared(r), p)
              , m = Math.pow(r.distanceToSquared(a), p);
            f < 1e-4 && (f = 1),
            d < 1e-4 && (d = f),
            m < 1e-4 && (m = f),
            Xc.initNonuniformCatmullRom(n.x, i.x, r.x, a.x, d, f, m),
            Yc.initNonuniformCatmullRom(n.y, i.y, r.y, a.y, d, f, m),
            Jc.initNonuniformCatmullRom(n.z, i.z, r.z, a.z, d, f, m)
        } else
            "catmullrom" === this.curveType && (Xc.initCatmullRom(n.x, i.x, r.x, a.x, this.tension),
            Yc.initCatmullRom(n.y, i.y, r.y, a.y, this.tension),
            Jc.initCatmullRom(n.z, i.z, r.z, a.z, this.tension));
        return o.set(Xc.calc(u), Yc.calc(u), Jc.calc(u)),
        o
    }
    ,
    Zc.prototype.copy = function(t) {
        Hc.prototype.copy.call(this, t),
        this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push(i.clone())
        }
        return this.closed = t.closed,
        this.curveType = t.curveType,
        this.tension = t.tension,
        this
    }
    ,
    Zc.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) {
            var i = this.points[e];
            t.points.push(i.toArray())
        }
        return t.closed = this.closed,
        t.curveType = this.curveType,
        t.tension = this.tension,
        t
    }
    ,
    Zc.prototype.fromJSON = function(t) {
        Hc.prototype.fromJSON.call(this, t),
        this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push((new De).fromArray(i))
        }
        return this.closed = t.closed,
        this.curveType = t.curveType,
        this.tension = t.tension,
        this
    }
    ,
    ((tl.prototype = Object.create(Hc.prototype)).constructor = tl).prototype.isCubicBezierCurve = !0,
    tl.prototype.getPoint = function(t, e) {
        var n = e || new Oe
          , i = this.v0
          , r = this.v1
          , a = this.v2
          , o = this.v3;
        return n.set($c(t, i.x, r.x, a.x, o.x), $c(t, i.y, r.y, a.y, o.y)),
        n
    }
    ,
    tl.prototype.copy = function(t) {
        return Hc.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
    }
    ,
    tl.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t.v3 = this.v3.toArray(),
        t
    }
    ,
    tl.prototype.fromJSON = function(t) {
        return Hc.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
    }
    ,
    ((el.prototype = Object.create(Hc.prototype)).constructor = el).prototype.isCubicBezierCurve3 = !0,
    el.prototype.getPoint = function(t, e) {
        var n = e || new De
          , i = this.v0
          , r = this.v1
          , a = this.v2
          , o = this.v3;
        return n.set($c(t, i.x, r.x, a.x, o.x), $c(t, i.y, r.y, a.y, o.y), $c(t, i.z, r.z, a.z, o.z)),
        n
    }
    ,
    el.prototype.copy = function(t) {
        return Hc.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
    }
    ,
    el.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t.v3 = this.v3.toArray(),
        t
    }
    ,
    el.prototype.fromJSON = function(t) {
        return Hc.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
    }
    ,
    ((nl.prototype = Object.create(Hc.prototype)).constructor = nl).prototype.isLineCurve = !0,
    nl.prototype.getPoint = function(t, e) {
        var n = e || new Oe;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(t).add(this.v1)),
        n
    }
    ,
    nl.prototype.getPointAt = function(t, e) {
        return this.getPoint(t, e)
    }
    ,
    nl.prototype.getTangent = function() {
        return this.v2.clone().sub(this.v1).normalize()
    }
    ,
    nl.prototype.copy = function(t) {
        return Hc.prototype.copy.call(this, t),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    nl.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    nl.prototype.fromJSON = function(t) {
        return Hc.prototype.fromJSON.call(this, t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    ((il.prototype = Object.create(Hc.prototype)).constructor = il).prototype.isLineCurve3 = !0,
    il.prototype.getPoint = function(t, e) {
        var n = e || new De;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(t).add(this.v1)),
        n
    }
    ,
    il.prototype.getPointAt = function(t, e) {
        return this.getPoint(t, e)
    }
    ,
    il.prototype.copy = function(t) {
        return Hc.prototype.copy.call(this, t),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    il.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    il.prototype.fromJSON = function(t) {
        return Hc.prototype.fromJSON.call(this, t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    ((rl.prototype = Object.create(Hc.prototype)).constructor = rl).prototype.isQuadraticBezierCurve = !0,
    rl.prototype.getPoint = function(t, e) {
        var n = e || new Oe
          , i = this.v0
          , r = this.v1
          , a = this.v2;
        return n.set(Kc(t, i.x, r.x, a.x), Kc(t, i.y, r.y, a.y)),
        n
    }
    ,
    rl.prototype.copy = function(t) {
        return Hc.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    rl.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    rl.prototype.fromJSON = function(t) {
        return Hc.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    ((al.prototype = Object.create(Hc.prototype)).constructor = al).prototype.isQuadraticBezierCurve3 = !0,
    al.prototype.getPoint = function(t, e) {
        var n = e || new De
          , i = this.v0
          , r = this.v1
          , a = this.v2;
        return n.set(Kc(t, i.x, r.x, a.x), Kc(t, i.y, r.y, a.y), Kc(t, i.z, r.z, a.z)),
        n
    }
    ,
    al.prototype.copy = function(t) {
        return Hc.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    al.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    al.prototype.fromJSON = function(t) {
        return Hc.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    ((ol.prototype = Object.create(Hc.prototype)).constructor = ol).prototype.isSplineCurve = !0,
    ol.prototype.getPoint = function(t, e) {
        var n = e || new Oe
          , i = this.points
          , r = (i.length - 1) * t
          , a = Math.floor(r)
          , o = r - a
          , s = i[0 === a ? a : a - 1]
          , c = i[a]
          , l = i[a > i.length - 2 ? i.length - 1 : a + 1]
          , h = i[a > i.length - 3 ? i.length - 1 : a + 2];
        return n.set(Qc(o, s.x, c.x, l.x, h.x), Qc(o, s.y, c.y, l.y, h.y)),
        n
    }
    ,
    ol.prototype.copy = function(t) {
        Hc.prototype.copy.call(this, t),
        this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push(i.clone())
        }
        return this
    }
    ,
    ol.prototype.toJSON = function() {
        var t = Hc.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) {
            var i = this.points[e];
            t.points.push(i.toArray())
        }
        return t
    }
    ,
    ol.prototype.fromJSON = function(t) {
        Hc.prototype.fromJSON.call(this, t),
        this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push((new Oe).fromArray(i))
        }
        return this
    }
    ;
    var sl = Object.freeze({
        ArcCurve: jc,
        CatmullRomCurve3: Zc,
        CubicBezierCurve: tl,
        CubicBezierCurve3: el,
        EllipseCurve: Vc,
        LineCurve: nl,
        LineCurve3: il,
        QuadraticBezierCurve: rl,
        QuadraticBezierCurve3: al,
        SplineCurve: ol
    });
    function cl() {
        Hc.call(this),
        this.type = "CurvePath",
        this.curves = [],
        this.autoClose = !1
    }
    function ll(t) {
        cl.call(this),
        this.type = "Path",
        this.currentPoint = new Oe,
        t && this.setFromPoints(t)
    }
    function hl(t) {
        ll.call(this, t),
        this.uuid = Ce.generateUUID(),
        this.type = "Shape",
        this.holes = []
    }
    function ul(t, e) {
        ii.call(this),
        this.type = "Light",
        this.color = new Ln(t),
        this.intensity = void 0 !== e ? e : 1,
        this.receiveShadow = void 0
    }
    function pl(t, e, n) {
        ul.call(this, t, n),
        this.type = "HemisphereLight",
        this.castShadow = void 0,
        this.position.copy(ii.DefaultUp),
        this.updateMatrix(),
        this.groundColor = new Ln(e)
    }
    function dl(t) {
        this.camera = t,
        this.bias = 0,
        this.radius = 1,
        this.mapSize = new Oe(512,512),
        this.map = null,
        this.matrix = new bn
    }
    function fl() {
        dl.call(this, new io(50,1,.5,500))
    }
    function ml(t, e, n, i, r, a) {
        ul.call(this, t, e),
        this.type = "SpotLight",
        this.position.copy(ii.DefaultUp),
        this.updateMatrix(),
        this.target = new ii,
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / Math.PI
            }
        }),
        this.distance = void 0 !== n ? n : 0,
        this.angle = void 0 !== i ? i : Math.PI / 3,
        this.penumbra = void 0 !== r ? r : 0,
        this.decay = void 0 !== a ? a : 1,
        this.shadow = new fl
    }
    function gl(t, e, n, i) {
        ul.call(this, t, e),
        this.type = "PointLight",
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / (4 * Math.PI)
            }
        }),
        this.distance = void 0 !== n ? n : 0,
        this.decay = void 0 !== i ? i : 1,
        this.shadow = new dl(new io(90,1,.5,500))
    }
    function vl(t, e, n, i, r, a) {
        no.call(this),
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = void 0 !== t ? t : -1,
        this.right = void 0 !== e ? e : 1,
        this.top = void 0 !== n ? n : 1,
        this.bottom = void 0 !== i ? i : -1,
        this.near = void 0 !== r ? r : .1,
        this.far = void 0 !== a ? a : 2e3,
        this.updateProjectionMatrix()
    }
    function yl() {
        dl.call(this, new vl(-5,5,5,-5,.5,500))
    }
    function xl(t, e) {
        ul.call(this, t, e),
        this.type = "DirectionalLight",
        this.position.copy(ii.DefaultUp),
        this.updateMatrix(),
        this.target = new ii,
        this.shadow = new yl
    }
    function bl(t, e) {
        ul.call(this, t, e),
        this.type = "AmbientLight",
        this.castShadow = void 0
    }
    function wl(t, e, n, i) {
        ul.call(this, t, e),
        this.type = "RectAreaLight",
        this.width = void 0 !== n ? n : 10,
        this.height = void 0 !== i ? i : 10
    }
    function _l(t) {
        this.manager = void 0 !== t ? t : Nc,
        this.textures = {}
    }
    cl.prototype = Object.assign(Object.create(Hc.prototype), {
        constructor: cl,
        add: function(t) {
            this.curves.push(t)
        },
        closePath: function() {
            var t = this.curves[0].getPoint(0)
              , e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new nl(e,t))
        },
        getPoint: function(t) {
            for (var e = t * this.getLength(), n = this.getCurveLengths(), i = 0; i < n.length; ) {
                if (n[i] >= e) {
                    var r = n[i] - e
                      , a = this.curves[i]
                      , o = a.getLength()
                      , s = 0 === o ? 0 : 1 - r / o;
                    return a.getPointAt(s)
                }
                i++
            }
            return null
        },
        getLength: function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            for (var t = [], e = 0, n = 0, i = this.curves.length; n < i; n++)
                e += this.curves[n].getLength(),
                t.push(e);
            return this.cacheLengths = t
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 40);
            for (var e = [], n = 0; n <= t; n++)
                e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]),
            e
        },
        getPoints: function(t) {
            t = t || 12;
            for (var e, n = [], i = 0, r = this.curves; i < r.length; i++)
                for (var a = r[i], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                    var l = s[c];
                    e && e.equals(l) || (n.push(l),
                    e = l)
                }
            return this.autoClose && 1 < n.length && !n[n.length - 1].equals(n[0]) && n.push(n[0]),
            n
        },
        copy: function(t) {
            Hc.prototype.copy.call(this, t),
            this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var i = t.curves[e];
                this.curves.push(i.clone())
            }
            return this.autoClose = t.autoClose,
            this
        },
        toJSON: function() {
            var t = Hc.prototype.toJSON.call(this);
            t.autoClose = this.autoClose,
            t.curves = [];
            for (var e = 0, n = this.curves.length; e < n; e++) {
                var i = this.curves[e];
                t.curves.push(i.toJSON())
            }
            return t
        },
        fromJSON: function(t) {
            Hc.prototype.fromJSON.call(this, t),
            this.autoClose = t.autoClose,
            this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var i = t.curves[e];
                this.curves.push((new sl[i.type]).fromJSON(i))
            }
            return this
        }
    }),
    ll.prototype = Object.assign(Object.create(cl.prototype), {
        constructor: ll,
        setFromPoints: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, n = t.length; e < n; e++)
                this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function(t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function(t, e) {
            var n = new nl(this.currentPoint.clone(),new Oe(t,e));
            this.curves.push(n),
            this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function(t, e, n, i) {
            var r = new rl(this.currentPoint.clone(),new Oe(t,e),new Oe(n,i));
            this.curves.push(r),
            this.currentPoint.set(n, i)
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            var o = new tl(this.currentPoint.clone(),new Oe(t,e),new Oe(n,i),new Oe(r,a));
            this.curves.push(o),
            this.currentPoint.set(r, a)
        },
        splineThru: function(t) {
            var e = new ol([this.currentPoint.clone()].concat(t));
            this.curves.push(e),
            this.currentPoint.copy(t[t.length - 1])
        },
        arc: function(t, e, n, i, r, a) {
            var o = this.currentPoint.x
              , s = this.currentPoint.y;
            this.absarc(t + o, e + s, n, i, r, a)
        },
        absarc: function(t, e, n, i, r, a) {
            this.absellipse(t, e, n, n, i, r, a)
        },
        ellipse: function(t, e, n, i, r, a, o, s) {
            var c = this.currentPoint.x
              , l = this.currentPoint.y;
            this.absellipse(t + c, e + l, n, i, r, a, o, s)
        },
        absellipse: function(t, e, n, i, r, a, o, s) {
            var c = new Vc(t,e,n,i,r,a,o,s);
            if (0 < this.curves.length) {
                var l = c.getPoint(0);
                l.equals(this.currentPoint) || this.lineTo(l.x, l.y)
            }
            this.curves.push(c);
            var h = c.getPoint(1);
            this.currentPoint.copy(h)
        },
        copy: function(t) {
            return cl.prototype.copy.call(this, t),
            this.currentPoint.copy(t.currentPoint),
            this
        },
        toJSON: function() {
            var t = cl.prototype.toJSON.call(this);
            return t.currentPoint = this.currentPoint.toArray(),
            t
        },
        fromJSON: function(t) {
            return cl.prototype.fromJSON.call(this, t),
            this.currentPoint.fromArray(t.currentPoint),
            this
        }
    }),
    hl.prototype = Object.assign(Object.create(ll.prototype), {
        constructor: hl,
        getPointsHoles: function(t) {
            for (var e = [], n = 0, i = this.holes.length; n < i; n++)
                e[n] = this.holes[n].getPoints(t);
            return e
        },
        extractPoints: function(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        copy: function(t) {
            ll.prototype.copy.call(this, t),
            this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var i = t.holes[e];
                this.holes.push(i.clone())
            }
            return this
        },
        toJSON: function() {
            var t = ll.prototype.toJSON.call(this);
            t.uuid = this.uuid,
            t.holes = [];
            for (var e = 0, n = this.holes.length; e < n; e++) {
                var i = this.holes[e];
                t.holes.push(i.toJSON())
            }
            return t
        },
        fromJSON: function(t) {
            ll.prototype.fromJSON.call(this, t),
            this.uuid = t.uuid,
            this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var i = t.holes[e];
                this.holes.push((new ll).fromJSON(i))
            }
            return this
        }
    }),
    ul.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: ul,
        isLight: !0,
        copy: function(t) {
            return ii.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.intensity = t.intensity,
            this
        },
        toJSON: function(t) {
            var e = ii.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(),
            e.object.intensity = this.intensity,
            void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (e.object.distance = this.distance),
            void 0 !== this.angle && (e.object.angle = this.angle),
            void 0 !== this.decay && (e.object.decay = this.decay),
            void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
            e
        }
    }),
    pl.prototype = Object.assign(Object.create(ul.prototype), {
        constructor: pl,
        isHemisphereLight: !0,
        copy: function(t) {
            return ul.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
        }
    }),
    Object.assign(dl.prototype, {
        copy: function(t) {
            return this.camera = t.camera.clone(),
            this.bias = t.bias,
            this.radius = t.radius,
            this.mapSize.copy(t.mapSize),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias),
            1 !== this.radius && (t.radius = this.radius),
            512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()),
            t.camera = this.camera.toJSON(!1).object,
            delete t.camera.matrix,
            t
        }
    }),
    fl.prototype = Object.assign(Object.create(dl.prototype), {
        constructor: fl,
        isSpotLightShadow: !0,
        update: function(t) {
            var e = this.camera
              , n = 2 * Ce.RAD2DEG * t.angle
              , i = this.mapSize.width / this.mapSize.height
              , r = t.distance || e.far;
            n === e.fov && i === e.aspect && r === e.far || (e.fov = n,
            e.aspect = i,
            e.far = r,
            e.updateProjectionMatrix())
        }
    }),
    ml.prototype = Object.assign(Object.create(ul.prototype), {
        constructor: ml,
        isSpotLight: !0,
        copy: function(t) {
            return ul.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.angle = t.angle,
            this.penumbra = t.penumbra,
            this.decay = t.decay,
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    gl.prototype = Object.assign(Object.create(ul.prototype), {
        constructor: gl,
        isPointLight: !0,
        copy: function(t) {
            return ul.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.decay = t.decay,
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    vl.prototype = Object.assign(Object.create(no.prototype), {
        constructor: vl,
        isOrthographicCamera: !0,
        copy: function(t, e) {
            return no.prototype.copy.call(this, t, e),
            this.left = t.left,
            this.right = t.right,
            this.top = t.top,
            this.bottom = t.bottom,
            this.near = t.near,
            this.far = t.far,
            this.zoom = t.zoom,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this
        },
        setViewOffset: function(t, e, n, i, r, a) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = n,
            this.view.offsetY = i,
            this.view.width = r,
            this.view.height = a,
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom)
              , e = (this.top - this.bottom) / (2 * this.zoom)
              , n = (this.right + this.left) / 2
              , i = (this.top + this.bottom) / 2
              , r = n - t
              , a = n + t
              , o = i + e
              , s = i - e;
            if (null !== this.view && this.view.enabled) {
                var c = this.zoom / (this.view.width / this.view.fullWidth)
                  , l = this.zoom / (this.view.height / this.view.fullHeight)
                  , h = (this.right - this.left) / this.view.width
                  , u = (this.top - this.bottom) / this.view.height;
                a = (r += h * (this.view.offsetX / c)) + h * (this.view.width / c),
                s = (o -= u * (this.view.offsetY / l)) - u * (this.view.height / l)
            }
            this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) {
            var e = ii.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom,
            e.object.left = this.left,
            e.object.right = this.right,
            e.object.top = this.top,
            e.object.bottom = this.bottom,
            e.object.near = this.near,
            e.object.far = this.far,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e
        }
    }),
    yl.prototype = Object.assign(Object.create(dl.prototype), {
        constructor: yl
    }),
    xl.prototype = Object.assign(Object.create(ul.prototype), {
        constructor: xl,
        isDirectionalLight: !0,
        copy: function(t) {
            return ul.prototype.copy.call(this, t),
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    bl.prototype = Object.assign(Object.create(ul.prototype), {
        constructor: bl,
        isAmbientLight: !0
    }),
    wl.prototype = Object.assign(Object.create(ul.prototype), {
        constructor: wl,
        isRectAreaLight: !0,
        copy: function(t) {
            return ul.prototype.copy.call(this, t),
            this.width = t.width,
            this.height = t.height,
            this
        },
        toJSON: function(t) {
            var e = ul.prototype.toJSON.call(this, t);
            return e.object.width = this.width,
            e.object.height = this.height,
            e
        }
    }),
    Object.assign(_l.prototype, {
        load: function(t, e, n, i) {
            var r = this
              , a = new Bc(r.manager);
            a.setPath(r.path),
            a.load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, n, i)
        },
        parse: function(t) {
            var e = this.textures;
            function n(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t),
                e[t]
            }
            var i = new vc[t.type];
            if (void 0 !== t.uuid && (i.uuid = t.uuid),
            void 0 !== t.name && (i.name = t.name),
            void 0 !== t.color && i.color.setHex(t.color),
            void 0 !== t.roughness && (i.roughness = t.roughness),
            void 0 !== t.metalness && (i.metalness = t.metalness),
            void 0 !== t.emissive && i.emissive.setHex(t.emissive),
            void 0 !== t.specular && i.specular.setHex(t.specular),
            void 0 !== t.shininess && (i.shininess = t.shininess),
            void 0 !== t.clearCoat && (i.clearCoat = t.clearCoat),
            void 0 !== t.clearCoatRoughness && (i.clearCoatRoughness = t.clearCoatRoughness),
            void 0 !== t.vertexColors && (i.vertexColors = t.vertexColors),
            void 0 !== t.fog && (i.fog = t.fog),
            void 0 !== t.flatShading && (i.flatShading = t.flatShading),
            void 0 !== t.blending && (i.blending = t.blending),
            void 0 !== t.combine && (i.combine = t.combine),
            void 0 !== t.side && (i.side = t.side),
            void 0 !== t.opacity && (i.opacity = t.opacity),
            void 0 !== t.transparent && (i.transparent = t.transparent),
            void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest),
            void 0 !== t.depthTest && (i.depthTest = t.depthTest),
            void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite),
            void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite),
            void 0 !== t.wireframe && (i.wireframe = t.wireframe),
            void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth),
            void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap),
            void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin),
            void 0 !== t.rotation && (i.rotation = t.rotation),
            1 !== t.linewidth && (i.linewidth = t.linewidth),
            void 0 !== t.dashSize && (i.dashSize = t.dashSize),
            void 0 !== t.gapSize && (i.gapSize = t.gapSize),
            void 0 !== t.scale && (i.scale = t.scale),
            void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset),
            void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor),
            void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits),
            void 0 !== t.skinning && (i.skinning = t.skinning),
            void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets),
            void 0 !== t.dithering && (i.dithering = t.dithering),
            void 0 !== t.visible && (i.visible = t.visible),
            void 0 !== t.userData && (i.userData = t.userData),
            void 0 !== t.uniforms)
                for (var r in t.uniforms) {
                    var a = t.uniforms[r];
                    switch (i.uniforms[r] = {},
                    a.type) {
                    case "t":
                        i.uniforms[r].value = n(a.value);
                        break;
                    case "c":
                        i.uniforms[r].value = (new Ln).setHex(a.value);
                        break;
                    case "v2":
                        i.uniforms[r].value = (new Oe).fromArray(a.value);
                        break;
                    case "v3":
                        i.uniforms[r].value = (new De).fromArray(a.value);
                        break;
                    case "v4":
                        i.uniforms[r].value = (new un).fromArray(a.value);
                        break;
                    case "m3":
                        i.uniforms[r].value = (new Ne).fromArray(a.value);
                    case "m4":
                        i.uniforms[r].value = (new bn).fromArray(a.value);
                        break;
                    default:
                        i.uniforms[r].value = a.value
                    }
                }
            if (void 0 !== t.defines && (i.defines = t.defines),
            void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader),
            void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader),
            void 0 !== t.extensions)
                for (var o in t.extensions)
                    i.extensions[o] = t.extensions[o];
            if (void 0 !== t.shading && (i.flatShading = 1 === t.shading),
            void 0 !== t.size && (i.size = t.size),
            void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation),
            void 0 !== t.map && (i.map = n(t.map)),
            void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap),
            i.transparent = !0),
            void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)),
            void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale),
            void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)),
            void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType),
            void 0 !== t.normalScale) {
                var s = t.normalScale;
                !1 === Array.isArray(s) && (s = [s, s]),
                i.normalScale = (new Oe).fromArray(s)
            }
            return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)),
            void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale),
            void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias),
            void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)),
            void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)),
            void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)),
            void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity),
            void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)),
            void 0 !== t.envMap && (i.envMap = n(t.envMap)),
            void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity),
            void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity),
            void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)),
            void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity),
            void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)),
            void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity),
            void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)),
            i
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setTextures: function(t) {
            return this.textures = t,
            this
        }
    });
    var Ml = function(t) {
        var e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.substr(0, e + 1)
    };
    function Sl(t) {
        this.manager = void 0 !== t ? t : Nc
    }
    Object.assign(Sl.prototype, {
        load: function(t, e, n, i) {
            var r = this
              , a = new Bc(r.manager);
            a.setPath(r.path),
            a.load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, n, i)
        },
        parse: function(t) {
            var e = new Ui
              , n = t.data.index;
            if (void 0 !== n) {
                var i = new Tl[n.type](n.array);
                e.setIndex(new di(i,1))
            }
            var r = t.data.attributes;
            for (var a in r) {
                var o = r[a]
                  , s = new di(i = new Tl[o.type](o.array),o.itemSize,o.normalized);
                void 0 !== o.name && (s.name = o.name),
                e.addAttribute(a, s)
            }
            var c = t.data.morphAttributes;
            if (c)
                for (var a in c) {
                    for (var l = c[a], h = [], u = 0, p = l.length; u < p; u++) {
                        o = l[u],
                        s = new di(i = new Tl[o.type](o.array),o.itemSize,o.normalized);
                        void 0 !== o.name && (s.name = o.name),
                        h.push(s)
                    }
                    e.morphAttributes[a] = h
                }
            var d = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== d) {
                u = 0;
                for (var f = d.length; u !== f; ++u) {
                    var m = d[u];
                    e.addGroup(m.start, m.count, m.materialIndex)
                }
            }
            var g = t.data.boundingSphere;
            if (void 0 !== g) {
                var v = new De;
                void 0 !== g.center && v.fromArray(g.center),
                e.boundingSphere = new vn(v,g.radius)
            }
            return t.name && (e.name = t.name),
            t.userData && (e.userData = t.userData),
            e
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    });
    var Tl = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    function El(t) {
        this.manager = void 0 !== t ? t : Nc,
        this.resourcePath = ""
    }
    Object.assign(El.prototype, {
        crossOrigin: "anonymous",
        load: function(i, r, t, a) {
            var o = this
              , e = void 0 === this.path ? Ml(i) : this.path;
            this.resourcePath = this.resourcePath || e;
            var n = new Bc(o.manager);
            n.setPath(this.path),
            n.load(i, function(t) {
                var e = null;
                try {
                    e = JSON.parse(t)
                } catch (t) {
                    return void 0 !== a && a(t),
                    void console.error("THREE:ObjectLoader: Can't parse " + i + ".", t.message)
                }
                var n = e.metadata;
                void 0 !== n && void 0 !== n.type && "geometry" !== n.type.toLowerCase() ? o.parse(e, r) : console.error("THREE.ObjectLoader: Can't load " + i)
            }, t, a)
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResourcePath: function(t) {
            return this.resourcePath = t,
            this
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        parse: function(t, e) {
            var n = this.parseShape(t.shapes)
              , i = this.parseGeometries(t.geometries, n)
              , r = this.parseImages(t.images, function() {
                void 0 !== e && e(s)
            })
              , a = this.parseTextures(t.textures, r)
              , o = this.parseMaterials(t.materials, a)
              , s = this.parseObject(t.object, i, o);
            return t.animations && (s.animations = this.parseAnimations(t.animations)),
            void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s),
            s
        },
        parseShape: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var n = 0, i = t.length; n < i; n++) {
                    var r = (new hl).fromJSON(t[n]);
                    e[r.uuid] = r
                }
            return e
        },
        parseGeometries: function(t, e) {
            var n = {};
            if (void 0 !== t)
                for (var i = new Sl, r = 0, a = t.length; r < a; r++) {
                    var o, s = t[r];
                    switch (s.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        o = new oc[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        o = new oc[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        o = new oc[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        o = new oc[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        o = new oc[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        o = new oc[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        o = new oc[s.type](s.radius,s.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        o = new oc[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        o = new oc[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        o = new oc[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                        break;
                    case "TubeGeometry":
                    case "TubeBufferGeometry":
                        o = new oc[s.type]((new sl[s.path.type]).fromJSON(s.path),s.tubularSegments,s.radius,s.radialSegments,s.closed);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        o = new oc[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        o = new oc[s.type](s.vertices,s.indices,s.radius,s.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        for (var c = [], l = 0, h = s.shapes.length; l < h; l++) {
                            var u = e[s.shapes[l]];
                            c.push(u)
                        }
                        o = new oc[s.type](c,s.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        for (c = [],
                        l = 0,
                        h = s.shapes.length; l < h; l++) {
                            u = e[s.shapes[l]];
                            c.push(u)
                        }
                        var p = s.options.extrudePath;
                        void 0 !== p && (s.options.extrudePath = (new sl[p.type]).fromJSON(p)),
                        o = new oc[s.type](c,s.options);
                        break;
                    case "BufferGeometry":
                        o = i.parse(s);
                        break;
                    case "Geometry":
                        if ("THREE"in window && "LegacyJSONLoader"in THREE)
                            o = (new THREE.LegacyJSONLoader).parse(s, this.resourcePath).geometry;
                        else
                            console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                        continue
                    }
                    o.uuid = s.uuid,
                    void 0 !== s.name && (o.name = s.name),
                    !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData),
                    n[s.uuid] = o
                }
            return n
        },
        parseMaterials: function(t, e) {
            var n = {}
              , i = {};
            if (void 0 !== t) {
                var r = new _l;
                r.setTextures(e);
                for (var a = 0, o = t.length; a < o; a++) {
                    var s = t[a];
                    if ("MultiMaterial" === s.type) {
                        for (var c = [], l = 0; l < s.materials.length; l++) {
                            var h = s.materials[l];
                            void 0 === n[h.uuid] && (n[h.uuid] = r.parse(h)),
                            c.push(n[h.uuid])
                        }
                        i[s.uuid] = c
                    } else
                        void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)),
                        i[s.uuid] = n[s.uuid]
                }
            }
            return i
        },
        parseAnimations: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i = t[n]
                  , r = Cc.parse(i);
                void 0 !== i.uuid && (r.uuid = i.uuid),
                e.push(r)
            }
            return e
        },
        parseImages: function(t, e) {
            var n = this
              , i = {};
            function r(t) {
                return n.manager.itemStart(t),
                a.load(t, function() {
                    n.manager.itemEnd(t)
                }, void 0, function() {
                    n.manager.itemError(t),
                    n.manager.itemEnd(t)
                })
            }
            if (void 0 !== t && 0 < t.length) {
                var a = new Gc(new Dc(e));
                a.setCrossOrigin(this.crossOrigin);
                for (var o = 0, s = t.length; o < s; o++) {
                    var c = t[o]
                      , l = c.url;
                    if (Array.isArray(l)) {
                        i[c.uuid] = [];
                        for (var h = 0, u = l.length; h < u; h++) {
                            var p = l[h]
                              , d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : n.resourcePath + p;
                            i[c.uuid].push(r(d))
                        }
                    } else {
                        d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.resourcePath + c.url;
                        i[c.uuid] = r(d)
                    }
                }
            }
            return i
        },
        parseTextures: function(t, e) {
            function n(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
                e[t])
            }
            var i = {};
            if (void 0 !== t)
                for (var r = 0, a = t.length; r < a; r++) {
                    var o, s = t[r];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                    void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image),
                    (o = Array.isArray(e[s.image]) ? new Dr(e[s.image]) : new hn(e[s.image])).needsUpdate = !0,
                    o.uuid = s.uuid,
                    void 0 !== s.name && (o.name = s.name),
                    void 0 !== s.mapping && (o.mapping = n(s.mapping, Ol)),
                    void 0 !== s.offset && o.offset.fromArray(s.offset),
                    void 0 !== s.repeat && o.repeat.fromArray(s.repeat),
                    void 0 !== s.center && o.center.fromArray(s.center),
                    void 0 !== s.rotation && (o.rotation = s.rotation),
                    void 0 !== s.wrap && (o.wrapS = n(s.wrap[0], Il),
                    o.wrapT = n(s.wrap[1], Il)),
                    void 0 !== s.format && (o.format = s.format),
                    void 0 !== s.type && (o.type = s.type),
                    void 0 !== s.encoding && (o.encoding = s.encoding),
                    void 0 !== s.minFilter && (o.minFilter = n(s.minFilter, Dl)),
                    void 0 !== s.magFilter && (o.magFilter = n(s.magFilter, Dl)),
                    void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy),
                    void 0 !== s.flipY && (o.flipY = s.flipY),
                    void 0 !== s.premultiplyAlpha && (o.premultiplyAlpha = s.premultiplyAlpha),
                    void 0 !== s.unpackAlignment && (o.unpackAlignment = s.unpackAlignment),
                    i[s.uuid] = o
                }
            return i
        },
        parseObject: function(t, e, a) {
            var n;
            function i(t) {
                return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t),
                e[t]
            }
            function r(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        for (var e = [], n = 0, i = t.length; n < i; n++) {
                            var r = t[n];
                            void 0 === a[r] && console.warn("THREE.ObjectLoader: Undefined material", r),
                            e.push(a[r])
                        }
                        return e
                    }
                    return void 0 === a[t] && console.warn("THREE.ObjectLoader: Undefined material", t),
                    a[t]
                }
            }
            switch (t.type) {
            case "Scene":
                n = new Ro,
                void 0 !== t.background && Number.isInteger(t.background) && (n.background = new Ln(t.background)),
                void 0 !== t.fog && ("Fog" === t.fog.type ? n.fog = new Po(t.fog.color,t.fog.near,t.fog.far) : "FogExp2" === t.fog.type && (n.fog = new Lo(t.fog.color,t.fog.density)));
                break;
            case "PerspectiveCamera":
                n = new io(t.fov,t.aspect,t.near,t.far),
                void 0 !== t.focus && (n.focus = t.focus),
                void 0 !== t.zoom && (n.zoom = t.zoom),
                void 0 !== t.filmGauge && (n.filmGauge = t.filmGauge),
                void 0 !== t.filmOffset && (n.filmOffset = t.filmOffset),
                void 0 !== t.view && (n.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                n = new vl(t.left,t.right,t.top,t.bottom,t.near,t.far),
                void 0 !== t.zoom && (n.zoom = t.zoom),
                void 0 !== t.view && (n.view = Object.assign({}, t.view));
                break;
            case "AmbientLight":
                n = new bl(t.color,t.intensity);
                break;
            case "DirectionalLight":
                n = new xl(t.color,t.intensity);
                break;
            case "PointLight":
                n = new gl(t.color,t.intensity,t.distance,t.decay);
                break;
            case "RectAreaLight":
                n = new wl(t.color,t.intensity,t.width,t.height);
                break;
            case "SpotLight":
                n = new ml(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
                break;
            case "HemisphereLight":
                n = new pl(t.color,t.groundColor,t.intensity);
                break;
            case "SkinnedMesh":
                console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
            case "Mesh":
                var o = i(t.geometry)
                  , s = r(t.material);
                n = o.bones && 0 < o.bones.length ? new zo(o,s) : new _r(o,s),
                void 0 !== t.drawMode && n.setDrawMode(t.drawMode);
                break;
            case "LOD":
                n = new No;
                break;
            case "Line":
                n = new Fo(i(t.geometry),r(t.material),t.mode);
                break;
            case "LineLoop":
                n = new Ho(i(t.geometry),r(t.material));
                break;
            case "LineSegments":
                n = new ko(i(t.geometry),r(t.material));
                break;
            case "PointCloud":
            case "Points":
                n = new jo(i(t.geometry),r(t.material));
                break;
            case "Sprite":
                n = new Do(r(t.material));
                break;
            case "Group":
                n = new eo;
                break;
            default:
                n = new ii
            }
            if (n.uuid = t.uuid,
            void 0 !== t.name && (n.name = t.name),
            void 0 !== t.matrix ? (n.matrix.fromArray(t.matrix),
            void 0 !== t.matrixAutoUpdate && (n.matrixAutoUpdate = t.matrixAutoUpdate),
            n.matrixAutoUpdate && n.matrix.decompose(n.position, n.quaternion, n.scale)) : (void 0 !== t.position && n.position.fromArray(t.position),
            void 0 !== t.rotation && n.rotation.fromArray(t.rotation),
            void 0 !== t.quaternion && n.quaternion.fromArray(t.quaternion),
            void 0 !== t.scale && n.scale.fromArray(t.scale)),
            void 0 !== t.castShadow && (n.castShadow = t.castShadow),
            void 0 !== t.receiveShadow && (n.receiveShadow = t.receiveShadow),
            t.shadow && (void 0 !== t.shadow.bias && (n.shadow.bias = t.shadow.bias),
            void 0 !== t.shadow.radius && (n.shadow.radius = t.shadow.radius),
            void 0 !== t.shadow.mapSize && n.shadow.mapSize.fromArray(t.shadow.mapSize),
            void 0 !== t.shadow.camera && (n.shadow.camera = this.parseObject(t.shadow.camera))),
            void 0 !== t.visible && (n.visible = t.visible),
            void 0 !== t.frustumCulled && (n.frustumCulled = t.frustumCulled),
            void 0 !== t.renderOrder && (n.renderOrder = t.renderOrder),
            void 0 !== t.userData && (n.userData = t.userData),
            void 0 !== t.layers && (n.layers.mask = t.layers),
            void 0 !== t.children)
                for (var c = t.children, l = 0; l < c.length; l++)
                    n.add(this.parseObject(c[l], e, a));
            if ("LOD" === t.type)
                for (var h = t.levels, u = 0; u < h.length; u++) {
                    var p = h[u]
                      , d = n.getObjectByProperty("uuid", p.object);
                    void 0 !== d && n.addLevel(d, p.distance)
                }
            return n
        }
    });
    var Al, Ll, Pl, Rl, Cl, Ol = {
        UVMapping: 300,
        CubeReflectionMapping: W,
        CubeRefractionMapping: ut,
        EquirectangularReflectionMapping: pt,
        EquirectangularRefractionMapping: dt,
        SphericalReflectionMapping: ft,
        CubeUVReflectionMapping: mt,
        CubeUVRefractionMapping: gt
    }, Il = {
        RepeatWrapping: C,
        ClampToEdgeWrapping: I,
        MirroredRepeatWrapping: O
    }, Dl = {
        NearestFilter: vt,
        NearestMipMapNearestFilter: wt,
        NearestMipMapLinearFilter: _t,
        LinearFilter: Mt,
        LinearMipMapNearestFilter: St,
        LinearMipMapLinearFilter: Tt
    };
    function Nl(t) {
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
        "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        this.manager = void 0 !== t ? t : Nc,
        this.options = void 0
    }
    function zl() {
        this.type = "ShapePath",
        this.color = new Ln,
        this.subPaths = [],
        this.currentPath = null
    }
    function Bl(t) {
        this.type = "Font",
        this.data = t
    }
    function Ul(t, e, n, i, r) {
        var a = r.glyphs[t] || r.glyphs["?"];
        if (a) {
            var o, s, c, l, h, u, p, d, f = new zl;
            if (a.o)
                for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), g = 0, v = m.length; g < v; ) {
                    switch (m[g++]) {
                    case "m":
                        o = m[g++] * e + n,
                        s = m[g++] * e + i,
                        f.moveTo(o, s);
                        break;
                    case "l":
                        o = m[g++] * e + n,
                        s = m[g++] * e + i,
                        f.lineTo(o, s);
                        break;
                    case "q":
                        c = m[g++] * e + n,
                        l = m[g++] * e + i,
                        h = m[g++] * e + n,
                        u = m[g++] * e + i,
                        f.quadraticCurveTo(h, u, c, l);
                        break;
                    case "b":
                        c = m[g++] * e + n,
                        l = m[g++] * e + i,
                        h = m[g++] * e + n,
                        u = m[g++] * e + i,
                        p = m[g++] * e + n,
                        d = m[g++] * e + i,
                        f.bezierCurveTo(h, u, p, d, c, l)
                    }
                }
            return {
                offsetX: a.ha * e,
                path: f
            }
        }
    }
    function Gl() {}
    Nl.prototype = {
        constructor: Nl,
        setOptions: function(t) {
            return this.options = t,
            this
        },
        load: function(e, n, t, i) {
            void 0 === e && (e = ""),
            void 0 !== this.path && (e = this.path + e),
            e = this.manager.resolveURL(e);
            var r = this
              , a = Ic.get(e);
            if (void 0 !== a)
                return r.manager.itemStart(e),
                setTimeout(function() {
                    n && n(a),
                    r.manager.itemEnd(e)
                }, 0),
                a;
            fetch(e).then(function(t) {
                return t.blob()
            }).then(function(t) {
                return void 0 === r.options ? createImageBitmap(t) : createImageBitmap(t, r.options)
            }).then(function(t) {
                Ic.add(e, t),
                n && n(t),
                r.manager.itemEnd(e)
            }).catch(function(t) {
                i && i(t),
                r.manager.itemError(e),
                r.manager.itemEnd(e)
            }),
            r.manager.itemStart(e)
        },
        setCrossOrigin: function() {
            return this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    },
    Object.assign(zl.prototype, {
        moveTo: function(t, e) {
            this.currentPath = new ll,
            this.subPaths.push(this.currentPath),
            this.currentPath.moveTo(t, e)
        },
        lineTo: function(t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function(t, e, n, i) {
            this.currentPath.quadraticCurveTo(t, e, n, i)
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            this.currentPath.bezierCurveTo(t, e, n, i, r, a)
        },
        splineThru: function(t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function(t, e) {
            function n(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) {
                    var r = t[n]
                      , a = new hl;
                    a.curves = r.curves,
                    e.push(a)
                }
                return e
            }
            function i(t, e) {
                for (var n = e.length, i = !1, r = n - 1, a = 0; a < n; r = a++) {
                    var o = e[r]
                      , s = e[a]
                      , c = s.x - o.x
                      , l = s.y - o.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (o = e[a],
                        c = -c,
                        s = e[r],
                        l = -l),
                        t.y < o.y || t.y > s.y)
                            continue;
                        if (t.y === o.y) {
                            if (t.x === o.x)
                                return !0
                        } else {
                            var h = l * (t.x - o.x) - c * (t.y - o.y);
                            if (0 == h)
                                return !0;
                            if (h < 0)
                                continue;
                            i = !i
                        }
                    } else {
                        if (t.y !== o.y)
                            continue;
                        if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x)
                            return !0
                    }
                }
                return i
            }
            var r = Ns.isClockWise
              , a = this.subPaths;
            if (0 === a.length)
                return [];
            if (!0 === e)
                return n(a);
            var o, s, c, l = [];
            if (1 === a.length)
                return s = a[0],
                (c = new hl).curves = s.curves,
                l.push(c),
                l;
            var h = !r(a[0].getPoints());
            h = t ? !h : h;
            var u, p, d = [], f = [], m = [], g = 0;
            f[g] = void 0,
            m[g] = [];
            for (var v = 0, y = a.length; v < y; v++)
                o = r(u = (s = a[v]).getPoints()),
                (o = t ? !o : o) ? (!h && f[g] && g++,
                f[g] = {
                    s: new hl,
                    p: u
                },
                f[g].s.curves = s.curves,
                h && g++,
                m[g] = []) : m[g].push({
                    h: s,
                    p: u[0]
                });
            if (!f[0])
                return n(a);
            if (1 < f.length) {
                for (var x = !1, b = [], w = 0, _ = f.length; w < _; w++)
                    d[w] = [];
                for (w = 0,
                _ = f.length; w < _; w++)
                    for (var M = m[w], S = 0; S < M.length; S++) {
                        for (var T = M[S], E = !0, A = 0; A < f.length; A++)
                            i(T.p, f[A].p) && (w !== A && b.push({
                                froms: w,
                                tos: A,
                                hole: S
                            }),
                            E ? (E = !1,
                            d[A].push(T)) : x = !0);
                        E && d[w].push(T)
                    }
                0 < b.length && (x || (m = d))
            }
            v = 0;
            for (var L = f.length; v < L; v++) {
                c = f[v].s,
                l.push(c);
                for (var P = 0, R = (p = m[v]).length; P < R; P++)
                    c.holes.push(p[P].h)
            }
            return l
        }
    }),
    Object.assign(Bl.prototype, {
        isFont: !0,
        generateShapes: function(t, e) {
            void 0 === e && (e = 100);
            for (var n = [], i = function(t, e, n) {
                for (var i = Array.from ? Array.from(t) : String(t).split(""), r = e / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r, o = [], s = 0, c = 0, l = 0; l < i.length; l++) {
                    var h = i[l];
                    if ("\n" === h)
                        s = 0,
                        c -= a;
                    else {
                        var u = Ul(h, r, s, c, n);
                        s += u.offsetX,
                        o.push(u.path)
                    }
                }
                return o
            }(t, e, this.data), r = 0, a = i.length; r < a; r++)
                Array.prototype.push.apply(n, i[r].toShapes());
            return n
        }
    }),
    Object.assign(function(t) {
        this.manager = void 0 !== t ? t : Nc
    }
    .prototype, {
        load: function(t, i, e, n) {
            var r = this
              , a = new Bc(this.manager);
            a.setPath(this.path),
            a.load(t, function(e) {
                var n;
                try {
                    n = JSON.parse(e)
                } catch (t) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                    n = JSON.parse(e.substring(65, e.length - 2))
                }
                var t = r.parse(n);
                i && i(t)
            }, e, n)
        },
        parse: function(t) {
            return new Bl(t)
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Gl.Handlers = {
        handlers: [],
        add: function(t, e) {
            this.handlers.push(t, e)
        },
        get: function(t) {
            for (var e = this.handlers, n = 0, i = e.length; n < i; n += 2) {
                var r = e[n]
                  , a = e[n + 1];
                if (r.test(t))
                    return a
            }
            return null
        }
    },
    Object.assign(Gl.prototype, {
        crossOrigin: "anonymous",
        onLoadStart: function() {},
        onLoadProgress: function() {},
        onLoadComplete: function() {},
        initMaterials: function(t, e, n) {
            for (var i = [], r = 0; r < t.length; ++r)
                i[r] = this.createMaterial(t[r], e, n);
            return i
        },
        createMaterial: (Al = {
            NoBlending: Z,
            NormalBlending: Q,
            AdditiveBlending: K,
            SubtractiveBlending: $,
            MultiplyBlending: tt,
            CustomBlending: et
        },
        Ll = new Ln,
        Pl = new kc,
        Rl = new _l,
        function(t, l, h) {
            var u = {};
            function e(t, e, n, i, r) {
                var a, o = l + t, s = Gl.Handlers.get(o);
                a = null !== s ? s.load(o) : (Pl.setCrossOrigin(h),
                Pl.load(o)),
                void 0 !== e && (a.repeat.fromArray(e),
                1 !== e[0] && (a.wrapS = C),
                1 !== e[1] && (a.wrapT = C)),
                void 0 !== n && a.offset.fromArray(n),
                void 0 !== i && ("repeat" === i[0] && (a.wrapS = C),
                "mirror" === i[0] && (a.wrapS = O),
                "repeat" === i[1] && (a.wrapT = C),
                "mirror" === i[1] && (a.wrapT = O)),
                void 0 !== r && (a.anisotropy = r);
                var c = Ce.generateUUID();
                return u[c] = a,
                c
            }
            var n = {
                uuid: Ce.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (var i in t) {
                var r = t[i];
                switch (i) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    n.name = r;
                    break;
                case "blending":
                    n.blending = Al[r];
                    break;
                case "colorAmbient":
                case "mapAmbient":
                    console.warn("THREE.Loader.createMaterial:", i, "is no longer supported.");
                    break;
                case "colorDiffuse":
                    n.color = Ll.fromArray(r).getHex();
                    break;
                case "colorSpecular":
                    n.specular = Ll.fromArray(r).getHex();
                    break;
                case "colorEmissive":
                    n.emissive = Ll.fromArray(r).getHex();
                    break;
                case "specularCoef":
                    n.shininess = r;
                    break;
                case "shading":
                    "basic" === r.toLowerCase() && (n.type = "MeshBasicMaterial"),
                    "phong" === r.toLowerCase() && (n.type = "MeshPhongMaterial"),
                    "standard" === r.toLowerCase() && (n.type = "MeshStandardMaterial");
                    break;
                case "mapDiffuse":
                    n.map = e(r, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapEmissive":
                    n.emissiveMap = e(r, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy);
                    break;
                case "mapEmissiveRepeat":
                case "mapEmissiveOffset":
                case "mapEmissiveWrap":
                case "mapEmissiveAnisotropy":
                    break;
                case "mapLight":
                    n.lightMap = e(r, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    n.aoMap = e(r, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    n.bumpMap = e(r, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    n.bumpScale = r;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    n.normalMap = e(r, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    n.normalScale = r;
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    n.specularMap = e(r, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapMetalness":
                    n.metalnessMap = e(r, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy);
                    break;
                case "mapMetalnessRepeat":
                case "mapMetalnessOffset":
                case "mapMetalnessWrap":
                case "mapMetalnessAnisotropy":
                    break;
                case "mapRoughness":
                    n.roughnessMap = e(r, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy);
                    break;
                case "mapRoughnessRepeat":
                case "mapRoughnessOffset":
                case "mapRoughnessWrap":
                case "mapRoughnessAnisotropy":
                    break;
                case "mapAlpha":
                    n.alphaMap = e(r, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    n.side = xt;
                    break;
                case "doubleSided":
                    n.side = J;
                    break;
                case "transparency":
                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                    n.opacity = r;
                    break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                    n[i] = r;
                    break;
                case "vertexColors":
                    !0 === r && (n.vertexColors = v),
                    "face" === r && (n.vertexColors = 1);
                    break;
                default:
                    console.error("THREE.Loader.createMaterial: Unsupported", i, r)
                }
            }
            return "MeshBasicMaterial" === n.type && delete n.emissive,
            "MeshPhongMaterial" !== n.type && delete n.specular,
            n.opacity < 1 && (n.transparent = !0),
            Rl.setTextures(u),
            Rl.parse(n)
        }
        )
    });
    var Fl, kl, Hl, Vl, jl, Wl, ql, Xl, Yl, Jl, Zl, Ql, Kl, $l, th, eh, nh, ih, rh, ah = function() {
        return void 0 === Cl && (Cl = new (window.AudioContext || window.webkitAudioContext)),
        Cl
    };
    function oh(t) {
        this.manager = void 0 !== t ? t : Nc
    }
    function sh(t, e, n, i) {
        ii.call(this),
        this.type = "CubeCamera";
        var a = new io(90,1,t,e);
        a.up.set(0, -1, 0),
        a.lookAt(new De(1,0,0)),
        this.add(a);
        var o = new io(90,1,t,e);
        o.up.set(0, -1, 0),
        o.lookAt(new De(-1,0,0)),
        this.add(o);
        var s = new io(90,1,t,e);
        s.up.set(0, 0, 1),
        s.lookAt(new De(0,1,0)),
        this.add(s);
        var c = new io(90,1,t,e);
        c.up.set(0, 0, -1),
        c.lookAt(new De(0,-1,0)),
        this.add(c);
        var l = new io(90,1,t,e);
        l.up.set(0, -1, 0),
        l.lookAt(new De(0,0,1)),
        this.add(l);
        var h = new io(90,1,t,e);
        h.up.set(0, -1, 0),
        h.lookAt(new De(0,0,-1)),
        this.add(h),
        i = i || {
            format: Gt,
            magFilter: Mt,
            minFilter: Mt
        },
        this.renderTarget = new fn(n,n,i),
        this.renderTarget.texture.name = "CubeCamera",
        this.update = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var n = t.getRenderTarget()
              , i = this.renderTarget
              , r = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1,
            t.setRenderTarget(i, 0),
            t.render(e, a),
            t.setRenderTarget(i, 1),
            t.render(e, o),
            t.setRenderTarget(i, 2),
            t.render(e, s),
            t.setRenderTarget(i, 3),
            t.render(e, c),
            t.setRenderTarget(i, 4),
            t.render(e, l),
            i.texture.generateMipmaps = r,
            t.setRenderTarget(i, 5),
            t.render(e, h),
            t.setRenderTarget(n)
        }
        ,
        this.clear = function(t, e, n, i) {
            for (var r = t.getRenderTarget(), a = this.renderTarget, o = 0; o < 6; o++)
                t.setRenderTarget(a, o),
                t.clear(e, n, i);
            t.setRenderTarget(r)
        }
    }
    function ch(t) {
        this.autoStart = void 0 === t || t,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    function lh() {
        ii.call(this),
        this.type = "AudioListener",
        this.context = ah(),
        this.gain = this.context.createGain(),
        this.gain.connect(this.context.destination),
        this.filter = null,
        this.timeDelta = 0
    }
    function hh(t) {
        ii.call(this),
        this.type = "Audio",
        this.listener = t,
        this.context = t.context,
        this.gain = this.context.createGain(),
        this.gain.connect(t.getInput()),
        this.autoplay = !1,
        this.buffer = null,
        this.detune = 0,
        this.loop = !1,
        this.startTime = 0,
        this.offset = 0,
        this.playbackRate = 1,
        this.isPlaying = !1,
        this.hasPlaybackControl = !0,
        this.sourceType = "empty",
        this.filters = []
    }
    function uh(t) {
        hh.call(this, t),
        this.panner = this.context.createPanner(),
        this.panner.connect(this.gain)
    }
    function ph(t, e) {
        this.analyser = t.context.createAnalyser(),
        this.analyser.fftSize = void 0 !== e ? e : 2048,
        this.data = new Uint8Array(this.analyser.frequencyBinCount),
        t.getOutput().connect(this.analyser)
    }
    function dh(t, e, n) {
        this.binding = t,
        this.valueSize = n;
        var i, r = Float64Array;
        switch (e) {
        case "quaternion":
            i = this._slerp;
            break;
        case "string":
        case "bool":
            r = Array,
            i = this._select;
            break;
        default:
            i = this._lerp
        }
        this.buffer = new r(4 * n),
        this._mixBufferRegion = i,
        this.cumulativeWeight = 0,
        this.useCount = 0,
        this.referenceCount = 0
    }
    Object.assign(oh.prototype, {
        load: function(t, n, e, i) {
            var r = new Bc(this.manager);
            r.setResponseType("arraybuffer"),
            r.setPath(this.path),
            r.load(t, function(t) {
                var e = t.slice(0);
                ah().decodeAudioData(e, function(t) {
                    n(t)
                })
            }, e, i)
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(function() {
        this.type = "StereoCamera",
        this.aspect = 1,
        this.eyeSep = .064,
        this.cameraL = new io,
        this.cameraL.layers.enable(1),
        this.cameraL.matrixAutoUpdate = !1,
        this.cameraR = new io,
        this.cameraR.layers.enable(2),
        this.cameraR.matrixAutoUpdate = !1
    }
    .prototype, {
        update: (Yl = new bn,
        Jl = new bn,
        function(t) {
            if (Fl !== this || kl !== t.focus || Hl !== t.fov || Vl !== t.aspect * this.aspect || jl !== t.near || Wl !== t.far || ql !== t.zoom || Xl !== this.eyeSep) {
                Fl = this,
                kl = t.focus,
                Hl = t.fov,
                Vl = t.aspect * this.aspect,
                jl = t.near,
                Wl = t.far,
                ql = t.zoom;
                var e, n, i = t.projectionMatrix.clone(), r = (Xl = this.eyeSep / 2) * jl / kl, a = jl * Math.tan(Ce.DEG2RAD * Hl * .5) / ql;
                Jl.elements[12] = -Xl,
                Yl.elements[12] = Xl,
                e = -a * Vl + r,
                n = a * Vl + r,
                i.elements[0] = 2 * jl / (n - e),
                i.elements[8] = (n + e) / (n - e),
                this.cameraL.projectionMatrix.copy(i),
                e = -a * Vl - r,
                n = a * Vl - r,
                i.elements[0] = 2 * jl / (n - e),
                i.elements[8] = (n + e) / (n - e),
                this.cameraR.projectionMatrix.copy(i)
            }
            this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Jl),
            this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Yl)
        }
        )
    }),
    (sh.prototype = Object.create(ii.prototype)).constructor = sh,
    Object.assign(ch.prototype, {
        start: function() {
            this.startTime = ("undefined" == typeof performance ? Date : performance).now(),
            this.oldTime = this.startTime,
            this.elapsedTime = 0,
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime(),
            this.running = !1,
            this.autoStart = !1
        },
        getElapsedTime: function() {
            return this.getDelta(),
            this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running)
                return this.start(),
                0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3,
                this.oldTime = e,
                this.elapsedTime += t
            }
            return t
        }
    }),
    lh.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: lh,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            return null !== this.filter && (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination),
            this.gain.connect(this.context.destination),
            this.filter = null),
            this
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(t) {
            return null !== this.filter ? (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
            this.filter = t,
            this.gain.connect(this.filter),
            this.filter.connect(this.context.destination),
            this
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
            this
        },
        updateMatrixWorld: (Zl = new De,
        Ql = new Ie,
        Kl = new De,
        $l = new De,
        th = new ch,
        function(t) {
            ii.prototype.updateMatrixWorld.call(this, t);
            var e = this.context.listener
              , n = this.up;
            if (this.timeDelta = th.getDelta(),
            this.matrixWorld.decompose(Zl, Ql, Kl),
            $l.set(0, 0, -1).applyQuaternion(Ql),
            e.positionX) {
                var i = this.context.currentTime + this.timeDelta;
                e.positionX.linearRampToValueAtTime(Zl.x, i),
                e.positionY.linearRampToValueAtTime(Zl.y, i),
                e.positionZ.linearRampToValueAtTime(Zl.z, i),
                e.forwardX.linearRampToValueAtTime($l.x, i),
                e.forwardY.linearRampToValueAtTime($l.y, i),
                e.forwardZ.linearRampToValueAtTime($l.z, i),
                e.upX.linearRampToValueAtTime(n.x, i),
                e.upY.linearRampToValueAtTime(n.y, i),
                e.upZ.linearRampToValueAtTime(n.z, i)
            } else
                e.setPosition(Zl.x, Zl.y, Zl.z),
                e.setOrientation($l.x, $l.y, $l.z, n.x, n.y, n.z)
        }
        )
    }),
    hh.prototype = Object.assign(Object.create(ii.prototype), {
        constructor: hh,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "audioNode",
            this.source = t,
            this.connect(),
            this
        },
        setMediaElementSource: function(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "mediaNode",
            this.source = this.context.createMediaElementSource(t),
            this.connect(),
            this
        },
        setBuffer: function(t) {
            return this.buffer = t,
            this.sourceType = "buffer",
            this.autoplay && this.play(),
            this
        },
        play: function() {
            if (!0 !== this.isPlaying) {
                if (!1 !== this.hasPlaybackControl) {
                    var t = this.context.createBufferSource();
                    return t.buffer = this.buffer,
                    t.loop = this.loop,
                    t.onended = this.onEnded.bind(this),
                    this.startTime = this.context.currentTime,
                    t.start(this.startTime, this.offset),
                    this.isPlaying = !0,
                    this.source = t,
                    this.setDetune(this.detune),
                    this.setPlaybackRate(this.playbackRate),
                    this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            } else
                console.warn("THREE.Audio: Audio is already playing.")
        },
        pause: function() {
            if (!1 !== this.hasPlaybackControl)
                return !0 === this.isPlaying && (this.source.stop(),
                this.source.onended = null,
                this.offset += (this.context.currentTime - this.startTime) * this.playbackRate,
                this.isPlaying = !1),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function() {
            if (!1 !== this.hasPlaybackControl)
                return this.source.stop(),
                this.source.onended = null,
                this.offset = 0,
                this.isPlaying = !1,
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(t) {
            return t || (t = []),
            !0 === this.isPlaying ? (this.disconnect(),
            this.filters = t,
            this.connect()) : this.filters = t,
            this
        },
        setDetune: function(t) {
            if (this.detune = t,
            void 0 !== this.source.detune)
                return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01),
                this
        },
        getDetune: function() {
            return this.detune
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function(t) {
            if (!1 !== this.hasPlaybackControl)
                return this.playbackRate = t,
                !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1) : this.loop
        },
        setLoop: function(t) {
            if (!1 !== this.hasPlaybackControl)
                return this.loop = t,
                !0 === this.isPlaying && (this.source.loop = this.loop),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
            this
        }
    }),
    uh.prototype = Object.assign(Object.create(hh.prototype), {
        constructor: uh,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(t) {
            return this.panner.refDistance = t,
            this
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(t) {
            return this.panner.rolloffFactor = t,
            this
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(t) {
            return this.panner.distanceModel = t,
            this
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(t) {
            return this.panner.maxDistance = t,
            this
        },
        setDirectionalCone: function(t, e, n) {
            return this.panner.coneInnerAngle = t,
            this.panner.coneOuterAngle = e,
            this.panner.coneOuterGain = n,
            this
        },
        updateMatrixWorld: (eh = new De,
        nh = new Ie,
        ih = new De,
        rh = new De,
        function(t) {
            if (ii.prototype.updateMatrixWorld.call(this, t),
            !0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
                this.matrixWorld.decompose(eh, nh, ih),
                rh.set(0, 0, 1).applyQuaternion(nh);
                var e = this.panner;
                if (e.positionX) {
                    var n = this.context.currentTime + this.listener.timeDelta;
                    e.positionX.linearRampToValueAtTime(eh.x, n),
                    e.positionY.linearRampToValueAtTime(eh.y, n),
                    e.positionZ.linearRampToValueAtTime(eh.z, n),
                    e.orientationX.linearRampToValueAtTime(rh.x, n),
                    e.orientationY.linearRampToValueAtTime(rh.y, n),
                    e.orientationZ.linearRampToValueAtTime(rh.z, n)
                } else
                    e.setPosition(eh.x, eh.y, eh.z),
                    e.setOrientation(rh.x, rh.y, rh.z)
            }
        }
        )
    }),
    Object.assign(ph.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data),
            this.data
        },
        getAverageFrequency: function() {
            for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++)
                t += e[n];
            return t / e.length
        }
    }),
    Object.assign(dh.prototype, {
        accumulate: function(t, e) {
            var n = this.buffer
              , i = this.valueSize
              , r = t * i + i
              , a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== i; ++o)
                    n[r + o] = n[o];
                a = e
            } else {
                var s = e / (a += e);
                this._mixBufferRegion(n, r, 0, s, i)
            }
            this.cumulativeWeight = a
        },
        apply: function(t) {
            var e = this.valueSize
              , n = this.buffer
              , i = t * e + e
              , r = this.cumulativeWeight
              , a = this.binding;
            if (this.cumulativeWeight = 0,
            r < 1) {
                var o = 3 * e;
                this._mixBufferRegion(n, i, o, 1 - r, e)
            }
            for (var s = e, c = e + e; s !== c; ++s)
                if (n[s] !== n[s + e]) {
                    a.setValue(n, i);
                    break
                }
        },
        saveOriginalState: function() {
            var t = this.binding
              , e = this.buffer
              , n = this.valueSize
              , i = 3 * n;
            t.getValue(e, i);
            for (var r = n, a = i; r !== a; ++r)
                e[r] = e[i + r % n];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        },
        _select: function(t, e, n, i, r) {
            if (.5 <= i)
                for (var a = 0; a !== r; ++a)
                    t[e + a] = t[n + a]
        },
        _slerp: function(t, e, n, i) {
            Ie.slerpFlat(t, e, t, e, t, n, i)
        },
        _lerp: function(t, e, n, i, r) {
            for (var a = 1 - i, o = 0; o !== r; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[n + o] * i
            }
        }
    });
    var fh, mh, gh, vh, yh, xh, bh, wh, _h, Mh, Sh, Th, Eh, Ah, Lh, Ph, Rh, Ch, Oh, Ih, Dh, Nh, zh, Bh, Uh, Gh, Fh, kh, Hh, Vh, jh, Wh, qh, Xh, Yh = "\\[\\]\\.:\\/";
    function Jh(t, e, n) {
        var i = n || Zh.parseTrackName(e);
        this._targetGroup = t,
        this._bindings = t.subscribe_(e, i)
    }
    function Zh(t, e, n) {
        this.path = e,
        this.parsedPath = n || Zh.parseTrackName(e),
        this.node = Zh.findNode(t, this.parsedPath.nodeName) || t,
        this.rootNode = t
    }
    function Qh(t, e, n) {
        this._mixer = t,
        this._clip = e,
        this._localRoot = n || null;
        for (var i = e.tracks, r = i.length, a = new Array(r), o = {
            endingStart: me,
            endingEnd: me
        }, s = 0; s !== r; ++s) {
            var c = i[s].createInterpolant(null);
            (a[s] = c).settings = o
        }
        this._interpolantSettings = o,
        this._interpolants = a,
        this._propertyBindings = new Array(r),
        this._cacheIndex = null,
        this._byClipCacheIndex = null,
        this._timeScaleInterpolant = null,
        this._weightInterpolant = null,
        this.loop = 2201,
        this._loopCount = -1,
        this._startTime = null,
        this.time = 0,
        this.timeScale = 1,
        this._effectiveTimeScale = 1,
        this.weight = 1,
        this._effectiveWeight = 1,
        this.repetitions = 1 / 0,
        this.paused = !1,
        this.enabled = !0,
        this.clampWhenFinished = !1,
        this.zeroSlopeAtStart = !0,
        this.zeroSlopeAtEnd = !0
    }
    function Kh(t) {
        this._root = t,
        this._initMemoryManager(),
        this._accuIndex = 0,
        this.time = 0,
        this.timeScale = 1
    }
    function $h(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        t = arguments[1]),
        this.value = t
    }
    function tu() {
        Ui.call(this),
        this.type = "InstancedBufferGeometry",
        this.maxInstancedCount = void 0
    }
    function eu(t, e, n) {
        Co.call(this, t, e),
        this.meshPerAttribute = n || 1
    }
    function nu(t, e, n, i) {
        "number" == typeof n && (i = n,
        n = !1,
        console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),
        di.call(this, t, e, n),
        this.meshPerAttribute = i || 1
    }
    function iu(t, e) {
        return t.distance - e.distance
    }
    function ru(t, e, n, i) {
        if (!1 !== t.visible && (t.raycast(e, n),
        !0 === i))
            for (var r = t.children, a = 0, o = r.length; a < o; a++)
                ru(r[a], e, n, !0)
    }
    function au(t, e) {
        this.min = void 0 !== t ? t : new Oe(1 / 0,1 / 0),
        this.max = void 0 !== e ? e : new Oe(-1 / 0,-1 / 0)
    }
    function ou(t, e) {
        this.start = void 0 !== t ? t : new De,
        this.end = void 0 !== e ? e : new De
    }
    function su(t) {
        ii.call(this),
        this.material = t,
        this.render = function() {}
    }
    function cu(t, e, n, i) {
        this.object = t,
        this.size = void 0 !== e ? e : 1;
        var r = void 0 !== n ? n : 16711680
          , a = void 0 !== i ? i : 1
          , o = 0
          , s = this.object.geometry;
        s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
        var c = new Ui
          , l = new wi(2 * o * 3,3);
        c.addAttribute("position", l),
        ko.call(this, c, new Go({
            color: r,
            linewidth: a
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function lu(t, e) {
        ii.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = e;
        for (var n = new Ui, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++,
        a++) {
            var o = r / 32 * Math.PI * 2
              , s = a / 32 * Math.PI * 2;
            i.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
        }
        n.addAttribute("position", new wi(i,3));
        var c = new Go({
            fog: !1
        });
        this.cone = new ko(n,c),
        this.add(this.cone),
        this.update()
    }
    function hu(t) {
        for (var e = function t(e) {
            var n = [];
            e && e.isBone && n.push(e);
            for (var i = 0; i < e.children.length; i++)
                n.push.apply(n, t(e.children[i]));
            return n
        }(t), n = new Ui, i = [], r = [], a = new Ln(0,0,1), o = new Ln(0,1,0), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && (i.push(0, 0, 0),
            i.push(0, 0, 0),
            r.push(a.r, a.g, a.b),
            r.push(o.r, o.g, o.b))
        }
        n.addAttribute("position", new wi(i,3)),
        n.addAttribute("color", new wi(r,3));
        var l = new Go({
            vertexColors: v,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        ko.call(this, n, l),
        this.root = t,
        this.bones = e,
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    function uu(t, e, n) {
        this.light = t,
        this.light.updateMatrixWorld(),
        this.color = n;
        var i = new Ws(e,4,2)
          , r = new wr({
            wireframe: !0,
            fog: !1
        });
        _r.call(this, i, r),
        this.matrix = this.light.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function pu(t, e) {
        this.type = "RectAreaLightHelper",
        this.light = t,
        this.color = e;
        var n = new Ui;
        n.addAttribute("position", new wi([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0],3)),
        n.computeBoundingSphere();
        var i = new Go({
            fog: !1
        });
        Fo.call(this, n, i);
        var r = new Ui;
        r.addAttribute("position", new wi([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0],3)),
        r.computeBoundingSphere(),
        this.add(new _r(r,new wr({
            side: xt,
            fog: !1
        }))),
        this.update()
    }
    function du(t, e, n) {
        ii.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = n;
        var i = new is(e);
        i.rotateY(.5 * Math.PI),
        this.material = new wr({
            wireframe: !0,
            fog: !1
        }),
        void 0 === this.color && (this.material.vertexColors = v);
        var r = i.getAttribute("position")
          , a = new Float32Array(3 * r.count);
        i.addAttribute("color", new di(a,3)),
        this.add(new _r(i,this.material)),
        this.update()
    }
    function fu(t, e, n, i) {
        t = t || 10,
        e = e || 10,
        n = new Ln(void 0 !== n ? n : 4473924),
        i = new Ln(void 0 !== i ? i : 8947848);
        for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], l = 0, h = 0, u = -o; l <= e; l++,
        u += a) {
            s.push(-o, 0, u, o, 0, u),
            s.push(u, 0, -o, u, 0, o);
            var p = l === r ? n : i;
            p.toArray(c, h),
            h += 3,
            p.toArray(c, h),
            h += 3,
            p.toArray(c, h),
            h += 3,
            p.toArray(c, h),
            h += 3
        }
        var d = new Ui;
        d.addAttribute("position", new wi(s,3)),
        d.addAttribute("color", new wi(c,3));
        var f = new Go({
            vertexColors: v
        });
        ko.call(this, d, f)
    }
    function mu(t, e, n, i, r, a) {
        t = t || 10,
        e = e || 16,
        n = n || 8,
        i = i || 64,
        r = new Ln(void 0 !== r ? r : 4473924),
        a = new Ln(void 0 !== a ? a : 8947848);
        var o, s, c, l, h, u, p, d = [], f = [];
        for (l = 0; l <= e; l++)
            c = l / e * (2 * Math.PI),
            o = Math.sin(c) * t,
            s = Math.cos(c) * t,
            d.push(0, 0, 0),
            d.push(o, 0, s),
            p = 1 & l ? r : a,
            f.push(p.r, p.g, p.b),
            f.push(p.r, p.g, p.b);
        for (l = 0; l <= n; l++)
            for (p = 1 & l ? r : a,
            u = t - t / n * l,
            h = 0; h < i; h++)
                c = h / i * (2 * Math.PI),
                o = Math.sin(c) * u,
                s = Math.cos(c) * u,
                d.push(o, 0, s),
                f.push(p.r, p.g, p.b),
                c = (h + 1) / i * (2 * Math.PI),
                o = Math.sin(c) * u,
                s = Math.cos(c) * u,
                d.push(o, 0, s),
                f.push(p.r, p.g, p.b);
        var m = new Ui;
        m.addAttribute("position", new wi(d,3)),
        m.addAttribute("color", new wi(f,3));
        var g = new Go({
            vertexColors: v
        });
        ko.call(this, m, g)
    }
    function gu(t, e, n, i) {
        this.audio = t,
        this.range = e || 1,
        this.divisionsInnerAngle = n || 16,
        this.divisionsOuterAngle = i || 2;
        var r = new Ui
          , a = this.divisionsInnerAngle + 2 * this.divisionsOuterAngle
          , o = new Float32Array(3 * (3 * a + 3));
        r.addAttribute("position", new di(o,3));
        var s = new Go({
            color: 65280
        })
          , c = new Go({
            color: 16776960
        });
        Fo.call(this, r, [c, s]),
        this.update()
    }
    function vu(t, e, n, i) {
        this.object = t,
        this.size = void 0 !== e ? e : 1;
        var r = void 0 !== n ? n : 16776960
          , a = void 0 !== i ? i : 1
          , o = 0
          , s = this.object.geometry;
        s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new Ui
          , l = new wi(2 * o * 3,3);
        c.addAttribute("position", l),
        ko.call(this, c, new Go({
            color: r,
            linewidth: a
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function yu(t, e, n) {
        ii.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = n,
        void 0 === e && (e = 1);
        var i = new Ui;
        i.addAttribute("position", new wi([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0],3));
        var r = new Go({
            fog: !1
        });
        this.lightPlane = new Fo(i,r),
        this.add(this.lightPlane),
        (i = new Ui).addAttribute("position", new wi([0, 0, 0, 0, 0, 1],3)),
        this.targetLine = new Fo(i,r),
        this.add(this.targetLine),
        this.update()
    }
    function xu(t) {
        var e = new Ui
          , n = new Go({
            color: 16777215,
            vertexColors: 1
        })
          , i = []
          , r = []
          , a = {}
          , o = new Ln(16755200)
          , s = new Ln(16711680)
          , c = new Ln(43775)
          , l = new Ln(16777215)
          , h = new Ln(3355443);
        function u(t, e, n) {
            p(t, n),
            p(e, n)
        }
        function p(t, e) {
            i.push(0, 0, 0),
            r.push(e.r, e.g, e.b),
            void 0 === a[t] && (a[t] = []),
            a[t].push(i.length / 3 - 1)
        }
        u("n1", "n2", o),
        u("n2", "n4", o),
        u("n4", "n3", o),
        u("n3", "n1", o),
        u("f1", "f2", o),
        u("f2", "f4", o),
        u("f4", "f3", o),
        u("f3", "f1", o),
        u("n1", "f1", o),
        u("n2", "f2", o),
        u("n3", "f3", o),
        u("n4", "f4", o),
        u("p", "n1", s),
        u("p", "n2", s),
        u("p", "n3", s),
        u("p", "n4", s),
        u("u1", "u2", c),
        u("u2", "u3", c),
        u("u3", "u1", c),
        u("c", "t", l),
        u("p", "c", h),
        u("cn1", "cn2", h),
        u("cn3", "cn4", h),
        u("cf1", "cf2", h),
        u("cf3", "cf4", h),
        e.addAttribute("position", new wi(i,3)),
        e.addAttribute("color", new wi(r,3)),
        ko.call(this, e, n),
        this.camera = t,
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.pointMap = a,
        this.update()
    }
    function bu(t, e) {
        this.object = t,
        void 0 === e && (e = 16776960);
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , i = new Float32Array(24)
          , r = new Ui;
        r.setIndex(new di(n,1)),
        r.addAttribute("position", new di(i,3)),
        ko.call(this, r, new Go({
            color: e
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function wu(t, e) {
        this.type = "Box3Helper",
        this.box = t;
        var n = void 0 !== e ? e : 16776960
          , i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , r = new Ui;
        r.setIndex(new di(i,1)),
        r.addAttribute("position", new wi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],3)),
        ko.call(this, r, new Go({
            color: n
        })),
        this.geometry.computeBoundingSphere()
    }
    function _u(t, e, n) {
        this.type = "PlaneHelper",
        this.plane = t,
        this.size = void 0 === e ? 1 : e;
        var i = void 0 !== n ? n : 16776960
          , r = new Ui;
        r.addAttribute("position", new wi([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],3)),
        r.computeBoundingSphere(),
        Fo.call(this, r, new Go({
            color: i
        }));
        var a = new Ui;
        a.addAttribute("position", new wi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],3)),
        a.computeBoundingSphere(),
        this.add(new _r(a,new wr({
            color: i,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })))
    }
    function Mu(t, e, n, i, r, a) {
        ii.call(this),
        void 0 === t && (t = new De(0,0,1)),
        void 0 === e && (e = new De(0,0,0)),
        void 0 === n && (n = 1),
        void 0 === i && (i = 16776960),
        void 0 === r && (r = .2 * n),
        void 0 === a && (a = .2 * r),
        void 0 === jh && ((jh = new Ui).addAttribute("position", new wi([0, 0, 0, 0, 1, 0],3)),
        (Wh = new ec(0,.5,1,5,1)).translate(0, -.5, 0)),
        this.position.copy(e),
        this.line = new Fo(jh,new Go({
            color: i
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new _r(Wh,new wr({
            color: i
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(t),
        this.setLength(n, r, a)
    }
    function Su(t) {
        var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t]
          , n = new Ui;
        n.addAttribute("position", new wi(e,3)),
        n.addAttribute("color", new wi([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],3));
        var i = new Go({
            vertexColors: v
        });
        ko.call(this, n, i)
    }
    Object.assign(Jh.prototype, {
        getValue: function(t, e) {
            this.bind();
            var n = this._targetGroup.nCachedObjects_
              , i = this._bindings[n];
            void 0 !== i && i.getValue(t, e)
        },
        setValue: function(t, e) {
            for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
                n[i].setValue(t, e)
        },
        bind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
                t[e].bind()
        },
        unbind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
                t[e].unbind()
        }
    }),
    Object.assign(Zh, {
        Composite: Jh,
        create: function(t, e, n) {
            return t && t.isAnimationObjectGroup ? new Zh.Composite(t,e,n) : new Zh(t,e,n)
        },
        sanitizeNodeName: (_h = new RegExp("[" + Yh + "]","g"),
        function(t) {
            return t.replace(/\s/g, "_").replace(_h, "")
        }
        ),
        parseTrackName: (fh = "[^" + Yh + "]",
        mh = "[^" + Yh.replace("\\.", "") + "]",
        gh = /((?:WC+[\/:])*)/.source.replace("WC", fh),
        vh = /(WCOD+)?/.source.replace("WCOD", mh),
        yh = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", fh),
        xh = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", fh),
        bh = new RegExp("^" + gh + vh + yh + xh + "$"),
        wh = ["material", "materials", "bones"],
        function(t) {
            var e = bh.exec(t);
            if (!e)
                throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            var n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }
              , i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
                var r = n.nodeName.substring(i + 1);
                -1 !== wh.indexOf(r) && (n.nodeName = n.nodeName.substring(0, i),
                n.objectName = r)
            }
            if (null === n.propertyName || 0 === n.propertyName.length)
                throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n
        }
        ),
        findNode: function(t, r) {
            if (!r || "" === r || "root" === r || "." === r || -1 === r || r === t.name || r === t.uuid)
                return t;
            if (t.skeleton) {
                var e = t.skeleton.getBoneByName(r);
                if (void 0 !== e)
                    return e
            }
            if (t.children) {
                var a = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.name === r || n.uuid === r)
                            return n;
                        var i = a(n.children);
                        if (i)
                            return i
                    }
                    return null
                }
                  , n = a(t.children);
                if (n)
                    return n
            }
            return null
        }
    }),
    Object.assign(Zh.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(t, e) {
            t[e] = this.node[this.propertyName]
        }
        , function(t, e) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i)
                t[e++] = n[i]
        }
        , function(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }
        , function(t, e) {
            this.resolvedProperty.toArray(t, e)
        }
        ],
        SetterByBindingTypeAndVersioning: [[function(t, e) {
            this.targetObject[this.propertyName] = t[e]
        }
        , function(t, e) {
            this.targetObject[this.propertyName] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.targetObject[this.propertyName] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i)
                n[i] = t[e++]
        }
        , function(t, e) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i)
                n[i] = t[e++];
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i)
                n[i] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty.fromArray(t, e)
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ]],
        getValue: function(t, e) {
            this.bind(),
            this.getValue(t, e)
        },
        setValue: function(t, e) {
            this.bind(),
            this.setValue(t, e)
        },
        bind: function() {
            var t = this.node
              , e = this.parsedPath
              , n = e.objectName
              , i = e.propertyName
              , r = e.propertyIndex;
            if (t || (t = Zh.findNode(this.rootNode, e.nodeName) || this.rootNode,
            this.node = t),
            this.getValue = this._getValue_unavailable,
            this.setValue = this._setValue_unavailable,
            t) {
                if (n) {
                    var a = e.objectIndex;
                    switch (n) {
                    case "materials":
                        if (!t.material)
                            return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t.material.materials)
                            return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton)
                            return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t = t.skeleton.bones;
                        for (var o = 0; o < t.length; o++)
                            if (t[o].name === a) {
                                a = o;
                                break
                            }
                        break;
                    default:
                        if (void 0 === t[n])
                            return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t = t[n]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a])
                            return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                        t = t[a]
                    }
                }
                var s = t[i];
                if (void 0 !== s) {
                    var c = this.Versioning.None;
                    void 0 !== (this.targetObject = t).needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                    var l = this.BindingType.Direct;
                    if (void 0 !== r) {
                        if ("morphTargetInfluences" === i) {
                            if (!t.geometry)
                                return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes)
                                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                                    if (t.geometry.morphAttributes.position[o].name === r) {
                                        r = o;
                                        break
                                    }
                            } else {
                                if (!t.geometry.morphTargets)
                                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                                    if (t.geometry.morphTargets[o].name === r) {
                                        r = o;
                                        break
                                    }
                            }
                        }
                        l = this.BindingType.ArrayElement,
                        this.resolvedProperty = s,
                        this.propertyIndex = r
                    } else
                        void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray,
                        this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray,
                        this.resolvedProperty = s) : this.propertyName = i;
                    this.getValue = this.GetterByBindingType[l],
                    this.setValue = this.SetterByBindingTypeAndVersioning[l][c]
                } else {
                    var h = e.nodeName;
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + h + "." + i + " but it wasn't found.", t)
                }
            } else
                console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
        }
    }),
    //!\ DECLARE ALIAS AFTER assign prototype !
    Object.assign(Zh.prototype, {
        _getValue_unbound: Zh.prototype.getValue,
        _setValue_unbound: Zh.prototype.setValue
    }),
    Object.assign(function() {
        this.uuid = Ce.generateUUID(),
        this._objects = Array.prototype.slice.call(arguments),
        this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var e = 0, n = arguments.length; e !== n; ++e)
            t[arguments[e].uuid] = e;
        this._paths = [],
        this._parsedPaths = [],
        this._bindings = [],
        this._bindingsIndicesByPath = {};
        var i = this;
        this.stats = {
            objects: {
                get total() {
                    return i._objects.length
                },
                get inUse() {
                    return this.total - i.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return i._bindings.length
            }
        }
    }
    .prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, l = 0, h = arguments.length; l !== h; ++l) {
                var u = arguments[l]
                  , p = u.uuid
                  , d = i[p];
                if (void 0 === d) {
                    d = e++,
                    i[p] = d,
                    t.push(u);
                    for (var f = 0, m = s; f !== m; ++f)
                        o[f].push(new Zh(u,r[f],a[f]))
                } else if (d < n) {
                    c = t[d];
                    var g = --n
                      , v = t[g];
                    t[i[v.uuid] = d] = v,
                    t[i[p] = g] = u;
                    for (f = 0,
                    m = s; f !== m; ++f) {
                        var y = o[f]
                          , x = y[g]
                          , b = y[d];
                        y[d] = x,
                        void 0 === b && (b = new Zh(u,r[f],a[f])),
                        y[g] = b
                    }
                } else
                    t[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = n
        },
        remove: function() {
            for (var t = this._objects, e = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, r = i.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a]
                  , c = s.uuid
                  , l = n[c];
                if (void 0 !== l && e <= l) {
                    var h = e++
                      , u = t[h];
                    t[n[u.uuid] = l] = u,
                    t[n[c] = h] = s;
                    for (var p = 0, d = r; p !== d; ++p) {
                        var f = i[p]
                          , m = f[h]
                          , g = f[l];
                        f[l] = m,
                        f[h] = g
                    }
                }
            }
            this.nCachedObjects_ = e
        },
        uncache: function() {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o].uuid
                  , l = i[c];
                if (void 0 !== l)
                    if (delete i[c],
                    l < n) {
                        var h = --n
                          , u = t[h]
                          , p = t[v = --e];
                        t[i[u.uuid] = l] = u,
                        t[i[p.uuid] = h] = p,
                        t.pop();
                        for (var d = 0, f = a; d !== f; ++d) {
                            var m = (y = r[d])[h]
                              , g = y[v];
                            y[l] = m,
                            y[h] = g,
                            y.pop()
                        }
                    } else {
                        var v;
                        t[i[(p = t[v = --e]).uuid] = l] = p,
                        t.pop();
                        for (d = 0,
                        f = a; d !== f; ++d) {
                            var y;
                            (y = r[d])[l] = y[v],
                            y.pop()
                        }
                    }
            }
            this.nCachedObjects_ = n
        },
        subscribe_: function(t, e) {
            var n = this._bindingsIndicesByPath
              , i = n[t]
              , r = this._bindings;
            if (void 0 !== i)
                return r[i];
            var a = this._paths
              , o = this._parsedPaths
              , s = this._objects
              , c = s.length
              , l = this.nCachedObjects_
              , h = new Array(c);
            i = r.length,
            n[t] = i,
            a.push(t),
            o.push(e),
            r.push(h);
            for (var u = l, p = s.length; u !== p; ++u) {
                var d = s[u];
                h[u] = new Zh(d,t,e)
            }
            return h
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath
              , n = e[t];
            if (void 0 !== n) {
                var i = this._paths
                  , r = this._parsedPaths
                  , a = this._bindings
                  , o = a.length - 1
                  , s = a[o];
                a[e[t[o]] = n] = s,
                a.pop(),
                r[n] = r[o],
                r.pop(),
                i[n] = i[o],
                i.pop()
            }
        }
    }),
    Object.assign(Qh.prototype, {
        play: function() {
            return this._mixer._activateAction(this),
            this
        },
        stop: function() {
            return this._mixer._deactivateAction(this),
            this.reset()
        },
        reset: function() {
            return this.paused = !1,
            this.enabled = !0,
            this.time = 0,
            this._loopCount = -1,
            this._startTime = null,
            this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(t) {
            return this._startTime = t,
            this
        },
        setLoop: function(t, e) {
            return this.loop = t,
            this.repetitions = e,
            this
        },
        setEffectiveWeight: function(t) {
            return this.weight = t,
            this._effectiveWeight = this.enabled ? t : 0,
            this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function(t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function(t, e, n) {
            if (t.fadeOut(e),
            this.fadeIn(e),
            n) {
                var i = this._clip.duration
                  , r = t._clip.duration
                  , a = r / i
                  , o = i / r;
                t.warp(1, a, e),
                this.warp(o, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, n) {
            return t.crossFadeFrom(this, e, n)
        },
        stopFading: function() {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        setEffectiveTimeScale: function(t) {
            return this.timeScale = t,
            this._effectiveTimeScale = this.paused ? 0 : t,
            this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(t) {
            return this.timeScale = this._clip.duration / t,
            this.stopWarping()
        },
        syncWith: function(t) {
            return this.time = t.time,
            this.timeScale = t.timeScale,
            this.stopWarping()
        },
        halt: function(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function(t, e, n) {
            var i = this._mixer
              , r = i.time
              , a = this._timeScaleInterpolant
              , o = this.timeScale;
            null === a && (a = i._lendControlInterpolant(),
            this._timeScaleInterpolant = a);
            var s = a.parameterPositions
              , c = a.sampleValues;
            return s[0] = r,
            s[1] = r + n,
            c[0] = t / o,
            c[1] = e / o,
            this
        },
        stopWarping: function() {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(t, e, n, i) {
            if (this.enabled) {
                var r = this._startTime;
                if (null !== r) {
                    var a = (t - r) * n;
                    if (a < 0 || 0 === n)
                        return;
                    this._startTime = null,
                    e = n * a
                }
                e *= this._updateTimeScale(t);
                var o = this._updateTime(e)
                  , s = this._updateWeight(t);
                if (0 < s)
                    for (var c = this._interpolants, l = this._propertyBindings, h = 0, u = c.length; h !== u; ++h)
                        c[h].evaluate(o),
                        l[h].accumulate(i, s)
            } else
                this._updateWeight(t)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var n = this._weightInterpolant;
                if (null !== n) {
                    var i = n.evaluate(t)[0];
                    e *= i,
                    t > n.parameterPositions[1] && (this.stopFading(),
                    0 === i && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e
        },
        _updateTimeScale: function(t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var n = this._timeScaleInterpolant;
                if (null !== n)
                    e *= n.evaluate(t)[0],
                    t > n.parameterPositions[1] && (this.stopWarping(),
                    0 === e ? this.paused = !0 : this.timeScale = e)
            }
            return this._effectiveTimeScale = e
        },
        _updateTime: function(t) {
            var e = this.time + t
              , n = this._clip.duration
              , i = this.loop
              , r = this._loopCount
              , a = 2202 === i;
            if (0 === t)
                return -1 === r ? e : a && 1 == (1 & r) ? n - e : e;
            if (2200 === i) {
                -1 === r && (this._loopCount = 0,
                this._setEndings(!0, !0, !1));
                t: {
                    if (n <= e)
                        e = n;
                    else {
                        if (!(e < 0))
                            break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                if (-1 === r && (0 <= t ? (r = 0,
                this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)),
                n <= e || e < 0) {
                    var o = Math.floor(e / n);
                    e -= n * o,
                    r += Math.abs(o);
                    var s = this.repetitions - r;
                    if (s <= 0)
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        e = 0 < t ? n : 0,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: 0 < t ? 1 : -1
                        });
                    else {
                        if (1 == s) {
                            var c = t < 0;
                            this._setEndings(c, !c, a)
                        } else
                            this._setEndings(!1, !1, a);
                        this._loopCount = r,
                        this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: o
                        })
                    }
                }
                if (a && 1 == (1 & r))
                    return n - (this.time = e)
            }
            return this.time = e
        },
        _setEndings: function(t, e, n) {
            var i = this._interpolantSettings;
            n ? (i.endingStart = ge,
            i.endingEnd = ge) : (i.endingStart = t ? this.zeroSlopeAtStart ? ge : me : 2402,
            i.endingEnd = e ? this.zeroSlopeAtEnd ? ge : me : 2402)
        },
        _scheduleFading: function(t, e, n) {
            var i = this._mixer
              , r = i.time
              , a = this._weightInterpolant;
            null === a && (a = i._lendControlInterpolant(),
            this._weightInterpolant = a);
            var o = a.parameterPositions
              , s = a.sampleValues;
            return o[0] = r,
            s[0] = e,
            o[1] = r + t,
            s[1] = n,
            this
        }
    }),
    Kh.prototype = Object.assign(Object.create(i.prototype), {
        constructor: Kh,
        _bindAction: function(t, e) {
            var n = t._localRoot || this._root
              , i = t._clip.tracks
              , r = i.length
              , a = t._propertyBindings
              , o = t._interpolants
              , s = n.uuid
              , c = this._bindingsByRootAndName
              , l = c[s];
            void 0 === l && (l = {},
            c[s] = l);
            for (var h = 0; h !== r; ++h) {
                var u = i[h]
                  , p = u.name
                  , d = l[p];
                if (void 0 !== d)
                    a[h] = d;
                else {
                    if (void 0 !== (d = a[h])) {
                        null === d._cacheIndex && (++d.referenceCount,
                        this._addInactiveBinding(d, s, p));
                        continue
                    }
                    var f = e && e._propertyBindings[h].binding.parsedPath;
                    ++(d = new dh(Zh.create(n, p, f),u.ValueTypeName,u.getValueSize())).referenceCount,
                    this._addInactiveBinding(d, s, p),
                    a[h] = d
                }
                o[h].resultBuffer = d.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid
                      , n = t._clip.uuid
                      , i = this._actionsByClip[n];
                    this._bindAction(t, i && i.knownActions[0]),
                    this._addInactiveAction(t, n, e)
                }
                for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                    var s = r[a];
                    0 == s.useCount++ && (this._lendBinding(s),
                    s.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                    var r = e[n];
                    0 == --r.useCount && (r.restoreOriginalState(),
                    this._takeBackBinding(r))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [],
            this._nActiveActions = 0,
            this._actionsByClip = {},
            this._bindings = [],
            this._nActiveBindings = 0,
            this._bindingsByRootAndName = {},
            this._controlInterpolants = [],
            this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        },
        _addInactiveAction: function(t, e, n) {
            var i = this._actions
              , r = this._actionsByClip
              , a = r[e];
            if (void 0 === a)
                a = {
                    knownActions: [t],
                    actionByRoot: {}
                },
                t._byClipCacheIndex = 0,
                r[e] = a;
            else {
                var o = a.knownActions;
                t._byClipCacheIndex = o.length,
                o.push(t)
            }
            t._cacheIndex = i.length,
            i.push(t),
            a.actionByRoot[n] = t
        },
        _removeInactiveAction: function(t) {
            var e = this._actions
              , n = e[e.length - 1]
              , i = t._cacheIndex;
            e[n._cacheIndex = i] = n,
            e.pop(),
            t._cacheIndex = null;
            var r = t._clip.uuid
              , a = this._actionsByClip
              , o = a[r]
              , s = o.knownActions
              , c = s[s.length - 1]
              , l = t._byClipCacheIndex;
            s[c._byClipCacheIndex = l] = c,
            s.pop(),
            t._byClipCacheIndex = null,
            delete o.actionByRoot[(t._localRoot || this._root).uuid],
            0 === s.length && delete a[r],
            this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                var r = e[n];
                0 == --r.referenceCount && this._removeInactiveBinding(r)
            }
        },
        _lendAction: function(t) {
            var e = this._actions
              , n = t._cacheIndex
              , i = this._nActiveActions++
              , r = e[i];
            e[t._cacheIndex = i] = t,
            e[r._cacheIndex = n] = r
        },
        _takeBackAction: function(t) {
            var e = this._actions
              , n = t._cacheIndex
              , i = --this._nActiveActions
              , r = e[i];
            e[t._cacheIndex = i] = t,
            e[r._cacheIndex = n] = r
        },
        _addInactiveBinding: function(t, e, n) {
            var i = this._bindingsByRootAndName
              , r = i[e]
              , a = this._bindings;
            void 0 === r && (r = {},
            i[e] = r),
            (r[n] = t)._cacheIndex = a.length,
            a.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings
              , n = t.binding
              , i = n.rootNode.uuid
              , r = n.path
              , a = this._bindingsByRootAndName
              , o = a[i]
              , s = e[e.length - 1]
              , c = t._cacheIndex;
            e[s._cacheIndex = c] = s,
            e.pop(),
            delete o[r];
            t: {
                for (var l in o)
                    break t;
                delete a[i]
            }
        },
        _lendBinding: function(t) {
            var e = this._bindings
              , n = t._cacheIndex
              , i = this._nActiveBindings++
              , r = e[i];
            e[t._cacheIndex = i] = t,
            e[r._cacheIndex = n] = r
        },
        _takeBackBinding: function(t) {
            var e = this._bindings
              , n = t._cacheIndex
              , i = --this._nActiveBindings
              , r = e[i];
            e[t._cacheIndex = i] = t,
            e[r._cacheIndex = n] = r
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants
              , e = this._nActiveControlInterpolants++
              , n = t[e];
            return void 0 === n && (t[(n = new wc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)).__cacheIndex = e] = n),
            n
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants
              , n = t.__cacheIndex
              , i = --this._nActiveControlInterpolants
              , r = e[i];
            e[t.__cacheIndex = i] = t,
            e[r.__cacheIndex = n] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(t, e) {
            var n = e || this._root
              , i = n.uuid
              , r = "string" == typeof t ? Cc.findByName(n, t) : t
              , a = null !== r ? r.uuid : t
              , o = this._actionsByClip[a]
              , s = null;
            if (void 0 !== o) {
                var c = o.actionByRoot[i];
                if (void 0 !== c)
                    return c;
                s = o.knownActions[0],
                null === r && (r = s._clip)
            }
            if (null === r)
                return null;
            var l = new Qh(this,r,e);
            return this._bindAction(l, s),
            this._addInactiveAction(l, a, i),
            l
        },
        existingAction: function(t, e) {
            var n = e || this._root
              , i = n.uuid
              , r = "string" == typeof t ? Cc.findByName(n, t) : t
              , a = r ? r.uuid : t
              , o = this._actionsByClip[a];
            return void 0 !== o && o.actionByRoot[i] || null
        },
        stopAllAction: function() {
            var t = this._actions
              , e = this._nActiveActions
              , n = this._bindings
              , i = this._nActiveBindings;
            this._nActiveActions = 0;
            for (var r = this._nActiveBindings = 0; r !== e; ++r)
                t[r].reset();
            for (r = 0; r !== i; ++r)
                n[r].useCount = 0;
            return this
        },
        update: function(t) {
            t *= this.timeScale;
            for (var e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
                e[o]._update(i, t, r, a)
            }
            var s = this._bindings
              , c = this._nActiveBindings;
            for (o = 0; o !== c; ++o)
                s[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(t) {
            var e = this._actions
              , n = t.uuid
              , i = this._actionsByClip
              , r = i[n];
            if (void 0 !== r) {
                for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction(c);
                    var l = c._cacheIndex
                      , h = e[e.length - 1];
                    c._cacheIndex = null,
                    c._byClipCacheIndex = null,
                    e[h._cacheIndex = l] = h,
                    e.pop(),
                    this._removeInactiveBindingsForAction(c)
                }
                delete i[n]
            }
        },
        uncacheRoot: function(t) {
            var e = t.uuid
              , n = this._actionsByClip;
            for (var i in n) {
                var r = n[i].actionByRoot[e];
                void 0 !== r && (this._deactivateAction(r),
                this._removeInactiveAction(r))
            }
            var a = this._bindingsByRootAndName[e];
            if (void 0 !== a)
                for (var o in a) {
                    var s = a[o];
                    s.restoreOriginalState(),
                    this._removeInactiveBinding(s)
                }
        },
        uncacheAction: function(t, e) {
            var n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n),
            this._removeInactiveAction(n))
        }
    }),
    $h.prototype.clone = function() {
        return new $h(void 0 === this.value.clone ? this.value : this.value.clone())
    }
    ,
    tu.prototype = Object.assign(Object.create(Ui.prototype), {
        constructor: tu,
        isInstancedBufferGeometry: !0,
        copy: function(t) {
            return Ui.prototype.copy.call(this, t),
            this.maxInstancedCount = t.maxInstancedCount,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    eu.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: eu,
        isInstancedInterleavedBuffer: !0,
        copy: function(t) {
            return Co.prototype.copy.call(this, t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        }
    }),
    nu.prototype = Object.assign(Object.create(di.prototype), {
        constructor: nu,
        isInstancedBufferAttribute: !0,
        copy: function(t) {
            return di.prototype.copy.call(this, t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        }
    }),
    Object.assign(function(t, e, n, i) {
        this.ray = new xr(t,e),
        this.near = n || 0,
        this.far = i || 1 / 0,
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    }
    .prototype, {
        linePrecision: 1,
        set: function(t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
            this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
            this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(t, e, n) {
            var i = n || [];
            return ru(t, this, i, e),
            i.sort(iu),
            i
        },
        intersectObjects: function(t, e, n) {
            var i = n || [];
            if (!1 === Array.isArray(t))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                i;
            for (var r = 0, a = t.length; r < a; r++)
                ru(t[r], this, i, e);
            return i.sort(iu),
            i
        }
    }),
    Object.assign(function(t, e, n) {
        return this.radius = void 0 !== t ? t : 1,
        this.phi = void 0 !== e ? e : 0,
        this.theta = void 0 !== n ? n : 0,
        this
    }
    .prototype, {
        set: function(t, e, n) {
            return this.radius = t,
            this.phi = e,
            this.theta = n,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius,
            this.phi = t.phi,
            this.theta = t.theta,
            this
        },
        makeSafe: function() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)),
            this
        },
        setFromVector3: function(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        },
        setFromCartesianCoords: function(t, e, n) {
            return this.radius = Math.sqrt(t * t + e * e + n * n),
            0 === this.radius ? (this.theta = 0,
            this.phi = 0) : (this.theta = Math.atan2(t, n),
            this.phi = Math.acos(Ce.clamp(e / this.radius, -1, 1))),
            this
        }
    }),
    Object.assign(function(t, e, n) {
        return this.radius = void 0 !== t ? t : 1,
        this.theta = void 0 !== e ? e : 0,
        this.y = void 0 !== n ? n : 0,
        this
    }
    .prototype, {
        set: function(t, e, n) {
            return this.radius = t,
            this.theta = e,
            this.y = n,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius,
            this.theta = t.theta,
            this.y = t.y,
            this
        },
        setFromVector3: function(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        },
        setFromCartesianCoords: function(t, e, n) {
            return this.radius = Math.sqrt(t * t + n * n),
            this.theta = Math.atan2(t, n),
            this.y = e,
            this
        }
    }),
    Object.assign(au.prototype, {
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: (Sh = new Oe,
        function(t, e) {
            var n = Sh.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n),
            this.max.copy(t).add(n),
            this
        }
        ),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0,
            this.max.x = this.max.y = -1 / 0,
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"),
            t = new Oe),
            this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"),
            t = new Oe),
            this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"),
            e = new Oe),
            e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"),
            e = new Oe),
            e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: (Mh = new Oe,
        function(t) {
            return Mh.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        ),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }),
    Object.assign(ou.prototype, {
        set: function(t, e) {
            return this.start.copy(t),
            this.end.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.start.copy(t.start),
            this.end.copy(t.end),
            this
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"),
            t = new De),
            t.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"),
            t = new De),
            t.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"),
            e = new De),
            this.delta(e).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: (Th = new De,
        Eh = new De,
        function(t, e) {
            Th.subVectors(t, this.start),
            Eh.subVectors(this.end, this.start);
            var n = Eh.dot(Eh)
              , i = Eh.dot(Th) / n;
            return e && (i = Ce.clamp(i, 0, 1)),
            i
        }
        ),
        closestPointToPoint: function(t, e, n) {
            var i = this.closestPointToPointParameter(t, e);
            return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"),
            n = new De),
            this.delta(n).multiplyScalar(i).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t),
            this.end.applyMatrix4(t),
            this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }),
    ((su.prototype = Object.create(ii.prototype)).constructor = su).prototype.isImmediateRenderObject = !0,
    ((cu.prototype = Object.create(ko.prototype)).constructor = cu).prototype.update = (Ah = new De,
    Lh = new De,
    Ph = new Ne,
    function() {
        var t = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0),
        Ph.getNormalMatrix(this.object.matrixWorld);
        var e = this.object.matrixWorld
          , n = this.geometry.attributes.position
          , i = this.object.geometry;
        if (i && i.isGeometry)
            for (var r = i.vertices, a = i.faces, o = 0, s = 0, c = a.length; s < c; s++)
                for (var l = a[s], h = 0, u = l.vertexNormals.length; h < u; h++) {
                    var p = r[l[t[h]]]
                      , d = l.vertexNormals[h];
                    Ah.copy(p).applyMatrix4(e),
                    Lh.copy(d).applyMatrix3(Ph).normalize().multiplyScalar(this.size).add(Ah),
                    n.setXYZ(o, Ah.x, Ah.y, Ah.z),
                    o += 1,
                    n.setXYZ(o, Lh.x, Lh.y, Lh.z),
                    o += 1
                }
        else if (i && i.isBufferGeometry) {
            var f = i.attributes.position
              , m = i.attributes.normal;
            for (h = o = 0,
            u = f.count; h < u; h++)
                Ah.set(f.getX(h), f.getY(h), f.getZ(h)).applyMatrix4(e),
                Lh.set(m.getX(h), m.getY(h), m.getZ(h)),
                Lh.applyMatrix3(Ph).normalize().multiplyScalar(this.size).add(Ah),
                n.setXYZ(o, Ah.x, Ah.y, Ah.z),
                o += 1,
                n.setXYZ(o, Lh.x, Lh.y, Lh.z),
                o += 1
        }
        n.needsUpdate = !0
    }
    ),
    ((lu.prototype = Object.create(ii.prototype)).constructor = lu).prototype.dispose = function() {
        this.cone.geometry.dispose(),
        this.cone.material.dispose()
    }
    ,
    lu.prototype.update = (Rh = new De,
    function() {
        this.light.updateMatrixWorld();
        var t = this.light.distance ? this.light.distance : 1e3
          , e = t * Math.tan(this.light.angle);
        this.cone.scale.set(e, e, t),
        Rh.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(Rh),
        void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
    }
    ),
    ((hu.prototype = Object.create(ko.prototype)).constructor = hu).prototype.updateMatrixWorld = (Ch = new De,
    Oh = new bn,
    Ih = new bn,
    function(t) {
        var e = this.bones
          , n = this.geometry
          , i = n.getAttribute("position");
        Ih.getInverse(this.root.matrixWorld);
        for (var r = 0, a = 0; r < e.length; r++) {
            var o = e[r];
            o.parent && o.parent.isBone && (Oh.multiplyMatrices(Ih, o.matrixWorld),
            Ch.setFromMatrixPosition(Oh),
            i.setXYZ(a, Ch.x, Ch.y, Ch.z),
            Oh.multiplyMatrices(Ih, o.parent.matrixWorld),
            Ch.setFromMatrixPosition(Oh),
            i.setXYZ(a + 1, Ch.x, Ch.y, Ch.z),
            a += 2)
        }
        n.getAttribute("position").needsUpdate = !0,
        ii.prototype.updateMatrixWorld.call(this, t)
    }
    ),
    ((uu.prototype = Object.create(_r.prototype)).constructor = uu).prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose()
    }
    ,
    uu.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }
    ,
    ((pu.prototype = Object.create(Fo.prototype)).constructor = pu).prototype.update = function() {
        if (this.scale.set(.5 * this.light.width, .5 * this.light.height, 1),
        void 0 !== this.color)
            this.material.color.set(this.color),
            this.children[0].material.color.set(this.color);
        else {
            this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
            var t = this.material.color
              , e = Math.max(t.r, t.g, t.b);
            1 < e && t.multiplyScalar(1 / e),
            this.children[0].material.color.copy(this.material.color)
        }
    }
    ,
    pu.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose(),
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose()
    }
    ,
    ((du.prototype = Object.create(ii.prototype)).constructor = du).prototype.dispose = function() {
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose()
    }
    ,
    du.prototype.update = (Dh = new De,
    Nh = new Ln,
    zh = new Ln,
    function() {
        var t = this.children[0];
        if (void 0 !== this.color)
            this.material.color.set(this.color);
        else {
            var e = t.geometry.getAttribute("color");
            Nh.copy(this.light.color),
            zh.copy(this.light.groundColor);
            for (var n = 0, i = e.count; n < i; n++) {
                var r = n < i / 2 ? Nh : zh;
                e.setXYZ(n, r.r, r.g, r.b)
            }
            e.needsUpdate = !0
        }
        t.lookAt(Dh.setFromMatrixPosition(this.light.matrixWorld).negate())
    }
    ),
    fu.prototype = Object.assign(Object.create(ko.prototype), {
        constructor: fu,
        copy: function(t) {
            return ko.prototype.copy.call(this, t),
            this.geometry.copy(t.geometry),
            this.material.copy(t.material),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    (mu.prototype = Object.create(ko.prototype)).constructor = mu,
    ((gu.prototype = Object.create(Fo.prototype)).constructor = gu).prototype.update = function() {
        var a, o, t = this.audio, s = this.range, e = this.divisionsInnerAngle, n = this.divisionsOuterAngle, i = Ce.degToRad(t.panner.coneInnerAngle), r = Ce.degToRad(t.panner.coneOuterAngle), c = i / 2, l = r / 2, h = 0, u = 0, p = this.geometry, d = p.attributes.position;
        function f(t, e, n, i) {
            var r = (e - t) / n;
            for (d.setXYZ(h, 0, 0, 0),
            u++,
            a = t; a < e; a += r)
                o = h + u,
                d.setXYZ(o, Math.sin(a) * s, 0, Math.cos(a) * s),
                d.setXYZ(o + 1, Math.sin(Math.min(a + r, e)) * s, 0, Math.cos(Math.min(a + r, e)) * s),
                d.setXYZ(o + 2, 0, 0, 0),
                u += 3;
            p.addGroup(h, u, i),
            h += u,
            u = 0
        }
        p.clearGroups(),
        f(-l, -c, n, 0),
        f(-c, c, e, 1),
        f(c, l, n, 0),
        d.needsUpdate = !0,
        i === r && (this.material[0].visible = !1)
    }
    ,
    gu.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material[0].dispose(),
        this.material[1].dispose()
    }
    ,
    ((vu.prototype = Object.create(ko.prototype)).constructor = vu).prototype.update = (Bh = new De,
    Uh = new De,
    Gh = new Ne,
    function() {
        this.object.updateMatrixWorld(!0),
        Gh.getNormalMatrix(this.object.matrixWorld);
        for (var t = this.object.matrixWorld, e = this.geometry.attributes.position, n = this.object.geometry, i = n.vertices, r = n.faces, a = 0, o = 0, s = r.length; o < s; o++) {
            var c = r[o]
              , l = c.normal;
            Bh.copy(i[c.a]).add(i[c.b]).add(i[c.c]).divideScalar(3).applyMatrix4(t),
            Uh.copy(l).applyMatrix3(Gh).normalize().multiplyScalar(this.size).add(Bh),
            e.setXYZ(a, Bh.x, Bh.y, Bh.z),
            a += 1,
            e.setXYZ(a, Uh.x, Uh.y, Uh.z),
            a += 1
        }
        e.needsUpdate = !0
    }
    ),
    ((yu.prototype = Object.create(ii.prototype)).constructor = yu).prototype.dispose = function() {
        this.lightPlane.geometry.dispose(),
        this.lightPlane.material.dispose(),
        this.targetLine.geometry.dispose(),
        this.targetLine.material.dispose()
    }
    ,
    yu.prototype.update = (Fh = new De,
    kh = new De,
    Hh = new De,
    function() {
        Fh.setFromMatrixPosition(this.light.matrixWorld),
        kh.setFromMatrixPosition(this.light.target.matrixWorld),
        Hh.subVectors(kh, Fh),
        this.lightPlane.lookAt(kh),
        void 0 !== this.color ? (this.lightPlane.material.color.set(this.color),
        this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color),
        this.targetLine.material.color.copy(this.light.color)),
        this.targetLine.lookAt(kh),
        this.targetLine.scale.z = Hh.length()
    }
    ),
    ((xu.prototype = Object.create(ko.prototype)).constructor = xu).prototype.update = function() {
        var c, l, h = new De, u = new no;
        function t(t, e, n, i) {
            h.set(e, n, i).unproject(u);
            var r = l[t];
            if (void 0 !== r)
                for (var a = c.getAttribute("position"), o = 0, s = r.length; o < s; o++)
                    a.setXYZ(r[o], h.x, h.y, h.z)
        }
        return function() {
            c = this.geometry,
            l = this.pointMap;
            u.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
            t("c", 0, 0, -1),
            t("t", 0, 0, 1),
            t("n1", -1, -1, -1),
            t("n2", 1, -1, -1),
            t("n3", -1, 1, -1),
            t("n4", 1, 1, -1),
            t("f1", -1, -1, 1),
            t("f2", 1, -1, 1),
            t("f3", -1, 1, 1),
            t("f4", 1, 1, 1),
            t("u1", .7, 1.1, -1),
            t("u2", -.7, 1.1, -1),
            t("u3", 0, 2, -1),
            t("cf1", -1, 0, 1),
            t("cf2", 1, 0, 1),
            t("cf3", 0, -1, 1),
            t("cf4", 0, 1, 1),
            t("cn1", -1, 0, -1),
            t("cn2", 1, 0, -1),
            t("cn3", 0, -1, -1),
            t("cn4", 0, 1, -1),
            c.getAttribute("position").needsUpdate = !0
        }
    }(),
    ((bu.prototype = Object.create(ko.prototype)).constructor = bu).prototype.update = (Vh = new gn,
    function(t) {
        if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."),
        void 0 !== this.object && Vh.setFromObject(this.object),
        !Vh.isEmpty()) {
            var e = Vh.min
              , n = Vh.max
              , i = this.geometry.attributes.position
              , r = i.array;
            r[0] = n.x,
            r[1] = n.y,
            r[2] = n.z,
            r[3] = e.x,
            r[4] = n.y,
            r[5] = n.z,
            r[6] = e.x,
            r[7] = e.y,
            r[8] = n.z,
            r[9] = n.x,
            r[10] = e.y,
            r[11] = n.z,
            r[12] = n.x,
            r[13] = n.y,
            r[14] = e.z,
            r[15] = e.x,
            r[16] = n.y,
            r[17] = e.z,
            r[18] = e.x,
            r[19] = e.y,
            r[20] = e.z,
            r[21] = n.x,
            r[22] = e.y,
            r[23] = e.z,
            i.needsUpdate = !0,
            this.geometry.computeBoundingSphere()
        }
    }
    ),
    bu.prototype.setFromObject = function(t) {
        return this.object = t,
        this.update(),
        this
    }
    ,
    bu.prototype.copy = function(t) {
        return ko.prototype.copy.call(this, t),
        this.object = t.object,
        this
    }
    ,
    bu.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ,
    ((wu.prototype = Object.create(ko.prototype)).constructor = wu).prototype.updateMatrixWorld = function(t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position),
        e.getSize(this.scale),
        this.scale.multiplyScalar(.5),
        ii.prototype.updateMatrixWorld.call(this, t))
    }
    ,
    ((_u.prototype = Object.create(Fo.prototype)).constructor = _u).prototype.updateMatrixWorld = function(t) {
        var e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8),
        this.scale.set(.5 * this.size, .5 * this.size, e),
        this.children[0].material.side = e < 0 ? xt : z,
        this.lookAt(this.plane.normal),
        ii.prototype.updateMatrixWorld.call(this, t)
    }
    ,
    ((Mu.prototype = Object.create(ii.prototype)).constructor = Mu).prototype.setDirection = (Xh = new De,
    function(t) {
        .99999 < t.y ? this.quaternion.set(0, 0, 0, 1) : t.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (Xh.set(t.z, 0, -t.x).normalize(),
        qh = Math.acos(t.y),
        this.quaternion.setFromAxisAngle(Xh, qh))
    }
    ),
    Mu.prototype.setLength = function(t, e, n) {
        void 0 === e && (e = .2 * t),
        void 0 === n && (n = .2 * e),
        this.line.scale.set(1, Math.max(0, t - e), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(n, e, n),
        this.cone.position.y = t,
        this.cone.updateMatrix()
    }
    ,
    Mu.prototype.setColor = function(t) {
        this.line.material.color.copy(t),
        this.cone.material.color.copy(t)
    }
    ,
    Mu.prototype.copy = function(t) {
        return ii.prototype.copy.call(this, t, !1),
        this.line.copy(t.line),
        this.cone.copy(t.cone),
        this
    }
    ,
    Mu.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ,
    (Su.prototype = Object.create(ko.prototype)).constructor = Su;
    var Tu;
    function Eu(t) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),
        Zc.call(this, t),
        this.type = "catmullrom"
    }
    Hc.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"),
        t.prototype = Object.create(Hc.prototype),
        (t.prototype.constructor = t).prototype.getPoint = e,
        t
    }
    ,
    Object.assign(cl.prototype, {
        createPointsGeometry: function(t) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function(t) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function(t) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var e = new pi, n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.vertices.push(new De(r.x,r.y,r.z || 0))
            }
            return e
        }
    }),
    Object.assign(ll.prototype, {
        fromPoints: function(t) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),
            this.setFromPoints(t)
        }
    }),
    Object.create(Zc.prototype),
    Object.create(Zc.prototype),
    Eu.prototype = Object.create(Zc.prototype),
    Object.assign(Eu.prototype, {
        initFromArray: function() {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function() {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function() {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }),
    fu.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }
    ,
    hu.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }
    ,
    Object.assign(Gl.prototype, {
        extractUrlBase: function(t) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),
            Ml(t)
        }
    }),
    Object.assign(El.prototype, {
        setTexturePath: function(t) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),
            this.setResourcePath(t)
        }
    }),
    Object.assign(au.prototype, {
        center: function(t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        size: function(t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
            this.getSize(t)
        }
    }),
    Object.assign(gn.prototype, {
        center: function(t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        },
        size: function(t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
            this.getSize(t)
        }
    }),
    ou.prototype.center = function(t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
        this.getCenter(t)
    }
    ,
    Object.assign(Ce, {
        random16: function() {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),
            Math.random()
        },
        nearestPowerOfTwo: function(t) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),
            Ce.floorPowerOfTwo(t)
        },
        nextPowerOfTwo: function(t) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),
            Ce.ceilPowerOfTwo(t)
        }
    }),
    Object.assign(Ne.prototype, {
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
            this.toArray(t, e)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
            t.applyMatrix3(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBuffer: function(t) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
            this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }),
    Object.assign(bn.prototype, {
        extractPosition: function(t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
            this.copyPosition(t)
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
            this.toArray(t, e)
        },
        getPosition: function() {
            return void 0 === Tu && (Tu = new De),
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
            Tu.setFromMatrixColumn(this, 3)
        },
        setRotationFromQuaternion: function(t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
            this.makeRotationFromQuaternion(t)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        multiplyVector4: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
            t.transformDirection(this)
        },
        crossVector: function(t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(t) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
            this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(t, e, n, i, r, a) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
            this.makePerspective(t, e, i, n, r, a)
        }
    }),
    yn.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
        this.intersectsLine(t)
    }
    ,
    Ie.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
        t.applyQuaternion(this)
    }
    ,
    Object.assign(xr.prototype, {
        isIntersectionBox: function(t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionPlane: function(t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
            this.intersectsPlane(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        }
    }),
    Object.assign(br.prototype, {
        area: function() {
            return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
            this.getArea()
        },
        barycoordFromPoint: function(t, e) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
            this.getBarycoord(t, e)
        },
        midpoint: function(t) {
            return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),
            this.getMidpoint(t)
        },
        normal: function(t) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
            this.getNormal(t)
        },
        plane: function(t) {
            return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
            this.getPlane(t)
        }
    }),
    Object.assign(br, {
        barycoordFromPoint: function(t, e, n, i, r) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
            br.getBarycoord(t, e, n, i, r)
        },
        normal: function(t, e, n, i) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
            br.getNormal(t, e, n, i)
        }
    }),
    Object.assign(hl.prototype, {
        extractAllPoints: function(t) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),
            this.extractPoints(t)
        },
        extrude: function(t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
            new Us(this,t)
        },
        makeGeometry: function(t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
            new Zs(this,t)
        }
    }),
    Object.assign(Oe.prototype, {
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, n)
        },
        distanceToManhattan: function(t) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
            this.manhattanDistanceTo(t)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(De.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
            this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
            this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
            this.setFromMatrixColumn(e, t)
        },
        applyProjection: function(t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
            this.applyMatrix4(t)
        },
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, n)
        },
        distanceToManhattan: function(t) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
            this.manhattanDistanceTo(t)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(un.prototype, {
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, n)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(pi.prototype, {
        computeTangents: function() {
            console.error("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
        }
    }),
    Object.assign(ii.prototype, {
        getChildByName: function(t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
            this.getObjectByName(t)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
            this.translateOnAxis(e, t)
        },
        getWorldRotation: function() {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
        }
    }),
    Object.defineProperties(ii.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }),
    Object.defineProperties(No.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                this.levels
            }
        }
    }),
    Object.defineProperty(Bo.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }),
    zo.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.")
    }
    ,
    Object.defineProperty(Hc.prototype, "__arcLengthDivisions", {
        get: function() {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),
            this.arcLengthDivisions
        },
        set: function(t) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),
            this.arcLengthDivisions = t
        }
    }),
    io.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
        void 0 !== e && (this.filmGauge = e),
        this.setFocalLength(t)
    }
    ,
    Object.defineProperties(ul.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
                this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
                this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
                this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
                this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
                this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
                this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
                this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
                this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
                this.shadow.mapSize.height = t
            }
        }
    }),
    Object.defineProperties(di.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
                this.array.length
            }
        },
        copyIndicesArray: function() {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
        }
    }),
    Object.assign(Ui.prototype, {
        addIndex: function(t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
            this.setIndex(t)
        },
        addDrawCall: function(t, e, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
            this.addGroup(t, e)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }),
    Object.defineProperties(Ui.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
                this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
                this.groups
            }
        }
    }),
    Object.assign(Gs.prototype, {
        getArrays: function() {
            console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
        },
        addShapeList: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
        },
        addShape: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
        }
    }),
    Object.defineProperties($h.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),
                this
            }
        }
    }),
    Object.defineProperties(ji.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."),
                new Ln
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                this.flatShading = 1 === t
            }
        }
    }),
    Object.defineProperties(uc.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
                !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }),
    Object.defineProperties(yr.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives = t
            }
        }
    }),
    Object.assign(Ao.prototype, {
        clearTarget: function(t, e, n, i) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),
            this.setRenderTarget(t),
            this.clear(e, n, i)
        },
        animate: function(t) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
            this.setAnimationLoop(t)
        },
        getCurrentRenderTarget: function() {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),
            this.getRenderTarget()
        },
        getMaxAnisotropy: function() {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),
            this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function() {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),
            this.capabilities.precision
        },
        resetGLState: function() {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
            this.state.reset()
        },
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
            this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
            this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
            this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
            this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
            this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
            this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
            this.setScissorTest(t)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        },
        setFaceCulling: function() {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
        },
        allocTextureUnit: function() {
            console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
        },
        setTexture: function() {
            console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
        },
        setTexture2D: function() {
            console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
        },
        setTextureCube: function() {
            console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
        }
    }),
    Object.defineProperties(Ao.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            }
        }
    }),
    Object.defineProperties(Qa.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            }
        }
    }),
    Object.defineProperties(fn.prototype, {
        activeCubeFace: {
            set: function() {
                console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().")
            }
        },
        activeMipMapLevel: {
            set: function() {
                console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().")
            }
        }
    }),
    Object.defineProperties(pn.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps = t
            }
        }
    }),
    Object.defineProperties(To.prototype, {
        standing: {
            set: function() {
                console.warn("THREE.WebVRManager: .standing has been removed.")
            }
        },
        userHeight: {
            set: function() {
                console.warn("THREE.WebVRManager: .userHeight has been removed.")
            }
        }
    }),
    hh.prototype.load = function(t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        return (new oh).load(t, function(t) {
            e.setBuffer(t)
        }),
        this
    }
    ,
    ph.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
        this.getFrequencyData()
    }
    ,
    sh.prototype.updateCubeMap = function(t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
        this.update(t, e)
    }
    ;
    cn.crossOrigin = void 0,
    cn.loadTexture = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var r = new kc;
        r.setCrossOrigin(this.crossOrigin);
        var a = r.load(t, n, void 0, i);
        return e && (a.mapping = e),
        a
    }
    ,
    cn.loadTextureCube = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var r = new Fc;
        r.setCrossOrigin(this.crossOrigin);
        var a = r.load(t, n, void 0, i);
        return e && (a.mapping = e),
        a
    }
    ,
    cn.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }
    ,
    cn.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
    ;
    var Au = 150
      , Lu = function(t, e, n, i) {
        return {
            startPosition: t,
            cameraPosition: e,
            lightPosition: n,
            board: i
        }
    }
      , Pu = function(t, e, n) {
        return {
            x: t,
            y: e,
            z: n
        }
    }
      , Ru = [Lu([2, 2], Pu(700, 1100, 1600), Pu(600, 800, 800), [["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty"], ["normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"], ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty"], ["empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"], ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal", "normal"], ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty"]]), Lu([2, 5], Pu(900, 1100, 1600), Pu(1e3, 800, 700), [["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"], ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", {
        type: "activator",
        bridgeCoords: [[5, 11], [5, 12]]
    }, "normal", "empty", "empty", "normal", "goal", "normal"], ["normal", "normal", {
        type: "activator",
        bridgeCoords: [[5, 5], [5, 6]]
    }, "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"], ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"], ["normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal"], ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty"]]), Lu([2, 4], Pu(1e3, 1100, 1600), Pu(1100, 800, 800), [["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"], ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "empty", "empty"], ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal"], ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal"], ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"], ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"]]), Lu([2, 6], Pu(1e3, 1100, 2e3), Pu(800, 800, 800), [["empty", "empty", "empty", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "empty", "empty", "empty", "empty"], ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty"], ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "empty", "empty"], ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "empty", "empty"], ["normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "fragile", "fragile", "fragile", "fragile", "fragile"], ["normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "fragile", "fragile", "fragile", "fragile", "fragile"], ["empty", "empty", "empty", "empty", "empty", "normal", "goal", "normal", "empty", "empty", "fragile", "fragile", "normal", "fragile"], ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "fragile", "fragile", "fragile", "fragile"]]), Lu([14, 2], Pu(1e3, 1400, 2500), Pu(900, 800, 800), [["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"], ["empty", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", {
        type: "activator",
        bridgeCoords: [[2, 6], [2, 7]]
    }, "normal", "normal", "normal", "normal", "normal", "normal"], ["empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"], ["empty", "normal", "normal", {
        type: "activator",
        bridgeCoords: [[9, 6], [9, 7]]
    }, "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"], ["empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "normal", "normal", "normal", {
        type: "activator",
        bridgeCoords: [[9, 6], [9, 7]]
    }, "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", {
        type: "activator",
        bridgeCoords: [[9, 6], [9, 7]]
    }], ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal"], ["normal", "goal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"], ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]]), Lu([1, 4], Pu(1e3, 1400, 2500), Pu(900, 800, 800), [["empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty"], ["normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"], ["empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal"], ["empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"], ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"], ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty"]])];
    function Cu(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    var Ou = function() {
        function r(t, e, n, i) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this.zPos = t,
            this.xPos = e,
            this.type = n,
            this.scene = i,
            this.renderTile()
        }
        return function(t, e, n) {
            e && Cu(t.prototype, e),
            n && Cu(t, n)
        }(r, [{
            key: "renderTile",
            value: function(t) {
                var e, n = new Gi(Au,20,Au), i = Math.random() / 2 + .35;
                switch (this.type) {
                case "normal":
                case "activator":
                    n.faces.forEach(function(t) {
                        return t.color.setHex(16777215 * i)
                    }),
                    e = new fc({
                        color: 16777215,
                        vertexColors: 1
                    });
                    break;
                case "empty":
                    e = new wr({
                        transparent: !0,
                        opacity: 0
                    });
                    break;
                case "goal":
                    e = new fc({
                        transparent: !0,
                        opacity: 0
                    });
                    break;
                case "fragile":
                    e = new fc({
                        color: 16758861,
                        transparent: !0,
                        opacity: .7
                    });
                    break;
                case "bridge":
                    e = t ? (n.faces.forEach(function(t) {
                        return t.color.setHex(16777215 * i)
                    }),
                    new fc({
                        color: 16777215,
                        vertexColors: 1
                    })) : new wr({
                        transparent: !0,
                        opacity: 0
                    })
                }
                if (this.tile = new _r(n,e),
                this.tile.position.x = this.xPos * Au,
                this.tile.position.z = this.zPos * Au,
                this.tile.position.y = -20,
                "normal" === this.type || t && "bridge" === this.type) {
                    var r = new ko(new $s(this.tile.geometry),new Go({
                        color: 0,
                        linewidth: 2
                    }));
                    this.tile.add(r)
                }
                if ("activator" === this.type) {
                    var a = new tc(60,60,20,32);
                    a.faces.forEach(function(t) {
                        return t.color.setHex(16777215 * i)
                    });
                    var o = new _r(a,e);
                    o.position.y = 20;
                    var s = new ko(new $s(o.geometry),new Go({
                        color: 0,
                        linewidth: 2
                    }));
                    o.add(s),
                    this.tile.add(o)
                }
            }
        }, {
            key: "addTileToScene",
            value: function() {
                this.scene.add(this.tile)
            }
        }, {
            key: "removeTileFromScene",
            value: function() {
                this.scene.remove(this.tile)
            }
        }]),
        r
    }();
    function Iu(t) {
        return (Iu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Du(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    var Nu = function() {
        function n(t, e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, n),
            this.tiles = this.createTiles(t, e)
        }
        return function(t, e, n) {
            e && Du(t.prototype, e),
            n && Du(t, n)
        }(n, [{
            key: "createTiles",
            value: function(t, e) {
                for (var n = [[]], i = e.length, r = e[0].length, a = -1; a <= r; a++)
                    n[0].push(new Ou(-1,a,"empty",t));
                for (var o = 0; o < i; o++) {
                    for (var s = [new Ou(o,-1,"empty",t)], c = 0; c < r; c++)
                        if ("object" === Iu(e[o][c])) {
                            var l = new Ou(o,c,"activator",t);
                            l.bridgeCoords = e[o][c].bridgeCoords,
                            s.push(l)
                        } else
                            s.push(new Ou(o,c,e[o][c],t));
                    s.push(new Ou(o,r,"empty",t)),
                    n.push(s)
                }
                for (var h = [], u = -1; u <= r; u++)
                    h.push(new Ou(i,u,"empty",t));
                return n.push(h),
                n
            }
        }, {
            key: "addBoardToScene",
            value: function() {
                this.tiles.forEach(function(t) {
                    return t.forEach(function(t) {
                        return t.addTileToScene()
                    })
                })
            }
        }, {
            key: "removeBoardFromScene",
            value: function() {
                this.tiles.forEach(function(t) {
                    return t.forEach(function(t) {
                        return t.removeTileFromScene()
                    })
                })
            }
        }]),
        n
    }();
    function zu(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    function Bu(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    var Uu = function() {
        function o(t, e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.scene = t;
            var n = new Gi(Au,300,Au)
              , i = Math.random() / 2 + .45;
            n.faces.forEach(function(t) {
                return t.color.setHex(16777215 * i)
            });
            var r = new fc({
                color: 16777215,
                vertexColors: 1
            });
            this.block = new _r(n,r);
            var a = new ko(new $s(this.block.geometry),new Go({
                color: 0,
                linewidth: 2
            }));
            this.block.add(a),
            this.initialPos = e,
            this.startLevel()
        }
        return function(t, e, n) {
            e && Bu(t.prototype, e),
            n && Bu(t, n)
        }(o, [{
            key: "startLevel",
            value: function() {
                this.reset(),
                this.block.position.y = 800
            }
        }, {
            key: "reset",
            value: function() {
                var t = (this.initialPos[0] - 1) * Au
                  , e = (this.initialPos[1] - 1) * Au;
                this.block.position.x = t,
                this.block.position.y = 140,
                this.block.position.z = e,
                this.block.rotation.x = 0,
                this.block.rotation.y = 0,
                this.block.rotation.z = 0,
                this.alignment = "y",
                this.coords = [zu(this.initialPos), zu(this.initialPos)]
            }
        }, {
            key: "updateCoords",
            value: function(e, t, n) {
                if (e)
                    switch (this.alignment) {
                    case "x":
                        0 < e ? (this.coords[0][0] += 2 * e,
                        this.coords[1][0] += e) : (this.coords[1][0] += 2 * e,
                        this.coords[0][0] += e);
                        break;
                    case "y":
                        0 < e ? (this.coords[0][0] += e,
                        this.coords[1][0] += 2 * e) : (this.coords[1][0] += e,
                        this.coords[0][0] += 2 * e);
                        break;
                    case "z":
                        this.coords.forEach(function(t) {
                            return t[0] += e
                        });
                        break;
                    default:
                        return
                    }
                else if (n)
                    switch (this.alignment) {
                    case "x":
                        this.coords.forEach(function(t) {
                            return t[1] += n
                        });
                        break;
                    case "y":
                        0 < n ? (this.coords[0][1] += n,
                        this.coords[1][1] += 2 * n) : (this.coords[1][1] += n,
                        this.coords[0][1] += 2 * n);
                        break;
                    case "z":
                        0 < n ? (this.coords[0][1] += 2 * n,
                        this.coords[1][1] += n) : (this.coords[1][1] += 2 * n,
                        this.coords[0][1] += n);
                        break;
                    default:
                        return
                    }
                this.coords.sort(function(t, e) {
                    return t[0] <= e[0] && t[1] <= e[1] ? -1 : 1
                })
            }
        }, {
            key: "addBlockToScene",
            value: function() {
                this.scene.add(this.block)
            }
        }, {
            key: "drop",
            value: function() {
                this.block.position.y -= 20
            }
        }, {
            key: "height",
            value: function() {
                return this.block.position.y
            }
        }, {
            key: "move",
            value: function(t, e, n) {
                if (this.updateCoords(t, e, n),
                t)
                    if ("z" === this.alignment)
                        this.block.position.x += t * Au;
                    else {
                        this.block.position.x += t * Au * 1.5;
                        var i = 0 < t && "x" === this.alignment || t < 0 && "y" === this.alignment ? 1 : -1;
                        this.block.position.y += t * Au * .5 * i,
                        this.alignment = "y" === this.alignment ? "x" : "y"
                    }
                else if (n && (this.block.position.z += "x" === this.alignment ? n * Au : n * Au * 1.5,
                "x" !== this.alignment)) {
                    var r = 0 < n && "z" === this.alignment || n < 0 && "y" === this.alignment ? 1 : -1;
                    this.alignment = "y" === this.alignment ? "z" : "y",
                    this.block.position.y += n * Au * .5 * r
                }
            }
        }, {
            key: "rotate",
            value: function(t, e, n) {
                (n && "z" !== this.alignment || t && "x" !== this.alignment) && (this.block.rotation.x += t,
                this.block.rotation.y += e,
                this.block.rotation.z += n)
            }
        }]),
        o
    }();
    function Gu(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    function Fu(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    var ku = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"]
      , Hu = function() {
        function i() {
            var t = this;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, i),
            this.scene = new Ro,
            this.camera = new io(50,window.innerWidth / window.innerHeight,1,1e4),
            this.camera.rotation.x = -Math.PI / 5,
            this.light = new gl(16777215,1.5),
            this.scene.add(this.light),
            this.renderer = new Ao({
                antialias: !0
            }),
            this.renderer.setClearColor(16777215),
            this.renderer.setSize(1e3, 500),
            document.body.appendChild(this.renderer.domElement),
            this.level = 0,
            this.moves = 0,
            this.movesThisLevel = 0,
            this.scoreboard = document.querySelector(".scoreboard"),
            this.modal = document.querySelector(".reset-modal-container"),
            this.checkNextCoord = !0,
            this.board = new Nu(this.scene,Ru[this.level].board),
            this.block = new Uu(this.scene,Ru[this.level].startPosition),
            this.activators = [],
            this.handleKeydown = this.handleKeydown.bind(this),
            document.querySelector(".modal-btn").addEventListener("click", function() {
                return t.reset()
            });
            var e = document.querySelector(".about-modal-container")
              , n = document.querySelector(".about-modal-btn");
            document.querySelector(".open-about-btn").addEventListener("click", function() {
                return e.style.display = "flex"
            }),
            n.addEventListener("click", function() {
                return e.style.display = "none"
            }),
            this.renderLevel()
        }
        return function(t, e, n) {
            e && Fu(t.prototype, e),
            n && Fu(t, n)
        }(i, [{
            key: "renderLevel",
            value: function() {
                this.board.addBoardToScene();
                var t = Ru[this.level].cameraPosition;
                this.camera.position.x = t.x,
                this.camera.position.y = t.y,
                this.camera.position.z = t.z;
                var e = Ru[this.level].lightPosition
                  , n = e.x
                  , i = e.y
                  , r = e.z;
                this.light.position.set(n, i, r),
                this.renderer.render(this.scene, this.camera),
                this.dropBlock(140)
            }
        }, {
            key: "dropBlock",
            value: function(t) {
                var e = this;
                this.block.height() > t ? (requestAnimationFrame(function() {
                    return e.dropBlock(t)
                }),
                this.block.drop(),
                this.block.addBlockToScene(),
                this.renderer.render(this.scene, this.camera)) : this.listenKeydown()
            }
        }, {
            key: "updateScore",
            value: function(t) {
                var e = this;
                this.movesThisLevel = "number" == typeof t ? t : this.movesThisLevel + 1,
                this.scoreboard.innerHTML = this.moves + this.movesThisLevel,
                void 0 === t && this.block.coords.forEach(function(t) {
                    return e.receiveMove.apply(e, Gu(t))
                })
            }
        }, {
            key: "unlistenKeydown",
            value: function() {
                document.removeEventListener("keydown", this.handleKeydown)
            }
        }, {
            key: "listenKeydown",
            value: function() {
                document.addEventListener("keydown", this.handleKeydown)
            }
        }, {
            key: "handleKeydown",
            value: function(t) {
                switch (t.key) {
                case "ArrowLeft":
                    console.log("hiiiiiiii");
                    this.block.rotate(0, 0, Math.PI / 2),
                    this.block.move(-1, 0, 0);
                    break;
                case "ArrowUp":
                    this.block.rotate(Math.PI / 2, 0, 0),
                    this.block.move(0, 0, -1);
                    break;
                case "ArrowRight":
                    this.block.rotate(0, 0, -Math.PI / 2),
                    this.block.move(1, 0, 0);
                    break;
                case "ArrowDown":
                    this.block.rotate(-Math.PI / 2, 0, 0),
                    this.block.move(0, 0, 1);
                    break;
                default:
                    return
                }
                ku.includes(t.key) && (this.updateScore(),
                this.block.addBlockToScene(),
                this.renderer.render(this.scene, this.camera))
            }
        }, {
            key: "receiveMove",
            value: function(t, e) {
                var i = this;
                if (this.checkNextCoord) {
                    var n = this.board.tiles
                      , r = n[e] && n[e][t] ? n[e][t] : n[1][1];
                    switch (r.type) {
                    case "normal":
                        break;
                    case "empty":
                        this.lose();
                        break;
                    case "goal":
                        "y" === this.block.alignment && this.win();
                        break;
                    case "bridge":
                        r.isActivated || this.lose();
                        break;
                    case "activator":
                        this.activators.push(r),
                        r.bridgeCoords.forEach(function(t) {
                            var e = i.board.tiles[t[0]][t[1]];
                            e.removeTileFromScene();
                            var n = e.isActivated;
                            e.isActivated = !n,
                            e.renderTile(!n),
                            e.addTileToScene()
                        }),
                        this.renderer.render(this.scene, this.camera),
                        "y" === this.block.alignment && (this.checkNextCoord = !1);
                        break;
                    case "fragile":
                        "y" === this.block.alignment && this.lose();
                        break;
                    default:
                        return
                    }
                } else
                    this.checkNextCoord = !0
            }
        }, {
            key: "win",
            value: function() {
                this.checkNextCoord = !1,
                this.unlistenKeydown(),
                this.dropBlock(-1600),
                this.moves += this.movesThisLevel,
                this.activators = [],
                this.updateScore(0),
                setTimeout(this.startNextLevel.bind(this), 1500)
            }
        }, {
            key: "startNextLevel",
            value: function() {
                this.checkNextCoord = !0,
                this.level += 1,
                6 === this.level ? this.modal.style.display = "flex" : (this.block.initialPos = Ru[this.level].startPosition,
                this.block.startLevel(),
                this.board.removeBoardFromScene(),
                this.board.tiles = this.board.createTiles(this.scene, Ru[this.level].board),
                this.renderLevel())
            }
        }, {
            key: "lose",
            value: function() {
                var n = this;
                this.checkNextCoord = !1,
                this.unlistenKeydown(),
                this.dropBlock(-1600),
                setTimeout(function() {
                    n.updateScore(0),
                    n.block.reset(),
                    n.block.addBlockToScene(),
                    n.checkNextCoord = !0,
                    n.activators.forEach(function(t) {
                        t.bridgeCoords.forEach(function(t) {
                            var e = n.board.tiles[t[0]][t[1]];
                            e.isActivated = !1,
                            e.removeTileFromScene()
                        })
                    }),
                    n.renderer.render(n.scene, n.camera)
                }, 1500)
            }
        }, {
            key: "reset",
            value: function() {
                this.modal.style.display = "none",
                this.level = -1,
                this.moves = 0,
                this.movesThisLevel = 0,
                this.scoreboard.innerHTML = this.moves,
                this.startNextLevel()
            }
        }]),
        i
    }();
    document.addEventListener("DOMContentLoaded", function() {
        new Hu
    }),
    "serviceWorker"in navigator && navigator.serviceWorker.register("sw.js").catch(function() {})
}
]);
