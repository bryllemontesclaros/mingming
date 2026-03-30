import { useState, useCallback } from "react";
import { fetchWeatherByCoords, fetchWeatherByCity, parseWeatherData } from "./weatherApi";
import { WEATHER_CONFIG } from "./weatherConfig";
import IntroLocationScreen from "./components/IntroLocationScreen";
import MingMingHero from "./components/MingMingHero";
import WeatherCard from "./components/WeatherCard";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import Particles from "./components/Particles";

// ── Helpers ──────────────────────────────────────────────────────────────────
function pickMessage(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}

// ── Weather Screen ────────────────────────────────────────────────────────────
function WeatherScreen({ weatherData, onRefresh, isRefreshing }) {
  const config = WEATHER_CONFIG[weatherData.mood];
  const [message] = useState(() => pickMessage(config.messages));

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.bg} relative overflow-hidden flex flex-col pb-8`}>
      <Particles colors={config.particle} />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-12 pb-2">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">MingMing Weather</p>
          <p className="text-lg font-black text-gray-700">
            {weatherData.city}, {weatherData.country} 📍
          </p>
        </div>
        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shadow-sm active:scale-90 transition-all text-base hover:bg-white/80 disabled:opacity-50"
          aria-label="Refresh"
        >
          <span style={{ display: "inline-block", animation: isRefreshing ? "spin 0.8s linear infinite" : "none" }}>
            🔄
          </span>
        </button>
      </div>

      {/* Mascot + bubble */}
      <div className="relative z-10 mt-1">
        <MingMingHero mood={weatherData.mood} message={message} />
      </div>

      {/* Temp pill */}
      <div className="relative z-10 flex justify-center mt-3">
        <div className="flex items-baseline gap-1 bg-white/70 rounded-full px-8 py-3 shadow-md backdrop-blur-sm">
          <span className="text-5xl font-black" style={{ color: config.accent }}>
            {weatherData.temp}
          </span>
          <span className="text-2xl font-bold text-gray-400">°C</span>
          <span className="ml-2 text-2xl">{config.emoji}</span>
        </div>
      </div>

      {/* Stats card */}
      <div className="relative z-10 mt-4">
        <WeatherCard data={weatherData} config={config} />
      </div>

      {/* Ad placeholder */}
      <div className="relative z-10 mx-5 mt-4 rounded-2xl border-2 border-dashed border-gray-200/80 bg-white/30 h-14 flex items-center justify-center">
        <span className="text-[10px] text-gray-300 font-bold tracking-[0.2em] uppercase">Advertisement</span>
      </div>

      {/* Footer */}
      <p className="relative z-10 text-center text-[11px] text-gray-300 mt-4">
        MingMing loves you~ 🐾 · Updated {weatherData.updatedAt?.toLocaleTimeString("en-PH", { hour: "2-digit", minute: "2-digit" })}
      </p>
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("location"); // location | loading | weather | error
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadWeather = useCallback(async (fetchFn) => {
    setScreen("loading");
    try {
      const raw = await fetchFn();
      const parsed = parseWeatherData(raw);
      setWeatherData(parsed);
      setScreen("weather");
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "Hindi makuha ang weather.");
      setScreen("error");
    }
  }, []);

  const handleAllow = useCallback(() => {
    if (!navigator.geolocation) {
      setErrorMsg("Hindi supported ang geolocation sa browser mo.");
      setScreen("error");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => loadWeather(() => fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude)),
      (err) => {
        console.warn("Geolocation denied:", err);
        loadWeather(() => fetchWeatherByCity("Manila,PH"));
      }
    );
  }, [loadWeather]);

  const handleManila = useCallback(() => {
    loadWeather(() => fetchWeatherByCity("Manila,PH"));
  }, [loadWeather]);

  // ── In-place refresh: stays on weather screen, spins the button only
  const handleRefresh = useCallback(async () => {
    if (!weatherData || isRefreshing) return;
    setIsRefreshing(true);
    try {
      const raw = await fetchWeatherByCity(`${weatherData.city},${weatherData.country}`);
      const parsed = parseWeatherData(raw);
      setWeatherData(parsed);
    } catch (err) {
      console.error(err);
      // Silent fail on refresh — don't kick user to error screen
    } finally {
      setIsRefreshing(false);
    }
  }, [weatherData, isRefreshing]);

  const handleRetry = useCallback(() => setScreen("location"), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        *, *::before, *::after { font-family: 'Nunito', sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
        html, body { min-height: 100%; background: #fdf2f8; }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(10deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh" }}>
        {screen === "location" && (
          <IntroLocationScreen onAllow={handleAllow} onManila={handleManila} />
        )}
        {screen === "loading" && <LoadingState />}
        {screen === "weather" && weatherData && (
          <WeatherScreen weatherData={weatherData} onRefresh={handleRefresh} isRefreshing={isRefreshing} />
        )}
        {screen === "error" && (
          <ErrorState message={errorMsg} onRetry={handleRetry} />
        )}
      </div>
    </>
  );
}
