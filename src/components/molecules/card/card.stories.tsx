import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card, {BorderType, Size} from "./card";
import ProfileHeader from "../profile-header";
import {ProfileHeaderLabelType, ProfileHeaderPictureSize} from "../profile-header/profile-header";
import {Paragraph, SizeParapgraph} from "../../../design-tokens/typography-examples/paragraph";
import {Button, Link, SendIcon, Textfield, UploadIcon} from "../../atoms";
import CommentButton from "../../atoms/comment-button";
import LikeButtonWithReaction from "../../atoms/like-button-with-reaction";
import CopyButton from "../../atoms/copy-button";

export default {
    title: 'Components/Molecules/Card',
    component: Card,
    argTypes: {
        as: {
            options: ['article', 'div', 'section'],
            control: { type: 'radio' }
        },
        size: {
            options: [Size.S, Size.M],
            control: { type: 'select'}
        },
        roundBoarders: {
            control: { type: 'select'}
        },
        children: {
            control: { disable: true },
        },
        isInteractive: {
            control: { type: 'boolean' },
        },
        key: {
            control: { type: 'text' },
        },
    },
    parameters: {
        backgrounds: { default: 'grey' },
    }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <Card borderType={args.borderType} key={args.key} isInteractive={args.isInteractive} as={args.as} size={args.size}>
        <div className="text-slate-900">
            {args.children}
        </div>
    </Card>
  );  
};

export const DefaultComponent = Template.bind({});
DefaultComponent.args = {
    as: 'article',
    children: undefined,
    borderType: BorderType.rounded,
    isInteractive: false,
    size: Size.M,
};

const paragraph = (
    <p className={'paragraph-M'}>
        Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
        sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
        excepturi ut deleniti ut repellat magni.
    </p>
);

export const TextComponent = Template.bind({});
TextComponent.args = {
    as: 'article',
    children: paragraph,
    borderType: BorderType.rounded,
    isInteractive: false,
    size: Size.M,
};

const mumbleSection = (
<div className={'grid grid-cols-1'}>
    <ProfileHeader fullName={'Robert Vogt'} labelType={ProfileHeaderLabelType.L} profilePictureSize={ProfileHeaderPictureSize.S}
                    altText={'Robert Vogt'} imageSrc={'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw'} joined={'vor 17 Minuten'} username={'robertvogt'} hrefProfile={'#'}/>
    <div className={'mt-l'}>
        <Paragraph size={SizeParapgraph.m}>
        Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
        sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
        excepturi ut deleniti ut repellat magni.
        </Paragraph>
    </div>
    <div className="paragraph-M flex space-x-xs mt-l mb-l">
        <Link href={'#'} label={'#casfee'}/>
        <Link href={'#'} label={'#goOST'}/>
        <Link href={'#'} label={'#smartive'}/>
    </div>
    <div className="flex relative -left-3 space-x-8">
        <CommentButton label={{ noComments: 'Comment', someComments: 'Comments' }} numberOfComments={0} onClick={undefined}/>
        <LikeButtonWithReaction onClick={undefined}  active label={{
            noReaction: 'Like',
            oneReaction: 'Like',
            reactionByCurrentUser: 'Liked',
            severalReaction: 'Likes'
        }} likes={15} reactionByCurrentUser={true}/>
        <CopyButton  onClick={undefined} active={false} label={ {inactive: 'Copy Link', active: 'Link copied' }}/>
    </div>
</div>
);

const ExampleMumbleSectionTemplate: ComponentStory<typeof Card> = (args) => (
    <div className={'bg-slate-100 p-10'}>
        <div className={'w-[680px]'}>
            <Card
                borderType={BorderType.rounded} {...args}>
            </Card>
        </div>
    </div>
);
export const ExampleMumbleSection = ExampleMumbleSectionTemplate.bind({});
ExampleMumbleSection.args = {
    as: 'div',
    children: mumbleSection,
    borderType: BorderType.rounded,
    isInteractive: false,
    size: Size.M,
};

const mumblePic = (
    <div className={'grid grid-cols-1'}>
        <ProfileHeader fullName={'Robert Vogt'} labelType={ProfileHeaderLabelType.L} profilePictureSize={ProfileHeaderPictureSize.S}
                       altText={'Robert Vogt'} imageSrc={'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw'} joined={'vor 17 Minuten'} username={'robertvogt'} hrefProfile={'#'}/>
        <div className={'mt-l'}>
            <Paragraph size={SizeParapgraph.m}>
                Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
                sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
                excepturi ut deleniti ut repellat magni.
            </Paragraph>
        </div>
        <div className={'mt-l'}>
            <img alt={"image"} src={'https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg'} />
        </div>
        <div className="paragraph-M flex space-x-xs mt-l mb-l">
            <Link href={'#'} label={'#casfee'}/>
            <Link href={'#'} label={'#goOST'}/>
            <Link href={'#'} label={'#smartive'}/>
        </div>
        <div className="flex relative -left-3 space-x-8">
            <CommentButton label={{ noComments: 'Comment', someComments: 'Comments' }} numberOfComments={0} onClick={undefined}/>
            <LikeButtonWithReaction onClick={undefined}  active label={{
                noReaction: 'Like',
                oneReaction: 'Like',
                reactionByCurrentUser: 'Liked',
                severalReaction: 'Likes'
            }} likes={15} reactionByCurrentUser={true}/>
            <CopyButton  onClick={undefined} active={false} label={ {inactive: 'Copy Link', active: 'Link copied' }}/>
        </div>
    </div>
);

