const WeatherData = new XMLHttpRequest();
const CurrentLocation = new XMLHttpRequest();
const HourlyWeatherData = new XMLHttpRequest();
const _Date = new Date();
document.getElementById("date").innerText = `${_Date.getDate()}.${_Date.getMonth() + 1}.${_Date.getFullYear()}`;
const week= new Array("Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday");
const Search = document.querySelector("#btn_search");
const City = document.querySelector("#inp_city");
const Image = document.getElementById("image");
const Temp = document.getElementById("temp");
const Type = document.getElementById("type");
const Min_temp = document.getElementById("min_t");
const Max_temp = document.getElementById("max_t");
const Wind_sp = document.getElementById("wind");
const _City = document.getElementById("city");
const dayofWeek = document.getElementById("dayOfWeek");
dayofWeek.innerText = week[_Date.getDay()];
const ImageForWeek = document.getElementsByName("image_week");
const ForecastforDay = document.getElementsByName("forecast_week");
const TempforDay = document.getElementsByName("temp_week");
const WindforDay = document.getElementsByName("wind_week");


Search.addEventListener("onclick", start_search)

function start_search() {
    CurrentLocation.open("GET", `https://api.openweathermap.org/geo/1.0/direct?q=${City.value}&limit=5&appid=40576749474bd74959580f4cde986ebf`);
    CurrentLocation.responseType = "json";
    CurrentLocation.send();
    CurrentLocation.onload = function () {
        var location = CurrentLocation.response;
        _City.innerText = location[0]["name"];
        var lat = location[0]["lat"];
        var lon = location [0]["lon"];
        getWeather(lat, lon);
        getHourlyWeather(lat, lon)
    }
}

function getWeather(lat, lon) {
    WeatherData.open("GET", `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=40576749474bd74959580f4cde986ebf`);
    WeatherData.responseType = "json";
    WeatherData.send();
    WeatherData.onload = function () {
        var _weatherData = WeatherData.response;
        Image.src = `http://openweathermap.org/img/wn/${_weatherData.weather[0]["icon"]}@2x.png`;
        Temp.innerText = parseInt(_weatherData.main["temp"]) + " °C";
        Type.innerText = _weatherData.weather[0]["main"];
        Min_temp.innerText = parseInt(_weatherData.main["temp_min"]) + " °C";
        Max_temp.innerText = parseInt(_weatherData.main["temp_max"]) + " °C";
        Wind_sp.innerText = parseInt(_weatherData.wind["speed"]) + " (km/h)";
    }
}

function getHourlyWeather(lat, lon) {
    HourlyWeatherData.open("GET", `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=40576749474bd74959580f4cde986ebf`);
    HourlyWeatherData.responseType = "json";
    HourlyWeatherData.send();
    HourlyWeatherData.onload = function () {
        var _hourlyWeatherData = HourlyWeatherData.response;
        getImages(_hourlyWeatherData);
        getForcast(_hourlyWeatherData);
        getTemperature(_hourlyWeatherData);
        getWind(_hourlyWeatherData);
    }
}

function getImages (_hourlyWeatherData)
{
    var i = 0;
    ImageForWeek.forEach(element=>element.src = `http://openweathermap.org/img/wn/${_hourlyWeatherData.list[i++].weather[0]["icon"]}@2x.png`);
}
function getForcast (_hourlyWeatherData)
{
    var i = 0;
    ForecastforDay.forEach(element=>element.innerText = _hourlyWeatherData.list[i++].weather[0]["description"]);
}

function getTemperature(_hourlyWeatherData)
{
    var i=0;
    TempforDay.forEach(element=>element.innerText = parseInt(_hourlyWeatherData.list[i++].main["temp"]) + " °C");
}
function getWind(_hourlyWeatherData)
{
    var i=0;
    WindforDay.forEach(element=>element.innerText=parseInt( _hourlyWeatherData.list[i++].wind["speed"]) + " (km/h)");
}