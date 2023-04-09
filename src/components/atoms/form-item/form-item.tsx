import React, { FC, ReactNode, useId } from 'react';

type FormItemProps = {
    label: string;
    children: ReactNode;
    errorMessage?: string;
    id?: string;
    hideLabel?: boolean;
};

export const FormItem: FC<FormItemProps> = ({ label, children, errorMessage, hideLabel, id = useId()}) => {
    return (
        <div className="flex flex-col">
            <label
                className={['text-slate-800 font-semibold text-base label-S mb-xxs', hideLabel ? 'sr-only' : ''].join(' ')}
                htmlFor={id}
            >
                {label}
            </label>
            <div className="relative">{children}</div>
            {errorMessage ? (
                <span className="text-red text-xs font-medium mt-xxs self-end" id={`${id}-error`}>
					{errorMessage}
				</span>
            ) : null}
        </div>
    );
};
export default FormItem;