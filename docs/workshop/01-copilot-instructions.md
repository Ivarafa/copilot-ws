# 01 — Copilot Instructions

**Time:** ~15 minutes  
**Feature:** `.github/copilot-instructions.md`

---

## What is `copilot-instructions.md`?

It's a Markdown file at `.github/copilot-instructions.md` that GitHub Copilot automatically injects into **every** chat conversation and inline completion in your repository.

Think of it as a persistent system prompt that shapes Copilot's persona, knowledge, and coding style — without you having to re-explain the project every time.

> 💡 **Key insight:** Unlike a chat message, `copilot-instructions.md` is always active. You never need to remind Copilot what tech stack you use, what your domain model looks like, or what code style to follow.

---

## Step 1 — Read the existing instructions

Open `.github/copilot-instructions.md` in your editor and read through it.

Notice it defines:
- A **persona** ("senior full-stack engineer")
- A **domain glossary** (Product, CartItem, Order, SKU)
- **Frontend and backend conventions**
- **Testing guidance**

---

## Step 2 — Observe the effect

Open Copilot Chat and ask:

```
What are the naming conventions for this project?
```

Copilot should answer using the exact conventions from the instructions file — without you having copied them into the question.

Now try:

```
I want to add a discount code feature. Where should I put the logic?
```

Notice how Copilot references the service layer, repositories, and the correct package structure — all from the instructions.

---

## Step 3 — Add your own rule

Edit `.github/copilot-instructions.md` and add one or more of your own rules. Some ideas:

```markdown
## Extra Conventions
- Never use `var` in Kotlin — always use `val` or `lateinit var`.
- Always add JSDoc comments to exported TypeScript functions.
- Prefer `useReducer` over `useState` for complex state shapes.
- All API errors should be displayed to the user — never silently swallowed.
```

Save the file.

---

## Step 4 — Verify it works

Ask Copilot Chat:

```
How should I handle errors from the API in this project?
```

It should now reference your new rule. If you added the JSDoc rule, open `api.ts` and start typing a new function — Copilot should suggest JSDoc automatically.

---

## 💡 Workshop debrief

| Without instructions | With instructions |
|----------------------|-------------------|
| "Use React best practices" | "Use named exports, async/await, and Tailwind CSS" |
| Copilot guesses your stack | Copilot knows Product, CartItem, Order |
| Style varies per developer | Style is consistent across the team |

Instructions are version-controlled, team-shared, and always active — that's what makes them powerful.

---

**Next:** [Part 2 — Complete the Backend →](./02-complete-the-backend.md)
