import React, { FC } from 'react';
import BaseButton, { ButtonProps } from '../base-button/base-button';

const ColorfulButton: FC<ButtonProps> = ({ size, label }) => {
  return (
    <BaseButton
      size={size}
      label={label}
      classes={
        'bg-gradient-to-r from-pink-500 to-violet-500 hover:outline-violet-100 active:outline-violet-200'
      }
    ></BaseButton>
  );
};

export default ColorfulButton;
