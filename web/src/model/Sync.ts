import axios, { AxiosPromise } from 'axios';
import { Sync } from './Model';

export interface HasId {
  id?: number;
}
export class SyncApi<T extends HasId> implements Sync<T> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  };

  save = (data: T): AxiosPromise => {
    const { id } = data;
    if (id) return axios.put(`${this.rootUrl}/${id}`, data);
    return axios.post(this.rootUrl, data);
  };
}
