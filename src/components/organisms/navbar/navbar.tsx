import React, { FC, ReactNode } from 'react';

export type NavbarProps = {
  children: ReactNode;
};

const Navbar: FC<NavbarProps> = ({ children }) => (
  <div className={'text-white h-64 w-full bg-violet-700 flex items-center justify-center'}>
    <div className={'w-615 flex items-center justify-between'}>
      <div>Logo</div>
      <div className={'flex space-x-xs'}>{children}</div>
    </div>
  </div>
);

export default Navbar;
