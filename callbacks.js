const https = require("https");

function fetchData(url, callback) {
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => callback(null, JSON.parse(data)));
  }).on("error", (err) => callback(err));
}

function getPosts(callback) {
  fetchData("https://jsonplaceholder.typicode.com/posts", (err, posts) => {
    if (err) return callback(err);
    const sorted = posts.sort((a, b) => b.title.length - a.title.length);
    callback(null, sorted);
  });
}

function getComments(callback) {
  fetchData("https://jsonplaceholder.typicode.com/comments", (err, comments) => {
    if (err) return callback(err);
    const sorted = comments.sort((a, b) => a.name.localeCompare(b.name));
    callback(null, sorted);
  });
}

getPosts((err, data) => {
  if (err) console.error(err);
  else console.log("Posts sorted by title length:", data.slice(0, 5));
});

getComments((err, data) => {
  if (err) console.error(err);
  else console.log("Comments sorted by name:", data.slice(0, 5));
});
