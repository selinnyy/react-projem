import React, { useState } from 'react';
import SikayetFormu from './SikayetFormu.jsx';
import AnaSayfa from './AnaSayfa.jsx'; // Yeni oluşturduğumuz sayfa eklendi
import TopStats from './components/TopStats';

function App() {
  // Canlı İhbar Verileri
  const [ihbarlar, setIhbarlar] = useState([
    {
      id: 1,
      baslik: "Kontrolsüz Çöp Yığını",
      konum: "Kadıköy, Moda Sahili",
      durum: "Beklemede",
      fotograf: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500",
      tarih: "29.05.2026",
      bildiren: "Sinem Tütüncü",
      rozet: "Çevre Dostu 🌟"
    },
    {
      id: 2,
      baslik: "Atık Kirliliği",
      konum: "Samsun, Gazi Parkı",
      durum: "Beklemede",
      fotograf: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500",
      tarih: "28.05.2026",
      bildiren: "Selin Yazıcı",
      rozet: "Mahalle Kahramanı 🏆"
    },
    {
      id: 3,
      baslik: "Moloz Dökümü",
      konum: "Üsküdar, Sahil Yolu",
      durum: "Çözüldü",
      fotograf: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500",
      tarih: "27.05.2026",
      bildiren: "Sıla Çatal",
      rozet: "Doğa Gönüllüsü 🌿"
    }
  ]);

  const [liderler] = useState([
    { sira: 1, isim: "Selin Yazıcı", puan: "1250 ", ihbar: 24, rozet: "🏆 Mahalle Kahramanı" },
    { sira: 2, isim: "Sinem Tütüncü", puan: "950 ", ihbar: 18, rozet: "🌟 Çevre Dostu" },
    { sira: 3, isim: "Sıla Çatal", puan: "800 ", ihbar: 15, rozet: "🌿 Doğa Gönüllüsü" },
    { sira: 4, isim: "Ayşe Demir", puan: "650 ", ihbar: 11, rozet: "🌱 Yeni Filiz" }
  ]);

  // Varsayılan olarak uygulama artık ANASAYFA ile açılıyor
  const [aktifSekme, setAktifSekme] = useState('anasayfa'); 
  const [durumFiltresi, setDurumFiltresi] = useState('Hepsi'); 
  const [secilenIhbar, setSecilenIhbar] = useState(ihbarlar[0]);
  const [toplamYesilPuan, setToplamYesilPuan] = useState(450);
  const [cozulenSayisi, setCozulenSayisi] = useState(12);
  const [modalAcik, setModalAcik] = useState(false);

  const sorunuCoz = (id) => {
    const guncelList = ihbarlar.map((ihbar) => {
      if (ihbar.id === id) return { ...ihbar, durum: 'Çözüldü' };
      return ihbar;
    });
    setIhbarlar(guncelList);
    setSecilenIhbar(prev => ({ ...prev, durum: 'Çözüldü' }));
    setToplamYesilPuan(prev => prev + 50);
    setCozulenSayisi(prev => prev + 1);
  };

  const haneSikayetEkle = (yeniVeri) => {
    const yeniSikayet = {
      id: ihbarlar.length + 1,
      baslik: yeniVeri.baslik,
      konum: yeniVeri.konum,
      durum: "Beklemede",
      fotograf: yeniVeri.fotograf || "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500",
      tarih: "29.05.2026",
      bildiren: yeniVeri.bildiren || "Anonim Personel",
      rozet: "Saha Ekibi 🛠️"
    };
    setIhbarlar([yeniSikayet, ...ihbarlar]);
    setSecilenIhbar(yeniSikayet);
    setAktifSekme('panel'); // Ekledikten sonra canlı takip paneline yönlendir
  };

  const filtrelenmisIhbarlar = ihbarlar.filter(ihbar => {
    if (durumFiltresi === 'Hepsi') return true;
    return ihbar.durum === durumFiltresi;
  });

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f9', margin: 0, padding: 0, boxSizing: 'border-box', overflow: 'hidden' }}>
      
 {/* SOL MENÜ */}
      <div style={{ width: '260px', backgroundColor: '#2c3e50', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #34495e', paddingBottom: '15px' }}>
          <span style={{ fontSize: '24px' }}>🌿</span>
          <h2 style={{ margin: '0', fontSize: '20px', fontWeight: 'bold', color: '#2ecc71' }}>Bizim Çevre</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          {/* YENİ ANASAYFA SEKRESİ */}
          <div 
            onClick={() => setAktifSekme('anasayfa')}
            style={{ padding: '12px', backgroundColor: aktifSekme === 'anasayfa' ? '#34495e' : 'transparent', borderRadius: '6px', fontWeight: aktifSekme === 'anasayfa' ? 'bold' : 'normal', color: aktifSekme === 'anasayfa' ? '#2ecc71' : '#bdc3c7', cursor: 'pointer', transition: '0.2s' }}
          >
            🏠 Hoşgeldiniz / Anasayfa
          </div>
          <div 
            onClick={() => setAktifSekme('panel')}
            style={{ padding: '12px', backgroundColor: aktifSekme === 'panel' ? '#34495e' : 'transparent', borderRadius: '6px', fontWeight: aktifSekme === 'panel' ? 'bold' : 'normal', color: aktifSekme === 'panel' ? '#2ecc71' : '#bdc3c7', cursor: 'pointer', transition: '0.2s' }}
          >
            📊 Canlı Takip Paneli
          </div>
          <div 
            onClick={() => setAktifSekme('harita')}
            style={{ padding: '12px', backgroundColor: aktifSekme === 'harita' ? '#34495e' : 'transparent', borderRadius: '6px', fontWeight: aktifSekme === 'harita' ? 'bold' : 'normal', color: aktifSekme === 'harita' ? '#2ecc71' : '#bdc3c7', cursor: 'pointer', transition: '0.2s' }}
          >
            📍 Şeffaf Harita Akışı
          </div>
          <div 
            onClick={() => setAktifSekme('liderlik')}
            style={{ padding: '12px', backgroundColor: aktifSekme === 'liderlik' ? '#34495e' : 'transparent', borderRadius: '6px', fontWeight: aktifSekme === 'liderlik' ? 'bold' : 'normal', color: aktifSekme === 'liderlik' ? '#2ecc71' : '#bdc3c7', cursor: 'pointer', transition: '0.2s' }}
          >
            🏆 Liderlik Tablosu
          </div>



          <button 
            onClick={() => setModalAcik(true)}
            style={{
              marginTop: '20px',
              padding: '12px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            ➕ Yeni Şikayet Oluştur
          </button>
        </div>
        <div style={{ fontSize: '11px', color: '#7f8c8d', textAlign: 'center' }}>Belediye Yönetim Sistemi</div>
      </div>

      {/* SAĞ İÇERİK ALANI */}
      <div style={{ flex: 1, padding: '25px', display: 'flex', flexDirection: 'column', gap: '25px', overflowY: 'auto' }}>
        
        {/* 0. SEKME: EN YENİ ANASAYFA GÖRÜNÜMÜ */}
        {aktifSekme === 'anasayfa' && (
          <AnaSayfa 
            setAktifSekme={setAktifSekme} 
            setModalAcik={setModalAcik} 
            toplamIhbar={ihbarlar.length} 
            cozulenSayisi={cozulenSayisi} 
          />
        )}

        {/* 1. SEKME: CANLI TAKİP PANELİ */}
        {aktifSekme === 'panel' && (
          <>
            {/* ÜST İSTATİSTİKLER (Sadece yönetim panelinde gözüksün) */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #2ecc71', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '13px', color: '#7f8c8d', fontWeight: 'bold' }}>TOPLAM TOPLANAN YEŞİL PUAN</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50', marginTop: '5px' }}>💚 {toplamYesilPuan} WP</div>
              </div>
              <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #3498db', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '13px', color: '#7f8c8d', fontWeight: 'bold' }}>BU AY ÇÖZÜLEN İHBARLAR</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50', marginTop: '5px' }}>✅ {cozulenSayisi} Adet</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '25px', flex: 1, minHeight: '400px' }}>
              {/* Sol Liste */}
              <div style={{ width: '40%', backgroundColor: 'white', borderRadius: '10px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #f4f6f9', paddingBottom: '10px' }}>
                  {['Hepsi', 'Beklemede', 'Çözüldü'].map((durum) => (
                    <button
                      key={durum}
                      onClick={() => setDurumFiltresi(durum)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: 'none',
                        backgroundColor: durumFiltresi === durum ? '#2ecc71' : '#e2e8f0',
                        color: durumFiltresi === durum ? 'white' : '#7f8c8d',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      {durum}
                    </button>
                  ))}
                </div>

                <div style={{ overflowY: 'auto', flex: 1 }}>
                  {filtrelenmisIhbarlar.map((ihbar) => (
                    <div 
                      key={ihbar.id} 
                      onClick={() => setSecilenIhbar(ihbar)}
                      style={{
                        padding: '12px',
                        borderRadius: '6px',
                        border: secilenIhbar.id === ihbar.id ? '2px solid #2ecc71' : '1px solid #e2e8f0',
                        backgroundColor: secilenIhbar.id === ihbar.id ? '#f0fff4' : 'white',
                        cursor: 'pointer',
                        marginBottom: '10px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <strong style={{ color: '#2c3e50' }}>{ihbar.baslik}</strong>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', color: ihbar.durum === 'Çözüldü' ? '#2ecc71' : '#e74c3c' }}>{ihbar.durum}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#7f8c8d', marginTop: '4px' }}>📍 {ihbar.konum}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sağ Detay */}
              <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h4 style={{ margin: '0', color: '#2c3e50' }}>🔍 İhbar Detayı</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <img src={secilenIhbar.fotograf} alt={secilenIhbar.baslik} style={{ width: '150px', height: '110px', objectFit: 'cover', borderRadius: '6px' }} />
                  <div>
                    <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>{secilenIhbar.baslik}</h3>
                    <p style={{ margin: '4px 0', fontSize: '14px' }}><strong>Konum:</strong> {secilenIhbar.konum}</p>
                    <p style={{ margin: '4px 0', fontSize: '14px' }}><strong>Bildiren:</strong> {secilenIhbar.bildiren} ({secilenIhbar.rozet})</p>
                    <p style={{ margin: '4px 0', fontSize: '14px' }}><strong>Tarih:</strong> {secilenIhbar.tarih}</p>
                  </div>
                </div>

                <div style={{ flex: 1, backgroundColor: '#e3edf7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a69bd', minHeight: '120px', border: '1px dashed #4a69bd' }}>
                  <strong>🗺️ GPS Canlı Harita Takibi Aktif ({secilenIhbar.konum})</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {secilenIhbar.durum === 'Beklemede' ? (
                    <button onClick={() => sorunuCoz(secilenIhbar.id)} style={{ padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                      Saha Ekibini Yönlendir & Çöz ✅
                    </button>
                  ) : (
                    <div style={{ padding: '10px 20px', backgroundColor: '#e8f5e9', color: '#2ecc71', fontWeight: 'bold', borderRadius: '6px' }}>
                      🎉 Sorun Başarıyla Çözüldü!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* 2. SEKME: HARİTA */}
        {aktifSekme === 'harita' && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h3 style={{ margin: '0', color: '#2c3e50' }}>📍 Şeffaf Coğrafi Bilgi Haritası</h3>
            <div style={{ flex: 1, backgroundColor: '#cad2c5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px', minHeight: '350px' }}>
              <span style={{ fontSize: '40px' }}>🗺️</span>
              <strong style={{ color: '#2f3e46' }}>Genişletilmiş Uydu Harita Katmanı Yüklendi</strong>
            </div>
          </div>
        )}

        {/* 3. SEKME: LİDERLİK */}
        {aktifSekme === 'liderlik' && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', flex: 1 }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>🏆 En Çok Katkı Sağlayan Çevre Gönüllüleri</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '12px', color: '#7f8c8d' }}>Sıra</th>
                  <th style={{ padding: '12px', color: '#7f8c8d' }}>Gönüllü Vatandaş</th>
                  <th style={{ padding: '12px', color: '#7f8c8d' }}>Başarı Unvanı</th>
                  <th style={{ padding: '12px', color: '#7f8c8d' }}>Çözülen İhbar</th>
                  <th style={{ padding: '12px', color: '#7f8c8d' }}>Toplam Puan</th>
                </tr>
              </thead>
              <tbody>
                {liderler.map((lider) => (
                  <tr key={lider.sira} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold', color: lider.sira === 1 ? '#f1c40f' : '#2c3e50' }}>#{lider.sira}</td>
                    <td style={{ padding: '12px', fontWeight: '500' }}>{lider.isim}</td>
                    <td style={{ padding: '12px' }}>{lider.rozet}</td>
                    <td style={{ padding: '12px', color: '#3498db', fontWeight: 'bold' }}>{lider.ihbar} Adet</td>
                    <td style={{ padding: '12px', color: '#2ecc71', fontWeight: 'bold' }}>{lider.puan} WP</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}




      </div>

      {/* ŞİKAYET FORMU BAĞLANTISI */}
      <SikayetFormu modalAcik={modalAcik} setModalAcik={setModalAcik} onSikayetEkle={haneSikayetEkle} />

    </div>
  );
}

export default App;