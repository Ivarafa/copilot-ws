# 04 — Agents & Skills

**Time:** ~10 minutes  
**Features:** Code review agent, GitHub MCP, Copilot coding agent, `customize-cloud-agent` skill

This part is a live demo of the higher-level Copilot features — the ones that go beyond completing code.

---

## 🔍 Code Review Agent

The **code review agent** analyses your staged or unstaged changes and surfaces only issues that genuinely matter: bugs, security problems, and logic errors. It deliberately ignores style and formatting.

**Try it:**

1. Make sure you have unstaged changes from Parts 2 and 3
2. Open Copilot Chat
3. Type:
   ```
   Review my changes
   ```
   or use the `code-review` agent if available in your IDE

**What to observe:**
- The agent looks at diffs, not just individual files
- It cross-references your changes with the rest of the codebase
- It won't comment on indentation or variable naming — only real issues

> 💡 **SDLC role:** This is a **Tech Lead / QA Engineer** tool — runs automatically on PRs, catches regressions before review.

---

## 🐙 GitHub MCP — Create an Issue from a TODO

The GitHub MCP server (pre-configured in `.mcp.json`) lets Copilot interact with your GitHub repository directly from chat.

**Try it:**

1. Verify MCP is connected (look for a 🔌 or server icon in Copilot Chat sidebar)
2. Ask Copilot:
   ```
   Find a TODO comment in the codebase and create a GitHub issue for it.
   Use the title "Implement createOrder in OrderController" and assign it the label "enhancement".
   ```

Copilot will:
- Search the codebase for TODO comments
- Call the GitHub API to create an issue
- Return the issue URL

**Other things to try with GitHub MCP:**
```
List the open issues in this repo
```
```
Create a PR description for my current changes
```

> 💡 **SDLC role:** This is a **Product Owner / DevOps** tool — turning natural language into tracked work items.

---

## 🤖 Copilot Coding Agent — Assign the Issue

The Copilot **coding agent** (available in GitHub.com) can pick up an issue and implement it autonomously.

**Try it:**

1. Go to the issue you just created on GitHub.com
2. In the "Assignees" section, assign **@copilot**
3. Watch the coding agent open a PR with an implementation
4. Review the PR — notice it includes a summary of decisions made

> 💡 **SDLC role:** This is a **Product Owner → Developer handoff** — a stakeholder describes work, Copilot implements it.

---

## ⚙️ Customize Cloud Agent — `copilot-setup-steps.yml`

The `customize-cloud-agent` skill configures the environment the Copilot coding agent runs in.

Open `.github/copilot-setup-steps.yml` — this pre-installs Node.js and JDK 21 so the coding agent can build and test the project.

**Try it in Copilot Chat:**
```
Use the customize-cloud-agent skill to explain what copilot-setup-steps.yml does and suggest any missing steps.
```

Or ask:
```
Add a step to copilot-setup-steps.yml that installs backend Gradle dependencies before the agent starts coding.
```

> 💡 **SDLC role:** This is a **DevOps** tool — ensuring the agent has the right environment, just like a CI machine setup.

---

## Summary — SDLC role map

| Feature | Who benefits most | What it replaces |
|---------|-------------------|------------------|
| Code review agent | Tech Lead, QA | Manual PR review for obvious bugs |
| GitHub MCP | PO, Developer | Switching context to GitHub.com |
| Coding agent | PO → Developer | Writing boilerplate for well-defined tasks |
| `copilot-setup-steps.yml` | DevOps | Manual agent environment configuration |

---

**Finished the core workshop! 🎉**  
If you have time, explore the bonus tasks:

- [BONUS 01 — MCP Servers →](./BONUS-01-mcp-servers.md)
- [BONUS 02 — Testing →](./BONUS-02-testing.md)
- [BONUS 03 — CI/CD →](./BONUS-03-ci-cd.md)
- [BONUS 04 — Custom Instructions Deep Dive →](./BONUS-04-custom-instructions.md)
