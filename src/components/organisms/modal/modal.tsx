import React, {FC, ReactNode} from 'react'
import {CancelIcon} from "../../atoms";

export type ModalProps = {
    title: string
    children: ReactNode
    isOpen?: boolean
    setIsOpen?: any
}

const Modal: FC<ModalProps> = ({
  children,
  title,
  isOpen = false,
  setIsOpen
}) => {
    const wrapperClasses = isOpen ? 'z-10 fixed flex justify-center align-center w-full h-full top-0 left-0 bg-transparent' : 'hidden';
    const defaultClasses =  'm-xl bg-white rounded-lg z-10 w-1/2';

    return (
        <div className={wrapperClasses}>
            <div className={'z-1 absolute w-full h-full bg-slate-400 opacity-50'}></div>
            <section className={defaultClasses}>
                <section className={'flex self-center items-center justify-between h-96 px-l bg-violet-600 rounded-t-lg'}>
                    <h3 className={'text-white'}>{title}</h3>
                    <span className={'cursor-pointer hover:opacity-50'} onClick={() => setIsOpen(false)}>
                        <CancelIcon size={16} />
                    </span>
                </section>
                <section className={'p-l'}>{children}</section>
            </section>
        </div>
    )
}

export default Modal;