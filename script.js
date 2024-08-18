const todo = document.getElementById("todo");
const add = document.getElementById("add");
const todos = document.getElementById("todos");
let todoListArray = [];

// Function to add todo task
function addTodo() {
  todo.onchange = function (event) {
    todo.value = event.target.value;
  };

  todoListArray.push(todo.value);

  let todoList = document.createElement("li");
  todoList.textContent = todo.value;

  todos.appendChild(todoList);

  todo.value = "";
}

// Function to remove all todos
function removeAllTodos() {
  const element = document.getElementById("todos");
  console.log(element);
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

add.onclick = function () {
  addTodo();
};

removeAll.onclick = function () {
  removeAllTodos();
};
