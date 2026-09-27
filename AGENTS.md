<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guidance

## Stack and structure

- This project uses Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4.
- Read the relevant local Next.js documentation under `node_modules/next/dist/docs/` before changing framework APIs or conventions; preserve the generated instructions above.
- Page composition lives in `src/app/page.tsx`; reusable listing sections live in `src/components/`; listing and review content lives in `src/data/listing.ts`.
- Keep client-side state and event handlers in client components, and follow the existing component/data separation.

## Assets

- Store and reference public assets using URL paths rooted at `/images/`.
- Keep assets organized by purpose: `public/images/branding/`, `public/images/listings/`, `public/images/hosts/`, `public/images/reviews/`, and `public/images/ui/`.
- Prefer supplied local images and icons over recreating them. When moving or renaming assets, update all references and verify each referenced file exists.
- Use `SafeImg` for listing/reviewer images where its fallback behavior is useful; use `next/image` for static local images where dimensions are known.

## Visual changes

- This app recreates a specific Airbnb listing reference. Use supplied screenshots and inspected styles as the source of truth for spacing, dimensions, typography, order, and scroll behavior.
- Apply styles to the element that owns the inspected property; avoid compensating for local mismatches with unrelated parent spacing.
- Preserve responsive behavior when matching desktop references, and do not replace user-provided image assets with approximations.
- Keep existing interactions working when changing appearance, unless the request explicitly asks for a visual-only control.

## Validation

- Run `npm run build` after UI or data changes.
- Run `npm run lint` when changing code that can be linted.
- For asset changes, verify the referenced `/images/...` paths resolve after moving files.
