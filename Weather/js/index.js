$.getJSON('http://ip-api.com/json', function(ipAddress) {

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + ipAddress.lat + '&lon=' + ipAddress.lon + '&appid=3695e5e886e4a1b016cf201000ec807e', function(forecast) {
    var celsius = forecast.main.temp - 273.15;
    var fahrenheit = celsius * 1.8 + 32;
    var backgroundPic = forecast.weather[0].icon.substring(0, 2);

    var $body = $('body');
    if (backgroundPic === '01' || backgroundPic === '02' || backgroundPic === '03') {
      $body.css('background-image', 'url("https://images.unsplash.com/reserve/r7LctaT0SOu1JcXIkTjC_AaronGuzman_Clouds_IMG_7335.jpg?q=80&fm=jpg&s=d262b0d4178eaddf09d05110f8ed3e85")');
    } else if (backgroundPic === '04') {
      $body.css('background-image', 'url("https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?q=80&fm=jpg&s=46441177a47450220f89e7ddc122b723")');
    } else if (backgroundPic === '09') {
      $body.css('background-image', 'url("https://images.unsplash.com/photo-1417008914239-59b898b49382?q=80&fm=jpg&s=1ba958b4a89112d5abd517bd0dd6c185")');
    } else if (backgroundPic === '10') {
      $body.css('background-image', 'url("https://images.unsplash.com/photo-1430932670556-d0002ea51b33?q=80&fm=jpg&s=8a96081b174e74ada407e1a381efbbd4")');
    } else if (backgroundPic === '11') {
      $body.css('background-image', 'url("https://images.unsplash.com/16/unsplash_5252b10dacd20_1.JPG?q=80&fm=jpg&s=d75af66bc685e7cabbbd7dbc3be699a9")');
    } else if (backgroundPic === '13') {
      $body.css('background-image', 'url("https://images.unsplash.com/43/WrZ1xIWJQY6UB8MEbWTd_IMG_9088_edt.jpg?q=80&fm=jpg&s=822a1dfacdde42231add50fe8550ce87")');
    } else if (backgroundPic === '50') {
      $body.css('background-image', 'url("https://images.unsplash.com/photo-1428200698796-38743f953a43?q=80&fm=jpg&s=ce2aa88f64ed5dfdad0d04c23c5a2753")');
    } else {
      $body.css('background-image', 'url("http://www.splitshire.com/wp-content/uploads/2015/02/SplitShire-3935-1800x977-970x500.jpg")');
    }
    $('.information').text('Hello ' + ipAddress.city + ' from Seattle.');
    $('.btn-check').on('click', function() {
      $('.btn-check').hide();
      $('.btn-celsius').show();
      $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + fahrenheit.toFixed(0) + ' degrees Fahrenheit.');
    });
    $('.btn-celsius').on('click', function() {
      $('.btn-celsius').hide();
      $('.btn-fahrenheit').show();
      $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + celsius.toFixed(0) + ' degrees Celsius.');
    });
    $('.btn-fahrenheit').on('click', function() {
      $('.btn-fahrenheit').hide();
      $('.btn-celsius').show();
      $('.information').text('The current temperature in ' + ipAddress.city + ' is ' + fahrenheit.toFixed(0) + ' degrees Fahrenheit.');
    });
  
  });
});