import type { Metadata } from "next";
import SubpageLayout from "../components/SubpageLayout";

export const metadata: Metadata = {
  title: "Foglight — Product",
  description:
    "Per-customer privacy pools on existing EVM chains, with operator-held viewing keys for full compliance traceability.",
};

export default function ProductPage() {
  return (
    <SubpageLayout
      eyebrow="Product"
      title={
        <>
          <span className="hero-title-heavy">
            Privacy infrastructure <em>operators</em> can actually deploy
          </span>
          <span className="hero-title-soft">on the EVM chains they already use.</span>
        </>
      }
      lede={
        <>
          One SDK. Per-customer privacy pools. Viewing keys you control. No new chain, no
          counterparty risk on a custom L1, no zero-knowledge proof that hides things from your
          own compliance team.
        </>
      }
    >
      <section>
        <h2>How a Foglight transaction looks</h2>
        <p>
          From the public chain&apos;s point of view, a Foglight transfer is a single deposit
          or withdrawal against your customer&apos;s pool contract. Amounts, counterparties,
          internal balances and the customer&apos;s identity stay inside the pool. From the
          operator&apos;s point of view, every line is decoded:
        </p>
        <ul>
          <li>
            <strong>amount0 / amount1</strong> — full token amounts, decimals, USD values at
            settlement.
          </li>
          <li>
            <strong>sender / recipient</strong> — resolved to the operator&apos;s customer
            identifiers, not just a hex address.
          </li>
          <li>
            <strong>viewing_key</strong> — which operator scope opened the trace and why.
          </li>
          <li>
            <strong>jurisdiction</strong> — tagged to the customer record, not the wallet, so
            regional rules apply on the right entity.
          </li>
          <li>
            <strong>counterparty</strong> — KYC verification status and travel-rule receipt
            hash where required.
          </li>
        </ul>
      </section>

      <section>
        <h2>Architecture in three primitives</h2>
        <ol>
          <li>
            <strong>Per-customer pools.</strong> Each customer is a separate shielded set,
            isolated from every other customer. No commingling of metadata, no global
            anonymity set you have to reason about.
          </li>
          <li>
            <strong>Operator-held viewing keys.</strong> The customer can&apos;t see other
            customers. The operator sees the entire pool. The pool itself is unreadable from
            the public chain. Hierarchical key derivation so you can scope viewers down to a
            single transaction, a single counterparty, or a single time window.
          </li>
          <li>
            <strong>Selective disclosure receipts.</strong> When a counterparty, auditor, or
            regulator needs to verify a transaction, the operator issues a scoped, expiring
            decryption receipt. No private key handover. No revealing the whole pool to
            answer one question.
          </li>
        </ol>
      </section>

      <section>
        <h2>What it&apos;s built on</h2>
        <ul>
          <li>Standard EVM, deployed on the chains operators already use (Ethereum, Base, OP, Arbitrum, Avalanche).</li>
          <li>Battle-tested cryptography: Curve25519, ChaCha20-Poly1305, and audited proof systems for membership.</li>
          <li>No FHE, no custom L1, no novel proof system on the critical path.</li>
          <li>SDK is TypeScript-first with bindings for the operator&apos;s server stack.</li>
        </ul>
      </section>

      <section>
        <h2>What you get</h2>
        <ul>
          <li>An SDK that drops into an existing wallet or operator backend.</li>
          <li>A pool contract per customer, deployed and upgrade-controlled by the operator.</li>
          <li>A viewing-key console for the compliance team — search, scope, export.</li>
          <li>Travel-rule and audit-log primitives wired to standard formats.</li>
          <li>A reference integration with a major EVM L2 to copy from on day one.</li>
        </ul>
      </section>

      <section>
        <h2>What it isn&apos;t</h2>
        <ul>
          <li>It isn&apos;t a mixer. There&apos;s no anonymity set hiding things from the operator.</li>
          <li>
            It isn&apos;t FHE. Amounts aren&apos;t encrypted to the computation layer; they&apos;re
            kept inside a shielded set that the operator controls.
          </li>
          <li>
            It isn&apos;t a new chain. We&apos;re committed to deploying onto the chains operators
            already settle on.
          </li>
          <li>It isn&apos;t a research artefact. The first pilots are live operators with real customers.</li>
        </ul>
      </section>

      <section>
        <h2>Pilot status</h2>
        <p>
          The SDK is in private alpha with a closed cohort of operators. <code>$ npx @foglight/sdk init</code>
          {" "}
          will install when we open access. Until then, the right path in is a direct conversation —
          we want to understand the operator&apos;s flows, their regulator, and their existing chain
          before recommending the integration shape.
        </p>
      </section>
    </SubpageLayout>
  );
}
