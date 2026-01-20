import { getSettings, getNavigation, getOutreachContent } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function OutreachPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const outreach = getOutreachContent();

  return (
    <>
      <Navigation siteName={settings.siteName} menuItems={navigation.mainMenu} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{outreach.title}</h1>
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
