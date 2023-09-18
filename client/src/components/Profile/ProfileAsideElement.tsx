import React, {FC} from 'react';

import styles from "@/app/profile/profile.module.css"
import {IProfileAsideElement} from "@/interface";

import Image from "next/image";
import Link from "next/link";

const ProfileAsideElement:FC<IProfileAsideElement> = ({img, link, href}) => {
    return (
        <Link
            className={styles.profile__element}
            href={href}
        >
            {img}
            <div className={styles.description}>
                {link}
            </div>
        </Link>
    );
};

export default ProfileAsideElement;