import * as React from 'react';
import { FC, ReactNode } from 'react';

export type InputProps = {
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'number' | 'password';
  children?: ReactNode;
  actionLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Input: FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  children,
  onClick,
  actionLabel
}) => {
  return (
    <div className={'block text-slate-700'}>
      <label>{label}</label>
      <div className={'w-264 h-48 relative'}>
        <button
          className={
            'first:w-8 first:h-8 first:flex first:absolute first:right-s first:top-s first:bottom-s first:fill-slate-600'
          }
          onClick={onClick}
        >
          {children}
          <span className={'sr-only'}>{actionLabel}</span>
        </button>
        <input
          type={type}
          placeholder={placeholder}
          className={
            'w-264 h-48 border-1 border-slate-100 hover:border-violet-600 focus:border-violet-600 focus:outline focus:outline-none focus:border-2 rounded-s px-s'
          }
        ></input>
      </div>
    </div>
  );
};

export default Input;
