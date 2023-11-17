import React, {FC} from 'react';

import {IProfileAsideElement} from "@/interface";

import Link from "next/link";

const ProfileAsideElement:FC<IProfileAsideElement> = ({img, link, href}) => {
    return (
        <Link href={href}>
            {img}
            <div>
                {link}
            </div>
        </Link>
    );
};

export default ProfileAsideElement;