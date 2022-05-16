// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}
var cityListEl = document.getElementById("city-list");
var cityButtonEl = document.querySelector("#search-button");
var cityFormInputEl = document.getElementById("user-input");
var cityInput = document.querySelector("#city");

var apiKey = "1c9661c5b1cb590f00389651b0cfdccf";

var submitForm = function(event){
    var city = cityFormEl.value.trim();
    if(city){
        console.log(city);
    } else {
        alert("Please enter a city!")
    }

    //insert local storage function:
}

    cityButtonEl.addEventListener("click", function(event) {
        event.preventDefault();
        var city = cityFormInputEl.value.trim();
        // create user object from submission
        var cities = {
            city
        };
      
        // set new submission to local storage 
        localStorage.setItem(city, JSON.stringify(cities));
        console.log(localStorage);
      });

function clearStorage(){ 
    localStorage.clear()
  }

function weatherByLocation(city){
    var query1='https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey;
    fetch(query1).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                cityWeather(data[0].lat, data[0].lon)
            });
        } else {
            alert("Error" + response.statusText);
        }
    })
}

function cityWeather(lat, lon){
    var query2='https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&units=imperial&appid=' + apiKey;
    fetch(query2).then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log(data);
                displayWeather(data.current);
            });
        } else {
            alert("Error" + response.statusText);
        }
    })
    var query3 = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lon +'&units=imperial&appid=' + apiKey;
    fetch(query3).then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log(data);
                displayForcast(data);
            });
        } else {
            alert("Error" + response.statusText);
        }
    })
}

function displayWeather(data){
    document.getElementById('main-idea').innerHTML = "Description: " + data.weather[0].description; 
    document.getElementById('currentTemp').innerHTML = "Temperature: " + data.temp;
    document.getElementById('currentHumid').innerHTML = "Humidity: " + data.humidity;
    document.getElementById('currentUVI').innerHTML = "UV index: " + data.uvi;
    document.getElementById('currentWind').innerHTML = "Wind Speed: " + data.wind_speed;
    // console.log(data.temp);
    // console.log(data.humidity);
    // console.log(data.wind_speed);
    // console.log(data.uvi);
}
//cityWeather(42.7325, -84.5555);
function displayForcast(data){
        const i = 1;
        const t = 9;
        const j = 17;
        const v = 25;
        const m = 33;
        document.getElementById('city-name').innerHTML = data.city.name;
        document.getElementById('des1').innerHTML = data.list[i].weather[0].description;
        document.getElementById('date'+ i).innerHTML = "Date: " + data.list[i].dt_txt;
        document.getElementById('temp'+ i).innerHTML = "Temp: " + data.list[i].main.temp;
        document.getElementById('wind'+ i).innerHTML = "Wind: " + data.list[i].wind.speed;
        document.getElementById('humd'+ i).innerHTML = "Humidity: " + data.list[i].main.humidity;
        
        document.getElementById('des2').innerHTML = data.list[t].weather[0].description;
        document.getElementById('date2').innerHTML = "Date: " + data.list[t].dt_txt;
        document.getElementById('temp2').innerHTML = "Temp: " + data.list[t].main.temp;
        document.getElementById('wind2').innerHTML = "Wind: " + data.list[t].wind.speed;
        document.getElementById('humd2').innerHTML = "Humidity: " + data.list[t].main.humidity;

        document.getElementById('des3').innerHTML = data.list[j].weather[0].description;
        document.getElementById('date3').innerHTML = "Date: " + data.list[j].dt_txt;
        document.getElementById('temp3').innerHTML = "Temp: " + data.list[j].main.temp;
        document.getElementById('wind3').innerHTML = "Wind: " + data.list[j].wind.speed;
        document.getElementById('humd3').innerHTML = "Humidity: " + data.list[j].main.humidity;
        
        document.getElementById('des4').innerHTML = data.list[v].weather[0].description;
        document.getElementById('date4').innerHTML = "Date: " + data.list[v].dt_txt;
        document.getElementById('temp4').innerHTML = "Temp: " + data.list[v].main.temp;
        document.getElementById('wind4').innerHTML = "Wind: " + data.list[v].wind.speed;
        document.getElementById('humd4').innerHTML = "Humidity: " + data.list[v].main.humidity;
        
        document.getElementById('des5').innerHTML = data.list[m].weather[0].description;
        document.getElementById('date5').innerHTML = "Date: " + data.list[m].dt_txt;
        document.getElementById('temp5').innerHTML = "Temp: " + data.list[m].main.temp;
        document.getElementById('wind5').innerHTML = "Wind: " + data.list[m].wind.speed;
        document.getElementById('humd5').innerHTML = "Humidity: " + data.list[m].main.humidity;
        // console.log(data[i].dt_txt);
        // console.log(data[i].main.temp);
        // console.log(data[i].wind.speed);
        // console.log(data[i].main.humidity);
     console.log(data);
}

$("#search-button").on("click", function(){
    var city = document.getElementById("user-input").value;
    if (city){
       // console.log(city);
        weatherByLocation(city);
    }
    
}) 


