"use client"
import React, {FC} from 'react';
import styled from "styled-components"

import {getTitleTest} from "@/data";
import {ICatalogSidebar} from "@/interface";

const CatalogSidebar:FC<ICatalogSidebar> = ({props}) => {
    return (
        <Tabs>
            {getTitleTest.map(tab => {
                return <Tab
                    onClick={() => props(tab.id, tab.title)}
                >
                    {tab.title}
                </Tab>
            })}
        </Tabs>
    );
};

export default CatalogSidebar;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  width: 300px;
  border-right: 2px solid black;
`

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 40px;
  cursor: pointer;
  border: 2px solid #F8BDBD;
`