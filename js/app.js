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
  $("#photography-page").fadeIn("slow");
});

$(document).on("click", "#inspiration-button", function() {
  $("#projects-page").hide();
  $("#design-page").hide();
  $("#photography-page").hide();
  $("#inspiration-page").hide();
  $("#about-page").hide();
  $("#inspiration-page").fadeIn("slow");
});



$(document).ready(function() {
  // $("#about-button").trigger("click");
});
