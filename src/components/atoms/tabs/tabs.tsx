import {FC, ReactNode} from "react";

export type TabsProps = {
    children?: ReactNode;
};

const Tabs: FC<TabsProps> = ({ children }) => {
    return (
        <div className={'flex flex-row group justify-between rounded-s w-fit p-xxxs bg-slate-200'}>
            <ul className={'flex flex-row rounded-s w-fit p-xxs focus:outline focus:outline-none label-M transform transition-all duration-500 ease-in-out'}>{children}</ul>
        </div>
    );
};
export default Tabs;