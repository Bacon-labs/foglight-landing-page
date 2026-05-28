type FeatureRowProps = {
  index: number;
  icon: string;
  title: string;
  body: string;
};

export default function FeatureRow({ index, icon, title, body }: FeatureRowProps) {
  return (
    <li
      className="feature-row"
      data-spotlight=""
    >
      <span className="spotlight-glow" aria-hidden="true" />
      <span className="spotlight-pattern" aria-hidden="true" />
      <span className="feature-row-index">{String(index + 1).padStart(2, "0")}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="feature-row-icon"
        src={icon}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="feature-row-text">
        <h3 className="feature-row-title">{title}</h3>
        <p className="feature-row-body">{body}</p>
      </div>
    </li>
  );
}
