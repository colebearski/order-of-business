// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listerers
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear task event
  clearBtn.addEventListener("click", clearTasks);
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Please give yourself something to do ;)");
  }
  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create tet node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = "";

  e.preventDefault();
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Is this really done?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear tasks
function clearTasks() {
  // this is one way
  // taskList.innerHTML = "";
  // https://jsperf.com/innerhtml-vs-removechild/191
  // this is another way
  // faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
