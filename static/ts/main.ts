/* ==========================================================================
   PALINDROME LABS — TypeScript Interaction & Motion Layer
   ========================================================================== */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initHeroSculpture, type HeroSculptureController } from "./heroSculpture";
import { initGlowCursor, type GlowCursorController } from "./glowCursor";

gsap.registerPlugin(ScrollTrigger);

interface ContactPayload {
  name: string;
  email: string;
  project_type: string;
  description: string;
}

interface FastApiValidationDetail {
  loc?: Array<string | number>;
  msg?: string;
}

interface ContactApiResponse {
  status?: string;
  id?: number;
  message?: string;
  detail?: string | FastApiValidationDetail[];
}

const PROJECT_DISPLAY_NAMES: Record<string, string> = {
  "rajamanickam-chit-fund": "Rajamanickam Chit Funds",
  "zsi-yogesh": "ZSI Portfolio",
  "kaiforge": "KaiForge",
  "palindrome": "Palindrome",
  "neuroshield": "NeuroShield",
  "mfalmion": "Mfalmion",
};

const INTRO_SEEN_KEY = "palindrome_intro_seen";

const prefersReducedMotion = (): boolean =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function markIntroSeen(): void {
  try {
    window.localStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    // Storage unavailable
  }
}

/**
 * Coordinates the optional first-visit intro video handoff, WebGL sculpture
 * materialization, staggered masked headline reveal, and scroll exit.
 */
function initHeroAndIntroExperience(): void {
  const root = document.documentElement;
  const splash = document.getElementById("intro-splash");
  const video = document.getElementById("intro-video") as HTMLVideoElement | null;
  const hero = document.getElementById("hero");
  const heroCanvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
  const masthead = document.getElementById("masthead");
  const heroScroll = document.getElementById("hero-scroll");
  const heroContent = document.getElementById("hero-content");
  const headlineLines = Array.from(document.querySelectorAll<HTMLElement>(".hero__line-inner"));
  const staggerEls = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-stagger]"));

  const reduced = prefersReducedMotion();

  // Initialize WebGL sculpture immediately so it is ready before the video ends
  let sculpture: HeroSculptureController | null = null;
  if (hero && heroCanvas) {
    sculpture = initHeroSculpture(heroCanvas, hero, {
      reducedMotion: reduced,
      onFallback: () => {
        hero.classList.add("is-webgl-fallback");
      },
    });
  } else if (hero) {
    hero.classList.add("is-webgl-fallback");
  }

  if (!reduced) {
    gsap.set(headlineLines, { yPercent: 112, opacity: 0 });
    gsap.set(staggerEls, { y: 20, opacity: 0 });
    if (masthead) gsap.set(masthead, { y: -14, opacity: 0 });
    if (heroScroll) gsap.set(heroScroll, { opacity: 0, y: 10 });
  }

  let entrancePlayed = false;

  const playHeroEntrance = (fromVideo: boolean): void => {
    if (entrancePlayed) return;
    entrancePlayed = true;

    if (reduced) {
      sculpture?.setReveal(1);
      root.classList.remove("intro-active");
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    const revealState = { value: 0 };

    if (fromVideo && splash) {
      tl.to(
        splash,
        {
          opacity: 0,
          duration: 0.78,
          ease: "power3.inOut",
          onComplete: () => {
            video?.pause();
            root.classList.remove("intro-active");
            splash.style.opacity = "";
          },
        },
        0,
      );
    } else {
      root.classList.remove("intro-active");
    }

    // Materialize 3D sculpture & residual particles seamlessly from black
    tl.to(
      revealState,
      {
        value: 1,
        duration: fromVideo ? 1.35 : 1.05,
        ease: "power3.out",
        onUpdate: () => {
          sculpture?.setReveal(revealState.value);
        },
      },
      fromVideo ? 0.1 : 0.0,
    );

    const textStart = fromVideo ? 0.24 : 0.04;

    if (staggerEls[0]) {
      tl.to(staggerEls[0], { y: 0, opacity: 1, duration: 0.62, ease: "power3.out" }, textStart);
    }

    if (headlineLines.length) {
      tl.to(
        headlineLines,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: "power4.out",
        },
        textStart + 0.06,
      );
    }

    const lowerEls = staggerEls.slice(1);
    if (lowerEls.length) {
      tl.to(
        lowerEls,
        {
          y: 0,
          opacity: 1,
          duration: 0.68,
          stagger: 0.08,
          ease: "power3.out",
        },
        textStart + 0.28,
      );
    }

    if (masthead) {
      tl.to(
        masthead,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          clearProps: "transform",
        },
        textStart + 0.18,
      );
    }

    if (heroScroll) {
      tl.to(
        heroScroll,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        textStart + 0.45,
      );
    }
  };

  // Subtle ScrollTrigger exit transformation leaving the hero into Services
  if (hero && !reduced) {
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        sculpture?.setScrollProgress(self.progress);
        if (heroContent) {
          gsap.set(heroContent, {
            y: self.progress * -48,
            opacity: Math.max(0.18, 1 - self.progress * 1.15),
          });
        }
        if (heroScroll) {
          gsap.set(heroScroll, {
            opacity: Math.max(0, 1 - self.progress * 3.5),
          });
        }
      },
    });
  }

  // First-visit video handoff vs immediate return-visit entrance
  if (!reduced && root.classList.contains("intro-active") && splash && video) {
    markIntroSeen();

    let finished = false;
    let safetyTimer = 0;

    const completeVideo = (): void => {
      if (finished) return;
      finished = true;
      if (safetyTimer) window.clearTimeout(safetyTimer);
      playHeroEntrance(true);
    };

    const src = video.dataset.src;
    if (src && !video.getAttribute("src")) {
      video.src = src;
    }
    video.muted = true;
    video.playsInline = true;

    video.addEventListener("ended", completeVideo, { once: true });
    video.addEventListener("error", completeVideo, { once: true });
    video.addEventListener("loadedmetadata", () => {
      const durationMs =
        Number.isFinite(video.duration) && video.duration > 0
          ? Math.ceil(video.duration * 1000) + 1500
          : 8000;
      if (safetyTimer) window.clearTimeout(safetyTimer);
      safetyTimer = window.setTimeout(completeVideo, durationMs);
    });

    safetyTimer = window.setTimeout(completeVideo, 8000);

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        completeVideo();
      });
    }
  } else {
    playHeroEntrance(false);
  }
}

