const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function handlePosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = await response.json();
        
        const sorted = posts.sort((a, b) => b.title.length - a.title.length);
        
        console.log('--- ASYNC: POSTS ---');
        console.log(sorted.slice(0, 3));
    } catch (error) {
        console.error('Async Posts Error:', error);
    }
}

async function handleComments() {
    try {
        const response = await fetch(`${BASE_URL}/comments`);
        const comments = await response.json();

        const sorted = comments.sort((a, b) => a.name.localeCompare(b.name));

        console.log('--- ASYNC: COMMENTS ---');
        console.log(sorted.slice(0, 3));
    } catch (error) {
        console.error('Async Comments Error:', error);
    }
}

async function handleUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = await response.json();

        const formatted = users.map(({ id, name, username, email, phone }) => ({
            id, name, username, email, phone
        }));

        console.log('--- ASYNC: USERS ---');
        console.log(formatted.slice(0, 3));
    } catch (error) {
        console.error('Async Users Error:', error);
    }
}

async function handleTodos() {
    try {
        const response = await fetch(`${BASE_URL}/todos`);
        const todos = await response.json();

        const uncompleted = todos.filter(todo => !todo.completed);

        console.log('--- ASYNC: TODOS ---');
        console.log(uncompleted.slice(0, 3));
    } catch (error) {
        console.error('Async Todos Error:', error);
    }
}

async function main() {
    await handlePosts();
    await handleComments();
    await handleUsers();
    await handleTodos();
}

main();
