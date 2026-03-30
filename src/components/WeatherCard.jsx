export default function WeatherCard({ data, config }) {
  const stats = [
    { icon: "🌡️", label: "Feels like", val: `${data.feelsLike}°C` },
    { icon: "💧", label: "Humidity", val: `${data.humidity}%` },
    { icon: "💨", label: "Wind", val: `${data.windSpeed} km/h` },
  ];

  return (
    <div className="mx-5 bg-white/65 backdrop-blur-sm rounded-3xl p-5 shadow-md border border-white/60">
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Today's Vibe</span>
        <span
          className="text-xs font-black px-3 py-1 rounded-full"
          style={{ background: config.accentLight, color: config.accent }}
        >
          {config.tagalog}
        </span>
      </div>

      {/* Stat pills */}
      <div className="grid grid-cols-3 gap-2">
        {stats.map(({ icon, label, val }) => (
          <div key={label} className="flex flex-col items-center bg-white/60 rounded-2xl py-3 gap-1">
            <span className="text-xl">{icon}</span>
            <span className="text-[10px] text-gray-400 font-semibold">{label}</span>
            <span className="text-sm font-black text-gray-700">{val}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-center text-xs text-gray-400 mt-3 capitalize">{data.description}</p>
    </div>
  );
}
