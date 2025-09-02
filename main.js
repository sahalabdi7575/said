let burger = document.querySelector(".burger");
let navigationbar = document.querySelector(".navigationbar");
burger.addEventListener("click", () => {
    navigationbar.classList.toggle('active')
});