import { useState, useEffect } from 'react';

const Countdown = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const circumference = 2 * Math.PI * 100; // ~628

  useEffect(() => {
    if (timeLeft <= 0) {
      const timeout = setTimeout(onComplete, 800);
      return () => clearTimeout(timeout);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const progress = timeLeft > 0 ? timeLeft / 10 : 0;
  const strokeDashoffset = circumference * (1 - progress);
  const hue = Math.round(Math.max(timeLeft, 0) * 30);
  const ringColor = `hsl(${hue}, 90%, 65%)`;

  return (
    <section id="section-countdown" className="section active">
      <div className="countdown-sub">✨ Something magical is loading ✨</div>
      <div className="countdown-ring">
        <svg width="220" height="220" viewBox="0 0 220 220">
          <circle className="ring-bg" cx="110" cy="110" r="100" />
          <circle
            className="ring-fg"
            id="ring-progress"
            cx="110"
            cy="110"
            r="100"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              stroke: ringColor,
            }}
          />
        </svg>
        <div 
          className="countdown-number" 
          id="countdown-num"
          style={timeLeft <= 0 ? { fontSize: '4rem' } : {}}
        >
          {timeLeft > 0 ? timeLeft : '🎂'}
        </div>
      </div>
      <div className="hearts-row">
        <span>💖</span>
        <span>🌸</span>
        <span>🎀</span>
        <span>🌸</span>
        <span>💖</span>
      </div>
    </section>
  );
};

export default Countdown;
