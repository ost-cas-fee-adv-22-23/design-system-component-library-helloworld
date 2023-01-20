import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfilePic } from '../index';
import Label from "../label";

export default {
  title: 'Components/Atoms/Profile Pic',
  component: ProfilePic,
  argTypes: {
    size: {
      options: ['S', 'M', 'L', 'XL'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ProfilePic>;

const Template: ComponentStory<typeof ProfilePic> = (args) => <ProfilePic {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'S',
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
