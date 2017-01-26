import express from 'express';
import bodyParser from 'body-parser';
import Promise from 'promise';

var app = express();
var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({ extended: true });

app.listen(3000, function() {
  console.log('listening on port 3000');
}
