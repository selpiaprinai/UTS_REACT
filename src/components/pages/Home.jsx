import React from 'react';
import Header from '../organism/Header';
import Slide from '../organism/Slide';
import Card from '../molekul/Card';
import Konsultasi from '../organism/Konsultasi';
import Footer from '../organism/Footer';

function Home() {
    return (
      <div style={{ padding: 0, margin: 0 }}>
        <Header />
        <Slide />
        <section style={{ padding: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#007bff' }}>Perusahaan yang Telah Bergabung</h2>
          <p style={{ color: '#FFFFFF' }}> {/* Warna teks diubah menjadi putih */}
            Rhoncus morbi et augue nec, id ullamcorper et sit.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis accusamus excepturi numquam 
            inventore facere praesentium provident ipsum accusantium at quod quas doloribus autem velit aperiam sequi quaerat omnis, odio harum.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Card label="250+" description="Happy Clients" />
            <Card label="600+" description="Completed Projects" />
            <Card label="1.8k+" description="Available Resources" />
            <Card label="11k+" description="Subscribers" />
          </div>
        </section>
        <Konsultasi />
        <Footer />
      </div>
    );
}

export default Home;
