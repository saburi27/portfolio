let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollbar = document.querySelector('.scroll bar');

menu.addEventListener('click',(),=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');

});

window .onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('nav-toggle');
    scrollIndicator();
    
}
function scrollIndicator(){
    let maxHeight = window.document.body.scrollHeight-window.innerHeight;
    let Percentage = ((window.screenY)/maxHeight)*100;
    scrollbar.getElementsByClassName.width = Percentage + '%';
}
