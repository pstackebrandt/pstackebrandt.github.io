# AI Rules Organization Strategy

## Purpose

This document captures ideas and decisions about organizing AI coding assistant
rules for parallel use of Cursor AI agents and Claude Code in this project. It
documents the unified approach to ensure both tools can work effectively with
shared project-specific rules.

For definitions and general characteristics of Cursor AI, Claude Code, and Cursor
CLI, see [AI Tools Terminology](./ai-tools-terminology.md).

**Note:** This file was written by Composer (AI assistant from Cursor) during a
discussion about unifying AI rules configuration. It serves as a reference for
future decisions and implementation.

## Table of Contents

- [Current Setup](#current-setup)
- [Decisions Made](#decisions-made)
- [Principle: Enforceable Configs as Source of Truth](#principle-enforceable-configs-as-source-of-truth)
- [Architecture Overview](#architecture-overview)
- [Potential Redundancy Check](#potential-redundancy-check)
- [File Structure](#file-structure)
- [Benefits](#benefits)
- [Future Considerations](#future-considerations)

## Current Setup

This project uses both Cursor AI and Claude Code for AI-assisted development.
See [AI Tools Terminology](./ai-tools-terminology.md) for tool definitions and
characteristics.

**How this project uses these tools:**
- **Cursor AI**: Configured via `.cursor/rules/*.mdc` files in this project
- **Claude Code**: Configured via `CLAUDE.md` in project root

## Decisions Made

### 1. Primary Configuration File

**`CLAUDE.md`** will serve as the main project-specific rules file:
- Contains frequently used, project-specific, and volatile information
- Used directly by Claude Code
- Will be referenced by Cursor AI agents
- Acts as the central hub for project-wide guidelines

### 2. Rules Folder Structure

**`.cursor/rules/*.mdc`** files remain in place:
- Used for granular, file-specific rules with scoping capabilities
- YAML frontmatter provides glob patterns and application rules
- `CLAUDE.md` can reference these files when relevant
- Both tools can read these files (Cursor uses frontmatter, Claude ignores it)

### 3. Compatibility Strategy

This project leverages the fact that both tools can read the same `.mdc` files
(see [AI Tools Terminology](./ai-tools-terminology.md) for general compatibility
details). The project-specific approach:

- **No symlinks or complex setup required**: Both tools read the same rule files
  directly
- **Single source of truth**: Technical rules in `.cursor/rules/` work for both
  tools
- **Project-wide rules**: `CLAUDE.md` serves as the central hub for
  project-specific guidelines

## Principle: Enforceable Configs as Source of Truth

This project follows a "single source of truth" principle for code standards:

- **Enforceable configs** ([.eslintrc.js](../../.eslintrc.js),
  [.markdownlint.jsonc](../../.markdownlint.jsonc)) define rules that are
  automatically checked
- **AI instruction files** provide context and workflow guidance to help AI
  tools understand project conventions
- **Best practice**: Avoid duplicating what can be enforced by linting tools

Both Cursor AI and Claude Code can read linting errors and fix violations. The
AI instruction files complement enforceable configs - they don't replace them.
When linting tools enforce a rule (like import ordering or Markdown formatting),
AI instruction files should provide context about WHY the rule exists, not
duplicate HOW it's enforced.

**Important**: This is a guiding principle for best practices, not a requirement
to change existing files immediately. See [Potential Redundancy
Check](#potential-redundancy-check) below for guidance on reviewing current
files.

## Architecture Overview

```
Project Root
├── CLAUDE.md                    # Central project rules (Claude Code + Cursor AI)
└── .cursor/
    └── rules/
        ├── import-order-rules.mdc      # Scoped: JS/TS files only
        ├── import-groups-spacing.mdc   # Scoped: JS/TS files only
        ├── markdown-guidelines.mdc     # Scoped: Markdown files
        ├── powershell-scripting.mdc    # Scoped: PowerShell scripts
        └── ...                        # Other scoped rules
```

### Rule Types

**Project-Wide Rules** (`CLAUDE.md`):
- Critical project rules (e.g., "NEVER manually edit version")
- Key commands and workflows
- Component structure conventions
- Project-specific gotchas
- Tech stack information

**Scoped Rules** (`.cursor/rules/*.mdc`):
- File-type specific rules (import ordering for JS/TS)
- Language-specific guidelines (PowerShell, Bash)
- Format-specific rules (Markdown formatting)
- Tool-specific conventions (Git, testing)

## Potential Redundancy Check

Some `.cursor/rules/*.mdc` files may contain content that duplicates enforceable
linting configurations. These files should be reviewed individually to identify
and potentially remove redundant portions while preserving unique guidance.

**Files to review for potential redundancy:**

1. **[import-order-rules.mdc](../../.cursor/rules/import-order-rules.mdc)** vs
   [.eslintrc.js:61-71](../../.eslintrc.js#L61-L71)
   - ESLint already enforces import ordering with the `import/order` rule
   - Check if the .mdc file duplicates these rules or adds valuable context

2. **[import-groups-spacing.mdc](../../.cursor/rules/import-groups-spacing.mdc)**
   vs [.eslintrc.js](../../.eslintrc.js)
   - ESLint's `import/order` includes `newlines-between` configuration
   - Verify if additional guidance beyond linting rules exists

3. **[markdown-guidelines.mdc](../../.cursor/rules/markdown-guidelines.mdc)** vs
   [.markdownlint.jsonc](../../.markdownlint.jsonc)
   - Markdownlint configuration defines all Markdown formatting rules
   - Determine if the Markdown guidelines provide context beyond rule definitions

**Clarification**: These files MAY contain redundant content, but each should be
reviewed individually. They may include valuable non-redundant content such as:
- Rationale for why specific rules are enforced
- Examples of correct usage
- Project-specific context not captured in linting configs
- Workflow guidance related to the rules

**Future Action**: A separate task should review each file and remove only the
portions that duplicate enforceable configs, while preserving unique guidance
and context.

## File Structure

### CLAUDE.md
- **Location**: Project root
- **Format**: Markdown (no frontmatter)
- **Purpose**: Project-wide, frequently accessed rules
- **Used by**: Claude Code (primary), Cursor AI (reference)

### .cursor/rules/*.mdc
- **Location**: `.cursor/rules/` directory
- **Format**: Markdown with YAML frontmatter
- **Purpose**: Scoped, file-specific rules
- **Used by**: Cursor AI (with scoping), Claude Code (content only)

## Benefits

1. **Single Source of Truth**: `CLAUDE.md` centralizes project-specific rules
2. **Granular Control**: `.cursor/rules/` provides file-specific scoping
3. **Tool Compatibility**: Both tools can use the same rule files
4. **No Complex Setup**: No symlinks or duplicate maintenance required
5. **Clear Separation**: Project-wide vs. scoped technical rules
6. **Enforceable Backstop**: Linting catches violations even if AI tools ignore
   rules, ensuring code quality
7. **Future-Proof**: Compatible with emerging standards (AGENTS.md)

## Future Considerations

### Known Tool Limitations

Different AI tools have varying levels of rule adherence:

- **Cursor AI**: Community reports occasional rule adherence issues - the tool
  sometimes ignores rules defined in `.cursor/rules/` files. This is a known
  limitation documented in user feedback.
- **Claude Code**: More consistent rule following based on user reports - the
  tool reliably follows instructions in `CLAUDE.md`.
- **Mitigation Strategy**: Rely on enforceable configs (ESLint, markdownlint) as
  a backstop to ensure code quality regardless of AI tool behavior.

This variability in AI tool reliability reinforces the importance of using
enforceable linting configurations as the authoritative source of truth for code
standards.

### Potential Enhancements

1. **AGENTS.md Migration**: Consider migrating to `AGENTS.md` as an open
   standard if it gains broader adoption
2. **Rule References**: Update `CLAUDE.md` to explicitly reference relevant
   `.cursor/rules/` files
3. **Cursor AI Configuration**: Ensure Cursor AI is configured to reference
   `CLAUDE.md` when needed
4. **Redundancy Review**: Review each `.cursor/rules/*.mdc` file to identify and
   remove redundant portions that duplicate enforceable configs (see [Potential
   Redundancy Check](#potential-redundancy-check))
5. **Documentation**: Keep this file updated as the strategy evolves

### Integration Points

- Cursor AI agents can reference `CLAUDE.md` for project context
- `.cursor/rules/` files can be mentioned in `CLAUDE.md` when relevant
- Both tools maintain their preferred formats while sharing content

## Related Documentation

- [AI Tools Terminology](./ai-tools-terminology.md) - Project-independent
  reference distinguishing Cursor AI, Claude Code, and Cursor CLI
- [Frontmatter Rules](./frontmatter-rules.md) - How YAML frontmatter works
  with both tools
- [CLAUDE.md](../../CLAUDE.md) - The actual project rules file
- [.cursor/rules/](../../.cursor/rules/) - Scoped rule files
