"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { Button } from "./Button";

export const contactServices = [
  "Dance Photography / Videography",
  "Rangapravesha / Arangetram Invitations",
  "Artist / Academy Branding",
  "Website Design",
  "Digital Marketing",
  "Creative Design",
  "Consultation",
  "Other",
] as const;

export type ContactService = (typeof contactServices)[number];

const fieldClass =
  "w-full rounded-sm border border-charcoal/15 bg-cream-soft px-4 py-3 text-charcoal outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20";

type ContactFormProps = {
  defaultService?: ContactService;
};

export function ContactForm({ defaultService }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-sm border border-teal/20 bg-cream-soft p-8 text-center"
      >
        <p className="font-display text-2xl text-teal">Thank you</p>
        <p className="mt-2 text-charcoal-muted">
          Your enquiry is ready — we&apos;ll respond within 1–2 business days.
          For faster replies, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" required>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" id="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@email.com"
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" id="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="+91 …"
          />
        </Field>
        <Field label="Service" id="service" required>
          <select
            id="service"
            name="service"
            required
            defaultValue={defaultService ?? ""}
            className={fieldClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            {contactServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" id="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about the art form, date, and what you need…"
        />
      </Field>
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Send Enquiry
      </Button>
    </form>
  );
}

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
        {required ? <span className="text-terracotta"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
