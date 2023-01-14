import React, { FC } from 'react';
import MumbleIconSvGComponent from '../icon/mumble-icon';
import { EditIconSvGComponent } from '../icons/index';

export type IconButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant: 'logo' | 'edit';
};

const IconButton: FC<IconButtonProps> = ({ label, variant, onClick }) => {
  const icon =
    variant === 'logo' ? (
      <MumbleIconSvGComponent className={'fill-white'} />
    ) : (
      <EditIconSvGComponent className={'fill-white'} />
    );
  return (
    <button
      className={
        'flex items-center justify-center outline outline-none outline-offset-0 hover:outline-3 active:outline-4 bg-slate-600 hover:bg-slate-700 hover:outline-slate-100 active:outline-slate-200 h-48 w-48 rounded-full'
      }
      onClick={onClick}
    >
      <div>
        <span className={'sr-only'}>{label}</span>
        {icon}
      </div>
    </button>
  );
};

export default IconButton;
