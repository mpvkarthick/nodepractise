var util = require('util');

function person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

}

person.prototype.greet = function () {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

var mannepk = new person('Karthik', 'Mannepalli');
mannepk.greet();


//Not the standard way of doing prtotype
var kmannep = {};
kmannep.__proto__ = mannepk;
kmannep.greet();
console.log(kmannep.firstname);


// Using Call
child.prototype.greet = function () {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function child(fname,lname) {
    this.firstname = fname;
    this.lastname = lname;

}

function IshaMannep() {
    child.call(this,'Isha','Mannepalli');
    this.age = 2;
}

util.inherits(IshaMannep,child);
var kid =  new IshaMannep();
kid.greet();
