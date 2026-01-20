import type { Metadata } from "next";
import { getSettings } from "@/lib/contentApi";

export async function generateMetadata(): Promise<Metadata> {
  const settings = getSettings();
  
  return {
    title: {
      default: settings.siteName,
      template: `%s | ${settings.siteName}`,
    },
    description: settings.siteDescription,
  };
}

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
