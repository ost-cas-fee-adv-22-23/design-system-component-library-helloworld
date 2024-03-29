import React, {FC, ReactNode} from "react";
import {NextImage, NextLink, ProfilePic} from "../../atoms";
import {ProfileHeader} from "../../molecules";
import {ProfileHeaderLabelType, ProfileHeaderPictureSize} from "../../molecules";

type UserProfileProps = {
    altProfileImage?: string;
    altImage?: string;
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
    nextImage: any;
    children?: ReactNode;
}
const UserProfile: FC<UserProfileProps> = ({
    altProfileImage,
    altImage,
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
    nextImage,
    children,
    ...nextImagePros
                                           }) => {
    return (
        <div className={'relative grid grid-cols-1 gap-2 place-content-center justify-items-center'}>
            <div className={'my-m'}>
                <div className={'w-full pt-16/9 bg-violet-200 rounded-l relative mb-s'}>
                    <div className={'rounded-l bg-violet-200'}>
                        <NextImage altImage={altImage} srcImagePath={'https://picsum.photos/600/300'} imageComponent={nextImage} {...nextImagePros}/>
                    </div>
                    <div className={'absolute -mt-xl4 right-xl7'}>
                        <NextLink href={hrefProfile} linkComponent={link}><ProfilePic editLabel={'Bearbeiten'} altImage={altProfileImage} imageUrl={imageSrc}  size={profilePictureSize}/></NextLink>
                    </div>
                </div>
            </div>
            <div className={'grid grid-cols-1 gap-3 place-items-center'}>
                <ProfileHeader fullName={fullName} labelType={labelType} joined={joined} username={username} hrefProfile={hrefProfile} location={location}
                               timestamp={timestamp}  link={link}/>
                <div className={'relative flex mt-m'}>
                    <p className={'paragraph-M text-slate-400'}>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
