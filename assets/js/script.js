var button = document.querySelector('.btn');
var input = document.querySelector('#input')
var currentDay = document.createElement('div');
var rightColumnTop = document.querySelector('.rightColumnTop');
rightColumnTop.setAttribute('style', 'border: solid black; padding: 10px; padding-right: 100px')
let now = moment().format('dddd, MMMM Do YYYY')
currentDay.textContent = now;
var day1 = moment().add(1, 'days').format('MM/DD/YYYY') 
var day2 = moment().add(2, 'days').format('MM/DD/YYYY') 
var day3 = moment().add(3, 'days').format('MM/DD/YYYY') 
var day4 = moment().add(4, 'days').format('MM/DD/YYYY') 
var day5 = moment().add(5, 'days').format('MM/DD/YYYY') 

var d1 = document.querySelector('#d1');
var icon1 = document.querySelector('#icon1');
var t1 = document.querySelector('#t1');
var w1 = document.querySelector('#w1');
var h1 = document.querySelector('#h1');

var d2 = document.querySelector('#d2');
var icon2 = document.querySelector('#icon2');
var t2 = document.querySelector('#t2');
var w2 = document.querySelector('#w2');
var h2 = document.querySelector('#h2');

var d3 = document.querySelector('#d3');
var icon3 = document.querySelector('#icon3');
var t3 = document.querySelector('#t3');
var w3 = document.querySelector('#w3');
var h3 = document.querySelector('#h3');

var d4 = document.querySelector('#d4');
var icon4 = document.querySelector('#icon4');
var t4 = document.querySelector('#t4');
var w4 = document.querySelector('#w4');
var h4 = document.querySelector('#h4');

var d5 = document.querySelector('#d5');
var icon5 = document.querySelector('#icon5');
var t5 = document.querySelector('#t5');
var w5 = document.querySelector('#w5');
var h5 = document.querySelector('#h5');

var hist1 = document.querySelector('#hist1');
var hist2 = document.querySelector('#hist2');
var hist3 = document.querySelector('#hist3');
var hist4 = document.querySelector('#hist4');
var hist5 = document.querySelector('#hist5')

var searchHistory = [];

var getForecastTop = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a62c9480c48f3b86915de34ca4d5c7a9&units=imperial"
    var cityDate = document.querySelector('#date');
    // cityDate.textContent = city + " (" + currentDay.textContent + ") ☁️"
    var temp = document.querySelector('#temp');
    var wind = document.querySelector('#wind');
    var humidity = document.querySelector('#humidity');
    var iconSelect0 = document.querySelector('#icon0');
    

    fetch(apiUrl)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    var long = data.coord.lon
                    var lat = data.coord.lat
                    getUvIndex(lat,long);
                    cityDate.innerHTML = city + " (" + currentDay.textContent + ")"
                    var icon0 = data.weather[0].icon;
                    iconSelect0.innerHTML = `<img src="./icons/${icon0}.png">`
                    temp.textContent = "Temp: " + data.main.temp + "°F"
                    wind.textContent = "Wind: " + data.wind.speed + " MPH"
                    humidity.textContent = "Humidity: " + data.main.humidity + "%"
                })
            }
        })
}

var getUvIndex = function(lat, long) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=a62c9480c48f3b86915de34ca4d5c7a9"

    fetch(apiUrl)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    var uvIndexNum = document.querySelector('#indexNumber');
                    var uvIndex = data.current.uvi
                    uvIndexNum.textContent = "UV Index: " + uvIndex

                    if (uvIndex <= 2) {
                        uvIndexNum.classList.add('indexFavorable')
                    }
                    else if (uvIndex >= 3 && uvIndex <=5) {
                        uvIndexNum.classList.add('indexModerate')
                    }
                    else if (uvIndex >= 6 && uvIndex <=7) {
                        uvIndexNum.classList.add('indexSevere')
                    }
                    else {
                        uvIndexNum.classList.add('indexVerySevere')

                    }
                })
            }
        })
}

