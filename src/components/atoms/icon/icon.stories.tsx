import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Icon, IconType } from './icon';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  argTypes: {
    type: {
      options: ['Calendar', 'Cancel']
    }
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}>Button Label</Icon>;

export const MumbleIconComponent = Template.bind({});
MumbleIconComponent.args = {
  type: IconType.Mumble
};
