import fruitArray from './fruits';
import {choice, remove} from './helpers';

let fruit = choice(fruitArray);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let result = remove(fruitArray, fruit);

console.log(`I'm sorry, we're all out. We have ${result.length} left.`);