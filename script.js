// Add event listeners for navigation menu items
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("nav a");
    navItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            // Add your navigation logic here
        });
    });
});