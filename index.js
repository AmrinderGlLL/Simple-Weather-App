const express = require("express");
// const fetch = require("node-fetch");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "Please provide a city name" });

  try {
    
    console.log(`Fetching coordinates for city: ${city}`);
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${(city)}&count=1&language=en&format=json`);
    const geoData = await geoRes.json();
    console.log(`Geocoding response: ${JSON.stringify(geoData)}`);
    if (!geoData.results || geoData.results.length === 0)
      return res.status(404).json({ error: "City not found" });

    const { latitude, longitude } = geoData.results[0];


    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph`
    );
    const weatherData = await weatherRes.json();

    res.json({
      city: geoData.results[0].name,
      temperature: weatherData.current_weather.temperature,
      windspeed: weatherData.current_weather.windspeed,
      time: weatherData.current_weather.time,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));