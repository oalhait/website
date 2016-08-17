var ref = $(".subtitle");
$(ref).click(function() {
  if(!$(this).hasClass("isTitle")) {
    if($(this).hasClass("notTitle")) {
      $(this).removeClass("notTitle");
    }
    $(this).addClass("isTitle");
    $(this).siblings().fadeTo(600,0);
  }
  else {
    $(this).addClass("notTitle");
    $(this).removeClass("isTitle");
    $(this).siblings().fadeIn();
    $(this).siblings().fadeTo(600,100);

  }
});
