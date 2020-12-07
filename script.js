'use strict'
const   d = document;
const   todoControl = d.querySelector('.todo-control'), 
        headerInput = d.querySelector('.header-input'),
        todoList = d.querySelector('.todo-list'),
        todoCompleted = d.querySelector('.todo-completed');

const todoData = [
    {
        value:'Сварить кофе',
        completed: false
    },
    {
        value:'Помыть посуду',
        completed: true
    }
];

const render = function () {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item) {
       const li = document.createElement('li');
       li.classList.add('todo-item');
       li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
                    '<div class="todo-buttons">' + 
                    '<button class="todo-remove"></button>' + 
                    '<button class="todo-complete"></button>' +
                    '</div>';
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
       
        const btnComplete = li.querySelector('.todo-complete');

        btnComplete.addEventListener('click', function() {
            
            item.completed != item.completed;
            console.log(item.completed);
            render();
        });
    });
}

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTodo = {
        value:headerInput.value,
        completed:false
    };
    todoData.push(newTodo);

    render();
});

render();