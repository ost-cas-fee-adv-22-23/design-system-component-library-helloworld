import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading, Size } from './heading';

export default {
    title: 'Design Tokens/Typography-Examples',
    component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <div>
        <Heading size={args.size}>{args.children}</Heading>
    </div>
);

export const H1Heading = Template.bind({});
H1Heading.args = {
    children: 'Überschrift',
    size: Size.h1,
};
H1Heading.storyName = 'Heading H1';
export const H2Heading = Template.bind({});
H2Heading.args = {
    children: 'Überschrift',
    size: Size.h2,
};
H2Heading.storyName = 'Heading H2';
export const H3Heading = Template.bind({});
H3Heading.args = {
    children: 'Überschrift',
    size: Size.h3,
};
H3Heading.storyName = 'Heading H3';
export const H4Heading = Template.bind({});
H4Heading.args = {
    children: 'Überschrift',
    size: Size.h4,
};
H4Heading.storyName = 'Heading H4';