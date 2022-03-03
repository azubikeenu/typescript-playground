"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
function requireAuth(req, res, next) {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.isLoggedIn))
        return res.redirect('/login');
    next();
}
router
    .route('/login')
    .get((req, res) => {
    res.send(`
     <form method='POST'>
        <div>
        <label>Email</label>
        <input name ='email'/>
        </div>
        <br/>
        <div>
        <label>Password</label>
        <input type='password' name ='password'/>
        </div>
        <button>LOG IN</button>
     </form>
  `);
})
    .post((req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.send('Must provide an email or password');
    if (email !== 'hi@hi.com' && password !== 'userpass')
        return res.send('Invalid email or password');
    req.session = { isLoggedIn: true };
    return res.redirect('/');
});
router
    .route('/')
    .get(requireAuth, (req, res, next) => {
    return res.send(`
     <div>
      <div> You are logged in</div>
      <a href='/protected'> Protected</a>
      <br/>
      <a href='/logout'> Log out</a>
     </div>
  `);
});
router
    .route('/logout')
    .get((req, res, next) => {
    req.session = undefined;
    return res.redirect('/login');
});
router
    .route('/protected')
    .get(requireAuth, (req, res, next) => {
    res.send(`
    <div>
    <div> Welcome to the protected route</div>
    <a href='/logout'> Log out</a>
   </div>
    `);
});
