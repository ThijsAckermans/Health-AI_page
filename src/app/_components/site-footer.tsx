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

export function SiteFooter({ siteName, footerText, socialLinks, grantAgreementNumber }: Props) {
  const currentYear = new Date().getFullYear();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
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
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
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
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
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
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="/consortium" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Consortium
                </Link>
              </li>
              <li>
                <Link href="/work-packages" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Work Packages
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors text-sm">
                  News
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Statement
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/patients" className="text-gray-300 hover:text-white transition-colors text-sm">
                  For Patients
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
