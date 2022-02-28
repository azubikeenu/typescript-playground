import { Sortable } from './Sortable';
import { Sorter } from './Sorter';

export class NumberCollection extends Sorter implements Sortable {
  get length(): number {
    return this.data.length;
  }
  constructor(public data: number[]) {
    super();
  }
  swap(i: number, j: number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
}
