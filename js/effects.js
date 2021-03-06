$(document).ready(function () {
    var navMenu = 0;
    //$("header .logo").width(screen.width);
    //$("header .menu-button").width(screen.width+10);
    
    /* start screen */
    $(".image-left").delay(1000).animate({"margin-top": 0 }, 2000);
    $(".image-right").animate({"right": 0 }, 2000);
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
        $(".rownd-img span").fadeIn();
    });
    $(".rownd-img").mouseleave(function () {
        $(".rownd-img div").fadeOut();
        $(".rownd-img span").fadeOut();
    });

    
    $("li > a, footer > a").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        
        $('html, body').animate({scrollTop: $(hash).offset().top - 80}, 900, function () {
            window.location.hash = hash;
        });
    });

    $(".mobile-navigation").click(function () {
        if(navMenu === 0) {
            $(".menu").animate({"left": "0px" }, 1000);
            navMenu = 1;
        }
        else {
            $(".menu").animate({"left": "-350px" }, 1000);
            navMenu = 0;
        }
    });  
});