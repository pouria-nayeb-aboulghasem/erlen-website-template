const navToggle = document.querySelector(".nav__toggle"),
    navClose = document.querySelector(".nav__close"),
    navMenu = document.querySelector(".nav__menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("active");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
}