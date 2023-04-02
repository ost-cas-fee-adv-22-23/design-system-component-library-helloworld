import { action } from '@storybook/addon-actions';
import React from 'react';
import UserRecommendation from "./user-recommendation";
import {ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Components/Organisms/UserRecommendation',
    component: UserRecommendation,
} as ComponentMeta<typeof UserRecommendation>;

const Template: ComponentStory<typeof UserRecommendation> = (args) => <UserRecommendation {...args} />;

export const Recommendation = Template.bind({});
Recommendation.args = {
    altText: 'Robert Vogt',
    fullName: 'Robert Vogt',
    onFollowClick: action('onFollowClick'),
    imageSrc: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
    username: 'robertvogt',
};