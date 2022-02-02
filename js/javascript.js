$(document).ready(function(){
    $(".first").owlCarousel({
        items: 2,
        loop: true,
        margin: 35,
        nav: true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });
    $('.second').owlCarousel({
        loop:true,
        margin:15,
        
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
    })
    $(document).ready(function(){
        $(".third").owlCarousel({
            items:6,
            loop:true,
            margin:10,
            autoplay:true,
        });
      });
});
$(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
      $("header").addClass("stickyy") 
      $(".arrow").show()
    }
    else
    {
        $("header").removeClass("stickyy")
        $(".arrow").hide()
    }
})
