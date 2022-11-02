async function fetchWeather() {
    try {
        const results = await fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=d8763d9fbe4cd52f511e2d222ba85715&units=imperial")
        const weatherData = await results.json();
        const cityName = weatherData.name;
        const currentTemp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        console.log({ cityName, currentTemp, weatherDescription });
        const weatherElement = document.getElementById("weather")
        weatherElement.innerHTML = `<p>The current temperature in ${cityName} is ${currentTemp} degrees. It is ${weatherDescription}</p>`

    } catch (e) {
        console.log("Something went wrong fetching the weather API", e)
    }
}
fetchWeather()

