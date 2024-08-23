const deleteButton = document.querySelectorAll(".deleteButton");
const editButton = document.querySelectorAll(".editButton");
const inputArea = document.querySelector("#add_todo");
const submitButton = document.querySelector("#add_todoButton");
const checkListButton = document.querySelectorAll(".checkboxButton");
const taskArea = document.querySelectorAll(".taskContent");
const goodMark = document.querySelectorAll(".checkbox");
const body = document.querySelector(".todoListContainer");

function completed(index) {
  if (goodMark[index].classList.contains("changeDisplay")) {
    goodMark[index].classList.remove("changeDisplay");
    taskArea[index].classList.add("line2ru");
    console.log("task Completed");
  } else {
    goodMark[index].classList.add("changeDisplay");
    taskArea[index].classList.remove("line2ru");
    console.log("task not completed");
  }
}

function deleted(index) {
  taskArea[index].textContent = "";
}
let editor = "edit";
console.log(editor);
function edited(index) {
  if (editor === "edit") {
    let input = document.createElement("input");
    input.type = "text";
    input.value = taskArea[index].textContent;
    input.id = "edit-input";
    input.classList.add("editInput");
    taskArea[index].replaceWith(input);
    editButton[
      index
    ].innerHTML = `<g fill="currentColor"><path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/><path d="m8.354 10.354l7-7a.5.5 0 0 0-.708-.708L8 9.293L5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/></g>`;
    editor = "save";
    console.log(editor);
  } else if (editor === "save") {
    let saver = document.querySelector(".editInput");
    console.log(saver);
    let editedText = document.createElement("span");
    editedText.textContent = saver.value;
    editedText.classList.add("taskContent");
    saver.replaceWith(editedText);
    console.log(taskArea);
    editButton[
      index
    ].innerHTML = `<path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0l-30.1 30l97.9 97.9l30.1-30.1c21.9-21.9 21.9-57.3 0-79.2zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5l167.3-167.4l-98-98zM96 64c-53 0-96 43-96 96v256c0 53 43 96 96 96h256c53 0 96-43 96-96v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/>`;
    editor = "edit";
    console.log(editor);
  }
}

for (const [index, button] of checkListButton.entries()) {
  button.addEventListener("click", () => completed(index));
}
for (const [index, delete_button] of deleteButton.entries()) {
  delete_button.addEventListener("click", () => deleted(index));
}
for (const [index, edit_button] of editButton.entries()) {
  edit_button.addEventListener("click", () => edited(index));
}
