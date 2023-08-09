import React from 'react';
import styles from "@/styles/Footer.module.css";

import Image from "next/image";
import Link from "next/link";
import {FooterBtnProps} from "@/interface";

const FooterBtn = ({img, services, download, alt}:FooterBtnProps) => {
    return (
        <Link
            href={"/home"}
            className={styles.btn}
        >
            <div>
                <Image src={img} alt={alt}/>
            </div>
            <div className={styles.btnInfo}>
                <span className={styles.download}>{download}</span>
                <span className={styles.services}>{services}</span>
            </div>
        </Link>
    );
};

export default FooterBtn;