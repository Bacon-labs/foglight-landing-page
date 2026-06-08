"use client";

import { useState, type FormEvent } from "react";

const formAction =
  "https://docs.google.com/forms/d/e/1FAIpQLScvYhnTEDrzmXLpnBULIX40WKWbfdKduGnBixOl3Kie1eFgpQ/formResponse";
const emailField = "entry.43137680";

type Status = "idle" | "submitting" | "done" | "error";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (status === "submitting" || status === "done") return;

    setStatus("submitting");
    const body = new FormData();
    body.append(emailField, email);

    try {
      await fetch(formAction, { method: "POST", mode: "no-cors", body });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="notify-done" role="status">
        You&rsquo;re on the list — we&rsquo;ll be in touch.
      </p>
    );
  }

  return (
    <form className="notify-form" onSubmit={handleSubmit} aria-label="Get notified when Foglight launches">
      <input
        className="notify-input"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        autoComplete="email"
        required
        disabled={status === "submitting"}
      />
      <button className="button notify-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Notify me"}
      </button>
      {status === "error" && (
        <span className="notify-error" role="alert">
          Something went wrong — try again.
        </span>
      )}
    </form>
  );
}
