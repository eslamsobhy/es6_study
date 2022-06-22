

var expense = {
    type: 'business',
    amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;


//ES6

const {type, amount} = expense;

// ------------------------------------------

var file = {
    name: 'photo1',
    extension: 'jpeg',
    size: 1404040
};

const fileSummary = ( {name, extension, size} ) => {
    // const {name, extension, size} = file;
    return "The file " + name + '.'+ extension + " is of size " + size;
}

const res = fileSummary(file);

// ------------------------------------------

// Destucturing Arrays

const companiess = [
    'Google',
    'Facebook',
    'Uber'
];

const [firstName, ...rest] = companiess;

// ------------------------------------------

const companies = [
    {name: 'Google', loc: 'Mounatain View'},
    {name: 'Facebook', loc: 'Menlo Park'},
    {name: 'Uber', loc: 'San Francisco'}
]

//  if we wanna get the loc of google using es5:
var googleloc = companies[0].loc;

//  using ES6:
const [, , { loc }] = companies;

// ------------------------------------------

const LinkedIn = {
    locations: ['New York', 'London', 'Mountain View']
}

const {locations: [, , locate]} = LinkedIn;

// ------------------------------------------

// imagine that wa have this structure:

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
]

// and we want to transform it to this structure:

/*

[
    {x: 4, y: 5},
    {x: 10, y: 1},
    {x: 0, y: 40}
]

*/

const newStructure = points.map(([ x, y ]) => {
    return { x, y };
});


// -----------
// TESTING
// -----------
document.getElementById('target').innerHTML= locate;
document.getElementById('target2').innerHTML= loc;
console.log(newStructure)

