"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `OIA project enquiry — ${form.get("project") || "General"}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Project: ${form.get("project")}`,
      "",
      String(form.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:admin@oiagroup.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={submit}>
    <div><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required /></div>
    <div><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div>
    <div><label htmlFor="contact-phone">Phone</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" /></div>
    <div><label htmlFor="contact-project">Interested project</label><select id="contact-project" name="project" defaultValue="General enquiry"><option>General enquiry</option><option>Chatswood Help St</option><option>Angophora</option><option>Hornsby Townhouse</option><option>Lighthouse Burwood</option><option>IQ Burwood</option><option>Ridge Park Estate</option><option>Denman Park Estate</option></select></div>
    <div className="contact-form-message"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={6} required /></div>
    <label className="contact-consent"><input type="checkbox" required /> <span>I agree that OIA Group may contact me regarding this enquiry.</span></label>
    <button className="contact-submit" type="submit"><span>Send enquiry</span><b aria-hidden="true">→</b></button>
    <p className="contact-form-note">Submitting opens your email application so you can review the message before sending.</p>
  </form>;
}
