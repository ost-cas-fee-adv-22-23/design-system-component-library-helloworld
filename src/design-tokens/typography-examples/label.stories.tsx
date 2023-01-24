import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label, Size } from './label';

export default {
  title: 'Design Tokens/Typography-Examples',
  component: Label
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <div>
    <Label size={args.size}>{args.children}</Label>
  </div>
);

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  children: 'Label',
  size: Size.m
};
DefaultLabel.storyName = 'Label m';
export const XLargeLabel = Template.bind({});
XLargeLabel.args = {
  children: 'Label',
  size: Size.xl
};
XLargeLabel.storyName = 'Label xl';
export const LargeLabel = Template.bind({});
LargeLabel.args = {
  children: 'Label',
  size: Size.l
};
LargeLabel.storyName = 'Label l';

export const SmallLabel = Template.bind({});
SmallLabel.args = {
  children: 'Label',
  size: Size.s
};
SmallLabel.storyName = 'Label s';
export const PlaceholderLabel = Template.bind({});
PlaceholderLabel.args = {
  children: 'Placeholder',
  size: Size.placeholder
};
PlaceholderLabel.storyName = 'Placeholder';
