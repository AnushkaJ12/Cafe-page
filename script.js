// Toggle theme
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
});

// Show item info based on menu click
function showInfo(drinkId) {
    document.querySelectorAll('.item').forEach(section => {
        section.classList.remove('show');
    });
    const selected = document.getElementById(drinkId);
    if (selected) {
        selected.classList.add('show');
        selected.scrollIntoView({ behavior: "smooth" });
    }
}

// Initial: show cappuccino section
window.addEventListener("DOMContentLoaded", () => {
    showInfo("cappuccino");
});
