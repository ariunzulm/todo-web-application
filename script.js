const myTextElement = document.getElementById("myText");
const myButtonElement = document.getElementById("myButton");
const form = document.getElementById("form");
const taskContainerElement = document.getElementById("task-container");
// const myPElement = document.getElementByClassName("myP");
const inputElement = document.getElementById("input");
const filterButtonElement = document.getElementById("filterButton");
const numOfCompletedElement = document.getElementById("numOfCompleted");
const clearCompletedElement = document.getElementById("clearCompleted");

// ----TO GET INPUT-------------------------
let tasks = [];
let taskId = 1;

const addANewTask = () => {
  const input = myTextElement.value;
  if (input === "") {
    alert("Please enter a task!");
    return;
  }
  //   console.log(task);
  const task = {
    text: input,
    isComplete: false,
    id: taskId,
  };

  tasks.push(task);

  taskId++;
  cleanInput();
  renderTask(tasks);
};

const cleanInput = () => {
  myTextElement.value = "";
};

// ----TO STORE TASKS-------------------------

// loops all tasks
const renderTask = (tasks) => {
  let taskElements = "";
  // sending each element and add on top of it
  tasks.forEach((task) => {
    const taskElement = createTask(task);
    // console.log(taskElement, "taskel");

    taskElements += taskElement;
  });
  taskContainerElement.innerHTML = taskElements;
};

const createTask = (task) => {
  return `<div class='task task-container'>
      <input id="input" type="checkbox" ${
        task.isComplete ? "checked" : ""
      } onclick="toggleTasks(${task.id})"/>

      <p class="myP ${task.isComplete && "cross"}"> ${task.text}</p>

      <button id="myDeleteButton" onclick="toDeleteTasks(${
        task.id
      })">Delete</button>
    </div>`;
};

// ----TO DELETE TASKS-----------------------

const toDeleteTasks = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);

  renderTask(tasks);
  updatedCount(tasks);

  alert("Are you sure you want to delete this task?");
  return;
};

myButtonElement.addEventListener("click", addANewTask);

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
  renderTask(tasks);
  updatedCount(tasks);
};
// console.log(completedCount);

// ----FILTER TODOS INTO 3 BUTTONS----------------
const filterTasks = (filterValues) => {
  if (filterValues === "active") {
    const activeTasks = tasks.filter((task) => {
      return task.isComplete === false;
    });
    renderTask(activeTasks);
  }
  if (filterValues === "all") {
    return renderTask(tasks);
  }

  if (filterValues === "completed") {
    const completedTasks = tasks.filter((task) => {
      return task.isComplete === true;
    });
    renderTask(completedTasks);
  }
};

// ----COUNT COMPLETED TASKS----------------
// herveee iscomplete - true bvl count++
// how many tasks === how many of them completed
const updatedCount = (tasks) => {
  const completed = tasks.filter((task) => task.isComplete).length;
  console.log(completed);
  console.log(tasks.length);
  numOfCompletedElement.textContent = `${completed} of ${tasks.length} tasks completed`;
};

// ----CLEAR ALL COMPLETED TASKS----------------
// if clear completed pressed delete all completed tasks
const clearAllCompleted = () => {
  tasks = tasks.filter((task) => !task.isComplete);
  alert("Are you sure you want to clear all completed tasks?");
  
  renderTask();
  updatedCount(tasks);
};
clearCompletedElement.addEventListener("click", clearAllCompleted);

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
