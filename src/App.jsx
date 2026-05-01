import { useState, useEffect } from 'react';
import { StarsBackground, ParticlesContainer, ConfettiContainer } from './components/Effects';
import Countdown from './components/Countdown';
import Curtain from './components/Curtain';
import Cake from './components/Cake';
import Wish from './components/Wish';
import Memories from './components/Memories';

function App() {
  const [currentSection, setCurrentSection] = useState('countdown');
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    // Preload heavy images to prevent lag when changing pages
    const imagesToPreload = ['/pic1.jpg', '/pic2.jpg', '/pic3.jpg', '/pic4.jpg', '/pic5.jpg', '/pic6.jpg', '/birthday_bg.png'];
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 5000);
  };

  return (
    <>
      <StarsBackground />
      <ParticlesContainer />
      <ConfettiContainer active={confettiActive} />

      {currentSection === 'countdown' && (
        <Countdown onComplete={() => setCurrentSection('curtain')} />
      )}
      
      {currentSection === 'curtain' && (
        <Curtain onComplete={() => setCurrentSection('cake')} />
      )}
      
      {currentSection === 'cake' && (
        <Cake 
          onComplete={() => setCurrentSection('wish')} 
          triggerConfetti={handleConfetti}
        />
      )}
      
      {currentSection === 'wish' && (
        <Wish 
          onComplete={() => setCurrentSection('memories')}
          triggerConfetti={handleConfetti}
        />
      )}
      
      {currentSection === 'memories' && <Memories />}
    </>
  );
}

export default App;
