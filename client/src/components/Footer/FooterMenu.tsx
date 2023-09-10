import React from 'react';
import Link from "next/link";

import styles from "@/components/Footer/Footer.module.css";
import {FooterMenuProps} from "@/interface";

const FooterMenu = (element:FooterMenuProps ) => {
    return (
        <div>
            <div key={element.id}>
                <h3 className={styles.title}>{element.title}</h3>
                <ul className={styles.list} key={element.id}>
                    {element.mass.map(link =>
                            <Link
                                href={link.href}
                                className={styles.link}
                            >
                                {link.link}
                            </Link>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default FooterMenu;