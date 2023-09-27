import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from "./CardCatalog.module.css"
import MainButton from "@/components/UI/MainButton/MainButton";
import {ICardCatalog} from "@/interface";

const CardCatalog:FC<ICardCatalog> = ({src, alt, link, title}) => {
    return (
        <section
            className={styles.wrapper}
        >
            <Image
                src={src}
                alt={alt}
                width={240}
                height={150}
                className={styles.img}
            />
            <h2
                className={styles.title}
            >
                {title}
            </h2>
            <Link
                href={link}
            >
               <MainButton>
                    К товару
               </MainButton>
            </Link>
        </section>
    );
};

export default CardCatalog;