$(document).ready(function(){
  // $.getJSON("http://freegeoip.net/json/", function(data) {
  //   var country_code = data.country_code;
  //   var country = data.country_name;
  //   var ip = data.ip;
  //   var time_zone = data.time_zone;
  //   var latitude = data.latitude;
  //   var longitude = data.longitude;
  //
  //   alert("Country Code: " + country_code);
  //   alert("Country Name: " + country);
  //   alert("IP: " + ip);
  //   alert("Time Zone: " + time_zone);
  //   alert("Latitude: " + latitude);
  //   alert("Longitude: " + longitude);
  // });
  //
  // $.get("http://freegeoip.net/json/", function (response) {
  //   $("#ip").html("IP: " + response.ip);
  //   $("#address").html("Location: " + response.city + ", " + response.region_name);
  //   $("#details").html(JSON.stringify(response, null, 4));
  // }, "jsonp");

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
