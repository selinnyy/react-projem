import React, { useState } from 'react';

function SikayetFormu({ modalAcik, setModalAcik, onSikayetEkle }) {
  const [yeniBaslik, setYeniBaslik] = useState('');
  const [yeniKonum, setYeniKonum] = useState('');
  const [yeniBildiren, setYeniBildiren] = useState('');
  const [yeniFoto, setYeniFoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!yeniBaslik || !yeniKonum) return;

    onSikayetEkle({
      baslik: yeniBaslik,
      konum: yeniKonum,
      bildiren: yeniBildiren,
      fotograf: yeniFoto
    });

    // Formu sıfırla ve kapat
    setYeniBaslik('');
    setYeniKonum('');
    setYeniBildiren('');
    setYeniFoto('');
    setModalAcik(false);
  };

  if (!modalAcik) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', width: '400px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>➕ Yeni Çevre İhbarı Kaydı</h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#7f8c8d' }}>Şikayet Başlığı *</label>
            <input type="text" placeholder="Örn: Parkta Kırık Banklar" value={yeniBaslik} onChange={(e) => setYeniBaslik(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} required />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#7f8c8d' }}>Konum (İlçe, Mahalle) *</label>
            <input type="text" placeholder="Örn: Atakum, Yenimahalle" value={yeniKonum} onChange={(e) => setYeniKonum(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} required />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#7f8c8d' }}>Bildiren Kişi</label>
            <input type="text" placeholder="Örn: Can Yılmaz" value={yeniBildiren} onChange={(e) => setYeniBildiren(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#7f8c8d' }}>Fotoğraf Linki (İsteğe Bağlı)</label>
            <input type="text" placeholder="https://..." value={yeniFoto} onChange={(e) => setYeniFoto(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '15px' }}>
            <button type="button" onClick={() => setModalAcik(false)} style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>İptal</button>
            <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>İhbarı Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SikayetFormu;