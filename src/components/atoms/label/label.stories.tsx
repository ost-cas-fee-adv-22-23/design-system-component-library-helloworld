import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Label from './label';

export default {
  title: 'Components/Atoms/Label',
  component: Label
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Username = Template.bind({});
Username.args = {
  label: 'Username',
  mainTyp: true,
  variant: 'username'
};

export const Timestamp = Template.bind({});
Timestamp.args = {
  label: 'Timestamp',
  mainTyp: false,
  variant: 'timestamp'
};

export const Location = Template.bind({});
Location.args = {
  label: 'Location',
  mainTyp: false,
  variant: 'location'
};

export const Joined = Template.bind({});
Joined.args = {
  label: 'Joined',
  mainTyp: false,
  variant: 'joined'
};
