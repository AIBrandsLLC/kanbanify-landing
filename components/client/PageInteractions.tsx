"use client";

import { useEffect } from "react";
import { REGISTER_URL } from "@/data/app-links";

declare global {
  interface Window {
    goSignup?: (form: HTMLFormElement) => boolean;
    openVideo?: () => void;
    closeVideo?: () => void;
    setCycle?: (cycle: "m" | "y") => void;
    showTab?: (id: string, button: HTMLElement) => void;
    filterRes?: (type: string, button: HTMLElement) => void;
    registerWithKanbanify?: () => false;
  }
}

type ParallaxElement = HTMLElement & {
  dataset: DOMStringMap & { parallax?: string };
};

function revealOnScroll() {
  const targets = document.querySelectorAll<HTMLElement>(".reveal,.r-up,.r-scale");
  if (!targets.length) return undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  targets.forEach((target) => observer.observe(target));
  return () => observer.disconnect();
}

function enableScrollytelling() {
  const steps = [...document.querySelectorAll<HTMLElement>(".step")];
  const visuals = [...document.querySelectorAll<HTMLElement>(".sv")];
  if (!steps.length || !visuals.length) return undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number((entry.target as HTMLElement).dataset.step);
        steps.forEach((step) => step.classList.toggle("active", step === entry.target));
        visuals.forEach((visual) =>
          visual.classList.toggle("on", Number(visual.dataset.sv) === index),
        );
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
  );

  steps.forEach((step) => observer.observe(step));
  return () => observer.disconnect();
}

function enableHorizontalScroll() {
  const section = document.querySelector<HTMLElement>(".hscroll");
  const track = document.getElementById("htrack");
  const rail = document.getElementById("hrail");
  const pin = document.querySelector<HTMLElement>(".hscroll-pin");
  const viewport = track?.parentElement;
  if (!section || !track || !pin || !viewport) return undefined;

  const sectionEl = section;
  const trackEl = track;
  const pinEl = pin;
  const viewportEl = viewport;
  const dots = rail ? [...rail.children] : [];
  let maxX = 0;

  function isPinned() {
    return window.getComputedStyle(pinEl).position === "sticky";
  }

  function calculate() {
    maxX = Math.max(0, trackEl.scrollWidth - viewportEl.clientWidth);
  }

  function onScroll() {
    if (!isPinned()) {
      trackEl.style.transform = "";
      return;
    }

    const rect = sectionEl.getBoundingClientRect();
    const total = sectionEl.offsetHeight - window.innerHeight;
    const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
    trackEl.style.transform = `translateX(-${progress * maxX}px)`;

    if (dots.length) {
      const index = Math.round(progress * (dots.length - 1));
      dots.forEach((dot, key) => dot.classList.toggle("on", key === index));
    }
  }

  function onResize() {
    calculate();
    onScroll();
  }

  calculate();
  onScroll();
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("scroll", onScroll);
  };
}

function enableParallax() {
  const elements = [...document.querySelectorAll<ParallaxElement>("[data-parallax]")];
  if (!elements.length) return undefined;

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const viewportHeight = window.innerHeight;
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - viewportHeight / 2;
        const factor = Number.parseFloat(element.dataset.parallax ?? "0");
        element.style.transform = `translateY(${center * -factor}px)`;
      });
      ticking = false;
    });
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

function enableSignupPrefill() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  if (!email) return;
  const input = document.querySelector<HTMLInputElement>('.auth input[type="email"]');
  if (input) input.value = email;
}

export function PageInteractions() {
  useEffect(() => {
    window.goSignup = () => {
      window.location.href = REGISTER_URL;
      return false;
    };

    window.registerWithKanbanify = () => {
      window.location.href = REGISTER_URL;
      return false;
    };

    window.openVideo = () => {
      document.getElementById("vmodal")?.classList.add("show");
      document.body.style.overflow = "hidden";
    };

    window.closeVideo = () => {
      document.getElementById("vmodal")?.classList.remove("show");
      document.body.style.overflow = "";
    };

    window.setCycle = (cycle: "m" | "y") => {
      document.getElementById("m")?.classList.toggle("on", cycle === "m");
      document.getElementById("y")?.classList.toggle("on", cycle === "y");
      document.querySelectorAll<HTMLElement>(".price span[data-m]").forEach((span) => {
        span.textContent = cycle === "m" ? span.dataset.m ?? "" : span.dataset.y ?? "";
      });

      const teamSave = document.getElementById("team-save");
      const orgSave = document.getElementById("org-save");
      if (teamSave) teamSave.textContent = cycle === "y" ? "Billed yearly - save $24/user" : "\u00A0";
      if (orgSave) orgSave.textContent = cycle === "y" ? "Billed yearly - save $120/user" : "\u00A0";
    };

    window.showTab = (id: string, button: HTMLElement) => {
      document.querySelectorAll(".tabpane").forEach((pane) => pane.classList.remove("on"));
      document.getElementById(`t-${id}`)?.classList.add("on");
      document.querySelectorAll(".tabbtn").forEach((tab) => tab.classList.remove("on"));
      button.classList.add("on");
    };

    window.filterRes = (type: string, button: HTMLElement) => {
      document.querySelectorAll(".res-tab").forEach((tab) => tab.classList.remove("on"));
      button.classList.add("on");
      document.querySelectorAll<HTMLElement>(".res").forEach((card) => {
        card.style.display = type === "all" || card.dataset.type === type ? "" : "none";
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") window.closeVideo?.();
    };

    const signupForm = document.querySelector<HTMLFormElement>(".auth form");
    const oauthButtons = [...document.querySelectorAll<HTMLButtonElement>(".oauth button")];
    const onSignupSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      window.location.href = REGISTER_URL;
    };
    const onOauthClick = () => {
      window.location.href = REGISTER_URL;
    };

    document.addEventListener("keydown", onKeyDown);
    signupForm?.addEventListener("submit", onSignupSubmit);
    oauthButtons.forEach((button) => button.addEventListener("click", onOauthClick));
    enableSignupPrefill();

    const cleanups = [
      revealOnScroll(),
      enableScrollytelling(),
      enableHorizontalScroll(),
      enableParallax(),
    ].filter((cleanup): cleanup is () => void => Boolean(cleanup));

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      cleanups.forEach((cleanup) => cleanup());
      document.body.style.overflow = "";
      delete window.goSignup;
      delete window.openVideo;
      delete window.closeVideo;
      delete window.setCycle;
      delete window.showTab;
      delete window.filterRes;
      delete window.registerWithKanbanify;
      signupForm?.removeEventListener("submit", onSignupSubmit);
      oauthButtons.forEach((button) => button.removeEventListener("click", onOauthClick));
    };
  }, []);

  return null;
}
