import React, {FC} from 'react';

import styles from "@/components/UI/MainButton/MainButton.module.css"
import {IButton} from "@/interface";

const MainButton:FC<IButton> = (props) => {
    const  {children, ...rest} = props

    return (
        <button
            className={styles.btn}
            {...rest}
        >
            <span
                className={styles.text__btn}
            >
                {children}
           </span>
        </button>
    );
};

export default MainButton;