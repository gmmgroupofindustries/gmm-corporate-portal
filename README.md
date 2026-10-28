# GMM Group of Industries — Official Corporate Portal

An architectural, quiet corporate-identity website for GMM Group of Industries, the parent (mother) company of six operating sister concerns. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## Content Editing Guide

All site copy is centralized in a single file:
👉 `src/content/site.ts`

### 1. Structure of `src/content/site.ts`
The file exports `siteContent` containing two complete, authentic dictionaries:
- `en`: Full English copy
- `bn`: Natural, idiomatic Bengali (বাংলা) copy

### 2. How to Edit Sections
- **Navigation & Titles**: Edit `nav.groupTitle` and `nav.links` in both languages.
- **Hero Statement**: Edit `hero.headlineLine1`, `hero.headlineLine2`, and `hero.paragraph`.
- **The Group & Milestones**: Add or modify milestone events under `group.milestones` (`year` and `event`).
- **Sister Concerns**: Update company name, sector, two-sentence description, founding year/location (`meta`), and official website link under `concerns.items`.
- **How We Work**: Update the three stepping principles under `howWeWork.statements`.
- **Leadership**: Edit Chairman's message, Chairman's name/title, and the list of directors under `leadership.directors`.
- **Contact Details**: Update `contact.primaryEmail`, departmental emails (`businessEmail`, `careersEmail`, `mediaEmail`), head office address, and telephone.
- **Footer**: Update copyright year and legal registration notice under `footer.copyright`.

> [!NOTE]
> All editable fields needing final executive verification are marked with `// TODO(content)` in `src/content/site.ts`.

---

## Local Development & Build

```bash
# Start local development server
npm run dev

# Create optimized production build
npm run build

# Start local production server
npm run start
```
