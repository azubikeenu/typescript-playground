import 'reflect-metadata';
import { AppRouter } from '../AppRouter';
import { Methods } from './Methods';
import { MetaDataKeys } from './MetadataKeys';
import { NextFunction, RequestHandler, Request, Response } from 'express';

const router = AppRouter.getInstance();

function validateBody(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) return res.status(400).send('Bad request');
    if (keys.length > 0) {
      for (let key of keys) {
        if (!req.body[key]) return res.status(400).send(`Must provide ${key}`);
      }
    }

    next();
  };
}

export function Controller(routePrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetaDataKeys.PATH,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetaDataKeys.METHOD,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetaDataKeys.MIDDELWARE, target.prototype, key) ||
        [];
      const requiredProps =
        Reflect.getMetadata(MetaDataKeys.VALIDATOR, target.prototype, key) ||
        [];

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          validateBody(requiredProps),
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}
