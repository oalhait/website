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
      $(this).addClass('animated pulse2').on(animationEnd,function() {
        $(this).removeClass('animated pulse2');
      });
    });
  });
  $('img.circle').click(function() {
    if($('body').hasClass('gray')) {
        $('body').addClass('changecolorshome').removeClass('changecolors').removeClass('gray');
        setTimeout(function() {
          $('body').removeClass('changecolorshome');
        }, 1000);
    }
    // if ($('body').hasClass('')) {
    //
    // }
    else {
      $('body').addClass('changecolors').addClass('gray');
    }
    });
});
