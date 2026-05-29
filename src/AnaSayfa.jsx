import React, { useState } from "react";
import "./AnaSayfa.css";
import oncesiFoto from "./assets/oncesi.jpeg";
import sonrasiFoto from "./assets/sonrasi.jpeg";

export default function AnaSayfa({ setAktifSekme, toplamIhbar, cozulenSayisi }) {
  const [menuAcik, setMenuAcik] = useState(false);

  return (
    // 'page-wrapper' sınıfı CSS'te eklediğimiz sidebar için önemlidir
    <div className={`page-wrapper ${menuAcik ? 'menu-open' : ''}`}>
      
      {/* HAMBURGER MENÜ */}
      <div className="menu-trigger" onClick={() => setMenuAcik(!menuAcik)}>☰</div>
      
      <nav className={`sidebar ${menuAcik ? 'active' : ''}`}>
        <a href="#" onClick={() => setMenuAcik(false)}>🏠 Hoşgeldiniz</a>
        <a href="#" onClick={() => setMenuAcik(false)}>📊 Canlı Takip Paneli</a>
        <a href="#" onClick={() => setMenuAcik(false)}>📍 Şeffaf Harita Akışı</a>
        <a href="#" onClick={() => setMenuAcik(false)}>🏆 Liderlik Tablosu</a>
      </nav>

      {/* İÇERİK BÖLÜMÜ */}
      <div className="main-content">
        <header className="header-section">
          <h1 className="title-gradient"> BİZİM ÇEVRE'YE HOŞ GELDİN 🌿 </h1>
          <p className="slogan">Bir fotoğrafla çevreni değiştirebilirsin ✨ </p>
        </header>

        <section className="ba-container">
          <h2 style={{ color: '#2e7d32' }}>ÖNCESİ & SONRASI</h2>
          <div className="ba-images">
            <div className="img-box">
              <img src={sonrasiFoto} alt="Öncesi" />
              <div className="label">ÖNCESİ</div>
            </div>
            <div className="img-box">
              <img src={oncesiFoto} alt="Sonrası" />
              <div className="label">SONRASI</div>
            </div>
          </div>
        </section>

        <div className="stats-row">
          <div className="stat-item">
            <h3>{toplamIhbar + 1231}</h3>
            <p>ATIK BİLDİRİLDİ</p>
          </div>
          <div className="stat-item">
            <h3>{cozulenSayisi + 488}</h3>
            <p>ALAN TEMİZLENDİ</p>
          </div>
          <div className="stat-item">
            <h3>540</h3>
            <p>GÖNÜLLÜ DESTEK</p>
          </div>
        </div>

        <button className="start-btn" onClick={() => setAktifSekme('panel')}>
          HEMEN BAŞLA
        </button>
      </div>
    </div>
  );
}