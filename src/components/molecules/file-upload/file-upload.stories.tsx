import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import FileUpload, { UploadState} from "./file-upload";

export default {
    title: `Components/Molecules/FileUpload`,
    component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

export type FileState = {
    file: File | null,
    currentFile: string;
    isFileSelected: boolean;
    isDragActive: boolean;
    errorMessage: string;
};

const initFileState: FileState = {
    file: null,
    currentFile: '',
    isFileSelected: false,
    isDragActive: false,
    errorMessage: ''
};

const Template: ComponentStory<typeof FileUpload> = (args) => {
    const [fileState, setFileState] = useState(initFileState);

    const onHandleFile = (f: UploadState) => {
        switch (f.type) {
            case 'upload_drag_active': {
                return setFileState((state: FileState) => ({
                    ...state,
                    isDragActive: true,
                }));
            }
            case 'upload_drag_leave': {
                return setFileState((state: FileState) => ({
                    ...state,
                    isDragActive: false,
                }));
            }
            case 'upload_error_files': {
                return setFileState((state: FileState) => ({
                    ...state,
                    errorMessage: 'Es werden zu viele Dateien auf einmal geladen.',
                    isDragActive: false
                }));
            }
            case 'upload_error_max_size': {
                return setFileState((state: FileState) => ({
                    ...state,
                    errorMessage: 'Die Datei ist grösser als die maximal zulässige Grösse.',
                    isDragActive: false
                }));
            }
            case 'upload_error_wrong_type': {
                return setFileState((state: FileState) => ({
                    ...state,
                    errorMessage: 'Die Datei hat den falschen Dateitypen.',
                    isDragActive: false
                }));
            }
            case 'upload_file_reset': {
                return setFileState(initFileState);
            }
            case 'upload_file_success': {
                return setFileState((state: FileState) => ({
                    ...state,
                    file: f.file,
                    errorMessage: '',
                    currentFile: f.currentFile,
                    isFileSelected: true,
                    isDragActive: false
                }));
            }
        }
    }

    return <FileUpload {...args} onAddFile={(f) => onHandleFile(f)} isFileSelected={fileState.isFileSelected} errorMessage={fileState.errorMessage}/>
};
export const FormUpload = Template.bind({});
FormUpload.args = {
    label: 'Form Upload',
    hint: 'JPEG oder PNG, maximal 50 MB',
};

export const FormUploadError = Template.bind({});
FormUploadError.args = {
    label: 'Form Upload and Error',
    errorMessage: 'Oh no, an error occurred',
};