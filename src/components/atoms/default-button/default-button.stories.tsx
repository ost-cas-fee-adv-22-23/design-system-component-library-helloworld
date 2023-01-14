import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DefaultButton from './default-button';
import { ButtonSize } from '../base-button/base-button';

export default {
  title: 'Components/Atoms/Buttons/DefaultButton',
  component: DefaultButton
} as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton {...args} />;

export const DefaultButtonComponent = Template.bind({});
DefaultButtonComponent.args = {
  label: 'Click me',
  onClick: () => console.log('Default button pressed.')
};

export const DefaultButtonComponentMedium = Template.bind({});
DefaultButtonComponentMedium.args = {
  label: 'Click me',
  size: ButtonSize.m,
  onClick: () => console.log('Default button pressed.')
};
