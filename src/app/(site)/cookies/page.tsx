import Image from "next/image";
import { getSettings, getNavigation, getLegalPage } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function CookiesPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const page = getLegalPage("cookies");
  const content = await markdownToHtml(page.content || "");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || "";

  const getImageSrc = (src: string) => {
    if (!src) return "";
    return src.startsWith("/") && basePath && !src.startsWith(basePath)
      ? `${basePath}${src}`
      : src;
  };

  return (
    <>
      <Navigation siteName={settings.siteName} menuItems={navigation.mainMenu} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden text-white py-16 md:py-20">
          <div className="absolute inset-0">
            <Image
              src={getImageSrc("/assets/about-hero.jpg")}
              alt="Cookie Policy"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-blue-900/70"></div>
          </div>
          <div className="relative container-wide">
            <span className="badge-primary bg-white/10 text-white border border-white/20 mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{page.title}</h1>
            <p className="text-blue-100">Last updated: {new Date(page.lastUpdated).toLocaleDateString()}</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-tight">
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </section>
      </main>

      <SiteFooter
        siteName={settings.siteName}
        footerText={settings.footerText}
        socialLinks={settings.socialLinks}
        grantAgreementNumber={settings.grantAgreementNumber}
      />
    </>
  );
}
