class WeatherModel {
    constructor(json) {
        this.weathers = [];
        for(let i in json.weather) {
            this.weathers.push(new WeatherDetailModel(json.weather[i]));
        }
        this.coord = new WeatherCoordModel(json.coord);
        this.base = json.base;
        this.main = new WeatherMainModel(json.main);
        this.wind = new WeatherWindModel(json.wind);
        this.clouds = new WeatherCloudsModel(json.clouds);
        this.dt = json.dt;
        this.sys = new WeatherSysModel(json.sys);
        this.id = json.id;
        this.name = json.name;
        this.cod = json.cod;
    }
}

class WeatherCoordModel {
    constructor(json) {
        this.lat = json.lat;
        this.lon = json.lon;
    }
}

class WeatherDetailModel {
    constructor(json) {
        this.description = json.description;
        this.iconUrl = json.icon;
        this.id = json.id;
        this.main = json.main;
    }
}

class WeatherMainModel {
    constructor(json) {
        this.temp = json.temp;
        this.pressure = json.pressure;
        this.humidity = json.humidity;
        this.temp_min = json.temp_min;
        this.temp_max = json.temp_max;
    }
}

class WeatherSysModel {
    constructor(json) {
        this.country = json.country
        this.id = json.id
        this.message = json.message
        this.sunrise = json.sunrise
        this.sunset = json.sunset
        this.type = json.type
    }
}

class WeatherWindModel {
    constructor(json) {
        this.speed = json.speed;
        this.deg = json.deg;
    }
}

class WeatherCloudsModel {
    constructor(json) {
        this.all = json.all;
    }
}
