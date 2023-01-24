import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import Label from './label';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  argTypes: {
    variant: {
      options: ['username', 'timestamp', 'location', 'joined'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const LabelComponent = Template.bind({});
LabelComponent.args = {
  label: 'Username',
  mainTyp: true,
  variant: 'username'
};
