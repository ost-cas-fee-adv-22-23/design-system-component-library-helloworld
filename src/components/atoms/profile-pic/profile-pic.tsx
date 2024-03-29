import React, { FC } from 'react';
import IconButton from '../icon-button/icon-button';
import { EditIcon } from '../icons';
import {NextImage} from "../next-image";

export type ProfilePicProps = {
  size?: 'S' | 'M' | 'L' | 'XL';
  altImage?: string;
  imageUrl?: string;
  editLabel: string;
  nextImage?: any,
};

const ProfilePic: FC<ProfilePicProps> = ({ size, imageUrl, editLabel, altImage, nextImage, ...nextImagePros }) => {
  const defaultClasses = 'object-fill bg-violet-200 rounded-full absolute';
  const outlineClasses = 'outline outline-4 outline-slate-100';
  const imgClasses = 'absolute w-full h-full';
  let sizeClasses;
  switch (size) {
    case 'S':
      sizeClasses = 'absolute h-48 w-48 hover:h-50 hover:w-50 hover:-inset-xxxxs';
      break;
    case 'M':
      sizeClasses = 'absolute w-64 h-64 hover:h-70 hover:w-70 hover:-inset-xxxs';
      break;
    case 'L':
      sizeClasses = 'absolute w-96 h-96';
      break;
    case 'XL':
      sizeClasses = 'absolute w-160 h-160';
      break;
  }

  return (
    <div className={'relative'}>
      <div className={sizeClasses}>
        <div
          className={`${defaultClasses} - ${imgClasses} - ${size !== 'S' ? outlineClasses : ''}`}
        >
          {!!imageUrl && (
            <NextImage
              srcImagePath={imageUrl}
              altImage={altImage}
              imageComponent={nextImage}
              {...nextImagePros}
               isProfile={true}
            />
          )}
        </div>
        <div className={size !== 'XL' ? 'invisible' : 'absolute right-none bottom-none text-white'}>
          <IconButton label={editLabel}>
            <EditIcon size={16} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
