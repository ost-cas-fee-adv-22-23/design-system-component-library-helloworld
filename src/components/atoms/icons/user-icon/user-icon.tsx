import * as React from 'react';
import { FC } from 'react';
import { SvgIcon } from '../icons.types';

const UserIconSvGComponent: FC<SvgIcon> = ({ size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" className="fill-current">
    <path d="M8 7C9.933 7 11.5 5.433 11.5 3.5C11.5 1.567 9.933 0 8 0C6.067 0 4.5 1.567 4.5 3.5C4.5 5.433 6.067 7 8 7Z" />
    <path d="M8 8.5C6.14413 8.50212 4.36489 9.2403 3.05259 10.5526C1.7403 11.8649 1.00212 13.6441 1 15.5C1 15.6326 1.05268 15.7598 1.14645 15.8536C1.24021 15.9473 1.36739 16 1.5 16H14.5C14.6326 16 14.7598 15.9473 14.8536 15.8536C14.9473 15.7598 15 15.6326 15 15.5C14.9979 13.6441 14.2597 11.8649 12.9474 10.5526C11.6351 9.2403 9.85587 8.50212 8 8.5Z" />
  </svg>
);

export default UserIconSvGComponent;
