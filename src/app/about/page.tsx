import type { Metadata } from "next";
import AskLlms from "../components/AskLlms";
import SubpageLayout from "../components/SubpageLayout";
import TeamCard from "../components/TeamCard";

export const metadata: Metadata = {
  title: "About Foglight",
  description:
    "Foglight builds compliant privacy infrastructure for existing EVM chains, wallets, stablecoin issuers, and neobanks.",
};

const contactHref = "https://x.com/FoglightPrivacy";

type TeamMember = {
  name: string;
  handle: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "McFly",
    handle: "0x_mcfly",
    image: "/team/0x_mcfly.jpg",
  },
  {
    name: "Zefram Lou",
    handle: "boredGenius",
    image: "/team/boredGenius.jpg",
  },
  {
    name: "Szeth Vallano",
    handle: "0xszeth",
    image: "/team/0xszeth.jpg",
  },
];

export default function AboutPage() {
  return (
    <SubpageLayout
      variant="patterned"
      eyebrow="About"
      title={
        <>
          <span className="hero-title-heavy">Building privacy rails</span>
          <span className="hero-title-soft">for existing EVM chains.</span>
        </>
      }
      heroImage={{
        src: "/images/about-hero.png",
        alt: "",
      }}
      lede={
        <>
          Public blockchains expose assets, transactions, and counterparties by default. Foglight
          gives wallets, stablecoin issuers, neobanks, and chains a way to offer privacy without
          giving up compliance control.
        </>
      }
    >
      <section>
        <blockquote className="about-quote">
          Privacy is a normal expectation of finance. Foglight makes it available to regulated
          crypto businesses without forcing them to choose between user privacy and AML obligations.
        </blockquote>
      </section>

      <section className="about-thesis">
        <p className="section-label">Thesis</p>
        <h2 className="section-heading">
          Same posture as a bank — <em>hidden from the public, visible to the institution.</em>
        </h2>
        <p className="section-prose">
          Each customer operates its own per-customer privacy pool. User data is hidden from the
          public chain but visible to the institution&apos;s authorized compliance, risk, and support
          teams. No shared anonymity set. No new L1. No relayers.
        </p>
      </section>

      <section className="about-team">
        <p className="section-label">Team</p>
        <h2 className="section-heading">Building together since 2017.</h2>
        <div className="team-grid">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              handle={member.handle}
              image={member.image}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="status-pill" role="status">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-text">
            Foglight is in private alpha. Talk to us to get onboarded.
          </span>
          <a className="status-link" href={contactHref} target="_blank" rel="noreferrer">
            @FoglightPrivacy ↗
          </a>
        </div>
      </section>

      <section>
        <AskLlms />
      </section>
    </SubpageLayout>
  );
}
