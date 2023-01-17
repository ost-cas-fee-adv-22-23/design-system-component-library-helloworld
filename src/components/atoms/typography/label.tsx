import React, { FC, ReactNode } from 'react';

export enum Size {
    xl = 'xl',
    l = 'l',
    m = 'm',
    placeholder = 'placeholder',
    s = 's',
}

export type LabelProps = {
    children: ReactNode;
    size: Size;
};

const classMap: Record<Size, string> = {
    xl: 'text-m2 leading-none cursor-inherit text-slate-600',
    l: 'text-m1 leading-none cursor-inherit text-slate-600',
    m: 'leading-none cursor-inherit text-slate-600',
    placeholder: 'text-s1 leading-none text-slate-300',
    s: 'text-s1 leading-none cursor-inherit text-slate-600',
};

export const Label: FC<LabelProps> = ({ children, size = Size.m }) => (
    <label className={classMap[size]}>
        {children}
    </label>
);