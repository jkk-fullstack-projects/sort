import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'; 
import { LinkedList } from './LinkedList';
import { link } from 'fs';

//const numbersCollection = new NumbersCollection([10, 3, -5, 0])

//const sorter = new Sorter(numbersCollection);
//sorter.sort();
//console.log(numbersCollection.data)

/*const charactersCollection = new CharactersCollection('XECPoaayb')
console.log(charactersCollection)
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);*/

const linkedList = new LinkedList;
linkedList.add(300)
linkedList.add(-10)
linkedList.add(-7)
linkedList.add(8)

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();


