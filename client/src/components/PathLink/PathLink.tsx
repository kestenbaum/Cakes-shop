import React, {FC} from 'react';
import Link from "next/link";

import styles from "@/components/PathLink/PathLink.module.css"

interface IPathLink {
    path: string,
    setPath: (path:string) => void
}
const PathLink:FC<IPathLink> = ({path}) => {
    return (
        <div className={styles.path}>
            <div className={styles.pathItem}>
                <Link href={"/"}>Главная</Link>
                <div className={styles.colorBlock}></div>
                <Link href={"/catalog"}>Каталог</Link>
                <div className={styles.colorBlock}></div>
                <Link href={"/catalog"}>{path}</Link>
            </div>
        </div>
    );
};

export default PathLink;