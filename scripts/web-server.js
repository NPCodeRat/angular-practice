var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
console.log('Starting');
app.use(express.static(rootPath + '/app'));
console.log('root path set');
app.listen(8000);
console.log('Listening on port 8000');