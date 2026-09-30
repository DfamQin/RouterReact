function Contact() {
  return (
    <div className="page-container">
      <h2>Contact & Socials</h2>

      {/* Kartu Informasi Kontak Direct */}
      <div className="contact-card">
        <h3>📞 Direct Contact</h3>
        <div className="contact-info-list">
          <div className="contact-item">
            <span className="contact-label">Telepon / WA:</span>
            <span className="contact-value">085720125974</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <span className="contact-value">shikimizuu@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Kartu Link Social Media */}
      <div className="contact-card">
        <h3>🌐 Social Media</h3>
        <div className="social-grid">
          <a
            href="https://www.instagram.com/dfamqin/"
            target="_blank"
            rel="noreferrer"
            className="social-btn instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@shikimizuuu"
            target="_blank"
            rel="noreferrer"
            className="social-btn tiktok"
          >
            TikTok
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100021882160758"
            target="_blank"
            rel="noreferrer"
            className="social-btn facebook"
          >
            Facebook
          </a>
          <a
            href="https://guns.lol/1tsm1ju./"
            target="_blank"
            rel="noreferrer"
            className="social-btn bio-link"
          >
            One For All
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;