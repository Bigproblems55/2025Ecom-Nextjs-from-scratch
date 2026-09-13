import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "@/assets/styles/globals.css";
// import { cn } from "@/lib/utils";
import { APP_NAME } from '@/lib/constants'
// const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

// const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "A mondern ecommerce platform built for shopping with Next.js technology!",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
