var fs =require('fs');
var zlib = require('zlib');
var readable  = fs.createReadStream(__dirname+'/greet.txt');

var writeable  = fs.createWriteStream(__dirname+'/greetnew.txt');

var compressed  = fs.createWriteStream(__dirname+'/greetnew.txt.gz');
/*readable.on('data',function(chunk){
    console.log(chunk);
    writeable.write(chunk);
});

This commented piece of code is replaced with the below line

*/

//Every Chunk Read on Readable is written on writeable
readable.pipe(writeable);

// create a stream that transforms the incoming data
var gzip = zlib.createGzip();

//now Every Chunk read using readable, is sent to gzip which compresses the data, which in turn is piped to compressed to be stored

readable.pipe(gzip).pipe(compressed);
