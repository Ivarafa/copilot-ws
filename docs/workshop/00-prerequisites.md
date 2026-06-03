# 00 — Prerequisites

> Complete this before the workshop starts. It takes about 10 minutes.

---

## Tools you need

| Tool | Version | Download |
|------|---------|----------|
| Node.js | 20+ | https://nodejs.org |
| JDK | 21 | https://adoptium.net |
| VS Code **or** IntelliJ IDEA | Latest | See below |
| GitHub account with Copilot access | — | https://github.com/settings/copilot |

### VS Code
Install the **GitHub Copilot** extension from the marketplace:
```
ext install GitHub.copilot
```
Also install **GitHub Copilot Chat** if it doesn't come bundled.

### IntelliJ IDEA
Install the **GitHub Copilot** plugin via *Settings → Plugins → Marketplace*.

---

## Verify your Copilot access

Open VS Code (or IntelliJ) and look for the Copilot icon in the status bar (bottom right).  
It should show a ✅ or your GitHub avatar — not a ⚠️ or ✖️.

If it shows an error, sign in via *GitHub Copilot: Sign In* from the command palette.

---

## Set up a GitHub Personal Access Token

Part 4 of the workshop uses the GitHub MCP server to create issues and search code directly from Copilot Chat. It needs a token to authenticate.

**Create the token:**

1. Go to **https://github.com/settings/tokens/new**
2. Give it a name, e.g. `copilot-workshop`
3. Set expiration to **7 days** (or however long you need)
4. Under *Scopes*, tick **`repo`**
5. Click **Generate token** and copy it — you won't see it again

**Set it as a permanent environment variable (macOS/Linux):**

Open `~/.zshrc` in a text editor and add this line at the bottom:

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token_here
```

Then reload your shell:

```bash
source ~/.zshrc
```

> VS Code reads environment variables from your shell profile on startup — after sourcing, open a new terminal in VS Code or restart it.

**Windows (PowerShell):**

```powershell
$env:GITHUB_PERSONAL_ACCESS_TOKEN = "ghp_your_token_here"
```

---

## Fork and clone the repo

### 1. Fork the repo

Go to **https://github.com/Ivarafa/copilot-ws** and click **Fork** (top-right corner). This creates your own copy where you can push changes and create issues.

### 2. Enable Issues on your fork

Issues are disabled on forks by default. To turn them on:

1. Go to your fork on GitHub (e.g. `github.com/your-username/copilot-ws`)
2. Click **Settings**
3. Scroll down to the **Features** section
4. Check the **Issues** checkbox

You'll need this in Part 4 when Copilot creates issues on your behalf.

### 3. Clone your fork

```bash
git clone https://github.com/your-username/copilot-ws.git
cd copilot-ws
```

### Start the frontend
```bash
cd frontend
npm install
npm run dev
```
→ Opens at **http://localhost:5173**

### Start the backend
```bash
cd backend

# Linux / macOS
./gradlew bootRun

# Windows
.\gradlew.bat bootRun
```
→ API available at **http://localhost:8080/api**  
→ H2 console at **http://localhost:8080/h2-console**

> **H2 console settings:** JDBC URL `jdbc:h2:mem:webshopdb`, User `sa`, Password *(empty)*

---

## Expected result

| URL | What you should see |
|-----|---------------------|
| http://localhost:5173 | Frontend shell — "No products loaded yet" |
| http://localhost:8080/api/products | JSON array of 10 products |
| http://localhost:8080/h2-console | H2 database browser |

If both are running — you're ready! Head to [Part 1 →](./01-copilot-instructions.md)
