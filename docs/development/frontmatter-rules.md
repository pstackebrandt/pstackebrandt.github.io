# YAML Frontmatter in AI Rules Files

## Purpose

This document explains how YAML frontmatter works in `.mdc` rule files and how
different AI tools (Cursor AI and Claude Code) handle it. Understanding this
allows you to write rules that work with both tools simultaneously.

## Table of Contents

- [What is YAML Frontmatter?](#what-is-yaml-frontmatter)
- [How Cursor AI Uses Frontmatter](#how-cursor-ai-uses-frontmatter)
- [How Claude Code Handles Frontmatter](#how-claude-code-handles-frontmatter)
- [Writing Compatible Rules](#writing-compatible-rules)
- [Example](#example)

## What is YAML Frontmatter?

YAML frontmatter is metadata placed at the beginning of a markdown file,
enclosed by `---` delimiters. It contains configuration information that tools
can read and use to control how the file is processed.

Example:

```markdown
---
globs: "**/*.js", "**/*.jsx"
alwaysApply: false
---

Your rule content here...
```

The frontmatter section (between the `---` lines) contains key-value pairs in
YAML format, while everything after the closing `---` is the actual content.

## How Cursor AI Uses Frontmatter

Cursor AI reads and processes the YAML frontmatter to:

- **Scope rules to specific files**: The `globs` field specifies file patterns
  (e.g., `"**/*.js"` for all JavaScript files)
- **Control rule application**: The `alwaysApply` field determines if the rule
  is automatically applied (`true`) or only when relevant (`false`)
- **Add metadata**: Fields like `description` provide context about the rule's
  purpose

Cursor uses this metadata to intelligently apply rules only when working with
matching files.

## How Claude Code Handles Frontmatter

Claude Code ignores the YAML frontmatter section entirely. It treats the `---`
delimiters and everything between them as regular markdown content (which
effectively makes it invisible since it's just horizontal rules).

Claude Code reads only the markdown content that comes after the frontmatter
section.

## Writing Compatible Rules

Because Claude Code ignores frontmatter while Cursor AI uses it, you can write
a single `.mdc` file that works with both tools:

1. **Add YAML frontmatter** for Cursor AI's scoping and metadata
2. **Write markdown content** below the frontmatter that both tools can read
3. **Cursor AI** will use the frontmatter to scope the rule appropriately
4. **Claude Code** will read the markdown content, ignoring the frontmatter

This allows you to maintain one set of rule files that both tools can use
effectively.

## Example

Here's a real example from this project's `.cursor/rules/import-order-rules.mdc`:

```markdown
---
globs: "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"
alwaysApply: false
---

Import Ordering Rules
=====================

For proper linting compliance, imports must follow this specific ordering
pattern:

Order by Import Group
---------------------
1. External/npm modules (React, react-router-dom, etc.)
2. Blank line
3. Internal project modules (components, utilities)
...
```

**How Cursor AI sees it:**
- Reads the `globs` field and only applies this rule when editing `.js`,
  `.jsx`, `.ts`, or `.tsx` files
- Uses `alwaysApply: false` to apply it only when relevant

**How Claude Code sees it:**
- Ignores everything between the `---` lines
- Reads and uses the "Import Ordering Rules" content below

Both tools get the rule content they need, with Cursor AI getting additional
scoping capabilities.
