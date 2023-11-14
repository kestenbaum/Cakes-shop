import React from 'react';
import Link from "next/link";
import styled from "styled-components";

import {FooterMenuProps} from "@/interface";

const FooterMenu = (element:FooterMenuProps ) => {
    return (
        <>
            <div key={element.id}>
                <Title>{element.title}</Title>
                <Wrapper key={element.id}>
                    {element.mass.map(link =>
                            <LinkStyled
                                href={link.href}>
                                {link.link}
                            </LinkStyled>
                    )}
                </Wrapper>
            </div>
        </>
    );
};

export default FooterMenu;

const Title = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 33px;
`

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const LinkStyled = styled(Link)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000000;
`