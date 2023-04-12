import React, { FC } from 'react';
import InteractionButton from '../interaction-button/interaction-button';
import { MessageIcon } from '../icons';

export type LikeWithReactionProps = {
  label: {
    noComments: string;
    someComments: string;
  };
  numberOfComments: number;
  hideLabel?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CommentButton: FC<LikeWithReactionProps> = ({ label, numberOfComments, onClick, hideLabel }) => {
  const active = numberOfComments > 0;

  return (
    <InteractionButton
      label={active ? numberOfComments + ' ' + label.someComments : label.noComments}
      colorVariant={'violet'}
      active={active}
      onClick={onClick}
      hideLabel={hideLabel}
    >
      <MessageIcon variant={active ? 'filled' : 'normal'} size={16} />
    </InteractionButton>
  );
};

export default CommentButton;
