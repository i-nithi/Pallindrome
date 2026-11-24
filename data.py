"""Portfolio data and configuration for Antonius Jairus R."""

from __future__ import annotations

from dataclasses import dataclass


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
    disclaimer: str | None = None


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


@dataclass(frozen=True)
class AchievementDiscipline:
    code: str
    slug: str
    title: str
    metric: str
    subtitle: str
    highlights: tuple[str, ...]


SITE_CONFIG = {
    "owner_name": "Antonius Jairus",
    "full_name": "Antonius Jairus R",
    "handle": "antoniusjairus4",
    "location": "Coimbatore, India",
    "role_title": "Founder of Palindrome · Full-Stack Developer & Freelancer",
    "availability": "Available for freelance & startup builds",
    "github_url": "https://github.com/antoniusjairus4",
    "linkedin_url": "https://www.linkedin.com/in/antoniusjairus4",
    "x_url": "https://x.com/antoniusjairus4",
    "instagram_url": "https://www.instagram.com/antoniusjairus4",
    "website_url": "https://antoniusjairus.in",
    "contact_email": "antoniusjairusofficial@gmail.com",
    "intro_statement": (
        "This is the personal developer portfolio of Antonius Jairus — engineering student, "
        "freelancer, and founder of Palindrome, showcasing production builds, experimental "
        "research, and custom full-stack software."
    ),
    "awwwards_statement": (
        "Built from scratch in Python, HTML, CSS, and TypeScript — engineered for interactive "
        "craft, technical clarity, and Awwwards competition ambition."
    ),
}


