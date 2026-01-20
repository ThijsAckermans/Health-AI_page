import { getSettings, getNavigation, getAllPublications } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function PublicationsPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const publications = getAllPublications();

  return (
    <>
      <Navigation siteName={settings.siteName} menuItems={navigation.mainMenu} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
            <p className="text-xl text-blue-100">Scientific publications from our research</p>
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
