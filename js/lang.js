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
    });
  });

});
