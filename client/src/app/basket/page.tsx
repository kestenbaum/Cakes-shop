import React, {FC} from 'react';

import styles from "@/app/basket/basket.module.css"
import MainButton from "@/components/MainButton/MainButton";
import AsideBasket from "@/components/AsideBasket/AsideBasket";

const Page: FC = () => {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Корзина</h1>
            <MainButton>Очистить корзину</MainButton>
            <section className={styles.section__basket}>
                <div className={styles.product}>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
                <AsideBasket/>
            </section>
        </section>
    );
};

export default Page;