// sample IIFE function

var firstName = 'Hello';

var lastName = 'World'

var fullName = (
    function iife(lastName) {
        // global variable last name
        console.log(firstName + ' ' + lastName+' --> UnModified');
        lastName = 'Modified World';
        return firstName + ' ' + lastName;
    }(lastName)
);

// Last Name returned is from inside of function. 
console.log(fullName);

// Last Name declared outside of the function is untouched
console.log(firstName + ' ' + lastName+' --> UnModified');
