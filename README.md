# **Simple Weather App**

A small Node.js project that shows the current weather for any city. The app uses the Open‑Meteo API to fetch live temperature, wind speed, and time, and displays it on a basic webpage. The backend is built with Express, and the frontend uses plain HTML and CSS.

---

## **What this project does**

- When you type a city name on the webpage, the frontend calls the backend route:
  ```
  /weather?city=CityName
  ```
- The backend connects to the Open‑Meteo API, fetches the city’s current weather, and returns that data to the frontend.
- The frontend then displays the returned weather data on the page.

---

## **Folder structure**

```
weather-app/
│
├── index.js          -> backend server (Node + Express)
├── package.json      -> project setup and dependencies
└── public/
    ├── index.html    -> webpage interface
    └── style.css     -> page styling
```

---

## **How to set it up**

1. Make sure Node.js and npm are installed. Check by running:
   ```bash
   node -v
   npm -v
   ```
   If not installed, download from: https://nodejs.org

2. Open the project folder in a terminal and install dependencies:
   ```bash
   npm init -y
   npm install express
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

5. Type any city name and click “Get Weather” to see the current data.

---

## **API used**

This project uses the Open‑Meteo API for all weather data: [https://open-meteo.com/](https://open-meteo.com/en/docs/gfs-api)

---

## **To Do (Homework)**

Update the app so that it also shows a 10‑day temperature forecast (highs and lows) in addition to the current weather.

Steps / hints:
- Read the Open‑Meteo documentation for daily forecasts. You will likely need the `daily` parameters (e.g., `temperature_2m_max`, `temperature_2m_min`) and a `forecast_days` or date range.
- Call the appropriate endpoint/parameters to get daily temperature forecasts for the next 10 days.
- Change the frontend to display something like:
  ```
  Day 1: High 75°F / Low 59°F
  Day 2: High 77°F / Low 60°F
  …
  ```
- You may format the forecast as a list, table, or cards — whichever looks best.

---

## **How to clone**

1. Open your terminal.
2. Navigate to the folder where you want to save the project, for example:
   ```bash
   cd ~/Desktop
   ```
3. Run:
   ```bash
   git clone https://github.com/AmrinderGlLL/Simple-Weather-App.git
   ```
4. Move into the project folder:
   ```bash
   cd Simple-Weather-App
   ```
5. Install dependencies:
   ```bash
   npm install
   ```
6. Start the server:
   ```bash
   node index.js
   ```
7. Open your browser at:
   ```
   http://localhost:3000
   ```
