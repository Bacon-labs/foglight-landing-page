export type CapabilityCardProps = {
  icon?: string;
  title: string;
  body: string;
  span?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  variant?: "default" | "hero";
};

export default function CapabilityCard({
  icon,
  title,
  body,
  span,
  rowSpan,
  variant = "default",
}: CapabilityCardProps) {
  return (
    <article
      className="capability-card"
      data-spotlight=""
      data-has-icon={icon ? "true" : undefined}
      data-variant={variant}
      data-span={span}
      data-row-span={rowSpan}
    >
      <span className="spotlight-glow" aria-hidden="true" />
      {icon ? <span className="spotlight-pattern" aria-hidden="true" /> : null}
      {icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="capability-card-icon"
          src={icon}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <h3 className="capability-card-title">{title}</h3>
      <p className="capability-card-body">{body}</p>
    </article>
  );
}
