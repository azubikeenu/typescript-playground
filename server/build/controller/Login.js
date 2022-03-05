"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../decorators");
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.showloginPage = function (req, res) {
        res.send("\n         <form method='POST'>\n            <div>\n            <label>Email</label>\n            <input name ='email'/>\n            </div>\n            <br/>\n            <div>\n            <label>Password</label>\n            <input type='password' name ='password'/>\n            </div>\n            <button>LOG IN</button>\n         </form>\n      ");
    };
    Login.prototype.login = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email !== 'hi@hi.com' && password !== 'userpass')
            return res.send('Invalid email or password');
        req.session = { isLoggedIn: true };
        return res.redirect('/');
    };
    Login.prototype.logout = function (req, res) {
        req.session = undefined;
        return res.redirect('/');
    };
    __decorate([
        (0, decorators_1.Get)('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], Login.prototype, "showloginPage", null);
    __decorate([
        (0, decorators_1.Post)('/login'),
        (0, decorators_1.BodyValidator)('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], Login.prototype, "login", null);
    __decorate([
        (0, decorators_1.Get)('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], Login.prototype, "logout", null);
    Login = __decorate([
        (0, decorators_1.Controller)('/auth')
    ], Login);
    return Login;
}());
