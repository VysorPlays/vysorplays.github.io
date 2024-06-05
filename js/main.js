/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


 'use strict';


 $(window).on('load', function() {
     /*------------------
         Preloder
     --------------------*/
     $(".loader").fadeOut(); 
     $("#preloder").delay(400).fadeOut("slow");
 
 });
 
 (function($) {
 
     /*------------------
         Navigation
     --------------------*/
     $('.nav-switch').on('click', function(event) {
         $('.main-menu').slideToggle(400);
         event.preventDefault();
     });
 
 
     /*------------------
         Background Set
     --------------------*/
     $('.set-bg').each(function() {
         var bg = $(this).data('setbg');
         $(this).css('background-image', 'url(' + bg + ')');
     });
 
 
     /*------------------
         Hero Slider
     --------------------*/
     $('.hero-slider').owlCarousel({
         loop: true,
         nav: false,
         dots: true,
         mouseDrag: false,
         animateOut: 'fadeOut',
         animateIn: 'fadeIn',
         items: 1,
         autoplay: true
     });
     var dot = $('.hero-slider .owl-dot');
     dot.each(function() {
         var index = $(this).index() + 1;
         if(index < 10){
             $(this).html('0').append(index);
             $(this).append('<span></span>');
         }else{
             $(this).html(index);
             $(this).append('<span></span>');
         }
     });
 
 
     /*------------------
         News Ticker
     --------------------*/
     $('.news-ticker').marquee({
         duration: 10000,
         //gap in pixels between the tickers
         //gap: 200,
         delayBeforeStart: 0,
         direction: 'left',
         duplicated: true
     });
 
 })(jQuery);
 
 /*-----------
  Load More
 --------------*/
//  $(function () {
//     $("#loadItem").slice(0, 2).show();
//     $("#loadMore").on('click', function (e) {
//         e.preventDefault();
//         $("#loadItem:hidden").slice(0, 2).slideDown();
//         if ($("#loadItem:hidden").length == 0) {
//             $("#load").fadeOut('slow');
//         }
//         $('html,body').animate({
//             scrollTop: $(this).offset().top
//         }, 1500);
//     });
// });

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});