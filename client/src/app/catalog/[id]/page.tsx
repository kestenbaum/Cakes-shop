import React from 'react';

import {getMainProductTest} from "@/data";
import "./style.css"

type IPage = {
    params: {
        id: string
    }
}

const Page = ({params: {id}}: IPage) => {

    const element
        = getMainProductTest.find(product => Number(id) === product.category)

    console.log(element)
    console.log("aa")
    return (
        <div className={"wrapper"}>
            <p>Post page{id}</p>
            <div>Title {element?.title}</div>
            <div>Price {element?.old__price}</div>
        </div>
    );
};

export default Page;