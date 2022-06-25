$(document).ready(function(){
    $('.slide').slick(
        {
           
            infinite:true,
            slidesToShow:4,
            slideToScroll:1,
            speed:3,
            responsive:[
              {
                breakpoint:1000,
                settings:{
                  infinite:true,
                  slidesToShow:3,
                  slideToScroll:1,
                  speed:300,
                 
                }
              },
              {
                breakpoint:600,
                settings:{
                  infinite:true,
                  slidesToShow:2,
                  slideToScroll:1,
                  speed:300,
                 
                }
              },
              {
                breakpoint:400,
                settings:{
                  infinite:true,
                  slidesToShow:1,
                  slideToScroll:1,
                  speed:300,
                 
                }
              },
            ]

        }
    )
})