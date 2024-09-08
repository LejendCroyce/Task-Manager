const todoListContainer = document.querySelector(".todo-list");
const todoForm = document.querySelector(".addTodoContainer");
const input = document.querySelector("#add_todo");
const filterContainers = document.querySelectorAll(".otherButtons");
const tasks = document.querySelectorAll(".main-task");
const allBtn = document.querySelector("#all");
const activeBtn = document.querySelector("#active");
const completedBtn = document.querySelector("#completed");

let todoInputsArray = JSON.parse(localStorage.getItem("todoArray")) ?? [];

function populateTodos() {
  if (todoInputsArray.length === 0) return;

  todoInputsArray.forEach((task) => {
    todoListContainer.innerHTML += `<div class="main-task">
                    <button class="checkboxButton"><img src="checklist.png" alt="" class="checkbox  changeDisplay">
                    </button>
                    <span class="taskContent">${task}</span>

                    <input
                      type="text"
                      for="edit_todo"
                      name="edit_todo"
                      id="edit-todo"
                      class="editUpdate"
                    />

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" class="editButton" cl><path fill="currentColor" class="svg-alternative" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0l-30.1 30l97.9 97.9l30.1-30.1c21.9-21.9 21.9-57.3 0-79.2zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5l167.3-167.4l-98-98zM96 64c-53 0-96 43-96 96v256c0 53 43 96 96 96h256c53 0 96-43 96-96v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/></svg>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="deleteButton">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z" fill="#494C6B"/>
                    </svg>
                </div>`;
  });
  taskCounter();
}

populateTodos();

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = input.value;
  todoInputsArray = [...todoInputsArray, task];
  localStorage.setItem("todoArray", JSON.stringify(todoInputsArray));

  todoListContainer.innerHTML += `<div class="main-task">
                    <button class="checkboxButton"><img src="checklist.png" alt="" class="checkbox  changeDisplay">
                    </button>
                    <span class="taskContent">${task}</span>
                    
                    <input
                      type="text"
                      for="edit_todo"
                      name="edit_todo"
                      id="edit-todo"
                      class="editUpdate"
                    />
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" class="editButton" cl><path fill="currentColor" class="svg-alternative" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0l-30.1 30l97.9 97.9l30.1-30.1c21.9-21.9 21.9-57.3 0-79.2zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5l167.3-167.4l-98-98zM96 64c-53 0-96 43-96 96v256c0 53 43 96 96 96h256c53 0 96-43 96-96v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/></svg>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="deleteButton">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z" fill="#494C6B"/>
                    </svg>
                </div>`;
  input.value = "";
  filterContainers[1].classList.add("blueColor");
  taskCounter();
});

todoListContainer.addEventListener("click", function (event) {
  const mainTaskDiv = event.target.closest(".main-task");
  const spanContent = mainTaskDiv.querySelector(".taskContent");
  const displayPic = mainTaskDiv.querySelector(".checkbox");

  if (event.target.classList.contains("deleteButton")) {
    const deleteSpanContent = spanContent;
    if (mainTaskDiv) {
      todoInputsArray = todoInputsArray.filter((item) => {
        return item !== deleteSpanContent.textContent;
      });
      console.log(todoInputsArray);
      localStorage.setItem("todoArray", JSON.stringify(todoInputsArray));
      mainTaskDiv.remove();
    }
  } else if (
    event.target.classList.contains("checkboxButton") ||
    event.target.classList.contains("checkbox")
  ) {
    if (spanContent && displayPic) {
      spanContent.classList.toggle("line2ru");
      displayPic.classList.toggle("changeDisplay");
    }
  } else if (
    event.target.classList.contains("editButton") ||
    event.target.classList.contains("svg-alternative")
  ) {
    const editInput = mainTaskDiv.querySelector("#edit-todo");
    const editedTaskContent = spanContent.textContent;

    if (editInput.classList.contains("editUpdate")) {
      spanContent.classList.add("editUpdate");
      editInput.classList.remove("editUpdate");
      editInput.focus();
      editInput.value = editedTaskContent;
      editInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          todoInputsArray = todoInputsArray.map((item) => {
            if (item === spanContent.textContent) {
              return editInput.value;
            }

            return item;
          });
          localStorage.setItem("todoArray", JSON.stringify(todoInputsArray));
          spanContent.textContent = editInput.value;
          editInput.classList.add("editUpdate");
          spanContent.classList.remove("editUpdate");
        }
      });
      // } else if (!editInput.classList.contains("editUpdate")) {

      //   });
    }
  }
  taskCounter();
});

filterContainers[1].addEventListener("click", function () {
  for (const filter of filterContainers) {
    filter.classList.remove("blueColor");
  }
  allBtn.classList.add("blueColor");
  const tasks = document.querySelectorAll(".main-task");

  for (const task of tasks) {
    task.classList.remove("edit-display");
  }
  taskCounter();
});
filterContainers[2].addEventListener("click", function () {
  for (const filter of filterContainers) {
    filter.classList.remove("blueColor");
  }
  activeBtn.classList.add("blueColor");
  const tasks = document.querySelectorAll(".main-task");
  const activeTasks = Array.from(tasks);
  for (const task of tasks) {
    task.classList.remove("edit-display");
  }

  const activeTasksFilter = activeTasks.filter((activeTask) => {
    const span = activeTask.querySelector("span");
    return span && span.classList.contains("line2ru");
  });
  for (const active of activeTasksFilter) {
    active.classList.add("edit-display");
  }
  taskCounter();
});

filterContainers[3].addEventListener("click", function () {
  for (const filter of filterContainers) {
    filter.classList.remove("blueColor");
  }
  completedBtn.classList.add("blueColor");
  const tasks = document.querySelectorAll(".main-task");
  for (const task of tasks) {
    task.classList.remove("edit-display");
  }
  const completeTasks = Array.from(tasks);
  const completedTasksFilter = completeTasks.filter((completeTask) => {
    const spanComplete = completeTask.querySelector("span");
    return spanComplete && !spanComplete.classList.contains("line2ru");
  });

  for (const completed of completedTasksFilter) {
    completed.classList.add("edit-display");
  }
  taskCounter();
});

filterContainers[0].addEventListener("click", function () {
  const tasks = document.querySelectorAll(".main-task");
  const activeTasks = Array.from(tasks);
  for (const task of tasks) {
    task.classList.remove("edit-display");
  }

  const activeTasksFilter = activeTasks.filter((activeTask) => {
    const span = activeTask.querySelector("span");
    return span && span.classList.contains("line2ru");
  });
  for (const active of activeTasksFilter) {
    todoInputsArray = todoInputsArray.filter((item) => {
      const span = active.querySelector("span");

      return item !== span.textContent;
    });
    active.remove();
  }

  localStorage.setItem("todoArray", JSON.stringify(todoInputsArray));
  taskCounter();
});

function taskCounter() {
  const tasks = document.querySelectorAll(".main-task");
  const completeTasks = Array.from(tasks);
  const counterFilter = completeTasks.filter((filter) => {
    const spanComplete = filter.querySelector(".taskContent");
    return spanComplete && !spanComplete.classList.contains("line2ru");
  });

  const message = document.querySelector(".item-counter");
  const length = counterFilter.length;
  if (length === 1) {
    message.textContent = `${length} task left`;
  } else if (length === 0) {
    message.textContent = `All tasks Completed, Congrats`;
  } else {
    message.textContent = `${length} tasks left`;
  }
}
