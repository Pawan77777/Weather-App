document
  .getElementById("getWeatherButton")
  .addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  try {
    const locationResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const locationData = await locationResponse.json();

    if (!locationData.results || locationData.results.length === 0) {
      document.getElementById("weatherInfo").innerHTML =
        "City not found. Please enter a valid city name.";
      return;
    }

    const { latitude, longitude, name } = locationData.results[0];

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();

    const weather = weatherData.current_weather;
    const weatherInfo = `
      <h3>Current Weather in ${name}</h3>
      <p>Temperature: ${weather.temperature}°C</p>
      <p>Windspeed: ${weather.windspeed} km/h</p>
      <p>Condition: ${weather.weathercode}</p>
    `;

    document.getElementById("weatherInfo").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML =
      "Error fetching weather data. Please try again.";
    console.error(error);
  }
}
