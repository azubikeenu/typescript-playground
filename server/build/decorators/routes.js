"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Patch = exports.Put = exports.Post = exports.Get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetaDataKeys.METHOD, method, target, key);
        };
    };
}
exports.Get = routeBinder(Methods_1.Methods.GET);
exports.Post = routeBinder(Methods_1.Methods.POST);
exports.Put = routeBinder(Methods_1.Methods.PUT);
exports.Patch = routeBinder(Methods_1.Methods.PATCH);
exports.Delete = routeBinder(Methods_1.Methods.DELETE);
