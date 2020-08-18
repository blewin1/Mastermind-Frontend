import React from 'react'
import StyledModal from './Modal.styled'
import { Close } from '@styled-icons/evaicons-solid'

const Modal = ({ children, close }) => {
    return (
        <StyledModal>
            <div>
                <Close
                    title='Close Modal'
                    size={25}
                    id="close-modal"
                    onClick={close}
                />
                {children}
            </div>
        </StyledModal>
    )
}

export default Modal