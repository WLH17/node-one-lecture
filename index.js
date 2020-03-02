const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/data', function(req, res){
    res.status(200).send('Here is some data')
})

app.get('/api/greeting/:id', function(req, res){
    // console.log(req.params.id);
    res.status(200).send(req.params.id);
})

app.get('/api/user', function(req, res){
    // console.log(req.query)
    res.status(200).send(req.query.name)
})

app.post('/api/user', function(req, res){
    console.log(req.body);
})

//localhost:3333/api/user?name=matt

app.listen(3333, () => console.log('Server running on 3333'))