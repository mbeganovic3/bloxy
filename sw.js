! function (n) {
    var r = {};

    function u(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, u), t.l = !0, t.exports
    }
    u.m = n, u.c = r, u.d = function (e, t, n) {
        u.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, u.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, u.t = function (t, e) {
        if (1 & e && (t = u(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (u.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) u.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
        return n
    }, u.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return u.d(t, "a", t), t
    }, u.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, u.p = "", u(u.s = 0)
}([function (e, t) {
    var n = ["/", "public/main.css", "public/main.js"];
    self.addEventListener("install", function (e) {
        e.waitUntil(caches.open("v3").then(function (e) {
            return e.addAll(n)
        }))
    }), self.addEventListener("fetch", function (t) {
        t.respondWith(caches.match(t.request).then(function (e) {
            return e || fetch(t.request)
        }))
    }), self.addEventListener("activate", function (e) {
        e.waitUntil(caches.keys().then(function (e) {
            return Promise.all(e.map(function (e) {
                if ("v3" !== e) return caches.delete(e)
            }))
        }))
    })
}]);