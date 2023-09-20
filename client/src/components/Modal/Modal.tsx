import React, {FC} from 'react';

import styles from "@/components/Modal/Modal.module.css"
interface IModal {
    active: boolean,
    setActive: any,
    children: any
}
const Modal:FC<IModal> = ({active, setActive, children}) => {
    const rootClasses = [styles.modal]

    return (
        <section
            className={active ? rootClasses.join(" ").replace("active", "") : rootClasses.join(" ")}
            onClick={setActive(false)}
        >
            <div className={styles.modal__content}>
                {children}
            </div>
        </section>
    );
};

export default Modal;