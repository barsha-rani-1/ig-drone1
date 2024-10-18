document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name-designation strong');
    const designationElement = document.querySelector('.name-designation p');

    // You can dynamically set these values
    nameElement.textContent = "John Doe";
    designationElement.textContent = "(Manager)";
});
