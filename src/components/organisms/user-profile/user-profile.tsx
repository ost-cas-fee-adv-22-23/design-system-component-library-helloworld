import React, {FC, ReactNode} from "react";
import {NextLink, ProfilePic} from "../../atoms";
import {ProfileHeader} from "../../molecules";
import {ProfileHeaderLabelType, ProfileHeaderPictureSize} from "../../molecules";
import {Paragraph, SizeParapgraph} from "../../../design-tokens/typography-examples/paragraph";

type UserProfileProps = {
    altText?: string;
    fullName: string;
    hrefProfile?: string;
    joined?: string;
    labelType: ProfileHeaderLabelType;
    location?: string;
    profilePictureSize: ProfileHeaderPictureSize;
    imageSrc?: string;
    timestamp?: string;
    username?: string;
    image?: React.ImgHTMLAttributes<HTMLImageElement>;
    link: any;
    href: string;
    children?: ReactNode;
}
const UserProfile: FC<UserProfileProps> = ({
    altText,
    fullName,
    hrefProfile,
    joined,
    labelType,
    location,
    profilePictureSize,
    imageSrc,
    timestamp,
    username,
    link,
    href,
    children
}) => {
    return (
        <div>
            <div className={'w-full pt-16/9 bg-violet-200 rounded-l relative mb-l'}>
                <div className={'absolute -mt-xl4 right-xl7'}>
                    <NextLink href={href} linkComponent={link}><ProfilePic editLabel={'Bearbeiten'} altText={altText} imageUrl={imageSrc} size={profilePictureSize}/></NextLink>
                </div>
            </div>
            <div className={'relative flex flex-row md:-left-xxl p-xxs'}>
                <ProfileHeader fullName={fullName} labelType={labelType} joined={joined} username={username} hrefProfile={hrefProfile} location={location}
                           timestamp={timestamp}  link={link} href={href}/>
            </div>
            <div className={'relative mt-m'}>
                <Paragraph size={SizeParapgraph.m}>
                    {children}
                </Paragraph>
            </div>
        </div>  
    );
};

export default UserProfile;
