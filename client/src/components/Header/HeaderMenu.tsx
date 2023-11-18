"use client"
import React, {FC} from 'react';
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import {getDataIcons} from "@/data";
import {IHeaderMenu} from "@/interface";

const HeaderMenu:FC<IHeaderMenu> = ({props}) => {
    return (
        <IconsMenu $open={props}>
            {getDataIcons.map(element =>
                <li key={element?.id}>
                    <Link
                        href={element?.href}
                    >
                        <Image
                            src={element?.src}
                            width={element?.width}
                            height={element?.height}
                            alt={element?.alt}
                        />
                    </Link>
                </li>
            )}
        </IconsMenu>
    );
};

export default HeaderMenu;

const IconsMenu = styled.ul.attrs<{$background?: string, $open?: boolean}>(props => ({
    $background: props.$background
}))`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 50px;
  @media (max-width: 768px){
    display: ${props => props.$open ? "flex" : "none"};
    gap: 20px;
    flex-direction: column;
    width: 70px;
    padding: 17px;
    position: absolute;
    top: 104px;
    right: -15px;
    background-color: #CA8B81;
    transition: .3s;
  }
`
