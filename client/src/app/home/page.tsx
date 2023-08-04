import React, {FC} from 'react';

import styles from "@/styles/MainPage.module.css"
import background from "@/assets/main.png"

import Image from "next/image";
const Page:FC = () => {
    return (
        <div
            className={styles.wrapper}
        >
            <Image
                alt={"bg"}
                src={background}
                fill={true}
                style={{
                    objectFit: "cover"
                }}
            />
            <div className="container">
                <section
                    className={styles.page}
                >
                    <div className={styles.wrapperTitle}>
                        <h1
                            className={styles.title}
                        >
                            К сладостям
                        </h1>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;