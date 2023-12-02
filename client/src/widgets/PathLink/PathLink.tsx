import React, {FC} from 'react';
import Link from "next/link";

import {IPathLink} from "@/interface";
import styled from "styled-components"

const PathLink:FC<IPathLink> = ({path}) => {
    return (
        <Wrapper>
            <Item>
                <Link href={"/"}>Главная</Link>
                <Block/>
                <Link href={"/catalog"}>Каталог</Link>
                <Block/>
                <Link href={"/catalog"}>{path}</Link>
            </Item>
        </Wrapper>
    );
};

export default PathLink;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const Block = styled.div`
  display: flex;
  height: 7px;
  width: 12px;
  background-color: #F8BDBD;
`