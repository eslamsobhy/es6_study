/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


/*
==============================================================================
============================= FOR EACH =======================================
==============================================================================
*/

/*
var colors = ["blue", "red", "green"];
var nums = [1, 2, 3, 11, 12, 13]; //sum = 42
*/
/*
for(var i=0; i<colors.length; i++){
    console.log(colors[i]);
}
*/
/*
function adder(number){
    sum+= number;
}
*/

/*
colors.forEach(function(color){
    console.log(color);
});
*/
/*
var sum =0 ;

nums.forEach(adder);
*/

/*
var sum = 0 ;
nums.forEach(function(num){
    sum+=num;
});
*/
// console.log(sum);



/*
==============================================================================
============================= MAP ============================================
==============================================================================
*/

//THE ITERATIVE WAY
//with that way we needed to create a new array!

/*
var numbers = [1, 2, 3];
var cars = [
    {model: 'FIAT', price: 'Cheap'},
    {model: 'BMW', price: 'Expensive'},
    {model: 'Mercedes', price: 'Very Expensive'}
];
*/

/*
var doubledNumbers = [];

for(var i=0; i<numbers.length; i++){
    doubledNumbers.push(numbers[i]*2);
}
console.log(doubledNumbers);
*/

//THE HELPER METHOD WAY

/*
var doubled = numbers.map(function(number){
    return number*2;
});
console.log(doubled);

var models = cars.map(function(car){
   return car.model;
});

var prices = cars.map(function(car){
    return car.price;
});
console.log(models);
console.log(prices);
*/


/*
==============================================================================
============================= FILTER =========================================
==============================================================================
*/

/*
var products = [
    {name: 'tomato', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'orange', type: 'fruit'}
];

var filteredProducts = [];


//THE ITERATIVE WAY
/*
for(var i=0; i<products.length; i++){
   if(products[i].type === 'fruit'){
       filteredProducts.push(products[i]);
   } 
}
console.log(filteredProducts);
*/
//THE HELPER WAY
/*
var fp = products.filter(function(product){
    return product.type === 'vegetable';
});

console.log(fp);
*/


/*
==============================================================================
============================= FIND ===========================================
==============================================================================
*/

/*
var users = [
    {name: 'Alex'},
    {name: 'Smelga'},
    {name: 'John'},
];


var user = users.find(function(user){
    return user.name === 'Alex';    
});

console.log(user);
    
    
var posts = [
    {id: 1, title: 'new post'},
    {id: 2, title: 'old post'}
];

var comment = {postId: 2, content: 'Great Post!'};

function postForComment (posts, comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    });
}


console.log(postForComment(posts, comment));
*/

/*
==============================================================================
============================= EVERY & SOME====================================
==============================================================================
*/

/*
var computers = [
    {ram: 24, name: 'Apple'},
    {ram: 4, name: 'HP'},
    {ram: 32, name: 'Acer'},
];
    

var computersCan = [];
var computersCanNot = [];

for(var i= 0; i<computers.length; i++){
    if(computers[i].ram > 16){
        computersCan.push(computers[i]);
    }else{
        computersCanNot.push(computers[i]);
    }
}

console.log(computersCan);
console.log('-------------');
console.log(computersCanNot);
console.log('---------------------------------------------------------------');


var can = computers.some(function(computer){ //instead of some write ''every''
    return computer.ram > 16;
});

console.log(can);
console.log('---------------------------------------------------------------');


var names = [
    'Alexaneria',
    'Mathew',
    'Alex'
];


var namesGreaterThanFour = names.every(function(name){
    return name.length > 4;
});

console.log(namesGreaterThanFour);
*/

/*
==============================================================================
=================================== REDUCE====================================
==============================================================================
*/

var numbers = [10, 20, 30];

var s = numbers.reduce(function(sum, number){
    return sum + number;
}, 0);




function getMessage(){
    return `The year is ${new Date().getFullYear()}`;
}

console.log(getMessage());