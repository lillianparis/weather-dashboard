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

// Added in a document ready function
$(document).ready(function () {

  
    let input = document.getElementById("city-input");
    let search = document.getElementById("search");
    let cardTitle = document.getElementById("date");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    console.log(searchHistory);
    // Created a function to grab the input and search
    function citySearch() {
        let cityName = input.value.trim()
        console.log(cityName);
        let APIKey = "397d04ceacaaf4ab52f27b0693cc831a";
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        // Fixed ajax error by adding a CDN into the bottom of the html page 
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            // Start grabbing HTML elements and put data into them
            console.log(response);
            // These calls, take input from the jumbotron and display them to the front end
            $("#nameOfCity").text(response.name);
            $(".weatherIcon").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")
            let tempF = (response.main.temp - 273.15) * 1.80 + 32
            $("#temp").text("Temperature: " + Math.floor(tempF) + " °F")

            $("#humidity").text("Humidity: " + response.main.humidity + "%")

            $("#wind").text("Wind speed: " + response.wind.speed + " MPH")
        });
        // Grabbing for the several day forecast that will be displayed in the cards in the HTML

        let queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
        // Call to the second url so that multiple days can be displayed 
        $.ajax({
            url: queryURL2,
            method: "GET"
        })
        // Call to the Html and display on the front end 
        // .then(function (response) {
        //     console.log(response);
        //     let newrow = $("<div>").attr("class", "forecast");
        //     $("#fivedayforecastt").append(newrow);
        //     for (let i = 0; i < response.list.length; i++) {
        //         if (response.list[i].dt_txt.indexOf("15:00:00") !== -1) {
        //             let newCol = $("<div>").attr("class", "one-fifth");
        //             newrow.append(newCol);

        //             let newCard = $("<div>").attr("class", "card text-white bg-primary");
        //             newCol.append(newCard);

        //             let cardDate = $("<div>").attr("class", "card-header").text(moment(response.list[i].dt, "X").format("MMM Do"));
        //             newCard.append(cardDate);

        //             let cardImg = $("<img>").attr("class", "card-img-top").attr("src", "https://openweathermap.org/img/wn/" + response.list[i].weather[0].icon + "@2x.png");
        //             newCard.append(cardImg);

        //             let bodyDiv = $("<div>").attr("class", "card-body");
        //             newCard.append(bodyDiv);

        //             let tempF = Math.floor((response.list[i].main.temp - 273.15) * 1.80 + 32)
        //             bodyDiv.append($("<p>").attr("class", "card-text").text("Temp: " + tempF + " °F"));
        //             bodyDiv.append($("<p>").attr("class", "card-text").text("Humidity: " + response.list[i].main.humidity + "%"));
        //             bodyDiv.append($("<p>").attr("class", "card-text").text("wind: " + response.list[i].wind.speed + " MPH"));
        //         }
        //     }
            
        // })
    }

    search.addEventListener("click", citySearch)

})

