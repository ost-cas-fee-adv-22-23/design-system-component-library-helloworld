import  { FC } from 'react';
import { Tab } from "@headlessui/react";

export type TabProps = {
    tabs: Array<string>;
}

// TabList
const defaultTabListClass = ['flex flex-row group justify-between rounded-s w-fit p-xxs bg-slate-200'];
// Tab
const defaultTabItemClass = ['rounded-s w-fit p-xs focus:outline focus:outline-none cursor-pointer label-L transform transition-all duration-500 ease-in-out'];
const tabItemSelectedClass = ['ui-selected:bg-white ui-selected:text-violet-600 ui-selected:hover:scale-105 first:hover:pr-m first:hover:pl-xs last:hover:pl-m last:hover:pr-xs'];
const tabItemUnselectedClass = ['ui-not-selected:group-hover:text-slate-800'];


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export const Tabs: FC<TabProps> = ({ tabs }) => {
    return (
        <Tab.Group defaultIndex={0}>
            <Tab.List className={classNames(defaultTabListClass)}>
                {tabs.map((tab, tabIndex ) => (
                    <Tab key={tabIndex}
                         className={ ({selected}) => classNames(defaultTabItemClass, selected ? tabItemSelectedClass : tabItemUnselectedClass)}>
                        {tab}
                    </Tab>
                ))}
            </Tab.List>
        </Tab.Group>
    );
};