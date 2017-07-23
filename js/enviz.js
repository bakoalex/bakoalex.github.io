$(".galery-item-overlay").hover(
  function() {
    $(this).addClass('.galery-item-description');
  },
  function() {
    $(this).removeClass('.galery-item-description');
  }
)

var parallaxItemHeight = $('.parallax').outerHeight();
function parallax() {
  var scrolled = $(window).scrollTop();
  $('parallax-bg').css('height', (parallaxItemHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
  parallax();
});
