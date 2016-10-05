$(document).ready(function() {
  $('body').scrollspy({ target: "#myNav", offset: 50 });
  // $('.navbar').css('bottom', $('#home').offset().top + $('#home').outerHeight(true) - 50 + 'px');

  $(".img-thumb").hover(function(){
      $(".img-caption").fadeIn();
      $(this).find('img').fadeTo(500, 0.5);
      $('.project-summary').animate({left: '340px'}, 300);
    }, function() {
      $(".img-caption").fadeOut();
      $(this).find('img').fadeTo(500, 1);
      $('.project-summary').animate({left: '0px'}, 300);
    });
});

$('nav a').on('click', function(e) {
  e.preventDefault();
  var targetID = e.currentTarget.id + "Section";

  $('body').animate({
    scrollTop: $('#' + targetID).position().top - 50
  }, 500)
});

var num = $('#aboutSection').offset().top - 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= num) {
        $('#myNav').removeClass('navbar-fixed-bottom');
        $('#myNav').addClass('navbar-fixed-top');
    } 
    else {
         $('#myNav').removeClass('navbar-fixed-top');
         $('#myNav').addClass('navbar-fixed-bottom');
    }
});