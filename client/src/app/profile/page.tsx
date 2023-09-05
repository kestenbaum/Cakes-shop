import React, {FC} from 'react';

import styles from "@/app/profile/Profile.module.css"
import ProfileAsideElement from "@/components/Profile/ProfileAsideElement";
import {CgProfile} from "react-icons/cg";
import Accordion from "@/components/Accordion/Accordion";
import {MdOutlineContactMail} from "react-icons/md";
const Page:FC = () => {

    const img = <CgProfile width={24} height={24}/>

    return (
        <section
            className={styles.wrapper}
        >
            <aside
                className={styles.sidebar}
            >
                <ProfileAsideElement
                    img={img}
                    link={"Name Vorname"}
                    href={"/"}
                />
                <ProfileAsideElement
                    img={img}
                    link={"Name Vorname"}
                    href={"/"}
                />
            </aside>
            <section className={styles.main}>
                <h2
                    className={styles.title}
                >
                    Личные данные
                </h2>
                <div className={styles.block__information}>
                    <Accordion
                        img={<CgProfile className={styles.icon}/>}
                        title="Личные данные"
                        content="this is content 1"
                    />
                    <Accordion
                        img={<MdOutlineContactMail className={styles.icon}/>}
                        title="Контакты"
                        content="this is content 1"
                    />
                </div>
            </section>
        </section>
    );
};

export default Page;