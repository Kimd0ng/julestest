// src/components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center', position: 'relative', bottom: 0, width: '100%' }}>
      <p>© {new Date().getFullYear()} Your Awesome Company</p>
    </footer>
  );
};

export default Footer;
