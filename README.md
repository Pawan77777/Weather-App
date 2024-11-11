# Weather Now - Real-Time Weather Checker

## Description

Weather Now is a simple web application that allows users to check the current weather conditions for any city. Using the Open-Meteo API, it fetches real-time data including temperature, wind speed, and weather conditions based on the city's name. The application features a clean, user-friendly interface designed for outdoor enthusiasts who need quick weather updates.

## Features

- Enter any city name to retrieve current weather conditions.
- Display temperature in Celsius.
- Display wind speed in km/h.
- Shows weather conditions like "Clear", "Cloudy", etc.
- Lightweight, responsive UI with an easy-to-use layout.

## Technologies Used

- **HTML**: For creating the structure and content of the web page.
- **CSS**: For styling the app with a modern, minimalistic design.
- **JavaScript**: For fetching data from the Open-Meteo API and dynamically updating the UI based on the results.
- **Open-Meteo API**: For fetching geolocation data (latitude/longitude) and current weather information.

## How to Use

1. Open the `index.html` file in your browser.
2. Type the name of a city in the input field.
3. Click the "Check Weather" button to get the current weather conditions.
4. The temperature, wind speed, and condition will be displayed below the button.

## How to Run Locally

To run this application locally, follow these steps:

1. Clone the repository or download the files.
2. Ensure you have a modern web browser (like Chrome or Firefox) installed.
3. Open the `index.html` file in your browser to view the application.

```bash
git clone https://github.com/Pawan77777/Weather-App.git
cd weather-now
open index.html
File Structure
bash
Copy code
weather-now/
│
├── index.html        # Main HTML file
├── style.css         # CSS styles for the app
└── script.js         # JavaScript logic to fetch weather data
Notes
API Usage: The Open-Meteo API is free to use for basic weather information. However, depending on your usage, there might be rate limits. Please refer to Open-Meteo API Documentation for further details.

Error Handling: If the city entered is invalid or no weather data is available, the app will display an error message. Ensure that you are typing the city name correctly.

City Name: The app uses a city name to fetch coordinates, so ensure to use the correct and well-known city names for better results.

CORS Issues: If you're running the app on a local server and encounter CORS issues, you may need to configure CORS headers on your server or use a CORS proxy for development purposes.

Potential Improvements
Add support for additional weather metrics like humidity, air pressure, or sunrise/sunset times.
Enhance the design with more responsive breakpoints for mobile devices.
Implement location-based weather fetching using the user's geolocation.
Add a 5-day weather forecast feature.
License
This project is licensed under the MIT License - see the LICENSE file for details.
