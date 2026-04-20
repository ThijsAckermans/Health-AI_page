
import Link from "next/link";
import Image from "next/image";

type Props = {
  siteName: string;
  footerText: string;
  socialLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
  grantAgreementNumber: string;
};

export function SiteFooter({
  siteName,
  footerText,
  socialLinks,
  grantAgreementNumber,
}: Props) {
  const currentYear = new Date().getFullYear();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10">
                <Image
                  src={`${basePath}/assets/health-ai-logo.png`}
                  alt={siteName}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">{siteName}</span>
            </Link>

            <div
              className="text-gray-400 text-sm leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: footerText }}
            />

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}

              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <span className="sr-only">Twitter</span>
                </a>
              )}

              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <span className="sr-only">Facebook</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About the Project
                </Link>
              </li>
              <li>
                <Link
                  href="/consortium"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Consortium
                </Link>
              </li>
              <li>
                <Link
                  href="/work-packages"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Work Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {siteName}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Funded by the AI Coalition for the Netherlands (AIC4NL)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