/**
 * Refined magnetic attraction on key studio buttons and brand mark.
 */
function initMagneticControls(): void {
  if (prefersReducedMotion()) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
  for (const el of targets) {
    const moveX = gsap.quickTo(el, "x", { duration: 0.42, ease: "power3.out" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.42, ease: "power3.out" });

    el.addEventListener("pointermove", (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
      const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
      moveX(offsetX);
      moveY(offsetY);
    });

    el.addEventListener("pointerleave", () => {
      moveX(0);
      moveY(0);
    });
  }
}

function initScrollProgressAndNav(): void {
  const progressBar = document.getElementById("scroll-progress");
  const masthead = document.getElementById("masthead");
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));

  const updateScrollUI = (): void => {
    if (masthead) {
      masthead.classList.toggle("is-scrolled", window.scrollY > 24);
    }
    if (progressBar) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      progressBar.style.transform = `scaleX(${ratio.toFixed(4)})`;
    }
  };

  updateScrollUI();
  window.addEventListener("scroll", updateScrollUI, { passive: true });

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("id");
          for (const link of navLinks) {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          }
        }
      },
      { rootMargin: "-42% 0px -48% 0px" },
    );

    for (const section of sections) {
      observer.observe(section);
    }
  }
}

function initScrollReveals(): void {
  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (!targets.length) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    for (const el of targets) el.classList.add("is-revealed");
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
  );

  for (const el of targets) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94) {
      el.classList.add("is-revealed");
    } else {
      observer.observe(el);
    }
  }
}

function initMobileMenu(): void {
  const toggle = document.getElementById("menu-toggle") as HTMLButtonElement | null;
  const drawer = document.getElementById("mobile-drawer");
  if (!toggle || !drawer) return;

  const setOpen = (open: boolean): void => {
    toggle.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
    drawer.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  const links = drawer.querySelectorAll<HTMLAnchorElement>("[data-drawer-link]");
  for (const link of links) {
    link.addEventListener("click", () => setOpen(false));
  }

  window.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initInteractiveWorkCards(): void {
  const filterTabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-work-filter]"));
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-work-card]"));
  const inspectButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-inspect-card]"));

  for (const tab of filterTabs) {
    tab.addEventListener("click", () => {
      const selectedGroup = tab.dataset.workFilter || "All";
      for (const btn of filterTabs) {
        const active = btn === tab;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      }

      for (const card of cards) {
        const matches = selectedGroup === "All" || card.dataset.workGroup === selectedGroup;
        card.hidden = !matches;
      }
    });
  }

  for (const btn of inspectButtons) {
    btn.addEventListener("click", () => {
      const drawerId = btn.getAttribute("aria-controls");
      if (!drawerId) return;
      const drawer = document.getElementById(drawerId);
      const card = btn.closest<HTMLElement>("[data-work-card]");
      if (!drawer) return;

      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      drawer.hidden = expanded;
      card?.classList.toggle("is-expanded", !expanded);
      btn.textContent = expanded ? "Inspect Details +" : "Hide Details −";
    });
  }
}

