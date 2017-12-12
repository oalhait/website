


$(document).on("click", "#about-button", function() {
  $("#projects-page").hide();
  $("#design-page").hide();
  $("#photography-page").hide();
  $("#inspiration-page").hide();
  $("#about-page").hide();
  $("#about-page").fadeIn("slow");
});

$(document).on("click", "#projects-button", function() {
  $("#projects-page").hide();
  $("#design-page").hide();
  $("#photography-page").hide();
  $("#inspiration-page").hide();
  $("#about-page").hide();
  $("#projects-page").fadeIn("slow");
});

$(document).on("click", "#design-button", function() {
  $("#projects-page").hide();
  $("#design-page").hide();
  $("#photography-page").hide();
  $("#inspiration-page").hide();
  $("#about-page").hide();
  $("#design-page").fadeIn("slow");
});

$(document).on("click", "#photography-button", function() {

  $("#projects-page").hide();
  $("#design-page").hide();
  $("#photography-page").hide();
  $("#inspiration-page").hide();
  $("#about-page").hide();
  // $("#photography-page").waitForImages().done(function() {
  $("#photography-page").fadeIn("slow");
  // });
});

$(document).on("click", "#inspiration-button", function() {
  var macy = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    margin: 15,
    columns: 3,
  });
  $("#projects-page").hide();
  $("#design-page").hide();
  $("#photography-page").hide();
  $("#inspiration-page").hide();
  $("#about-page").hide();
  $("#inspiration-page").fadeIn("slow");
});

$(document).ready(function() {
  $('.container-gallery').gallery({
    height: 420,
    items: 4,
    singleLine: true,
    thumbHeight: 120
  }); 
  // $("#about-button").trigger("click");
    // require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
  $("#about-button").trigger("click");
  // });

  // $("#projects-page").hide();
  // $("#design-page").hide();
  // $("#design-page").hide();


  // $("#photography-page").hide();
 
  // $("#inspiration-page").hide();
  // $("#about-page").hide();
  // $("#about-page").fadeIn("slow");


});

