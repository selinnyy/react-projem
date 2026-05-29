import React, { useState } from 'react';

function App() {
  // İhbarları React state içine alıyoruz ki butonlara basınca durumları canlı değişebilsin
  const [ihbarlar, setIhbarlar] = useState([
    {
      id: 1,
      baslik: "Kontrolsüz Çöp Yığını",
      konum: "Kadıköy, Moda Sahili",
      durum: "Beklemede",
      fotograf: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500",
      tarih: "29.05.2026"
    },
    {
      id: 2,
      baslik: "Plastik Atık Kirliliği",
      konum: "Beşiktaş, Abbasağa Parkı",
      durum: "Beklemede",
      fotograf: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500",
      tarih: "28.05.2026"
    },
    {
      id: 3,
      baslik: "Moloz Dökümü",
      konum: "Üsküdar, Sahil Yolu",
      durum: "Beklemede",
      fotograf: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500",
      tarih: "29.05.2026"
    }
  ]);

  // Butona basıldığında durumu "Çözüldü" yapan fonksiyon
  const durumuGuncelle = (id) => {
    const yeniList = ihbarlar.map((ihbar) => {
      if (ihbar.id === id) {
        return { ...ihbar, durum: 'Çözüldü' };
      }
      return ihbar;
    });
    setIhbarlar(yeniList);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      
      {/* Üst Başlık */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2ecc71', margin: '0' }}>Bizim Çevre - Yönetim Paneli</h1>
        <p style={{ color: '#7f8c8d' }}>Vatandaşlardan Gelen Anlık Çevre Kirliliği İhbarları</p>
      </div>

      {/* İhbar Kartları */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {ihbarlar.map((ihbar) => (
          <div key={ihbar.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            width: '300px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <img src={ihbar.fotograf} alt={ihbar.baslik} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#2c3e50' }}>{ihbar.baslik}</h3>
              <p style={{ margin: '5px 0', fontSize: '14px', color: '#7f8c8d' }}>📍 <strong>Konum:</strong> {ihbar.konum}</p>
              <p style={{ margin: '5px 0', fontSize: '14px', color: '#7f8c8d' }}>📅 <strong>Tarih:</strong> {ihbar.tarih}</p>
              
              <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Durum Rozeti */}
                <span style={{
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: ihbar.durum === 'Çözüldü' ? '#2ecc71' : '#e74c3c',
                  color: '#ffffff'
                }}>
                  {ihbar.durum}
                </span>

                {/* Sorunu Çöz Butonu */}
                {ihbar.durum !== 'Çözüldü' && (
                  <button 
                    onClick={() => durumuGuncelle(ihbar.id)}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}
                  >
                    Sorunu Çöz ✅
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default App;