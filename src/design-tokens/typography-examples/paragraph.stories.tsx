import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph, SizeParapgraph } from './paragraph';

export default {
  title: 'Design Tokens/Typography-Examples',
  component: Paragraph
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <div>
    <Paragraph size={args.size}>{args.children}</Paragraph>
  </div>
);

export const DefaultParagraph = Template.bind({});
DefaultParagraph.args = {
  children:
    'Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni.',
  size: SizeParapgraph.m
};
DefaultParagraph.storyName = 'Paragraph m';
export const LargeParagraph = Template.bind({});
LargeParagraph.args = {
  children:
    'Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni.',
  size: SizeParapgraph.l
};
LargeParagraph.storyName = 'Paragraph l';
