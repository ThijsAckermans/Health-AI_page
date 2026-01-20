import Image from "next/image";
import { getSettings, getNavigation, getOutreachContent } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function OutreachPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const outreach = getOutreachContent();
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
              alt="Outreach"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-blue-900/70"></div>
          </div>
          <div className="relative container-wide">
            <span className="badge-primary bg-white/10 text-white border border-white/20 mb-4">
              Events & Communication
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{outreach.title}</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: outreach.intro }}
            />
          </div>
        </section>

        {/* Events */}
        {outreach.events && outreach.events.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Events</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {outreach.events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">{event.location}</p>
                    <div
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800"
                      >
                        Learn more →
                      </a>
                    )}
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
