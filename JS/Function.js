// function declaration
walk();

function walk() {
    console.log('walk');
}

// function expression
const run = function() {
    console.log('run');
}

let move = run;
run();
move();

function sum() {
    let total = 0;
    for  (let value of arguments)
        total += value;
    return total;
    
}
console.log(sum(1,2,3,4,5,18));

// rest args
function sum1(discount , ...price) {
    const total = price.reduce((a, b) => a + b);
    return total * ( 1 - discount );
}

console.log(sum1(0.1,20,30));

// default args
function interest ( principal , rate=3.5 , year) {
    return principal * rate / 100 * year;
}

console.log(interest(10000, undefined, 5))

// getter and setter 
const person = {
    firstName : 'harsh',
    lastName : 'shah',
    get fullName () {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];   
    }
};

try {
    // Code that may throw an error
    let result = riskyOperation();
    consosale.log(result);
} catch (error) {
    // This block runs if an error occurs in the try block
    console.error("An error occurred:", error.message);
}


person.fullName = 'Jhon Wick';
console.log(person.fullName);

// exercise

console.log(sum(1,2,3,4,5));

function sum (...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a,b) => a + b);
}

