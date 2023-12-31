"use client"
import React, {FC} from 'react';

import styled from "styled-components"

const Page:FC = () => {
    return (
        <Wrapper>
            reviews
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.section`
  display: flex;
  gap: 20px;
  background-color: #FFEBF0;
  width: 100%;
  max-width:1198px;
  padding: 104px 15px 0;
  margin: 0 auto;
  height: 100%;
  min-height: calc(100vh - 104px);
`