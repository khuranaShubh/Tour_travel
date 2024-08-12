let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

let formBtn = document.querySelector("#login-btn");
let loginForm= document.querySelector(".login-form-container");

let formClose=document.querySelector("#form-close");

window.onscroll=()=>{
    searchBtn.classList.remove('bx-x-circle');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
};

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('bx-x-circle');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
