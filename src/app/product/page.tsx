import type { Metadata } from "next";
import AmlrYearCard from "../components/AmlrYearCard";
import AskLlms from "../components/AskLlms";
import CapabilityCard from "../components/CapabilityCard";
import CoverageCell from "../components/CoverageCell";
import FeatureRow from "../components/FeatureRow";
import SubpageLayout from "../components/SubpageLayout";

export const metadata: Metadata = {
  title: "Foglight — Product",
  description:
    "Compliant privacy infrastructure for existing EVM chains, wallets, stablecoin issuers, exchanges, and neobanks.",
};

const contactHref = "https://x.com/FoglightPrivacy";

type Capability = {
  title: string;
  body: string;
  icon: string;
  span?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  variant?: "default" | "hero";
};

const howItWorks: Capability[] = [
  {
    icon: "/icons/key-visualizer.svg",
    title: "Per-customer pools",
    body: "Each institutional customer operates its own dedicated privacy pool with policy settings tailored to its jurisdiction and risk model. No shared anonymity set, no cross-customer contamination, no new L1.",
    span: 2,
    variant: "hero",
  },
  {
    icon: "/icons/verified-user.svg",
    title: "Customer-held viewing keys",
    body: "The customer holds the viewing key directly. Authorized disclosure can produce transaction history, balances, and source-of-funds reports — with every access logged for audit.",
  },
  {
    icon: "/icons/footprint.svg",
    title: "Encrypted on-chain traces",
    body: "Every private transaction publishes an encrypted trace. If suspicious activity is found, authorized disclosure traces back to the institution's original KYC record without revealing other users' data.",
  },
  {
    icon: "/icons/settings.svg",
    title: "No relayers",
    body: "Foglight uses existing ERC-4337 bundlers and paymasters instead of operator-run relayers. Less legal liability, lower operating cost, and gas abstraction out of the box.",
    span: 2,
  },
  {
    icon: "/icons/domino-mask.svg",
    title: "Built for security from day one",
    body: "Noir circuits with UltraHonk/Barretenberg, no trusted setup. Lean/Verity for critical formal verification. Sub-second client-side proving on smartphones.",
    span: 3,
  },
];

const coverage: Capability[] = [
  {
    icon: "/icons/footprint.svg",
    title: "Private transfers",
    body: "Send tokens and stablecoins to KYC'd counterparties without leaking balances, routes, or counterparty relationships to the public chain.",
    span: 2,
  },
  {
    icon: "/icons/key-visualizer.svg",
    title: "Private swaps",
    body: "Swap multi-asset positions inside institutional pools without exposing the trade to MEV or to the rest of the chain.",
    span: 1,
  },
  {
    icon: "/icons/domino-mask.svg",
    title: "Private lending",
    body: "Borrow, lend, and rebalance while keeping collateral, exposure, and counterparty terms private.",
    span: 1,
  },
  {
    icon: "/icons/settings.svg",
    title: "Other EVM apps",
    body: "Interact with the rest of the EVM landscape without writing your wallet history into a permanent public ledger.",
    span: 2,
  },
];

const complianceSuite: Capability[] = [
  {
    icon: "/icons/settings.svg",
    title: "Policy & Compliance Integrations",
    body: "Plug into the customer's existing KYC/KYB, sanctions screening, Travel Rule, and policy engines before users enter private accounts.",
  },
  {
    icon: "/icons/key-visualizer.svg",
    title: "Private Account SDK",
    body: "Smart contracts, SDK, and APIs for wallets, chains, issuers, and neobanks to add private balances and transactions on existing EVM apps.",
  },
  {
    icon: "/icons/linked-services.svg",
    title: "Disclosure & Audit Workflows",
    body: "Authorized transaction history, balances, source-of-funds reports, and audit logs for compliance, risk, support, and legal requests.",
  },
];

const amlrObligations: string[] = [
  "KYB/KYC at onboarding",
  "Transaction history on demand",
  "Travel Rule compliance",
  "Active monitoring of suspicious activity",
];

