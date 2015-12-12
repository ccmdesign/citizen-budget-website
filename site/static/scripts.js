$(document).ready(function() {
// Smooth Scrolling Function
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });
});


var $overlay = $('#overlay');

console.log('yo');

$('.js-menu-trigger').click( function() {
    $('.b-top-nav').addClass('m-active');
    $overlay.addClass('m-active');
});

$('.b-top-nav a').click( function() {
    $('.m-active').removeClass('m-active');
});

$overlay.click( function() {
    $('.m-active').removeClass('m-active');
});

}); // doc.ready

// $('.e-banner-container').slick({
//     arrows: false,
//     draggable: false,
//     swipeToSlide: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//         {
//             breakpoint: 800,
//             settings: {
//                 draggable: true,
//             }
//         }
//     ]
// });

// $('.m-prev').click(function() {
//     $(this).closest('.e-banner-container').slick('slickPrev');
// });

// $('.m-next').click(function() {
//     $(this).closest('.e-banner-container').slick('slickNext');
// });