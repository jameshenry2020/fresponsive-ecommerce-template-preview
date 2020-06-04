$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

window.addEventListener('scroll', function(){
    var header=this.document.querySelector('.nav-bg');
    window.scrollY > 0 ? header.style.backgroundColor='#000' : header.style.backgroundColor='transparent';
    
   // header.classList.toggle("mySticky-nav", window.scrollY > 0)
})