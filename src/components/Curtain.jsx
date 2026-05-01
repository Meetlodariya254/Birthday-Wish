import { useState } from 'react';

const Curtain = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    if (e) e.stopPropagation();
    if (isOpen) return;
    
    setIsOpen(true);
    setTimeout(() => {
      onComplete();
    }, 2200);
  };

  return (
    <section 
      id="section-curtain" 
      className="section active"
      onClick={handleOpen}
    >
      <div 
        className={`curtain-wrapper ${isOpen ? 'curtain-open' : ''}`} 
        id="curtain-wrapper"
      >
        <div className="curtain-left"></div>
        <div className="curtain-right"></div>
      </div>
      <div 
        className="click-hint" 
        id="click-hint"
        style={{
          opacity: isOpen ? '0' : '1',
          transition: isOpen ? 'opacity 0.4s' : 'none',
        }}
      >
        <h2>🎭 A Surprise Awaits...</h2>
        <p>Tap anywhere to reveal</p>
        <button 
          className="click-btn" 
          id="reveal-btn"
          onClick={handleOpen}
        >
          ✨ Open the Surprise ✨
        </button>
      </div>
    </section>
  );
};

export default Curtain;
