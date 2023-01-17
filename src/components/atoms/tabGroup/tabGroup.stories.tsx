import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TabGroup } from './tabGroup';

export default {
    title: 'Components/Atoms/TabGroup',
    component: TabGroup,
} as ComponentMeta<typeof TabGroup>;

const Template: ComponentStory<typeof TabGroup> = (args) => <TabGroup {...args} />;

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
