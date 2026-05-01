import { useState } from 'react';

const Cake = ({ onComplete, triggerConfetti }) => {
  const [blownCandles, setBlownCandles] = useState([]);
  const [isBlowing, setIsBlowing] = useState(false);

  const handleBlow = () => {
    if (isBlowing) return;
    setIsBlowing(true);

    // Blow out candles one by one
    [1, 2, 3].forEach((candleId, index) => {
      setTimeout(() => {
        setBlownCandles((prev) => [...prev, candleId]);
      }, index * 250);
    });

    // Launch confetti
    setTimeout(() => {
      triggerConfetti();
    }, 300);

    // Go to wish section
    setTimeout(() => {
      onComplete();
    }, 3200);
  };

  const isBlown = (id) => blownCandles.includes(id);

  return (
    <section id="section-cake" className="section active">
      <p className="cake-title">🎂 Make a Wish, Didi! 🎂</p>

      {/* ANIMATED CAKE SVG */}
      <svg id="cake-svg" viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg">
        {/* Plate */}
        <ellipse cx="190" cy="295" rx="170" ry="18" fill="#f8bbd0" />
        <ellipse cx="190" cy="289" rx="170" ry="14" fill="#f48fb1" />

        {/* BOTTOM TIER */}
        <rect x="50" y="220" width="280" height="70" rx="12" fill="#e91e8c" />
        <rect x="50" y="220" width="280" height="70" rx="12" fill="url(#bottomGrad)" />
        {/* Bottom tier decorations */}
        <circle cx="90" cy="255" r="8" fill="#fff" opacity=".4" />
        <circle cx="130" cy="245" r="6" fill="#ffd700" opacity=".6" />
        <circle cx="170" cy="258" r="9" fill="#fff" opacity=".35" />
        <circle cx="215" cy="243" r="7" fill="#ffd700" opacity=".55" />
        <circle cx="255" cy="257" r="8" fill="#fff" opacity=".4" />
        <circle cx="295" cy="247" r="6" fill="#ffd700" opacity=".6" />
        {/* Frosting top edge bottom tier */}
        <path
          d="M50 220 Q65 205 80 220 Q95 205 110 220 Q125 205 140 220 Q155 205 170 220 Q185 205 200 220 Q215 205 230 220 Q245 205 260 220 Q275 205 290 220 Q305 205 320 220 Q335 205 330 220"
          fill="#fff" opacity=".9" />

        {/* MIDDLE TIER */}
        <rect x="90" y="145" width="200" height="78" rx="12" fill="#ce93d8" />
        <rect x="90" y="145" width="200" height="78" rx="12" fill="url(#midGrad)" />
        {/* Mid tier decorations - flowers */}
        <circle cx="130" cy="184" r="8" fill="#f48fb1" />
        <circle cx="130" cy="184" r="4" fill="#ffd700" />
        <circle cx="190" cy="178" r="8" fill="#f48fb1" />
        <circle cx="190" cy="178" r="4" fill="#ffd700" />
        <circle cx="250" cy="184" r="8" fill="#f48fb1" />
        <circle cx="250" cy="184" r="4" fill="#ffd700" />
        {/* Frosting mid */}
        <path
          d="M90 145 Q103 131 116 145 Q129 131 142 145 Q155 131 168 145 Q181 131 194 145 Q207 131 220 145 Q233 131 246 145 Q259 131 272 145 Q285 131 290 145"
          fill="#fff" opacity=".9" />

        {/* TOP TIER */}
        <rect x="128" y="78" width="124" height="70" rx="12" fill="#f06292" />
        <rect x="128" y="78" width="124" height="70" rx="12" fill="url(#topGrad)" />
        {/* Top tier - hearts */}
        <text x="168" y="122" fontSize="20" fill="#fff" opacity=".5">♥</text>
        <text x="198" y="116" fontSize="16" fill="#ffd700" opacity=".6">♥</text>
        {/* Frosting top */}
        <path d="M128 78 Q139 64 150 78 Q161 64 172 78 Q183 64 194 78 Q205 64 216 78 Q227 64 238 78 Q249 64 252 78"
          fill="#fff" opacity=".9" />

        {/* CANDLES */}
        {/* Candle 1 */}
        <rect x="148" y="44" width="14" height="36" rx="3" fill="#ff6b6b" />
        <rect x="148" y="44" width="14" height="36" rx="3" fill="url(#candle1Grad)" />
        <line x1="155" y1="44" x2="155" y2="38" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
        <g className={`flame ${isBlown(1) ? 'blown' : ''}`}>
          <ellipse cx="155" cy="30" rx="7" ry="10" fill="#fff176" opacity=".9" />
          <ellipse cx="155" cy="31" rx="4" ry="7" fill="#ffca28" />
          <ellipse cx="155" cy="33" rx="2.5" ry="4" fill="#ff7043" />
        </g>
        <g className={`smoke ${isBlown(1) ? 'show' : ''}`}>
          <path d="M155 38 Q158 30 155 22 Q152 14 155 6" stroke="#aaa" strokeWidth="2" fill="none"
            strokeLinecap="round" />
        </g>

        {/* Candle 2 */}
        <rect x="183" y="36" width="14" height="44" rx="3" fill="#ce93d8" />
        <rect x="183" y="36" width="14" height="44" rx="3" fill="url(#candle2Grad)" />
        <line x1="190" y1="36" x2="190" y2="30" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
        <g className={`flame ${isBlown(2) ? 'blown' : ''}`}>
          <ellipse cx="190" cy="22" rx="7" ry="10" fill="#fff176" opacity=".9" />
          <ellipse cx="190" cy="23" rx="4" ry="7" fill="#ffca28" />
          <ellipse cx="190" cy="25" rx="2.5" ry="4" fill="#ff7043" />
        </g>
        <g className={`smoke ${isBlown(2) ? 'show' : ''}`}>
          <path d="M190 30 Q193 22 190 14 Q187 6 190 -2" stroke="#aaa" strokeWidth="2" fill="none"
            strokeLinecap="round" />
        </g>

        {/* Candle 3 */}
        <rect x="218" y="44" width="14" height="36" rx="3" fill="#80cbc4" />
        <rect x="218" y="44" width="14" height="36" rx="3" fill="url(#candle3Grad)" />
        <line x1="225" y1="44" x2="225" y2="38" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
        <g className={`flame ${isBlown(3) ? 'blown' : ''}`}>
          <ellipse cx="225" cy="30" rx="7" ry="10" fill="#fff176" opacity=".9" />
          <ellipse cx="225" cy="31" rx="4" ry="7" fill="#ffca28" />
          <ellipse cx="225" cy="33" rx="2.5" ry="4" fill="#ff7043" />
        </g>
        <g className={`smoke ${isBlown(3) ? 'show' : ''}`}>
          <path d="M225 38 Q228 30 225 22 Q222 14 225 6" stroke="#aaa" strokeWidth="2" fill="none"
            strokeLinecap="round" />
        </g>

        {/* "Happy Birthday" banner on cake */}
        <rect x="95" y="152" width="190" height="22" rx="6" fill="rgba(0,0,0,0.2)" />
        <text x="190" y="168" textAnchor="middle" fontFamily="Dancing Script, cursive" fontSize="14" fill="#fff"
          fontWeight="bold">Happy Birthday Didi!</text>

        {/* Gradient defs */}
        <defs>
          <linearGradient id="bottomGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
          </linearGradient>
          <linearGradient id="midGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
          </linearGradient>
          <linearGradient id="topGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
          </linearGradient>
          <linearGradient id="candle1Grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
          </linearGradient>
          <linearGradient id="candle2Grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
          </linearGradient>
          <linearGradient id="candle3Grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
          </linearGradient>
        </defs>
      </svg>

      <button 
        className="blow-btn" 
        onClick={handleBlow}
        disabled={isBlowing}
      >
        {isBlowing ? '💨 Blowing...' : '💨 Blow the Candles!'}
      </button>
    </section>
  );
};

export default Cake;
