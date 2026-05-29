import React from "react";
import "./AnaSayfa.css";
import oncesiFoto from "./assets/oncesi.jpeg";
import sonrasiFoto from "./assets/sonrasi.jpeg";

export default function AnaSayfa({ setAktifSekme, toplamIhbar, cozulenSayisi }) {
  return (
    <div className="home-wrapper">
      <header className="header-section">
        <h1 className="title-gradient">BİR FOTOĞRAF YETER</h1>
        <p className="slogan">ÇEVRENİ DEĞİŞTİR, GELECEĞİ KURTAR</p>
      </header>

      <section className="ba-container">
        <h2 style={{ color: '#2e7d32' }}>ÖNCESİ & SONRASI</h2>
        <div className="ba-images">
          <div className="img-box">
            {/* Fotoğraflar burada yer değişti */}
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
  );
}