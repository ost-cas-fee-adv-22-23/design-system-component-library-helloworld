import React, { FC, ReactNode } from "react";

export type InteractionButtonProps = {
  label?: string;
  colorVariant?: 'slate' | 'pink' | 'violet';
  active?: boolean;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  mobileLabel?: string;
  variant?: 'label' | 'button';
};

const InteractionButton: FC<InteractionButtonProps> = ({
  label,
  colorVariant,
  active,
  onClick,
  mobileLabel,
  variant= 'button',
  children
}) => {
  const defaultClasses = 'group flex space-x-xs items-center px-xs py-xxs rounded-m text-slate-600';
  let hoverColor;
  let textColor;
  let iconColor;

  switch (colorVariant) {
    case 'pink':
      hoverColor = 'hover:bg-pink-50';
      textColor = active ? 'group-hover:text-pink-600 text-pink-900' : 'group-hover:text-pink-600';
      iconColor = active ? 'text-pink-500' : 'group-hover:text-pink-500';
      break;
    case 'slate':
      hoverColor = 'hover:bg-slate-100';
      textColor = active
        ? 'text-slate-700 group-hover:text-slate-700'
        : 'group-hover:text-slate-700';
      iconColor = active ? 'fill-pink-500' : 'fill-slate-600 group-hover:fill-slate-700';
      break;
    case 'violet':
      hoverColor = 'hover:bg-violet-50';
      textColor = 'group-hover:text-violet-600';
      iconColor = active ? 'text-violet-600' : 'text-slate-600 group-hover:text-violet-600';
      break;
  }

  return (
    <div className="group">
      { variant === 'label' && <label className={`${defaultClasses} - ${hoverColor} - ${textColor}`}>
        <div className={iconColor}>{children}</div>
        <span className={'sr-only md:not-sr-only'}>{label}</span>
        { !!mobileLabel && <span className={'text-current aria-hidden md:hidden'}>{mobileLabel}</span>}
      </label>}
      { variant === 'button' && <button className={`${defaultClasses} - ${hoverColor} - ${textColor}`} onClick={onClick}>
        <div className={iconColor}>{children}</div>
        <span className={'sr-only md:not-sr-only'}>{label}</span>
        { !!mobileLabel && <span className={'text-current aria-hidden md:hidden'}>{mobileLabel}</span>}
      </button>}
    </div>
  );
};

export default InteractionButton;
