import React, {FC} from 'react';
import styles from "@/components/Footer/Footer.module.css";

const FooterContact:FC = () => {
    return (
        <div className={styles.contact}>
            <h4 className={styles.titleH4}>Контакты</h4>
            <span 
                className={styles.number}
            >
               <a
                   href="tel:+390876758734"
                   className={styles.tel}
               >
                   +390876758734
               </a>
            </span>
            <span className={styles.call}>Бесплатный звонок по Украине</span>
        </div>
    );
};

export default FooterContact;