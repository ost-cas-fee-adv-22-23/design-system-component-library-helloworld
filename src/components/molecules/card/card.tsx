import React, {FC, ReactNode} from "react";

export enum BorderType {
    none = 'none',
    roundedTop = 'roundedTop',
    roundedBottom = 'roundedBottom',
    rounded = 'rounded'
}

export enum Size {
    S = 'S',
    M = 'M',
}

export type CardProps = {
    as?: 'article' | 'div' | 'section'
    children?: ReactNode
    borderType: BorderType,
    isInteractive?: boolean,
    key?: string,
    size?: Size
}

const defaultCardClass = ['relative bg-white border-2 border-slate-200'];

const cardBorderClass: Record<BorderType, string[]> = {
    none: ['rounded-none'],
    roundedTop: ['rounded-t-m'],
    roundedBottom: ['rounded-b-m'],
    rounded: ['rounded-m'],
};

const cardInteractiveStyle = ['transition-all duration-300 ease-in-out outline-slate-200 hover:outline hover:outline-2'];

export const sizeMap: Record<string, string []> = {
    S: ['py-xs px-xs'],
    M: ['py-l px-xl'],
};

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
const Card: FC<CardProps> = ({
    as: Tag = 'div',
    children,
    borderType = BorderType.rounded,
    isInteractive = false,
    key,
    size = 'M' }) => {

    let classes = classNames(defaultCardClass, cardBorderClass[borderType], sizeMap[size]);

    if (isInteractive) {
        classes = classNames(classes, cardInteractiveStyle);
    }

    return (
      <Tag key={key} className={classNames(classes)}>
          {children}
      </Tag>
    );

};

export default Card;