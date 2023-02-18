import React, { FC } from 'react';

export type LabelProps = {
  label: string;
  href: string;
  target?: '_blank' | '_self';
};

const Link: FC<LabelProps> = ({ label, href, target = '_self' }) => {
  return (
    <a
      href={href}
      target={target}
      className={
        'underline underline-offset-2 hover:underline-offset-4 text-violet-600 decoration-violet-600 hover:decoration-violet-200'
      }
    >
      {label}
    </a>
  );
};

export default Link;
