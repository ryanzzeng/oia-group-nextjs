"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileEnquiry() {
  const pathname = usePathname();
  if (!(pathname.startsWith("/projects") || pathname.startsWith("/viewall-projects"))) return null;
  return <Link className="mobile-enquiry" href="mailto:admin@oiagroup.com.au">Enquire about a project <span aria-hidden="true">→</span></Link>;
}
