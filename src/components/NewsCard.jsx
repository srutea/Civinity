import { Link } from "react-router-dom";
import { BadgeCheck, Calendar } from "lucide-react";

export default function NewsCard({
  category,
  title,
  date,
  image,
  imageAlt,
  verified,
  source,
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-civinity-border bg-white transition-colors duration-200 hover:border-civinity-green">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-civinity-surface border-b border-civinity-border">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {verified && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-civinity-green px-2.5 py-1 text-xs font-semibold text-white">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Verified
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-civinity-red">{category}</span>
            <span className="inline-flex items-center gap-1 text-civinity-muted">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {date}
            </span>
          </div>

          <h3 className="mt-2.5 font-heading text-lg font-semibold text-civinity-ink leading-snug group-hover:text-civinity-green transition-colors">
            <Link to="/news" className="focus:outline-none">
              {title}
            </Link>
          </h3>
        </div>

        <p className="mt-4 pt-3 border-t border-civinity-border text-xs text-civinity-muted">
          Source: {source}
        </p>
      </div>
    </article>
  );
}
