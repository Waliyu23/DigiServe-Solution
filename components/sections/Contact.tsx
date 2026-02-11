"use client";

import { useRef, useState } from "react";
import Container from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  website: string;
  message: string;
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactPayload, string>>
  >({});

  function validate(payload: ContactPayload) {
    const errors: Partial<Record<keyof ContactPayload, string>> = {};
    if (payload.name.trim().length < 2) {
      errors.name = "Please enter at least 2 characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
      errors.email = "Please enter a valid email.";
    }
    if (!payload.phone.trim()) errors.phone = "Phone is required.";
    if (!payload.company.trim()) errors.company = "Company is required.";
    if (!payload.serviceType.trim()) {
      errors.serviceType = "Please select a service.";
    }
    if (payload.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters.";
    }
    return errors;
  }

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);
    setFieldErrors({});

    const payload: ContactPayload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      serviceType: String(formData.get("serviceType") || ""),
      website: String(formData.get("website") || ""),
      message: String(formData.get("message") || ""),
    };

    const validationErrors = validate(payload);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setFieldErrors(validationErrors);
      setError("Please fix the highlighted fields and try again.");
      trackEvent("contact_submit_invalid", {
        source: "home_contact_section",
      });
      return;
    }

    trackEvent("contact_submit_started", {
      source: "home_contact_section",
      serviceType: payload.serviceType,
    });

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
        trackEvent("contact_submit_error", {
          source: "home_contact_section",
          reason: data.message || "api_error",
        });
        return;
      }

      setStatus("success");
      formRef.current?.reset();
      trackEvent("contact_submit_success", {
        source: "home_contact_section",
        serviceType: payload.serviceType,
      });
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
      trackEvent("contact_submit_error", {
        source: "home_contact_section",
        reason: "network_error",
      });
    }
  }

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050906] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>
      <Container maxWidth="full" className="relative px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Start your project with DigiServe
            </h2>
            <p className="mt-4 max-w-lg text-base text-slate-300 sm:text-lg">
              Share your goals and timeline. We will reply with practical next
              steps and a delivery approach that fits your business.
            </p>
          </div>

          <form
            ref={formRef}
            className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-[0_28px_70px_rgba(0,0,0,0.25)] sm:p-8"
            action={onSubmit}
          >
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-zinc-900">Name</label>
              <Input
                name="name"
                placeholder="Your name"
                required
                className="border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-500 focus:border-emerald-600"
              />
              {fieldErrors.name && (
                <p className="text-xs font-medium text-red-700">{fieldErrors.name}</p>
              )}
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-zinc-900">Email</label>
              <Input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-500 focus:border-emerald-600"
              />
              {fieldErrors.email && (
                <p className="text-xs font-medium text-red-700">{fieldErrors.email}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-zinc-900">Phone</label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="GH +233556600270 / MY +601168317654"
                  required
                  className="border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-500 focus:border-emerald-600"
                />
                {fieldErrors.phone && (
                  <p className="text-xs font-medium text-red-700">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-zinc-900">Company</label>
                <Input
                  name="company"
                  placeholder="Your company"
                  required
                  className="border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-500 focus:border-emerald-600"
                />
                {fieldErrors.company && (
                  <p className="text-xs font-medium text-red-700">
                    {fieldErrors.company}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-zinc-900">
                Service Type
              </label>
              <select
                name="serviceType"
                required
                defaultValue=""
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-0 focus:border-emerald-600"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="software-development">
                  Software & Technology Development
                </option>
                <option value="digital-marketing-seo">
                  Digital Marketing & SEO
                </option>
                <option value="design-branding">
                  Design & Branding
                </option>
                <option value="business-it-consulting">
                  Business & IT Consulting
                </option>
                <option value="financial-services">
                  Financial Services
                </option>
              </select>
              {fieldErrors.serviceType && (
                <p className="text-xs font-medium text-red-700">
                  {fieldErrors.serviceType}
                </p>
              )}
            </div>

            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-zinc-900">Message</label>
              <Textarea
                name="message"
                placeholder="Tell us about your project, goals, and timeline..."
                required
                className="min-h-[160px] border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-500 focus:border-emerald-600"
              />
              {fieldErrors.message && (
                <p className="text-xs font-medium text-red-700">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-[#3a5f1a] px-7 py-3 text-base font-semibold !text-white shadow-[0_10px_26px_rgba(0,0,0,0.35)] ring-1 ring-[#9adf6a] hover:bg-[#335517] focus-visible:ring-[#bffb7a] focus-visible:ring-offset-[#0a0f0b] mix-blend-normal"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-sm font-semibold text-emerald-700">
                Thanks! Your message has been sent. We usually respond within 24
                hours.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-semibold text-red-700">
                {error || "Unable to send. Please try again."}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
