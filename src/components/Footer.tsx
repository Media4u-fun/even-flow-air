import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconPhone, IconMail, IconMapPin } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Filter out empty social links
  const socialLinks = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <footer className="bg-gray-900 border-t border-gray-200 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{siteConfig.companyName}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {siteConfig.contact.phone && (
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <IconPhone className="w-4 h-4 text-primary-light shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
              {siteConfig.contact.email && (
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <IconMail className="w-4 h-4 text-primary-light shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
              {siteConfig.contact.address && (
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <IconMapPin className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address}</span>
                </li>
              )}
            </ul>

            {/* Hours */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                <span className="text-gray-300 font-medium">Hours:</span> Mon-Sat 7AM - 5PM
              </p>
              <p className="text-gray-400 text-sm mt-1">
                <span className="text-gray-300 font-medium">License:</span> #917275
              </p>
            </div>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-3 mt-4">
                {socialLinks.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all text-xs font-bold uppercase"
                    aria-label={platform}
                  >
                    {platform.charAt(0).toUpperCase()}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
          {siteConfig.footer.credit && (
            <a
              href="https://media4u.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-400 text-sm transition-colors"
            >
              Powered by Media4U
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
