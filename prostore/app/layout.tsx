import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants'
 

const inter = Inter({subsets: ['latin']});
// This template names the homepage's title with metadata on page and whats in the template
export const metadata: Metadata = {
  title: {
    template: `%s | Online Extrusion`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
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
