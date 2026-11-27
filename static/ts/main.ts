/* ==========================================================================
   PALINDROME LABS — TypeScript Interaction & Motion Layer
   ========================================================================== */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initHeroSculpture, type HeroSculptureController } from "./heroSculpture";

gsap.registerPlugin(ScrollTrigger);

interface ContactPayload {
  name: string;
  email: string;
  project_type: string;
  description: string;
}

const PROJECT_DISPLAY_NAMES: Record<string, string> = {
  "rajamanickam-chit-fund": "Rajamanickam Chit Funds",
  "zsi-yogesh": "ZSI Portfolio",
  "kaiforge": "KaiForge",
  "palindrome": "Palindrome",
  "neuroshield": "NeuroShield",
  "mfalmion": "Mfalmion",
};

const prefersReducedMotion = (): boolean =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let heroSculptureController: HeroSculptureController | null = null;

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
  const headlineLines = Array.from(document.querySelectorAll<HTMLElement>(".hero__line-inner"));
  const staggerEls = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-stagger]"));

  const reduced = prefersReducedMotion();

  // Initialize WebGL sculpture immediately so it is ready before the video ends
  let sculpture: HeroSculptureController | null = null;
  if (hero && heroCanvas) {
    try {
      sculpture = initHeroSculpture(heroCanvas, hero, {
        reducedMotion: reduced,
        onFallback: () => hero.classList.add("is-webgl-fallback"),
      });
    } catch {
      hero.classList.add("is-webgl-fallback");
    }
  } else if (hero) {
    hero.classList.add("is-webgl-fallback");
  }
  heroSculptureController = sculpture;

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

    if (fromVideo && splash && sculpture) {
      // The model starts where the contained 1280×720 video's last frame ends.
      // Crossfade in place first, then move the same model into the hero.
      const vignette = hero?.querySelector<HTMLElement>('.hero__vignette');
      if (vignette) gsap.set(vignette, { opacity: 0 });
      sculpture.setHandoff(0);
      sculpture.setReveal(1);
      sculpture.renderOnce();
      const handoffState = { value: 0 };
      tl.to(splash, {
        opacity: 0, duration: .45, ease: "sine.inOut",
        onComplete: () => {
          video?.pause();
          root.classList.remove("intro-active");
          splash.style.opacity = "";
        },
      }, 0);
      tl.to(handoffState, {
        value: 1, duration: 1.45, ease: "power2.inOut",
        onUpdate: () => sculpture?.setHandoff(handoffState.value),
      }, .36);
      if (vignette) tl.to(vignette, { opacity: 1, duration: 1.45, ease: "power2.inOut", clearProps: "opacity" }, .36);
    } else {
      root.classList.remove("intro-active");
      tl.to(revealState, {
        value: 1, duration: 1.05, ease: "power3.out",
        onUpdate: () => sculpture?.setReveal(revealState.value),
      }, 0);
    }

    const textStart = fromVideo ? 0.4 : 0.04;

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

  // First-visit video handoff vs immediate return-visit entrance
  if (!reduced && root.classList.contains("intro-active") && splash && video) {
    let finished = false;
    let safetyTimer = 0;

    const completeVideo = async (playedToEnd: boolean): Promise<void> => {
      if (finished) return;
      finished = true;
      if (safetyTimer) window.clearTimeout(safetyTimer);
      if (!playedToEnd || !sculpture) { playHeroEntrance(false); return; }
      // The video remains on its last frame while an unusually slow model load
      // finishes; the bounded wait still lets the page recover from failure.
      const ready = await Promise.race([
        sculpture.ready,
        new Promise<boolean>(resolve => window.setTimeout(() => resolve(false), 2000)),
      ]);
      playHeroEntrance(ready);
    };

    const src = video.dataset.src;
    if (src && !video.getAttribute("src")) {
      video.src = src;
    }
    video.muted = true;
    video.playsInline = true;

    video.addEventListener("ended", () => { void completeVideo(true); }, { once: true });
    video.addEventListener("error", () => { void completeVideo(false); }, { once: true });
    video.addEventListener("loadedmetadata", () => {
      const durationMs =
        Number.isFinite(video.duration) && video.duration > 0
          ? Math.ceil(video.duration * 1000) + 1500
          : 8000;
      if (safetyTimer) window.clearTimeout(safetyTimer);
      safetyTimer = window.setTimeout(() => { void completeVideo(false); }, durationMs);
    });

    safetyTimer = window.setTimeout(() => { void completeVideo(false); }, 8000);

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        void completeVideo(false);
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

    const subject = encodeURIComponent(`Project inquiry: ${payload.project_type}`);
    const body = encodeURIComponent(`Name: ${payload.name}\nEmail: ${payload.email}\nService: ${payload.project_type}\n\nProject brief:\n${payload.description}`);
    window.location.href = `mailto:antoniusjairusofficial@gmail.com?subject=${subject}&body=${body}`;
    showBanner("success", "Your email app should open with a draft. Please send it to complete your inquiry.");
  });
}

