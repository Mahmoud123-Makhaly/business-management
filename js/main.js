// .our-solutions owl carousel
$('.top-carousel').owlCarousel({
     loop:true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
     
        1200:{
            items:3
        }
    }
})
$('.bottom-carousel').owlCarousel({
    loop:true,
   nav:true,

   responsive:{
       0:{
           items:2
       },
       
       1200:{
           items:4
       }
   }
})