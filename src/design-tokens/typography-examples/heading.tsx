import React, {ReactNode, HTMLAttributes, FC} from 'react';

export enum Size {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
}
export type HeadingProps = {
    children: ReactNode;
    size: Size;
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading: FC<HeadingProps> = ({size, children}) => (
<>
    {size === Size.h1 ? (
        <h1 className="head-1 text-slate-600">{children}</h1>
    ) : size === Size.h2 ? (
        <h2 className="head-2 text-slate-600">{children}</h2>
    ) : size === Size.h3 ? (
        <h3 className="head-3 text-slate-600">{children}</h3>
    ) : size === Size.h4 ? (
        <h4 className="head-4 text-slate-600">{children}</h4>
    ) : null}
</>
);