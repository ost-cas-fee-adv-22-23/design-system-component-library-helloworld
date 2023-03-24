import React, { useId, useRef } from 'react';
import Button from "../button";
import {UploadIcon} from "../icons";

export type FileUploadProps = {
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const FileUpload: React.FC<FileUploadProps> = (props) => {
    const id = useId();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleUploadBtnClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <label htmlFor={id}>
            <Button variant={'default'} size={'M'} label={props.label} onClick={handleUploadBtnClick}>
                <UploadIcon size={16}/>
            </Button>
            <input type="file" ref={fileInputRef} id={id} className="hidden" onChange={props.onChange} />
        </label>
    );
};

export default FileUpload;