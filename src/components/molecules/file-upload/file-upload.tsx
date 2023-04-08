import React, { useId, useRef } from 'react';
import {Button, FormItem, UploadIcon} from "../../atoms";

export type FileUploadProps = {
    label: string;
    dropzoneTitle?: string;
    hint?: string;
    buttonTitle?: string;
    errorMessage?: string;
    id?: string;
    hideLabel?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const defaultClasses = 'mb-4 p-0 rounded-xl border-0 outline-1 outline-dashed -outline-offset-1 hover:border-0 hover:outline-2 hover:outline-slate-300 hover:-outline-offset-2 focus:border-0 focus:outline-2 focus:outline-slate-300 focus:-outline-offset-2'

const inputStyle = 'w-355 text-black text-base rounded-lg p-4 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-300 outline outline-slate-300 outline-0' +
    'hover:border-slate-300 hover:outline-slate-300 hover:outline-1 focus:border-purple-600 focus:outline-purple-600 focus:outline-1' +
    'disabled:text-slate-400 disabled:bg-slate-50 disabled:border-slate-300 disabled:outline-slate-300 disabled:outline-0';

const errorStyle = 'text-red border-red outline-red outline-1 hover:border-red hover:outline-red ' +
        'focus:border-red focus:outline-red';

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

    const handleUploadBtnClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <FormItem id={id} errorMessage={errorMessage} hideLabel={hideLabel} label={label}>
            <div className={`${defaultClasses} - ${inputStyle} - ${errorMessage ? errorStyle : ''}`}>
                <label
                    htmlFor={id}
                    className="flex flex-col gap-2 items-center px-4 py-12 sm:py-8 text-slate-500 text-center">
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
                <input className="absolute top-0 left-0 w-full h-full opacity-0" id={id} type="file" />
            </div>
            <label htmlFor={id} className="flex flex-col gap-2 pt-s w-full text-center">
                <Button variant={'default'} size={'XL'} label={buttonTitle} onClick={handleUploadBtnClick}>
                    <UploadIcon size={16}/>
                </Button>
                <input type="file" ref={fileInputRef} id={id} className="hidden" onChange={onChange} />
            </label>
        </FormItem>
    );
};

export default FileUpload;