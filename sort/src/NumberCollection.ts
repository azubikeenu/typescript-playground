import { Sortable } from './Sortable';

export class NumberCollection implements Sortable {
  get length(): number {
    return this.data.length;
  }
  constructor(public data: number[]) {}
  swap(i: number, j: number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
}
