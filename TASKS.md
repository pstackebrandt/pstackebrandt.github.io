# Homepage Project Tasks

**Note:** I previously used a GitHub project to organize tasks. For now I continue with this Markdown file because it works well with AI within Cursor.

---

## Next Actions

*Tasks are being managed through the sections below.*

---

## Todo

### Epic: Content Updates

- [ ] **P3** T16 [S] Fix grammar in GitHub repos description: change 'Einzelne von diesen' to 'Einzelne davon'.

### Epic: Code Quality

- [ ] **P3** T17 [S] Fix ESLint warnings in codebase:
  - Fix import order in LinkCard.js (prop-types before react, empty line between groups)
  - Fix import order in ResponsiveImage.js (prop-types before react)
  - Remove console statement in index.js (line 24)
  - Fix import order in RootLayout.js (empty lines between groups, bottom-nav before top-nav)
  - Fix import order in Impress.js (react-bootstrap/Col before Container)

### Epic: Nice-to-Have Features

- [ ] **P4** T5 [M] Implement dark mode.
- [ ] **P4** T6 [S] Add animations to page transitions.

---

## In Progress

(No tasks currently in progress)

---

## Backlog

(No backlog items currently)

---

## Done

- [x] ✅ T15.1 [S] User improved BlazorCookbookApp description formatting and render modes explanation.
- [x] ✅ T15.2 [S] User updated GitHub repos description to be more precise.
- [x] ✅ T15 [S] Update BlazorCookbookApp description with improved German text from content file.
- [x] ✅ T14 [M] Add BlazorCookbookApp project to Projects page at top position with double-width.
  - [x] ✅ T14.1 Add new LinkCard for BlazorCookbookApp with live demo link and German description.
  - [x] ✅ T14.2 Move GitHub repos LinkCard up to be positioned right of BlazorCookbookApp.
- [x] ✅ T13 [S] Removed hallucination/relict entries from TASKS.md and updated project management note.
- [x] ✅ T12 [S] Updated Welcome page text to be more professional and confident.
- [x] ✅ T11 [S] Fixed markdownlint errors in .cursor/rules/import-groups-spacing.mdc.
- [x] ✅ T10 [S] Fixed markdownlint errors in .cursor/rules/import-order-rules.mdc.
- [x] ✅ T9 [S] Fix MD044 linting and update README formatting.
- [x] ✅ T8 [S] Update .markdownlint.json configuration.
- [x] ✅ T7 [S] Update README.md to mention TASKS.md for project management.
- [x] ✅ T3 [S] Write and add content for the home page.
- [x] ✅ T2 [L] Design and implement the main layout and navigation.
- [x] ✅ T1 [M] Set up basic project structure (React, Webpack, Babel).
- [x] ✅ T0 [S] Initialized project repository.

---

## Notes

- Use `- [ ]` for incomplete tasks.
- Use `- [x] ✅` for completed tasks.
- Use `- [x] ⏸️` for deferred tasks.
- **Task Order**: In the Done section, newer tasks are at the top.
- **Priorities**: P1 (Highest) to P4 (Lowest). P5 tasks are not planned.
- **Task Format**: Use `[ ] **Priority** TaskID [Size] Description [Depends on TX, TY]`.
- **Linking**: For tasks related to specific files, consider adding a Markdown link to the file for quick navigation.

---

## Examples

### Epic: Example Epic

- [ ] **P1** T1 [S] Short description of a high-priority task.
- [ ] **P3** T2 [M] Short description of a medium-priority task. [Depends on T1]
  - [ ] T2.1 Short description of subtask.
- [x] ✅ T3 [S] Example of a completed task.
