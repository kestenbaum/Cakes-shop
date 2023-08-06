"use client"
import React, {FC, useState} from 'react';

import Link from "next/link";
import Image from 'next/image'
import {RxHamburgerMenu} from "react-icons/rx"

import styles from "@/styles/Header.module.css"
import {getDataIcons, getDataNav} from "@/data";

const Header: FC = () => {
    const [open, setOpen] = useState(false)
    const handlerMenu = () => setOpen(!open)


    return (
        <header
            className={styles.header}
            style={{
                background: "transparent"
            }}

        >
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <ul className={styles.navigate}>
                        {getDataNav.map(element =>
                            <li
                                key={element.id}
                                className={styles.list__navigate}
                            >
                                <Link
                                    href={element.href}
                                    className={styles.link__navigate}
                                >
                                    {element.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <Image
                        src="/logo.png"
                        width={83}
                        height={83}
                        alt="Picture of the author"
                    />
                    <ul className={open ? styles.icons__navActive : styles.icons__nav}>
                        {getDataIcons.map(element =>
                            <li key={element.id}>
                                <Link
                                    href={element.href}
                                >
                                    <Image
                                        src={element.src}
                                        width={element.width}
                                        height={element.height}
                                        alt={element.alt}
                                    />
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div
                        className={styles.burger}
                        onClick={handlerMenu}
                    >
                        <RxHamburgerMenu size={40}/>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;