import React, {FC} from 'react';

import Link from "next/link";

import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"

import styles from "@/app/catalog/Catalog.module.css"
const Page:FC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.navigation}>
                <div className={styles.catalog}>
                    <RxHamburgerMenu/>
                    Категории
                </div>
                <div className={styles.search}>
                    <AiOutlineSearch/>
                    Поиск
                </div>
            </div>
            <div className={styles.path}>
                <div className={styles.pathItem}>
                    <Link href={"/"}>Главная</Link>
                    <div className={styles.colorBlock}></div>
                    <Link href={"/catalog"}>Каталог</Link>
                </div>
            </div>
            <div className={styles.main__block}>
                Здесь пока нечего нет...
            </div>
        </section>
    );
};

export default Page;