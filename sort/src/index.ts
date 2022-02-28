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

numbersCollection.sort();

console.log(numbersCollection.data);

characterCollection.sort();

console.log(characterCollection.data);

linkedList.sort();

linkedList.print();
