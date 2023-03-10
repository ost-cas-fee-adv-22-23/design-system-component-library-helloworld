import {ComponentMeta, ComponentStory} from "@storybook/react";
import UserProfile from "./user-profile";
import {ProfileHeaderLabelType, ProfileHeaderPictureSize} from "../../molecules/profile-header/profile-header";

export default {
    title: 'Components/Organisms/UserProfile',
    component: UserProfile
} as ComponentMeta<typeof UserProfile>

const Template: ComponentStory<typeof UserProfile> = (args) => (
    <UserProfile {...args} />
);

export const defaultUserProfile = Template.bind({});
defaultUserProfile.args = {
    altText: 'Robert Vogt',
    fullName: 'Robert Vogt',
    hrefProfile: '#',
    joined: 'Mitglied seit 4 Wochen',
    labelType: ProfileHeaderLabelType.M,
    location: 'St. Gallen',
    profilePictureSize: ProfileHeaderPictureSize.L,
    imageSrc: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
    timestamp: 'vor 42 Minuten',
    username: 'robertvogt',
    img: 'https://picsum.photos/800/600',
    children: 'Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni.'
};