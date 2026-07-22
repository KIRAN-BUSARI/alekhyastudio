"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ContactForm, type ContactService } from "./ContactForm";

const serviceMap: Record<string, ContactService> = {
  photo: "Dance Photography / Videography",
  invite: "Rangapravesha / Arangetram Invitations",
  branding: "Artist / Academy Branding",
  web: "Website Design",
  marketing: "Digital Marketing",
  creative: "Creative Design",
  consult: "Consultation",
};

function FormInner() {
  const params = useSearchParams();
  const key = params.get("service");
  const defaultService = key && key in serviceMap ? serviceMap[key] : undefined;

  return <ContactForm defaultService={defaultService} />;
}

export function ContactFormWithParams() {
  return (
    <Suspense fallback={<ContactForm />}>
      <FormInner />
    </Suspense>
  );
}
