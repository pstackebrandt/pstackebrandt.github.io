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
- [Architecture Overview](#architecture-overview)
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
6. **Future-Proof**: Compatible with emerging standards (AGENTS.md)

## Future Considerations

### Potential Enhancements

1. **AGENTS.md Migration**: Consider migrating to `AGENTS.md` as an open
   standard if it gains broader adoption
2. **Rule References**: Update `CLAUDE.md` to explicitly reference relevant
   `.cursor/rules/` files
3. **Cursor AI Configuration**: Ensure Cursor AI is configured to reference
   `CLAUDE.md` when needed
4. **Documentation**: Keep this file updated as the strategy evolves

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
