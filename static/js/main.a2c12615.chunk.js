(this["webpackJsonpiot-demo"] = this["webpackJsonpiot-demo"] || []).push([[0], {
    10: function (e, a, t) {
        e.exports = t.p + "static/media/humidity.d900f7b8.svg"
    }, 15: function (e, a, t) {
        e.exports = t.p + "static/media/air-conditioner.fae88e18.svg"
    }, 16: function (e, a, t) {
        e.exports = t.p + "static/media/heater.62a03e13.svg"
    }, 17: function (e, a, t) {
        e.exports = t.p + "static/media/github-logo.76d344f0.svg"
    }, 19: function (e, a, t) {
        e.exports = t(28)
    }, 28: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = t(0), l = t.n(n), r = t(14), c = t.n(r), m = t(6), s = (t(24), t(15)), o = t.n(s), i = t(16),
            d = t.n(i), u = t(17), p = t.n(u), b = t(8), g = t.n(b), E = t(10), v = t.n(E), N = t(5), h = t(7);
        var f = function () {
            var e = Object(n.useState)(!0), a = Object(m.a)(e, 2), t = a[0], r = a[1], c = Object(n.useState)(60),
                s = Object(m.a)(c, 2), i = s[0], u = s[1], b = Object(n.useState)(65), E = Object(m.a)(b, 2), f = E[0],
                x = E[1], y = Object(n.useState)(!1), C = Object(m.a)(y, 2), O = C[0], w = C[1],
                j = Object(n.useState)(!0), B = Object(m.a)(j, 2), k = B[0], S = B[1];
            return Object(n.useEffect)((function () {
                if (t) {
                    var e = i - 40, a = f - 40;
                    e > 24 && a > 24 ? (w(!0), S(!1)) : e <= 18 && a > 24 ? (w(!1), S(!1)) : e <= 24 && e >= 18 && a > 24 ? (w(!0), S(!1)) : e > 24 && a <= 24 && a >= 18 || e <= 18 && a <= 24 && a >= 18 || e <= 24 && e >= 18 && a <= 24 && a >= 18 || e > 24 && a < 18 ? (w(!1), S(!1)) : e <= 18 && a < 18 ? (w(!1), S(!0)) : e <= 24 && e >= 18 && a < 18 && (w(!1), S(!1))
                }
            }), [i, f, t]), l.a.createElement("div", {className: "App"}, l.a.createElement("nav", {className: "navbar navbar-dark bg-primary navbar-expand-lg"}, l.a.createElement("div", {className: "container"}, l.a.createElement("span", {className: "navbar-brand font-weight-bold"}, "Climate control"), l.a.createElement("button", {
                className: "navbar-toggler",
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
            }, l.a.createElement("span", {className: "navbar-toggler-icon"})), l.a.createElement("div", {
                className: "collapse navbar-collapse",
                id: "navbarSupportedContent"
            }, l.a.createElement("ul", {className: "navbar-nav mr-auto"}), l.a.createElement("a", {
                className: "text-white ",
                href: "https://github.com/vozbrann"
            }, l.a.createElement("img", {
                style: {paddingBottom: "5px", height: "25px", filter: "invert(1)"},
                className: "mr-1",
                src: p.a,
                alt: ""
            }), "")))), l.a.createElement("div", {className: "container mt-3"}, l.a.createElement("div", {className: "row"}, l.a.createElement("div", {className: "col-12 d-flex mb-3 justify-content-end"}, l.a.createElement("h3", null, l.a.createElement("span", {className: "mr-5"}, "Automatic mode:"), l.a.createElement("span", {
                className: "btn-group btn-group-lg rounded border",
                role: "group",
                "aria-label": "First group"
            }, l.a.createElement("button", {
                type: "button",
                className: "btn " + (t ? "btn-primary" : "btn-light"),
                onClick: function () {
                    return r(!0)
                }
            }, "On"), l.a.createElement("button", {
                type: "button",
                className: "btn " + (t ? "btn-light" : "btn-primary"),
                onClick: function () {
                    return r(!1)
                }
            }, "Off")))))), l.a.createElement("div", {className: "container pt-3"}, l.a.createElement("div", {className: "row"}, l.a.createElement("div", {className: "col-12"}, l.a.createElement("div", {className: "container"}, l.a.createElement("div", {className: "row"}, l.a.createElement("div", {className: "col-md-6"}, l.a.createElement("h3", null, "Living room:", l.a.createElement("img", {
                style: {
                    height: "30px",
                    paddingBottom: "5px"
                }, src: g.a, className: "ml-3", alt: ""
            }), f - 40, l.a.createElement("sup", null, "o"), "C", l.a.createElement("img", {
                style: {
                    height: "30px",
                    paddingBottom: "5px",
                    marginLeft: "15px"
                }, src: v.a, alt: ""
            }), "60%")), l.a.createElement("div", {className: "col-md-6 text-md-right"}, l.a.createElement("h3", null, "Bedroom:", l.a.createElement("img", {
                style: {
                    height: "30px",
                    paddingBottom: "5px"
                }, src: g.a, className: "ml-3", alt: ""
            }), i - 40, l.a.createElement("sup", null, "o"), "C", l.a.createElement("img", {
                style: {
                    height: "30px",
                    paddingBottom: "5px",
                    marginLeft: "15px"
                }, src: v.a, alt: ""
            }), "82%"))))), l.a.createElement("div", {className: "col-12 shadow mb-3 p-4"}, l.a.createElement("div", {className: "container"}, l.a.createElement("div", {className: "row"}, l.a.createElement("div", {className: "col-md-9 d-flex flex-column flex-md-row align-items-center"}, l.a.createElement("img", {
                style: {height: "70px"},
                src: o.a,
                alt: ""
            }), l.a.createElement("h2", {className: "ml-md-5"}, "Air conditioner")), l.a.createElement("div", {className: "col"}, l.a.createElement("div", {className: "text-md-right text-center text-md-left"}, l.a.createElement("div", {
                className: "btn-group btn-group-lg rounded border",
                role: "group",
                "aria-label": "First group"
            }, l.a.createElement("button", {
                type: "button",
                disabled: t,
                className: "btn " + (O ? "btn-primary" : "btn-light"),
                onClick: function () {
                    return w(!0)
                }
            }, "On"), l.a.createElement("button", {
                type: "button",
                disabled: t,
                className: "btn " + (O ? "btn-light" : "btn-primary"),
                onClick: function () {
                    return w(!1)
                }
            }, "Off"))))))), l.a.createElement("div", {className: "col-12 shadow mb-3 p-4"}, l.a.createElement("div", {className: "container"}, l.a.createElement("div", {className: "row"}, l.a.createElement("div", {className: "col-md-9 d-flex flex-column flex-md-row align-items-center"}, l.a.createElement("img", {
                style: {height: "70px"},
                src: d.a,
                alt: ""
            }), l.a.createElement("h2", {className: "ml-md-5"}, "Heater")), l.a.createElement("div", {className: "col"}, l.a.createElement("div", {className: "text-md-right text-center"}, l.a.createElement("div", {
                className: "btn-group btn-group-lg rounded border",
                role: "group",
                "aria-label": "First group"
            }, l.a.createElement("button", {
                type: "button",
                disabled: t,
                className: "btn " + (k ? "btn-primary" : "btn-light"),
                onClick: function () {
                    return S(!0)
                }
            }, "On"), l.a.createElement("button", {
                type: "button",
                disabled: t,
                className: "btn " + (k ? "btn-light" : "btn-primary"),
                onClick: function () {
                    return S(!1)
                }
            }, "Off"))))))))), l.a.createElement("div", {className: "container shadow p-4"}, l.a.createElement("h2", null, "Simulation"), l.a.createElement(N.a, null, l.a.createElement(N.a.Row, null, l.a.createElement(N.a.Group, {
                className: "px-5",
                as: h.a,
                md: 6,
                controlId: "formBasicRangeCustom"
            }, l.a.createElement(N.a.Label, {className: "h3"}, "Living room:", l.a.createElement("img", {
                style: {
                    height: "30px",
                    paddingBottom: "5px"
                }, src: g.a, className: "ml-3", alt: ""
            }), f - 40, l.a.createElement("sup", null, "o"), "C"), l.a.createElement(N.a.Control, {
                value: f,
                onChange: function (e) {
                    x(e.target.value)
                },
                type: "range",
                custom: !0
            })), l.a.createElement(N.a.Group, {
                className: "px-5",
                as: h.a,
                md: 6,
                controlId: "formBasicRangeCustom"
            }, l.a.createElement(N.a.Label, {className: "h3"}, "Bedroom:", l.a.createElement("img", {
                style: {
                    height: "30px",
                    paddingBottom: "5px"
                }, src: g.a, className: "ml-3", alt: ""
            }), i - 40, l.a.createElement("sup", null, "o"), "C"), l.a.createElement(N.a.Control, {
                value: i,
                onChange: function (e) {
                    u(e.target.value)
                },
                type: "range",
                custom: !0
            }))))))
        };
        c.a.render(l.a.createElement(f, null), document.getElementById("root"))
    }, 8: function (e, a, t) {
        e.exports = t.p + "static/media/weather.10a1d9ca.svg"
    }
}, [[19, 1, 2]]]);
//# sourceMappingURL=main.a2c12615.chunk.js.map
