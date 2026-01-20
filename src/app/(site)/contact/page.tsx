import { getSettings, getNavigation, getContactContent } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function ContactPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const contact = getContactContent();

  return (
    <>
      <Navigation siteName={settings.siteName} menuItems={navigation.mainMenu} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{contact.title}</h1>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Info */}
              <div>
                {contact.intro && (
                  <div
                    className="prose prose-lg mb-8"
                    dangerouslySetInnerHTML={{ __html: contact.intro }}
                  />
                )}

                <div className="space-y-6">
                  {/* Coordinator */}
                  {contact.coordinatorName && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Project Coordinator
                      </h3>
                      <p className="text-gray-600">{contact.coordinatorName}</p>
                      {contact.coordinatorOrg && (
                        <p className="text-gray-500">{contact.coordinatorOrg}</p>
                      )}
                    </div>
                  )}

                  {/* Email */}
                  {contact.email && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email
                      </h3>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {contact.email}
                      </a>
                    </div>
                  )}

                  {/* Address */}
                  {contact.address && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Address
                      </h3>
                      <div
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{ __html: contact.address }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Form Placeholder or Map */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-4">
                  For inquiries about the project, collaboration opportunities,
                  or general questions, please reach out to us via email.
                </p>
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Email
                  </a>
                )}
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
