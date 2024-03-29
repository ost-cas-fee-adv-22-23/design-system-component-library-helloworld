import * as React from 'react';
import { FC } from 'react';
import { SvgIcon } from '../icons.types';

const CheckmarkIconSvGComponent: FC<SvgIcon> = ({ size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" className="fill-current">
    <path d="M5.59992 9.60002L2.75348 6.75358C2.55822 6.55831 2.24163 6.55831 2.04637 6.75358L0.353478 8.44647C0.158216 8.64173 0.158216 8.95831 0.353478 9.15358L5.24637 14.0465C5.44163 14.2417 5.75822 14.2417 5.95348 14.0465L15.6464 4.35358C15.8416 4.15831 15.8416 3.84173 15.6464 3.64647L13.9535 1.95358C13.7582 1.75831 13.4416 1.75831 13.2464 1.95358L5.59992 9.60002Z" />
  </svg>
);

export default CheckmarkIconSvGComponent;
