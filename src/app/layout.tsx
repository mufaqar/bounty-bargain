import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { GlobalProvider } from "@/context/global-context";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import WebLayout from "@/components/UI/webLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bounty-bargain",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <WebLayout>
            <Header />
            {children}
          </WebLayout>
        </GlobalProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
