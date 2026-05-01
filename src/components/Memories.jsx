const Memories = () => {
  return (
    <section id="section-memories" className="section active">
      <div className="memories-title">Your Beautiful Moments 📸</div>
      <div className="memories-sub">✨ Capturing the magic of you ✨</div>
      <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#ffb3c6', fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.9 }}>
        * Note: Raw placeholder images are used here *
      </div>

      <div className="photos-grid" id="photos-grid">
        {/* Photo Card 1 */}
        <div className="photo-card">
          <div className="photo-frame" style={{ '--rot': '-3deg' }}>
            <img src="/pic1.jpg" alt="Memory" />
            <div className="photo-caption">Absolutely Stunning 💕</div>
          </div>
        </div>
        {/* Photo Card 2 */}
        <div className="photo-card">
          <div className="photo-frame" style={{ '--rot': '2deg' }}>
            <img src="/pic2.jpg" alt="Memory" style={{ objectPosition: 'center' }} />
            <div className="photo-caption">Radiant Smile ✨</div>
          </div>
        </div>
        {/* Photo Card 3 */}
        <div className="photo-card">
          <div className="photo-frame" style={{ '--rot': '-1deg' }}>
            <img src="/pic3.jpg" alt="Memory" />
            <div className="photo-caption">Pure Joy 🌸</div>
          </div>
        </div>
        {/* Photo Card 4 */}
        <div className="photo-card">
          <div className="photo-frame" style={{ '--rot': '3deg' }}>
            <img src="/pic4.jpg" alt="Memory" />
            <div className="photo-caption">Shining Bright ⭐</div>
          </div>
        </div>
        {/* Photo Card 5 */}
        <div className="photo-card">
          <div className="photo-frame" style={{ '--rot': '-2deg' }}>
            <img src="/pic5.jpg" alt="Memory" />
            <div className="photo-caption">Beautiful Soul 🎀</div>
          </div>
        </div>
        {/* Photo Card 6 */}
        <div className="photo-card">
          <div className="photo-frame" style={{ '--rot': '1deg' }}>
            <img src="/pic6.jpg" alt="Memory" style={{ objectPosition: 'top' }} />
            <div className="photo-caption">Always Gorgeous 💖</div>
          </div>
        </div>
      </div>

      <div className="final-footer">
        <div className="love-msg">You Are My Everything, Didi! 💛</div>
        <div className="from-msg">— Happy 🎂 Birthday — April 27th —</div>
        <div className="balloons-row">
          <span>🎈</span>
          <span>🎉</span>
          <span>🎊</span>
          <span>🎈</span>
          <span>💖</span>
          <span>🎈</span>
        </div>
      </div>
    </section>
  );
};

export default Memories;
