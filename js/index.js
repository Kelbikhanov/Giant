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



