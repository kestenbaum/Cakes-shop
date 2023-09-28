import React, {FC} from 'react';

import {IModal} from "@/interface";
import "./modal.css"

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