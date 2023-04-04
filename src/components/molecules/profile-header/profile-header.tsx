import React, {FC, ReactElement} from "react";
import { Label, ProfilePic } from "../../atoms";

export enum ProfileHeaderPictureSize {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
}

export enum ProfileHeaderLabelType {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
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
    onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    onLabelClick?: React.MouseEventHandler<HTMLLabelElement>;
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
    onButtonClick,
    onLabelClick,
}) => {
    const labelVariantStyles: Record<ProfileHeaderLabelType, ReactElement> = {
        S: <label className={'flex label-S leading-none cursor-inherit text-slate-600 ml-xs'} onClick={onLabelClick}>{fullName}</label>,
        M: <label className={'flex label-M leading-none cursor-inherit text-slate-600 ml-xs'} onClick={onLabelClick}>{fullName}</label>,
        L: <label className={'flex label-L leading-none cursor-inherit text-slate-600 ml-xs'} onClick={onLabelClick}>{fullName}</label>,
        XL: <label className={'flex label-XL leading-none cursor-inherit text-slate-600 ml-xs'} onClick={onLabelClick}>{fullName}</label>,
        h4: <label className={'flex head-4 cursor-inherit text-slate-600 ml-s'} onClick={onLabelClick}>{fullName}</label>,
    }

    return (
        <div className={'relative md:-left-20 flex mb-4'}>
            {profilePictureSize && imageSrc && altText && (
                <ProfilePic editLabel={'Bearbeiten'} altText={altText} imageUrl={imageSrc} size={profilePictureSize} onClick={onButtonClick}/>
            )}
            <div className={'ml-xxl'}>
                {labelVariantStyles[labelType]}
                <div className={'flex'}>
                    {username && hrefProfile && (
                        <Label label={username} mainTyp={true} variant={'username'} onClick={onLabelClick}></Label>
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