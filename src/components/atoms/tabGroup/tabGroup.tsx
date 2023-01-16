import  { FC } from 'react';
import { Tab } from "@headlessui/react";

export type TabProps = {
    tabs: Array<string>;
}

// TabList
const defaultTabListClass = ['flex flex-row group justify-between rounded-s w-fit p-xxs bg-slate-200'];
// Tab
const defaultTabItemClass = ['rounded-s w-fit p-xs focus:outline focus:outline-none cursor-pointer label-L transform transition-all duration-500 ease-in-out'];
const tabItemSelectedClass = ['bg-white text-violet-600 hover:px-s first:hover:pr-m first:hover:pl-xs last:hover:pl-m last:hover:pr-xs'];
const tabItemUnselectedClass = ['group-hover:text-slate-800'];


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export const TabGroup: FC<TabProps> = ({ tabs }) => {
    return (
        <Tab.Group defaultIndex={0} onChange={(index) => {
            console.log('Changed selected tab to: ', index)
        }}>
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
