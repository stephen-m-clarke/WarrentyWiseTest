import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '8px 12px', borderRadius: 4 }}>
      {children}
    </button>
  );
};

export default Button;
