import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { MenubarDemo } from "@/components/MenuBar";
import React, { useState, useEffect } from 'react';
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (



    <html lang="en">

      <body


        className={cn("min-h-screen    ", inter.className, { "debug-screens": process.env.NODE_ENV === "development" })}>
        <ThemeProvider attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MenubarDemo />

          <div className="flex">

            <Sidebar />
            {/* main page */}
            <div className="p-8 pt-[160px] w-full">{children}</div>
          </div>
          <Footer />
        </ThemeProvider>





      </body>
    </html >





  );
}
// pages/_app.js


