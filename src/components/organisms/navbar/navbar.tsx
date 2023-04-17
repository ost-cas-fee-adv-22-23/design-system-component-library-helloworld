import React, { FC, ReactNode } from 'react';
import BrandingHoverLogo from '../../atoms/branding/branding-hover-logo';
import BrandingLogo from '../../atoms/branding/branding-logo';
import { MumbleIcon } from '../../atoms/icons';

export type NavbarProps = {
  children: ReactNode;
  logoHref: string;
  logoAriaLabel: string;
};

const Navbar: FC<NavbarProps> = ({ children, logoHref, logoAriaLabel }) => (
  <div className={'text-white h-64 w-full bg-violet-700 flex items-center justify-center'}>
    <div className={'w-615 flex items-center justify-between px-xxs md:px-none'}>
      <a href={logoHref} aria-label={logoAriaLabel}>
        <div className={'hidden md:flex'}>
          <BrandingHoverLogo variant={'default'}></BrandingHoverLogo>
        </div>
        <div className={'flex md:hidden text-white pl-s'}>
          <BrandingLogo color={'white'} orientation={'horizontal'} width={'64'} height={'32'} />
        </div>
      </a>
      <div className={'flex space-x-xs'}>{children}</div>
    </div>
  </div>
);

export default Navbar;
