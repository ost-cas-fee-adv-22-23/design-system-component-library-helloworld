import React, { FC, ReactNode, HTMLAttributes } from 'react';

export enum SizeParapgraph {
  l = 'l',
  m = 'm'
}

export type ParagraphProps = {
  children: ReactNode;
  size: SizeParapgraph;
} & HTMLAttributes<HTMLParagraphElement>;

const classMap: Record<SizeParapgraph, string> = {
  l: 'paragraph-L text-slate-600',
  m: 'paragraph-M text-slate-600'
};

export const Paragraph: FC<ParagraphProps> = ({ children, size = SizeParapgraph.m }) => (
  <p className={classMap[size]}>{children}</p>
);
