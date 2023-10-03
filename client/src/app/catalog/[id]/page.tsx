import React from 'react';

import img from "@/assets/Frame 76.png"

import MainButton from "@/components/UI/MainButton/MainButton";
import {getMainProductTest} from "@/data";
import {IPage} from "@/interface";

import "./style.css"
import Image from "next/image";


const Page = ({params: {id}}: IPage) => {
    const element
        = getMainProductTest.find(product => Number(id) === product.category)

    return (
        <section className={"wrapper"}>
            <div className="content">
                <div className={"block"}>
                    <div className={"info"}>
                        <h2 className={"title"}>{element?.title}</h2>
                        <p>{element?.description}</p>
                        <span>Страна производитель: {element?.country}</span>
                        <div className={"price"}>
                            <span>Старая цена {element?.old__price} Гривен</span>
                            <span>Новая цена {element?.new__price} Гривен</span>
                        </div>
                        <span>Вес: {element?.weight} гр</span>
                        <div>
                            <MainButton>В корзину</MainButton>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={img}
                            alt={"image for element"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;