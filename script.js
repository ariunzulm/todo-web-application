const myTextElement = document.getElementById("myText");
const myButtonElement = document.getElementById("myButton");
const form = document.getElementById("form");
const taskContainerElement = document.getElementById("task-container");
const myPElement = document.getElementById("myP");
const inputElement = document.getElementById("input");

// ----TO GET INPUT-------------------------
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

// ----TO STORE TASKS-------------------------

const createTask = (task) => {
  return `<div class='task task-container'>
      <input id="input" type="checkbox" ${
        task.isComplete ? "checked" : ""
      } onclick="toggleTasks(${task.id})"/>

      <p id="myP">${task.text}</p>

      <button id="myDeleteButton" onclick="toDeleteTasks(${
        task.id
      })">Delete</button>
    </div>`;
};

// loops all tasks
const renderTask = () => {
  let taskElements = "";

  // sending each element and add on top of it
  tasks.forEach((task) => {
    const taskElement = createTask(task);
    // console.log(taskElement, "taskel");

    taskElements += taskElement;
    taskContainerElement.innerHTML = taskElements;
  });
};

// ----TO DELETE TASKS-----------------------

const toDeleteTasks = (taskId) => {
  const selectedTask = tasks.filter((task) => {
    // hervee task-n id ni taskId-tai tentsuu bvl return false, else true
    if (task.id === taskId) {
      return false;
    } else {
      return true;
    }
  });
  console.log(selectedTask);
  tasks = selectedTask;
  renderTask();
};

myButtonElement.addEventListener("click", addANewTask);

// ----CHECK & LINE THROUGH----------------
// check-dr ni (isComplete) true: false
// when to exectue - onclick with taskId

let completedCount = 0;
const toggleTasks = (taskId) => {
  // console.log(taskId);
  tasks = tasks.map((task) => {
    if (taskId === task.id) {
      return { ...task, isComplete: !task.isComplete };
    } else {
      return task;
    }
  });
  completedCount++;
  console.log(tasks);
};
console.log(completedCount);
// function toggleStrikethrough() {
//   const myPElement.style.textDecoration ="line-through" ;
// }

// ----COUNT CHECKED TASKS----------------
// herveee iscomplete - true bvl count++

// const countSummary = ((task)=>{
// return `<div class="summary-container">
//         <p id="numOfCompleted">0 of 2 tasks completed</p>
//         <p id="clearCompleted" style="color: #ef4444">Clear completed</p>
//       </div>`
// })

// ----------FILTER---------------------------
// const toDeleteTasks = (id) => {
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].id === id) {
//       tasks.splice(i, 1);
//     } else if (id === 0) {
//       tasks.splice(i, 1);
//     }
//   }
//   renderTask();
// };

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
