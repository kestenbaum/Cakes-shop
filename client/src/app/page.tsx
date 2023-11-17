"use client"
import React, {FC} from 'react';
import Link from "next/link";

import styled from "styled-components";
import background from "@/assets/main.png"

const Page:FC = () => {
    return (
        <Wrapper $background={background}>
            <Container>
                <Content>
                    <Title href={"/catalog"}>
                            К сладостям
                    </Title>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.section<{$background?:any}>`
  width: 100%;  
  padding-top: 124px;
  height: 100vh;
  background-image: url(${props => props.$background});
  //background-image: url("../assets/main.png");
  background-size: cover;
`

const Container = styled.div`
  width: 100%;
  max-width:1198px;
  padding: 0 15px;
  margin: 0 auto;
`

const Content = styled.div`
  height: calc(100vh - 124px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
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