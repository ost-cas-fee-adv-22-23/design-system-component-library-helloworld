import React, { FC } from 'react';
import BaseButton, { ButtonProps } from '../base-button/base-button';

const PurpleButton: FC<ButtonProps> = ({ size, label, onClick }) => {
  return (
    <BaseButton
      size={size}
      label={label}
      onClick={onClick}
      classes={
        'bg-violet-600 hover:bg-violet-700 hover:outline-violet-100 active:outline-violet-200'
      }
    ></BaseButton>
  );
};

export default PurpleButton;
