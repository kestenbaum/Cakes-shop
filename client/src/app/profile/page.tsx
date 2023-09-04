import React, {FC} from 'react';

import styles from "@/styles/Profile.module.css"
import ProfileAsideElement from "@/components/Profile/ProfileAsideElement";
import {CgProfile} from "react-icons/cg";
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
            </section>
        </section>
    );
};

export default Page;