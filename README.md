# Digitalized Electrical Meter System – Project Progress Tracker

A clean, modern, Apple-inspired single-page React application that tracks the development progress of the **Digitalized Electrical Meter System** for **Tang Tech & Engineering Ltd**.

## Features

- **Passcode-protected access** (passcode: `tang submeter`)
- **Light / Dark mode** with smooth toggle and localStorage persistence
- **8 project phases** with status (Completed / Pending)
- **Dedicated phase detail pages**
- **Fully responsive**, mobile-first design
- **Premium Apple-style aesthetic** with teal brand accent

## Tech Stack

- React 19 + TypeScript
- Vite 6
- React Router DOM 7
- MUI Icons
- Pure CSS with CSS variables (no Tailwind required)
- Google Fonts – Poppins

## Getting Started

```bash
cd digital-meter-progress-tracker
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Passcode

```
tang submeter
```

## Project Structure

```
src/
├── components/     # Reusable UI pieces (Logo, ThemeToggle, PhaseCard, etc.)
├── context/        # ThemeContext + AuthContext
├── data/           # phases.ts – single source of truth for all 8 phases
├── pages/          # Login, Home, PhaseDetail
├── App.tsx         # Routing + providers
├── main.tsx
└── index.css       # Complete design system
```

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |

---

© 2026 Tang Tech & Engineering Ltd | Developed by Joseph Chongola
