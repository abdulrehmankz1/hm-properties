'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'primary-outline'
  | 'secondary-outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-black text-white hover:bg-neutral-800',
  secondary:
    'bg-white text-black hover:bg-neutral-200',
  'primary-outline':
    'border border-black text-black bg-transparent hover:bg-black hover:text-white',
  'secondary-outline':
    'border border-white text-white bg-transparent hover:bg-white hover:text-black',
};

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'py-3 px-7 rounded-[30px] flex items-center justify-center transition-all duration-200 cursor-pointer';

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
