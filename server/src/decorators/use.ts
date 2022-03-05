import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetaDataKeys } from './MetadataKeys';

export function Use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetaDataKeys.MIDDELWARE, target, key) || [];
    Reflect.defineMetadata(
      MetaDataKeys.MIDDELWARE,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
