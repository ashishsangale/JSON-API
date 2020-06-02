var express = require('express');
    app = express();
    todos = require('./routes/todos');
    db = require('./models');
    bodyParser = require('body-parser');
    
app.use('/api/todos', todos)

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("TESTTTT")
});


app.listen(3000 || process.env.PORT, process.env.IP, function(){
    console.log('startingg')
});