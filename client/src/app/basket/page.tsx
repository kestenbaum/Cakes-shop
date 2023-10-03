import React, {FC} from 'react';

import styles from "@/app/basket/basket.module.css"
import MainButton from "@/components/UI/MainButton/MainButton";
import AsideBasket from "@/components/Aside/AsideBasket/AsideBasket";

const Page: FC = () => {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Корзина</h1>
            <div>
                <MainButton>Очистить корзину</MainButton>
            </div>
            <section className={styles.section__basket}>
                <div className={styles.product}>
                    {true ?
                        <span>Товаров пока нет</span>
                        :
                        null
                    }
                </div>
                <AsideBasket/>
            </section>
        </section>
    );
};

export default Page;