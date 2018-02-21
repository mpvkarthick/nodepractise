function greetWorld() {
    console.log("Hello World");
}

// functions are first class
function logGreetWorld(fn){
    console.log("Inside Log Greet World");
     fn();
}

function loggreetworld(){
    console.log("inside lower case greet world")
}
// function expression
var greetMe = function(name){
    console.log("Hello "+name);
}

// function expression with no params

var noParamGreetWorld = function(){
    console.log("Hello World No Params");
}


// Prints Hello World
greetWorld();
// Prints Inside Log Greet World and Hello World
logGreetWorld(greetWorld);
// use a function on the fly
// Prings Inside Log Greet World, Hello Greet World
logGreetWorld(function(){
    console.log("Hello Greet World")
})
// Prints inside lower case greet world
loggreetworld();
// Prints Inside Log Greet World and throws an error that fn is not a function
logGreetWorld();
// Prints Hello World, Inside Log Greet World and then throws an error that fn is not a function
logGreetWorld(greetWorld());
// Prints Hello World No Params
noParamGreetWorld();
// Prints Inside Log Greet World, Hello World No Params
logGreetWorld(noParamGreetWorld);
// Prints Hello Karthik
greetMe('Karthik');
// Prints Hello Karthik, Inside Greet World and throws an error  that fn is not a function
logGreetWorld(greetMe('Karthik'));



