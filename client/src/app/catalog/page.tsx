"use client"
import React, {FC, useState} from 'react';
import {usePathname} from "next/navigation";
import styled from "styled-components"

import {getTitleTest} from "@/data";
import CatalogNavigation from "@/components/Catalog/CatalogNavigation";
import PathLink from "@/components/PathLink/PathLink";
import CatalogSidebar from "@/components/Catalog/CatalogSidebar";
import CatalogProducts from "@/components/Catalog/CatalogProducts";

const Page: FC = () => {
    const [path, setPath] = useState<string>("Торты")
    const [category, setCategory] = useState<number>(1)
    const pathname = usePathname()

    const changeStateElement = (id: number, title: string) => {
        setCategory(id)
        setPath(title)
    }

    return (
        <Wrapper>
            <CatalogNavigation/>
            <PathLink
                path={path}
                setPath={setPath}
            />
            <Block>
                {
                    getTitleTest.length === 0 ?
                        <span>
                        Здесь пока нечего нет...
                    </span>
                        :
                        <Content>
                            <CatalogSidebar props={changeStateElement}/>
                            <CatalogProducts
                                pathname={pathname}
                                category={category}
                            />
                        </Content>
                }
            </Block>
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.section`
  background-color: #FFEBF0;
  width: 100%;
  max-width:1198px;
  padding: 104px 15px 0;
  margin: 0 auto;
`

const Block = styled.div`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 104px - 265px);
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
`
