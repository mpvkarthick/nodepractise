
// Pattern 1 - Overriding exports with function;
var greet1 = require('./greet1');
greet1();

//Pattern 2
var greet2 = require('./greet2').greet2;
greet2();

var greet3 = require('./greet3');
greet3.greet();
// updating the exposed variable;
greet3.greeting = 'Hello from Modified Greet 3';

// This will fetch cached version of greet 3{Full Path}. Hence the variable modified in previous line will be displayed.
var greet3b = require('./greet3');
greet3b.greet();

var greetSub = require('./submodule/submodulemain');
greetSub.greet();

var greet4 = require('./greet4');
var greet4Obj =  new greet4();
greet4Obj.greet();

// Example of Revealing Module Pattern i.e. reveal only the required  variable/functions;
var greet5 = require('./greet5');
var greet5Obj =  new greet5();
greet5Obj.greet();
// will display undefined since the variable greeting is not exposed.
console.log(greet5Obj.greeting);




