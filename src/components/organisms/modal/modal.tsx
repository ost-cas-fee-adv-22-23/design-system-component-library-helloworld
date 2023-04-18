import React, {FC, ReactNode} from 'react'
import {CancelIcon} from "../../atoms";

export type ModalProps = {
    title: string
    isOpen: boolean,
    onClose: () => void
    children?: ReactNode
}

const Modal: FC<ModalProps> = ({
  title,
   isOpen,
   onClose,
   children
}) => {

    const wrapperClasses = isOpen ? 'z-10 fixed flex justify-center align-center w-full h-full top-none left-none bg-transparent' : 'hidden';
    const defaultClasses =  'm-xl bg-white rounded-lg z-10 w-2/3 h-2/3';

    return (
        <div className={wrapperClasses}>
            <div className={'z-1 absolute w-full h-full bg-slate-400 opacity-50'}></div>
            <section className={defaultClasses}>
                <section className={'flex self-center items-center justify-between h-96 px-l bg-violet-600 rounded-t-lg'}>
                    <h3 className={'text-white'}>{title}</h3>
                    <span className={'cursor-pointer hover:opacity-50'} onClick={onClose}>
                        <CancelIcon size={16} />
                    </span>
                </section>
                <section className={'p-l'}>{children}</section>
            </section>
        </div>
    )
}

export default Modal;