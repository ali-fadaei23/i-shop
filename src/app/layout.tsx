import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";
import Provider from "./provider";
import ContextProvider from "@/shared/context/context";
import AuthProvider from "@/shared/auth/auth-context";
import Footer from "@/components/footer";
const myFont = localFont({ src: "../assets/fonts/FonartoLight-BWxv3.ttf" });

export const metadata: Metadata = {
  title: "iShop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${myFont.className} h-screen`}>
        <Provider>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
