"""Primary Python backend for Antonius Jairus R's portfolio and freelance studio."""

from __future__ import annotations

import re
import sqlite3
from datetime import datetime, timezone
from pathlib import Path
from typing import Literal

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel, Field, field_validator

from data import DISCIPLINES, FREELANCE_TRACKS, PROJECTS, SITE_CONFIG, SKILLS

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "inquiries.db"

ALLOWED_PROJECT_TYPES = tuple(track.title for track in FREELANCE_TRACKS) + (
    "General inquiry / Collaboration",
)
EMAIL_PATTERN = re.compile(r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")


def init_db() -> None:
    """Create the inquiries table if it does not already exist."""
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS inquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                project_type TEXT NOT NULL,
                description TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        conn.commit()


class ContactInquiry(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: str = Field(..., min_length=5, max_length=160)
    project_type: str = Field(..., min_length=2, max_length=100)
    description: str = Field(..., min_length=15, max_length=2500)

    @field_validator("name", "project_type", "description", mode="before")
    @classmethod
    def strip_text(cls, value: object) -> str:
        if not isinstance(value, str):
            raise ValueError("Must be a valid text value.")
        cleaned = value.strip()
        if not cleaned:
            raise ValueError("This field cannot be blank.")
        return cleaned

    @field_validator("email", mode="before")
    @classmethod
    def validate_email(cls, value: object) -> str:
        if not isinstance(value, str):
            raise ValueError("Please enter a valid email address.")
        cleaned = value.strip().lower()
        if not EMAIL_PATTERN.match(cleaned):
            raise ValueError("Please enter a valid email address (e.g. name@domain.com).")
        return cleaned

    @field_validator("project_type")
    @classmethod
    def validate_project_type(cls, value: str) -> str:
        if value not in ALLOWED_PROJECT_TYPES:
            raise ValueError("Please choose one of the listed project types.")
        return value


app = FastAPI(
    title="Antonius Jairus — Developer Portfolio & Palindrome Studio",
    description="Custom Python-powered portfolio and inquiry backend for Antonius Jairus R.",
    version="2.0.0",
)

app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/", response_class=HTMLResponse)
async def home(request: Request) -> HTMLResponse:
    """Render the main portfolio experience."""
    skill_categories = []
    for skill in SKILLS:
        if skill.category not in skill_categories:
            skill_categories.append(skill.category)

    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={
            "site": SITE_CONFIG,
            "projects": PROJECTS,
            "skills": SKILLS,
            "skill_categories": skill_categories,
            "disciplines": DISCIPLINES,
            "freelance_tracks": FREELANCE_TRACKS,
            "project_types": ALLOWED_PROJECT_TYPES,
        },
    )


@app.post("/api/contact")
async def submit_contact(inquiry: ContactInquiry) -> JSONResponse:
    """Validate and persist a project inquiry in SQLite."""
    init_db()
    created_at = datetime.now(timezone.utc).isoformat()
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.execute(
            """
            INSERT INTO inquiries (name, email, project_type, description, created_at)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                inquiry.name,
                inquiry.email,
                inquiry.project_type,
                inquiry.description,
                created_at,
            ),
        )
        conn.commit()
        inquiry_id = cursor.lastrowid

    return JSONResponse(
        status_code=201,
        content={
            "status": "received",
            "id": inquiry_id,
            "message": (
                f"Thank you, {inquiry.name}. Your inquiry for \"{inquiry.project_type}\" "
                "has been recorded."
            ),
        },
    )


@app.get("/api/health")
async def health() -> dict[Literal["status"], str]:
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
