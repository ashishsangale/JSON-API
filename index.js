var express = require('express');
    app = express();
    todos = require('./routes/todos');

app.use('/api/todos', todos)

app.get('/', function(req, res){
    res.send("TESTTTT")
});

app.listen(3000 || process.env.PORT, process.env.IP, function(){
    console.log('startingg')
});