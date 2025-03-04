function toggleDropdown() {
    let box = document.getElementById("beerBox");
    let button = document.querySelector(".dropdown-btn");

    box.classList.toggle("show");
    button.classList.toggle("open");
}
