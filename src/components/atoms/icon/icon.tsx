import React, { FC } from 'react';

export enum IconType {
  Calendar = 'Calendar',
  Cancel = 'Cancel',
  Mumble = 'Mumble'
}

export type IconProps = {
  type: IconType;
};

export const Icon: FC<IconProps> = ({ type }) => {
  const icon: string = require(`../../../../public/icons/${type}.svg`);
  return <img src={icon} alt="logo" className={'bg-slate-50'} />;
};
