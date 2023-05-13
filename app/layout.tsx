import "./globals.css";
import { Nunito } from "next/font/google";
import React from "react";
import Navbar from "@/app/components/navbar";

export const metadata = {
  title: "AirBnb Clone",
  description: "AirBnb Clone",
};

const nunito = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
