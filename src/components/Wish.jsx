const Wish = ({ onComplete, triggerConfetti }) => {
  const handleNext = () => {
    triggerConfetti();
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <section id="section-wish" className="section active">
      <div className="wish-card">
        <div className="wish-emoji">🥳</div>
        <div className="wish-title">Happy Birthday</div>
        <div className="wish-name">My Dearest Didi! 💖</div>
        <div className="wish-date">🌟 April 27th 🌟</div>
        <p className="wish-message">
          On this beautiful day, I want to tell you how much you mean to me.
          You are not just my elder sister — you are my Angel -<span className="highlight"> with whom i feel like i'm in heaven,</span>
          my best friend - <span className="highlight">who understands me without saying a word,</span> my safe place - <span className="highlight">who kept all my secrets.</span>
          <br /><br />
          You have always been there for me through every storm and every sunshine.
          <span className="highlight">I love you more than words could ever express—
          more than the stars in the sky, more than the waves of the ocean,
          more than myself.</span>
          <br /><br />
          May this extraordinary day bring you all the joy, love, and magic you deserve.
          May every dream you hold dear come true, and may this year be your most beautiful yet! 🌸
        </p>
        <div className="wish-signature">— With all my love, forever & always 💝</div>
        <button className="next-btn" onClick={handleNext}>
          📸 See Your Beautiful Photos
        </button>
      </div>
    </section>
  );
};

export default Wish;
