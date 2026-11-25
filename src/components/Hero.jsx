import { Link } from "react-router-dom";
import {
  BadgeCheck,
  CheckCircle2,
  MapPin,
  Newspaper,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white border-b border-civinity-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Copy & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-civinity-border bg-civinity-surface px-3.5 py-1.5 text-xs font-medium text-civinity-ink">
              <span
                className="h-2 w-2 rounded-full bg-civinity-red"
                aria-hidden="true"
              />
              <span>Civinity Mobile App</span>
              <span className="text-civinity-border">|</span>
              <span className="text-civinity-green font-semibold">
                বাংলা ও ইংরেজি সহায়তা
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-civinity-ink leading-[1.12] max-w-2xl">
              One verified civic platform for news, local action, and public trust.
            </h1>

            <p className="text-base sm:text-lg text-civinity-muted leading-relaxed max-w-xl">
              Register securely with your NID or Birth Certificate, report neighborhood
              issues directly to local wards, verify breaking news, and explore ranked
              schools, youth creativity, and civic quizzes in one mobile app.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-civinity-green rounded-lg hover:bg-civinity-greenDark transition-colors duration-150"
              >
                Register as Citizen
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-civinity-green bg-white border border-civinity-green rounded-lg hover:bg-civinity-greenLight/60 transition-colors duration-150"
              >
                Login
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-civinity-muted">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-civinity-green" aria-hidden="true" />
                NID & Birth Certificate OTP check
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Smartphone className="h-4 w-4 text-civinity-green" aria-hidden="true" />
                Android & iOS (Expo Mobile)
              </span>
            </div>
          </div>

          {/* Right-Side Mobile App Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[360px]"
              role="img"
              aria-label="Preview of the Civinity mobile app showing a verified citizen badge, ward complaint progress, and fact-checked news"
            >
              {/* Crisp structural backdrop frame */}
              <div
                className="absolute -inset-3 rounded-[2rem] border border-civinity-border bg-civinity-surface -z-10"
                aria-hidden="true"
              />

              {/* Mobile Device Frame */}
              <div className="rounded-[1.75rem] border-2 border-civinity-ink bg-white p-4 shadow-sm">
                {/* Device Status Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-civinity-border text-[11px] font-medium text-civinity-muted">
                  <span>Civinity App v2.4</span>
                  <span className="inline-flex items-center gap-1 text-civinity-green font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-civinity-green" />
                    Live
                  </span>
                </div>

                {/* Verified Citizen Card */}
                <div className="rounded-xl bg-civinity-green p-4 text-white">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs text-white/80">Verified Citizen ID</p>
                      <p className="font-heading text-lg font-bold mt-0.5">
                        Arifur Rahman
                      </p>
                      <p className="text-xs text-white/85">
                        Ward 03 · Dhaka North
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold">
                      <BadgeCheck className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                      Verified
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                    <span className="text-white/80">NID ending ••4918</span>
                    <span className="font-semibold text-white">সহজ নাগরিক কার্ড</span>
                  </div>
                </div>

                {/* Active Complaint Ticket Preview */}
                <div className="mt-3 rounded-xl border border-civinity-border bg-civinity-surface p-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-medium text-civinity-ink">
                      <MapPin className="h-3.5 w-3.5 text-civinity-red" aria-hidden="true" />
                      Local Report #CMP-4081
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-civinity-greenLight px-2 py-0.5 text-[11px] font-semibold text-civinity-green">
                      <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                      Solved
                    </span>
                  </div>
                  <p className="text-xs text-civinity-muted mt-1.5 leading-snug">
                    Storm drain grate replaced near Agrabad Gate within 18 hours.
                  </p>
                </div>

                {/* Verified News Preview inside Device */}
                <div className="mt-3 rounded-xl border border-civinity-border bg-white p-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-medium text-civinity-ink">
                      <Newspaper className="h-3.5 w-3.5 text-civinity-green" aria-hidden="true" />
                      Fact-Check Feed
                    </span>
                    <span className="rounded bg-civinity-redLight px-2 py-0.5 text-[11px] font-semibold text-civinity-red">
                      Official Source
                    </span>
                  </div>
                  <p className="text-xs font-medium text-civinity-ink mt-1.5 leading-snug">
                    Birth certificate correction window open in all 495 upazilas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
