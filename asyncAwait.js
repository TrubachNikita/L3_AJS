const fetch = require("node-fetch");

// /posts – сортировка по убыванию длины title
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts.sort((a, b) => b.title.length - a.title.length);
}

// /comments – сортировка по имени автора
async function getComments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  return comments.sort((a, b) => a.name.localeCompare(b.name));
}

// /users – оставить только нужные поля
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users.map(({ id, name, username, email, phone }) => ({
    id,
    name,
    username,
    email,
    phone,
  }));
}

// /todos – оставить только те, где completed = false
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return todos.filter((todo) => !todo.completed);
}

// Пример вызова
(async () => {
  console.log("Posts:", (await getPosts()).slice(0, 5));
  console.log("Comments:", (await getComments()).slice(0, 5));
  console.log("Users:", await getUsers());
  console.log("Todos (not completed):", (await getTodos()).slice(0, 5));
})();
