var fs =require('fs');

var readable  = fs.createReadStream(__dirname+'/greet.txt',{encoding:'utf8',highWaterMark: 32 * 1024});

var readable1  = fs.createReadStream(__dirname+'/greet.txt',{encoding:'utf8',highWaterMark: 64 * 1024});


var writeable  = fs.createWriteStream(__dirname+'/greetnew.txt');
readable.on('data',function(chunk){
    console.log(chunk);
    writeable.write(chunk);
});

console.log('Hello');