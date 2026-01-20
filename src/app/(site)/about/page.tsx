import { getSettings, getNavigation, getAboutContent } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function AboutPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const about = getAboutContent();

  return (
    <>
      <Navigation siteName={settings.siteName} menuItems={navigation.mainMenu} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{about.title}</h1>
            {about.subtitle && (
              <p className="text-xl text-blue-100">{about.subtitle}</p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: about.content }}
            />
          </div>
        </section>

        {/* Objectives */}
        {about.objectives && about.objectives.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Objectives
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {about.objectives.map((objective, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {objective.title}
                    </h3>
                    <div
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: objective.description }}
                    />
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
