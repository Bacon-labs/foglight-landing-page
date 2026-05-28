import Image from "next/image";

type TeamCardProps = {
  name: string;
  handle: string;
  image: string;
};

export default function TeamCard({ name, handle, image }: TeamCardProps) {
  return (
    <a
      className="team-card team-card-link"
      data-spotlight=""
      href={`https://x.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`${name} on X`}
    >
      <span className="spotlight-glow" aria-hidden="true" />
      <span className="spotlight-pattern" aria-hidden="true" />
      <span className="team-card-portrait" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) calc(100vw - 4.8rem), (max-width: 900px) 30vw, 17rem"
        />
      </span>
      <h3 className="team-card-name">{name}</h3>
      <span className="team-card-handle">
        @{handle}
        <svg viewBox="0 0 24 24" aria-hidden="true" className="team-card-x">
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </span>
    </a>
  );
}
