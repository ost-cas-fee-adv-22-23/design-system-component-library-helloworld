import * as React from 'react';
import { FC } from 'react';
import { SvgIcon } from '../icons.types';

const SendIconSvGComponent: FC<SvgIcon> = ({ size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" className="fill-current">
    <path d="M15.7068 0.293003C15.4338 0.0210027 15.0268 -0.0719973 14.6638 0.0590027L0.663812 5.059C0.286812 5.193 0.0258123 5.54 0.00181231 5.939C-0.0221877 6.339 0.193812 6.714 0.552812 6.894L5.13881 9.186L10.9998 5L6.81281 10.862L9.10481 15.448C9.27581 15.787 9.62281 16 9.99981 16C10.0208 16 10.0408 15.999 10.0608 15.998C10.4608 15.974 10.8078 15.714 10.9428 15.336L15.9428 1.336C16.0718 0.973003 15.9798 0.566003 15.7068 0.293003Z" />
  </svg>
);

export default SendIconSvGComponent;
