let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");


window.onscroll=()=>{
    searchBtn.classList.remove('bx-x-circle');
    searchBar.classList.remove('active');
}


searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('bx-x-circle');
    searchBar.classList.toggle('active');
});
