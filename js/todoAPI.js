import { nanoid } from "nanoid";
const TODO_KEY = "todoList";
const DELAY = 1000;

function getTodos() {
  const todoList = JSON.parse(localStorage.getItem(TODO_KEY)) || [];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { todoList } });
    }, DELAY);
  });
}

function createTodo({ title }) {
  if (!title) throw new Error("Title not provided");
  const id = nanoid();
  const todoItem = { id, title, isCompleted: false };
  const prevTodoItems = JSON.parse(localStorage.getItem(TODO_KEY)) || [];
  const newTodoList = [todoItem, ...prevTodoItems];
  localStorage.setItem(TODO_KEY, JSON.stringify(newTodoList));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { todoList: newTodoList } });
    }, DELAY);
  });
}

function deleteTodo({ id }) {
  if (!id) throw new Error("Id not Provided");
  const todoList = JSON.parse(localStorage.getItem(TODO_KEY)) || [];
  const indexToBeDeleted = todoList.findIndex((item) => item.id === id);
  if (indexToBeDeleted === -1) throw new Error("Id does not exist");
  todoList.splice(indexToBeDeleted, 1);
  localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { todoList } });
    }, DELAY);
  });
}

function updateTodo({ id, isCompleted, title }) {
  if (!id) throw new Error("Id not Provided");
  if (typeof isCompleted !== "boolean")
    throw new Error("Invalid Status Provided");
  if (!title) throw new Error("Empty Title Provided");

  const todoList = JSON.parse(localStorage.getItem(TODO_KEY)) || [];
  const indexToBeUpdated = todoList.findIndex((item) => item.id === id);
  if (indexToBeUpdated === -1) throw new Error("Id does not exist");
  const todoItem = { id, title, isCompleted };
  todoList[indexToBeUpdated] = todoItem;
  localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  console.log({ data: { todoList } });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { todoList } });
    }, DELAY);
  });
}

export default { getTodos, createTodo, deleteTodo, updateTodo };
