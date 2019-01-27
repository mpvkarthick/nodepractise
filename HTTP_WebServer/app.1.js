var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {


    res.writeHead(200, { 'Content-Type': 'application/json' });
    var jsonObj = {
        fName:'Karthik',
        lName:'Mannepalli'
    };
    res.end(JSON.stringify(jsonObj));

}).listen(8081, '127.0.0.1');