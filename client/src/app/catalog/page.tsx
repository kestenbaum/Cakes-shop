import React, {FC} from 'react';

import Link from "next/link";

import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"

import styles from "@/app/catalog/catalog.module.css"
import {getTitleTest} from "@/data";
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
                {
                    getTitleTest.length === 0 ?
                    <p>
                        Здесь пока нечего нет...
                    </p>
                    :
                        getTitleTest.map((title) => {
                          return <div>
                                <h2>{title.title}</h2>
                          </div>
                      })
                }
            </div>
        </section>
    );
};

export default Page;