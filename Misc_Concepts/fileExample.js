var fs = require('fs');
var greet = fs.readFileSync(__dirname+'/greet.txt');
console.log(greet.toLocaleString());
/*
function readFileSync(path: string | number | Buffer | URL, options?: {
    encoding?: null;
    flag?: string;
}): Buffer (+2 overloads)
*/

var greet = fs.readFile(__dirname+'/greet.txt',function(err, data){
    console.log(data);
});

console.log('Done!')

/*
function readFile(path: string | number | Buffer | URL, options: {
    encoding?: null;
    flag?: string;
}, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void (+3 overloads)
namespace readFile

In the above example the "function(..){} is the callback function. with first parameter as exception object if any, the second one is the buffer value itselg
*/
