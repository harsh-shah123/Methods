console.log('Hell0 W0rld');
// 2 + 2 = 4


let firstName = 'Shah Harsh';
console.log(firstName);



// Primitive types

// String Literal
let name='Harsh';
console.log(name);

// Number
const interestRate  = 7.6;
console.log(interestRate);

// Boolean
let setApprove  = true;
console.log(setApprove);

// Undefined
let you = undefined;
console.log(you);

// Null
let you1 = null;
console.log(you1);

// Refernce types
// Object
let person = {
    name : 'Keshav jha',
    age : 30 
}

// Dot notation
person.name = 'Jhon Wick'
person['name'] = 'Amma Wick'

console.log(person);

// Array
let selectColors = ['red','purple','green'];
selectColors[2]=1;
console.log(selectColors);
console.log(selectColors.length)

// function
function greet(name , lastName){
    console.log("Hello " +  name + lastName);
}

greet('Jhon ' , "Wick")

// calculate function
function square(number)  {
    return number * number
}

console.log('2 number sqaure ' + square(2));


// Operators
// Arithmetic
 
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // Power 

// Decrement
console.log(--x);

// Increment
console.log(++y);

// Assignment
let a = 5;

console.log( a += 5);
console.log( a -= 5);
console.log( a *= 5);
console.log( a /= 5);
console.log( a %= 5);

// comparison
let b = 10;
console.log( b == 10);
console.log( b >= 10);
console.log( b <= 10);
console.log( b < 10);
console.log( b > 10);
console.log( b === 10);
console.log( b != 10);

// ternary 
let points = 100;

console.log( type = points > 100 ? 'Gold' : 'Sliver');

// logical AND
console.log(false && true);
 
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);   

// logical OR
console.log(true && true);

// logical NOTf

// Logical with Non-Boolean

let userColor = 'red';
let defaulColor = 'blue';

console.log(userColor || defaulColor);

// Bitwise

//00000001
//00000010

console.log(1 | 2);
console.log(2 & 4);

// execrise 

let color1 = 'red';
let color2 = 'blue';

let color3 = color2;
color2 = color1;
color1 = color3;

console.log(color1);
console.log(color2);

// ControlFlow
// Conditional Statement
let hour = 10;

if(hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 18 && hour < 18) {
    console.log('Good Afternoon');
}
else
    console.log('Good Evening');

// Switch Case

let role = 'guest';
switch ( role ) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator');
        break;
    default :
        console.log('Undefined');
}

// loop

// for
for (let i = 0 ; i < 5 ; i++)    
{
    console.log('Hello World!');
}

// while
let i = 0;
while(i <= 5) {
    if ( i % 2 !== 0 )
        {
        console.log(i);
        
    }
    i++;
}

// Do-while
let k = 9 ;
do {
    if (k % 2 !== 0) console.log(k);
    k++;
}while(k <=5 );

// infinite loop
// while(true) {
//     statements
// }

// for in
const person1 = {
    name : 'Jhon',
    age : 40
}
for(let key in person1){

    console.log(key , person1[key]);
}

// for of
const color = ['red' , 'blue' , 'green'];
 for ( let index of color)
    console.log(index);

// Break & Continue
let j = 0;
while ( j <= 10){
        // if (j === 5) break;
        if ( j % 2 == 0){
            j++;
            continue;
            console.log(j);
        }
        console.log(j);
        j++;
}


// exercise
function number (num1 , num2) {
    if ( num1 >= num2 ) {
        console.log(num1 + ' is Big.');
    }
    else if ( num1 <= num2 ) {
        console.log(num2 + ' is Big');
    }
    else {
        console.log('Both are same');
    }
}

number(5,10);

// exercise
function isLandscape   (width , height) {
    if ( width > height ) return true;
    return false;
}

console.log(isLandscape(100 , 40));

// function isLandscape   (width , height) {
//     return (width > height);
// }

// console.log(isLandscape(100,40));

// exercise

// fizzbuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 and 5 => input


const output = fizzBuzz(3);
console.log(output);

// function fizzBuzz(input){
//     if(input % 3 == 0){
//         console.log('Fizz');

//     }
//     else if (input % 5 == 0){
//         console.log('Buzz');
//     }
//     else if ( input % 15 == 0) {
//         console.log('FizzBuzz');
//     }
//     else {
//         console.log('Not a Number');
//     }
// }

function fizzBuzz (input) {
    if (typeof input !== 'number') {
        return "Not a Number";

    }
    if((input % 3 === 0)  &&  (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';
    
    if (input % 5 === 0)
        return 'Buzz';


    return input;
}

// exercise
checkSpeed(80);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;   
    if ( speed < speedLimit + kmPerPoint) {

        console.log('0k');
    }
    else 
    {
        const points = Math.floor((speed - speedLimit) / kmPerPoint );
        if(points > 12)
        {
            console.log('License suspended');
        }
        else {
            console.log('Points ',points);
        }
    }
}

// exercise

showNumbers(10);

function showNumbers(limit) {
    for (let v = 0 ; v <= limit ; v++) {
        const message = (v % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(v,message);
        // if (v %  2 === 0) {
        //     console.log("Even")
        // }
        // else {
        //     console.log("Odd");
        // }
    }
}


// exercise
const array = [0 , null , undefined , '' , 1 , 2 , 3];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for ( let value of array) 
        if (value )
            count++;
        return count;
   
}

// exercise
const movie = {
    title : 'a',
    releaseYear : 2018,
    rating : 4.8,
    director : 'b'
}

showProperties(movie)

function showProperties (obj) {
    for ( let key in obj) {
        if ( typeof obj[key] === 'string') {
            console.log(key,obj[key]);
        }
    }
}

// function showProperties(obj) {
//     for ( let g in obj )
//         if ( g === 'string')
//             console.log(g , g[obj])
// }


// exercise
(sum(10));

function sum(limit) {
    let nom = 0;

    for (let s = 1 ; s <= limit ; s++) {
        if(s % 3 == 0 || s % 5 == 0 ) {
            nom = nom  + s;
            
        }
    }
    console.log(nom);
    
}

// exercise

const marks = [80 , 80 ,50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let  grade = Math.floor ( marks[0] + marks[1] + marks[2] ) / 3 ;

    if ( grade >= 1 &&  grade <=59) {
        return 'F';
    }
    else if (  grade >= 60 && grade <= 69) {
        return 'D';
       
    }
    else if (  grade >= 70 && grade <= 79 ) {
        return 'C';
        
    }
    else if (  grade >= 80 && grade <= 89 ) {
        return 'B';
        
    }
    else if (  grade >= 90 && grade <= 99 ) {
        return 'A';
   
    }  
}

// exercise
showStars(5);

function showStars (rows) {
    for (let r = 1  ; r <= rows ; r++) {
        let pattern = '';
        for (let o = 0; o < r ; o++) 
            pattern += '* ';
        console.log(pattern);
        
    }
    
}

showPrimes(100);

function showPrimes(limit) {
     for (let number = 2 ; number <= limit ; number++ ) {
        if  (isPrime(number)) console.log(number);
     }
   
}

function isPrime(number) {
    for (let factor = 2 ; factor < number; factor++) 
        if (number % factor == 0)
           
            return false;
       
 
    return true;
}