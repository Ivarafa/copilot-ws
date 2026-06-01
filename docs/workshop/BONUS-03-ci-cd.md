# BONUS 03 — CI/CD with Copilot

**Self-paced bonus task**  
**Feature:** GitHub Actions, `@workspace` for path awareness, Copilot YAML generation

---

## What's already there

Open `.github/workflows/` — you'll find two skeleton workflow files:
- `ci-frontend.yml` — Vite build + Vitest
- `ci-backend.yml` — Gradle build + tests

Both have TODO comments for the caching steps.

---

## Task 1 — Complete frontend caching

Open `ci-frontend.yml`. Find the TODO comment about caching.

In Copilot Chat:
```
@workspace Add npm caching to ci-frontend.yml. Use actions/cache with the node_modules directory and package-lock.json as the cache key.
```

Review the generated YAML and commit it.

---

## Task 2 — Complete backend caching

Open `ci-backend.yml`. Ask:
```
@workspace Add Gradle dependency caching to ci-backend.yml. Cache ~/.gradle/caches and ~/.gradle/wrapper.
```

---

## Task 3 — Ask Copilot what's missing

```
@workspace Review both CI workflows and suggest what's missing for a production-ready pipeline.
```

Common suggestions you might get:
- Linting step (ESLint for frontend, ktlint for backend)
- Coverage reporting
- Docker build and push step
- Deploy to a staging environment

Pick one suggestion and implement it with Copilot.

---

## Task 4 — Matrix builds (advanced)

Ask:
```
Update ci-frontend.yml to run tests on Node 18 and Node 20 using a matrix strategy
```

---

## 💡 Key takeaway

`@workspace` is essential for CI/CD because Copilot needs to know the exact paths, script names, and project structure. Without it, it might generate generic YAML that doesn't match your repo layout.
