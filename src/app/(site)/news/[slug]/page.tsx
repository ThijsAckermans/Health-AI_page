import { notFound } from "next/navigation";
import Image from "next/image";
import { getSettings, getNavigation, getNewsPostBySlug, getNewsPostSlugs } from "@/lib/contentApi";
import Navigation from "@/app/_components/navigation";
import SiteFooter from "@/app/_components/site-footer";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getNewsPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export default async function NewsPostPage({ params }: Props) {
  const settings = getSettings();
  const navigation = getNavigation();
  const basePath = process.env.BASE_PATH || "";

  let post;
  try {
    post = getNewsPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

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
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <header className="mb-8">
            <p className="text-blue-600 font-medium mb-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            {post.author && (
              <div className="flex items-center">
                {post.author.picture && (
                  <Image
                    src={getImageSrc(post.author.picture)}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                )}
                <span className="text-gray-600">{post.author.name}</span>
              </div>
            )}
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={getImageSrc(post.coverImage)}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
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
