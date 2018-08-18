$(document).ready(function(){

/**/

  var arrLang = {
    'en' : {
      /* Menu */
      'home' : 'Home',
      'site' : 'Site',
      'contacts' : 'Contacts',

      /*Price section*/
      'h1-price-section' : 'Sites',
      'h2-landing' : 'Landing page',
      'h2-personal' : 'Personal website',

      /*Benefits section*/
      'h2-benefits-section' : 'Why our clients choose us',
      'benefits-quality' : 'Quality',
      'benefits-quality-text' : 'High quality websites',
      'benefits-time' : 'Time',
      'benefits-time-text' : 'Fast development',
      'benefits-price' : 'Price',
      'benefits-price-text' : 'Low price',
      'benefits-support' : 'Support',
      'benefits-support-text' : 'best support for your projects',
      'h3-benefits-section' : 'What included in the price'
    },
    'lt' : {
      /* Menu */
      'home' : 'Namuose',
      'site' : 'Svetainė',
      'contacts' : 'Kontaktai'
    },
    'ru' : {
      /* Menu */
      'home' : 'Главная',
      'site' : 'Сайт',
      'contacts' : 'Контакты',

      /*Price section*/
      'h1-price-section' : 'Сайты',
      'h2-landing' : 'Лендинг',
      'h2-personal' : 'Персональный сайт',

      /*Benefits section*/
      'h2-benefits-section' : 'Почему наши клиенты выбирают нас',
      'benefits-quality' : 'Качество',
      'benefits-quality-text' : 'Высокое качество сайтов',
      'benefits-time' : 'Время',
      'benefits-time-text' : 'Быстрая разработка',
      'benefits-price' : 'Цена',
      'benefits-price-text' : 'Низкая цена',
      'benefits-support' : 'Поддержка',
      'benefits-support-text' : 'Лучшая поддержка для ваших проектов',
      'h3-benefits-section' : 'Что включено в цену'
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

  $.get('https://ipapi.co/country/', function(data){
    var langchecker = JSON.stringify(data, null, 4);
    langchecker = JSON.parse(langchecker);

    if (langchecker == 'RU') {
      if ($('.language button').hasClass('active')) {
        $(".navigation .language button[class*='active']").removeClass('active');
        $("#ru").addClass('active')
      }
      if ($('.language button').hasClass('scrolled')) {
        $(".navigation .language button[class*='scrolled-active']").removeClass('scrolled-active');
        $("#ru").addClass('scrolled-active')
      }
      var lang = $('#ru').attr('id');
      $('.lang').each(function(index, element){
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    }
  });

});
