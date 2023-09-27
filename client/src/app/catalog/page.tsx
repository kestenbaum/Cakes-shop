"use client"
import React, {FC, useState} from 'react';

import CardCatalog from "@/components/CardCatalog/CardCatalog";
import CatalogNavigation from "@/components/CatalogNavigation/CatalogNavigation";
import PathLink from "@/components/PathLink/PathLink";
import {getMainProductTest, getTitleTest} from "@/data";

import styles from "@/app/catalog/catalog.module.css"
import {usePathname} from "next/navigation";

const Page:FC = () => {
    const [path, setPath] = useState<string>("Торты")
    const [category, setCategory] = useState<number>(1)
    const pathname = usePathname()
    const changeStateElement= (id: number, title:string) => {
        setCategory(id)
        setPath(title)
    }
    console.log(`${pathname}/${3}`)
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
                                    onClick={() => changeStateElement(tab.id, tab.title)}
                                >
                                    {tab.title}
                                </div>
                            })}
                        </div>
                        <div
                            className={styles.catalog}
                        >
                            {getMainProductTest
                                .filter(item => item.category === category)
                                .map(element=> {
                                return <CardCatalog
                                    src={element.img}
                                    alt={"images previous"}
                                    link={`${pathname}/${element.category}`}
                                    title={element.title}
                                />
                            })}
                            </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default Page;