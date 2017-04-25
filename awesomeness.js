$(document).ready(function() {
   
    $(window).scroll(function() {
        $("#home").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow - 1000) {
                $("#top-nav").fadeIn(1100);
            } else if (imagePos > topOfWindow - 1000) {
                $("#top-nav").fadeOut(1100);
            } 
        })
        
    })
    
});