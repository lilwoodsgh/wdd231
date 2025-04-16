document.addEventListener("DOMContentLoaded", () => {
    const weatherBox = document.getElementById("weather-info");
  
    if (weatherBox) {
      weatherBox.innerHTML = `
        <p>🌤️ 29°C, Partly Cloudy</p>
        <p>Humidity: 65%</p>
      `;
    } else {
      console.error("Weather container not found!");
    }
  });
  