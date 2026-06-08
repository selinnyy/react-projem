
import React, { useState } from "react";
import "../AnaSayfa.css";
import oncesiFoto from "../assets/oncesi.jpeg";
import sonrasiFoto from "../assets/sonrasi.jpeg";
import sahilFoto from"../assets/sahil.jpeg";
import sahilkirliFoto from"../assets/sahilkirli.jpeg";

export function TaBar() {
  return (
    <section className="ba-container">
      <h2 style={{ color: "#2e7d32" }}>ÖNCESİ & SONRASI</h2>
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
  );
}
