$(function() {
    var $overlay = $('#overlay');

    // Smooth Scrolling Function
    $('a[href*=#]:not([href=#])').click(function() {
        var url1 = location.pathname.replace(/^\//, ''),
            url2 = this.pathname.replace(/^\//, ''),
            $tgt = $(this.hash);

        if (url1 == url2 || location.hostname == this.hostname) {
            $tgt = $tgt.length ? $tgt : $('[name=' + this.hash.slice(1) +']');

            if ($tgt.length) {
                $('html, body').animate({scrollTop: $tgt.offset().top}, 1000);

                return false;
            }
        }
    });

    $('.js-menu-trigger').click(function() {
        if (!$('.b-top-nav').hasClass('m-active')) {
            $('.b-top-nav').addClass('m-active');
            $overlay.addClass('m-active');

        } else {
            $('.b-top-nav').removeClass('m-active');
            $overlay.removeClass('m-active');
        }
    });

    $('.b-top-nav a').click(function() {
        $('.m-active').removeClass('m-active');
    });

    $('.e-overview-item').hover(function() {
        $(this).toggleClass('m-active');
        // $overlay.addClass('m-active');
    });

    $overlay.click(function() {
        $('.m-active').removeClass('m-active');
    });

    $('.e-testimonial-list').slick({
        draggable: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    draggable: true,
                }
            }
        ]
    });

    $('.m-prev').click(function() {
        $(this).closest('.e-testimonial-item').slick('slickPrev');
    });

    $('.m-next').click(function() {
        $(this).closest('.e-testimonial-item').slick('slickNext');
    });

    if ($('form').data('required')) {
        $('input[required]').each(function() {
            this.oninvalid = function(e) {
                e.target.setCustomValidity('');

                if (!e.target.validity.valid) {
                    e.target.setCustomValidity($('form').data('required'));
                }
            };

            this.oninput = function(e) {
                e.target.setCustomValidity('');
            };
        });
    }
}); // doc.ready
