# Interface Library

Interface Library is a framework-neutral design foundation for content-led
interfaces. It turns semantic design decisions into portable tokens, CSS
recipes, composable examples, and public guidance.

Package publication remains disabled until the release contents are approved.

## What it demonstrates

- DTCG design tokens transformed into CSS custom properties and flat JSON
- Cascade-layered foundations, responsive layouts, and component recipes
- Accessible form, status, navigation, and content patterns
- Isolated states and complete compositions in Storybook
- A public Starlight knowledge base covering architecture and usage decisions
- Neutral fixtures with no organization, product, customer, or source identity

## Workspace

- `packages/tokens`: DTCG design tokens and generated CSS custom properties
- `packages/css`: foundations, layouts, and component recipes
- `packages/fixtures`: neutral example copy shared by public examples
- `apps/storybook`: component catalog and design review surface
- `apps/docs`: Starlight documentation site

## Pattern set

| Area | Patterns |
| --- | --- |
| Layout | Container, Stack, SplitLayout, BorderGrid, Divider |
| Actions | ActionLink, Button, CallToAction |
| Content | SectionHeader, ContentCard, IndexList |
| Forms | FormField, Checkbox |
| State and navigation | StatusMessage, InlineNav |

The Storybook `Examples` section combines these primitives into a content
overview and a complete form flow without adding service-specific behavior.

## Architecture

```text
DTCG tokens ──→ generated CSS / JSON
      │
      └───────→ CSS foundations / layouts / recipes
                           │
                           ├──→ Storybook states and compositions
                           └──→ public documentation and guidance
```

## Commands

```sh
corepack pnpm install
corepack pnpm build:tokens
corepack pnpm storybook
corepack pnpm docs
corepack pnpm check
corepack pnpm test
corepack pnpm build
```

## Public-content policy

Examples use short neutral state text only. Do not add organization names,
product names, logos, real contact details, customer data, screenshots, or
source-specific motion studies.
