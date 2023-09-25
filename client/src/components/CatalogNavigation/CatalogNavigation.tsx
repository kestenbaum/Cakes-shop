import React, {FC} from 'react';

import styles from "@/components/CatalogNavigation/Catalog.module.css";

import {RxHamburgerMenu} from "react-icons/rx";
import {AiOutlineSearch} from "react-icons/ai";

const CatalogNavigation:FC = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.catalog}>
                <RxHamburgerMenu/>
                Категории
            </div>
            <div className={styles.catalog}>
                <AiOutlineSearch/>
                Поиск
            </div>
        </div>
    );
};

export default CatalogNavigation;