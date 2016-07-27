$(document).ready(function () {
    
    $("header .logo").width(screen.width);
    
    /* start screen */
    $(".image-left").animate({"margin-top": 0 }, 2000);
    $(".image-right").delay(1000).animate({"margin-right": 0 }, 2000);
    $(".moto").delay(3000).fadeIn(1000);
    $(".moto p").delay(3000).animate({"margin-left": 0 }, 1000);
    
    /* read more interview */
    $(".read-more").click(function () {
        $(".int-more").toggle("slow");
    });
    
    $(".read-more").mouseover(function () {
        $('.read-more').animate({"width": '350px'}, 500);
    });
    $(".read-more").mouseleave(function () {
        $('.read-more').animate({"width": '300px'}, 500);
    });
    
    /* rownd image effect */
    $(".rownd-img").hover(function () {
        $(".rownd-img div").fadeIn();
    });
    $(".rownd-img").mouseleave(function () {
        $(".rownd-img div").fadeOut();
    });

    
});