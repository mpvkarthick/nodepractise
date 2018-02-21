// import the module
var extModules = require('./moduleCode.js');

// Prints Hello External Module 1 and Hello External Module 2
extModules.externalModule1();
extModules.externalModule2();

//fetch the functions in variables
var extModule1 = extModules.externalModule1;
var extModule2 = extModules.externalModule2;

// Prints Hello External Module 1 and Hello External Module 2
extModule1();
extModule2();
