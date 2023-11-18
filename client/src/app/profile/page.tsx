"use client"
import React, {FC} from 'react';

import styled from "styled-components"

import ProfileAsideElement from "@/components/Profile/ProfileAsideElement";
import Accordion from "@/components/UI/Accordion/Accordion";

import {getAsideProfilePage, getMenuProfilePage} from "@/data"
const Page:FC = () => {
    return (
        <Wrapper>
            <Sidebar>
                {getAsideProfilePage.map(AsideElement => {
                    return  <ProfileAsideElement
                        key={AsideElement.id}
                        id={AsideElement.id}
                        img={ <AsideElement.img width={24} height={24}/>}
                        link={AsideElement.link}
                        href={AsideElement.href}
                    />
                })}
            </Sidebar>
            <Main>
                <Title>
                    Личные данные
                </Title>
                <Content>
                    {getMenuProfilePage.map(menuElement => {
                        return <AccordionElement
                            id={menuElement.id}
                            img={<menuElement.img/> }
                            title={menuElement.title}
                            content={menuElement.content}
                        />
                    })}
                </Content>
            </Main>
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.section`
  display: flex;
  gap: 20px;
  background-color: #FFEBF0;
  width: 100%;
  max-width:1198px;
  padding: 104px 15px 0;
  margin: 0 auto;
  height: 100%;
  min-height: calc(100vh - 104px);
  @media all and (max-width: 850px){
    flex-direction: column;
  }
`

const Sidebar = styled.aside`
  display: flex;
  flex: 0 0 25%;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-right: 3px solid #e9e9e9;
  @media all and (max-width: 850px){
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Main = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 0 70%;
`

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 24px;
  padding: 10px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`

const AccordionElement = styled(Accordion)`
  width: 24px;
  height: 24px;
`
