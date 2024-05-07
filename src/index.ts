
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'; 
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort();
console.log(numbersCollection.data);

// previous interface implementation:
//const sorter = new Sorter(numbersCollection);
//sorter.sort();
//console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('XECPoasbayb')
charactersCollection.sort();
console.log(charactersCollection.data);

// previous interface implementation:
/* const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);*/

const linkedList = new LinkedList;
linkedList.add(300)
linkedList.add(-10)
linkedList.add(-17)
linkedList.add(8)
linkedList.sort();
linkedList.print();

// previous interface implementation:
/*const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();*/



