
import Link from "next/link";
import {
  getSettings,
  getNavigation,
  getHomeContent,
  getAllNewsPosts,
  getAllPartners,
} from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function Home() {
  const settings = getSettings();
  const navigation = getNavigation();
  const home = getHomeContent();
  const news = getAllNewsPosts().slice(0, 3);
  const partners = getAllPartners();

  return (
    <>
      <Navigation siteName={settings.siteName} menuItems={navigation.mainMenu} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/assets/hero-bg.jpg"
              alt="Health-AI Background"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/70" />
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="relative container-wide py-24 md:py-36 lg:py-44">
            <div className="max-w-4xl">
              <span className="badge-primary mb-6 bg-white/10 text-white border border-white/20">
                System Breakthrough Project
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {home.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-3xl">
                {home.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                {home.heroButtonText && (
                  <Link
                    href={home.heroButtonLink || "/about"}
                    className="btn-primary bg-white text-blue-600 hover:bg-blue-50 shadow-xl shadow-black/10"
                  >
                    {home.heroButtonText}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                )}
                <Link
                  href="/consortium"
                  className="btn-secondary bg-white/10 border-white/40 text-white hover:bg-white/20"
                >
                  Meet Our Partners
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="badge-primary mb-4">
                  About the Project
                </span>
                <h2 className="section-title mb-6">{home.introTitle}</h2>
                <div
                  className="prose-custom"
                  dangerouslySetInnerHTML={{ __html: home.introContent }}
                />
                <Link href="/about" className="link-arrow mt-8 inline-flex">
                  Read more about our mission
                </Link>
              </div>

              <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img
                  src={home.introImage || "/assets/intro-image.jpg"}
                  alt="Health-AI Introduction"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 gradient-subtle border-y border-gray-100">
          <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">16</div>
              <div className="text-gray-600 font-medium">Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Work Packages</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                4 years
              </div>
              <div className="text-gray-600 font-medium">Project Duration</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2025</div>
              <div className="text-gray-600 font-medium">Project Start</div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        {news.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-wide">
              <div className="text-center mb-16">
                <span className="badge-primary mb-4">Stay Updated</span>
                <h2 className="section-title">Latest News</h2>
                <p className="section-subtitle mx-auto">
                  Follow our progress and latest developments
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {news.map((post, index) => (
                  <article
                    key={post.slug}
                    className="card group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {post.coverImage && (
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    )}

                    <div className="p-6">
                      <p className="text-sm text-blue-600 font-medium mb-2">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link href={`/news/${post.slug}`} className="link-arrow text-sm">
                        Read article
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/news" className="btn-primary">
                  View All News
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Partners Section */}
        {partners.length > 0 && (
          <section className="section-padding gradient-subtle">
            <div className="container-wide">
              <div className="text-center mb-16">
                <span className="badge-secondary mb-4">Consortium</span>
                <h2 className="section-title">Our Partners</h2>
                <p className="section-subtitle mx-auto">
                  A consortium of {partners.length} leading institutions across the Netherlands
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {partners.map((partner) => (
                  <div
                    key={partner.slug}
                    className="card-flat flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="object-contain max-h-12"
                      />
                    ) : (
                      <span className="text-gray-600 font-medium text-sm text-center px-2">
                        {partner.shortName || partner.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/consortium" className="link-arrow">
                  Learn more about our consortium
                </Link>
              </div>
            </div>
          </section>
        )}
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

