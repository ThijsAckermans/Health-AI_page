import Image from "next/image";
import { getSettings, getNavigation, getAllPublications } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function PublicationsPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const publications = getAllPublications();
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
              alt="Publications"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-blue-900/70"></div>
          </div>
          <div className="relative container-wide">
            <span className="badge-primary bg-white/10 text-white border border-white/20 mb-4">
              Research
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Publications</h1>
            <p className="text-xl text-blue-100 max-w-2xl">Scientific publications from our research</p>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {publications.length > 0 ? (
              <div className="space-y-8">
                {publications.map((pub) => (
                  <article
                    key={pub.slug}
                    className="border-b border-gray-200 pb-8 last:border-b-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-2">
                          {pub.type}
                        </span>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                          {pub.title}
                        </h2>
                        <p className="text-gray-600 mb-2">{pub.authors}</p>
                        <p className="text-sm text-gray-500">
                          {pub.journal} ({pub.year})
                        </p>
                        {pub.doi && (
                          <p className="text-sm text-gray-500 mt-1">
                            DOI:{" "}
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {pub.doi}
                            </a>
                          </p>
                        )}
                        {pub.abstract && (
                          <div
                            className="mt-4 text-gray-600 text-sm"
                            dangerouslySetInnerHTML={{ __html: pub.abstract }}
                          />
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No publications yet.</p>
            )}
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
