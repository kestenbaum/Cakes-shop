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
  0% { height: 9.7px; width: 38px; font-size: 0;}
  10% { height: 19.4px; width: 76px; font-size: 5px;}
  20% { height: 29.1px; width: 114px; font-size: 10px;}
  30% { height: 38.8px; width: 152px; font-size: 15px;}
  40% { height: 48.5px; width: 190px; font-size: 20px;}
  50% { height: 58.2px; width: 228px; font-size: 25px;}
  60% { height: 67.9px; width: 266px; font-size: 30px;}
  70% { height: 77.6px; width: 304px; font-size: 35px;}
  80% { height: 87.3px; width: 342px; font-size: 40px;}
  90% { height: 97px; width: 380px; font-size: 45px;}
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
  animation-duration: 1s;
  animation-iteration-count: 1;
  transition: transform .5s ease-in-out, opacity .5s ease-in-out;
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
