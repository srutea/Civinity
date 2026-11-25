import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import NewsCard from "../components/NewsCard";
import ComplaintCard from "../components/ComplaintCard";
import {
  COMPLAINTS_DATA,
  NEWS_DATA,
  QUIZ_LEADERBOARD,
  TOP_INSTITUTIONS,
} from "../data/civinityData";

export default function SubPage({ section }) {
  const [submitted, setSubmitted] = useState(false);

  const meta = {
    news: {
      title: "National News Portal",
      subtitle:
        "Verified government circulars, municipal notices, and source-checked reporting.",
    },
    "report-problem": {
      title: "Local Problem Reporting",
      subtitle:
        "Browse recent ward tickets or submit a local infrastructure issue in static preview mode.",
    },
    creativity: {
      title: "Creativity Section",
      subtitle:
        "Citizen essays, student photography, and community design proposals.",
    },
    institutions: {
      title: "School & College Ranking",
      subtitle:
        "Publicly audited institution ratings across academic and facility metrics.",
    },
    quiz: {
      title: "Quiz & Sports Challenge",
      subtitle:
        "Weekly civic knowledge challenges and district leaderboard standings.",
    },
    login: {
      title: "Citizen Login",
      subtitle:
        "Sign in with your verified mobile number or National ID (static demo form).",
    },
    register: {
      title: "Register as Citizen",
      subtitle:
        "Verify with NID or Birth Certificate and receive your one-time OTP (static demo form).",
    },
  }[section] || {
    title: "Civinity",
    subtitle: "Civic services overview.",
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-civinity-green hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>

        <div className="mt-6 max-w-2xl">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-civinity-ink">
            {meta.title}
          </h1>
          <p className="mt-2.5 text-base text-civinity-muted">{meta.subtitle}</p>
        </div>

        <div className="mt-10">
          {section === "news" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NEWS_DATA.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </div>
          )}

          {section === "report-problem" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPLAINTS_DATA.map((item) => (
                <ComplaintCard key={item.id} {...item} />
              ))}
            </div>
          )}

          {section === "institutions" && (
            <div className="rounded-xl border border-civinity-border divide-y divide-civinity-border">
              {TOP_INSTITUTIONS.map((inst) => (
                <div
                  key={inst.rank}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <div>
                    <p className="font-heading font-semibold text-civinity-ink">
                      #{inst.rank} {inst.name}
                    </p>
                    <p className="text-xs text-civinity-muted">
                      {inst.location} · {inst.type}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-civinity-green tabular-nums">
                    {inst.rating.toFixed(1)} ★
                  </span>
                </div>
              ))}
            </div>
          )}

          {section === "quiz" && (
            <div className="rounded-xl border border-civinity-border divide-y divide-civinity-border">
              {QUIZ_LEADERBOARD.map((entry) => (
                <div
                  key={entry.rank}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <div>
                    <p className="font-medium text-civinity-ink">
                      #{entry.rank} {entry.name}
                    </p>
                    <p className="text-xs text-civinity-muted">
                      {entry.district} · {entry.category}
                    </p>
                  </div>
                  <span className="font-semibold text-civinity-green tabular-nums">
                    {entry.points.toLocaleString("en-US")} pts
                  </span>
                </div>
              ))}
            </div>
          )}

          {section === "creativity" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-civinity-border p-6 bg-civinity-surface">
                <p className="text-xs font-semibold text-civinity-red">
                  Urban Sustainability Essay
                </p>
                <h2 className="mt-2 font-heading text-xl font-semibold text-civinity-ink">
                  Pocket Rain Gardens for Ward-Level Flood Relief
                </h2>
                <p className="mt-2 text-sm text-civinity-muted">
                  By Sadia Afrin · Class XII, Dhaka
                </p>
              </div>
              <div className="rounded-xl border border-civinity-border p-6 bg-civinity-surface">
                <p className="text-xs font-semibold text-civinity-green">
                  Civic Photography
                </p>
                <h2 className="mt-2 font-heading text-xl font-semibold text-civinity-ink">
                  Morning Ferry Crossings on the Buriganga
                </h2>
                <p className="mt-2 text-sm text-civinity-muted">
                  By Imran Kabir · Narayanganj
                </p>
              </div>
            </div>
          )}

          {(section === "login" || section === "register") && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="max-w-md rounded-xl border border-civinity-border bg-civinity-surface p-6 space-y-4"
            >
              {submitted ? (
                <div className="flex items-start gap-3 text-sm text-civinity-green font-medium">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    Static demo preview: no backend call was sent. Ready to connect
                    to your Civinity authentication API.
                  </span>
                </div>
              ) : (
                <>
                  {section === "register" && (
                    <div>
                      <label
                        htmlFor="nid"
                        className="block text-sm font-medium text-civinity-ink"
                      >
                        NID or Birth Certificate Number
                      </label>
                      <input
                        id="nid"
                        type="text"
                        required
                        placeholder="e.g. 199845120001234"
                        className="mt-1.5 w-full rounded-lg border border-civinity-border bg-white px-3.5 py-2.5 text-sm text-civinity-ink"
                      />
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-civinity-ink"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+880 1XXX-XXXXXX"
                      className="mt-1.5 w-full rounded-lg border border-civinity-border bg-white px-3.5 py-2.5 text-sm text-civinity-ink"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-civinity-green text-white text-sm font-semibold hover:bg-civinity-greenDark transition-colors"
                  >
                    {section === "register" ? "Send Verification OTP" : "Continue"}
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
