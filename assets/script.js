// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}
var cityName = "Grand Rapids";
var cities = [];
var cityFormEl = document.querySelector("#search-bar");
var cityInput = document.querySelector("#city");

var apiKey = "1c9661c5b1cb590f00389651b0cfdccf";

var submitForm = function(event){
    var city = cityFormEl.value.trim();
    if(city){
        console.log(city);
    }
    

}

function weatherByLocation(city){
    var query1='http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=' + apiKey;
    fetch(query1)
    .then(response => response.json())
    .then(data => console.log(data));
}

function cityWeather(lat, long){
    var query2='https://api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon=' + long +'&appid=' + apiKey;
}

// $("#search-bar").on("click", function(){
//     fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=' + apiKey)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }) 


