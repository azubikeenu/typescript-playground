"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollection_1 = require("./NumberCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumberCollection_1.NumberCollection([-1, 5, 0, 10]);
const characterCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
let sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
sorter = new Sorter_1.Sorter(characterCollection);
sorter.sort();
console.log(sorter.collection);