PROJECTS: tuple[Project, ...] = (
    Project(
        index="01",
        slug="palindrome",
        name="Palindrome",
        category="Consumer Fintech · Founder",
        tagline="Consumer financial-intelligence web application.",
        description=(
            "A consumer financial-intelligence web application designed to make everyday spending "
            "easier to understand. Explores how fragmented totals become clearer through item-level "
            "context, recurring patterns, and relationships between ordinary purchases."
        ),
        contribution=(
            "Founder & lead builder — defining the product architecture, financial-context model, "
            "and spatial interactive web direction, alongside Palindrome's startup tech-team studio."
        ),
        technologies=("TypeScript", "React", "Python", "HTML", "CSS", "MERN Stack"),
        architecture_notes=(
            "Structures ordinary purchase histories around item-level context and recurring patterns.",
            "Separates conceptual insight exploration from automated banking claims or financial advice.",
            "Doubles as the engineering collective identity for custom startup product builds.",
        ),
        github_url="https://github.com/antoniusjairus4",
        live_url="https://palindrome.antoniusjairus.in",
        accent_label="FOUNDER PRODUCT",
        disclaimer=(
            "Conceptual financial-intelligence product direction — does not promise automatic "
            "categorization, guaranteed savings, or financial advice."
        ),
    ),
    Project(
        index="02",
        slug="kaiforge",
        name="KaiForge",
        category="Sports Analytics · Web & Mobile",
        tagline="Sports analytics and performance platform.",
        description=(
            "A cross-platform sports analytics and management system spanning web and mobile "
            "experiences, built to surface structured performance metrics and clean visual dashboards."
        ),
        contribution=(
            "Architected the TypeScript frontend system, interactive metric layouts, and unified "
            "product experience across web and mobile workflows."
        ),
        technologies=("TypeScript", "React", "HTML", "CSS", "Node.js", "Supabase"),
        architecture_notes=(
            "Models athletic metrics and session tracking into readable visual summaries.",
            "Designed responsive interfaces built for athletes, coaches, and sports operations.",
            "Maintains consistent component structure across web and companion app views.",
        ),
        github_url="https://github.com/antoniusjairus4/kaiforge",
        live_url="https://kaiforge.antoniusjairus.in",
        accent_label="SPORTS ANALYTICS",
    ),
    Project(
        index="03",
        slug="neuroshield",
        name="NeuroShield",
        category="AI / ML Research",
        tagline="Machine-learning research exploring Alzheimer's neuroimaging data.",
        description=(
            "An ongoing six-person ML research initiative predicting and analyzing patterns in "
            "Alzheimer's-related neuroimaging using ADNI (Alzheimer's Disease Neuroimaging Initiative) "
            "datasets through an iterative observe–test–revise workflow."
        ),
        contribution=(
            "Trains machine-learning models on ADNI datasets and produces experimental evaluations, "
            "comparative graphs, and empirical evidence for team analysis."
        ),
        technologies=("Python", "Machine Learning", "ADNI Datasets", "HTML", "CSS", "JavaScript"),
        architecture_notes=(
            "Follows a disciplined Observe → Hypothesis → Experiment → Evidence research loop.",
            "Tracks competing model runs while explicitly documenting uncertainty and open gaps.",
            "Built strictly for experimental research, not clinical diagnosis or medical advice.",
        ),
        github_url="https://github.com/antoniusjairus4/neuro-shield",
        live_url="https://antoniusjairus4.github.io/neuro-shield/",
        accent_label="ML RESEARCH",
        disclaimer=(
            "Experimental research only — not a clinical diagnostic tool, medical device, "
            "or replacement for professional medical judgment."
        ),
    ),
    Project(
        index="04",
        slug="rajamanickam-chit-fund",
        name="Rajamanickam Chit Funds",
        category="Custom Client Software",
        tagline="Full-stack management dashboard for financial chit-fund operations.",
        description=(
            "Custom operational software engineered to digitize and manage chit-fund ledgers, "
            "member tracking, and recurring financial cycles in a clean web dashboard."
        ),
        contribution=(
            "Designed and built the full-stack TypeScript application, operational data views, "
            "and production deployment on Vercel."
        ),
        technologies=("TypeScript", "React", "Node.js", "MongoDB", "Tailwind CSS"),
        architecture_notes=(
            "Replaces error-prone manual spreadsheets with structured member and cycle records.",
            "Provides clear status views tailored for real-world financial administration.",
            "Deployed as a fast, responsive TypeScript web application.",
        ),
        github_url="https://github.com/antoniusjairus4/Venkatesan",
        live_url="https://venkatesan-nine.vercel.app",
        accent_label="CLIENT SYSTEM",
    ),
    Project(
        index="05",
        slug="zsi-yogesh",
        name="Dr. J.S. Yogesh Kumar — ZSI",
        category="Bespoke Scientific Portfolio",
        tagline="Interactive portfolio for an E-Grade Scientist at the Zoological Survey of India.",
        description=(
            "A custom-designed digital research showcase highlighting marine biology publications, "
            "field expeditions, and academic milestones for a senior ZSI scientist."
        ),
        contribution=(
            "Handled complete custom UI engineering, interactive presentation, and TypeScript "
            "implementation from concept to live deployment."
        ),
        technologies=("TypeScript", "React", "HTML", "CSS"),
        architecture_notes=(
            "Tailored visual hierarchy specifically for scientific citations and research records.",
            "Balances authoritative editorial reading with interactive exploration.",
            "Built and shipped directly for an active scientific researcher.",
        ),
        github_url="https://github.com/antoniusjairus4/Yogesh",
        live_url="https://yogesh-teal.vercel.app",
        accent_label="CLIENT PORTFOLIO",
    ),
    Project(
        index="06",
        slug="mfalmion",
        name="Mfalmion",
        category="Systems & Chess Engine",
        tagline="Rust-based chess analyser.",
        description=(
            "A performance-oriented chess position analyser written in Rust, reflecting deep "
            "interest in tactical calculation, move-tree evaluation, and low-level systems speed."
        ),
        contribution=(
            "Built the Rust analysis codebase exploring fast board state evaluation and "
            "structured move-sequence inspection."
        ),
        technologies=("Rust", "DSA", "Systems Programming", "Git"),
        architecture_notes=(
            "Uses Rust for predictable memory safety and high-throughput position evaluation.",
            "Bridges competitive chess intuition (2198 Bullet peak) with systems engineering.",
            "Openly tracked on GitHub alongside ongoing algorithmic improvements.",
        ),
        github_url="https://github.com/antoniusjairus4/Mfalmion",
        live_url=None,
        accent_label="RUST ENGINE",
    ),
)


