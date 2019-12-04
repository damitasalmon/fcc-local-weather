$(document).ready(function() {
  $("h1 .lead").lettering();
  //Globals
  var lat;
  var lon;
  var tempSwap = false;
  var cTemp;
  var fTemp;
  var key = 'e766d072f0e227cc8d41eb78edb83f4f';

  //Geoloation
  $.getJSON("http://ip-api.com/json/?callback=?", function(data2) {
    lat = data2.lat;
    lon = data2.lon;
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key;

    //Get Metric Data
    $.getJSON(api + "&units=metric", function(data3) {
        var weather = data3.weather[0].description;
        var city = data3.name;
        var wind = data3.wind.speed;
        var iconCode = data3.weather[0].icon;
        cTemp = data3.main.temp;
      
      //Get Imperial Data 
      $.getJSON(api + "&units=imperial", function(data) {
        fTemp = data.main.temp;
        
        var fText = fTemp + ' &#8457;';
        var cText = cTemp + ' &#8451;';
    
        //Insert JSON Info
        $('#temp').html(fText);
        $('#location').html(city);
        $('#desc').html(weather);
        $('#wind').html(wind + " mph");
    
        //Add Weather Icons
        iconCode = iconCode.substring(0, iconCode.length - 1);
        switch(iconCode){
          case "02":
            $('.cloudy').show().css({'display': 'inline-block'});
            break;

          case "03":
            $('.cloudy').show().css({'display': 'inline-block'});
            break;

          case "04":
            $('.cloudy').show().css({'display': 'inline-block'});
            break;

          case "09":
            $('.rainy').show().css({'display': 'inline-block'});
            break;

          case "10":
            $('.rainy').show().css({'display': 'inline-block'});
            break;

          case "11":
            $('.thunder-storm').show().css({'display': 'inline-block'});
            break;

          case "13":
            $('.flurries').show().css({'display': 'inline-block'});
            break;

          default: 
            $('.sunny').show().css({'display': 'inline-block'});
                       }
    
        //Change Temp Toggle

        $('#temp').click(function() {
          tempSwap = !tempSwap;
          if (tempSwap === true) {
            $('#temp').html(cText);
          } else {
            $('#temp').html(fText);
          }
    


        });
      });

    });
  });
});