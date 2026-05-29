import React from 'react';

function AnaSayfa({ setAktifSekme, setModalAcik, toplamIhbar, cozulenSayisi }) {
  // Örnek Öncesi / Sonrası Fotoğraf Verileri
  const degisimler = [
    {
      id: 1,
      bolge: "Moda Sahili",
      oncesi: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500",
      sonrasi: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
      aciklama: "Moda Sahili'ndeki kontrolsüz plastik yığınları saha ekiplerimiz ve gönüllülerimizle tamamen arındırıldı."
    },
    {
      id: 2,
      bolge: "Gazi Parkı",
      oncesi: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500",
      sonrasi: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=500",
      aciklama: "Çevre sakinlerinin ihbarı üzerine parktaki tüm katı atıklar toplanarak geri dönüşüme kazandırıldı."
    }
  ];

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', paddingBottom: '5px' }}>
      
      {/* KAHRAMAN BANNER (HERO SECTION) */}
      <div style={{ 
        background: 'linear-gradient(135deg, #2ecc71 0%, #3498db 100%)', 
        padding: '50px 30px', 
        borderRadius: '15px', 
        color: 'white', 
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(46, 204, 113, 0.15)',
        marginBottom: '35px'
      }}>
        <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 10px 0', letterSpacing: '1px' }}>
          BİR FOTOĞRAF YETER
        </h1>
        <p style={{ fontSize: '18px', fontWeight: '600', color: '#eef2f7', textTransform: 'uppercase', margin: '0 0 25px 0' }}>
          📢 SAHİP ÇIK, ÇÜNKÜ BURASI BİZİM ÇEVRE!
        </p>
        
        <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(5px)', display: 'inline-block', padding: '15px 30px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <strong style={{ fontSize: '18px' }}>
            👋 HOŞGELDİN! Bugün çevren için küçük bir adım atmaya hazır mısın?
          </strong>
        </div>

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button 
            onClick={() => setModalAcik(true)}
            style={{ padding: '12px 25px', backgroundColor: '#d35400', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(211, 84, 0, 0.3)', transition: '0.2s' }}
          >
            📸 Hemen İhbar Et (Fotoğraf Yükle)
          </button>
          <button 
            onClick={() => setAktifSekme('panel')}
            style={{ padding: '12px 25px', backgroundColor: 'white', color: '#2c3e50', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: '0.2s' }}
          >
            📊 Canlı Akışı İzle
          </button>
        </div>
      </div>

      {/* ETKİ GÖSTEREN SAMİMİ SAYAÇLAR */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={{ flex: 1, backgroundColor: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', borderBottom: '4px solid #2ecc71' }}>
          <div style={{ fontSize: '36px', marginBottom: '5px' }}>🗑️</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2ecc71' }}>{toplamIhbar + 1231}</div>
          <div style={{ fontSize: '14px', color: '#7f8c8d', fontWeight: '500', marginTop: '5px' }}>Çevre Atığı Bildirildi</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', borderBottom: '4px solid #3498db' }}>
          <div style={{ fontSize: '36px', marginBottom: '5px' }}>✨</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3498db' }}>{cozulenSayisi + 488}</div>
          <div style={{ fontSize: '14px', color: '#7f8c8d', fontWeight: '500', marginTop: '5px' }}>Kirli Alan Tamamen Temizlendi</div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', borderBottom: '4px solid #e67e22' }}>
          <div style={{ fontSize: '36px', marginBottom: '5px' }}>💚</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#e67e22' }}>540</div>
          <div style={{ fontSize: '14px', color: '#7f8c8d', fontWeight: '500', marginTop: '5px' }}>Aktif Gönüllü Vatandaş Destek Verdi</div>
        </div>
      </div>

      {/* GERÇEK DEĞİŞİM - ÖNCESİ / SONRASI BÖLÜMÜ */}
      <div style={{ backgroundColor: '#fdfefe', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '22px', color: '#2c3e50' }}>🌱 Gerçek Değişim: Fotoğraflarla Başarı Hikayeleri</h2>
        <p style={{ margin: '0 0 25px 0', color: '#7f8c8d', fontSize: '15px' }}>Tek bir ihbarınızın mahallenizde yarattığı inanılmaz dönüşümü inceleyin.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {degisimler.map((item) => (
            <div key={item.id} style={{ display: 'flex', gap: '20px', alignItems: 'center', backgroundColor: '#fcfcfc', padding: '15px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
              
              {/* ÖNCESİ */}
              <div style={{ flex: 1, position: 'relative' }}>
                <img src={item.oncesi} alt="Öncesi" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#e74c3c', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>🛑 ÖNCESİ</span>
              </div>

              {/* OK İŞARETİ */}
              <div style={{ fontSize: '30px', color: '#bdc3c7' }}>➡️</div>

              {/* SONRASI */}
              <div style={{ flex: 1, position: 'relative' }}>
                <img src={item.sonrasi} alt="Sonrası" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#2ecc71', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>✨ SONRASI</span>
              </div>

              {/* AÇIKLAMA METNİ  */}
              <div style={{ flex: 1.2, padding: '0 10px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#d35400' }}>📍 {item.bolge}</h4>
                <p style={{ margin: '0', fontSize: '14px', color: '#5d6d7e', lineHeight: '1.5' }}>{item.aciklama}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default AnaSayfa;