import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import PurpleButton from './purple-button';
import { ButtonSize } from '../base-button/base-button';

export default {
  title: 'Components/Atoms/Buttons/PurpleButton',
  component: PurpleButton
} as ComponentMeta<typeof PurpleButton>;

const Template: ComponentStory<typeof PurpleButton> = (args) => <PurpleButton {...args} />;

export const PurpleButtonComponent = Template.bind({});
PurpleButtonComponent.args = {
  label: 'Click me',
  onClick: () => console.log('Purple button pressed.')
};

export const PurpleButtonComponentMedium = Template.bind({});
PurpleButtonComponentMedium.args = {
  label: 'Click me',
  size: ButtonSize.m,
  onClick: () => console.log('Purple button pressed.')
};
