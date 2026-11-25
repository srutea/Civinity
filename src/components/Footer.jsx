import { Link } from "react-router-dom";
import {
  Facebook,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-civinity-greenDark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white text-civinity-green">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                <span
                  className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-civinity-red ring-2 ring-civinity-greenDark"
                  aria-hidden="true"
                />
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">
                Civinity
              </span>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed">
              A citizen-first mobile platform for verified news, local issue
              resolution, school transparency, and civic participation across
              all 64 districts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  National News Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/report-problem"
                  className="hover:text-white transition-colors"
                >
                  Report Local Problem
                </Link>
              </li>
              <li>
                <Link
                  to="/institutions"
                  className="hover:text-white transition-colors"
                >
                  School & College Ranking
                </Link>
              </li>
              <li>
                <Link
                  to="/creativity"
                  className="hover:text-white transition-colors"
                >
                  Creativity Section
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-white transition-colors">
                  Quiz & Sports Challenge
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white/70" aria-hidden="true" />
                <span>Civic Tech Center, Agargaon, Dhaka 1207</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>+880 9612-004400 (Citizen Helpdesk)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>support@civinity.gov.demo</span>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white mb-4">
              Connect
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Follow official announcements and weekly civic challenge updates.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Civinity on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white hover:text-civinity-greenDark transition-colors"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#youtube"
                aria-label="Civinity on YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white hover:text-civinity-greenDark transition-colors"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#portal"
                aria-label="Civinity Web Portal"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white hover:text-civinity-greenDark transition-colors"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
          <p>© {new Date().getFullYear()} Civinity Civic Platform. All rights reserved.</p>
          <p>Built for transparent civic engagement across Bangladesh.</p>
        </div>
      </div>
    </footer>
  );
}
