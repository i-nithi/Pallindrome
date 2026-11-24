"""Portfolio data and configuration for Nithyashri's personal website."""

from __future__ import annotations

from dataclasses import dataclass, field


@dataclass(frozen=True)
class Project:
    index: str
    slug: str
    name: str
    category: str
    tagline: str
    description: str
    contribution: str
    technologies: tuple[str, ...]
    architecture_notes: tuple[str, ...]
    github_url: str
    live_url: str | None = None
    accent_label: str = "CASE STUDY"


@dataclass(frozen=True)
class Skill:
    name: str
    category: str
    focus: str
    summary: str
    projects: tuple[str, ...]


@dataclass(frozen=True)
class FreelanceTrack:
    code: str
    title: str
    description: str
    deliverables: tuple[str, ...]


SITE_CONFIG = {
    "owner_name": "Nithyashri",
    "monogram": "N.",
    "role_title": "Developer · Web Systems & AI/ML",
    "availability": "Available for freelance & collaborations",
    "github_url": "https://github.com/i-nithi",
    "pallindrome_founder_github": "https://github.com/antoniusjairus4",
    # Add your direct email and LinkedIn URL here when ready to publish:
    "contact_email": "",
    "linkedin_url": "",
    "intro_statement": (
        "This is my personal developer portfolio — a space where I showcase the "
        "projects I build, the technologies I explore, and the ideas I bring to life."
    ),
    "awwwards_statement": (
        "This is the portfolio website I am preparing to submit to the Awwwards competition."
    ),
}


