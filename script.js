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

let city ="";
// source the key
let queryURL = "https://openweathermap.org/" + weather + "397d04ceacaaf4ab52f27b0693cc831a";
let citiesId = document.getElementById("search");
let city = [];
let current_date = moment().format();
input();

function input(){
    let search_history = JSON.parse(localstorage.getItem("cities"));

    if (search_history !== null){
        search_history = save
    }
    renderButtons();
}
// Make ajax call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
});