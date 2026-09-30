import pfpceunah from './assets/ppakjgo.jpg';

function About() {
  return (
    <div className="page-container">
      <h2>About Me</h2>
      <div className="profile-card">
        <div className="imgcontainer">
          <img src={pfpceunah} alt="Foto Profil" className="profile-img" />
        </div>
        <div className="profile-header-text">
          <h3>Daffa Muttaqin</h3>
          <p className="subtitle">Haloo semuanyaa perkenalkan nama saya Daffa Muttaqin, saya adalah mahasiswa semester 3 dari Universitas Pendidikan Indonesia ^^</p>
        </div>
      </div>

      <div className="about-card">
        <h3>📌 Personal Information</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Nama Lengkap</span>
            <span className="info-value">Daffa Muttaqin</span>
          </div>
          <div className="info-item">
            <span className="info-label">NIM</span>
            <span className="info-value">2504148</span>
          </div>
          <div className="info-item">
            <span className="info-label">Program Studi</span>
            <span className="info-value">Pendidikan Ilmu Komputer</span>
          </div>
          <div className="info-item">
            <span className="info-label">Kelas</span>
            <span className="info-value">3B</span>
          </div>
          <div className="info-item">
            <span className="info-label">Tempat, Tanggal Lahir</span>
            <span className="info-value">Bandung, 23 Juli 2007</span>
          </div>
          <div className="info-item full-width">
            <span className="info-label">Alamat</span>
            <span className="info-value">Jl. Raya Soreang Banjaran Kp. Citaliktik No. 92</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;