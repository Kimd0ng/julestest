// src/components/common/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = "font-bold py-2 px-4 rounded";
  const styles = {
    primary: `${baseStyle} bg-blue-500 hover:bg-blue-700 text-white`,
    secondary: `${baseStyle} bg-gray-500 hover:bg-gray-700 text-white`,
  };

  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
};

export default Button;
