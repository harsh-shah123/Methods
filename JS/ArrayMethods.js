// DOM
// Find method +
// JS is async (dont know synchronoues, asynchronous)
// object methods +
// array methods +
// string methods +
// splice method +
// copy object
// deep copy
// shallow copy

// debugging:
// console.log(3 > 2 > 1) +

// Logical:
// Sort array = [10,2,1,4,3], +
// sort this array and do not change main array.




// push
var array = [1, 2, 3];
array.push(4);
console.log(array);

// pop
array.pop();
console.log(array);

// Shift
array.shift();
console.log(array);

// unshift
array.unshift(1);
console.log(array);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
console.log(arr3);

// slice  (returns shallow copy of a portion of an array )
const sliced = array.slice(1, 3);
console.log(sliced);

// splice (adds or remove elements from array)
array.splice(1, 1);
console.log(array);

array.push(4);

// join
console.log(array.join('--'));

// indexof
console.log(array.indexOf(3));

// lastindexof
console.log(array.lastIndexOf(1));

// includes
console.log(array.includes(3));

// foreach
array.forEach((element) => console.log(element));

// map
var a = array.map((x) => x * 2);
console.log(a);

// filter
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);

// reduce
const sum = [1, 2, 3, 4, 5, 6];
const total = sum.reduce((accu, curr) => accu + curr);
console.log(sum, '= ' + total);

// reduceright
var arr1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(arr1.reduceRight((accu, curr) => accu.concat(curr)));

// find
console.log(words.find((word) => word.length > 6));

// findindex;
console.log(words.findIndex((word) => word.length > 6));

// every
console.log(words.every((word) => word.length > 6));

// some
console.log(words.some((word) => word.length > 6));

// sort
let arr = [1, 2, 3, 10, 4, 5];
console.log(arr);

let x = arr.sort((a, b) => a - b);
console.log(x);

// reverse
var array = [1, 2, 3, 4, 5];
var reverted = [...array].reverse()
console.log(reverted);
console.log(array);

// flat
var array = [0, 1, [2, 3, [4, 5, 6, [7, 8, [9]]]]];
console.log(array);
console.log(array.flat(3));
console.log(array.flat(Infinity));

// flatmap
const numm = [1, 2, 3, 4];
console.log(numm.flatMap((num) => [num, num * 2]));

// copywith  (-)
// console.log(numm.copyWithin)

// fill
console.log(numm.fill(0, 2, 4));

// tostring
console.log(numm.toString());

// isarray
console.log(Array.isArray(numm));
console.log(Array.isArray('[]'));
console.log(Array.isArray(new Int16Array([15, 55, 'm'])));

// form
console.log(Array.from('food'));

// of
console.log(Array.of(5));
console.log(Array.of('food', 2, 'bar', 33));

// entries


// keys
let num1 = numm.keys();
for (let key of num1) {
    console.log(key);
}

// values
numm2 = [1, 2, 3, 4, 5, 6]
let num2 = numm2.values();
for (let keys of num2) {
    console.log(keys);
}

// length
console.log(numm2.length);

