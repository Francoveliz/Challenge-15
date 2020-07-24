const menuBtn = document.querySelector(".menu-btn");
const navBar = document.getElementById("nav-bar");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    /* nav animation */
    navBar.classList.toggle("nav-active");
    /* hamburger button animation */
    if (!menuOpen) {
        menuBtn.classList.add("open");

        menuOpen = true;
    } else {
        /* close hamburger menu */
        menuBtn.classList.remove("open");
        menuOpen = false;

    }
});