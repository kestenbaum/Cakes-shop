"use client"
import React, {FC, useState} from 'react';

import PathLink from "@/components/PathLink/PathLink";
import styles from "@/app/catalog/catalog.module.css"
import CatalogNavigation from "@/components/CatalogNavigation/CatalogNavigation";

import {getMainProductTest, getTitleTest} from "@/data";
import MainButton from "@/components/UI/MainButton/MainButton";


const Page:FC = () => {
    const [path, setPath] = useState<string>("Торты")

    return (
        <section className={styles.wrapper}>
            <CatalogNavigation/>
            <PathLink
                path={path}
                setPath={setPath}
            />
            <div className={styles.block}>
                {
                    getTitleTest.length === 0 ?
                    <p>
                        Здесь пока нечего нет...
                    </p>
                    :
                    <div
                        className={styles.content}
                    >
                        <div
                            className={styles.tabs}
                        >
                            {getTitleTest.map(tab => {
                                return <div
                                    className={styles.tab}
                                    onClick={() => setPath(tab.title)}
                                >
                                    {tab.title}
                                </div>
                            })}
                        </div>
                        <div
                            className={styles.catalog}
                        >
                            {getMainProductTest.map(element=> {
                                return <div>
                                    {element.title}
                                    {element.old__price}
                                    {element.new__price}
                                    <div>
                                        {element.category}
                                    </div>
                                    <MainButton>В корзину</MainButton>
                                </div>
                            })}
                            </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default Page;