import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MumbleIconSvGComponent from '../icons/mumble-icon';
import Button from './button';

export default {
  title: 'Components/Atoms/Buttons/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <MumbleIconSvGComponent />
  </Button>
);

export const DefaultButtonComponent = Template.bind({});
DefaultButtonComponent.args = {
  label: 'Click me',
  onClick: () => console.log('Default button pressed.')
};

export const DefaultButtonComponentMedium = Template.bind({});
DefaultButtonComponentMedium.args = {
  label: 'Click me',
  size: 'M',
  onClick: () => console.log('Default button pressed.')
};

export const PurpleButtonComponent = Template.bind({});
PurpleButtonComponent.args = {
  label: 'Click me',
  variant: 'purple',
  onClick: () => console.log('Default button pressed.')
};

export const ColorfulButtonComponent = Template.bind({});
ColorfulButtonComponent.args = {
  label: 'Click me',
  variant: 'colorful',
  onClick: () => console.log('Default button pressed.')
};
