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
  $('img.circle').on('mouseenter', function() {
    $('img.circle').addClass('animated pulse1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {
      $(this).removeClass('animated pulse1');
    });
  });
  $('img.circle').on('mouseleave', function() {
    $('img.circle').addClass('animated pulse2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {
      $(this).removeClass('animated pulse2');
    });
  });
});
