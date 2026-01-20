import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const basePath = process.env.BASE_PATH || "";

export const metadata: Metadata = {
  title: "Health-AI",
  description: "AI-powered healthcare research project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/favicon/site.webmanifest`} />
        <link rel="shortcut icon" href={`${basePath}/favicon/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
