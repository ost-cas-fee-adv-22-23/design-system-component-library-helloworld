import React, {FC, ReactElement} from "react";
import { Label, ProfilePic } from "../../atoms";

export enum ProfileHeaderPictureSize {
    S = 'S',
    M = 'M',
    L = 'L',
}

export enum ProfileHeaderLabelType {
    S = 'S',
    M = 'M',
    L = 'L',
    h4 = 'h4',
}

type ProfileHeaderProps = {
    altText?: string;
    fullName: string;
    hrefProfile?: string;
    joined?: string;
    labelType: ProfileHeaderLabelType;
    location?: string;
    profilePictureSize?: ProfileHeaderPictureSize;
    imageSrc?: string;
    timestamp?: string;
    username?: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
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
}) => {
    const labelVariantStyles: Record<ProfileHeaderLabelType, ReactElement> = {
        S: <div className={'flex label-S leading-none cursor-inherit text-slate-600 ml-xs'}>{fullName}</div>,
        M: <div className={'flex label-M leading-none cursor-inherit text-slate-600 ml-xs'}>{fullName}</div>,
        L: <div className={'flex label-L leading-none cursor-inherit text-slate-600 ml-xs'}>{fullName}</div>,
        h4: <h4 className={'flex head-4 cursor-inherit text-slate-600 ml-s'}>{fullName}</h4>,
    }

    return (
        <div className={'relative md:-left-20 flex mb-4'}>
            {profilePictureSize && imageSrc && altText && (
                <ProfilePic editLabel={'Bearbeiten'} altText={altText} imageUrl={imageSrc} size={profilePictureSize}/>
            )}
            <div className={'ml-xxl'}>
                {labelVariantStyles[labelType]}
                <div className={'flex'}>
                    {username && hrefProfile && (
                        <Label label={username} mainTyp={true} variant={'username'}></Label>
                    )}
                    {location && (
                        <Label label={location} mainTyp={false} variant={'location'}></Label>
                    )}
                    {joined && (
                        <Label label={joined} mainTyp={false} variant={'joined'}></Label>
                    )}
                    {timestamp && (
                        <Label label={timestamp} mainTyp={false} variant={'timestamp'}></Label>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;