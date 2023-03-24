import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import FileUpload from "./file-upload";

export default {
    title: `Components/Atoms/FileUpload`,
    component: FileUpload,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
    },
    parameters: {
        componentSubtitle: `Renders a Fileupload component.`,
    },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => {
    return <FileUpload {...args}></FileUpload>;
};

export const FileUploadComponent: ComponentStory<typeof FileUpload> = Template.bind({});
FileUploadComponent.args = {
    label: 'Auswählen',
};