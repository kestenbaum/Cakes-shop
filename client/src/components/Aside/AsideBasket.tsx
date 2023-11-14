"use client"
import React, {FC, useState} from 'react';
import styled from "styled-components"

import MainButton from "@/components/UI/MainButton/MainButton";
import Modal from "@/components/UI/Modal/Modal";
import Input from "@/components/UI/Input/Input";

const AsideBasket:FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Aside>
            <Title>Ваша корзина</Title>
            <Block>
                <Title $primary>Сумма без скидок</Title>
                <Title $primary>2500</Title>
            </Block>
            <Block>
                <Title $primary>Скидка по акциям</Title>
                <Title $primary>501</Title>
            </Block>
            <Block $aside>
                <Title $primary>Итого</Title>
                <Title $primary>1999</Title>
            </Block>
            <Promo>
                <MainButton
                    onClick={() => setOpen(true)}
                >
                    У вас есть промокод?
                </MainButton>
                <Modal showModal={open} setShowModal={setOpen}>
                    <ModalStyle>
                        <Input
                            name={"promocode"}
                            placeholder={"У вас есть промокод?"}
                        />
                        <MainButton
                            onClick={() => setOpen(false)}
                        >
                            Применить
                        </MainButton>
                    </ModalStyle>
                </Modal>
            </Promo>
            <MainButton>Продолжить</MainButton>
        </Aside>
    );
};

export default AsideBasket;

const Aside = styled.section`
    display: flex;
    flex-direction: column;
    gap: 35px;
    background: #fff;
    border-radius: 15px;
    padding: 22px 10px;
`

const Title = styled.h2<{ $primary?: boolean}>`
  font-family: ${props => props.$primary ? "Quattrocento, sans-serif" : "Happy Monkey, sans-serif"};
  font-size: ${props => props.$primary ? "16px" : "18px"};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Block = styled.div<{ $aside?: boolean}>`
  padding-top: ${props => props.$aside ? "15px" : 0};
  border-top: ${props => props.$aside ? "2px solid black" : null};
  
  display: flex;
  justify-content: space-between;
  min-width: 300px;
`

const Promo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px   ;
  justify-content: flex-end;
`

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`
