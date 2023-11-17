import React from "react";
import type { Metadata } from 'next'

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: 'Profile',
    description: 'Generated by create next app',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header background={"#CA8B81"}/>
                {children}
            <Footer/>
        </>
    )
}
