const BASE_URL = 'https://jsonplaceholder.typicode.com';

function request(endpoint, callback) {
    fetch(`${BASE_URL}${endpoint}`)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

function processPosts() {
    request('/posts', (error, posts) => {
        if (error) {
            console.error('Error fetching posts:', error);
            return;
        }

        const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
        
        console.log('--- CALLBACKS: POSTS (Sorted by Title Length DESC) ---');
        console.log(sortedPosts.slice(0, 3));
    });
}

function processComments() {
    request('/comments', (error, comments) => {
        if (error) {
            console.error('Error fetching comments:', error);
            return;
        }

        const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));

        console.log('--- CALLBACKS: COMMENTS (Sorted by Name ASC) ---');
        console.log(sortedComments.slice(0, 3)); 
    });
}

processPosts();
processComments();
