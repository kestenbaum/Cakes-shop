"use client"
import React, {FC, useState} from 'react';

import styles from "@/components/AsideBasket/AsideBasket.module.css";
import MainButton from "@/components/MainButton/MainButton";
import Modal from "@/components/Modal/Modal";

const AsideBasket:FC = () => {
    const [active, setActive] = useState(false)

    return (
        <div className={styles.aside}>
            <h2 className={styles.title}>Ваша корзина</h2>
            <div className={styles.aside__block}>
                <span className={styles.aside__title}>Сумма без скидок</span>
                <span className={styles.aside__title}>2500</span>
            </div>
            <div className={styles.aside__block}>
                <span className={styles.aside__title}>Скидка по акциям</span>
                <span className={styles.aside__title}>501</span>
            </div>
            <div className={styles.aside__summa}>
                <span className={styles.aside__title}>Итого</span>
                <span className={styles.aside__title}>1999</span>
            </div>
            <div className={styles.promocode}>
                <MainButton
                    onClick={() => setActive(true)}
                >
                    У вас есть промокод?
                </MainButton>
                <Modal active={active} setActive={() => setActive(active)}>
                    promocode
                </Modal>
            </div>
            <MainButton>Продолжить</MainButton>
        </div>
    );
};

export default AsideBasket;