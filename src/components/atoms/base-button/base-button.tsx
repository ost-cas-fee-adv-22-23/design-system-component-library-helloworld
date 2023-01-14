import React, { FC } from 'react';
import MumbleIconSvGComponent from '../icon/mumble-icon';

export enum ButtonSize {
  m = 'm',
  l = 'l'
}

export type ButtonProps = {
  size?: ButtonSize;
  label?: string;
  classes?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const BaseButton: FC<ButtonProps> = ({ size, label, classes, onClick }) => {
  const defaultClasses =
    'text-white py-xxs px-xs rounded-s outline hover:outline-3 active:outline-4 relative';
  const currentSize = size === ButtonSize.m ? 'w-150 h-40' : 'w-178 h-48';
  return (
    <button className={`${defaultClasses} - ${classes} - ${currentSize}`} onClick={onClick}>
      <div className={'flex items-center justify-between'}>
        {label}
        <MumbleIconSvGComponent className={'fill-white absolute right-s'} />
      </div>
    </button>
  );
};

export default BaseButton;
