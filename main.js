document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('recipe-name').value;
    const description = document.getElementById('recipe-description').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const steps = document.getElementById('recipe-steps').value;
    const imageInput = document.getElementById('recipe-image');
    const image = imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : '';

    const recipe = {
        name,
        description,
        ingredients,
        steps,
        image
    };

    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    console.log('Recipe added:', recipe); // Debugging line
    console.log('All recipes:', recipes); // Debugging line

    // Show success message
    document.getElementById('success-message').style.display = 'block';

    // Redirect to index.html after a short delay
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);
});
