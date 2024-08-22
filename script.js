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

  localStorage.setItem(localStorage.length, todo.value);

  todo.value = "";

  window.location.reload();
}

function showTodos() {
  let todoList;

  if (localStorage.length == 0) {
    todoList = document.createElement("h3");
    todoList.textContent = "No todo here.";
    todos.appendChild(todoList);
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      todoList = document.createElement("li");
      todoList.id = `todo${i}`;
      todoList.classList.add("todoList");
      todoList.innerHTML = `<span id="todoContent${i}" class="todoContent">${localStorage.getItem(
        i
      )}</span><div class="edit-delete"><button class="edit-button" id="edit-btn-${i}" onclick="editTodo(${i})">Edit</button><button class="delete" onclick="singleDelete(${i})">Delete</button></div>`;
      todos.appendChild(todoList);
    }
  }
}

function editTodo(key) {
  const todoContent = document.getElementById(`todoContent${key}`);
  const editState = todoContent.contentEditable = true;
  todoContent.classList.add("editable");

  const editBtn = document.getElementById(`edit-btn-${key}`);
  editBtn.textContent = "Done";

  editBtn.addEventListener("click", function () {
  if (editState) {
      localStorage.setItem(key, todoContent.textContent);
      todoContent.contentEditable = false;
      todoContent.classList.remove("editable");
      editBtn.textContent = "Edit";
      window.location.reload();
    }
  });
}

function singleDelete(key) {
  localStorage.removeItem(key);
  window.location.reload();
}

// Function to remove all todos
function removeAllTodos() {
  if (confirm("Are you sure? ")) {
    localStorage.clear();
    window.location.reload();
  }
}

add.onclick = function () {
  addTodo();
};

removeAll.onclick = function () {
  removeAllTodos();
};

// Function Calls
showTodos();
