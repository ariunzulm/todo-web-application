const myTextElement = document.getElementById("myText");
const myButtonElement = document.getElementById("myButton");
const form = document.getElementById("form");
const taskContainerElement = document.getElementById("task-container");
// ----TO GET INPUT-----------
const tasks = [];
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
const createTask = (task) => {
  return `<div class='task'>
      <input type="checkbox"/>
      <p id="myP">${task.text}</p>
      <button id="myDeleteButton">Delete</button>
    </div>`;
};
const renderTask = () => {
  let taskElements = "";
  // sending each element and add on top of it
  tasks.forEach((task) => {
    const taskEl = createTask(task);
    taskElements += taskEl;
    taskContainerElement.innerHTML = taskElements;
  });
};

// ----TO STORE TASKS----------

myButtonElement.addEventListener("click", addANewTask);
// form.addEventListener("click", (e) => {
//   e.preventDefault();
// });
