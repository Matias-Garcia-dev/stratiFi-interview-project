import React from 'react';

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({ type, onClick, children }: ButtonProps): JSX.Element {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
