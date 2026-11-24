/* ==========================================================================
   NITHYASHRI PORTFOLIO — TypeScript Interaction Layer
   ========================================================================== */

                          
               
                
                       
                      
 

                                   
                               
               
 

                              
                  
              
                   
                                              
 

const PROJECT_DISPLAY_NAMES                         = {
  "lostmatch-ai": "LostMatch AI",
  "unigigs": "UniGigs",
  "elevatr": "ElevaTr",
  "paceline": "Paceline",
};

const prefersReducedMotion = ()          =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initHeroCanvas()       {
  const canvas = document.getElementById("hero-canvas")                            ;
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

  const resize = ()       => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = ()       => {
    pointerX += (targetX - pointerX) * 0.06;
    pointerY += (targetY - pointerY) * 0.06;

    ctx.clearRect(0, 0, width, height);

    const spacing = width < 700 ? 48 : 68;
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);
    const px = pointerX * width;
    const py = pointerY * height;

    // Subtle editorial coordinate hairlines
    ctx.strokeStyle = "rgba(20, 20, 19, 0.055)";
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

    // Symmetrical palindrome axis crosshairs reacting to pointer proximity
    for (let c = 1; c < cols; c++) {
      for (let r = 1; r < rows; r++) {
        const x = c * spacing;
        const y = r * spacing;
        const dist = Math.hypot(x - px, y - py);
        const influence = Math.max(0, 1 - dist / 220);

        if (influence > 0.05) {
          const arm = 3 + influence * 7;
          ctx.strokeStyle = `rgba(230, 59, 46, ${(influence * 0.55).toFixed(3)})`;
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

  const onMove = (event              )       => {
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

function initCustomCursor()       {
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

  const loop = ()       => {
    x += (tx - x) * 0.22;
    y += (ty - y) * 0.22;
    reticle.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    window.requestAnimationFrame(loop);
  };

  window.addEventListener(
    "pointermove",
    (e              ) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!active) {
        active = true;
        reticle.classList.add("is-visible");
      }

      const target = (e.target                      )?.closest             ("[data-cursor]");
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

function initScrollProgressAndNav()       {
  const progressBar = document.getElementById("scroll-progress");
  const navLinks = Array.from(document.querySelectorAll                   ("[data-nav-link]"));
  const sections = Array.from(document.querySelectorAll             ("main section[id]"));

  const updateProgress = ()       => {
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

function initScrollReveals()       {
  const targets = Array.from(document.querySelectorAll             ("[data-reveal]"));
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
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  for (const el of targets) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add("is-revealed");
    } else {
      observer.observe(el);
    }
  }
}

function initMobileMenu()       {
  const toggle = document.getElementById("menu-toggle")                            ;
  const drawer = document.getElementById("mobile-drawer");
  if (!toggle || !drawer) return;

  const setOpen = (open         )       => {
    toggle.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
    drawer.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  const links = drawer.querySelectorAll                   ("[data-drawer-link]");
  for (const link of links) {
    link.addEventListener("click", () => setOpen(false));
  }

  window.addEventListener("keydown", (event               ) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initProjectInteractions()       {
  const archButtons = document.querySelectorAll                   ("[data-arch-toggle]");
  for (const btn of archButtons) {
    btn.addEventListener("click", () => {
      const panelId = btn.getAttribute("aria-controls");
      if (!panelId) return;
      const panel = document.getElementById(panelId);
      if (!panel) return;

      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
      const indicator = btn.querySelector("span:last-child");
      if (indicator) indicator.textContent = expanded ? "+" : "−";
    });
  }

  const demoTriggers = document.querySelectorAll             ("[data-project-inquiry]");
  const typeSelect = document.getElementById("contact-type")                            ;
  const descriptionInput = document.getElementById("contact-description")                              ;

  for (const trigger of demoTriggers) {
    trigger.addEventListener("click", () => {
      const projectName = trigger.dataset.projectInquiry;
      if (!projectName || !descriptionInput) return;
      if (typeSelect) typeSelect.value = "Custom web applications";
      if (!descriptionInput.value.trim()) {
        descriptionInput.value = `Hi Nithyashri, I would love to see a live walkthrough of ${projectName} and discuss a project idea.`;
        descriptionInput.dispatchEvent(new Event("input"));
      }
      window.setTimeout(() => descriptionInput.focus(), 350);
    });
  }
}

function initSkillsWorkbench()       {
  const filterButtons = Array.from(document.querySelectorAll                   ("[data-skill-filter]"));
  const skillButtons = Array.from(document.querySelectorAll                   ("[data-skill-item]"));

  const inspectorCat = document.getElementById("inspector-category");
  const inspectorName = document.getElementById("inspector-name");
  const inspectorFocus = document.getElementById("inspector-focus");
  const inspectorSummary = document.getElementById("inspector-summary");
  const inspectorProjects = document.getElementById("inspector-projects");

  if (!skillButtons.length) return;

  const selectSkill = (button                   )       => {
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

      let firstVisible                           = null;
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

function initFreelanceAndContactForm()       {
  const form = document.getElementById("contact-form")                          ;
  const nameInput = document.getElementById("contact-name")                           ;
  const emailInput = document.getElementById("contact-email")                           ;
  const typeSelect = document.getElementById("contact-type")                            ;
  const descInput = document.getElementById("contact-description")                              ;
  const descCount = document.getElementById("description-count");
  const submitBtn = document.getElementById("contact-submit")                            ;
  const statusBanner = document.getElementById("form-status");

  // Freelance card pre-fill
  const trackLinks = document.querySelectorAll             ("[data-select-track]");
  for (const link of trackLinks) {
    link.addEventListener("click", () => {
      const track = link.dataset.selectTrack;
      if (track && typeSelect) {
        typeSelect.value = track;
      }
      if (nameInput) {
        window.setTimeout(() => nameInput.focus(), 350);
      }
    });
  }

  // Contact channel focus helpers
  const focusButtons = document.querySelectorAll             ("[data-focus-form]");
  for (const btn of focusButtons) {
    btn.addEventListener("click", () => {
      nameInput?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
      window.setTimeout(() => nameInput?.focus(), 250);
    });
  }

  if (!form || !nameInput || !emailInput || !typeSelect || !descInput || !submitBtn || !statusBanner) {
    return;
  }

  const updateCounter = ()       => {
    if (descCount) {
      descCount.textContent = `${descInput.value.length} / 2500`;
    }
  };
  updateCounter();
  descInput.addEventListener("input", updateCounter);

  const setFieldError = (field        , message        )       => {
    const errEl = document.getElementById(`error-${field}`);
    if (errEl) errEl.textContent = message;
  };

  const clearErrors = ()       => {
    for (const field of ["name", "email", "project_type", "description"]) {
      setFieldError(field, "");
    }
    statusBanner.hidden = true;
    statusBanner.className = "form-status";
    statusBanner.textContent = "";
  };

  const showBanner = (kind                     , text        )       => {
    statusBanner.hidden = false;
    statusBanner.className = `form-status form-status--${kind}`;
    statusBanner.textContent = text;
  };

  const validateClient = (payload                )          => {
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
      setFieldError("project_type", "Please choose a project type.");
      valid = false;
    }
    if (payload.description.length < 15) {
      setFieldError("description", "Please describe your project in at least 15 characters.");
      valid = false;
    }
    return valid;
  };

  form.addEventListener("submit", async (event             ) => {
    event.preventDefault();
    clearErrors();

    const payload                 = {
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

      const data = (await response.json())                      ;

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
        data.message || "Inquiry received. Thank you for reaching out!",
      );
    } catch {
      showBanner("error", "Network error while contacting the Python backend. Please try again.");
    } finally {
      submitBtn.disabled = false;
      if (labelSpan) labelSpan.textContent = "Send Inquiry";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroCanvas();
  initCustomCursor();
  initScrollProgressAndNav();
  initScrollReveals();
  initMobileMenu();
  initProjectInteractions();
  initSkillsWorkbench();
  initFreelanceAndContactForm();
});
