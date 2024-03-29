import * as React from 'react';
import { FC } from 'react';
import { SvgIcon } from '../icons.types';

const HeartIconSvGComponent: FC<SvgIcon> = ({ variant, size }) => {
  return variant === 'filled' ? (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" className="fill-current">
      <path d="M11.6 0C10.1 0 8.8 0.8 8 2C7.2 0.8 5.9 0 4.4 0C2 0 0 2 0 4.4C0 8.8 8 15.3 8 15.3C8 15.3 16 8.8 16 4.4C16 2 14 0 11.6 0Z" />
    </svg>
  ) : (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" className="fill-current">
      <path d="M7.4 15.5C6.6 14.8 0 9.30005 0 5.10005C0 2.40005 2.2 0.300049 4.8 0.300049C6 0.300049 7.1 0.800049 8 1.50005C8.9 0.700049 10 0.300049 11.2 0.300049C13.9 0.300049 16 2.50005 16 5.10005C16 9.30005 9.4 14.8 8.6 15.4C8.3 15.8 7.7 15.8 7.4 15.5ZM4.8 2.30005C3.3 2.30005 2 3.60005 2 5.10005C2 7.30005 5.5 11.1 8 13.3C10.1 11.4 14 7.50005 14 5.10005C14 3.50005 12.7 2.30005 11.2 2.30005C10.3 2.30005 9.4 2.80005 8.9 3.60005C8.5 4.20005 7.6 4.20005 7.2 3.60005C6.6 2.80005 5.8 2.30005 4.8 2.30005Z" />
    </svg>
  );
};

export default HeartIconSvGComponent;
