import Tabs from "./tabs";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import {TabsItem} from "./tabs-item";

export default {
    title: 'Components/Atoms/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;
export const TabsComponent: ComponentStory<typeof Tabs> = () => {
    const [activeTab, setActiveTab] = useState('mumbles');

    return (
        <Tabs>
            <TabsItem onClick={() => setActiveTab('mumbles')} label={'Deine Mumbels'} active={activeTab === 'mumbles'}></TabsItem>
            <TabsItem onClick={() => setActiveTab('likes')} label={'Deine Likes'} active={activeTab === 'likes'}></TabsItem>
        </Tabs>
    );
};
