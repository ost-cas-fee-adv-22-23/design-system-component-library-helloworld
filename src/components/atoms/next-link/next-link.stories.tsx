import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NextLink } from './next-link';

export default {
  title: 'Components/Atoms/Nextlink',
  component: NextLink
} as ComponentMeta<typeof NextLink>;

const Template: ComponentStory<typeof NextLink> = () => <NextLink href={'https://www.google.com/'}>This is a Link</NextLink>;

export const NextlinkComponent = Template.bind({});
