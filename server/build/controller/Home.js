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
exports.Home = void 0;
var decorators_1 = require("../decorators");
function requireAuth(req, res, next) {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.isLoggedIn))
        return res.redirect('/auth/login');
    console.log('Here');
    next();
}
var Home = /** @class */ (function () {
    function Home() {
    }
    Home.prototype.showHomePage = function (req, res) {
        return res.send("\n         <div>\n          <div> You are logged in</div>\n          <a href='/protected'> Protected</a>\n          <br/>\n          <a href='/auth/logout'> Log out</a>\n         </div>\n      ");
    };
    Home.prototype.getProtected = function (req, res) {
        res.send("\n    <div>\n    <div> Welcome to the protected route</div>\n    <a href='/auth/logout'> Log out</a>\n   </div>\n    ");
    };
    __decorate([
        (0, decorators_1.Get)('/'),
        (0, decorators_1.Use)(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], Home.prototype, "showHomePage", null);
    __decorate([
        (0, decorators_1.Get)('/protected'),
        (0, decorators_1.Use)(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], Home.prototype, "getProtected", null);
    Home = __decorate([
        (0, decorators_1.Controller)('')
    ], Home);
    return Home;
}());
exports.Home = Home;
