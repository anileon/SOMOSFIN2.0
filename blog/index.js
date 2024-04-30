window.addEventListener("scroll", () => {
    console.log("Scrolling")
    const headerIntro = document.querySelector("#header");
    if (window.scrollY > 100) {
        headerIntro.classList.add("scrolled");
    } else {
        headerIntro.classList.remove("scrolled");
    }
});

const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});