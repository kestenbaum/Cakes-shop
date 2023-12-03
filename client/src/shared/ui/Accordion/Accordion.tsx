"use client"
import React, {FC, useState} from 'react';

import styled, {keyframes} from "styled-components";
import {FaArrowAltCircleDown} from "react-icons/fa";
const Accordion:FC = (props:any) => {
    const [isShowing, setIsShowing] = useState(false);
    const toggle = () => setIsShowing(!isShowing);

    return (
        <Wrapper>
            <Button
                onClick={toggle}
                type="button"
            >
                <Title>
                    {props.img}
                    <span>{props.title}</span>
                </Title>
                <ArrowDown $props={isShowing}/>
            </Button>
            <Content
                $props={isShowing}
                dangerouslySetInnerHTML={{
                    __html: props.content
                }}
            />
        </Wrapper>
    );
};

export default Accordion;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  line-height: 15px;
`

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  text-align: left;
  background: transparent;
  outline: none;
  cursor: pointer;
  padding: 24px;
  transition: all .2s ease-in-out;
  border: 3px solid #e9e9e9;
  border-radius: 4px;
`

const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 10px;
`

const AnimationArrow = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`

const ArrowDown = styled(FaArrowAltCircleDown)<{$props:boolean}>`
  width: 24px;
  height: 24px;
  animation: .3s linear forwards;
  animation-name: ${props => props.$props && AnimationArrow};
  animation-duration: .3s;
  animation-iteration-count: 1;
`

const Content = styled.div<{$props: boolean}>`
  display: ${props => props.$props ? "block" : "none"};
  width: 100%;
  position: relative;
  padding: 24px;
  transition: all .2s ease-in-out;
  border: 3px solid #e9e9e9;
  border-radius: 4px;
  margin-top: 10px;
`