SKILLS: tuple[Skill, ...] = (
    Skill(
        name="TypeScript",
        category="Web & Frontend",
        focus="Typed Interactive Systems",
        summary=(
            "Primary frontend engineering language used across KaiForge, Rajamanickam Chit Funds, "
            "and bespoke client portfolios."
        ),
        projects=("palindrome", "kaiforge", "rajamanickam-chit-fund", "zsi-yogesh"),
    ),
    Skill(
        name="Python",
        category="Programming & AI",
        focus="ML Pipelines, Backend & Research",
        summary=(
            "Used for ADNI machine-learning model training in NeuroShield, SIH problem-solving "
            "(PerceptXx), and clean server-side APIs."
        ),
        projects=("neuroshield", "palindrome"),
    ),
    Skill(
        name="Rust",
        category="Programming & AI",
        focus="Performance-Critical Analysis",
        summary=(
            "Applied in Mfalmion for fast chess position analysis where low-overhead execution "
            "and memory safety matter."
        ),
        projects=("mfalmion",),
    ),
    Skill(
        name="React / MERN Stack",
        category="Web & Frontend",
        focus="Full-Stack Web Applications",
        summary=(
            "Building component-driven interfaces backed by MongoDB, Express.js, and Node.js "
            "for startups and client dashboards."
        ),
        projects=("palindrome", "kaiforge", "rajamanickam-chit-fund", "zsi-yogesh"),
    ),
    Skill(
        name="HTML & CSS",
        category="Web & Frontend",
        focus="Custom Layouts & Interactive 3D Web",
        summary=(
            "Crafting bespoke editorial layouts, Tailwind CSS & Bootstrap interfaces, and "
            "high-craft responsive portfolios."
        ),
        projects=("palindrome", "kaiforge", "neuroshield", "zsi-yogesh"),
    ),
    Skill(
        name="JavaScript",
        category="Web & Frontend",
        focus="DOM Mechanics & CLI Tooling",
        summary=(
            "Interactive web behavior, browser experiences, and CLI utilities like the Morena "
            "web scraping tool."
        ),
        projects=("neuroshield", "palindrome"),
    ),
    Skill(
        name="Node.js & Express.js",
        category="Backend & Data",
        focus="APIs & Application Logic",
        summary=(
            "Server-side JavaScript services, REST endpoints, and full-stack product backends."
        ),
        projects=("kaiforge", "rajamanickam-chit-fund"),
    ),
    Skill(
        name="Supabase & MongoDB",
        category="Backend & Data",
        focus="Cloud Postgres & Document Stores",
        summary=(
            "Structured data persistence, auth workflows, and operational records for production "
            "client and analytics apps."
        ),
        projects=("kaiforge", "rajamanickam-chit-fund"),
    ),
    Skill(
        name="C / C++ / Java / DSA",
        category="Programming & AI",
        focus="Algorithms & Core Foundations",
        summary=(
            "Strong algorithmic grounding in Data Structures & Design Techniques alongside C, C++, "
            "and Java engineering."
        ),
        projects=("mfalmion",),
    ),
    Skill(
        name="Machine Learning",
        category="Programming & AI",
        focus="ADNI Research & Experimental Modeling",
        summary=(
            "Training and evaluating predictive models on neuroimaging datasets and generating "
            "empirical evidence graphs."
        ),
        projects=("neuroshield",),
    ),
    Skill(
        name="Security & Web Scraping",
        category="Security & Tooling",
        focus="Network Security & BOSS-OS Bug Bounty",
        summary=(
            "Network security fundamentals, Kali Linux workflows, Morena scraping CLI, and "
            "CDAC All-India BOSS-OS Bug Bounty participation."
        ),
        projects=("neuroshield",),
    ),
    Skill(
        name="Git, GitHub & Linux",
        category="Security & Tooling",
        focus="Version Control & Open Engineering",
        summary=(
            "Disciplined repository workflows across 14+ public repos, Linux/Kali environments, "
            "and local LLM tooling with Ollama."
        ),
        projects=("palindrome", "kaiforge", "neuroshield", "mfalmion"),
    ),
)


