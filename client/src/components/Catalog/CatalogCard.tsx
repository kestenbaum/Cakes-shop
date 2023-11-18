import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import MainButton from "@/components/UI/MainButton/MainButton";
import {ICardCatalog} from "@/interface";

const CatalogCard:FC<ICardCatalog> = ({src, alt, link, title}) => {
    return (
        <Wrapper>
            <Image
                src={src}
                alt={alt}
                width={240}
                height={150}
            />
            <Title>{title}</Title>
            <Link
                href={link}
            >
               <MainButton>
                    К товару
               </MainButton>
            </Link>
        </Wrapper>
    );
};

export default CatalogCard;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  gap: 20px;
  padding: 20px;
`

const Title = styled.h2`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`
