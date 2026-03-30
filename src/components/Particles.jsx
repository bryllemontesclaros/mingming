export default function Particles({ colors }) {
  const count = 14;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-40"
          style={{
            width: `${6 + (i % 4) * 5}px`,
            height: `${6 + (i % 4) * 5}px`,
            backgroundColor: colors[i % colors.length],
            left: `${(i * 41 + 8) % 92}%`,
            top: `${(i * 27 + 4) % 82}%`,
            animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}
    </div>
  );
}
