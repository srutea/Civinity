import { CheckCircle2, Clock, MapPin } from "lucide-react";

export default function ComplaintCard({
  id,
  title,
  location,
  category,
  reportedAt,
  status,
  summary,
}) {
  const isSolved = status === "Solved";

  return (
    <article className="flex flex-col justify-between rounded-xl border border-civinity-border bg-white p-5 transition-colors duration-200 hover:border-civinity-green">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-civinity-muted tabular-nums">
            {id} · {category}
          </span>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              isSolved
                ? "bg-civinity-greenLight text-civinity-green"
                : "bg-civinity-redLight text-civinity-red"
            }`}
          >
            {isSolved ? (
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            {status}
          </span>
        </div>

        <h3 className="mt-3 font-heading text-lg font-semibold text-civinity-ink leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-civinity-muted leading-relaxed">
          {summary}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-civinity-border flex items-center justify-between gap-2 text-xs text-civinity-muted">
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5 text-civinity-green" aria-hidden="true" />
          {location}
        </span>
        <span>{reportedAt}</span>
      </div>
    </article>
  );
}
