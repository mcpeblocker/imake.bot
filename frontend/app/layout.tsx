import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/common/Navbar";
import ToastContainer from "@/components/common/ToastContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "imake.bot",
  description:
    "A toolkit to conveniently develop and launch chat bots with essential features.",
  icons: "/imake-logo-bright.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        {children}
        {/* Footer */}
        {/* Shared components */}
        <ToastContainer />
      </body>
    </html>
  );
}
