let users = [
	{ id : 1, name : 'alice'},
	{ id : 2, name : 'bob'},
	{ id : 3, name : 'hanry'},
];

function search(req, res){
    let limit = 10;
    if( req.query.limit) limit = Number(req.query.limit);
    
    if( isNaN(limit) ) {
        return res.status(400).end();
    }
    
    res.json(users.slice(0, limit));
}

function del(req, res){
    
    const id = Number(req.params.id);

    if( isNaN(id)) return res.status(400).end();
    users = users.filter( user=>{
        user.id !== id;
    });

    res.status(204).end();
}

module.exports = {
    search, del
}