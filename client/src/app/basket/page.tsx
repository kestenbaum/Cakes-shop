"use client"
import React, {FC} from 'react';

import styled from "styled-components";
import MainButton from "@/components/UI/MainButton/MainButton";
import AsideBasket from "@/components/Aside/AsideBasket";

const Page: FC = () => {
    return (
        <Wrapper>
            <Title>Корзина</Title>
            <div>
                <MainButton>Очистить корзину</MainButton>
            </div>
            <Basket>
                <Product>
                    {true ?
                        <span>Товаров пока нет</span>
                        :
                        null
                    }
                </Product>
                <AsideBasket/>
            </Basket>
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFEBF0;
`

const Title = styled.h1`
  font-family: Prata, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  margin-top: 25px;
`

const Basket = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  width: 100%;
  gap: 50px;
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  background: #fff;
  border-radius: 15px;
  padding: 22px 10px;
  flex: 70%;
`