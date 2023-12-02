"use client"
import React from 'react';
import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";
import {FooterBtnProps} from "@/interface";

const Button = ({img, services, download, alt}:FooterBtnProps) => {
    return (
        <ButtonStyle
            href={"/home"}
        >
            <Image src={img} alt={alt}/>
            <Wrapper>
                <LinkStyle $primary>{download}</LinkStyle>
                <LinkStyle>{services}</LinkStyle>
            </Wrapper>
        </ButtonStyle>
    );
};

export default Button;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LinkStyle = styled.span<{ $primary?: boolean}>`
  color: #FFFFFF;
  font-size: ${props => props.$primary ? "8px" : "14px"};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ButtonStyle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 22px;
  border-radius: 15px;
  background: #000000;
  margin-bottom: 15px;
`