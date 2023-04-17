import React, { FC } from 'react';
import InteractionButton from '../interaction-button/interaction-button';
import { ShareIcon } from '../icons';

export type CopyButtonProps = {
  active: boolean;
  label: {
    inactive: string;
    active: string;
  };
  hideLabel?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CopyButton: FC<CopyButtonProps> = ({ label, active, onClick, hideLabel }) => {
  return (
    <InteractionButton
      label={active ? label.active : label.inactive}
      colorVariant={'slate'}
      onClick={onClick}
      hideLabel={hideLabel}>
      <ShareIcon variant={active ? 'filled' : 'normal'} size={16} />
    </InteractionButton>
  );
};

export default CopyButton;
