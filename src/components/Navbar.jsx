import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShieldCheck, X } from "lucide-react";
import { NAV_LINKS } from "../data/civinityData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-150 py-1.5 border-b-2 ${
      isActive
        ? "text-civinity-green border-civinity-green"
        : "text-civinity-muted border-transparent hover:text-civinity-ink hover:border-civinity-border"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-civinity-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 rounded-md focus-visible:outline-civinity-green"
            aria-label="Civinity Home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-civinity-green text-white">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <span
                className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-civinity-red ring-2 ring-white"
                aria-hidden="true"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold tracking-tight text-civinity-ink">
                Civinity
              </span>
              <span className="text-[11px] font-medium text-civinity-muted">
                নাগরিক সেবা প্ল্যাটফর্ম
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.path} to={link.path} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Auth Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-civinity-green border border-civinity-border rounded-lg hover:border-civinity-green hover:bg-civinity-greenLight/50 transition-colors duration-150"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-semibold text-white bg-civinity-green rounded-lg hover:bg-civinity-greenDark transition-colors duration-150"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg border border-civinity-border text-civinity-ink hover:bg-civinity-surface transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-civinity-border bg-white px-4 py-4 space-y-3"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-civinity-greenLight text-civinity-green"
                      : "text-civinity-ink hover:bg-civinity-surface"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-3 border-t border-civinity-border grid grid-cols-2 gap-3">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-2.5 text-sm font-medium text-civinity-green border border-civinity-green rounded-lg hover:bg-civinity-greenLight/50 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-2.5 text-sm font-semibold text-white bg-civinity-green rounded-lg hover:bg-civinity-greenDark transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
