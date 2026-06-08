// src/components/TopStats.jsx
import React from "react";
import PanelStatCard from "./PanelStatCard";

export default function TopStats({ toplamYesilPuan, cozulenSayisi }) {
  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
      
      {/* Yeşil Puan Kartı */}
      <PanelStatCard 
        title="TOPLAM TOPLANAN YEŞİL PUAN" 
        value={`${toplamYesilPuan} WP`} 
        icon="💚" 
        borderColor="#2ecc71" 
      />

      {/* Çözülen İhbar Kartı */}
      <PanelStatCard 
        title="BU AY ÇÖZÜLEN İHBARLAR" 
        value={`${cozulenSayisi} Adet`} 
        icon="✅" 
        borderColor="#3498db" 
      />
      
    </div>
  );
}