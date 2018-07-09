'use strict'

class WeatherView {
    constructor() {
        this.setupChildren();
        this.setupHandler();
    }

    setupChildren() {
        this.$container = $('.js-weather-container');
        this.$weatherButton = $('.js-weather-button');
        this.$weatherText = $('.js-weather-text');
    }

    setupHandler() {
        this.$container.on('click', '.js-weather-button', this.buttonHandler);
    }

    fillInData(weatherModel) {
        const weather = weatherModel.weathers[0].main.toString()
        this.$weatherText.val('今日の天気は' + weather);
    }

    buttonHandler() {
        // TODO: How to use Event Dispatcher
        console.log('baaa');
    }
}