const ExampleMumblePicTemplate: ComponentStory<typeof Card> = (args) => (
    <div className={'bg-slate-100 p-10'}>
        <div className={'w-[680px]'}>
            <Card
                borderType={BorderType.rounded} {...args}>
            </Card>
        </div>
    </div>
);

export const ExampleMumblePic = ExampleMumblePicTemplate.bind({});
ExampleMumblePic.args = {
    as: 'div',
    children: mumblePic,
    borderType: BorderType.rounded,
    isInteractive: false,
    size: Size.M,
};

const mumbleWriteComponent = (
    <div className={'grid grid-cols-1'}>
        <div className={'flex flex-row'}>
        <ProfileHeader fullName={'Robert Vogt'} labelType={ProfileHeaderLabelType.M} profilePictureSize={ProfileHeaderPictureSize.S}
                       altText={'Robert Vogt'} imageSrc={'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw'} username={'robertvogt'} hrefProfile={'#'}/>
        </div>
        <div className={'flex flex-row mt-l'}>
            <Textfield placeholder={"Was gibt's Neues?"} />
        </div>
        <div className="flex flex-row gap-l justify-between unset">
            <Button label={'Bild hochladen'} onClick={undefined} size={'L'} variant={'default'} >
                <UploadIcon size={16}/>
            </Button>
            <Button label={'Absenden'} onClick={undefined} size={'L'} variant={'purple'} >
                <SendIcon size={16}/>
            </Button>
        </div>
    </div>
);

const ExampleMumbleWriteTemplate: ComponentStory<typeof Card> = (args) => (
    <div className={'bg-slate-100 p-10'}>
        <div className={'w-[550px]'}>
            <Card
                borderType={BorderType.rounded} {...args}>
            </Card>
        </div>
    </div>
);

export const ExampleMumbleWrite = ExampleMumbleWriteTemplate.bind({});
ExampleMumbleWrite.args = {
    as: 'div',
    children: mumbleWriteComponent,
    borderType: BorderType.rounded,
    isInteractive: false,
    size: Size.M,
};

const mumbleDetail = (
    <div className={'grid grid-cols-1'}>
        <div className={'absolute flex flex-row md:-left-l'}>
            <ProfileHeader fullName={'Robert Vogt'} labelType={ProfileHeaderLabelType.L} profilePictureSize={ProfileHeaderPictureSize.M}
                       altText={'Robert Vogt'} imageSrc={'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw'} joined={'vor 17 Minuten'} username={'robertvogt'} hrefProfile={'#'}/>
        </div>
        <div className={'mt-xxl'}>
            <Paragraph size={SizeParapgraph.m}>
                Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
                sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
                excepturi ut deleniti ut repellat magni.
            </Paragraph>
        </div>
        <div className="paragraph-M flex space-x-xs mt-l mb-l">
            <Link href={'#'} label={'#casfee'}/>
            <Link href={'#'} label={'#goOST'}/>
            <Link href={'#'} label={'#smartive'}/>
        </div>
        <div className="flex relative -left-3 space-x-8">
            <CommentButton label={{ noComments: 'Comment', someComments: 'Comments' }} numberOfComments={0} onClick={undefined}/>
            <LikeButtonWithReaction onClick={undefined}  active label={{
                noReaction: 'Like',
                oneReaction: 'Like',
                reactionByCurrentUser: 'Liked',
                severalReaction: 'Likes'
            }} likes={15} reactionByCurrentUser={true}/>
            <CopyButton  onClick={undefined} active={false} label={ {inactive: 'Copy Link', active: 'Link copied' }}/>
        </div>
    </div>
);

const ExampleMumbleDetailTemplate: ComponentStory<typeof Card> = (args) => (
    <div className={'bg-slate-100 p-10'}>
        <div className={'w-[680px]'}>
            <Card
                borderType={BorderType.rounded} {...args}>
            </Card>
        </div>
    </div>
);
export const ExampleMumbleDetail = ExampleMumbleDetailTemplate.bind({});
ExampleMumbleDetail.args = {
    as: 'div',
    children: mumbleDetail,
    borderType: BorderType.rounded,
    isInteractive: false,
    size: Size.M,
};

const mumbleWriteDetailComponent = (
    <div className={'grid grid-cols-1'}>
        <div className={'absolute flex flex-row md:-left-l'}>
            <ProfileHeader fullName={'Hey, was gibts neues?'} labelType={ProfileHeaderLabelType.h4} profilePictureSize={ProfileHeaderPictureSize.M}
                           altText={'Robert Vogt'} imageSrc={'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw'} />
        </div>
        <div className={'mt-xl'}>
            <Textfield placeholder={"Was gibt's Neues?"} />
        </div>
        <div className="flex flex-row gap-l justify-between unset">
            <Button label={'Bild hochladen'} onClick={undefined} size={'L'} variant={'default'} >
                <UploadIcon size={16}/>
            </Button>
            <Button label={'Absenden'} onClick={undefined} size={'L'} variant={'purple'} >
                <SendIcon size={16}/>
            </Button>
        </div>
    </div>
);

const ExampleMumbleWriteDetailTemplate: ComponentStory<typeof Card> = (args) => (
    <div className={'bg-slate-100 p-10'}>
        <div className={'w-[550px]'}>
            <Card
                borderType={BorderType.rounded} {...args}>
            </Card>
        </div>
    </div>
);

export const ExampleMumbleWriteDetail = ExampleMumbleWriteDetailTemplate.bind({});
ExampleMumbleWriteDetail.args = {
    as: 'div',
    children: mumbleWriteDetailComponent,
    borderType: BorderType.rounded,
    isInteractive: false,
    size: Size.M,
};
