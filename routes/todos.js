var express = require('express');
    app = express();
    router = express.Router();
    bodyParser = require('body-parser');
var db = require('../models');
var refactor = require('../refactor/todo');


router.use(bodyParser.json());

router.route('/')
 .get(refactor.getTodos)
 .post(refactor.createTodos)

router.route('/:todoId')
 .get(refactor.getTodo)
 .put(refactor.updateTodo)
 .delete(refactor.deleteTodo)

module.exports = router;