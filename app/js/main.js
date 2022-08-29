$(function () {


 
    const lbtn = document.querySelector('.works__btn');
    const nav = document.querySelector('.works-nav');

 
    
    
    document.querySelectorAll('.works__btn').forEach(function(listitem){
      listitem.addEventListener('click', function(){
       this.classList.toggle('works__btn--active');
    //    nav.classList.toggle('works-nav--active');
      });
    });




 
 

    const swiper = new Swiper('.swiper', {
   
        // mousewheel: true,
        keyboard: true,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar

      });

  










});