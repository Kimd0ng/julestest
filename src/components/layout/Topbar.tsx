// src/components/layout/Topbar.tsx
import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '1rem', textAlign: 'center' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
