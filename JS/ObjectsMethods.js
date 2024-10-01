const person = {
    name : 'Jhon Wick',
    age : 30,
};

// objects.keys
console.log(Object.keys(person));

// objects.values
console.log(Object.values(person));

// objects entries
console.log(Object.entries(person));

// objects assign 
console.log(Object.assign(person));

// objects freeze
const animals = {
    name : 'lion',
    total : 210,
    name2 : 'tiger',
    total2 : 220
};

Object.freeze(animals)

animals.name = 'tiggerrr'

console.log(animals);

// objects seal
const player = {
    name : 'virat',
    runs : 3308,
};

Object.seal(player);

delete player.runs;
player.runs = 4001;

console.log(player.runs);

// Objects has own property 
console.log(player.hasOwnProperty('name'));

// objects create
const proto =  { 
    greet : function() {
        console.log('hello');
    }
}

const newObj = Object.create(proto);
newObj.greet();

// Object.defineProperty
const obj = {};
Object.defineProperty(obj, 'name', { value: "Alice", writable: true });
console.log(obj.name);

// object.defineProperties
Object.defineProperties(obj, {
    name : {value : "alice " },
    age : { value : 25}
});

// object.getprototypeof
console.log(Object.getPrototypeOf(animals));

// object.setprototypeof
console.log(Object.setPrototypeOf(obj,Array.prototype));

// object.is
console.log(Object.is(obj , {}));

// object.isfreeze
console.log(Object.isFrozen(animals));

// object.issleaed
console.log(Object.isSealed());

// object.preventExtensions
Object.preventExtensions(animals);

animals.age = 2;
console.log(animals);

// object.formentries
const a = [["name " , "alice" ] ,["age" , 20]];
console.log(a);

const b = Object.fromEntries(a);
console.log(b);

