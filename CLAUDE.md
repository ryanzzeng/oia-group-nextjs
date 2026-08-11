# OIA Group Website — Project Handover

## Project purpose

This repository contains the new public website for **OIA Group**, intended to serve all content for `oia.group`.

OIA is presented as an Australian property group focused on considered residential and mixed-use development. The website is primarily a brand, portfolio, and editorial experience: it introduces the group, showcases projects, publishes company news and perspectives, and provides a clear path for enquiries.

The immediate goal is to produce a polished client-preview site that can be published on a free Cloudflare URL. Once approved, the same project can be connected to the production `oia.group` domain.

## Source design

The visual direction is based on the Figma Sites file:

- File: `OIA Website`
- URL: `https://www.figma.com/site/TkZ289YzZVMghph2YPZ7tk/OIA-Website?node-id=0-3`
- Pages observed in the design: Home, About, Projects, Project Detail, News, and News Article

The design uses an editorial property-development aesthetic:

- Large architectural photography
- Restrained serif display typography
- Small uppercase labels and metadata
- Generous whitespace
- Neutral stone and warm-grey surfaces
- Deep OIA blue for high-emphasis sections and the footer
- Modular project, metric, gallery, and news content blocks

The connected Figma account did not have sufficient access to retrieve structured design context or original image assets. The current implementation therefore reproduces the overall hierarchy and visual direction, but uses tonal image placeholders. Approved project photography and exact design values still need to be supplied or exported from Figma.

## Current implementation

The project is a statically exported Next.js application.

### Technology

- Next.js 16
- React 19
- TypeScript
- Plain global CSS
- Next.js App Router
- Static HTML export for Cloudflare Pages

There is deliberately no CMS, database, authentication, API, UI library, or CSS framework in the initial version. This keeps the preview build lightweight and makes its content model easy to change.

### Routes completed

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Homepage, introduction, metrics, selected projects, brand statement | Foundation complete |
| `/about-us/` | Company positioning and values | Foundation complete |
| `/projects/` | Project portfolio index | Foundation complete |
| `/news/` | News and perspectives index | Foundation complete |

Next.js also generates the standard not-found page.

### Routes still required

- `/projects/[slug]/` — reusable project detail pages
- `/news/[slug]/` — reusable news article pages
- A contact destination or contact form, once enquiry requirements are confirmed

Because the project is configured for static export, dynamic routes must provide static parameters at build time.

## Repository structure

```text
oia.group/
├── app/
│   ├── about-us/page.tsx
│   ├── news/page.tsx
│   ├── projects/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── CLAUDE.md
```

`app/layout.tsx` owns the shared header, navigation, footer, global metadata, and contact email link. `app/globals.css` currently contains the complete visual system and responsive rules.

## Design and implementation principles

When extending the website:

1. Preserve the quiet, editorial tone. Avoid generic SaaS patterns, heavy shadows, excessive animation, or highly rounded UI controls.
2. Let project photography lead. Images should be high quality, consistently cropped, and sized to avoid layout shift.
3. Keep typography hierarchical: large serif headlines, compact sans-serif body copy, and small uppercase metadata.
4. Reuse shared components instead of copying page markup as project and news content grows.
5. Keep all pages responsive. The current breakpoint is `760px`, but it should be validated against real content on mobile and tablet.
6. Protect accessibility: semantic headings, keyboard focus, sufficient contrast, useful alt text, and minimum touch-target sizes.
7. Preserve static-export compatibility unless the hosting architecture is intentionally changed.

## Content and asset work still needed

The text currently in the repository is draft positioning copy. It must be reviewed and approved by OIA Group.

Before production release, obtain:

- OIA logo assets and brand guidelines
- Approved project photography
- Project names, locations, status, statistics, descriptions, architects, and collaborators
- Company profile and leadership information
- News article copy and publication dates
- Contact email, phone number, office address, and social links
- Privacy policy and any required legal content
- SEO titles, descriptions, Open Graph imagery, and final favicon assets

Add committed image assets beneath `public/images/`. Do not leave temporary Figma asset URLs in production code because those URLs expire.

## Recommended next development steps

1. Replace tonal placeholders with approved image assets.
2. Extract shared `Header`, `Footer`, `ProjectCard`, `NewsCard`, `Metric`, and `ImageGallery` components.
3. Move project and news entries into typed content collections rather than hard-coding them inside page components.
4. Implement project and news detail routes with `generateStaticParams`.
5. Add mobile navigation and visible keyboard focus states.
6. Add project filtering only if the final portfolio is large enough to justify it.
7. Complete SEO metadata, sitemap, robots configuration, structured data, analytics, and accessibility QA.
8. Deploy a preview, review it with the client, and only then connect the production domain.

If OIA needs to edit content regularly, introduce a headless CMS after the content model is agreed. A CMS should not be selected until ownership, preview, approval, and publishing requirements are clear.

## Local development

Prerequisites: a current Node.js LTS release and npm.

```bash
cd /Users/ruijiangzeng/code/oia.group
npm install
npm run dev
```

Open `http://localhost:3000`.

Production verification:

```bash
npm run build
```

The build must complete successfully and generate the static site in `out/`.

## Cloudflare Pages deployment

The relevant settings are:

```text
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Production branch: main
```

The important settings in `next.config.ts` are:

- `output: "export"` generates the static site.
- `images.unoptimized: true` keeps Next.js images compatible with static hosting.
- `trailingSlash: true` produces directory-style routes suitable for static serving.

Cloudflare Pages will provide a free `*.pages.dev` URL for client review. Pull requests can also receive independent preview deployments after the repository is connected through GitHub or GitLab.

Do not place secrets in the repository. If environment variables are later required, configure them in Cloudflare and document the variable names in `.env.example` without including real values.

## Current verification status

At the time of this handover:

- `npm run build` passes on Next.js 16.3.0.
- All current routes are statically generated.
- `npm audit` reports zero known vulnerabilities.
- The Git repository has been initialized on the `main` branch.
- No commit, remote repository, or Cloudflare Pages project has been created yet.

## Known limitations

- The implementation is a strong foundation, not a pixel-perfect Figma reproduction.
- Original Figma images, exact fonts, design tokens, and component measurements are not yet available.
- Project and news data are placeholders.
- Detail routes, CMS integration, analytics, legal pages, and production SEO are not yet implemented.
- The contact link currently uses `info@oia.group` as an assumed address and must be confirmed.

These limitations should be resolved before treating the website as production-ready.
