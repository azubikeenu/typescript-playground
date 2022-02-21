import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumberCollection([-1, 5, 0, 10]);
const characterCollection = new CharactersCollection('Xaayb');
let sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(sorter.collection);

sorter = new Sorter(characterCollection);

sorter.sort();

console.log(sorter.collection);
