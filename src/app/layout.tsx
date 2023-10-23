import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { AppBar } from "@/components/AppBar";
import { AppIcon } from "@/components/atoms/AppIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Espace DEV",
  description: "Blog pour les devs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar title="Espace" icon={<AppIcon />} />
        <main className="py-4 px-16">{children}</main>
      </body>
    </html>
  );
}
