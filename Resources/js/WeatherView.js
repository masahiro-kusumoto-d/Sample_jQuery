class WeatherView {
    constructor() {
        this.$container = $('#js-weather-container');
        this.$weatherButton = $('.js-weather-button')
        this.$weatherText = $('.js-weather-text')
    }

    fillInData() {
        this.$weatherText.val('practice test');
        console.log(this.$weatherButton);
    }
}