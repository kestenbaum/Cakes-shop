import React, {FC} from 'react';
import Link from "next/link";
import Image from 'next/image'

import styles from "@/styles/Header.module.css"


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

const getDataIcons:IconsProps[] = [
    {
        id: 1,
        height: 40,
        width: 40,
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

const getDataNav:NavProps[] = [
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
const Header:FC = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.nav}>
                {getDataNav.map(element =>
                    <li
                        key={element.id}
                    >
                        <Link
                            href={element.href}
                        >
                            {element.title}
                        </Link>
                    </li>
                )}
            </ul>
            <Image
                src="/logo.png"
                width={90}
                height={90}
                alt="Picture of the author"
            />
            <ul className={styles.nav}>
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
        </header>
    );
};

export default Header;