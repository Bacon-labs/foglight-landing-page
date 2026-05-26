"use client";

import { useEffect, useRef, useState } from "react";

const workflowSteps = [
  {
    id: "rails",
    index: "01",
    label: "Existing rails",
    title: "Your product still settles on supported EVM chains.",
    body: "Foglight is added as privacy infrastructure around the account activity your product already routes.",
    schema: `SUPPORTED EVM RAILS

user wallet ── tx intent ── app
                     │
                     ▼
             public settlement

public chain sees: settlement surface
operator sees: customer context`,
  },
  {
    id: "pool",
    index: "02",
    label: "Customer boundary",
    title: "Activity moves through a customer-specific privacy pool.",
    body: "Each operator gets its own boundary, instead of pushing users into shared public mixers or external privacy systems.",
    schema: `CUSTOMER PRIVACY POOL

             ┌────────────────────┐
user A ─────▶│                    │─────▶ EVM
user B ─────▶│  operator pool     │─────▶ EVM
user C ─────▶│                    │─────▶ EVM
             └────────────────────┘

public observer: no customer ledger
operator team: keyed records`,
  },
  {
    id: "keys",
    index: "03",
    label: "Team records",
    title: "Your compliance team keeps the keys.",
    body: "Risk, support, and compliance workflows can reach the records they need without making every user action public by default.",
    schema: `KEYED VISIBILITY

┌──────────────┐       ┌──────────────┐
│ risk team    │──────▶│ viewing path │
└──────────────┘       └──────┬───────┘
                              │
┌──────────────┐              ▼
│ support team │──────▶ customer records
└──────────────┘

access lives with your operating model`,
  },
  {
    id: "records",
    index: "04",
    label: "When it breaks",
    title: "You can produce records and migrate.",
    body: "The failure-mode question is part of the design: your team should not depend on screenshots, user cooperation, or Foglight staying online to reconstruct activity.",
    schema: `RESILIENCE PATH

incident / audit / migration
          │
          ▼
  produce real records
          │
          ▼
  move customer pool state

no screenshots
no off-rails disclosure chase`,
  },
];

export function WorkflowDisclosure() {
  const [activeStep, setActiveStep] = useState(workflowSteps[0].id);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement && visible.target.dataset.step) {
          setActiveStep(visible.target.dataset.step);
        }
      },
      {
        root: null,
        rootMargin: "-28% 0px -46% 0px",
        threshold: [0.25, 0.45, 0.7],
      },
    );

    itemRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const active = workflowSteps.find((step) => step.id === activeStep) ?? workflowSteps[0];

  return (
    <div className="workflow-artifact">
      <div className="workflow-copy">
        <p className="eyebrow">How it works</p>
        <h2>One pool per operator. Keys with you.</h2>
        <p>
          The mechanism is narrow on purpose: keep public settlement, move customer activity behind a boundary, and preserve the records your team needs.
        </p>

        <div className="workflow-steps">
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              data-step={step.id}
              className={`workflow-step glow-card ${activeStep === step.id ? "is-active" : ""}`}
            >
              <span>{step.index}</span>
              <div>
                <p>{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="workflow-visual" aria-live="polite">
        <div className="workflow-screen">
          <div className="screen-header">
            <span>{active.index}</span>
            <strong>{active.label}</strong>
          </div>
          <pre>{active.schema}</pre>
        </div>
      </aside>
    </div>
  );
}
