"""Company data, service packages, proof-of-work cards, and founder profile for Palindrome Labs."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class ServicePackage:
    code: str
    slug: str
    title: str
    price_from: str
    tagline: str
    features: tuple[str, ...]
    featured: bool = False


@dataclass(frozen=True)
class WorkItem:
    index: str
    slug: str
    name: str
    group: str
    category: str
    tagline: str
    description: str
    deliverable: str
    technologies: tuple[str, ...]
    highlights: tuple[str, ...]
    github_url: str
    live_url: str | None = None
    disclaimer: str | None = None


@dataclass(frozen=True)
class Capability:
    name: str
    category: str
    focus: str
    summary: str
    projects: tuple[str, ...]


@dataclass(frozen=True)
class FounderHonor:
    slug: str
    title: str
    metric: str
    subtitle: str
    details: tuple[str, ...]


COMPANY_CONFIG = {
    "brand_name": "Palindrome Labs",
    "brand_short": "palindrome labs",
    "headline": "Build Your Digital Presence.",
    "subheadline": "Custom websites, full-stack web applications, and Android apps engineered from scratch.",
    "location": "Coimbatore, India",
    "availability": "Accepting new client projects",
    "founder_name": "Antonius Jairus R",
    "founder_role": "Founder of Palindrome Labs",
    "founder_specialty": "Web / Website Developer · Full-Stack & Android Engineer",
    "email": "antoniusjairusofficial@gmail.com",
    "phone_display": "9443385650",
    "phone_e164": "+919443385650",
    "whatsapp_url": "https://wa.me/919443385650",
    "github_url": "https://github.com/antoniusjairus4",
    "linkedin_url": "https://www.linkedin.com/in/antoniusjairus4",
    "x_url": "https://x.com/antoniusjairus4",
    "instagram_url": "https://www.instagram.com/antoniusjairus4",
    "website_url": "https://antoniusjairus.in",
    "colophon_lead": (
        "Palindrome Labs is a freelance software studio building high-craft websites, "
        "scalable web applications, and custom Android products for businesses, startups, and researchers."
    ),
    "colophon_sub": (
        "Founded by Antonius Jairus R · Engineered from scratch in Python, HTML, CSS & TypeScript."
    ),
}


SERVICE_PACKAGES: tuple[ServicePackage, ...] = (
    ServicePackage(
        code="01",
        slug="websites-portfolios",
        title="Websites And Portfolios",
        price_from="₹6,000",
        tagline="Fast, custom-coded sites built for visibility and conversion.",
        features=(
            "Custom responsive design (mobile + desktop)",
            "Contact / enquiry form",
            "Basic SEO setup",
            "Sitemap & robots.txt",
            "Google Search Console setup",
            "Google Analytics setup",
            "Deployment",
        ),
    ),
    ServicePackage(
        code="02",
        slug="web-applications",
        title="Web Applications",
        price_from="₹12,000",
        tagline="Full-stack software tailored to real business workflows and scale.",
        featured=True,
        features=(
            "Custom frontend & backend",
            "Database (pay as you scale)",
            "Authentication & authorization",
            "CRUD functionality",
            "API integration",
            "Responsive UI/UX",
            "Basic SEO (for public pages)",
            "Google Search Console setup",
            "Deployment",
        ),
    ),
    ServicePackage(
        code="03",
        slug="android-development",
        title="Android Development",
        price_from="₹15,000",
        tagline="End-to-end mobile applications ready for Play Store launch.",
        features=(
            "Custom Android app development",
            "Responsive UI for different screen sizes",
            "Backend & API integration",
            "Database integration",
            "User authentication & authorization",
            "CRUD functionality",
            "Push notifications",
            "Third-party SDK & service integration",
            "Testing & bug fixing",
            "App deployment / Play Store publishing",
        ),
    ),
)


ADDITIONAL_CHARGES: tuple[str, ...] = (
    "Domain, hosting & server costs (if applicable)",
    "Database / cloud service charges",
    "Third-party APIs, SDKs & paid integrations",
    "Google Play Console registration and other applicable platform fees",
)


PROOF_OF_WORK: tuple[WorkItem, ...] = (
    WorkItem(
        index="01",
        slug="rajamanickam-chit-fund",
        name="Rajamanickam Chit Funds",
        group="Client & Web Apps",
        category="Custom Business Software",
        tagline="Full-stack financial ledger & chit-fund management dashboard.",
        description=(
            "Custom operational software built to digitize chit-fund cycles, member accounts, "
            "and recurring payment tracking in a responsive web interface."
        ),
        deliverable="End-to-end TypeScript dashboard & cloud deployment",
        technologies=("TypeScript", "React", "Node.js", "MongoDB", "Tailwind CSS"),
        highlights=(
            "Replaces manual ledger tracking with structured member & cycle records.",
            "Designed clean administrative views for everyday financial operations.",
            "Deployed live for real-world operational use.",
        ),
        github_url="https://github.com/antoniusjairus4/Venkatesan",
        live_url="https://venkatesan-nine.vercel.app",
    ),
    WorkItem(
        index="02",
        slug="zsi-yogesh",
        name="Dr. J.S. Yogesh Kumar — ZSI",
        group="Client & Web Apps",
        category="Bespoke Scientific Portfolio",
        tagline="Interactive portfolio for an E-Grade Scientist at the Zoological Survey of India.",
        description=(
            "A tailored digital showcase presenting marine research publications, academic "
            "milestones, and field work with custom editorial typography."
        ),
        deliverable="Custom responsive website, SEO structure & live deployment",
        technologies=("TypeScript", "React", "HTML", "CSS"),
        highlights=(
            "Structured around scientific citations and institutional credibility.",
            "Custom responsive layout tuned across desktop and mobile viewports.",
            "Shipped directly to production for an active researcher.",
        ),
        github_url="https://github.com/antoniusjairus4/Yogesh",
        live_url="https://yogesh-teal.vercel.app",
    ),
    WorkItem(
        index="03",
        slug="kaiforge",
        name="KaiForge",
        group="Products & Research",
        category="Sports Analytics Platform",
        tagline="Cross-platform sports analytics spanning web and mobile applications.",
        description=(
            "A unified sports performance and management platform designed to capture metrics, "
            "visualize match insights, and streamline athlete tracking."
        ),
        deliverable="Full-stack web & companion app architecture",
        technologies=("TypeScript", "React", "Node.js", "Supabase", "HTML", "CSS"),
        highlights=(
            "Connects structured athlete telemetry with clean analytical dashboards.",
            "Built for responsive use across field and desktop environments.",
            "Live production web experience.",
        ),
        github_url="https://github.com/antoniusjairus4/kaiforge",
        live_url="https://kaiforge.antoniusjairus.in",
    ),
    WorkItem(
        index="04",
        slug="palindrome",
        name="Palindrome",
        group="Products & Research",
        category="Consumer Financial Intelligence",
        tagline="Clarifying everyday spending through item-level context and recurring patterns.",
        description=(
            "A consumer fintech product direction exploring how fragmented transaction totals "
            "become actionable through item context and purchase relationships."
        ),
        deliverable="Flagship product prototype & spatial web experience",
        technologies=("TypeScript", "React", "Python", "HTML", "CSS"),
        highlights=(
            "Focuses on item-level context rather than generic expense categories.",
            "Explores recurring pattern detection across everyday spending.",
            "Serves as the flagship product lab behind Palindrome Labs.",
        ),
        github_url="https://github.com/antoniusjairus4",
        live_url="https://palindrome.antoniusjairus.in",
        disclaimer=(
            "Conceptual product direction — does not promise automatic categorization, "
            "guaranteed savings, or financial advice."
        ),
    ),
    WorkItem(
        index="05",
        slug="neuroshield",
        name="NeuroShield",
        group="Products & Research",
        category="AI / ML Research",
        tagline="Experimental machine-learning workflow on ADNI neuroimaging datasets.",
        description=(
            "An ongoing six-person ML research project training predictive models on ADNI "
            "Alzheimer's datasets and generating comparative evaluation evidence."
        ),
        deliverable="ML model training, evaluation graphs & research interface",
        technologies=("Python", "Machine Learning", "ADNI Datasets", "HTML", "CSS", "JavaScript"),
        highlights=(
            "Structured around an iterative Observe → Hypothesis → Experiment → Evidence loop.",
            "Produces reproducible graphs and model comparisons for team review.",
            "Published interactive research presentation.",
        ),
        github_url="https://github.com/antoniusjairus4/neuro-shield",
        live_url="https://antoniusjairus4.github.io/neuro-shield/",
        disclaimer=(
            "Experimental research only — not a clinical diagnostic tool, medical device, "
            "or replacement for professional medical judgment."
        ),
    ),
    WorkItem(
        index="06",
        slug="mfalmion",
        name="Mfalmion",
        group="Systems",
        category="Rust Systems Engineering",
        tagline="High-speed chess position analyser built in Rust.",
        description=(
            "A performance-focused chess analysis engine written in Rust for fast board state "
            "evaluation and move-sequence exploration."
        ),
        deliverable="Rust analysis engine & algorithmic move evaluation",
        technologies=("Rust", "DSA", "Systems Architecture", "Git"),
        highlights=(
            "Leverages Rust memory safety and zero-cost abstractions for speed.",
            "Pairs algorithmic search with competitive chess calculation.",
            "Open-source codebase maintained on GitHub.",
        ),
        github_url="https://github.com/antoniusjairus4/Mfalmion",
        live_url=None,
    ),
)


CAPABILITIES: tuple[Capability, ...] = (
    Capability(
        name="Websites & SEO Engineering",
        category="Web & Frontend",
        focus="Responsive Design, Search Console & Analytics",
        summary=(
            "Custom HTML5, CSS3, TypeScript, and React websites engineered with clean sitemaps, "
            "robots.txt, Google Search Console, and Analytics integration."
        ),
        projects=("zsi-yogesh", "palindrome"),
    ),
    Capability(
        name="TypeScript & React",
        category="Web & Frontend",
        focus="Interactive Frontend Architecture",
        summary=(
            "Typed UI components, custom animations, and responsive interfaces built for client "
            "dashboards and interactive product launches."
        ),
        projects=("rajamanickam-chit-fund", "kaiforge", "zsi-yogesh", "palindrome"),
    ),
    Capability(
        name="Python & FastAPI",
        category="Backend & Data",
        focus="APIs, Validation & ML Workflows",
        summary=(
            "Clean Python backends with strict input validation, SQL persistence, automation, "
            "and machine-learning pipelines."
        ),
        projects=("palindrome", "neuroshield"),
    ),
    Capability(
        name="Node.js, Express & MERN",
        category="Backend & Data",
        focus="Authentication, CRUD & API Integrations",
        summary=(
            "Full-stack JavaScript/TypeScript services supporting role-based access, REST APIs, "
            "and pay-as-you-scale databases like MongoDB & Supabase."
        ),
        projects=("rajamanickam-chit-fund", "kaiforge"),
    ),
    Capability(
        name="Android Development",
        category="Mobile & Systems",
        focus="Custom Apps & Play Store Delivery",
        summary=(
            "Responsive Android applications with push notifications, backend API sync, auth, "
            "third-party SDK integration, and release management."
        ),
        projects=("kaiforge",),
    ),
    Capability(
        name="Rust, C++ & Java",
        category="Mobile & Systems",
        focus="Performance-Critical Computing & DSA",
        summary=(
            "Low-overhead systems tooling like the Mfalmion chess analyser alongside strong "
            "Data Structures & Algorithms foundations."
        ),
        projects=("mfalmion",),
    ),
    Capability(
        name="Machine Learning & Security",
        category="AI & Security",
        focus="ADNI Research, Scraping & Bug Bounty",
        summary=(
            "Experimental ML modeling, network security fundamentals, Kali Linux workflows, "
            "and CDAC All-India BOSS-OS Bug Bounty competition experience."
        ),
        projects=("neuroshield",),
    ),
)


FOUNDER_HONORS: tuple[FounderHonor, ...] = (
    FounderHonor(
        slug="table-tennis",
        title="Table Tennis",
        metric="2× State Champion",
        subtitle="Velocity · Spin · Trajectory",
        details=(
            "State 2× RDS Winner & 2× State Champion",
            "District 3× Junior & Youth Champion · 1× Men's Champion",
            "All India Youth Championship winner, representing Tamil Nadu in Goa",
        ),
    ),
    FounderHonor(
        slug="karate",
        title="Karate",
        metric="1st Dan Black Belt",
        subtitle="Impact · Precision · Stillness",
        details=(
            "State 4× Gold Medalist in Kata, Kumite & Team Kata",
            "Nationals 2× Silver Medalist in Kata · 1× Bronze Medalist in Kumite",
            "District 3× Champion across Kata & Kumite",
        ),
    ),
    FounderHonor(
        slug="chess",
        title="Chess",
        metric="2198 Peak Bullet",
        subtitle="Calculation · Pressure · Decision",
        details=(
            "Bullet Peak: 2198 · Blitz Peak: 2010 · Rapid Peak: 1984",
            "Directly inspired the Mfalmion Rust chess analyser",
            "Decision-making discipline under strict time constraints",
        ),
    ),
    FounderHonor(
        slug="speaking",
        title="Public Speaking & Events",
        metric="15+ Speeches · 15,000+ Audience",
        subtitle="Clarity · Presence · Amplification",
        details=(
            "Addressed 15,000+ people across 15+ speeches and conducted 7 events",
            "Shared stages alongside Sid Ahmed & Sivakarthikeyan",
            "Coimbatore Book Festival 3rd Place · Campofez 2nd Place · Trinity Music 3 Grades",
        ),
    ),
)
