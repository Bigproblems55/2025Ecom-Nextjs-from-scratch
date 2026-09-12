import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Online Extrusion",
  description: "A mondern ecommerce platform built for shopping with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" 
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
