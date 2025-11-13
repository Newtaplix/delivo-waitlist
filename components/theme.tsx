"use client";
import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes';


export const MyThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
        {children}
    </NextThemeProvider>
  )
}