const audiences: Capability[] = [
  {
    icon: "/icons/domino-mask.svg",
    title: "Wallets",
    body: "Add private balances and activity inside the flows users already know, without bridging to a new chain or app.",
    span: 2,
    variant: "hero",
  },
  {
    icon: "/icons/verified-user.svg",
    title: "Stablecoin & e-money issuers",
    body: "Offer private balances on existing rails while keeping the issuer's compliance, monitoring, and disclosure obligations intact.",
  },
  {
    icon: "/icons/footprint.svg",
    title: "Exchanges",
    body: "Give users private settlement and transfers with audit-ready disclosure for risk, support, and regulator requests.",
  },
  {
    icon: "/icons/settings.svg",
    title: "Neobanks & payments",
    body: "Match the privacy posture of a bank account — visible to the institution's authorized teams, hidden from the public chain.",
    span: 2,
  },
  {
    icon: "/icons/key-visualizer.svg",
    title: "Chains",
    body: "Plug Foglight into any EVM without launching a new L1, a new relayer network, or a separate privacy app for users.",
    span: 3,
  },
];

const notList: string[] = [
  "Not a mixer and not a shared anonymity set that blinds the institution.",
  "Not FHE and not a custom computation layer.",
  "Not a new L1, bridge, or custodial relayer network.",
  "Not a claim that Foglight guarantees AML, Travel Rule, or SAR compliance by itself.",
];

export default function ProductPage() {
  return (
    <SubpageLayout
      variant="patterned"
      eyebrow="Product"
      title={
        <>
          <span className="hero-title-heavy">Compliant privacy</span>
          <span className="hero-title-soft">for existing EVM rails.</span>
        </>
      }
      headerAction={
        <a className="subpage-cta" href={contactHref} target="_blank" rel="noreferrer">
          Talk to us
        </a>
      }
      heroImage={{
        src: "/images/product-hero.webp",
        alt: "",
      }}
      lede={
        <>
          Per-customer privacy pools that plug into the customer&apos;s existing KYC/KYB,
          sanctions, Travel Rule, and policy engines — without forcing users to leave their
          preferred chain, wallet, or apps.
        </>
      }
    >
      <section>
        <p className="section-label">01 — How it works</p>
        <h2 className="section-heading">Five primitives. One privacy posture.</h2>
        <div className="bento-grid">
          {howItWorks.map((item) => (
            <CapabilityCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              body={item.body}
              span={item.span}
              variant={item.variant}
            />
          ))}
        </div>
      </section>

      <section>
        <p className="section-label">02 — Coverage</p>
        <h2 className="section-heading">What customers can do privately.</h2>
        <div className="coverage-quadrant" role="list">
          {coverage.map((item, index) => (
            <CoverageCell
              key={item.title}
              index={index}
              icon={item.icon}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
        <p className="section-prose">
          Private accounts hold multi-asset portfolios. Users transact on their preferred EVM
          chain through the wallets and apps they already use.
        </p>
      </section>

      <section>
        <p className="section-label">03 — Compliance Suite</p>
        <h2 className="section-heading">
          Privacy <em>without</em> replacing your compliance stack.
        </h2>
        <ul className="feature-rows">
          {complianceSuite.map((item, index) => (
            <FeatureRow
              key={item.title}
              index={index}
              icon={item.icon}
              title={item.title}
              body={item.body}
            />
          ))}
        </ul>
      </section>

      <section className="amlr-section">
        <p className="section-label">04 — Regulation</p>
        <h2 className="section-heading">Designed for AMLR 2027.</h2>
        <AmlrYearCard obligations={amlrObligations} />
      </section>

      <section>
        <p className="section-label">05 — Who it&apos;s for</p>
        <h2 className="section-heading">Built for the businesses already regulated.</h2>
        <div className="bento-grid">
          {audiences.map((item) => (
            <CapabilityCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              body={item.body}
              span={item.span}
              variant={item.variant}
            />
          ))}
        </div>
      </section>

      <section>
        <p className="section-label">06 — Scope</p>
        <h2 className="section-heading">What Foglight is not.</h2>
        <ul className="not-list">
          {notList.map((item) => (
            <li key={item}>
              <span className="not-tag" aria-hidden="true">
                NOT
              </span>
              <span className="not-text">{item.replace(/^Not\s+/, "")}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <AskLlms />
      </section>
    </SubpageLayout>
  );
}
