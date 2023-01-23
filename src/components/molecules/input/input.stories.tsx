import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Input from './input';
import MumbleIconSvGComponent from '../../atoms/icons/mumble-icon';

export default {
  title: 'Components/Molecules/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'email', 'number', 'password'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}>
    <MumbleIconSvGComponent />
  </Input>
);

export const InputComponent = Template.bind({});
InputComponent.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  type: 'text',
  actionLabel: 'Delete',
  onClick: () => console.log('Delete button pressed.')
};
