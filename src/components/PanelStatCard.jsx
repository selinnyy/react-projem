// src/components/PanelStatCard.jsx
import React from "react";

export default function PanelStatCard({ title, value, icon, borderColor }) {
  return (
    <div style={{ 
      flex: 1, 
      backgroundColor: 'white', 
      padding: '20px', 
      borderRadius: '10px', 
      borderLeft: `5px solid ${borderColor}`, 
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)' 
    }}>
      <div style={{ fontSize: '13px', color: '#7f8c8d', fontWeight: 'bold', textTransform: 'uppercase' }}>
        {title}
      </div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50', marginTop: '5px' }}>
        {icon} {value}
      </div>
    </div>
  );
}