$(document).ready(function() {
  $('body').scrollspy({ target: "#myNav" });
})

$('nav a').on('click', function(e) {
  e.preventDefault();
  var targetID = e.currentTarget.id + "Section";

  $('body').animate({
    scrollTop: $('#' + targetID).position().top
  }, 500)
})

