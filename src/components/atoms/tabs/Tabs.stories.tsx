import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Tabs } from './tabs';

export default {
    title: 'Components/Atoms/TabGroup',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const defaultTabGroup = Template.bind({});
defaultTabGroup.args = {
    tabs: ['Deine Mumbles', 'Deine Likes'],
}
defaultTabGroup.storyName = 'Two Tab Groups';

export const extraTabGroup = Template.bind({});
extraTabGroup.args = {
    tabs: ['Deine Mumbles', 'Deine Views',  'Deine Likes'],
}
extraTabGroup.storyName = 'Three Tab Groups';