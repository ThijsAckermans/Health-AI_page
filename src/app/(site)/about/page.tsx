import Image from "next/image";
import { getSettings, getNavigation, getAboutContent } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function AboutPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const about = getAboutContent();
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
        <section className="relative overflow-hidden text-white py-20 md:py-28">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={getImageSrc("/assets/about-hero.jpg")}
              alt="About Health-AI"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-blue-900/70"></div>
          </div>
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl"></div>
          </div>
          <div className="relative container-wide">
            <span className="badge-primary bg-white/10 text-white border border-white/20 mb-4">
              About Health-AI
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {about.title}
            </h1>
            {about.subtitle && (
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
                {about.subtitle}
              </p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-tight">
            <div className="prose-custom">
              <div dangerouslySetInnerHTML={{ __html: about.content }} />
            </div>
          </div>
        </section>

        {/* Objectives */}
        {about.objectives && about.objectives.length > 0 && (
          <section className="section-padding gradient-subtle">
            <div className="container-wide">
              <div className="text-center mb-16">
                <span className="badge-primary mb-4">Our Goals</span>
                <h2 className="section-title">Project Objectives</h2>
                <p className="section-subtitle mx-auto">
                  Key goals driving the Health-AI project forward
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {about.objectives.map((objective, index) => (
                  <div
                    key={index}
                    className="card p-8 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {objective.title}
                        </h3>
                        <div
                          className="text-gray-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: objective.description }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
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
