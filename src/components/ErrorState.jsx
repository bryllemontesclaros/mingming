import MingMingCat from "./MingMingCat";

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-fuchsia-100 px-6 text-center">
      <div className="w-36 h-36 opacity-70">
        <MingMingCat mood="cozy" />
      </div>
      <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-3xl px-6 py-5 shadow-md max-w-xs w-full border border-rose-100">
        <p className="text-rose-400 font-black text-lg mb-1">Ay nako! May error 😿</p>
        <p className="text-gray-500 text-sm mb-4">
          {message || "Hindi makuha ang weather data. Subukan ulit~"}
        </p>
        <button
          onClick={onRetry}
          className="w-full py-3 rounded-2xl font-black text-white text-sm shadow-md active:scale-95 transition-all"
          style={{ background: "linear-gradient(135deg, #FB7185, #F472B6)" }}
        >
          Subukan ulit 🔄
        </button>
      </div>
    </div>
  );
}
