import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CopyButton from './copy-button';

export default {
  title: 'Components/Atoms/Interaction Buttons/Copy Button',
  component: CopyButton
} as ComponentMeta<typeof CopyButton>;

const Template: ComponentStory<typeof CopyButton> = (args) => <CopyButton {...args} />;

export const Inactive = Template.bind({});
Inactive.args = {
  label: { inactive: 'Copy Link', active: 'Link copied' },
  active: false,
  onClick: () => console.log('Copy button pressed.')
};

export const Active = Template.bind({});
Active.args = {
  label: { inactive: 'Copy Link', active: 'Link copied' },
  active: true,
  onClick: () => console.log('Copy button pressed.')
};
