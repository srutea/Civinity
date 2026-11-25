import { Link } from "react-router-dom";
import { Award, BadgeCheck, MapPinPlus, Star } from "lucide-react";
import Hero from "../components/Hero";
import StatCard from "../components/StatCard";
import FeatureCard from "../components/FeatureCard";
import NewsCard from "../components/NewsCard";
import ComplaintCard from "../components/ComplaintCard";
import RevealSection from "../components/RevealSection";
import {
  COMPLAINTS_DATA,
  FEATURES_DATA,
  HOW_IT_WORKS_STEPS,
  NEWS_DATA,
  QUIZ_LEADERBOARD,
  STATS_DATA,
  TOP_INSTITUTIONS,
} from "../data/civinityData";

export default function HomePage() {
  return (
    <div>
      {/* 2. Hero */}
      <Hero />

      {/* 3. Stats Strip */}
      <section
        aria-label="Platform statistics"
        className="border-b border-civinity-border bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-civinity-border">
            {STATS_DATA.map((stat) => (
              <StatCard
                key={stat.id}
                label={stat.label}
                labelBn={stat.labelBn}
                value={stat.value}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-civinity-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-civinity-ink">
                Essential civic tools in one mobile app
              </h2>
              <p className="mt-3 text-base text-civinity-muted leading-relaxed">
                Every service inside Civinity is built around verified citizen
                identity, public accountability, and accessible neighborhood action.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={60} className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURES_DATA.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 5. Latest News Preview */}
      <section className="py-16 sm:py-20 bg-civinity-surface border-b border-civinity-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-civinity-ink">
                  Latest verified news
                </h2>
                <p className="mt-2.5 text-base text-civinity-muted">
                  Official bulletins and source-checked national updates without rumor
                  or clickbait.
                </p>
              </div>
              <Link
                to="/news"
                className="inline-flex items-center self-start sm:self-auto px-4 py-2 text-sm font-semibold text-civinity-green border border-civinity-green rounded-lg bg-white hover:bg-civinity-greenLight/60 transition-colors"
              >
                View all news
              </Link>
            </div>
          </RevealSection>

          <RevealSection delay={60} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NEWS_DATA.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 6. Local Problem Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-civinity-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-civinity-ink">
                  Local problem overview
                </h2>
                <p className="mt-2.5 text-base text-civinity-muted">
                  Track recent neighborhood reports filed by verified residents and see
                  when wards resolve them.
                </p>
              </div>
              <Link
                to="/report-problem"
                className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 text-sm font-semibold text-white bg-civinity-red rounded-lg hover:opacity-95 transition-opacity"
              >
                <MapPinPlus className="h-4 w-4" aria-hidden="true" />
                Report a Problem
              </Link>
            </div>
          </RevealSection>

          <RevealSection delay={60} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPLAINTS_DATA.map((complaint) => (
                <ComplaintCard key={complaint.id} {...complaint} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 7. How It Works */}
      <section className="py-16 sm:py-20 bg-civinity-surface border-b border-civinity-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-civinity-ink">
                How it works
              </h2>
              <p className="mt-2.5 text-base text-civinity-muted">
                Four straightforward steps from registration to full civic access.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={60} className="mt-10">
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {HOW_IT_WORKS_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="rounded-xl border border-civinity-border bg-white p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-civinity-greenLight px-2.5 py-1 text-xs font-bold text-civinity-green tabular-nums">
                      Step {item.step}
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-civinity-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-civinity-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </RevealSection>
        </div>
      </section>

      {/* 8. Top Institutions */}
      <section className="py-16 sm:py-20 bg-white border-b border-civinity-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-civinity-ink">
                  Top ranked institutions
                </h2>
                <p className="mt-2.5 text-base text-civinity-muted">
                  Schools and colleges ranked by audited facility scores and verified
                  community ratings.
                </p>
              </div>
              <Link
                to="/institutions"
                className="inline-flex items-center self-start sm:self-auto px-4 py-2 text-sm font-semibold text-civinity-green border border-civinity-border rounded-lg hover:border-civinity-green transition-colors"
              >
                See full rankings
              </Link>
            </div>
          </RevealSection>

          <RevealSection delay={60} className="mt-8">
            <div className="rounded-xl border border-civinity-border bg-white divide-y divide-civinity-border overflow-hidden">
              {TOP_INSTITUTIONS.map((inst) => (
                <div
                  key={inst.rank}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 hover:bg-civinity-surface/70 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-civinity-greenLight font-heading text-sm font-bold text-civinity-green tabular-nums">
                      #{inst.rank}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-civinity-ink">
                        {inst.name}
                      </h3>
                      <p className="text-xs text-civinity-muted">
                        {inst.location} · {inst.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pl-[52px] sm:pl-0">
                    <div
                      className="inline-flex items-center gap-1 text-sm font-semibold text-civinity-ink tabular-nums"
                      aria-label={`Rated ${inst.rating} out of 5 stars`}
                    >
                      <Star
                        className="h-4 w-4 fill-civinity-red text-civinity-red"
                        aria-hidden="true"
                      />
                      <span>{inst.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-xs text-civinity-muted tabular-nums">
                      ({inst.reviews.toLocaleString("en-US")} verified reviews)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 9. Quiz Leaderboard Preview */}
      <section className="py-16 sm:py-20 bg-civinity-surface border-b border-civinity-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-civinity-ink">
                  Quiz leaderboard
                </h2>
                <p className="mt-2.5 text-base text-civinity-muted">
                  Top five verified participants in this week’s national civics and
                  sports knowledge challenge.
                </p>
              </div>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-1.5 self-start sm:self-auto px-4 py-2 text-sm font-semibold text-civinity-green border border-civinity-green rounded-lg bg-white hover:bg-civinity-greenLight/60 transition-colors"
              >
                <Award className="h-4 w-4" aria-hidden="true" />
                Join weekly quiz
              </Link>
            </div>
          </RevealSection>

          <RevealSection delay={60} className="mt-8">
            <div className="overflow-x-auto rounded-xl border border-civinity-border bg-white">
              <table className="min-w-full divide-y divide-civinity-border text-left">
                <thead className="bg-civinity-surface">
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold text-civinity-muted"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold text-civinity-muted"
                    >
                      Citizen
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold text-civinity-muted"
                    >
                      District
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold text-civinity-muted"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold text-civinity-muted"
                    >
                      Streak
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold text-civinity-muted text-right"
                    >
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-civinity-border text-sm">
                  {QUIZ_LEADERBOARD.map((entry) => (
                    <tr
                      key={entry.rank}
                      className="hover:bg-civinity-surface/50 transition-colors"
                    >
                      <td className="px-5 py-3.5 font-semibold text-civinity-green tabular-nums">
                        #{entry.rank}
                      </td>
                      <td className="px-5 py-3.5 font-medium text-civinity-ink">
                        <span className="inline-flex items-center gap-1.5">
                          {entry.name}
                          <BadgeCheck
                            className="h-4 w-4 text-civinity-green"
                            aria-label="Verified citizen"
                          />
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-civinity-muted">
                        {entry.district}
                      </td>
                      <td className="px-5 py-3.5 text-civinity-muted">
                        {entry.category}
                      </td>
                      <td className="px-5 py-3.5 text-civinity-muted tabular-nums">
                        {entry.streak}
                      </td>
                      <td className="px-5 py-3.5 font-semibold text-civinity-ink text-right tabular-nums">
                        {entry.points.toLocaleString("en-US")} pts
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 10. Call-To-Action Banner */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="relative overflow-hidden rounded-2xl bg-civinity-green px-6 py-12 sm:px-12 sm:py-14 text-white">
              <div
                className="absolute right-0 top-0 h-full w-1/3 bg-civinity-greenDark/40 -skew-x-12 translate-x-16 pointer-events-none hidden md:block"
                aria-hidden="true"
              />
              <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                    <span
                      className="h-2 w-2 rounded-full bg-civinity-red"
                      aria-hidden="true"
                    />
                    NID & Birth Certificate Verified
                  </span>
                  <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                    Join as a verified citizen today
                  </h2>
                  <p className="mt-3 text-base text-white/85 leading-relaxed">
                    Create your Civinity account in minutes to report local issues,
                    access verified national news, and participate in your district
                    community.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold bg-white text-civinity-green rounded-lg hover:bg-civinity-surface transition-colors"
                  >
                    Register as Citizen
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold border border-white/40 text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Citizen Login
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
