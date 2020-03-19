// Automatically generated file.  Do not edit!

'use strict';
var b, g = {g: {}};
g.g.J = function (a, c) {
    this.x = a;
    this.y = c
};
g.g.J.Ce = function (a, c) {
    return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
};
g.g.J.ep = function (a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
};
g.g.J.CF = function (a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
};
g.g.J.tm = function (a, c) {
    return new g.g.J(a.x - c.x, a.y - c.y)
};
g.g.J.sum = function (a, c) {
    return new g.g.J(a.x + c.x, a.y + c.y)
};
g.g.J.prototype.scale = function (a) {
    this.x *= a;
    this.y *= a;
    return this
};
g.g.J.prototype.translate = function (a, c) {
    this.x += a;
    this.y += c;
    return this
};
g.yL = {};
g.Pv = 40;
g.aw = 125;
g.eB = 5;
g.nB = 10;
g.ud = 28;
g.UA = g.ud;
g.XA = 8;
g.DB = "#000000";
g.Yn = 250;
g.Bq = 10;
g.RA = 30;
g.SB = 750;
g.wC = 100;
g.fB = !0;
g.zB = .45;
g.AB = .65;
g.ik = {width: 96, height: 124, url: "sprites.png"};
g.Wa = 1;
g.Re = 2;
g.jb = 3;
g.Se = 4;
g.jg = 5;
g.xq = -1;
g.fv = 0;
g.rl = 1;
g.cI = 0;
g.dI = 1;
g.aI = 1;
g.bI = 2;
g.fk = [];
g.fk[g.Wa] = g.Re;
g.fk[g.Re] = g.Wa;
g.fk[g.jb] = g.Se;
g.fk[g.Se] = g.jb;
g.vg = 0;
g.kk = 1;
g.Xd = 2;
g.ug = 3;
g.yv = null;
g.Iq = 1;
g.zv = 2;
g.sw = "VARIABLE";
g.NC = "VARIABLE_DYNAMIC";
g.bw = "PROCEDURE";
g.iw = "RENAME_VARIABLE_ID";
g.Av = "DELETE_VARIABLE_ID";
g.g.global = function () {
    return "object" === typeof self ? self : "object" === typeof window ? window : "object" === typeof global ? global : this
}();
g.h = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.h);
g.g.fb = {};
g.g.fb.startsWith = function (a, c) {
    return 0 == a.lastIndexOf(c, 0)
};
g.g.fb.Ju = function (a) {
    return a.length ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d
    }).length : 0
};
g.g.fb.FD = function (a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || g.g.fb.Ju(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
        " " == f && (d = e + 1)
    }
    for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
    return c
};
g.g.fb.GD = function (a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || g.g.fb.Ju(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++) if (f != a[h].substr(-e - 1, 1)) return d;
        " " == f && (d = e + 1)
    }
    for (h = 1; h < a.length; h++) if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
    return c
};
g.g.fb.oA = function (a, c) {
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) a[d] = g.g.fb.nH(a[d], c);
    return a.join("\n")
};
g.g.fb.nH = function (a, c) {
    if (a.length <= c) return a;
    for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++) d[e].length > c && (c = d[e].length);
    e = -Infinity;
    var f = 1;
    do {
        var h = e;
        var k = a;
        a = [];
        var l = d.length / f, m = 1;
        for (e = 0; e < d.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = g.g.fb.pA(d, a, c);
        e = g.g.fb.$u(d, a, c);
        a = g.g.fb.oH(d, a);
        f++
    } while (e > h);
    return k
};
g.g.fb.$u = function (a, c, d) {
    for (var e = [0], f = [], h = 0; h < a.length; h++) e[e.length - 1] += a[h].length, !0 === c[h] ? (e.push(0), f.push(a[h].charAt(a[h].length - 1))) : !1 === c[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e);
    for (h = c = 0; h < e.length; h++) c -= 2 * Math.pow(Math.abs(d - e[h]), 1.5), c -= Math.pow(a - e[h], 1.5), -1 != ".?!".indexOf(f[h]) ? c += d / 3 : -1 != ",;)]}".indexOf(f[h]) && (c += d / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += .5);
    return c
};
g.g.fb.pA = function (a, c, d) {
    for (var e = g.g.fb.$u(a, c, d), f, h = 0; h < c.length - 1; h++) if (c[h] != c[h + 1]) {
        var k = [].concat(c);
        k[h] = !k[h];
        k[h + 1] = !k[h + 1];
        var l = g.g.fb.$u(a, k, d);
        l > e && (e = l, f = k)
    }
    return f ? g.g.fb.pA(a, f, d) : c
};
g.g.fb.oH = function (a, c) {
    for (var d = [], e = 0; e < a.length; e++) d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
    return d.join("")
};
g.g.Te = function (a, c) {
    this.width = a;
    this.height = c
};
g.g.Te.Ce = function (a, c) {
    return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1
};
g.g.style = {};
g.g.style.Kg = function (a) {
    if ("none" != g.g.style.ky(a, "display")) return g.g.style.iy(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    var h = a.offsetWidth;
    a = a.offsetHeight;
    c.display = d;
    c.position = f;
    c.visibility = e;
    return new g.g.Te(h, a)
};
g.g.style.iy = function (a) {
    return new g.g.Te(a.offsetWidth, a.offsetHeight)
};
g.g.style.ky = function (a, c) {
    return g.g.style.getComputedStyle(a, c) || g.g.style.FE(a, c) || a.style && a.style[c]
};
g.g.style.getComputedStyle = function (a, c) {
    return document.defaultView && document.defaultView.getComputedStyle && (a = document.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
};
g.g.style.FE = function (a, c) {
    return a.currentStyle ? a.currentStyle[c] : null
};
g.g.style.qp = function (a) {
    var c = new g.g.J(0, 0);
    a = a.getBoundingClientRect();
    var d = document.documentElement;
    d = new g.g.J(window.pageXOffset || d.scrollLeft, window.pageYOffset || d.scrollTop);
    c.x = a.left + d.x;
    c.y = a.top + d.y;
    return c
};
g.g.style.py = function () {
    var a = document.body, c = document.documentElement;
    return new g.g.J(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop)
};
g.g.style.Eu = function (a, c) {
    a.style.display = c ? "" : "none"
};
g.g.style.Rk = function () {
    return "rtl" == g.g.style.ky(void 0, "direction")
};
g.g.style.CE = function (a) {
    var c = g.g.style.getComputedStyle(a, "borderLeftWidth"), d = g.g.style.getComputedStyle(a, "borderRightWidth"),
        e = g.g.style.getComputedStyle(a, "borderTopWidth");
    a = g.g.style.getComputedStyle(a, "borderBottomWidth");
    return {top: parseFloat(e), right: parseFloat(d), bottom: parseFloat(a), left: parseFloat(c)}
};
g.g.style.Bu = function (a, c) {
    a = g.g.style.HE(a, c);
    c.scrollLeft = a.x;
    c.scrollTop = a.y
};
g.g.style.HE = function (a, c) {
    var d = g.g.style.qp(a), e = g.g.style.qp(c), f = g.g.style.CE(c), h = d.x - e.x - f.left;
    d = d.y - e.y - f.top;
    a = g.g.style.iy(a);
    e = c.clientHeight - a.height;
    f = c.scrollLeft;
    var k = c.scrollTop;
    f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - e, 0));
    return new g.g.J(f, k)
};
g.g.userAgent = {};
(function (a) {
    function c(e) {
        return -1 != d.indexOf(e.toUpperCase())
    }

    g.g.userAgent.raw = a;
    var d = g.g.userAgent.raw.toUpperCase();
    g.g.userAgent.lg = c("Trident") || c("MSIE");
    g.g.userAgent.no = c("Edge");
    g.g.userAgent.JB = c("JavaFX");
    g.g.userAgent.Er = c("WebKit") && !g.g.userAgent.no;
    g.g.userAgent.Oq = c("Gecko") && !g.g.userAgent.Er && !g.g.userAgent.lg && !g.g.userAgent.no;
    g.g.userAgent.li = c("Android");
    g.g.userAgent.ng = c("iPad");
    g.g.userAgent.Lv = c("iPod");
    g.g.userAgent.Rq = c("iPhone") && !g.g.userAgent.ng && !g.g.userAgent.Lv;
    g.g.userAgent.VB = c("Macintosh");
    g.g.userAgent.FC = g.g.userAgent.ng || g.g.userAgent.li && !c("Mobile") || c("Silk");
    g.g.userAgent.Uv = !g.g.userAgent.FC && (g.g.userAgent.Lv || g.g.userAgent.Rq || g.g.userAgent.li || c("IEMobile"))
})(g.g.global.navigator && g.g.global.navigator.userAgent || "");
g.g.SF = function (a) {
    a.preventDefault();
    a.stopPropagation()
};
g.g.Gp = function (a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
};
g.g.Fe = function (a) {
    var c = new g.g.J(0, 0), d = a.getAttribute("x");
    d && (c.x = parseInt(d, 10));
    if (d = a.getAttribute("y")) c.y = parseInt(d, 10);
    if (d = (d = a.getAttribute("transform")) && d.match(g.g.Fe.TC)) c.x += Number(d[1]), d[3] && (c.y += Number(d[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && (a = a.match(g.g.Fe.UC)) && (c.x += Number(a[1]), a[3] && (c.y += Number(a[3])));
    return c
};
g.g.Fm = function (a) {
    for (var c = 0, d = 0; a;) {
        var e = g.g.Fe(a);
        c += e.x;
        d += e.y;
        if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode
    }
    return new g.g.J(c, d)
};
g.g.Fe.TC = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.Fe.UC = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.lj = function (a) {
    return a.ctrlKey && g.g.userAgent.VB ? !0 : 2 == a.button
};
g.g.cn = function (a, c, d) {
    var e = c.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    d || (d = c.getScreenCTM().inverse());
    return e.matrixTransform(d)
};
g.g.gy = function (a) {
    switch (a.deltaMode) {
        case 0:
            return {x: a.deltaX, y: a.deltaY};
        case 1:
            return {x: a.deltaX * g.Pv, y: a.deltaY * g.Pv};
        case 2:
            return {x: a.deltaX * g.aw, y: a.deltaY * g.aw}
    }
};
g.g.VG = function (a) {
    return g.g.Su(a, !0)
};
g.g.ke = function (a) {
    if ("string" != typeof a) return a;
    a = g.g.Su(a, !1);
    return a.length ? a[0] : ""
};
g.g.Ow = function (a) {
    for (var c = g.h, d = a.match(/%{BKY_[A-Z]\w*}/ig), e = 0; e < d.length; e++) void 0 == c[d[e].toUpperCase().slice(6, -1)] && console.log("WARNING: No message string for " + d[e] + " in " + a)
};
g.g.Su = function (a, c) {
    var d = [], e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && d.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : c && "0" <= l && "9" >= l ? (f = 2, h = l, (l = a.join("")) && d.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (d.push(parseInt(h, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[A-Z]\w*/i.test(f) ? (l = f.toUpperCase(), (l = g.g.fb.startsWith(l, "BKY_") ?
            l.substring(4) : null) && l in g.h ? (f = g.h[l], "string" == typeof f ? Array.prototype.push.apply(d, g.g.Su(f, c)) : c ? d.push(String(f)) : d.push(f)) : d.push("%{" + f + "}")) : d.push("%{" + f + "}"), f = a.length = 0))
    }
    (l = a.join("")) && d.push(l);
    c = [];
    for (k = a.length = 0; k < d.length; ++k) "string" == typeof d[k] ? a.push(d[k]) : ((l = a.join("")) && c.push(l), a.length = 0, c.push(d[k]));
    (l = a.join("")) && c.push(l);
    a.length = 0;
    return c
};
g.g.Ig = function () {
    for (var a = g.g.Ig.Xz.length, c = [], d = 0; 20 > d; d++) c[d] = g.g.Ig.Xz.charAt(Math.random() * a);
    return c.join("")
};
g.g.Ig.Xz = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.gj = function () {
    if (void 0 !== g.g.gj.Zr) return g.g.gj.Zr;
    if (!g.g.global.getComputedStyle) return !1;
    var a = document.createElement("p"), c = "none", d = {
        webkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        msTransform: "-ms-transform",
        MozTransform: "-moz-transform",
        transform: "transform"
    };
    document.body.insertBefore(a, null);
    for (var e in d) if (void 0 !== a.style[e]) {
        a.style[e] = "translate3d(1px,1px,1px)";
        c = g.g.global.getComputedStyle(a);
        if (!c) return document.body.removeChild(a), !1;
        c = c.getPropertyValue(d[e])
    }
    document.body.removeChild(a);
    g.g.gj.Zr = "none" !== c;
    return g.g.gj.Zr
};
g.g.Pz = function (a) {
    if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
    if ("complete" == document.readyState) a(); else var c = setInterval(function () {
        "complete" == document.readyState && (clearInterval(c), a())
    }, 10)
};
g.g.SE = function () {
    var a = g.g.style.py();
    return {
        right: document.documentElement.clientWidth + a.x,
        bottom: document.documentElement.clientHeight + a.y,
        top: a.y,
        left: a.x
    }
};
g.g.Kr = function (a, c) {
    c = a.indexOf(c);
    if (-1 == c) return !1;
    a.splice(c, 1);
    return !0
};
g.g.LE = function () {
    var a = document.documentElement, c = window;
    return g.g.userAgent.lg && c.pageYOffset != a.scrollTop ? new g.g.J(a.scrollLeft, a.scrollTop) : new g.g.J(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop)
};
g.g.Us = function (a, c) {
    var d = Object.create(null), e = p(a, !0);
    c && (a = q(a)) && (a = e.indexOf(a), e.splice(a, e.length - a));
    for (a = 0; c = e[a]; a++) d[c.type] ? d[c.type]++ : d[c.type] = 1;
    return d
};
g.g.AG = function (a, c) {
    var d = c.x;
    c = c.y;
    var e = aa(a).getBoundingClientRect();
    d = new g.g.J(d - e.left, c - e.top);
    c = g.g.Fm(a.pb);
    return g.g.J.tm(d, c).scale(1 / a.scale)
};
g.i = {};
g.i.uy = "";
g.i.Ec = !0;
g.i.ws = 0;
g.i.io = "create";
g.i.ul = g.i.io;
g.i.xl = "delete";
g.i.Wn = g.i.xl;
g.i.ni = "change";
g.i.BH = g.i.ni;
g.i.Gl = "move";
g.i.mv = g.i.Gl;
g.i.tw = "var_create";
g.i.uw = "var_delete";
g.i.vw = "var_rename";
g.i.Lo = "ui";
g.i.bo = "comment_create";
g.i.tv = "comment_delete";
g.i.rv = "comment_change";
g.i.co = "comment_move";
g.i.mB = "finished_loading";
g.i.JA = [g.i.ul, g.i.mv, g.i.bo, g.i.co];
g.i.zl = [];
g.i.Ka = function (a) {
    g.i.isEnabled() && (g.i.zl.length || setTimeout(g.i.vE, 0), g.i.zl.push(a))
};
g.i.vE = function () {
    for (var a = g.i.filter(g.i.zl, !0), c = g.i.zl.length = 0, d; d = a[c]; c++) if (d.tc) {
        var e = g.Ib.Ws(d.tc);
        if (e) {
            var f = d;
            if (f.Ec) for (e.Oj.push(f), e.mn.length = 0; e.Oj.length > e.Rv && 0 <= e.Rv;) e.Oj.shift();
            for (var h = 0; d = e.Ad[h]; h++) d(f)
        }
    }
};
g.i.filter = function (a, c) {
    a = a.slice();
    c || a.reverse();
    for (var d = [], e = Object.create(null), f = 0, h; h = a[f]; f++) if (!h.Pk()) {
        var k = [h.type, h.wc, h.tc].join(" "), l = e[k], m = l ? l.event : null;
        if (!l) e[k] = {
            event: h,
            index: f
        }, d.push(h); else if (h.type == g.i.Gl && l.index == f - 1) m.tj = h.tj, m.sj = h.sj, m.Sh = h.Sh, l.index = f; else if (h.type == g.i.ni && h.element == m.element && h.name == m.name) m.newValue = h.newValue; else if (h.type != g.i.Lo || "click" != h.element || "commentOpen" != m.element && "mutatorOpen" != m.element && "warningOpen" != m.element) e[k] = {
            event: h,
            index: 1
        }, d.push(h)
    }
    a = d.filter(function (n) {
        return !n.Pk()
    });
    c || a.reverse();
    for (f = 1; h = a[f]; f++) h.type == g.i.ni && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
g.i.BD = function () {
    for (var a = 0, c; c = g.i.zl[a]; a++) c.Ec = !1
};
g.i.disable = function () {
    g.i.ws++
};
g.i.enable = function () {
    g.i.ws--
};
g.i.isEnabled = function () {
    return 0 == g.i.ws
};
g.i.Zb = function () {
    return g.i.uy
};
g.i.$ = function (a) {
    g.i.uy = "boolean" == typeof a ? a ? g.g.Ig() : "" : a
};
g.i.Xx = function (a) {
    var c = [];
    a = p(a, !1);
    for (var d = 0, e; e = a[d]; d++) c[d] = e.id;
    return c
};
g.i.va = function (a) {
    switch (a.type) {
        case g.i.io:
            var c = new g.i.Qe(null);
            break;
        case g.i.xl:
            c = new g.i.tf(null);
            break;
        case g.i.ni:
            c = new g.i.ah(null, "", "", "", "");
            break;
        case g.i.Gl:
            c = new g.i.yi(null);
            break;
        case g.i.tw:
            c = new g.i.xe(null);
            break;
        case g.i.uw:
            c = new g.i.Ue(null);
            break;
        case g.i.vw:
            c = new g.i.zf(null, "");
            break;
        case g.i.Lo:
            c = new g.i.vd(null, "", "", "");
            break;
        case g.i.bo:
            c = new g.i.gg(null);
            break;
        case g.i.rv:
            c = new g.i.Yj(null, "", "");
            break;
        case g.i.co:
            c = new g.i.oi(null);
            break;
        case g.i.tv:
            c = new g.i.hg(null);
            break;
        default:
            throw Error("Unknown event type.");
    }
    c.va(a);
    c.tc = (void 0).id;
    return c
};
g.i.eE = function (a) {
    if ((a.type == g.i.Gl || a.type == g.i.io) && a.tc) {
        var c = g.Ib.Ws(a.tc);
        if (a = u(c, a.wc)) {
            var d = a.getParent();
            if (d && d.isEnabled()) for (c = p(a, !1), a = 0; d = c[a]; a++) d.md(!0); else if ((a.L || a.Y) && !c.gc()) {
                do a.md(!1), a = q(a); while (a)
            }
        }
    }
};
g.i.Abstract = function () {
    this.tc = void 0;
    this.group = g.i.Zb();
    this.Ec = g.i.Ec
};
g.i.Abstract.prototype.Za = function () {
    var a = {type: this.type};
    this.group && (a.group = this.group);
    return a
};
g.i.Abstract.prototype.va = function (a) {
    this.group = a.group
};
g.i.Abstract.prototype.Pk = function () {
    return !1
};
g.i.Abstract.prototype.run = function () {
};

function v(a) {
    if (a.tc) var c = g.Ib.Ws(a.tc);
    if (!c) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
    return c
};g.g.object = {};
g.g.object.W = function (a, c) {
    a.w = c.prototype;
    a.prototype = Object.create(c.prototype);
    a.prototype.constructor = a
};
g.g.object.qj = function (a, c) {
    for (var d in c) a[d] = c[d]
};
g.g.object.values = function (a) {
    return Object.values ? Object.values(a) : Object.keys(a).map(function (c) {
        return a[c]
    })
};
g.i.vd = function (a, c, d, e) {
    g.i.vd.w.constructor.call(this);
    this.wc = a ? a.id : null;
    this.tc = a ? a.v.id : void 0;
    this.element = c;
    this.oldValue = d;
    this.newValue = e;
    this.Ec = !1
};
g.g.object.W(g.i.vd, g.i.Abstract);
g.i.vd.prototype.type = g.i.Lo;
g.i.vd.prototype.Za = function () {
    var a = g.i.vd.w.Za.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.wc && (a.blockId = this.wc);
    return a
};
g.i.vd.prototype.va = function (a) {
    g.i.vd.w.va.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.wc = a.blockId
};
g.g.o = {};
g.g.o.Pl = "http://www.w3.org/2000/svg";
g.g.o.wi = "http://www.w3.org/1999/xhtml";
g.g.o.Ji = "http://www.w3.org/1999/xlink";
g.g.o.Node = {ELEMENT_NODE: 1, TEXT_NODE: 3, COMMENT_NODE: 8, DOCUMENT_POSITION_CONTAINED_BY: 16};
g.g.o.Mi = null;
g.g.o.Xr = 0;
g.g.o.M = function (a, c, d) {
    a = document.createElementNS(g.g.o.Pl, a);
    for (var e in c) a.setAttribute(e, c[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    d && d.appendChild(a);
    return a
};
g.g.o.Cb = function (a, c) {
    var d = a.getAttribute("class") || "";
    if (-1 != (" " + d + " ").indexOf(" " + c + " ")) return !1;
    d && (d += " ");
    a.setAttribute("class", d + c);
    return !0
};
g.g.o.Fc = function (a, c) {
    var d = a.getAttribute("class");
    if (-1 == (" " + d + " ").indexOf(" " + c + " ")) return !1;
    d = d.split(/\s+/);
    for (var e = 0; e < d.length; e++) d[e] && d[e] != c || (d.splice(e, 1), e--);
    d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class");
    return !0
};
g.g.o.xy = function (a, c) {
    return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ")
};
g.g.o.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
g.g.o.fj = function (a, c) {
    var d = c.nextSibling;
    c = c.parentNode;
    if (!c) throw Error("Reference node has no parent.");
    d ? c.insertBefore(a, d) : c.appendChild(a)
};
g.g.o.containsNode = function (a, c) {
    return !!(a.compareDocumentPosition(c) & g.g.o.Node.DOCUMENT_POSITION_CONTAINED_BY)
};
g.g.o.un = function (a, c) {
    a.style.transform = c;
    a.style["-webkit-transform"] = c
};
g.g.o.Dn = function () {
    g.g.o.Xr++;
    g.g.o.Mi || (g.g.o.Mi = {})
};
g.g.o.En = function () {
    g.g.o.Xr--;
    g.g.o.Xr || (g.g.o.Mi = null)
};
g.g.o.bt = function (a) {
    var c = a.textContent + "\n" + a.className.baseVal, d;
    if (g.g.o.Mi && (d = g.g.o.Mi[c])) return d;
    try {
        d = g.g.userAgent.lg || g.g.userAgent.no ? a.getBBox().width : a.getComputedTextLength()
    } catch (e) {
        return 8 * a.textContent.length
    }
    g.g.o.Mi && (g.g.o.Mi[c] = d);
    return d
};
g.qv = function (a) {
    this.jm = a;
    this.Oa()
};
b = g.qv.prototype;
b.tb = null;
b.bf = null;
b.jm = null;
b.ci = 1;
b.Fn = null;
b.Oa = function () {
    this.tb || (this.tb = g.g.o.M("svg", {
        xmlns: g.g.o.Pl,
        "xmlns:html": g.g.o.wi,
        "xmlns:xlink": g.g.o.Ji,
        version: "1.1",
        "class": "blocklyBlockDragSurface"
    }, this.jm), this.bf = g.g.o.M("g", {}, this.tb))
};

function ba(a, c) {
    if (a.bf.childNodes.length) throw Error("Already dragging a block.");
    a.bf.appendChild(c);
    a.tb.style.display = "block";
    a.Fn = new g.g.J(0, 0)
}

b.Nj = function (a, c) {
    this.Fn = new g.g.J(a * this.ci, c * this.ci);
    a = this.Fn.x;
    c = this.Fn.y;
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.tb.style.display = "block";
    g.g.o.un(this.tb, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.at = function () {
    var a = g.g.Fe(this.tb);
    return new g.g.J(a.x / this.ci, a.y / this.ci)
};
b.Zb = function () {
    return this.bf
};
b.Qo = function (a) {
    a ? a.appendChild(this.bf.firstChild) : this.bf.removeChild(this.bf.firstChild);
    this.tb.style.display = "none";
    if (this.bf.childNodes.length) throw Error("Drag group was not cleared.");
    this.Fn = null
};
g.g.uo = {};
g.g.uo.RF = 0;
g.g.uo.PE = function () {
    return "blockly:" + (g.g.uo.RF++).toString(36)
};
g.uc = function () {
    this.Oz = g.uc.px;
    this.Lk = null;
    this.Yc = !1;
    this.Pd = this.hb = null;
    this.kb = [];
    this.bs = {}
};
g.uc.px = !1;
g.uc.Error = {
    yq: "Component already rendered",
    hr: "Unable to set parent component",
    PA: "Child component index out of bounds"
};
b = g.uc.prototype;
b.ua = function () {
    return this.Lk || (this.Lk = g.g.uo.PE())
};
b.ta = function () {
    return this.hb
};
b.cl = function (a) {
    if (this == a) throw Error(g.uc.Error.hr);
    var c;
    if (c = a && this.Pd && this.Lk) c = (c = this.Lk) ? this.Pd.bs[c] || null : null;
    if (c && this.Pd != a) throw Error(g.uc.Error.hr);
    this.Pd = a
};
b.getParent = function () {
    return this.Pd
};
b.Oa = function () {
    this.hb = document.createElement("div")
};
b.za = function (a) {
    this.Vf(a)
};
b.Vf = function (a, c) {
    if (this.Yc) throw Error(g.uc.Error.yq);
    this.hb || this.Oa();
    a ? a.insertBefore(this.hb, c || null) : document.body.appendChild(this.hb);
    this.Pd && !this.Pd.Yc || this.cf()
};
b.cf = function () {
    this.Yc = !0;
    ca(this, function (a) {
        !a.Yc && a.ta() && a.cf()
    })
};
b.wh = function () {
    ca(this, function (a) {
        a.Yc && a.wh()
    });
    this.Yc = !1
};
b.I = function () {
    this.jE || (this.jE = !0, this.um())
};
b.um = function () {
    this.Yc && this.wh();
    ca(this, function (a) {
        a.I()
    });
    this.hb && g.g.o.removeNode(this.hb);
    this.Pd = this.hb = this.bs = this.kb = null
};
b.Yl = function (a, c, d) {
    if (a.Yc && (d || !this.Yc)) throw Error(g.uc.Error.yq);
    if (0 > c || c > this.kb.length) throw Error(g.uc.Error.PA);
    this.bs[a.ua()] = a;
    if (a.getParent() == this) {
        var e = this.kb.indexOf(a);
        -1 < e && this.kb.splice(e, 1)
    }
    a.cl(this);
    this.kb.splice(c, 0, a);
    a.Yc && this.Yc && a.getParent() == this ? (d = this.hb, c = d.childNodes[c] || null, c != a.ta() && d.insertBefore(a.ta(), c)) : d ? (this.hb || this.Oa(), c = this.kb[c + 1] || null, a.Vf(this.hb, c ? c.hb : null)) : this.Yc && !a.Yc && a.hb && a.hb.parentNode && a.hb.parentNode.nodeType == g.g.o.Node.ELEMENT_NODE &&
        a.cf()
};
b.Rk = function () {
    return this.Oz
};

function da(a, c) {
    if (a.Yc) throw Error(g.uc.Error.yq);
    a.Oz = c
}

function ea(a) {
    return 0 != a.kb.length
}

function ca(a, c, d) {
    for (var e = 0; e < a.kb.length; e++) c.call(d, a.kb[e], e)
};g.Ed = {};
g.Ed.st = !1;
g.Ed.register = function (a) {
    if (g.Ed.st) throw Error("CSS already injected");
    Array.prototype.push.apply(g.Ed.Eq, a);
    a.length = 0
};
g.Ed.ej = function (a, c) {
    if (!g.Ed.st) {
        g.Ed.st = !0;
        var d = g.Ed.Eq.join("\n");
        g.Ed.Eq.length = 0;
        a && (a = c.replace(/[\\/]$/, ""), d = d.replace(/<<<PATH>>>/g, a), a = document.createElement("style"), d = document.createTextNode(d), a.appendChild(d), document.head.insertBefore(a, document.head.firstChild))
    }
};
g.Ed.Cu = function () {
    console.warn("Deprecated call to Blockly.Css.setCursor. See https://github.com/google/blockly/issues/981 for context")
};
g.Ed.Eq = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none;", "}", ".blocklyNonSelectable {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;",
    "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyBlockCanvas.blocklyCanvasTransitioning,", ".blocklyBubbleCanvas.blocklyCanvasTransitioning {", "transition: transform .5s;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
    "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: .9;", "padding: 2px;", "position: absolute;", "z-index: 100000;", "}", ".blocklyDropDownDiv {", "position: fixed;", "left: 0;", "top: 0;", "z-index: 1000;", "display: none;", "border: 1px solid;", "border-radius: 2px;", "padding: 4px;", "box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv.focused {", "box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownContent {", "max-height: 300px;", "overflow: auto;",
    "overflow-x: hidden;", "}", ".blocklyDropDownArrow {", "position: absolute;", "left: 0;", "top: 0;", "width: 16px;", "height: 16px;", "z-index: -1;", "background-color: inherit;", "border-color: inherit;", "}", ".blocklyDropDownButton {", "display: inline-block;", "float: left;", "padding: 0;", "margin: 4px;", "border-radius: 4px;", "outline: none;", "border: 1px solid;", "transition: box-shadow .1s;", "cursor: pointer;", "}", ".arrowTop {", "border-top: 1px solid;", "border-left: 1px solid;", "border-top-left-radius: 4px;",
    "border-color: inherit;", "}", ".arrowBottom {", "border-bottom: 1px solid;", "border-right: 1px solid;", "border-bottom-right-radius: 4px;", "border-color: inherit;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;",
    "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
    "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;",
    "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyInsertionMarker>.blocklyPath,", ".blocklyInsertionMarker>.blocklyPathLight,", ".blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: .2;", "stroke: none", "}", ".blocklyReplaceable .blocklyPath {", "fill-opacity: .5;", "}", ".blocklyReplaceable .blocklyPathLight,", ".blocklyReplaceable .blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;",
    "font-size: 11pt;", "}", ".blocklyMultilineText {", "font-family: monospace;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklySvg text, .blocklyBlockDragSurface text {",
    "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;",
    "}", ".blocklyCommentForeignObject {", "position: relative;", "z-index: 0;", "}", ".blocklyCommentRect {", "fill: #E7DE8E;", "stroke: #bcA903;", "stroke-width: 1px", "}", ".blocklyCommentTarget {", "fill: transparent;", "stroke: #bcA903;", "}", ".blocklyCommentTargetFocused {", "fill: none;", "}", ".blocklyCommentHandleTarget {", "fill: none;", "}", ".blocklyCommentHandleTargetFocused {", "fill: transparent;", "}", ".blocklyFocused>.blocklyCommentRect {", "fill: #B9B272;", "stroke: #B9B272;", "}", ".blocklySelected>.blocklyCommentTarget {",
    "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklyCommentTextarea {", "background-color: #fef49c;", "border: 0;", "outline: 0;", "margin: 0;", "padding: 3px;", "resize: none;", "display: block;", "overflow: hidden;", "}", ".blocklyCommentDeleteIcon {", "cursor: pointer;", "fill: #000;", "display: none", "}", ".blocklySelected > .blocklyCommentDeleteIcon {", "display: block", "}", ".blocklyDeleteIconShape {", "fill: #000;", "stroke: #000;", "stroke-width: 1px;", "}", ".blocklyDeleteIconShape.blocklyDeleteIconHighlighted {",
    "stroke: #fc3;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0;", "width: 100%;", "text-align: center;", "}", ".blocklyHtmlInput::-ms-clear {", "display: none;", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyMainWorkspaceScrollbar {",
    "z-index: 20;", "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
    ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "max-height: 100%;", "}", ".blocklyDropdownMenu {", "border-radius: 2px;", "padding: 0 !important;", "}", ".blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem,", ".blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem {", "padding-left: 28px;", "}", ".blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl,", ".blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl {",
    "padding-left: 5px;", "padding-right: 28px;", "}", ".blocklyVerticalCursor {", "stroke-width: 3px;", "fill: rgba(255,255,255,.5);", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;",
    "border-color: transparent;", "border-style: solid;", "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);", "}", ".blocklyWidgetDiv .goog-menu.focused {", "box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv .goog-menu {", "cursor: default;", 'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
    "outline: none;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem,", ".blocklyDropDownDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "min-width: 7em;", "border: none;", "padding: 6px 15px;", "white-space: nowrap;", "cursor: pointer;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem,", ".blocklyDropDownDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyDropDownDiv .goog-menu-noicon .goog-menuitem {",
    "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menuitem-content,", ".blocklyDropDownDiv .goog-menuitem-content {", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "}", ".blocklyDropDownDiv .goog-menuitem-content {", "color: #000;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled,", ".blocklyDropDownDiv .goog-menuitem-disabled {", "cursor: inherit;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content,", ".blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-content {",
    "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-icon {", "opacity: .3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight ,", ".blocklyDropDownDiv .goog-menuitem-highlight {", "background-color: rgba(0,0,0,.1);", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-icon {",
    "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,",
    ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {", "position: static;", "float: left;", "margin-left: -24px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {", "float: right;", "margin-right: -24px;", "}"];
g.g.Ha = {};
g.g.Ha.nd = function (a) {
    return a * Math.PI / 180
};
g.g.Ha.kl = function (a) {
    return 180 * a / Math.PI
};
g.g.Ha.Cf = function (a, c, d) {
    if (d < a) {
        var e = d;
        d = a;
        a = e
    }
    return Math.max(a, Math.min(c, d))
};
g.D = function () {
};
g.D.qe = null;
g.D.Ur = null;
g.D.ld = null;
g.D.Tp = null;
g.D.Vn = 16;
g.D.pv = 1;
g.D.jv = 12;
g.D.$v = 16;
g.D.zq = .25;
g.D.wv = "#dadce0";
g.D.xv = "#fff";
g.D.Jr = null;
g.D.wj = null;
g.D.Oa = function () {
    if (!g.D.qe) {
        var a = document.createElement("div");
        a.className = "blocklyDropDownDiv";
        a.style.backgroundColor = g.D.xv;
        a.style.borderColor = g.D.wv;
        document.body.appendChild(a);
        g.D.qe = a;
        var c = document.createElement("div");
        c.className = "blocklyDropDownContent";
        a.appendChild(c);
        g.D.Ze = c;
        c = document.createElement("div");
        c.className = "blocklyDropDownArrow";
        a.appendChild(c);
        g.D.Ve = c;
        g.D.qe.style.opacity = 0;
        g.D.qe.style.transition = "transform " + g.D.zq + "s, opacity " + g.D.zq + "s";
        a.addEventListener("focusin",
            function () {
                g.g.o.Cb(a, "focused")
            });
        a.addEventListener("focusout", function () {
            g.g.o.Fc(a, "focused")
        })
    }
};
g.D.Rz = function (a) {
    g.D.Ur = a
};
g.D.Wx = function () {
    return g.D.Ze
};
g.D.AD = function () {
    g.D.Ze.innerHTML = "";
    g.D.Ze.style.width = ""
};
g.D.Gc = function (a, c) {
    g.D.qe.style.backgroundColor = a;
    g.D.qe.style.borderColor = c
};
g.D.$L = function (a) {
    g.D.qe.setAttribute("data-category", a)
};
g.D.bM = function (a, c, d, e) {
    var f = c.v.scale, h = c.width, k = c.height;
    h *= f;
    k *= f;
    f = c.ya().getBoundingClientRect();
    h = f.left + h / 2;
    k = f.top + k;
    f = f.top;
    e && (f += e);
    g.D.Rz(x(c.v).parentNode);
    return g.D.show(a, c.G, h, k, h, f, d)
};
g.D.Wz = function (a, c) {
    var d = a.ya().getBoundingClientRect(), e = d.left + d.width / 2, f = d.bottom;
    d = d.top;
    var h = a.B;
    g.D.Tp = !0;
    g.D.Rz(x(h.v).parentNode);
    g.D.show(a, h.G, e, f, e, d, c)
};
g.D.show = function (a, c, d, e, f, h, k) {
    g.D.ld = a;
    g.D.wj = k || null;
    a = g.D.ey(d, e, f, h);
    a.Mr ? (g.D.Ve.style.display = "", g.D.Ve.style.transform = "translate(" + a.$l + "px," + a.Fw + "px) rotate(45deg)", g.D.Ve.setAttribute("class", a.Lr ? "blocklyDropDownArrow arrowTop" : "blocklyDropDownArrow arrowBottom")) : g.D.Ve.style.display = "none";
    g.D.qe.style.direction = c ? "rtl" : "ltr";
    g.D.jn(a.xp, a.yp, a.jp, a.kp);
    return a.Lr
};
g.D.DE = function () {
    var a = g.D.Ur.getBoundingClientRect(), c = g.g.style.Kg(g.D.Ur);
    return {
        left: a.left,
        right: a.left + c.width,
        top: a.top,
        bottom: a.top + c.height,
        width: c.width,
        height: c.height
    }
};
g.D.ey = function (a, c, d, e) {
    var f = g.D.DE(), h = g.g.style.Kg(g.D.qe);
    return c + h.height < f.bottom ? g.D.by(a, c, f, h) : e - h.height > f.top ? g.D.ay(d, e, f, h) : c + h.height < document.documentElement.clientHeight ? g.D.by(a, c, f, h) : e - h.height > document.documentElement.clientTop ? g.D.ay(d, e, f, h) : g.D.QE(a, f, h)
};
g.D.by = function (a, c, d, e) {
    a = g.D.Zs(a, d.left, d.right, e.width);
    return {xp: a.Ak, yp: c, jp: a.Ak, kp: c + g.D.$v, $l: a.$l, Fw: -(g.D.Vn / 2 + g.D.pv), Lr: !0, Mr: !0}
};
g.D.ay = function (a, c, d, e) {
    a = g.D.Zs(a, d.left, d.right, e.width);
    return {
        xp: a.Ak,
        yp: c - e.height,
        jp: a.Ak,
        kp: c - e.height - g.D.$v,
        $l: a.$l,
        Fw: e.height - 2 * g.D.pv - g.D.Vn / 2,
        Lr: !1,
        Mr: !0
    }
};
g.D.QE = function (a, c, d) {
    a = g.D.Zs(a, c.left, c.right, d.width);
    return {xp: a.Ak, yp: 0, jp: a.Ak, kp: 0, Mr: !1}
};
g.D.Zs = function (a, c, d, e) {
    var f = a;
    a = g.g.Ha.Cf(c, a - e / 2, d - e);
    f -= g.D.Vn / 2;
    c = g.g.Ha.Cf(g.D.jv, f - a, e - g.D.jv - g.D.Vn);
    return {$l: c, Ak: a}
};
g.D.isVisible = function () {
    return !!g.D.ld
};
g.D.Hk = function (a, c) {
    g.D.ld === a && (c ? g.D.Ik() : g.D.Ca())
};
g.D.Ca = function () {
    var a = g.D.qe;
    a.style.transform = "translate(0, 0)";
    a.style.opacity = 0;
    g.D.Jr = setTimeout(function () {
        g.D.Ik()
    }, 1E3 * g.D.zq);
    g.D.wj && (g.D.wj(), g.D.wj = null)
};
g.D.Ik = function () {
    if (g.D.isVisible()) {
        g.D.Jr && clearTimeout(g.D.Jr);
        var a = g.D.qe;
        a.style.transform = "";
        a.style.left = "";
        a.style.top = "";
        a.style.opacity = 0;
        a.style.display = "none";
        a.style.backgroundColor = g.D.xv;
        a.style.borderColor = g.D.wv;
        g.D.wj && (g.D.wj(), g.D.wj = null);
        g.D.AD();
        g.D.ld = null
    }
};
g.D.jn = function (a, c, d, e) {
    a = Math.floor(a);
    c = Math.floor(c);
    d = Math.floor(d);
    e = Math.floor(e);
    var f = g.D.qe;
    f.style.left = a + "px";
    f.style.top = c + "px";
    f.style.display = "block";
    f.style.opacity = 1;
    f.style.transform = "translate(" + (d - a) + "px," + (e - c) + "px)"
};
g.D.VL = function () {
    if (g.D.ld) {
        var a = g.D.ld.B, c = a.v.scale, d = g.D.Tp ? g.D.ld.bc.width : a.width,
            e = g.D.Tp ? g.D.ld.bc.height : a.height;
        d *= c;
        e *= c;
        a = g.D.Tp ? g.D.ld.df.getBoundingClientRect() : a.ya().getBoundingClientRect();
        d = a.left + d / 2;
        e = g.D.ey(d, a.top + e, d, a.top);
        g.D.jn(e.xp, e.yp, e.jp, e.kp)
    } else g.D.Ca()
};
g.ui = function (a, c) {
    this.Ek = a;
    this.Lu = c.spacing;
    this.Uy = c.length;
    this.xF = (this.Gt = a.firstChild) && this.Gt.nextSibling;
    this.IG = c.snap
};
g.ui.prototype.ci = 1;
g.ui.prototype.I = function () {
    this.Ek = null
};
g.ui.prototype.update = function (a) {
    this.ci = a;
    var c = this.Lu * a || 100;
    this.Ek.setAttribute("width", c);
    this.Ek.setAttribute("height", c);
    c = Math.floor(this.Lu / 2) + .5;
    var d = c - this.Uy / 2, e = c + this.Uy / 2;
    c *= a;
    d *= a;
    e *= a;
    fa(this.Gt, a, d, e, c, c);
    fa(this.xF, a, c, c, d, e)
};

function fa(a, c, d, e, f, h) {
    a && (a.setAttribute("stroke-width", c), a.setAttribute("x1", d), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", h))
}

g.ui.prototype.moveTo = function (a, c) {
    this.Ek.setAttribute("x", a);
    this.Ek.setAttribute("y", c);
    (g.g.userAgent.lg || g.g.userAgent.no) && this.update(this.ci)
};
g.ui.Oa = function (a, c, d) {
    a = g.g.o.M("pattern", {id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse"}, d);
    0 < c.length && 0 < c.spacing ? (g.g.o.M("line", {stroke: c.colour}, a), 1 < c.length && g.g.o.M("line", {stroke: c.colour}, a)) : g.g.o.M("line", {}, a);
    return a
};
g.g.xml = {};
g.g.xml.dC = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
    return document
};
g.g.xml.createElement = function (a) {
    return g.g.xml.document().createElementNS(g.g.xml.dC, a)
};
g.g.xml.createTextNode = function (a) {
    return g.g.xml.document().createTextNode(a)
};
g.g.xml.SG = function (a) {
    return (new DOMParser).parseFromString(a, "text/xml")
};
g.g.xml.ce = function (a) {
    return (new XMLSerializer).serializeToString(a)
};
g.i.sf = function (a) {
    g.i.sf.w.constructor.call(this);
    this.wc = a.id;
    this.tc = a.v.id
};
g.g.object.W(g.i.sf, g.i.Abstract);
g.i.sf.prototype.Za = function () {
    var a = g.i.sf.w.Za.call(this);
    a.blockId = this.wc;
    return a
};
g.i.sf.prototype.va = function (a) {
    g.i.sf.w.va.call(this, a);
    this.wc = a.blockId
};
g.i.ah = function (a, c, d, e, f) {
    a && (g.i.ah.w.constructor.call(this, a), this.element = c, this.name = d, this.oldValue = e, this.newValue = f)
};
g.g.object.W(g.i.ah, g.i.sf);
g.i.eg = g.i.ah;
b = g.i.ah.prototype;
b.type = g.i.ni;
b.Za = function () {
    var a = g.i.ah.w.Za.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue;
    return a
};
b.va = function (a) {
    g.i.ah.w.va.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue
};
b.Pk = function () {
    return this.oldValue == this.newValue
};
b.run = function (a) {
    var c = u(v(this), this.wc);
    if (c) switch (c.Od && c.Od.Vb(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (c = y(c, this.name)) ? c.setValue(a) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            c.Xf(a || null);
            break;
        case "collapsed":
            c.Wg(!!a);
            break;
        case "disabled":
            c.md(!a);
            break;
        case "inline":
            c.$c(!!a);
            break;
        case "mutation":
            var d = "";
            c.eb && (d = (d = c.eb()) && g.U.ce(d));
            if (c.zb) {
                var e = g.U.Lj(a || "<mutation/>");
                c.zb(e)
            }
            g.i.Ka(new g.i.ah(c, "mutation", null, d, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.wc)
};
g.i.Qe = function (a) {
    a && (g.i.Qe.w.constructor.call(this, a), this.xml = a.v.ba ? g.U.Sr(a) : g.U.oh(a), this.Eh = g.i.Xx(a))
};
g.g.object.W(g.i.Qe, g.i.sf);
g.i.$n = g.i.Qe;
g.i.Qe.prototype.type = g.i.io;
g.i.Qe.prototype.Za = function () {
    var a = g.i.Qe.w.Za.call(this);
    a.xml = g.U.ce(this.xml);
    a.ids = this.Eh;
    return a
};
g.i.Qe.prototype.va = function (a) {
    g.i.Qe.w.va.call(this, a);
    this.xml = g.U.Lj(a.xml);
    this.Eh = a.ids
};
g.i.Qe.prototype.run = function (a) {
    var c = v(this);
    if (a) a = g.g.xml.createElement("xml"), a.appendChild(this.xml), g.U.Xi(a, c); else {
        a = 0;
        for (var d; d = this.Eh[a]; a++) {
            var e = u(c, d);
            e ? e.I(!1) : d == this.wc && console.warn("Can't uncreate non-existent block: " + d)
        }
    }
};
g.i.tf = function (a) {
    if (a) {
        if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
        g.i.tf.w.constructor.call(this, a);
        this.au = a.v.ba ? g.U.Sr(a) : g.U.oh(a);
        this.Eh = g.i.Xx(a)
    }
};
g.g.object.W(g.i.tf, g.i.sf);
g.i.KA = g.i.tf;
g.i.tf.prototype.type = g.i.xl;
g.i.tf.prototype.Za = function () {
    var a = g.i.tf.w.Za.call(this);
    a.ids = this.Eh;
    return a
};
g.i.tf.prototype.va = function (a) {
    g.i.tf.w.va.call(this, a);
    this.Eh = a.ids
};
g.i.tf.prototype.run = function (a) {
    var c = v(this);
    if (a) {
        a = 0;
        for (var d; d = this.Eh[a]; a++) {
            var e = u(c, d);
            e ? e.I(!1) : d == this.wc && console.warn("Can't delete non-existent block: " + d)
        }
    } else a = g.g.xml.createElement("xml"), a.appendChild(this.au), g.U.Xi(a, c)
};
g.i.yi = function (a) {
    a && (g.i.yi.w.constructor.call(this, a), a = ha(this), this.kz = a.yz, this.jz = a.Iy, this.Yt = a.hx)
};
g.g.object.W(g.i.yi, g.i.sf);
g.i.vl = g.i.yi;
b = g.i.yi.prototype;
b.type = g.i.Gl;
b.Za = function () {
    var a = g.i.yi.w.Za.call(this);
    this.tj && (a.newParentId = this.tj);
    this.sj && (a.newInputName = this.sj);
    this.Sh && (a.newCoordinate = Math.round(this.Sh.x) + "," + Math.round(this.Sh.y));
    return a
};
b.va = function (a) {
    g.i.yi.w.va.call(this, a);
    this.tj = a.newParentId;
    this.sj = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Sh = new g.g.J(Number(a[0]), Number(a[1])))
};
b.zj = function () {
    var a = ha(this);
    this.tj = a.yz;
    this.sj = a.Iy;
    this.Sh = a.hx
};

function ha(a) {
    var c = u(v(a), a.wc);
    a = {};
    var d = c.getParent();
    if (d) {
        a.yz = d.id;
        a:{
            for (var e = 0, f; f = d.R[e]; e++) if (f.connection && z(f.connection) == c) {
                c = f;
                break a
            }
            c = null
        }
        c && (a.Iy = c.name)
    } else a.hx = c.Qa();
    return a
}

b.Pk = function () {
    return this.kz == this.tj && this.jz == this.sj && g.g.J.Ce(this.Yt, this.Sh)
};
b.run = function (a) {
    var c = v(this), d = u(c, this.wc);
    if (d) {
        var e = a ? this.tj : this.kz, f = a ? this.sj : this.jz;
        a = a ? this.Sh : this.Yt;
        var h = null;
        if (e && (h = u(c, e), !h)) {
            console.warn("Can't connect to non-existent block: " + e);
            return
        }
        d.getParent() && A(d);
        if (a) f = d.Qa(), d.moveBy(a.x - f.x, a.y - f.y); else {
            d = d.L || d.Y;
            if (f) {
                if (c = B(h, f)) var k = c.connection
            } else d.type == g.Se && (k = h.X);
            k ? d.connect(k) : console.warn("Can't connect to non-existent input: " + f)
        }
    } else console.warn("Can't move non-existent block: " + this.wc)
};
g.i.Al = function (a) {
    this.tc = a.id;
    this.group = g.i.Zb();
    this.Ec = !1
};
g.g.object.W(g.i.Al, g.i.Abstract);
g.i.Al.prototype.type = g.i.mB;
g.i.Al.prototype.Za = function () {
    var a = {type: this.type};
    this.group && (a.group = this.group);
    this.tc && (a.workspaceId = this.tc);
    return a
};
g.i.Al.prototype.va = function (a) {
    this.tc = a.workspaceId;
    this.group = a.group
};
g.i.wg = function (a) {
    g.i.wg.w.constructor.call(this);
    this.ii = a.ua();
    this.tc = a.v.id
};
g.g.object.W(g.i.wg, g.i.Abstract);
g.i.wg.prototype.Za = function () {
    var a = g.i.wg.w.Za.call(this);
    a.varId = this.ii;
    return a
};
g.i.wg.prototype.va = function (a) {
    g.i.wg.w.Za.call(this);
    this.ii = a.varId
};
g.i.xe = function (a) {
    a && (g.i.xe.w.constructor.call(this, a), this.Rj = a.type, this.Qj = a.name)
};
g.g.object.W(g.i.xe, g.i.wg);
g.i.xe.prototype.type = g.i.tw;
g.i.xe.prototype.Za = function () {
    var a = g.i.xe.w.Za.call(this);
    a.varType = this.Rj;
    a.varName = this.Qj;
    return a
};
g.i.xe.prototype.va = function (a) {
    g.i.xe.w.va.call(this, a);
    this.Rj = a.varType;
    this.Qj = a.varName
};
g.i.xe.prototype.run = function (a) {
    var c = v(this);
    a ? c.Ld(this.Qj, this.Rj, this.ii) : c.If(this.ii)
};
g.i.Ue = function (a) {
    a && (g.i.Ue.w.constructor.call(this, a), this.Rj = a.type, this.Qj = a.name)
};
g.g.object.W(g.i.Ue, g.i.wg);
g.i.Ue.prototype.type = g.i.uw;
g.i.Ue.prototype.Za = function () {
    var a = g.i.Ue.w.Za.call(this);
    a.varType = this.Rj;
    a.varName = this.Qj;
    return a
};
g.i.Ue.prototype.va = function (a) {
    g.i.Ue.w.va.call(this, a);
    this.Rj = a.varType;
    this.Qj = a.varName
};
g.i.Ue.prototype.run = function (a) {
    var c = v(this);
    a ? c.If(this.ii) : c.Ld(this.Qj, this.Rj, this.ii)
};
g.i.zf = function (a, c) {
    a && (g.i.zf.w.constructor.call(this, a), this.$t = a.name, this.Vt = c)
};
g.g.object.W(g.i.zf, g.i.wg);
g.i.zf.prototype.type = g.i.vw;
g.i.zf.prototype.Za = function () {
    var a = g.i.zf.w.Za.call(this);
    a.oldName = this.$t;
    a.newName = this.Vt;
    return a
};
g.i.zf.prototype.va = function (a) {
    g.i.zf.w.va.call(this, a);
    this.$t = a.oldName;
    this.Vt = a.newName
};
g.i.zf.prototype.run = function (a) {
    var c = v(this);
    a ? c.bi(this.ii, this.Vt) : c.bi(this.ii, this.$t)
};
g.U = {};
g.U.mH = function () {
    var a = C, c = g.g.xml.createElement("xml"), d = g.U.gH(g.O.Ew(a));
    d.hasChildNodes() && c.appendChild(d);
    var e = ia(a, !0);
    d = 0;
    for (var f; f = e[d]; d++) c.appendChild(f.Ru(!0));
    a = D(a, !0);
    for (d = 0; e = a[d]; d++) c.appendChild(g.U.Sr(e, !0));
    return c
};
g.U.gH = function (a) {
    for (var c = g.g.xml.createElement("variables"), d = 0, e; e = a[d]; d++) {
        var f = g.g.xml.createElement("variable");
        f.appendChild(g.g.xml.createTextNode(e.name));
        e.type && f.setAttribute("type", e.type);
        f.id = e.ua();
        c.appendChild(f)
    }
    return c
};
g.U.Sr = function (a, c) {
    var d;
    a.v.G && (d = a.v.Nf());
    c = g.U.oh(a, c);
    var e = a.Qa();
    c.setAttribute("x", Math.round(a.v.G ? d - e.x : e.x));
    c.setAttribute("y", Math.round(e.y));
    return c
};
g.U.tE = function (a) {
    var c = !1;
    a.name && (a.Ei ? c = !0 : a.kg && (console.warn("Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."), c = !0));
    return c ? (c = g.g.xml.createElement("field"), c.setAttribute("name", a.name), a.dA(c)) : null
};
g.U.dD = function (a, c) {
    for (var d = 0, e; e = a.R[d]; d++) for (var f = 0, h; h = e.Pa[f]; f++) (h = g.U.tE(h)) && c.appendChild(h)
};
g.U.oh = function (a, c) {
    var d = g.g.xml.createElement(a.cb ? "shadow" : "block");
    d.setAttribute("type", a.type);
    c || (d.id = a.id);
    if (a.eb) {
        var e = a.eb();
        e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e)
    }
    g.U.dD(a, d);
    if (e = a.ze.text) {
        var f = a.ze.size, h = a.ze.ou, k = g.g.xml.createElement("comment");
        k.appendChild(g.g.xml.createTextNode(e));
        k.setAttribute("pinned", h);
        k.setAttribute("h", f.height);
        k.setAttribute("w", f.width);
        d.appendChild(k)
    }
    a.data && (e = g.g.xml.createElement("data"), e.appendChild(g.g.xml.createTextNode(a.data)),
        d.appendChild(e));
    for (f = 0; h = a.R[f]; f++) {
        var l;
        k = !0;
        if (h.type != g.jg) {
            var m = z(h.connection);
            h.type == g.Wa ? l = g.g.xml.createElement("value") : h.type == g.jb && (l = g.g.xml.createElement("statement"));
            e = h.connection.lf;
            !e || m && m.cb || l.appendChild(g.U.Qw(e, c));
            m && (l.appendChild(g.U.oh(m, c)), k = !1);
            l.setAttribute("name", h.name);
            k || d.appendChild(l)
        }
    }
    void 0 != a.Pg && a.Pg != a.pF && d.setAttribute("inline", a.Pg);
    a.isCollapsed() && d.setAttribute("collapsed", !0);
    a.isEnabled() || d.setAttribute("disabled", !0);
    a.ie() || a.cb || d.setAttribute("deletable",
        !1);
    a.kd() || a.cb || d.setAttribute("movable", !1);
    a.jd() || d.setAttribute("editable", !1);
    if (f = q(a)) l = g.g.xml.createElement("next"), l.appendChild(g.U.oh(f, c)), d.appendChild(l);
    e = a.X && a.X.lf;
    !e || f && f.cb || l.appendChild(g.U.Qw(e, c));
    return d
};
g.U.Qw = function (a, c) {
    for (var d = a = a.cloneNode(!0), e; d;) if (c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild) d = d.firstChild; else {
        for (; d && !d.nextSibling;) e = d, d = d.parentNode, e.nodeType == g.g.o.Node.TEXT_NODE && "" == e.data.trim() && d.firstChild != e && g.g.o.removeNode(e);
        d && (e = d, d = d.nextSibling, e.nodeType == g.g.o.Node.TEXT_NODE && "" == e.data.trim() && g.g.o.removeNode(e))
    }
    return a
};
g.U.ce = function (a) {
    a = g.g.xml.ce(a);
    var c = /(<[^/](?:[^>]*[^/])?>[^<]*)\n([^<]*<\/)/;
    do {
        var d = a;
        a = a.replace(c, "$1&#10;$2")
    } while (a != d);
    return a
};
g.U.zL = function (a) {
    a = g.U.ce(a).split("<");
    for (var c = "", d = 1; d < a.length; d++) {
        var e = a[d];
        "/" == e[0] && (c = c.substring(2));
        a[d] = c + "<" + e;
        "/" != e[0] && "/>" != e.slice(-2) && (c += "  ")
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "")
};
g.U.Lj = function (a) {
    var c = g.g.xml.SG(a);
    if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) throw Error("textToDom was unable to parse: " + a);
    return c.documentElement
};
g.U.vL = function (a, c) {
    c.Hc(!1);
    c.clear();
    a = g.U.Xi(a, c);
    c.Hc(!0);
    return a
};
g.U.Xi = function (a, c) {
    if (a instanceof g.Ib) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var e;
    c.G && (e = c.Nf());
    d = [];
    g.g.o.Dn();
    var f = a.childNodes.length, h = g.i.Zb();
    h || g.i.$(!0);
    c.Hc && c.Hc(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l], n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !g.i.Ec) {
                var r = g.U.Wi(m, c);
                d.push(r.id);
                var t = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    w = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(t) || isNaN(w) || r.moveBy(c.G ? e - t : t, w);
                k = !1
            } else {
                if ("shadow" == n) throw TypeError("Shadow block cannot be a top-level block.");
                if ("comment" == n) c.ba ? g.mk ? g.mk.Bm(m) : console.warn("Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment.") : g.SC ? g.SC.Bm(m) : console.warn("Missing require for Blockly.WorkspaceComment, ignoring workspace comment."); else if ("variables" == n) {
                    if (k) g.U.mE(m, c); else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                    k = !1
                }
            }
        }
    } finally {
        h || g.i.$(!1), g.g.o.En()
    }
    c.Hc && c.Hc(!0);
    g.i.Ka(new g.i.Al(c));
    return d
};
g.U.sL = function (a, c) {
    if (c.hasOwnProperty("scale")) {
        var d = g.wa.tg;
        try {
            g.wa.tg = 0;
            var e = ja(c)
        } finally {
            g.wa.tg = d
        }
    }
    a = g.U.Xi(a, c);
    if (e && e.top != e.bottom) {
        d = e.bottom;
        var f = e.left;
        var h = Infinity, k = Infinity;
        for (e = 0; e < a.length; e++) {
            var l = u(c, a[e]).Qa();
            l.y < k && (k = l.y);
            l.x < h && (h = l.x)
        }
        d = d - k + g.wa.sC;
        f -= h;
        var m;
        c.G && (m = c.Nf());
        for (e = 0; e < a.length; e++) u(c, a[e]).moveBy(c.G ? m - f : f, d)
    }
    return a
};
g.U.Wi = function (a, c) {
    if (a instanceof g.Ib) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    g.i.disable();
    d = c.Jg();
    try {
        var e = g.U.Bs(a, c), f = p(e, !1);
        if (c.ba) {
            ka(e, !0);
            for (var h = f.length - 1; 0 <= h; h--) f[h].Ie();
            for (h = f.length - 1; 0 <= h; h--) f[h].za(!1);
            setTimeout(function () {
                e.v && ka(e, !1)
            }, 1);
            la(e);
            ma(c)
        } else for (h = f.length - 1; 0 <= h; h--) f[h].dj()
    } finally {
        g.i.enable()
    }
    if (g.i.isEnabled()) {
        a = g.O.Ux(c, d);
        for (h = 0; h < a.length; h++) g.i.Ka(new g.i.xe(a[h]));
        g.i.Ka(new g.i.$n(e))
    }
    return e
};
g.U.mE = function (a, c) {
    for (var d = 0, e; e = a.childNodes[d]; d++) if (e.nodeType == g.g.o.Node.ELEMENT_NODE) {
        var f = e.getAttribute("type"), h = e.getAttribute("id");
        c.Ld(e.textContent, f, h)
    }
};
g.U.Bs = function (a, c) {
    var d = null, e = a.getAttribute("type");
    if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
    var f = a.getAttribute("id");
    d = c.Rh(e, f);
    var h = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++) if (k.nodeType != g.g.o.Node.TEXT_NODE) {
        for (var l = h = null, m = 0, n; n = k.childNodes[m]; m++) n.nodeType == g.g.o.Node.ELEMENT_NODE && ("block" == n.nodeName.toLowerCase() ? h = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
        !h && l && (h = l);
        m = k.getAttribute("name");
        switch (k.nodeName.toLowerCase()) {
            case "mutation":
                d.zb && (d.zb(k),
                d.Ie && d.Ie());
                break;
            case "comment":
                if (!g.Comment) {
                    console.warn("Missing require for Blockly.Comment, ignoring block comment.");
                    break
                }
                h = k.textContent;
                l = "true" == k.getAttribute("pinned");
                m = parseInt(k.getAttribute("w"), 10);
                k = parseInt(k.getAttribute("h"), 10);
                d.Xf(h);
                d.ze.ou = l;
                isNaN(m) || isNaN(k) || (d.ze.size = new g.g.Te(m, k));
                l && d.GE && !d.$b && setTimeout(function () {
                    d.Df.Vb(!0)
                }, 1);
                break;
            case "data":
                d.data = k.textContent;
                break;
            case "title":
            case "field":
                g.U.lE(d, m, k);
                break;
            case "value":
            case "statement":
                k = B(d,
                    m);
                if (!k) {
                    console.warn("Ignoring non-existent input " + m + " in block " + e);
                    break
                }
                l && (k.connection.lf = l);
                if (h) if (h = g.U.Bs(h, c), h.L) k.connection.connect(h.L); else if (h.Y) k.connection.connect(h.Y); else throw TypeError("Child block does not have output or previous statement.");
                break;
            case "next":
                l && d.X && (d.X.lf = l);
                if (h) {
                    if (!d.X) throw TypeError("Next statement does not exist.");
                    if (d.X.isConnected()) throw TypeError("Next statement is already connected.");
                    h = g.U.Bs(h, c);
                    if (!h.Y) throw TypeError("Next block does not have previous statement.");
                    d.X.connect(h.Y)
                }
                break;
            default:
                console.warn("Ignoring unknown tag: " + k.nodeName)
        }
    }
    (f = a.getAttribute("inline")) && d.$c("true" == f);
    (f = a.getAttribute("disabled")) && d.md("true" != f && "disabled" != f);
    if (f = a.getAttribute("deletable")) d.ps = "true" == f;
    (f = a.getAttribute("movable")) && d.fq("true" == f);
    (f = a.getAttribute("editable")) && d.Du("true" == f);
    (f = a.getAttribute("collapsed")) && d.Wg("true" == f);
    if ("shadow" == a.nodeName.toLowerCase()) {
        a = d.xh(!1);
        for (f = 0; c = a[f]; f++) if (!c.cb) throw TypeError("Shadow block not allowed non-shadow child.");
        if (d.Lg().length) throw TypeError("Shadow blocks cannot have variable references.");
        d.Hu(!0)
    }
    return d
};
g.U.lE = function (a, c, d) {
    var e = y(a, c);
    e ? e.Bm(d) : console.warn("Ignoring non-existent field " + c + " in block " + a.type)
};
g.U.aE = function (a) {
    for (var c = 0, d; d = a.childNodes[c]; c++) if ("next" == d.nodeName.toLowerCase()) {
        a.removeChild(d);
        break
    }
};
g.ve = function (a) {
    var c = !!a.readOnly;
    if (c) var d = null, e = !1, f = !1, h = !1, k = !1, l = !1, m = !1; else {
        d = g.ve.oG(a.toolbox || null);
        e = !(!d || !d.getElementsByTagName("category").length);
        f = a.trashcan;
        void 0 === f && (f = e);
        var n = a.maxTrashcanContents;
        f ? void 0 === n && (n = 32) : n = 0;
        h = a.collapse;
        void 0 === h && (h = e);
        k = a.comments;
        void 0 === k && (k = e);
        l = a.disable;
        void 0 === l && (l = e);
        m = a.sounds;
        void 0 === m && (m = !0)
    }
    var r = !!a.rtl, t = a.horizontalLayout;
    void 0 === t && (t = !1);
    var w = a.toolboxPosition;
    w = "end" === w ? !1 : !0;
    w = t ? w ? g.vg : g.kk : w == r ? g.ug : g.Xd;
    var E =
        a.css;
    void 0 === E && (E = !0);
    var S = "https://blockly-demo.appspot.com/static/media/";
    a.media ? S = a.media : a.path && (S = a.path + "media/");
    var Z = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex, za = a.theme, Ge = a.keyMap || g.qb.ob.MD(),
        He = a.renderer || "geras";
    this.G = r;
    this.Le = Z;
    this.collapse = h;
    this.gm = k;
    this.disable = l;
    this.readOnly = c;
    this.Ot = a.maxBlocks || Infinity;
    this.Pt = a.maxInstances;
    this.Yh = S;
    this.wy = e;
    this.Cc = g.ve.nG(a, e);
    this.Ay = f;
    this.Lp = n;
    this.iF = m;
    this.gF = E;
    this.ge = t;
    this.Sk = d;
    this.sy = g.ve.mG(a);
    this.Hb = g.ve.pG(a);
    this.Ia = w;
    this.UG = za;
    this.ob = Ge;
    this.Tg = He
};
g.ve.prototype.Nb = null;
g.ve.prototype.di = null;
g.ve.prototype.Vc = null;
g.ve.nG = function (a, c) {
    var d = a.move || {}, e = {};
    e.scrollbars = void 0 === d.scrollbars && void 0 === a.scrollbars ? c : !!d.scrollbars || !!a.scrollbars;
    e.Sj = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
    e.vh = e.scrollbars ? void 0 === d.drag ? !0 : !!d.drag : !1;
    return e
};
g.ve.pG = function (a) {
    a = a.zoom || {};
    var c = {};
    c.controls = void 0 === a.controls ? !1 : !!a.controls;
    c.Sj = void 0 === a.wheel ? !1 : !!a.wheel;
    c.OG = void 0 === a.startScale ? 1 : Number(a.startScale);
    c.Ym = void 0 === a.maxScale ? 3 : Number(a.maxScale);
    c.$m = void 0 === a.minScale ? .3 : Number(a.minScale);
    c.zG = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
    return c
};
g.ve.mG = function (a) {
    a = a.grid || {};
    var c = {};
    c.spacing = Number(a.spacing) || 0;
    c.Lb = a.colour || "#888";
    c.length = Number(a.length) || 1;
    c.cM = 0 < c.spacing && !!a.snap;
    return c
};
g.ve.oG = function (a) {
    if (a) {
        if ("string" != typeof a && (g.g.userAgent.lg && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = g.U.Lj(a), "xml" != a.nodeName.toLowerCase())) throw TypeError("Toolbox should be an <xml> document.");
    } else a = null;
    return a
};
g.Touch = {};
g.Touch.rw = "ontouchstart" in g.g.global || !!(g.g.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!g.g.global.navigator || !g.g.global.navigator.maxTouchPoints && !g.g.global.navigator.msMaxTouchPoints);
g.Touch.Kn = null;
g.Touch.yf = {};
g.g.global.PointerEvent ? g.Touch.yf = {
    mousedown: ["pointerdown"],
    mouseenter: ["pointerenter"],
    mouseleave: ["pointerleave"],
    mousemove: ["pointermove"],
    mouseout: ["pointerout"],
    mouseover: ["pointerover"],
    mouseup: ["pointerup", "pointercancel"],
    touchend: ["pointerup"],
    touchcancel: ["pointercancel"]
} : g.Touch.rw && (g.Touch.yf = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});
g.Jp = 0;
g.AF = function (a, c) {
    g.Ph();
    a.changedTouches && 1 != a.changedTouches.length || (g.Jp = setTimeout(function () {
        a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        c && na(c, a)
    }, g.SB))
};
g.Ph = function () {
    g.Jp && (clearTimeout(g.Jp), g.Jp = 0)
};
g.Touch.dm = function () {
    g.Touch.Kn = null
};
g.Touch.Ku = function (a) {
    return !g.Touch.tF(a) || g.Touch.yD(a)
};
g.Touch.tp = function (a) {
    return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 !== a.changedTouches[0].identifier && null !== a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse"
};
g.Touch.yD = function (a) {
    var c = g.Touch.tp(a);
    return void 0 !== g.Touch.Kn && null !== g.Touch.Kn ? g.Touch.Kn == c : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (g.Touch.Kn = c, !0) : !1
};
g.Touch.CG = function (a) {
    if (g.g.fb.startsWith(a.type, "touch")) {
        var c = a.changedTouches[0];
        a.clientX = c.clientX;
        a.clientY = c.clientY
    }
};
g.Touch.tF = function (a) {
    return g.g.fb.startsWith(a.type, "touch") || g.g.fb.startsWith(a.type, "mouse") || g.g.fb.startsWith(a.type, "pointer")
};
g.Touch.Ip = function (a) {
    return g.g.fb.startsWith(a.type, "touch") || g.g.fb.startsWith(a.type, "pointer")
};
g.Touch.JG = function (a) {
    var c = [];
    if (a.changedTouches) for (var d = 0; d < a.changedTouches.length; d++) c[d] = {
        type: a.type,
        changedTouches: [a.changedTouches[d]],
        target: a.target,
        stopPropagation: function () {
            a.stopPropagation()
        },
        preventDefault: function () {
            a.preventDefault()
        }
    }; else c.push(a);
    return c
};
g.jk = function (a) {
    this.s = a;
    this.fe = new g.Ua(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.pe = new g.Ua(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.km = g.g.o.M("rect", {height: g.Ua.Zc, width: g.Ua.Zc, "class": "blocklyScrollbarBackground"}, null);
    g.g.o.fj(this.km, a.Yg)
};
g.jk.prototype.Fb = null;
g.jk.prototype.I = function () {
    g.g.o.removeNode(this.km);
    this.Fb = this.s = this.km = null;
    this.fe.I();
    this.fe = null;
    this.pe.I();
    this.pe = null
};
g.jk.prototype.resize = function () {
    var a = this.s.Vc();
    if (a) {
        var c = !1, d = !1;
        this.Fb && this.Fb.Bb == a.Bb && this.Fb.Pb == a.Pb && this.Fb.fd == a.fd && this.Fb.Qc == a.Qc ? (this.Fb && this.Fb.Ff == a.Ff && this.Fb.dc == a.dc && this.Fb.Sc == a.Sc || (c = !0), this.Fb && this.Fb.ae == a.ae && this.Fb.lc == a.lc && this.Fb.xc == a.xc || (d = !0)) : d = c = !0;
        c && this.fe.resize(a);
        d && this.pe.resize(a);
        this.Fb && this.Fb.Bb == a.Bb && this.Fb.Qc == a.Qc || this.km.setAttribute("x", this.pe.Sf.x);
        this.Fb && this.Fb.Pb == a.Pb && this.Fb.fd == a.fd || this.km.setAttribute("y", this.fe.Sf.y);
        this.Fb = a
    }
};
g.jk.prototype.set = function (a, c) {
    var d = {};
    a *= this.fe.Dc;
    c *= this.pe.Dc;
    var e = this.pe.Ne, f = a / this.fe.Ne;
    d.x = isNaN(f) ? 0 : f;
    e = c / e;
    d.y = isNaN(e) ? 0 : e;
    this.s.di(d);
    oa(this.fe, a);
    oa(this.pe, c)
};
g.Ua = function (a, c, d, e) {
    this.s = a;
    this.Vk = d || !1;
    this.cj = c;
    this.Fb = null;
    this.lm(e);
    this.Sf = new g.g.J(0, 0);
    a = g.Ua.Zc;
    c ? (this.Ic.setAttribute("height", a), this.Qf.setAttribute("height", a), this.Rd.setAttribute("height", a - 5), this.Rd.setAttribute("y", 2.5), this.Um = "width", this.Bz = "x") : (this.Ic.setAttribute("width", a), this.Qf.setAttribute("width", a), this.Rd.setAttribute("width", a - 5), this.Rd.setAttribute("x", 2.5), this.Um = "height", this.Bz = "y");
    this.uz = g.ma(this.Ic, "mousedown", this, this.eG);
    this.vz = g.ma(this.Rd,
        "mousedown", this, this.fG)
};
b = g.Ua.prototype;
b.iu = new g.g.J(0, 0);
b.Zz = 0;
b.Ne = 0;
b.Bh = 0;
b.Jm = 0;
b.Nh = !0;
b.Oi = !0;
g.Ua.Zc = 15;
g.Touch.rw && (g.Ua.Zc = 25);
g.Ua.DF = function (a, c) {
    return a && c && a.Bb == c.Bb && a.Pb == c.Pb && a.dc == c.dc && a.lc == c.lc && a.fd == c.fd && a.Qc == c.Qc && a.Ff == c.Ff && a.ae == c.ae && a.Sc == c.Sc && a.xc == c.xc ? !0 : !1
};
g.Ua.prototype.I = function () {
    pa();
    g.$a(this.uz);
    this.uz = null;
    g.$a(this.vz);
    this.vz = null;
    g.g.o.removeNode(this.Qf);
    this.Ic = this.N = this.Qf = null;
    this.Rd && (this.s.jc.unsubscribe(this.Rd), this.Rd = null);
    this.s = null
};

function oa(a, c) {
    a.Jm = c;
    a.Rd.setAttribute(a.Bz, a.Jm)
}

function qa(a, c) {
    a.Ne = c;
    a.Qf.setAttribute(a.Um, a.Ne);
    a.Ic.setAttribute(a.Um, a.Ne)
}

g.jk.prototype.Aj = function (a) {
    this.fe.Aj(a);
    this.pe.Aj(a)
};

function ra(a, c, d) {
    a.Sf.x = c;
    a.Sf.y = d;
    g.g.o.un(a.Qf, "translate(" + (a.Sf.x + a.iu.x) + "px," + (a.Sf.y + a.iu.y) + "px)")
}

b = g.Ua.prototype;
b.resize = function (a) {
    if (!a && (a = this.s.Vc(), !a)) return;
    g.Ua.DF(a, this.Fb) || (this.Fb = a, this.cj ? sa(this, a) : ta(this, a), ua(this))
};

function sa(a, c) {
    var d = c.Bb - 1;
    a.Vk && (d -= g.Ua.Zc);
    qa(a, Math.max(0, d));
    d = c.Qc + .5;
    a.Vk && a.s.G && (d += g.Ua.Zc);
    ra(a, d, c.fd + c.Pb - g.Ua.Zc - .5);
    va(a, c)
}

function va(a, c) {
    a.Vk || a.Vb(a.Ne < c.Ff);
    a.Dc = a.Ne / c.Ff;
    if (-Infinity == a.Dc || Infinity == a.Dc || isNaN(a.Dc)) a.Dc = 0;
    a.Bh = Math.max(0, c.Bb * a.Dc);
    a.Rd.setAttribute(a.Um, a.Bh);
    oa(a, wa(a, (c.dc - c.Sc) * a.Dc))
}

function ta(a, c) {
    var d = c.Pb - 1;
    a.Vk && (d -= g.Ua.Zc);
    qa(a, Math.max(0, d));
    d = c.Qc + .5;
    a.s.G || (d += c.Bb - g.Ua.Zc - 1);
    ra(a, d, c.fd + .5);
    xa(a, c)
}

function xa(a, c) {
    a.Vk || a.Vb(a.Ne < c.ae);
    a.Dc = a.Ne / c.ae;
    if (-Infinity == a.Dc || Infinity == a.Dc || isNaN(a.Dc)) a.Dc = 0;
    a.Bh = Math.max(0, c.Pb * a.Dc);
    a.Rd.setAttribute(a.Um, a.Bh);
    oa(a, wa(a, (c.lc - c.xc) * a.Dc))
}

b.lm = function (a) {
    var c = "blocklyScrollbar" + (this.cj ? "Horizontal" : "Vertical");
    a && (c += " " + a);
    this.Qf = g.g.o.M("svg", {"class": c}, null);
    this.N = g.g.o.M("g", {}, this.Qf);
    this.Ic = g.g.o.M("rect", {"class": "blocklyScrollbarBackground"}, this.N);
    a = Math.floor((g.Ua.Zc - 5) / 2);
    this.Rd = g.g.o.M("rect", {"class": "blocklyScrollbarHandle", rx: a, ry: a}, this.N);
    this.s.jc.subscribe(this.Rd, "scrollbar", "fill");
    this.s.jc.subscribe(this.Rd, "scrollbarOpacity", "fill-opacity");
    g.g.o.fj(this.Qf, x(this.s))
};
b.isVisible = function () {
    return this.Nh
};
b.Aj = function (a) {
    var c = a != this.Oi;
    this.Oi = a;
    c && this.On()
};
b.Vb = function (a) {
    var c = a != this.isVisible();
    if (this.Vk) throw Error("Unable to toggle visibility of paired scrollbars.");
    this.Nh = a;
    c && this.On()
};
b.On = function () {
    this.Oi && this.isVisible() ? this.Qf.setAttribute("display", "block") : this.Qf.setAttribute("display", "none")
};
b.eG = function (a) {
    ya(this.s);
    g.Touch.dm();
    pa();
    if (g.g.lj(a)) a.stopPropagation(); else {
        var c = g.g.cn(a, x(this.s), Aa(this.s));
        c = this.cj ? c.x : c.y;
        var d = g.g.Fm(this.Rd);
        d = this.cj ? d.x : d.y;
        var e = this.Jm, f = .95 * this.Bh;
        c <= d ? e -= f : c >= d + this.Bh && (e += f);
        oa(this, wa(this, e));
        ua(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
b.fG = function (a) {
    ya(this.s);
    pa();
    g.g.lj(a) ? a.stopPropagation() : (this.LG = this.Jm, Ba(this.s), this.Zz = this.cj ? a.clientX : a.clientY, g.Ua.Wh = g.ma(document, "mouseup", this, this.kG), g.Ua.Vh = g.ma(document, "mousemove", this, this.gG), a.stopPropagation(), a.preventDefault())
};
b.gG = function (a) {
    oa(this, wa(this, this.LG + ((this.cj ? a.clientX : a.clientY) - this.Zz)));
    ua(this)
};
b.kG = function () {
    Ca(this.s);
    g.Touch.dm();
    pa()
};

function pa() {
    g.oc(!0);
    g.Ua.Wh && (g.$a(g.Ua.Wh), g.Ua.Wh = null);
    g.Ua.Vh && (g.$a(g.Ua.Vh), g.Ua.Vh = null)
}

function wa(a, c) {
    return c = 0 >= c || isNaN(c) || a.Ne < a.Bh ? 0 : Math.min(c, a.Ne - a.Bh)
}

function ua(a) {
    var c = a.Jm / a.Ne;
    isNaN(c) && (c = 0);
    var d = {};
    a.cj ? d.x = c : d.y = c;
    a.s.di(d)
}

b.set = function (a) {
    oa(this, wa(this, a * this.Dc));
    ua(this)
};
g.H = {};
g.H.visible = !1;
g.H.rk = !1;
g.H.MB = 50;
g.H.ez = 0;
g.H.zn = 0;
g.H.Dt = 0;
g.H.Et = 0;
g.H.hb = null;
g.H.Sp = null;
g.H.Wv = 0;
g.H.Xv = 10;
g.H.mC = 10;
g.H.yB = 750;
g.H.Vq = 5;
g.H.Fa = null;
g.H.Oa = function () {
    g.H.Fa || (g.H.Fa = document.createElement("div"), g.H.Fa.className = "blocklyTooltipDiv", document.body.appendChild(g.H.Fa))
};
g.H.qk = function (a) {
    g.gd(a, "mouseover", null, g.H.jG);
    g.gd(a, "mouseout", null, g.H.iG);
    a.addEventListener("mousemove", g.H.hG, !1)
};
g.H.jG = function (a) {
    if (!g.H.rk) {
        for (a = a.currentTarget; "string" != typeof a.pf && "function" != typeof a.pf;) a = a.pf;
        g.H.hb != a && (g.H.Ca(), g.H.Sp = null, g.H.hb = a);
        clearTimeout(g.H.ez)
    }
};
g.H.iG = function () {
    g.H.rk || (g.H.ez = setTimeout(function () {
        g.H.hb = null;
        g.H.Sp = null;
        g.H.Ca()
    }, 1), clearTimeout(g.H.zn))
};
g.H.hG = function (a) {
    if (g.H.hb && g.H.hb.pf && !g.H.rk) if (g.H.visible) {
        var c = g.H.Dt - a.pageX;
        a = g.H.Et - a.pageY;
        Math.sqrt(c * c + a * a) > g.H.mC && g.H.Ca()
    } else g.H.Sp != g.H.hb && (clearTimeout(g.H.zn), g.H.Dt = a.pageX, g.H.Et = a.pageY, g.H.zn = setTimeout(g.H.GG, g.H.yB))
};
g.H.Ca = function () {
    g.H.visible && (g.H.visible = !1, g.H.Fa && (g.H.Fa.style.display = "none"));
    g.H.zn && clearTimeout(g.H.zn)
};
g.H.block = function () {
    g.H.Ca();
    g.H.rk = !0
};
g.H.$G = function () {
    g.H.rk = !1
};
g.H.GG = function () {
    if (!g.H.rk && (g.H.Sp = g.H.hb, g.H.Fa)) {
        g.H.Fa.innerHTML = "";
        for (var a = g.H.hb.pf; "function" == typeof a;) a = a();
        a = g.g.fb.oA(a, g.H.MB);
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("div");
            d.appendChild(document.createTextNode(a[c]));
            g.H.Fa.appendChild(d)
        }
        a = g.H.hb.G;
        c = document.documentElement.clientWidth;
        d = document.documentElement.clientHeight;
        g.H.Fa.style.direction = a ? "rtl" : "ltr";
        g.H.Fa.style.display = "block";
        g.H.visible = !0;
        var e = g.H.Dt;
        e = a ? e - (g.H.Wv + g.H.Fa.offsetWidth) :
            e + g.H.Wv;
        var f = g.H.Et + g.H.Xv;
        f + g.H.Fa.offsetHeight > d + window.scrollY && (f -= g.H.Fa.offsetHeight + 2 * g.H.Xv);
        a ? e = Math.max(g.H.Vq - window.scrollX, e) : e + g.H.Fa.offsetWidth > c + window.scrollX - 2 * g.H.Vq && (e = c - g.H.Fa.offsetWidth - 2 * g.H.Vq);
        g.H.Fa.style.top = f + "px";
        g.H.Fa.style.left = e + "px"
    }
};
g.yw = function (a) {
    this.jm = a;
    this.Oa()
};
b = g.yw.prototype;
b.tb = null;
b.bf = null;
b.jm = null;
b.Oa = function () {
    this.tb || (this.tb = g.g.o.M("svg", {
        xmlns: g.g.o.Pl,
        "xmlns:html": g.g.o.wi,
        "xmlns:xlink": g.g.o.Ji,
        version: "1.1",
        "class": "blocklyWsDragSurface blocklyOverflowVisible"
    }, null), this.jm.appendChild(this.tb))
};
b.Nj = function (a, c) {
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.tb.style.display = "block";
    g.g.o.un(this.tb, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.at = function () {
    return g.g.Fe(this.tb)
};
b.Qo = function (a) {
    if (!a) throw Error("Couldn't clear and hide the drag surface: missing new surface.");
    var c = this.tb.childNodes[0], d = this.tb.childNodes[1];
    if (!(c && d && g.g.o.xy(c, "blocklyBlockCanvas") && g.g.o.xy(d, "blocklyBubbleCanvas"))) throw Error("Couldn't clear and hide the drag surface. A node was missing.");
    null != this.Zk ? g.g.o.fj(c, this.Zk) : a.insertBefore(c, a.firstChild);
    g.g.o.fj(d, c);
    this.tb.style.display = "none";
    if (this.tb.childNodes.length) throw Error("Drag surface was not cleared.");
    g.g.o.un(this.tb,
        "");
    this.Zk = null
};
g.K = Object.create(null);
g.sa = function (a, c) {
    this.B = a;
    this.type = c
};
g.sa.ao = 0;
g.sa.ew = 1;
g.sa.hw = 2;
g.sa.gw = 3;
g.sa.cw = 4;
g.sa.dw = 5;
g.sa.fw = 6;
b = g.sa.prototype;
b.ca = null;
b.Xe = null;
b.lf = null;
b.Wb = 0;
b.ab = 0;
b.Ye = function (a) {
    var c = this, d = c.B, e = a.B;
    a.isConnected() && a.disconnect();
    if (c.isConnected()) {
        var f = z(c), h = c.lf;
        c.lf = null;
        if (f.cb) h = g.U.oh(f), f.I(), f = null; else if (c.type == g.Wa) {
            if (!f.L) throw Error("Orphan block does not have an output connection.");
            var k = g.sa.Ry(e, f);
            k && (f.L.connect(k), f = null)
        } else if (c.type == g.jb) {
            if (!f.Y) throw Error("Orphan block does not have a previous connection.");
            for (k = e; k.X;) {
                var l = q(k);
                if (l && !l.cb) k = l; else {
                    Da(f.Y, k.X) && (k.X.connect(f.Y), f = null);
                    break
                }
            }
        }
        if (f && (c.disconnect(),
            g.i.Ec)) {
            var m = g.i.Zb();
            setTimeout(function () {
                f.v && !f.getParent() && (g.i.$(m), f.L ? f.L.Op(c) : f.Y && f.Y.Op(c), g.i.$(!1))
            }, g.Yn)
        }
        c.lf = h
    }
    var n;
    g.i.isEnabled() && (n = new g.i.vl(e));
    g.sa.JD(c, a);
    e.cl(d);
    n && (n.zj(), g.i.Ka(n))
};
b.I = function () {
    if (this.isConnected()) {
        this.lf = null;
        var a = z(this);
        a.cb ? a.I() : A(a)
    }
};

function F(a) {
    return a.type == g.Wa || a.type == g.jb
}

b.isConnected = function () {
    return !!this.ca
};

function Ea(a, c) {
    if (!c) return g.sa.gw;
    if (F(a)) var d = a.B, e = c.B; else e = a.B, d = c.B;
    return d && d == e ? g.sa.ew : c.type != g.fk[a.type] ? g.sa.hw : d && e && d.v !== e.v ? g.sa.dw : Da(a, c) ? d.cb && !e.cb ? g.sa.fw : g.sa.ao : g.sa.cw
}

function Fa(a, c) {
    switch (Ea(a, c)) {
        case g.sa.ao:
            break;
        case g.sa.ew:
            throw Error("Attempted to connect a block to itself.");
        case g.sa.dw:
            throw Error("Blocks not on same workspace.");
        case g.sa.hw:
            throw Error("Attempt to connect incompatible types.");
        case g.sa.gw:
            throw Error("Target connection is null.");
        case g.sa.cw:
            throw Error("Connection checks failed. " + (a + " expected " + a.Xe + ", found " + c.Xe));
        case g.sa.fw:
            throw Error("Connecting non-shadow to shadow block.");
        default:
            throw Error("Unknown connection failure: this should never happen!");
    }
}

b.Bp = function (a) {
    if (a.B.Jh() || Ea(this, a) != g.sa.ao) return !1;
    switch (a.type) {
        case g.Se:
            return this.ca || -1 != g.vm.indexOf(a) ? a = !1 : a.ca ? (a = z(a), a = a.Jh() ? !(a.Y && z(a.Y)) : !1) : a = !0, a;
        case g.Re:
            if (a.isConnected() && !z(a).Jh() || this.isConnected()) return !1;
            break;
        case g.Wa:
            if (a.isConnected() && !z(a).kd() && !z(a).cb) return !1;
            break;
        case g.jb:
            if (a.isConnected() && !this.B.X && !z(a).cb && z(a).X) return !1;
            break;
        default:
            throw Error("Unknown connection type in isConnectionAllowed");
    }
    return -1 != g.vm.indexOf(a) ? !1 : !0
};
b.Op = function () {
};
b.connect = function (a) {
    if (this.ca != a) {
        Fa(this, a);
        var c = g.i.Zb();
        c || g.i.$(!0);
        F(this) ? this.Ye(a) : a.Ye(this);
        c || g.i.$(!1)
    }
};
g.sa.JD = function (a, c) {
    if (!a || !c) throw Error("Cannot connect null connections.");
    a.ca = c;
    c.ca = a
};
g.sa.HG = function (a, c) {
    for (var d = !1, e = 0; e < a.R.length; e++) {
        var f = a.R[e].connection;
        if (f && f.type == g.Wa && Da(c.L, f)) {
            if (d) return null;
            d = f
        }
    }
    return d
};
g.sa.Ry = function (a, c) {
    for (var d; d = g.sa.HG(a, c);) if (a = z(d), !a || a.cb) return d;
    return null
};
b = g.sa.prototype;
b.disconnect = function () {
    var a = this.ca;
    if (!a) throw Error("Source connection not connected.");
    if (a.ca != this) throw Error("Target connection not connected to source connection.");
    if (F(this)) {
        var c = this.B;
        var d = a.B;
        a = this
    } else c = a.B, d = this.B;
    var e = g.i.Zb();
    e || g.i.$(!0);
    this.xs(c, d);
    a.yu();
    e || g.i.$(!1)
};
b.xs = function (a, c) {
    var d;
    g.i.isEnabled() && (d = new g.i.vl(c));
    this.ca = this.ca.ca = null;
    c.cl(null);
    d && (d.zj(), g.i.Ka(d))
};
b.yu = function () {
    var a = this.B, c = this.lf;
    if (a.v && c && g.i.Ec) if (a = g.U.Wi(c, a.v), a.L) this.connect(a.L); else if (a.Y) this.connect(a.Y); else throw Error("Child block does not have output or previous statement.");
};

function z(a) {
    return a.isConnected() ? a.ca.B : null
}

function Da(a, c) {
    if (!a.Xe || !c.Xe) return !0;
    for (var d = 0; d < a.Xe.length; d++) if (-1 != c.Xe.indexOf(a.Xe[d])) return !0;
    return !1
}

b.oz = function () {
    this.isConnected() && !Da(this, this.ca) && A(F(this) ? z(this) : this.B)
};
b.vb = function (a) {
    a ? (Array.isArray(a) || (a = [a]), this.Xe = a, this.oz()) : this.Xe = null;
    return this
};
b.hz = function () {
    return []
};
b.Mf = function () {
    for (var a = null, c = this.B, d = c.R, e = 0; e < c.R.length; e++) if (d[e].connection === this) {
        a = d[e];
        break
    }
    return a
};
b.toString = function () {
    var a = this.B;
    if (a) if (a.L == this) var c = "Output Connection of "; else if (a.Y == this) c = "Previous Connection of "; else if (a.X == this) c = "Next Connection of "; else {
        c = null;
        for (var d = 0, e; e = a.R[d]; d++) if (e.connection == this) {
            c = e;
            break
        }
        if (c) c = 'Input "' + c.name + '" connection on '; else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection"
    } else return "Orphan Connection";
    d = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (d += ' (id="' + a.id + '")');
    return c + d
};
g.Z = {};
g.Z.tl = {};
g.Z.register = function (a, c) {
    if ("string" != typeof a || "" == a.trim()) throw Error('Error: Invalid extension name "' + a + '"');
    if (g.Z.tl[a]) throw Error('Error: Extension "' + a + '" is already registered.');
    if ("function" != typeof c) throw Error('Error: Extension "' + a + '" must be a function');
    g.Z.tl[a] = c
};
g.Z.Wp = function (a, c) {
    if (!c || "object" != typeof c) throw Error('Error: Mixin "' + a + '" must be a object');
    g.Z.register(a, function () {
        this.qj(c)
    })
};
g.Z.tu = function (a, c, d, e) {
    var f = 'Error when registering mutator "' + a + '": ';
    g.Z.Nw(f, c.zb, "domToMutation");
    g.Z.Nw(f, c.eb, "mutationToDom");
    var h = g.Z.Pw(c, f);
    if (d && "function" != typeof d) throw Error('Extension "' + a + '" is not a function');
    g.Z.register(a, function () {
        if (h) {
            if (!g.Qb) throw Error(f + "Missing require for Blockly.Mutator");
            this.ei(new g.Qb(e))
        }
        this.qj(c);
        d && d.apply(this)
    })
};
g.Z.unregister = function (a) {
    g.Z.tl[a] ? delete g.Z.tl[a] : console.warn('No extension mapping for name "' + a + '" found to unregister')
};
g.Z.apply = function (a, c, d) {
    var e = g.Z.tl[a];
    if ("function" != typeof e) throw Error('Error: Extension "' + a + '" not found.');
    if (d) g.Z.xD(a, c); else var f = g.Z.Ys(c);
    e.apply(c);
    if (d) g.Z.vD('Error after applying mutator "' + a + '": ', c); else if (!g.Z.NF(f, c)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.');
};
g.Z.Nw = function (a, c, d) {
    if (!c) throw Error(a + 'missing required property "' + d + '"');
    if ("function" != typeof c) throw Error(a + '" required property "' + d + '" must be a function');
};
g.Z.xD = function (a, c) {
    if (g.Z.Ys(c).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + c.id);
};
g.Z.Pw = function (a, c) {
    var d = void 0 !== a.Cg, e = void 0 !== a.Fg;
    if (d && e) {
        if ("function" != typeof a.Cg) throw Error(c + "compose must be a function.");
        if ("function" != typeof a.Fg) throw Error(c + "decompose must be a function.");
        return !0
    }
    if (d || e) throw Error(c + 'Must have both or neither of "compose" and "decompose"');
    return !1
};
g.Z.vD = function (a, c) {
    if ("function" != typeof c.zb) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
    if ("function" != typeof c.eb) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    g.Z.Pw(c, a)
};
g.Z.Ys = function (a) {
    var c = [];
    void 0 !== a.zb && c.push(a.zb);
    void 0 !== a.eb && c.push(a.eb);
    void 0 !== a.Cg && c.push(a.Cg);
    void 0 !== a.Fg && c.push(a.Fg);
    return c
};
g.Z.NF = function (a, c) {
    c = g.Z.Ys(c);
    if (c.length != a.length) return !1;
    for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
    return !0
};
g.Z.No = function (a, c) {
    var d = [];
    "object" == typeof document && g.g.Pz(function () {
        for (var e in c) g.g.Ow(c[e])
    });
    return function () {
        this.type && -1 == d.indexOf(this.type) && (g.Z.wD(this, a, c), d.push(this.type));
        this.Ra(function () {
            var e = G(this, a), f = c[e];
            null == f ? -1 == d.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = g.g.ke(f);
            return f
        }.bind(this))
    }
};
g.Z.wD = function (a, c, d) {
    var e = y(a, c);
    if ("function" != typeof e.pj) {
        e = e.getOptions();
        for (var f = 0; f < e.length; ++f) {
            var h = e[f][1];
            null == d[h] && console.warn("No tooltip mapping for value " + h + " of field " + c + " of block type " + a.type)
        }
    }
};
g.Z.Wr = function (a) {
    "object" == typeof document && g.g.Pz(function () {
        g.g.Ow(a)
    });
    return function () {
        this.Ra(function () {
            var c = y(this, "VAR");
            return g.g.ke(a).replace("%1", c ? c.Tb() : "")
        }.bind(this))
    }
};
g.Z.sE = function () {
    this.XG = this.pf;
    this.Ra(function () {
        var a = this.getParent();
        return a && Ga(a) && a.pf || this.XG
    }.bind(this))
};
g.Z.register("parent_tooltip_when_inline", g.Z.sE);
g.mb = {};
g.mb.ys = 0;
g.mb.ap = null;
g.mb.iE = function (a) {
    var c = a.v, d = a.ya();
    c.mh.play("delete");
    a = Ha(c, d);
    d = d.cloneNode(!0);
    d.YG = a.x;
    d.ZG = a.y;
    d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    x(c).appendChild(d);
    d.Gw = d.getBBox();
    g.mb.Ax(d, c.G, new Date, c.scale)
};
g.mb.Ax = function (a, c, d, e) {
    var f = (new Date - d) / 150;
    1 < f ? g.g.o.removeNode(a) : (a.setAttribute("transform", "translate(" + (a.YG + (c ? -1 : 1) * a.Gw.width * e / 2 * f) + "," + (a.ZG + a.Gw.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(g.mb.Ax, 10, a, c, d, e))
};
g.mb.KD = function (a) {
    var c = a.v, d = c.scale;
    c.mh.play("click");
    if (!(1 > d)) {
        var e = Ha(c, a.ya());
        a.L ? (e.x += (a.G ? 3 : -3) * d, e.y += 13 * d) : a.Y && (e.x += (a.G ? -23 : 23) * d, e.y += 3 * d);
        a = g.g.o.M("circle", {cx: e.x, cy: e.y, r: 0, fill: "none", stroke: "#888", "stroke-width": 10}, x(c));
        g.mb.ax(a, new Date, d)
    }
};
g.mb.ax = function (a, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? g.g.o.removeNode(a) : (a.setAttribute("r", 25 * e * d), a.style.opacity = 1 - e, g.mb.ys = setTimeout(g.mb.ax, 10, a, c, d))
};
g.mb.hE = function (a) {
    a.v.mh.play("disconnect");
    if (!(1 > a.v.scale)) {
        var c = H(a).height;
        c = Math.atan(10 / c) / Math.PI * 180;
        a.G || (c *= -1);
        g.mb.yx(a.ya(), c, new Date)
    }
};
g.mb.yx = function (a, c, d) {
    var e = (new Date - d) / 200;
    1 < e ? a.An = "" : (a.An = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")", g.mb.ap = a, g.mb.ys = setTimeout(g.mb.yx, 10, a, c, d));
    a.setAttribute("transform", a.Ln + a.An)
};
g.mb.zs = function () {
    if (g.mb.ap) {
        clearTimeout(g.mb.ys);
        var a = g.mb.ap;
        a.An = "";
        a.setAttribute("transform", a.Ln);
        g.mb.ap = null
    }
};
g.vo = function (a) {
    this.qf = g.selected = a;
    this.s = a.v;
    this.mj = this.Bt = null;
    this.Bk = Ia(this, this.qf);
    this.Bc = this.Db = null;
    this.dg = !1;
    this.oj = null;
    this.nt = !1;
    this.Jk = null;
    a = this.qf.De(!1);
    var c;
    a:{
        for (c = this.qf.X; c;) {
            var d = z(c);
            if (!d) break a;
            c = d.X
        }
        c = null
    }
    c && c != this.qf.X && (a.push(c), this.Bt = c, this.mj = Ia(this, c.B));
    this.Pr = a
};
g.vo.prototype.I = function () {
    this.s = this.qf = null;
    this.Pr.length = 0;
    this.Bc = this.Db = null;
    g.i.disable();
    try {
        this.Bk && (this.Bk.I(), this.Bk = null), this.mj && (this.mj.I(), this.mj = null)
    } finally {
        g.i.enable()
    }
    this.Jk = null
};
g.vo.prototype.update = function (a, c) {
    var d = this.Db && this.Bc ? g.UA : g.ud;
    for (var e = null, f = null, h = 0; h < this.Pr.length; h++) {
        var k = this.Pr[h], l = k.closest(d, a);
        l.connection && (e = l.connection, f = k, d = l.Up)
    }
    e = (d = {closest: e, local: f, Up: d}, !!d.closest) && c != g.zv;
    if ((this.dg = !!c && !this.qf.getParent() && this.qf.ie() && !e) || Ja(this, d, a)) {
        g.i.disable();
        d.closest ? (a = this.Db != d.closest, c = this.Bc != d.local, this.Db && this.Bc && (a || c || this.dg) && Ka(this)) : Ka(this);
        this.Bc = this.Db = this.oj = null;
        if (!this.dg && (a = d.closest, c = d.local,
            a)) if (a == this.Db || a.B.Jh()) console.log("Trying to connect to an insertion marker"); else {
            this.Db = a;
            this.Bc = c;
            a = this.Db;
            c = this.Bc;
            if (c.type == g.Re) a = a.isConnected() && !g.sa.Ry(this.qf, a.ca.B); else {
                a:{
                    for (d = 0; e = c.B.R[d]; d++) if (e.connection && e.connection.type == g.jb) {
                        d = e.connection;
                        break a
                    }
                    d = null
                }
                a = c == d ? 0 : !this.qf.X && c.type == g.Se && a.isConnected()
            }
            if (a) a = this.Db, c = this.Bc, z(a) ? (this.Jk = z(a), La(z(a), !0)) : c.type == g.Re && (this.Jk = a.B, a.B.kF(a, !0)), this.nt = !0; else {
                d = this.Bc;
                a = this.Db;
                c = this.Bt && d == this.Bt ? this.mj :
                    this.Bk;
                a:{
                    f = d.B;
                    e = c.De(!0);
                    f = f.De(!0);
                    if (e.length != f.length) throw Error("Connection lists did not match in length.");
                    for (h = 0; h < f.length; h++) if (f[h] == d) {
                        d = e[h];
                        break a
                    }
                    d = null
                }
                if (d == this.oj) throw Error("Made it to connectMarker_ even though the marker isn't changing");
                c.za();
                c.ba = !0;
                c.ya().setAttribute("visibility", "visible");
                d.type != g.jb && d.type != g.Wa || c.moveBy(a.Wb - d.Wb, a.ab - d.ab);
                d.connect(a);
                this.oj = d
            }
            this.Db && (a = this.Db, c = a.B.v.Ug.C, c = a.type == g.Wa || a.type == g.Re ? g.g.A.moveBy(0, -5) + g.g.A.ea("v",
                5) + c.Ai.Me + g.g.A.ea("v", 5) : g.g.A.moveBy(-5, 0) + g.g.A.ea("h", 5) + c.ek.Xh + g.g.A.ea("h", 5), d = a.B.Qa(), g.sa.Fy = g.g.o.M("path", {
                "class": "blocklyHighlightedConnectionPath",
                d: c,
                transform: "translate(" + (a.Wb - d.x) + "," + (a.ab - d.y) + ")" + (a.B.G ? " scale(-1 1)" : "")
            }, a.B.ya()))
        }
        g.i.enable()
    }
};

function Ia(a, c) {
    var d = c.type;
    g.i.disable();
    try {
        var e = a.s.Rh(d);
        e.Sz(!0);
        e.Wg(c.isCollapsed());
        if (c.eb) {
            var f = c.eb();
            f && e.zb(f)
        }
        for (a = 0; a < c.R.length; a++) {
            var h = c.R[a], k = e.R[a];
            for (d = 0; d < h.Pa.length; d++) k.Pa[d].setValue(h.Pa[d].getValue())
        }
        e.Ie();
        e.ya().setAttribute("visibility", "hidden")
    } finally {
        g.i.enable()
    }
    return e
}

function Ja(a, c, d) {
    var e = c.local, f = c.closest;
    c = c.Up;
    if (e && f) {
        if (a.Bc && a.Db) {
            if (a.Db == f && a.Bc == e) return !1;
            e = a.Bc.Wb + d.x - a.Db.Wb;
            a = a.Bc.ab + d.y - a.Db.ab;
            a = Math.sqrt(e * e + a * a);
            return !(f && c > a - g.XA)
        }
        if (a.Bc || a.Db) console.error("Only one of localConnection_ and closestConnection_ was set."); else return !0
    } else return !(!a.Bc || !a.Db);
    console.error("Returning true from shouldUpdatePreviews, but it's not clear why.");
    return !0
}

function Ka(a) {
    a.Db && (g.g.o.removeNode(g.sa.Fy), delete g.sa.Fy);
    if (a.nt) {
        var c = a.Db;
        c.type != g.Wa || c.isConnected() ? La(a.Jk, !1) : a.Jk.kF(c, !1);
        a.Jk = null;
        a.nt = !1
    } else if (a.oj) if (a.oj) {
        c = a.oj;
        var d = c.B, e = d.X, f = d.Y, h = d.L;
        h = c.type == g.Wa && !(h && h.ca);
        !(c != e || f && f.ca) || h ? A(z(c), !1) : c.type == g.jb && c != e ? (e = c.ca, A(e.B, !1), f = f ? f.ca : null, A(d, !0), f && f.connect(e)) : A(d, !0);
        if (c.ca) throw Error("markerConnection_ still connected at the end of disconnectInsertionMarker");
        a.oj = null;
        d.ya().setAttribute("visibility", "hidden")
    } else console.log("No insertion marker connection to disconnect")
}

g.vo.prototype.Dk = function () {
    var a = [];
    this.Bk && a.push(this.Bk);
    this.mj && a.push(this.mj);
    return a
};
g.mi = function (a, c) {
    this.Eb = a;
    this.s = c;
    this.Kf = new g.vo(this.Eb);
    this.Ui = null;
    this.dg = !1;
    this.ag = this.Eb.Qa();
    this.fp = g.mi.nF(a)
};
g.mi.prototype.I = function () {
    this.qc = this.s = this.Eb = null;
    this.fp.length = 0;
    this.Kf && (this.Kf.I(), this.Kf = null)
};
g.mi.nF = function (a) {
    var c = [];
    a = p(a, !1);
    for (var d = 0, e; e = a[d]; d++) {
        e = Ma(e);
        for (var f = 0; f < e.length; f++) c.push({location: e[f].Kk, icon: e[f]})
    }
    return c
};

function Na(a, c, d) {
    d = a.Wk(d);
    var e = g.g.J.sum(a.ag, d);
    a.Eb.St(e);
    for (e = 0; e < a.fp.length; e++) {
        var f = a.fp[e];
        Oa(f.icon, g.g.J.sum(f.location, d))
    }
    a.Ui = Pa(a.s, c);
    a.Kf.update(d, a.Ui);
    a.dg = a.Kf.dg;
    c = a.s.ad;
    a.dg ? (Qa(a.Eb, !0), a.Ui == g.Iq && c && Ra(c, !0)) : (Qa(a.Eb, !1), c && Ra(c, !1))
}

function Sa(a, c, d) {
    Na(a, c, d);
    a.fp = [];
    g.g.o.En();
    g.mb.zs();
    c = a.Wk(d);
    d = g.g.J.sum(a.ag, c);
    var e = a.Eb;
    e.Tn && (e.translate(d.x, d.y), e.v.Zd.Qo(e.v.pb));
    d = a.s.ad;
    a.dg ? (d && setTimeout(d.close.bind(d), 100), a.zm(), a.Eb.I(!1, !0)) : d && d.close();
    a.dg || (Ta(a.Eb, c.x, c.y), a.Eb.Bj(!1), a.zm(), a.Kf.Db ? (c = a.Kf, c.Db && (g.i.disable(), Ka(c), g.i.enable(), c.Bc.connect(c.Db), c.qf.ba && (g.mb.KD((F(c.Bc) ? c.Db : c.Bc).B), Ua(I(c.qf))))) : a.Eb.za(), Va(a.Eb));
    a.s.Hc(!0);
    (c = a.s.ra) && g.g.o.Fc(c.vc, a.Eb.ie() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    g.i.$(!1)
}

g.mi.prototype.zm = function () {
    var a = new g.i.vl(this.Eb);
    a.Yt = this.ag;
    a.zj();
    g.i.Ka(a)
};
g.mi.prototype.Wk = function (a) {
    a = new g.g.J(a.x / this.s.scale, a.y / this.s.scale);
    this.s.kj && a.scale(1 / this.s.options.Nb.scale);
    return a
};
g.mi.prototype.Dk = function () {
    return this.Kf && this.Kf.Dk ? this.Kf.Dk() : []
};
g.mo = function () {
    this.zc = this.Sb = null
};

function J(a, c) {
    a.Sb = c;
    a.zc && a.zc.draw(a.Sb)
}

b = g.mo.prototype;
b.Ca = function () {
    this.zc && this.zc.Ca()
};
b.next = function () {
    var a = this.Sb;
    if (!a) return null;
    for (a = a.next(); a && a.next() && (a.Mb() == g.F.types.ue || a.Mb() == g.F.types.Vd);) a = a.next();
    a && J(this, a);
    return a
};
b.Km = function () {
    var a = this.Sb;
    if (!a) return null;
    if (a.Mb() == g.F.types.we || a.Mb() == g.F.types.hk) a = a.next();
    (a = a.Km()) && J(this, a);
    return a
};
b.Tf = function () {
    var a = this.Sb;
    if (!a) return null;
    for (a = a.Tf(); a && a.Tf() && (a.Mb() == g.F.types.ue || a.Mb() == g.F.types.Vd);) a = a.Tf();
    a && J(this, a);
    return a
};
b.gn = function () {
    var a = this.Sb;
    if (!a) return null;
    (a = a.gn()) && a.Mb() == g.F.types.Vd && (a = a.Tf() || a);
    a && J(this, a);
    return a
};
g.eh = function () {
    g.eh.w.constructor.call(this)
};
g.g.object.W(g.eh, g.mo);
g.eh.prototype.next = function () {
    return null
};
g.eh.prototype.Km = function () {
    return null
};
g.eh.prototype.Tf = function () {
    return null
};
g.eh.prototype.gn = function () {
    return null
};
g.JC = function () {
    var a = g.Fi.Xj.sD;
    this.nD = g.Fi.Xj.XD;
    this.tD = a;
    this.HD = Object.create(null)
};

function Wa(a, c) {
    return (c = a.HD[c]) && "string" == typeof propertyValue && Wa(a, c) ? Wa(a, c) : c ? String(c) : null
};g.Rl = function (a) {
    this.lq = a;
    this.jq = [];
    this.rh = Object.create(null)
};
g.Rl.prototype.sp = function () {
    return this.lq
};
g.Rl.prototype.subscribe = function (a, c, d) {
    this.rh[c] || (this.rh[c] = []);
    this.rh[c].push({element: a, propertyName: d});
    a.style[d] = this.lq && Wa(this.lq, c) || ""
};
g.Rl.prototype.unsubscribe = function (a) {
    if (a) for (var c = Object.keys(this.rh), d = 0, e; e = c[d]; d++) {
        for (var f = this.rh[e], h = f.length - 1; 0 <= h; h--) f[h].element === a && f.splice(h, 1);
        this.rh[e].length || delete this.rh[e]
    }
};
g.Rl.prototype.I = function () {
    this.rh = this.jq = this.lq = this.ld = null
};
g.Fi = {};
g.Fi.Xj = {};
g.Fi.Xj.XD = {
    colour_blocks: {colourPrimary: "20"},
    list_blocks: {colourPrimary: "260"},
    logic_blocks: {colourPrimary: "210"},
    loop_blocks: {colourPrimary: "120"},
    math_blocks: {colourPrimary: "230"},
    procedure_blocks: {colourPrimary: "290"},
    text_blocks: {colourPrimary: "160"},
    variable_blocks: {colourPrimary: "330"},
    variable_dynamic_blocks: {colourPrimary: "310"},
    hat_blocks: {colourPrimary: "330", hat: "cap"}
};
g.Fi.Xj.sD = {
    colour_category: {colour: "20"},
    list_category: {colour: "260"},
    logic_category: {colour: "210"},
    loop_category: {colour: "120"},
    math_category: {colour: "230"},
    procedure_category: {colour: "290"},
    text_category: {colour: "160"},
    variable_category: {colour: "330"},
    variable_dynamic_category: {colour: "310"}
};
g.Fi.Xj = new g.JC;
g.Dr = function (a) {
    this.Sa = Object.create(null);
    this.v = a
};
b = g.Dr.prototype;
b.clear = function () {
    this.Sa = Object.create(null)
};
b.Zp = function (a, c) {
    var d = this.Ac(c, a.type), e = K(this.v, !1);
    g.i.$(!0);
    try {
        if (d && d.ua() != a.ua()) {
            var f = a.type;
            c != d.name && Xa(d, c, e);
            for (c = 0; c < e.length; c++) e[c].Yp(a.ua(), d.ua());
            g.i.Ka(new g.i.Ue(a));
            this.Sa[f].splice(this.Hm(f).indexOf(a), 1)
        } else Xa(a, c, e)
    } finally {
        g.i.$(!1)
    }
};
b.bi = function (a, c) {
    var d = this.ef(a);
    if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.Zp(d, c)
};

function Xa(a, c, d) {
    g.i.Ka(new g.i.zf(a, c));
    a.name = c;
    for (c = 0; c < d.length; c++) d[c].pq(a)
}

b.Ld = function (a, c, d) {
    var e = this.Ac(a, c);
    if (e) {
        if (d && e.ua() != d) throw Error('Variable "' + a + '" is already in use and its id is "' + e.ua() + '" which conflicts with the passed in id, "' + d + '".');
        return e
    }
    if (d && this.ef(d)) throw Error('Variable id, "' + d + '", is already in use.');
    e = d || g.g.Ig();
    c = c || "";
    e = new g.Tl(this.v, a, c, e);
    a = this.Sa[c] || [];
    a.push(e);
    delete this.Sa[c];
    this.Sa[c] = a;
    return e
};
b.If = function (a) {
    var c = this.ef(a);
    if (c) {
        var d = c.name, e = this.ft(a);
        a = 0;
        for (var f; f = e[a]; a++) if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) {
            a = G(f, "NAME");
            d = g.h.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace("%2", a);
            g.alert(d);
            return
        }
        var h = this;
        1 < e.length ? (d = g.h.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", d), g.confirm(d, function (k) {
            k && h.Zo(c, e)
        })) : h.Zo(c, e)
    } else console.warn("Can't delete non-existent variable: " + a)
};
b.Zo = function (a, c) {
    var d = g.i.Zb();
    d || g.i.$(!0);
    try {
        for (var e = 0; e < c.length; e++) c[e].I(!0, !1);
        var f = this.Sa[a.type];
        c = 0;
        for (var h; h = f[c]; c++) if (h.ua() == a.ua()) {
            f.splice(c, 1);
            g.i.Ka(new g.i.Ue(a));
            break
        }
    } finally {
        d || g.i.$(!1)
    }
};
b.Ac = function (a, c) {
    if (c = this.Sa[c || ""]) for (var d = 0, e; e = c[d]; d++) if (g.Wd.Ce(e.name, a)) return e;
    return null
};
b.ef = function (a) {
    for (var c = Object.keys(this.Sa), d = 0; d < c.length; d++) for (var e = c[d], f = 0, h; h = this.Sa[e][f]; f++) if (h.ua() == a) return h;
    return null
};
b.Hm = function (a) {
    return (a = this.Sa[a || ""]) ? a.slice() : []
};
b.et = function (a) {
    var c = [];
    a && a.Zh && (c = Object.keys(a.Zh.Sa));
    a = Object.keys(this.Sa).concat(c);
    c = !1;
    for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
    c || a.push("");
    return a
};
b.Jg = function () {
    var a = [], c;
    for (c in this.Sa) a = a.concat(this.Sa[c]);
    return a
};
b.ft = function (a) {
    for (var c = [], d = K(this.v, !1), e = 0; e < d.length; e++) {
        var f = d[e].Lg();
        if (f) for (var h = 0; h < f.length; h++) f[h].ua() == a && c.push(d[e])
    }
    return c
};
g.Ib = function (a) {
    this.id = g.g.Ig();
    g.Ib.Vl[this.id] = this;
    this.options = a || {};
    this.G = !!this.options.G;
    this.ge = !!this.options.ge;
    this.Ia = this.options.Ia;
    this.ml = [];
    this.mq = [];
    this.Uo = Object.create(null);
    this.Ad = [];
    this.Oj = [];
    this.mn = [];
    this.Rr = Object.create(null);
    this.Zg = Object.create(null);
    this.Sa = new g.Dr(this);
    this.Zh = null;
    this.Xa = new g.mo;
    this.ac = new g.eh;
    this.jc = this.options.Nb ? this.options.Nb.jc : new g.Rl(this.options.UG || g.Fi.Xj);
    this.jc.jq.push(this)
};
b = g.Ib.prototype;
b.ba = !1;
b.vt = !1;
b.Rv = 1024;
b.Wo = null;
b.Cu = function (a) {
    this.Xa = a
};
b.Tz = function (a) {
    this.ac = a
};
b.sp = function () {
    return this.jc.sp()
};
b.I = function () {
    this.Ad.length = 0;
    this.clear();
    delete g.Ib.Vl[this.id];
    if (this.jc) {
        var a = this.jc, c = a.jq.indexOf(this);
        if (0 > c) throw Error("Cannot unsubscribe a workspace that hasn't been subscribed.");
        a.jq.splice(c, 1);
        this.jc.unsubscribe(this.Ic);
        this.options.Nb || (this.jc.I(), this.jc = null)
    }
};
g.Ib.jw = 3;
b = g.Ib.prototype;
b.$f = function (a, c) {
    a = a.Qa();
    c = c.Qa();
    return a.y + g.Ib.prototype.$f.offset * a.x - (c.y + g.Ib.prototype.$f.offset * c.x)
};

function Ya(a, c) {
    if (!g.g.Kr(a.ml, c)) throw Error("Block not present in workspace's list of top-most blocks.");
}

function D(a, c) {
    var d = [].concat(a.ml);
    c && 1 < d.length && (a.$f.offset = Math.sin(g.g.Ha.nd(g.Ib.jw)), a.G && (a.$f.offset *= -1), d.sort(a.$f));
    return d
}

function ia(a, c) {
    var d = [].concat(a.mq);
    c && 1 < d.length && (a.$f.offset = Math.sin(g.g.Ha.nd(g.Ib.jw)), a.G && (a.$f.offset *= -1), d.sort(a.$f));
    return d
}

function K(a, c) {
    if (c) {
        a = D(a, !0);
        c = [];
        for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0))
    } else for (c = D(a, !1), d = 0; d < c.length; d++) c.push.apply(c, c[d].xh(!1));
    return c.filter(function (e) {
        return !e.Jh()
    })
}

b.clear = function () {
    this.vt = !0;
    try {
        var a = g.i.Zb();
        for (a || g.i.$(!0); this.ml.length;) this.ml[0].I();
        for (; this.mq.length;) this.mq[this.mq.length - 1].I();
        a || g.i.$(!1);
        this.Sa.clear();
        this.Zh && this.Zh.clear()
    } finally {
        this.vt = !1
    }
};
b.bi = function (a, c) {
    this.Sa.bi(a, c)
};
b.Ld = function (a, c, d) {
    return this.Sa.Ld(a, c, d)
};
b.ft = function (a) {
    return this.Sa.ft(a)
};
b.If = function (a) {
    this.Sa.If(a)
};
b.Zo = function (a, c) {
    this.Sa.Zo(a, c)
};
b.Ac = function (a, c) {
    return this.Sa.Ac(a, c)
};
b.ef = function (a) {
    return this.Sa.ef(a)
};
b.Hm = function (a) {
    return this.Sa.Hm(a)
};
b.et = function () {
    return this.Sa.et(this)
};
b.Jg = function () {
    return this.Sa.Jg()
};
b.Nf = function () {
    return 0
};
b.Rh = function (a, c) {
    return new g.Zn(this, a, c)
};

function Za(a) {
    return isNaN(a.options.Ot) ? Infinity : a.options.Ot - K(a).length
}

function $a(a, c) {
    if (!ab(a)) return !0;
    var d = 0, e;
    for (e in c) {
        var f = c[e];
        if (a.options.Pt) {
            var h = a.options.Pt[e] || Infinity;
            var k = a.Zg[e] ? a.Zg[e].slice(0) : [];
            h -= k.length
        } else h = Infinity;
        if (f > h) return !1;
        d += c[e]
    }
    return d > Za(a) ? !1 : !0
}

function ab(a) {
    return Infinity != a.options.Ot || !!a.options.Pt
}

b.Wu = function (a) {
    var c = a ? this.mn : this.Oj, d = a ? this.Oj : this.mn, e = c.pop();
    if (e) {
        for (var f = [e]; c.length && e.group && e.group == c[c.length - 1].group;) f.push(c.pop());
        for (c = 0; e = f[c]; c++) d.push(e);
        f = g.i.filter(f, a);
        g.i.Ec = !1;
        try {
            for (c = 0; e = f[c]; c++) e.run(a)
        } finally {
            g.i.Ec = !0
        }
    }
};

function bb(a, c) {
    a.Ad.push(c)
}

function cb(a, c) {
    g.g.Kr(a.Ad, c)
}

function u(a, c) {
    return a.Rr[c] || null
}

g.Ib.Vl = Object.create(null);
g.Ib.Ws = function (a) {
    return g.Ib.Vl[a] || null
};
g.Ib.getAll = function () {
    var a = [], c;
    for (c in g.Ib.Vl) a.push(g.Ib.Vl[c]);
    return a
};
g.oa = function (a, c, d, e, f, h) {
    this.s = a;
    this.Ze = c;
    this.Vz = d;
    d = g.oa.CA;
    this.s.G && (d = -d);
    this.gD = g.g.Ha.nd(d);
    a.Yg.appendChild(this.lm(c, !(!f || !h)));
    this.ec = e;
    this.uu && db(this);
    f && h || (c = this.Ze.getBBox(), f = c.width + 2 * g.oa.cd, h = c.height + 2 * g.oa.cd);
    this.tn(f, h);
    db(this);
    eb(this);
    this.uu = !0;
    a.options.readOnly || (g.ma(this.am, "mousedown", this, this.oD), this.Wf && g.ma(this.Wf, "mousedown", this, this.xG))
};
g.oa.cd = 6;
g.oa.DA = 5;
g.oa.CA = 20;
g.oa.hv = 4;
g.oa.AA = 8;
g.oa.Wh = null;
g.oa.Vh = null;
g.oa.prototype.wu = null;
g.oa.Vu = function () {
    g.oa.Wh && (g.$a(g.oa.Wh), g.oa.Wh = null);
    g.oa.Vh && (g.$a(g.oa.Vh), g.oa.Vh = null)
};
g.oa.pD = function () {
    g.Touch.dm();
    g.oa.Vu()
};
b = g.oa.prototype;
b.uu = !1;
b.ec = null;
b.Sg = 0;
b.ai = 0;
b.rb = 0;
b.Wc = 0;
b.Or = !0;
b.lm = function (a, c) {
    this.$d = g.g.o.M("g", {}, null);
    var d = {filter: "url(#" + this.s.options.Hx + ")"};
    g.g.userAgent.JB && (d = {});
    d = g.g.o.M("g", d, this.$d);
    this.Vr = g.g.o.M("path", {}, d);
    this.am = g.g.o.M("rect", {"class": "blocklyDraggable", x: 0, y: 0, rx: g.oa.cd, ry: g.oa.cd}, d);
    c ? (this.Wf = g.g.o.M("g", {"class": this.s.G ? "blocklyResizeSW" : "blocklyResizeSE"}, this.$d), c = 2 * g.oa.cd, g.g.o.M("polygon", {points: "0,x x,x x,0".replace(/x/g, c.toString())}, this.Wf), g.g.o.M("line", {
        "class": "blocklyResizeLine", x1: c / 3, y1: c - 1, x2: c - 1, y2: c /
            3
    }, this.Wf), g.g.o.M("line", {
        "class": "blocklyResizeLine",
        x1: 2 * c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: 2 * c / 3
    }, this.Wf)) : this.Wf = null;
    this.$d.appendChild(a);
    return this.$d
};
b.ya = function () {
    return this.$d
};

function fb(a, c) {
    a.$d.dataset && (a.$d.dataset.blockId = c)
}

b.oD = function (a) {
    var c = this.s.zh(a);
    if (c) {
        if (c.bj) throw Error("Tried to call gesture.handleBubbleStart, but the gesture had already been started.");
        c.ne || (c.ne = this);
        c.kf = a
    }
};
b.xn = function () {
};
b.ie = function () {
    return !1
};
b.xG = function (a) {
    gb(this);
    g.oa.Vu();
    g.g.lj(a) || (this.s.Nu(a, new g.g.J(this.s.G ? -this.rb : this.rb, this.Wc)), g.oa.Wh = g.ma(document, "mouseup", this, g.oa.pD), g.oa.Vh = g.ma(document, "mousemove", this, this.yG), g.oc());
    a.stopPropagation()
};
b.yG = function (a) {
    this.Or = !1;
    var c = this.s;
    a = g.g.cn(a, x(c), Aa(c));
    a.x /= c.scale;
    a.y /= c.scale;
    c = g.g.J.sum(c.Ex, a);
    this.tn(this.s.G ? -c.x : c.x, c.y);
    this.s.G && db(this)
};

function gb(a) {
    var c = a.$d.parentNode;
    return c.lastChild !== a.$d ? (c.appendChild(a.$d), !0) : !1
}

function hb(a, c, d) {
    var e = a.s.G ? a.ec.x - c.x - a.rb : c.x + a.ec.x;
    c = c.y + a.ec.y;
    return Math.max(0, Math.min(1, (Math.min(e + a.rb, d.dc + d.Bb) - Math.max(e, d.dc)) * (Math.min(c + a.Wc, d.lc + d.Pb) - Math.max(c, d.lc)) / (a.rb * a.Wc)))
}

function db(a) {
    var c = a.ec.x;
    c = a.s.G ? c - (a.Sg + a.rb) : c + a.Sg;
    a.moveTo(c, a.ai + a.ec.y)
}

b.moveTo = function (a, c) {
    this.$d.setAttribute("transform", "translate(" + a + "," + c + ")")
};
b.Vs = function () {
    return new g.g.Te(this.rb, this.Wc)
};
b.tn = function (a, c) {
    var d = 2 * g.oa.cd;
    a = Math.max(a, d + 45);
    c = Math.max(c, d + 20);
    this.rb = a;
    this.Wc = c;
    this.am.setAttribute("width", a);
    this.am.setAttribute("height", c);
    this.Wf && (this.s.G ? this.Wf.setAttribute("transform", "translate(" + 2 * g.oa.cd + "," + (c - d) + ") scale(-1 1)") : this.Wf.setAttribute("transform", "translate(" + (a - d) + "," + (c - d) + ")"));
    if (this.Or) {
        a = this.s.Vc();
        a.dc /= this.s.scale;
        a.Bb /= this.s.scale;
        a.lc /= this.s.scale;
        a.Pb /= this.s.scale;
        c = -this.rb / 4;
        if (!(this.rb > a.Bb)) {
            if (this.s.G) {
                d = this.ec.x - c;
                var e = d - this.rb;
                var f = a.dc + a.Bb, h = a.dc + g.Ua.Zc / this.s.scale
            } else e = c + this.ec.x, d = e + this.rb, h = a.dc, f = a.dc + a.Bb - g.Ua.Zc / this.s.scale;
            this.s.G ? e < h ? c = -(h - this.ec.x + this.rb) : d > f && (c = -(f - this.ec.x)) : e < h ? c = h - this.ec.x : d > f && (c = f - this.ec.x - this.rb)
        }
        e = c;
        c = -this.Wc / 4;
        if (!(this.Wc > a.Pb)) {
            d = this.ec.y + c;
            f = d + this.Wc;
            h = a.lc;
            var k = a.lc + a.Pb - g.Ua.Zc / this.s.scale, l = this.ec.y;
            d < h ? c = h - l : f > k && (c = k - l - this.Wc)
        }
        h = c;
        f = this.Vz.getBBox();
        c = {x: e, y: -this.Wc - g.wa.Yq};
        d = {x: -this.rb - 30, y: h};
        h = {x: f.width, y: h};
        k = {x: e, y: f.height};
        e = f.width < f.height ?
            h : k;
        f = f.width < f.height ? k : h;
        h = hb(this, c, a);
        k = hb(this, d, a);
        l = hb(this, e, a);
        a = Math.max(h, k, l, hb(this, f, a));
        h == a ? (this.Sg = c.x, this.ai = c.y) : k == a ? (this.Sg = d.x, this.ai = d.y) : l == a ? (this.Sg = e.x, this.ai = e.y) : (this.Sg = f.x, this.ai = f.y)
    }
    db(this);
    eb(this);
    this.wu && this.wu()
};

function eb(a) {
    var c = [], d = a.rb / 2, e = a.Wc / 2, f = -a.Sg, h = -a.ai;
    if (d == f && e == h) c.push("M " + d + "," + e); else {
        h -= e;
        f -= d;
        a.s.G && (f *= -1);
        var k = Math.sqrt(h * h + f * f), l = Math.acos(f / k);
        0 > h && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m), r = Math.cos(m), t = a.Vs();
        m = (t.width + t.height) / g.oa.DA;
        m = Math.min(m, t.width, t.height) / 4;
        t = 1 - g.oa.AA / k;
        f = d + t * f;
        h = e + t * h;
        t = d + m * r;
        var w = e + m * n;
        d -= m * r;
        e -= m * n;
        n = l + a.gD;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / g.oa.hv;
        k = Math.cos(n) * k / g.oa.hv;
        c.push("M" + t + "," +
            w);
        c.push("C" + (t + k) + "," + (w + l) + " " + f + "," + h + " " + f + "," + h);
        c.push("C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e)
    }
    c.push("z");
    a.Vr.setAttribute("d", c.join(" "))
}

b.Gc = function (a) {
    this.am.setAttribute("fill", a);
    this.Vr.setAttribute("fill", a)
};
b.I = function () {
    g.oa.Vu();
    g.g.o.removeNode(this.$d);
    this.Vz = this.Ze = this.s = this.Wf = this.am = this.Vr = this.$d = null
};
b.St = function (a, c) {
    a ? a.Nj(c.x, c.y) : this.moveTo(c.x, c.y);
    this.Sg = this.s.G ? this.ec.x - c.x - this.rb : c.x - this.ec.x;
    this.ai = c.y - this.ec.y;
    eb(this)
};
b.Qa = function () {
    return new g.g.J(this.ec.x + this.Sg, this.ec.y + this.ai)
};
g.i.fg = function (a) {
    this.Ef = a.id;
    this.tc = a.v.id;
    this.group = g.i.Zb();
    this.Ec = g.i.Ec
};
g.g.object.W(g.i.fg, g.i.Abstract);
g.i.fg.prototype.Za = function () {
    var a = g.i.fg.w.Za.call(this);
    this.Ef && (a.commentId = this.Ef);
    return a
};
g.i.fg.prototype.va = function (a) {
    g.i.fg.w.va.call(this, a);
    this.Ef = a.commentId
};
g.i.Yj = function (a, c, d) {
    a && (g.i.Yj.w.constructor.call(this, a), this.iz = c, this.Np = d)
};
g.g.object.W(g.i.Yj, g.i.fg);
b = g.i.Yj.prototype;
b.type = g.i.rv;
b.Za = function () {
    var a = g.i.Yj.w.Za.call(this);
    a.newContents = this.Np;
    return a
};
b.va = function (a) {
    g.i.Yj.w.va.call(this, a);
    this.Np = a.newValue
};
b.Pk = function () {
    return this.iz == this.Np
};
b.run = function (a) {
    var c;
    (c = v(this).Uo[this.Ef] || null) ? c.aM(a ? this.Np : this.iz) : console.warn("Can't change non-existent comment: " + this.Ef)
};
g.i.gg = function (a) {
    a && (g.i.gg.w.constructor.call(this, a), this.xml = a.Ru())
};
g.g.object.W(g.i.gg, g.i.fg);
g.i.gg.prototype.type = g.i.bo;
g.i.gg.prototype.Za = function () {
    var a = g.i.gg.w.Za.call(this);
    a.xml = g.U.ce(this.xml);
    return a
};
g.i.gg.prototype.va = function (a) {
    g.i.gg.w.va.call(this, a);
    this.xml = g.U.Lj(a.xml)
};
g.i.gg.prototype.run = function (a) {
    g.i.vv(this, a)
};
g.i.vv = function (a, c) {
    var d = v(a);
    c ? (c = g.g.xml.createElement("xml"), c.appendChild(a.xml), g.U.Xi(c, d)) : (d = d.Uo[a.Ef] || null) ? d.I(!1, !1) : console.warn("Can't uncreate non-existent comment: " + a.Ef)
};
g.i.hg = function (a) {
    a && (g.i.hg.w.constructor.call(this, a), this.xml = a.Ru())
};
g.g.object.W(g.i.hg, g.i.fg);
g.i.hg.prototype.type = g.i.tv;
g.i.hg.prototype.Za = function () {
    return g.i.hg.w.Za.call(this)
};
g.i.hg.prototype.va = function (a) {
    g.i.hg.w.va.call(this, a)
};
g.i.hg.prototype.run = function (a) {
    g.i.vv(this, !a)
};
g.i.oi = function (a) {
    a && (g.i.oi.w.constructor.call(this, a), this.gs = a, this.Zt = a.qy(), this.rj = null)
};
g.g.object.W(g.i.oi, g.i.fg);
b = g.i.oi.prototype;
b.zj = function () {
    if (!this.gs) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.rj = this.gs.qy();
    this.gs = null
};
b.type = g.i.co;
b.Za = function () {
    var a = g.i.oi.w.Za.call(this);
    this.rj && (a.newCoordinate = Math.round(this.rj.x) + "," + Math.round(this.rj.y));
    return a
};
b.va = function (a) {
    g.i.oi.w.va.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.rj = new g.g.J(Number(a[0]), Number(a[1])))
};
b.Pk = function () {
    return g.g.J.Ce(this.Zt, this.rj)
};
b.run = function (a) {
    var c;
    if (c = v(this).Uo[this.Ef] || null) {
        a = a ? this.rj : this.Zt;
        var d = c.qy();
        c.moveBy(a.x - d.x, a.y - d.y)
    } else console.warn("Can't move non-existent comment: " + this.Ef)
};
g.wl = function (a, c) {
    this.nc = a;
    this.s = c;
    this.Ui = null;
    this.tq = !1;
    this.ag = this.nc.Qa();
    this.Yi = g.g.gj() && c.Zd ? c.Zd : null
};
g.wl.prototype.I = function () {
    this.Yi = this.s = this.nc = null
};

function ib(a, c, d) {
    d = a.Wk(d);
    d = g.g.J.sum(a.ag, d);
    a.nc.St(a.Yi, d);
    a.nc.ie() && (a.Ui = Pa(a.s, c), a.tq = a.Ui != g.yv, c = a.s.ad, a.tq ? (Qa(a.nc, !0), a.Ui == g.Iq && c && Ra(c, !0)) : (Qa(a.nc, !1), c && Ra(c, !1)))
}

function jb(a, c, d) {
    ib(a, c, d);
    c = a.Wk(d);
    c = g.g.J.sum(a.ag, c);
    a.nc.moveTo(c.x, c.y);
    c = a.s.ad;
    a.tq ? (c && setTimeout(c.close.bind(c), 100), a.zm(), a.nc.I(!1, !0)) : c && c.close();
    a.tq || (a.Yi && a.Yi.Qo(a.s.Yg), a.nc.Bj && a.nc.Bj(!1), a.zm());
    a.s.Hc(!0);
    a.s.ra && g.g.o.Fc(a.s.ra.vc, a.nc.ie() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    g.i.$(!1)
}

g.wl.prototype.zm = function () {
    if (this.nc.Ny) {
        var a = new g.i.oi(this.nc);
        a.Zt = this.ag;
        a.zj();
        g.i.Ka(a)
    }
};
g.wl.prototype.Wk = function (a) {
    a = new g.g.J(a.x / this.s.scale, a.y / this.s.scale);
    this.s.kj && a.scale(1 / this.s.options.Nb.scale);
    return a
};
g.wl.prototype.Ut = function () {
    this.nc.moveTo(0, 0);
    this.Yi.Nj(this.ag.x, this.ag.y);
    ba(this.Yi, this.nc.ya())
};
g.Wl = function (a) {
    this.s = a;
    this.aA = new g.g.J(a.scrollX, a.scrollY)
};
g.Wl.prototype.I = function () {
    this.s = null
};
g.Wl.prototype.Nu = function () {
    g.selected && kb(g.selected);
    Ba(this.s)
};
g.Wl.prototype.vh = function (a) {
    a = g.g.J.sum(this.aA, a);
    this.s.scroll(a.x, a.y)
};
g.po = function (a) {
    g.po.w.constructor.call(this, a.s);
    this.pc = a.pc;
    this.gf = a.gf
};
g.g.object.W(g.po, g.Wl);
g.po.prototype.vh = function (a) {
    a = g.g.J.sum(this.aA, a);
    this.gf ? this.pc.set(-a.x) : this.pc.set(-a.y)
};
g.$j = function (a, c) {
    this.qc = this.rc = this.Ej = this.Fj = this.ne = this.wd = this.dz = null;
    this.ls = c;
    this.Nm = this.ij = this.Om = this.aj = !1;
    this.kf = a;
    this.P = this.ki = this.We = this.yg = this.Qp = this.Pp = null;
    this.Dp = this.bj = this.Lw = !1;
    this.By = !g.fB
};
b = g.$j.prototype;
b.I = function () {
    g.Touch.dm();
    g.H.$G();
    this.ls.yc = null;
    this.Pp && g.$a(this.Pp);
    this.Qp && g.$a(this.Qp);
    this.P = this.qc = this.rc = this.Ej = this.Fj = null;
    this.We && (this.We.I(), this.We = null);
    this.ki && (this.ki.I(), this.ki = null);
    this.yg && (this.yg.I(), this.yg = null)
};

function lb(a, c) {
    a.wd = g.g.J.tm(new g.g.J(c.clientX, c.clientY), a.dz);
    if (a.aj) var d = !1; else a.aj = g.g.J.CF(a.wd) > (a.P ? g.nB : g.eB), d = a.aj;
    if (d) {
        if (a.Lw) throw Error("updateIsDragging_ should only be called once per gesture.");
        a.Lw = !0;
        if (a.ne) {
            a.Nm = !0;
            a.yg = new g.wl(a.ne, a.qc);
            d = a.yg;
            g.i.Zb() || g.i.$(!0);
            d.s.Hc(!1);
            d.nc.Or = !1;
            d.Yi && d.Ut();
            d.nc.Bj && d.nc.Bj(!0);
            var e = d.s.ra;
            e && g.g.o.Cb(e.vc, d.nc.ie() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            ib(a.yg, a.kf, a.wd);
            d = !0
        } else d = !1;
        if (!d) {
            if (a.rc) if (a.P ? (a.P.My(a.rc) ?
                ((d = !mb(a.P)) || (d = a.wd, d = Math.atan2(d.y, d.x) / Math.PI * 180, e = a.P.nE, d = d < e && d > -e || d < -180 + e || d > 180 - e ? !0 : !1), d ? (a.qc = a.P.Ob, nb(a.qc), g.i.Zb() || g.i.$(!0), a.Ej = null, a.rc = ob(a.P, a.rc), a.rc.select(), d = !0) : d = !1) : d = !1, a.ij = d) : a.rc.kd() && (a.ij = !0), a.ij) {
                a.We = new g.mi(a.rc, a.qc);
                d = a.We;
                e = a.wd;
                var f = a.By;
                g.i.Zb() || g.i.$(!0);
                d.s.kj && Ua(d.Eb);
                g.g.o.Dn();
                d.s.Hc(!1);
                g.mb.zs();
                if (d.Eb.getParent() || f && d.Eb.X && z(d.Eb.X)) A(d.Eb, f), e = d.Wk(e), e = g.g.J.sum(d.ag, e), d.Eb.translate(e.x, e.y), g.mb.hE(d.Eb);
                d.Eb.Bj(!0);
                d.Eb.Ut();
                (e = d.s.ra) && g.g.o.Cb(e.vc, d.Eb.ie() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
                Na(a.We, a.kf, a.wd);
                d = !0
            } else d = !1; else d = !1;
            if (d = !d) if (a.P) d = mb(a.P); else if (d = a.qc) d = a.qc, d = d.options.Cc && d.options.Cc.vh;
            d && (a.ki = a.P ? new g.po(a.P) : new g.Wl(a.qc), a.Om = !0, a.ki.Nu())
        }
        g.Ph()
    }
    a.kf = c
}

b.As = function (a) {
    g.g.Gp(a) ? this.cancel() : (this.bj = !0, g.mb.zs(), nb(this.qc), this.qc.kj && this.qc.resize(), ya(this.qc), this.kf = a, g.oc(!!this.P), g.H.block(), this.rc && (!this.rc.$b && a.shiftKey ? (g.navigation.Ns(), J(this.ls.Xa, g.navigation.dt(this.rc))) : this.rc.select()), g.g.lj(a) ? na(this, a) : ("touchstart" != a.type.toLowerCase() && "pointerdown" != a.type.toLowerCase() || "mouse" == a.pointerType || g.AF(a, this), this.dz = new g.g.J(a.clientX, a.clientY), this.By = a.altKey || a.ctrlKey || a.metaKey, this.qk(a)))
};
b.qk = function (a) {
    this.Pp = g.ma(document, "mousemove", null, this.Im.bind(this));
    this.Qp = g.ma(document, "mouseup", null, this.up.bind(this));
    a.preventDefault();
    a.stopPropagation()
};
b.Im = function (a) {
    lb(this, a);
    this.Om ? this.ki.vh(this.wd) : this.ij ? Na(this.We, this.kf, this.wd) : this.Nm && ib(this.yg, this.kf, this.wd);
    a.preventDefault();
    a.stopPropagation()
};
b.up = function (a) {
    lb(this, a);
    g.Ph();
    if (this.Dp) console.log("Trying to end a gesture recursively."); else {
        this.Dp = !0;
        if (this.Nm) jb(this.yg, a, this.wd); else if (this.ij) Sa(this.We, a, this.wd); else if (this.Om) {
            var c = this.ki;
            c.vh(this.wd);
            Ca(c.s)
        } else if (this.ne && !this.aj) this.ne.DG && this.ne.DG(), this.ne.select && this.ne.select(); else if (pb(this)) this.Fj.mf(), qb(this); else if (this.Ej && !this.aj && !pb(this)) this.P && this.P.pk ? this.rc.isEnabled() && (g.i.Zb() || g.i.$(!0), Va(ob(this.P, this.rc))) : g.i.Ka(new g.i.vd(this.Ej,
            "click", void 0, void 0)), qb(this), g.i.$(!1); else if (!(this.Ej || this.ne || this.Fj || this.aj)) if (c = this.ls, a.shiftKey) {
            g.navigation.Ns();
            var d = g.g.AG(c, new g.g.J(a.clientX, a.clientY));
            d = g.F.om(c, d);
            J(c.Xa, d)
        } else g.selected && kb(g.selected);
        a.preventDefault();
        a.stopPropagation();
        this.I()
    }
};
b.cancel = function () {
    if (!this.Dp) {
        g.Ph();
        if (this.Nm) jb(this.yg, this.kf, this.wd); else if (this.ij) Sa(this.We, this.kf, this.wd); else if (this.Om) {
            var a = this.ki;
            a.vh(this.wd);
            Ca(a.s)
        }
        this.I()
    }
};

function na(a, c) {
    a.rc ? (qb(a), g.oc(a.P), a.rc.xn(c)) : a.ne ? a.ne.xn(c) : a.qc && !a.P && (g.oc(), a.qc.xn(c));
    c.preventDefault();
    c.stopPropagation();
    a.I()
}

function rb(a, c, d) {
    if (a.bj) throw Error("Tried to call gesture.handleWsStart, but the gesture had already been started.");
    a.qc || (a.qc = d);
    a.kf = c;
    a.As(c);
    g.Je && g.navigation.Gb(g.navigation.Ol)
}

function sb(a, c, d) {
    if (a.bj) throw Error("Tried to call gesture.handleFlyoutStart, but the gesture had already been started.");
    a.P || (a.P = d);
    rb(a, c, d.s)
}

function qb(a) {
    a.rc && !a.P && Ua(a.rc)
}

function tb(a, c) {
    a.Ej || a.ne || (a.Ej = c, c.$b && c != I(c) ? ub(a, I(c)) : ub(a, c))
}

function ub(a, c) {
    c.cb ? ub(a, c.getParent()) : a.rc = c
}

function pb(a) {
    if (a.Fj) {
        var c = a.Fj;
        c = !!c.B && c.B.jd() && !!c.mf && "function" === typeof c.mf
    } else c = !1;
    return c && !a.aj && (!a.P || !a.P.pk)
}

b.gc = function () {
    return this.Om || this.ij || this.Nm
};
b.Dk = function () {
    return this.We ? this.We.Dk() : []
};
g.$j.qt = function () {
    for (var a = g.Ib.getAll(), c = 0, d; d = a[c]; c++) if (d.yc) return !0;
    return !1
};
g.Na = function (a, c, d) {
    this.fA = this.Pj = this.cc = null;
    this.bc = new g.g.Te(0, 0);
    this.Tc = null;
    d && this.Kd(d);
    this.setValue(a);
    c && (this.Pj = c)
};
g.Na.ov = 16;
g.Na.pw = 12.5;
g.Na.Xl = 10;
g.Na.qL = 10;
g.Na.ri = g.Na.Xl / 2;
b = g.Na.prototype;
b.name = void 0;
b.az = 50;
b.B = null;
b.Pf = !0;
b.ji = !0;
b.Ro = null;
g.Na.Vv = "\u00a0";
b = g.Na.prototype;
b.kg = !0;
b.Ei = !1;
b.Kd = function (a) {
    var c = a.tooltip;
    "string" == typeof c && (c = g.g.ke(a.tooltip));
    c && this.Ra(c)
};
b.Iu = function (a) {
    if (this.B) throw Error("Field already bound to a block.");
    this.B = a
};
b.T = function () {
    this.df || (this.df = g.g.o.M("g", {}, null), this.isVisible() || (this.df.style.display = "none"), this.B.ya().appendChild(this.df), this.Hh(), this.$g(), this.Ra(this.fA), g.H.qk(this.Ro || this.ya()), this.cz = g.ma(this.Ro || this.ya(), "mousedown", this, this.Uh), this.dj())
};
b.Hh = function () {
    this.bc.height = Math.max(this.bc.height, g.Na.ov);
    this.bc.width = Math.max(this.bc.width, g.Na.Xl);
    this.Li = g.g.o.M("rect", {rx: 4, ry: 4, x: 0, y: 0, height: this.bc.height, width: this.bc.width}, this.df);
    vb(this)
};
b.dj = function () {
};

function vb(a) {
    a.ic = g.g.o.M("text", {"class": "blocklyText", y: g.Na.pw, x: a.Li ? g.Na.ri : 0}, a.df);
    a.Kj = document.createTextNode("");
    a.ic.appendChild(a.Kj)
}

b.Bm = function (a) {
    this.setValue(a.textContent)
};
b.dA = function (a) {
    a.textContent = this.getValue();
    return a
};
b.I = function () {
    g.D.Hk(this);
    g.aa.Hk(this);
    this.cz && g.$a(this.cz);
    g.g.o.removeNode(this.df)
};
b.$g = function () {
    var a = this.Ro || this.ya();
    this.kg && a && (this.B.jd() ? (g.g.o.Cb(a, "blocklyEditableText"), g.g.o.Fc(a, "blocklyNonEditableText"), a.style.cursor = this.Hq) : (g.g.o.Cb(a, "blocklyNonEditableText"), g.g.o.Fc(a, "blocklyEditableText"), a.style.cursor = ""))
};
b.isVisible = function () {
    return this.ji
};
b.Vb = function (a) {
    if (this.ji != a) {
        this.ji = a;
        var c = this.ya();
        c && (c.style.display = a ? "block" : "none")
    }
};

function wb(a, c) {
    a.Pj = c
}

b.oy = function () {
    return this.Pj
};
b.ya = function () {
    return this.df
};
b.Pe = function () {
};
b.Vf = function () {
    if (this.Kj) {
        this.Kj.nodeValue = xb(this);
        var a = g.g.o.bt(this.ic);
        this.Li && (a += g.Na.Xl, this.Li.setAttribute("width", a));
        this.bc.width = a
    }
};
b.Kg = function () {
    if (!this.isVisible()) return new g.g.Te(0, 0);
    this.Pf ? (this.Vf(), this.Pf = !1) : this.ji && 0 == this.bc.width && (console.warn("Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."), this.Vf());
    return this.bc
};

function xb(a) {
    var c = a.Tb();
    if (!c) return g.Na.Vv;
    c.length > a.az && (c = c.substring(0, a.az - 2) + "\u2026");
    c = c.replace(/\s/g, g.Na.Vv);
    a.B && a.B.G && (c += "\u200f");
    return c
}

b.Tb = function () {
    if (this.ct) {
        var a = this.ct.call(this);
        if (null !== a) return String(a)
    }
    return String(this.getValue())
};
b.dl = function () {
    throw Error("setText method is deprecated");
};
b.Xm = function () {
    this.Pf = !0
};

function yb(a) {
    a.Pf = !0;
    a.B && a.B.ba && (a.B.za(), a.B.Kb())
}

b.setValue = function (a) {
    if (null !== a) {
        var c = this.uh(a);
        a = zb(this, a, c);
        if (!(a instanceof Error)) {
            if (c = this.oy()) if (c = c.call(this, a), a = zb(this, a, c), a instanceof Error) return;
            c = this.getValue();
            c !== a && (this.B && g.i.isEnabled() && g.i.Ka(new g.i.eg(this.B, "field", this.name || null, c, a)), this.Vi(a), this.Pf && yb(this))
        }
    }
};

function zb(a, c, d) {
    if (null === d) return a.Dx(), a.Pf && yb(a), Error();
    void 0 !== d && (c = d);
    return c
}

b.getValue = function () {
    return this.cc
};
b.uh = function (a) {
    return null === a || void 0 === a ? null : a
};
b.Vi = function (a) {
    this.cc = a;
    this.Pf = !0
};
b.Dx = function () {
};
b.Uh = function (a) {
    if (this.B && this.B.v && (a = this.B.v.zh(a))) {
        if (a.bj) throw Error("Tried to call gesture.setStartField, but the gesture had already been started.");
        a.Fj || (a.Fj = this)
    }
};
b.Ra = function (a) {
    var c = this.Ro || this.ya();
    c ? c.pf = a || "" === a ? a : this.B : this.fA = a
};
b.nn = function () {
    return !1
};
b.Mf = function () {
    for (var a = null, c = this.B, d = c.R, e = 0; e < c.R.length; e++) for (var f = d[e], h = f.Pa, k = 0; k < h.length; k++) if (h[k] === this) {
        a = f;
        break
    }
    return a
};
b.Py = function () {
    return !1
};
b.Th = function () {
    return !1
};
b.vn = function (a) {
    a ? (this.df.appendChild(a), this.Tc = a) : this.Tc = null
};
b.wn = function (a) {
    a && this.df.appendChild(a)
};
g.Uc = {};
g.Uc.Mn = {};
g.Uc.register = function (a, c) {
    if ("string" != typeof a || "" == a.trim()) throw Error('Invalid field type "' + a + '". The type must be a non-empty string.');
    if (g.Uc.Mn[a]) throw Error('Error: Field "' + a + '" is already registered.');
    if (!c || "function" != typeof c.va) throw Error('Field "' + c + '" must have a fromJson function');
    a = a.toLowerCase();
    g.Uc.Mn[a] = c
};
g.Uc.unregister = function (a) {
    g.Uc.Mn[a] ? delete g.Uc.Mn[a] : console.warn('No field mapping for type "' + a + '" found to unregister')
};
g.Uc.va = function (a) {
    var c = g.Uc.Mn[a.type.toLowerCase()];
    return c ? c.va(a) : (console.warn("Blockly could not create a field of type " + a.type + ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."), null)
};
g.Fd = function (a, c, d) {
    this.Po = null;
    null == a && (a = "");
    g.Fd.w.constructor.call(this, a, null, d);
    d || (this.Po = c || null);
    this.bc = new g.g.Te(0, g.Na.pw)
};
g.g.object.W(g.Fd, g.Na);
g.Fd.va = function (a) {
    var c = g.g.ke(a.text);
    return new g.Fd(c, void 0, a)
};
g.Fd.prototype.kg = !1;
g.Fd.prototype.Kd = function (a) {
    g.Fd.w.Kd.call(this, a);
    this.Po = a["class"]
};
g.Fd.prototype.Hh = function () {
    vb(this);
    this.ic.setAttribute("y", this.bc.height);
    this.Po && g.g.o.Cb(this.ic, this.Po)
};
g.Fd.prototype.uh = function (a) {
    return null === a || void 0 === a ? null : String(a)
};
g.Uc.register("field_label", g.Fd);
g.Mv = function (a, c, d, e) {
    if (a != g.jg && !c) throw Error("Value inputs and statement inputs must have non-empty name.");
    this.type = a;
    this.name = c;
    this.B = d;
    this.connection = e;
    this.Pa = []
};
b = g.Mv.prototype;
b.align = g.xq;
b.ji = !0;

function L(a, c, d) {
    Ab(a, a.Pa.length, c, d);
    return a
}

function Ab(a, c, d, e) {
    if (0 > c || c > a.Pa.length) throw Error("index " + c + " out of bounds.");
    if (!(d || "" == d && e)) return c;
    "string" == typeof d && (d = new g.Fd(d));
    d.Iu(a.B);
    a.B.ba && d.T();
    d.name = e;
    d.pu && (c = Ab(a, c, d.pu));
    a.Pa.splice(c, 0, d);
    ++c;
    d.Pu && (c = Ab(a, c, d.Pu));
    a.B.ba && (a.B.za(), a.B.Kb());
    return c
}

function Bb(a, c) {
    for (var d = 0, e; e = a.Pa[d]; d++) if (e.name === c) {
        e.I();
        a.Pa.splice(d, 1);
        a.B.ba && (a.B.za(), a.B.Kb());
        return
    }
    throw Error('Field "%s" not found.', c);
}

b.isVisible = function () {
    return this.ji
};
b.Vb = function (a) {
    var c = [];
    if (this.ji == a) return c;
    for (var d = (this.ji = a) ? "block" : "none", e = 0, f; f = this.Pa[e]; e++) f.Vb(a);
    if (this.connection) {
        if (a) c = Cb(this.connection); else if (e = this.connection, Db(e, !0), e.ca) for (e = p(z(e), !1), f = 0; f < e.length; f++) {
            for (var h = e[f], k = h.De(!0), l = 0; l < k.length; l++) Db(k[l], !0);
            h = Ma(h);
            for (l = 0; l < h.length; l++) h[l].Vb(!1)
        }
        if (e = z(this.connection)) e.ya().style.display = d, a || (e.ba = !1)
    }
    return c
};
b.Xm = function () {
    for (var a = 0, c; c = this.Pa[a]; a++) c.Xm()
};
b.vb = function (a) {
    if (!this.connection) throw Error("This input does not have a connection.");
    this.connection.vb(a);
    return this
};

function Eb(a, c) {
    a.align = c;
    a.B.ba && a.B.za();
    return a
}

b.T = function () {
    if (this.B.v.ba) for (var a = 0; a < this.Pa.length; a++) this.Pa[a].T()
};
b.I = function () {
    for (var a = 0, c; c = this.Pa[a]; a++) c.I();
    this.connection && this.connection.I();
    this.B = null
};
g.g.Lb = {};
g.g.Lb.parse = function (a) {
    a = String(a).toLowerCase().trim();
    var c = g.g.Lb.names[a];
    if (c) return c;
    c = "#" == a[0] ? a : "#" + a;
    if (/^#[0-9a-f]{6}$/.test(c)) return c;
    if (/^#[0-9a-f]{3}$/.test(c)) return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
    var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
    return d && (a = Number(d[1]), c = Number(d[2]), d = Number(d[3]), 0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d) ? g.g.Lb.zu(a, c, d) : null
};
g.g.Lb.zu = function (a, c, d) {
    c = a << 16 | c << 8 | d;
    return 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16)
};
g.g.Lb.Cy = function (a) {
    a = parseInt(a.substr(1), 16);
    return [a >> 16, a >> 8 & 255, a & 255]
};
g.g.Lb.lF = function (a) {
    var c = g.zB, d = 255 * g.AB, e = 0, f = 0, h = 0;
    if (0 == c) h = f = e = d; else {
        var k = Math.floor(a / 60), l = a / 60 - k;
        a = d * (1 - c);
        var m = d * (1 - c * l);
        c = d * (1 - c * (1 - l));
        switch (k) {
            case 1:
                e = m;
                f = d;
                h = a;
                break;
            case 2:
                e = a;
                f = d;
                h = c;
                break;
            case 3:
                e = a;
                f = m;
                h = d;
                break;
            case 4:
                e = c;
                f = a;
                h = d;
                break;
            case 5:
                e = d;
                f = a;
                h = m;
                break;
            case 6:
            case 0:
                e = d, f = c, h = a
        }
    }
    return g.g.Lb.zu(Math.floor(e), Math.floor(f), Math.floor(h))
};
g.g.Lb.Qr = function (a, c, d) {
    a = g.g.Lb.Cy(g.g.Lb.parse(a));
    c = g.g.Lb.Cy(g.g.Lb.parse(c));
    return g.g.Lb.zu(Math.round(c[0] + d * (a[0] - c[0])), Math.round(c[1] + d * (a[1] - c[1])), Math.round(c[2] + d * (a[2] - c[2])))
};
g.g.Lb.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00"
};
g.Zn = function (a, c, d) {
    if (g.Generator && "undefined" != typeof g.Generator.prototype[c]) throw Error('Block prototypeName "' + c + '" conflicts with Blockly.Generator members.');
    this.id = d && !u(a, d) ? d : g.g.Ig();
    a.Rr[this.id] = this;
    this.Y = this.X = this.L = null;
    this.R = [];
    this.Pg = void 0;
    this.disabled = !1;
    this.pf = "";
    this.contextMenu = !0;
    this.Rf = null;
    this.Ag = [];
    this.Gx = this.fz = this.ps = !0;
    this.Bg = this.cb = !1;
    this.vk = null;
    this.ze = {text: null, ou: !1, size: new g.g.Te(160, 80)};
    this.tA = new g.g.J(0, 0);
    this.v = a;
    this.$b = a.je;
    this.G = a.G;
    this.Rm = !1;
    this.Mg = void 0;
    if (c) {
        this.type = c;
        d = g.K[c];
        if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
        g.g.object.qj(this, d)
    }
    a.ml.push(this);
    a.Zg[this.type] || (a.Zg[this.type] = []);
    a.Zg[this.type].push(this);
    "function" == typeof this.T && this.T();
    this.pF = this.Pg;
    if (g.i.isEnabled()) {
        (a = g.i.Zb()) || g.i.$(!0);
        try {
            g.i.Ka(new g.i.$n(this))
        } finally {
            a || g.i.$(!1)
        }
    }
    if ("function" == typeof this.onchange) {
        if ((a = this.onchange) && "function" != typeof a) throw Error("onchange must be a function.");
        this.fn &&
        cb(this.v, this.fn);
        if (this.onchange = a) this.fn = a.bind(this), bb(this.v, this.fn)
    }
};
b = g.Zn.prototype;
b.data = null;
b.qh = "#000000";
b.Vw = null;
b.Ww = null;
b.I = function (a) {
    if (this.v) {
        this.fn && cb(this.v, this.fn);
        g.Je && g.navigation.gz(this);
        A(this, a);
        g.i.isEnabled() && g.i.Ka(new g.i.KA(this));
        g.i.disable();
        try {
            if (this.v) {
                Ya(this.v, this);
                var c = this.v;
                c.Zg[this.type].splice(c.Zg[this.type].indexOf(this), 1);
                c.Zg[this.type].length || delete c.Zg[this.type];
                delete this.v.Rr[this.id];
                this.v = null
            }
            g.selected == this && (g.selected = null);
            for (var d = this.Ag.length - 1; 0 <= d; d--) this.Ag[d].I(!1);
            d = 0;
            for (var e; e = this.R[d]; d++) e.I();
            this.R.length = 0;
            var f = this.De(!0);
            d = 0;
            for (var h; h =
                f[d]; d++) h.I()
        } finally {
            g.i.enable()
        }
    }
};
b.dj = function () {
    for (var a = 0, c; c = this.R[a]; a++) for (var d = 0, e; e = c.Pa[d]; d++) e.dj && e.dj()
};

function A(a, c) {
    if (a.L) {
        var d = null;
        a.L.isConnected() && (d = a.L.ca, a.L.disconnect());
        if (d && c) {
            a:{
                c = null;
                for (var e = 0; e < a.R.length; e++) {
                    var f = a.R[e].connection;
                    if (f && f.type == g.Wa && f.ca) {
                        if (c) {
                            a = null;
                            break a
                        }
                        c = f
                    }
                }
                a = c
            }
            a && a.isConnected() && !z(a).cb && (a = a.ca, a.disconnect(), Da(a, d) ? d.connect(a) : a.Op(d))
        }
    } else a.Y && (d = null, a.Y.isConnected() && (d = a.Y.ca, a.Y.disconnect()), e = q(a), c && e && !e.cb && (a = a.X.ca, a.disconnect(), d && Da(d, a) && d.connect(a)))
}

b.De = function () {
    var a = [];
    this.L && a.push(this.L);
    this.Y && a.push(this.Y);
    this.X && a.push(this.X);
    for (var c = 0, d; d = this.R[c]; c++) d.connection && a.push(d.connection);
    return a
};
b.Kb = function () {
    console.warn("Not expected to reach Block.bumpNeighbours function. BlockSvg.bumpNeighbours was expected to be called instead.")
};
b.getParent = function () {
    return this.Rf
};

function Fb(a) {
    do {
        var c = a;
        a = a.getParent();
        if (!a) return null
    } while (q(a) == c);
    return a
}

function q(a) {
    return a.X && z(a.X)
}

function I(a) {
    var c = a;
    do a = c, c = a.Rf; while (c);
    return a
}

b.xh = function (a) {
    if (!a) return this.Ag;
    a = [];
    for (var c = 0, d; d = this.R[c]; c++) d.connection && (d = z(d.connection)) && a.push(d);
    (c = q(this)) && a.push(c);
    return a
};
b.cl = function (a) {
    if (a != this.Rf) {
        if (this.Rf) {
            g.g.Kr(this.Rf.Ag, this);
            if (this.Y && this.Y.isConnected()) throw Error("Still connected to previous block.");
            if (this.L && this.L.isConnected()) throw Error("Still connected to parent block.");
            this.Rf = null
        } else Ya(this.v, this);
        (this.Rf = a) ? a.Ag.push(this) : this.v.ml.push(this)
    }
};

function p(a, c) {
    var d = [a];
    a = a.xh(c);
    for (var e, f = 0; e = a[f]; f++) d.push.apply(d, p(e, c));
    return d
}

b.ie = function () {
    return this.ps && !this.cb && !(this.v && this.v.options.readOnly)
};
b.kd = function () {
    return this.fz && !this.cb && !(this.v && this.v.options.readOnly)
};
b.fq = function (a) {
    this.fz = a
};
b.Hu = function (a) {
    this.cb = a
};
b.Jh = function () {
    return this.Rm
};
b.Sz = function (a) {
    this.Rm = a
};
b.jd = function () {
    return this.Gx && !(this.v && this.v.options.readOnly)
};
b.Du = function (a) {
    this.Gx = a;
    a = 0;
    for (var c; c = this.R[a]; a++) for (var d = 0, e; e = c.Pa[d]; d++) e.$g()
};
b.Ra = function (a) {
    this.pf = a
};

function Gb(a) {
    var c = a.Vw;
    return c ? c : g.g.Lb.Qr("#fff", a.qh, .6)
}

function Hb(a) {
    var c = a.Ww;
    if (c) return {To: c, fs: null, Uw: null};
    a = a.qh;
    return {To: null, fs: g.g.Lb.Qr("#fff", a, .3), Uw: g.g.Lb.Qr("#000", a, .2)}
}

b.Gc = function (a) {
    var c = "string" == typeof a ? g.g.ke(a) : a, d = Number(c);
    if (!isNaN(d) && 0 <= d && 360 >= d) this.qh = g.Gy(d); else if (d = g.g.Lb.parse(c)) this.qh = d; else throw d = 'Invalid colour: "' + c + '"', a != c && (d += ' (from "' + a + '")'), Error(d);
};

function M(a, c) {
    var d = a.v.sp().nD[c];
    if (d) a.Vw = d.colourSecondary, a.Ww = d.colourTertiary, a.Mg = d.Mg, a.Gc(d.colourPrimary); else throw Error("Invalid style name: " + c);
}

function y(a, c) {
    for (var d = 0, e; e = a.R[d]; d++) for (var f = 0, h; h = e.Pa[f]; f++) if (h.name == c) return h;
    return null
}

b.gt = function () {
    for (var a = [], c = 0, d; d = this.R[c]; c++) for (var e = 0, f; f = d.Pa[e]; e++) f.nn() && a.push(f.getValue());
    return a
};
b.Lg = function () {
    for (var a = [], c = 0, d; d = this.R[c]; c++) for (var e = 0, f; f = d.Pa[e]; e++) f.nn() && (f = this.v.ef(f.getValue())) && a.push(f);
    return a
};
b.pq = function (a) {
    for (var c = 0, d; d = this.R[c]; c++) for (var e = 0, f; f = d.Pa[e]; e++) f.nn() && a.ua() == f.getValue() && yb(f)
};
b.Yp = function (a, c) {
    for (var d = 0, e; e = this.R[d]; d++) for (var f = 0, h; h = e.Pa[f]; f++) h.nn() && a == h.getValue() && h.setValue(c)
};

function G(a, c) {
    return (a = y(a, c)) ? a.getValue() : null
}

function Ib(a, c, d) {
    a = y(a, d);
    if (!a) throw Error('Field "' + d + '" not found.');
    a.setValue(c)
}

b.me = function (a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.Y) {
            if (this.L) throw Error("Remove output connection prior to adding previous connection.");
            this.Y = this.Wm(g.Se)
        }
        this.Y.vb(c)
    } else if (this.Y) {
        if (this.Y.isConnected()) throw Error("Must disconnect previous statement before removing connection.");
        this.Y.I();
        this.Y = null
    }
};
b.le = function (a, c) {
    if (a) void 0 === c && (c = null), this.X || (this.X = this.Wm(g.jb)), this.X.vb(c); else if (this.X) {
        if (this.X.isConnected()) throw Error("Must disconnect next statement before removing connection.");
        this.X.I();
        this.X = null
    }
};
b.Bd = function (a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.L) {
            if (this.Y) throw Error("Remove previous connection prior to adding output connection.");
            this.L = this.Wm(g.Re)
        }
        this.L.vb(c)
    } else if (this.L) {
        if (this.L.isConnected()) throw Error("Must disconnect output value before removing connection.");
        this.L.I();
        this.L = null
    }
};
b.$c = function (a) {
    this.Pg != a && (g.i.Ka(new g.i.eg(this, "inline", null, this.Pg, a)), this.Pg = a)
};

function Ga(a) {
    if (void 0 != a.Pg) return a.Pg;
    for (var c = 1; c < a.R.length; c++) if (a.R[c - 1].type == g.jg && a.R[c].type == g.jg) return !1;
    for (c = 1; c < a.R.length; c++) if (a.R[c - 1].type == g.Wa && a.R[c].type == g.jg) return !0;
    return !1
}

b.isEnabled = function () {
    return !this.disabled
};
b.md = function (a) {
    this.isEnabled() != a && (g.i.Ka(new g.i.eg(this, "disabled", null, this.disabled, !a)), this.disabled = !a)
};

function Jb(a) {
    for (a = Fb(a); a;) {
        if (a.disabled) return !0;
        a = Fb(a)
    }
    return !1
}

b.isCollapsed = function () {
    return this.Bg
};
b.Wg = function (a) {
    this.Bg != a && (g.i.Ka(new g.i.eg(this, "collapsed", null, this.Bg, a)), this.Bg = a)
};
b.toString = function (a, c) {
    var d = [], e = c || "?";
    if (this.Bg) d.push(B(this, "_TEMP_COLLAPSED_INPUT").Pa[0].Tb()); else for (var f = 0, h; h = this.R[f]; f++) {
        for (var k = 0, l; l = h.Pa[k]; k++) d.push(l.Tb());
        h.connection && ((h = z(h.connection)) ? d.push(h.toString(void 0, c)) : d.push(e))
    }
    d = d.join(" ").trim() || "???";
    a && d.length > a && (d = d.substring(0, a - 3) + "...");
    return d
};

function N(a, c) {
    return a.Zl(g.Wa, c)
}

function Kb(a, c) {
    return a.Zl(g.jb, c)
}

function O(a, c) {
    return a.Zl(g.jg, c || "")
}

function P(a, c) {
    var d = c.type ? 'Block "' + c.type + '": ' : "";
    if (c.output && c.previousStatement) throw Error(d + "Must not have both an output and a previousStatement.");
    c.style && c.style.Mg && (a.Mg = c.style.Mg, c.style = null);
    if (c.style && c.colour) throw Error(d + "Must not have both a colour and a style.");
    if (c.style) {
        var e = c.style;
        try {
            M(a, e)
        } catch (E) {
            console.warn(d + "Style does not exist: ", e)
        }
    } else if ("colour" in c) if (void 0 === c.colour) console.warn(d + "Undefined colour value."); else {
        e = c.colour;
        try {
            a.Gc(e)
        } catch (E) {
            console.warn(d +
                "Illegal colour value: ", e)
        }
    }
    for (e = 0; void 0 !== c["message" + e];) {
        for (var f = a, h = c["args" + e] || [], k = c["lastDummyAlign" + e], l = g.g.VG(c["message" + e]), m = [], n = 0, r = [], t = 0; t < l.length; t++) {
            var w = l[t];
            if ("number" == typeof w) {
                if (0 >= w || w > h.length) throw Error('Block "' + f.type + '": Message index %' + w + " out of range.");
                if (m[w]) throw Error('Block "' + f.type + '": Message index %' + w + " duplicated.");
                m[w] = !0;
                n++;
                r.push(h[w - 1])
            } else (w = w.trim()) && r.push(w)
        }
        if (n != h.length) throw Error('Block "' + f.type + '": Message does not reference all ' +
            h.length + " arg(s).");
        r.length && ("string" == typeof r[r.length - 1] || g.g.fb.startsWith(r[r.length - 1].type, "field_")) && (t = {type: "input_dummy"}, k && (t.align = k), r.push(t));
        k = {LEFT: g.xq, RIGHT: g.rl, CENTRE: g.fv};
        h = [];
        for (t = 0; t < r.length; t++) if (m = r[t], "string" == typeof m) h.push([m, void 0]); else {
            l = n = null;
            do if (w = !1, "string" == typeof m) n = new g.Fd(m); else switch (m.type) {
                case "input_value":
                    l = N(f, m.name);
                    break;
                case "input_statement":
                    l = Kb(f, m.name);
                    break;
                case "input_dummy":
                    l = O(f, m.name);
                    break;
                default:
                    n = g.Uc.va(m), !n &&
                    m.alt && (m = m.alt, w = !0)
            } while (w);
            if (n) h.push([n, m.name]); else if (l) {
                m.check && l.vb(m.check);
                m.align && Eb(l, k[m.align]);
                for (m = 0; m < h.length; m++) L(l, h[m][0], h[m][1]);
                h.length = 0
            }
        }
        e++
    }
    void 0 !== c.inputsInline && a.$c(c.inputsInline);
    void 0 !== c.output && a.Bd(!0, c.output);
    void 0 !== c.previousStatement && a.me(!0, c.previousStatement);
    void 0 !== c.nextStatement && a.le(!0, c.nextStatement);
    void 0 !== c.tooltip && (e = c.tooltip, e = g.g.ke(e), a.Ra(e));
    void 0 !== c.enableContextMenu && (e = c.enableContextMenu, a.contextMenu = !!e);
    void 0 !==
    c.helpUrl && (e = c.helpUrl, e = g.g.ke(e), a.ub = e);
    "string" == typeof c.extensions && (console.warn(d + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + c.type + "' block."), c.extensions = [c.extensions]);
    void 0 !== c.mutator && g.Z.apply(c.mutator, a, !0);
    if (Array.isArray(c.extensions)) for (c = c.extensions, d = 0; d < c.length; ++d) g.Z.apply(c[d], a, !1)
}

b.qj = function (a, c) {
    if (void 0 !== c && "boolean" != typeof c) throw Error("opt_disableCheck must be a boolean if provided");
    if (!c) {
        c = [];
        for (var d in a) void 0 !== this[d] && c.push(d);
        if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
    }
    g.g.object.qj(this, a)
};
b.Zl = function (a, c) {
    var d = null;
    if (a == g.Wa || a == g.jb) d = this.Wm(a);
    a = new g.Mv(a, c, this, d);
    this.R.push(a);
    return a
};

function Lb(a, c, d) {
    if (c != d) {
        for (var e = -1, f = d ? -1 : a.R.length, h = 0, k; k = a.R[h]; h++) if (k.name == c) {
            if (e = h, -1 != f) break
        } else if (d && k.name == d && (f = h, -1 != e)) break;
        if (-1 == e) throw Error('Named input "' + c + '" not found.');
        if (-1 == f) throw Error('Reference input "' + d + '" not found.');
        a.Tt(e, f)
    }
}

b.Tt = function (a, c) {
    if (a == c) throw Error("Can't move input to itself.");
    if (a >= this.R.length) throw RangeError("Input index " + a + " out of bounds.");
    if (c > this.R.length) throw RangeError("Reference input " + c + " out of bounds.");
    var d = this.R[a];
    this.R.splice(a, 1);
    a < c && c--;
    this.R.splice(c, 0, d)
};
b.ib = function (a, c) {
    for (var d = 0, e; e = this.R[d]; d++) if (e.name == a) {
        e.I();
        this.R.splice(d, 1);
        return
    }
    if (!c) throw Error("Input not found: " + a);
};

function B(a, c) {
    for (var d = 0, e; e = a.R[d]; d++) if (e.name == c) return e;
    return null
}

function Mb(a, c) {
    return (a = B(a, c)) && a.connection && z(a.connection)
}

b.Xf = function (a) {
    this.ze.text != a && (g.i.Ka(new g.i.eg(this, "comment", null, this.ze.text, a)), this.vk = this.ze.text = a)
};
b.Xg = function () {
};
b.ei = function () {
};
b.Qa = function () {
    return this.tA
};
b.moveBy = function (a, c) {
    if (this.Rf) throw Error("Block has parent.");
    var d = new g.i.vl(this);
    this.tA.translate(a, c);
    d.zj();
    g.i.Ka(d)
};
b.Wm = function (a) {
    return new g.sa(this, a)
};
g.m = {};
g.m.TI = function () {
};
g.m.Bi = function (a) {
    this.Ij = a;
    this.fl = g.g.o.M("path", {"class": "blocklyPath"}, this.Ij);
    this.Jn = g.g.o.M("path", {"class": "blocklyPathLight"}, this.Ij);
    this.Hn = g.g.o.M("path", {"class": "blocklyPathDark", transform: "translate(1,1)"}, this.Ij)
};
g.m.Bi.prototype.Fu = function (a) {
    this.fl.setAttribute("d", a);
    this.Jn.style.display = "none";
    this.Hn.style.display = "none"
};
g.m.Bi.prototype.Rs = function () {
    this.fl.setAttribute("transform", "scale(-1 1)")
};
g.g.V = {};
g.g.V.BA = "aria-";
g.g.V.nr = "role";
g.g.V.Ci = {
    qH: "alert",
    rH: "alertdialog",
    tH: "application",
    uH: "article",
    AH: "banner",
    DH: "button",
    FH: "checkbox",
    KH: "columnheader",
    LH: "combobox",
    NH: "complementary",
    OH: "contentinfo",
    UH: "definition",
    XH: "dialog",
    YH: "directory",
    $H: "document",
    DI: "form",
    HI: "grid",
    II: "gridcell",
    vB: "group",
    MI: "heading",
    QI: "img",
    ZI: "link",
    $I: "list",
    aJ: "listbox",
    bJ: "listitem",
    dJ: "log",
    jJ: "main",
    kJ: "marquee",
    lJ: "math",
    ZB: "menu",
    nJ: "menubar",
    $B: "menuitem",
    aC: "menuitemcheckbox",
    oJ: "menuitemradio",
    sJ: "navigation",
    vJ: "note",
    QJ: "option",
    lC: "presentation",
    rK: "progressbar",
    uK: "radio",
    vK: "radiogroup",
    xK: "region",
    pr: "row",
    DK: "rowgroup",
    EK: "rowheader",
    GK: "scrollbar",
    IK: "search",
    KK: "separator",
    PK: "slider",
    SK: "spinbutton",
    TK: "status",
    nw: "tab",
    UK: "table",
    VK: "tablist",
    WK: "tabpanel",
    XK: "textbox",
    YK: "textinfo",
    aL: "timer",
    bL: "toolbar",
    cL: "tooltip",
    HC: "tree",
    dL: "treegrid",
    IC: "treeitem"
};
g.g.V.State = {
    ev: "activedescendant",
    vH: "atomic",
    xH: "autocomplete",
    CH: "busy",
    GH: "checked",
    JH: "colindex",
    QH: "controls",
    WH: "describedby",
    ZH: "disabled",
    eI: "dropeffect",
    Nq: "expanded",
    CI: "flowto",
    GI: "grabbed",
    KI: "haspopup",
    NI: "hidden",
    SI: "invalid",
    WI: "label",
    Ov: "labelledby",
    LB: "level",
    cJ: "live",
    pJ: "multiline",
    qJ: "multiselectable",
    hC: "orientation",
    hK: "owns",
    kC: "posinset",
    pK: "pressed",
    wK: "readonly",
    yK: "relevant",
    BK: "required",
    FK: "rowindex",
    Ml: "selected",
    tC: "setsize",
    QK: "sort",
    LC: "valuemax",
    MC: "valuemin",
    gL: "valuenow",
    hL: "valuetext"
};
g.g.V.Yf = function (a, c) {
    c ? a.setAttribute(g.g.V.nr, c) : g.g.V.wG(a)
};
g.g.V.GL = function (a) {
    return a.getAttribute(g.g.V.nr) || null
};
g.g.V.wG = function (a) {
    a.removeAttribute(g.g.V.nr)
};
g.g.V.Gb = function (a, c, d) {
    Array.isArray(d) && (d = d.join(" "));
    a.setAttribute(g.g.V.AE(c), d)
};
g.g.V.AE = function (a) {
    return g.g.V.BA + a
};
g.xi = function () {
    g.uc.call(this);
    this.Og = -1
};
g.g.object.W(g.xi, g.uc);
b = g.xi.prototype;
b.Oa = function () {
    var a = document.createElement("div");
    a.id = this.ua();
    this.hb = a;
    a.className = "goog-menu goog-menu-vertical blocklyNonSelectable";
    a.tabIndex = 0;
    g.g.V.Yf(a, this.Au || g.g.V.Ci.ZB)
};
b.focus = function () {
    var a = this.ta();
    a && (a.focus(), g.g.o.Cb(a, "focused"))
};
b.blur = function () {
    var a = this.ta();
    a && (a.blur(), g.g.o.Fc(a, "focused"))
};
b.Yf = function (a) {
    this.Au = a
};
b.cf = function () {
    g.xi.w.cf.call(this);
    ca(this, function (a) {
        if (a.Yc) {
            var c = a.ta();
            c = c.id || (c.id = a.ua());
            this.tk || (this.tk = {});
            this.tk[c] = a
        }
    }, this);
    this.Nr()
};
b.wh = function () {
    Nb(this, -1);
    g.xi.w.wh.call(this)
};
b.um = function () {
    g.xi.w.um.call(this);
    this.rs()
};
b.Nr = function () {
    var a = this.ta();
    this.IF = g.ma(a, "mouseover", this, this.dF, !0);
    this.CD = g.ma(a, "click", this, this.WE, !0);
    this.FF = g.ma(a, "mouseenter", this, this.aF, !0);
    this.GF = g.ma(a, "mouseleave", this, this.cF, !0);
    this.fu = g.ma(a, "keydown", this, this.ht)
};
b.rs = function () {
    g.$a(this.IF);
    g.$a(this.CD);
    g.$a(this.FF);
    g.$a(this.GF);
    g.$a(this.fu)
};
b.tk = null;

function Ob(a, c) {
    if (a.tk) for (var d = a.ta(); c && c !== d;) {
        var e = c.id;
        if (e in a.tk) return a.tk[e];
        c = c.parentNode
    }
    return null
}

function Pb(a) {
    (a = a.kb[a.Og] || null) && a.Dj(!1)
}

function Nb(a, c) {
    var d = a.kb[c] || null;
    d ? (d.Dj(!0), a.Og = c) : -1 < a.Og && ((a.kb[a.Og] || null).Dj(!1), a.Og = -1);
    d && g.g.style.Bu(d.ta(), a.ta())
}

b.Dj = function (a) {
    Nb(this, this.kb.indexOf(a))
};

function Qb(a) {
    Pb(a);
    Rb(a, function (c, d) {
        return (c + 1) % d
    }, a.Og)
}

function Sb(a) {
    Pb(a);
    Rb(a, function (c, d) {
        c--;
        return 0 > c ? d - 1 : c
    }, a.Og)
}

function Rb(a, c, d) {
    var e = a.kb.length;
    d = c.call(a, 0 > d ? -1 : d, e);
    for (var f = 0; f <= e;) {
        var h = a.kb[d] || null;
        if (h && h.isEnabled()) {
            Nb(a, d);
            break
        }
        f++;
        d = c.call(a, d, e)
    }
}

b.dF = function (a) {
    (a = Ob(this, a.target)) && a.isEnabled() && (this.kb[this.Og] || null) !== a && (Pb(this), this.Dj(a))
};
b.WE = function (a) {
    var c = Ob(this, a.target), d;
    if (d = c) c.isEnabled() && (c.Dj(!0), Tb(c)), d = void 0;
    d && a.preventDefault()
};
b.aF = function () {
    this.focus()
};
b.cF = function () {
    this.ta() && (this.blur(), Pb(this), Nb(this, -1))
};
b.ht = function (a) {
    return 0 != this.kb.length && Ub(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};

function Ub(a, c) {
    var d = a.kb[a.Og] || null;
    if (d && "function" == typeof d.ht && d.ht(c)) return !0;
    if (c.shiftKey || c.ctrlKey || c.metaKey || c.altKey) return !1;
    switch (c.keyCode) {
        case g.g.Ba.Kq:
            d && Tb(d);
            break;
        case g.g.Ba.Sl:
            Sb(a);
            break;
        case g.g.Ba.yl:
            Qb(a);
            break;
        default:
            return !1
    }
    return !0
};g.zo = function (a, c) {
    g.uc.call(this);
    this.Ze = a;
    this.setValue(c);
    this.gp = !0
};
g.g.object.W(g.zo, g.uc);
b = g.zo.prototype;
b.Oa = function () {
    var a = document.createElement("div");
    a.id = this.ua();
    this.hb = a;
    a.className = "goog-menuitem goog-option " + (this.gp ? "" : "goog-menuitem-disabled ") + (this.$r ? "goog-option-selected " : "") + (this.Rk() ? "goog-menuitem-rtl " : "");
    var c = document.createElement("div");
    c.className = "goog-menuitem-content";
    a.appendChild(c);
    if (this.cm) {
        var d = document.createElement("div");
        d.className = "goog-menuitem-checkbox"
    } else d = null;
    d && c.appendChild(d);
    c.appendChild(Vb(this));
    g.g.V.Yf(a, this.Au || (this.cm ? g.g.V.Ci.aC :
        g.g.V.Ci.$B));
    g.g.V.Gb(a, g.g.V.State.Ml, this.cm && this.$r || !1)
};

function Vb(a) {
    a = a.Ze;
    "string" === typeof a && (a = document.createTextNode(a));
    return a
}

b.setValue = function (a) {
    this.cc = a
};
b.getValue = function () {
    return this.cc
};
b.Yf = function (a) {
    this.Au = a
};

function Wb(a, c) {
    if (a.cm) {
        a.$r = c;
        var d = a.ta();
        d && a.isEnabled() && (c ? (g.g.o.Cb(d, "goog-option-selected"), g.g.V.Gb(d, g.g.V.State.Ml, !0)) : (g.g.o.Fc(d, "goog-option-selected"), g.g.V.Gb(d, g.g.V.State.Ml, !1)))
    }
}

b.Dj = function (a) {
    var c = this.ta();
    c && this.isEnabled() && (a ? g.g.o.Cb(c, "goog-menuitem-highlight") : g.g.o.Fc(c, "goog-menuitem-highlight"))
};
b.isEnabled = function () {
    return this.gp
};
b.md = function (a) {
    this.gp = a;
    (a = this.ta()) && (this.gp ? g.g.o.Fc(a, "goog-menuitem-disabled") : g.g.o.Cb(a, "goog-menuitem-disabled"))
};

function Tb(a) {
    a.cm && Wb(a, !a.$r);
    a.Bw && a.Bw.call(a.$C, a)
}

function Xb(a, c, d) {
    a.Bw = c;
    a.$C = d
};g.g.nq = {};
g.g.nq.Kg = function (a) {
    a = a.ta();
    var c = g.g.style.Kg(a);
    c.height = a.scrollHeight;
    return c
};
g.g.nq.bD = function (a, c, d) {
    c.left += d.width;
    c.right += d.width;
    a.left += d.width;
    a.right += d.width
};
g.Ea = {};
g.Ea.Yo = null;
g.Ea.Ix = null;
g.Ea.show = function (a, c, d) {
    g.aa.show(g.Ea, d, null);
    if (c.length) {
        var e = g.Ea.qG(c, d);
        g.Ea.Sf(e, a, d);
        setTimeout(function () {
            e.ta().focus()
        }, 1);
        g.Ea.Yo = null
    } else g.Ea.Ca()
};
g.Ea.qG = function (a, c) {
    var d = new g.xi;
    da(d, c);
    for (var e = 0, f; f = a[e]; e++) {
        var h = new g.zo(f.text);
        da(h, c);
        d.Yl(h, d.kb.length, !0);
        h.md(f.enabled);
        f.enabled && Xb(h, function () {
            g.Ea.Ca();
            this.yb()
        }, f)
    }
    return d
};
g.Ea.Sf = function (a, c, d) {
    var e = g.g.SE();
    c = {top: c.clientY + e.top, bottom: c.clientY + e.top, left: c.clientX + e.left, right: c.clientX + e.left};
    g.Ea.QD(a);
    var f = g.g.nq.Kg(a);
    d && g.g.nq.bD(e, c, f);
    g.aa.rG(e, c, f, d);
    a.ta().focus()
};
g.Ea.QD = function (a) {
    a.za(g.aa.Fa);
    var c = a.ta();
    g.g.o.Cb(c, "blocklyContextMenu");
    g.ma(c, "contextmenu", null, g.g.SF);
    a.focus()
};
g.Ea.Ca = function () {
    g.aa.Hk(g.Ea);
    g.Ea.Yo = null;
    g.Ea.Ix && g.$a(g.Ea.Ix)
};
g.Ea.Oo = function (a, c) {
    return function () {
        g.i.disable();
        try {
            var d = g.U.Wi(c, a.v), e = a.Qa();
            e.x = a.G ? e.x - g.ud : e.x + g.ud;
            e.y += 2 * g.ud;
            d.moveBy(e.x, e.y)
        } finally {
            g.i.enable()
        }
        g.i.isEnabled() && !d.cb && g.i.Ka(new g.i.$n(d));
        d.select()
    }
};
g.Ea.kD = function (a) {
    var c = p(a, !1).length, d = q(a);
    d && (c -= p(d, !1).length);
    return {
        text: 1 == c ? g.h.DELETE_BLOCK : g.h.DELETE_X_BLOCKS.replace("%1", String(c)),
        enabled: !0,
        yb: function () {
            g.i.$(!0);
            a.I(!0, !0);
            g.i.$(!1)
        }
    }
};
g.Ea.mD = function (a) {
    return {
        enabled: !("function" == typeof a.ub ? !a.ub() : !a.ub), text: g.h.HELP, yb: function () {
            var c = "function" == typeof a.ub ? a.ub() : a.ub;
            c && window.open(c)
        }
    }
};
g.Ea.lD = function (a) {
    var c = ab(a.v) ? $a(a.v, g.g.Us(a, !0)) : !0;
    return {
        text: g.h.DUPLICATE_BLOCK, enabled: c, yb: function () {
            g.Fx(a)
        }
    }
};
g.Ea.jD = function (a) {
    var c = {enabled: !g.g.userAgent.lg};
    a.vk ? (c.text = g.h.REMOVE_COMMENT, c.yb = function () {
        a.Xf(null)
    }) : (c.text = g.h.ADD_COMMENT, c.yb = function () {
        a.Xf("")
    });
    return c
};
g.Ea.wL = function (a) {
    return {
        text: g.h.zK, enabled: !0, yb: function () {
            g.i.$(!0);
            a.I(!0, !0);
            g.i.$(!1)
        }
    }
};
g.Ea.xL = function (a) {
    return {
        text: g.h.fI, enabled: !0, yb: function () {
            g.Fx(a)
        }
    }
};
g.Ea.jM = function (a, c) {
    if (!g.mk) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
    var d = {enabled: !g.g.userAgent.lg};
    d.text = g.h.pH;
    d.yb = function () {
        var e = new g.mk(a, g.h.oL, g.mk.cB, g.mk.cB), f = aa(a).getBoundingClientRect();
        f = new g.g.J(c.clientX - f.left, c.clientY - f.top);
        var h = g.g.Fm(a.pb);
        f = g.g.J.tm(f, h);
        f.scale(1 / a.scale);
        e.moveBy(f.x, f.y);
        a.ba && (e.Ie(), e.za(), e.select())
    };
    return d
};
g.rg = function (a, c) {
    g.rg.w.constructor.call(this, a, c);
    this.Hf = a.v.Wo[c];
    this.nx = a.v.Wo[g.fk[c]];
    this.uj = new g.g.J(0, 0);
    this.Gh = !1;
    this.Ey = !this.Hf
};
g.g.object.W(g.rg, g.sa);
b = g.rg.prototype;
b.I = function () {
    g.rg.w.I.call(this);
    this.Gh && Yb(this.Hf, this)
};

function Zb(a, c) {
    var d = a.Wb - c.Wb;
    a = a.ab - c.ab;
    return Math.sqrt(d * d + a * a)
}

function $b(a, c) {
    if (!a.B.v.gc()) {
        var d = I(a.B);
        if (!d.$b) {
            var e = !1;
            if (!d.kd()) {
                d = I(c.B);
                if (!d.kd()) return;
                c = a;
                e = !0
            }
            var f = g.selected == d;
            f || d.Mo();
            var h = c.Wb + g.ud + Math.floor(Math.random() * g.Bq) - a.Wb,
                k = c.ab + g.ud + Math.floor(Math.random() * g.Bq) - a.ab;
            e && (k = -k);
            d.G && (h = c.Wb - g.ud - Math.floor(Math.random() * g.Bq) - a.Wb);
            d.moveBy(h, k);
            f || d.pn()
        }
    }
}

b.moveTo = function (a, c) {
    this.Gh && Yb(this.Hf, this);
    this.Wb = a;
    this.ab = c;
    this.Ey || ac(this.Hf, this)
};
b.moveBy = function (a, c) {
    this.moveTo(this.Wb + a, this.ab + c)
};

function bc(a, c) {
    a.moveTo(c.x + a.uj.x, c.y + a.uj.y)
}

function cc(a, c, d) {
    a.uj.x = c;
    a.uj.y = d
}

function dc(a) {
    var c = a.ca.Wb - a.Wb, d = a.ca.ab - a.ab;
    if (0 != c || 0 != d) {
        a = z(a);
        var e = a.ya();
        if (!e) throw Error("block is not rendered.");
        e = g.g.Fe(e);
        a.ya().setAttribute("transform", "translate(" + (e.x - c) + "," + (e.y - d) + ")");
        Ta(a, -c, -d)
    }
}

b.closest = function (a, c) {
    var d = this.nx;
    if (d.fc.length) {
        var e = this.ab, f = this.Wb;
        this.Wb = f + c.x;
        this.ab = e + c.y;
        var h = ec(d, this);
        c = null;
        for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.fc[m].ab - this.ab) <= a;) l = d.fc[m], this.Bp(l, k) && (c = l, k = Zb(l, this)), m--;
        for (; h < d.fc.length && Math.abs(d.fc[h].ab - this.ab) <= a;) l = d.fc[h], this.Bp(l, k) && (c = l, k = Zb(l, this)), h++;
        this.Wb = f;
        this.ab = e;
        a = {connection: c, Up: k}
    } else a = {connection: null, Up: a};
    return a
};

function Cb(a) {
    Db(a, !1);
    var c = [];
    if (a.type != g.Wa && a.type != g.jb) return c;
    if (a = z(a)) {
        if (a.isCollapsed()) {
            var d = [];
            a.L && d.push(a.L);
            a.X && d.push(a.X);
            a.Y && d.push(a.Y)
        } else d = a.De(!0);
        for (var e = 0; e < d.length; e++) c.push.apply(c, Cb(d[e]));
        c.length || (c[0] = a)
    }
    return c
}

function Db(a, c) {
    (a.Ey = c) && a.Gh ? Yb(a.Hf, a) : c || a.Gh || ac(a.Hf, a)
}

b.Bp = function (a, c) {
    return Zb(this, a) > c ? !1 : g.rg.w.Bp.call(this, a)
};
b.Op = function (a) {
    $b(this, a)
};
b.xs = function (a, c) {
    g.rg.w.xs.call(this, a, c);
    a.ba && a.za();
    c.ba && (la(c), c.za())
};
b.yu = function () {
    var a = this.B, c = this.lf;
    if (a.v && c && g.i.Ec) {
        g.rg.w.yu.call(this);
        c = z(this);
        if (!c) throw Error("Couldn't respawn the shadow block that should exist here.");
        c.Ie();
        c.za(!1);
        a.ba && a.za()
    }
};
b.hz = function (a) {
    return fc(this.nx, this, a)
};
b.Ye = function (a) {
    g.rg.w.Ye.call(this, a);
    var c = this.B;
    a = a.B;
    c.ba && la(c);
    a.ba && la(a);
    c.ba && a.ba && (this.type == g.jb || this.type == g.Se ? a.za() : c.za())
};
b.oz = function () {
    this.isConnected() && !Da(this, this.ca) && (A(F(this) ? z(this) : this.B), this.B.Kb())
};
g.g.Rect = function (a, c, d, e) {
    this.top = a;
    this.bottom = c;
    this.left = d;
    this.right = e
};
g.g.Rect.prototype.contains = function (a, c) {
    return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
};
g.Id = function (a) {
    this.S = a
};
b = g.Id.prototype;
b.Tw = !0;
b.Go = 17;
b.Yb = null;
b.Kk = null;

function gc(a) {
    a.Nd || (a.Nd = g.g.o.M("g", {"class": "blocklyIconGroup"}, null), a.S.$b && g.g.o.Cb(a.Nd, "blocklyIconGroupReadonly"), a.Es(a.Nd), a.S.ya().appendChild(a.Nd), g.ma(a.Nd, "mouseup", a, a.ot), a.$g())
}

b.I = function () {
    g.g.o.removeNode(this.Nd);
    this.Nd = null;
    this.Vb(!1);
    this.S = null
};
b.$g = function () {
};
b.isVisible = function () {
    return !!this.Yb
};
b.ot = function (a) {
    this.S.v.gc() || this.S.$b || g.g.lj(a) || this.Vb(!this.isVisible())
};
b.Pe = function () {
    this.isVisible() && this.Yb.Gc(this.S.qh)
};

function Oa(a, c) {
    a.Kk = c;
    a.isVisible() && (a = a.Yb, a.ec = c, a.uu && db(a))
}

function hc(a) {
    var c = a.S.Qa(), d = g.g.Fe(a.Nd);
    c = new g.g.J(c.x + d.x + a.Go / 2, c.y + d.y + a.Go / 2);
    g.g.J.Ce(a.Kk, c) || Oa(a, c)
};g.Af = function (a) {
    g.Af.w.constructor.call(this, a);
    gc(this);
    this.jl = {}
};
g.g.object.W(g.Af, g.Id);
g.Af.prototype.Tw = !1;
g.Af.prototype.Es = function (a) {
    g.g.o.M("path", {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    g.g.o.M("path", {"class": "blocklyIconSymbol", d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"}, a);
    g.g.o.M("rect", {"class": "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2"}, a)
};
g.Af.TG = function (a) {
    var c = g.g.o.M("text", {"class": "blocklyText blocklyBubbleText", y: g.oa.cd}, null);
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) {
        var e = g.g.o.M("tspan", {dy: "1em", x: g.oa.cd}, c), f = document.createTextNode(a[d]);
        e.appendChild(f)
    }
    return c
};
b = g.Af.prototype;
b.Vb = function (a) {
    a != this.isVisible() && (g.i.Ka(new g.i.vd(this.S, "warningOpen", !a, a)), a ? this.ix() : this.zx())
};
b.ix = function () {
    this.xj = g.Af.TG(this.Tb());
    this.Yb = new g.oa(this.S.v, this.xj, this.S.Sd, this.Kk, null, null);
    fb(this.Yb, this.S.id);
    if (this.S.G) for (var a = this.xj.getBBox().width, c = 0, d; d = this.xj.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", a + g.oa.cd);
    this.Pe()
};
b.zx = function () {
    this.Yb.I();
    this.xj = this.Yb = null
};
b.dl = function (a, c) {
    this.jl[c] != a && (a ? this.jl[c] = a : delete this.jl[c], this.isVisible() && (this.Vb(!1), this.Vb(!0)))
};
b.Tb = function () {
    var a = [], c;
    for (c in this.jl) a.push(this.jl[c]);
    return a.join("\n")
};
b.I = function () {
    this.S.bd = null;
    g.Id.prototype.I.call(this)
};
g.wa = function (a, c, d) {
    this.N = g.g.o.M("g", {}, null);
    this.N.Ln = "";
    this.yj = a.Ug.Zy(this.N);
    this.In = this.yj.Hn || null;
    this.Sd = this.yj.fl || null;
    this.Hj = this.yj.Jn || null;
    this.Sd.pf = this;
    this.ba = !1;
    this.Tn = g.g.gj() && !!a.Zd;
    g.H.qk(this.Sd);
    g.wa.w.constructor.call(this, a, c, d);
    this.N.dataset && (this.N.dataset.id = this.id);
    this.Tc = null
};
g.g.object.W(g.wa, g.Zn);
g.wa.prototype.height = 0;
g.wa.prototype.width = 0;
g.wa.prototype.Ud = null;
g.wa.RI = -1;
g.wa.Cq = "TEMP_COLLAPSED_WARNING_";
g.wa.sC = 10;
g.wa.Yq = 25;
g.wa.tg = 8;
g.wa.sg = !1;
b = g.wa.prototype;
b.Ie = function () {
    if (!this.v.ba) throw TypeError("Workspace is headless.");
    for (var a = 0, c; c = this.R[a]; a++) c.T();
    c = Ma(this);
    for (a = 0; a < c.length; a++) gc(c[a]);
    this.Pe();
    ic(this);
    this.v.options.readOnly || this.qE || g.ma(this.ya(), "mousedown", this, this.Uh);
    this.qE = !0;
    this.ya().parentNode || this.v.pb.appendChild(this.ya())
};
b.select = function () {
    if (this.cb && this.getParent()) this.getParent().select(); else if (g.selected != this) {
        var a = null;
        if (g.selected) {
            a = g.selected.id;
            g.i.disable();
            try {
                kb(g.selected)
            } finally {
                g.i.enable()
            }
        }
        a = new g.i.vd(null, "selected", a, this.id);
        a.tc = this.v.id;
        g.i.Ka(a);
        g.selected = this;
        this.Mo()
    }
};

function kb(a) {
    if (g.selected == a) {
        var c = new g.i.vd(null, "selected", a.id, null);
        c.tc = a.v.id;
        g.i.Ka(c);
        g.selected = null;
        a.pn()
    }
}

b.Od = null;
b.vk = null;
b.Df = null;
b.bd = null;

function Ma(a) {
    var c = [];
    a.Od && c.push(a.Od);
    a.Df && c.push(a.Df);
    a.bd && c.push(a.bd);
    return c
}

b.cl = function (a) {
    var c = this.Rf;
    if (a != c) {
        g.g.o.Dn();
        g.wa.w.cl.call(this, a);
        g.g.o.En();
        var d = this.ya();
        if (!this.v.vt && d) {
            var e = this.Qa();
            a ? (a.ya().appendChild(d), a = this.Qa(), Ta(this, a.x - e.x, a.y - e.y)) : c && (this.v.pb.appendChild(d), this.translate(e.x, e.y))
        }
    }
};
b.Qa = function () {
    var a = 0, c = 0, d = this.Tn ? this.v.Zd.Zb() : null, e = this.ya();
    if (e) {
        do {
            var f = g.g.Fe(e);
            a += f.x;
            c += f.y;
            this.Tn && this.v.Zd.bf.firstChild == e && (f = this.v.Zd.at(), a += f.x, c += f.y);
            e = e.parentNode
        } while (e && e != this.v.pb && e != d)
    }
    return new g.g.J(a, c)
};
b.moveBy = function (a, c) {
    if (this.Rf) throw Error("Block has parent.");
    var d = g.i.isEnabled();
    if (d) var e = new g.i.vl(this);
    var f = this.Qa();
    this.translate(f.x + a, f.y + c);
    Ta(this, a, c);
    d && (e.zj(), g.i.Ka(e));
    ma(this.v)
};
b.translate = function (a, c) {
    this.ya().setAttribute("transform", "translate(" + a + "," + c + ")")
};
b.Ut = function () {
    if (this.Tn) {
        var a = this.Qa();
        this.ya().removeAttribute("transform");
        this.v.Zd.Nj(a.x, a.y);
        ba(this.v.Zd, this.ya())
    }
};
b.moveTo = function (a) {
    var c = this.Qa();
    this.moveBy(a.x - c.x, a.y - c.y)
};
b.St = function (a) {
    this.Tn ? this.v.Zd.Nj(a.x, a.y) : (this.N.Ln = "translate(" + a.x + "," + a.y + ")", this.N.setAttribute("transform", this.N.Ln + this.N.An))
};

function jc(a) {
    if (a.v && !a.v.gc() && !a.getParent() && !a.$b) {
        var c = a.v.He;
        if (c && c.IG) {
            var d = c.Lu, e = d / 2, f = a.Qa();
            c = Math.round((f.x - e) / d) * d + e - f.x;
            d = Math.round((f.y - e) / d) * d + e - f.y;
            c = Math.round(c);
            d = Math.round(d);
            0 == c && 0 == d || a.moveBy(c, d)
        }
    }
}

function kc(a) {
    var c = a.Qa(), d = a.L ? g.wa.tg : 0, e = H(a), f = c.y, h = c.y + e.height;
    a.G ? (a = c.x - (e.width - d), c = c.x + d) : (a = c.x - d, c = c.x + e.width - d);
    return new g.g.Rect(f, h, a, c)
}

b.Xm = function () {
    for (var a = 0, c; c = this.R[a]; a++) c.Xm()
};
b.Wg = function (a) {
    if (this.Bg != a) {
        for (var c = [], d = 0, e; e = this.R[d]; d++) c.push.apply(c, e.Vb(!a));
        if (a) {
            e = Ma(this);
            for (d = 0; d < e.length; d++) e[d].Vb(!1);
            d = this.toString(g.RA);
            L(O(this, "_TEMP_COLLAPSED_INPUT"), d).T();
            e = p(this, !0);
            if (d = q(this)) d = e.indexOf(d), e.splice(d, e.length - d);
            d = 1;
            for (var f; f = e[d]; d++) if (f.bd) {
                this.Xg(g.h.COLLAPSED_WARNINGS_WARNING, g.wa.Cq);
                break
            }
        } else this.ib("_TEMP_COLLAPSED_INPUT"), this.bd && (this.bd.dl("", g.wa.Cq), Object.keys(this.bd.jl).length || this.Xg(null));
        g.wa.w.Wg.call(this, a);
        c.length || (c[0] = this);
        if (this.ba) for (d = 0; f = c[d]; d++) f.za()
    }
};

function lc(a, c, d) {
    for (var e = [], f = 0, h; h = a.R[f]; f++) {
        for (var k = 0, l; l = h.Pa[k]; k++) l.Py() && l.isVisible() && e.push(l);
        h.connection && (h = z(h.connection)) && e.push(h)
    }
    c = e.indexOf(c);
    -1 == c && (c = d ? -1 : e.length);
    (e = e[d ? c + 1 : c - 1]) ? e instanceof g.Na ? e.mf() : lc(e, null, d) : (e = a.getParent()) && lc(e, a, d)
}

b.Uh = function (a) {
    var c = this.v && this.v.zh(a);
    if (c) {
        if (c.bj) throw Error("Tried to call gesture.handleBlockStart, but the gesture had already been started.");
        tb(c, this);
        c.kf = a
    }
};

function mc(a) {
    if (a.v.options.readOnly || !a.contextMenu) return null;
    var c = [];
    if (!a.$b) {
        a.ie() && a.kd() && c.push(g.Ea.lD(a));
        a.v.options.gm && !a.Bg && a.jd() && c.push(g.Ea.jD(a));
        if (a.kd()) if (a.Bg) a.v.options.collapse && (d = {enabled: !0}, d.text = g.h.EXPAND_BLOCK, d.yb = function () {
            a.Wg(!1)
        }, c.push(d)); else {
            for (var d = 1; d < a.R.length; d++) if (a.R[d - 1].type != g.jb && a.R[d].type != g.jb) {
                d = {enabled: !0};
                var e = Ga(a);
                d.text = e ? g.h.EXTERNAL_INPUTS : g.h.INLINE_INPUTS;
                d.yb = function () {
                    a.$c(!e)
                };
                c.push(d);
                break
            }
            a.v.options.collapse &&
            (d = {enabled: !0}, d.text = g.h.COLLAPSE_BLOCK, d.yb = function () {
                a.Wg(!0)
            }, c.push(d))
        }
        a.v.options.disable && a.jd() && (d = {
            text: a.isEnabled() ? g.h.DISABLE_BLOCK : g.h.ENABLE_BLOCK,
            enabled: !Jb(a),
            yb: function () {
                var f = g.i.Zb();
                f || g.i.$(!0);
                a.md(!a.isEnabled());
                f || g.i.$(!1)
            }
        }, c.push(d));
        a.ie() && c.push(g.Ea.kD(a))
    }
    c.push(g.Ea.mD(a));
    a.Eg && a.Eg(c);
    return c
}

b.xn = function (a) {
    var c = mc(this);
    c && c.length && (g.Ea.show(a, c, this.G), g.Ea.Yo = this)
};

function Ta(a, c, d) {
    if (a.ba) {
        for (var e = a.De(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
        e = Ma(a);
        for (f = 0; f < e.length; f++) hc(e[f]);
        for (f = 0; f < a.Ag.length; f++) Ta(a.Ag[f], c, d)
    }
}

b.Bj = function (a) {
    if (a) {
        var c = this.ya();
        c.Ln = "";
        c.An = "";
        g.vm = g.vm.concat(this.De(!0));
        g.g.o.Cb(this.N, "blocklyDragging")
    } else g.vm = [], g.g.o.Fc(this.N, "blocklyDragging");
    for (c = 0; c < this.Ag.length; c++) this.Ag[c].Bj(a)
};

function ic(a) {
    a.kd() ? g.g.o.Cb(a.N, "blocklyDraggable") : g.g.o.Fc(a.N, "blocklyDraggable")
}

b.fq = function (a) {
    g.wa.w.fq.call(this, a);
    ic(this)
};
b.Du = function (a) {
    g.wa.w.Du.call(this, a);
    a = Ma(this);
    for (var c = 0; c < a.length; c++) a[c].$g()
};
b.Hu = function (a) {
    g.wa.w.Hu.call(this, a);
    this.Pe()
};
b.Sz = function (a) {
    this.Rm != a && (this.Rm = a) && (this.Gc(g.DB), g.g.o.Cb(this.N, "blocklyInsertionMarker"))
};
b.ya = function () {
    return this.N
};
b.I = function (a, c) {
    if (this.v) {
        g.H.Ca();
        g.g.o.Dn();
        var d = this.v;
        if (g.selected == this) {
            kb(this);
            var e = this.v;
            e.yc && e.yc.cancel()
        }
        g.Ea.Yo == this && g.Ea.Ca();
        g.Je && g.navigation.gz(this);
        c && this.ba && (A(this, a), g.mb.iE(this));
        this.ba = !1;
        if (this.Ud) {
            for (var f in this.Ud) clearTimeout(this.Ud[f]);
            this.Ud = null
        }
        c = Ma(this);
        for (e = 0; e < c.length; e++) c[e].I();
        g.wa.w.I.call(this, a);
        g.g.o.removeNode(this.N);
        ma(d);
        this.In = this.Hj = this.Sd = this.N = null;
        g.g.o.En()
    }
};
b.Pe = function () {
    if (this.isEnabled()) {
        if (this.cb) {
            var a = Gb(this);
            this.Hj.style.display = "none";
            this.In.setAttribute("fill", a);
            this.Sd.setAttribute("stroke", "none");
            this.Sd.setAttribute("fill", a)
        } else a = Hb(this), a.To ? (this.Hj.style.display = "none", this.In.style.display = "none", this.Sd.setAttribute("stroke", a.To)) : (this.Hj.style.display = "", this.In.style.display = "", this.Sd.setAttribute("stroke", "none"), this.Hj.setAttribute("stroke", a.fs), this.In.setAttribute("fill", a.Uw)), this.Sd.setAttribute("fill", this.qh);
        a = Ma(this);
        for (var c = 0; c < a.length; c++) a[c].Pe();
        for (a = 0; c = this.R[a]; a++) for (var d = 0, e; e = c.Pa[d]; d++) e.Pe()
    }
};

function la(a) {
    !a.isEnabled() || Jb(a) ? g.g.o.Cb(a.N, "blocklyDisabled") && a.Sd.setAttribute("fill", "url(#" + a.v.options.Hg + ")") : g.g.o.Fc(a.N, "blocklyDisabled") && a.Pe();
    a = a.xh(!1);
    for (var c = 0, d; d = a[c]; c++) la(d)
}

b.GE = function () {
    return this.Df
};
b.Xf = function (a) {
    if (!g.Comment) throw Error("Missing require for Blockly.Comment");
    this.ze.text != a && (g.wa.w.Xf.call(this, a), a = null != a, !!this.Df == a ? nc(this.Df) : (a ? this.vk = this.Df = new g.Comment(this) : (this.Df.I(), this.vk = this.Df = null), this.ba && (this.za(), this.Kb())))
};
b.Xg = function (a, c) {
    this.Ud || (this.Ud = Object.create(null));
    var d = c || "";
    if (d) this.Ud[d] && (clearTimeout(this.Ud[d]), delete this.Ud[d]); else for (var e in this.Ud) clearTimeout(this.Ud[e]), delete this.Ud[e];
    if (this.v.gc()) {
        var f = this;
        this.Ud[d] = setTimeout(function () {
            f.v && (delete f.Ud[d], f.Xg(a, d))
        }, 100)
    } else {
        this.$b && (a = null);
        c = Fb(this);
        for (e = null; c;) c.isCollapsed() && (e = c), c = Fb(c);
        e && e.Xg(g.h.COLLAPSED_WARNINGS_WARNING, g.wa.Cq);
        c = !1;
        "string" == typeof a ? (this.bd || (this.bd = new g.Af(this), c = !0), this.bd.dl(a,
            d)) : this.bd && !d ? (this.bd.I(), c = !0) : this.bd && (c = this.bd.Tb(), this.bd.dl("", d), (e = this.bd.Tb()) || this.bd.I(), c = c != e);
        c && this.ba && (this.za(), this.Kb())
    }
};
b.ei = function (a) {
    this.Od && this.Od !== a && this.Od.I();
    a && (a.S = this, this.Od = a, gc(a))
};
b.md = function (a) {
    this.isEnabled() != a && (g.wa.w.md.call(this, a), this.ba && la(this))
};
b.Dj = function (a) {
    this.ba && (a ? (this.Sd.setAttribute("filter", "url(#" + this.v.options.Hx + ")"), this.Hj.style.display = "none") : (this.Sd.setAttribute("filter", "none"), this.Hj.style.display = "inline"))
};
b.Mo = function () {
    g.g.o.Cb(this.N, "blocklySelected")
};
b.pn = function () {
    g.g.o.Fc(this.N, "blocklySelected")
};

function Qa(a, c) {
    c ? g.g.o.Cb(a.N, "blocklyDraggingDelete") : g.g.o.Fc(a.N, "blocklyDraggingDelete")
}

b.Gc = function (a) {
    g.wa.w.Gc.call(this, a);
    this.ba && this.Pe()
};

function Ua(a) {
    do {
        var c = a.ya();
        c.parentNode.appendChild(c);
        a = a.getParent()
    } while (a)
}

b.me = function (a, c) {
    g.wa.w.me.call(this, a, c);
    this.ba && (this.za(), this.Kb())
};
b.le = function (a, c) {
    g.wa.w.le.call(this, a, c);
    this.ba && (this.za(), this.Kb())
};
b.Bd = function (a, c) {
    g.wa.w.Bd.call(this, a, c);
    this.ba && (this.za(), this.Kb())
};
b.$c = function (a) {
    g.wa.w.$c.call(this, a);
    this.ba && (this.za(), this.Kb())
};
b.ib = function (a, c) {
    g.wa.w.ib.call(this, a, c);
    this.ba && (this.za(), this.Kb())
};
b.Tt = function (a, c) {
    g.wa.w.Tt.call(this, a, c);
    this.ba && (this.za(), this.Kb())
};
b.Zl = function (a, c) {
    a = g.wa.w.Zl.call(this, a, c);
    this.ba && (this.za(), this.Kb());
    return a
};

function ka(a, c) {
    if (!c && a.isCollapsed()) {
        if (a.L && Db(a.L, c), a.Y && Db(a.Y, c), a.X) {
            Db(a.X, c);
            var d = z(a.X);
            d && ka(d, c)
        }
    } else {
        a = a.De(!0);
        for (var e = 0; d = a[e]; e++) Db(d, c), F(d) && (d = z(d)) && ka(d, c)
    }
}

b.De = function (a) {
    var c = [];
    if (a || this.ba) if (this.L && c.push(this.L), this.Y && c.push(this.Y), this.X && c.push(this.X), a || !this.Bg) {
        a = 0;
        for (var d; d = this.R[a]; a++) d.connection && c.push(d.connection)
    }
    return c
};
b.Wm = function (a) {
    return new g.rg(this, a)
};
b.Kb = function () {
    if (this.v && !this.v.gc()) {
        var a = I(this);
        if (!a.$b) for (var c = this.De(!1), d = 0, e; e = c[d]; d++) {
            e.isConnected() && F(e) && z(e).Kb();
            for (var f = e.hz(g.ud), h = 0, k; k = f[h]; h++) e.isConnected() && k.isConnected() || I(k.B) != a && (F(e) ? $b(k, e) : $b(e, k))
        }
    }
};

function Va(a) {
    var c = g.i.Zb();
    setTimeout(function () {
        g.i.$(c);
        jc(a);
        g.i.$(!1)
    }, g.Yn / 2);
    setTimeout(function () {
        g.i.$(c);
        a.Kb();
        g.i.$(!1)
    }, g.Yn)
}

b.za = function (a) {
    g.g.o.Dn();
    this.ba = !0;
    this.v.Ug.za(this);
    var c = this.Qa();
    this.Y && bc(this.Y, c);
    this.L && bc(this.L, c);
    for (var d = 0; d < this.R.length; d++) {
        var e = this.R[d].connection;
        e && (bc(e, c), e.isConnected() && dc(e))
    }
    this.X && (bc(this.X, c), this.X.isConnected() && dc(this.X));
    !1 !== a && ((a = this.getParent()) ? a.za(!0) : ma(this.v));
    g.g.o.En()
};
b.vn = function (a) {
    a ? (this.N.appendChild(a), this.Tc = a) : this.Tc = null
};
b.wn = function (a) {
    a && (this.Tc ? this.N.insertBefore(a, this.Tc) : this.N.appendChild(a))
};

function H(a) {
    var c = a.height, d = a.width;
    if (a = q(a)) a = H(a), c += a.height - 4, d = Math.max(d, a.width);
    return {height: c, width: d}
}

function La(a, c) {
    c ? g.g.o.Cb(a.N, "blocklyReplaceable") : g.g.o.Fc(a.N, "blocklyReplaceable")
};g.m.al = {};
g.m.Sn = !1;
g.m.register = function (a, c) {
    if (g.m.al[a]) throw Error("Renderer has already been registered.");
    g.m.al[a] = c
};
g.m.unregister = function (a) {
    g.m.al[a] ? delete g.m.al[a] : console.warn('No renderer mapping for name "' + a + '" found to unregister')
};
g.m.dM = function () {
    g.m.Sn = !0
};
g.m.eM = function () {
    g.m.Sn = !1
};
g.m.T = function (a) {
    function c() {
        c.w.constructor.call(this)
    }

    if (!g.m.al[a]) throw Error("Renderer not registered: ", a);
    g.g.object.W(c, g.m.al[a]);
    a = new c;
    a.T();
    return a
};
g.Zj = function () {
    this.fc = []
};

function ac(a, c) {
    if (c.Gh) throw Error("Connection already in database.");
    c.B.$b || (a.fc.splice(ec(a, c), 0, c), c.Gh = !0)
}

function oc(a, c) {
    if (!a.fc.length) return -1;
    var d = ec(a, c);
    if (d >= a.fc.length) return -1;
    for (var e = c.ab, f = d; 0 <= f && a.fc[f].ab == e;) {
        if (a.fc[f] == c) return f;
        f--
    }
    for (; d < a.fc.length && a.fc[d].ab == e;) {
        if (a.fc[d] == c) return d;
        d++
    }
    return -1
}

function ec(a, c) {
    if (!a.fc.length) return 0;
    for (var d = 0, e = a.fc.length; d < e;) {
        var f = Math.floor((d + e) / 2);
        if (a.fc[f].ab < c.ab) d = f + 1; else if (a.fc[f].ab > c.ab) e = f; else {
            d = f;
            break
        }
    }
    return d
}

function Yb(a, c) {
    if (!c.Gh) throw Error("Connection not in database.");
    var d = oc(a, c);
    if (-1 == d) throw Error("Unable to find connection in connectionDB.");
    c.Gh = !1;
    a.fc.splice(d, 1)
}

function fc(a, c, d) {
    function e(n) {
        var r = h - f[n].Wb, t = k - f[n].ab;
        Math.sqrt(r * r + t * t) <= d && m.push(f[n]);
        return t < d
    }

    var f = a.fc, h = c.Wb, k = c.ab;
    a = 0;
    for (var l = c = f.length - 2; a < l;) f[l].ab < k ? a = l : c = l, l = Math.floor((a + c) / 2);
    var m = [];
    c = a = l;
    if (f.length) {
        for (; 0 <= a && e(a);) a--;
        do c++; while (c < f.length && e(c))
    }
    return m
}

g.Zj.T = function () {
    var a = [];
    a[g.Wa] = new g.Zj;
    a[g.Re] = new g.Zj;
    a[g.jb] = new g.Zj;
    a[g.Se] = new g.Zj;
    return a
};
g.Yd = function (a, c) {
    g.Yd.w.constructor.call(this, a, c);
    this.Fp = !1;
    this.ye = {};
    this.Yz = this.kn = 0;
    this.gu = null
};
g.g.object.W(g.Yd, g.$j);
g.Yd.WC = 5;
g.Yd.XC = 6;
b = g.Yd.prototype;
b.As = function (a) {
    g.Yd.w.As.call(this, a);
    !this.Dp && g.Touch.Ip(a) && pc(this, a)
};
b.qk = function (a) {
    this.gu = g.ma(document, "mousedown", null, this.fF.bind(this), !0);
    this.Pp = g.ma(document, "mousemove", null, this.Im.bind(this), !0);
    this.Qp = g.ma(document, "mouseup", null, this.up.bind(this), !0);
    a.preventDefault();
    a.stopPropagation()
};
b.fF = function (a) {
    !this.gc() && g.Touch.Ip(a) && (pc(this, a), this.Fp && g.Ph())
};
b.Im = function (a) {
    if (this.gc()) g.Touch.Ku(a) && g.Yd.w.Im.call(this, a); else if (this.Fp) {
        if (g.Touch.Ip(a)) {
            this.ye[g.Touch.tp(a)] = qc(this, a);
            var c = Object.keys(this.ye);
            if (2 == c.length) {
                c = g.g.J.ep(this.ye[c[0]], this.ye[c[1]]) / this.Yz;
                if (0 < this.kn && Infinity > this.kn) {
                    var d = c - this.kn;
                    d = 0 < d ? d * g.Yd.WC : d * g.Yd.XC;
                    var e = this.qc, f = g.g.cn(a, x(e), Aa(e));
                    e.zoom(f.x, f.y, d)
                }
                this.kn = c;
                a.preventDefault()
            }
        }
        g.Ph()
    } else g.Yd.w.Im.call(this, a)
};
b.up = function (a) {
    if (g.Touch.Ip(a) && !this.gc()) {
        var c = g.Touch.tp(a);
        this.ye[c] && delete this.ye[c];
        2 > Object.keys(this.ye).length && (this.ye = {}, this.kn = 0)
    }
    !this.Fp || this.gc() ? g.Touch.Ku(a) && g.Yd.w.up.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.I())
};
b.I = function () {
    g.Yd.w.I.call(this);
    this.gu && g.$a(this.gu)
};

function pc(a, c) {
    a.ye[g.Touch.tp(c)] = qc(a, c);
    var d = Object.keys(a.ye);
    2 == d.length && (a.Yz = g.g.J.ep(a.ye[d[0]], a.ye[d[1]]), a.Fp = !0, c.preventDefault())
}

function qc(a, c) {
    return a.qc ? new g.g.J(c.pageX ? c.pageX : c.changedTouches[0].pageX, c.pageY ? c.pageY : c.changedTouches[0].pageY) : null
};g.xw = function (a) {
    this.lu = a;
    this.Nl = Object.create(null)
};
b = g.xw.prototype;
b.Ct = null;
b.I = function () {
    this.Nl = this.lu = null
};
b.load = function (a, c) {
    if (a.length) {
        try {
            var d = new g.g.global.Audio
        } catch (l) {
            return
        }
        for (var e, f = 0; f < a.length; f++) {
            var h = a[f], k = h.match(/\.(\w+)$/);
            if (k && d.canPlayType("audio/" + k[1])) {
                e = new g.g.global.Audio(h);
                break
            }
        }
        e && e.play && (this.Nl[c] = e)
    }
};
b.preload = function () {
    for (var a in this.Nl) {
        var c = this.Nl[a];
        c.volume = .01;
        var d = c.play();
        void 0 !== d ? d.then(c.pause).catch(function () {
        }) : c.pause();
        if (g.g.userAgent.ng || g.g.userAgent.Rq) break
    }
};
b.play = function (a, c) {
    var d = this.Nl[a];
    d ? (a = new Date, null != this.Ct && a - this.Ct < g.wC || (this.Ct = a, d = g.g.userAgent.ng || g.g.userAgent.li ? d : d.cloneNode(), d.volume = void 0 === c ? 1 : c, d.play())) : this.lu && this.lu.mh.play(a, c)
};
g.lb = function (a, c, d) {
    g.lb.w.constructor.call(this, a);
    this.Vc = a.Vc || g.lb.RE;
    this.di = a.di || g.lb.FG;
    this.Wo = g.Zj.T();
    c && (this.Zd = c);
    d && (this.Tj = d);
    this.qq = this.Tj && g.g.gj();
    this.mh = new g.xw(a.Nb);
    this.He = this.options.ty ? new g.ui(a.ty, a.sy) : null;
    this.Tc = null;
    g.O && g.O.Zi && rc(this, g.sw, g.O.Zi);
    g.ww && g.ww.Zi && rc(this, g.NC, g.ww.Zi);
    g.Ga && g.Ga.Zi && rc(this, g.bw, g.Ga.Zi);
    this.Ug = g.m.T(this.options.Tg || "geras")
};
g.g.object.W(g.lb, g.Ib);
b = g.lb.prototype;
b.aq = null;
b.ba = !0;
b.Nh = !0;
b.je = !1;
b.kj = !1;
b.xu = !0;
b.scrollX = 0;
b.scrollY = 0;
b.Ex = null;
b.scale = 1;
b.ad = null;
b.Ub = null;
b.P = null;
b.ra = null;
b.yc = null;
b.Zd = null;
b.Tj = null;
b.qq = !1;
b.Cp = !1;
b.tt = null;
b.Sy = null;
b.Nx = {};
b.Tu = {};
b.Yw = null;
b.Jj = null;
b.Ly = null;
b.ut = !0;
b.Cu = function (a) {
    this.Xa && this.Xa.zc && this.Xa.zc.I();
    if (this.Xa = a) this.Xa.zc = new g.Aa(this, !1), this.vn(this.Xa.zc.Oa())
};
b.Tz = function (a) {
    this.ac && this.ac.zc && this.ac.zc.I();
    if (this.ac = a) this.ac.zc = new g.Aa(this, !0), this.wn(this.ac.zc.Oa())
};
b.vn = function (a) {
    a ? this.pb && (this.pb.appendChild(a), this.Tc = a) : this.Tc = null
};
b.wn = function (a) {
    a && this.pb && (this.Tc ? this.pb.insertBefore(a, this.Tc) : this.pb.appendChild(a))
};

function Aa(a) {
    if (a.ut) {
        var c = x(a).getScreenCTM();
        c && (a.Ly = c.inverse(), a.ut = !1)
    }
    return a.Ly
}

b.Pn = function () {
    this.ut = !0
};
b.isVisible = function () {
    return this.Nh
};

function Ha(a, c) {
    var d = 0, e = 0, f = 1;
    if (g.g.o.containsNode(a.pb, c) || g.g.o.containsNode(a.Yg, c)) f = a.scale;
    do {
        var h = g.g.Fe(c);
        if (c == a.pb || c == a.Yg) f = 1;
        d += h.x * f;
        e += h.y * f;
        c = c.parentNode
    } while (c && c != x(a));
    return new g.g.J(d, e)
}

function aa(a) {
    if (!a.tt) for (var c = a.N; c;) {
        if (-1 != (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
            a.tt = c;
            break
        }
        c = c.parentNode
    }
    return a.tt
}

b.Oa = function (a) {
    this.N = g.g.o.M("g", {"class": "blocklyWorkspace"}, null);
    a && (this.Ic = g.g.o.M("rect", {
        height: "100%",
        width: "100%",
        "class": a
    }, this.N), "blocklyMainBackground" == a && this.He ? this.Ic.style.fill = "url(#" + this.He.Ek.id + ")" : this.jc.subscribe(this.Ic, "workspace", "fill"));
    this.pb = g.g.o.M("g", {"class": "blocklyBlockCanvas"}, this.N);
    this.Yg = g.g.o.M("g", {"class": "blocklyBubbleCanvas"}, this.N);
    this.je || (g.ma(this.N, "mousedown", this, this.Uh, !1, !0), g.ma(this.N, "wheel", this, this.lG));
    if (this.options.wy) {
        if (!g.Gi) throw Error("Missing require for Blockly.Toolbox");
        this.ra = new g.Gi(this)
    }
    this.He && this.He.update(this.scale);
    sc(this);
    this.Xa.zc = new g.Aa(this, !1);
    a = this.Xa.zc.Oa();
    this.N.appendChild(a);
    this.ac.zc = new g.Aa(this, !0);
    a = this.ac.zc.Oa();
    this.N.appendChild(a);
    return this.N
};
b.I = function () {
    this.ba = !1;
    this.yc && this.yc.cancel();
    this.N && (g.g.o.removeNode(this.N), this.N = null);
    this.Yg = this.pb = null;
    this.ra && (this.ra.I(), this.ra = null);
    this.P && (this.P.I(), this.P = null);
    this.ad && (this.ad.I(), this.ad = null);
    this.Ub && (this.Ub.I(), this.Ub = null);
    this.Uj && (this.Uj.I(), this.Uj = null);
    this.ac && this.ac.zc.I();
    this.Xa && this.Xa.zc.I();
    this.mh && (this.mh.I(), this.mh = null);
    this.He && (this.He.I(), this.He = null);
    this.jc && this.jc.unsubscribe(this.Ic);
    g.lb.w.I.call(this);
    this.Nx = this.Tu = this.Wo = null;
    if (!this.options.Nb) {
        var a = x(this).parentNode;
        a && g.g.o.removeNode(a)
    }
    this.aq && (g.$a(this.aq), this.aq = null)
};
b.Rh = function (a, c) {
    return new g.wa(this, a, c)
};

function tc(a) {
    if (!g.Br) throw Error("Missing require for Blockly.Trashcan");
    a.ad = new g.Br(a);
    var c = a.ad.Oa();
    a.N.insertBefore(c, a.pb)
}

function uc(a) {
    if (!g.YC) throw Error("Missing require for Blockly.ZoomControls");
    a.Uj = new g.YC(a);
    var c = a.Uj.Oa();
    a.N.appendChild(c)
}

function vc(a, c) {
    var d = {Hg: a.options.Hg, Nb: a, G: a.G, Le: a.options.Le, ge: a.ge, Ia: a.options.Ia, Tg: a.options.Tg};
    if (a.ge) {
        if (!g.Dl) throw Error("Missing require for Blockly.HorizontalFlyout");
        a.P = new g.Dl(d)
    } else {
        if (!g.xg) throw Error("Missing require for Blockly.VerticalFlyout");
        a.P = new g.xg(d)
    }
    a.P.pk = !1;
    return a.P.Oa(c)
}

function wc(a) {
    return a.P ? a.P : a.ra ? a.ra.P : null
}

function ma(a) {
    if (a.xu && a.ba) {
        if (a.Ub) {
            var c = a.Vc();
            va(a.Ub.fe, c);
            xa(a.Ub.pe, c)
        }
        a.Pn()
    }
}

b.resize = function () {
    this.ra && this.ra.position();
    this.P && this.P.position();
    this.ad && this.ad.position();
    this.Uj && this.Uj.position();
    this.Ub && this.Ub.resize();
    this.Pn();
    sc(this)
};

function nb(a) {
    var c = g.g.LE();
    g.g.J.Ce(a.Sy, c) || (a.Sy = c, a.Pn(), sc(a))
}

function x(a) {
    if (a.Iw) return a.Iw;
    for (var c = a.N; c;) {
        if ("svg" == c.tagName) return a.Iw = c;
        c = c.parentNode
    }
    return null
}

b.translate = function (a, c) {
    if (this.qq && this.Cp) this.Tj.Nj(a, c); else {
        var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
        this.pb.setAttribute("transform", d);
        this.Yg.setAttribute("transform", d)
    }
    if (this.Zd) {
        d = this.Zd;
        var e = this.scale;
        d.ci = e;
        d.bf.setAttribute("transform", "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")")
    }
    this.He && this.He.moveTo(a, c)
};

function Ca(a) {
    if (a.qq) {
        a.Cp = !1;
        var c = a.Tj.at();
        a.Tj.Qo(a.N);
        c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
        a.pb.setAttribute("transform", c);
        a.Yg.setAttribute("transform", c)
    }
}

function Ba(a) {
    if (a.qq && !a.Cp) {
        a.Cp = !0;
        var c = a.pb.previousSibling, d = parseInt(x(a).getAttribute("width"), 10),
            e = parseInt(x(a).getAttribute("height"), 10), f = g.g.Fe(a.pb), h = a.Tj, k = a.pb, l = a.Yg, m = a.scale;
        if (h.tb.childNodes.length) throw Error("Already dragging a block.");
        h.Zk = c;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.tb.setAttribute("width", d);
        h.tb.setAttribute("height", e);
        h.tb.appendChild(k);
        h.tb.appendChild(l);
        h.tb.style.display =
            "block";
        a.Tj.Nj(f.x, f.y)
    }
}

b.Nf = function () {
    var a = this.Vc();
    return a ? a.Bb / this.scale : 0
};
b.Vb = function (a) {
    this.Ub && this.Ub.Aj(a);
    wc(this) && wc(this).Aj(a);
    x(this).style.display = a ? "block" : "none";
    this.ra && (this.ra.vc.style.display = a ? "block" : "none");
    if (a) {
        for (var c = K(this, !1), d = c.length - 1; 0 <= d; d--) c[d].Xm();
        this.za();
        this.ra && this.ra.position()
    } else g.oc(!0);
    this.Nh = a
};
b.za = function () {
    for (var a = K(this, !1), c = a.length - 1; 0 <= c; c--) a[c].za(!1);
    if (this.yc) for (a = this.yc.Dk(), c = 0; c < a.length; c++) a[c].za(!1)
};

function xc(a) {
    var c = g.em;
    if (a.ba && !(c.getElementsByTagName("block").length >= Za(a))) if (a.yc && a.yc.cancel(), "comment" == c.tagName.toLowerCase()) {
        g.i.disable();
        try {
            var d = g.mk.Bm(c), e = parseInt(c.getAttribute("x"), 10), f = parseInt(c.getAttribute("y"), 10);
            isNaN(e) || isNaN(f) || (a.G && (e = -e), d.moveBy(e + 50, f + 50))
        } finally {
            g.i.enable()
        }
        d.select()
    } else a:{
        g.i.disable();
        try {
            var h = g.U.Wi(c, a), k = a.ac.Sb;
            if (g.Je && k) {
                g.navigation.Jy(h, k.qa);
                break a
            }
            var l = parseInt(c.getAttribute("x"), 10), m = parseInt(c.getAttribute("y"),
                10);
            if (!isNaN(l) && !isNaN(m)) {
                a.G && (l = -l);
                do {
                    c = !1;
                    var n = K(a, !1);
                    d = 0;
                    for (var r; r = n[d]; d++) {
                        var t = r.Qa();
                        if (1 >= Math.abs(l - t.x) && 1 >= Math.abs(m - t.y)) {
                            c = !0;
                            break
                        }
                    }
                    if (!c) {
                        var w = h.De(!1);
                        d = 0;
                        for (var E; E = w[d]; d++) if (E.closest(g.ud, new g.g.J(l, m)).connection) {
                            c = !0;
                            break
                        }
                    }
                    c && (l = a.G ? l - g.ud : l + g.ud, m += 2 * g.ud)
                } while (c);
                h.moveBy(l, m)
            }
        } finally {
            g.i.enable()
        }
        g.i.isEnabled() && !h.cb && g.i.Ka(new g.i.$n(h));
        h.select()
    }
}

function yc(a) {
    if ((a = a.je ? a.Jj : a) && !a.yc && a.ra && a.ra.P) {
        a = a.ra;
        var c = a.Cd.Qd;
        c && c.Bf && a.P.show(c.Bf)
    }
}

b.bi = function (a, c) {
    g.lb.w.bi.call(this, a, c);
    yc(this)
};
b.If = function (a) {
    g.lb.w.If.call(this, a);
    yc(this)
};
b.Ld = function (a, c, d) {
    a = g.lb.w.Ld.call(this, a, c, d);
    yc(this);
    return a
};

function sc(a) {
    a.tx = a.ad && a.N.parentNode ? a.ad.Dm() : null;
    a.sx = a.P ? a.P.Dm() : a.ra ? a.ra.Dm() : null
}

function Pa(a, c) {
    return a.tx && a.tx.contains(c.clientX, c.clientY) ? g.Iq : a.sx && a.sx.contains(c.clientX, c.clientY) ? g.zv : g.yv
}

b.Uh = function (a) {
    var c = this.zh(a);
    c && rb(c, a, this)
};
b.Nu = function (a, c) {
    a = g.g.cn(a, x(this), Aa(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.Ex = g.g.J.tm(c, a)
};
b.gc = function () {
    return null != this.yc && this.yc.gc()
};

function zc(a) {
    return a.options.Cc && a.options.Cc.scrollbars || a.options.Cc && a.options.Cc.Sj || a.options.Cc && a.options.Cc.vh || a.options.Hb && a.options.Hb.controls || a.options.Hb && a.options.Hb.Sj
}

b.kd = function () {
    return this.options.Cc && this.options.Cc.scrollbars || this.options.Cc && this.options.Cc.Sj || this.options.Cc && this.options.Cc.vh || this.options.Hb && this.options.Hb.Sj
};
b.lG = function (a) {
    if (g.$j.qt()) a.preventDefault(), a.stopPropagation(); else {
        var c = this.options.Hb && this.options.Hb.Sj, d = this.options.Cc && this.options.Cc.Sj;
        if (c || d) {
            var e = g.g.gy(a);
            !c || !a.ctrlKey && d ? (c = this.scrollX - e.x, d = this.scrollY - e.y, a.shiftKey && !e.x && (c = this.scrollX - e.y, d = this.scrollY), this.scroll(c, d)) : (e = -e.y / 50, c = g.g.cn(a, x(this), Aa(this)), this.zoom(c.x, c.y, e));
            a.preventDefault()
        }
    }
};

function ja(a) {
    var c = D(a, !1);
    a = ia(a, !1);
    c = c.concat(a);
    if (!c.length) return new g.g.Rect(0, 0, 0, 0);
    a = kc(c[0]);
    for (var d = 1; d < c.length; d++) {
        var e = kc(c[d]);
        e.top < a.top && (a.top = e.top);
        e.bottom > a.bottom && (a.bottom = e.bottom);
        e.left < a.left && (a.left = e.left);
        e.right > a.right && (a.right = e.right)
    }
    return a
}

b.zD = function () {
    this.Hc(!1);
    g.i.$(!0);
    for (var a = D(this, !0), c = 0, d = 0, e; e = a[d]; d++) if (e.kd()) {
        var f = e.Qa();
        e.moveBy(-f.x, c - f.y);
        jc(e);
        c = e.Qa().y + H(e).height + g.wa.Yq
    }
    g.i.$(!1);
    this.Hc(!0)
};
b.xn = function (a) {
    function c(E) {
        if (E.ie()) w = w.concat(p(E, !1)); else {
            E = E.xh(!1);
            for (var S = 0; S < E.length; S++) c(E[S])
        }
    }

    function d() {
        g.i.$(h);
        var E = w.shift();
        E && (E.v ? (E.I(!1, !0), setTimeout(d, 10)) : d());
        g.i.$(!1)
    }

    if (!this.options.readOnly && !this.je) {
        var e = [], f = D(this, !0), h = g.g.Ig(), k = this, l = {};
        l.text = g.h.UNDO;
        l.enabled = 0 < this.Oj.length;
        l.yb = this.Wu.bind(this, !1);
        e.push(l);
        l = {};
        l.text = g.h.REDO;
        l.enabled = 0 < this.mn.length;
        l.yb = this.Wu.bind(this, !0);
        e.push(l);
        this.kd() && (l = {}, l.text = g.h.CLEAN_UP, l.enabled = 1 < f.length,
            l.yb = this.zD.bind(this), e.push(l));
        if (this.options.collapse) {
            for (var m = l = !1, n = 0; n < f.length; n++) for (var r = f[n]; r;) r.isCollapsed() ? l = !0 : m = !0, r = q(r);
            var t = function (E) {
                for (var S = 0, Z = 0; Z < f.length; Z++) for (var za = f[Z]; za;) setTimeout(za.Wg.bind(za, E), S), za = q(za), S += 10
            };
            m = {enabled: m};
            m.text = g.h.COLLAPSE_ALL;
            m.yb = function () {
                t(!0)
            };
            e.push(m);
            l = {enabled: l};
            l.text = g.h.EXPAND_ALL;
            l.yb = function () {
                t(!1)
            };
            e.push(l)
        }
        var w = [];
        for (n = 0; n < f.length; n++) c(f[n]);
        l = {
            text: 1 == w.length ? g.h.DELETE_BLOCK : g.h.DELETE_X_BLOCKS.replace("%1",
                String(w.length)), enabled: 0 < w.length, yb: function () {
                k.yc && k.yc.cancel();
                2 > w.length ? d() : g.confirm(g.h.DELETE_ALL_BLOCKS.replace("%1", w.length), function (E) {
                    E && d()
                })
            }
        };
        e.push(l);
        this.Yw && this.Yw(e);
        g.Ea.show(a, e, this.G)
    }
};

function ya(a) {
    if (a.options.Nb) ya(a.options.Nb); else {
        g.Vm = a;
        document.activeElement && document.activeElement.blur();
        try {
            x(a).focus()
        } catch (c) {
            try {
                x(a).parentNode.setActive()
            } catch (d) {
                x(a).parentNode.focus()
            }
        }
    }
}

b.zoom = function (a, c, d) {
    if (!this.je && !this.kj) {
        d = Math.pow(this.options.Hb.zG, d);
        var e = this.scale * d;
        if (this.scale != e) {
            e > this.options.Hb.Ym ? d = this.options.Hb.Ym / this.scale : e < this.options.Hb.$m && (d = this.options.Hb.$m / this.scale);
            var f = this.pb.getCTM(), h = x(this).createSVGPoint();
            h.x = a;
            h.y = c;
            h = h.matrixTransform(f.inverse());
            a = h.x;
            c = h.y;
            f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
            this.scrollX = f.e;
            this.scrollY = f.f;
            this.setScale(e)
        }
    }
};
b.setScale = function (a) {
    this.options.Hb.Ym && a > this.options.Hb.Ym ? a = this.options.Hb.Ym : this.options.Hb.$m && a < this.options.Hb.$m && (a = this.options.Hb.$m);
    this.scale = a;
    g.oc(!1);
    this.P && (this.P.su(), sc(this));
    this.He && this.He.update(this.scale);
    a = this.Vc();
    this.scrollX -= a.Qc;
    this.scrollY -= a.fd;
    a.dc += a.Qc;
    a.lc += a.fd;
    this.scroll(this.scrollX, this.scrollY);
    this.Ub && (this.P ? (sa(this.Ub.fe, a), ta(this.Ub.pe, a)) : (va(this.Ub.fe, a), xa(this.Ub.pe, a)))
};
b.scroll = function (a, c) {
    g.oc(!0);
    var d = this.Vc(), e = d.Ff + d.Sc - d.Bb, f = d.ae + d.xc - d.Pb;
    a = Math.min(a, -d.Sc);
    c = Math.min(c, -d.xc);
    a = Math.max(a, -e);
    c = Math.max(c, -f);
    this.scrollX = a;
    this.scrollY = c;
    this.Ub && (oa(this.Ub.fe, -(a + d.Sc) * this.Ub.fe.Dc), oa(this.Ub.pe, -(c + d.xc) * this.Ub.pe.Dc));
    a += d.Qc;
    c += d.fd;
    this.translate(a, c)
};
g.lb.Yx = function (a) {
    var c = 0, d = 0;
    a && (c = a.Nf(), d = a.$x());
    return {width: c, height: d}
};
g.lb.JE = function (a, c) {
    return zc(a) ? g.lb.IE(a, c) : g.lb.Vx(a)
};
g.lb.Vx = function (a) {
    var c = ja(a), d = a.scale;
    a = c.top * d;
    var e = c.bottom * d, f = c.left * d;
    c = c.right * d;
    return {top: a, bottom: e, left: f, right: c, width: c - f, height: e - a}
};
g.lb.IE = function (a, c) {
    a = g.lb.Vx(a);
    var d = c.width;
    c = c.height;
    var e = d / 2, f = c / 2, h = Math.min(a.left - e, a.right - d), k = Math.min(a.top - f, a.bottom - c);
    return {
        left: h,
        top: k,
        height: Math.max(a.bottom + f, a.top + c) - k,
        width: Math.max(a.right + e, a.left + d) - h
    }
};
g.lb.RE = function () {
    var a = g.lb.Yx(this.ra), c = g.lb.Yx(this.P), d = g.bA(x(this)), e = {height: d.height, width: d.width};
    if (this.ra) if (this.Ia == g.vg || this.Ia == g.kk) e.height -= a.height; else {
        if (this.Ia == g.Xd || this.Ia == g.ug) e.width -= a.width
    } else if (this.P) if (this.Ia == g.vg || this.Ia == g.kk) e.height -= c.height; else if (this.Ia == g.Xd || this.Ia == g.ug) e.width -= c.width;
    var f = g.lb.JE(this, e), h = 0;
    this.ra && this.Ia == g.Xd ? h = a.width : this.P && this.Ia == g.Xd && (h = c.width);
    var k = 0;
    this.ra && this.Ia == g.vg ? k = a.height : this.P && this.Ia == g.vg &&
        (k = c.height);
    return {
        ae: f.height,
        Ff: f.width,
        xc: f.top,
        Sc: f.left,
        Pb: e.height,
        Bb: e.width,
        lc: -this.scrollY,
        dc: -this.scrollX,
        fd: k,
        Qc: h,
        gM: d.height,
        hM: d.width,
        eA: a.width,
        iM: a.height,
        CL: c.width,
        BL: c.height,
        Ia: this.Ia
    }
};
g.lb.FG = function (a) {
    var c = this.Vc();
    "number" == typeof a.x && (this.scrollX = -c.Ff * a.x - c.Sc);
    "number" == typeof a.y && (this.scrollY = -c.ae * a.y - c.xc);
    this.translate(this.scrollX + c.Qc, this.scrollY + c.fd)
};
g.lb.prototype.Hc = function (a) {
    var c = !this.xu && a;
    this.xu = a;
    c && ma(this)
};
g.lb.prototype.clear = function () {
    this.Hc(!1);
    g.lb.w.clear.call(this);
    this.Hc(!0)
};

function Ac(a, c) {
    if ("function" != typeof c) throw TypeError("Button callbacks must be functions.");
    a.Nx.CREATE_VARIABLE = c
}

function rc(a, c, d) {
    if ("function" != typeof d) throw TypeError("Toolbox category callbacks must be functions.");
    a.Tu[c] = d
}

g.lb.prototype.zh = function (a) {
    var c = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type, d = this.yc;
    return d ? c && d.bj ? (console.warn("Tried to start the same gesture twice."), d.cancel(), null) : d : c ? this.yc = new g.Yd(a, this) : null
};
g.ej = function (a, c) {
    g.uD();
    "string" == typeof a && (a = document.getElementById(a) || document.querySelector(a));
    if (!g.g.o.containsNode(document, a)) throw Error("Error: container is not in current document.");
    c = new g.ve(c || {});
    var d = document.createElement("div");
    d.className = "injectionDiv";
    a.appendChild(d);
    a = g.lm(d, c);
    var e = new g.qv(d);
    d = new g.yw(d);
    d = g.ND(a, c, e, d);
    g.qb.ob.EG(c.ob);
    g.oF(d);
    g.Vm = d;
    g.hl(d);
    return d
};
g.lm = function (a, c) {
    a.setAttribute("dir", "LTR");
    g.uc.px = c.G;
    g.Ed.ej(c.gF, c.Yh);
    a = g.g.o.M("svg", {
        xmlns: g.g.o.Pl,
        "xmlns:html": g.g.o.wi,
        "xmlns:xlink": g.g.o.Ji,
        version: "1.1",
        "class": "blocklySvg"
    }, a);
    var d = g.g.o.M("defs", {}, a), e = String(Math.random()).substring(2),
        f = g.g.o.M("filter", {id: "blocklyEmbossFilter" + e}, d);
    g.g.o.M("feGaussianBlur", {"in": "SourceAlpha", stdDeviation: 1, result: "blur"}, f);
    var h = g.g.o.M("feSpecularLighting", {
        "in": "blur", surfaceScale: 1, specularConstant: .5, specularExponent: 10, "lighting-color": "white",
        result: "specOut"
    }, f);
    g.g.o.M("fePointLight", {x: -5E3, y: -1E4, z: 2E4}, h);
    g.g.o.M("feComposite", {"in": "specOut", in2: "SourceAlpha", operator: "in", result: "specOut"}, f);
    g.g.o.M("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    c.Hx = f.id;
    f = g.g.o.M("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, d);
    g.g.o.M("rect", {width: 10, height: 10, fill: "#aaa"}, f);
    g.g.o.M("path", {d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0"}, f);
    c.Hg = f.id;
    c.ty = g.ui.Oa(e, c.sy, d);
    return a
};
g.ND = function (a, c, d, e) {
    c.Nb = null;
    var f = new g.lb(c, d, e);
    f.scale = c.Hb.OG;
    a.appendChild(f.Oa("blocklyMainBackground"));
    !c.wy && c.Sk && (d = vc(f, "svg"), g.g.o.fj(d, a));
    c.Ay && tc(f);
    c.Hb && c.Hb.controls && uc(f);
    f.jc.subscribe(a, "workspace", "background-color");
    f.translate(0, 0);
    g.Vm = f;
    c.readOnly || f.kd() || bb(f, function (h) {
        if (!f.gc() && !f.kd() && -1 != g.i.JA.indexOf(h.type)) {
            var k = Object.create(null), l = f.Vc(), m = f.scale;
            k.G = f.G;
            k.dc = l.dc / m;
            k.lc = l.lc / m;
            k.mA = (l.dc + l.Bb) / m;
            k.lA = (l.lc + l.Pb) / m;
            zc(f) ? (l = ja(f), k.Sc = l.left, k.xc =
                l.top, k.gx = l.right, k.bx = l.bottom) : (k.Sc = l.Sc / m, k.xc = l.xc / m, k.gx = (l.Sc + l.Ff) / m, k.bx = (l.xc + l.ae) / m);
            if (k.xc < k.lc || k.bx > k.lA || k.Sc < k.dc || k.gx > k.mA) {
                l = null;
                h && (l = g.i.Zb(), g.i.$(h.group));
                switch (h.type) {
                    case g.i.ul:
                    case g.i.mv:
                        var n = u(f, h.wc);
                        n = I(n);
                        break;
                    case g.i.bo:
                    case g.i.co:
                        n = f.Uo[h.Ef] || null
                }
                if (n) {
                    m = kc(n);
                    m.height = m.bottom - m.top;
                    m.width = m.right - m.left;
                    var r = k.lc, t = k.lA - m.height;
                    t = Math.max(r, t);
                    r = g.g.Ha.Cf(r, m.top, t) - m.top;
                    t = k.dc;
                    var w = k.mA - m.width;
                    k.G ? t = Math.min(w, t) : w = Math.max(t, w);
                    n.moveBy(g.g.Ha.Cf(t,
                        m.left, w) - m.left, r)
                }
                h && (h.group || console.log("WARNING: Moved object in bounds but there was no event group. This may break undo."), null !== l && g.i.$(l))
            }
        }
    });
    g.hl(f);
    g.aa.Oa();
    g.D.Oa();
    g.H.Oa();
    return f
};
g.oF = function (a) {
    var c = a.options, d = x(a);
    g.ma(d.parentNode, "contextmenu", null, function (e) {
        g.g.Gp(e) || e.preventDefault()
    });
    d = g.ma(window, "resize", null, function () {
        g.oc(!0);
        g.hl(a)
    });
    a.aq = d;
    g.ej.iD();
    c.Sk && (a.ra ? a.ra.T(a) : a.P && (a.P.T(a), a.P.show(c.Sk.childNodes), a.P.pc.set(0)));
    d = g.Ua.Zc;
    c.Ay && (d = a.ad.T(d));
    c.Hb && c.Hb.controls && a.Uj.T(d);
    c.Cc && c.Cc.scrollbars ? (a.Ub = new g.jk(a), a.Ub.resize()) : a.di({x: .5, y: .5});
    c.iF && g.ej.yF(c.Yh, a)
};
g.ej.iD = function () {
    g.kE || (g.ma(document, "scroll", null, function () {
        for (var a = g.Ib.getAll(), c = 0, d; d = a[c]; c++) d.Pn && d.Pn()
    }), g.ma(document, "keydown", null, g.bG), g.gd(document, "touchend", null, g.Ph), g.gd(document, "touchcancel", null, g.Ph), g.g.userAgent.ng && g.ma(window, "orientationchange", document, function () {
        g.hl(g.Ab())
    }));
    g.kE = !0
};
g.ej.yF = function (a, c) {
    function d() {
        for (; f.length;) g.$a(f.pop());
        e.preload()
    }

    var e = c.mh;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var f = [];
    f.push(g.ma(document, "mousemove", null, d, !0));
    f.push(g.ma(document, "touchstart", null, d, !0))
};
g.rf = function (a) {
    this.name = a
};
g.F = function (a, c, d) {
    if (!c) throw Error("Cannot create a node without a location.");
    this.Nn = a;
    this.Mm = g.F.rF(a);
    this.qa = c;
    (a = d || null) && a.rA && (this.sA = a.rA)
};
g.F.types = {
    re: "field",
    Vd: "block",
    mg: "input",
    hk: "output",
    ue: "next",
    we: "previous",
    xf: "stack",
    Ii: "workspace"
};
g.F.bB = -20;
g.F.rF = function (a) {
    switch (a) {
        case g.F.types.we:
        case g.F.types.ue:
        case g.F.types.mg:
        case g.F.types.hk:
            return !0
    }
    return !1
};
g.F.mm = function (a) {
    return new g.F(g.F.types.re, a)
};
g.F.Gf = function (a) {
    return a ? a.type == g.Wa || a.type == g.jb && a.Mf() ? g.F.Qi(a.Mf()) : a.type == g.jb ? new g.F(g.F.types.ue, a) : a.type == g.Re ? new g.F(g.F.types.hk, a) : a.type == g.Se ? new g.F(g.F.types.we, a) : null : null
};
g.F.Qi = function (a) {
    return a ? new g.F(g.F.types.mg, a.connection) : null
};
g.F.Dg = function (a) {
    return new g.F(g.F.types.Vd, a)
};
g.F.nm = function (a) {
    return new g.F(g.F.types.xf, a)
};
g.F.om = function (a, c) {
    return new g.F(g.F.types.Ii, a, {rA: c})
};
b = g.F.prototype;
b.Mb = function () {
    return this.Nn
};

function Bc(a, c) {
    a = a.qa;
    a instanceof g.Zn || (a = a.B);
    if (!a || !a.v) return null;
    var d = I(a);
    a = D(d.v, !0);
    for (var e = 0, f; f = a[e]; e++) if (d.id == f.id) return c = e + (c ? 1 : -1), -1 == c || c == a.length ? null : g.F.nm(a[c]);
    throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}

function Cc(a) {
    if (!a) return null;
    do var c = a.Y && z(a.Y); while (c && q(c) == a && (a = c));
    return (c = a.Y || a.L) && c.ca && c.ca.Mf() ? g.F.Qi(c.ca.Mf()) : g.F.nm(a)
}

b.next = function () {
    switch (this.Nn) {
        case g.F.types.xf:
            return Bc(this, !0);
        case g.F.types.hk:
            return g.F.Dg(this.qa.B);
        case g.F.types.re:
            a:{
                var a = this.qa, c = a.Mf();
                var d = a.B;
                a = c.Pa.indexOf(a) + 1;
                c = d.R.indexOf(c);
                for (var e; e = d.R[c]; c++) {
                    for (var f = e.Pa; a < f.length;) {
                        if (f[a].kg) {
                            d = g.F.mm(f[a]);
                            break a
                        }
                        a++
                    }
                    a = 0;
                    if (e.connection) {
                        d = g.F.Qi(e);
                        break a
                    }
                }
                d = null
            }
            return d;
        case g.F.types.mg:
            a:{
                a = this.qa.Mf();
                d = a.B;
                for (a = d.R.indexOf(a) + 1; c = d.R[a]; a++) {
                    e = c.Pa;
                    f = 0;
                    for (var h; h = e[f]; f++) if (h.kg) {
                        d = g.F.mm(h);
                        break a
                    }
                    if (c.connection) {
                        d =
                            g.F.Qi(c);
                        break a
                    }
                }
                d = null
            }
            return d;
        case g.F.types.Vd:
            if (d = this.qa.X) return g.F.Gf(d);
            break;
        case g.F.types.we:
            return g.F.Dg(this.qa.B);
        case g.F.types.ue:
            if (d = this.qa.ca) return g.F.Gf(d)
    }
    return null
};
b.Km = function () {
    switch (this.Nn) {
        case g.F.types.Ii:
            var a = D(this.qa, !0);
            if (0 < a.length) return g.F.nm(a[0]);
            break;
        case g.F.types.xf:
            a = this.qa;
            var c = a.Y || a.L;
            return c ? g.F.Gf(c) : g.F.Dg(a);
        case g.F.types.Vd:
            a:{
                a = this.qa.R;
                c = 0;
                for (var d; d = a[c]; c++) {
                    for (var e = d.Pa, f = 0, h; h = e[f]; f++) if (h.kg) {
                        a = g.F.mm(h);
                        break a
                    }
                    if (d.connection) {
                        a = g.F.Qi(d);
                        break a
                    }
                }
                a = null
            }
            return a;
        case g.F.types.mg:
            if (a = this.qa.ca) return g.F.Gf(a)
    }
    return null
};
b.Tf = function () {
    switch (this.Nn) {
        case g.F.types.xf:
            return Bc(this, !1);
        case g.F.types.re:
            a:{
                var a = this.qa;
                var c = a.Mf();
                var d = a.B;
                a = c.Pa.indexOf(a) - 1;
                for (var e = d.R.indexOf(c), f; f = d.R[e]; e--) {
                    if (f.connection && f !== c) {
                        c = g.F.Qi(f);
                        break a
                    }
                    for (f = f.Pa; -1 < a;) {
                        if (f[a].kg) {
                            c = g.F.mm(f[a]);
                            break a
                        }
                        a--
                    }
                    0 <= e - 1 && (a = d.R[e - 1].Pa.length - 1)
                }
                c = null
            }
            return c;
        case g.F.types.mg:
            a:{
                c = this.qa.Mf();
                d = c.B;
                for (a = d.R.indexOf(c); e = d.R[a]; a--) {
                    if (e.connection && e !== c) {
                        c = g.F.Qi(e);
                        break a
                    }
                    e = e.Pa;
                    f = e.length - 1;
                    for (var h; h = e[f]; f--) if (h.kg) {
                        c =
                            g.F.mm(h);
                        break a
                    }
                }
                c = null
            }
            return c;
        case g.F.types.Vd:
            c = this.qa.L;
            if (c = this.qa.Y || c) return g.F.Gf(c);
            break;
        case g.F.types.we:
            if ((c = this.qa.ca) && !c.Mf()) return g.F.Gf(c);
            break;
        case g.F.types.ue:
            return g.F.Dg(this.qa.B)
    }
    return null
};
b.gn = function () {
    switch (this.Nn) {
        case g.F.types.xf:
            var a = this.qa.Qa();
            return g.F.om(this.qa.v, new g.g.J(a.x, a.y + g.F.bB));
        case g.F.types.hk:
            return (a = this.qa.ca) ? g.F.Gf(a) : g.F.nm(this.qa.B);
        case g.F.types.re:
            return g.F.Dg(this.qa.B);
        case g.F.types.mg:
            return g.F.Dg(this.qa.B);
        case g.F.types.Vd:
            return Cc(this.qa);
        case g.F.types.we:
            return Cc(this.qa.B);
        case g.F.types.ue:
            return Cc(this.qa.B)
    }
    return null
};
g.g.Ba = {
    mL: 0,
    fJ: 3,
    FA: 8,
    nw: 9,
    xJ: 12,
    Kq: 13,
    uC: 16,
    RH: 17,
    zA: 18,
    lK: 19,
    EH: 20,
    Lq: 27,
    RK: 32,
    kK: 33,
    jK: 34,
    hI: 35,
    OI: 36,
    wo: 37,
    Sl: 38,
    Eo: 39,
    yl: 40,
    oK: 43,
    qK: 44,
    Qq: 45,
    xl: 46,
    ZERO: 48,
    ONE: 49,
    eL: 50,
    ZK: 51,
    EI: 52,
    BI: 53,
    NK: 54,
    LK: 55,
    gI: 56,
    tJ: 57,
    zI: 59,
    xI: 61,
    wI: 173,
    yI: 163,
    sK: 63,
    wH: 64,
    uA: 65,
    yH: 66,
    LA: 67,
    aB: 68,
    E: 69,
    jI: 70,
    FI: 71,
    JI: 72,
    BB: 73,
    UI: 74,
    KB: 75,
    VI: 76,
    eJ: 77,
    rJ: 78,
    NJ: 79,
    iK: 80,
    Q: 81,
    tK: 82,
    rC: 83,
    EC: 84,
    fL: 85,
    KC: 86,
    OC: 87,
    zw: 88,
    pL: 89,
    VC: 90,
    bC: 91,
    nL: 92,
    PH: 93,
    MJ: 96,
    FJ: 97,
    LJ: 98,
    KJ: 99,
    BJ: 100,
    AJ: 101,
    JJ: 102,
    IJ: 103,
    zJ: 104,
    EJ: 105,
    DJ: 106,
    HJ: 107,
    CJ: 109,
    GJ: 110,
    yJ: 111,
    kI: 112,
    oI: 113,
    pI: 114,
    qI: 115,
    rI: 116,
    sI: 117,
    tI: 118,
    uI: 119,
    vI: 120,
    lI: 121,
    mI: 122,
    nI: 123,
    wJ: 144,
    HK: 145,
    AI: 166,
    XI: 183,
    JK: 186,
    SH: 189,
    iI: 187,
    MH: 188,
    mK: 190,
    OK: 191,
    sH: 192,
    $K: 192,
    MK: 222,
    OJ: 219,
    zH: 220,
    IH: 221,
    lL: 224,
    gJ: 224,
    hJ: 91,
    iJ: 93,
    kL: 229,
    jL: 252,
    nK: 255
};
g.qb = {};
g.qb.ob = {};
g.qb.ob.nj = {};
g.qb.ob.Qt = {uC: "Shift", WA: "Control", zA: "Alt", bC: "Meta"};
g.qb.ob.ZL = function (a, c) {
    var d = g.qb.ob.OE(c);
    d && delete g.qb.ob.nj[d];
    g.qb.ob.nj[a] = c
};
g.qb.ob.EG = function (a) {
    g.qb.ob.nj = a
};
g.qb.ob.EL = function () {
    var a = {};
    g.g.object.qj(a, g.qb.ob.nj);
    return a
};
g.qb.ob.zE = function (a) {
    return g.qb.ob.nj[a]
};
g.qb.ob.OE = function (a) {
    for (var c = Object.keys(g.qb.ob.nj), d = 0, e; e = c[d]; d++) if (g.qb.ob.nj[e].name === a.name) return e;
    return null
};
g.qb.ob.BG = function (a) {
    for (var c = g.g.object.values(g.qb.ob.Qt), d = "", e = 0, f; f = c[e]; e++) a.getModifierState(f) && (d += f);
    return d += a.keyCode
};
g.qb.ob.OD = function () {
    for (var a = g.g.Ba.KB, c = [g.qb.ob.Qt.WA], d = "", e = g.g.object.values(g.qb.ob.Qt), f = 0, h; h = c[f]; f++) if (-1 < e.indexOf(h)) d += h; else throw Error(h + " is not a valid modifier key.");
    return d + a
};
g.qb.ob.MD = function () {
    var a = {}, c = g.qb.ob.OD();
    a[g.g.Ba.OC] = g.navigation.wq;
    a[g.g.Ba.uA] = g.navigation.cv;
    a[g.g.Ba.rC] = g.navigation.vq;
    a[g.g.Ba.aB] = g.navigation.bv;
    a[g.g.Ba.BB] = g.navigation.wA;
    a[g.g.Ba.Kq] = g.navigation.xA;
    a[g.g.Ba.zw] = g.navigation.vA;
    a[g.g.Ba.EC] = g.navigation.yA;
    a[g.g.Ba.E] = g.navigation.uq;
    a[g.g.Ba.Lq] = g.navigation.uq;
    a[c] = g.navigation.dv;
    return a
};
g.navigation = {};
g.navigation.Uk = null;
g.navigation.mw = 1;
g.navigation.Ol = 2;
g.navigation.xr = 3;
g.navigation.Ri = g.navigation.Ol;
g.navigation.bb = {
    we: "previous",
    ue: "next",
    so: "in",
    Do: "out",
    Qq: "insert",
    Wq: "mark",
    Bv: "disconnect",
    qw: "toolbox",
    Mq: "exit",
    yr: "toggle_keyboard_nav"
};
g.navigation.Qx = function () {
    var a = g.Ab(), c = a.ra;
    c && (g.navigation.Ri = g.navigation.xr, g.navigation.Mz(!1), a.ac.Sb || g.navigation.Nt(), c.Cd.Qd || (a = c.Cd, (c = a.Ge()) && a.Mx && Dc(c, a.Mx)))
};
g.navigation.Px = function () {
    g.navigation.Ri = g.navigation.mw;
    var a = g.Ab();
    var c = a.ra;
    c = c ? c.P : wc(a);
    a.ac.Sb || g.navigation.Nt();
    c && c.s && (a = D(c.s, !0), 0 < a.length && (a = a[0], a = g.F.nm(a), J(g.navigation.yh(), a)))
};
g.navigation.lp = function () {
    g.oc();
    var a = g.Ab(), c = a.Xa, d = !!a.ra, e = D(a, !0);
    g.navigation.Mz(d);
    g.navigation.Ri = g.navigation.Ol;
    0 < e.length ? J(c, g.navigation.dt(e[0])) : (a = g.F.om(a, new g.g.J(100, 100)), J(c, a))
};
g.navigation.yh = function () {
    var a = g.Ab(), c = null;
    a.ba && (c = (a = (c = a.ra) ? c.P : wc(a)) ? a.s.Xa : null);
    return c
};
g.navigation.qF = function () {
    var a = g.Ab(), c = wc(a);
    if (c && c.isVisible()) {
        var d = g.navigation.yh().Sb.qa;
        d.isEnabled() ? (c = ob(c, d), c.za(), ka(c, !1), J(a.Xa, g.F.Dg(c)), g.navigation.bz() || g.navigation.od("Something went wrong while inserting a block from the flyout."), g.navigation.lp(), J(a.Xa, g.navigation.dt(c)), g.navigation.vG()) : g.navigation.od("Can't insert a disabled block.")
    } else g.navigation.od("Trying to insert from the flyout when the flyout does not  exist or is not visible")
};
g.navigation.Mz = function (a) {
    g.navigation.yh() && (g.navigation.yh().Ca(), a && wc(g.Ab()).Ca())
};
g.navigation.EF = function () {
    var a = g.Ab().ac.Sb, c = g.Ab().Xa.Sb;
    if (!a) return g.navigation.od("Cannot insert with no marked node."), !1;
    if (!c) return g.navigation.od("Cannot insert with no cursor node."), !1;
    a = a.Mb();
    c = c.Mb();
    return a == g.F.types.re ? (g.navigation.od("Should not have been able to mark a field."), !1) : a == g.F.types.Vd ? (g.navigation.od("Should not have been able to mark a block."), !1) : a == g.F.types.xf ? (g.navigation.od("Should not have been able to mark a stack."), !1) : c == g.F.types.re ? (g.navigation.od("Cannot attach a field to anything else."),
        !1) : c == g.F.types.Ii ? (g.navigation.od("Cannot attach a workspace to anything else."), !1) : !0
};
g.navigation.KF = function (a, c) {
    if (a.cb) return g.navigation.od("Cannot move a shadow block to the workspace."), !1;
    a.getParent() && A(a, !1);
    a.moveTo(c.sA);
    return !0
};
g.navigation.bz = function () {
    var a = g.Ab().ac.Sb, c = g.Ab().Xa.Sb;
    if (!g.navigation.EF()) return !1;
    var d = a.Mb(), e = c.Mb(), f = c.qa, h = a.qa;
    if (a.Mm && c.Mm) return g.navigation.Ye(f, h);
    if (a.Mm && (e == g.F.types.Vd || e == g.F.types.xf)) return g.navigation.Jy(f, h);
    if (d == g.F.types.Ii) return c = g.navigation.$s(c), g.navigation.KF(c, a);
    g.navigation.od("Unexpected state in Blockly.navigation.modify_.");
    return !1
};
g.navigation.gE = function (a, c) {
    var d = a.B, e = c.B;
    I(d) == I(e) && (-1 < p(d, !1).indexOf(e) ? g.navigation.op(c).disconnect() : g.navigation.op(a).disconnect())
};
g.navigation.Rt = function (a, c) {
    if (!a || !c) return !1;
    var d = a.B;
    return Ea(c, a) == g.sa.ao ? (g.navigation.gE(a, c), F(c) || a.type != g.jb && a.type != g.Wa || I(d).moveBy(c.Wb - a.Wb, c.ab - a.ab), c.connect(a), !0) : !1
};
g.navigation.op = function (a) {
    var c = a.B;
    return F(a) ? c.Y ? c.Y : c.L ? c.L : null : a
};
g.navigation.ly = function (a) {
    return F(a) ? a : a.ca ? a.ca : null
};
g.navigation.Ye = function (a, c) {
    if (!a || !c) return !1;
    var d = g.navigation.op(a), e = g.navigation.ly(c), f = g.navigation.ly(a), h = g.navigation.op(c);
    if (d && e && g.navigation.Rt(d, e) || f && h && g.navigation.Rt(f, h) || g.navigation.Rt(a, c)) return !0;
    try {
        Fa(c, a)
    } catch (k) {
        g.navigation.od("Connection failed with error: " + k)
    }
    return !1
};
g.navigation.Jy = function (a, c) {
    switch (c.type) {
        case g.Se:
            if (g.navigation.Ye(a.X, c)) return !0;
            break;
        case g.jb:
            if (g.navigation.Ye(a.Y, c)) return !0;
            break;
        case g.Wa:
            if (g.navigation.Ye(a.L, c)) return !0;
            break;
        case g.Re:
            for (var d = 0; d < a.R.length; d++) {
                var e = a.R[d].connection;
                if (e && e.type === g.Wa && g.navigation.Ye(e, c)) return !0
            }
            if (a.L && g.navigation.Ye(a.L, c)) return !0
    }
    g.navigation.od("This block can not be inserted at the marked location.");
    return !1
};
g.navigation.fE = function () {
    var a = g.Ab(), c = a.Xa.Sb;
    if (c.Mm) {
        var d = c.qa;
        d.isConnected() ? (c = F(d) ? d : d.ca, d = F(d) ? d.ca : d, d.B.cb ? g.navigation.It("Cannot disconnect a shadow block") : (c.disconnect(), $b(d, c), Ua(I(c.B)), c = g.F.Gf(c), J(a.Xa, c))) : g.navigation.It("Cannot disconnect unconnected connection")
    } else g.navigation.It("Cannot disconnect blocks when the cursor is not on a connection")
};
g.navigation.Nt = function () {
    var a = g.Ab();
    J(a.ac, a.Xa.Sb)
};
g.navigation.vG = function () {
    var a = g.Ab();
    J(a.ac, null);
    a.ac.Ca()
};
g.navigation.Gb = function (a) {
    g.navigation.Ri = a
};
g.navigation.$s = function (a) {
    return a ? a.Mb() === g.F.types.Vd ? a.qa : a.Mb() === g.F.types.xf ? a.qa : a.Mb() === g.F.types.Ii ? null : a.qa.B : null
};
g.navigation.dt = function (a) {
    var c = a.Y || a.L;
    return c ? g.F.Gf(c) : g.F.Dg(a)
};
g.navigation.gz = function (a) {
    var c = g.Ab();
    if (c && (c = c.Xa)) {
        var d = g.navigation.$s(c.Sb);
        d === a ? d.getParent() ? (a = d.Y || d.L) && J(c, g.F.Gf(a.ca)) : J(c, g.F.om(d.v, d.Qa())) : -1 < a.xh(!1).indexOf(d) && J(c, g.F.om(d.v, d.Qa()))
    }
};
g.navigation.LF = function (a) {
    var c = g.Ab().Xa;
    if (c) {
        var d = g.navigation.$s(c.Sb);
        d === a && J(c, g.F.Dg(d))
    }
};
g.navigation.Ns = function () {
    g.Je || (g.Je = !0, g.navigation.lp())
};
g.navigation.dE = function () {
    if (g.Je) {
        var a = g.Ab();
        g.Je = !1;
        a.Xa.Ca();
        a.ac.Ca();
        g.navigation.yh() && g.navigation.yh().Ca()
    }
};
g.navigation.It = function (a) {
    g.navigation.Uk ? g.navigation.Uk("log", a) : console.log(a)
};
g.navigation.od = function (a) {
    g.navigation.Uk ? g.navigation.Uk("warn", a) : console.warn(a)
};
g.navigation.AL = function (a) {
    g.navigation.Uk ? g.navigation.Uk("error", a) : console.error(a)
};
g.navigation.rz = function (a) {
    a = g.qb.ob.BG(a);
    return (a = g.qb.ob.zE(a)) ? g.navigation.Th(a) : !1
};
g.navigation.Th = function (a) {
    var c = g.Ab().options.readOnly, d = !1;
    g.Je ? c ? -1 < g.navigation.nC.indexOf(a) && (d = g.navigation.vy(a)) : d = g.navigation.vy(a) : a.name === g.navigation.bb.yr && (g.navigation.Ns(), d = !0);
    return d
};
g.navigation.vy = function (a) {
    var c = g.Ab();
    if (a.name === g.navigation.bb.yr) return g.navigation.dE(), !0;
    if (a.name === g.navigation.bb.qw) return c.ra ? g.navigation.Qx() : g.navigation.Px(), !0;
    if (g.navigation.Ri === g.navigation.Ol) {
        c = c.Xa.Sb;
        var d = !1;
        c && c.Mb() === g.F.types.re && (d = c.qa.Th(a));
        d || (d = g.navigation.lH(a));
        return d
    }
    return g.navigation.Ri === g.navigation.mw ? g.navigation.yE(a) : g.navigation.Ri === g.navigation.xr ? g.navigation.WG(a) : !1
};
g.navigation.lH = function (a) {
    var c = g.Ab();
    switch (a.name) {
        case g.navigation.bb.we:
            return c.Xa.Tf(), !0;
        case g.navigation.bb.Do:
            return c.Xa.gn(), !0;
        case g.navigation.bb.ue:
            return c.Xa.next(), !0;
        case g.navigation.bb.so:
            return c.Xa.Km(), !0;
        case g.navigation.bb.Qq:
            return g.navigation.bz(), !0;
        case g.navigation.bb.Wq:
            return g.navigation.XE(), !0;
        case g.navigation.bb.Bv:
            return g.navigation.fE(), !0;
        default:
            return !1
    }
};
g.navigation.yE = function (a) {
    switch (a.name) {
        case g.navigation.bb.we:
            return g.navigation.yh().Tf(), !0;
        case g.navigation.bb.Do:
            return g.navigation.Qx(), !0;
        case g.navigation.bb.ue:
            return g.navigation.yh().next(), !0;
        case g.navigation.bb.Wq:
            return g.navigation.qF(), !0;
        case g.navigation.bb.Mq:
            return g.navigation.lp(), !0;
        default:
            return !1
    }
};
g.navigation.WG = function (a) {
    if (a.name === g.navigation.bb.Mq) return g.navigation.lp(), !0;
    var c = g.Ab().ra.Th(a);
    return c || a.name !== g.navigation.bb.so ? c : (g.navigation.Px(), !0)
};
g.navigation.XE = function () {
    var a = g.Ab().Xa.Sb, c = a.Mb();
    c == g.F.types.re ? a.qa.mf() : a.Mm || c == g.F.types.Ii ? g.navigation.Nt() : c == g.F.types.Vd ? g.navigation.od("Cannot mark a block.") : c == g.F.types.xf && g.navigation.od("Cannot mark a stack.")
};
g.navigation.wq = new g.rf(g.navigation.bb.we);
g.navigation.cv = new g.rf(g.navigation.bb.Do);
g.navigation.vq = new g.rf(g.navigation.bb.ue);
g.navigation.bv = new g.rf(g.navigation.bb.so);
g.navigation.wA = new g.rf(g.navigation.bb.Qq);
g.navigation.xA = new g.rf(g.navigation.bb.Wq);
g.navigation.vA = new g.rf(g.navigation.bb.Bv);
g.navigation.yA = new g.rf(g.navigation.bb.qw);
g.navigation.uq = new g.rf(g.navigation.bb.Mq);
g.navigation.dv = new g.rf(g.navigation.bb.yr);
g.navigation.nC = [g.navigation.wq, g.navigation.cv, g.navigation.bv, g.navigation.vq, g.navigation.dv];
g.Wd = function (a, c) {
    this.kA = c || "";
    this.Lz = Object.create(null);
    if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.Lz[a[c]] = !0;
    this.reset()
};
g.Wd.Jq = "DEVELOPER_VARIABLE";
g.Wd.prototype.reset = function () {
    this.Hf = Object.create(null);
    this.ox = Object.create(null);
    this.Sa = null
};

function Q(a, c) {
    var d = g.j.Dd;
    if (c == g.O.sb) {
        var e = a;
        d.Sa ? e = (e = d.Sa.ef(e)) ? e.name : null : (console.log("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"), e = null);
        e && (a = e)
    }
    e = a.toLowerCase() + "_" + c;
    var f = c == g.O.sb || c == g.Wd.Jq ? d.kA : "";
    if (e in d.Hf) return f + d.Hf[e];
    a = Ec(d, a, c);
    d.Hf[e] = a.substr(f.length);
    return a
}

function Ec(a, c, d) {
    c ? (c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c)) : c = g.h.UNNAMED_KEY || "unnamed";
    for (var e = ""; a.ox[c + e] || c + e in a.Lz;) e = e ? e + 1 : 2;
    c += e;
    a.ox[c] = !0;
    return (d == g.O.sb || d == g.Wd.Jq ? a.kA : "") + c
}

g.Wd.Ce = function (a, c) {
    return a.toLowerCase() == c.toLowerCase()
};
g.Ga = {};
g.Ga.sb = g.bw;
g.Ga.eD = function (a) {
    a = K(a, !1);
    for (var c = [], d = [], e = 0; e < a.length; e++) if (a[e].Ah) {
        var f = a[e].Ah();
        f && (f[2] ? c.push(f) : d.push(f))
    }
    d.sort(g.Ga.Hz);
    c.sort(g.Ga.Hz);
    return [d, c]
};
g.Ga.Hz = function (a, c) {
    return a[0].toLowerCase().localeCompare(c[0].toLowerCase())
};
g.Ga.uE = function (a, c) {
    if (c.$b) return a;
    for (a = a || g.h.UNNAMED_KEY || "unnamed"; !g.Ga.sF(a, c.v, c);) {
        var d = a.match(/^(.*?)(\d+)$/);
        a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2"
    }
    return a
};
g.Ga.sF = function (a, c, d) {
    return !g.Ga.uF(a, c, d)
};
g.Ga.uF = function (a, c, d) {
    c = K(c, !1);
    for (var e = 0; e < c.length; e++) if (c[e] != d && c[e].Ah) {
        var f = c[e].Ah();
        if (g.Wd.Ce(f[0], a)) return !0
    }
    return !1
};
g.Ga.Xp = function (a) {
    a = a.trim();
    var c = g.Ga.uE(a, this.B), d = this.getValue();
    if (d != a && d != c) {
        a = K(this.B.v, !1);
        for (var e = 0; e < a.length; e++) a[e].qn && a[e].qn(d, c)
    }
    return c
};
g.Ga.Zi = function (a) {
    function c(h, k) {
        for (var l = 0; l < h.length; l++) {
            var m = h[l][0], n = h[l][1], r = g.g.xml.createElement("block");
            r.setAttribute("type", k);
            r.setAttribute("gap", 16);
            var t = g.g.xml.createElement("mutation");
            t.setAttribute("name", m);
            r.appendChild(t);
            for (m = 0; m < n.length; m++) {
                var w = g.g.xml.createElement("arg");
                w.setAttribute("name", n[m]);
                t.appendChild(w)
            }
            d.push(r)
        }
    }

    var d = [];
    if (g.K.procedures_defnoreturn) {
        var e = g.g.xml.createElement("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap",
            16);
        var f = g.g.xml.createElement("field");
        f.setAttribute("name", "NAME");
        f.appendChild(g.g.xml.createTextNode(g.h.PROCEDURES_DEFNORETURN_PROCEDURE));
        e.appendChild(f);
        d.push(e)
    }
    g.K.procedures_defreturn && (e = g.g.xml.createElement("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = g.g.xml.createElement("field"), f.setAttribute("name", "NAME"), f.appendChild(g.g.xml.createTextNode(g.h.PROCEDURES_DEFRETURN_PROCEDURE)), e.appendChild(f), d.push(e));
    g.K.procedures_ifreturn && (e = g.g.xml.createElement("block"),
        e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), d.push(e));
    d.length && d[d.length - 1].setAttribute("gap", 24);
    a = g.Ga.eD(a);
    c(a[0], "procedures_callnoreturn");
    c(a[1], "procedures_callreturn");
    return d
};
g.Ga.EE = function (a, c) {
    var d = [];
    c = K(c, !1);
    for (var e = 0; e < c.length; e++) if (c[e].ee) {
        var f = c[e].ee();
        f && g.Wd.Ce(f, a) && d.push(c[e])
    }
    return d
};
g.Ga.dn = function (a) {
    var c = g.i.Ec, d = a.Ah()[0], e = a.eb(!0);
    a = g.Ga.EE(d, a.v);
    d = 0;
    for (var f; f = a[d]; d++) {
        var h = f.eb();
        h = h && g.U.ce(h);
        f.zb(e);
        var k = f.eb();
        k = k && g.U.ce(k);
        h != k && (g.i.Ec = !1, g.i.Ka(new g.i.eg(f, "mutation", null, h, k)), g.i.Ec = c)
    }
};
g.Ga.Em = function (a, c) {
    c = D(c, !1);
    for (var d = 0; d < c.length; d++) if (c[d].Ah) {
        var e = c[d].Ah();
        if (e && g.Wd.Ce(e[0], a)) return c[d]
    }
    return null
};
g.Tl = function (a, c, d, e) {
    this.v = a;
    this.name = c;
    this.type = d || "";
    this.Lk = e || g.g.Ig();
    g.i.Ka(new g.i.xe(this))
};
g.Tl.prototype.ua = function () {
    return this.Lk
};
g.Tl.Xw = function (a, c) {
    a = a.name.toLowerCase();
    c = c.name.toLowerCase();
    return a < c ? -1 : a == c ? 0 : 1
};
g.O = {};
g.O.sb = g.sw;
g.O.Ew = function (a) {
    var c = K(a, !1);
    a = Object.create(null);
    for (var d = 0; d < c.length; d++) {
        var e = c[d].Lg();
        if (e) for (var f = 0; f < e.length; f++) {
            var h = e[f], k = h.ua();
            k && (a[k] = h)
        }
    }
    c = [];
    for (k in a) c.push(a[k]);
    return c
};
g.O.rL = function () {
    console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.")
};
g.O.gv = {};
g.O.cD = function (a) {
    a = K(a, !1);
    for (var c = Object.create(null), d = 0, e; e = a[d]; d++) {
        var f = e.DL;
        !f && e.KE && (f = e.KE, g.O.gv[e.type] || (console.warn("Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" + e.type + "')"), g.O.gv[e.type] = !0));
        if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0
    }
    return Object.keys(c)
};
g.O.Zi = function (a) {
    var c = [], d = document.createElement("button");
    d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
    d.setAttribute("callbackKey", "CREATE_VARIABLE");
    Ac(a, function (e) {
        g.O.jx(e.HL())
    });
    c.push(d);
    a = g.O.xE(a);
    return c = c.concat(a)
};
g.O.xE = function (a) {
    a = a.Hm("");
    var c = [];
    if (0 < a.length) {
        var d = a[a.length - 1];
        if (g.K.variables_set) {
            var e = g.g.xml.createElement("block");
            e.setAttribute("type", "variables_set");
            e.setAttribute("gap", g.K.math_change ? 8 : 24);
            e.appendChild(g.O.Cm(d));
            c.push(e)
        }
        g.K.math_change && (e = g.g.xml.createElement("block"), e.setAttribute("type", "math_change"), e.setAttribute("gap", g.K.variables_get ? 20 : 8), e.appendChild(g.O.Cm(d)), d = g.U.Lj('<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'),
            e.appendChild(d), c.push(e));
        if (g.K.variables_get) {
            a.sort(g.Tl.Xw);
            d = 0;
            for (var f; f = a[d]; d++) e = g.g.xml.createElement("block"), e.setAttribute("type", "variables_get"), e.setAttribute("gap", 8), e.appendChild(g.O.Cm(f)), c.push(e)
        }
    }
    return c
};
g.O.Tx = function (a) {
    a = a.Jg();
    var c = "";
    if (a.length) for (var d = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !c;) {
        for (var h = !1, k = 0; k < a.length; k++) if (a[k].name.toLowerCase() == f) {
            h = !0;
            break
        }
        h ? (e++, 25 == e && (e = 0, d++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < d && (f += d)) : c = f
    } else c = "i";
    return c
};
g.O.jx = function (a, c, d) {
    function e(h) {
        g.O.Iz(g.h.NEW_VARIABLE_TITLE, h, function (k) {
            if (k) {
                var l = g.O.OF(k, a);
                if (l) {
                    var m = k.toLowerCase();
                    if (l.type == f) var n = g.h.VARIABLE_ALREADY_EXISTS.replace("%1", m); else n = g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", m).replace("%2", l.type);
                    g.alert(n, function () {
                        e(k)
                    })
                } else a.Ld(k, f), c && c(k)
            } else c && c(null)
        })
    }

    var f = d || "";
    e("")
};
g.O.Ld = g.O.jx;
g.O.Zp = function (a, c) {
    function d(e) {
        var f = g.h.RENAME_VARIABLE_TITLE.replace("%1", c.name);
        g.O.Iz(f, e, function (h) {
            if (h) {
                var k = g.O.PF(h, c.type, a);
                k ? (k = g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", h.toLowerCase()).replace("%2", k.type), g.alert(k, function () {
                    d(h)
                })) : a.bi(c.ua(), h)
            }
        })
    }

    d("")
};
g.O.Iz = function (a, c, d) {
    g.prompt(a, c, function (e) {
        e && (e = e.replace(/[\s\xa0]+/g, " ").trim(), e == g.h.RENAME_VARIABLE || e == g.h.NEW_VARIABLE) && (e = null);
        d(e)
    })
};
g.O.PF = function (a, c, d) {
    d = d.Sa.Jg();
    a = a.toLowerCase();
    for (var e = 0, f; f = d[e]; e++) if (f.name.toLowerCase() == a && f.type != c) return f;
    return null
};
g.O.OF = function (a, c) {
    c = c.Sa.Jg();
    a = a.toLowerCase();
    for (var d = 0, e; e = c[d]; d++) if (e.name.toLowerCase() == a) return e;
    return null
};
g.O.Cm = function (a) {
    var c = g.g.xml.createElement("field");
    c.setAttribute("name", "VAR");
    c.setAttribute("id", a.ua());
    c.setAttribute("variabletype", a.type);
    a = g.g.xml.createTextNode(a.name);
    c.appendChild(a);
    return c
};
g.O.pp = function (a, c, d, e) {
    var f = g.O.Ac(a, c, d, e);
    f || (f = g.O.PD(a, c, d, e));
    return f
};
g.O.Ac = function (a, c, d, e) {
    var f = a.Zh;
    if (c) {
        var h = a.ef(c);
        !h && f && (h = f.ef(c));
        if (h) return h
    }
    if (d) {
        if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        h = a.Ac(d, e);
        !h && f && (h = f.Ac(d, e))
    }
    return h
};
g.O.PD = function (a, c, d, e) {
    var f = a.Zh;
    d || (d = g.O.Tx(a.je ? a.Jj : a));
    return f ? f.Ld(d, e, c) : a.Ld(d, e, c)
};
g.O.Ux = function (a, c) {
    a = a.Jg();
    var d = [];
    if (c.length != a.length) for (var e = 0; e < a.length; e++) {
        var f = a[e];
        -1 == c.indexOf(f) && d.push(f)
    }
    return d
};
g.aa = {};
g.aa.Fa = null;
g.aa.ld = null;
g.aa.cp = null;
g.aa.Oa = function () {
    g.aa.Fa || (g.aa.Fa = document.createElement("div"), g.aa.Fa.className = "blocklyWidgetDiv", document.body.appendChild(g.aa.Fa))
};
g.aa.show = function (a, c, d) {
    g.aa.Ca();
    g.aa.ld = a;
    g.aa.cp = d;
    g.aa.Fa.style.top = g.g.style.py().y + "px";
    g.aa.Fa.style.direction = c ? "rtl" : "ltr";
    g.aa.Fa.style.display = "block"
};
g.aa.Ca = function () {
    g.aa.ld && (g.aa.ld = null, g.aa.Fa.style.display = "none", g.aa.Fa.style.left = "", g.aa.Fa.style.top = "", g.aa.cp && g.aa.cp(), g.aa.cp = null, g.aa.Fa.innerHTML = "")
};
g.aa.isVisible = function () {
    return !!g.aa.ld
};
g.aa.Hk = function (a) {
    g.aa.ld == a && g.aa.Ca()
};
g.aa.jn = function (a, c, d) {
    g.aa.Fa.style.left = a + "px";
    g.aa.Fa.style.top = c + "px";
    g.aa.Fa.style.height = d + "px"
};
g.aa.rG = function (a, c, d, e) {
    var f = g.aa.rD(a, c, d);
    a = g.aa.qD(a, c, d, e);
    0 > f ? g.aa.jn(a, 0, d.height + f) : g.aa.jn(a, f, d.height)
};
g.aa.qD = function (a, c, d, e) {
    if (e) return c = Math.max(c.right - d.width, a.left), Math.min(c, a.right - d.width);
    c = Math.min(c.left, a.right - d.width);
    return Math.max(c, a.left)
};
g.aa.rD = function (a, c, d) {
    return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom
};
g.VERSION = "uncompiled";
g.Vm = null;
g.selected = null;
g.cursor = null;
g.Je = !1;
g.vm = [];
g.em = null;
g.So = null;
g.ds = null;
g.uL = null;
g.bA = function (a) {
    return {width: a.Jw, height: a.Hw}
};
g.WL = function (a) {
    ma(a)
};
g.hl = function (a) {
    for (; a.options.Nb;) a = a.options.Nb;
    var c = x(a), d = c.parentNode;
    if (d) {
        var e = d.offsetWidth;
        d = d.offsetHeight;
        c.Jw != e && (c.setAttribute("width", e + "px"), c.Jw = e);
        c.Hw != d && (c.setAttribute("height", d + "px"), c.Hw = d);
        a.resize()
    }
};
g.bG = function (a) {
    var c = g.Vm;
    if (!(g.g.Gp(a) || c.ba && !c.isVisible())) if (c.options.readOnly) g.navigation.rz(a); else {
        var d = !1;
        if (a.keyCode == g.g.Ba.Lq) g.oc(), g.navigation.Th(g.navigation.uq); else {
            if (g.navigation.rz(a)) return;
            if (a.keyCode == g.g.Ba.FA || a.keyCode == g.g.Ba.xl) {
                a.preventDefault();
                if (g.$j.qt()) return;
                g.selected && g.selected.ie() && (d = !0)
            } else if (a.altKey || a.ctrlKey || a.metaKey) {
                if (g.$j.qt()) return;
                g.selected && g.selected.ie() && g.selected.kd() && (a.keyCode == g.g.Ba.LA ? (g.oc(), g.js(g.selected)) : a.keyCode !=
                    g.g.Ba.zw || g.selected.v.je || (g.js(g.selected), d = !0));
                a.keyCode == g.g.Ba.KC ? g.em && (a = g.So, a.je && (a = a.Jj), g.ds && $a(a, g.ds) && (g.i.$(!0), xc(a), g.i.$(!1))) : a.keyCode == g.g.Ba.VC && (g.oc(), c.Wu(a.shiftKey))
            }
        }
        d && !g.selected.v.je && (g.i.$(!0), g.oc(), g.selected.I(!0, !0), g.i.$(!1))
    }
};
g.js = function (a) {
    if (a.Ny) var c = a.Ru(); else {
        c = g.U.oh(a, !0);
        g.U.aE(c);
        var d = a.Qa();
        c.setAttribute("x", a.G ? -d.x : d.x);
        c.setAttribute("y", d.y)
    }
    g.em = c;
    g.So = a.v;
    g.ds = a.Ny ? null : g.g.Us(a, !0)
};
g.Fx = function (a) {
    var c = g.em, d = g.So;
    g.js(a);
    xc(a.v);
    g.em = c;
    g.So = d
};
g.UL = function (a) {
    g.g.Gp(a) || a.preventDefault()
};
g.oc = function (a) {
    g.H.Ca();
    g.aa.Ca();
    g.D.Ik();
    a || (a = g.Ab(), a.ad && a.ad.P && a.ad.P.Ca(), a.ra && a.ra.P && a.ra.P.pk && Dc(a.ra.Cd, null))
};
g.Ab = function () {
    return g.Vm
};
g.alert = function (a, c) {
    alert(a);
    c && c()
};
g.confirm = function (a, c) {
    c(confirm(a))
};
g.prompt = function (a, c, d) {
    d(prompt(a, c))
};
g.wF = function (a) {
    return function () {
        P(this, a)
    }
};
g.zk = function (a) {
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d) {
            var e = d.type;
            null == e || "" === e ? console.warn("Block definition #" + c + " in JSON array is missing a type attribute. Skipping.") : (g.K[e] && console.warn("Block definition #" + c + ' in JSON array overwrites prior definition of "' + e + '".'), g.K[e] = {T: g.wF(d)})
        } else console.warn("Block definition #" + c + " in JSON array is " + d + ". Skipping.")
    }
};
g.ma = function (a, c, d, e, f, h) {
    function k(w) {
        var E = !f;
        w = g.Touch.JG(w);
        for (var S = 0, Z; Z = w[S]; S++) if (!E || g.Touch.Ku(Z)) g.Touch.CG(Z), d ? e.call(d, Z) : e(Z), l = !0
    }

    var l = !1, m = [];
    if (g.g.global.PointerEvent && c in g.Touch.yf) for (var n = 0, r; r = g.Touch.yf[c][n]; n++) a.addEventListener(r, k, !1), m.push([a, r, k]); else if (a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.yf) {
        var t = function (w) {
            k(w);
            var E = !h;
            l && E && w.preventDefault()
        };
        for (n = 0; r = g.Touch.yf[c][n]; n++) a.addEventListener(r, t, !1), m.push([a, r, t])
    }
    return m
};
g.gd = function (a, c, d, e) {
    function f(n) {
        d ? e.call(d, n) : e(n)
    }

    var h = [];
    if (g.g.global.PointerEvent && c in g.Touch.yf) for (var k = 0, l; l = g.Touch.yf[c][k]; k++) a.addEventListener(l, f, !1), h.push([a, l, f]); else if (a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.yf) {
        var m = function (n) {
            if (n.changedTouches && 1 == n.changedTouches.length) {
                var r = n.changedTouches[0];
                n.clientX = r.clientX;
                n.clientY = r.clientY
            }
            f(n);
            n.preventDefault()
        };
        for (k = 0; l = g.Touch.yf[c][k]; k++) a.addEventListener(l, m, !1), h.push([a, l, m])
    }
    return h
};
g.$a = function (a) {
    for (; a.length;) {
        var c = a.pop();
        c[0].removeEventListener(c[1], c[2], !1)
    }
};
g.Mh = function (a) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
};
g.Gy = function (a) {
    return g.g.Lb.lF(a)
};
g.uD = function () {
    g.hd("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    g.hd("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    g.hd("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    g.hd("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    g.hd("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    g.hd("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    g.hd("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    g.hd("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    g.hd("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    g.hd("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    g.hd("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    g.hd("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    g.hd("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    g.hd("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    g.hd("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    g.hd("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
g.hd = function (a, c, d) {
    for (var e = "Blockly", f = g, h = 0; h < c.length; ++h) e += "." + c[h], f && (f = f[c[h]]);
    f && f !== d && (a = (void 0 === d ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a))
};
g.g.A = {};
g.g.A.Va = function (a, c) {
    return " " + a + "," + c + " "
};
g.g.A.curve = function (a, c) {
    return " " + a + c.join("")
};
g.g.A.moveTo = function (a, c) {
    return " M " + a + "," + c + " "
};
g.g.A.moveBy = function (a, c) {
    return " m " + a + "," + c + " "
};
g.g.A.lineTo = function (a, c) {
    return " l " + a + "," + c + " "
};
g.g.A.line = function (a) {
    return " l" + a.join("")
};
g.g.A.ea = function (a, c) {
    return " " + a + " " + c + " "
};
g.g.A.arc = function (a, c, d, e) {
    return a + " " + d + " " + d + " " + c + e
};
g.m.pi = function () {
    this.wf = 0;
    this.vC = 3;
    this.vf = 5;
    this.Sv = 8;
    this.td = 10;
    this.ow = this.vf;
    this.Ko = 15;
    this.Ql = 5;
    this.tg = 8;
    this.fC = 15;
    this.eC = 4;
    this.cC = 12;
    this.hB = 16;
    this.Cv = this.Ko;
    this.wb = 8;
    this.Ao = 15;
    this.CC = 0;
    this.DC = 20;
    this.GA = 4;
    this.yC = 15;
    this.zC = 100;
    this.xC = 15;
    this.Xq = 24;
    this.jB = 14.5;
    this.iB = this.Ko + 11;
    this.lB = 2;
    this.kB = this.Xq;
    this.kw = g.g.A.moveBy(0, 0);
    this.HB = 12;
    this.IB = 6
};
b = g.m.pi.prototype;
b.T = function () {
    this.bk = this.Jt();
    this.ek = this.Kt();
    this.sg = this.Mt();
    this.Ai = this.Lt();
    var a = this.wb, c = g.g.A.arc("a", "0 0,0", a, g.g.A.Va(-a, a)), d = g.g.A.arc("a", "0 0,0", a, g.g.A.Va(a, a));
    this.El = {width: a, height: a, mu: c, Rp: d};
    c = this.wb;
    a = g.g.A.moveBy(0, c) + g.g.A.arc("a", "0 0,1", c, g.g.A.Va(c, -c));
    c = g.g.A.arc("a", "0 0,1", c, g.g.A.Va(-c, -c));
    this.Zv = {Uu: a, Tr: c}
};
b.Jt = function () {
    var a = this.HB, c = this.IB, d = g.g.A.line([g.g.A.Va(6, 3), g.g.A.Va(-12, 6), g.g.A.Va(6, 3)]);
    return {height: a, width: c, path: d}
};
b.Mt = function () {
    var a = this.yC, c = this.zC, d = g.g.A.curve("c", [g.g.A.Va(30, -a), g.g.A.Va(70, -a), g.g.A.Va(c, 0)]);
    return {height: a, width: c, path: d}
};
b.Lt = function () {
    function a(h) {
        h = h ? -1 : 1;
        var k = -h, l = d / 2, m = g.g.A.Va(c, h * l);
        return g.g.A.curve("c", [g.g.A.Va(0, h * (l + 2.5)), g.g.A.Va(-c, k * (l + .5)), g.g.A.Va(-c, h * l)]) + g.g.A.curve("s", [g.g.A.Va(c, 2.5 * k), m])
    }

    var c = this.tg, d = this.Ko, e = a(!0), f = a(!1);
    return {width: c, height: d, Me: f, hn: e}
};
b.Kt = function () {
    function a(k) {
        return g.g.A.line([g.g.A.Va(k * e, d), g.g.A.Va(3 * k, 0), g.g.A.Va(k * e, -d)])
    }

    var c = this.fC, d = this.eC, e = (c - 3) / 2, f = a(1), h = a(-1);
    return {width: c, height: d, Xh: f, zz: h}
};
g.m.u = {
    NONE: 0,
    re: 1,
    Ev: 2,
    Gv: 4,
    rr: 8,
    kv: 16,
    Kv: 32,
    Dv: 64,
    mg: 128,
    Iv: 256,
    lw: 512,
    VA: 1024,
    ir: 2048,
    Zq: 4096,
    iC: 8192,
    Gq: 16384,
    Uq: 32768,
    Tq: 65536,
    mr: 131072,
    lr: 262144,
    Nv: 524288,
    pr: 1048576,
    Ar: 2097152,
    Aq: 4194304,
    Jv: 8388608
};
g.m.u.YI = g.m.u.Uq | g.m.u.Tq;
g.m.u.CK = g.m.u.mr | g.m.u.lr;
g.m.u.Xt = 16777216;
g.m.u.Mb = function () {
    g.m.u.hasOwnProperty(void 0) || (g.m.u[void 0] = g.m.u.Xt, g.m.u.Xt <<= 1);
    return g.m.u[void 0]
};
g.m.u.Qm = function (a) {
    return a.type & g.m.u.re
};
g.m.u.jj = function (a) {
    return a.type & g.m.u.Ev
};
g.m.u.Ok = function (a) {
    return a.type & g.m.u.Gv
};
g.m.u.jf = function (a) {
    return a.type & g.m.u.rr
};
g.m.u.KL = function (a) {
    return a.type & g.m.u.Kv
};
g.m.u.hf = function (a) {
    return a.type & g.m.u.mg
};
g.m.u.Pm = function (a) {
    return a.type & g.m.u.Dv
};
g.m.u.Ih = function (a) {
    return a.type & g.m.u.Iv
};
g.m.u.Tm = function (a) {
    return a.type & g.m.u.lw
};
g.m.u.Qk = function (a) {
    return a.type & g.m.u.ir
};
g.m.u.Lh = function (a) {
    return a.type & g.m.u.Zq
};
g.m.u.vF = function (a) {
    return a.type & (g.m.u.ir | g.m.u.Zq)
};
g.m.u.Kh = function (a) {
    return a.type & g.m.u.Tq
};
g.m.u.ML = function (a) {
    return a.type & g.m.u.lr
};
g.m.u.Sm = function (a) {
    return a.type & g.m.u.Uq
};
g.m.u.NL = function (a) {
    return a.type & g.m.u.mr
};
g.m.u.JL = function (a) {
    return a.type & g.m.u.Gq
};
g.m.u.Oy = function (a) {
    return a.type & g.m.u.Nv
};
g.m.u.OL = function (a) {
    return a.type & g.m.u.pr
};
g.m.u.IL = function (a) {
    return a.type & g.m.u.kv
};
g.m.u.Hp = function (a) {
    return a.type & g.m.u.Ar
};
g.m.u.Ap = function (a) {
    return a.type & g.m.u.Aq
};
g.m.u.PL = function (a) {
    return a.type & (g.m.u.Ar | g.m.u.Aq)
};
g.m.u.LL = function (a) {
    return a.type & g.m.u.Jv
};
g.m.fh = function (a) {
    this.height = this.width = 0;
    this.type = g.m.u.NONE;
    this.ph = this.Ta = 0;
    this.C = a;
    this.Ke = this.C.Ao
};
g.m.sa = function (a, c) {
    g.m.sa.w.constructor.call(this, a);
    this.hs = c;
    a:switch (a = this.C, c.type) {
        case g.Wa:
        case g.Re:
            c = a.Ai;
            break a;
        case g.Se:
        case g.jb:
            c = a.ek;
            break a;
        default:
            throw Error("Unknown connection type");
    }
    this.shape = c;
    this.type |= g.m.u.VA
};
g.g.object.W(g.m.sa, g.m.fh);
g.m.gr = function (a, c) {
    g.m.gr.w.constructor.call(this, a, c);
    this.type |= g.m.u.iC;
    this.height = this.shape.height;
    this.width = this.shape.width;
    this.Ae = this.C.Ql;
    this.Oe = this.width
};
g.g.object.W(g.m.gr, g.m.sa);
g.m.jr = function (a, c) {
    g.m.jr.w.constructor.call(this, a, c);
    this.type |= g.m.u.ir;
    this.height = this.shape.height;
    this.width = this.shape.width
};
g.g.object.W(g.m.jr, g.m.sa);
g.m.$q = function (a, c) {
    g.m.$q.w.constructor.call(this, a, c);
    this.type |= g.m.u.Zq;
    this.height = this.shape.height;
    this.width = this.shape.width
};
g.g.object.W(g.m.$q, g.m.sa);
g.m.Fl = function (a, c) {
    g.m.Fl.w.constructor.call(this, a, c.connection);
    this.type |= g.m.u.mg;
    this.input = c;
    this.align = c.align;
    (this.Ni = c.connection && z(c.connection) ? z(c.connection) : null) ? (a = H(this.Ni), this.hm = a.width, this.Vo = a.height) : this.Vo = this.hm = 0;
    this.connection = c.connection;
    this.Ae = 0
};
g.g.object.W(g.m.Fl, g.m.sa);
g.m.bh = function (a, c) {
    g.m.bh.w.constructor.call(this, a, c);
    this.type |= g.m.u.Iv;
    this.Ni ? (this.width = this.hm, this.height = this.Vo) : (this.height = this.C.iB, this.width = this.shape.width + this.C.jB);
    this.Ae = this.C.Ql;
    this.im = this.shape.height;
    this.sh = this.shape.width
};
g.g.object.W(g.m.bh, g.m.Fl);
g.m.kh = function (a, c) {
    g.m.kh.w.constructor.call(this, a, c);
    this.type |= g.m.u.lw;
    this.height = this.Ni ? this.Vo + this.C.CC : this.C.kB;
    this.width = this.C.Ao + this.shape.width
};
g.g.object.W(g.m.kh, g.m.Fl);
g.m.oo = function (a, c) {
    g.m.oo.w.constructor.call(this, a, c);
    this.type |= g.m.u.Dv;
    this.height = this.Ni ? this.Vo - 2 * this.C.Ql : this.shape.height;
    this.width = this.shape.width + this.C.lB;
    this.Ae = this.C.Ql;
    this.im = this.shape.height;
    this.sh = this.shape.width
};
g.g.object.W(g.m.oo, g.m.Fl);
g.m.Id = function (a, c) {
    g.m.Id.w.constructor.call(this, a);
    this.icon = c;
    this.isVisible = c.isVisible();
    this.type |= g.m.u.Gv;
    a = new g.g.Te(g.Id.prototype.Go, g.Id.prototype.Go - 2);
    this.height = a.height;
    this.width = a.width
};
g.g.object.W(g.m.Id, g.m.fh);
g.m.Sq = function (a) {
    g.m.Sq.w.constructor.call(this, a);
    this.type |= g.m.u.Nv;
    this.height = this.C.bk.height;
    this.width = this.C.bk.width
};
g.g.object.W(g.m.Sq, g.m.fh);
g.m.Na = function (a, c) {
    g.m.Na.w.constructor.call(this, a);
    this.Jx = c;
    this.jd = c.kg && !!c.B && c.B.jd();
    this.wE = !1;
    this.type |= g.m.u.re;
    a = this.Jx.Kg();
    this.height = a.height;
    this.width = a.width
};
g.g.object.W(g.m.Na, g.m.fh);
g.m.Pq = function (a) {
    g.m.Pq.w.constructor.call(this, a);
    this.type |= g.m.u.Ev;
    this.height = this.C.sg.height;
    this.width = this.C.sg.width;
    this.nk = this.height
};
g.g.object.W(g.m.Pq, g.m.fh);
g.m.Jo = function (a, c) {
    g.m.Jo.w.constructor.call(this, a);
    this.type = (c && "left" != c ? g.m.u.mr : g.m.u.Uq) | g.m.u.Gq;
    this.width = this.height = this.C.wf
};
g.g.object.W(g.m.Jo, g.m.fh);
g.m.Fo = function (a, c) {
    g.m.Fo.w.constructor.call(this, a);
    this.type = (c && "left" != c ? g.m.u.lr : g.m.u.Tq) | g.m.u.Gq;
    this.width = this.C.wb;
    this.height = this.C.wb / 2
};
g.g.object.W(g.m.Fo, g.m.fh);
g.m.og = function (a, c) {
    g.m.og.w.constructor.call(this, a);
    this.type = this.type | g.m.u.rr | g.m.u.Kv;
    this.width = c;
    this.height = this.C.xC
};
g.g.object.W(g.m.og, g.m.fh);
g.m.Di = function (a) {
    this.type = g.m.u.pr;
    this.elements = [];
    this.Ta = this.Kc = this.cg = this.minWidth = this.minHeight = this.width = this.height = 0;
    this.yy = this.Fk = this.kt = this.xd = this.Ch = !1;
    this.C = a;
    this.Ke = this.C.Ao
};
g.m.Di.prototype.measure = function () {
    throw Error("Unexpected attempt to measure a base Row.");
};

function Fc(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--) if (g.m.u.hf(d)) return d;
    return null
}

g.m.Di.prototype.iq = function () {
    return !0
};
g.m.Di.prototype.Os = function () {
    return !0
};

function Gc(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--) if (g.m.u.jf(d)) return d;
    return null
}

g.m.lk = function (a) {
    g.m.lk.w.constructor.call(this, a);
    this.type |= g.m.u.Ar;
    this.nk = this.zg = 0;
    this.hF = !1;
    this.connection = null
};
g.g.object.W(g.m.lk, g.m.Di);
g.m.lk.prototype.mt = function (a) {
    var c = (a.Mg ? "cap" === a.Mg : g.wa.sg) && !a.L && !a.Y, d = a.Y && z(a.Y);
    return !!a.L || c || (d ? q(d) == a : !1)
};
g.m.lk.prototype.measure = function () {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, g.m.u.jf(f) || (g.m.u.jj(f) ? d = Math.max(d, f.nk) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.zg = this.nk = d;
    this.cg = this.width
};
g.m.lk.prototype.iq = function () {
    return !1
};
g.m.Vj = function (a) {
    g.m.Vj.w.constructor.call(this, a);
    this.type |= g.m.u.Aq;
    this.zy = !1;
    this.connection = null;
    this.Ki = this.sm = 0
};
g.g.object.W(g.m.Vj, g.m.Di);
g.m.Vj.prototype.mt = function (a) {
    return !!a.L || !!q(a)
};
g.m.Vj.prototype.measure = function () {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, g.m.u.jf(f) || (g.m.u.Lh(f) ? d = Math.max(d, f.height) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.sm = d;
    this.cg = this.width
};
g.m.Vj.prototype.iq = function () {
    return !1
};
g.m.Io = function (a, c, d) {
    g.m.Io.w.constructor.call(this, a);
    this.type = this.type | g.m.u.rr | g.m.u.kv;
    this.width = d;
    this.height = c;
    this.Sx = !1;
    this.cg = 0;
    this.elements = [new g.m.og(this.C, d)]
};
g.g.object.W(g.m.Io, g.m.Di);
g.m.Io.prototype.measure = function () {
};
g.m.ak = function (a) {
    g.m.ak.w.constructor.call(this, a);
    this.type |= g.m.u.Jv;
    this.$w = 0
};
g.g.object.W(g.m.ak, g.m.Di);
g.m.ak.prototype.measure = function () {
    this.width = this.minWidth;
    this.height = this.minHeight;
    for (var a = 0, c = 0, d; d = this.elements[c]; c++) this.width += d.width, g.m.u.hf(d) && (g.m.u.Tm(d) ? a += d.hm : g.m.u.Pm(d) && 0 != d.hm && (a += d.hm - d.sh)), g.m.u.jf(d) || (this.height = Math.max(this.height, d.height));
    this.$w = a;
    this.cg = this.width + a
};
g.m.ak.prototype.Os = function () {
    return !this.Ch && !this.xd
};
g.m.ih = function (a, c) {
    this.S = c;
    this.Ug = a;
    this.C = this.Ug.C;
    this.L = c.L ? new g.m.gr(this.C, c.L) : null;
    this.wt = Ga(c) && !c.isCollapsed();
    this.isCollapsed = c.isCollapsed();
    this.Jh = c.Jh();
    this.G = c.G;
    this.Gj = this.width = this.ol = this.height = 0;
    this.rows = [];
    this.Dy = [];
    this.kc = new g.m.lk(this.C);
    this.Jb = new g.m.Vj(this.C);
    this.hq = this.Oe = 0
};
b = g.m.ih.prototype;
b.measure = function () {
    var a = !!this.S.Y, c = (this.S.Mg ? "cap" === this.S.Mg : g.wa.sg) && !this.L && !a;
    this.kc.mt(this.S) ? this.kc.elements.push(new g.m.Jo(this.C)) : this.kc.elements.push(new g.m.Fo(this.C));
    c ? (a = new g.m.Pq(this.C), this.kc.elements.push(a), this.kc.zg = a.nk) : a && (this.kc.hF = !0, this.kc.connection = new g.m.jr(this.C, this.S.Y), this.kc.elements.push(this.kc.connection));
    this.S.R.length && this.S.R[0].type == g.jb && !this.S.isCollapsed() ? this.kc.minHeight = this.C.td : this.kc.minHeight = this.C.vf;
    this.rows.push(this.kc);
    a = new g.m.ak(this.C);
    var d = Ma(this.S);
    if (d.length) {
        c = 0;
        for (var e; e = d[c]; c++) {
            var f = new g.m.Id(this.C, e);
            this.isCollapsed && e.Tw ? this.Dy.push(f) : a.elements.push(f)
        }
    }
    e = null;
    for (c = 0; d = this.S.R[c]; c++) if (d.isVisible()) {
        !e || d.type != g.jb && e.type != g.jb && (d.type != g.Wa && d.type != g.jg || this.wt) || (this.rows.push(a), a = new g.m.ak(this.C));
        for (e = 0; f = d.Pa[e]; e++) a.elements.push(new g.m.Na(this.C, f, d));
        this.Dw(d, a);
        e = d
    }
    this.isCollapsed && (a.yy = !0, a.elements.push(new g.m.Sq(this.C)));
    (a.elements.length || a.Fk) && this.rows.push(a);
    this.Jb.zy = !!this.S.X;
    this.Jb.minHeight = this.S.R.length && this.S.R[this.S.R.length - 1].type == g.jb ? this.C.td : this.C.vf - 1;
    this.Jb.mt(this.S) ? this.Jb.elements.push(new g.m.Jo(this.C)) : this.Jb.elements.push(new g.m.Fo(this.C));
    this.Jb.zy && (this.Jb.connection = new g.m.$q(this.C, this.S.X), this.Jb.elements.push(this.Jb.connection));
    this.rows.push(this.Jb);
    this.Cw();
    for (e = d = c = a = 0; f = this.rows[e]; e++) f.measure(), c = Math.max(c, f.width), f.xd && (a = Math.max(a, f.width - Fc(f).width)), d = Math.max(d, f.cg);
    this.Gj = a;
    this.width =
        c;
    for (e = 0; f = this.rows[e]; e++) f.xd && (f.Gj = this.Gj);
    this.ol = Math.max(c, d);
    this.L && (this.Oe = this.L.width, this.width += this.L.width, this.ol += this.L.width);
    for (a = 0; c = this.rows[a]; a++) c.xd ? (d = Fc(c), e = c.width - d.width, f = this.Gj, (e = f - e) && this.Gr(c, e), e = c.width, f = this.width - this.Oe - (this.C.El.XL || 0), d.width += f - e, c.width += f - e, c.cg = Math.max(c.width, this.Gj + c.$w)) : (d = this.width - this.Oe - c.width) && this.Gr(c, d);
    a = this.rows;
    this.rows = [];
    for (c = 0; c < a.length; c++) this.rows.push(a[c]), c != a.length - 1 && this.rows.push(Hc(this,
        a[c], a[c + 1]));
    this.Kx()
};
b.Dw = function (a, c) {
    this.wt && a.type == g.Wa ? (c.elements.push(new g.m.bh(this.C, a)), c.kt = !0) : a.type == g.jb ? (c.elements.push(new g.m.kh(this.C, a)), c.xd = !0) : a.type == g.Wa ? (c.elements.push(new g.m.oo(this.C, a)), c.Ch = !0) : a.type == g.jg && (c.minHeight = Math.max(c.minHeight, this.C.Cv), c.Fk = !0);
    c.align = a.align
};
b.Cw = function () {
    for (var a = 0, c; c = this.rows[a]; a++) {
        var d = c.elements;
        c.elements = [];
        c.iq() && c.elements.push(new g.m.og(this.C, this.$i(null, d[0])));
        for (var e = 0; e < d.length - 1; e++) c.elements.push(d[e]), c.elements.push(new g.m.og(this.C, this.$i(d[e], d[e + 1])));
        c.elements.push(d[d.length - 1]);
        c.Os() && c.elements.push(new g.m.og(this.C, this.$i(d[d.length - 1], null)))
    }
};
b.$i = function (a, c) {
    if (a && g.m.u.hf(a) && !c) {
        if (g.m.u.Pm(a)) return this.C.wf;
        if (g.m.u.Ih(a)) return this.C.td;
        if (g.m.u.Tm(a)) return this.C.wf
    }
    return a && g.m.u.Sm(a) && c && (g.m.u.Qk(c) || g.m.u.Lh(c)) ? c.Ke : a && g.m.u.Kh(a) && c && (g.m.u.Qk(c) || g.m.u.Lh(c)) ? c.Ke - this.C.wb : this.C.vf
};
b.Gr = function (a, c) {
    var d = Gc(a);
    d && (d.width += c, a.width += c)
};

function Hc(a, c, d) {
    a = new g.m.Io(a.C, a.jy(c, d), a.width - a.Oe);
    c.xd && (a.Sx = !0);
    return a
}

b.jy = function () {
    return this.C.vf
};
b.Zx = function (a, c) {
    return g.m.u.jf(c) ? a.Kc + c.height / 2 : g.m.u.Ap(a) ? (a = a.Kc + a.height - a.sm, g.m.u.Lh(c) ? a + c.height / 2 : a - c.height / 2) : g.m.u.Hp(a) ? g.m.u.jj(c) ? a.zg - c.height / 2 : a.zg + c.height / 2 : a.Kc + a.height / 2
};

function Ic(a, c) {
    for (var d = c.Ta, e = 0, f; f = c.elements[e]; e++) g.m.u.jf(f) && (f.height = c.height), f.Ta = d, f.ph = a.Zx(c, f), d += f.width
}

b.Kx = function () {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) e.Kc = c, e.Ta = this.Oe, c += e.height, a = Math.max(a, e.cg), Ic(this, e);
    this.ol = a + this.Oe;
    this.height = c;
    this.hq = this.kc.zg;
    this.Jb.Ki = c - this.Jb.sm
};
g.m.dd = function (a, c) {
    this.S = a;
    this.pa = c;
    a.Qa();
    this.zp = this.Ma = "";
    this.C = c.Ug.C
};
b = g.m.dd.prototype;
b.draw = function () {
    Jc(this);
    Kc(this);
    Lc(this);
    this.S.yj.Fu(this.Ma + "\n" + this.zp);
    this.pa.G && this.S.yj.Rs();
    g.m.Sn && this.S.vu.oE(this.S, this.pa);
    Mc(this)
};

function Mc(a) {
    a.S.height = a.pa.height;
    a.S.width = a.pa.ol
}

function Jc(a) {
    for (var c = 0, d; d = a.pa.Dy[c]; c++) d.icon.Nd.setAttribute("display", "none")
}

function Kc(a) {
    a.Js();
    for (var c = 1; c < a.pa.rows.length - 1; c++) {
        var d = a.pa.rows[c];
        d.yy ? a.wm(d) : d.xd ? a.Is(d) : d.Ch ? a.Ks(d) : a.Hs(d)
    }
    a.Ds();
    a.Gs()
}

b.Js = function () {
    var a = this.pa.kc, c = a.elements, d = this.pa.kc;
    if (d.connection) {
        var e = d.Ta + d.Ke;
        cc(d.connection.hs, this.pa.G ? -e : e, 0)
    }
    this.Ma += g.g.A.moveBy(a.Ta, this.pa.hq);
    for (d = 0; e = c[d]; d++) g.m.u.Kh(e) ? this.Ma += this.C.Zv.Uu : g.m.u.Qk(e) ? this.Ma += e.shape.Xh : g.m.u.jj(e) ? this.Ma += this.C.sg.path : g.m.u.jf(e) && (this.Ma += g.g.A.ea("h", e.width));
    this.Ma += g.g.A.ea("v", a.height)
};
b.wm = function (a) {
    this.Ma += this.C.bk.path + g.g.A.ea("v", a.height - this.C.bk.height)
};
b.Ks = function (a) {
    var c = Fc(a);
    this.Cz(a);
    var d = "function" == typeof c.shape.Me ? c.shape.Me(c.height) : c.shape.Me;
    this.Ma += g.g.A.ea("H", c.Ta + c.width) + d + g.g.A.ea("v", a.height - c.im)
};
b.Is = function (a) {
    var c = Fc(a);
    this.Ma += g.g.A.ea("H", c.Ta + c.Ke + c.shape.width) + (c.shape.zz + g.g.A.ea("h", -(c.Ke - this.C.El.width)) + this.C.El.mu) + g.g.A.ea("v", a.height - 2 * this.C.El.height) + this.C.El.Rp + g.g.A.ea("H", a.Ta + a.width);
    this.Fz(a)
};
b.Hs = function (a) {
    this.Ma += g.g.A.ea("V", a.Kc + a.height)
};
b.Ds = function () {
    var a = this.pa.Jb, c = a.elements;
    this.Ez();
    this.Ma += g.g.A.ea("V", a.Ki);
    for (var d = c.length - 1, e; e = c[d]; d--) g.m.u.Lh(e) ? this.Ma += e.shape.zz : g.m.u.Sm(e) ? this.Ma += g.g.A.ea("H", a.Ta) : g.m.u.Kh(e) ? this.Ma += this.C.Zv.Tr : g.m.u.jf(e) && (this.Ma += g.g.A.ea("h", -1 * e.width))
};
b.Gs = function () {
    var a = this.pa.L;
    if (this.pa.L) {
        var c = this.pa.Oe;
        cc(this.S.L, this.pa.G ? -c : c, this.pa.L.Ae)
    }
    a && (c = a.Ae + a.height, a = "function" == typeof a.shape.hn ? a.shape.hn(a.height) : a.shape.hn, this.Ma += g.g.A.ea("V", c) + a);
    this.Ma += "z"
};

function Lc(a) {
    for (var c = 0, d; d = a.pa.rows[c]; c++) for (var e = 0, f; f = d.elements[e]; e++) if (g.m.u.Ih(f)) a.Fs(f); else if (g.m.u.Ok(f) || g.m.u.Qm(f)) {
        var h = a;
        if (g.m.u.Qm(f)) var k = f.Jx.ya(); else g.m.u.Ok(f) && (k = f.icon.Nd);
        var l = f.ph - f.height / 2, m = f.Ta, n = "";
        h.pa.G && (m = -(m + f.width), f.wE && (m += f.width, n = "scale(-1 1)"));
        g.m.u.Ok(f) ? (k.setAttribute("display", "block"), k.setAttribute("transform", "translate(" + m + "," + l + ")"), hc(f.icon)) : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.pa.Jh && k.setAttribute("display",
            "none")
    }
}

b.Fs = function (a) {
    var c = a.width, d = a.height, e = a.Ae, f = a.im + e;
    this.zp += g.g.A.moveTo(a.Ta + a.sh, a.ph - d / 2) + g.g.A.ea("v", e) + a.shape.Me + g.g.A.ea("v", d - f) + g.g.A.ea("h", c - a.sh) + g.g.A.ea("v", -d) + "z";
    this.Dz(a)
};
b.Dz = function (a) {
    var c = a.ph - a.height / 2;
    if (a.connection) {
        var d = a.Ta + a.sh;
        this.pa.G && (d *= -1);
        cc(a.connection, d, c + a.Ae)
    }
};
b.Fz = function (a) {
    var c = Fc(a);
    if (c.connection) {
        var d = a.Ta + a.Gj + c.Ke;
        this.pa.G && (d *= -1);
        cc(c.connection, d, a.Kc)
    }
};
b.Cz = function (a) {
    var c = Fc(a);
    if (c.connection) {
        var d = a.Ta + a.width;
        this.pa.G && (d *= -1);
        cc(c.connection, d, a.Kc)
    }
};
b.Ez = function () {
    var a = this.pa.Jb;
    if (a.connection) {
        a = a.connection;
        var c = a.Ta;
        cc(a.hs, this.pa.G ? -c : c, a.ph - a.height / 2)
    }
};
g.Aa = function (a, c) {
    this.s = a;
    this.Ep = c;
    this.Pd = null;
    this.C = a.Ug.C
};
g.Aa.lo = 5;
g.Aa.Wj = 100;
g.Aa.uJ = 24;
g.Aa.iL = 5;
g.Aa.Ho = 10;
g.Aa.nv = 2;
g.Aa.xB = .75;
g.Aa.jo = "#cc0a0a";
g.Aa.YB = "#4286f4";
g.Aa.YA = "blocklyCursor";
g.Aa.XB = "blocklyMarker";
b = g.Aa.prototype;
b.qm = null;
b.ya = function () {
    return this.N
};
b.Oa = function () {
    this.N = g.g.o.M("g", {"class": this.Ep ? g.Aa.XB : g.Aa.YA}, null);
    var a = this.Ep ? g.Aa.YB : g.Aa.jo;
    this.Tc = g.g.o.M("g", {width: g.Aa.Wj, height: g.Aa.lo}, this.N);
    this.xk = g.g.o.M("rect", {
        x: "0",
        y: "0",
        fill: a,
        width: g.Aa.Wj,
        height: g.Aa.lo,
        style: "display: none;"
    }, this.Tc);
    this.yk = g.g.o.M("rect", {
        "class": "blocklyVerticalCursor",
        x: "0",
        y: "0",
        rx: "10",
        ry: "10",
        style: "display: none;",
        stroke: a
    }, this.Tc);
    this.rm = g.g.o.M("path", {
        width: g.Aa.Wj,
        height: g.Aa.lo,
        transform: "",
        style: "display: none;",
        fill: a
    }, this.Tc);
    this.Si = g.g.o.M("path", {
        width: g.Aa.Wj,
        height: g.Aa.lo,
        transform: "",
        style: "display: none;",
        fill: "none",
        stroke: a,
        "stroke-width": "4"
    }, this.Tc);
    this.Ep || (g.g.o.M("animate", {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: g.Aa.jo + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, this.xk), g.g.o.M("animate", {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: g.Aa.jo + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, this.rm), g.g.o.M("animate", {
        attributeType: "XML", attributeName: "stroke",
        dur: "1s", values: g.Aa.jo + ";transparent;transparent;", repeatCount: "indefinite"
    }, this.Si));
    return this.N
};

function Nc(a, c) {
    a.Ep ? (a.Pd && a.Pd.wn(null), c.wn(a.ya())) : (a.Pd && a.Pd.vn(null), c.vn(a.ya()));
    a.Pd = c
}

function Oc(a, c) {
    if (c) {
        var d = c.width, e = c.height, f = e * g.Aa.xB;
        c.Y ? (e = g.Aa.nv, d = g.g.A.moveBy(-1 * e, f) + g.g.A.ea("V", -1 * e) + g.g.A.ea("H", a.C.Ao) + a.C.ek.Xh + g.g.A.ea("H", d + 2 * e) + g.g.A.ea("V", f), a.Si.setAttribute("d", d)) : c.L ? (d = g.g.A.moveBy(d, 0) + g.g.A.ea("h", -1 * (d - a.C.Ai.width)) + g.g.A.ea("v", a.C.Ql) + a.C.Ai.Me + g.g.A.ea("V", e) + g.g.A.ea("H", d), a.Si.setAttribute("d", d)) : (e = g.Aa.nv, d = g.g.A.moveBy(-1 * e, f) + g.g.A.ea("V", -1 * e) + g.g.A.ea("H", d + 2 * e) + g.g.A.ea("V", f), a.Si.setAttribute("d", d));
        a.s.G && a.Si.setAttribute("transform",
            "scale(-1 1)");
        a.qm = a.Si;
        Nc(a, c);
        Pc(a)
    }
}

function Pc(a) {
    a.Ca();
    a.qm.style.display = ""
}

function Qc(a, c, d, e) {
    a.xk.setAttribute("x", c);
    a.xk.setAttribute("y", d);
    a.xk.setAttribute("width", e);
    a.qm = a.xk
}

function Rc(a, c, d, e, f) {
    a.yk.setAttribute("x", c);
    a.yk.setAttribute("y", d);
    a.yk.setAttribute("width", e);
    a.yk.setAttribute("height", f);
    a.qm = a.yk
}

b.Ca = function () {
    this.xk.style.display = "none";
    this.yk.style.display = "none";
    this.rm.style.display = "none";
    this.Si.style.display = "none"
};
b.draw = function (a) {
    if (a) if (a.Mb() === g.F.types.Vd) Oc(this, a.qa); else if (a.Mb() === g.F.types.hk) Oc(this, a.qa.B); else if (a.qa.type === g.Wa) {
        var c = a.qa;
        a = c.B;
        var d = c.uj.x;
        c = c.uj.y;
        var e = g.g.A.moveTo(0, 0) + this.C.Ai.Me;
        this.rm.setAttribute("d", e);
        this.rm.setAttribute("transform", "translate(" + d + "," + c + ")" + (this.s.G ? " scale(-1 1)" : ""));
        this.qm = this.rm;
        Nc(this, a);
        Pc(this)
    } else if (a.qa.type === g.jb) c = a.qa, a = c.B, d = 0, c = c.uj.y, e = H(a).width, this.s.G && (d = -e), Qc(this, d, c, e), Nc(this, a), Pc(this); else if (a.Mb() === g.F.types.we) Oc(this,
        a.qa.B); else if (a.Mb() === g.F.types.re) a = a.qa, d = a.Kg().width, c = a.Kg().height, Rc(this, 0, 0, d, c), Nc(this, a), Pc(this); else if (a.Mb() === g.F.types.Ii) d = a.sA, a = d.x, d = d.y, this.s.G && (a -= g.Aa.Wj), Qc(this, a, d, g.Aa.Wj), Nc(this, this.s), Pc(this); else {
        if (a.Mb() === g.F.types.xf) {
            a = a.qa;
            c = H(a);
            d = c.width + g.Aa.Ho;
            c = c.height + g.Aa.Ho;
            var f = e = -1 * g.Aa.Ho / 2, h = -1 * g.Aa.Ho / 2;
            this.s.G && (f = -(d + e));
            Rc(this, f, h, d, c);
            Nc(this, a);
            Pc(this)
        }
    } else this.Ca()
};
b.I = function () {
    this.N && g.g.o.removeNode(this.N)
};
g.m.jh = function () {
    this.C = null
};
b = g.m.jh.prototype;
b.T = function () {
    this.C = this.Xy();
    this.C.T()
};
b.Xy = function () {
    return new g.m.pi
};
b.$y = function (a) {
    return new g.m.ih(this, a)
};
b.Yy = function (a, c) {
    return new g.m.dd(a, c)
};
b.Zy = function (a) {
    return new g.m.Bi(a)
};
b.za = function (a) {
    if (g.m.Sn && !a.vu) {
        if (!g.m.gB) throw Error("Missing require for Blockly.blockRendering.Debug");
        var c = new g.m.gB;
        a.vu = c
    }
    c = this.$y(a);
    c.measure();
    this.Yy(a, c).draw()
};
g.na = {};
g.na.pi = function () {
    g.na.pi.w.constructor.call(this);
    this.rd = 1
};
g.g.object.W(g.na.pi, g.m.pi);
g.na.Fv = function (a) {
    this.pa = a;
    this.Lm = this.ga = "";
    this.Oc = this.pa.G;
    a = a.Ug;
    this.C = a.C;
    this.ff = a.ff;
    this.yd = this.ff.gh;
    this.ju = this.ff.jC;
    this.Mk = this.ff.EB;
    this.ln = this.ff.Ai;
    this.TF = this.ff.ek;
    this.NG = this.ff.sg;
    this.Qy = this.ff.bk
};
g.na.Fv.prototype.wm = function (a) {
    this.pa.G && (this.ga += g.g.A.ea("H", a.width - this.yd), this.ga += this.Qy.Xh, this.ga += g.g.A.ea("v", a.height - this.Qy.height - this.yd))
};

function Sc(a, c) {
    var d = c.Ta + c.width - a.yd;
    c.Sx && (a.ga += g.g.A.ea("H", d));
    a.Oc && (a.ga += g.g.A.ea("H", d), c.height > a.yd && (a.ga += g.g.A.ea("V", c.Kc + c.height - a.yd)))
};g.na.Bi = function (a) {
    this.Ij = a;
    this.Hn = g.g.o.M("path", {"class": "blocklyPathDark", transform: "translate(1,1)"}, this.Ij);
    this.fl = g.g.o.M("path", {"class": "blocklyPath"}, this.Ij);
    this.Jn = g.g.o.M("path", {"class": "blocklyPathLight"}, this.Ij)
};
g.na.Bi.prototype.Fu = function (a, c) {
    this.fl.setAttribute("d", a);
    this.Hn.setAttribute("d", a);
    this.Jn.setAttribute("d", c)
};
g.na.Bi.prototype.Rs = function () {
    this.fl.setAttribute("transform", "scale(-1 1)");
    this.Jn.setAttribute("transform", "scale(-1 1)");
    this.Hn.setAttribute("transform", "translate(1,1) scale(-1 1)")
};
g.na.bh = function (a, c) {
    g.na.bh.w.constructor.call(this, a, c);
    this.Ni && (this.width += this.C.rd, this.height += this.C.rd)
};
g.g.object.W(g.na.bh, g.m.bh);
g.na.kh = function (a, c) {
    g.na.kh.w.constructor.call(this, a, c);
    this.Ni && (this.height += this.C.rd)
};
g.g.object.W(g.na.kh, g.m.kh);
g.na.ih = function (a, c) {
    g.na.ih.w.constructor.call(this, a, c)
};
g.g.object.W(g.na.ih, g.m.ih);
b = g.na.ih.prototype;
b.Dw = function (a, c) {
    this.wt && a.type == g.Wa ? (c.elements.push(new g.na.bh(this.C, a)), c.kt = !0) : a.type == g.jb ? (c.elements.push(new g.na.kh(this.C, a)), c.xd = !0) : a.type == g.Wa ? (c.elements.push(new g.m.oo(this.C, a)), c.Ch = !0) : a.type == g.jg && (c.minHeight = Math.max(c.minHeight, this.C.Cv), c.Fk = !0);
    c.align = a.align
};
b.Cw = function () {
    for (var a = !1, c = 0, d; d = this.rows[c]; c++) d.Ch && (a = !0);
    for (c = 0; d = this.rows[c]; c++) {
        var e = d.elements;
        d.elements = [];
        d.iq() && d.elements.push(new g.m.og(this.C, this.$i(null, e[0])));
        for (var f = 0; f < e.length - 1; f++) {
            d.elements.push(e[f]);
            var h = this.$i(e[f], e[f + 1]);
            d.elements.push(new g.m.og(this.C, h))
        }
        d.elements.push(e[e.length - 1]);
        d.Os() && (h = this.$i(e[e.length - 1], null), a && d.Fk && (h += this.C.tg), d.elements.push(new g.m.og(this.C, h)))
    }
};
b.$i = function (a, c) {
    if (!a) return c && g.m.u.Qm(c) && c.jd ? this.C.vf : c && g.m.u.Ih(c) ? this.C.Sv : c && g.m.u.Tm(c) ? this.C.DC : this.C.td;
    if (!g.m.u.hf(a) && !c) return g.m.u.Qm(a) && a.jd ? this.C.vf : g.m.u.Ok(a) ? 2 * this.C.td + 1 : g.m.u.jj(a) ? this.C.wf : g.m.u.vF(a) ? this.C.td : g.m.u.Kh(a) ? this.C.cC : g.m.u.Oy(a) ? this.C.wf : this.C.td;
    if (g.m.u.hf(a) && !c) {
        if (g.m.u.Pm(a)) return this.C.wf;
        if (g.m.u.Ih(a)) return this.C.td;
        if (g.m.u.Tm(a)) return this.C.wf
    }
    if (!g.m.u.hf(a) && c && g.m.u.hf(c)) {
        if (a.jd) {
            if (g.m.u.Ih(c) || g.m.u.Pm(c)) return this.C.vC
        } else {
            if (g.m.u.Ih(c) ||
                g.m.u.Pm(c)) return this.C.Sv;
            if (g.m.u.Tm(c)) return this.C.td
        }
        return this.C.td - 1
    }
    if (g.m.u.Ok(a) && c && !g.m.u.hf(c)) return this.C.td;
    if (g.m.u.Ih(a) && c && !g.m.u.hf(c)) return c.jd ? this.C.vf : this.C.td;
    if (g.m.u.Sm(a) && c) {
        if (g.m.u.jj(c)) return this.C.wf;
        if (g.m.u.Qk(c)) return c.Ke;
        if (g.m.u.Lh(c)) return a = (this.G ? 1 : -1) * this.C.rd / 2, c.Ke + a
    }
    if (g.m.u.Kh(a) && c) {
        if (g.m.u.Qk(c)) return c.Ke - this.C.wb;
        if (g.m.u.Lh(c)) return a = (this.G ? 1 : -1) * this.C.rd / 2, c.Ke - this.C.wb + a
    }
    return !g.m.u.hf(a) && c && !g.m.u.hf(c) && a.jd == c.jd || c &&
    g.m.u.Oy(c) ? this.C.td : this.C.vf
};
b.Gr = function (a, c) {
    a:{
        var d = 0;
        for (var e; e = a.elements[d]; d++) if (g.m.u.jf(e)) {
            d = e;
            break a
        }
        d = null
    }
    e = Gc(a);
    if (a.Ch || a.xd) a.cg += c;
    a.align == g.xq ? e.width += c : a.align == g.fv ? (d.width += c / 2, e.width += c / 2) : a.align == g.rl ? d.width += c : e.width += c;
    a.width += c
};
b.jy = function (a, c) {
    return g.m.u.Hp(a) && g.m.u.Ap(c) ? this.C.hB : g.m.u.Hp(a) || g.m.u.Ap(c) ? this.C.wf : a.Ch && c.Ch ? this.C.td : !a.xd && c.xd ? this.C.GA : a.xd && c.xd || !a.xd && c.Fk || a.Fk ? this.C.td : this.C.vf
};
b.Zx = function (a, c) {
    if (g.m.u.jf(c)) return a.Kc + c.height / 2;
    if (g.m.u.Ap(a)) return a = a.Kc + a.height - a.sm, g.m.u.Lh(c) ? a + c.height / 2 : a - c.height / 2;
    if (g.m.u.Hp(a)) return g.m.u.jj(c) ? a.zg - c.height / 2 : a.zg + c.height / 2;
    var d = a.Kc;
    g.m.u.Qm(c) || g.m.u.Ok(c) ? (d += c.height / 2, (a.kt || a.xd) && c.height + this.C.ow <= a.height && (d += this.C.ow)) : d = g.m.u.Ih(c) ? d + c.height / 2 : d + a.height / 2;
    return d
};
b.Kx = function () {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) {
        e.Kc = c;
        e.Ta = this.Oe;
        c += e.height;
        a = Math.max(a, e.cg);
        var f = c - this.kc.nk;
        e == this.Jb && f < this.C.Xq && (f = this.C.Xq - f, this.Jb.height += f, c += f);
        Ic(this, e)
    }
    this.Jb.Ki = c - this.Jb.sm;
    this.ol = a + this.Oe + this.C.rd;
    this.width += this.C.rd;
    this.height = c + this.C.rd;
    this.hq = this.kc.zg
};
g.na.dd = function (a, c) {
    g.na.dd.w.constructor.call(this, a, c);
    this.Of = new g.na.Fv(c)
};
g.g.object.W(g.na.dd, g.m.dd);
b = g.na.dd.prototype;
b.draw = function () {
    Jc(this);
    Kc(this);
    Lc(this);
    var a = this.Of;
    this.S.yj.Fu(this.Ma + "\n" + this.zp, a.ga + "\n" + a.Lm);
    this.pa.G && this.S.yj.Rs();
    g.m.Sn && this.S.vu.oE(this.S, this.pa);
    Mc(this)
};
b.Js = function () {
    var a = this.Of, c = this.pa.kc;
    a.ga += g.g.A.moveBy(c.Ta, a.pa.hq);
    for (var d = 0, e; e = c.elements[d]; d++) g.m.u.Sm(e) ? a.ga += a.ff.kw : g.m.u.Kh(e) ? a.ga += a.ju.Uu(a.Oc) : g.m.u.Qk(e) ? a.ga += a.TF.Xh : g.m.u.jj(e) ? a.ga += a.NG.path(a.Oc) : g.m.u.jf(e) && 0 != e.width && (a.ga += g.g.A.ea("H", e.Ta + e.width - a.yd));
    a.ga += g.g.A.ea("H", c.Ta + c.width - a.yd);
    Sc(this.Of, this.pa.kc);
    g.na.dd.w.Js.call(this)
};
b.wm = function (a) {
    this.Of.wm(a);
    g.na.dd.w.wm.call(this, a)
};
b.Ks = function (a) {
    var c = this.Of, d = Fc(a);
    if (c.Oc) {
        var e = a.height - d.im;
        c.ga += g.g.A.moveTo(d.Ta + d.width - c.yd, a.Kc) + c.ln.Me(c.Oc) + g.g.A.ea("v", e)
    } else c.ga += g.g.A.moveTo(d.Ta + d.width, a.Kc) + c.ln.Me(c.Oc);
    g.na.dd.w.Ks.call(this, a)
};
b.Is = function (a) {
    var c = this.Of, d = Fc(a);
    if (c.Oc) {
        var e = a.height - 2 * c.Mk.height;
        c.ga += g.g.A.moveTo(d.Ta, a.Kc) + c.Mk.mu(c.Oc) + g.g.A.ea("v", e) + c.Mk.Rp(c.Oc) + g.g.A.lineTo(a.width - d.Ta - c.Mk.width, 0)
    } else c.ga += g.g.A.moveTo(d.Ta, a.Kc + a.height) + c.Mk.Rp(c.Oc) + g.g.A.lineTo(a.width - d.Ta - c.Mk.width, 0);
    g.na.dd.w.Is.call(this, a)
};
b.Hs = function (a) {
    Sc(this.Of, a);
    g.na.dd.w.Hs.call(this, a)
};
b.Ds = function () {
    var a = this.Of, c = this.pa.Jb;
    if (a.Oc) a.ga += g.g.A.ea("V", c.Ki - a.yd); else {
        var d = a.pa.Jb.elements[0];
        g.m.u.Sm(d) ? a.ga += g.g.A.moveTo(c.Ta + a.yd, c.Ki - a.yd) : g.m.u.Kh(d) && (a.ga += g.g.A.moveTo(c.Ta, c.Ki), a.ga += a.ju.Tr())
    }
    g.na.dd.w.Ds.call(this)
};
b.Gs = function () {
    var a = this.Of, c = a.pa.L;
    c && (c = c.Ae + c.height, a.Oc ? a.ga += g.g.A.moveTo(a.pa.Oe, c) : (a.ga += g.g.A.moveTo(a.pa.Oe + a.yd, a.pa.Jb.Ki - a.yd), a.ga += g.g.A.ea("V", c)), a.ga += a.ln.hn(a.Oc));
    a.Oc || (c = a.pa.kc, a.ga = g.m.u.Kh(c.elements[0]) ? a.ga + g.g.A.ea("V", a.ju.height) : a.ga + g.g.A.ea("V", c.zg + a.yd));
    g.na.dd.w.Gs.call(this)
};
b.Fs = function (a) {
    var c = this.Of, d = c.yd, e = a.Ta + a.sh, f = a.ph - a.height / 2, h = a.width - a.sh, k = f + d;
    if (c.Oc) {
        f = a.Ae - d;
        var l = a.height - (a.Ae + a.im) + d;
        c.Lm += g.g.A.moveTo(e - d, k) + g.g.A.ea("v", f) + c.ln.Me(c.Oc) + g.g.A.ea("v", l) + g.g.A.ea("h", h)
    } else c.Lm += g.g.A.moveTo(a.Ta + a.width + d, k) + g.g.A.ea("v", a.height) + g.g.A.ea("h", -h) + g.g.A.moveTo(e, f + a.Ae) + c.ln.Me(c.Oc);
    g.na.dd.w.Fs.call(this, a)
};
b.Dz = function (a) {
    var c = a.ph - a.height / 2;
    if (a.connection) {
        var d = a.Ta + a.sh + this.C.rd;
        this.pa.G && (d *= -1);
        cc(a.connection, d, c + a.Ae + this.C.rd)
    }
};
b.Fz = function (a) {
    var c = Fc(a);
    if (c.connection) {
        var d = a.Ta + a.Gj + c.Ke;
        d = this.pa.G ? -1 * d : d + this.C.rd;
        cc(c.connection, d, a.Kc + this.C.rd)
    }
};
b.Cz = function (a) {
    var c = Fc(a);
    if (c.connection) {
        var d = a.Ta + a.width + this.C.rd;
        this.pa.G && (d *= -1);
        cc(c.connection, d, a.Kc)
    }
};
b.Ez = function () {
    var a = this.pa.Jb;
    if (a.connection) {
        a = a.connection;
        var c = a.Ta;
        cc(a.hs, (this.pa.G ? -c : c) + this.C.rd / 2, a.ph - a.height / 2 + this.C.rd)
    }
};
g.na.Cl = function (a) {
    this.wk = a;
    this.gh = .5;
    this.kw = g.g.A.moveBy(this.gh, this.gh);
    this.EB = Tc(this);
    this.jC = Uc(this);
    this.Ai = this.Lt();
    this.ek = this.Kt();
    this.bk = this.Jt();
    this.sg = this.Mt()
};

function Tc(a) {
    var c = a.wk.wb;
    a = a.gh;
    var d = (1 - Math.SQRT1_2) * (c + a) - a,
        e = g.g.A.moveBy(d, d) + g.g.A.arc("a", "0 0,0", c, g.g.A.Va(-d - a, c - d)),
        f = g.g.A.arc("a", "0 0,0", c + a, g.g.A.Va(c + a, c + a)),
        h = g.g.A.moveBy(d, -d) + g.g.A.arc("a", "0 0,0", c + a, g.g.A.Va(c - d, d + a));
    return {
        width: c + a, height: c, mu: function (k) {
            return k ? e : ""
        }, Rp: function (k) {
            return k ? f : h
        }
    }
}

function Uc(a) {
    var c = a.wk.wb;
    a = a.gh;
    var d = (1 - Math.SQRT1_2) * (c - a) + a,
        e = g.g.A.moveBy(d, d) + g.g.A.arc("a", "0 0,1", c - a, g.g.A.Va(c - d, -d + a)),
        f = g.g.A.moveBy(a, c) + g.g.A.arc("a", "0 0,1", c - a, g.g.A.Va(c, -c + a)), h = -d,
        k = g.g.A.moveBy(d, h) + g.g.A.arc("a", "0 0,1", c - a, g.g.A.Va(-d + a, -h - c));
    return {
        height: c, Uu: function (l) {
            return l ? e : f
        }, Tr: function () {
            return k
        }
    }
}

g.na.Cl.prototype.Lt = function () {
    var a = this.wk.tg, c = this.wk.Ko, d = g.g.A.moveBy(-2, -c + 3.4) + g.g.A.lineTo(-.45 * a, -2.1),
        e = g.g.A.ea("v", 2.5) + g.g.A.moveBy(.97 * -a, 2.5) + g.g.A.curve("q", [g.g.A.Va(.05 * -a, 10), g.g.A.Va(.3 * a, 9.5)]) + g.g.A.moveBy(.67 * a, -1.9) + g.g.A.ea("v", 2.5),
        f = g.g.A.ea("v", -1.5) + g.g.A.moveBy(-.92 * a, -.5) + g.g.A.curve("q", [g.g.A.Va(-.19 * a, -5.5), g.g.A.Va(0, -11)]) + g.g.A.moveBy(.92 * a, 1),
        h = g.g.A.moveBy(-5, c - .7) + g.g.A.lineTo(.46 * a, -2.1);
    return {
        width: a, height: c, hn: function (k) {
            return k ? d : f
        }, Me: function (k) {
            return k ?
                e : h
        }
    }
};
g.na.Cl.prototype.Kt = function () {
    return {Xh: g.g.A.ea("h", this.gh) + this.wk.ek.Xh}
};
g.na.Cl.prototype.Jt = function () {
    return {Xh: g.g.A.lineTo(5.1, 2.6) + g.g.A.moveBy(-10.2, 6.8) + g.g.A.lineTo(5.1, 2.6)}
};
g.na.Cl.prototype.Mt = function () {
    var a = this.wk.sg.height,
        c = g.g.A.moveBy(25, -8.7) + g.g.A.curve("c", [g.g.A.Va(29.7, -6.2), g.g.A.Va(57.2, -.5), g.g.A.Va(75, 8.7)]),
        d = g.g.A.curve("c", [g.g.A.Va(17.8, -9.2), g.g.A.Va(45.3, -14.9), g.g.A.Va(75, -8.7)]) + g.g.A.moveTo(100.5, a + .5);
    return {
        path: function (e) {
            return e ? c : d
        }
    }
};
g.na.jh = function () {
    g.na.jh.w.constructor.call(this);
    this.ff = null
};
g.g.object.W(g.na.jh, g.m.jh);
b = g.na.jh.prototype;
b.T = function () {
    g.na.jh.w.T.call(this);
    this.ff = new g.na.Cl(this.C)
};
b.Xy = function () {
    return new g.na.pi
};
b.$y = function (a) {
    return new g.na.ih(this, a)
};
b.Yy = function (a, c) {
    return new g.na.dd(a, c)
};
b.Zy = function (a) {
    return new g.na.Bi(a)
};
g.m.register("geras", g.na.jh);
var Vc = {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        bn: "\u09ac\u09be\u0982\u09b2\u09be",
        br: "Brezhoneg",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        eo: "Esperanto",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        gl: "Galego",
        ha: "Hausa",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hu: "Magyar",
        hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        ig: "As\u1ee5s\u1ee5 Igbo",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        kab: "Taqbaylit",
        ko: "\ud55c\uad6d\uc5b4",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        ms: "Bahasa Melayu",
        my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sk: "Sloven\u010dina",
        sl: "Sloven\u0161\u010dina",
        sq: "Shqip",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        ti: "\u1275\u130d\u122d\u129b",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
        "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    }, Wc = "ace ar fa he mzn ps ur".split(" "), Xc = window.BlocklyGamesLang, Yc = window.BlocklyGamesLanguages,
    Zc = /\.html$/.test(window.location.pathname), R, $c = Number, ad,
    bd = window.location.search.match(/[?&]level=([^&]+)/);
ad = bd ? decodeURIComponent(bd[1].replace(/\+/g, "%20")) : "NaN";
var cd = $c(ad);
R = isNaN(cd) ? 1 : g.g.Ha.Cf(1, cd, 10);

function dd() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != Wc.indexOf(Xc) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", Xc);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var c = [], d = 0; d < Yc.length; d++) {
            var e = Yc[d];
            c.push([Vc[e], e])
        }
        c.sort(function (h, k) {
            return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0
        });
        for (d = a.options.length = 0; d < c.length; d++) {
            var f = c[d];
            e = f[1];
            f = new Option(f[0], e);
            e == Xc && (f.selected = !0);
            a.options.add(f)
        }
        1 >= a.options.length && (a.style.display =
            "none")
    }
    for (d = 1; 10 >= d; d++) a = document.getElementById("level" + d), c = !!ed(d), a && c && (a.className += " level_done");
    (d = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(fd, 1)
}

function ed(a) {
    var c = gd;
    try {
        var d = window.localStorage[c + a]
    } catch (e) {
    }
    return d
}

function T(a) {
    var c;
    (c = document.getElementById(a)) ? (c = c.textContent, c = c.replace(/\\n/g, "\n")) : c = null;
    return null === c ? "[Unknown message: " + a + "]" : c
}

function hd(a, c) {
    if (!a) throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", c, !0);
    a.addEventListener("touchend", c, !0)
}

function id(a) {
    a %= 360;
    0 > a && (a += 360);
    return a
}

function fd() {
    if (!Zc) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function (d) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var c = document.createElement("script");
        c.async = 1;
        c.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(c);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};g.h.ADD_COMMENT = "Add Comment";
g.h.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.h.CHANGE_VALUE_TITLE = "Change value:";
g.h.CLEAN_UP = "Clean up Blocks";
g.h.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
g.h.COLLAPSE_ALL = "Collapse Blocks";
g.h.COLLAPSE_BLOCK = "Collapse Block";
g.h.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
g.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
g.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
g.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
g.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
g.h.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
g.h.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
g.h.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
g.h.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
g.h.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
g.h.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
g.h.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
g.h.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
g.h.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
g.h.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.h.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
g.h.CONTROLS_IF_MSG_ELSE = "else";
g.h.CONTROLS_IF_MSG_ELSEIF = "else if";
g.h.CONTROLS_IF_MSG_IF = "if";
g.h.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
g.h.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
g.h.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
g.h.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
g.h.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
g.h.CONTROLS_REPEAT_INPUT_DO = "do";
g.h.CONTROLS_REPEAT_TITLE = "repeat %1 times";
g.h.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
g.h.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
g.h.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
g.h.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
g.h.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
g.h.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
g.h.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
g.h.DELETE_BLOCK = "Delete Block";
g.h.DELETE_VARIABLE = "Delete the '%1' variable";
g.h.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
g.h.DELETE_X_BLOCKS = "Delete %1 Blocks";
g.h.DISABLE_BLOCK = "Disable Block";
g.h.DUPLICATE_BLOCK = "Duplicate";
g.h.ENABLE_BLOCK = "Enable Block";
g.h.EXPAND_ALL = "Expand Blocks";
g.h.EXPAND_BLOCK = "Expand Block";
g.h.EXTERNAL_INPUTS = "External Inputs";
g.h.HELP = "Help";
g.h.INLINE_INPUTS = "Inline Inputs";
g.h.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
g.h.LISTS_CREATE_EMPTY_TITLE = "create empty list";
g.h.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
g.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
g.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
g.h.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.h.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
g.h.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
g.h.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
g.h.LISTS_GET_INDEX_FIRST = "first";
g.h.LISTS_GET_INDEX_FROM_END = "# from end";
g.h.LISTS_GET_INDEX_FROM_START = "#";
g.h.LISTS_GET_INDEX_GET = "get";
g.h.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
g.h.LISTS_GET_INDEX_LAST = "last";
g.h.LISTS_GET_INDEX_RANDOM = "random";
g.h.LISTS_GET_INDEX_REMOVE = "remove";
g.h.LISTS_GET_INDEX_TAIL = "";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Returns the item at the specified position in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Removes and returns the item at the specified position in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Removes the item at the specified position in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
g.h.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
g.h.LISTS_GET_SUBLIST_END_FROM_START = "to #";
g.h.LISTS_GET_SUBLIST_END_LAST = "to last";
g.h.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
g.h.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
g.h.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
g.h.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
g.h.LISTS_GET_SUBLIST_TAIL = "";
g.h.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
g.h.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
g.h.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
g.h.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
g.h.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
g.h.LISTS_INDEX_OF_LAST = "find last occurrence of item";
g.h.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
g.h.LISTS_INLIST = "in list";
g.h.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
g.h.LISTS_ISEMPTY_TITLE = "%1 is empty";
g.h.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
g.h.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
g.h.LISTS_LENGTH_TITLE = "length of %1";
g.h.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
g.h.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.h.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
g.h.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
g.h.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
g.h.LISTS_REVERSE_MESSAGE0 = "reverse %1";
g.h.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
g.h.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
g.h.LISTS_SET_INDEX_INPUT_TO = "as";
g.h.LISTS_SET_INDEX_INSERT = "insert at";
g.h.LISTS_SET_INDEX_SET = "set";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserts the item at the specified position in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Sets the item at the specified position in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
g.h.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
g.h.LISTS_SORT_ORDER_ASCENDING = "ascending";
g.h.LISTS_SORT_ORDER_DESCENDING = "descending";
g.h.LISTS_SORT_TITLE = "sort %1 %2 %3";
g.h.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
g.h.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
g.h.LISTS_SORT_TYPE_NUMERIC = "numeric";
g.h.LISTS_SORT_TYPE_TEXT = "alphabetic";
g.h.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
g.h.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
g.h.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
g.h.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.";
g.h.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.";
g.h.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
g.h.LOGIC_BOOLEAN_FALSE = "false";
g.h.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
g.h.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
g.h.LOGIC_BOOLEAN_TRUE = "true";
g.h.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.h.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
g.h.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
g.h.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
g.h.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
g.h.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
g.h.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
g.h.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.h.LOGIC_NEGATE_TITLE = "not %1";
g.h.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.";
g.h.LOGIC_NULL = "null";
g.h.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
g.h.LOGIC_NULL_TOOLTIP = "Returns null.";
g.h.LOGIC_OPERATION_AND = "and";
g.h.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.h.LOGIC_OPERATION_OR = "or";
g.h.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
g.h.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
g.h.LOGIC_TERNARY_CONDITION = "test";
g.h.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.h.LOGIC_TERNARY_IF_FALSE = "if false";
g.h.LOGIC_TERNARY_IF_TRUE = "if true";
g.h.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
g.h.MATH_ADDITION_SYMBOL = "+";
g.h.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
g.h.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
g.h.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
g.h.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
g.h.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
g.h.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
g.h.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.h.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.h.MATH_ATAN2_TOOLTIP = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.h.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.h.MATH_CHANGE_TITLE = "change %1 by %2";
g.h.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
g.h.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
g.h.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
g.h.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.h.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
g.h.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
g.h.MATH_DIVISION_SYMBOL = "\u00f7";
g.h.MATH_IS_DIVISIBLE_BY = "is divisible by";
g.h.MATH_IS_EVEN = "is even";
g.h.MATH_IS_NEGATIVE = "is negative";
g.h.MATH_IS_ODD = "is odd";
g.h.MATH_IS_POSITIVE = "is positive";
g.h.MATH_IS_PRIME = "is prime";
g.h.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
g.h.MATH_IS_WHOLE = "is whole";
g.h.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.h.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
g.h.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
g.h.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.h.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.h.MATH_NUMBER_TOOLTIP = "A number.";
g.h.MATH_ONLIST_HELPURL = "";
g.h.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
g.h.MATH_ONLIST_OPERATOR_MAX = "max of list";
g.h.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
g.h.MATH_ONLIST_OPERATOR_MIN = "min of list";
g.h.MATH_ONLIST_OPERATOR_MODE = "modes of list";
g.h.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
g.h.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
g.h.MATH_ONLIST_OPERATOR_SUM = "sum of list";
g.h.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
g.h.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
g.h.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
g.h.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
g.h.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
g.h.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
g.h.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
g.h.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
g.h.MATH_POWER_SYMBOL = "^";
g.h.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
g.h.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
g.h.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
g.h.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
g.h.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
g.h.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
g.h.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.h.MATH_ROUND_OPERATOR_ROUND = "round";
g.h.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
g.h.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
g.h.MATH_ROUND_TOOLTIP = "Round a number up or down.";
g.h.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.h.MATH_SINGLE_OP_ABSOLUTE = "absolute";
g.h.MATH_SINGLE_OP_ROOT = "square root";
g.h.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
g.h.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
g.h.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
g.h.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
g.h.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
g.h.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
g.h.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
g.h.MATH_SUBTRACTION_SYMBOL = "-";
g.h.MATH_TRIG_ACOS = "acos";
g.h.MATH_TRIG_ASIN = "asin";
g.h.MATH_TRIG_ATAN = "atan";
g.h.MATH_TRIG_COS = "cos";
g.h.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.h.MATH_TRIG_SIN = "sin";
g.h.MATH_TRIG_TAN = "tan";
g.h.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
g.h.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
g.h.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
g.h.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
g.h.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
g.h.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
g.h.NEW_VARIABLE = "Create variable...";
g.h.NEW_VARIABLE_TITLE = "New variable name:";
g.h.ORDINAL_NUMBER_SUFFIX = "";
g.h.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
g.h.PROCEDURES_BEFORE_PARAMS = "with:";
g.h.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.h.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
g.h.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.h.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
g.h.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
g.h.PROCEDURES_CREATE_DO = "Create '%1'";
g.h.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
g.h.PROCEDURES_DEFNORETURN_DO = "";
g.h.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.h.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
g.h.PROCEDURES_DEFNORETURN_TITLE = "to";
g.h.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
g.h.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.h.PROCEDURES_DEFRETURN_RETURN = "return";
g.h.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
g.h.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
g.h.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
g.h.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
g.h.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
g.h.PROCEDURES_MUTATORARG_TITLE = "input name:";
g.h.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
g.h.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
g.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
g.h.REDO = "Redo";
g.h.REMOVE_COMMENT = "Remove Comment";
g.h.RENAME_VARIABLE = "Rename variable...";
g.h.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
g.h.UNDO = "Undo";
g.h.UNNAMED_KEY = "unnamed";
g.h.VARIABLES_DEFAULT_NAME = "item";
g.h.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
g.h.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
g.h.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
g.h.VARIABLES_SET = "set %1 to %2";
g.h.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
g.h.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
g.h.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
g.h.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.";
g.h.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.h.CONTROLS_IF_MSG_ELSEIF;
g.h.CONTROLS_IF_ELSE_TITLE_ELSE = g.h.CONTROLS_IF_MSG_ELSE;
g.h.CONTROLS_IF_IF_TITLE_IF = g.h.CONTROLS_IF_MSG_IF;
g.h.CONTROLS_IF_MSG_THEN = g.h.CONTROLS_REPEAT_INPUT_DO;
g.h.LISTS_CREATE_WITH_ITEM_TITLE = g.h.VARIABLES_DEFAULT_NAME;
g.h.LISTS_GET_INDEX_HELPURL = g.h.LISTS_INDEX_OF_HELPURL;
g.h.LISTS_GET_INDEX_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_GET_SUBLIST_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_INDEX_OF_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_SET_INDEX_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.MATH_CHANGE_TITLE_ITEM = g.h.VARIABLES_DEFAULT_NAME;
g.h.PROCEDURES_DEFRETURN_COMMENT = g.h.PROCEDURES_DEFNORETURN_COMMENT;
g.h.PROCEDURES_DEFRETURN_PROCEDURE = g.h.PROCEDURES_DEFNORETURN_PROCEDURE;
g.h.PROCEDURES_DEFRETURN_TITLE = g.h.PROCEDURES_DEFNORETURN_TITLE;
g.h.MATH_HUE = "230";
g.h.LOOPS_HUE = "120";
g.h.LISTS_HUE = "260";
g.h.LOGIC_HUE = "210";
g.h.VARIABLES_HUE = "330";
g.h.PROCEDURES_HUE = "290";
var BlocklyStorage = {}, jd = null, kd = null, ld = null;

function md() {
    var a = jd();
    nd("xml=" + encodeURIComponent(a), od)
}

var pd = {};

function nd(a, c) {
    pd["/storage"] && pd["/storage"].abort();
    pd["/storage"] = new XMLHttpRequest;
    pd["/storage"].onload = function () {
        200 === this.status ? c && c.call(this) : qd(T("Games_httpRequestError") + "\nXHR status: " + this.status);
        pd["/storage"] = null
    };
    pd["/storage"].open("POST", "/storage");
    pd["/storage"].setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    pd["/storage"].send(a)
}

function od() {
    window.location.hash = this.responseText.trim();
    qd(T("Games_linkAlert").replace("%1", window.location.href));
    ld = jd()
}

function rd() {
    var a = this.responseText.trim();
    a.length ? kd(a) : qd(T("Games_hashError").replace("%1", window.location.hash));
    ld = jd()
}

function qd(a) {
    if ("object" === typeof U) {
        var c = document.getElementById("linkButton");
        U.QG(c, a)
    } else alert(a)
};var C = null, sd = null, td = !1;

function ud() {
    dd();
    var a = document.getElementById("linkButton");
    a && (Zc ? a.style.display = "none" : (jd = vd, kd = wd, hd(a, md)));
    (a = document.getElementById("languageMenu")) && a.addEventListener("change", xd, !0)
}

function yd(a) {
    if (!Zc && 1 < window.location.hash.length) nd("key=" + encodeURIComponent(window.location.hash.substring(1)), rd); else {
        var c = null;
        try {
            c = window.sessionStorage.Wy
        } catch (e) {
        }
        c && delete window.sessionStorage.Wy;
        var d = ed(R);
        (a = c || d || a) && wd(a)
    }
}

function wd(a) {
    sd ? sd.setValue(a, -1) : (a = g.U.Lj(a), C.clear(), g.U.Xi(a, C), a = C, a.Oj.length = 0, a.mn.length = 0, g.i.BD())
}

function vd() {
    if (sd) var a = sd.getValue(); else {
        a = g.U.mH();
        if (1 == D(C, !1).length && a.querySelector) {
            var c = a.querySelector("block");
            c && (c.removeAttribute("x"), c.removeAttribute("y"))
        }
        a = g.U.ce(a)
    }
    return a
}

function zd() {
    if (td) var a = sd.getValue(); else {
        a = g.j;
        var c = C;
        c || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), c = g.Ab());
        var d = [];
        a.T(c);
        c = D(c, !0);
        for (var e = 0, f; f = c[e]; e++) {
            var h = Ad(a, f);
            Array.isArray(h) && (h = h[0]);
            h && (f.L && (h = a.Qz(h), a.Jd && !f.gi && (h = V(a.Jd, f) + h), a.Pc && !f.gi && (h += V(a.Pc, f))), d.push(h))
        }
        d = d.join("\n");
        d = a.finish(d);
        d = d.replace(/^\s+\n/, "");
        d = d.replace(/\n\s+$/, "\n");
        a = d = d.replace(/[ \t]+\n/g, "\n")
    }
    return a
}

function Bd() {
    "object" == typeof BlocklyStorage && null !== ld && ld != vd() && (window.location.hash = "", ld = null)
}

function Cd() {
    var a = {rtl: !1, trashcan: !0}, c = document.getElementById("toolbox");
    c && (a.toolbox = c);
    a.media = "third-party/blockly/media/";
    a.oneBasedIndex = !1;
    C = g.ej("blockly", a);
    bb(C, Bd)
}

function Dd() {
    window.location = (Zc ? "index.html" : "./") + "?lang=" + Xc
}

function xd() {
    window.sessionStorage && (window.sessionStorage.Wy = vd());
    var a = document.getElementById("languageMenu");
    a = encodeURIComponent(a.options[a.selectedIndex].value);
    var c = window.location.search;
    c = 1 >= c.length ? "?lang=" + a : /[?&]lang=[^&]*/.test(c) ? c.replace(/([?&]lang=)[^&]*/, "$1" + a) : c.replace(/\?/, "?lang=" + a + "&");
    window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + c
}

function Ed() {
    10 > R ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Xc + "&level=" + (R + 1) : Dd()
}

function Fd(a) {
    a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
    return a.replace(/\s+$/, "")
}

function Gd(a) {
    if ("click" == a.type && "touchend" == Hd && Id + 2E3 > Date.now() || Hd == a.type && Id + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
    Hd = a.type;
    Id = Date.now();
    return !1
}

var Hd = null, Id = 0;

function Jd() {
    setTimeout(function () {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "third-party/JS-Interpreter/compressed.js";
        document.head.appendChild(a)
    }, 1)
}

function Kd() {
    setTimeout(function () {
        var a = document.createElement("link");
        a.rel = "stylesheet";
        a.type = "text/css";
        a.href = "common/prettify.css";
        document.head.appendChild(a);
        a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "common/prettify.js";
        document.head.appendChild(a)
    }, 1)
};

function Ld() {
    setTimeout(function () {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "third-party/babel.min.js";
        document.head.appendChild(a)
    }, 1)
}

function Md() {
    var a = window.ace;
    a.require("ace/ext/language_tools");
    sd = a = a.edit("editor");
    a.setTheme("ace/theme/chrome");
    a.setShowPrintMargin(!1);
    a.setOptions({enableBasicAutocompletion: !0, enableLiveAutocompletion: !0});
    a = a.getSession();
    a.setMode("ace/mode/javascript");
    a.setTabSize(2);
    a.setUseSoftTabs(!0);
    a.on("change", Bd);
    Nd()
}

function Nd() {
    var a = sd.getSession().getMode().$highlightRules.$keywordList;
    a ? a.splice(0, Infinity, "arguments", "this", "NaN", "Math", "JSON", "parseInt", "parseFloat", "isNaN", "isFinite", "eval", "String", "RegExp", "Object", "Number", "Function", "Date", "Boolean", "Array", "while", "var", "let", "typeof", "try", "throw", "switch", "return", "new", "instanceof", "of", "in", "if", "function", "for", "finally", "else", "do", "delete", "continue", "catch", "case", "break", "const", "undefined", "Infinity", "null", "false", "true") : setTimeout(Nd,
        Nd.qx *= 2)
}

Nd.qx = 1;
var U = {
    hj: !1, vx: null, $o: null, yn: function (a, c, d, e, f, h) {
        function k() {
            U.hj && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden")
        }

        if (!a) throw TypeError("Content not found: " + a);
        U.hj && U.Ng(!1);
        g.Ab() && g.oc(!0);
        U.hj = !0;
        U.vx = c;
        U.$o = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"), n;
        for (n in f) l.style[n] = f[n];
        e && (h.style.visibility = "visible", h.style.opacity = .3, h.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), U.ss = g.gd(e, "mousedown", null, U.bE));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        d && c ? (U.Qh(c, !1, .2), U.Qh(l, !0, .8), setTimeout(k, 175)) : k()
    }, wx: 0, xx: 0, bE: function (a) {
        U.vs();
        if (!g.g.lj(a)) {
            var c = document.getElementById("dialog");
            U.wx = c.offsetLeft - a.clientX;
            U.xx = c.offsetTop - a.clientY;
            U.us = g.gd(document, "mouseup", null, U.vs);
            U.ts = g.gd(document, "mousemove", null, U.cE);
            a.stopPropagation()
        }
    }, cE: function (a) {
        var c = document.getElementById("dialog"),
            d = U.wx + a.clientX;
        a = U.xx + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - c.offsetHeight);
        d = Math.max(d, 0);
        d = Math.min(d, window.innerWidth - c.offsetWidth);
        c.style.left = d + "px";
        c.style.top = a + "px"
    }, vs: function () {
        U.us && (g.$a(U.us), U.us = null);
        U.ts && (g.$a(U.ts), U.ts = null)
    }, Ng: function (a) {
        function c() {
            e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }

        if (U.hj) {
            U.vs();
            U.ss && (g.$a(U.ss), U.ss = null);
            U.hj = !1;
            U.$o && U.$o();
            U.$o = null;
            var d = !1 === a ?
                null : U.vx;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            d && a ? (U.Qh(a, !1, .8), U.Qh(d, !0, .2), setTimeout(c, 175)) : c();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((d = document.getElementById("dialogHeader")) && d.parentNode.removeChild(d); a.firstChild;) d = a.firstChild, d.className += " dialogHiddenContent", document.body.appendChild(d)
        }
    }, Qh: function (a, c, d) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top =
                h.y + "px";
            f.style.opacity = d
        }

        if (a) {
            var f = document.getElementById("dialogBorder"), h = U.BE(a);
            c ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible"
        }
    }, BE: function (a) {
        var c = g.g.style.qp(a);
        c = {x: c.x, y: c.y};
        a.getBBox ? (a = a.getBBox(), c.height = a.height, c.width = a.width) : (c.height = a.offsetHeight, c.width = a.offsetWidth);
        return c
    }, QG: function (a, c) {
        var d = document.getElementById("containerStorage");
        d.textContent = "";
        c = c.split("\n");
        for (var e = 0; e < c.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(c[e]));
            d.appendChild(f)
        }
        d = document.getElementById("dialogStorage");
        U.yn(d, a, !0, !0, {width: "50%", left: "25%", top: "5em"}, U.Ou);
        U.Mu()
    }, ZC: function () {
        if (!ed(R)) if (U.hj || C.gc()) setTimeout(U.ZC, 15E3); else {
            var a = document.getElementById("dialogAbort"), c = document.getElementById("abortCancel");
            c.addEventListener("click", U.Ng, !0);
            c.addEventListener("touchend", U.Ng, !0);
            c = document.getElementById("abortOk");
            c.addEventListener("click", Dd, !0);
            c.addEventListener("touchend", Dd,
                !0);
            U.yn(a, null, !1, !0, {width: "40%", left: "30%", top: "3em"}, function () {
                document.body.removeEventListener("keydown", U.Aw, !0)
            });
            document.body.addEventListener("keydown", U.Aw, !0)
        }
    }, ID: function () {
        var a = document.getElementById("dialogDone");
        if (C) {
            var c = document.getElementById("dialogLinesText");
            c.textContent = "";
            var d = zd();
            d = Fd(d);
            var e = d.replace(/\/\/[^\n]*/g, "");
            e = e.replace(/\/\*.*\*\//g, "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = d;
            "function" == typeof prettyPrintOne && (d = f.innerHTML, d = prettyPrintOne(d, "js"), f.innerHTML = d);
            d = 1 == e ? T("Games_linesOfCode1") : T("Games_linesOfCode2").replace("%1", String(e));
            c.appendChild(document.createTextNode(d))
        }
        d = 10 > R ? T("Games_nextLevel").replace("%1", String(R + 1)) : T("Games_finalLevel");
        c = document.getElementById("doneCancel");
        c.addEventListener("click", U.Ng, !0);
        c.addEventListener("touchend", U.Ng, !0);
        c = document.getElementById("doneOk");
        c.addEventListener("click", Ed, !0);
        c.addEventListener("touchend",
            Ed, !0);
        U.yn(a, null, !1, !0, {width: "40%", left: "30%", top: "3em"}, function () {
            document.body.removeEventListener("keydown", U.Zw, !0)
        });
        document.body.addEventListener("keydown", U.Zw, !0);
        document.getElementById("dialogDoneText").textContent = d
    }, ux: function (a) {
        !U.hj || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (U.Ng(!0), a.stopPropagation(), a.preventDefault())
    }, Mu: function () {
        document.body.addEventListener("keydown", U.ux, !0)
    }, Ou: function () {
        document.body.removeEventListener("keydown", U.ux, !0)
    }, Zw: function (a) {
        if (13 ==
            a.keyCode || 27 == a.keyCode || 32 == a.keyCode) U.Ng(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Ed()
    }, Aw: function (a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) U.Ng(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Dd()
    }
};
window.BlocklyDialogs = U;
U.hideDialog = U.Ng;
g.Comment = function (a) {
    g.Comment.w.constructor.call(this, a);
    this.hc = a.ze;
    this.hc.text = this.hc.text || "";
    this.Yr = "";
    gc(this)
};
g.g.object.W(g.Comment, g.Id);
b = g.Comment.prototype;
b.Es = function (a) {
    g.g.o.M("circle", {"class": "blocklyIconShape", r: "8", cx: "8", cy: "8"}, a);
    g.g.o.M("path", {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    g.g.o.M("rect", {"class": "blocklyIconSymbol", x: "6.8", y: "10.78", height: "2", width: "2"}, a)
};
b.ks = function () {
    this.Am = g.g.o.M("foreignObject", {x: g.oa.cd, y: g.oa.cd}, null);
    var a = document.createElementNS(g.g.o.wi, "body");
    a.setAttribute("xmlns", g.g.o.wi);
    a.className = "blocklyMinimalBody";
    var c = this.Mj = document.createElementNS(g.g.o.wi, "textarea");
    c.className = "blocklyCommentTextarea";
    c.setAttribute("dir", this.S.G ? "RTL" : "LTR");
    c.value = this.hc.text;
    Od(this);
    a.appendChild(c);
    this.Am.appendChild(a);
    g.ma(c, "mouseup", this, this.MG, !0, !0);
    g.ma(c, "wheel", this, function (d) {
        d.stopPropagation()
    });
    g.ma(c, "change",
        this, function () {
            this.Yr != this.hc.text && g.i.Ka(new g.i.eg(this.S, "comment", null, this.Yr, this.hc.text))
        });
    g.ma(c, "input", this, function () {
        this.hc.text = c.value
    });
    setTimeout(c.focus.bind(c), 0);
    return this.Am
};
b.$g = function () {
    g.Comment.w.$g.call(this);
    this.isVisible() && (Pd(this), Qd(this))
};
b.XF = function () {
    this.isVisible() && (this.hc.size = this.Yb.Vs(), Od(this))
};

function Od(a) {
    var c = a.hc.size, d = 2 * g.oa.cd, e = c.width - d;
    c = c.height - d;
    a.Am.setAttribute("width", e);
    a.Am.setAttribute("height", c);
    a.Mj.style.width = e - 4 + "px";
    a.Mj.style.height = c - 4 + "px"
}

b.Vb = function (a) {
    a != this.isVisible() && (g.i.Ka(new g.i.vd(this.S, "commentOpen", !a, a)), (this.hc.ou = a) ? Qd(this) : Pd(this))
};

function Qd(a) {
    if (!a.S.jd() || g.g.userAgent.lg) g.Af.prototype.ix.call(a); else {
        a.Yb = new g.oa(a.S.v, a.ks(), a.S.Sd, a.Kk, a.hc.size.width, a.hc.size.height);
        fb(a.Yb, a.S.id);
        var c = a.XF.bind(a);
        a.Yb.wu = c;
        a.Pe()
    }
}

function Pd(a) {
    a.xj ? g.Af.prototype.zx.call(a) : (a.Yb.I(), a.Yb = null, a.Mj = null, a.Am = null)
}

b.MG = function () {
    gb(this.Yb) && this.Mj.focus();
    this.Yr = this.hc.text
};
b.Vs = function () {
    return this.hc.size
};
b.tn = function (a, c) {
    this.Yb ? this.Yb.tn(a, c) : (this.hc.size.width = a, this.hc.size.height = c)
};
b.Tb = function () {
    return this.hc.text || ""
};
b.dl = function (a) {
    this.hc.text != a && (this.hc.text = a, nc(this))
};

function nc(a) {
    a.Mj ? a.Mj.value = a.hc.text : a.xj && (a.xj.firstChild.textContent = a.hc.text)
}

b.I = function () {
    this.S.vk = null;
    g.Id.prototype.I.call(this)
};
g.Da = {};
g.Da.qd = function (a, c) {
    g.uc.call(this);
    this.Rc = c;
    this.Ze = a;
    this.ym = this.eq = !1;
    this.zt = !0;
    this.qs = -1
};
g.g.object.W(g.Da.qd, g.uc);
g.Da.qd.Hr = {};
b = g.Da.qd.prototype;
b.um = function () {
    g.Da.qd.w.um.call(this);
    this.Da && (this.Da = null);
    this.hb = null
};
b.wp = function () {
    var a = this.ta();
    if (a) {
        var c = Rd(this);
        c && !c.id && (c.id = this.ua() + ".label");
        g.g.V.Yf(a, g.g.V.Ci.IC);
        g.g.V.Gb(a, g.g.V.State.Ml, !1);
        g.g.V.Gb(a, g.g.V.State.LB, this.Ck());
        c && g.g.V.Gb(a, g.g.V.State.Ov, c.id);
        (c = this.Xs()) && g.g.V.Yf(c, g.g.V.Ci.lC);
        if (c = Sd(this)) if (g.g.V.Yf(c, g.g.V.Ci.vB), c.hasChildNodes()) for (g.g.V.Gb(a, g.g.V.State.Nq, !1), a = this.kb.length, c = 1; c <= a; c++) {
            var d = (this.kb[c - 1] || null).ta();
            g.g.V.Gb(d, g.g.V.State.tC, a);
            g.g.V.Gb(d, g.g.V.State.kC, c)
        }
    }
};
b.Oa = function () {
    var a = document.createElement("div");
    a.appendChild(Td(this));
    this.hb = a
};
b.cf = function () {
    g.Da.qd.w.cf.call(this);
    g.Da.qd.Hr[this.ua()] = this;
    this.wp()
};
b.wh = function () {
    g.Da.qd.w.wh.call(this);
    delete g.Da.qd.Hr[this.ua()]
};
b.Yl = function (a, c) {
    var d = this.kb[c - 1] || null, e = this.kb[c] || null;
    g.Da.qd.w.Yl.call(this, a, c);
    a.Zk = d;
    a.Wt = e;
    d ? d.Wt = a : this.Mx = a;
    e && (e.Zk = a);
    (c = this.Ge()) && Ud(a, c);
    Vd(a, this.Ck() + 1);
    if (c = this.ta()) if (this.oq(), g.g.V.Gb(c, g.g.V.State.Nq, this.Ee()), this.Ee()) {
        c = Sd(this);
        a.ta() || a.Oa();
        var f = a.ta(), h = e && e.ta();
        c.insertBefore(f, h);
        this.Yc && a.cf();
        e || (d ? d.oq() : (g.g.style.Eu(c, !0), this.Cj(this.Ee())))
    }
};
b.add = function (a) {
    if (a.getParent()) throw Error(g.uc.Error.hr);
    this.Yl(a, this.kb.length)
};
b.Ge = function () {
    return null
};
b.Ck = function () {
    var a = this.qs;
    0 > a && (a = (a = this.getParent()) ? a.Ck() + 1 : 0, Vd(this, a));
    return a
};

function Vd(a, c) {
    if (c != a.qs) {
        a.qs = c;
        var d = Wd(a);
        if (d) {
            var e = Xd(a) + "px";
            a.Rk() ? d.style.paddingRight = e : d.style.paddingLeft = e
        }
        ca(a, function (f) {
            Vd(f, c + 1)
        })
    }
}

b.contains = function (a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
b.xh = function () {
    var a = [];
    ca(this, function (c) {
        a.push(c)
    });
    return a
};
b.select = function () {
    var a = this.Ge();
    a && Dc(a, this)
};

function Yd(a, c) {
    if (a.eq != c) {
        a.eq = c;
        Zd(a);
        var d = a.ta();
        d && (g.g.V.Gb(d, g.g.V.State.Ml, c), c && (c = a.Ge().ta(), g.g.V.Gb(c, g.g.V.State.ev, a.ua())))
    }
}

b.Ee = function () {
    return this.ym
};
b.Cj = function (a) {
    var c = a != this.ym, d;
    this.ym = a;
    var e = this.Ge(), f = this.ta();
    if (ea(this)) {
        if (!a && e && this.contains(e.Qd) && this.select(), f) {
            if (d = Sd(this)) g.g.style.Eu(d, a), g.g.V.Gb(f, g.g.V.State.Nq, a), a && this.Yc && !d.hasChildNodes() && (ca(this, function (h) {
                d.appendChild(Td(h))
            }), ca(this, function (h) {
                h.cf()
            }));
            this.oq()
        }
    } else (d = Sd(this)) && g.g.style.Eu(d, !1);
    f && (this.Xs().className = this.np());
    c && (a ? this.Cx() : this.Bx())
};
b.Cx = function () {
};
b.Bx = function () {
};
b.toggle = function () {
    this.Cj(!this.Ee())
};

function Td(a) {
    var c = a.Ee() && ea(a), d = document.createElement("div");
    d.style.backgroundPosition = $d(a);
    c || (d.style.display = "none");
    c && ca(a, function (e) {
        d.appendChild(Td(e))
    });
    c = document.createElement("div");
    c.id = a.ua();
    c.appendChild(ae(a));
    c.appendChild(d);
    return c
}

function Xd(a) {
    return Math.max(0, (a.Ck() - 1) * a.Rc.Hy)
}

function ae(a) {
    var c = document.createElement("div");
    c.className = a.rp();
    c.style["padding-" + (a.Rk() ? "right" : "left")] = Xd(a) + "px";
    c.appendChild(be(a));
    c.appendChild(ce(a));
    return c
}

b.rp = function () {
    var a = "";
    this.eq && (a = " " + (this.Rc.WD || ""));
    return this.Rc.mx + a
};

function ce(a) {
    var c = document.createElement("span");
    c.className = a.Rc.UD || "";
    c.textContent = a.Tb();
    return c
}

function be(a) {
    var c = document.createElement("span");
    c.style.display = "inline-block";
    c.className = a.np();
    return c
}

b.np = function () {
    throw Error("unimplemented abstract method");
};

function $d(a) {
    return (a.Wt ? (a.Ck() - 1) * a.Rc.Hy : "-100") + "px 0"
}

b.ta = function () {
    var a = g.Da.qd.w.ta.call(this);
    a || (this.hb = a = document.getElementById(this.ua()));
    return a
};

function Wd(a) {
    return (a = a.ta()) ? a.firstChild : null
}

b.Xs = function () {
    var a = Wd(this);
    return a ? a.firstChild : null
};

function Rd(a) {
    return (a = Wd(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function Sd(a) {
    return (a = a.ta()) ? a.lastChild : null
}

b.dl = function (a) {
    this.Ze = a
};
b.Tb = function () {
    return this.Ze
};

function Zd(a) {
    var c = Wd(a);
    c && (c.className = a.rp())
}

b.oq = function () {
    var a = Sd(this);
    a && (a.style.backgroundPosition = $d(this))
};
b.sz = function (a) {
    "expand" == a.target.getAttribute("type") && ea(this) ? this.zt && this.toggle() : (this.select(), Zd(this))
};
b.pz = function (a) {
    a.preventDefault()
};
b.du = function (a) {
    var c = !0;
    switch (a.keyCode) {
        case g.g.Ba.Eo:
            if (a.altKey) break;
            c = de(this);
            break;
        case g.g.Ba.wo:
            if (a.altKey) break;
            c = ee(this);
            break;
        case g.g.Ba.yl:
            c = fe(this);
            break;
        case g.g.Ba.Sl:
            c = ge(this);
            break;
        default:
            c = !1
    }
    c && a.preventDefault();
    return c
};

function fe(a) {
    a:if (ea(a) && a.Ee()) a = a.kb[0] || null; else {
        for (var c = a, d; c != a.Ge();) {
            d = c.Wt;
            if (null != d) {
                a = d;
                break a
            }
            c = c.getParent()
        }
        a = null
    }
    a && a.select();
    return !0
}

function ge(a) {
    var c = a.Zk;
    if (null != c) a = he(c); else {
        c = a.getParent();
        var d = a.Ge();
        a = c == d || a == d ? null : c
    }
    a && a.select();
    return !0
}

function ee(a) {
    if (ea(a) && a.Ee() && a.zt) a.Cj(!1); else {
        var c = a.getParent();
        a = a.Ge();
        c && c != a && c.select()
    }
    return !0
}

function de(a) {
    return ea(a) ? (a.Ee() ? (a.kb[0] || null).select() : a.Cj(!0), !0) : !1
}

function he(a) {
    return a.Ee() && ea(a) ? he(a.kb[a.kb.length - 1] || null) : a
}

function Ud(a, c) {
    a.Da != c && (a.Da = c, ca(a, function (d) {
        Ud(d, c)
    }))
};g.Da.lh = function (a, c, d) {
    this.ra = a;
    g.Da.qd.call(this, c, d)
};
g.g.object.W(g.Da.lh, g.Da.qd);
b = g.Da.lh.prototype;
b.Ge = function () {
    if (this.Da) return this.Da;
    var a = this.getParent();
    return a && (a = a.Ge()) ? (Ud(this, a), a) : null
};
b.np = function () {
    var a = this.Ee(), c = this.rE;
    if (a && c) return c;
    c = this.mF;
    if (!a && c) return c;
    c = this.Rc;
    if (ea(this)) {
        if (a && c.kx) return c.Xo + " " + c.kx;
        if (!a && c.RD) return c.Xo + " " + c.RD
    } else if (c.lx) return c.Xo + " " + c.lx;
    return ""
};
b.pz = function () {
    ea(this) && this.zt ? (this.toggle(), this.select()) : this.eq ? Dc(this.Ge(), null) : this.select();
    Zd(this)
};
b.sz = function () {
};
b.du = function (a) {
    if (this.Da.ra.gf) {
        var c = {}, d = g.g.Ba.yl, e = g.g.Ba.Sl;
        c[g.g.Ba.Eo] = this.Rk() ? e : d;
        c[g.g.Ba.wo] = this.Rk() ? d : e;
        c[g.g.Ba.Sl] = g.g.Ba.wo;
        c[g.g.Ba.yl] = g.g.Ba.Eo;
        Object.defineProperties(a, {keyCode: {value: c[a.keyCode] || a.keyCode}})
    }
    return g.Da.lh.w.du.call(this, a)
};
b.Nz = function () {
    this.xz && this.xz.call(this.ra)
};
b.Cx = g.Da.lh.prototype.Nz;
b.Bx = g.Da.lh.prototype.Nz;
g.Da.Hi = function (a, c) {
    this.ra = a;
    g.Da.qd.call(this, "", c);
    this.ym = !0;
    Yd(this, !0);
    this.Qd = this
};
g.g.object.W(g.Da.Hi, g.Da.qd);
b = g.Da.Hi.prototype;
b.Ge = function () {
    return this
};
b.Ck = function () {
    return 0
};
b.YE = function () {
    this.Rx = !0;
    var a = this.ta();
    g.g.o.Cb(a, "focused");
    this.Qd && this.Qd.select()
};
b.VE = function () {
    this.Rx = !1;
    var a = this.ta();
    g.g.o.Fc(a, "focused")
};
b.hasFocus = function () {
    return this.Rx
};
b.Ee = function () {
    return !0
};
b.Cj = function (a) {
    this.ym = a
};
b.Xs = function () {
    var a = Wd(this);
    return a ? a.firstChild : null
};
b.oq = function () {
};
b.rp = function () {
    return g.Da.Hi.w.rp.call(this) + " " + this.Rc.TD
};
b.np = function () {
    var a = this.Ee(), c = this.rE;
    if (a && c) return c;
    c = this.mF;
    if (!a && c) return c;
    c = this.Rc;
    return a && c.SD ? c.Xo + " " + c.SD : ""
};

function Dc(a, c) {
    if (c != a.Qd && (!a.nz || a.nz.call(a.ra, c))) {
        var d = a.Qd;
        a.Qd && Yd(a.Qd, !1);
        (a.Qd = c) && Yd(c, !0);
        a.mz && a.mz.call(a.ra, d, c)
    }
}

b.wp = function () {
    g.Da.Hi.w.wp.call(this);
    var a = this.ta();
    g.g.V.Yf(a, g.g.V.Ci.HC);
    g.g.V.Gb(a, g.g.V.State.Ov, Rd(this).id)
};
b.cf = function () {
    g.Da.Hi.w.cf.call(this);
    var a = this.ta();
    a.className = this.Rc.VD;
    a.setAttribute("hideFocus", "true");
    this.Nr();
    this.wp()
};
b.wh = function () {
    g.Da.Hi.w.wh.call(this);
    this.rs()
};
b.Nr = function () {
    var a = this.ta();
    a.tabIndex = 0;
    this.$F = g.gd(a, "focus", this, this.YE);
    this.WF = g.gd(a, "blur", this, this.VE);
    this.YF = g.ma(a, "click", this, this.bF);
    this.dG = g.gd(a, "keydown", this, this.ZE)
};
b.rs = function () {
    g.$a(this.$F);
    g.$a(this.WF);
    g.$a(this.YF);
    g.$a(this.dG)
};
b.bF = function (a) {
    var c;
    a:{
        for (var d = a.target; null != d;) {
            if (c = g.Da.qd.Hr[d.id]) break a;
            if (d == this.ta()) break;
            d = d.parentNode
        }
        c = null
    }
    if (c) switch (a.type) {
        case "mousedown":
            c.sz(a);
            break;
        case "click":
            c.pz(a)
    }
};
b.ZE = function (a) {
    var c = !1;
    if (c = this.Qd && this.Qd.du(a) || c) g.g.style.Bu(this.Qd.ta(), this.ta().parentNode), a.preventDefault();
    return c
};
b.createNode = function (a) {
    return new g.Da.lh(this.ra, a || "", this.Rc)
};
g.Gi = function (a) {
    this.s = a;
    this.G = a.options.G;
    this.gf = a.options.ge;
    this.Ia = a.options.Ia;
    this.Rc = {
        Hy: 19,
        VD: "blocklyTreeRoot",
        TD: "blocklyHidden",
        mx: "blocklyTreeRow",
        UD: "blocklyTreeLabel",
        Xo: "blocklyTreeIcon",
        kx: "blocklyTreeIconOpen",
        lx: "blocklyTreeIconNone",
        WD: "blocklyTreeSelected"
    };
    this.hA = {mx: "blocklyTreeSeparator"};
    this.gf && (this.Rc.cssTreeRow += a.G ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.hA.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.G ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.Rc.cssTreeIcon = "")
};
b = g.Gi.prototype;
b.width = 0;
b.height = 0;
b.Tk = null;
b.T = function () {
    var a = this.s, c = x(this.s);
    this.vc = document.createElement("div");
    this.vc.className = "blocklyToolboxDiv blocklyNonSelectable";
    this.vc.setAttribute("dir", a.G ? "RTL" : "LTR");
    c.parentNode.insertBefore(this.vc, c);
    c = a.jc;
    c.subscribe(this.vc, "toolbox", "background-color");
    c.subscribe(this.vc, "toolboxText", "color");
    g.ma(this.vc, "mousedown", this, function (d) {
        g.g.lj(d) || d.target == this.vc ? g.oc(!1) : g.oc(!0);
        g.Touch.dm()
    }, !1, !0);
    c = {Hg: a.options.Hg, Nb: a, G: a.G, Le: a.options.Le, ge: a.ge, Ia: a.options.Ia, Tg: a.options.Tg};
    this.P = null;
    if (a.ge) {
        if (!g.Dl) throw Error("Missing require for Blockly.HorizontalFlyout");
        this.P = new g.Dl(c)
    } else {
        if (!g.xg) throw Error("Missing require for Blockly.VerticalFlyout");
        this.P = new g.xg(c)
    }
    g.g.o.fj(this.P.Oa("svg"), x(this.s));
    this.P.T(a);
    this.Rc.cleardotPath = a.options.Yh + "1x1.gif";
    this.Rc.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (a.G ? "Rtl" : "Ltr");
    ie(this, a.options.Sk)
};

function ie(a, c) {
    a.Cd && (a.Cd.I(), a.Tk = null);
    var d = new g.Da.Hi(a, a.Rc);
    a.Cd = d;
    Dc(d, null);
    d.nz = a.UE;
    d.mz = a.TE;
    var e = null;
    if (c) {
        a.Cd.Bf = [];
        a.jt = !1;
        e = je(a, c, a.Cd, a.s.options.Yh);
        if (a.Cd.Bf.length) throw Error("Toolbox cannot have both blocks and categories in the root level.");
        ma(a.s)
    }
    d.za(a.vc);
    e && Dc(d, e);
    ke(a);
    a.position();
    a.gf && g.g.V.Gb(a.Cd.ta(), g.g.V.State.hC, "horizontal")
}

b.UE = function (a) {
    if (a == this.Cd) return !1;
    this.Tk && (Wd(this.Tk).style.backgroundColor = "");
    if (a) {
        var c = a.Gk || "#57e";
        Wd(a).style.backgroundColor = c;
        ke(this, a)
    }
    return !0
};
b.TE = function (a, c) {
    c && c.Bf && c.Bf.length ? (this.P.show(c.Bf), this.Tk != c && this.P.pc.set(0), g.Je && g.navigation.Gb(g.navigation.xr)) : (this.P.Ca(), !g.Je || c instanceof g.Gi.Cr || g.navigation.Gb(g.navigation.Ol));
    a != c && a != this && (a = new g.i.vd(null, "category", a && a.Tb(), c && c.Tb()), a.tc = this.s.id, g.i.Ka(a));
    c && (this.Tk = c)
};
b.eF = function () {
    g.hl(this.s)
};
b.Th = function (a) {
    var c = this.Cd.Qd;
    if (!c) return !1;
    switch (a.name) {
        case g.navigation.bb.we:
            return ge(c);
        case g.navigation.bb.Do:
            return ee(c);
        case g.navigation.bb.ue:
            return fe(c);
        case g.navigation.bb.so:
            return de(c);
        default:
            return !1
    }
};
b.I = function () {
    this.P.I();
    this.Cd.I();
    this.s.jc.unsubscribe(this.vc);
    g.g.o.removeNode(this.vc);
    this.Tk = this.s = null
};
b.Nf = function () {
    return this.width
};
b.$x = function () {
    return this.height
};
b.position = function () {
    var a = this.vc;
    if (a) {
        var c = x(this.s);
        c = g.bA(c);
        this.gf ? (a.style.left = "0", a.style.height = "auto", a.style.width = c.width + "px", this.height = a.offsetHeight, this.Ia == g.vg ? a.style.top = "0" : a.style.bottom = "0") : (this.Ia == g.ug ? a.style.right = "0" : a.style.left = "0", a.style.height = c.height + "px", this.width = a.offsetWidth);
        this.P.position()
    }
};

function je(a, c, d, e) {
    for (var f = null, h = null, k = 0, l; l = c.childNodes[k]; k++) if (l.tagName) switch (l.tagName.toUpperCase()) {
        case "CATEGORY":
            var m = g.g.ke(l.getAttribute("name"));
            h = a.Cd.createNode(m);
            h.xz = a.eF;
            h.Bf = [];
            d.add(h);
            var n = l.getAttribute("custom");
            n ? h.Bf = n : (n = je(a, l, h, e)) && (f = n);
            var r = l.getAttribute("categorystyle");
            if ((n = l.getAttribute("colour")) && r) h.Gk = "", console.warn('Toolbox category "' + m + '" can not have both a style and a colour'); else if (r) {
                n = a;
                var t = h;
                t.fM = r;
                var w = n.s.sp();
                r && w && ((w = w.tD[r]) &&
                w.Lb ? le(n, w.Lb, t, m) : console.warn('Style "' + r + '" must exist and contain a colour value'))
            } else le(a, n, h, m);
            "true" == l.getAttribute("expanded") ? (h.Bf.length && (f = h), h.Cj(!0)) : h.Cj(!1);
            h = l;
            break;
        case "SEP":
            if (h && "CATEGORY" == h.tagName.toUpperCase()) {
                d.add(new g.Gi.Cr(a.hA));
                break
            }
        case "BLOCK":
        case "SHADOW":
        case "LABEL":
        case "BUTTON":
            d.Bf.push(l), h = l
    }
    return f
}

function le(a, c, d, e) {
    c = g.g.ke(c);
    if (null === c || "" === c) d.Gk = ""; else {
        var f = Number(c);
        isNaN(f) ? (f = g.g.Lb.parse(c)) ? (d.Gk = f, a.jt = !0) : (d.Gk = "", console.warn('Toolbox category "' + e + '" has unrecognized colour attribute: ' + c)) : (d.Gk = g.Gy(f), a.jt = !0)
    }
}

function ke(a, c) {
    c = (c || a.Cd).xh(!1);
    for (var d = 0, e; e = c[d]; d++) {
        var f = Wd(e);
        if (f) {
            var h = a.jt ? "8px solid " + (e.Gk || "#ddd") : "none";
            a.s.G ? f.style.borderRight = h : f.style.borderLeft = h
        }
        ke(a, e)
    }
}

b.Dm = function () {
    if (!this.vc) return null;
    var a = this.vc.getBoundingClientRect(), c = a.top, d = c + a.height, e = a.left;
    a = e + a.width;
    return this.Ia == g.vg ? new g.g.Rect(-1E7, d, -1E7, 1E7) : this.Ia == g.kk ? new g.g.Rect(c, 1E7, -1E7, 1E7) : this.Ia == g.Xd ? new g.g.Rect(-1E7, 1E7, -1E7, a) : new g.g.Rect(-1E7, 1E7, e, 1E7)
};
g.Gi.Cr = function (a) {
    g.Da.lh.call(this, null, "", a)
};
g.g.object.W(g.Gi.Cr, g.Da.lh);
g.Ed.register([".blocklyToolboxDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxGrab {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;", "overflow-x: visible;", "overflow-y: auto;", "position: absolute;", "z-index: 70;", "-webkit-tap-highlight-color: transparent;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {",
    "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {", "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;", "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;",
    "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "background-position: 0 -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {",
    "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0 -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyToolboxDelete .blocklyTreeLabel {",
    'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}"]);
g.Br = function (a) {
    this.s = a;
    this.Pi = [];
    if (!(0 >= this.s.options.Lp)) {
        a = {
            scrollbars: !0,
            Hg: this.s.options.Hg,
            Nb: this.s,
            G: this.s.G,
            Le: this.s.options.Le,
            Tg: this.s.options.Tg
        };
        if (this.s.ge) {
            a.Ia = this.s.Ia == g.vg ? g.kk : g.vg;
            if (!g.Dl) throw Error("Missing require for Blockly.HorizontalFlyout");
            this.P = new g.Dl(a)
        } else {
            a.Ia = this.s.Ia == g.ug ? g.Xd : g.ug;
            if (!g.xg) throw Error("Missing require for Blockly.VerticalFlyout");
            this.P = new g.xg(a)
        }
        bb(this.s, this.ZF.bind(this))
    }
};
b = g.Br.prototype;
b.Ul = 47;
b.Xn = 44;
b.ck = 16;
b.WB = 20;
b.Qv = 20;
b.xo = 10;
b.vr = 0;
b.wr = 32;
b.wB = .1;
b.xt = !1;
b.Mp = 0;
b.N = null;
b.kq = null;
b.Ft = 0;
b.Oh = 0;
b.Ty = 0;
b.gA = 0;
b.Oa = function () {
    this.N = g.g.o.M("g", {"class": "blocklyTrash"}, null);
    var a = String(Math.random()).substring(2);
    var c = g.g.o.M("clipPath", {id: "blocklyTrashBodyClipPath" + a}, this.N);
    g.g.o.M("rect", {width: this.Ul, height: this.Xn, y: this.ck}, c);
    var d = g.g.o.M("image", {
        width: g.ik.width,
        x: -this.vr,
        height: g.ik.height,
        y: -this.wr,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
    }, this.N);
    d.setAttributeNS(g.g.o.Ji, "xlink:href", this.s.options.Yh + g.ik.url);
    c = g.g.o.M("clipPath", {id: "blocklyTrashLidClipPath" + a}, this.N);
    g.g.o.M("rect", {width: this.Ul, height: this.ck}, c);
    this.kq = g.g.o.M("image", {
        width: g.ik.width,
        x: -this.vr,
        height: g.ik.height,
        y: -this.wr,
        "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    }, this.N);
    this.kq.setAttributeNS(g.g.o.Ji, "xlink:href", this.s.options.Yh + g.ik.url);
    g.ma(this.N, "mouseup", this, this.click);
    g.gd(d, "mouseover", this, this.JF);
    g.gd(d, "mouseout", this, this.HF);
    this.Ir();
    return this.N
};
b.T = function (a) {
    0 < this.s.options.Lp && (g.g.o.fj(this.P.Oa("svg"), x(this.s)), this.P.T(this.s), this.P.My = function () {
        return !0
    });
    this.rq = this.WB + a;
    Ra(this, !1);
    return this.rq + this.Xn + this.ck
};
b.I = function () {
    this.N && (g.g.o.removeNode(this.N), this.N = null);
    this.s = this.kq = null;
    clearTimeout(this.Ft)
};
b.position = function () {
    if (this.rq) {
        var a = this.s.Vc();
        a && (this.Ty = a.Ia == g.Xd || this.s.ge && !this.s.G ? a.Bb + a.Qc - this.Ul - this.Qv - g.Ua.Zc : this.Qv + g.Ua.Zc, this.gA = a.Ia == g.kk ? this.rq : a.Pb + a.fd - (this.Xn + this.ck) - this.rq, this.N.setAttribute("transform", "translate(" + this.Ty + "," + this.gA + ")"))
    }
};
b.Dm = function () {
    if (!this.N) return null;
    var a = this.N.getBoundingClientRect(), c = a.top + this.wr - this.xo;
    a = a.left + this.vr - this.xo;
    return new g.g.Rect(c, c + this.ck + this.Xn + 2 * this.xo, a, a + this.Ul + 2 * this.xo)
};

function Ra(a, c) {
    a.xt != c && (clearTimeout(a.Ft), a.xt = c, a.Ir())
}

b.Ir = function () {
    this.Oh += this.xt ? .2 : -.2;
    this.Oh = Math.min(Math.max(this.Oh, this.Mp), 1);
    me(this, 45 * this.Oh);
    this.N.style.opacity = .4 + .4 * this.Oh;
    this.Oh > this.Mp && 1 > this.Oh && (this.Ft = setTimeout(this.Ir.bind(this), 20))
};

function me(a, c) {
    var d = a.s.Ia == g.ug || a.s.ge && a.s.G;
    a.kq.setAttribute("transform", "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.Ul - 4) + "," + (a.ck - 2) + ")")
}

b.close = function () {
    Ra(this, !1)
};
b.click = function () {
    if (this.Pi.length) {
        for (var a = [], c = 0, d; d = this.Pi[c]; c++) a[c] = g.U.Lj(d);
        this.P.show(a)
    }
};
b.JF = function () {
    this.Pi.length && Ra(this, !0)
};
b.HF = function () {
    Ra(this, !1)
};
b.ZF = function (a) {
    if (!(0 >= this.s.options.Lp) && a.type == g.i.Wn && "shadow" != a.au.tagName.toLowerCase()) {
        for (var c = a = a.au.cloneNode(!0); c;) {
            c.removeAttribute && (c.removeAttribute("x"), c.removeAttribute("y"), c.removeAttribute("id"));
            var d = c.firstChild || c.nextSibling;
            if (!d) for (d = c.parentNode; d;) {
                if (d.nextSibling) {
                    d = d.nextSibling;
                    break
                }
                d = d.parentNode
            }
            c = d
        }
        a = g.U.ce(a);
        if (-1 == this.Pi.indexOf(a)) {
            for (this.Pi.unshift(a); this.Pi.length > this.s.options.Lp;) this.Pi.pop();
            this.Mp = this.wB;
            me(this, 45 * this.Mp)
        }
    }
};
g.si = function () {
    g.si.w.constructor.call(this)
};
g.g.object.W(g.si, g.mo);
g.si.prototype.next = function () {
    var a = this.Sb;
    if (!a) return null;
    (a = a.next()) && J(this, a);
    return a
};
g.si.prototype.Km = function () {
    return null
};
g.si.prototype.Tf = function () {
    var a = this.Sb;
    if (!a) return null;
    (a = a.Tf()) && J(this, a);
    return a
};
g.si.prototype.gn = function () {
    return null
};
g.Bl = function (a) {
    a.Vc = this.Gm.bind(this);
    a.di = this.Uz.bind(this);
    this.s = new g.lb(a);
    this.s.je = !0;
    this.s.Cu(new g.si);
    this.s.Tz(new g.eh);
    this.G = !!a.G;
    this.ll = a.Ia;
    this.Ps = [];
    this.Kp = [];
    this.bm = [];
    this.Ad = [];
    this.nu = [];
    this.il = this.s.Ug.C.tg
};
b = g.Bl.prototype;
b.pk = !0;
b.Nh = !1;
b.Oi = !0;
b.wb = 8;
b.dh = g.Bl.prototype.wb;
b.tB = 3 * g.Bl.prototype.dh;
b.uB = 3 * g.Bl.prototype.dh;
b.qr = 2;
b.rb = 0;
b.Wc = 0;
b.nE = 70;
b.Oa = function (a) {
    this.N = g.g.o.M(a, {"class": "blocklyFlyout", style: "display: none"}, null);
    this.Ic = g.g.o.M("path", {"class": "blocklyFlyoutBackground"}, this.N);
    this.N.appendChild(this.s.Oa());
    this.s.jc.subscribe(this.Ic, "flyout", "fill");
    this.s.jc.subscribe(this.Ic, "flyoutOpacity", "fill-opacity");
    return this.N
};
b.T = function (a) {
    this.Ob = a;
    this.s.Jj = a;
    this.pc = new g.Ua(this.s, this.gf, !1, "blocklyFlyoutScrollbar");
    this.Ca();
    Array.prototype.push.apply(this.Ps, g.ma(this.N, "wheel", this, this.iH));
    this.pk || (this.ip = this.Qs.bind(this), bb(this.Ob, this.ip));
    Array.prototype.push.apply(this.Ps, g.ma(this.Ic, "mousedown", this, this.Uh));
    this.s.zh = this.Ob.zh.bind(this.Ob);
    this.s.Sa = this.Ob.Sa;
    a = this.s;
    a.Zh = new g.Dr(a)
};
b.I = function () {
    this.Ca();
    g.$a(this.Ps);
    this.ip && (cb(this.Ob, this.ip), this.ip = null);
    this.pc && (this.pc.I(), this.pc = null);
    this.s && (this.s.jc.unsubscribe(this.Ic), this.s.Jj = null, this.s.I(), this.s = null);
    this.N && (g.g.o.removeNode(this.N), this.N = null);
    this.Ob = this.Ic = null
};
b.Nf = function () {
    return this.rb
};
b.$x = function () {
    return this.Wc
};
b.isVisible = function () {
    return this.Nh
};
b.Vb = function (a) {
    var c = a != this.isVisible();
    this.Nh = a;
    c && this.On()
};
b.Aj = function (a) {
    var c = a != this.Oi;
    this.Oi = a;
    c && this.On()
};
b.On = function () {
    var a = this.Oi ? this.isVisible() : !1;
    this.N.style.display = a ? "block" : "none";
    this.pc.Aj(a)
};
b.Ca = function () {
    if (this.isVisible()) {
        this.Vb(!1);
        for (var a = 0, c; c = this.Ad[a]; a++) g.$a(c);
        this.Ad.length = 0;
        this.$h && (cb(this.s, this.$h), this.$h = null)
    }
};
b.show = function (a) {
    this.s.Hc(!1);
    this.Ca();
    ne(this);
    if ("string" == typeof a) {
        a = this.s.Jj.Tu[a] || null;
        if ("function" != typeof a) throw TypeError("Couldn't find a callback function when opening a toolbox category.");
        a = a(this.s.Jj);
        if (!Array.isArray(a)) throw TypeError("Result of toolbox category callback must be an array.");
    }
    this.Vb(!0);
    var c = [], d = [];
    this.nu.length = 0;
    for (var e = this.gf ? this.tB : this.uB, f = 0, h; h = a[f]; f++) if (h.tagName) switch (h.tagName.toUpperCase()) {
        case "BLOCK":
            var k = g.U.Wi(h, this.s);
            k.isEnabled() ||
            this.nu.push(k);
            c.push({type: "block", block: k});
            h = parseInt(h.getAttribute("gap"), 10);
            d.push(isNaN(h) ? e : h);
            break;
        case "SEP":
            h = parseInt(h.getAttribute("gap"), 10);
            !isNaN(h) && 0 < d.length ? d[d.length - 1] = h : d.push(e);
            break;
        case "LABEL":
        case "BUTTON":
            k = "LABEL" == h.tagName.toUpperCase();
            if (!g.rB) throw Error("Missing require for Blockly.FlyoutButton");
            h = new g.rB(this.s, this.Ob, h, k);
            c.push({type: "button", button: h});
            d.push(e)
    }
    oe(this, c, d);
    this.Ad.push(g.ma(this.Ic, "mouseover", this, function () {
        for (var l = D(this.s, !1),
                 m = 0, n; n = l[m]; m++) n.pn()
    }));
    this.gf ? this.Wc = 0 : this.rb = 0;
    this.s.Hc(!0);
    this.su();
    this.Qs();
    this.position();
    this.$h = this.su.bind(this);
    bb(this.s, this.$h)
};

function ne(a) {
    for (var c = D(a.s, !1), d = 0, e; e = c[d]; d++) e.v == a.s && e.I(!1, !1);
    for (d = 0; d < a.Kp.length; d++) (c = a.Kp[d]) && g.g.o.removeNode(c);
    for (d = a.Kp.length = 0; c = a.bm[d]; d++) c.I();
    a.bm.length = 0;
    a.s.Zh.clear()
}

function pe(a, c) {
    return function (d) {
        var e = a.Ob.zh(d);
        e && (tb(e, c), sb(e, d, a))
    }
}

b.Uh = function (a) {
    var c = this.Ob.zh(a);
    c && sb(c, a, this)
};
b.My = function (a) {
    return a.isEnabled()
};

function ob(a, c) {
    var d = null;
    g.i.disable();
    var e = a.Ob.Jg();
    a.Ob.Hc(!1);
    try {
        var f = a.Ob;
        if (!c.ya()) throw Error("oldBlock is not rendered.");
        var h = g.U.oh(c, !0);
        f.Hc(!1);
        var k = g.U.Wi(h, f);
        if (!k.ya()) throw Error("block is not rendered.");
        var l = g.g.Fm(f.pb), m = g.g.Fm(a.s.pb), n = c.Qa();
        n.scale(a.s.scale);
        var r = g.g.J.sum(m, n), t = g.g.J.tm(r, l);
        t.scale(1 / f.scale);
        k.moveBy(t.x, t.y);
        d = k;
        g.oc()
    } finally {
        g.i.enable()
    }
    c = g.O.Ux(a.Ob, e);
    if (g.i.isEnabled()) for (g.i.$(!0), g.i.Ka(new g.i.Qe(d)), e = 0; e < c.length; e++) g.i.Ka(new g.i.xe(c[e]));
    a.pk ? a.Ca() : a.Qs();
    return d
}

b.Qs = function () {
    for (var a = D(this.s, !1), c = 0, d; d = a[c]; c++) if (-1 == this.nu.indexOf(d)) for (var e = $a(this.Ob, g.g.Us(d)); d;) d.md(e), d = q(d)
};
b.su = function () {
    this.$h && cb(this.s, this.$h);
    this.s.scale = this.Ob.scale;
    for (var a = 0, c = D(this.s, !1), d = 0, e; e = c[d]; d++) {
        var f = H(e).width;
        e.L && (f -= this.il);
        a = Math.max(a, f)
    }
    for (d = 0; e = this.bm[d]; d++) a = Math.max(a, e.width);
    a += 1.5 * this.dh + this.il;
    a *= this.s.scale;
    a += g.Ua.Zc;
    if (this.rb != a) {
        for (d = 0; e = c[d]; d++) {
            if (this.G) {
                f = e.Qa().x;
                var h = a / this.s.scale - this.dh;
                e.L || (h -= this.il);
                e.moveBy(h - f, 0)
            }
            e.Ox && (f = e.Ox, h = e, e = H(h), f.setAttribute("width", e.width), f.setAttribute("height", e.height), h = h.Qa(), f.setAttribute("y",
                h.y), f.setAttribute("x", this.G ? h.x - e.width : h.x))
        }
        if (this.G) for (d = 0; e = this.bm[d]; d++) c = e.FL().y, e.moveTo(a / this.s.scale - e.width - this.dh - this.il, c);
        this.rb = a;
        this.position()
    }
    this.$h && bb(this.s, this.$h)
};

function mb(a) {
    return a.pc ? a.pc.isVisible() : !1
};g.xg = function (a) {
    a.Vc = this.Gm.bind(this);
    a.di = this.Uz.bind(this);
    g.xg.w.constructor.call(this, a);
    this.gf = !1
};
g.g.object.W(g.xg, g.Bl);
b = g.xg.prototype;
b.Gm = function () {
    if (!this.isVisible()) return null;
    try {
        var a = this.s.pb.getBBox()
    } catch (f) {
        a = {height: 0, y: 0, width: 0, x: 0}
    }
    var c = this.qr, d = this.Wc - 2 * this.qr, e = this.rb;
    this.G || (e -= this.qr);
    return {
        Pb: d,
        Bb: e,
        ae: a.height * this.s.scale + 2 * this.dh,
        Ff: a.width * this.s.scale + 2 * this.dh,
        lc: -this.s.scrollY + a.y,
        dc: -this.s.scrollX,
        xc: a.y,
        Sc: a.x,
        fd: c,
        Qc: 0
    }
};
b.Uz = function (a) {
    var c = this.Gm();
    c && ("number" == typeof a.y && (this.s.scrollY = -c.ae * a.y), this.s.translate(this.s.scrollX + c.Qc, this.s.scrollY + c.fd))
};
b.position = function () {
    if (this.isVisible()) {
        var a = this.Ob.Vc();
        if (a) {
            this.Wc = a.Pb;
            var c = this.rb - this.wb, d = a.Pb - 2 * this.wb, e = this.ll == g.ug, f = c + this.wb;
            f = ["M " + (e ? f : 0) + ",0"];
            f.push("h", e ? -c : c);
            f.push("a", this.wb, this.wb, 0, 0, e ? 0 : 1, e ? -this.wb : this.wb, this.wb);
            f.push("v", Math.max(0, d));
            f.push("a", this.wb, this.wb, 0, 0, e ? 0 : 1, e ? this.wb : -this.wb, this.wb);
            f.push("h", e ? c : -c);
            f.push("z");
            this.Ic.setAttribute("d", f.join(" "));
            c = this.Wc;
            a = this.Ob.Ia == this.ll ? a.eA ? this.ll == g.Xd ? a.eA : a.Bb - this.rb : this.ll == g.Xd ? 0 : a.Bb :
                this.ll == g.Xd ? 0 : a.Bb + a.Qc - this.rb;
            this.N.setAttribute("width", this.rb);
            this.N.setAttribute("height", c);
            "svg" == this.N.tagName ? g.g.o.un(this.N, "translate(" + a + "px,0px)") : this.N.setAttribute("transform", "translate(" + a + ",0)");
            this.pc && (this.pc.iu = new g.g.J(a, 0), this.pc.resize(), ra(this.pc, this.pc.Sf.x, this.pc.Sf.y))
        }
    }
};
b.iH = function (a) {
    var c = g.g.gy(a);
    if (c.y) {
        var d = this.Gm();
        c = d.lc - d.xc + c.y;
        c = Math.min(c, d.ae - d.Pb);
        c = Math.max(c, 0);
        this.pc.set(c);
        g.aa.Ca()
    }
    a.preventDefault();
    a.stopPropagation()
};

function oe(a, c, d) {
    a.s.scale = a.Ob.scale;
    for (var e = a.dh, f = a.G ? e : e + a.il, h = 0, k; k = c[h]; h++) if ("block" == k.type) {
        k = k.block;
        for (var l = p(k, !1), m = 0, n; n = l[m]; m++) n.$b = !0;
        k.za();
        n = k.ya();
        l = H(k);
        m = k.L ? f - a.il : f;
        k.moveBy(m, e);
        var r = a, t = k, w = h;
        m = g.g.o.M("rect", {
            "fill-opacity": 0,
            x: a.G ? m - l.width : m,
            y: e,
            height: l.height,
            width: l.width
        }, null);
        m.pf = t;
        g.H.qk(m);
        r.s.pb.insertBefore(m, t.ya());
        t.Ox = m;
        r.Kp[w] = m;
        r = a;
        r.Ad.push(g.ma(n, "mousedown", null, pe(r, k)));
        r.Ad.push(g.ma(m, "mousedown", null, pe(r, k)));
        r.Ad.push(g.gd(n, "mouseover",
            k, k.Mo));
        r.Ad.push(g.gd(n, "mouseout", k, k.pn));
        r.Ad.push(g.gd(m, "mouseover", k, k.Mo));
        r.Ad.push(g.gd(m, "mouseout", k, k.pn));
        e += l.height + d[h]
    } else "button" == k.type && (l = a, m = k.button, n = f, r = e, t = m.Oa(), m.moveTo(n, r), m.show(), l.Ad.push(g.ma(t, "mousedown", l, l.Uh)), l.bm.push(m), e += k.button.height + d[h])
}

b.Dm = function () {
    if (!this.N) return null;
    var a = this.N.getBoundingClientRect(), c = a.left;
    if (this.ll == g.Xd) return new g.g.Rect(-1E9, 1E9, -1E9, c + a.width);
    g.g.userAgent.Oq && this.Ob && this.Ob.kj && (a = this.Ob.N.getBoundingClientRect().x, 10 > Math.abs(a - c) && (c += this.RL * this.Ob.options.Nb.scale));
    return new g.g.Rect(-1E9, 1E9, c, 1E9)
};

function qe(a, c, d, e) {
    var f = W;
    this.name = a;
    this.Sw = c;
    this.$z = d;
    this.KG = e || 0;
    this.nh = f;
    this.La = new g.g.J;
    this.reset();
    console.log(this + " loaded.")
}

b = qe.prototype;
b.PG = !1;
b.af = !1;
b.Ya = 0;
b.Gg = 0;
b.facing = 0;
b.speed = 0;
b.Jf = 0;
b.La = null;
b.At = 0;
b.toString = function () {
    return "[" + this.name + "]"
};
b.reset = function () {
    delete this.PG;
    delete this.af;
    delete this.speed;
    delete this.Jf;
    delete this.At;
    this.Ya = this.KG;
    this.La.x = this.$z.x;
    this.La.y = this.$z.y;
    this.facing = this.Gg = id(g.g.Ha.kl(Math.atan2(50 - this.La.y, 50 - this.La.x)));
    this.Ky = null
};
b.rt = function () {
    var a = this.Sw;
    if ("function" == typeof a) a = a(); else if ("string" != typeof a) throw Error('Duck "' + this.name + '" has invalid code: ' + a);
    try {
        var c = "object" == typeof Babel ? Babel.transform(a, {presets: ["es2015"]}).code : void 0;
        a = c || a
    } catch (d) {
        throw alert(d), Error('Duck "' + this.name + '" has error in code:\n' + d);
    }
    this.Ky = new Interpreter(a, this.nh.rt)
};

function re(a, c) {
    a.Ya += c;
    100 <= a.Ya && se(a)
}

function se(a) {
    a.speed = 0;
    a.af = !0;
    a.Ya = 100;
    a.nh.Ll.unshift(a);
    a.nh.uf.push({type: "DIE", avatar: a});
    console.log(a + " sinks.")
}

b.stop = function () {
    this.Jf = 0
};
var W = {
    pd: [],
    Ll: [],
    uf: [],
    dk: [],
    sB: 50,
    BC: 100,
    oC: .5,
    $e: null,
    EA: 1,
    Tv: 3,
    av: 5,
    SA: 5,
    Dq: 3,
    Az: 0,
    hp: 0,
    Qu: 0,
    GC: 3E5,
    Cs: null
};
W.AC = [new g.g.J(10, 90), new g.g.J(90, 10), new g.g.J(10, 10), new g.g.J(90, 90), new g.g.J(50, 99), new g.g.J(50, 1), new g.g.J(1, 50), new g.g.J(99, 50), new g.g.J(50, 49)];
W.reset = function () {
    clearTimeout(W.Az);
    W.uf.length = 0;
    W.dk.length = 0;
    W.Ll.length = 0;
    for (var a = W.Qu = 0, c; c = W.pd[a]; a++) c.reset()
};
W.aD = function (a, c, d, e) {
    d || (d = W.AC[W.pd.length]);
    a = new qe(a, c, d, e);
    W.pd.push(a)
};
W.start = function (a) {
    W.Cs = a;
    W.hp = Date.now() + W.GC;
    console.log("Starting battle with " + W.pd.length + " avatars.");
    a = 0;
    for (var c; c = W.pd[a]; a++) try {
        c.rt()
    } catch (d) {
        console.log(c + " fails to load: " + d), se(c)
    }
    W.update()
};
W.update = function () {
    W.cH();
    W.dH();
    W.bH();
    W.pd.length <= W.Ll.length + 1 && (W.hp = Math.min(W.hp, Date.now() + 1E3));
    Date.now() > W.hp ? W.stop() : W.Az = setTimeout(W.update, 1E3 / W.sB)
};
W.stop = function () {
    for (var a = [], c = 0, d; d = W.pd[c]; c++) d.af || a.push(d);
    c = a.length;
    for (a.sort(function (e, f) {
        return e.Ya - f.Ya
    }); a.length;) W.Ll.unshift(a.pop());
    W.Cs && W.Cs(c)
};
W.dH = function () {
    for (var a = W.dk.length - 1; 0 <= a; a--) {
        var c = W.dk[a];
        c.progress += W.Tv;
        var d = 0;
        if (c.Vp - c.progress < W.Tv / 2) {
            W.dk.splice(a, 1);
            for (var e = 0, f; f = W.pd[e]; e++) if (!f.af) {
                var h = 10 * (1 - g.g.J.ep(f.La, c.xm) / 4);
                0 < h && (re(f, h), d = Math.max(d, h))
            }
            W.uf.push({type: "BOOM", damage: d, x: c.xm.x, y: c.xm.y})
        }
    }
};
W.bH = function () {
    for (var a = 0, c; c = W.pd[a]; a++) if (!c.af && (c.speed < c.Jf ? c.speed = Math.min(c.speed + W.av, c.Jf) : c.speed > c.Jf && (c.speed = Math.max(c.speed - W.av, c.Jf)), 0 < c.speed)) {
        var d = W.Rw(c), e = d[1], f = g.g.Ha.nd(c.Gg), h = c.speed / 100 * W.EA, k = Math.cos(f) * h;
        h *= Math.sin(f);
        c.La.x += k;
        c.La.y += h;
        0 > c.La.x || 100 < c.La.x || 0 > c.La.y || 100 < c.La.y ? (c.La.x = g.g.Ha.Cf(c.La.x, 0, 100), c.La.y = g.g.Ha.Cf(c.La.y, 0, 100), e = c.speed / 100 * W.Dq, re(c, e), c.speed = 0, c.Jf = 0, W.uf.push({
            type: "CRASH",
            avatar: c,
            damage: e
        })) : (d = W.Rw(c), f = d[0], d = d[1], d < W.SA &&
        e > d && (c.La.x -= k, c.La.y -= h, e = Math.max(c.speed, f.speed) / 100 * W.Dq, re(c, e), c.speed = 0, c.Jf = 0, re(f, e), f.speed = 0, f.Jf = 0, W.uf.push({
            type: "CRASH",
            avatar: c,
            damage: e
        }, {type: "CRASH", avatar: f, damage: e})))
    }
};
W.cH = function () {
    for (var a = 0; a < W.BC; a++) {
        W.Qu++;
        for (var c = 0, d; d = W.pd[c]; c++) if (!d.af) {
            W.$e = d;
            try {
                d.Ky.step()
            } catch (e) {
                console.log(d + " throws an error: " + e), se(d)
            }
            W.$e = null
        }
    }
};
W.rt = function (a, c) {
    var d = function (e, f) {
        var h = e;
        e = W.$e;
        var k = void 0 === f || null === f ? 5 : f;
        if ("number" != typeof h || isNaN(h) || "number" != typeof k || isNaN(k)) throw TypeError();
        h = id(h);
        k = g.g.Ha.Cf(k, 0, 20);
        e.nh.uf.push({type: "SCAN", avatar: e, degree: h, resolution: k});
        f = id(h - k / 2);
        h = id(h + k / 2);
        f > h && (h += 360);
        k = e.La.x;
        for (var l = e.La.y, m = Infinity, n = 0, r; r = e.nh.pd[n]; n++) if (r != e && !r.af) {
            var t = r.La.x, w = r.La.y;
            r = Math.sqrt((w - l) * (w - l) + (t - k) * (t - k));
            r >= m || (t = Math.atan2(w - l, t - k), t = id(g.g.Ha.kl(t)), t < f && (t += 360), f <= t && t <= h && (m =
                r))
        }
        return m
    };
    a.setProperty(c, "scan", a.createNativeFunction(d));
    d = function (e, f) {
        var h = f;
        f = W.$e;
        if ("number" != typeof e || isNaN(e) || "number" != typeof h || isNaN(h)) throw TypeError;
        var k = Date.now();
        f.At + 1E3 * f.nh.oC > k ? e = !1 : (f.At = k, k = new g.g.J(f.La.x, f.La.y), e = id(e), f.facing = e, h = g.g.Ha.Cf(h, 0, 70), e = {
            hD: f,
            Cn: k,
            Gg: e,
            Vp: h,
            xm: new g.g.J(k.x + h * Math.cos(g.g.Ha.nd(e)), k.y + h * Math.sin(g.g.Ha.nd(e))),
            progress: 0
        }, f.nh.dk.push(e), f.nh.uf.push({type: "BANG", avatar: f, degree: e.Gg}), e = !0);
        return e
    };
    a.setProperty(c, "cannon",
        a.createNativeFunction(d));
    d = function (e, f) {
        var h = W.$e;
        f = void 0 === f || null === f ? 50 : f;
        if ("number" != typeof e || isNaN(e) || "number" != typeof f || isNaN(f)) throw TypeError;
        h.Gg != id(e) && (50 >= h.speed ? (h.Gg = id(e), h.facing = h.Gg) : f = 0);
        0 == h.speed && 0 < f && (h.speed = .1);
        h.Jf = g.g.Ha.Cf(f, 0, 100)
    };
    a.setProperty(c, "drive", a.createNativeFunction(d));
    a.setProperty(c, "swim", a.createNativeFunction(d));
    a.setProperty(c, "stop", a.createNativeFunction(function () {
        W.$e.stop()
    }));
    a.setProperty(c, "damage", a.createNativeFunction(function () {
        return W.$e.Ya
    }));
    a.setProperty(c, "health", a.createNativeFunction(function () {
        return 100 - W.$e.Ya
    }));
    a.setProperty(c, "speed", a.createNativeFunction(function () {
        return W.$e.speed
    }));
    d = function () {
        return W.$e.La.x
    };
    a.setProperty(c, "loc_x", a.createNativeFunction(d));
    a.setProperty(c, "getX", a.createNativeFunction(d));
    d = function () {
        return W.$e.La.y
    };
    a.setProperty(c, "loc_y", a.createNativeFunction(d));
    a.setProperty(c, "getY", a.createNativeFunction(d));
    if (c = a.getProperty(c, "Math")) d = function (e) {
        return Math.sin(g.g.Ha.nd(e))
    }, a.setProperty(c,
        "sin_deg", a.createNativeFunction(d)), d = function (e) {
        return Math.cos(g.g.Ha.nd(e))
    }, a.setProperty(c, "cos_deg", a.createNativeFunction(d)), d = function (e) {
        return Math.tan(g.g.Ha.nd(e))
    }, a.setProperty(c, "tan_deg", a.createNativeFunction(d)), d = function (e) {
        return g.g.Ha.kl(Math.asin(e))
    }, a.setProperty(c, "asin_deg", a.createNativeFunction(d)), d = function (e) {
        return g.g.Ha.kl(Math.acos(e))
    }, a.setProperty(c, "acos_deg", a.createNativeFunction(d)), d = function (e) {
        return g.g.Ha.kl(Math.atan(e))
    }, a.setProperty(c, "atan_deg",
        a.createNativeFunction(d))
};
W.Rw = function (a) {
    for (var c = null, d = Infinity, e = 0, f; f = W.pd[e]; e++) if (!f.af && a != f) {
        var h = Math.min(d, g.g.J.ep(a.La, f.La));
        h < d && (d = h, c = f)
    }
    return [c, d]
};
var te, ue, ve, we = {}, xe = [], ye = new Image;
ye.src = "pond/sprites.png";
var ze = ["#ff8b00", "#c90015", "#166c0b", "#223068"], Ae = 0, Be = Object.create(null);

function Ce() {
    te = document.getElementById("scratch").getContext("2d");
    var a = document.getElementById("display").getContext("2d");
    ue = a;
    ve = a.canvas.width;
    a.globalCompositeOperation = "copy";
    De(["pond/whack.mp3", "pond/whack.ogg"], "whack");
    De(["pond/boom.mp3", "pond/boom.ogg"], "boom");
    De(["pond/splash.mp3", "pond/splash.ogg"], "splash");
    g.g.userAgent.ng || g.g.userAgent.Rq || Ee()
}

function Fe() {
    clearTimeout(Ae);
    xe.length = 0;
    var a = document.getElementById("avatarStatRow1");
    a.innerHTML = "";
    var c = document.getElementById("avatarStatRow2");
    c.innerHTML = "";
    for (var d = [], e = [], f = 0, h; h = W.pd[f]; f++) {
        var k = Math.floor(f / 2) % 2 ? c : a, l = ze[f % ze.length];
        h.nA = f;
        var m = document.createElement("td");
        m.style.borderColor = l;
        var n = document.createElement("div");
        n.className = "avatarStatHealth";
        n.style.background = l;
        h.hH = n;
        e[f] = n;
        m.appendChild(n);
        n = document.createElement("div");
        n.className = "avatarStatName";
        h = document.createTextNode(h.name);
        n.appendChild(h);
        d[f] = n;
        m.appendChild(n);
        n = document.createElement("div");
        h = document.createTextNode("\u00a0");
        n.appendChild(h);
        m.appendChild(n);
        k.appendChild(m)
    }
    for (f = 0; n = d[f]; f++) n.style.width = n.parentNode.offsetWidth - 2 + "px";
    for (f = 0; n = e[f]; f++) n.style.height = n.parentNode.offsetHeight - 2 + "px";
    Ie()
}

var Je = 0, Ke = 0;

function Le() {
    Ie();
    var a = Date.now(), c = Math.max(1, 1E3 / 36 - (a - Je - Ke));
    Ae = setTimeout(Le, c);
    Je = a;
    Ke = c
}

function Me(a) {
    return a / 100 * (ve - 35) + 17.5
}

function Ie() {
    var a = te;
    a.beginPath();
    a.rect(0, 0, a.canvas.width, a.canvas.height);
    a.fillStyle = "#527dbf";
    a.fill();
    for (var c = [], d = 0, e; e = W.pd[d]; d++) e.af && c.push(e);
    for (d = 0; e = W.pd[d]; d++) e.af || c.push(e);
    for (d = 0; e = c[d]; d++) {
        a.save();
        var f = Me(e.La.x), h = Me(100 - e.La.y);
        a.translate(f, h);
        var k = e.nA % ze.length * 35;
        e.af && (a.globalAlpha = .25);
        0 < e.speed && (a.save(), f = 50 < e.speed ? 0 : 25 < e.speed ? 35 : 70, a.rotate(g.g.Ha.nd(-e.Gg)), a.drawImage(ye, 455, f, 35, 35, -45.5, -17.5, 35, 35), a.restore());
        a.drawImage(ye, 0, k, 35, 35, -17.5, -17.5,
            35, 35);
        f = g.g.Ha.nd(e.facing);
        a.translate(12 * Math.cos(f), 12 * -Math.sin(f) - 2);
        f = (14 - Math.round(e.facing / 360 * 12)) % 12 + 1;
        e = e.facing % 30;
        15 <= e && (e -= 30);
        e /= 1.5;
        a.rotate(g.g.Ha.nd(-e));
        a.drawImage(ye, 35 * f, k, 35, 35, -15.5, -15.5, 35, 35);
        a.restore()
    }
    for (d = 0; e = W.dk[d]; d++) {
        a.save();
        h = e.progress / e.Vp;
        k = (e.xm.y - e.Cn.y) * -h;
        f = e.Vp / 2;
        var l = .15 * e.Vp;
        f = l - Math.pow((e.progress - f) / Math.sqrt(l) * l / f, 2);
        h = Me(e.Cn.x + (e.xm.x - e.Cn.x) * h);
        l = Me(100 - e.Cn.y + k - f);
        k = Me(100 - e.Cn.y + k);
        a.beginPath();
        a.arc(h, k, 5 * Math.max(0, 1 - f / 10), 0, 2 * Math.PI,
            !0);
        a.closePath();
        a.fillStyle = "rgba(128, 128, 128, " + Math.max(0, 1 - f / 10) + ")";
        a.fill();
        a.beginPath();
        a.arc(h, l, 5, 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = ze[e.hD.nA % ze.length];
        a.fill()
    }
    for (d = 0; d < W.uf.length; d++) if (f = W.uf[d], e = f.avatar, "CRASH" == f.type) {
        if (k = we[e.id], !k || k + 1E3 < Date.now()) Ne("whack", f.damage / W.Dq), we[e.id] = Date.now()
    } else "SCAN" == f.type ? (h = Math.max(f.resolution / 2, .5), k = -g.g.Ha.nd(f.degree + h), l = -g.g.Ha.nd(f.degree - h), a.beginPath(), f = Me(e.La.x), h = Me(100 - e.La.y), a.moveTo(f, h), a.lineTo(f +
        200 * Math.cos(k), h + 200 * Math.sin(k)), a.arc(f, h, 200, k, l), a.lineTo(f, h), e = a.createRadialGradient(f, h, 17.5, f, h, 200), e.addColorStop(0, "rgba(255, 255, 255, 0.3)"), e.addColorStop(1, "rgba(255, 255, 255, 0)"), a.fillStyle = e, a.fill()) : "BANG" != f.type && ("BOOM" == f.type ? (f.damage && Ne("boom", f.damage / 10), xe.push({
        x: f.x,
        y: f.y,
        t: 0
    })) : "DIE" == f.type && Ne("splash"));
    W.uf.length = 0;
    for (d = xe.length - 1; 0 <= d; d--) e = xe[d], f = Me(e.x), h = Me(100 - e.y), a.beginPath(), a.arc(f, h, e.t + 1, 0, 2 * Math.PI, !0), a.closePath(), a.lineWidth = 5, a.strokeStyle =
        "rgba(255, 255, 255, " + (1 - e.t / 10) + ")", a.stroke(), e.t += 2, 10 < e.t && xe.splice(d, 1);
    ue.drawImage(a.canvas, 0, 0);
    for (d = 0; e = c[d]; d++) a = e.hH, a.parentNode.title = e.name + ": " + Math.round(100 - e.Ya) + "%", a.style.width = Math.max(0, a.parentNode.offsetWidth * (1 - e.Ya / 100) - 2) + "px"
}

function De(a, c) {
    if (window.Audio && a.length) {
        for (var d, e = new window.Audio, f = 0; f < a.length; f++) {
            var h = a[f], k = h.match(/\.(\w+)$/);
            if (k && e.canPlayType("audio/" + k[1])) {
                d = new window.Audio(h);
                break
            }
        }
        d && d.play && (Be[c] = d)
    }
}

function Ee() {
    for (var a in Be) {
        var c = Be[a];
        c.volume = .01;
        c.play().catch(function () {
        });
        c.pause()
    }
}

function Ne(a, c) {
    a = Be[a];
    a = g.g.userAgent.ng || g.g.userAgent.li ? a : a.cloneNode();
    a.volume = void 0 === c ? 1 : c;
    a.play()
};var Oe = null, Pe = !1;

function Qe() {
    if (!Pe) {
        var a = document.getElementById("docsButton"), c = document.getElementById("dialogDocs"),
            d = document.getElementById("frameDocs"), e = "pond/docs.html?lang=" + Xc + "&mode=" + R;
        d.src != e && (d.src = e);
        Pe = !0;
        U.Qh(a, !1, .2);
        U.Qh(c, !0, .8);
        setTimeout(function () {
            c.style.visibility = "visible";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }, 175)
    }
}

function Re() {
    if (Pe) {
        var a = document.getElementById("docsButton"), c = document.getElementById("dialogDocs");
        Pe = !1;
        U.Qh(c, !1, .8);
        U.Qh(a, !0, .2);
        setTimeout(function () {
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }, 175);
        c.style.visibility = "hidden"
    }
}

function Se(a) {
    if (!Gd(a)) {
        a = document.getElementById("runButton");
        var c = document.getElementById("resetButton");
        c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        c.style.display = "inline";
        Te()
    }
}

function Ue(a) {
    Gd(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", W.reset(), Fe())
}

function Te() {
    "Interpreter" in window ? (W.reset(), Fe(), W.start(Oe), Le()) : setTimeout(Te, 250)
}

function Ve() {
    var a = document.getElementById("help"), c = document.getElementById("helpButton");
    U.yn(a, c, !0, !0, {width: "50%", left: "25%", top: "5em"}, U.Ou);
    U.Mu()
};g.Ja = function (a, c, d) {
    "function" != typeof a && g.Ja.jA(a);
    this.pj = a;
    this.mp = null;
    this.sn = 0;
    this.Pu = this.pu = null;
    a = this.pj;
    if (Array.isArray(a)) {
        for (var e = !1, f = 0; f < a.length; f++) {
            var h = a[f][0];
            "string" == typeof h ? a[f][0] = g.g.ke(h) : (null != h.alt && (a[f][0].alt = g.g.ke(h.alt)), e = !0)
        }
        if (!(e || 2 > a.length)) {
            e = [];
            for (f = 0; f < a.length; f++) e.push(a[f][0]);
            f = g.g.fb.Ju(e);
            h = g.g.fb.FD(e, f);
            var k = g.g.fb.GD(e, f);
            !h && !k || f <= h + k || (h && (this.pu = e[0].substring(0, h - 1)), k && (this.Pu = e[0].substr(1 - k)), this.pj = g.Ja.fD(a, h, k))
        }
    }
    a = this.getOptions(!1)[0];
    g.Ja.w.constructor.call(this, a[1], c, d);
    this.bl = this.Fh = null
};
g.g.object.W(g.Ja, g.Na);
g.Ja.va = function (a) {
    return new g.Ja(a.options, void 0, a)
};
g.Ja.prototype.Ei = !0;
g.Ja.HH = 25;
g.Ja.mJ = .45;
g.Ja.Hv = 5;
g.Ja.CB = 2 * g.Ja.Hv;
g.Ja.iv = g.g.userAgent.li ? "\u25bc" : "\u25be";
b = g.Ja.prototype;
b.Hq = "default";
b.Hh = function () {
    g.Ja.w.Hh.call(this);
    this.Fh = g.g.o.M("image", {y: g.Ja.Hv}, this.df);
    this.Ve = g.g.o.M("tspan", {}, this.ic);
    this.Ve.appendChild(document.createTextNode(this.B.G ? g.Ja.iv + " " : " " + g.Ja.iv));
    this.B.G ? this.ic.insertBefore(this.Ve, this.Kj) : this.ic.appendChild(this.Ve)
};
b.mf = function () {
    this.Qg = this.Ls();
    this.Qg.za(g.D.Wx());
    g.g.o.Cb(this.Qg.ta(), "blocklyDropdownMenu");
    g.D.Wz(this, this.Ms.bind(this));
    this.Qg.focus();
    this.bl && g.g.style.Bu(this.bl.ta(), this.Qg.ta())
};
b.Ls = function () {
    var a = new g.xi;
    da(a, this.B.G);
    a.Yf("listbox");
    var c = this.getOptions(!1);
    this.bl = null;
    for (var d = 0; d < c.length; d++) {
        var e = c[d][0], f = c[d][1];
        if ("object" == typeof e) {
            var h = new Image(e.width, e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h
        }
        e = new g.zo(e);
        e.Yf("option");
        da(e, this.B.G);
        e.setValue(f);
        e.cm = !0;
        a.Yl(e, a.kb.length, !0);
        Wb(e, f == this.cc);
        f == this.cc && (this.bl = e);
        Xb(e, this.$E, this)
    }
    g.g.V.Gb(a.ta(), g.g.V.State.ev, this.bl ? this.bl.ua() : "");
    return a
};
b.Ms = function () {
    this.Qg.I();
    this.Qg = null
};
b.$E = function (a) {
    g.D.Hk(this, !0);
    this.qz(a)
};
b.qz = function (a) {
    this.setValue(a.getValue())
};
g.Ja.fD = function (a, c, d) {
    for (var e = [], f = 0; f < a.length; f++) {
        var h = a[f][0], k = a[f][1];
        h = h.substring(c, h.length - d);
        e[f] = [h, k]
    }
    return e
};
b = g.Ja.prototype;
b.getOptions = function (a) {
    return "function" == typeof this.pj ? (this.mp && a || (this.mp = this.pj.call(this), g.Ja.jA(this.mp)), this.mp) : this.pj
};
b.uh = function (a) {
    for (var c = !1, d = this.getOptions(!0), e = 0, f; f = d[e]; e++) if (f[1] == a) {
        c = !0;
        break
    }
    return c ? a : (this.B && console.warn("Cannot set the dropdown's value to an unavailable option. Block type: " + this.B.type + ", Field name: " + this.name + ", Value: " + a), null)
};
b.Vi = function (a) {
    g.Ja.w.Vi.call(this, a);
    a = this.getOptions(!0);
    for (var c = 0, d; d = a[c]; c++) d[1] == this.cc && (this.sn = c)
};
b.Pe = function () {
    this.B && this.Ve && (this.Ve.style.fill = this.B.cb ? Gb(this.B) : this.B.qh)
};
b.Vf = function () {
    this.Kj.nodeValue = "";
    this.Fh.style.display = "none";
    var a = this.getOptions(!0), c = 0 <= this.sn && a[this.sn][0];
    if (c && "object" == typeof c) {
        this.Fh.style.display = "";
        this.Fh.setAttributeNS(g.g.o.Ji, "xlink:href", c.src);
        this.Fh.setAttribute("height", c.height);
        this.Fh.setAttribute("width", c.width);
        a = g.g.o.bt(this.Ve);
        var d = Number(c.width);
        this.bc.height = Number(c.height) + g.Ja.CB;
        this.bc.width = d + a + g.Na.Xl;
        this.B.G ? (c = g.Na.ri - 1, this.Fh.setAttribute("x", g.Na.ri + a), this.ic.setAttribute("x", c)) : (c = d +
            a + g.Na.ri + 1, this.ic.setAttribute("text-anchor", "end"), this.ic.setAttribute("x", c), this.Fh.setAttribute("x", g.Na.ri))
    } else this.Kj.nodeValue = xb(this), this.ic.setAttribute("text-anchor", "start"), this.ic.setAttribute("x", g.Na.ri), this.bc.height = g.Na.ov, this.bc.width = g.g.o.bt(this.ic) + g.Na.Xl;
    this.Li.setAttribute("height", this.bc.height);
    this.Li.setAttribute("width", this.bc.width)
};
b.ct = function () {
    if (0 > this.sn) return null;
    var a = this.getOptions(!0)[this.sn][0];
    return "object" == typeof a ? a.alt : a
};
g.Ja.jA = function (a) {
    if (!Array.isArray(a)) throw TypeError("FieldDropdown options must be an array.");
    if (!a.length) throw TypeError("FieldDropdown options must not be an empty array.");
    for (var c = !1, d = 0; d < a.length; ++d) {
        var e = a[d];
        Array.isArray(e) ? "string" != typeof e[1] ? (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : e[0] && "string" != typeof e[0] && "string" != typeof e[0].src && (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must have a string label or image description. Found" +
            e[0] + " in: ", e)) : (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must be an array. Found: ", e))
    }
    if (c) throw TypeError("Found invalid FieldDropdown options.");
};
g.Ja.prototype.Th = function (a) {
    if (this.Qg) {
        if (a === g.navigation.wq) return Sb(this.Qg), !0;
        if (a === g.navigation.vq) return Qb(this.Qg), !0
    }
    return g.Ja.w.Th.call(this, a)
};
g.Uc.register("field_dropdown", g.Ja);
g.xb = function (a, c, d) {
    this.Bn = !0;
    null == a && (a = "");
    g.xb.w.constructor.call(this, a, c, d)
};
g.g.object.W(g.xb, g.Na);
g.xb.va = function (a) {
    var c = g.g.ke(a.text);
    return new g.xb(c, void 0, a)
};
g.xb.prototype.Ei = !0;
g.xb.oB = 11;
g.xb.HA = 4;
b = g.xb.prototype;
b.Hq = "text";
b.Kd = function (a) {
    g.xb.w.Kd.call(this, a);
    "boolean" == typeof a.spellcheck && (this.Bn = a.spellcheck)
};
b.uh = function (a) {
    return null === a || void 0 === a ? null : String(a)
};
b.Dx = function () {
    if (this.Nk) {
        this.yt = !1;
        var a = this.cc;
        this.cc = this.Xc.aH;
        this.B && g.i.isEnabled() && g.i.Ka(new g.i.eg(this.B, "field", this.name || null, a, this.cc))
    }
};
b.Vi = function (a) {
    this.yt = !0;
    this.cc = a;
    this.Nk || (this.Pf = !0)
};
b.Vf = function () {
    g.xb.w.Vf.call(this);
    this.Nk && (this.B.G ? setTimeout(this.$p.bind(this), 0) : this.$p(), this.yt ? (g.g.o.Fc(this.Xc, "blocklyInvalidInput"), g.g.V.Gb(this.Xc, "invalid", !1)) : (g.g.o.Cb(this.Xc, "blocklyInvalidInput"), g.g.V.Gb(this.Xc, "invalid", !0)))
};

function We(a) {
    0 != a.Bn && (a.Bn = !1, a.Xc && a.Xc.setAttribute("spellcheck", a.Bn))
}

b.mf = function (a) {
    this.s = this.B.v;
    a = a || !1;
    !a && (g.g.userAgent.Uv || g.g.userAgent.li || g.g.userAgent.ng) ? Xe(this) : (g.aa.show(this, this.B.G, this.jH.bind(this)), this.Xc = this.Zu(), this.Nk = !0, a || (this.Xc.focus(), this.Xc.select()))
};

function Xe(a) {
    g.prompt(g.h.CHANGE_VALUE_TITLE, a.Tb(), function (c) {
        a.setValue(c)
    })
}

b.Zu = function () {
    var a = g.aa.Fa, c = document.createElement("input");
    c.className = "blocklyHtmlInput";
    c.setAttribute("spellcheck", this.Bn);
    var d = g.xb.oB * this.s.scale + "pt";
    a.style.fontSize = d;
    c.style.fontSize = d;
    c.style.borderRadius = g.xb.HA * this.s.scale + "px";
    a.appendChild(c);
    c.value = c.defaultValue = String(this.cc);
    c.aH = this.cc;
    c.lz = null;
    g.g.userAgent.Oq ? setTimeout(this.$p.bind(this), 0) : this.$p();
    this.fu = g.ma(c, "keydown", this, this.cu);
    this.cG = g.ma(c, "input", this, this.aG);
    return c
};
b.jH = function () {
    this.Nk = !1;
    this.yt = !0;
    yb(this);
    this.bu && this.bu(this.cc);
    g.$a(this.fu);
    g.$a(this.cG);
    var a = g.aa.Fa.style;
    a.width = "auto";
    a.height = "auto";
    a.fontSize = ""
};
b.cu = function (a) {
    a.keyCode == g.g.Ba.Kq ? (g.aa.Ca(), g.D.Ik()) : a.keyCode == g.g.Ba.Lq ? (this.Xc.value = this.Xc.defaultValue, g.aa.Ca(), g.D.Ik()) : a.keyCode == g.g.Ba.nw && (g.aa.Ca(), g.D.Ik(), lc(this.B, this, !a.shiftKey), a.preventDefault())
};
b.aG = function () {
    var a = this.Xc.value;
    a !== this.Xc.lz && (this.Xc.lz = a, g.i.$(!0), this.setValue(a), yb(this), g.i.$(!1))
};
b.$p = function () {
    var a = g.aa.Fa;
    var c = this.Li.getBBox();
    var d = c.height * this.B.v.scale;
    var e = c.width * this.B.v.scale;
    var f = g.g.style.qp(this.Li);
    c = f.y;
    d = f.y + d;
    var h = f.x;
    e = f.x + e;
    a.style.width = e - h + "px";
    a.style.height = d - c + "px";
    c = new g.g.J(this.B.G ? e - a.offsetWidth : h, c);
    c.y += 1;
    g.g.userAgent.Oq && g.aa.Fa.style.top && (--c.x, --c.y);
    g.g.userAgent.Er && (c.y -= 3);
    a.style.left = c.x + "px";
    a.style.top = c.y + "px"
};
g.xb.UF = function (a) {
    console.warn("Blockly.FieldTextInput.numberValidator is deprecated. Use Blockly.FieldNumber instead.");
    if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = Number(a || 0);
    return isNaN(a) ? null : String(a)
};
g.xb.TL = function (a) {
    (a = g.xb.UF(a)) && (a = String(Math.max(0, Math.floor(a))));
    return a
};
g.xb.prototype.Py = function () {
    return !0
};
g.xb.prototype.ct = function () {
    return this.Nk && this.Xc ? this.Xc.value : null
};
g.Uc.register("field_input", g.xb);
g.Gd = function (a, c, d, e, f, h) {
    this.an = -Infinity;
    this.Zm = Infinity;
    this.Xk = 0;
    this.ns = null;
    g.Gd.w.constructor.call(this, a || 0, f, h);
    h || (Ye(this, c), Ze(this, d), $e(this, e), this.setValue(this.getValue()))
};
g.g.object.W(g.Gd, g.xb);
g.Gd.va = function (a) {
    return new g.Gd(a.value, void 0, void 0, void 0, void 0, a)
};
g.Gd.prototype.Ei = !0;
g.Gd.prototype.Kd = function (a) {
    g.Gd.w.Kd.call(this, a);
    Ye(this, a.min);
    Ze(this, a.max);
    $e(this, a.precision)
};

function Ye(a, c) {
    null == c ? a.an = -Infinity : (c = Number(c), isNaN(c) || (a.an = c))
}

function Ze(a, c) {
    null == c ? a.Zm = Infinity : (c = Number(c), isNaN(c) || (a.Zm = c))
}

function $e(a, c) {
    null == c ? a.Xk = 0 : (c = Number(c), isNaN(c) || (a.Xk = c));
    var d = a.Xk.toString(), e = d.indexOf(".");
    a.ns = -1 == e ? c ? 0 : null : d.length - e - 1
}

g.Gd.prototype.uh = function (a) {
    if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = Number(a || 0);
    if (isNaN(a)) return null;
    a = Math.min(Math.max(a, this.an), this.Zm);
    this.Xk && isFinite(a) && (a = Math.round(a / this.Xk) * this.Xk);
    null != this.ns && (a = Number(a.toFixed(this.ns)));
    return a
};
g.Gd.prototype.Zu = function () {
    var a = g.Gd.w.Zu.call(this);
    -Infinity < this.an && g.g.V.Gb(a, g.g.V.State.MC, this.an);
    Infinity > this.Zm && g.g.V.Gb(a, g.g.V.State.LC, this.Zm);
    return a
};
g.Uc.register("field_number", g.Gd);
g.Hd = function (a, c, d, e, f) {
    this.pj = g.Hd.pE;
    this.ZD = a || "";
    this.bc = new g.g.Te(0, g.wa.Yq);
    f && this.Kd(f);
    c && (this.Pj = c);
    f || af(this, d, e)
};
g.g.object.W(g.Hd, g.Ja);
g.Hd.va = function (a) {
    var c = g.g.ke(a.variable);
    return new g.Hd(c, void 0, void 0, void 0, a)
};
b = g.Hd.prototype;
b.s = null;
b.Ei = !0;
b.Kd = function (a) {
    g.Hd.w.Kd.call(this, a);
    af(this, a.variableTypes, a.defaultType)
};
b.dj = function () {
    if (!this.Td) {
        var a = g.O.pp(this.B.v, null, this.ZD, this.YD);
        g.i.disable();
        this.setValue(a.ua());
        g.i.enable()
    }
};
b.Bm = function (a) {
    var c = a.getAttribute("id"), d = a.textContent,
        e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
    c = g.O.pp(this.B.v, c, d, e);
    if (null != e && e !== c.type) throw Error("Serialized variable type with id '" + c.ua() + "' had type " + c.type + ", and does not match variable field that references it: " + g.U.ce(a) + ".");
    this.setValue(c.ua())
};
b.dA = function (a) {
    this.dj();
    a.id = this.Td.ua();
    a.textContent = this.Td.name;
    this.Td.type && a.setAttribute("variabletype", this.Td.type);
    return a
};
b.Iu = function (a) {
    if (a.cb) throw Error("Variable fields are not allowed to exist on shadow blocks.");
    g.Hd.w.Iu.call(this, a)
};
b.getValue = function () {
    return this.Td ? this.Td.ua() : null
};
b.Tb = function () {
    return this.Td ? this.Td.name : ""
};
b.Ac = function () {
    return this.Td
};
b.oy = function () {
    return this.Td ? this.Pj : null
};
b.uh = function (a) {
    if (null === a) return null;
    var c = g.O.Ac(this.B.v, a);
    if (!c) return console.warn("Variable id doesn't point to a real variable! ID was " + a), null;
    c = c.type;
    var d;
    a:if (d = bf(this)) {
        for (var e = 0; e < d.length; e++) if (c == d[e]) {
            d = !0;
            break a
        }
        d = !1
    } else d = !0;
    return d ? a : (console.warn("Variable type doesn't match this field!  Type was " + c), null)
};
b.Vi = function (a) {
    this.Td = g.O.Ac(this.B.v, a);
    g.Hd.w.Vi.call(this, a)
};

function bf(a) {
    var c = a.eH;
    if (null === c && a.B && a.B.v) return a.B.v.et();
    c = c || [""];
    if (0 == c.length) throw a = a.Tb(), Error("'variableTypes' of field variable " + a + " was an empty list");
    return c
}

function af(a, c, d) {
    d = d || "";
    if (null == c || void 0 == c) c = null; else if (Array.isArray(c)) {
        for (var e = !1, f = 0; f < c.length; f++) c[f] == d && (e = !0);
        if (!e) throw Error("Invalid default type '" + d + "' in the definition of a FieldVariable");
    } else throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    a.YD = d;
    a.eH = c
}

g.Hd.pE = function () {
    if (!this.Td) throw Error("Tried to call dropdownCreate on a variable field with no variable selected.");
    var a = this.Tb(), c = [];
    if (this.B && this.B.v) for (var d = bf(this), e = 0; e < d.length; e++) c = c.concat(this.B.v.Hm(d[e]));
    c.sort(g.Tl.Xw);
    d = [];
    for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].ua()];
    d.push([g.h.RENAME_VARIABLE, g.iw]);
    g.h.DELETE_VARIABLE && d.push([g.h.DELETE_VARIABLE.replace("%1", a), g.Av]);
    return d
};
g.Hd.prototype.qz = function (a) {
    a = a.getValue();
    if (this.B && this.B.v) {
        if (a == g.iw) {
            g.O.Zp(this.B.v, this.Td);
            return
        }
        if (a == g.Av) {
            this.B.v.If(this.Td.ua());
            return
        }
    }
    this.setValue(a)
};
g.Hd.prototype.nn = function () {
    return !0
};
g.Uc.register("field_variable", g.Hd);
g.K.Ha = {};
g.la = {};
g.la.Math = {};
g.la.Math.qo = 230;
g.zk([{
    type: "math_number",
    message0: "%1",
    args0: [{type: "field_number", name: "NUM", value: 0}],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [{type: "input_value", name: "A", check: "Number"}, {
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
            ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"], ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]]
    }, {type: "input_value", name: "B", check: "Number"}],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_single",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"], ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"], ["-", "NEG"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "POW10"]]
    }, {
        type: "input_value",
        name: "NUM", check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_trig",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_TRIG_SIN}", "SIN"], ["%{BKY_MATH_TRIG_COS}", "COS"], ["%{BKY_MATH_TRIG_TAN}", "TAN"], ["%{BKY_MATH_TRIG_ASIN}", "ASIN"], ["%{BKY_MATH_TRIG_ACOS}", "ACOS"], ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]]
    }, {type: "input_value", name: "NUM", check: "Number"}],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_constant",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "CONSTANT",
        options: [["\u03c0", "PI"], ["e", "E"], ["\u03c6", "GOLDEN_RATIO"], ["sqrt(2)", "SQRT2"], ["sqrt(\u00bd)", "SQRT1_2"], ["\u221e", "INFINITY"]]
    }],
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}"
}, {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [{type: "input_value", name: "NUMBER_TO_CHECK", check: "Number"}, {
        type: "field_dropdown", name: "PROPERTY",
        options: [["%{BKY_MATH_IS_EVEN}", "EVEN"], ["%{BKY_MATH_IS_ODD}", "ODD"], ["%{BKY_MATH_IS_PRIME}", "PRIME"], ["%{BKY_MATH_IS_WHOLE}", "WHOLE"], ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"], ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"], ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]]
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator"
}, {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [{type: "field_variable", name: "VAR", variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}"},
        {type: "input_value", name: "DELTA", check: "Number"}],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"]
}, {
    type: "math_round",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"], ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"], ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]]
    }, {type: "input_value", name: "NUM", check: "Number"}],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
}, {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"], ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"], ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"], ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"], ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"], ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"], ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"], ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}",
            "RANDOM"]]
    }, {type: "input_value", name: "LIST", check: "Array"}],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [{type: "input_value", name: "DIVIDEND", check: "Number"}, {
        type: "input_value",
        name: "DIVISOR",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}"
}, {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [{type: "input_value", name: "VALUE", check: "Number"}, {
        type: "input_value",
        name: "LOW",
        check: "Number"
    }, {type: "input_value", name: "HIGH", check: "Number"}],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}"
}, {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [{type: "input_value", name: "FROM", check: "Number"}, {type: "input_value", name: "TO", check: "Number"}],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}"
}, {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}"
}, {
    type: "math_atan2",
    message0: "%{BKY_MATH_ATAN2_TITLE}",
    args0: [{type: "input_value", name: "X", check: "Number"}, {type: "input_value", name: "Y", check: "Number"}],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
    helpUrl: "%{BKY_MATH_ATAN2_HELPURL}"
}]);
g.la.Math.zr = {
    ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
    MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
    MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
    DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
    POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
    ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
    ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
    NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
    LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
    LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
    EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
    POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
    SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
    COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
    TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
    ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
    ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
    ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
    SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
    MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
    MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
    AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
    MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
    MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
    STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
    RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"
};
g.Z.register("math_op_tooltip", g.Z.No("OP", g.la.Math.zr));
g.la.Math.FB = {
    eb: function () {
        var a = g.g.xml.createElement("mutation"), c = "DIVISIBLE_BY" == G(this, "PROPERTY");
        a.setAttribute("divisor_input", c);
        return a
    }, zb: function (a) {
        a = "true" == a.getAttribute("divisor_input");
        this.Jc(a)
    }, Jc: function (a) {
        var c = B(this, "DIVISOR");
        a ? c || N(this, "DIVISOR").vb("Number") : c && this.ib("DIVISOR")
    }
};
g.la.Math.GB = function () {
    wb(y(this, "PROPERTY"), function (a) {
        this.B.Jc("DIVISIBLE_BY" == a)
    })
};
g.Z.tu("math_is_divisibleby_mutator", g.la.Math.FB, g.la.Math.GB);
g.Z.register("math_change_tooltip", g.Z.Wr("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.la.Math.OB = {
    Rn: function (a) {
        "MODE" == a ? this.L.vb("Array") : this.L.vb("Number")
    }, eb: function () {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("op", G(this, "OP"));
        return a
    }, zb: function (a) {
        this.Rn(a.getAttribute("op"))
    }
};
g.la.Math.NB = function () {
    wb(y(this, "OP"), function (a) {
        this.Rn(a)
    }.bind(this))
};
g.Z.tu("math_modes_of_list_mutator", g.la.Math.OB, g.la.Math.NB);
g.ka = function (a, c, d) {
    this.fm = g.ka.QA;
    this.vj = g.ka.gh;
    this.qA = g.ka.RC;
    this.rn = g.ka.qC;
    g.ka.w.constructor.call(this, a || 0, c, d)
};
g.g.object.W(g.ka, g.xb);
g.ka.va = function (a) {
    return new g.ka(a.angle, void 0, a)
};
g.ka.prototype.Ei = !0;
g.ka.qC = 15;
g.ka.mc = 50;
g.ka.QA = !1;
g.ka.gh = 0;
g.ka.RC = 360;
g.ka.qg = g.ka.mc - 1;
b = g.ka.prototype;
b.Kd = function (a) {
    g.ka.w.Kd.call(this, a);
    switch (a.mode) {
        case "compass":
            this.fm = !0;
            this.vj = 90;
            break;
        case "protractor":
            this.fm = !1, this.vj = 0
    }
    var c = a.clockwise;
    "boolean" == typeof c && (this.fm = c);
    c = a.offset;
    null != c && (c = Number(c), isNaN(c) || (this.vj = c));
    c = a.wrap;
    null != c && (c = Number(c), isNaN(c) || (this.qA = c));
    a = a.round;
    null != a && (a = Number(a), isNaN(a) || (this.rn = a))
};
b.Hh = function () {
    g.ka.w.Hh.call(this);
    this.cA = g.g.o.M("tspan", {}, null);
    this.cA.appendChild(document.createTextNode("\u00b0"));
    this.ic.appendChild(this.cA)
};
b.Vf = function () {
    g.ka.w.Vf.call(this);
    cf(this)
};
b.mf = function () {
    g.ka.w.mf.call(this, g.g.userAgent.Uv || g.g.userAgent.li || g.g.userAgent.ng);
    var a = this.Ls();
    g.D.Wx().appendChild(a);
    a = Hb(this.B);
    a = a.To || a.fs;
    g.D.Gc(this.B.qh, a);
    g.D.Wz(this, this.Ms.bind(this));
    cf(this)
};
b.Ls = function () {
    var a = g.g.o.M("svg", {
        xmlns: g.g.o.Pl,
        "xmlns:html": g.g.o.wi,
        "xmlns:xlink": g.g.o.Ji,
        version: "1.1",
        height: 2 * g.ka.mc + "px",
        width: 2 * g.ka.mc + "px",
        style: "touch-action: none"
    }, null), c = g.g.o.M("circle", {cx: g.ka.mc, cy: g.ka.mc, r: g.ka.qg, "class": "blocklyAngleCircle"}, a);
    this.Ts = g.g.o.M("path", {"class": "blocklyAngleGauge"}, a);
    this.Vy = g.g.o.M("line", {x1: g.ka.mc, y1: g.ka.mc, "class": "blocklyAngleLine"}, a);
    for (var d = 0; 360 > d; d += 15) g.g.o.M("line", {
        x1: g.ka.mc + g.ka.qg,
        y1: g.ka.mc,
        x2: g.ka.mc + g.ka.qg - (0 == d %
        45 ? 10 : 5),
        y2: g.ka.mc,
        "class": "blocklyAngleMarks",
        transform: "rotate(" + d + "," + g.ka.mc + "," + g.ka.mc + ")"
    }, a);
    this.ED = g.ma(a, "click", this, this.jF);
    this.DD = g.ma(c, "click", this, this.wz, !0, !0);
    this.MF = g.ma(c, "mousemove", this, this.wz, !0, !0);
    return a
};
b.Ms = function () {
    g.$a(this.ED);
    g.$a(this.DD);
    g.$a(this.MF)
};
b.jF = function () {
    g.D.Hk(this);
    g.aa.Ca()
};
b.wz = function (a) {
    var c = this.Ts.ownerSVGElement.getBoundingClientRect(), d = a.clientX - c.left - g.ka.mc;
    a = a.clientY - c.top - g.ka.mc;
    c = Math.atan(-a / d);
    isNaN(c) || (c = g.g.Ha.kl(c), 0 > d ? c += 180 : 0 < a && (c += 360), c = this.fm ? this.vj + 360 - c : 360 - (this.vj - c), df(this, c))
};

function df(a, c) {
    a.rn && (c = Math.round(c / a.rn) * a.rn);
    c = ef(a, c);
    c != a.cc && (a.Pf = !0, a.Nk && (a.Xc.value = String(c)), a.setValue(c))
}

function cf(a) {
    if (a.Ts) {
        var c = Number(a.Tb()) + a.vj, d = g.g.Ha.nd(c % 360);
        c = ["M ", g.ka.mc, ",", g.ka.mc];
        var e = g.ka.mc, f = g.ka.mc;
        if (!isNaN(d)) {
            var h = Number(a.fm), k = g.g.Ha.nd(a.vj), l = Math.cos(k) * g.ka.qg, m = Math.sin(k) * -g.ka.qg;
            h && (d = 2 * k - d);
            e += Math.cos(d) * g.ka.qg;
            f -= Math.sin(d) * g.ka.qg;
            d = Math.abs(Math.floor((d - k) / Math.PI) % 2);
            h && (d = 1 - d);
            c.push(" l ", l, ",", m, " A ", g.ka.qg, ",", g.ka.qg, " 0 ", d, " ", h, " ", e, ",", f, " z")
        }
        a.Ts.setAttribute("d", c.join(""));
        a.Vy.setAttribute("x2", e);
        a.Vy.setAttribute("y2", f)
    }
}

b.cu = function (a) {
    g.ka.w.cu.call(this, a);
    var c;
    a.keyCode === g.g.Ba.wo ? c = this.B.G ? 1 : -1 : a.keyCode === g.g.Ba.Eo ? c = this.B.G ? -1 : 1 : a.keyCode === g.g.Ba.yl ? c = -1 : a.keyCode === g.g.Ba.Sl && (c = 1);
    if (c) {
        var d = this.getValue();
        df(this, d + c * this.rn);
        a.preventDefault();
        a.stopPropagation()
    }
};
b.uh = function (a) {
    a = Number(a);
    return isNaN(a) || !isFinite(a) ? null : ef(this, a)
};

function ef(a, c) {
    c %= 360;
    0 > c && (c += 360);
    c > a.qA && (c -= 360);
    return c
}

g.Ed.register(".blocklyAngleCircle {,stroke: #444;,stroke-width: 1;,fill: #ddd;,fill-opacity: .8;,},.blocklyAngleMarks {,stroke: #444;,stroke-width: 1;,},.blocklyAngleGauge {,fill: #f88;,fill-opacity: .8;,pointer-events: none;,},.blocklyAngleLine {,stroke: #f00;,stroke-width: 2;,stroke-linecap: round;,pointer-events: none;,}".split(","));
g.Uc.register("field_angle", g.ka);
g.Generator = function (a) {
    this.QF = a;
    this.pB = new RegExp(this.se, "g")
};
g.Generator.sb = "generated_function";
b = g.Generator.prototype;
b.to = null;
b.Jd = null;
b.Pc = null;
b.sd = "  ";
b.TA = 60;
b.Co = [];

function ff(a, c) {
    return c + a.replace(/(?!\n$)\n/g, "\n" + c)
}

function Ad(a, c) {
    if (!c) return "";
    if (!c.isEnabled()) return Ad(a, q(c));
    var d = a[c.type];
    if ("function" != typeof d) throw Error('Language "' + a.QF + '" does not know how to generate  code for block type "' + c.type + '".');
    d = d.call(c, c);
    if (Array.isArray(d)) {
        if (!c.L) throw TypeError("Expecting string from statement block: " + c.type);
        return [a.cq(c, d[0], void 0), d[1]]
    }
    if ("string" == typeof d) return a.Jd && !c.gi && (d = V(a.Jd, c) + d), a.Pc && !c.gi && (d += V(a.Pc, c)), a.cq(c, d, void 0);
    if (null === d) return "";
    throw SyntaxError("Invalid code generated: " +
        d);
}

function X(a, c, d) {
    var e = g.j;
    if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
    var f = Mb(a, c);
    if (!f) return "";
    c = Ad(e, f);
    if ("" === c) return "";
    if (!Array.isArray(c)) throw TypeError("Expecting tuple from value block: " + f.type);
    a = c[0];
    c = c[1];
    if (isNaN(c)) throw TypeError("Expecting valid order from value block: " + f.type);
    if (!a) return "";
    f = !1;
    var h = Math.floor(d), k = Math.floor(c);
    if (h <= k && (h != k || 0 != h && 99 != h)) for (f = !0, h = 0; h < e.Co.length; h++) if (e.Co[h][0] == d && e.Co[h][1] == c) {
        f = !1;
        break
    }
    f && (a = "(" +
        a + ")");
    return a
}

function gf(a, c) {
    var d = g.j;
    a = Mb(a, c);
    c = Ad(d, a);
    if ("string" != typeof c) throw TypeError("Expecting code from statement block: " + (a && a.type));
    c && (c = ff(c, d.sd));
    return c
}

function hf(a, c) {
    var d = g.j;
    d.to && (a = ff(V(d.to, c), d.sd) + a);
    d.Pc && !c.gi && (a = ff(V(d.Pc, c), d.sd) + a);
    d.Jd && !c.gi && (a += ff(V(d.Jd, c), d.sd));
    return a
}

function V(a, c) {
    c = c.id.replace(/\$/g, "$$$$");
    return a.replace(/%1/g, "'" + c + "'")
}

b.kr = "";

function jf(a) {
    var c = g.j;
    c.kr += a + ","
}

b.se = "{leCUI8hutHZI4480Dc}";

function kf(a, c) {
    var d = g.j;
    if (!d.Ti[a]) {
        var e = Ec(d.Dd, a, g.Ga.sb);
        d.Ss[a] = e;
        c = c.join("\n").replace(d.pB, e);
        for (var f; f != c;) f = c, c = c.replace(/^(( {2})*) {2}/gm, "$1\x00");
        c = c.replace(/\0/g, d.sd);
        d.Ti[a] = c
    }
    return d.Ss[a]
}

b.T = function () {
};
b.cq = function (a, c) {
    return c
};
b.finish = function (a) {
    return a
};
b.Qz = function (a) {
    return a
};
g.j = new g.Generator("JavaScript");
jf("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
g.j.zi = 0;
g.j.cK = 1.1;
g.j.Rb = 1.2;
g.j.gb = 2;
g.j.aK = 3;
g.j.XJ = 3;
g.j.TJ = 4.1;
g.j.eK = 4.2;
g.j.Kl = 4.3;
g.j.Il = 4.4;
g.j.dK = 4.5;
g.j.fK = 4.6;
g.j.YJ = 4.7;
g.j.RJ = 4.8;
g.j.ZJ = 5;
g.j.er = 5.1;
g.j.Hl = 5.2;
g.j.Jl = 5.3;
g.j.gk = 6.1;
g.j.hh = 6.2;
g.j.VJ = 7;
g.j.gC = 8;
g.j.$J = 8;
g.j.bK = 8;
g.j.Yv = 9;
g.j.SJ = 10;
g.j.WJ = 11;
g.j.UJ = 12;
g.j.cr = 13;
g.j.dr = 14;
g.j.Bo = 15;
g.j.pg = 16;
g.j.gK = 17;
g.j.Mc = 18;
g.j.Nc = 99;
g.j.Co = [[g.j.gb, g.j.Rb], [g.j.gb, g.j.gb], [g.j.Rb, g.j.Rb], [g.j.Rb, g.j.gb], [g.j.Il, g.j.Il], [g.j.er, g.j.er], [g.j.hh, g.j.hh], [g.j.cr, g.j.cr], [g.j.dr, g.j.dr]];
g.j.T = function (a) {
    g.j.Ti = Object.create(null);
    g.j.Ss = Object.create(null);
    g.j.Dd ? g.j.Dd.reset() : g.j.Dd = new g.Wd(g.j.kr);
    g.j.Dd.Sa = a.Sa;
    for (var c = [], d = g.O.cD(a), e = 0; e < d.length; e++) c.push(Q(d[e], g.Wd.Jq));
    a = g.O.Ew(a);
    for (e = 0; e < a.length; e++) c.push(Q(a[e].ua(), g.O.sb));
    c.length && (g.j.Ti.variables = "var " + c.join(", ") + ";")
};
g.j.finish = function (a) {
    var c = [], d;
    for (d in g.j.Ti) c.push(g.j.Ti[d]);
    delete g.j.Ti;
    delete g.j.Ss;
    g.j.Dd.reset();
    return c.join("\n\n") + "\n\n\n" + a
};
g.j.Qz = function (a) {
    return a + ";\n"
};
g.j.tG = function (a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
g.j.SL = function (a) {
    return a.split(/\n/g).map(g.j.tG).join(" + '\\n' +\n")
};
g.j.cq = function (a, c, d) {
    var e = "";
    if (!a.L || !a.L.ca) {
        var f = a.ze.text;
        f && (f = g.g.fb.oA(f, g.j.TA - 3), e += ff(f + "\n", "// "));
        for (var h = 0; h < a.R.length; h++) if (a.R[h].type == g.Wa) {
            var k = z(a.R[h].connection);
            if (k) {
                f = [];
                k = p(k, !0);
                for (var l = 0; l < k.length; l++) {
                    var m = k[l].ze.text;
                    m && f.push(m)
                }
                f.length && f.push("");
                (f = f.join("\n")) && (e += ff(f, "// "))
            }
        }
    }
    a = a.X && z(a.X);
    d = d ? "" : Ad(g.j, a);
    return e + c + d
};
g.j.Lf = function (a, c, d, e, f) {
    d = d || 0;
    f = f || g.j.Nc;
    a.v.options.Le && d--;
    var h = a.v.options.Le ? "1" : "0";
    a = 0 < d ? X(a, c, g.j.hh) || h : 0 > d ? X(a, c, g.j.gk) || h : e ? X(a, c, g.j.Kl) || h : X(a, c, f) || h;
    if (g.Mh(a)) a = Number(a) + d, e && (a = -a); else {
        if (0 < d) {
            a = a + " + " + d;
            var k = g.j.hh
        } else 0 > d && (a = a + " - " + -d, k = g.j.gk);
        e && (a = d ? "-(" + a + ")" : "-" + a, k = g.j.Kl);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")")
    }
    return a
};
g.j.Ha = {};
g.j.math_number = function (a) {
    a = Number(G(a, "NUM"));
    return [a, 0 <= a ? g.j.zi : g.j.Kl]
};
g.j.math_arithmetic = function (a) {
    var c = {
        ADD: [" + ", g.j.hh],
        MINUS: [" - ", g.j.gk],
        MULTIPLY: [" * ", g.j.er],
        DIVIDE: [" / ", g.j.Hl],
        POWER: [null, g.j.Mc]
    }[G(a, "OP")], d = c[0];
    c = c[1];
    var e = X(a, "A", c) || "0";
    a = X(a, "B", c) || "0";
    return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.gb]
};
g.j.math_single = function (a) {
    var c = G(a, "OP");
    if ("NEG" == c) return a = X(a, "NUM", g.j.Kl) || "0", "-" == a[0] && (a = " " + a), ["-" + a, g.j.Kl];
    a = "SIN" == c || "COS" == c || "TAN" == c ? X(a, "NUM", g.j.Hl) || "0" : X(a, "NUM", g.j.Nc) || "0";
    switch (c) {
        case "ABS":
            var d = "Math.abs(" + a + ")";
            break;
        case "ROOT":
            d = "Math.sqrt(" + a + ")";
            break;
        case "LN":
            d = "Math.log(" + a + ")";
            break;
        case "EXP":
            d = "Math.exp(" + a + ")";
            break;
        case "POW10":
            d = "Math.pow(10," + a + ")";
            break;
        case "ROUND":
            d = "Math.round(" + a + ")";
            break;
        case "ROUNDUP":
            d = "Math.ceil(" + a + ")";
            break;
        case "ROUNDDOWN":
            d =
                "Math.floor(" + a + ")";
            break;
        case "SIN":
            d = "Math.sin(" + a + " / 180 * Math.PI)";
            break;
        case "COS":
            d = "Math.cos(" + a + " / 180 * Math.PI)";
            break;
        case "TAN":
            d = "Math.tan(" + a + " / 180 * Math.PI)"
    }
    if (d) return [d, g.j.gb];
    switch (c) {
        case "LOG10":
            d = "Math.log(" + a + ") / Math.log(10)";
            break;
        case "ASIN":
            d = "Math.asin(" + a + ") / Math.PI * 180";
            break;
        case "ACOS":
            d = "Math.acos(" + a + ") / Math.PI * 180";
            break;
        case "ATAN":
            d = "Math.atan(" + a + ") / Math.PI * 180";
            break;
        default:
            throw Error("Unknown math operator: " + c);
    }
    return [d, g.j.Hl]
};
g.j.math_constant = function (a) {
    return {
        PI: ["Math.PI", g.j.Rb],
        E: ["Math.E", g.j.Rb],
        GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.Hl],
        SQRT2: ["Math.SQRT2", g.j.Rb],
        SQRT1_2: ["Math.SQRT1_2", g.j.Rb],
        INFINITY: ["Infinity", g.j.zi]
    }[G(a, "CONSTANT")]
};
g.j.math_number_property = function (a) {
    var c = X(a, "NUMBER_TO_CHECK", g.j.Jl) || "0", d = G(a, "PROPERTY");
    if ("PRIME" == d) {
        var e = kf("mathIsPrime", ["function " + g.j.se + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
            "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"]) + "(" + c + ")";
        return [e, g.j.gb]
    }
    switch (d) {
        case "EVEN":
            e = c + " % 2 == 0";
            break;
        case "ODD":
            e = c + " % 2 == 1";
            break;
        case "WHOLE":
            e = c + " % 1 == 0";
            break;
        case "POSITIVE":
            e = c + " > 0";
            break;
        case "NEGATIVE":
            e = c + " < 0";
            break;
        case "DIVISIBLE_BY":
            a = X(a, "DIVISOR", g.j.Jl) || "0", e = c + " % " + a + " == 0"
    }
    return [e, g.j.Yv]
};
g.j.math_change = function (a) {
    var c = X(a, "DELTA", g.j.hh) || "0";
    a = Q(G(a, "VAR"), g.O.sb);
    return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n"
};
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function (a) {
    var c = G(a, "OP");
    switch (c) {
        case "SUM":
            a = X(a, "LIST", g.j.Rb) || "[]";
            a += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            a = X(a, "LIST", g.j.Mc) || "[]";
            a = "Math.min.apply(null, " + a + ")";
            break;
        case "MAX":
            a = X(a, "LIST", g.j.Mc) || "[]";
            a = "Math.max.apply(null, " + a + ")";
            break;
        case "AVERAGE":
            c = kf("mathMean", ["function " + g.j.se + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
            a = X(a, "LIST", g.j.Nc) || "[]";
            a = c + "(" + a + ")";
            break;
        case "MEDIAN":
            c =
                kf("mathMedian", ["function " + g.j.se + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
            a = X(a, "LIST", g.j.Nc) || "[]";
            a = c + "(" + a + ")";
            break;
        case "MODE":
            c = kf("mathModes",
                ["function " + g.j.se + "(values) {", "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);",
                    "  }", "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"]);
            a = X(a, "LIST", g.j.Nc) || "[]";
            a = c + "(" + a + ")";
            break;
        case "STD_DEV":
            c = kf("mathStandardDeviation", ["function " + g.j.se + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);",
                "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"]);
            a = X(a, "LIST", g.j.Nc) || "[]";
            a = c + "(" + a + ")";
            break;
        case "RANDOM":
            c = kf("mathRandomList", ["function " + g.j.se + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
            a = X(a, "LIST", g.j.Nc) || "[]";
            a = c + "(" + a + ")";
            break;
        default:
            throw Error("Unknown operator: " + c);
    }
    return [a, g.j.gb]
};
g.j.math_modulo = function (a) {
    var c = X(a, "DIVIDEND", g.j.Jl) || "0";
    a = X(a, "DIVISOR", g.j.Jl) || "0";
    return [c + " % " + a, g.j.Jl]
};
g.j.math_constrain = function (a) {
    var c = X(a, "VALUE", g.j.Mc) || "0", d = X(a, "LOW", g.j.Mc) || "0";
    a = X(a, "HIGH", g.j.Mc) || "Infinity";
    return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.gb]
};
g.j.math_random_int = function (a) {
    var c = X(a, "FROM", g.j.Mc) || "0";
    a = X(a, "TO", g.j.Mc) || "0";
    return [kf("mathRandomInt", ["function " + g.j.se + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + c + ", " + a + ")", g.j.gb]
};
g.j.math_random_float = function () {
    return ["Math.random()", g.j.gb]
};
g.j.math_atan2 = function (a) {
    var c = X(a, "X", g.j.Mc) || "0";
    return ["Math.atan2(" + (X(a, "Y", g.j.Mc) || "0") + ", " + c + ") / Math.PI * 180", g.j.Hl]
};
g.Qb = function (a) {
    g.Qb.w.constructor.call(this, null);
    this.Jz = a
};
g.g.object.W(g.Qb, g.Id);
b = g.Qb.prototype;
b.ql = 0;
b.Un = 0;
b.Es = function (a) {
    g.g.o.M("rect", {"class": "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16"}, a);
    g.g.o.M("path", {
        "class": "blocklyIconSymbol",
        d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    }, a);
    g.g.o.M("circle", {"class": "blocklyIconShape", r: "2.7", cx: "8", cy: "8"}, a)
};
b.ot = function (a) {
    this.S.jd() && g.Id.prototype.ot.call(this, a)
};
b.ks = function () {
    this.Gn = g.g.o.M("svg", {x: g.oa.cd, y: g.oa.cd}, null);
    if (this.Jz.length) for (var a = g.g.xml.createElement("xml"), c = 0, d; d = this.Jz[c]; c++) {
        var e = g.g.xml.createElement("block");
        e.setAttribute("type", d);
        a.appendChild(e)
    } else a = null;
    a = {
        disable: !1,
        Hg: this.S.v.options.Hg,
        Sk: a,
        Nb: this.S.v,
        Yh: this.S.v.options.Yh,
        G: this.S.G,
        Ia: this.S.G ? g.ug : g.Xd,
        ge: !1,
        Vc: this.ME.bind(this),
        di: null,
        Tg: this.S.v.options.Tg
    };
    this.s = new g.lb(a);
    this.s.kj = !0;
    bb(this.s, g.i.eE);
    a = vc(this.s, "g");
    c = this.s.Oa("blocklyMutatorBackground");
    c.insertBefore(a, this.s.pb);
    this.Gn.appendChild(c);
    return this.Gn
};
b.$g = function () {
    g.Qb.w.$g.call(this);
    this.S.$b || (this.S.jd() ? this.Nd && g.g.o.Fc(this.Nd, "blocklyIconGroupReadonly") : (this.Vb(!1), this.Nd && g.g.o.Cb(this.Nd, "blocklyIconGroupReadonly")))
};

function lf(a) {
    var c = 2 * g.oa.cd, d = a.s.pb.getBBox();
    var e = a.S.G ? -d.x : d.width + d.x;
    d = d.height + 3 * c;
    if (a.s.P) {
        var f = a.s.P.Gm();
        d = Math.max(d, f.ae + 20)
    }
    e += 3 * c;
    if (Math.abs(a.ql - e) > c || Math.abs(a.Un - d) > c) a.ql = e, a.Un = d, a.Yb.tn(e + c, d + c), a.Gn.setAttribute("width", a.ql), a.Gn.setAttribute("height", a.Un);
    a.S.G && a.s.pb.setAttribute("transform", "translate(" + a.ql + ",0)");
    a.s.resize()
}

b.Vb = function (a) {
    if (a != this.isVisible()) if (g.i.Ka(new g.i.vd(this.S, "mutatorOpen", !a, a)), a) {
        this.Yb = new g.oa(this.S.v, this.ks(), this.S.Sd, this.Kk, null, null);
        fb(this.Yb, this.S.id);
        if (a = this.s.options.Sk) this.s.P.T(this.s), this.s.P.show(a.childNodes);
        this.Vg = this.S.Fg(this.s);
        a = p(this.Vg, !1);
        for (var c = 0, d; d = a[c]; c++) d.za();
        this.Vg.fq(!1);
        this.Vg.ps = !1;
        this.s.P ? (a = 2 * this.s.P.wb, c = wc(this.s).Nf() + a) : c = a = 16;
        this.S.G && (c = -c);
        this.Vg.moveBy(c, a);
        if (this.S.bq) {
            var e = this;
            this.S.bq(this.Vg);
            this.gq = function () {
                e.S.bq(e.Vg)
            };
            bb(this.S.v, this.gq)
        }
        lf(this);
        bb(this.s, this.kH.bind(this));
        this.Pe()
    } else this.Gn = null, this.s.I(), this.Vg = this.s = null, this.Yb.I(), this.Yb = null, this.Un = this.ql = 0, this.gq && (cb(this.S.v, this.gq), this.gq = null)
};
b.kH = function (a) {
    if (a.type != g.i.Lo && (a.type != g.i.ni || "disabled" != a.element)) {
        if (!this.s.gc()) {
            a = D(this.s, !1);
            for (var c = 0, d; d = a[c]; c++) {
                var e = d.Qa(), f = H(d);
                20 > e.y + f.height && d.moveBy(0, 20 - f.height - e.y)
            }
        }
        if (this.Vg.v == this.s) {
            g.i.$(!0);
            d = this.S;
            a = (a = d.eb()) && g.U.ce(a);
            c = d.ba;
            d.ba = !1;
            d.Cg(this.Vg);
            d.ba = c;
            d.Ie();
            c = (c = d.eb()) && g.U.ce(c);
            if (a != c) {
                g.i.Ka(new g.i.eg(d, "mutation", null, a, c));
                var h = g.i.Zb();
                setTimeout(function () {
                    g.i.$(h);
                    d.Kb();
                    g.i.$(!1)
                }, g.Yn)
            }
            d.ba && d.za();
            a != c && g.Je && g.navigation.LF(d);
            this.s.gc() ||
            lf(this);
            g.i.$(!1)
        }
    }
};
b.ME = function () {
    return {Pb: this.Un, Bb: this.ql - wc(this.s).Nf(), fd: 0, Qc: this.s.G ? 0 : wc(this.s).Nf()}
};
b.I = function () {
    this.S.Od = null;
    g.Id.prototype.I.call(this)
};
g.Qb.$k = function (a, c, d) {
    if (!a || !a.B.v) return !1;
    d = B(c, d).connection;
    var e = z(a);
    return e && e != c || d.ca == a ? !1 : (d.isConnected() && d.disconnect(), d.connect(a), !0)
};
g.Qb.Lx = function (a) {
    var c = null;
    if (a && a.options) {
        var d = a.options.Nb;
        a.je ? d && d.options && (c = d.options.Nb) : d && (c = d)
    }
    return c
};
g.K.Ht = {};
g.la.UB = {};
g.la.UB.qo = 260;
g.zk([{
    type: "lists_create_empty",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}"
}, {
    type: "lists_repeat",
    message0: "%{BKY_LISTS_REPEAT_TITLE}",
    args0: [{type: "input_value", name: "ITEM"}, {type: "input_value", name: "NUM", check: "Number"}],
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}"
}, {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{type: "input_value", name: "LIST", check: "Array"}],
    output: "Array",
    inputsInline: !0,
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}"
}, {
    type: "lists_isEmpty",
    message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
    args0: [{type: "input_value", name: "VALUE", check: ["String", "Array"]}],
    output: "Boolean",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}"
}, {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE", check: ["String", "Array"]
    }],
    output: "Number",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}"
}]);
g.K.lists_create_with = {
    T: function () {
        this.ub = g.h.LISTS_CREATE_WITH_HELPURL;
        M(this, "list_blocks");
        this.zd = 3;
        this.Jc();
        this.Bd(!0, "Array");
        this.ei(new g.Qb(["lists_create_with_item"]));
        this.Ra(g.h.LISTS_CREATE_WITH_TOOLTIP)
    }, eb: function () {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("items", this.zd);
        return a
    }, zb: function (a) {
        this.zd = parseInt(a.getAttribute("items"), 10);
        this.Jc()
    }, Fg: function (a) {
        var c = a.Rh("lists_create_with_container");
        c.Ie();
        for (var d = B(c, "STACK").connection, e = 0; e < this.zd; e++) {
            var f =
                a.Rh("lists_create_with_item");
            f.Ie();
            d.connect(f.Y);
            d = f.X
        }
        return c
    }, Cg: function (a) {
        var c = Mb(a, "STACK");
        for (a = []; c;) a.push(c.Yu), c = c.X && z(c.X);
        for (c = 0; c < this.zd; c++) {
            var d = B(this, "ADD" + c).connection.ca;
            d && -1 == a.indexOf(d) && d.disconnect()
        }
        this.zd = a.length;
        this.Jc();
        for (c = 0; c < this.zd; c++) g.Qb.$k(a[c], this, "ADD" + c)
    }, bq: function (a) {
        a = Mb(a, "STACK");
        for (var c = 0; a;) {
            var d = B(this, "ADD" + c);
            a.Yu = d && d.connection.ca;
            c++;
            a = a.X && z(a.X)
        }
    }, Jc: function () {
        this.zd && B(this, "EMPTY") ? this.ib("EMPTY") : this.zd || B(this, "EMPTY") ||
            L(O(this, "EMPTY"), g.h.LISTS_CREATE_EMPTY_TITLE);
        for (var a = 0; a < this.zd; a++) if (!B(this, "ADD" + a)) {
            var c = N(this, "ADD" + a);
            0 == a && L(c, g.h.LISTS_CREATE_WITH_INPUT_WITH)
        }
        for (; B(this, "ADD" + a);) this.ib("ADD" + a), a++
    }
};
g.K.lists_create_with_container = {
    T: function () {
        M(this, "list_blocks");
        L(O(this), g.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        Kb(this, "STACK");
        this.Ra(g.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
g.K.lists_create_with_item = {
    T: function () {
        M(this, "list_blocks");
        L(O(this), g.h.LISTS_CREATE_WITH_ITEM_TITLE);
        this.me(!0);
        this.le(!0);
        this.Ra(g.h.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = !1
    }
};
g.K.lists_indexOf = {
    T: function () {
        var a = [[g.h.LISTS_INDEX_OF_FIRST, "FIRST"], [g.h.LISTS_INDEX_OF_LAST, "LAST"]];
        this.ub = g.h.LISTS_INDEX_OF_HELPURL;
        M(this, "list_blocks");
        this.Bd(!0, "Number");
        L(N(this, "VALUE").vb("Array"), g.h.LISTS_INDEX_OF_INPUT_IN_LIST);
        L(N(this, "FIND"), new g.Ja(a), "END");
        this.$c(!0);
        var c = this;
        this.Ra(function () {
            return g.h.LISTS_INDEX_OF_TOOLTIP.replace("%1", c.v.options.Le ? "0" : "-1")
        })
    }
};
g.K.lists_getIndex = {
    T: function () {
        var a = [[g.h.LISTS_GET_INDEX_GET, "GET"], [g.h.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"], [g.h.LISTS_GET_INDEX_REMOVE, "REMOVE"]];
        this.Fr = [[g.h.LISTS_GET_INDEX_FROM_START, "FROM_START"], [g.h.LISTS_GET_INDEX_FROM_END, "FROM_END"], [g.h.LISTS_GET_INDEX_FIRST, "FIRST"], [g.h.LISTS_GET_INDEX_LAST, "LAST"], [g.h.LISTS_GET_INDEX_RANDOM, "RANDOM"]];
        this.ub = g.h.LISTS_GET_INDEX_HELPURL;
        M(this, "list_blocks");
        a = new g.Ja(a, function (d) {
            this.B.iA("REMOVE" == d)
        });
        L(N(this, "VALUE").vb("Array"),
            g.h.LISTS_GET_INDEX_INPUT_IN_LIST);
        L(L(O(this), a, "MODE"), "", "SPACE");
        O(this, "AT");
        g.h.LISTS_GET_INDEX_TAIL && L(O(this, "TAIL"), g.h.LISTS_GET_INDEX_TAIL);
        this.$c(!0);
        this.Bd(!0);
        this.oe(!0);
        var c = this;
        this.Ra(function () {
            var d = G(c, "MODE"), e = G(c, "WHERE"), f = "";
            switch (d + " " + e) {
                case "GET FROM_START":
                case "GET FROM_END":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                    break;
                case "GET FIRST":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                    break;
                case "GET LAST":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                    break;
                case "GET RANDOM":
                    f =
                        g.h.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                    break;
                case "GET_REMOVE FROM_START":
                case "GET_REMOVE FROM_END":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                    break;
                case "GET_REMOVE FIRST":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                    break;
                case "GET_REMOVE LAST":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                    break;
                case "GET_REMOVE RANDOM":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                    break;
                case "REMOVE FROM_START":
                case "REMOVE FROM_END":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                    break;
                case "REMOVE FIRST":
                    f =
                        g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                    break;
                case "REMOVE LAST":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                    break;
                case "REMOVE RANDOM":
                    f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + ("FROM_START" == e ? g.h.LISTS_INDEX_FROM_START_TOOLTIP : g.h.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1", c.v.options.Le ? "#1" : "#0");
            return f
        })
    }, eb: function () {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("statement", !this.L);
        a.setAttribute("at", B(this, "AT").type == g.Wa);
        return a
    },
    zb: function (a) {
        var c = "true" == a.getAttribute("statement");
        this.iA(c);
        a = "false" != a.getAttribute("at");
        this.oe(a)
    }, iA: function (a) {
        a != !this.L && (A(this, !0), a ? (this.Bd(!1), this.me(!0), this.le(!0)) : (this.me(!1), this.le(!1), this.Bd(!0)))
    }, oe: function (a) {
        this.ib("AT");
        this.ib("ORDINAL", !0);
        a ? (N(this, "AT").vb("Number"), g.h.ORDINAL_NUMBER_SUFFIX && L(O(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX)) : O(this, "AT");
        var c = new g.Ja(this.Fr, function (d) {
            var e = "FROM_START" == d || "FROM_END" == d;
            if (e != a) {
                var f = this.B;
                f.oe(e);
                Ib(f, d, "WHERE");
                return null
            }
        });
        L(B(this, "AT"), c, "WHERE");
        g.h.LISTS_GET_INDEX_TAIL && Lb(this, "TAIL", null)
    }
};
g.K.lists_setIndex = {
    T: function () {
        var a = [[g.h.LISTS_SET_INDEX_SET, "SET"], [g.h.LISTS_SET_INDEX_INSERT, "INSERT"]];
        this.Fr = [[g.h.LISTS_GET_INDEX_FROM_START, "FROM_START"], [g.h.LISTS_GET_INDEX_FROM_END, "FROM_END"], [g.h.LISTS_GET_INDEX_FIRST, "FIRST"], [g.h.LISTS_GET_INDEX_LAST, "LAST"], [g.h.LISTS_GET_INDEX_RANDOM, "RANDOM"]];
        this.ub = g.h.LISTS_SET_INDEX_HELPURL;
        M(this, "list_blocks");
        L(N(this, "LIST").vb("Array"), g.h.LISTS_SET_INDEX_INPUT_IN_LIST);
        L(L(O(this), new g.Ja(a), "MODE"), "", "SPACE");
        O(this, "AT");
        L(N(this,
            "TO"), g.h.LISTS_SET_INDEX_INPUT_TO);
        this.$c(!0);
        this.me(!0);
        this.le(!0);
        this.Ra(g.h.LISTS_SET_INDEX_TOOLTIP);
        this.oe(!0);
        var c = this;
        this.Ra(function () {
            var d = G(c, "MODE"), e = G(c, "WHERE"), f = "";
            switch (d + " " + e) {
                case "SET FROM_START":
                case "SET FROM_END":
                    f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                    break;
                case "SET FIRST":
                    f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                    break;
                case "SET LAST":
                    f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                    break;
                case "SET RANDOM":
                    f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                    break;
                case "INSERT FROM_START":
                case "INSERT FROM_END":
                    f =
                        g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                    break;
                case "INSERT FIRST":
                    f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                    break;
                case "INSERT LAST":
                    f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                    break;
                case "INSERT RANDOM":
                    f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + g.h.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", c.v.options.Le ? "#1" : "#0");
            return f
        })
    }, eb: function () {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("at", B(this, "AT").type == g.Wa);
        return a
    }, zb: function (a) {
        a =
            "false" != a.getAttribute("at");
        this.oe(a)
    }, oe: function (a) {
        this.ib("AT");
        this.ib("ORDINAL", !0);
        a ? (N(this, "AT").vb("Number"), g.h.ORDINAL_NUMBER_SUFFIX && L(O(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX)) : O(this, "AT");
        var c = new g.Ja(this.Fr, function (d) {
            var e = "FROM_START" == d || "FROM_END" == d;
            if (e != a) {
                var f = this.B;
                f.oe(e);
                Ib(f, d, "WHERE");
                return null
            }
        });
        Lb(this, "AT", "TO");
        B(this, "ORDINAL") && Lb(this, "ORDINAL", "TO");
        L(B(this, "AT"), c, "WHERE")
    }
};
g.K.lists_getSublist = {
    T: function () {
        this.WHERE_OPTIONS_1 = [[g.h.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"], [g.h.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"], [g.h.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]];
        this.WHERE_OPTIONS_2 = [[g.h.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"], [g.h.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"], [g.h.LISTS_GET_SUBLIST_END_LAST, "LAST"]];
        this.ub = g.h.LISTS_GET_SUBLIST_HELPURL;
        M(this, "list_blocks");
        L(N(this, "LIST").vb("Array"), g.h.LISTS_GET_SUBLIST_INPUT_IN_LIST);
        O(this,
            "AT1");
        O(this, "AT2");
        g.h.LISTS_GET_SUBLIST_TAIL && L(O(this, "TAIL"), g.h.LISTS_GET_SUBLIST_TAIL);
        this.$c(!0);
        this.Bd(!0, "Array");
        this.oe(1, !0);
        this.oe(2, !0);
        this.Ra(g.h.LISTS_GET_SUBLIST_TOOLTIP)
    }, eb: function () {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("at1", B(this, "AT1").type == g.Wa);
        a.setAttribute("at2", B(this, "AT2").type == g.Wa);
        return a
    }, zb: function (a) {
        var c = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.oe(1, c);
        this.oe(2, a)
    }, oe: function (a, c) {
        this.ib("AT" + a);
        this.ib("ORDINAL" +
            a, !0);
        c ? (N(this, "AT" + a).vb("Number"), g.h.ORDINAL_NUMBER_SUFFIX && L(O(this, "ORDINAL" + a), g.h.ORDINAL_NUMBER_SUFFIX)) : O(this, "AT" + a);
        var d = new g.Ja(this["WHERE_OPTIONS_" + a], function (e) {
            var f = "FROM_START" == e || "FROM_END" == e;
            if (f != c) {
                var h = this.B;
                h.oe(a, f);
                Ib(h, e, "WHERE" + a);
                return null
            }
        });
        L(B(this, "AT" + a), d, "WHERE" + a);
        1 == a && (Lb(this, "AT1", "AT2"), B(this, "ORDINAL1") && Lb(this, "ORDINAL1", "AT2"));
        g.h.LISTS_GET_SUBLIST_TAIL && Lb(this, "TAIL", null)
    }
};
g.K.lists_sort = {
    T: function () {
        P(this, {
            message0: g.h.LISTS_SORT_TITLE,
            args0: [{
                type: "field_dropdown",
                name: "TYPE",
                options: [[g.h.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"], [g.h.LISTS_SORT_TYPE_TEXT, "TEXT"], [g.h.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"]]
            }, {
                type: "field_dropdown",
                name: "DIRECTION",
                options: [[g.h.LISTS_SORT_ORDER_ASCENDING, "1"], [g.h.LISTS_SORT_ORDER_DESCENDING, "-1"]]
            }, {type: "input_value", name: "LIST", check: "Array"}],
            output: "Array",
            style: "list_blocks",
            tooltip: g.h.LISTS_SORT_TOOLTIP,
            helpUrl: g.h.LISTS_SORT_HELPURL
        })
    }
};
g.K.lists_split = {
    T: function () {
        var a = this,
            c = new g.Ja([[g.h.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"], [g.h.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]], function (d) {
                a.Rn(d)
            });
        this.ub = g.h.LISTS_SPLIT_HELPURL;
        M(this, "list_blocks");
        L(N(this, "INPUT").vb("String"), c, "MODE");
        L(N(this, "DELIM").vb("String"), g.h.LISTS_SPLIT_WITH_DELIMITER);
        this.$c(!0);
        this.Bd(!0, "Array");
        this.Ra(function () {
            var d = G(a, "MODE");
            if ("SPLIT" == d) return g.h.LISTS_SPLIT_TOOLTIP_SPLIT;
            if ("JOIN" == d) return g.h.LISTS_SPLIT_TOOLTIP_JOIN;
            throw Error("Unknown mode: " +
                d);
        })
    }, Rn: function (a) {
        if (G(this, "MODE") != a) {
            var c = B(this, "INPUT").connection;
            c.lf = null;
            var d = z(c);
            d && (c.disconnect(), d.cb ? d.I() : this.Kb())
        }
        "SPLIT" == a ? (this.L.vb("Array"), B(this, "INPUT").vb("String")) : (this.L.vb("String"), B(this, "INPUT").vb("Array"))
    }, eb: function () {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("mode", G(this, "MODE"));
        return a
    }, zb: function (a) {
        this.Rn(a.getAttribute("mode"))
    }
};
g.K.zF = {};
g.la.ed = {};
g.la.ed.qo = 210;
g.zk([{
    type: "logic_boolean",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "BOOL",
        options: [["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"], ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]]
    }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}"
}, {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{type: "input_value", name: "IF0", check: "Boolean"}],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{type: "input_statement", name: "DO0"}],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"]
}, {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{type: "input_value", name: "IF0", check: "Boolean"}],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{type: "input_statement", name: "DO0"}],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{type: "input_statement", name: "ELSE"}],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"]
}, {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [{type: "input_value", name: "A"}, {
        type: "field_dropdown",
        name: "OP",
        options: [["=", "EQ"], ["\u2260", "NEQ"], ["\u200f<", "LT"], ["\u200f\u2264", "LTE"], ["\u200f>", "GT"], ["\u200f\u2265", "GTE"]]
    }, {type: "input_value", name: "B"}],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"]
}, {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [{type: "input_value", name: "A", check: "Boolean"}, {
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_LOGIC_OPERATION_AND}", "AND"], ["%{BKY_LOGIC_OPERATION_OR}", "OR"]]
    }, {type: "input_value", name: "B", check: "Boolean"}],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"]
}, {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{type: "input_value", name: "BOOL", check: "Boolean"}],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}"
}, {
    type: "logic_null",
    message0: "%{BKY_LOGIC_NULL}",
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NULL_HELPURL}"
}, {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{type: "input_value", name: "IF", check: "Boolean"}],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{type: "input_value", name: "THEN"}],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{
        type: "input_value",
        name: "ELSE"
    }],
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"]
}]);
g.zk([{
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}"
}, {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"
}, {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
}]);
g.la.ed.zr = {
    EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
    NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
    LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
    LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
    GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
    GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
    AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
    OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"
};
g.Z.register("logic_op_tooltip", g.Z.No("OP", g.la.ed.zr));
g.la.ed.Fq = {
    Md: 0, Be: 0, gi: !0, eb: function () {
        if (!this.Md && !this.Be) return null;
        var a = g.g.xml.createElement("mutation");
        this.Md && a.setAttribute("elseif", this.Md);
        this.Be && a.setAttribute("else", 1);
        return a
    }, zb: function (a) {
        this.Md = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.Be = parseInt(a.getAttribute("else"), 10) || 0;
        this.uG()
    }, Fg: function (a) {
        var c = a.Rh("controls_if_if");
        c.Ie();
        for (var d = c.X, e = 1; e <= this.Md; e++) {
            var f = a.Rh("controls_if_elseif");
            f.Ie();
            d.connect(f.Y);
            d = f.X
        }
        this.Be && (a = a.Rh("controls_if_else"),
            a.Ie(), d.connect(a.Y));
        return c
    }, Cg: function (a) {
        a = z(a.X);
        this.Be = this.Md = 0;
        for (var c = [null], d = [null], e = null; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    this.Md++;
                    c.push(a.Yu);
                    d.push(a.nf);
                    break;
                case "controls_if_else":
                    this.Be++;
                    e = a.nf;
                    break;
                default:
                    throw TypeError("Unknown block type: " + a.type);
            }
            a = a.X && z(a.X)
        }
        this.Jc();
        this.Kz(c, d, e)
    }, bq: function (a) {
        a = z(a.X);
        for (var c = 1; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    var d = B(this, "IF" + c), e = B(this, "DO" + c);
                    a.Yu = d && d.connection.ca;
                    a.nf = e && e.connection.ca;
                    c++;
                    break;
                case "controls_if_else":
                    e = B(this, "ELSE");
                    a.nf = e && e.connection.ca;
                    break;
                default:
                    throw TypeError("Unknown block type: " + a.type);
            }
            a = a.X && z(a.X)
        }
    }, uG: function () {
        var a = [null], c = [null], d = null;
        B(this, "ELSE") && (d = B(this, "ELSE").connection.ca);
        for (var e = 1; B(this, "IF" + e);) {
            var f = B(this, "DO" + e);
            a.push(B(this, "IF" + e).connection.ca);
            c.push(f.connection.ca);
            e++
        }
        this.Jc();
        this.Kz(a, c, d)
    }, Jc: function () {
        B(this, "ELSE") && this.ib("ELSE");
        for (var a = 1; B(this, "IF" + a);) this.ib("IF" + a), this.ib("DO" + a), a++;
        for (a =
                 1; a <= this.Md; a++) L(N(this, "IF" + a).vb("Boolean"), g.h.CONTROLS_IF_MSG_ELSEIF), L(Kb(this, "DO" + a), g.h.CONTROLS_IF_MSG_THEN);
        this.Be && L(Kb(this, "ELSE"), g.h.CONTROLS_IF_MSG_ELSE)
    }, Kz: function (a, c, d) {
        for (var e = 1; e <= this.Md; e++) g.Qb.$k(a[e], this, "IF" + e), g.Qb.$k(c[e], this, "DO" + e);
        g.Qb.$k(d, this, "ELSE")
    }
};
g.Z.tu("controls_if_mutator", g.la.ed.Fq, null, ["controls_if_elseif", "controls_if_else"]);
g.la.ed.uv = function () {
    this.Ra(function () {
        if (this.Md || this.Be) {
            if (!this.Md && this.Be) return g.h.CONTROLS_IF_TOOLTIP_2;
            if (this.Md && !this.Be) return g.h.CONTROLS_IF_TOOLTIP_3;
            if (this.Md && this.Be) return g.h.CONTROLS_IF_TOOLTIP_4
        } else return g.h.CONTROLS_IF_TOOLTIP_1;
        return ""
    }.bind(this))
};
g.Z.register("controls_if_tooltip", g.la.ed.uv);
g.la.ed.QB = {
    onchange: function (a) {
        this.Yk || (this.Yk = [null, null]);
        var c = Mb(this, "A"), d = Mb(this, "B");
        c && d && !Da(c.L, d.L) && (g.i.$(a.group), a = this.Yk[0], a !== c && (A(c), a && !a.cb && B(this, "A").connection.connect(a.L)), c = this.Yk[1], c !== d && (A(d), c && !c.cb && B(this, "B").connection.connect(c.L)), this.Kb(), g.i.$(!1));
        this.Yk[0] = Mb(this, "A");
        this.Yk[1] = Mb(this, "B")
    }
};
g.la.ed.PB = function () {
    this.qj(g.la.ed.QB)
};
g.Z.register("logic_compare", g.la.ed.PB);
g.la.ed.RB = {
    Gz: null, onchange: function (a) {
        var c = Mb(this, "THEN"), d = Mb(this, "ELSE"), e = this.L.ca;
        if ((c || d) && e) for (var f = 0; 2 > f; f++) {
            var h = 1 == f ? c : d;
            h && !Da(h.L, e) && (g.i.$(a.group), e === this.Gz ? (A(this), e.B.Kb()) : (A(h), h.Kb()), g.i.$(!1))
        }
        this.Gz = e
    }
};
g.Z.Wp("logic_ternary", g.la.ed.RB);
g.K.BF = {};
g.la.te = {};
g.la.te.qo = 120;
g.zk([{
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{type: "input_value", name: "TIMES", check: "Number"}],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{type: "input_statement", name: "DO"}],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{type: "field_number", name: "TIMES", value: 10, min: 0, precision: 1}],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{type: "input_statement", name: "DO"}],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "MODE",
        options: [["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"], ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]]
    }, {type: "input_value", name: "BOOL", check: "Boolean"}],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"]
}, {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [{type: "field_variable", name: "VAR", variable: null}, {
        type: "input_value",
        name: "FROM",
        check: "Number",
        align: "RIGHT"
    }, {type: "input_value", name: "TO", check: "Number", align: "RIGHT"}, {
        type: "input_value",
        name: "BY",
        check: "Number",
        align: "RIGHT"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{type: "input_statement", name: "DO"}],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"]
}, {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [{type: "field_variable", name: "VAR", variable: null}, {type: "input_value", name: "LIST", check: "Array"}],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{type: "input_statement", name: "DO"}],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"]
}, {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "FLOW",
        options: [["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"], ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]]
    }],
    previousStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip",
        "controls_flow_in_loop_check"]
}]);
g.la.te.PC = {WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}", UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}"};
g.Z.register("controls_whileUntil_tooltip", g.Z.No("MODE", g.la.te.PC));
g.la.te.IA = {
    BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
    CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}"
};
g.Z.register("controls_flow_tooltip", g.Z.No("FLOW", g.la.te.IA));
g.la.te.ZA = {
    Eg: function (a) {
        if (!this.$b) {
            var c = y(this, "VAR").Ac(), d = c.name;
            if (!this.isCollapsed() && null != d) {
                var e = {enabled: !0};
                e.text = g.h.VARIABLES_SET_CREATE_GET.replace("%1", d);
                c = g.O.Cm(c);
                d = g.g.xml.createElement("block");
                d.setAttribute("type", "variables_get");
                d.appendChild(c);
                e.yb = g.Ea.Oo(this, d);
                a.push(e)
            }
        }
    }
};
g.Z.Wp("contextMenu_newGetVariableBlock", g.la.te.ZA);
g.Z.register("controls_for_tooltip", g.Z.Wr("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.Z.register("controls_forEach_tooltip", g.Z.Wr("%{BKY_CONTROLS_FOREACH_TOOLTIP}"));
g.la.te.ho = {
    TB: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"],
    gi: !0,
    ny: function (a) {
        do {
            if (-1 != g.la.te.ho.TB.indexOf(a.type)) return a;
            a = Fb(a)
        } while (a);
        return null
    },
    onchange: function () {
        this.v.gc && !this.v.gc() && (g.la.te.ho.ny(this) ? (this.Xg(null), this.$b || this.md(!0)) : (this.Xg(g.h.CONTROLS_FLOW_STATEMENTS_WARNING), this.$b || Jb(this) || this.md(!1)))
    }
};
g.Z.Wp("controls_flow_in_loop_check", g.la.te.ho);
g.Lc = function (a, c, d) {
    this.Mw = null;
    null == a && (a = "FALSE");
    g.Lc.w.constructor.call(this, a, c, d);
    this.bc.width = g.Lc.QC
};
g.g.object.W(g.Lc, g.Na);
g.Lc.va = function (a) {
    return new g.Lc(a.checked, void 0, a)
};
g.Lc.QC = 15;
g.Lc.MA = "\u2713";
g.Lc.NA = g.Na.ri - 3;
g.Lc.OA = 14;
b = g.Lc.prototype;
b.Ei = !0;
b.Hq = "default";
b.Pf = !1;
b.Kd = function (a) {
    g.Lc.w.Kd.call(this, a);
    a.checkCharacter && (this.Mw = a.checkCharacter)
};
b.Hh = function () {
    g.Lc.w.Hh.call(this);
    this.ic.setAttribute("x", g.Lc.NA);
    this.ic.setAttribute("y", g.Lc.OA);
    g.g.o.Cb(this.ic, "blocklyCheckbox");
    this.Kj.nodeValue = this.Mw || g.Lc.MA;
    this.ic.style.display = this.cc ? "block" : "none"
};
b.mf = function () {
    this.setValue(!this.cc)
};
b.uh = function (a) {
    return !0 === a || "TRUE" === a ? "TRUE" : !1 === a || "FALSE" === a ? "FALSE" : null
};
b.Vi = function (a) {
    this.cc = mf(a);
    this.ic && (this.ic.style.display = this.cc ? "block" : "none")
};
b.getValue = function () {
    return this.cc ? "TRUE" : "FALSE"
};
b.Tb = function () {
    return String(mf(this.cc))
};

function mf(a) {
    return "string" == typeof a ? "TRUE" == a : !!a
}

g.Uc.register("field_checkbox", g.Lc);
g.K.sG = {};
g.K.procedures_defnoreturn = {
    T: function () {
        var a = new g.xb("", g.Ga.Xp);
        We(a);
        L(L(L(O(this), g.h.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
        this.ei(new g.Qb(["procedures_mutatorarg"]));
        (this.v.options.gm || this.v.options.Nb && this.v.options.Nb.options.gm) && g.h.PROCEDURES_DEFNORETURN_COMMENT && this.Xf(g.h.PROCEDURES_DEFNORETURN_COMMENT);
        M(this, "procedure_blocks");
        this.Ra(g.h.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.ub = g.h.PROCEDURES_DEFNORETURN_HELPURL;
        this.xa = [];
        this.Xb = [];
        this.Zf(!0);
        this.nf = null
    },
    Zf: function (a) {
        this.vp !== a && (a ? (L(Kb(this, "STACK"), g.h.PROCEDURES_DEFNORETURN_DO), B(this, "RETURN") && Lb(this, "STACK", "RETURN")) : this.ib("STACK", !0), this.vp = a)
    }, Qn: function () {
        var a = "";
        this.xa.length && (a = g.h.PROCEDURES_BEFORE_PARAMS + " " + this.xa.join(", "));
        g.i.disable();
        try {
            Ib(this, a, "PARAMS")
        } finally {
            g.i.enable()
        }
    }, eb: function (a) {
        var c = g.g.xml.createElement("mutation");
        a && c.setAttribute("name", G(this, "NAME"));
        for (var d = 0; d < this.Xb.length; d++) {
            var e = g.g.xml.createElement("arg"), f = this.Xb[d];
            e.setAttribute("name",
                f.name);
            e.setAttribute("varid", f.ua());
            a && this.ku && e.setAttribute("paramId", this.ku[d]);
            c.appendChild(e)
        }
        this.vp || c.setAttribute("statements", "false");
        return c
    }, zb: function (a) {
        this.xa = [];
        this.Xb = [];
        for (var c = 0, d; d = a.childNodes[c]; c++) if ("arg" == d.nodeName.toLowerCase()) {
            var e = d.getAttribute("name");
            d = d.getAttribute("varid") || d.getAttribute("varId");
            this.xa.push(e);
            d = g.O.pp(this.v, d, e, "");
            null != d ? this.Xb.push(d) : console.log("Failed to create a variable with name " + e + ", ignoring.")
        }
        this.Qn();
        g.Ga.dn(this);
        this.Zf("false" !== a.getAttribute("statements"))
    }, Fg: function (a) {
        var c = g.g.xml.createElement("block");
        c.setAttribute("type", "procedures_mutatorcontainer");
        var d = g.g.xml.createElement("statement");
        d.setAttribute("name", "STACK");
        c.appendChild(d);
        for (var e = 0; e < this.xa.length; e++) {
            var f = g.g.xml.createElement("block");
            f.setAttribute("type", "procedures_mutatorarg");
            var h = g.g.xml.createElement("field");
            h.setAttribute("name", "NAME");
            var k = g.g.xml.createTextNode(this.xa[e]);
            h.appendChild(k);
            f.appendChild(h);
            h = g.g.xml.createElement("next");
            f.appendChild(h);
            d.appendChild(f);
            d = h
        }
        a = g.U.Wi(c, a);
        "procedures_defreturn" == this.type ? Ib(a, this.vp, "STATEMENTS") : a.ib("STATEMENT_INPUT");
        g.Ga.dn(this);
        return a
    }, Cg: function (a) {
        this.xa = [];
        this.ku = [];
        this.Xb = [];
        for (var c = Mb(a, "STACK"); c;) {
            var d = G(c, "NAME");
            this.xa.push(d);
            d = this.v.Ac(d, "");
            this.Xb.push(d);
            this.ku.push(c.id);
            c = c.X && z(c.X)
        }
        this.Qn();
        g.Ga.dn(this);
        a = G(a, "STATEMENTS");
        if (null !== a && (a = "TRUE" == a, this.vp != a)) if (a) this.Zf(!0), g.Qb.$k(this.nf, this, "STACK"), this.nf =
            null; else {
            a = B(this, "STACK").connection;
            if (this.nf = a.ca) a = z(a), A(a), a.Kb();
            this.Zf(!1)
        }
    }, Ah: function () {
        return [G(this, "NAME"), this.xa, !1]
    }, gt: function () {
        return this.xa
    }, Lg: function () {
        return this.Xb
    }, Yp: function (a, c) {
        var d = this.v.ef(a);
        if ("" == d.type) {
            d = d.name;
            c = this.v.ef(c);
            for (var e = !1, f = 0; f < this.Xb.length; f++) this.Xb[f].ua() == a && (this.xa[f] = c.name, this.Xb[f] = c, e = !0);
            e && (this.bp(d, c.name), g.Ga.dn(this))
        }
    }, pq: function (a) {
        for (var c = a.name, d = !1, e = 0; e < this.Xb.length; e++) if (this.Xb[e].ua() == a.ua()) {
            var f =
                this.xa[e];
            this.xa[e] = c;
            d = !0
        }
        d && (this.bp(f, c), g.Ga.dn(this))
    }, bp: function (a, c) {
        this.Qn();
        if (this.Od && this.Od.isVisible()) for (var d = K(this.Od.s, !1), e = 0, f; f = d[e]; e++) "procedures_mutatorarg" == f.type && g.Wd.Ce(a, G(f, "NAME")) && Ib(f, c, "NAME")
    }, Eg: function (a) {
        if (!this.$b) {
            var c = {enabled: !0}, d = G(this, "NAME");
            c.text = g.h.PROCEDURES_CREATE_DO.replace("%1", d);
            var e = g.g.xml.createElement("mutation");
            e.setAttribute("name", d);
            for (d = 0; d < this.xa.length; d++) {
                var f = g.g.xml.createElement("arg");
                f.setAttribute("name",
                    this.xa[d]);
                e.appendChild(f)
            }
            d = g.g.xml.createElement("block");
            d.setAttribute("type", this.Kw);
            d.appendChild(e);
            c.yb = g.Ea.Oo(this, d);
            a.push(c);
            if (!this.isCollapsed()) for (d = 0; d < this.Xb.length; d++) c = {enabled: !0}, e = this.Xb[d], c.text = g.h.VARIABLES_SET_CREATE_GET.replace("%1", e.name), e = g.O.Cm(e), f = g.g.xml.createElement("block"), f.setAttribute("type", "variables_get"), f.appendChild(e), c.yb = g.Ea.Oo(this, f), a.push(c)
        }
    }, Kw: "procedures_callnoreturn"
};
g.K.procedures_defreturn = {
    T: function () {
        var a = new g.xb("", g.Ga.Xp);
        We(a);
        L(L(L(O(this), g.h.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
        L(Eb(N(this, "RETURN"), g.rl), g.h.PROCEDURES_DEFRETURN_RETURN);
        this.ei(new g.Qb(["procedures_mutatorarg"]));
        (this.v.options.gm || this.v.options.Nb && this.v.options.Nb.options.gm) && g.h.PROCEDURES_DEFRETURN_COMMENT && this.Xf(g.h.PROCEDURES_DEFRETURN_COMMENT);
        M(this, "procedure_blocks");
        this.Ra(g.h.PROCEDURES_DEFRETURN_TOOLTIP);
        this.ub = g.h.PROCEDURES_DEFRETURN_HELPURL;
        this.xa = [];
        this.Xb = [];
        this.Zf(!0);
        this.nf = null
    },
    Zf: g.K.procedures_defnoreturn.Zf,
    Qn: g.K.procedures_defnoreturn.Qn,
    eb: g.K.procedures_defnoreturn.eb,
    zb: g.K.procedures_defnoreturn.zb,
    Fg: g.K.procedures_defnoreturn.Fg,
    Cg: g.K.procedures_defnoreturn.Cg,
    Ah: function () {
        return [G(this, "NAME"), this.xa, !0]
    },
    gt: g.K.procedures_defnoreturn.gt,
    Lg: g.K.procedures_defnoreturn.Lg,
    Yp: g.K.procedures_defnoreturn.Yp,
    pq: g.K.procedures_defnoreturn.pq,
    bp: g.K.procedures_defnoreturn.bp,
    Eg: g.K.procedures_defnoreturn.Eg,
    Kw: "procedures_callreturn"
};
g.K.procedures_mutatorcontainer = {
    T: function () {
        L(O(this), g.h.PROCEDURES_MUTATORCONTAINER_TITLE);
        Kb(this, "STACK");
        L(L(O(this, "STATEMENT_INPUT"), g.h.PROCEDURES_ALLOW_STATEMENTS), new g.Lc("TRUE"), "STATEMENTS");
        M(this, "procedure_blocks");
        this.Ra(g.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1
    }, onchange: function (a) {
        if (this.v && !this.v.je && (a.type == g.i.Wn || a.type == g.i.ul)) {
            var c = K(this.v), d = this.v.Jg();
            if (a.type == g.i.Wn) {
                a = [];
                for (var e = 0; e < c.length; e += 1) G(c[e], "NAME") && a.push(G(c[e], "NAME"));
                for (c = 0; c < d.length; c += 1) -1 == a.indexOf(d[c].name) && this.v.If(d[c].ua())
            } else if (a.type == g.i.ul && (d = u(this.v, a.wc), y(d, "NAME") && (e = G(d, "NAME"), (a = this.v.Ac(e)) || (a = this.v.Ld(e)), !d.Y.isConnected() && !d.X.isConnected()))) for (e = 0; e < c.length; e += 1) if (d.id != c[e].id && G(c[e], "NAME") == a.name) {
                e = g.O.Tx(this.v);
                a = this.v.Ld(e);
                Ib(d, a.name, "NAME");
                break
            }
        }
    }
};
g.K.procedures_mutatorarg = {
    T: function () {
        var a = new g.xb("x", this.Pj);
        a.VF = a.mf;
        a.mf = function () {
            this.pm = [];
            this.VF()
        };
        L(L(O(this), g.h.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
        this.me(!0);
        this.le(!0);
        M(this, "procedure_blocks");
        this.Ra(g.h.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.bu = this.$D;
        a.pm = [];
        a.bu("x")
    }, Pj: function (a) {
        var c = this.B, d = g.Qb.Lx(c.v);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a) return null;
        c = K(c.v);
        for (var e = 0; e < c.length; e++) if (c[e].id != this.B.id && G(c[e], "NAME") ==
            a) return null;
        (c = d.Ac(a, "")) && c.name != a && d.bi(c.ua(), a);
        c || (c = d.Ld(a, "")) && this.pm && this.pm.push(c);
        return a
    }, $D: function (a) {
        var c = g.Qb.Lx(this.B.v);
        if (c) for (var d = 0; d < this.pm.length; d++) {
            var e = this.pm[d];
            e.name != a && c.If(e.ua())
        }
    }
};
g.K.procedures_callnoreturn = {
    T: function () {
        L(O(this, "TOPROW"), this.id, "NAME");
        this.me(!0);
        this.le(!0);
        M(this, "procedure_blocks");
        this.ub = g.h.PROCEDURES_CALLNORETURN_HELPURL;
        this.xa = [];
        this.Xb = [];
        this.Rg = {};
        this.Uf = null;
        this.qu = !0
    }, ee: function () {
        return G(this, "NAME")
    }, qn: function (a, c) {
        g.Wd.Ce(a, this.ee()) && (Ib(this, c, "NAME"), this.Ra((this.L ? g.h.PROCEDURES_CALLRETURN_TOOLTIP : g.h.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", c)))
    }, Gu: function (a, c) {
        var d = g.Ga.Em(this.ee(), this.v), e = d && d.Od && d.Od.isVisible();
        e || (this.Rg = {}, this.Uf = null);
        if (c) if (a.join("\n") == this.xa.join("\n")) this.Uf = c; else {
            if (c.length != a.length) throw RangeError("paramNames and paramIds must be the same length.");
            this.Wg(!1);
            this.Uf || (this.Rg = {}, this.Uf = []);
            d = this.ba;
            this.ba = !1;
            for (var f = 0; f < this.xa.length; f++) {
                var h = B(this, "ARG" + f);
                h && (h = h.connection.ca, this.Rg[this.Uf[f]] = h, e && h && -1 == c.indexOf(this.Uf[f]) && (h.disconnect(), h.B.Kb()))
            }
            this.xa = [].concat(a);
            this.Xb = [];
            for (f = 0; f < this.xa.length; f++) a = g.O.pp(this.v, null, this.xa[f], ""), this.Xb.push(a);
            this.Jc();
            if (this.Uf = c) for (f = 0; f < this.xa.length; f++) c = this.Uf[f], c in this.Rg && (h = this.Rg[c], g.Qb.$k(h, this, "ARG" + f) || delete this.Rg[c]);
            (this.ba = d) && this.za()
        }
    }, Jc: function () {
        for (var a = 0; a < this.xa.length; a++) {
            var c = y(this, "ARGNAME" + a);
            if (c) {
                g.i.disable();
                try {
                    c.setValue(this.xa[a])
                } finally {
                    g.i.enable()
                }
            } else c = new g.Fd(this.xa[a]), L(Eb(N(this, "ARG" + a), g.rl), c, "ARGNAME" + a).T()
        }
        for (; B(this, "ARG" + a);) this.ib("ARG" + a), a++;
        if (a = B(this, "TOPROW")) this.xa.length ? y(this, "WITH") || (L(a, g.h.PROCEDURES_CALL_BEFORE_PARAMS,
            "WITH"), a.T()) : y(this, "WITH") && Bb(a, "WITH")
    }, eb: function () {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("name", this.ee());
        for (var c = 0; c < this.xa.length; c++) {
            var d = g.g.xml.createElement("arg");
            d.setAttribute("name", this.xa[c]);
            a.appendChild(d)
        }
        return a
    }, zb: function (a) {
        var c = a.getAttribute("name");
        this.qn(this.ee(), c);
        c = [];
        for (var d = [], e = 0, f; f = a.childNodes[e]; e++) "arg" == f.nodeName.toLowerCase() && (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
        this.Gu(c, d)
    }, Lg: function () {
        return this.Xb
    },
    onchange: function (a) {
        if (this.v && !this.v.je && a.Ec) if (a.type == g.i.ul && -1 != a.Eh.indexOf(this.id)) {
            var c = this.ee();
            c = g.Ga.Em(c, this.v);
            !c || c.type == this.os && JSON.stringify(c.xa) == JSON.stringify(this.xa) || (c = null);
            if (!c) {
                g.i.$(a.group);
                a = g.g.xml.createElement("xml");
                c = g.g.xml.createElement("block");
                c.setAttribute("type", this.os);
                var d = this.Qa(), e = d.y + 2 * g.ud;
                c.setAttribute("x", d.x + g.ud * (this.G ? -1 : 1));
                c.setAttribute("y", e);
                d = this.eb();
                c.appendChild(d);
                d = g.g.xml.createElement("field");
                d.setAttribute("name",
                    "NAME");
                d.appendChild(g.g.xml.createTextNode(this.ee()));
                c.appendChild(d);
                a.appendChild(c);
                g.U.Xi(a, this.v);
                g.i.$(!1)
            }
        } else a.type == g.i.Wn ? (c = this.ee(), c = g.Ga.Em(c, this.v), c || (g.i.$(a.group), this.I(!0, !1), g.i.$(!1))) : a.type == g.i.ni && "disabled" == a.element && (c = this.ee(), (c = g.Ga.Em(c, this.v)) && c.id == a.wc && ((c = g.i.Zb()) && console.log("Saw an existing group while responding to a definition change"), g.i.$(a.group), a.newValue ? (this.qu = this.isEnabled(), this.md(!1)) : this.md(this.qu), g.i.$(c)))
    }, Eg: function (a) {
        if (this.v.kd()) {
            var c =
                {enabled: !0};
            c.text = g.h.PROCEDURES_HIGHLIGHT_DEF;
            var d = this.ee(), e = this.v;
            c.yb = function () {
                var f = g.Ga.Em(d, e);
                if (f) {
                    if (e.kd()) {
                        var h = u(e, f.id);
                        if (h) {
                            var k = h.Qa(), l = H(h), m = e.scale;
                            h = (k.x + (e.G ? -1 : 1) * l.width / 2) * m;
                            k = (k.y + l.height / 2) * m;
                            l = e.Vc();
                            h = -(h - l.Sc - l.Bb / 2) - l.Sc;
                            k = -(k - l.xc - l.Pb / 2) - l.xc;
                            g.oc();
                            e.scroll(h, k)
                        }
                    } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
                    f.select()
                }
            };
            a.push(c)
        }
    }, os: "procedures_defnoreturn"
};
g.K.procedures_callreturn = {
    T: function () {
        L(O(this, "TOPROW"), "", "NAME");
        this.Bd(!0);
        M(this, "procedure_blocks");
        this.ub = g.h.PROCEDURES_CALLRETURN_HELPURL;
        this.xa = [];
        this.Rg = {};
        this.Uf = null;
        this.qu = !0
    },
    ee: g.K.procedures_callnoreturn.ee,
    qn: g.K.procedures_callnoreturn.qn,
    Gu: g.K.procedures_callnoreturn.Gu,
    Jc: g.K.procedures_callnoreturn.Jc,
    eb: g.K.procedures_callnoreturn.eb,
    zb: g.K.procedures_callnoreturn.zb,
    Lg: g.K.procedures_callnoreturn.Lg,
    onchange: g.K.procedures_callnoreturn.onchange,
    Eg: g.K.procedures_callnoreturn.Eg,
    os: "procedures_defreturn"
};
g.K.procedures_ifreturn = {
    T: function () {
        L(N(this, "CONDITION").vb("Boolean"), g.h.CONTROLS_IF_MSG_IF);
        L(N(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN);
        this.$c(!0);
        this.me(!0);
        this.le(!0);
        M(this, "procedure_blocks");
        this.Ra(g.h.PROCEDURES_IFRETURN_TOOLTIP);
        this.ub = g.h.PROCEDURES_IFRETURN_HELPURL;
        this.Dh = !0
    }, eb: function () {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("value", Number(this.Dh));
        return a
    }, zb: function (a) {
        this.Dh = 1 == a.getAttribute("value");
        this.Dh || (this.ib("VALUE"), L(O(this, "VALUE"),
            g.h.PROCEDURES_DEFRETURN_RETURN))
    }, onchange: function () {
        if (this.v.gc && !this.v.gc()) {
            var a = !1, c = this;
            do {
                if (-1 != this.qB.indexOf(c.type)) {
                    a = !0;
                    break
                }
                c = Fb(c)
            } while (c);
            a ? ("procedures_defnoreturn" == c.type && this.Dh ? (this.ib("VALUE"), L(O(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN), this.Dh = !1) : "procedures_defreturn" != c.type || this.Dh || (this.ib("VALUE"), L(N(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN), this.Dh = !0), this.Xg(null), this.$b || this.md(!0)) : (this.Xg(g.h.PROCEDURES_IFRETURN_WARNING), this.$b || Jb(this) ||
            this.md(!1))
        }
    }, qB: ["procedures_defnoreturn", "procedures_defreturn"]
};
g.K.fH = {};
g.la.O = {};
g.la.O.qo = 330;
g.zk([{
    type: "variables_get",
    message0: "%1",
    args0: [{type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}"}],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"]
}, {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}"}, {
        type: "input_value",
        name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"]
}]);
g.la.O.$A = {
    Eg: function (a) {
        if (!this.$b) {
            if ("variables_get" == this.type) var c = "variables_set",
                d = g.h.VARIABLES_GET_CREATE_SET; else c = "variables_get", d = g.h.VARIABLES_SET_CREATE_GET;
            var e = {enabled: 0 < Za(this.v)}, f = y(this, "VAR").Tb();
            e.text = d.replace("%1", f);
            d = g.g.xml.createElement("field");
            d.setAttribute("name", "VAR");
            d.appendChild(g.g.xml.createTextNode(f));
            f = g.g.xml.createElement("block");
            f.setAttribute("type", c);
            f.appendChild(d);
            e.yb = g.Ea.Oo(this, f);
            a.push(e)
        } else if ("variables_get" == this.type || "variables_get_reporter" ==
            this.type) c = {
            text: g.h.AK,
            enabled: !0,
            yb: g.la.O.pC(this)
        }, f = y(this, "VAR").Tb(), e = {
            text: g.h.VH.replace("%1", f),
            enabled: !0,
            yb: g.la.O.dB(this)
        }, a.unshift(c), a.unshift(e)
    }
};
g.la.O.pC = function (a) {
    return function () {
        var c = a.v, d = y(a, "VAR").Ac();
        g.O.Zp(c, d)
    }
};
g.la.O.dB = function (a) {
    return function () {
        var c = a.v, d = y(a, "VAR").Ac();
        c.If(d.ua());
        yc(c)
    }
};
g.Z.Wp("contextMenu_variableSetterGetter", g.la.O.$A);
g.j.Ht = {};
g.j.lists_create_empty = function () {
    return ["[]", g.j.zi]
};
g.j.lists_create_with = function (a) {
    for (var c = Array(a.zd), d = 0; d < a.zd; d++) c[d] = X(a, "ADD" + d, g.j.Mc) || "null";
    return ["[" + c.join(", ") + "]", g.j.zi]
};
g.j.lists_repeat = function (a) {
    var c = kf("listsRepeat", ["function " + g.j.se + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
        d = X(a, "ITEM", g.j.Mc) || "null";
    a = X(a, "NUM", g.j.Mc) || "0";
    return [c + "(" + d + ", " + a + ")", g.j.gb]
};
g.j.lists_length = function (a) {
    return [(X(a, "VALUE", g.j.Rb) || "[]") + ".length", g.j.Rb]
};
g.j.lists_isEmpty = function (a) {
    return ["!" + (X(a, "VALUE", g.j.Rb) || "[]") + ".length", g.j.Il]
};
g.j.lists_indexOf = function (a) {
    var c = "FIRST" == G(a, "END") ? "indexOf" : "lastIndexOf", d = X(a, "FIND", g.j.Nc) || "''";
    c = (X(a, "VALUE", g.j.Rb) || "[]") + "." + c + "(" + d + ")";
    return a.v.options.Le ? [c + " + 1", g.j.hh] : [c, g.j.gb]
};
g.j.lists_getIndex = function (a) {
    var c = G(a, "MODE") || "GET", d = G(a, "WHERE") || "FROM_START",
        e = X(a, "VALUE", "RANDOM" == d ? g.j.Mc : g.j.Rb) || "[]";
    switch (d) {
        case "FIRST":
            if ("GET" == c) return [e + "[0]", g.j.Rb];
            if ("GET_REMOVE" == c) return [e + ".shift()", g.j.Rb];
            if ("REMOVE" == c) return e + ".shift();\n";
            break;
        case "LAST":
            if ("GET" == c) return [e + ".slice(-1)[0]", g.j.Rb];
            if ("GET_REMOVE" == c) return [e + ".pop()", g.j.Rb];
            if ("REMOVE" == c) return e + ".pop();\n";
            break;
        case "FROM_START":
            a = g.j.Lf(a, "AT");
            if ("GET" == c) return [e + "[" + a + "]", g.j.Rb];
            if ("GET_REMOVE" ==
                c) return [e + ".splice(" + a + ", 1)[0]", g.j.gb];
            if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
            break;
        case "FROM_END":
            a = g.j.Lf(a, "AT", 1, !0);
            if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.j.gb];
            if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.gb];
            if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
            break;
        case "RANDOM":
            e = kf("listsGetRandomItem", ["function " + g.j.se + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];",
                "  }", "}"]) + "(" + e + ", " + ("GET" != c) + ")";
            if ("GET" == c || "GET_REMOVE" == c) return [e, g.j.gb];
            if ("REMOVE" == c) return e + ";\n"
    }
    throw Error("Unhandled combination (lists_getIndex).");
};
g.j.lists_setIndex = function (a) {
    function c() {
        if (d.match(/^\w+$/)) return "";
        var k = Ec(g.j.Dd, "tmpList", g.O.sb), l = "var " + k + " = " + d + ";\n";
        d = k;
        return l
    }

    var d = X(a, "LIST", g.j.Rb) || "[]", e = G(a, "MODE") || "GET", f = G(a, "WHERE") || "FROM_START",
        h = X(a, "TO", g.j.pg) || "null";
    switch (f) {
        case "FIRST":
            if ("SET" == e) return d + "[0] = " + h + ";\n";
            if ("INSERT" == e) return d + ".unshift(" + h + ");\n";
            break;
        case "LAST":
            if ("SET" == e) return a = c(), a + (d + "[" + d + ".length - 1] = " + h + ";\n");
            if ("INSERT" == e) return d + ".push(" + h + ");\n";
            break;
        case "FROM_START":
            f =
                g.j.Lf(a, "AT");
            if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
            if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
            break;
        case "FROM_END":
            f = g.j.Lf(a, "AT", 1, !1, g.j.gk);
            a = c();
            if ("SET" == e) return a + (d + "[" + d + ".length - " + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (d + ".splice(" + d + ".length - " + f + ", 0, " + h + ");\n");
            break;
        case "RANDOM":
            a = c();
            f = Ec(g.j.Dd, "tmpX", g.O.sb);
            a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
            if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (d + ".splice(" + f +
                ", 0, " + h + ");\n")
    }
    throw Error("Unhandled combination (lists_setIndex).");
};
g.j.Ht.NE = function (a, c, d) {
    return "FIRST" == c ? "0" : "FROM_END" == c ? a + ".length - 1 - " + d : "LAST" == c ? a + ".length - 1" : d
};
g.j.lists_getSublist = function (a) {
    var c = X(a, "LIST", g.j.Rb) || "[]", d = G(a, "WHERE1"), e = G(a, "WHERE2");
    if ("FIRST" == d && "LAST" == e) c += ".slice(0)"; else if (c.match(/^\w+$/) || "FROM_END" != d && "FROM_START" == e) {
        switch (d) {
            case "FROM_START":
                var f = g.j.Lf(a, "AT1");
                break;
            case "FROM_END":
                f = g.j.Lf(a, "AT1", 1, !1, g.j.gk);
                f = c + ".length - " + f;
                break;
            case "FIRST":
                f = "0";
                break;
            default:
                throw Error("Unhandled option (lists_getSublist).");
        }
        switch (e) {
            case "FROM_START":
                a = g.j.Lf(a, "AT2", 1);
                break;
            case "FROM_END":
                a = g.j.Lf(a, "AT2", 0, !1, g.j.gk);
                a = c + ".length - " + a;
                break;
            case "LAST":
                a = c + ".length";
                break;
            default:
                throw Error("Unhandled option (lists_getSublist).");
        }
        c = c + ".slice(" + f + ", " + a + ")"
    } else {
        f = g.j.Lf(a, "AT1");
        a = g.j.Lf(a, "AT2");
        var h = g.j.Ht.NE, k = {FIRST: "First", LAST: "Last", FROM_START: "FromStart", FROM_END: "FromEnd"};
        c = kf("subsequence" + k[d] + k[e], ["function " + g.j.se + "(sequence" + ("FROM_END" == d || "FROM_START" == d ? ", at1" : "") + ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") + ") {", "  var start = " + h("sequence", d, "at1") + ";", "  var end = " + h("sequence", e,
            "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + c + ("FROM_END" == d || "FROM_START" == d ? ", " + f : "") + ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") + ")"
    }
    return [c, g.j.gb]
};
g.j.lists_sort = function (a) {
    var c = X(a, "LIST", g.j.gb) || "[]", d = "1" === G(a, "DIRECTION") ? 1 : -1;
    a = G(a, "TYPE");
    var e = kf("listsGetSortCompare", ["function " + g.j.se + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return Number(a) - Number(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },", '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };", "  var compare = compareFuncs[type];",
        "  return function(a, b) { return compare(a, b) * direction; }", "}"]);
    return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.j.gb]
};
g.j.lists_split = function (a) {
    var c = X(a, "INPUT", g.j.Rb), d = X(a, "DELIM", g.j.Nc) || "''";
    a = G(a, "MODE");
    if ("SPLIT" == a) c || (c = "''"), a = "split"; else if ("JOIN" == a) c || (c = "[]"), a = "join"; else throw Error("Unknown mode: " + a);
    return [c + "." + a + "(" + d + ")", g.j.gb]
};
g.j.lists_reverse = function (a) {
    return [(X(a, "LIST", g.j.gb) || "[]") + ".slice().reverse()", g.j.gb]
};
g.j.zF = {};
g.j.controls_if = function (a) {
    var c = 0, d = "";
    g.j.Jd && (d += V(g.j.Jd, a));
    do {
        var e = X(a, "IF" + c, g.j.Nc) || "false";
        var f = gf(a, "DO" + c);
        g.j.Pc && (f = ff(V(g.j.Pc, a), g.j.sd) + f);
        d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
        ++c
    } while (B(a, "IF" + c));
    if (B(a, "ELSE") || g.j.Pc) f = gf(a, "ELSE"), g.j.Pc && (f = ff(V(g.j.Pc, a), g.j.sd) + f), d += " else {\n" + f + "}";
    return d + "\n"
};
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function (a) {
    var c = {EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">="}[G(a, "OP")],
        d = "==" == c || "!=" == c ? g.j.Yv : g.j.gC, e = X(a, "A", d) || "0";
    a = X(a, "B", d) || "0";
    return [e + " " + c + " " + a, d]
};
g.j.logic_operation = function (a) {
    var c = "AND" == G(a, "OP") ? "&&" : "||", d = "&&" == c ? g.j.cr : g.j.dr, e = X(a, "A", d);
    a = X(a, "B", d);
    if (e || a) {
        var f = "&&" == c ? "true" : "false";
        e || (e = f);
        a || (a = f)
    } else a = e = "false";
    return [e + " " + c + " " + a, d]
};
g.j.logic_negate = function (a) {
    var c = g.j.Il;
    return ["!" + (X(a, "BOOL", c) || "true"), c]
};
g.j.logic_boolean = function (a) {
    return ["TRUE" == G(a, "BOOL") ? "true" : "false", g.j.zi]
};
g.j.logic_null = function () {
    return ["null", g.j.zi]
};
g.j.logic_ternary = function (a) {
    var c = X(a, "IF", g.j.Bo) || "false", d = X(a, "THEN", g.j.Bo) || "null";
    a = X(a, "ELSE", g.j.Bo) || "null";
    return [c + " ? " + d + " : " + a, g.j.Bo]
};
g.j.BF = {};
g.j.controls_repeat_ext = function (a) {
    var c = y(a, "TIMES") ? String(Number(G(a, "TIMES"))) : X(a, "TIMES", g.j.pg) || "0", d = gf(a, "DO");
    d = hf(d, a);
    a = "";
    var e = Ec(g.j.Dd, "count", g.O.sb), f = c;
    c.match(/^\w+$/) || g.Mh(c) || (f = Ec(g.j.Dd, "repeat_end", g.O.sb), a += "var " + f + " = " + c + ";\n");
    return a + ("for (var " + e + " = 0; " + e + " < " + f + "; " + e + "++) {\n" + d + "}\n")
};
g.j.controls_repeat = g.j.controls_repeat_ext;
g.j.controls_whileUntil = function (a) {
    var c = "UNTIL" == G(a, "MODE"), d = X(a, "BOOL", c ? g.j.Il : g.j.Nc) || "false", e = gf(a, "DO");
    e = hf(e, a);
    c && (d = "!" + d);
    return "while (" + d + ") {\n" + e + "}\n"
};
g.j.controls_for = function (a) {
    var c = Q(G(a, "VAR"), g.O.sb), d = X(a, "FROM", g.j.pg) || "0", e = X(a, "TO", g.j.pg) || "0",
        f = X(a, "BY", g.j.pg) || "1", h = gf(a, "DO");
    h = hf(h, a);
    if (g.Mh(d) && g.Mh(e) && g.Mh(f)) {
        var k = Number(d) <= Number(e);
        a = "for (" + c + " = " + d + "; " + c + (k ? " <= " : " >= ") + e + "; " + c;
        c = Math.abs(Number(f));
        a = (1 == c ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + c)) + (") {\n" + h + "}\n")
    } else a = "", k = d, d.match(/^\w+$/) || g.Mh(d) || (k = Ec(g.j.Dd, c + "_start", g.O.sb), a += "var " + k + " = " + d + ";\n"), d = e, e.match(/^\w+$/) || g.Mh(e) || (d = Ec(g.j.Dd, c + "_end",
        g.O.sb), a += "var " + d + " = " + e + ";\n"), e = Ec(g.j.Dd, c + "_inc", g.O.sb), a += "var " + e + " = ", a = g.Mh(f) ? a + (Math.abs(f) + ";\n") : a + ("Math.abs(" + f + ");\n"), a = a + ("if (" + k + " > " + d + ") {\n") + (g.j.sd + e + " = -" + e + ";\n"), a += "}\n", a += "for (" + c + " = " + k + "; " + e + " >= 0 ? " + c + " <= " + d + " : " + c + " >= " + d + "; " + c + " += " + e + ") {\n" + h + "}\n";
    return a
};
g.j.controls_forEach = function (a) {
    var c = Q(G(a, "VAR"), g.O.sb), d = X(a, "LIST", g.j.pg) || "[]", e = gf(a, "DO");
    e = hf(e, a);
    a = "";
    var f = d;
    d.match(/^\w+$/) || (f = Ec(g.j.Dd, c + "_list", g.O.sb), a += "var " + f + " = " + d + ";\n");
    d = Ec(g.j.Dd, c + "_index", g.O.sb);
    e = g.j.sd + c + " = " + f + "[" + d + "];\n" + e;
    return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n")
};
g.j.controls_flow_statements = function (a) {
    var c = "";
    g.j.Jd && (c += V(g.j.Jd, a));
    g.j.Pc && (c += V(g.j.Pc, a));
    if (g.j.Jd) {
        var d = g.la.te.ho.ny(a);
        d && !d.gi && (c += V(g.j.Jd, d))
    }
    switch (G(a, "FLOW")) {
        case "BREAK":
            return c + "break;\n";
        case "CONTINUE":
            return c + "continue;\n"
    }
    throw Error("Unknown flow statement.");
};
g.j.sG = {};
g.j.procedures_defreturn = function (a) {
    var c = Q(G(a, "NAME"), g.Ga.sb), d = "";
    g.j.Jd && (d += V(g.j.Jd, a));
    g.j.Pc && (d += V(g.j.Pc, a));
    d && (d = ff(d, g.j.sd));
    var e = "";
    g.j.to && (e = ff(V(g.j.to, a), g.j.sd));
    var f = gf(a, "STACK"), h = X(a, "RETURN", g.j.Nc) || "", k = "";
    f && h && (k = d);
    h && (h = g.j.sd + "return " + h + ";\n");
    for (var l = [], m = 0; m < a.xa.length; m++) l[m] = Q(a.xa[m], g.O.sb);
    d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
    d = g.j.cq(a, d);
    g.j.Ti["%" + c] = d;
    return null
};
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function (a) {
    for (var c = Q(G(a, "NAME"), g.Ga.sb), d = [], e = 0; e < a.xa.length; e++) d[e] = X(a, "ARG" + e, g.j.Mc) || "null";
    return [c + "(" + d.join(", ") + ")", g.j.gb]
};
g.j.procedures_callnoreturn = function (a) {
    return g.j.procedures_callreturn(a)[0] + ";\n"
};
g.j.procedures_ifreturn = function (a) {
    var c = "if (" + (X(a, "CONDITION", g.j.Nc) || "false") + ") {\n";
    g.j.Pc && (c += ff(V(g.j.Pc, a), g.j.sd));
    a.Dh ? (a = X(a, "VALUE", g.j.Nc) || "null", c += g.j.sd + "return " + a + ";\n") : c += g.j.sd + "return;\n";
    return c + "}\n"
};
g.j.fH = {};
g.j.variables_get = function (a) {
    return [Q(G(a, "VAR"), g.O.sb), g.j.zi]
};
g.j.variables_set = function (a) {
    var c = X(a, "VALUE", g.j.pg) || "0";
    return Q(G(a, "VAR"), g.O.sb) + " = " + c + ";\n"
};
for (var nf in g.la.ed.Fq) g.K.controls_if[nf] = g.la.ed.Fq[nf];
g.K.controls_if.T = function () {
    this.ub = g.h.CONTROLS_IF_HELPURL;
    this.Gc(g.h.LOGIC_HUE);
    L(N(this, "IF0").vb("Boolean"), "if (");
    L(O(this), ") {");
    Kb(this, "DO0");
    L(O(this, "TAIL"), "}");
    this.$c(!0);
    this.me(!0);
    this.le(!0);
    this.ei(new g.Qb(["controls_if_elseif", "controls_if_else"]));
    g.la.ed.uv.apply(this)
};
g.K.controls_if.Jc = function () {
    B(this, "ELSE") && (this.ib("ELSEMSG"), this.ib("ELSE"));
    for (var a = 1; B(this, "IF" + a);) this.ib("IF" + a), this.ib("TAIL" + a), this.ib("DO" + a), a++;
    for (a = 1; a <= this.Md; a++) L(N(this, "IF" + a).vb("Boolean"), "} else if ("), L(O(this, "TAIL" + a), ") {"), Kb(this, "DO" + a);
    this.Be && (L(O(this, "ELSEMSG"), "} else {"), Kb(this, "ELSE"));
    Lb(this, "TAIL", null)
};
g.K.logic_compare.T = function () {
    this.ub = g.h.LOGIC_COMPARE_HELPURL;
    this.Gc(g.h.LOGIC_HUE);
    this.Bd(!0, "Boolean");
    N(this, "A");
    L(N(this, "B"), new g.Ja([["==", "EQ"], ["!=", "NEQ"], ["<", "LT"], ["<=", "LTE"], [">", "GT"], [">=", "GTE"]]), "OP");
    this.$c(!0);
    var a = this;
    this.Ra(function () {
        var c = G(a, "OP");
        return {
            EQ: g.h.LOGIC_COMPARE_TOOLTIP_EQ,
            NEQ: g.h.LOGIC_COMPARE_TOOLTIP_NEQ,
            LT: g.h.LOGIC_COMPARE_TOOLTIP_LT,
            LTE: g.h.LOGIC_COMPARE_TOOLTIP_LTE,
            GT: g.h.LOGIC_COMPARE_TOOLTIP_GT,
            GTE: g.h.LOGIC_COMPARE_TOOLTIP_GTE
        }[c]
    });
    this.Yk =
        [null, null]
};
g.h.LOGIC_OPERATION_AND = "&&";
g.h.LOGIC_OPERATION_OR = "||";
g.h.LOGIC_NEGATE_TITLE = "! %1";
g.h.LOGIC_BOOLEAN_TRUE = "true";
g.h.LOGIC_BOOLEAN_FALSE = "false";
g.K.controls_whileUntil.T = function () {
    P(this, {
        message0: "while ( %1 ) { %2 %3 }",
        args0: [{type: "input_value", name: "BOOL", check: "Boolean"}, {type: "input_dummy"}, {
            type: "input_statement",
            name: "DO"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        colour: g.h.LOOPS_HUE,
        tooltip: g.h.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        helpUrl: g.h.CONTROLS_WHILEUNTIL_HELPURL
    })
};
g.K.controls_for.T = function () {
    P(this, {
        message0: "for (var %1 = %2;  %3 < %4;  %5 += 1) { %6 %7 }",
        args0: [{type: "field_variable", name: "VAR", variable: null}, {
            type: "input_value",
            name: "FROM",
            check: "Number",
            align: "RIGHT"
        }, {type: "field_label", name: "VAR1", text: "?"}, {
            type: "input_value",
            name: "TO",
            check: "Number",
            align: "RIGHT"
        }, {type: "field_label", name: "VAR2", text: "?"}, {type: "input_dummy"}, {
            type: "input_statement",
            name: "DO"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        colour: g.h.LOOPS_HUE,
        helpUrl: g.h.CONTROLS_FOR_HELPURL
    });
    var a = this;
    this.Ra(function () {
        return g.h.CONTROLS_FOR_TOOLTIP.replace("%1", G(a, "VAR"))
    })
};
g.K.controls_for.onchange = function () {
    var a = y(this, "VAR").Tb();
    Ib(this, a, "VAR1");
    Ib(this, a, "VAR2")
};
g.j.controls_for = function (a) {
    var c = Q(G(a, "VAR"), g.O.sb), d = X(a, "FROM", g.j.pg) || "0", e = X(a, "TO", g.j.pg) || "0", f = gf(a, "DO");
    f = hf(f, a.id);
    return "for (var " + c + " = " + d + "; " + c + " < " + e + "; " + c + " += 1) {\n" + f + "}\n"
};
g.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break ;";
g.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue ;";
g.K.math_arithmetic.T = function () {
    P(this, {
        message0: "%1 %2 %3",
        args0: [{type: "input_value", name: "A", check: "Number"}, {
            type: "field_dropdown",
            name: "OP",
            options: [["+", "ADD"], ["-", "MINUS"], ["*", "MULTIPLY"], ["/", "DIVIDE"]]
        }, {type: "input_value", name: "B", check: "Number"}],
        inputsInline: !0,
        output: "Number",
        colour: g.h.MATH_HUE,
        helpUrl: g.h.MATH_ARITHMETIC_HELPURL
    });
    var a = this;
    this.Ra(function () {
        var c = G(a, "OP");
        return {
            ADD: g.h.MATH_ARITHMETIC_TOOLTIP_ADD,
            MINUS: g.h.MATH_ARITHMETIC_TOOLTIP_MINUS,
            MULTIPLY: g.h.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
            DIVIDE: g.h.MATH_ARITHMETIC_TOOLTIP_DIVIDE
        }[c]
    })
};
g.K.math_change.T = function () {
    P(this, {
        message0: "%1 += %2;",
        args0: [{type: "field_variable", name: "VAR", variable: "name"}, {
            type: "input_value",
            name: "DELTA",
            check: "Number"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        colour: g.h.VARIABLES_HUE,
        helpUrl: g.h.MATH_CHANGE_HELPURL
    });
    var a = this;
    this.Ra(function () {
        return g.h.MATH_CHANGE_TOOLTIP.replace("%1", y(a, "VAR").Ac().name)
    })
};
g.j.math_change = function (a) {
    var c = X(a, "DELTA", g.j.hh) || "0";
    return Q(G(a, "VAR"), g.O.sb) + " += " + c + ";\n"
};
g.K.math_random_int.T = function () {
    P(this, {
        message0: "%1(%2,%3)",
        args0: ["Math.randomInt", {type: "input_value", name: "FROM", check: "Number"}, {
            type: "input_value",
            name: "TO",
            check: "Number"
        }],
        inputsInline: !0,
        output: "Number",
        colour: g.h.MATH_HUE,
        tooltip: g.h.MATH_RANDOM_INT_TOOLTIP,
        helpUrl: g.h.MATH_RANDOM_INT_HELPURL
    })
};
g.h.MATH_RANDOM_FLOAT_TITLE_RANDOM = "Math.random  (  )";
g.h.LISTS_CREATE_EMPTY_TITLE = "[ ]";
g.h.LISTS_CREATE_WITH_INPUT_WITH = "[";
g.K.lists_create_with.Jc = function () {
    B(this, "TAIL") && this.ib("TAIL");
    this.zd && B(this, "EMPTY") ? this.ib("EMPTY") : this.zd || B(this, "EMPTY") || L(O(this, "EMPTY"), g.h.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.zd; a++) if (!B(this, "ADD" + a)) {
        var c = N(this, "ADD" + a);
        0 == a ? L(c, g.h.LISTS_CREATE_WITH_INPUT_WITH) : L(c, ",")
    }
    for (; B(this, "ADD" + a);) this.ib("ADD" + a), a++;
    this.zd && L(O(this, "TAIL"), "]")
};
g.K.lists_getIndex = {
    T: function () {
        P(this, {
            message0: "%1[%2]",
            args0: [{type: "input_value", name: "VALUE", check: "Array"}, {
                type: "input_value",
                name: "AT",
                check: "Number"
            }],
            inputsInline: !0,
            output: null,
            colour: g.h.LISTS_HUE,
            tooltip: g.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM + g.h.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
            helpUrl: g.h.LISTS_GET_INDEX_HELPURL
        })
    }
};
g.K.lists_setIndex = {
    T: function () {
        P(this, {
            message0: "%1[%2] = %3;",
            args0: [{type: "input_value", name: "LIST", check: "Array"}, {
                type: "input_value",
                name: "AT",
                check: "Number"
            }, {type: "input_value", name: "TO"}],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: g.h.LISTS_HUE,
            tooltip: g.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM + g.h.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
            helpUrl: g.h.LISTS_SET_INDEX_HELPURL
        })
    }
};
g.h.LISTS_LENGTH_TITLE = "%1 . length";
g.K.variables_get.T = function () {
    this.ub = g.h.VARIABLES_GET_HELPURL;
    this.Gc(g.h.VARIABLES_HUE);
    L(O(this), new g.Hd("name"), "VAR");
    this.Bd(!0);
    this.Ra(g.h.VARIABLES_GET_TOOLTIP)
};
g.K.variables_set.T = function () {
    this.ub = g.h.VARIABLES_SET_HELPURL;
    this.Gc(g.h.VARIABLES_HUE);
    L(L(L(N(this, "VALUE"), "var"), new g.Hd("name"), "VAR"), "=");
    L(O(this), ";");
    this.$c(!0);
    this.me(!0);
    this.le(!0);
    this.Ra(g.h.VARIABLES_SET_TOOLTIP)
};
g.K.procedures_defnoreturn.T = function () {
    var a = new g.xb("", g.Ga.Xp);
    L(L(L(L(L(O(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
    this.Zf(!0);
    L(O(this), "}");
    this.ei(new g.Qb(["procedures_mutatorarg"]));
    g.h.PROCEDURES_DEFNORETURN_COMMENT && this.Xf(g.h.PROCEDURES_DEFNORETURN_COMMENT);
    this.Gc(g.h.PROCEDURES_HUE);
    this.Ra(g.h.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.ub = g.h.PROCEDURES_DEFNORETURN_HELPURL;
    this.xa = [];
    this.Xb = [];
    this.Zf(!0);
    this.nf = null
};
g.K.procedures_defreturn.T = function () {
    var a = new g.xb("", g.Ga.Xp);
    L(L(L(L(L(O(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
    L(Eb(N(this, "RETURN"), g.rl), "return");
    L(O(this), "}");
    this.ei(new g.Qb(["procedures_mutatorarg"]));
    g.h.PROCEDURES_DEFRETURN_COMMENT && this.Xf(g.h.PROCEDURES_DEFRETURN_COMMENT);
    this.Gc(g.h.PROCEDURES_HUE);
    this.Ra(g.h.PROCEDURES_DEFRETURN_TOOLTIP);
    this.ub = g.h.PROCEDURES_DEFRETURN_HELPURL;
    this.xa = [];
    this.Xb = [];
    this.Zf(!0);
    this.nf = null
};
g.h.PROCEDURES_BEFORE_PARAMS = "";
g.K.procedures_callnoreturn.T = function () {
    this.ub = g.h.PROCEDURES_CALLNORETURN_HELPURL;
    this.Gc(g.h.PROCEDURES_HUE);
    L(L(O(this), "", "NAME"), "(");
    L(O(this, "TAIL"), ");");
    this.$c(!0);
    this.me(!0);
    this.le(!0);
    this.Ra(g.h.PROCEDURES_CALLNORETURN_TOOLTIP);
    this.xa = [];
    this.Rg = {}
};
g.K.procedures_callnoreturn.Jc = function () {
    for (var a = 0; a < this.xa.length; a++) if (!B(this, "ARG" + a)) {
        new g.Fd(this.xa[a]);
        var c = N(this, "ARG" + a);
        0 < a && L(c, ",");
        c.T()
    }
    for (; B(this, "ARG" + a);) this.ib("ARG" + a), a++;
    Lb(this, "TAIL", null)
};
g.K.procedures_callreturn.T = function () {
    this.ub = g.h.PROCEDURES_CALLRETURN_HELPURL;
    this.Gc(g.h.PROCEDURES_HUE);
    L(L(O(this), "", "NAME"), "(");
    L(O(this, "TAIL"), ")");
    this.$c(!0);
    this.Bd(!0);
    this.Ra(g.h.PROCEDURES_CALLRETURN_TOOLTIP);
    this.xa = [];
    this.Rg = {}
};
g.K.procedures_callreturn.Jc = g.K.procedures_callnoreturn.Jc;
delete g.K.procedures_ifreturn;
g.K.pond_scan = {
    T: function () {
        P(this, {
            message0: "%1(%2)",
            args0: ["scan", {type: "input_value", name: "DEGREE", check: ["Number", "Angle"]}],
            inputsInline: !0,
            output: "Number",
            colour: 290,
            tooltip: T("Pond_scanTooltip")
        })
    }
};
g.j.pond_scan = function (a) {
    return ["scan(" + (X(a, "DEGREE", g.j.Nc) || 0) + ")", g.j.gb]
};
g.K.pond_cannon = {
    T: function () {
        P(this, {
            message0: "%1(%2, %3);",
            args0: ["cannon", {type: "input_value", name: "DEGREE", check: ["Number", "Angle"]}, {
                type: "input_value",
                name: "RANGE",
                check: "Number"
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: T("Pond_cannonTooltip")
        })
    }
};
g.j.pond_cannon = function (a) {
    var c = X(a, "DEGREE", g.j.Mc) || 0;
    a = X(a, "RANGE", g.j.Mc) || 0;
    return "cannon(" + c + ", " + a + ");\n"
};
g.K.pond_swim = {
    T: function () {
        P(this, {
            message0: "%1(%2);",
            args0: ["swim", {type: "input_value", name: "DEGREE", check: ["Number", "Angle"]}],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: T("Pond_swimTooltip")
        })
    }
};
g.j.pond_swim = function (a) {
    return "swim(" + (X(a, "DEGREE", g.j.Nc) || 0) + ");\n"
};
g.K.pond_stop = {
    T: function () {
        P(this, {
            message0: "%1(%2);",
            args0: ["stop", ""],
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: T("Pond_stopTooltip")
        })
    }
};
g.j.pond_stop = function () {
    return "stop();\n"
};
g.K.pond_health = {
    T: function () {
        P(this, {
            message0: "%1(%2)",
            args0: ["health", ""],
            output: "Number",
            colour: 290,
            tooltip: T("Pond_healthTooltip")
        })
    }
};
g.j.pond_health = function () {
    return ["health()", g.j.gb]
};
g.K.pond_speed = {
    T: function () {
        P(this, {
            message0: "%1(%2)",
            args0: ["speed", ""],
            output: "Number",
            colour: 290,
            tooltip: T("Pond_speedTooltip")
        })
    }
};
g.j.pond_speed = function () {
    return ["speed()", g.j.gb]
};
g.K.pond_getX = {
    T: function () {
        P(this, {
            message0: "%1(%2)",
            args0: ["getX", ""],
            output: "Number",
            colour: 290,
            tooltip: T("Pond_locXTooltip")
        })
    }
};
g.j.pond_getX = function () {
    return ["getX()", g.j.gb]
};
g.K.pond_getY = {
    T: function () {
        P(this, {
            message0: "%1(%2)",
            args0: ["getY", ""],
            output: "Number",
            colour: 290,
            tooltip: T("Pond_locYTooltip")
        })
    }
};
g.j.pond_getY = function () {
    return ["getY()", g.j.gb]
};
g.K.pond_math_number = {
    T: function () {
        this.ub = g.h.MATH_NUMBER_HELPURL;
        this.Gc(g.h.MATH_HUE);
        L(O(this, "DUMMY"), new g.Gd(0), "NUM");
        this.Bd(!0, "Number");
        this.Ra(g.h.MATH_NUMBER_TOOLTIP)
    }, eb: function () {
        var a = document.createElement("mutation");
        a.setAttribute("angle_field", y(this, "NUM").constructor == g.ka);
        return a
    }, zb: function (a) {
        a = "true" == a.getAttribute("angle_field");
        this.Xu(a)
    }, onchange: function () {
        if (this.v && this.L.ca && this.L.ca.Xe) {
            var a = y(this, "NUM");
            -1 != this.L.ca.Xe.indexOf("Angle") ? a.constructor != g.ka &&
                this.Xu(!0) : a.constructor != g.Gd && this.Xu(!1)
        }
    }, Xu: function (a) {
        g.i.disable();
        var c = B(this, "DUMMY"), d = y(this, "NUM"), e = d.getValue();
        a ? (Bb(c, "NUM"), d = new g.ka(""), L(c, d, "NUM"), d.setValue(e)) : (Bb(c, "NUM"), L(c, new g.Gd(e), "NUM"));
        this.ba && this.za();
        g.i.enable()
    }
};
g.K.pond_math_single = {
    T: function () {
        P(this, {
            message0: "%1 (%2)",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [["Math.sqrt", "ROOT"], ["Math.abs", "ABS"], ["Math.sin_deg", "SIN"], ["Math.cos_deg", "COS"], ["Math.tan_deg", "TAN"], ["Math.asin_deg", "ASIN"], ["Math.acos_deg", "ACOS"], ["Math.atan_deg", "ATAN"]]
            }, {type: "input_value", name: "NUM", check: "Number"}],
            inputsInline: !0,
            output: "Number",
            colour: g.h.MATH_HUE,
            helpUrl: g.h.MATH_SINGLE_HELPURL
        });
        var a = this;
        this.Ra(function () {
            var c = G(a, "OP");
            return {
                ROOT: g.h.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: g.h.MATH_SINGLE_TOOLTIP_ABS,
                SIN: g.h.MATH_TRIG_TOOLTIP_SIN,
                COS: g.h.MATH_TRIG_TOOLTIP_COS,
                TAN: g.h.MATH_TRIG_TOOLTIP_TAN,
                ASIN: g.h.MATH_TRIG_TOOLTIP_ASIN,
                ACOS: g.h.MATH_TRIG_TOOLTIP_ACOS,
                ATAN: g.h.MATH_TRIG_TOOLTIP_ATAN
            }[c]
        })
    }
};
g.j.pond_math_single = function (a) {
    var c = G(a, "OP");
    a = X(a, "NUM", g.j.Nc) || "0";
    switch (c) {
        case "ABS":
            c = "Math.abs(" + a + ")";
            break;
        case "ROOT":
            c = "Math.sqrt(" + a + ")";
            break;
        case "SIN":
            c = "Math.sin_deg(" + a + ")";
            break;
        case "COS":
            c = "Math.cos_deg(" + a + ")";
            break;
        case "TAN":
            c = "Math.tan_deg(" + a + ")";
            break;
        case "ASIN":
            c = "Math.asin_deg(" + a + ")";
            break;
        case "ACOS":
            c = "Math.acos_deg(" + a + ")";
            break;
        case "ATAN":
            c = "Math.atan_deg(" + a + ")";
            break;
        default:
            throw Error("Unknown math operator: " + c);
    }
    return [c, g.j.gb]
};
g.j.pond_math_number = g.j.math_number;
g.K.pond_loc_x = g.K.pond_getX;
g.j.pond_loc_x = g.j.pond_getX;
g.K.pond_loc_y = g.K.pond_getY;
g.j.pond_loc_y = g.j.pond_getY;
g.K.pond_controls_if = g.K.controls_if;
g.j.pond_controls_if = g.j.controls_if;
g.K.pond_loops_while = g.K.controls_whileUntil;
g.j.pond_loops_while = g.j.controls_whileUntil;
g.K.pond_math_arithmetic = g.K.math_arithmetic;
g.j.pond_math_arithmetic = g.j.math_arithmetic;
g.K.pond_math_change = g.K.math_change;
g.j.pond_math_change = g.j.math_change;
var of = of || {};

function pf(a, c) {
    function d() {
    }

    d.prototype = c.prototype;
    a.w = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.tL = function (e, f, h) {
        return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2))
    }
}

if (!qf) {
    var qf, rf = "";
    "undefined" !== typeof navigator && navigator && "string" == typeof navigator.userAgent && (rf = navigator.userAgent);
    var sf = 0 == rf.indexOf("Opera");
    qf = {
        QL: {LI: "ScriptEngine" in window},
        PJ: sf,
        lg: !sf && -1 != rf.indexOf("MSIE"),
        Er: !sf && -1 != rf.indexOf("WebKit")
    }
}
if (!tf) var tf = {};
if (!uf) var uf = {};
if (!vf) var vf = {};
if (!wf) var wf = {};
if (!xf) var xf = {};
if (!yf) var yf = {};
var zf = of.TH ? {YL: !0} : {};

function Af() {
    throw Error("Do not instantiate directly");
}

Af.prototype.ex = null;
Af.prototype.toString = function () {
    return this.content
};

function Bf(a) {
    if (null != a) switch (a.ex) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Cf() {
    Af.call(this)
}

pf(Cf, Af);
Cf.prototype.LD = zf;

function Y(a) {
    return null != a && a.LD === zf ? a : Df(String(String(a)).replace(Ef, Ff), Bf(a))
}

var Df = function (a) {
    function c() {
    }

    c.prototype = a.prototype;
    return function (d, e) {
        var f = new c;
        f.content = String(d);
        void 0 !== e && (f.ex = e);
        return f
    }
}(Cf), Gf = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function Ff(a) {
    return Gf[a]
}

var Ef = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Hf() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
};

function If() {
    var a = '<table width="100%"><tr><td><h1><span id="title">' + ((Zc ? '<a href="index.html?lang=' + Y(Xc) + '">' : '<a href="./?lang=' + Y(Xc) + '">') + "Blockly Games</a> : " + Y("Pond Tutor") + "</span>");
    if (R) {
        var c = " &nbsp; ";
        for (var d = 1; 11 > d; d++) {
            var e = "?lang=" + Y(Xc) + "&level=" + Y(d);
            c += " " + (d == R ? '<span class="level_number level_done" id="level' + Y(d) + '">' + Y(d) + "</span>" : 10 == d ? '<a class="level_number" id="level' + Y(d) + '" href="' + Y(e) + '">' + Y(d) + "</a>" : '<a class="level_dot" id="level' + Y(d) + '" href="' + Y(e) +
                '"></a>')
        }
    } else c = "";
    a = '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). \\nReturns the distance to the closest enemy in that \\ndirection. Returns Infinity if no enemy found. </span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and \\na range (0-70). </span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360). </span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop. </span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, \\n100 is healthy). </span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is \\nstopped, 100 is full speed). </span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the \\nleft edge, 100 is the right edge). </span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the \\nbottom edge, 100 is the top edge). </span></div><div style="display: none"><span id="Pond_playerName">Player</span><span id="Pond_targetName">Target</span><span id="Pond_pendulumName">Pendulum</span><span id="Pond_scaredName">Scared</span></div>' +
        (a + c + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>');
    switch (R) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            a += '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block>' + (5 <= R ? '<block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>' :
                "") + (7 <= R ? '<block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>' : "") + (9 <= R ? '<block type="pond_stop"></block>' : "") + (9 <= R ? '<block type="pond_getX"></block><block type="pond_getY"></block>' : "") + "</category>" + (3 <= R ? '<category name="Logic">' + (9 <= R ? '<block type="controls_if"></block><block type="logic_compare"></block>' : "") + '<block type="logic_boolean"></block></category><category name="Loops"><block type="controls_whileUntil"></block></category>' :
                "") + '<category name="Math"><block type="pond_math_number"><mutation angle_field="false"></mutation></block></category></xml><div id="blockly"></div>';
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            a += '<div id="editor"></div>'
    }
    return a += '\n<div id="playerTarget" style="display: none">\n</div>\n\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (getX() > 25) {\n      swim(180, 25);\n    } else {\n      west = false;\n      swim(0, 0);\n    }\n  } else {\n    if (getX() < 75) {\n      swim(0, 25);\n    } else {\n      west = true;\n      swim(0, 0);\n    }\n  }\n}\n</div>\n\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    swim(45, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    stop();\n  }\n}\n</div>\n<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' +
        (Hf() + "</div>") + (5 == R || 6 == R ? '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. Use \'scan\' to tell the cannon how far to shoot.</div>' + Hf() + "</div>" : "") + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + (1 == R || 2 == R ? "Use the 'cannon' command to hit the target. The first parameter is the angle, the second parameter is the range. Find the right combination." + (1 == R ? '<br><br><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 221.86 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 125.51,5.5 v 27 h -36.02 M 83.89,24.3 l 3.68,-2.1 M 193.9,5.5 v 27 h -38.31 M 149.99,24.3 l 3.68,-2.1"></path><g transform="translate(89.99,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g><g transform="translate(156.09,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">70</text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">cannon</text><text class="blocklyText" y="12.5" transform="translate(68.11,10)">(</text><text class="blocklyText" y="12.5" transform="translate(135.01,10)">,</text><text class="blocklyText" y="12.5" transform="translate(203.4,10)">);</text></g></svg>' :
            2 == R ? "<pre>cannon(0, 70);</pre>" : "") : 3 == R || 4 == R ? "This target needs to be hit many times. Use a 'while (true)' loop to do something indefinitely." + (3 == R ? '<br><br><svg height="92" width="250"><g><path transform="translate(1,1)" fill="#498449" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08,5 h -60.71 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71 z"></path><path fill="#5ba55b" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08,5 h -60.71 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71 z"></path><path class="blocklyPathLight" stroke="#8cc08c" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 49.5 M 49.5,0.5 H 162.44 M 49.5,36.5 M 21.98,59.01 a 8.5,8.5 0 0,0 6.01,2.48 H 49.5 M 49.5,61.5 H 49.5 M 2.69,83.3 A 7.5,7.5 0 0,1 0.5,78 V 8 M 129.58,5.5 v 27 h -60.71 M 63.27,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">while&#160;(</text><text class="blocklyText" y="12.5" transform="translate(139.08,10)">)&#160;{</text><text class="blocklyText" y="12.5" transform="translate(10,66)">}</text><g transform="translate(69.37,6)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b80a5" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 58.21 M 58.21,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="48.71"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">true<tspan style="fill: rgb(91, 128, 165);"> \u25be</tspan></text></g></g></g></svg>' :
            4 == R ? "<pre>while (true) {\n  ...\n}</pre>" : "") : 5 == R || 6 == R ? "This opponent moves back and forth, making it hard to hit. The 'scan' expression returns the exact range to the opponent in the specified direction." + (5 == R ? '<br><br><svg height="37" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 132.26 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 108.38,5.5 v 27 h -36.02 M 66.76,24.3 l 3.68,-2.1"></path><g transform="translate(72.86,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">scan</text><text class="blocklyText" y="12.5" transform="translate(50.97,10)">(</text><text class="blocklyText" y="12.5" transform="translate(117.88,10)">)</text></g></svg><br><br>' :
            6 == R ? "<pre>scan(0)</pre>" : "") + "This range is exactly what the 'cannon' command needs to fire accurately." : 7 == R || 8 == R ? "This opponent is too far away to use the cannon (which has a limit of 70 meters). Instead, use the 'swim' command to start swimming towards the opponent and crash into it." + (7 == R ? '<br><br><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 138.75 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 110.8,5.5 v 27 h -36.02 M 69.18,24.3 l 3.68,-2.1"></path><g transform="translate(75.28,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">swim</text><text class="blocklyText" y="12.5" transform="translate(53.39,10)">(</text><text class="blocklyText" y="12.5" transform="translate(120.3,10)">);</text></g></svg>' :
            8 == R ? "<pre>swim(0);</pre>" : "") : 9 == R ? "This opponent is also too far away to use the cannon. But you are too weak to survive a collision. Swim towards the opponent while your horizontal location is less than than 50. Then 'stop' and use the cannon." + (9 == R ? '<br><br><svg height="37" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 20 H 194.25 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93,5 h -81.93 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93 z M 184.25,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#5b80a5" d="m 0,0 H 20 H 194.25 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93,5 h -81.93 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93 z M 184.25,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 193.75 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 98.43,5.5 v 26 h -81.93 M 10.9,24.3 l 3.68,-2.1 M 184.75,5.5 v 27 h -38.31 M 140.83,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(107.93,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="32.0"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">&lt;<tspan style="fill: rgb(91, 128, 165);"> \u25be</tspan></text></g><g transform="translate(146.93,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">50</text></g></g><g transform="translate(17,6)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#995ba5" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 79.43 M 79.43,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">getX</text><text class="blocklyText" y="12.5" transform="translate(50.16,5)">(</text><text class="blocklyText" y="12.5" transform="translate(65.05,5)">)</text></g></g></svg><br><br><svg height="31" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 81.06 M 81.06,0.5 M 2.69,21.3 A 7.5,7.5 0 0,1 0.5,16 V 8"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">stop</text><text class="blocklyText" y="12.5" transform="translate(47.71,5)">(</text><text class="blocklyText" y="12.5" transform="translate(62.6,5)">);</text></g></svg>' :
            10 == R ? "<pre>getX() &lt; 50</pre><pre>stop();</pre>" : "") : 10 == R ? "This opponent will move away when it is hit. Swim towards it if it is out of range (70 meters)." : "") + "</div>" + Hf() + "</div>"
};var gd = "pond-tutor";
window.addEventListener("load", function () {
    document.body.innerHTML = If();
    ud();
    Ce();
    hd("runButton", Se);
    hd("resetButton", Ue);
    hd("docsButton", Qe);
    hd("closeDocs", Re);
    Jd();
    Kd();
    hd("helpButton", Ve);
    2 > location.hash.length && !ed(R) && setTimeout(Ve, 1E3);
    var a = -1 != Wc.indexOf(Xc), c = document.getElementById("blockly"), d = document.getElementById("editor"),
        e = document.getElementById("visualization");
    if (c) {
        var f = function () {
            c.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
            c.style.left = a ? "10px" : "420px";
            c.style.width =
                window.innerWidth - 440 + "px"
        };
        window.addEventListener("scroll", function () {
            f(null);
            g.hl(C)
        });
        f(null);
        Cd();
        jf("scan,cannon,drive,swim,stop,speed,damage,health,loc_x,getX,loc_y,getY,");
        yd(7 == R ? '<xml><block type="pond_swim" x="70" y="70"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block></xml>' : '<xml><block type="pond_cannon" x="70" y="70"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block></xml>')
    }
    if (d) {
        td =
            !0;
        var h = document.getElementById("containerCode");
        h.parentNode.removeChild(h);
        h = 8 == R ? "swim(0);" : "cannon(0, 70);";
        Md();
        yd(h + "\n");
        f = function () {
            d.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
            d.style.left = a ? "10px" : "420px";
            d.style.width = window.innerWidth - 440 + "px"
        };
        window.addEventListener("scroll", f);
        Ld()
    }
    window.addEventListener("resize", f);
    f(null);
    for (var k = 0; h = Jf[k]; k++) {
        var l = h.code ? document.getElementById(h.code).textContent : zd, m = T(h.name);
        W.aD(m, l, h.start, h.Ya)
    }
    W.reset();
    Fe()
});
var Jf = [void 0, [{start: new g.g.J(50, 30), Ya: 0, name: "Pond_playerName", code: null}, {
    start: new g.g.J(50, 70),
    Ya: 99,
    name: "Pond_targetName",
    code: "playerTarget"
}], [{start: new g.g.J(70, 50), Ya: 0, name: "Pond_playerName", code: null}, {
    start: new g.g.J(20, 50),
    Ya: 99,
    name: "Pond_targetName",
    code: "playerTarget"
}], [{start: new g.g.J(20, 20), Ya: 0, name: "Pond_playerName", code: null}, {
    start: new g.g.J(62.4264, 62.4264),
    Ya: 0,
    name: "Pond_targetName",
    code: "playerTarget"
}], [{start: new g.g.J(50, 80), Ya: 0, name: "Pond_playerName", code: null},
    {start: new g.g.J(50, 20), Ya: 0, name: "Pond_targetName", code: "playerTarget"}], [{
    start: new g.g.J(90, 50),
    Ya: 0,
    name: "Pond_playerName",
    code: null
}, {start: new g.g.J(50, 50), Ya: 0, name: "Pond_pendulumName", code: "playerPendulum"}], [{
    start: new g.g.J(10, 50),
    Ya: 0,
    name: "Pond_playerName",
    code: null
}, {start: new g.g.J(50, 50), Ya: 0, name: "Pond_pendulumName", code: "playerPendulum"}], [{
    start: new g.g.J(20, 80),
    Ya: 0,
    name: "Pond_playerName",
    code: null
}, {start: new g.g.J(80, 20), Ya: 99, name: "Pond_targetName", code: "playerTarget"}], [{
    start: new g.g.J(50,
        90), Ya: 0, name: "Pond_playerName", code: null
}, {start: new g.g.J(50, 10), Ya: 99, name: "Pond_pendulumName", code: "playerPendulum"}], [{
    start: new g.g.J(5, 50),
    Ya: 99,
    name: "Pond_playerName",
    code: null
}, {start: new g.g.J(95, 50), Ya: 0, name: "Pond_targetName", code: "playerTarget"}], [{
    start: new g.g.J(10, 10),
    Ya: 50,
    name: "Pond_playerName",
    code: null
}, {start: new g.g.J(40, 40), Ya: 0, name: "Pond_scaredName", code: "playerScared"}]][R];
Oe = function (a) {
    clearTimeout(Ae);
    0 != a && 1 == a && "function" == typeof W.Ll[0].Sw && ((5 == R || 6 == R) && 2E5 < W.Qu ? (a = document.getElementById("helpUseScan"), U.yn(a, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, U.Ou), U.Mu()) : (window.localStorage && (window.localStorage[gd + R] = vd()), U.ID()))
};
