import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Textfield from './textfield';

export default {
  title: 'Components/Atoms/Textfield',
  component: Textfield
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = (args) => <Textfield {...args} />;

export const Username = Template.bind({});
Username.args = {
  placeholder: "Was gibt's Neues?"
};
