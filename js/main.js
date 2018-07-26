$(document).ready(function(){

  $('.sandwich').click(function(){
    if ($('.navigation-list-wrapper').hasClass('active')) {
      $('.navigation-list-wrapper').removeClass('active').css('display','none');
      if (window.pageYOffset < 300) {
        $('.sandwich').children().css('background-color', 'black');
      }
    } else {
      $('.navigation-list-wrapper').addClass('active').css('display','block');
      $('.sandwich').css('z-index', 1).children().css('background-color', 'white');
    }
  });

  $(window).scroll(function(){
    if (window.pageYOffset > 300) {
      $('.logo').css('height','60px').attr('src','../img/solopov-white.svg');
      $('header').css('height','60px').css('background-color','black');
      $('.navigation .language button').css('color','white').css('border-color','white');
      $('.sandwich').children().css('background-color','white');
      $('.language button').addClass('scroll-active');
    } else {
      $('.logo').attr('src','../img/solopov.svg').css('height','100px');
      $('header').css('height','100px').css('background-color','rgba(0,0,0,.2)');
      $('.navigation .language button').css('color','black').css('border-color','black');
      $('.sandwich').children().css('background-color','black');
      $('.language button').removeClass('scroll-active');
    }
  });

});
