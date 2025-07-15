// Wind Chill Calculator
function calculateWindChill (temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Constants
const temperature = 10; // Celsius
const windSpeed = 8; // km/h
const conditions = "Raining";

// Display Values
document.getElementById("temperature").textContent = `${temperature} °C`;
document.getElementById("conditions").textContent = conditions;
document.getElementById("wind").textContent = `${windSpeed} km/h`;

// Display Wind Chill
if (temperature <= 10 && windSpeed > 4.8) 
{
    document.getElementById('wind-chill').textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
}
else 
{
    document.getElementById('wind-chill').textContent = "N/A";
}
