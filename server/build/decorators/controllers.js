"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
var router = AppRouter_1.AppRouter.getInstance();
function validateBody(keys) {
    return function (req, res, next) {
        if (!req.body)
            return res.status(400).send('Bad request');
        if (keys.length > 0) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (!req.body[key])
                    return res.status(400).send("Must provide ".concat(key));
            }
        }
        next();
    };
}
function Controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.MetaDataKeys.PATH, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetaDataKeys.METHOD, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetaDataKeys.MIDDELWARE, target.prototype, key) ||
                [];
            var requiredProps = Reflect.getMetadata(MetadataKeys_1.MetaDataKeys.VALIDATOR, target.prototype, key) ||
                [];
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path), validateBody(requiredProps)], middlewares, false), [routeHandler], false));
            }
        }
    };
}
exports.Controller = Controller;
