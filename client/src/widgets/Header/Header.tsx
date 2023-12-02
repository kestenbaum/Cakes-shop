"use client"
import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components"
import {usePathname} from "next/navigation";
import {RxHamburgerMenu} from "react-icons/rx"

import HeaderNavigate from "@/widgets/Header/components/HeaderNavigate";
import HeaderLogo from "@/widgets/Header/components/HeaderLogo";
import HeaderMenu from "@/widgets/Header/components/HeaderMenu";

const Header: FC = () => {
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
                    <HeaderNavigate/>
                    <HeaderLogo/>
                    <HeaderMenu props={open}/>
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

const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 768px){
    display: flex;
    cursor: pointer;
  }
  @media all and (max-width: 350px){
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
  }
`