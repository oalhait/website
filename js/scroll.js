/**
* Subtract the height of the HTML document from the viewport height.
* Divide the scroll position by the viewport height and the document height.
* Multiply that by 100 to convert it to a percentage value.
*/
  
//alert(window.outerHeight);
//alert(document.body.clientHeight);

(function() {

  function Scrollify() {

    var line = document.querySelector(".scroll-line"),
        scrollpos = window.pageYOffset, 
        docheight = document.body.clientHeight, 
        winheight = window.outerHeight,
        scrolled  = ( scrollpos/( docheight-winheight) )*100;

      
     line.style.height = (scrolled + '%');
  }

  window.addEventListener("scroll", Scrollify);

})();