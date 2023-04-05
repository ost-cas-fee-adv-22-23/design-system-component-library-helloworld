import React, {FC} from "react";
import {Button, Label, MumbleIcon, NextLink, ProfilePic} from "../../atoms";

export type UserRecommendationProps = {
    altText: string;
    fullName: string;
    username: string;
    imageSrc: string;
    onFollowClick: () => void;
    link: any;
    href: string;
}

const UserRecommendation: FC<UserRecommendationProps> = ({
    altText,
    fullName,
    username,
    imageSrc,
    onFollowClick,
    link,
                                                             href
}) => {
    return (
      <div className={'flex flex-col p-s bg-white border-2 border-slate-200 rounded-m w-fit'}>
          <div className={'flex flex-row items-center ml-m mb-xxl'}>
              <NextLink href={href} linkComponent={link}><ProfilePic size={'L'} altText={altText} imageUrl={imageSrc} editLabel={'Bearbeiten'}/></NextLink>
          </div>
          <p className={'flex flex-row justify-start items-center mt-l head-4'}>
              <NextLink href={href} linkComponent={link}>{fullName}</NextLink>
          </p>
          <p className={'flex flex-row justify-start ml-xs mb-m items-center '}>
              <NextLink href={href} linkComponent={link}><Label label={username} mainTyp={true} variant={'username'}></Label></NextLink>
          </p>
          <div className={'flex flex-row items-center'}>
              <Button variant={'purple'} label={'Follow'} size={'M'} onClick={onFollowClick}>
                  <MumbleIcon size={16} />
              </Button>
          </div>
      </div>
    );
};

export default UserRecommendation;