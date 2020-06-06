var express = require('express');
    app = express();
    todos = require('./routes/todos');
    db = require('./models');
    bodyParser = require('body-parser');
    
app.use('/api/todos', todos)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('index.html');
});


app.listen(3000 || process.env.PORT, process.env.IP, function(){
    console.log('startingg')
});