import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import IconButton from './icon-button';
import { MumbleIcon } from '../icons';

export default {
  title: 'Components/Atoms/Buttons/IconButton',
  component: IconButton,
  argTypes: {
      variant: {
          options: ['default', 'purple', 'gradient'],
          control: { type: 'radio' }
      },
  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div className="text-white">
    <IconButton {...args}>
      <MumbleIcon size={16} />
    </IconButton>
  </div>
);

export const IconButtonComponent = Template.bind({});
IconButtonComponent.args = {
  label: 'Click me',
  onClick: () => console.log('Icon button pressed.')
};

export const IconWithTextComponent = Template.bind({});
IconWithTextComponent.args = {
    label: 'Click me',
    onClick: () => console.log('Icon button pressed.'),
    iconText: 'Mumble'
};
