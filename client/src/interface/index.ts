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