"use client"
import React, {FC} from 'react';

import styled from "styled-components";
import Button from "@/shared/ui/Button/Button";
import AsideBasket from "@/widgets/Aside/AsideBasket";
import BasketItem from "@/features/Basket/BasketItem";

const Page: FC = () => {
    return (
        <Wrapper>
            <Title>Корзина</Title>
            <div>
                <Button>Очистить корзину</Button>
            </div>
            <Basket>
                <Product>
                    {true ?
                        <>
                            <span>Товаров пока нет</span>
                            <BasketItem/>
                            <BasketItem/>
                            <BasketItem/>
                            <BasketItem/>
                        </>
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
  max-width:1198px;
  padding: 104px 15px 0;
  margin: 0 auto;
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
  padding-bottom: 25px;
  @media all and (max-width: 768px){
    flex-direction: column;
  }
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