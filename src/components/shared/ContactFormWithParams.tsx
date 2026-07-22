"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ContactForm } from "./ContactForm";

const serviceMap = {
  photo: "Photography / Videography",
  crafts: "Arts & Crafts",
  design: "Invitation / Brand Design",
  web: "Website Design & Development",
} as const;

function FormInner() {
  const params = useSearchParams();
  const key = params.get("service");
  const defaultService =
    key && key in serviceMap
      ? serviceMap[key as keyof typeof serviceMap]
      : undefined;

  return <ContactForm defaultService={defaultService} />;
}

export function ContactFormWithParams() {
  return (
    <Suspense fallback={<ContactForm />}>
      <FormInner />
    </Suspense>
  );
}
