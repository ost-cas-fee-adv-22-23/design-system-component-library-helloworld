import * as React from 'react';
import { FC, ReactNode } from 'react';

export type ButtonProps = {
  size?: 'M' | 'L';
  label?: string;
  variant?: 'default' | 'purple' | 'gradient';
  children?: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ size, label, onClick, variant, children }) => {
  const purpleVariant =
    'bg-violet-600 hover:bg-violet-700 hover:outline-violet-100 active:outline-violet-200';
  const defaultVariant =
    'bg-slate-600 hover:bg-slate-700 hover:outline-slate-100 active:outline-slate-200';
  const gradientVariant =
    'bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-gradient70 hover:outline-violet-100 active:outline-violet-200 active:bg-gradient80';

  const defaultClasses =
    'text-white py-xxs px-xs rounded-s outline hover:outline-3 active:outline-4 relative';
  const currentSize = size === 'M' ? 'w-150 h-40' : 'w-178 h-48';
  return (
    <button
      className={`${defaultClasses} - ${currentSize} - ${
        variant === 'purple'
          ? purpleVariant
          : variant === 'gradient'
          ? gradientVariant
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
