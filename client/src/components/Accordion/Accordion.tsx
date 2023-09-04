"use client"
import React, {useState} from 'react';

import styles from "@/styles/Accordion.module.css"
const Accordion = (props:any) => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div
            className={styles.wrapeper}
        >
            <button
                className={styles.btn}
                onClick={toggle}
                type="button"
            >
                <p>{props.title}</p>
            </button>
            <div
                style={{ display: isShowing ? "block" : "none", padding: "5px" }}
                dangerouslySetInnerHTML={{
                    __html: props.content
                }}
            />
        </div>
    );
};

export default Accordion;