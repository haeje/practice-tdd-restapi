const express = require('express');
const app = express();
let users = [
	{ id : 1, name : 'alice'},
	{ id : 2, name : 'bob'},
	{ id : 3, name : 'hanry'},
];

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

app.get('/users', function(req, res){
    let limit = 10;
    if( req.query.limit) limit = Number(req.query.limit);
    
    if( isNaN(limit) ) {
        return res.status(400).end();
    }
    
    res.json(users.slice(0, limit));
})

app.delete('/users/:id', (req, res)=>{
    
    const id = Number(req.params.id);

    if( isNaN(id)) return res.status(400).end();
    users = users.filter( user=>{
        user.id !== id;
    });

    res.status(204).end();
})

app.listen(3000, function(){
    console.log('Server running at 3000 port...');
})


module.exports = app;