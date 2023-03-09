import React, {FC} from "react";
import {Button, Label, MumbleIcon, ProfilePic} from "../../atoms";

export type UserRecommendationProps = {
    altText: string;
    fullName: string;
    username: string;
    imageSrc: string;
    onFollowClick: () => void;
}

const UserRecommendation: FC<UserRecommendationProps> = ({
    altText,
    fullName,
    username,
    imageSrc,
    onFollowClick,
}) => {
    return (
      <div className={'flex flex-col p-s bg-white border-2 border-slate-200 rounded-m w-fit'}>
          <div className={'flex flex-row items-center ml-m mb-xxl'}>
              <ProfilePic size={'L'} altText={altText} imageUrl={imageSrc} editLabel={'Bearbeiten'}/>
          </div>
          <p className={'flex flex-row justify-start items-center mt-l head-4'}>
              {fullName}
          </p>
          <p className={'flex flex-row justify-start ml-xs mb-m items-center '}>
              <Label label={username} mainTyp={true} variant={'username'}></Label>
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