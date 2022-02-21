"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head)
            return 0;
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let node = this.head;
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
    compare(i, j) {
        if (!this.head)
            throw new Error('List is empty');
        return this.at(i).data > this.at(j).data;
    }
    swap(i, j) {
        const leftNode = this.at(i);
        const rightNode = this.at(j);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head)
            return;
        const values = [];
        let node = this.head;
        while (node) {
            values.push(node.data);
            node = node.next;
        }
        console.log(values);
    }
}
exports.LinkedList = LinkedList;
