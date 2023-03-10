import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
// const numbersCollection = new NumbersCollection([100000, 1.5, -5, 1.2, 3]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("XaZRc95bCSKK12345");
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(200);
linkedList.add(-6);
linkedList.add(5);
linkedList.add(0);
linkedList.sort();
linkedList.print();