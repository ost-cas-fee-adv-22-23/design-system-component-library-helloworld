import React from 'react';
import  { FC, ReactNode } from 'react';
import '../../../global.css'

export type TabsItemProps = {
    active: boolean;
    label: string;
    onClick?: () => void;
}

export type TabsProps = {
    children?: ReactNode;
};

export const TabsItem: FC<TabsItemProps> = ({ active, label, onClick }) => {
    const defaultClasses = ['rounded-s w-fit p-xs cursor-pointer label-L transition'];
    if (active) {
        defaultClasses.push('bg-white text-violet-600 hover:text-violet-600 hover:w-3/5');
    } else {
        defaultClasses.push('hover:text-slate-800');
    }

    return (
      <li onClick={onClick} className={defaultClasses.join(' ')} >
          {label}
      </li>
    );
};

export const Tabs: React.FC<TabsProps> = ({ children }) => {
    return (
        <div className={'w-336'}>
            <div className={'bg-slate-200 rounded-s p-xxs'}>
                <ul className={'flex flex-row'}>{children}</ul>
            </div>
        </div>
    );
};