function initSkillsWorkbench(): void {
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-skill-filter]"));
  const skillButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-skill-item]"));

  const inspectorCat = document.getElementById("inspector-category");
  const inspectorName = document.getElementById("inspector-name");
  const inspectorFocus = document.getElementById("inspector-focus");
  const inspectorSummary = document.getElementById("inspector-summary");
  const inspectorProjects = document.getElementById("inspector-projects");

  if (!skillButtons.length) return;

  const selectSkill = (button: HTMLButtonElement): void => {
    for (const item of skillButtons) {
      const isTarget = item === button;
      item.classList.toggle("is-selected", isTarget);
      item.setAttribute("aria-selected", String(isTarget));
    }

    if (inspectorCat) inspectorCat.textContent = button.dataset.skillCategory || "";
    if (inspectorName) inspectorName.textContent = button.dataset.skillName || "";
    if (inspectorFocus) inspectorFocus.textContent = button.dataset.skillFocus || "";
    if (inspectorSummary) inspectorSummary.textContent = button.dataset.skillSummary || "";

    if (inspectorProjects) {
      const slugs = (button.dataset.skillProjects || "").split(",").filter(Boolean);
      inspectorProjects.innerHTML = "";
      for (const slug of slugs) {
        const chip = document.createElement("a");
        chip.href = `#project-${slug}`;
        chip.className = "skill-project-chip";
        chip.textContent = PROJECT_DISPLAY_NAMES[slug] || slug;
        inspectorProjects.appendChild(chip);
      }
    }
  };

  for (const btn of skillButtons) {
    btn.addEventListener("click", () => selectSkill(btn));
    btn.addEventListener("mouseenter", () => selectSkill(btn));
  }

  for (const filterBtn of filterButtons) {
    filterBtn.addEventListener("click", () => {
      const filter = filterBtn.dataset.skillFilter || "all";
      for (const tab of filterButtons) {
        const active = tab === filterBtn;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      }

      let firstVisible: HTMLButtonElement | null = null;
      for (const row of skillButtons) {
        const matches = filter === "all" || row.dataset.skillCategory === filter;
        row.hidden = !matches;
        if (matches && !firstVisible) firstVisible = row;
      }

      const currentSelected = skillButtons.find((b) => b.classList.contains("is-selected") && !b.hidden);
      if (!currentSelected && firstVisible) {
        selectSkill(firstVisible);
      }
    });
  }
}

function initFounderTabs(): void {
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-honor-tab]"));
  const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-honor-panel]"));
  if (!tabs.length || !panels.length) return;

  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      const target = tab.dataset.honorTab;
      for (const t of tabs) {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      }
      for (const p of panels) {
        p.hidden = p.dataset.honorPanel !== target;
      }
    });
  }
}

function initServicesAndContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const nameInput = document.getElementById("contact-name") as HTMLInputElement | null;
  const emailInput = document.getElementById("contact-email") as HTMLInputElement | null;
  const typeSelect = document.getElementById("contact-type") as HTMLSelectElement | null;
  const descInput = document.getElementById("contact-description") as HTMLTextAreaElement | null;
  const descCount = document.getElementById("description-count");
  const submitBtn = document.getElementById("contact-submit") as HTMLButtonElement | null;
  const statusBanner = document.getElementById("form-status");

  // Service tier pre-fill
  const serviceTriggers = document.querySelectorAll<HTMLElement>("[data-select-service]");
  for (const trigger of serviceTriggers) {
    trigger.addEventListener("click", () => {
      const serviceTitle = trigger.dataset.selectService;
      if (serviceTitle && typeSelect) {
        typeSelect.value = serviceTitle;
      }
      if (nameInput) {
        window.setTimeout(() => nameInput.focus(), 350);
      }
    });
  }

  // Copy contact value buttons
  const copyButtons = document.querySelectorAll<HTMLButtonElement>("[data-copy-text]");
  for (const btn of copyButtons) {
    btn.addEventListener("click", async () => {
      const text = btn.dataset.copyText;
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        const orig = btn.textContent;
        btn.textContent = "Copied";
        window.setTimeout(() => {
          btn.textContent = orig;
        }, 1600);
      } catch {
        // Clipboard access unavailable
      }
    });
  }

  if (!form || !nameInput || !emailInput || !typeSelect || !descInput || !submitBtn || !statusBanner) {
    return;
  }

  const updateCounter = (): void => {
    if (descCount) {
      descCount.textContent = `${descInput.value.length} / 2500`;
    }
  };
  updateCounter();
  descInput.addEventListener("input", updateCounter);

  const setFieldError = (field: string, message: string): void => {
    const errEl = document.getElementById(`error-${field}`);
    if (errEl) errEl.textContent = message;
  };

  const clearErrors = (): void => {
    for (const field of ["name", "email", "project_type", "description"]) {
      setFieldError(field, "");
    }
    statusBanner.hidden = true;
    statusBanner.className = "form-status";
    statusBanner.textContent = "";
  };

  const showBanner = (kind: "success" | "error", text: string): void => {
    statusBanner.hidden = false;
    statusBanner.className = `form-status form-status--${kind}`;
    statusBanner.textContent = text;
  };

  const validateClient = (payload: ContactPayload): boolean => {
    let valid = true;
    if (payload.name.length < 2) {
      setFieldError("name", "Please enter at least 2 characters.");
      valid = false;
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(payload.email)) {
      setFieldError("email", "Please enter a valid email address.");
      valid = false;
    }
    if (!payload.project_type) {
      setFieldError("project_type", "Please select a service package.");
      valid = false;
    }
    if (payload.description.length < 15) {
      setFieldError("description", "Please describe your project in at least 15 characters.");
      valid = false;
    }
    return valid;
  };

  form.addEventListener("submit", async (event: SubmitEvent) => {
    event.preventDefault();
    clearErrors();

    const payload: ContactPayload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      project_type: typeSelect.value.trim(),
      description: descInput.value.trim(),
    };

    if (!validateClient(payload)) {
      showBanner("error", "Please fix the highlighted fields before sending.");
      return;
    }

    const labelSpan = submitBtn.querySelector("span:first-child");
    submitBtn.disabled = true;
    if (labelSpan) labelSpan.textContent = "Sending...";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as ContactApiResponse;

      if (!response.ok) {
        if (Array.isArray(data.detail)) {
          for (const issue of data.detail) {
            const fieldName = String(issue.loc?.[issue.loc.length - 1] ?? "");
            if (fieldName && issue.msg) {
              setFieldError(fieldName, issue.msg.replace(/^Value error,\s*/i, ""));
            }
          }
        }
        showBanner("error", "Unable to submit yet. Please check your details and try again.");
        return;
      }

      form.reset();
      updateCounter();
      showBanner(
        "success",
        data.message || "Project inquiry received by Palindrome Labs.",
      );
    } catch {
      showBanner("error", "Network error while contacting the Python backend. Please try again.");
    } finally {
      submitBtn.disabled = false;
      if (labelSpan) labelSpan.textContent = "Send Project Inquiry";
    }
  });
}

