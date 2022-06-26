// iterating through every element of an array:
// For... Of:
/*
const colors = ['red', 'green', 'blue', 'yellow'];

for (let color of colors){
    console.log(color);
}

// another example:

const numbers = [1, 2, 3, 4];

let total = 0;
for(let number of numbers){
    total+= number;
}

console.log(total);
*/


// Generator function: is a function that we can enter and exit multiple times.
// The normal function: is a function that we call, run, and return and that's it, any time we call it again,  we're runing the entire function all over again.

/*

The first time we call .next(),
we execute our code inside the genertator function until we got to the 
first yield statement. once we got there we are kind of exited the generator
function with the value yielded.
then we execute any statements after the first .next() call (outside of the generator function)
until we get to the next call of the .next() method,
then we re-enter the generator function with the value passed to the next() method call, if any!
so we resume executing the generator function exactly from the yield statement (where we stopped).

*/

/*
function* shopping(){
    // stuff on the sidewalk

    // wolking down the sidewalk

    // go into the store with cash
    const stuffFromTheStore = yield 'cash';

    // walking to laundry place
    const cleanClothes = yield 'laundry';

    //walking back home
    return [stuffFromTheStore, cleanClothes];
}

// stuff in the store
const gen = shopping(); // calling this function doesn't do anything actually, it's not until we call the next() method!!

console.log(gen.next()); // leaving our house (first step in our story)

// walked into the store
// searching our stuff..
// purchasing our stuff
console.log(gen.next('groceries')); //leaving the store with groceries into the sidewalk

console.log("Hi there!");

console.log(gen.next('clean clothes')); //leaving the laundry place with clean clothes
*/

/*
// another example on why generators
function* colors(){
    yield 'red';
    yield 'green';
    yield 'blue';
}

// creating our generator object
const gen = colors();



// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());



// WE CAN USE GENERATORS TO ITERATE OVER ANY DATA STRUCTURE THAT WE WANT! 

const myColors = [];
for (let color of gen){
    myColors.push(color);
}

console.log(myColors);
*/

/*
// A PRACTICAL EXAMPLE
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam, //testingTeam: testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
}

// Symbol iterator: is a tool that teaches objects how to respond to the For... Of iterator.
// [Symbol.iterator] property will tell the for... of loop how should i iterate over an object.
// in the example here:
// first, we loop through the engineeringTeam object
// to know which properties to consider, we go to the Symbol.iterator property
// then we consider: lead, engineer, manager, and OOH yield*!!!!
// that means that there an object that we need to figure out how to deal with it!
// so we go to that object to look for the Symbol.iterator that will teach us how to deal with that object
// then we consider lead and tester...

const names = [];

for (let name of engineeringTeam){
    names.push(name);
}

console.log(names);
*/

// Practical example that uses: trees, generators, symbol iterator, and recursion...
class Comment{
    constructor(content, children){
        this.content = content;
        this.children = children;
    }
    // the Symbol.iterator is a little bit different
    //  since we are dealing with a class and not object like in the last example. 
    *[Symbol.iterator](){
        yield this.content;
        for (let child of this.children){
            yield* child; //here comes the recursion part!
        }
    }
}


// Array helpers are not working with generators!!!

const children = [
    new Comment('Good comment!', []),
    new Comment('Bad comment!', []),
    new Comment('meh', [])
];

const tree = new Comment('That\'s a great post!', children);


const comments = [];

for (let comment of tree){
    comments.push(comment);
}

console.log(comments);
console.log(tree.children[0].content);





// TESTING

document.getElementById('target1').innerHTML = 'Hello';
document.getElementById('target2').innerHTML = 'World!';