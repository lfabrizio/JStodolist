// version10 is delete button and event listeners


// version01
 var todoList = {
 todos: [],
 
 // should have function to add todo text v02
 
 // should have a display, add, change and delte method v03
 addTodo: function(todoText) {
   this.todos.push({
     todoText: todoText,
     completed: false
   });
 },
 
 
 // todolist.changeTodo should change the todo text property version02
 changeTodo: function(position, todoText) {
   this.todos[position].todoText = todoText;
 },
 
  // todolist.changeTodo should have a function to delete the todo text property version02
 
 deleteTodo: function(position) {
   this.todos.splice(position, 1);
 },
 
 toggleCompleted: function(position) {
   var todo = this.todos[position];
   todo.completed = !todo.completed;
 },
 toggleAll: function() {
   var totalTodos = this.todos.length;
   var completedTodos = 0;

   // Get number of completed todos.
   for (var i = 0; i < totalTodos; i++) {
     if (this.todos[i].completed === true) {
       completedTodos++;
     }
   }
// booleans
   // Case 1: If everything’s true, make everything false.
   if (completedTodos === totalTodos) {
     for (var i = 0; i < totalTodos; i++) {
       this.todos[i].completed = false;
     }
   // Case 2: Otherwise, make everything true.
   } else {
     for (var i = 0; i < totalTodos; i++) {
       this.todos[i].completed = true;
     }
   }
 }
};

var handlers = {
 addTodo: function() {
   var addTodoTextInput = document.getElementById('addTodoTextInput');
   todoList.addTodo(addTodoTextInput.value);
   addTodoTextInput.value = '';
   view.displayTodos();
 },
 changeTodo: function() {
   var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
   var changeTodoTextInput = document.getElementById('changeTodoTextInput');
   todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
   changeTodoPositionInput.value = '';
   changeTodoTextInput.value = '';
   view.displayTodos();
 },
 //  Version 10:
 deleteTodo: function(position) {
   todoList.deleteTodo(position);
   view.displayTodos();
 },
 toggleCompleted: function() {
   var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
   todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
   toggleCompletedPositionInput.value = '';
   view.displayTodos();
 },
 toggleAll: function() {
   todoList.toggleAll();
   view.displayTodos();
 }
};

var view = {
 displayTodos: function() {
   var todosUl = document.querySelector('ul');
   todosUl.innerHTML = '';
   for (var i = 0; i < todoList.todos.length; i++) {
     var todoLi = document.createElement('li');
     var todo = todoList.todos[i];
     var todoTextWithCompletion = '';

     if (todo.completed === true) {
       todoTextWithCompletion = '(x) ' + todo.todoText;
     } else {
       todoTextWithCompletion = '( ) ' + todo.todoText;
     }

     todoLi.id = i;
     todoLi.textContent = todoTextWithCompletion;
     todoLi.appendChild(this.createDeleteButton());
     todosUl.appendChild(todoLi);
   }
 },

 createDeleteButton: function() {
   var deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete';
   deleteButton.className = 'deleteButton';
   return deleteButton;
 },
 setUpEventListeners: function() {
   var todosUl = document.querySelector('ul');
   todosUl.addEventListener('click', function(event) {
     var elementClicked = event.target;
     if (elementClicked.className === 'deleteButton') {
       handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
     }
   });
 }
};