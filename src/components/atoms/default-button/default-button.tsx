import React, { FC } from 'react';
import BaseButton, { ButtonProps } from '../base-button/base-button';

const DefaultButton: FC<ButtonProps> = ({ size, label, onClick }) => {
  return (
    <BaseButton
      size={size}
      label={label}
      onClick={onClick}
      classes={'bg-slate-600 hover:bg-slate-700 hover:outline-slate-100 active:outline-slate-200'}
    ></BaseButton>
  );
};

export default DefaultButton;
