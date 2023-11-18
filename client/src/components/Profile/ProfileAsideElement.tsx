import React, {FC} from 'react';
import styled from "styled-components";
import {IProfileAsideElement} from "@/interface";

import Link from "next/link";

const ProfileAsideElement:FC<IProfileAsideElement> = ({img, link, href}) => {
    return (
        <Wrapper href={href}>
            {img}
            <div>
                {link}
            </div>
        </Wrapper>
    );
};

export default ProfileAsideElement;

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  border: 3px solid #e9e9e9;
  border-radius: 4px;
  color: black;
  :hover{
    color: red;
  }
`