import * as React from 'react';
import { FC } from 'react';
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
      <ShareIconSvGComponent variant={active ? 'filled' : 'normal'} size={16} />
    </InteractionButton>
  );
};

export default CopyButton;
