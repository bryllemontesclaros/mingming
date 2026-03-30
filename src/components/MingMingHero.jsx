import { useState, useEffect, useRef } from "react";
import MingMingCat from "./MingMingCat";

// Shared audio context — created once on first user interaction
let sharedCtx = null;

function getCtx() {
  if (!sharedCtx || sharedCtx.state === "closed") {
    sharedCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (sharedCtx.state === "suspended") {
    sharedCtx.resume();
  }
  return sharedCtx;
}

function playMew() {
  try {
    const ctx = getCtx();
    const now = ctx.currentTime;

    const play = (freq, startTime, duration, type = "sine") => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now + startTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.6, now + startTime + duration * 0.3);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.85, now + startTime + duration);
      gain.gain.setValueAtTime(0, now + startTime);
      gain.gain.linearRampToValueAtTime(0.28, now + startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + startTime + duration);
      osc.start(now + startTime);
      osc.stop(now + startTime + duration + 0.05);
    };

    const variant = Math.floor(Math.random() * 3);

    if (variant === 0) {
      // Classic two-tone mew~
      play(520, 0,    0.18);
      play(680, 0.16, 0.22);
      const vib = ctx.createOscillator();
      const vibGain = ctx.createGain();
      vib.connect(vibGain);
      vibGain.connect(ctx.destination);
      vib.type = "sine";
      vib.frequency.setValueAtTime(600, now);
      vib.frequency.exponentialRampToValueAtTime(900, now + 0.25);
      vibGain.gain.setValueAtTime(0.06, now);
      vibGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      vib.start(now);
      vib.stop(now + 0.4);

    } else if (variant === 1) {
      // Short sharp mew! surprised
      play(800, 0,    0.08);
      play(950, 0.07, 0.14);
      play(700, 0.18, 0.18);

    } else {
      // Long sleepy mrrrow~
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.linearRampToValueAtTime(480, now + 0.15);
      osc.frequency.linearRampToValueAtTime(380, now + 0.35);
      osc.frequency.linearRampToValueAtTime(280, now + 0.55);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.65);
    }
  } catch (e) {
    console.warn("MingMing audio error:", e);
  }
}

export default function MingMingHero({ mood, message }) {
  const [pop, setPop] = useState(false);
  const primed = useRef(false);

  // Prime the audio context on first render with a silent buffer
  useEffect(() => {
    const prime = () => {
      if (primed.current) return;
      try {
        const ctx = getCtx();
        // Play a silent buffer to unlock audio on iOS/Android
        const buf = ctx.createBuffer(1, 1, 22050);
        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.connect(ctx.destination);
        src.start(0);
        primed.current = true;
      } catch (e) {}
    };
    window.addEventListener("touchstart", prime, { once: true });
    window.addEventListener("click", prime, { once: true });
    return () => {
      window.removeEventListener("touchstart", prime);
      window.removeEventListener("click", prime);
    };
  }, []);

  const handleClick = () => {
    setPop(true);
    playMew();
    setTimeout(() => setPop(false), 300);
  };

  return (
    <div className="flex flex-col items-center gap-3 px-5">
      {/* Cat */}
      <div
        onClick={handleClick}
        onTouchEnd={(e) => { e.preventDefault(); handleClick(); }}
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
