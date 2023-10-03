"use client"
import React, {FC, useState} from 'react';

import styles from "@/components/Aside/AsideBasket/AsideBasket.module.css";
import MainButton from "@/components/UI/MainButton/MainButton";
import Modal from "@/components/UI/Modal/Modal";
import Input from "@/components/UI/Input/Input";

const AsideBasket:FC = () => {
    const [open, setOpen] = useState<boolean>(false)

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
                    onClick={() => setOpen(true)}
                >
                    У вас есть промокод?
                </MainButton>
                <Modal showModal={open} setShowModal={setOpen}>
                    <div
                        className={styles.modal}
                    >
                        <Input
                            name={"promocode"}
                            placeholder={"У вас есть промокод?"}
                        />
                        <MainButton
                            onClick={() => setOpen(false)}
                        >
                            Применить
                        </MainButton>
                    </div>
                </Modal>
            </div>
            <MainButton>Продолжить</MainButton>
        </div>
    );
};

export default AsideBasket;