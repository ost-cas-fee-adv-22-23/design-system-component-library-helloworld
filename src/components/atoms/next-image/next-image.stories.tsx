import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NextImage } from './next-image';

export default {
    title: 'Components/Atoms/NextImage',
    component: NextImage
} as ComponentMeta<typeof NextImage>;

const Template: ComponentStory<typeof NextImage> = (args) => <NextImage {...args} />;

export const NextImageComponent = Template.bind({});
NextImageComponent.args = {
    srcImagePath: 'https://picsum.photos/200/300',
    altImage: 'Bearbeiten',
};
