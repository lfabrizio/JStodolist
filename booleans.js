// booleans.js


// todolist.addTodo should add objects


var todosList = {
    todos: [],
    //it should have a display todos method
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
 
    
    addTodo: function(todoText) { 
        this.todos.push({
        todoText: todoText,
        completed: false
    });
    this.displayTodos();
    },
   // todolist.changeTodo should change the todo text property 
    
    changeTodo: function(position, todoText) {
        //this.todos[position] = newValue;
        thistodos[position].todoText = todoText;
        this.displayTodos();
    },

    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
},
    toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = todo.completed;
}
};
// todolist.toggleCompleted should change the completed property 