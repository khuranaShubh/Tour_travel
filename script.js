let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('bx-x-circle');
    searchBar.classList.toggle('active');
});
