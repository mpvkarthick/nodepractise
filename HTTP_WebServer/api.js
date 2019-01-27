var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {


    if (req.url === '/getHtml') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/newapp.htm', 'utf8').pipe(res);
    } else if (req.url === '/getName'){

        res.writeHead(200, { 'Content-Type': 'application/json' });
        var jsonObj = {
            fName: 'Karthik',
            lName: 'Mannepalli'
        };
        res.end(JSON.stringify(jsonObj));
    } else {
        res.writeHead(401,{'Content-Type':'text/plain'})
        res.end('Well that was a Bummer! Just changed to 401');
    }


}).listen(8081, '127.0.0.1');