import React, {FC} from 'react';

import styled from "styled-components";

import {RxHamburgerMenu} from "react-icons/rx";
import {AiOutlineSearch} from "react-icons/ai";

const CatalogNavigation:FC = () => {
    return (
        <Navigation>
            <Catalog>
                <RxHamburgerMenu/>
                Категории
            </Catalog>
            <Catalog>
                <AiOutlineSearch/>
                Поиск
            </Catalog>
        </Navigation>
    );
};

export default CatalogNavigation;

const Navigation = styled.section`
  display: flex;
  padding: 20px 0;
  gap: 23px;
`

const Catalog = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
`