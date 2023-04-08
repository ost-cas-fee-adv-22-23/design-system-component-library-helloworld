import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import FileUpload from "./file-upload";

export default {
    title: `Components/Molecules/FileUpload`,
    component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
    <FileUpload {...args} />
)
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