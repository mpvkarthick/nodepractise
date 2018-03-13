var eventEmitter = require('events');
var util = require('util');
var config = require('./config');
var events = config.events;
var familyNames = config.family;

function Greeting() {

    this.firstName = '';
    this.lastName = '';

}
// all the methods of events are now available on Greeting.
util.inherits(Greeting, eventEmitter);

var greetObject = new Greeting();

greetObject.fullName = '';

Greeting.prototype.greet = function (event, name) {
    this.emit(event, name);
}

greetObject.on(events.greetFN, function (name) {
    this.firstName = name;
    console.log('Greet First Name -->' + this.firstName);
});

greetObject.on(events.greetLN, function (name) {

    if (name != null || name != undefined) {
        this.lastName = name;
    }

    console.log('Greet Last Name -->' + this.lastName);
});

greetObject.on(events.greetFullName, function () {
    this.fullName = this.firstName + ' ' + this.lastName;
    console.log('Greet Full Name -->' + this.fullName);
});

greetObject.greet(events.greetFN, familyNames.fatherFN);
greetObject.greet(events.greetLN, familyNames.familyLN);
greetObject.greet(events.greetFullName);

var greetObjectChild = Object.create(greetObject);
greetObjectChild.greet(events.greetFN, familyNames.childFn);
greetObjectChild.greet(events.greetLN);
greetObjectChild.greet(events.greetFullName);






