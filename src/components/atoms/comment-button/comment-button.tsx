import React, { FC } from 'react';
import InteractionButton from '../interaction-button/interaction-button';
import MessageIconSvGComponent from '../icons/message-icon';

export type LikeWithReactionProps = {
  label: {
    noComments: string;
    someComments: string;
  };
  numberOfComments: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CommentButton: FC<LikeWithReactionProps> = ({ label, numberOfComments, onClick }) => {
  const active = numberOfComments > 0;

  return (
    <InteractionButton
      label={active ? numberOfComments + ' ' + label.someComments : label.noComments}
      colorVariant={'violet'}
      active={active}
      onClick={onClick}
    >
      <MessageIconSvGComponent variant={active ? 'filled' : 'normal'} size={16} />
    </InteractionButton>
  );
};

export default CommentButton;
