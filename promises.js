const BASE_URL = 'https://jsonplaceholder.typicode.com';

function processUsers() {
    fetch(`${BASE_URL}/users`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(users => {
            const result = users.map(({ id, name, username, email, phone }) => ({
                id,
                name,
                username,
                email,
                phone
            }));
            
            console.log('--- PROMISES: USERS (Filtered Fields) ---');
            console.log(result.slice(0, 3));
        })
        .catch(error => console.error('Users Error:', error));
}

function processTodos() {
    fetch(`${BASE_URL}/todos`)
        .then(response => response.json())
        .then(todos => {
            const uncompleted = todos.filter(todo => !todo.completed);

            console.log('--- PROMISES: TODOS (Only Uncompleted) ---');
            console.log(uncompleted.slice(0, 3));
        })
        .catch(error => console.error('Todos Error:', error));
}

processUsers();
processTodos();
