import React, {FC} from 'react';

import styles from "@/app/profile/profile.module.css"

import ProfileAsideElement from "@/components/Profile/ProfileAsideElement";
import Accordion from "@/components/Accordion/Accordion";

import {getAsideProfilePage, getMenuProfilePage} from "@/data/index"
const Page:FC = () => {
    return (
        <section
            className={styles.wrapper}
        >
            <aside
                className={styles.sidebar}
            >
                {getAsideProfilePage.map(AsideElement => {
                    return  <ProfileAsideElement
                        id={AsideElement.id}
                        img={ <AsideElement.img width={24} height={24}/>}
                        link={AsideElement.link}
                        href={AsideElement.href}
                    />
                })}
            </aside>
            <section className={styles.main}>
                <h2
                    className={styles.title}
                >
                    Личные данные
                </h2>
                <div className={styles.block__information}>
                    {getMenuProfilePage.map(menuElement => {
                        return <Accordion
                            id={menuElement.id}
                            img={<menuElement.img className={styles.icon}/>}
                            title={menuElement.title}
                            content={menuElement.content}
                        />
                    })}
                </div>
            </section>
        </section>
    );
};

export default Page;