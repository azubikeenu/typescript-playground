"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
function requireAuth(req, res, next) {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.isLoggedIn))
        return res.redirect('/login');
    next();
}
router
    .route('/login')
    .get(function (req, res) {
    res.send("\n     <form method='POST'>\n        <div>\n        <label>Email</label>\n        <input name ='email'/>\n        </div>\n        <br/>\n        <div>\n        <label>Password</label>\n        <input type='password' name ='password'/>\n        </div>\n        <button>LOG IN</button>\n     </form>\n  ");
})
    .post(function (req, res, next) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email || !password)
        return res.send('Must provide an email or password');
    if (email !== 'hi@hi.com' && password !== 'userpass')
        return res.send('Invalid email or password');
    req.session = { isLoggedIn: true };
    return res.redirect('/');
});
router
    .route('/')
    .get(requireAuth, function (req, res, next) {
    return res.send("\n     <div>\n      <div> You are logged in</div>\n      <a href='/protected'> Protected</a>\n      <br/>\n      <a href='/logout'> Log out</a>\n     </div>\n  ");
});
router
    .route('/logout')
    .get(function (req, res, next) {
    req.session = undefined;
    return res.redirect('/login');
});
router
    .route('/protected')
    .get(requireAuth, function (req, res, next) {
    res.send("\n    <div>\n    <div> Welcome to the protected route</div>\n    <a href='/logout'> Log out</a>\n   </div>\n    ");
});
