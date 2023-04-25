import React, { FC, ReactNode } from 'react';

export type IconButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  variant?: 'default' | 'purple' | 'gradient';
  iconText?: string;
};

const IconButton: FC<IconButtonProps> = ({ label, onClick, children, variant, iconText }) => {
  const purpleVariant =
      'bg-violet-700 hover:bg-violet-600 hover:outline-violet-100 active:outline-violet-200';
  const defaultVariant =
      'bg-slate-700 hover:bg-slate-600 hover:outline-slate-100 active:outline-slate-200';
  const gradientVariant =
      'bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-gradient70 hover:outline-violet-100 active:outline-violet-200 active:bg-gradient80';
  const defaultClasses =
      'flex flex-col items-center justify-center outline outline-none outline-offset-0 hover:outline-3 active:outline-4 h-48 w-48 rounded-full';
  const iconTextClasses =
      'flex flex-col items-center justify-center outline outline-none outline-offset-0 hover:outline-3 active:outline-4 h-48 w-64 rounded-none';
  const hasIconText = !!iconText;

  return (
    <button
      className={ `${ hasIconText ? iconTextClasses : defaultClasses} - ${
        variant === 'purple' 
            ? purpleVariant 
            : variant === 'gradient' 
                ? gradientVariant
                : defaultVariant
      }`}
      onClick={onClick}
    >
      <div className={'first:fill-white'}>
        <span>{children}</span>
        <span className={'sr-only'}>{label}</span>
      </div>
      <span className={'first:fill-white label-S'}>{iconText}</span>
    </button>
  );
};

export default IconButton;
