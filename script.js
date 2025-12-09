const myTextElement = document.getElementById("myText");
const myButtonElement = document.getElementById("myButton");
const form = document.getElementById("form");
const taskContainerElement = document.getElementById("task-container");
const myPElement = d

// ----TO GET INPUT-----------
let tasks = [];
let taskId = 0;

const addANewTask = () => {
  const input = myTextElement.value;

  //   console.log(task);
  const task = {
    text: input,
    isComplete: false,
    id: taskId,
  };
  tasks.push(task);
  console.log(tasks);

  taskId++;
  cleanInput();
  renderTask();
};

const cleanInput = () => {
  myTextElement.value = "";
};

// ----TO STORE TASKS----------
const createTask = (task) => {
  return `<div class='task task-container'>
      <input type="checkbox"/>
      <p id="myP">${task.text}</p>
      <button id="myDeleteButton" onclick="toDeleteTasks(${task.id})">Delete</button>
    </div>`;
};
const renderTask = () => {
  let taskElements = "";

  // sending each element and add on top of it
  tasks.forEach((task) => {
    const taskEl = createTask(task);
    console.log(taskEl, "taskel");

    taskElements += taskEl;
    taskContainerElement.innerHTML = taskElements;
  });
};
myButtonElement.addEventListener("click", addANewTask);

// ----TO DELETE TASKS----------
const toDeleteTasks = (id) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks.splice(i, 1);
    }
  }
  renderTask();
};

function lineThrough(){

}

// ----

// ----------FILTER----------------------
// const deleteTodoId = 1;

// const todos = [
//   { id: 1, text: "hool" },
//   { id: 2, text: "dleguur oroh" },
// ];

// const toDelete = todos.filter((todo) => {
//   if (todo.id === deleteTodoId) {
//     return true;
//   } else {
//     return false;
//   }
// hervee todo-iin id ni deleteTodoId tai tentsuu bol return true
// esvel return false
// });
// console.log(toDelete);

// [{ id: 1, text: "hool" }];
// ------------------------------------
// form.addEventListener("click", (e) => {
//   e.preventDefault();
// });
