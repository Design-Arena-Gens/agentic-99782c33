import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...rest }) => {
  const variantClass =
    variant === 'primary' ? 'btn-primary' :
    variant === 'secondary' ? 'btn-secondary' :
    variant === 'outline' ? 'btn-outline' :
    'btn-ghost';

  return (
    <button {...rest} className={["btn", variantClass, className].filter(Boolean).join(' ')} />
  );
};
