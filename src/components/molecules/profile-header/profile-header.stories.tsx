import {ComponentMeta, ComponentStory} from "@storybook/react";
import ProfileHeader, {ProfileHeaderLabelType, ProfileHeaderPictureSize} from "./profile-header";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/Molecules/ProfileHeader',
    component: ProfileHeader,
    argTypes: {
        altText: {
            control: { type: 'text' }
        },
        fullName: {
            control: { type: 'text'}
        },
        hrefProfile: {
            control: { type: 'text'}
        },
        joined: {
            control: { type: 'text' },
        },
        labelType: {
            control: { type: 'select' },
        },
        location: {
            control: { type: 'text' },
        },
        imageSrc: {
            control: { type: 'text' },
        },
        timestamp: {
            control: { type: 'text' },
        },
        username: {
            control: { type: 'text' },
        },
    },
    parameters: {
        backgrounds: { default: 'surface' },
    }
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = (args) => <ProfileHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
    altText: 'Robert Vogt',
    fullName: 'Robert Vogt',
    hrefProfile: '#',
    joined: 'Mitglied seit 4 Wochen',
    labelType: ProfileHeaderLabelType.L,
    location: 'St. Gallen',
    profilePictureSize: ProfileHeaderPictureSize.M,
    imageSrc: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
    timestamp: 'vor 42 Minuten',
    username: 'robertvogt',
};

export const SizeS = Template.bind({});
SizeS.args = {
    altText: 'Robert Vogt',
    fullName: 'Robert Vogt',
    hrefProfile: '#',
    labelType: ProfileHeaderLabelType.S,
    profilePictureSize: ProfileHeaderPictureSize.S,
    imageSrc: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
    timestamp: 'vor 42 Minuten',
    username: 'robertvogt',
};
SizeS.storyName = 'Size S';

export const SizeM = Template.bind({});
SizeM.args = {
    fullName: 'Robert Vogt',
    hrefProfile: '#',
    labelType: ProfileHeaderLabelType.M,
    timestamp: 'vor 42 Minuten',
    username: 'robertvogt',
};
SizeM.storyName = 'Size M';

export const SizeL = Template.bind({});
SizeL.args = {
    fullName: 'Robert Vogt',
    hrefProfile: '#',
    labelType: ProfileHeaderLabelType.L,
    timestamp: 'vor 42 Minuten',
    username: 'robertvogt',
};
SizeL.storyName = 'Size L';

export const SizeXl = Template.bind({});
SizeXl.args = {
    fullName: 'Robert Vogt',
    hrefProfile: '#',
    joined: 'Mitglied seit 4 Wochen',
    labelType: ProfileHeaderLabelType.h3,
    location: 'St. Gallen',
    onSettingsClick: action('onSettingsClick'),
    showSettings: true,
    username: 'robertvogt',
};
SizeXl.storyName = 'Size XL';
