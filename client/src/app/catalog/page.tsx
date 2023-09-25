import React, {FC} from 'react';

import PathLink from "@/components/PathLink/PathLink";
import styles from "@/app/catalog/catalog.module.css"
import CatalogNavigation from "@/components/CatalogNavigation/CatalogNavigation";

import {getTitleTest} from "@/data";

const Page:FC = () => {
    return (
        <section className={styles.wrapper}>
            <CatalogNavigation/>
            <PathLink/>
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