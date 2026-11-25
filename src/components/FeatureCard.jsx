import { Link } from "react-router-dom";
import {
  BadgeCheck,
  GraduationCap,
  MapPin,
  MessageSquare,
  Newspaper,
  PenTool,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const ICON_MAP = {
  ShieldCheck,
  Newspaper,
  BadgeCheck,
  MapPin,
  PenTool,
  GraduationCap,
  Trophy,
  MessageSquare,
};

export default function FeatureCard({ title, subtitle, description, icon, path }) {
  const IconComponent = ICON_MAP[icon] || ShieldCheck;

  return (
    <Link
      to={path}
      className="group flex flex-col justify-between rounded-xl border border-civinity-border bg-white p-6 transition-all duration-200 hover:border-civinity-green hover:bg-civinity-surface/60"
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-civinity-greenLight text-civinity-green transition-colors duration-200 group-hover:bg-civinity-green group-hover:text-white">
            <IconComponent className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xs font-medium text-civinity-muted">
            {subtitle}
          </span>
        </div>

        <h3 className="mt-5 font-heading text-lg font-semibold text-civinity-ink group-hover:text-civinity-green transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-civinity-muted leading-relaxed">
          {description}
        </p>
      </div>

      <span className="mt-5 inline-flex items-center text-xs font-semibold text-civinity-green group-hover:underline">
        Explore service
      </span>
    </Link>
  );
}
