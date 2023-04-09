import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
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

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal {...args}>Titel</Modal>
)

export const ModalComponent = Template.bind({})
ModalComponent.args = {
    title: 'Modal',
    opened: true,
}