$(document).ready(function(){
  // owlcarousel
  $("#slider_small").owlCarousel({
    items:3,
    loop:true,
    margin:10,
    navText:["<img src=img/a22.png>","<img src=img/a11.png>"],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

});
