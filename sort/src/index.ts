import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumberCollection([-1, 5, 0, 10]);
const characterCollection = new CharactersCollection('Xaayb');
const linkedList = new LinkedList();
linkedList.add(-1);
linkedList.add(-5);
linkedList.add(0);
linkedList.add(10);

let sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(sorter.collection);

sorter = new Sorter(characterCollection);

sorter.sort();

console.log(sorter.collection);

sorter = new Sorter(linkedList);

sorter.sort();

linkedList.print();
