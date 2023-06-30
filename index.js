let typed = new Typed(".d-text", {
    strings: ["Student.", "Web Designer.", "Coder.", "Web Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay')

function openModal() {
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}