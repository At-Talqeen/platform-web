import type { Metadata } from "next";
import { Geist_Mono , Plus_Jakarta_Sans, Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { ToastContainer } from 'react-toastify';
import Footer from "@/components/Footer";

const plusJakarta_Sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "At-Talqeen",
  description: "Memorization of the Qur'an made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon"/>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
       
      </head>
      <body
        className={`${plusJakarta_Sans.variable} ${geistMono.variable} ${inter.variable} relative`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <ToastContainer />
      </body>
    </html>
  );
}
