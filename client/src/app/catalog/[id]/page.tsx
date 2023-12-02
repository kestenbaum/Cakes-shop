"use client"
import React from 'react';

import img from "@/assets/Frame 76.png"

import Button from "@/shared/ui/Button/Button";
import {getMainProductTest} from "@/data";
import {IPage} from "@/interface";

import styled from "styled-components"
import Image from "next/image";


const Page = ({params: {id}}: IPage) => {
    const element
        = getMainProductTest.find(product => Number(id) === product.category)

    return (
        <Wrapper>
            <Content>
                <Block>
                    <Info>
                        <h2>{element?.title}</h2>
                        <p>{element?.description}</p>
                        <span>Страна производитель: {element?.country}</span>
                        <Price>
                            <span>Старая цена {element?.old__price} Гривен</span>
                            <span>Новая цена {element?.new__price} Гривен</span>
                        </Price>
                        <span>Вес: {element?.weight} гр</span>
                        <div>
                            <Button>В корзину</Button>
                        </div>
                    </Info>
                    <div>
                        <Image
                            src={img}
                            alt={"image for element"}
                        />
                    </div>
                </Block>
            </Content>
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.section`
  background-color: #FFEBF0;
  width: 100%;
  max-width: 1198px;
  padding: 104px 15px 0;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 104px - 188px);
`

const Block = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 50px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 80%;
  padding: 20px;
`

const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`