var getForecastBottom = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=a62c9480c48f3b86915de34ca4d5c7a9&units=imperial"

    
    // var box1 = document.querySelector('#box1');
    // var box2 = document.querySelector('#box2');
    // var box3 = document.querySelector('#box3');
    // var box4 = document.querySelector('#box4');
    // var box5 = document.querySelector('#box5');
    var iconSelect1 = document.querySelector('#icon1');
    var iconSelect2 = document.querySelector('#icon2');
    var iconSelect3 = document.querySelector('#icon3');
    var iconSelect4 = document.querySelector('#icon4');
    var iconSelect5 = document.querySelector('#icon5');


    fetch(apiUrl)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {

                    // var iconCode = data.list[2].weather[0].icon
                    // var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"
                    // console.log(iconUrl)
                    // console.log(data)
                    d1.textContent = day1
                    var icon1 = data.list[6].weather[0].icon
                    iconSelect1.innerHTML = `<img src="./icons/${icon1}.png">`
                    // icon1.textContent = data.list[2].weather[0].icon
                    t1.textContent = "Temp: " + data.list[6].main.temp + "°F"
                    w1.textContent = "Wind: " + data.list[6].wind.speed + " MPH"
                    h1.textContent = "Humidity: " + data.list[6].main.humidity + "%"

                    d2.textContent = day2
                    var icon2 = data.list[14].weather[0].icon
                    iconSelect2.innerHTML = `<img src="./icons/${icon2}.png">`
                    // icon2.textContent = data.list[12].weather[0].icon
                    t2.textContent = "Temp: " + data.list[14].main.temp + "°F"
                    w2.textContent = "Wind: " + data.list[14].wind.speed + " MPH"
                    h2.textContent = "Humidity: " + data.list[14].main.humidity + "%"

                    d3.textContent = day3
                    var icon3 = data.list[22].weather[0].icon
                    iconSelect3.innerHTML = `<img src="./icons/${icon3}.png">`
                    // icon3.textContent = data.list[20].weather[0].icon
                    t3.textContent = "Temp: " + data.list[22].main.temp + "°F"
                    w3.textContent = "Wind: " + data.list[22].wind.speed + " MPH"
                    h3.textContent = "Humidity: " + data.list[22].main.humidity + "%"

                    d4.textContent = day4
                    var icon4 = data.list[30].weather[0].icon
                    iconSelect4.innerHTML = `<img src="./icons/${icon4}.png">`
                    // icon4.textContent = data.list[28].weather[0].icon
                    t4.textContent = "Temp: " + data.list[30].main.temp + "°F"
                    w4.textContent = "Wind: " + data.list[30].wind.speed + " MPH"
                    h4.textContent = "Humidity: " + data.list[30].main.humidity + "%"

                    d5.textContent = day5
                    var icon5 = data.list[38].weather[0].icon
                    iconSelect5.innerHTML = `<img src="./icons/${icon5}.png">`
                    // icon5.textContent = data.list[36].weather[0].icon
                    t5.textContent = "Temp: " + data.list[38].main.temp + "°F"
                    w5.textContent = "Wind: " + data.list[38].wind.speed + " MPH"
                    h5.textContent = "Humidity: " + data.list[38].main.humidity + "%"
                    
                })
            }
        })
}


var search = function() {
    button.addEventListener('click', function() {
        getForecastTop(input.value);
        getForecastBottom(input.value);
    })
}


var storage = function() {
    button.addEventListener('click', function() {
        var inp = input.value;
        if (inp) {
            localStorage.setItem('Search History: ', '[]');
            var get = localStorage.getItem('Search History: ');
            searchHistory.push(inp)
        }
        // var get = localStorage.getItem('Search History: ');
        // searchHistory.push(inp)

        localStorage.setItem('Search History: ', searchHistory)
        // console.log(searchHistory)
        
        hist1.textContent = searchHistory[0];
        hist2.textContent = searchHistory[1];
        hist3.textContent = searchHistory[2];
        hist4.textContent = searchHistory[3];
        hist5.textContent = searchHistory[4];
    })
}

var historySearch = function() {
    hist1.addEventListener('click', function() {
        getForecastTop(hist1.textContent);
        getForecastBottom(hist1.textContent);
    })
    hist2.addEventListener('click', function() {
        getForecastTop(hist2.textContent);
        getForecastBottom(hist2.textContent);
    })
    hist3.addEventListener('click', function() {
        getForecastTop(hist3.textContent);
        getForecastBottom(hist3.textContent);
    })
    hist4.addEventListener('click', function() {
        getForecastTop(hist4.textContent);
        getForecastBottom(hist4.textContent);
    })
    hist5.addEventListener('click', function() {
        getForecastTop(hist5.textContent);
        getForecastBottom(hist5.textContent);
    })
}


search();

storage();

historySearch();
