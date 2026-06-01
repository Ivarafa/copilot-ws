# 🛒 Copilot Workshop: Webshop Showcase

An interactive workshop that teaches GitHub Copilot features — **copilot-instructions**, **agents**, **skills**, and **MCP servers** — by building and extending a real webshop application.

**Stack:** Vite + React + TypeScript · Kotlin + Spring Boot · H2 Database

---

## What you'll learn

| Feature | What it does |
|---------|-------------|
| `copilot-instructions.md` | Shapes every completion with project-specific context |
| Inline completions | Generate JSX, Kotlin services, and API calls from context |
| `/explain`, `/fix`, `/tests` | Understand, repair, and test code with a single command |
| `@workspace` | Cross-file understanding across the entire mono-repo |
| Code review agent | Automated signal-to-noise PR review |
| GitHub MCP server | Create issues, search code, manage PRs from chat |
| Copilot coding agent | Assign an issue to Copilot and receive a PR |
| `copilot-setup-steps.yml` | Configure the coding agent's environment |

---

## Quick Start

### Prerequisites
Node.js 20+, JDK 21, GitHub Copilot access. → [Detailed setup](docs/workshop/00-prerequisites.md)

### Run the frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Run the backend
```bash
cd backend
./gradlew bootRun   # or .\gradlew.bat bootRun on Windows
# → http://localhost:8080/api
# → http://localhost:8080/h2-console  (H2 database browser)
```

---

## Workshop Guide

| Part | Topic | Time | Link |
|------|-------|------|------|
| 00 | Prerequisites & setup | Pre-read | [→](docs/workshop/00-prerequisites.md) |
| 01 | Copilot Instructions | 15 min | [→](docs/workshop/01-copilot-instructions.md) |
| 02 | Complete the Backend | 20 min | [→](docs/workshop/02-complete-the-backend.md) |
| 03 | Wire the Frontend | 20 min | [→](docs/workshop/03-wire-the-frontend.md) |
| 04 | Agents & Skills Demo | 10 min | [→](docs/workshop/04-agents-and-skills.md) |

### Bonus Tasks (self-paced)

| Bonus | Topic | Link |
|-------|-------|------|
| 01 | MCP Servers deep dive | [→](docs/workshop/BONUS-01-mcp-servers.md) |
| 02 | Testing with `/tests` | [→](docs/workshop/BONUS-02-testing.md) |
| 03 | CI/CD with GitHub Actions | [→](docs/workshop/BONUS-03-ci-cd.md) |
| 04 | Custom Instructions advanced | [→](docs/workshop/BONUS-04-custom-instructions.md) |

---

## Architecture

```
browser
  └── frontend/          Vite + React + TypeScript  :5173
        └── fetch
              └── backend/   Kotlin + Spring Boot    :8080
                    └── JPA
                          └── H2 (in-memory)
```

### What's given vs. what participants build

| File | Status | Notes |
|------|--------|-------|
| `backend/model/`, `repository/` | ✅ Complete | JPA entities and Spring Data repos |
| `backend/controller/ProductController.kt` | 🔧 Partial | GET works; POST is a stub |
| `backend/controller/OrderController.kt` | 🔧 Stub | All endpoints are TODOs |
| `backend/service/` | 🔧 Stub | Participants implement with Copilot |
| `frontend/src/types/index.ts` | ✅ Complete | All shared TypeScript types |
| `frontend/src/components/Header.tsx` | ✅ Complete | Navigation bar |
| `frontend/src/services/api.ts` | 🔧 Partial | `fetchProducts` works; `createOrder` is a stub |
| `frontend/src/components/ProductCard.tsx` | 🔧 Stub | Participants build with Copilot |
| `frontend/src/pages/ProductsPage.tsx` | 🔧 Partial | State wired; fetch not connected |
| `frontend/src/pages/CheckoutPage.tsx` | 🔧 Stub | Participants implement form + submit |