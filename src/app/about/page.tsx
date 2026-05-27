import type { Metadata } from "next";
import SubpageLayout from "../components/SubpageLayout";

export const metadata: Metadata = {
  title: "About Foglight",
  description:
    "Foglight builds compliant privacy infrastructure for the financial institutions, custodians, and regulated operators using public EVM chains.",
};

export default function AboutPage() {
  return (
    <SubpageLayout
      eyebrow="About"
      title={
        <>
          <span className="hero-title-heavy">
            We build the privacy <em>banks</em> already have,
          </span>
          <span className="hero-title-soft">on public chains.</span>
        </>
      }
      lede={
        <>
          Foglight is an infrastructure company for regulated operators moving value on public EVM
          chains. We give them the privacy their customers expect from a bank account, without
          giving up the auditability their compliance teams are obligated to keep.
        </>
      }
    >
      <section>
        <h2>What we&apos;re solving</h2>
        <p>
          Public blockchains are a settlement layer with one inconvenient property for any serious
          financial operator: every counterparty, every balance, every transfer is permanently
          legible to the entire internet. That&apos;s a non-starter for payroll, treasury, brokerage
          flows, custody, settlement, and most institutional payments.
        </p>
        <p>
          Existing mixers solve confidentiality by destroying the audit trail. Regulated operators
          can&apos;t use that. They need a system where the public chain stops leaking customer
          metadata, but the operator and their auditors can still see exactly who did what.
        </p>
        <p>
          Foglight is that system.
        </p>
      </section>

      <section>
        <h2>How it works in one paragraph</h2>
        <p>
          Each customer gets a per-customer privacy pool: a smart-contract shielded set on the
          same EVM chain the operator is already using. Transactions inside that pool are opaque to
          the public chain. The operator holds the viewing keys for their own pool. Their
          compliance team, their auditor, and their counterparties (when authorized) can decode
          exactly the same logs you saw redacted from the outside. No FHE, no custom L1, no exotic
          cryptography assumptions — just selective disclosure built on standard EVM primitives.
        </p>
      </section>

      <section>
        <h2>Who we&apos;re for</h2>
        <ul>
          <li>Regulated stablecoin issuers, fintechs, and PSPs operating onchain.</li>
          <li>Custodians and brokerages that already settle in tokenized assets.</li>
          <li>Treasury teams paying counterparties, payroll, or vendors onchain.</li>
          <li>Exchanges and prime brokers that need clean separation between customer flows.</li>
          <li>Compliance teams that need real records, not zero-knowledge handwaving.</li>
        </ul>
      </section>

      <section>
        <h2>What we believe</h2>
        <p>
          Privacy and compliance aren&apos;t opposites. They&apos;re the same product, looked at
          from two sides. The customer should see what a customer sees in a bank app. The
          regulator should see what a regulator sees in a bank&apos;s books. The public chain is
          neither of those audiences and should never have been treated like one.
        </p>
        <p>
          We&apos;d rather ship something narrow, real, and pilotable than a maximalist privacy
          story that no compliance officer can sign off on.
        </p>
      </section>

      <section>
        <h2>Where we are</h2>
        <p>
          Foglight is early-stage and live in pilot. The SDK installs on existing EVM chains. We
          work directly with the first cohort of operators integrating it. If you&apos;re building
          something that touches real money on public chains and you&apos;ve hit the metadata
          problem, that&apos;s the conversation we want.
        </p>
      </section>
    </SubpageLayout>
  );
}
