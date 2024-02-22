import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { GlobalProvider } from "@/context/global-context";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import WebLayout from "@/components/UI/webLayout";
import { NextAuthProvider } from "@/utils/providers";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bounty Bargain',
  description: 'Bounty bargain',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
        <GlobalProvider>
          <WebLayout>
            <Header />
            {children}
            <Footer />
          </WebLayout>
        </GlobalProvider>
        </NextAuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
