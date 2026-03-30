export default function MingMingCat({ mood }) {
  const cats = {
    happy: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="100" cy="145" rx="52" ry="42" fill="#FFD6E0" />
        <ellipse cx="100" cy="95" rx="52" ry="48" fill="#FFD6E0" />
        <polygon points="58,60 48,30 78,55" fill="#FFD6E0" />
        <polygon points="142,60 152,30 122,55" fill="#FFD6E0" />
        <polygon points="62,57 54,36 76,55" fill="#FFB8CB" />
        <polygon points="138,57 146,36 124,55" fill="#FFB8CB" />
        <path d="M 78 95 Q 88 88 98 95" stroke="#5B3A29" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M 102 95 Q 112 88 122 95" stroke="#5B3A29" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="100" cy="107" rx="5" ry="3.5" fill="#FF8FAB" />
        <path d="M 88 115 Q 100 124 112 115" stroke="#5B3A29" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="77" cy="112" rx="10" ry="6" fill="#FFB3C6" opacity="0.5"/>
        <ellipse cx="123" cy="112" rx="10" ry="6" fill="#FFB3C6" opacity="0.5"/>
        <line x1="50" y1="108" x2="85" y2="110" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <line x1="50" y1="114" x2="85" y2="113" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <line x1="150" y1="108" x2="115" y2="110" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <line x1="150" y1="114" x2="115" y2="113" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="155" cy="45" r="15" fill="#FDE68A" opacity="0.8"/>
        <circle cx="155" cy="45" r="10" fill="#F59E0B" opacity="0.9"/>
        <ellipse cx="68" cy="175" rx="18" ry="12" fill="#FFD6E0" />
        <ellipse cx="132" cy="175" rx="18" ry="12" fill="#FFD6E0" />
        <path d="M 148 155 Q 175 145 168 170 Q 162 185 148 175" fill="#FFB8CB"/>
      </svg>
    ),
    cozy: (
      <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M 100 10 Q 60 10 50 45 Q 75 35 100 38 Q 125 35 150 45 Q 140 10 100 10 Z" fill="#93C5FD"/>
        <path d="M 50 45 Q 75 38 100 40 Q 125 38 150 45" stroke="#60A5FA" strokeWidth="1.5" fill="none"/>
        <line x1="100" y1="10" x2="100" y2="80" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 100 78 Q 112 78 112 88 Q 112 96 104 96" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="68" cy="60" rx="2" ry="5" fill="#93C5FD" opacity="0.6"/>
        <ellipse cx="88" cy="70" rx="2" ry="5" fill="#93C5FD" opacity="0.6"/>
        <ellipse cx="130" cy="58" rx="2" ry="5" fill="#93C5FD" opacity="0.6"/>
        <ellipse cx="148" cy="68" rx="2" ry="5" fill="#93C5FD" opacity="0.6"/>
        <ellipse cx="100" cy="165" rx="48" ry="38" fill="#C7D2FE" />
        <ellipse cx="100" cy="118" rx="48" ry="44" fill="#C7D2FE" />
        <polygon points="60,83 50,56 80,78" fill="#C7D2FE" />
        <polygon points="140,83 150,56 120,78" fill="#C7D2FE" />
        <polygon points="63,80 55,60 78,76" fill="#A5B4FC" />
        <polygon points="137,80 145,60 122,76" fill="#A5B4FC" />
        <path d="M 80 114 Q 90 108 100 114 Q 110 108 120 114" stroke="#5B3A29" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="100" cy="124" rx="5" ry="3.5" fill="#FF8FAB" />
        <path d="M 90 133 Q 100 138 110 133" stroke="#5B3A29" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <ellipse cx="78" cy="128" rx="9" ry="5" fill="#A5B4FC" opacity="0.5"/>
        <ellipse cx="122" cy="128" rx="9" ry="5" fill="#A5B4FC" opacity="0.5"/>
        <line x1="52" y1="124" x2="86" y2="126" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <line x1="52" y1="130" x2="86" y2="129" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <line x1="148" y1="124" x2="114" y2="126" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <line x1="148" y1="130" x2="114" y2="129" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <ellipse cx="68" cy="192" rx="17" ry="11" fill="#C7D2FE" />
        <ellipse cx="132" cy="192" rx="17" ry="11" fill="#C7D2FE" />
      </svg>
    ),
    sleepy: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="145" y="55" fontSize="14" fill="#C4B5FD" fontWeight="bold" opacity="0.7">z</text>
        <text x="155" y="40" fontSize="18" fill="#C4B5FD" fontWeight="bold" opacity="0.5">z</text>
        <text x="167" y="24" fontSize="22" fill="#C4B5FD" fontWeight="bold" opacity="0.3">z</text>
        <ellipse cx="100" cy="150" rx="50" ry="40" fill="#E9D5FF" />
        <ellipse cx="100" cy="100" rx="50" ry="46" fill="#E9D5FF" />
        <polygon points="62,68 48,40 78,65" fill="#E9D5FF" />
        <polygon points="138,68 152,40 122,65" fill="#E9D5FF" />
        <polygon points="65,65 54,44 76,63" fill="#D8B4FE" />
        <polygon points="135,65 146,44 124,63" fill="#D8B4FE" />
        <path d="M 76 98 Q 86 93 96 98" stroke="#5B3A29" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M 104 98 Q 114 93 124 98" stroke="#5B3A29" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="100" cy="110" rx="5" ry="3" fill="#FF8FAB" />
        <path d="M 92 119 Q 100 122 108 119" stroke="#5B3A29" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <ellipse cx="78" cy="114" rx="9" ry="5" fill="#D8B4FE" opacity="0.4"/>
        <ellipse cx="122" cy="114" rx="9" ry="5" fill="#D8B4FE" opacity="0.4"/>
        <line x1="52" y1="110" x2="86" y2="112" stroke="#5B3A29" strokeWidth="1.5" opacity="0.3"/>
        <line x1="52" y1="116" x2="86" y2="115" stroke="#5B3A29" strokeWidth="1.5" opacity="0.3"/>
        <line x1="148" y1="110" x2="114" y2="112" stroke="#5B3A29" strokeWidth="1.5" opacity="0.3"/>
        <line x1="148" y1="116" x2="114" y2="115" stroke="#5B3A29" strokeWidth="1.5" opacity="0.3"/>
        <ellipse cx="68" cy="178" rx="17" ry="11" fill="#E9D5FF" />
        <ellipse cx="132" cy="178" rx="17" ry="11" fill="#E9D5FF" />
        <path d="M 146 158 Q 168 148 162 168 Q 156 183 144 174" fill="#D8B4FE"/>
      </svg>
    ),
    playful: (
      <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M 20 80 Q 35 76 32 88 Q 30 98 44 96" stroke="#BAE6FD" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M 15 110 Q 34 106 30 120" stroke="#BAE6FD" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M 188 70 Q 200 74 196 85" stroke="#BAE6FD" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
        <ellipse cx="110" cy="148" rx="50" ry="38" fill="#BAE6FD" transform="rotate(-5 110 148)"/>
        <ellipse cx="108" cy="98" rx="50" ry="46" fill="#BAE6FD" />
        <polygon points="66,64 48,30 82,60" fill="#BAE6FD" />
        <polygon points="148,58 168,28 130,56" fill="#BAE6FD" />
        <polygon points="69,61 54,36 80,58" fill="#7DD3FC" />
        <polygon points="145,56 162,34 132,54" fill="#7DD3FC" />
        <circle cx="90" cy="96" r="10" fill="white"/>
        <circle cx="90" cy="96" r="6" fill="#5B3A29"/>
        <circle cx="126" cy="96" r="10" fill="white"/>
        <circle cx="126" cy="96" r="6" fill="#5B3A29"/>
        <circle cx="92" cy="94" r="2" fill="white"/>
        <circle cx="128" cy="94" r="2" fill="white"/>
        <ellipse cx="108" cy="110" rx="5" ry="3.5" fill="#FF8FAB" />
        <path d="M 96 119 Q 108 130 120 119" stroke="#5B3A29" strokeWidth="2.5" fill="#FFB3C6" strokeLinecap="round"/>
        <ellipse cx="82" cy="114" rx="9" ry="5" fill="#7DD3FC" opacity="0.5"/>
        <ellipse cx="134" cy="114" rx="9" ry="5" fill="#7DD3FC" opacity="0.5"/>
        <line x1="56" y1="106" x2="90" y2="112" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4" transform="rotate(-8 73 109)"/>
        <line x1="56" y1="114" x2="90" y2="116" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <line x1="160" y1="106" x2="126" y2="112" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4" transform="rotate(8 143 109)"/>
        <line x1="160" y1="114" x2="126" y2="116" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4"/>
        <ellipse cx="76" cy="174" rx="17" ry="11" fill="#BAE6FD" />
        <ellipse cx="68" cy="158" rx="14" ry="10" fill="#BAE6FD" transform="rotate(-20 68 158)"/>
        <ellipse cx="144" cy="174" rx="17" ry="11" fill="#BAE6FD" />
        <path d="M 155 155 Q 185 138 178 162 Q 172 180 156 170" fill="#7DD3FC"/>
      </svg>
    ),
  };
  return <div className="drop-shadow-xl">{cats[mood] || cats.happy}</div>;
}
