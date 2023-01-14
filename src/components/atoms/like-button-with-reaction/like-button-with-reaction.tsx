import React, { FC } from 'react';
import InteractionButton from '../interaction-button/interaction-button';
import HeartIconSvGComponent from '../icons/heart-icon';

export type LikeWithReactionProps = {
  active: boolean;
  label: {
    noReaction: string;
    oneReaction: string;
    severalReaction: string;
    reactionByCurrentUser: string;
  };
  likes: number;
  reactionByCurrentUser: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LikeButtonWithReaction: FC<LikeWithReactionProps> = ({
  label,
  likes,
  reactionByCurrentUser,
  onClick
}) => {
  const active = reactionByCurrentUser || likes > 0;
  let theLabel = '';

  if (reactionByCurrentUser) {
    theLabel = label.reactionByCurrentUser;
  } else if (likes === 0) {
    theLabel = label.noReaction;
  } else if (likes === 1) {
    theLabel = likes + ' ' + label.oneReaction;
  } else {
    theLabel = likes + ' ' + label.severalReaction;
  }

  return (
    <InteractionButton label={theLabel} colorVariant={'pink'} active={active} onClick={onClick}>
      <HeartIconSvGComponent
        variant={active ? 'filled' : 'normal'}
        classes={active ? 'fill-pink-500' : 'fill-slate-600 group-hover:fill-pink-500'}
      />
    </InteractionButton>
  );
};

export default LikeButtonWithReaction;
