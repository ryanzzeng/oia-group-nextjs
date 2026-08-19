"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const selector = pathname === "/viewall-projects"
      ? ".showcase-intro > *, .showcase-collection, .showcase-project-image, .showcase-project-copy"
      : "section:not(:first-child), .showcase-project, .figma-news-story, .single-news-milestone";
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach(element => element.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }), { rootMargin: "0px 0px -8%", threshold: .08 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
