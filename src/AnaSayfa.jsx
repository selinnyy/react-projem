import React, { useState } from "react";
import "./AnaSayfa.css";

// Oluşturduğumuz bileşenleri içeri aktarıyoruz
import Header from "./components/Header";
import StatItem from "./components/StatItem";
import StartButton from "./components/StartButton";
import { TaBar } from "./components/tabbar";

// Not: Kullanmadığın fotoğrafları ileride kullanmayacaksan kod kalabalığı 
// yapmaması için import satırlarını silebilirsin.
// import oncesiFoto from "./assets/oncesi.jpeg";
// import sonrasiFoto from "./assets/sonrasi.jpeg";
// import sahilFoto from"./assets/sahil.jpeg";
// import sahilkirliFoto from"./assets/sahilkirli.jpeg";

export default function AnaSayfa({ setAktifSekme, toplamIhbar, cozulenSayisi }) {
  const [menuAcik, setMenuAcik] = useState(false);

  return (
    <div className={`page-wrapper ${menuAcik ? 'menu-open' : ''}`}>
      
      <div className="main-content">
        {/* Parçaladığımız Header Bileşeni */}
        <Header />

        {/* Tab Bar Bileşeni */}
        <TaBar />
        <br />

        {/* Dinamik İstatistik Bileşenleri */}
        <div className="stats-row">
          <StatItem count={toplamIhbar + 1231} label="ATIK BİLDİRİLDİ" />
          <StatItem count={cozulenSayisi + 488} label="ALAN TEMİZLENDİ" />
          <StatItem count={540} label="GÖNÜLLÜ DESTEK" />
        </div>

        {/* Parçaladığımız Buton Bileşeni */}
        <StartButton onClick={() => setAktifSekme('panel')} />
      </div>

    </div>
  );
}