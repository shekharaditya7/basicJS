let idCount = 0;

function createTotdoItem(title) {
  idCount++;
  const item = document.createElement("li");
  item.id = idCount;

  const titleElement = document.createElement("h2");
  titleElement.innerText = title;

  const isCompletedElement = document.createElement("input");
  isCompletedElement.type = "checkbox";

  const editElement = document.createElement("button");
  editElement.innerText = "Edit";

  editElement.addEventListener("click", (event) => {
    editElement.innerText = "Save";
    const editBox = document.createElement("input");
    editBox.style.display = "block";
    editBox.value = title;
    titleElement.replaceWith(editBox);

    editElement.addEventListener("click", (event) => {
      const newTitle = editBox.value;
      const newTitleElement = document.createElement("h2");
      newTitleElement.innerText = newTitle;
      editElement.innerText = "Edit";
      editBox.replaceWith(newTitleElement);
    });
  });

  const deleteElement = document.createElement("button");
  deleteElement.innerText = document.innerText = "Delete";
  deleteElement.addEventListener("click", (event) => {
    todoContainer.removeChild(item);
  });

  item.appendChild(titleElement);
  item.appendChild(isCompletedElement);
  item.appendChild(editElement);
  item.appendChild(deleteElement);

  return item;
}

const addButton = document.getElementById("addButton");
const inputBox = document.getElementById("inputBox");
const todoContainer = document.getElementById("todoList");

const handleAddTodo = (event) => {
  todoTitle = inputBox.value;
  if (!todoTitle) return;

  const todoItem = createTotdoItem(todoTitle);
  inputBox.value = "";
  todoContainer.appendChild(todoItem);
};

addButton.addEventListener("click", handleAddTodo);
inputBox.addEventListener("keypress", (event) => {
  if (event.code == "Enter") handleAddTodo(event);
});
