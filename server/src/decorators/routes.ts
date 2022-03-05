import 'reflect-metadata';
import { Methods } from './Methods';
import { MetaDataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouteHandlerDesc extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDesc) {
      Reflect.defineMetadata(MetaDataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.METHOD, method, target, key);
    };
  };
}

export const Get = routeBinder(Methods.GET);
export const Post = routeBinder(Methods.POST);
export const Put = routeBinder(Methods.PUT);
export const Patch = routeBinder(Methods.PATCH);
export const Delete = routeBinder(Methods.DELETE);
