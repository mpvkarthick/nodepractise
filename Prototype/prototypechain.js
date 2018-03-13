var person = {
    firstName: '',
    lastName: '',
    greet: function () {
        console.log('Hello ' + this.firstName + ' ' + this.lastName);
    }
}


//var karthikPerson = Object.create(person);
var karthikPerson = {};
karthikPerson.__proto__ = person;
karthikPerson.firstName = 'Karthik';
karthikPerson.lastName = 'Mannepalli';

var ishaPerson = Object.create(karthikPerson);
ishaPerson.firstName = 'Isha';

person.greet();
karthikPerson.greet();
ishaPerson.greet();

