"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const selector = pathname === "/viewall-projects"
      ? ".showcase-intro > *, .showcase-collection, .showcase-project-image, .showcase-project-copy"
      : pathname === "/news"
        ? ".figma-news-intro > *, .figma-news-story .figma-news-copy, .figma-news-story .figma-news-city"
        : "section:not(:first-child), .showcase-project, .figma-news-story, .single-news-milestone";
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }), { rootMargin: "0px 0px -8%", threshold: .08 });
    const register = (root: ParentNode = document) => root.querySelectorAll<HTMLElement>(selector).forEach(element => {
      if (element.classList.contains("reveal-ready")) return;
      element.classList.add("reveal-ready");
      observer.observe(element);
    });
    register();
    const mutationObserver = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (!(node instanceof HTMLElement)) return;
      if (node.matches(selector) && !node.classList.contains("reveal-ready")) {
        node.classList.add("reveal-ready");
        observer.observe(node);
      }
      register(node);
    })));
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
