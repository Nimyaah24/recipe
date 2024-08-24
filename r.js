document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('recipe-name').value;
    var age = document.getElementById('recipe-description').value;
    var gender = document.getElementById('recipe-ingredients').value;
    var studentClass = document.getElementById('recipe-steps').value;
    var image = document.getElementById('recipe-image').files[0];

    if (image) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('recipe-image').src = e.target.result;
        }
        reader.readAsDataURL(image);
    }

    document.getElementById('displayName').textContent = name;
    document.getElementById('displayAge').textContent = age;
    document.getElementById('displayGender').textContent = gender;
    document.getElementById('displayClass').textContent = studentClass;

    document.getElementById('studentInfo').style.display = 'block';
});
