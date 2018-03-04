
//invoke a function that internally executes iife

function addWrapper(a, b) {

    (
        function add() {

            console.log(a + b);
            console.log('hello');

        }(a, b)
    );
}


addWrapper(1, 2);