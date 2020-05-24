

$(function() {
    var header = $("#header"),
    introH = $("#main").innerHeight(),
    scroolOffset = $(window).scrollTop();

    /*Header Fixed */
    checkScrool(scroolOffset);

    $(window).on("scroll", function() {
        scroolOffset = $(this).scrollTop();
        checkScrool(scroolOffset);

    });

    function checkScrool(scroolOffset) {
        if (scroolOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth Scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            $this.addClass("active");

            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
    });

    /*Nav Toggle */

    $("#nav__toggle").on('click', function(event) {

        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });



});



/*Slide Reviews */
$(document).ready(function(){

var reviewsSlider = $(".owl-carousel");
 reviewsSlider.owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1,
            dots: true
        },
        995:{
            items:2,
            dots: true
        },
        1235:{
            items:3
        }
    }
});

$('#reviewsNext').click(function() {
    reviewsSlider.trigger('next.owl.carousel');
    })

$('#reviewsPrev').click(function() {
    reviewsSlider.trigger('prev.owl.carousel', [300]);
    })
});


/*Slide Screenshot */
$('.slide').hiSlide();



