import React, {FC} from 'react';
import Image from "next/image";
import styled from "styled-components";
const HeaderLogo:FC = () => {
    return (
        <Logo
            src="/logo.png"
            width={83}
            height={83}
            alt="Picture of the author"
        />
    );
};

export default HeaderLogo;

const Logo = styled(Image)`
    @media all and (max-width: 934px){
      display: none;
    }
`