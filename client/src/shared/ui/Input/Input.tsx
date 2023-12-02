"use client"
import React, {FC} from 'react';
import styled from "styled-components";
import {IInput} from "@/shared/types";


const Input:FC<IInput> = ({name, label, ...rest}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <InputStyle {...rest}/>
        </>
    );
};

export default Input;

const InputStyle = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 200px;
  width: 100%;
  height: 40px;
  background: #FFF;
  padding: 10px;
  border: 1px solid #FF5151;
  transition: all .5s;
  :focus{
    outline: none;
    border-radius: 15px;
  }
`
