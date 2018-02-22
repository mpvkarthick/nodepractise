function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

person.prototype.greet = function(){
    console.log('Hello '+this.firstname+' '+this.lastname);
}

var mannepk = new person('Karthik','Mannepalli');
mannepk.greet();


//Not the standard way of doing prtotype
var kmannep = {};
kmannep.__proto__ = mannepk;
kmannep.greet();
console.log(kmannep.firstname);