DISCIPLINES: tuple[AchievementDiscipline, ...] = (
    AchievementDiscipline(
        code="01 / 04",
        slug="table-tennis",
        title="Table Tennis",
        metric="2× State Champion",
        subtitle="Velocity · Spin · Trajectory",
        highlights=(
            "State 2× RDS Winner & 2× State Champion",
            "District 3× Junior & Youth Champion · 1× Men's Champion",
            "All India Youth Championship winner, representing Tamil Nadu in Goa",
        ),
    ),
    AchievementDiscipline(
        code="02 / 04",
        slug="karate",
        title="Karate",
        metric="1st Dan Black Belt",
        subtitle="Impact · Precision · Stillness",
        highlights=(
            "State 4× Gold Medalist in Kata, Kumite & Team Kata",
            "Nationals 2× Silver Medalist in Kata · 1× Bronze Medalist in Kumite",
            "District 3× Champion across Kata & Kumite disciplines",
        ),
    ),
    AchievementDiscipline(
        code="03 / 04",
        slug="chess",
        title="Chess",
        metric="2198 Peak Bullet",
        subtitle="Calculation · Pressure · Decision",
        highlights=(
            "Bullet Peak Rating: 2198 · Blitz Peak Rating: 2010 · Rapid Peak Rating: 1984",
            "Applies tactical calculation directly into Mfalmion (Rust chess analyser)",
            "Structured evaluation under time pressure",
        ),
    ),
    AchievementDiscipline(
        code="04 / 04",
        slug="public-speaking",
        title="Public Speaking & Events",
        metric="15+ Speeches · 15,000+ Audience",
        subtitle="Clarity · Presence · Amplification",
        highlights=(
            "Addressed 15,000+ people across 15+ speeches and conducted 7 events",
            "Spoke on stages alongside Sid Ahmed & Sivakarthikeyan",
            "Coimbatore Book Festival 3rd Place · Campofez 2nd Place · Trinity Music 3 Grades",
        ),
    ),
)


FREELANCE_TRACKS: tuple[FreelanceTrack, ...] = (
    FreelanceTrack(
        code="01",
        title="Interactive & 3D Websites",
        description=(
            "Custom-engineered portfolios, product launches, and interactive web experiences "
            "designed to stand out rather than look templated."
        ),
        deliverables=("Custom HTML/CSS/TS", "Interactive motion", "Responsive craft"),
    ),
    FreelanceTrack(
        code="02",
        title="Full-Stack Web Applications",
        description=(
            "Production web platforms built with TypeScript, React, Node.js/MERN, Python, and "
            "Supabase or MongoDB."
        ),
        deliverables=("Frontend + API", "Database architecture", "Production deployment"),
    ),
    FreelanceTrack(
        code="03",
        title="Startup Tech Team (Palindrome)",
        description=(
            "Your startup needs a tech team? Collaborate with Palindrome to take an idea from "
            "architecture to shipped software."
        ),
        deliverables=("MVP engineering", "Product scoping", "Iterative delivery"),
    ),
    FreelanceTrack(
        code="04",
        title="Custom Business Dashboards",
        description=(
            "Tailored operational tools for real-world workflows — like financial ledgers, "
            "analytics consoles, and management portals."
        ),
        deliverables=("Role-based UI", "Clean data tables", "Workflow automation"),
    ),
    FreelanceTrack(
        code="05",
        title="AI/ML & Python Systems",
        description=(
            "Applied machine learning pipelines, dataset experimentation, Python backends, "
            "and automated web scraping utilities."
        ),
        deliverables=("Python / ML models", "Data pipelines", "Evaluation tooling"),
    ),
    FreelanceTrack(
        code="06",
        title="Android & Cross-Platform Apps",
        description=(
            "Mobile and companion applications designed alongside web dashboards for unified "
            "user experiences."
        ),
        deliverables=("Android builds", "API integration", "Responsive UI"),
    ),
)
