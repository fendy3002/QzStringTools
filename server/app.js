var express = require('express');
var app = express();
import fs from 'fs';

app.use('/public', express.static(__dirname + '/public'));

var serveSPA = function (req, res) {
    fs.readFile('server/views/index.html',function (err, data){
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
};

app.get('/', serveSPA);
app.get('/config', serveSPA);
app.get('/about', serveSPA);

app.get('/readme', function(req, res) {
    fs.readFile(__dirname + '/../README.md', function (err, data){
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/plain','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});


app.listen(3000, function () {
  console.log('String tools app listening on port 3000!')
});
