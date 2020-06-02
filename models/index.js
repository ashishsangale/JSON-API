var mongoose = require('mongoose');
mongoose.set('debug', true)
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/todo-api',{ useUnifiedTopology: true }, function(){
    console.log('connected');
});

module.exports.Todo = require('./todo');