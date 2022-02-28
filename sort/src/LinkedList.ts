import { Sortable } from './Sortable';
import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    // if there is no head add the new node as the head
    if (!this.head) {
      this.head = node;
      return;
    }
    //let the last node === the first node
    let tail = this.head;
    // while another node exist
    while (tail.next) {
      // move the tail to the last node
      tail = tail.next;
    }
    // when we reach the end of the list , assign the new node to the last node
    tail.next = node;
  }

  get length(): number {
    // if there is no head ,then the length is 0
    if (!this.head) return 0;
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let node: Node | null = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(i: number, j: number): boolean {
    if (!this.head) throw new Error('List is empty');
    return this.at(i).data > this.at(j).data;
  }

  swap(i: number, j: number): void {
    const leftNode = this.at(i);
    const rightNode = this.at(j);
    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) return;
    const values: number[] = [];
    let node: Node | null = this.head;
    while (node) {
      values.push(node.data);
      node = node.next;
    }
    console.log(values);
  }
}
