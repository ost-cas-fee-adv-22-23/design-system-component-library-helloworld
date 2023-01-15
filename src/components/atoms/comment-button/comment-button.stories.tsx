import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CommentButton from './comment-button';

export default {
  title: 'Components/Atoms/Interaction Buttons/Comment Button',
  component: CommentButton
} as ComponentMeta<typeof CommentButton>;

const Template: ComponentStory<typeof CommentButton> = (args) => <CommentButton {...args} />;

export const NoComment = Template.bind({});
NoComment.args = {
  label: { noComments: 'Comment', someComments: 'Comments' },
  numberOfComments: 0,
  onClick: () => console.log('Comment button pressed.')
};

export const HasComment = Template.bind({});
HasComment.args = {
  label: { noComments: 'Comment', someComments: 'Comments' },
  numberOfComments: 32,
  onClick: () => console.log('Comment button pressed.')
};
