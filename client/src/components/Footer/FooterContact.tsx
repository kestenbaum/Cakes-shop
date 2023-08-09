import React, {FC} from 'react';
import styles from "@/styles/Footer.module.css";

const FooterContact:FC = () => {
    return (
        <div className={styles.contact}>
            <h4 className={styles.titleH4}>Контакты</h4>
            <span className={styles.number}>+390876758734</span>
            <span className={styles.call}>Бесплатный звонок по Украине</span>
        </div>
    );
};

export default FooterContact;