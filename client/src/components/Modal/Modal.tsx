import React, {FC, useEffect} from 'react';

import styles from "@/components/Modal/Modal.module.css"

interface IModal {
    active: boolean,
    setActive: any,
    children: any
}
const Modal:FC<IModal> = ({active, setActive, children}) => {

    const rootClasses:string[] = [styles.modal]
    if (active) rootClasses.push(styles.active)

    return (
        <section
            className={rootClasses.join(" ")}
        >
            <div className={styles.wrapper}>
                {children}
            </div>
        </section>
    );
};

export default Modal;