import React from 'react';
import Link from "next/link";

import styles from "@/styles/Footer.module.css";
import {FooterMenuProps} from "@/interface";

const FooterMenu = (element:FooterMenuProps ) => {
    return (
        <div>
            <div key={element.id}>
                <h3 className={styles.title}>{element.title}</h3>
                <ul className={styles.list} key={element.id}>
                    {element.mass.map(link =>
                        <li><Link href={"/"} className={styles.link}/>{link.link}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default FooterMenu;