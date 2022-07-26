import todoAPI from "./todoAPI";
let clientTodoList = [];
const TASK_TYPES = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

let currentTaskType = TASK_TYPES.ALL;

const addButton = document.getElementById("addButton");
const inputBox = document.getElementById("inputBox");
const allButton = document.getElementById("allButton");
const activeButton = document.getElementById("activeButton");
const completedButton = document.getElementById("completedButton");
const todoContainer = document.getElementById("todoList");

async function handleAddTodo() {
  const title = inputBox.value;
  if (!title) return;

  const todoData = await todoAPI.createTodo({ title });
  todoContainer.innerHTML = "";
  console.log(todoData);
  todoData?.data?.todoList?.forEach((element) => {
    const todoElement = createTotdoElement(element);
    todoContainer.appendChild(todoElement);
  });
  inputBox.value = "";
}

function createTotdoElement({ id, title, isCompleted }) {
  const item = document.createElement("li");
  item.id = id;

  const titleElement = document.createElement("h2");
  titleElement.innerText = title;

  const isCompletedElement = document.createElement("input");
  isCompletedElement.type = "checkbox";
  isCompletedElement.checked = isCompleted;
  isCompletedElement.disabled = true;

  const editElement = document.createElement("button");
  editElement.innerText = "Edit";

  editElement.addEventListener("click", (event) => {
    editElement.innerText = "Save";
    const editBox = document.createElement("input");
    editBox.style.display = "block";
    editBox.value = title;
    titleElement.replaceWith(editBox);
    isCompletedElement.disabled = false;

    editElement.addEventListener("click", async (event) => {
      const todoData = await todoAPI.updateTodo({
        id,
        title: editBox.value,
        isCompleted: isCompletedElement.checked,
      });
      todoContainer.innerHTML = "";
      todoData?.data?.todoList?.forEach((element) => {
        const todoElement = createTotdoElement(element);
        todoContainer.appendChild(todoElement);
      });
    });
  });

  const deleteElement = document.createElement("button");
  deleteElement.innerText = document.innerText = "Delete";
  deleteElement.addEventListener("click", async (event) => {
    const todoData = await todoAPI.deleteTodo({ id });
    todoContainer.innerHTML = "";
    todoData?.data?.todoList?.forEach((element) => {
      const todoElement = createTotdoElement(element);
      todoContainer.appendChild(todoElement);
    });
  });

  item.appendChild(titleElement);
  item.appendChild(isCompletedElement);
  item.appendChild(editElement);
  item.appendChild(deleteElement);

  return item;
}

addButton.addEventListener("click", handleAddTodo);
inputBox.addEventListener("keypress", (event) => {
  if (event.code == "Enter") handleAddTodo();
});

allButton.addEventListener("click", () => {
  currentTaskType = TASK_TYPES.ALL;
});

window.addEventListener("load", async () => {
  const todoData = await todoAPI.getTodos();
  console.log(todoData);
  clientTodoList = todoData?.data?.todoList || [];
  todoData?.data?.todoList?.forEach((element) => {
    const todoElement = createTotdoElement(element);
    todoContainer.appendChild(todoElement);
  });
});
