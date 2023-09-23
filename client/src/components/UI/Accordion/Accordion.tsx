"use client"
import React, {useState} from 'react';

import styles from "@/components/UI/Accordion/Accordion.module.css"
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from "react-icons/fa";
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
                <p className={styles.wrapper__title}>
                   {props.img}
                    <span className={styles.title}>{props.title}</span>
                </p>
                {
                    isShowing ?
                        <FaArrowAltCircleUp className={styles.icon}/>
                        :
                        <FaArrowAltCircleDown className={styles.icon}/>
                }
            </button>
            <div
                className={styles.content}
                style={{ display: isShowing ? "block" : "none" }}
                dangerouslySetInnerHTML={{
                    __html: props.content
                }}
            />
        </div>
    );
};

export default Accordion;