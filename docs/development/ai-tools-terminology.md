# AI Coding Tools Terminology

## Purpose

This document provides a project-independent reference that clarifies the
terminology used when discussing different AI coding assistants and tools. It
distinguishes between Cursor IDE's agent system, Anthropic's Claude Code CLI,
and Cursor's CLI tool to avoid confusion across different projects and contexts.

This is a general reference document and does not contain project-specific
configuration details or strategies.

## Table of Contents

- [Terminology Definitions](#terminology-definitions)
- [Tool Categories](#tool-categories)
- [Configuration Reliability](#configuration-reliability)
- [Use Cases](#use-cases)
- [Related Documentation](#related-documentation)

## Terminology Definitions

### Cursor AI

**Cursor AI** refers to working in Cursor IDE and starting an Agent that works
as configured by the makers of Cursor IDE.

**Key characteristics:**
- Runs within Cursor IDE (VS Code-based editor)
- Agent system provided by Cursor
- Model-agnostic: Can use various AI models (Composer, Claude Sonnet, GPT,
  Gemini, etc.)
- Configured via `.cursor/rules/*.mdc` files with YAML frontmatter
- Interactive, IDE-integrated experience
- Supports scoped rules with glob patterns and `alwaysApply` flags
- Rules can be automatically attached based on file patterns

**Important note:** The specific AI model being used (Composer, Claude Sonnet,
GPT, etc.) is not relevant when referring to "Cursor AI" - it's about the
Cursor IDE agent system itself, regardless of which underlying model powers it.

### Claude Code

**Claude Code** refers to the CLI tool by Anthropic that can run as an
extension in Cursor IDE or in any terminal window (within or outside the IDE).

**Key characteristics:**
- Created and maintained by Anthropic
- Command-line interface (CLI)
- Can run as VS Code/Cursor extension
- Can run standalone in any terminal
- Uses `CLAUDE.md` file in project root for configuration
- Simple Markdown format (no frontmatter)
- Reads `.cursor/rules/*.mdc` files but ignores YAML frontmatter *(note: this
  behavior is inferred from architecture but not explicitly documented by
  Anthropic - needs verification)*
- Uses Anthropic's Claude models

### Cursor CLI

**Cursor CLI** is Cursor's command-line tool that provides the same AI coding
capabilities as Cursor AI Agents, but runs from the terminal instead of the
IDE.

**Key characteristics:**
- Created by Cursor (same company as Cursor IDE)
- Terminal-based version of Cursor AI Agents
- Uses same underlying technology as Cursor AI
- Works in any environment (Neovim, JetBrains, or any terminal)
- Better performance (no IDE overhead)
- Can run multiple agents in parallel
- Uses same configuration as Cursor AI (`.cursor/rules/*.mdc` files with
  frontmatter)
- Supports headless/automated workflows
- Model-agnostic (can use various AI models)

## Tool Categories

### By Creator

**Cursor (Cursor IDE company):**
- Cursor AI (IDE-based agents)
- Cursor CLI (terminal-based agents)

**Anthropic:**
- Claude Code (CLI tool)

### By Interface

**IDE-Integrated:**
- Cursor AI (native to Cursor IDE)
- Claude Code (as extension in Cursor/VS Code)

**Terminal-Based:**
- Claude Code (standalone CLI)
- Cursor CLI (standalone CLI)

### By Configuration System

**Uses `.cursor/rules/*.mdc` with YAML frontmatter:**
- Cursor AI
- Cursor CLI

**Uses `CLAUDE.md` (primary) + reads `.mdc` files (ignores frontmatter):**
- Claude Code

## Configuration Reliability

AI coding tools vary in how consistently they follow configuration rules. Based
on community feedback and user reports:

### Claude Code

- **Rule Adherence**: Reported to follow `CLAUDE.md` rules consistently
- **User Feedback**: "Configuration actually sticks" - users report reliable
  behavior when instructions are provided
- **Reliability**: High consistency in following project guidelines
- **Documentation**: Official Anthropic documentation emphasizes that `CLAUDE.md`
  is automatically pulled into context

### Cursor AI

- **Known Issue**: Community reports that Cursor AI sometimes ignores rules
  defined in `.cursor/rules/` files
- **User Frustration**: This is a common complaint in user feedback and
  community discussions
- **Variability**: Rule adherence can be inconsistent, even with properly
  configured `.mdc` files
- **Mitigation**: The new `.cursor/rules/*.mdc` format (2026) with frontmatter
  may improve reliability compared to legacy `.cursorrules`

### Recommendation: Use Enforceable Linting as Backstop

Given the variability in AI tool rule adherence:

- **Primary Defense**: Use enforceable linting configs (ESLint, markdownlint,
  Prettier) as the authoritative source of truth
- **AI Rules as Guidance**: Treat AI instruction files as helpful context and
  workflow guidance, not as enforcement mechanisms
- **Verification**: Both tools can read and fix linting errors, providing a
  reliable fallback regardless of rule adherence issues
- **Best Practice**: See [ai-rules-organization.md](./ai-rules-organization.md)
  for project-specific strategies on combining enforceable configs with AI
  instruction files

## Use Cases

### When to Use Cursor AI

- Interactive coding within Cursor IDE
- Need IDE integration (file navigation, code completion, etc.)
- Working with multiple files simultaneously
- Prefer visual, IDE-based workflow
- Want automatic rule scoping based on file patterns

**Reliability Note**: Be aware that Cursor AI may occasionally ignore
`.cursor/rules/` configurations. Use enforceable linting as a backstop for
critical code standards.

### When to Use Claude Code

- Working in terminal-focused environments
- Need Anthropic's specific Claude model capabilities
- Want to use same tool across different IDEs
- Prefer simple Markdown configuration (`CLAUDE.md`)
- Need a tool that works consistently across different editors
- Value reliable rule adherence and consistent behavior

**Reliability Note**: Claude Code is reported to follow `CLAUDE.md` rules
consistently, making it a good choice when reliable configuration adherence is
important.

### When to Use Cursor CLI

- Automation and scripting workflows
- CI/CD pipeline integration
- Running multiple agents in parallel
- Working in Neovim, JetBrains, or other editors
- Need better performance (avoiding IDE overhead)
- Headless/background processing
- Want Cursor's agent capabilities without the IDE

**Reliability Note**: As this uses the same underlying technology as Cursor AI,
it may share similar rule adherence characteristics. Consider using enforceable
linting in automated workflows.

## Related Documentation

For project-specific configuration strategies and how these tools work together
in a specific project, see project-specific documentation files such as:
- `ai-rules-organization.md` - Project-specific rule organization strategies
- `frontmatter-rules.md` - How YAML frontmatter works with different tools
