import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/Navbar"
import FooterHandler from "@/components/FooterHandler";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "sonner";
// const inter = Inter({ subsets: ["latin"] });
 const geistSans = localFont({
 src: "./fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   
  
  weight: "100 900",
});
const geistMono = localFont({
src: "./fonts/GeistMonoVF.woff",

  variable: "--font-geist-mono",
  weight: "100 900",
 });
// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-plus-jakarta-sans',
// });


export const metadata: Metadata = {
  title: "Hackathon2 Template 7",
  description: "Generated by Shazia Bashir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <CartProvider>
        <Navbar/>
        {children}
        <FooterHandler/>
        <Toaster />
        
        </CartProvider>
        </body>
    </html>
  );
}
