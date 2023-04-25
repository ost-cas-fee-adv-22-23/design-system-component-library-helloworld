import React, { FC } from "react";
import InteractionButton from "../interaction-button/interaction-button";
import { MessageIcon } from "../icons";

export type LikeWithReactionProps = {
  label: {
    noComments: string;
    someComments: string;
  };
  numberOfComments: number;
  variant?: 'label' | 'button'
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CommentButton: FC<LikeWithReactionProps> = ({ label, numberOfComments, variant,  onClick }) => {
  const active = numberOfComments > 0;

  return (
    <InteractionButton
      label={active ? numberOfComments + ' ' + label.someComments : label.noComments}
      colorVariant={'violet'}
      active={active}
      onClick={onClick}
      variant={variant}
      mobileLabel={numberOfComments && numberOfComments > 0 ? numberOfComments.toString() : undefined}
    >
      <MessageIcon variant={active ? 'filled' : 'normal'} size={16} />
    </InteractionButton>
  );
};

export default CommentButton;
