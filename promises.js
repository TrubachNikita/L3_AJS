const fetch = require("node-fetch");

// /users – оставить только нужные поля
function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) =>
      users.map(({ id, name, username, email, phone }) => ({
        id,
        name,
        username,
        email,
        phone,
      }))
    );
}

// /todos – оставить только те, где completed = false
function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((todos) => todos.filter((todo) => !todo.completed));
}

// Пример вызова
getUsers().then((data) => console.log("Users:", data));
getTodos().then((data) =>
  console.log("Todos (not completed):", data.slice(0, 5))
);
