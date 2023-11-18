"use client"
import React, {FC} from 'react';
import styled from "styled-components";

import {getMainProductTest} from "@/data";
import CatalogCard from "@/components/Catalog/CatalogCard";
import {ICatalogProducts} from "@/interface";

const CatalogProducts:FC<ICatalogProducts> = ({pathname, category}) => {
    return (
        <Catalog>
            {getMainProductTest
                .filter(item => item.category === category)
                .map(element => {
                    return <CatalogCard
                        key={element.id}
                        src={element.img}
                        alt={"images previous"}
                        link={`${pathname}/${element.category}`}
                        title={element.title}
                    />
                })}
        </Catalog>
    );
};

export default CatalogProducts;

const Catalog = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  height: 100%;
  flex: 0 0 80%;
  padding: 20px;
`