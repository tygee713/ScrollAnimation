$(document).ready(function() {
  $('body').scrollspy({ target: "#myNav", offset: 50 });
})

$('nav a').on('click', function(e) {
  e.preventDefault();
  var targetID = e.currentTarget.id + "Section";

  $('body').animate({
    scrollTop: $('#' + targetID).position().top
  }, 500)
})

