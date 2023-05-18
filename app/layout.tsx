import "./globals.css";
import { Nunito } from "next/font/google";
import React from "react";
import Navbar from "@/app/components/navbar";
import ClientOnly from "@/app/components/clientOnly";
import RegisterModal from "@/app/components/registerModal";
import LoginModal from "@/app/components/loginModal";
import ToasterProvider from "@/app/components/PROVIDERS/ToasterProvider";
import NextAuthProvider from "@/app/components/PROVIDERS/NextAuthProvider";
import getCurrentUser from "@/app/actions/getCurrentUser";

export const metadata = {
  title: "AirBnb Clone",
  description: "AirBnb Clone",
};

const nunito = Nunito({
  subsets: ["latin"],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NextAuthProvider>
          {/*TODO maybe this is won't be necessary https://www.joshwcomeau.com/react/the-perils-of-rehydration/ https://stackoverflow.com/questions/74022328/how-to-solve-react-hydration-error-in-next-js-when-using-uselocalstorage-and*/}
          <ClientOnly>
            <ToasterProvider />
            <Navbar currentUser={currentUser} />
            <RegisterModal />
            <LoginModal />
          </ClientOnly>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
