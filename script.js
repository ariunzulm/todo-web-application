const myTextElement = document.getElementById("myText");
const myButtonElement = document.getElementById("myButton");
const form = document.getElementById("form");
const taskContainerElement = document.getElementById("task-container");
// const myPElement = document.getElementByClassName("myP");
const inputElement = document.getElementById("input");
const filterButtonElement = document.querySelectorAll("filterButton");
const numOfCompletedElement = document.getElementById("numOfCompleted");
const clearCompletedElement = document.getElementById("clearCompleted");

// ----TO GET INPUT-------------------------
let tasks = [];
let taskId = 1;
if (tasks.length === 0) {
  clearCompletedElement.style.display = "none";
}
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
  updatedCount(tasks);
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
  if (tasks.length !== 0) {
    clearCompletedElement.style.display = "block";
  }
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
// clearcompleted darahad taskContainerElement butsaj garj ireh
// const refreshingP = ()=>{

// }
// taskContainerElement =

// ----TO DELETE TASKS-----------------------

const toDeleteTasks = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);

  renderTask(tasks);
  updatedCount(tasks);

  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) return;
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

// ----FILTER TASKS INTO 3 BUTTONS----------------
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
// how many tasks => how many of them completed
const updatedCount = (tasks) => {
  console.log(tasks, "updated");

  const completed = tasks.filter((task) => task.isComplete).length;
  console.log(completed);
  console.log(tasks.length);
  numOfCompletedElement.textContent = `${completed} of ${tasks.length} tasks completed`;
};

// ----CLEAR ALL COMPLETED TASKS----------------
// if clear completed pressed delete all completed tasks

const clearAllCompleted = () => {
  tasks = tasks.filter((task) => !task.isComplete);
  const confirmClear = confirm(
    "Are you sure you want to clear all completed tasks?"
  );
  if (!confirmClear) return;

  renderTask(tasks);
  updatedCount(tasks);
};
clearCompletedElement.addEventListener("click", clearAllCompleted);

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
