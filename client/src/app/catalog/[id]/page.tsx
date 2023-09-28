import React from 'react';

import {getMainProductTest} from "@/data";
import {IPage} from "@/interface";

import "./style.css"

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