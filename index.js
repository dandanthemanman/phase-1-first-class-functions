// obj: take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

function receivesAFunction(callback) {
    callback();
}


// obj: take no arguments
// return a named function

function returnsANamedFunction () {
    return function namedFunction() {
        console.log(
            "I'm a named function"
        )
    }
}
  
// obj: take no arguments
// return an anonymous function

function returnsAnAnonymousFunction () {
    return ()=> console.log("I'm an anonymous function")
}