import {FC} from "react";

export type TabsItemProps = {
    active: boolean;
    label: string;
    onClick?: () => void;
};
export const TabsItem: FC<TabsItemProps> = (props) => {
    const baseClasses = ['rounded-s p-xs cursor-pointer label-M transition'];

    if (props.active) {
        baseClasses.push('bg-white text-violet-600 group-hover:scale-105 first:hover:pr-m first:hover:pl-xs last:hover:pl-m last:hover:pr-xs');
    } else {
        baseClasses.push('group-hover:text-slate-800');
    }

    return (
        <li onClick={props.onClick} className={baseClasses.join(' ')}>
            {props.label}
        </li>
    );
};