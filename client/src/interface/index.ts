import React, {InputHTMLAttributes} from "react";

export interface HeaderProps {
    background: string
}
export interface NavProps {
    id: number,
    href: string,
    title: string
}

export interface IconsProps {
    id: number
    width: number,
    height: number,
    src: string,
    href: string,
    alt: string
}

//footer
export interface ArrayMenuProps {
    id: number,
    link: string,
    href: string
}
export interface FooterMenuProps {
    id: number,
    title: string,
    mass: ArrayMenuProps[]
}

export interface FooterBtnProps {
    img: any,
    alt: string,
    download: string,
    services: string
}

export interface IProfileAsideElement {
    id: number,
    img: any,
    link: string,
    href: string
}

export interface IProfileMenuElement {
    id: number,
    img: any,
    title: string,
    content: any
}



export interface ICardCatalog {
    src: any,
    alt: string,
    link: string,
    title: string
}

export type IPage = {
    params: {
        id: string
    }
}

export interface IPathLink {
    path: string,
    setPath: (path:string) => void
}

export interface IHeaderMenu {
    props: boolean
}

export interface ICatalogProducts {
    pathname: string;
    category: number;
}

export interface ICatalogSidebar {
    props: (a:number, b:string) => void
}