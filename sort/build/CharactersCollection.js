"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(i, j) {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    }
    swap(i, j) {
        const characters = this.data.split('');
        const temp = characters[i];
        characters[i] = characters[j];
        characters[j] = temp;
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
