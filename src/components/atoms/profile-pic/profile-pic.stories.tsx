import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfilePic } from '../index';

export default {
  title: 'Components/Atoms/Profile Pic',
  component: ProfilePic,
  argTypes: {
    size: {
      options: ['S', 'M', 'L', 'XL'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof ProfilePic>;

const Template: ComponentStory<typeof ProfilePic> = (args) => <ProfilePic {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'S',
  imageUrl: 'https://www.ost.ch/typo3conf/ext/template/Resources/Public/Images/logo-de.svg',
  editLabel: 'Bearbeiten',
  altImage: 'Profilbild'
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'XL',
  imageUrl: 'https://www.ost.ch/typo3conf/ext/template/Resources/Public/Images/logo-de.svg',
  editLabel: 'Bearbeiten',
  altImage: 'Profilbild'
};
