const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".navbar ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// KLIK DI LUAR MENU
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});
