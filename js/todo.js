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

function renderTabs() {
  if (currentTaskType === TASK_TYPES.ALL) {
    allButton.style.color = "blue";
    activeButton.style.color = "";
    completedButton.style.color = "";
  } else if (currentTaskType === TASK_TYPES.ACTIVE) {
    allButton.style.color = "";
    activeButton.style.color = "blue";
    completedButton.style.color = "";
  } else if (currentTaskType === TASK_TYPES.COMPLETED) {
    allButton.style.color = "";
    activeButton.style.color = "";
    completedButton.style.color = "blue";
  }
}

function render() {
  todoContainer.innerHTML = "";
  let filteredTodoList = [];
  if (currentTaskType === TASK_TYPES.ALL) {
    filteredTodoList = clientTodoList;
  } else if (currentTaskType === TASK_TYPES.ACTIVE) {
    filteredTodoList = clientTodoList.filter(
      (item) => item.isCompleted === false
    );
  } else if (currentTaskType === TASK_TYPES.COMPLETED) {
    filteredTodoList = clientTodoList.filter(
      (item) => item.isCompleted === true
    );
  }
  renderTabs();
  filteredTodoList?.forEach((element) => {
    const todoElement = createTotdoElement(element);
    todoContainer.appendChild(todoElement);
  });
}

async function handleAddTodo() {
  const title = inputBox.value;
  if (!title) return;

  const todoData = await todoAPI.createTodo({ title });
  clientTodoList = todoData?.data?.todoList;
  render();
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

      clientTodoList = todoData?.data?.todoList;
      render();
    });
  });

  const deleteElement = document.createElement("button");
  deleteElement.innerText = document.innerText = "Delete";
  deleteElement.addEventListener("click", async (event) => {
    const todoData = await todoAPI.deleteTodo({ id });

    clientTodoList = todoData?.data?.todoList;
    render();
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
  render();
});

activeButton.addEventListener("click", () => {
  currentTaskType = TASK_TYPES.ACTIVE;
  render();
});

completedButton.addEventListener("click", () => {
  currentTaskType = TASK_TYPES.COMPLETED;
  render();
});

window.addEventListener("load", async () => {
  const todoData = await todoAPI.getTodos();
  clientTodoList = todoData?.data?.todoList;
  render();
});
