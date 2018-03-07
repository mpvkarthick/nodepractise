exports = function () {
    console.log("Hello from exports");
}

console.log('Exports -->'+exports);
console.log('Module.Exports -->'+module.exports);

exports.greet = function () {
    console.log("Hello from exports.greet");
}

console.log('Exports.Greet -->'+exports.greet);
console.log('Module.Exports.Greet -->'+module.exports.greet);

module.exports.greet = function () {
    console.log("Hello from module.exports.greet");
}

console.log('Exports.Greet -->'+exports.greet);
console.log('Module.Exports.Greet -->'+module.exports.greet);