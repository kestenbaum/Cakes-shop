import React, {FC} from 'react';
import styled from "styled-components";
import Image from "next/image";

import logo from "@/assets/Frame 76.png"
import MainButton from "@/components/UI/MainButton/MainButton";
const BasketItem:FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title>Name</Title>
                <Image
                    src={logo}
                    alt={"logo item"}
                    height={45}
                    width={45}
                />
            </Content>
            <PriceBlock>
                <Price>
                    <Value>Скидка</Value>
                    <Value $primary={"red"}>501</Value>
                    <Value>Грн</Value>
                </Price>
                <Price>
                    <Value>1999</Value>
                    <Value>Грн</Value>
                </Price>
            </PriceBlock>
            <DeleteButton>
                <MainButton>Удалить</MainButton>
            </DeleteButton>
        </Wrapper>
    );
};

export default BasketItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  background-color: #FFEBF0;
  border-radius: 5px;
`

const Content = styled.div`
  display: flex;
  align-items: center;  
  gap: 30px;
  @media all and (max-width: 443px){
    flex-direction: column;
  }
`

const Title = styled.h2`
  font-size: 18px;
  font-family: Happy Monkey, sans-serif;
  color: black;
`

const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  @media all and (max-width: 550px){
    flex-direction: column;
    justify-content: center;
  }
`

const Price = styled.div`
    
`

const Value = styled.span<{$primary?:string}>`
  font-size: 16px;
  color: ${props => props.$primary};
  font-weight: bold;
  margin-left: 5px;
`

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`