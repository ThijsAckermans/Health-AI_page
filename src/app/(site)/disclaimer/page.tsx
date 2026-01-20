import { getSettings, getNavigation, getLegalPage } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function DisclaimerPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const page = getLegalPage("disclaimer");
  const content = await markdownToHtml(page.content || "");

  return (
    <>
      <Navigation siteName={settings.siteName} menuItems={navigation.mainMenu} />

      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{page.title}</h1>
          <p className="text-gray-500 mb-8">
            Last updated: {new Date(page.lastUpdated).toLocaleDateString()}
          </p>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
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
