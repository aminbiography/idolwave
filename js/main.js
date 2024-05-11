/*==========

//////////////////////////////////////////////////////
final author start
//////////////////////////////////////////////////////
Final Author @ Mohammad Aminul Islam
//////////////////////////////////////////////////////
final author end
//////////////////////////////////////////////////////

==========*/





/*=========================================
primary author: Theme_Choices
Version: 1.0
design and developed by: Theme_Choices

=========================================*/

(function($) {
    "use strict";
			
    var $window = $(window),
            $body = $('body');
					
		/*=============================
                Smoothscroll js
        ==============================*/
          $('.banner-btn, .banner-btn2').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 1000);
            event.preventDefault();
          });
	
	   /*=============================
                PRELOADER JS
        ==============================*/
		$(window).on('load', function () {
			$("#preloader-loader").delay(200).fadeOut();
		});

	   /*=============================
                LIGHTBOX POPUP
        ==============================*/
        lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
	
	/*=============================
            JQUERY FORM VALIDATION
    ==============================*/
		$("form").validate();

    /*==========================
            Back To Top
    ============================*/
	$(".scrollup").hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	
    /*=============================
            WOW js
    ==============================*/
        new WOW({ mobile: false }).init();
		
    /*=============================
            COUNTER JS
    ==============================*/		
		$('.counter').counterUp({
             delay: 3,
             time: 600
            });
			
	/*=============================
            MOBILE MENU
    ==============================*/	

	$('nav#mobile-nav').meanmenu({
        siteLogo: "<a href='index.html'><img src='images/header-banner/header-logo.png' /></a>"
    });
	
    /*=========================================
                jQuery mixItUp
    =======================================*/  
    $('.gallery-wrapper').mixItUp();
		
     /*===================================
            Owl Carousel Reviews
     ====================================*/
    $(".reviews-list").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

	/*===================================
           Slider Items
     ====================================*/
    $(".carousel-single-item").owlCarousel({
        loop:true,
		center: true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
		autoplayTimeout:2000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		 responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }   
	});
	
     /*===================================
            YOUTUBE VIDEO
     ====================================*/
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
		mute:true,
		startAt:71,
		stopAt:250,
		opacity:1,
    });

          		       
})(jQuery);