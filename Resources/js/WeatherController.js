'use strict'

class WeatherController {
    constructor(weatherModel, weatherView) {
        const self = this;
        this.weatherModel = weatherModel
        this.weatherView = weatherView
        
        this.fetchPresentCoords()
        .then(function(coords) {
            self.fetchWeatherWithCoords(coords);
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    fetchPresentCoords() {
        return new Promise((resolve, reject) => {
            CoordManager.fetchPresentCoords()
            .then(function(coords) {
                console.log(coords);
                resolve(coords);
            })
            .catch(function(err) {
                reject(err);
            })
        })
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