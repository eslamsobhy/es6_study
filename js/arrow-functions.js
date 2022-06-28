/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*
function add(a,b){
    return a+b;
};

const mult = function(a, b){
    return a+b;
}


const sub = (a, b) =>{
    return a+b;
}


console.log(add(1, 2));
console.log(mult(1, 2));
console.log(sub(1, 2));
*/


//if we have a single expression inside the function:
// const addThreeNums = (a, b, c) => a + b + c;

/*
const multy = (a, b) => {
    return a * b;
}

// console.log(addThreeNums(1, 2, 3));
console.log(multy(5, 2));
*/

/*
//if we have a single argument:

const double6 = number => number * 2;


console.log(double6(3));
*/

/*
var numbers = [1, 2, 3];

let x = numbers.map(number => number * 2);


console.log(x);
*/


/*
let teamz = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function(){
       var self = this;
       return this.members.map(function(member){
          return member + ' is on team ' + self.teamName;
       });
    }
};

let team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function(){
       return this.members.map((member) => {
          return member + ' is on team ' + this.teamName;
       });
    }
};


console.log(teamz.teamSummary());
console.log(team.teamSummary());
*/


/*
function createBookShop (inventory){
    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.reduce(function(total, book){
                return total + book.price;
            }, 0);
        },
        priceForTitle: function(title){
            return this.inventory.find((book) => book.title === title).price;
        },
    };
}


let inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Eloquent JS', price: 15}
];


let bookShop = createBookShop(inventory);


console.log(bookShop.inventoryValue());

console.log(bookShop.priceForTitle('Harry Potter'));
*/


/*
function saveFile(url, data){
    $.ajax({ url, data, method: 'POST'});
}



let url = "https://fileuplaod.com";
let data = {color: 'red'};


saveFile(url, data);
*/


// function makeAjaxRequest(url, method = 'DEFAULT'){
//     /*
//     if(!method){
//         method = 'GET';
//     }
//     */
//     //logic to make a request
//     return method;
// }


// console.log(makeAjaxRequest('google.com'));
// console.log(makeAjaxRequest('google.com', 'POST'));


function User(id){
    this.id = id;
}


function generateId(){
    return Math.floor(Math.random() * 99999);
}


function createAdminUser(user = new User(generateId())){
    user.admin = true;
    return user;
}

let user = {
    name: "eslam",
    admin: false,
    id: generateId()
    
};

console.log(createAdminUser(user));