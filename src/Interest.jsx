import musicImg from './assets/musikceunah.png';
import gameImg from './assets/gamingcenah.png';
import tiktokImg from './assets/tiktokceunah.png';

function Interest() {
  return (
    <div className="page-container">
      <h2>Interest</h2>
      <div className="interest">
        <div className="interest-card">
          <img src={musicImg} alt="Playlist" className="interest-img" />
          <div className="interest-info">
            <h3>🎵 Music & Playlist</h3>
            <p>K-Pop / KR Playlist (aespa, Hearts2Hearts, dll.)</p>
          </div>
        </div>

        <div className="interest-card">
          <img src={gameImg} alt="Roblox Game" className="interest-img" />
          <div className="interest-info">
            <h3>🎮 Gaming</h3>
            <p>Roblox (Blade Ball, Item Duels & Trading)</p>
          </div>
        </div>

        <div className="interest-card">
          <img src={tiktokImg} alt="TikTok Profile" className="interest-img" />
          <div className="interest-info">
            <h3>🎬 Content Creation</h3>
            <p>TikTok Video Creator (@shikimizuuu / m1ju)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;