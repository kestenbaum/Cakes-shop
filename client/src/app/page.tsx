"use client"
import React, {FC} from 'react';
import Link from "next/link";
import Image from "next/image"

import styled, {keyframes} from "styled-components";
import background from "../assets/main.png"

const Page:FC = () => {
    return (
        <Wrapper>
            <Image
                alt="Mountains"
                src={background}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}>
            </Image>
            <Content>
                <Title href={"/catalog"}>
                    К сладостям
                </Title>
            </Content>
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  :hover{
    transform: scale(1.03);
    transition: .3s;
  }
`

const ScaleAnimation = keyframes`
  0% { height: 69px; width: 250px; font-size: 17px;}
  30% { height: 75px; width: 275px; font-size: 25px;}
  40% { height: 85px; width: 325px; font-size: 30px;}
  100% { height: 97px; width: 380px; font-size: 50px;}
`

const Title = styled(Link)`
  display: flex;
  width: 380px;
  height: 97px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: 1px solid #000;
  background: rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(5px);
  color: aliceblue;
  z-index: 10;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  animation-name: ${ScaleAnimation};
  animation-duration: 4s;
  animation-iteration-count: 1;
  @media all and (max-width: 400px){
    display: flex;
    width: 207px;
    height: 56px;
    padding: 4.6px;
    justify-content: center;
    align-items: center;
    gap: 4.6px;
    flex-shrink: 0;
    border: 0.4px solid #000;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(2.3px);
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
