import React, {FC} from 'react';

import styles from "@/components/UI/Input/Input.module.css"
import {IInput} from "@/interface";

const Input:FC<IInput> = ({name, label, ...rest}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                className={styles.input}
                {...rest}
            />
        </div>
    );
};

export default Input;