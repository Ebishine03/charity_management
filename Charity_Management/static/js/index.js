

const n=document.querySelector('.navbar');
window.addEventListener('scroll',() =>{
    if(window.scrollY >= 500){
        n.classList.add('navbar-scrolled')
    }
    else if (window.scrollY < 500){
        n.classList.remove('navbar-scrolled')
    }
 })

function toggleSidebar(ref){
  document.getElementById("sidebar").classList.toggle('active');
  // var togglerButton = document.querySelector('.toggle-btn');
  // togglerButton.classList.add('hidden');
}
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  });
    $('#myCarousel .carousel-item').each(function () {
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });
  
    