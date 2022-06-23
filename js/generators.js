// iterating through every element of an array:
// For... Of:

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














// TESTING

document.getElementById('target1').innerHTML = 'Hello';
document.getElementById('target2').innerHTML = 'World!';