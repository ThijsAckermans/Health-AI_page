import { getSettings, getNavigation, getAllWorkPackages } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function WorkPackagesPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const workPackages = getAllWorkPackages();

  return (
    <>
      <Navigation siteName={settings.siteName} menuItems={navigation.mainMenu} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Packages</h1>
            <p className="text-xl text-blue-100">
              The project structure and organization
            </p>
          </div>
        </section>

        {/* Work Packages */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {workPackages.length > 0 ? (
              <div className="space-y-8">
                {workPackages.map((wp) => (
                  <div
                    key={wp.slug}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold">WP{wp.number}</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                          {wp.title}
                        </h2>
                        <p className="text-sm text-blue-600 mb-3">
                          Lead: {wp.lead}
                        </p>
                        {wp.description && (
                          <div
                            className="text-gray-600 mb-4"
                            dangerouslySetInnerHTML={{ __html: wp.description }}
                          />
                        )}
                        {wp.objectives && wp.objectives.length > 0 && (
                          <div className="mt-4">
                            <p className="font-medium text-gray-700 mb-2">
                              Objectives:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {wp.objectives.map((obj, index) => (
                                <li key={index}>{obj}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No work packages listed yet.
              </p>
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
