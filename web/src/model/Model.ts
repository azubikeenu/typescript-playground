import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';
import { HasId } from './Sync';

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];

  set(value: T): void;

  getAll(): T;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;

  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') throw new Error(`Cannot fetch without an id `);
    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save(): void {
    const data = this.attributes.getAll();
    this.sync
      .save(data)
      .then((response: AxiosResponse) => {
        this.trigger('save');
      })
      .catch(() => this.trigger('error'));
  }
}
