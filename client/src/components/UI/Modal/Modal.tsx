import React, {FC} from 'react';

import "./modal.css"

interface IModal {
    children: React.ReactNode,
    showModal: boolean,
    setShowModal: (value:boolean) => void
}


const Modal:FC<IModal> = ({children, showModal, setShowModal}) => {
    return (
        <section
            className={showModal ? "modal active" : "modal"}
            onClick={() => setShowModal(false)}
        >
            <div
                className={showModal ? "wrapper active" : "wrapper"}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </section>
    );
};

export default Modal;