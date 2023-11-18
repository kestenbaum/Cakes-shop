"use client"
import React, {FC} from 'react';
import styled from "styled-components";
import Link from "next/link";

import {getDataNav} from "@/data";
const HeaderNavigate:FC = () => {
    return (
        <Navigate>
            {getDataNav.map(element =>
                <List
                    key={element?.id}
                >
                    <LinkStyle
                        href={element?.href}
                    >
                        {element?.title}
                    </LinkStyle>
                </List>
            )}
        </Navigate>
    );
};

export default HeaderNavigate;

const Navigate = styled.ul`
  display: flex;
  width: 100%;
  gap: 20px;
`

const List = styled.li`
  display: flex;
  justify-content: center;
`

const LinkStyle = styled(Link)`
  font-size: 19px;
  color: #000;
`