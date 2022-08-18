$(document).ready(function(){
   $('.slider').slick({
      slidesToShow:3,
      autoplay:true,
      responsive:[{
            breakpoint:1100,
            settings:{
               slidesToShow:2,
            }
         },{
            breakpoint:741,
            settings:{
               slidesToShow:1,
            }
         }]
   });
});

$(document)