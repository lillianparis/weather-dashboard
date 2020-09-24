// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
$(document).ready(function(){


    let input = document.getElementById("city-input");
    let search = document.getElementById("search");
    let name = document.getElementById("");
    let weatherPicture = document.getElementById("");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
   
    console.log(searchHistory);

function citySearch () { 
    let cityName = input.value.trim()
    console.log(cityName);
    let APIKey = "397d04ceacaaf4ab52f27b0693cc831a";
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
    });
    
} 

search.addEventListener("click", citySearch)

})
// source the key
// $("button").on("click", function () {

//     let search = $(this).attr("#search");
//     // let weather = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + "397d04ceacaaf4ab52f27b0693cc831a";

//     console.log(search);
//     console.log(weather);
// });

// $(document).ready(function () {
//     let city = $('<div>').addClass('')
