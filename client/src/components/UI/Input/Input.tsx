import React, {FC, InputHTMLAttributes} from 'react';

import styles from "@/components/UI/Input/Input.module.css"

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label?: string
}

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