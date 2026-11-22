# aleveltutors.online

Hub site for the aleveltutors.online family: online A-level tutoring, with links to every subject revision site. Static Astro site, deployed by Netlify on every push to `main`.

## Everyday updates

| To change | Edit |
| --- | --- |
| A subject, board section, tutor or site link | `src/data/subjects.json` |
| Reviews on the home and subject pages | `src/data/reviews.json` |
| Revision tips posts | `src/data/posts.ts` |
| WhatsApp number, email, company details | `src/data/site.json` |

Adding a subject or a board section is one entry in `subjects.json`: the home page, subjects page, tutors page, free-revision table, footer and a new `/online-a-level-<subject>-tutor/` page all build from it. A board section needs `board`, `short`, `codes` and `path` (its folder on the subject site, `/` for the root).

## Build

```
npm install
npm run build   # output in dist/
```

## Old Squarespace URLs

`public/_redirects` sends the old pages (`/how-to-book`, `/book-now`, `/our-methods`, `/howtorevise/...`) to their new homes.

## Forms

The enquiry form is a Netlify Form named `enquiry` (static copy in `public/__forms.html`).
