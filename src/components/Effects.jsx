import { useEffect, useState, memo } from 'react';

export const StarsBackground = memo(() => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 80; i++) {
      const sz = Math.random() * 2.5 + 0.5;
      newStars.push({
        id: i,
        width: `${sz}px`,
        height: `${sz}px`,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 4}s`,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div id="star-bg">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            width: s.width,
            height: s.height,
            top: s.top,
            left: s.left,
            animationDuration: s.animationDuration,
            animationDelay: s.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
});

export const ParticlesContainer = memo(() => {
  const [particles, setParticles] = useState([]);
  const particleColors = ['#ff6fbf', '#ffd700', '#ce93d8', '#80cbc4', '#f48fb1', '#fff176'];

  useEffect(() => {
    const spawnParticle = () => {
      const id = Date.now() + Math.random();
      const sz = Math.random() * 12 + 4;
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      
      const newParticle = {
        id,
        width: `${sz}px`,
        height: `${sz}px`,
        left: `${Math.random() * 100}vw`,
        background: color,
        animationDuration: `${Math.random() * 6 + 5}s`,
        animationDelay: `${Math.random() * 3}s`,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove after 10 seconds (animation finishes)
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 10000);
    };

    const intervalId = setInterval(spawnParticle, 400);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            background: p.background,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
});

export const ConfettiContainer = memo(({ active }) => {
  const [confettiPieces, setConfettiPieces] = useState([]);
  const confettiColors = ['#ff6fbf', '#ffd700', '#ce93d8', '#80cbc4', '#f48fb1', '#4dd0e1', '#ff7043', '#a5d6a7'];

  useEffect(() => {
    if (!active) return;

    const newPieces = [];
    for (let i = 0; i < 300; i++) {
      const isRect = Math.random() > 0.5;
      const size = Math.random() * 10 + 6;
      const id = Date.now() + i;
      
      newPieces.push({
        id,
        left: `${Math.random() * 100}vw`,
        width: `${size}px`,
        height: `${isRect ? size * 1.5 : size}px`,
        borderRadius: isRect ? '2px' : '50%',
        background: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        animationDuration: `${Math.random() * 2 + 2}s`,
        animationDelay: `${Math.random() * 1.5}s`,
      });
    }

    setConfettiPieces(newPieces);

    const timeout = setTimeout(() => {
      setConfettiPieces([]);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div id="confetti-container">
      {confettiPieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            borderRadius: p.borderRadius,
            background: p.background,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
});

