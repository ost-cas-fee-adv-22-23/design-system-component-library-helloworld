import React, { FC } from 'react';
import MumbleIconSvGComponent from '../../atoms/icon/mumble-icon';

export type InputProps = {
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'number';
};

const Input: FC<InputProps> = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className={'block text-slate-700'}>
      <label>{label}</label>
      <div className={'w-264 h-48 relative'}>
        <MumbleIconSvGComponent className="w-8 h-8 flex absolute right-s top-s bottom-s" />
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
