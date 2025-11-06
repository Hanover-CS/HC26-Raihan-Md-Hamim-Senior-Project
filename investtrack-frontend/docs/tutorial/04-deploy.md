
---

### `docs/tutorial/04-deploy.md`
```markdown
# 04 — Deploy (Optional)

**Goal:** Put the app somewhere live after tests pass.

## Option A — GitHub Pages for the docs site (already live)
Your Jekyll **docs/** site is on GitHub Pages. The tutorial you’re reading is part of it.
No extra work is needed here.

## Option B — Deploy the React app (Netlify or GH Pages)

### Netlify (simple)
1) Push your repo to GitHub.
2) In Netlify, **New site from Git**, pick your repo.
3) Build command: `npm run build`  
   Publish directory: `investtrack-frontend/dist`
4) Deploy.

### GitHub Pages for React (if desired)
Use `gh-pages` or an actions workflow that:
- runs tests,
- builds with `npm run build`,
- publishes `investtrack-frontend/dist` to `gh-pages` branch.

Docs:  
- Netlify: https://docs.netlify.com/  
- GH Pages: https://docs.github.com/pages
