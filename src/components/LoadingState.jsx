import { useState, useEffect } from "react";
import MingMingCat from "./MingMingCat";

const LOADING_LINES = [
  "Tinitingnan ang langit~",
  "Hinahanap ang ulap~",
  "Sandali lang ha~",
  "Tanong ko pa si araw~",
];

export default function LoadingState() {
  const [dots, setDots] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    const dotTimer = setInterval(() => setDots(d => (d + 1) % 4), 450);
    const lineTimer = setInterval(() => setLineIdx(i => (i + 1) % LOADING_LINES.length), 1800);
    return () => { clearInterval(dotTimer); clearInterval(lineTimer); };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-fuchsia-100">
      <div className="w-32 h-32 animate-pulse">
        <MingMingCat mood="sleepy" />
      </div>
      <p className="mt-5 text-rose-400 font-black text-lg">
        {LOADING_LINES[lineIdx]}{".".repeat(dots)}
      </p>
      <p className="text-gray-400 text-sm mt-1">MingMing busy~ sandali</p>
    </div>
  );
}
