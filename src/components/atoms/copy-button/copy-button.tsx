import React, { FC } from 'react';
import InteractionButton from '../interaction-button/interaction-button';
import ShareIconSvGComponent from '../icons/share-icon/share-icon';

export type CopyButtonProps = {
  active: boolean;
  label: {
    inactive: string;
    active: string;
  };
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CopyButton: FC<CopyButtonProps> = ({ label, active, onClick }) => {
  return (
    <InteractionButton
      label={active ? label.active : label.inactive}
      colorVariant={'slate'}
      onClick={onClick}
    >
      <ShareIconSvGComponent
        className={active ? 'fill-slate-700' : 'fill-slate-600 group-hover:fill-slate-700'}
      />
    </InteractionButton>
  );
};

export default CopyButton;