function initSiteGlowCursor(): void {
  const layer = document.getElementById("glow-cursor-layer");
  if (!layer || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
  layer.replaceChildren();
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.innerHTML = '<span class="custom-cursor__ring"></span><span class="custom-cursor__dot"></span>';
  layer.appendChild(cursor);
  const root = document.documentElement;
  const move = (event: PointerEvent): void => {
    if (event.pointerType === "touch") return;
    const target = event.target instanceof Element ? event.target : null;
    const editing = !!target?.closest('input, textarea, select, [contenteditable="true"]');
    const visible = !editing && !root.classList.contains("intro-active");
    root.classList.toggle("has-custom-cursor", visible);
    cursor.classList.toggle("is-visible", visible);
    cursor.classList.toggle("is-link", !!target?.closest('a, button, [role="button"], label'));
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  };
  window.addEventListener("pointermove", move, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => {
    root.classList.remove("has-custom-cursor");
    cursor.classList.remove("is-visible");
  });
  window.addEventListener("blur", () => {
    root.classList.remove("has-custom-cursor");
    cursor.classList.remove("is-visible");
  });
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
  const exhibition = document.querySelector<HTMLElement>('[data-proof-exhibition]');
  const label = document.querySelector<HTMLElement>('[data-proof-label]');
  if (!section || !stage || !panel || !exhibition || !label) return;
  const mm = gsap.matchMedia();
  mm.add('(max-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
    const context = gsap.context(() => {
      gsap.fromTo(label, { y: 18, clipPath: 'inset(0 0 100% 0)' }, {
        y: 0, clipPath: 'inset(0 0 0% 0)', ease: 'none',
        scrollTrigger: { trigger: stage, start: 'top 92%', end: 'top 65%', scrub: true },
      });
      section.querySelectorAll<HTMLElement>('.proof-mobile-image').forEach((image) => {
        gsap.fromTo(image, { y: 24, opacity: .75 }, {
          y: 0, opacity: 1, ease: 'none',
          scrollTrigger: { trigger: image, start: 'top 95%', end: 'top 55%', scrub: true },
        });
      });
    }, section);
    return () => context.revert();
  });
  mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
    const hero = document.querySelector<HTMLElement>('#hero');
    if (!hero) return;
    section.classList.add('is-cinematic');
    document.body.classList.add('has-spatial-work');
    const heroContent = hero.querySelector<HTMLElement>('.hero__content');
    const heroStage = hero.querySelector<HTMLElement>('.hero__stage');
    const heroScroll = hero.querySelector<HTMLElement>('.hero__scroll');
    const projects = gsap.utils.toArray<HTMLElement>('[data-project]', section);
    const frames = gsap.utils.toArray<HTMLElement>('.proof-frame', section);
    const backgrounds = gsap.utils.toArray<HTMLElement>('.proof-background', section);
    const backgroundLayer = section.querySelector<HTMLElement>('.proof-backgrounds');
    const film = section.querySelector<HTMLElement>('.proof-film');
    const firstLeft = projects[0]?.querySelector<HTMLElement>('.proof-project__left');
    const firstRight = projects[0]?.querySelector<HTMLElement>('.proof-project__right');
    const bottom = section.querySelector<HTMLElement>('.proof-bottom');
    const buttons = gsap.utils.toArray<HTMLButtonElement>('[data-proof-nav]', section);
    const counter = section.querySelector<HTMLElement>('[data-proof-count]');
    const progress = section.querySelector<HTMLElement>('[data-proof-progress]');
    let active = -1;
    const setActive = (index: number): void => {
      if (index === active) return;
      active = index;
      section.classList.toggle('proof--light-background', projects[index]?.id === 'project-rajamanickam-chit-fund');
      projects.forEach((project, i) => { project.classList.toggle('is-active', i === index); project.setAttribute('aria-hidden', String(i !== index)); project.inert = i !== index; gsap.set(project, {opacity: i === index ? 1 : 0, y: i === index ? 0 : 12}); });
      buttons.forEach((button, i) => {button.classList.toggle('is-active', i === index); if(i === index) button.setAttribute('aria-current','true'); else button.removeAttribute('aria-current');});
      if(counter) counter.textContent = String(index + 1).padStart(2, '0');
      if(progress) progress.style.width = `${(index + 1) / projects.length * 100}%`;
    };
    // The project frame is centered before its first paint. The master timeline
    // reveals the existing showcase as one full-width surface rises over the hero.
    frames.forEach((frame, i) => gsap.set(frame, {xPercent:0, yPercent:-50, y:i * window.innerHeight * .37, scale:i===0?1:.33, opacity:i===0?1:0}));
    backgrounds.forEach((bg, i) => gsap.set(bg, {opacity:i===0?1:0}));
    setActive(0);
    gsap.set(section, {pointerEvents:'none'});
    const transition = gsap.timeline({
      defaults: {ease:'none'},
      scrollTrigger: {
        trigger: hero, start:'top top', end:()=>`+=${window.innerHeight}`,
        pin:true, pinSpacing:true, scrub:true, anticipatePin:1,
        refreshPriority:2, invalidateOnRefresh:true,
        onUpdate(self) {
          // The solid work surface, rather than opacity, hides the outgoing scene.
          heroSculptureController?.setScrollProgress(self.progress * .16);
          section.style.pointerEvents = self.progress > .98 ? 'auto' : 'none';
        },
      },
    });
    if (heroContent) transition.to(heroContent, {scale:.9, y:-20, transformOrigin:'35% 50%', duration:.72}, 0);
    if (heroStage) transition.to(heroStage, {scale:.86, y:-36, transformOrigin:'72% 50%', duration:.78}, 0);
    if (heroScroll) transition.to(heroScroll, {opacity:0, duration:.15}, 0);
    transition.fromTo(panel,
      {rotationX:5, scaleY:.985, transformPerspective:1600, transformOrigin:'50% 0%'},
      {rotationX:0, scaleY:1, duration:.43}, .25);
    if (backgroundLayer) transition.fromTo(backgroundLayer, {opacity:0}, {opacity:1, duration:.55}, .2);
    if (film) transition.fromTo(film,
      {opacity:0, y:48, scale:.96, filter:'blur(5px)'},
      {opacity:1, y:0, scale:1, filter:'blur(0px)', duration:.22}, .59);
    transition.fromTo(label,
      {clipPath:'inset(0 0 100% 0)', y:18},
      {clipPath:'inset(0 0 0% 0)', y:0, duration:.2}, .61);
    if (firstLeft) transition.fromTo(firstLeft,
      {clipPath:'inset(0 0 100% 0)', y:28},
      {clipPath:'inset(0 0 0% 0)', y:0, duration:.22}, .7);
    if (firstRight) transition.fromTo(firstRight,
      {clipPath:'inset(0 0 100% 0)', y:30},
      {clipPath:'inset(0 0 0% 0)', y:0, duration:.2}, .76);
    if (bottom) transition.fromTo(bottom,
      {clipPath:'inset(0 0 100% 0)', y:18},
      {clipPath:'inset(0 0 0% 0)', y:0, duration:.12}, .88);

    // Project navigation begins only after the architectural entry completes.
    const trigger = ScrollTrigger.create({trigger: stage, start:'top top', end: () => `+=${window.innerHeight * (projects.length - 1)}`, pin:true, scrub:true,
      onEnter: () => transition.progress(1),
      onEnterBack: () => transition.progress(1),
      onUpdate(self) {
      const position = self.progress * (projects.length-1);
      const index = Math.min(projects.length-1, Math.round(position));
      setActive(index);
      frames.forEach((frame,i) => {const delta=i-position; gsap.set(frame,{xPercent:0,yPercent:-50,y:delta*window.innerHeight*.37,scale:Math.max(.33,1-Math.abs(delta)*.67),opacity:Math.max(0,1-Math.abs(delta)*1.1),zIndex:Math.round(10-Math.abs(delta)*5),filter:`brightness(${Math.max(.48,1-Math.abs(delta)*.5)})`});});
      backgrounds.forEach((bg,i) => gsap.set(bg,{opacity:Math.max(0,1-Math.abs(i-position))}));
    }});
    buttons.forEach((button,i) => {button.onclick = () => { window.scrollTo({top:trigger.start+(trigger.end-trigger.start)*i/(projects.length-1),behavior:'smooth'}); };});
    let resizeRefresh = 0;
    const refreshSpatialLayout = (): void => {
      window.clearTimeout(resizeRefresh);
      resizeRefresh = window.setTimeout(() => ScrollTrigger.refresh(), 160);
    };
    window.addEventListener('resize', refreshSpatialLayout);
    ScrollTrigger.refresh();
    return () => {window.removeEventListener('resize', refreshSpatialLayout); window.clearTimeout(resizeRefresh); trigger.kill(); transition.scrollTrigger?.kill(); transition.kill(); heroSculptureController?.setScrollProgress(0); section.classList.remove('is-cinematic', 'proof--light-background'); document.body.classList.remove('has-spatial-work'); projects.forEach(p=>{p.inert=false;p.removeAttribute('aria-hidden');p.classList.remove('is-active');gsap.set(p,{clearProps:'all'});}); buttons.forEach(b=>{b.onclick=null;}); gsap.set([section,panel,exhibition,label,backgroundLayer,film,firstLeft,firstRight,bottom,...frames,...backgrounds,heroContent,heroStage,heroScroll].filter(Boolean),{clearProps:'all'});};
  });
}
document.addEventListener('DOMContentLoaded', initProofOfWork);

