export interface Sortable {
  length: number;
  compare(i: number, j: number): boolean;
  swap(i: number, j: number): void;
}
