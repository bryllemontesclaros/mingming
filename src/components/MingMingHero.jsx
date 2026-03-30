import { useState } from "react";
import MingMingCat from "./MingMingCat";

export default function MingMingHero({ mood, message }) {
  const [pop, setPop] = useState(false);

  const handleClick = () => {
    setPop(true);
    setTimeout(() => setPop(false), 300);
  };

  return (
    <div className="flex flex-col items-center gap-3 px-5">
      {/* Cat */}
      <div
        onClick={handleClick}
        className={`w-52 h-52 cursor-pointer select-none transition-transform duration-200 ${pop ? "scale-110" : "scale-100 hover:scale-105"}`}
        title="Click MingMing~"
        style={{ filter: "drop-shadow(0 10px 28px rgba(0,0,0,0.09))" }}
      >
        <MingMingCat mood={mood} />
      </div>

      {/* Speech bubble */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl px-5 py-4 shadow-md border border-white/60 text-center relative max-w-xs w-full">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="w-5 h-5 bg-white/80 rotate-45 rounded-sm border-t border-l border-white/60" />
        </div>
        <p className="text-gray-700 font-bold text-[15px] leading-snug">{message}</p>
      </div>
    </div>
  );
}
