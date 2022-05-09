let header = document.querySelector(".container");

window.onscroll = () => {

    navbar.classList.remove("active");
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}