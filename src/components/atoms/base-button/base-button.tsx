import React, {FC} from 'react';
import MumbleIconSvGComponent from '../icon/mumble-icon';

export enum ButtonSize {
    m = 'm',
    l = 'l'
}

export type ButtonProps = {
    size?: ButtonSize;
    label?: string;
    classes?: string;
};

const BaseButton: FC<ButtonProps> = ({  size, label, classes }) => {
    const defaultClasses = 'text-white py-xxs px-xs rounded-s outline hover:outline-3 active:outline-4';
    const currentSize = size === ButtonSize.m ? 'w-150 h-40' :  'w-178 h-48';
   return <button
       className={
       `${defaultClasses} - ${ classes } - ${ currentSize }`}
   ><div className={'flex items-center justify-between'} >{label}<MumbleIconSvGComponent className={'fill-white'} /></div></button>
};

export default BaseButton;
