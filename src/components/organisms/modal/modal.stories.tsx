import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, {useEffect, useState} from 'react'
import Modal from "./modal";

export default {
    title: 'Components/Organisms/Modal',
    component: Modal,
    argTypes: {
        type: {
            control: 'radio',
            options: ['default', 'settings', 'upload']
        },
        title: { control: 'text' },
        opened: { control:'boolean' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>Titel</Modal>;
};

export const ModalComponent = Template.bind({})
// @ts-ignore
ModalComponent.args = {
    title: 'Modal',
    isOpen: true,
    onClose: function noRefCheck(){},
}