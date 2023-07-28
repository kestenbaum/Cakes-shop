"use client"

import React, {FC, useState} from 'react';
import Link from "next/link";
import Image from 'next/image'

import styles from "@/styles/Header.module.css"
import {RxHamburgerMenu} from "react-icons/rx";


interface NavProps {
    id: number,
    href: string,
    title: string
}

interface IconsProps {
    id: number
    width: number,
    height: number,
    src: string,
    href: string,
    alt: string
}

const getDataIcons: IconsProps[] = [
    {
        id: 1,
        height: 37,
        width: 37,
        href: "/",
        src: "/icons/likes.png",
        alt: "likes",
    },
    {
        id: 2,
        height: 40,
        width: 40,
        href: "/",
        src: "/icons/profile.png",
        alt: "profile"
    },
    {
        id: 3,
        height: 40,
        width: 40,
        href: "/",
        src: "/icons/bucket.png",
        alt: "basket"
    },
]

const getDataNav: NavProps[] = [
    {
        id: 1,
        href: "/",
        title: "Обзоры"
    },
    {
        id: 2,
        href: "/",
        title: "О компании"
    },
    {
        id: 3,
        href: "/",
        title: "Отзывы"
    },
    {
        id: 4,
        href: "/",
        title: "Доставка"
    },
]

const Header: FC = () => {
    const [open, setOpen] = useState(false)
    const handlerMenu = () => {
        setOpen(!open)
        console.log(`burger ${!open}`)
    }

    return (
        <header className={styles.header}>
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