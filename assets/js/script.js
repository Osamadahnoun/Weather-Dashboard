var button = document.querySelector('.btn');
var currentDay = document.createElement('div');
var rightColumnTop = document.querySelector('.rightColumnTop');
rightColumnTop.setAttribute('style', 'border: solid black; padding: 10px; padding-right: 100px')
let now = moment().format('dddd, MMMM Do YYYY')
currentDay.textContent = now;

var getForecast = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a62c9480c48f3b86915de34ca4d5c7a9&units=imperial"
    var cityDate = document.createElement('div');
    cityDate.textContent = city + " (" + currentDay.textContent + ") ☁️"
    var temp = document.createElement('div');
    var wind = document.createElement('div');
    var humidity = document.createElement('div');
    var uvIndex = document.createElement('div');
    console.log(cityDate.textContent)

    fetch(apiUrl)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    temp.textContent = "Temp: " + data.main.temp + "°F"
                    wind.textContent = "Wind: " + data.wind.speed + " MPH"
                    humidity.textContent = "Humidity: " + data.main.humidity + "%"
                    // console.log("UV Index: " + data.main.temp)
                    rightColumnTop.append(cityDate);
                    rightColumnTop.append(temp);
                    rightColumnTop.append(wind);
                    rightColumnTop.append(humidity);
                })
            }
        })
}


getForecast('florida')