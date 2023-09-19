import React, {FC} from 'react';

import styles from "@/components/MainButton/MainButton.module.css"
import {IButton} from "@/interface";

const MainButton:FC<IButton> = (props) => {
    const  {children} = props

    return (
        <button className={styles.btn}>
            <span
                className={styles.text__btn}
            >
                {children}
           </span>
        </button>
    );
};

export default MainButton;