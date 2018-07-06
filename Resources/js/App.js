'use strict'

$(function() {
    const view = new WeatherView();
    const model = new WeatherModel();
    this.controller = new WeatherController(model, view);
});