PROJECTS: tuple[Project, ...] = (
    Project(
        index="01",
        slug="lostmatch-ai",
        name="LostMatch AI",
        category="AI / Semantic Matching",
        tagline="AI-powered lost-and-found matching platform.",
        description=(
            "A smart recovery platform that connects lost-item reports with found submissions "
            "using semantic similarity rather than brittle exact-keyword search."
        ),
        contribution=(
            "Designed the end-to-end matching workflow, structured item metadata pipelines, "
            "and built the full-stack interface connecting reporting with ranked match candidates."
        ),
        technologies=("Python", "Machine Learning", "NLP", "SQL", "HTML", "CSS", "JavaScript"),
        architecture_notes=(
            "Normalizes unstructured item descriptions into comparable semantic representations.",
            "Ranks potential lost-and-found pairs by contextual overlap, location, and timing.",
            "Reduces manual searching through structured intake and clear match confidence views.",
        ),
        github_url="https://github.com/i-nithi",
        live_url=None,
        accent_label="NLP MATCH ENGINE",
    ),
    Project(
        index="02",
        slug="unigigs",
        name="UniGigs",
        category="Campus Marketplace",
        tagline="Student campus gig platform.",
        description=(
            "A dedicated platform helping university students post, discover, and coordinate "
            "short-term technical, creative, and campus tasks within a trusted student network."
        ),
        contribution=(
            "Architected the core gig discovery flow, role-focused listing views, and responsive "
            "frontend components tailored for quick student onboarding."
        ),
        technologies=("React", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"),
        architecture_notes=(
            "Separates task posting and applicant discovery into focused, low-friction flows.",
            "Organizes gigs by skill category, timeline, and campus availability.",
            "Built responsive layouts tuned for mobile-first student access on the move.",
        ),
        github_url="https://github.com/i-nithi",
        live_url=None,
        accent_label="TWO-SIDED PLATFORM",
    ),
    Project(
        index="03",
        slug="elevatr",
        name="ElevaTr",
        category="AI Career Tooling",
        tagline="AI-powered resume builder.",
        description=(
            "An intelligent resume authoring workspace that helps applicants structure experience, "
            "refine phrasing, and align technical profiles for modern screening pipelines."
        ),
        contribution=(
            "Built the interactive document editor, NLP-assisted content refinement flow, "
            "and clean print-ready layout system."
        ),
        technologies=("Python", "NLP", "Machine Learning", "HTML", "CSS", "JavaScript"),
        architecture_notes=(
            "Breaks resume authoring into modular sections with real-time structural feedback.",
            "Applies NLP analysis to highlight skill coverage and clarity gaps.",
            "Separates content schema from presentation for consistent typography export.",
        ),
        github_url="https://github.com/i-nithi",
        live_url=None,
        accent_label="DOCUMENT INTELLIGENCE",
    ),
    Project(
        index="04",
        slug="paceline",
        name="Paceline",
        category="Frontend Craft",
        tagline="E-commerce website recreation.",
        description=(
            "A faithful, detail-driven recreation of a modern performance e-commerce storefront, "
            "focused on editorial product presentation, responsive rhythm, and interactive browsing."
        ),
        contribution=(
            "Implemented the complete responsive layout system, custom product card transitions, "
            "and interactive storefront state from scratch."
        ),
        technologies=("HTML", "CSS", "JavaScript", "TypeScript", "React"),
        architecture_notes=(
            "Constructed an editorial grid system balancing product imagery with clean specs.",
            "Implemented smooth hover micro-interactions and responsive navigation drawers.",
            "Optimized asset loading and layout stability across desktop and mobile breakpoints.",
        ),
        github_url="https://github.com/i-nithi",
        live_url=None,
        accent_label="STOREFRONT PRECISION",
    ),
)


SKILLS: tuple[Skill, ...] = (
    Skill(
        name="Python",
        category="Backend & AI",
        focus="Primary Backend & ML Pipelines",
        summary=(
            "Used as my primary server-side and data language for APIs, validation, "
            "text processing, and intelligent matching workflows."
        ),
        projects=("lostmatch-ai", "elevatr"),
    ),
    Skill(
        name="HTML",
        category="Frontend Core",
        focus="Semantic Structure & Accessibility",
        summary=(
            "Hand-crafted semantic markup with clean landmark hierarchy, accessible forms, "
            "and SEO-ready document structure."
        ),
        projects=("lostmatch-ai", "unigigs", "elevatr", "paceline"),
    ),
    Skill(
        name="CSS",
        category="Frontend Core",
        focus="Editorial Layouts & Custom Motion",
        summary=(
            "Custom design systems built from scratch using grid, fluid typography, CSS variables, "
            "and GPU-friendly transitions without template bloat."
        ),
        projects=("lostmatch-ai", "unigigs", "elevatr", "paceline"),
    ),
    Skill(
        name="JavaScript",
        category="Frontend Core",
        focus="DOM State & Async Flows",
        summary=(
            "Interactive UI behavior, dynamic filtering, client-side validation, "
            "and responsive state updates across web applications."
        ),
        projects=("lostmatch-ai", "unigigs", "elevatr", "paceline"),
    ),
    Skill(
        name="TypeScript",
        category="Frontend Core",
        focus="Typed Interactive Architecture",
        summary=(
            "Strictly typed frontend modules for predictable UI state, custom cursor mechanics, "
            "scroll observers, and form API contracts."
        ),
        projects=("unigigs", "paceline"),
    ),
    Skill(
        name="React",
        category="UI Systems",
        focus="Component-Driven Interfaces",
        summary=(
            "Modular component architecture for multi-view campus marketplaces and interactive "
            "e-commerce browsing experiences."
        ),
        projects=("unigigs", "paceline"),
    ),
    Skill(
        name="Machine Learning",
        category="AI & Data",
        focus="Applied Similarity & Scoring",
        summary=(
            "Building practical ML workflows that turn raw user inputs into ranked recommendations "
            "and structured insights."
        ),
        projects=("lostmatch-ai", "elevatr"),
    ),
    Skill(
        name="NLP",
        category="AI & Data",
        focus="Text Understanding & Structuring",
        summary=(
            "Processing descriptions, resumes, and natural-language queries for semantic matching "
            "and guided writing feedback."
        ),
        projects=("lostmatch-ai", "elevatr"),
    ),
    Skill(
        name="SQL",
        category="AI & Data",
        focus="Relational Schema & Queries",
        summary=(
            "Designing normalized relational schemas for listings, user submissions, "
            "match records, and persistent backend storage."
        ),
        projects=("lostmatch-ai", "unigigs"),
    ),
    Skill(
        name="Git",
        category="Tooling",
        focus="Version Control & Branching",
        summary=(
            "Structured commit history, iterative feature branching, and disciplined change tracking "
            "across solo and collaborative builds."
        ),
        projects=("lostmatch-ai", "unigigs", "elevatr", "paceline"),
    ),
    Skill(
        name="GitHub",
        category="Tooling",
        focus="Open Code & Collaboration",
        summary=(
            "Repository workflows, issue tracking, and collaborative development across projects "
            "and community initiatives."
        ),
        projects=("lostmatch-ai", "unigigs", "elevatr", "paceline"),
    ),
)


FREELANCE_TRACKS: tuple[FreelanceTrack, ...] = (
    FreelanceTrack(
        code="01",
        title="Website development",
        description=(
            "Custom-coded personal, editorial, and product websites built from scratch for speed, "
            "visual originality, and responsive clarity."
        ),
        deliverables=("Semantic HTML/CSS", "Responsive design", "Performance tuning"),
    ),
    FreelanceTrack(
        code="02",
        title="Frontend development",
        description=(
            "Interactive user interfaces in TypeScript, JavaScript, or React with thoughtful "
            "motion and clean component structure."
        ),
        deliverables=("Custom UI architecture", "Interactive states", "Accessibility"),
    ),
    FreelanceTrack(
        code="03",
        title="Python development",
        description=(
            "Reliable Python backends, REST APIs, data validation, and automation tools built with "
            "clean, maintainable architecture."
        ),
        deliverables=("FastAPI / Web APIs", "SQL persistence", "Clean validation"),
    ),
    FreelanceTrack(
        code="04",
        title="AI/ML-based projects",
        description=(
            "Practical applications integrating NLP, semantic matching, or machine learning pipelines "
            "directly into usable web products."
        ),
        deliverables=("NLP workflows", "Semantic search", "Model integration"),
    ),
    FreelanceTrack(
        code="05",
        title="Custom web applications",
        description=(
            "End-to-end prototypes and full-stack web apps turning early product concepts into "
            "working, testable software."
        ),
        deliverables=("Frontend + Python API", "Database schema", "Iterative MVP"),
    ),
    FreelanceTrack(
        code="06",
        title="Creative technical collaborations",
        description=(
            "Experimental builds, design-forward web experiences, and joint engineering projects "
            "with founders, designers, and fellow builders."
        ),
        deliverables=("Creative coding", "Design engineering", "Rapid prototyping"),
    ),
)
