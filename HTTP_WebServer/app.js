var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {


    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/app.htm','utf8');
    //html = html.replace('{Message}','Thank you! ')
    // just html.replace('{Message}','Thank you! ') will not replace. Needs to be assigned or sent directly to the output stream
    res.end(html.replace('{Message}','Thank you! '));

}).listen(8081, '127.0.0.1');