$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodo)
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo()
        }
    })
    $('.list').on('click', 'li', function(){
        updateTodo($(this));
    })
    $('.list').on('click', 'span', function(event){
        event.stopPropagation();
        deleteTodo($(this).parent());
    })
    
});

function addTodo(todos){
    todos.forEach(function(todo){
        appendTodo(todo)
    });
};

function appendTodo(todo){
    var newTodo = $('<li class="task">'+ todo.name + '<span>x</span>' + '</li>')
        newTodo.data('id', todo._id);
        newTodo.data('completed', todo.completed);
        if(todo.completed){
            newTodo.addClass('done')
        }
        $('.list').append(newTodo)
};

function createTodo(){
    var userInp = $('#todoInput').val()
    console.log(userInp)
    $.post('/api/todos', {name:userInp})
    .then(function(newTodo){
        $('#todoInput').val('')
        appendTodo(newTodo)
    })
    .catch(function(err){
        console.log(err)
    })
}

function deleteTodo(todo){
    var todoId = todo.data('id')
    var deleteUrl = '/api/todos/' + todoId
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(data){
        todo.remove()
    })
    .catch(function(err){
        console.log(err)
    })
}

function updateTodo(todo){
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed')
    var updateData = {completed: isDone}
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodos){
        todo.toggleClass('done');
        todo.data('completed', isDone);
    })
}