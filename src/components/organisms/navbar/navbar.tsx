import React, { FC, ReactNode } from 'react';
import BrandingHoverLogo from '../../atoms/branding/branding-hover-logo';

export type NavbarProps = {
  children: ReactNode;
  logoHref: string;
  logoAriaLabel: string;
};

const Navbar: FC<NavbarProps> = ({ children, logoHref, logoAriaLabel }) => (
  <div className={'text-white h-64 w-full bg-violet-700 flex items-center justify-center'}>
    <div className={'w-615 flex items-center justify-between'}>
      <a href={logoHref} aria-label={logoAriaLabel}><BrandingHoverLogo variant={'default'}></BrandingHoverLogo></a>
      <div className={'flex space-x-xs'}>{children}</div>
    </div>
  </div>
);

export default Navbar;
