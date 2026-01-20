import Image from "next/image";
import { getSettings, getNavigation, getAllPartners } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function ConsortiumPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const partners = getAllPartners();
  const basePath = process.env.BASE_PATH || "";

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
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Consortium</h1>
            <p className="text-xl text-blue-100">
              Our consortium brings together leading institutions across Europe
            </p>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {partners.length > 0 ? (
              <div className="space-y-12">
                {partners.map((partner) => (
                  <div
                    key={partner.slug}
                    className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-200 pb-12 last:border-b-0"
                  >
                    <div className="flex-shrink-0 w-full md:w-48">
                      {partner.logo ? (
                        <Image
                          src={getImageSrc(partner.logo)}
                          alt={partner.name}
                          width={180}
                          height={90}
                          className="object-contain"
                        />
                      ) : (
                        <div className="bg-gray-100 h-24 w-full flex items-center justify-center rounded">
                          <span className="text-gray-500 font-medium">
                            {partner.shortName || partner.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {partner.name}
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        {partner.country}
                      </p>
                      {partner.description && (
                        <div
                          className="text-gray-600 mb-4"
                          dangerouslySetInnerHTML={{ __html: partner.description }}
                        />
                      )}
                      {partner.role && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-blue-800 mb-1">
                            Role in Project
                          </p>
                          <div
                            className="text-blue-700"
                            dangerouslySetInnerHTML={{ __html: partner.role }}
                          />
                        </div>
                      )}
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800"
                        >
                          Visit website →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No partners listed yet.</p>
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
