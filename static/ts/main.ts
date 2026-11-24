/* ==========================================================================
   PALINDROME LABS — TypeScript Interaction Layer
   ========================================================================== */

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

function initIntroSplash(): void {
  const root = document.documentElement;
  const splash = document.getElementById("intro-splash");
  const video = document.getElementById("intro-video") as HTMLVideoElement | null;

  if (!root.classList.contains("intro-active") || !splash || !video) {
    root.classList.remove("intro-active");
    return;
  }

  // Persist first-visit flag immediately so refreshes do not replay the intro.
  markIntroSeen();

  let dismissed = false;
  let safetyTimer = 0;

  const finishIntro = (): void => {
    if (dismissed) return;
    dismissed = true;
    if (safetyTimer) window.clearTimeout(safetyTimer);

    splash.classList.add("is-leaving");
    window.setTimeout(() => {
      video.pause();
      root.classList.remove("intro-active");
      splash.classList.remove("is-leaving");
    }, 650);
  };

  const src = video.dataset.src;
  if (src && !video.getAttribute("src")) {
    video.src = src;
  }
  video.muted = true;
  video.playsInline = true;

  video.addEventListener("ended", finishIntro, { once: true });
  video.addEventListener("error", finishIntro, { once: true });
  video.addEventListener("loadedmetadata", () => {
    const durationMs =
      Number.isFinite(video.duration) && video.duration > 0
        ? Math.ceil(video.duration * 1000) + 1500
        : 8000;
    if (safetyTimer) window.clearTimeout(safetyTimer);
    safetyTimer = window.setTimeout(finishIntro, durationMs);
  });

  safetyTimer = window.setTimeout(finishIntro, 8000);

  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      finishIntro();
    });
  }
}

function initHeroCanvas(): void {
  const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
  if (!canvas || prefersReducedMotion()) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let pointerX = 0.5;
  let pointerY = 0.5;
  let targetX = 0.5;
  let targetY = 0.5;
  let rafId = 0;

  const resize = (): void => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (): void => {
    pointerX += (targetX - pointerX) * 0.06;
    pointerY += (targetY - pointerY) * 0.06;

    ctx.clearRect(0, 0, width, height);

    const spacing = width < 700 ? 48 : 68;
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);
    const px = pointerX * width;
    const py = pointerY * height;

    // Subtle rose coordinate hairlines
    ctx.strokeStyle = "rgba(247, 167, 193, 0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let c = 1; c < cols; c++) {
      const x = c * spacing;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let r = 1; r < rows; r++) {
      const y = r * spacing;
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Pointer-reactive berry & rose crosshairs
    for (let c = 1; c < cols; c++) {
      for (let r = 1; r < rows; r++) {
        const x = c * spacing;
        const y = r * spacing;
        const dist = Math.hypot(x - px, y - py);
        const influence = Math.max(0, 1 - dist / 240);

        if (influence > 0.05) {
          const arm = 3 + influence * 7;
          ctx.strokeStyle = `rgba(227, 74, 131, ${(influence * 0.72).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(x - arm, y);
          ctx.lineTo(x + arm, y);
          ctx.moveTo(x, y - arm);
          ctx.lineTo(x, y + arm);
          ctx.stroke();
        }
      }
    }

    rafId = window.requestAnimationFrame(draw);
  };

  const onMove = (event: PointerEvent): void => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    targetX = (event.clientX - rect.left) / rect.width;
    targetY = (event.clientY - rect.top) / rect.height;
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", onMove, { passive: true });
  rafId = window.requestAnimationFrame(draw);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    } else if (!document.hidden && !rafId) {
      rafId = window.requestAnimationFrame(draw);
    }
  });
}

function initCustomCursor(): void {
  if (prefersReducedMotion()) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const reticle = document.getElementById("cursor-reticle");
  const label = document.getElementById("cursor-label");
  if (!reticle || !label) return;

  let x = -100;
  let y = -100;
  let tx = -100;
  let ty = -100;
  let active = false;

  const loop = (): void => {
    x += (tx - x) * 0.22;
    y += (ty - y) * 0.22;
    reticle.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    window.requestAnimationFrame(loop);
  };

  window.addEventListener(
    "pointermove",
    (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!active) {
        active = true;
        reticle.classList.add("is-visible");
      }

      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      if (target) {
        label.textContent = target.dataset.cursor || "VIEW";
        reticle.classList.add("is-active");
      } else {
        reticle.classList.remove("is-active");
      }
    },
    { passive: true },
  );

  document.addEventListener("pointerleave", () => {
    active = false;
    reticle.classList.remove("is-visible", "is-active");
  });

  window.requestAnimationFrame(loop);
}

function initScrollProgressAndNav(): void {
  const progressBar = document.getElementById("scroll-progress");
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));

  const updateProgress = (): void => {
    if (!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    progressBar.style.transform = `scaleX(${ratio.toFixed(4)})`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

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

document.addEventListener("DOMContentLoaded", () => {
  initIntroSplash();
  initHeroCanvas();
  initCustomCursor();
  initScrollProgressAndNav();
  initScrollReveals();
  initMobileMenu();
  initInteractiveWorkCards();
  initSkillsWorkbench();
  initFounderTabs();
  initServicesAndContactForm();
});
