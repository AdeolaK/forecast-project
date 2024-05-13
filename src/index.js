function updateWeather(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);

}

function searchCity(city) {
    let apiKey = "706t692aeb44c9246o4e0036b9396dbf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
}

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchCity("Lagos");