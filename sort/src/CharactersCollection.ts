import { Sortable } from './Sortable';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length;
  }
  compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }
  swap(i: number, j: number) {
    const characters = this.data.split('');
    const temp = characters[i];
    characters[i] = characters[j];
    characters[j] = temp;
    this.data = characters.join('');
  }
}
