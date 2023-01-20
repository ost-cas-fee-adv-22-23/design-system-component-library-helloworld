import * as React from 'react';
import { FC } from 'react';
import {SvgIcon} from "../icons.types";

const CalendarIconSvGComponent: FC<SvgIcon> = ({ color, hoverColor, size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={`fill-${color} - hover:fill-${hoverColor ?? color} - group-hover:fill-${hoverColor ?? color}`}>
    <path d="M14 3H13V1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V3H5V1C5 0.734784 4.89464 0.48043 4.70711 0.292893C4.51957 0.105357 4.26522 0 4 0C3.73478 0 3.48043 0.105357 3.29289 0.292893C3.10536 0.48043 3 0.734784 3 1V3H2C1.46957 3 0.960859 3.21071 0.585786 3.58579C0.210714 3.96086 0 4.46957 0 5L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3ZM2 14V7H14V14H2Z" />
  </svg>
);

export default CalendarIconSvGComponent;
