const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

/**
 * Maps OWM weather condition codes to MingMing moods
 * https://openweathermap.org/weather-conditions
 */
export function mapWeatherToMood(weatherId, windSpeed) {
  if (windSpeed > 10 && weatherId >= 800) return "windy";
  if (weatherId >= 200 && weatherId < 700) return "rainy";   // thunderstorm, drizzle, rain, snow, atmosphere
  if (weatherId >= 700 && weatherId < 800) return "cloudy";  // mist, fog, haze
  if (weatherId === 800) return "sunny";                      // clear sky
  if (weatherId > 800) return "cloudy";                       // clouds
  return "sunny";
}

/**
 * Fetch weather by coordinates
 */
export async function fetchWeatherByCoords(lat, lon) {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
  return res.json();
}

/**
 * Fetch weather by city name
 */
export async function fetchWeatherByCity(city) {
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
  return res.json();
}

/**
 * Parse OWM response into MingMing-friendly shape
 */
export function parseWeatherData(data) {
  const weatherId = data.weather[0].id;
  const windSpeed = data.wind?.speed ?? 0;

  return {
    city: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    windSpeed: Math.round(windSpeed * 3.6), // m/s → km/h
    description: data.weather[0].description,
    mood: mapWeatherToMood(weatherId, windSpeed),
    updatedAt: new Date(),
  };
}
