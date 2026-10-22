# Deployment

## Recommendation: Cloudflare Pages

The app is a static single-page app (Vite build in `dist/`), so any static host works. For _personal use
on a free plan, with room to grow_, Cloudflare Pages is the best fit:

|                       | Cloudflare Pages                                                                           | Vercel (Hobby)                            | Netlify (Free)              | Render (Static)                 |
| --------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------- | --------------------------- | ------------------------------- |
| Static hosting        | ✅ unlimited bandwidth                                                                     | ✅ 100 GB/mo                              | ✅ 100 GB/mo, 300 build min | ✅ 100 GB/mo                    |
| Preview per branch/PR | ✅                                                                                         | ✅                                        | ✅                          | ✅                              |
| Terms                 | personal & commercial                                                                      | **non-commercial only**                   | personal & commercial       | personal & commercial           |
| Free back-end later   | ✅ Pages Functions/Workers, **D1** (SQL), **KV**, **R2** (audio files) in the same account | serverless functions, KV/Postgres add-ons | functions, blobs            | separate paid/sleeping services |
| Cold starts           | none for static                                                                            | none                                      | none                        | free web services sleep         |

Why it matters for the roadmap: when progress should sync across devices, or pre-generated audio is
wanted, Cloudflare offers D1/KV/R2 on the free tier without changing host or domain. The app already
isolates storage behind `src/store/repository.ts`, so a D1-backed implementation can replace
`localStorage` without touching the stores or UI.

## Steps

1. Push the repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, select the repo.
3. Build settings
   - Framework preset: _None_ (or Vite)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. Save and deploy. Production = the default branch; every other branch/PR gets a preview URL.

Notes

- **Deep links** (`/levels/a1-1/units/a1-1-hallo`): Pages serves `index.html` for unknown paths automatically
  as long as there is no `404.html` in `dist/` – do **not** add a `/* /index.html 200` rule to `_redirects`
  (Pages flags it as an infinite loop).
- `public/_headers` sets long-lived caching for hashed assets and `no-cache` for `index.html` and the
  service worker, so new releases reach installed PWAs quickly.
- The service worker (vite-plugin-pwa, `autoUpdate`) precaches the shell and every level chunk for offline play.

## Other hosts

- **Netlify**: build `npm run build`, publish `dist`, and add `public/_redirects` with `/*  /index.html  200`.
- **Vercel**: framework preset Vite; add a `vercel.json` with `{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}`.
- **Render**: Static Site, build `npm ci && npm run build`, publish `dist`, rewrite rule `/*` → `/index.html`.

## CI

`.github/workflows/ci.yml` runs lint, typecheck, unit tests with coverage thresholds and the Playwright
suite (desktop + mobile) on every push and pull request. Cloudflare builds only when you push; keep CI as the
gate by enabling branch protection on the default branch.
