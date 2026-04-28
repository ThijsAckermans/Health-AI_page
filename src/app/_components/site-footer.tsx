
import Link from "next/link";

type Props = {
  siteName: string;
  footerText: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
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

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="relative w-10 h-10">
                <img
                  src="/assets/health-ai-logo.png"
                  alt={siteName}
                  className="object-contain brightness-0 invert w-full h-full"
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
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.264 2.37 4.264 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.769 20.452H3.905V9H6.77v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
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
              {[
                ["About the Project", "/about"],
                ["Consortium", "/consortium"],
                ["Work Packages", "/work-packages"],
                ["News", "/news"],
                ["Publications", "/publications"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
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
