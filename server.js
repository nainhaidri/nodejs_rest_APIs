const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.port || 3000;


const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

mc.connect();

app.listen(port, "0.0.0.0");

//app.listen()

console.log('API server started on : ' + port);

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


var routes = require('./app/routes/approutes');
routes(app);