import React, { FC, ReactNode } from 'react';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary'
}

export type ButtonProps = {
  size?: 'M' | 'L';
  label?: string;
  classes?: string;
  variant?: 'default' | 'purple' | 'colorful';
  test?: ButtonType;
  children?: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ size, label, classes, onClick, variant, children, test }) => {
  const purpleVariant =
    'bg-violet-600 hover:bg-violet-700 hover:outline-violet-100 active:outline-violet-200';
  const defaultVariant =
    'bg-slate-600 hover:bg-slate-700 hover:outline-slate-100 active:outline-slate-200';
  const colorfulVariant =
    'bg-gradient-to-r from-pink-500 to-violet-500 hover:outline-violet-100 active:outline-violet-200';

  const defaultClasses =
    'text-white py-xxs px-xs rounded-s outline hover:outline-3 active:outline-4 relative';
  const currentSize = size === 'M' ? 'w-150 h-40' : 'w-178 h-48';
  return (
    <button
      className={`${defaultClasses} - ${classes} - ${currentSize} - ${
        variant === 'purple'
          ? purpleVariant
          : variant === 'colorful'
          ? colorfulVariant
          : defaultVariant
      }`}
      onClick={onClick}
    >
      <div className={'flex items-center justify-between'}>
        {label}
        <div className={'fill-white absolute right-s'}>{children}</div>
      </div>
    </button>
  );
};

export default Button;
