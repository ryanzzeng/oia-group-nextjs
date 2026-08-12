import type { Metadata } from "next";
import { BrandedFooter, ImageHero } from "../components/site";
import { ContactForm } from "../components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact OIA Group about residential developments and project opportunities across Australia.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return <div className="contact-page">
    <ImageHero className="contact-hero" image="/figma/about/hero.png" alt="OIA residential development in Sydney" title="Contact us" />
    <section className="contact-content">
      <div className="contact-intro"><span>Project enquiries</span><h2>Let’s discuss your interest in OIA Group.</h2><p>For project information, partnerships or general enquiries, contact our team directly or send us the details below.</p><a href="mailto:admin@oiagroup.com.au">admin@oiagroup.com.au</a></div>
      <ContactForm />
    </section>
    <BrandedFooter />
  </div>;
}
