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
  imageUrl: 'https://www.ost.ch/typo3conf/ext/template/Resources/Public/Images/logo-de.svg',
  editLabel: 'Bearbeiten',
  altText: 'Profilbild'
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'M',
  imageUrl: 'https://www.ost.ch/typo3conf/ext/template/Resources/Public/Images/logo-de.svg',
  editLabel: 'Bearbeiten',
  altText: 'Profilbild'
};
export const Large = Template.bind({});
Large.args = {
  size: 'L',
  imageUrl: 'https://www.ost.ch/typo3conf/ext/template/Resources/Public/Images/logo-de.svg',
  editLabel: 'Bearbeiten',
  altText: 'Profilbild'
};
export const XLarge = Template.bind({});
XLarge.args = {
  size: 'XL',
  imageUrl: 'https://www.ost.ch/typo3conf/ext/template/Resources/Public/Images/logo-de.svg',
  editLabel: 'Bearbeiten',
  onClick: () => console.log('Edit button pressed.'),
  altText: 'Profilbild'
};

export const XLargeNoImage = Template.bind({});
XLargeNoImage.args = {
  size: 'XL',
  editLabel: 'Bearbeiten',
  onClick: () => console.log('Edit button pressed.'),
  altText: 'Profilbild'
};
