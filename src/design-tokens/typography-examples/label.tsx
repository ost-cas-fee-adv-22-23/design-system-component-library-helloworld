import * as React from 'react';
import { FC, ReactNode } from 'react';

export enum Size {
  xl = 'xl',
  l = 'l',
  m = 'm',
  placeholder = 'placeholder',
  s = 's'
}

export type LabelProps = {
  children: ReactNode;
  size: Size;
};

const classMap: Record<Size, string> = {
  xl: 'label-XL leading-none cursor-inherit text-slate-600',
  l: 'label-L leading-none cursor-inherit text-slate-600',
  m: 'label-M cursor-inherit text-slate-600',
  placeholder: 'label-S leading-none text-slate-300',
  s: 'label-S leading-none cursor-inherit text-slate-600'
};

export const Label: FC<LabelProps> = ({ children, size = Size.m }) => (
  <label className={classMap[size]}>{children}</label>
);
