var obj = {
    name: 'John Doe',
    greet: function () {
        console.log('Hello ' + this.name);
        //or
        console.log(`Hello  ${this.name}`);
    }
}

var obj2 = {

    greet: function (param1, param2, param3) {
        console.log('Hello using '+param3+' : ' + param1);
        console.log('Hello using '+param3+' : ' + param2);
    }
}


//theFunction.call(valueForThis, arg1, arg2, ...)
obj.greet.call({ name: 'Call - Karthik Mannepalli' });
obj.greet.apply({ name: 'Apply - Karthik Mannepalli' });


//theFunction.apply(valueForThis, arrayOfArgs) 
obj2.greet.apply(undefined,['Karthik', 'Mannepalli','Apply']);
obj2.greet.call(undefined,'Karthik','Mannepalli','Call')