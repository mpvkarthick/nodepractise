function Greet4(){
    this.greeting = 'Hello from Greet4';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greet4;