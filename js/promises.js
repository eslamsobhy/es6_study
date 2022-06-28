// (3) states of promises:
// 1. UNRESOLVED (pending)/ waiting for something to finish (default)..
// 2. RESOLVED/THEN-property something finished and it all went ok
// 3. REJECTED/CATCH-property something finished and something went bad

// ------------------------------

// resolve and reject methods are provided for us to use
// whenever we get a rejected promise, we need to handle it or we get an error.


// Create a promise
const promise = new Promise((resolve, reject) => {
    // simulate a very long running process
    setTimeout(() => {
        resolve();
        // reject();
    }, 3000);
});

promise
    // will be executed only when the promise is resolved 
    .then(() => {
        console.log("Finally Finished!");
    })
    .then(() => {
        console.log("That's it!");
    })
    // will be executed only when the promise is rejected
    .catch(() => {
        console.log("Uh oh, something went wrong!");
    })

console.log(promise);








// TESTING
document.getElementById('target1').innerHTML = "Hello";
document.getElementById('target2').innerHTML = "world!";