function initEngineeringLab(): void {
  const lab = document.querySelector<HTMLElement>('[data-lab]');
  const viewport = lab?.querySelector<HTMLElement>('[data-lab-window]');
  const track = lab?.querySelector<HTMLElement>('[data-lab-track]');
  const progress = lab?.querySelector<HTMLElement>('[data-lab-progress]');
  if (!lab || !viewport || !track || !progress) return;

  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
    const secondRoom = lab.querySelectorAll<HTMLElement>('.lab-panel--dsa .lab-panel__copy, .lab-panel--morena .lab-panel__copy');
    const scenes = lab.querySelectorAll<HTMLElement>('.lab-panel--mfalmion .lab-scene, .lab-panel--dsa .lab-scene, .lab-panel--morena .lab-scene');
    const introWords = lab.querySelectorAll<HTMLElement>('.lab-panel--intro .lab-intro__word');
    const indicator = lab.querySelector<HTMLElement>('.lab-progress > span:first-child');
    const timeline = gsap.timeline({
      defaults: {ease: 'none'},
      scrollTrigger: {
        trigger: viewport,
        start: 'top top',
        end: () => `+=${window.innerWidth}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: -2,
        onUpdate(self) {
          progress.style.transform = `scaleX(${1 + self.progress})`;
          if (indicator) indicator.textContent = self.progress < .5 ? '01 / 02' : '02 / 02';
        },
      },
    });
    timeline.to(track, {x: () => -window.innerWidth, duration: 1}, 0);
    timeline.fromTo(scenes, {x: -24}, {x: 24, duration: 1}, 0);
    if (introWords[0]) timeline.to(introWords[0], {x: -18, duration: 1}, 0);
    if (introWords[1]) timeline.to(introWords[1], {x: 20, scaleX: 1.025, duration: 1}, 0);
    if (introWords[2]) timeline.to(introWords[2], {x: 8, duration: 1}, 0);
    timeline.fromTo(secondRoom, {y: 32, clipPath: 'inset(0 0 100% 0)'}, {
      y: 0, clipPath: 'inset(0 0 0% 0)', duration: .28, stagger: .08,
    }, .46);

    const links = Array.from(lab.querySelectorAll<HTMLAnchorElement>('.lab-panel__copy a'));
    const magnetic: Array<{link: HTMLAnchorElement; move: (event: PointerEvent) => void; leave: () => void}> = [];
    if (window.matchMedia('(pointer: fine)').matches) {
      links.forEach(link => {
        const move = (event: PointerEvent): void => {
          const bounds = link.getBoundingClientRect();
          const x = (event.clientX - bounds.left - bounds.width / 2) * .12;
          const y = (event.clientY - bounds.top - bounds.height / 2) * .18;
          gsap.to(link, {x, y, duration: .3, ease: 'power2.out', overwrite: true});
        };
        const leave = (): void => { gsap.to(link, {x: 0, y: 0, duration: .4, ease: 'power2.out', overwrite: true}); };
        link.addEventListener('pointermove', move);
        link.addEventListener('pointerleave', leave);
        magnetic.push({link, move, leave});
      });
    }
    return () => {
      magnetic.forEach(({link, move, leave}) => {link.removeEventListener('pointermove', move); link.removeEventListener('pointerleave', leave);});
      timeline.scrollTrigger?.kill();
      timeline.kill();
      gsap.set([track, ...scenes, ...secondRoom, ...introWords, ...links], {clearProps: 'transform,clipPath'});
      progress.style.removeProperty('transform');
      if (indicator) indicator.textContent = '01 / 02';
    };
  });
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const intro = lab.querySelector<HTMLElement>('.lab-panel--intro');
    if (!intro) return;
    const words = intro.querySelectorAll<HTMLElement>('.lab-intro__word');
    const supporting = intro.querySelectorAll<HTMLElement>('.lab-intro__eyebrow, .lab-intro__paragraph, .lab-intro__explore');
    const dot = intro.querySelector<HTMLElement>('.lab-intro__dot');
    const entrance = gsap.timeline({
      scrollTrigger: {trigger: intro, start: 'top 78%', toggleActions: 'play none none reverse'},
    });
    entrance.fromTo(words, {yPercent: 110}, {yPercent: 0, duration: .9, stagger: .12, ease: 'power3.out'}, 0);
    entrance.fromTo(supporting, {y: 16, opacity: 0}, {y: 0, opacity: 1, duration: .7, stagger: .07, ease: 'power2.out'}, .16);
    if (dot) entrance.fromTo(dot, {scale: .3, y: -18}, {scale: 1, y: 0, duration: .7, ease: 'elastic.out(1,.55)'}, .45);
    return () => {entrance.scrollTrigger?.kill(); entrance.kill(); gsap.set([...words, ...supporting, ...(dot ? [dot] : [])], {clearProps: 'transform,opacity'});};
  });
}
document.addEventListener('DOMContentLoaded', initEngineeringLab);
