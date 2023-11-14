"use client"
import React, {FC} from 'react';
import styled from "styled-components";

const Contact:FC = () => {
    return (
        <Contact>
            <Title>Контакты</Title>
            <Number href="tel:+390876758734">+390876758734</Number>
            <LinkStyle>Бесплатный звонок по Украине</LinkStyle>
        </Contact>
    );
};

export default Contact;

const Contact = styled.section`
  display: flex;
  flex-direction: column;
`

const Title = styled.h4`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 18px;
`

const Number = styled.a`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
  color: #000000;
`

const LinkStyle = styled.span`
  font-family: Quattrocento, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`