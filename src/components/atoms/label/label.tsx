import React, { FC } from 'react';
import { CalendarIcon, LocationIcon, TimeIcon, UserIcon } from '../icons/index';

export type LabelProps = {
  label: string;
  mainTyp?: boolean;
  variant?: 'username' | 'timestamp' | 'location' | 'joined';
};

const Label: FC<LabelProps> = ({ label, variant, mainTyp = false }) => {
  const defaultClasses = 'flex space-x-xs items-center px-xs py-xxs rounded-m';
  const classes = `${defaultClasses} - ${
    mainTyp
      ? 'text-violet-600 group-hover:text-violet-900'
      : 'text-slate-400 group-hover:text-slate-600'
  }`;

  return (
    <div className="group">
      <div className={classes}>
        {iconSwitch(variant)}
        <span className="text-current">{label}</span>
      </div>
    </div>
  );
};

function iconSwitch(variant?: 'username' | 'timestamp' | 'location' | 'joined') {
  switch (variant) {
    case 'username':
      return <UserIcon size={16} />;
    case 'timestamp':
      return <TimeIcon size={16} />;
    case 'location':
      return <LocationIcon size={16} />;
    case 'joined':
      return <CalendarIcon size={16} />;
  }
}

export default Label;
