import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Link from './link';

export default {
  title: 'Components/Atoms/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkComponent = Template.bind({});
LinkComponent.args = {
  label: 'Link Label',
  href: 'https://www.google.com/',
  target: '_blank'
};
