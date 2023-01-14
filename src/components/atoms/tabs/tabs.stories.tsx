import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs, TabsItem } from './tabs';

export default {
    title: `Componenents/Atoms/Tabs`,
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const singleTabs = () => {
    return (
        <Tabs>
            <TabsItem label={'Deine Mumbels'} active={true}></TabsItem>
            <TabsItem label={'Deine Likes'} active={false}></TabsItem>
        </Tabs>
    );
};
export const SingleTabs: ComponentStory<typeof Tabs> = singleTabs.bind({});

export const TabsComponent: ComponentStory<typeof Tabs> = () => {
    const [activeTab, setActiveTab] = useState('mumbles');

    return (
        <Tabs>
            <TabsItem onClick={() => setActiveTab('mumbles')} label={'Deine Mumbels'} active={activeTab === 'mumbles'}></TabsItem>
            <TabsItem onClick={() => setActiveTab('likes')} label={'Deine Likes'} active={activeTab === 'likes'}></TabsItem>
        </Tabs>
    );
};

TabsComponent.storyName = 'Active Tab Interaction';
