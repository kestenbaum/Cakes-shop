"use client"
import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components"
import Link from "next/link";
import Image from 'next/image'
import {usePathname} from "next/navigation";
import {RxHamburgerMenu} from "react-icons/rx"

import {getDataIcons, getDataNav} from "@/data";
import {HeaderProps} from "@/interface";

const Header: FC<HeaderProps> = ({background}) => {
    const [open, setOpen] = useState(false)
    const handlerMenu = () => setOpen(!open)

    const pathname = usePathname()

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <HeaderStyle>
            <Container>
                <Wrapper>
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
                    <Image
                        src="/logo.png"
                        width={83}
                        height={83}
                        alt="Picture of the author"
                    />
                    <IconsMenu $open={open}>
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
                    <BurgerMenu
                        onClick={handlerMenu}
                    >
                        <RxHamburgerMenu size={40}/>
                    </BurgerMenu>
                </Wrapper>
            </Container>
        </HeaderStyle>
    );
};
export default Header;

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  min-height: 104px;
  width: 100%;
  background-color: #CA8B81;
  z-index: 10;
`

const Container = styled.div`
  width: 100%;
  max-width: 1198px;
  padding: 0 15px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 0 33.33%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex: 0 50%;
    justify-content: space-between;
    align-items: center;
  }
`

const Navigate = styled.ul`
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px){
    display: none;
  }
`

const List = styled.li`
  display: flex;
  justify-content: center;
`

const LinkStyle = styled(Link)`
  font-size: 19px;
  color: #000;
`

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

const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 768px){
    display: flex;
    cursor: pointer;
  }
`