

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { relative } from "path";
import { Navbar } from "@/components";
import { Footer } from "@/components";
import { Component } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "servini",
  description: "decouvrirte le meilleur prestateire de services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative ">
        
      <Navbar/>
       
           
        {children}
       
        <Footer/>
      </body>
    </html>
  );
}
