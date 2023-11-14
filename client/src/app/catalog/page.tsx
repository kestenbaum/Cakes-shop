"use client"
import React, {FC, useEffect, useState} from 'react';

import CardCatalog from "@/components/Catalog/CardCatalog";
import CatalogNavigation from "@/components/Catalog/CatalogNavigation";
import PathLink from "@/components/PathLink/PathLink";
import {getMainProductTest, getTitleTest} from "@/data";

import styles from "@/app/catalog/catalog.module.css"
import {usePathname} from "next/navigation";
import MainButton from "@/components/UI/MainButton/MainButton";

const Page: FC = () => {
    const [path, setPath] = useState<string>("Торты")
    const [category, setCategory] = useState<number>(1)
    const pathname = usePathname()

    const [data, setData] = useState<any[]>([])

    async function getData() {
        const response = await fetch("https://cakes-api-dev.onrender.com/api/products");
        const products = await response.json();
        return products.data
    }

    async function apiRequest (method:string, url:string, body:Object) {
        const log = await fetch(`https://cakes-api-dev.onrender.com${url}`, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(body), // body data type must match "Content-Type" header
        });
            return log.json();
    }

    async function Registration () {
        return await apiRequest(
            "POST",
            "/api/registration",
            {
                "email": "kespa71for@gmail.com",
                "password": "123456789",
            }).then(res => {
            console.log("res registration", res)
        })
    }

    async function Login () {
        return await apiRequest(
            "POST",
            "/api/login",
            {
                "email": "kespa71for@gmail.com",
                "password": "123456789",
            }).then(res => {
            console.log("res login", res)
        })
    }

    useEffect(() => {
        getData()
            .then(res => setData(res))
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data]);

    const changeStateElement = (id: number, title: string) => {
        setCategory(id)
        setPath(title)
    }

    return (
        <section className={styles.wrapper}>
            <CatalogNavigation/>
            <PathLink
                path={path}
                setPath={setPath}
            />
            <div className={styles.block}>
                {
                    getTitleTest.length === 0 ?
                        <span>
                        Здесь пока нечего нет...
                    </span>
                        :
                        <div
                            className={styles.content}
                        >
                            <div
                                className={styles.tabs}
                            >
                                {getTitleTest.map(tab => {
                                    return <div
                                        className={styles.tab}
                                        onClick={() => changeStateElement(tab.id, tab.title)}
                                    >
                                        {tab.title}
                                    </div>
                                })}
                            </div>
                            <div
                                className={styles.catalog}
                            >
                                {getMainProductTest
                                    .filter(item => item.category === category)
                                    .map(element => {
                                        return <CardCatalog
                                            src={element.img}
                                            alt={"images previous"}
                                            link={`${pathname}/${element.category}`}
                                            title={element.title}
                                        />
                                    })}
                                {data.map(element => {
                                    return <div>
                                        {element?._id}
                                    </div>
                                })}
                                <MainButton onClick={() => Registration()}>Registration</MainButton>
                                <MainButton onClick={() => Login()}>Login</MainButton>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default Page;