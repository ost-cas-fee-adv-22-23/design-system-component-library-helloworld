import * as React from 'react';
import { FC } from 'react';
import { SvgIcon } from '../icons.types';

const UploadIconSvGComponent: FC<SvgIcon> = ({ size }) => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" className="fill-current">
        <path d="M14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4805 13 10.7348 13 11V13H3V11C3 10.7348 2.89464 10.4805 2.70711 10.2929C2.51957 10.1054 2.26522 10 2 10C1.73478 10 1.48043 10.1054 1.29289 10.2929C1.10536 10.4805 1 10.7348 1 11V13C1 13.5305 1.21071 14.0392 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15H13C13.5304 15 14.0391 14.7893 14.4142 14.4142C14.7893 14.0392 15 13.5305 15 13V11C15 10.7348 14.8946 10.4805 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10Z"/>
        <path d="M4.707 6.70703L7 4.41403V10C7 10.2652 7.10536 10.5196 7.29289 10.7071C7.48043 10.8947 7.73478 11 8 11C8.26522 11 8.51957 10.8947 8.70711 10.7071C8.89464 10.5196 9 10.2652 9 10V4.41403L11.293 6.70703C11.4816 6.88919 11.7342 6.98998 11.9964 6.9877C12.2586 6.98543 12.5094 6.88026 12.6948 6.69485C12.8802 6.50944 12.9854 6.25863 12.9877 5.99643C12.99 5.73423 12.8892 5.48163 12.707 5.29303L8.707 1.29303C8.51947 1.10556 8.26516 1.00024 8 1.00024C7.73484 1.00024 7.48053 1.10556 7.293 1.29303L3.293 5.29303C3.11084 5.48163 3.01005 5.73423 3.01233 5.99643C3.0146 6.25863 3.11977 6.50944 3.30518 6.69485C3.49059 6.88026 3.7414 6.98543 4.0036 6.9877C4.2658 6.98998 4.5184 6.88919 4.707 6.70703Z"/>
    </svg>
);

export default UploadIconSvGComponent;
