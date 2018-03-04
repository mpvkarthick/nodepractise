
// Define Module 1
var externalModule1 = function(){
    console.log("Hello World External Module 1");
}

// Define Module 2
var externalModule2 =  function(){
    console.log("Hello World External Module 2");
}

// Below code makes sure the modules are exported to outside of this script
module.exports = {
    externalModule1, externalModule2
}

/*
If there is only one module then
module.exports = externalModule1;
*/
