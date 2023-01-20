import React, { FC, ReactNode, HTMLAttributes } from 'react';

export enum Size {
    l = 'l',
    m = 'm',
}

export type ParagraphProps = {
    children: ReactNode;
    size: Size;
} & HTMLAttributes<HTMLParagraphElement>;


const classMap: Record<Size, string> = {
    l: 'paragraph-L text-slate-600',
    m: 'paragraph-M text-slate-600',
};

export const Paragraph: FC<ParagraphProps> = ({ children, size = Size.m }) => (
    <p className={classMap[size]}>
        {children}
    </p>
);