function initSiteGlowCursor(): void {
  const layer = document.getElementById("glow-cursor-layer");
  const canvas = document.getElementById("glow-cursor-canvas") as HTMLCanvasElement | null;
  if (!layer || !canvas) return;

  const root = document.documentElement;
  const cursor: GlowCursorController | null = initGlowCursor(layer, canvas, {
    colors: [
      ["#00D9FF", "#8B00FF"],
      ["#EF00CF", "#0066FF"],
      ["#8B00FF", "#00D9FF"],
      ["#0066FF", "#EF00CF"],
    ],
    burstAccentColor: "#FFC900",
    intensity: 1.25,
    trailWidth: 3,
    linger: 1.4,
    glow: 1.15,
    hotspot: 0.78,
    followSpeed: 0.6,
    grain: 0.015,
    clickBurst: true,
    enabled: !root.classList.contains("intro-active"),
  });

  if (!cursor) {
    layer.remove();
    return;
  }

  // Enable fluid cursor once any first-visit intro video finishes
  if (root.classList.contains("intro-active")) {
    const observer = new MutationObserver(() => {
      if (!root.classList.contains("intro-active")) {
        cursor.setEnabled(true);
        observer.disconnect();
      }
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroAndIntroExperience();
  initSiteGlowCursor();
  initMagneticControls();
  initScrollProgressAndNav();
  initScrollReveals();
  initMobileMenu();
  initInteractiveWorkCards();
  initSkillsWorkbench();
  initFounderTabs();
  initServicesAndContactForm();
});

function initProofOfWork(): void {
  const section = document.querySelector<HTMLElement>('.proof');
  const stage = document.querySelector<HTMLElement>('[data-proof-stage]');
  const panel = document.querySelector<HTMLElement>('[data-proof-panel]');
  const intro = document.querySelector<HTMLElement>('[data-proof-intro]');
  const exhibition = document.querySelector<HTMLElement>('[data-proof-exhibition]');
  if (!section || !stage || !panel || !intro || !exhibition) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
    section.classList.add('is-cinematic');
    const projects = gsap.utils.toArray<HTMLElement>('[data-project]', section);
    const frames = gsap.utils.toArray<HTMLElement>('.proof-frame', section);
    const backgrounds = gsap.utils.toArray<HTMLElement>('.proof-background', section);
    const buttons = gsap.utils.toArray<HTMLButtonElement>('[data-proof-nav]', section);
    const counter = section.querySelector<HTMLElement>('[data-proof-count]');
    const progress = section.querySelector<HTMLElement>('[data-proof-progress]');
    let active = -1;
    const setActive = (index: number): void => {
      if (index === active) return;
      active = index;
      section.classList.toggle('proof--light-background', projects[index]?.id === 'project-rajamanickam-chit-fund');
      projects.forEach((project, i) => { project.classList.toggle('is-active', i === index); project.setAttribute('aria-hidden', String(i !== index)); project.inert = i !== index; gsap.to(project, {opacity: i === index ? 1 : 0, y: i === index ? 0 : 12, duration: .3, overwrite: true}); });
      buttons.forEach((button, i) => {button.classList.toggle('is-active', i === index); if(i === index) button.setAttribute('aria-current','true'); else button.removeAttribute('aria-current');});
      if(counter) counter.textContent = String(index + 1).padStart(2, '0');
      if(progress) progress.style.width = `${(index + 1) / projects.length * 100}%`;
    };
    const trigger = ScrollTrigger.create({trigger: stage, start:'top top', end: () => `+=${window.innerHeight * (projects.length + 0.8)}`, pin:true, scrub:true, onUpdate(self) {
      const opening = Math.min(1, self.progress / .18);
      gsap.set(panel, {width:`${43 + 57 * opening}vw`, height:`${52 + 48 * opening}vh`, borderRadius:18 * (1-opening)});
      gsap.set(intro, {opacity:Math.max(0, 1-opening*1.35), visibility: opening > .75 ? 'hidden':'visible'});
      gsap.set(exhibition, {opacity:Math.max(0, (opening-.3)/.7)});
      const position = Math.max(0, Math.min(projects.length-1, (self.progress-.18)/.72*(projects.length-1)));
      const index = Math.min(projects.length-1, Math.round(position));
      setActive(index);
      frames.forEach((frame,i) => {const delta=i-position; gsap.set(frame,{xPercent:0,yPercent:-50,y:delta*window.innerHeight*.37,scale:Math.max(.33,1-Math.abs(delta)*.67),opacity:Math.max(0,1-Math.abs(delta)*.38),zIndex:Math.round(10-Math.abs(delta)*5),filter:`brightness(${Math.max(.48,1-Math.abs(delta)*.5)})`});});
      backgrounds.forEach((bg,i) => gsap.set(bg,{opacity:Math.max(0,1-Math.abs(i-position))}));
    }});
    buttons.forEach((button,i) => {button.onclick = () => { const ratio=.18 + (i/(projects.length-1))*.72; window.scrollTo({top:trigger.start+(trigger.end-trigger.start)*ratio,behavior:'smooth'}); };});
    setActive(0); ScrollTrigger.refresh();
    return () => {trigger.kill(); section.classList.remove('is-cinematic', 'proof--light-background'); projects.forEach(p=>{p.inert=false;p.removeAttribute('aria-hidden');p.classList.remove('is-active');gsap.set(p,{clearProps:'all'});}); buttons.forEach(b=>{b.onclick=null;}); gsap.set([panel,intro,exhibition,...frames,...backgrounds],{clearProps:'all'});};
  });
}
document.addEventListener('DOMContentLoaded', initProofOfWork);
