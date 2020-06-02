var express = require('express');
    app = express();
    router = express.Router();
    bodyParser = require('body-parser');
var db = require('../models');


router.use(bodyParser.json());
router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos)
    })
    .catch(function(err){
        res.send(err)
    })
});

router.post('/', function(req, res){
    console.log(req.body)
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.json(newTodo)
    })
    .catch(function(err){
        res.send(err)
    })
});

module.exports = router;