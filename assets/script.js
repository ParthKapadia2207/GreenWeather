function getWeatherByCity(city) {
    // Use OpenWeatherMap API to get coordinates for the city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data.coord;
            // Use the retrieved coordinates to get the 5 Day Weather Forecast
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`);
        })
        .then(response => response.json())
        .then(data => {
            // Display weather forecast data dynamically
            // You can parse the data and create HTML elements to display the forecast
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Event listener for form submission
document.getElementById('citys').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    getWeatherByCity(city);
});