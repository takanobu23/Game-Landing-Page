let bookCloseNav = document.querySelector(".book-close-button");
let menuBar = document.querySelector(".menu-bar");

bookCloseNav.onclick = () => {
  menuBar.classList.toggle("active");
}