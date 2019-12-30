const express = require('express');
const app = express();
const user = require('./api/user/index');


function logger(req, res, next){
    console.log('I am logger');
    next();
}

function logger2(req, res, next){
    console.log('I am logger2');
    next();
}

app.use(logger);
app.use(logger2);
app.use('/users', user);


module.exports = app;