var greeting = {
    name: 'hello world'
}

var greetVar = 'name'

console.log(greeting.name);

console.log(greeting['name']);

console.log(greeting[greetVar]);

var arr = [];

arr.push(function (i) {
    console.log('item '+i);
});

arr.push(function (i) {
    console.log('item '+i);

});

arr.push(function (i) {
    console.log('item '+i);

});

var  i = 1;
arr.forEach(function (item) {
    item(i++);
});



