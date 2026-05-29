import React from "react";
import "./AnaSayfa.css";
import oncesiFoto from "./assets/oncesi.jpeg";
import sonrasiFoto from "./assets/sonrasi.jpeg";

export default function AnaSayfa({ setAktifSekme, toplamIhbar, cozulenSayisi }) {
  return (
    <div className="home-wrapper">
      <div className="header-section">
        <h1>BİR FOTOĞRAF YETER</h1>
        <p>SAHİP ÇIK, ÇÜNKÜ BURASI BİZİM ÇEVRE</p>
      </div>

      <div className="ba-container">
        <div style={{ textAlign: 'center', marginBottom: '15px', fontWeight: 'bold' }}>BEFORE & AFTER</div>
        <div className="ba-images">
          <div className="img-box">
            <img src={oncesiFoto} alt="Öncesi" />
            <div className="label">ÖNCESİ</div>
          </div>
          <div className="img-box">
            <img src={sonrasiFoto} alt="Sonrası" />
            <div className="label">SONRASI</div>
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-item"><h3>{toplamIhbar + 1231}</h3><p>ATIK BİLDİRİLDİ</p></div>
        <div className="stat-item"><h3>{cozulenSayisi + 488}</h3><p>ALAN TEMİZLENDİ</p></div>
        <div className="stat-item"><h3>540</h3><p>GÖNÜLLÜ DESTEK</p></div>
      </div>

      <button className="start-btn" onClick={() => setAktifSekme('panel')}>Hemen Başla</button>
    </div>
  );
}