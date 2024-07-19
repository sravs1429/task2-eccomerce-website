// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".heading1 ion-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("open");
    });

    const closeIcon = document.querySelector(".menu .close");
    closeIcon.addEventListener("click", function () {
        menu.classList.remove("open");
    });
});
