var express = require('express');
var app = express();
var fs = require('fs');
/*app.listen(8081,'localhost',function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var jsonObj = {
        fName:'Karthik',
        lName:'Mannepalli'
    };
    res.end(JSON.stringify(jsonObj));
});*/
app.get('/getHelloWorld', function (req, res) {
    
    res.send('<html><head/><body><h1>Hello World</h1></body></html>')
});

app.get('/getDetails', function (req, res) {
    
    res.writeHead(200);
    var jsonObj = {
        fName:'Karthik',
        lName:'Mannepalli'
    };
    res.end(JSON.stringify(jsonObj));
});
app.get('/getDetails/:lname', function (req, res) {
    
    res.writeHead(200);
    
    console.log(req.params.lname);
    jsonObj = {
        fName:'Isha',
        lName:req.params.lname
    };
    
    res.end(JSON.stringify(jsonObj));
});

app.get('/getHtmlContentFromFile',function(req,res){
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('../HTTP_WebServer/newapp.htm', 'utf8').pipe(res);
})



app.listen(process.env.PORT || 8081);