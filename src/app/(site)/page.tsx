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
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={getImageSrc("/assets/hero-bg.jpg")}
              alt="Health-AI Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/70"></div>
          </div>
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl"></div>
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
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
                <Link
                  href="/consortium"
                  className="btn-secondary border-white/30 text-white hover:bg-white/10"
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
                <span className="badge-primary mb-4">About the Project</span>
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
                <Image
                  src={getImageSrc(home.introImage || "/assets/intro-image.jpg")}
                  alt="Health-AI Introduction"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 gradient-subtle border-y border-gray-100">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">16</div>
                <div className="text-gray-600 font-medium">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600 font-medium">Work Packages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">€8.2M</div>
                <div className="text-gray-600 font-medium">Funding</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2025</div>
                <div className="text-gray-600 font-medium">Project Start</div>
              </div>
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
                        <Image
                          src={getImageSrc(post.coverImage)}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <Link
                        href={`/news/${post.slug}`}
                        className="link-arrow text-sm"
                      >
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
                      <Image
                        src={getImageSrc(partner.logo)}
                        alt={partner.name}
                        width={100}
                        height={50}
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

        {/* CTA Section */}
        <section className="section-padding gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div className="relative container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing healthcare through federated AI. 
              Get in touch to explore partnership opportunities.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Funding Section */}
        <section className="py-8 bg-gray-900 text-white">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 104 0 2 2 0 00-4 0z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-400">
                  Funded by <span className="text-white font-medium">{settings.fundingProgram}</span>
                </span>
              </div>
            </div>
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
