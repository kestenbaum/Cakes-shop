import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './global.css'
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cakes Shop',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header background={"transparent"}/>
        <main>
            {children}
        </main>
      </body>
    </html>
  )
}
