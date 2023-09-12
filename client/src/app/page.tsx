import React, {FC} from 'react';

import Link from "next/link";

import styles from "@/app/MainPage.module.css"

const Page:FC = () => {
    return (
        <div
            className={styles.wrapper}
        >
            <div className="container">
                <section
                    className={styles.page}
                >
                    <Link href={"/catalog"} className={styles.wrapperTitle}>
                        <h1
                            className={styles.title}
                        >
                            К сладостям
                        </h1>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default Page;