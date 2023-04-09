import React, {FC, ReactElement} from "react";
import { Label, ProfilePic, NextLink } from "../../atoms";

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
    HEADER = 'header',
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
    onLabelClick?: React.MouseEventHandler<HTMLLabelElement>;
    link?: any,
    href?: string
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
    onLabelClick,
    link,
    href
}) => {
    const labelVariantStyles: Record<ProfileHeaderLabelType, ReactElement> = {
        S: <label className={'flex label-S leading-none cursor-inherit text-slate-600 ml-xxxs'} onClick={onLabelClick}>{fullName}</label>,
        M: <label className={'flex label-M leading-none cursor-inherit text-slate-600 ml-xxxs'} onClick={onLabelClick}>{fullName}</label>,
        L: <label className={'flex label-L leading-none cursor-inherit text-slate-600 ml-xxxs'} onClick={onLabelClick}>{fullName}</label>,
        XL: <label className={'flex label-XL leading-none cursor-inherit text-slate-600 ml-xxxs'} onClick={onLabelClick}>{fullName}</label>,
        header: <label className={'flex head-3 leading-none cursor-inherit text-slate-600 ml-xs'} onClick={onLabelClick}>{fullName}</label>,
    }

    const hasProfilePicClasses = !!profilePictureSize && !!imageSrc && !!altText ? 'mr-xxl' : '';

    // @ts-ignore
    return (
        <div className={'relative flex mb-4'}>
            <div className={hasProfilePicClasses}>
                {profilePictureSize && imageSrc && altText && (
                    <NextLink href={href} linkComponent={link}><ProfilePic editLabel={'Bearbeiten'} altText={altText} imageUrl={imageSrc} size={profilePictureSize}/></NextLink>
                )}
            </div>
            <div>
                <NextLink href={href} linkComponent={link}>{labelVariantStyles[labelType]}</NextLink>
                <div className={'flex'}>
                    {username && hrefProfile && (
                        <NextLink href={href} linkComponent={link}><Label label={username} mainTyp={true} variant={'username'} onClick={onLabelClick}></Label></NextLink>
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