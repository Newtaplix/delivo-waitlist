import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav";
import { MyThemeProvider } from "@/components/theme";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: "400" });


export const metadata: Metadata = {
  title: "Delivo - Waitlist",
  description: "Be an early bird! Join the delivo waiting list today!",
  icons: {
    icon: "/app-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <MyThemeProvider>
          <Navbar/>
          {children}
        </MyThemeProvider>
      </body>
    </html>
  );
}
