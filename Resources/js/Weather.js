$(function() {
    'use strict'
    console.log($.fn)
    $(document).ready(function() {
        $('button').click(function() {
            console.log('Button Pushed');
            CoordManager.fetchPresentCoords()
            .then(function(coords) {
                coords.latitude;
                coords.longitude;
                console.log(coords);
                $('.js-weather-text').val(coords.toString());
                fetchWeatherWithCoords(coords);
            })
            .catch(function(err) {
                console.log(err);
            })
        })
    })

    function fetchWeatherWithCoords(coords) {
        const url = `https://fcc-weather-api.glitch.me/api/current?lat=${coords.latitude}&lon=${coords.longitude}`;
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
            const weather = new WeatherModel(data);
            console.log(weather);
            $('.js-weather-text').val('今日の天気は' + weather.weathers[0].main.toString());
            return weather;
        }).catch(function(error) {
            console.log('Error occured: ' + error.toString());
        });
    }
})
