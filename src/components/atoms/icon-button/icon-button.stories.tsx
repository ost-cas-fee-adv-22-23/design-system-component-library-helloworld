import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import IconButton from './icon-button';
import MumbleIconSvGComponent from '../icons/mumble-icon';

export default {
  title: 'Components/Atoms/Buttons/IconButton',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <MumbleIconSvGComponent />
  </IconButton>
);

export const IconButtonComponent = Template.bind({});
IconButtonComponent.args = {
  label: 'Click me',
  onClick: () => console.log('Icon button pressed.')
};
