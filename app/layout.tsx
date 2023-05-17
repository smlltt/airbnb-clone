import "./globals.css";
import { Nunito } from "next/font/google";
import React from "react";
import Navbar from "@/app/components/navbar";
import ClientOnly from "@/app/components/clientOnly";
import AuthModal from "@/app/components/authModal";

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
        {/*TODO maybe this is won't be necessary https://www.joshwcomeau.com/react/the-perils-of-rehydration/ https://stackoverflow.com/questions/74022328/how-to-solve-react-hydration-error-in-next-js-when-using-uselocalstorage-and*/}
        <ClientOnly>
          <Navbar />
          <AuthModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
