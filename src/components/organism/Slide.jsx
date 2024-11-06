import React from 'react';
import placeholderImage from '../img/image.jpg'; // Import gambar

const Slide = () => {
    return (
        <div style={{ padding: '40px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', textAlign: 'left' }}>
            <div style={{ flex: 1 }}>
                <h2>Memberi Solusi Bisnis Anda</h2>
                <p>Disnisim ea velit odio eci omoditi facils voluptas. Consequat id ut nam at sapim manis eliquam.</p>
                <button style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff' }}>Produk Kami</button>
                <button style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff' }}>Pesan Sekarang</button>
            </div>
            <img 
                src={placeholderImage} 
                alt="Deskripsi gambar" 
                style={{ maxWidth: '300px', height: 'auto', marginLeft: '20px' }} // Atur lebar gambar sesuai kebutuhan
            />
        </div>
    );
};

export default Slide;
