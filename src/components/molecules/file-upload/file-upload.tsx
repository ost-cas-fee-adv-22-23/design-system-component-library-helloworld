import React, { useId, useRef } from 'react';
import { FormItem, UploadIcon} from "../../atoms";

export type FileUploadProps = {
    label?: string;
    dropzoneTitle?: string;
    hint?: string;
    buttonTitle?: string;
    errorMessage?: string;
    id?: string;
    hideLabel?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const defaultClasses = 'mb-xxs p-none rounded-s border-0 outline-1 outline-dashed -outline-offset-1 hover:border-0 hover:outline-2 hover:outline-slate-300 hover:-outline-offset-2 focus:border-0 focus:outline-2 focus:outline-slate-300 focus:-outline-offset-2'

const inputStyle = 'justify-center items-center w-full text-black text-base rounded-s p-xxs bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-300 outline outline-slate-300 outline-0' +
    'hover:border-slate-300 hover:outline-slate-300 hover:outline-1 focus:border-purple-600 focus:outline-purple-600 focus:outline-1' +
    'disabled:text-slate-400 disabled:bg-slate-50 disabled:border-slate-300 disabled:outline-slate-300 disabled:outline-0';

const errorStyle = 'text-red border-red outline-red outline-1 hover:border-red hover:outline-red ' +
        'focus:border-red focus:outline-red';

const buttonClasses = 'flex items-center justify-center w-full transition-all duration-300 outline-none outline-offset-0 p-xxs rounded-s ' +
    'gap-y-0 gap-x-2 text-base font-semibold text-slate-500 hover:text-white bg-slate-300 hover:bg-slate-400';

const FileUpload: React.FC<FileUploadProps> = ({
   label,
   dropzoneTitle = 'Datei hierhin ziehen ...',
   hint = 'JPEG oder PNG, maximal 50 MB',
   buttonTitle = '... oder Datei auswählen',
   errorMessage,
   id = useId(),
   hideLabel,
   onChange,
}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <FormItem id={id} errorMessage={errorMessage} hideLabel={hideLabel} label={label || ''}>
            <div className={`${defaultClasses} - ${inputStyle} - ${errorMessage ? errorStyle : ''}`}>
                <label
                    htmlFor={id}
                    className="flex flex-col gap-2 items-center w-full px-xs py-xl sm:py-l text-slate-500 text-center">
                    <UploadIcon size={16} />
                    <span className={'text-m text-bold text-slate-500'} >
                        {dropzoneTitle}
                    </span>
                    {hint && (
                        <span className="text-slate-400">
							<span className={'text-s text-bold text-slate-400'}>
								{hint}
							</span>
						</span>
                    )}
                </label>
                <input className="absolute  top-none left-none w-full h-full opacity-0" id={id} type="file" />
            </div>
            <div className={'pt-s'}>
                <label htmlFor={id} className={buttonClasses}>
                    <span className={'mr-[9px]'}>{buttonTitle}</span>
                    <UploadIcon size={16}/>
                </label>
                <input type="file" ref={fileInputRef} id={id} className="hidden" onChange={onChange} />
            </div>
        </FormItem>
    );
};

export default FileUpload;