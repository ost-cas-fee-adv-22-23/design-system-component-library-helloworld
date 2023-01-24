import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MumbleIconSvGComponent from '../icons/mumble-icon';
import Button from './button';

export default {
  title: 'Components/Atoms/Buttons/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'purple', 'gradient'],
      control: { type: 'radio' }
    },
    size: {
      options: ['M', 'L'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <MumbleIconSvGComponent />
  </Button>
);

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  label: 'Click me',
  variant: 'default',
  size: 'M',
  onClick: () => console.log('Default button pressed.')
};
