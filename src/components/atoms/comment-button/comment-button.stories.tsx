import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CommentButton from './comment-button';

export default {
  title: 'Components/Atoms/Interaction Buttons/Comment Button',
  component: CommentButton,
  argTypes: { label: { control: 'object' } }
} as ComponentMeta<typeof CommentButton>;

const Template: ComponentStory<typeof CommentButton> = (args) => <CommentButton {...args} />;

export const Comment = Template.bind({});
Comment.args = {
  label: { noComments: 'Comment', someComments: 'Comments' },
  numberOfComments: 0,
  onClick: () => console.log('Comment button pressed.')
};

export const MultipleComments = Template.bind({});
MultipleComments.args = {
  label: { noComments: 'Comment', someComments: 'Comments' },
  numberOfComments: 23,
  onClick: () => console.log('Comment button pressed.')
};
