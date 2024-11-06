import React from 'react';

const Card = ({ label, description }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '150px', textAlign: 'center' }}>
            <h3 style={{ color: '#ff5733' }}>{label}</h3>
            <p style={{ color: '#555' }}>{description}</p>
        </div>
    );
};

export default Card;
