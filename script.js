'use strict'
const   d = document;
const   todoControl = d.querySelector('.todo-control'), 
        headerInput = d.querySelector('.header-input'),
        todoList = d.querySelector('.todo-list'),
        todoCompleted = d.querySelector('.todo-completed');

let todoData = [
    
];

const readLocalStorage = function () {
    todoData = JSON.parse(localStorage.getItem('myData'));
};

const saveLocalStorage = function () {
    let jsonTodoData = JSON.stringify(todoData);

    localStorage.setItem('myData', jsonTodoData);
};

const render = function () {
    readLocalStorage();

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

        btnComplete.addEventListener('click', function () {
            
            item.completed = !item.completed;
            saveLocalStorage();
            render();
        });

        const btnRemove = li.querySelector('.todo-remove');

        btnRemove.addEventListener('click', function () {
           let parent = btnRemove.closest('.todo-item');
           let parentText = parent.textContent;
           todoData.forEach(function(item) {
               if (item.value === parentText) {
                  todoData.splice(todoData.indexOf(item),1);
               }
           }); 
           
           btnRemove.closest('.todo-item').remove();
            
           saveLocalStorage();
        });

        headerInput.value = '';
    });

    
}

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (headerInput.value == '') {
        alert('Пустое значение');
        return;
    }
    const newTodo = {
        value:headerInput.value,
        completed:false
    };
    todoData.push(newTodo);
    
    saveLocalStorage();
    
    render();
});

render();