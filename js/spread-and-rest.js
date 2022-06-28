/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


//the rest operator
/*
function addNums(...numbers){
    return numbers.reduce(function(sum, num){
        return sum + num;
    }, 0);
}

console.log(addNums(1, 2, 3, 4, 5))
*/



//the spread operator
/*
let defaultColors = ["green", "red"];
let favoriteColors = ['orange', 'yellow'];
let otherColors = ['purple', 'blue'];

let colors = defaultColors.concat(favoriteColors);
console.log(colors);

////////////////////////////
let newColors = ['white', 'black', ...otherColors, ...defaultColors, ...favoriteColors];
console.log(newColors);

function validateShoppingList(...items){
    if(items.indexOf('milk') < 0){
        return ['milk', ...items]
    }else{
        return items;
    }
}

console.log(validateShoppingList('eggs', 'milk', 'papers', 'vegetables'));
*/

/*
let mathLibrary ={
    calcProduct(...rest){
        console.log("pls use the multiply method instead");
        return this.multiply(...rest);
    },
    multiply(a, b){
        return a * b;
    }
};
*/