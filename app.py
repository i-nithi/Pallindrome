"""Primary Python backend for Palindrome Labs — Freelance Software Studio."""

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

from data import (
    ADDITIONAL_CHARGES,
    CAPABILITIES,
    COMPANY_CONFIG,
    FOUNDER_HONORS,
    PROOF_OF_WORK,
    SERVICE_PACKAGES,
)

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "inquiries.db"

ALLOWED_PROJECT_TYPES = tuple(pkg.title for pkg in SERVICE_PACKAGES) + (
    "Custom Startup / Tech Team Collaboration",
    "General Inquiry",
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
    project_type: str = Field(..., min_length=2, max_length=120)
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
            raise ValueError("Please select a valid service or project type.")
        return value


app = FastAPI(
    title="Palindrome Labs — Build Your Digital Presence",
    description="Freelancing company & software engineering studio founded by Antonius Jairus R.",
    version="3.0.0",
)

app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/", response_class=HTMLResponse)
async def home(request: Request) -> HTMLResponse:
    """Render the Palindrome Labs landing page."""
    work_groups = ["All"]
    for item in PROOF_OF_WORK:
        if item.group not in work_groups:
            work_groups.append(item.group)

    capability_categories = []
    for cap in CAPABILITIES:
        if cap.category not in capability_categories:
            capability_categories.append(cap.category)

    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={
            "company": COMPANY_CONFIG,
            "services": SERVICE_PACKAGES,
            "additional_charges": ADDITIONAL_CHARGES,
            "works": PROOF_OF_WORK,
            "work_groups": work_groups,
            "capabilities": CAPABILITIES,
            "capability_categories": capability_categories,
            "founder_honors": FOUNDER_HONORS,
            "project_types": ALLOWED_PROJECT_TYPES,
        },
    )


@app.post("/api/contact")
async def submit_contact(inquiry: ContactInquiry) -> JSONResponse:
    """Validate and persist a client inquiry in SQLite."""
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
                f"Thanks, {inquiry.name}. Your brief for \"{inquiry.project_type}\" has been "
                "logged with Palindrome Labs."
            ),
        },
    )


@app.get("/api/health")
async def health() -> dict[Literal["status"], str]:
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
