
/*
    we can come back to this later
*/


// AOS.init({
//  duration: 1200
// });

// var selector = '.nav li';

// $(selector).on('click', function(){
//     $(selector).removeClass('active');
//     $(this).addClass('active');
// });

// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

// $(function() {
//     $(document).on('click', 'a.page-scroll', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// setCarouselHeight('#info_carousel');

// function setCarouselHeight(id)
// {
//     var slideHeight = [];
//     $(id+' .item').each(function()
//     {
//         // add all slide heights to an array
//         slideHeight.push($(this).height());
//     });

//     // find the tallest item
//     max = Math.max.apply(null, slideHeight);

//     // set the slide's height
//     $(id+' .carousel-content').each(function()
//     {
//         $(this).css('height',max+'px');
//     });
// }