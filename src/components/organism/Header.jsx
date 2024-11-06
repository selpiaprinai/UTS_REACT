import React from 'react';

const Header = () => {
    return (
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
            <div>
                <h1>WebsiteLogo</h1>
            </div>
            <nav>
                <a href="#" style={{ margin: '0 10px' }}>Beranda</a>
                <a href="#" style={{ margin: '0 10px' }}>Produk</a>
                <a href="#" style={{ margin: '0 10px' }}>Tentang</a>
            </nav>
            <div>
                <button style={{ marginRight: '10px' }}>Log In</button>
                <button>Register</button>
            </div>
        </header>
    );
};

export default Header;
