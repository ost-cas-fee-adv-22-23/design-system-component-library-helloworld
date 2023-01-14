import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfilePic } from '../index';

export default {
  title: 'Components/Atoms/Profile Pic',
  component: ProfilePic
} as ComponentMeta<typeof ProfilePic>;

const Template: ComponentStory<typeof ProfilePic> = (args) => <ProfilePic {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'S',
  imageUrl: './Profile.svg',
  editLabel: 'Bearbeiten'
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'M',
  imageUrl: './Profile.svg',
  editLabel: 'Bearbeiten'
};
export const Large = Template.bind({});
Large.args = {
  size: 'L',
  imageUrl: './Profile.svg',
  editLabel: 'Bearbeiten'
};
export const XLarge = Template.bind({});
XLarge.args = {
  size: 'XL',
  imageUrl: './Profile.svg',
  editLabel: 'Bearbeiten',
  onClick: () => console.log('Edit button pressed.')
};
