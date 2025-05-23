// src/components/layout/Main.tsx
import React from 'react';

interface MainProps {
  children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main style={{ padding: '1rem', minHeight: 'calc(100vh - 120px)' /* Adjust based on topbar/footer height */ }}>
      {children || <p>Main Content Area</p>}
    </main>
  );
};

export default Main;
