
// Still in Progress

function greetHello() {
    console.log();
}

var addfunctionWrapper = (
    function () {
        // Define Module 1
        var addfunction = function () {
            console.log('Hello ');
        };
        //return addfunction;
    }
);

console.log(addfunctionWrapper);
