import Link from "next/link";
import Image from "next/image";
import { getSettings, getNavigation, getHomeContent, getAllNewsPosts, getAllPartners } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function Home() {
  const settings = getSettings();
  const navigation = getNavigation();
  const home = getHomeContent();
  const news = getAllNewsPosts().slice(0, 3);
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{home.heroTitle}</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">{home.heroSubtitle}</p>
              {home.heroButtonText && (
                <Link
                  href={home.heroButtonLink || "/about"}
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {home.heroButtonText}
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{home.introTitle}</h2>
                <div
                  className="prose prose-lg text-gray-600"
                  dangerouslySetInnerHTML={{ __html: home.introContent }}
                />
                <Link
                  href="/about"
                  className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-800"
                >
                  Read more →
                </Link>
              </div>
              {home.introImage && (
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={getImageSrc(home.introImage)}
                    alt="Introduction"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        {news.length > 0 && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
                <p className="text-gray-600">Stay updated with our latest developments</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {news.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {post.coverImage && (
                      <div className="relative h-48">
                        <Image
                          src={getImageSrc(post.coverImage)}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/news/${post.slug}`}
                        className="text-blue-600 font-medium hover:text-blue-800"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/news"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View All News
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Partners Section */}
        {partners.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
                <p className="text-gray-600">
                  A consortium of leading institutions across Europe
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {partners.map((partner) => (
                  <div
                    key={partner.slug}
                    className="grayscale hover:grayscale-0 transition-all"
                  >
                    {partner.logo ? (
                      <Image
                        src={getImageSrc(partner.logo)}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-gray-500 font-medium">{partner.shortName || partner.name}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/consortium"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn more about our consortium →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Funding Section */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg mb-2">Funded by the European Union</p>
            <p className="text-gray-400">
              This project receives funding from the European Commission&apos;s{" "}
              {settings.fundingProgram} Programme under grant agreement number{" "}
              {settings.grantAgreementNumber}
            </p>
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
