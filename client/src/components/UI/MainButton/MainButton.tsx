"use client"
import React, {FC} from 'react';
import styled from "styled-components";
import {IButton} from "@/interface";

const MainButton:FC<IButton> = ({children, ...rest}) => {
    return (
        <ButtonStyle {...rest} >
            <Content>{children}</Content>
        </ButtonStyle>
    );
};

export default MainButton;

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #FF5151;
  cursor: pointer;
  transition: 0.3s;
`

const Content = styled.span`
  font-family: Happy Monkey, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #FF5151;
  :hover{
    transform: scale(1.05);
  }
`