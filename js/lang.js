$(document).ready(function(){
  var arrLang = {
    'en' : {
      'home' : 'Home',
      'site' : 'Site',
      'contacts' : 'Contacts'
    },
    'lt' : {
      'home' : 'Namuose',
      'site' : 'Svetainė',
      'contacts' : 'Kontaktai'
    },
    'ru' : {
      'home' : 'Главная',
      'site' : 'Сайт',
      'contacts' : 'Контакты'
    }
  };

  $(function(){
    $('.translate').click(function(){
      var lang = $(this).attr('id');

      $('.lang').each(function(index, element){
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
      if ($('.language button').hasClass('active') || $('.language button').hasClass('scrolled-active')) {
        $('.language button').removeClass('active').removeClass('scrolled-active');
        $(this).addClass('active');
      }
      if (window.pageYOffset > 300) {
        $('.language button').removeClass('active').removeClass('scrolled-active');
        $(this).addClass('scrolled-active');
      }
    });
  });

});
