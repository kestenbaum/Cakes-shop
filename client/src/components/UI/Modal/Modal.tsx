"use client"
import React, {FC} from 'react';
import {IModal} from "@/interface";
import styled from "styled-components"


const Modal:FC<IModal> = ({children, showModal, setShowModal}) => {
    return (
        <Wrapper
            $props = {showModal}
            onClick={() => setShowModal(false)}
        >
            <Content
                onClick={e => e.stopPropagation()}
                $props = {showModal}
            >
                {children}
            </Content>
        </Wrapper>
    );
};

export default Modal;

const Wrapper = styled.section<{$props?:boolean}>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  opacity: ${props => props.$props ? 1 : 0};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  pointer-events: ${props => props.$props ? "all" : "none"};
  transform: scale(1.02);
  transition: transform .5s ease-in-out, opacity .5s ease-in-out;
`

const Content = styled.div<{$props?:boolean}>`
  display: flex;
  opacity: ${props => props.$props ? 1 : 0};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #ffffff;
  color: #1a1a1a;
  transform: scale(1.02);
  transition: transform .5s ease-in-out, opacity .5s ease-in-out;
`