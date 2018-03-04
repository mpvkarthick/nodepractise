var greeting = 'Hello from Greet3';

function Greet3(){
    
    this.greet = function(){
        console.log(greeting);
    }
}

module.exports = new Greet3();