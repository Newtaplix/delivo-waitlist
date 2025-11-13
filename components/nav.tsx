"use client"
import Image from 'next/image'
import React from 'react'
import { ThemeSwitcher } from './animatex/theme-toggle'
import { useTheme } from 'next-themes'

export const Navbar = () => {
    const { theme } =  useTheme()
  return (
    <div className='w-full fixed top-0 left-0 p-4 flex items-center justify-between z-50'>
         <Image src={theme === "light" ? '/app-logo-light.svg' : '/app-logo-dark.svg'} height={80} width={80} alt='logo'/>
        <ThemeSwitcher/>
    </div>
  )
}
