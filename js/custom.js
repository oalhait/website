// function animationHover(element, animation){
//     element = $(element);
//     element.hover(
//         function() {
//             element.addClass('animated ' + animation);
//         },
//         function(){
//             //wait for animation to finish before removing classes
//             window.setTimeout( function(){
//                 element.removeClass('animated ' + animation);
//             }, 2000);
//         });
// }
$(function() {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('img.circle').on('mouseenter', function() {
    $(this).addClass('animated pulse1').on('mouseleave', function() {
      $(this).removeClass('animated pulse1');
      $(this).addClass('animated pulse2').one(animationEnd,function() {
        $(this).removeClass('animated pulse2');
      });
    });
  });
});
