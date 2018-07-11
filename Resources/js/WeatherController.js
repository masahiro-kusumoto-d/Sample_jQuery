'use strict'

class WeatherController {
    constructor(weatherModel, weatherView) {
        this.weatherModel = weatherModel
        this.weatherView = weatherView

        this.configureWeather();
    }

    async configureWeather() {
        const coords = await CoordManager.fetchPresentCoords();
        this.fetchWeatherWithCoords(coords);
    }

    fetchWeatherWithCoords(coords) {
        // TODO: Create Weather API
        const url = `https://fcc-weather-api.glitch.me/api/current?lat=${coords.latitude}&lon=${coords.longitude}`;
        // kusumotomemo: thisの気持ちが分からん
        const self = this;
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            self.weatherModel.fillInDataWithJson(json);
            return self.weatherModel;
        }).then(function(model) {
            console.log(model);
            self.weatherView.fillInData(model);
        }).catch(function(error) {
            console.log('Error occured: ' + error.toString());
        });
    }
}