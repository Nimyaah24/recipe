// Sample credentials
const users = [
    { username: 'admin', password: 'password' },
    { username: 'user1', password: 'password123' },
    { username: 'chef', password: 'recipe2021' }
];

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
}

function hideLoginForm() {
    document.getElementById('login-form').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        hideLoginForm();
        // Redirect to add recipe form
        window.location.href = "add-recipe.html";
    } else {
        alert('Invalid credentials');
    }
}

document.querySelector('a[href="add-recipe.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    showLoginForm();
});

function loadRecipes() {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <img src="${recipe.image}" alt="${recipe.name}" />
        `;
        recipeContainer.appendChild(recipeCard);
    });
    console.log('Recipes loaded:', recipes); // Debugging line
}

// Load recipes on page load
window.onload = function() {
    if (document.getElementById('recipe-container')) {
        loadRecipes();
    }
}
