document.addEventListener("DOMContentLoaded", () => {
    // Weather info
    const weatherBox = document.getElementById("weather-info");
    if (weatherBox) {
      weatherBox.innerHTML = `
        <p>🌤️ 29°C, Partly Cloudy</p>
        <p>Humidity: 65%</p>
      `;
    }
  
    // Hamburger menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });
  