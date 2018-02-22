function person(firstname, lastname, greet) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.greet = function () {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}

person.prototype.greetWithPrototype = function () {
    console.log('Greetings from Prototype ' + 'Hello ' + this.firstname + ' ' + this.lastname);
    console.log('Greeting using greet function '+this.greet());
}
var mannepK = new person('Mannepalli', 'Karthik');
mannepK.greet();
mannepK.greetWithPrototype();
console.log(mannepK.__proto__);

