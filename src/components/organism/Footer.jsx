import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '20px', backgroundColor: '#343a40', color: '#fff', textAlign: 'center' }}>
            <h3>WebsiteLogo</h3>
            <nav>
                <a href="#" style={{ color: '#fff', margin: '0 10px' }}>Beranda</a>
                <a href="#" style={{ color: '#fff', margin: '0 10px' }}>Produk</a>
                <a href="#" style={{ color: '#fff', margin: '0 10px' }}>Tentang</a>
            </nav>
            <p>&copy; 2024 Perusahaan Kami. Semua Hak Cipta Dilindungi.</p>
        </footer>
    );
};

export default Footer;
