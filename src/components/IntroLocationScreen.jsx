import { useState } from "react";
import MingMingCat from "./MingMingCat";
import Particles from "./Particles";

const INTRO_PARTICLES = ["#FDE68A", "#FCD34D", "#FFB3C6", "#C7D2FE"];

export default function IntroLocationScreen({ onAllow, onManila }) {
  const [bounce, setBounce] = useState(false);

  const handleCatClick = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 400);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-fuchsia-100">
      <Particles colors={INTRO_PARTICLES} />

      <div className="relative z-10 flex flex-col items-center gap-5 max-w-xs mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-rose-300">MingMing Weather</span>
        </div>

        {/* Cat */}
        <div
          className={`w-44 h-44 cursor-pointer select-none transition-transform duration-300 ${bounce ? "scale-110" : "scale-100 hover:scale-105"}`}
          onClick={handleCatClick}
        >
          <MingMingCat mood="happy" />
        </div>

        {/* Speech bubble */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl px-6 py-5 shadow-lg border border-pink-100 relative w-full">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="w-5 h-5 bg-white/80 rotate-45 rounded-sm border-t border-l border-pink-100" />
          </div>
          <p className="text-xl font-black text-rose-400 mb-1">Hi! Ako si MingMing 😺</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Pwede ko ba malaman ang{" "}
            <span className="text-rose-400 font-bold">location mo?</span>
            <br />
            Para malaman ang panahon sa'yo~
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={onAllow}
            className="w-full py-4 rounded-2xl font-black text-white text-base shadow-md active:scale-95 transition-all"
            style={{ background: "linear-gradient(135deg, #FB7185, #F472B6)" }}
          >
            📍 Allow location~
          </button>
          <button
            onClick={onManila}
            className="w-full py-3 rounded-2xl font-bold text-rose-400 text-sm bg-white/70 border-2 border-rose-200 active:scale-95 transition-all hover:bg-white/90"
          >
            Use Manila instead
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-1">
          MingMing pinangako wag ibebenta data mo 🐾
        </p>
      </div>
    </div>
  );
}
