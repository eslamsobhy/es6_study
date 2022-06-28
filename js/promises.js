// (3) states of promises:
// 1. UNRESOLVED (pending)/ waiting for something to finish (default)..
// 2. RESOLVED/THEN-property something finished and it all went ok
// 3. REJECTED/CATCH-property something finished and something went bad

// ------------------------------

// resolve and reject methods are provided for us to use
// whenever we get a rejected promise, we need to handle it or we get an error.

/*

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
*/

// THE LECTURER IS NOT THE BIGGEST FAN OF FETCH
// HE RECOMMENDS USING XIOS OR...
// LOOK FOR THAT!!

const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
    // one of the big complaints of fetch is that the data argument here 
    // is not actually the result object (object of data)
    // instead it is the response that we get back from the server
   
    /*
    .then((data) => {
        console.log(data);
    })*/  

    // So to actually get hands on the data, you have to call a method on it
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => {
        console.log("here wee go");
    })
    .then(() => {
        console.log("come on babby!");
    })
    .catch(() => {
        console.log("uh oh, something went wrong!!");
    })






// TESTING
document.getElementById('target1').innerHTML = "Hello";
document.getElementById('target2').innerHTML = "world!";