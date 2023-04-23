import React, { FC, LinkHTMLAttributes } from 'react';

type LinkProps<T> = {
  imageComponent?: FC<T>;
  srcImagePath?: string;
  altImage?: string;
  isProfile?: boolean;
} & Omit<T, 'className' | 'src' | 'alt'>;

export function NextImage<
  T extends {
    className?: string;
  } = LinkHTMLAttributes<HTMLImageElement>
>({ imageComponent, srcImagePath, altImage, isProfile = false, ...props }: LinkProps<T>) {
  const ImageComponent = imageComponent;
  const classes = isProfile
    ? 'object-fill absolute w-full h-full rounded-full'
    : 'object-cover rounded-s';

  return (
    <>
      {ImageComponent ? (
        <ImageComponent {...(props as any)} className={classes} fill src={srcImagePath} alt={altImage} />
      ) : (
        <img className={classes} src={srcImagePath} alt={altImage} />
      )}
    </>
  );
}
