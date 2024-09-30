let numbers = [3, 4];

// end 
numbers.push(5, 6);

// start
numbers.unshift(1, 2);

// middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

// finding Elements
const number = [1, 2, 3, 1, 4, 5];

console.log(number.indexOf(1));
console.log(number.lastIndexOf(1));

console.log(number.indexOf(1) !== -1);
console.log(numbers.includes(1));

const courses = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    }
];

// const course = courses.findIndex(function(course)
//     {
//         return course.name === 'xyz';
//         return course.name === 'a';
//     });

// console.log(course);

// Arrow function
const course = courses.find(course => course.name === 'a');
console.log(course);


const cars = [1, 2, 3, 4, 5, 6, 7];

// end
const last = cars.pop();

// start
const satrt = cars.shift();

const middle = cars.splice(2, 2)

console.log(cars);
console.log(last);

// removing all the elements
let remove = [1, 2, 3, 4];
let another = remove;

// solution-1
remove = [];

// solution-2
remove.length = 0;

// solution-3
remove.splice(0, remove.length);

// solution-4
while (remove.length > 0)
    remove.pop();

console.log(remove);
console.log(another);

// combining and slicing
let first = [1, 2];
let second = [4, 6];

// let combine = first.concat(second);
// console.log(combine);

// let slice = combine.slice(1,2);
// console.log(slice);

// spread operator
const combine = [...first, 'a', ...second, 'b'];

const copy = [...combine];
console.log(copy);

const num1 = [1, 2, 3];

for (let numb in num1) {
    console.log(numb);
}

num1.forEach((numb, index) => console.log(index, numb));

// join
const aura = [1, 2, 3];
const joined = aura.join(';;;');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combinedd = parts.join('-');
console.log(combinedd);

// sort
const sort = [2, 3, 1];
sort.sort();

console.log(sort);

sort.reverse();
console.log(sort);

const name = [
    {
        id: 1, name: "node.js"
    },
    {
        id: 2, name: "javascript"
    }
];

name.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(name);


// every method
const numbo1 = [1, 2, 4];
const allPosition = numbo1.every(function (value) {
    return value >= 0;
});

console.log(allPosition);

// some method
const atLeastonePositive = numbo1.some(function (value) {
    return value >= 0;
});

console.log(atLeastonePositive);

// filter
const filteri = [1, -1, 2, 3, 4];
const filtered = filteri.filter(nk => nk >= 0);

console.log(filtered);

// mapping
const nnuumm = [1, -1, 2, 3, 3];
// const items = filtered.map(n => '<li>' + n + '</li>') ;

// const html = '<ul>' + items.join(' ') + '</ul>';

// console.log(html);

const items = nnuumm
    .filter(n => n >= 0)
    .map(n => ({ value: n }));

console.log(items);

const sum = nnuumm.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum)

// exercise

function arrayFromrange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    console.log(output);
}
arrayFromrange(-10, -4);

// exercise

const array1 = [1, 2, 3, 4, 5];

function includes1(array, searchElement) {
    for (let item of array) {
        

        if (item == searchElement) {
            console.log('True');
        }
    return false;    
    }
}

includes1(array1, 3);

// exercise
// const numm1 =[1,2,3,4,5,1,1];
// const output1 =  except(numm1,[1,2]);
// console.log(output1);

// function except (array , execuld) {
    
//     for ( let item of array) {
//         for (let elemets of execuld)
//         if(item === elemets){
//             elemets.pop(item);

//         }
//     }
//     console.log(output1);
// }

// console.log(output1);

const numm1 = [1,2,3,4,5,6,1,1,1,3,5];

const output1 = expect(numm1 , [2,3,5]);

console.log(output1);

function expect(array , execuld) {
    const output1 = [];
    for (let elements of array) 
        if (!execuld.includes(elements))
            output1.push(elements);
    return output1;
}   

// exercise
const nummm1 = [1,2,3,4];
const output2 = move(nummm1 , 0 ,5);
console.log(output2);

function move(array , index , offset) {
    const position = index + offset ;
    if (position >= array.length || position < 0) {
        console.error('Invalid ');
        return;
    }
    const output2 = [...array];
    const elements = output2.splice(index ,1 )[0];
    output2.splice(position,0, elements);
    return output2;
}

const number11 = [1,2,3,4,5,1,2];
const count = countOccurrences(number11, 2);
console.log(count);

function countOccurrences (array , searchElement) {
    let count = 0;
    for (let element of array) 
        if (element === searchElement)
            count++;
    return count;
}


const max =  getMax([1,2,3,49,50]);
console.log(max);

function getMax (aarg) {
    if (aarg === 0) return undefined;
//     let max = aarg[0];
//     for (let k =1 ; k < aarg.length ; k++) 
//         if (aarg[k] > max)
//             max = aarg[k];
//     return max;
    return  aarg.reduce((a,b) => (a>b) ? a : b);

}

// exercise
const movies = [
    { title : 'a' , year : 2018 , rating : 4.5 } ,
    { title : 'b' , year : 2018 , rating : 4.7 } ,
    { title : 'c' , year : 2018 , rating : 3 } ,  
    { title : 'd' , year : 2017 , rating : 4.5 } ,  
]

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating  )
    .reverse()
    .map(m => m.title)

console.log(titles);

