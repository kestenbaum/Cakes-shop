"use client"
import React, {FC} from 'react';

import styled from "styled-components";

import Button from "@/components/Footer/Button";
import FooterMenu from "@/components/Footer/Menu";
import Contact from "@/components/Footer/Contact";

import android from "@/assets/icons/android.png"
import apple from "@/assets/icons/apple.png"

import {getFooterMenu} from "@/data";

const Footer:FC = () => {
    return (
        <FooterStyle>
            <Container>
                <Wrapper>
                    {getFooterMenu.map(element => {
                        return  <FooterMenu
                            title={element.title}
                            mass={element.mass}
                            id={element.id}
                        />
                    })}
                  <div>
                      <Title>
                          Наши приложения
                      </Title>
                      <Button
                          img={android}
                          alt={"android"}
                          download={"Загрузите в "}
                          services={"App store"}
                      />
                      <Button
                          img={apple}
                          alt={"apple"}
                          download={"Доступно в "}
                          services={"Google play"}
                      />
                  </div>
                 <Contact/>
                </Wrapper>
            </Container>
        </FooterStyle>
    );
};

export default Footer;

const FooterStyle = styled.footer`
  background: #CA8B81;
  padding: 18px 0;
`

const Container = styled.div`
  width: 100%;
  max-width:1198px;
  padding: 0 15px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 18px;
`