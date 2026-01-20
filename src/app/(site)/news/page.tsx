import Link from "next/link";
import Image from "next/image";
import { getSettings, getNavigation, getAllNewsPosts } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";

export default function NewsPage() {
  const settings = getSettings();
  const navigation = getNavigation();
  const news = getAllNewsPosts();
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
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News</h1>
            <p className="text-xl text-blue-100">Latest updates from the project</p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {news.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h2>
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
            ) : (
              <p className="text-center text-gray-500">No news posts yet.</p>
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
