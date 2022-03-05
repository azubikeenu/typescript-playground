import 'reflect-metadata';

import { MetaDataKeys } from './MetadataKeys';

export function BodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetaDataKeys.VALIDATOR, keys, target, key);
  };
}
