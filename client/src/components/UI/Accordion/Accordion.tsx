"use client"
import React, {useState} from 'react';

import styled from "styled-components";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from "react-icons/fa";
const Accordion = (props:any) => {
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
                {isShowing ? <ArrowUp/> : <ArrowDown/>}
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
  border: 1px solid rgba(209, 213, 219, 0.5);
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
  margin-bottom: 10px ;
  :hover{
    background-color: #CA8B81;
  }
`

const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 10px;
`

const ArrowUp = styled(FaArrowAltCircleUp)`
  width: 24px;
  height: 24px;
`

const ArrowDown = styled(FaArrowAltCircleDown)`
  width: 24px;
  height: 24px;
`

const Content = styled.div<{$props?: boolean}>`
  display: ${props => props.$props ? "block" : "none"};
  width: 100%;
  position: relative;
  padding: 24px;
  transition: all .2s ease-in-out;
  border: 3px solid #e9e9e9;
  border-radius: 4px;
`