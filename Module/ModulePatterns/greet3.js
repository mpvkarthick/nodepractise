function Greet3(){
    this.greeting = 'Hello from Greet3';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greet3();