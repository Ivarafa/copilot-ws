# BONUS 01 — MCP Servers

**Self-paced bonus task**  
**Feature:** Model Context Protocol (MCP) servers

---

## What is MCP?

MCP (Model Context Protocol) is an open standard that lets Copilot connect to external tools and data sources — databases, APIs, file systems, and more — directly from chat.

Instead of copying data into the chat window, Copilot calls the MCP server on your behalf.

---

## Pre-configured servers

Open `.mcp.json` — two servers are already configured:

| Server | What it does |
|--------|-------------|
| `github` | Read/write your GitHub repository (issues, PRs, code search) |
| `filesystem` | Read and write files in your workspace |

---

## Task 1 — GitHub MCP

With the GitHub MCP server connected, try these prompts:

```
List all open issues in this repo
```

```
Search the codebase for all files that import from '../services/api'
```

```
Create a GitHub issue: "Add search functionality to ProductsPage" with label "enhancement"
```

---

## Task 2 — Add a SQL/JDBC MCP server

Add a server that can query the H2 database directly:

1. Install the `mcp-server-jdbc` package (or a compatible SQLite/H2 MCP server):
   ```bash
   npm install -g @modelcontextprotocol/server-sqlite
   ```

2. Add it to `.mcp.json`:
   ```json
   "sqlite": {
     "command": "npx",
     "args": ["-y", "@modelcontextprotocol/server-sqlite", "./webshop.db"]
   }
   ```
   > Note: H2 in-memory mode doesn't persist to a file by default. For this bonus, update `application.yml` to use a file-based H2: `jdbc:h2:file:./webshop`

3. Then ask Copilot:
   ```
   Query the database and show me all products with stock below 5
   ```
   ```
   How many orders have been placed today?
   ```

---

## Task 3 — Filesystem MCP

The filesystem server lets Copilot read and modify files without you pasting them:

```
Read the current copilot-instructions.md and suggest 3 improvements based on the codebase
```

```
Find all TODO comments across the project and summarize them
```

---

## 💡 Key takeaway

MCP turns Copilot from a code assistant into a **context-aware agent** — it can query live data, interact with external systems, and act across your entire toolchain from a single chat window.
