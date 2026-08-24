# Quiz Forge

A full-stack quiz application built step by step to learn and practise development.

**Python + FastAPI + TypeScript + HTML**

## What it does

Quiz Forge fetches quiz questions from a Python backend and displays them dynamically in the browser.

The project starts simple and evolves through progressively more advanced levels.

## Tech Stack

- **Frontend:** TypeScript, HTML
- **Backend:** Python, FastAPI
- **Server:** Uvicorn
- **Tooling:** Node.js, npm

## Project Structure

```text
quiz-quest/
├── backend/
│   └── main.py
└── frontend/
    ├── index.html
    └── app.ts
```

## Development Levels

### Level 1: Frontend ↔ Backend
- FastAPI backend
- TypeScript frontend
- REST API endpoint
- JSON data
- `fetch()`
- `async/await`
- TypeScript interfaces
- Dynamic DOM rendering

### Level 2: Interactive Quiz
- Clickable answer buttons
- Answer validation
- Score tracking
- Correct/incorrect feedback
- Question progression

### Level 3: Levels and Progression
- Easy, Medium and Hard levels
- Unlock progression
- Level-based questions

### Level 4: Categories
- Multiple quiz categories
- Category selection
- Filtered questions

### Level 5: Database
- Store questions in a database
- Persist quiz data
- CRUD operations

### Level 6: Users
- Authentication
- User accounts
- Saved progress
- Leaderboard

### Level 7: AI Quiz Generation
- Choose a topic and difficulty
- Generate quiz questions using AI
- Structured responses from an LLM

## Current Progress

**Level 1: Completed**

```text
TypeScript
    ↓
FastAPI API
    ↓
JSON
    ↓
Dynamic Quiz UI
```

## Next

**Level 2: Make the quiz interactive.**

---

Built as a learning project to explore full-stack development through small, incremental improvements.
