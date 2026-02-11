"use client";

import Container from "@/components/layout/Container";
import MarketingHero from "@/components/sections/MarketingHero";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <>
      <MarketingHero
        title="Contact DigiServe Solution"
        rotatingLines={[
          "Plan your next software milestone",
          "Improve campaign and growth performance",
          "Strengthen operations with expert support",
          "Get a practical roadmap for execution",
        ]}
        description="Tell us what you need. We will respond with clear next steps and a delivery-focused proposal roadmap."
        primaryButton={{ href: "#contact-form", label: "Start a Conversation" }}
        secondaryButton={{ href: "/services", label: "View Services" }}
      />

      <Container className="py-14">
        <div id="contact-form" className="mx-auto max-w-2xl">
          <form
            className="mt-2 grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            action={onSubmit}
          >
            <div className="grid gap-2">
              <label className="text-sm font-medium text-zinc-900">Name</label>
              <Input name="name" placeholder="Your name" required />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-zinc-900">Email</label>
              <Input name="email" type="email" placeholder="you@company.com" required />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-zinc-900">Message</label>
              <Textarea
                name="message"
                placeholder="Briefly describe your project or support request..."
                required
              />
            </div>

            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-sm font-medium text-green-700">
                Thanks! Your message has been sent.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-medium text-red-700">
                {error || "Unable to send. Please try again."}
              </p>
            )}
          </form>
        </div>
      </Container>
    </>
  );
}
