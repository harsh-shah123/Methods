// at
const sentence = ' the quick brown fox jumps over the lazy dog. ';
let index = 5;
console.log(sentence.at(index));

// charcodeat
console.log(sentence.charCodeAt(index));

// chatat
console.log(sentence.charAt(index));

// concat
const s1 = "Hello";
const s2 = "world";

console.log(s1.concat("-",s2));

// includes
console.log(sentence.includes('fox'));

// indexof
let indexof = 'jumps'
console.log(sentence.indexOf(indexof));

// lastindexof
console.log(sentence.lastIndexOf('the'));

// match
console.log(sentence.match(/t/g));

// repeat
console.log(sentence.repeat(2));

// replace
console.log(sentence.replace('dog' ,'cat'));

// search
console.log(sentence.search(/s/));

// slice
console.log(sentence.slice(15));

// split
console.log(sentence.split(" "));

// substring
console.log(sentence.substring(3,9));

// tolowercase
console.log(sentence.toLowerCase());

// touppercase
console.log(sentence.toUpperCase());

console.log(sentence)
// trim
console.log(sentence.trim());

// trimstart
console.log(sentence.trimStart());

// trimend
console.log(sentence.trimEnd());

// startwith
console.log(sentence.startsWith('quick'));

// endswith
console.log(sentence.endsWith('dog. '));

// padstart
console.log(sentence.padStart(80  , 0));

// padend
console.log(sentence.padEnd(80 , 0));

// 