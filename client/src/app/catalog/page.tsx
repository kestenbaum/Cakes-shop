"use client"
import React, {FC, useState} from 'react';

import PathLink from "@/components/PathLink/PathLink";
import styles from "@/app/catalog/catalog.module.css"
import CatalogNavigation from "@/components/CatalogNavigation/CatalogNavigation";

import {getTitleTest} from "@/data";

const Page:FC = () => {
    const [path, setPath] = useState<string>("Торты")

    return (
        <section className={styles.wrapper}>
            <CatalogNavigation/>
            <PathLink
                path={path}
                setPath={setPath}
            />
            <div className={styles.main__block}>
                {
                    getTitleTest.length === 0 ?
                    <p>
                        Здесь пока нечего нет...
                    </p>
                    :
                        getTitleTest.map((title) => {
                          return <div>
                                <h2
                                    onClick={() => setPath(title.title)}
                                >{title.title}</h2>
                          </div>
                      })
                }
            </div>
        </section>
    );
};

export default Page;