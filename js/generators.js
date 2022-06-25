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


// A PRACTICAL EXAMPLE
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
}

const engineeringTeam = {
    testingTeam, //testingTeam: testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
}

function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamMembers = TestingTeamIterator(team.testingTeam);
    yield* testingTeamMembers; // delegation of generator!
}

function* TestingTeamIterator(team){
    yield team.lead;
    yield team.tester;
}

const gen = TeamIterator(engineeringTeam);
const names = [];

for (let name of gen){
    names.push(name);
}

console.log(names);








// TESTING

document.getElementById('target1').innerHTML = 'Hello';
document.getElementById('target2').innerHTML = 'World!';